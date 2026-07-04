/* ============================================================
   LATINVM — Motor de morfologia
   Declina substantivos/adjetivos do vocabulário, analisa formas,
   gera drills adaptativos e alimenta o Appendix Grammaticus.
   ============================================================ */

const CASES = ["nominativo", "acusativo", "genitivo", "dativo", "ablativo"];
const CASE_ABBR = ["nom.", "acus.", "gen.", "dat.", "abl."];

/* ---------- terminações nominais [sg x5, pl x5] na ordem nom/acus/gen/dat/abl ---------- */
const NOUN_ENDINGS = {
  d1:  { sg: ["a", "am", "ae", "ae", "ā"], pl: ["ae", "ās", "ārum", "īs", "īs"] },
  d2m: { sg: ["us", "um", "ī", "ō", "ō"], pl: ["ī", "ōs", "ōrum", "īs", "īs"] },
  d2r: { sg: [null, "um", "ī", "ō", "ō"], pl: ["ī", "ōs", "ōrum", "īs", "īs"] }, // puer, liber (nom sg = lema)
  d2n: { sg: ["um", "um", "ī", "ō", "ō"], pl: ["a", "a", "ōrum", "īs", "īs"] },
  d3:  { sg: [null, "em", "is", "ī", "e"], pl: ["ēs", "ēs", "um", "ibus", "ibus"] },
  d3i: { sg: [null, "em", "is", "ī", "e"], pl: ["ēs", "ēs", "ium", "ibus", "ibus"] },
  d3n: { sg: [null, null, "is", "ī", "e"], pl: ["a", "a", "um", "ibus", "ibus"] },
  d3ni:{ sg: [null, null, "is", "ī", "ī"], pl: ["ia", "ia", "ium", "ibus", "ibus"] }, // mare, animal
  d4:  { sg: ["us", "um", "ūs", "uī", "ū"], pl: ["ūs", "ūs", "uum", "ibus", "ibus"] },
  d4n: { sg: ["ū", "ū", "ūs", "ū", "ū"], pl: ["ua", "ua", "uum", "ibus", "ibus"] },
  d5:  { sg: ["ēs", "em", "ēī", "ēī", "ē"], pl: ["ēs", "ēs", "ērum", "ēbus", "ēbus"] }
};
const DECL_LABEL = { d1: "1ª declinação", d2m: "2ª declinação", d2r: "2ª declinação (-er)", d2n: "2ª declinação (neutro)", d3: "3ª declinação", d3i: "3ª declinação (tema em -i)", d3n: "3ª declinação (neutro)", d3ni: "3ª declinação (neutro em -i)", d4: "4ª declinação", d4n: "4ª declinação (neutro)", d5: "5ª declinação" };

/* genitivos irregulares / temas da 3ª que a heurística não acerta */
const GEN3 = {
  "homō": "homin", "nōmen": "nōmin", "praenōmen": "praenōmin", "cognōmen": "cognōmin",
  "flūmen": "flūmin", "sanguis": "sanguin", "pater": "patr", "māter": "mātr",
  "frāter": "frātr", "venter": "ventr", "mēnsis": "mēns", "sōl": "sōl",
  "nox": "noct", "lūx": "lūc", "vōx": "vōc", "lēx": "lēg", "crux": "cruc",
  "dēns": "dent", "mōns": "mont", "frōns": "front", "gēns": "gent",
  "pars": "part", "urbs": "urb", "hiems": "hiem", "aestās": "aestāt",
  "tempestās": "tempestāt", "servitūs": "servitūt", "mīles": "mīlit",
  "eques": "equit", "pedes": "pedit", "pēs": "ped", "senex": "sen",
  "iter": "itiner", "caput": "capit", "corpus": "corpor", "pectus": "pector",
  "tempus": "tempor", "opus": "oper", "mūnus": "mūner", "scelus": "sceler",
  "vulnus": "vulner", "genus": "gener", "latus": "later", "onus": "oner",
  "cor": "cord", "ōs": "ōr", "os": "oss", "crūs": "crūr", "iūs": "iūr",
  "mōs": "mōr", "flōs": "flōr", "vīs": "v", "aer": "āer", "āēr": "āer",
  "iuvenis": "iuven", "canis": "can", "pānis": "pān", "mare": "mar",
  "animal": "animāl", "vēr": "vēr", "cōnsonāns": "cōnsonant",
  "tabellārius": null, "dux": "duc", "coniūnx": "coniug", "rēx": "rēg",
  "pāx": "pāc", "fēlēs": "fēl", "pulmō": "pulmōn", "leō": "leōn",
  "praedō": "praedōn", "pōtiō": "pōtiōn", "nātiō": "nātiōn", "ōrātiō": "ōrātiōn",
  "sermō": "sermōn", "rūmor": "rūmōr", "fidēs": null, "mercēs": "mercēd",
  "laus": "laud", "fraus": "fraud", "pecus": "pecor", "vetus": "veter",
  "hospes": "hospit", "comes": "comit", "custōs": "custōd", "virtūs": "virtūt",
  "salūs": "salūt", "quiēs": "quiēt", "aetās": "aetāt", "cīvitās": "cīvitāt",
  "lībertās": "lībertāt", "tranquillitās": "tranquillitāt", "fulgur": "fulgur",
  "labor": "labōr", "amor": "amōr", "clāmor": "clāmōr", "timor": "timōr",
  "dolor": "dolōr", "color": "colōr", "arbor": "arbor", "soror": "sorōr",
  "uxor": "uxōr", "victor": "victōr", "gubernātor": "gubernātōr",
  "imperātor": "imperātōr", "mercātor": "mercātōr", "pāstor": "pāstōr",
  "tonitrus": null, "anima": null
};
/* 3ª declinação: gen. pl. -um mesmo sendo parissílabo */
const NO_IUM = new Set(["canis", "iuvenis", "pater", "māter", "frāter", "senex", "mēnsis"]);
/* neutros -i da 3ª */
const NEUT_I = new Set(["mare", "animal"]);

const mNorm = s => (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/* ---------- classificação de um item do vocabulário ---------- */
function nounClass(v) {
  const la = v.la.split(/[ ,(/]/)[0];
  const f = v.forms || "";
  if (/v\.|adv|conj|prep|interj|indecl|num\.|pron|loc\./.test(f)) return null;
  const g = /(\bf\.?\b)/.test(f) ? "f" : /(\bn\.?\b)/.test(f) ? "n" : /(\bm\.?\b)/.test(f) ? "m" : null;
  if (!g) return null;
  const plOnly = /pl\./.test(f);

  // 5ª: -ēī / -eī / "reī f."
  if ((f.includes("-ēī") || f.includes("-eī") || /(ēī|eī)/.test(f)) && la.endsWith("ēs"))
    return { la, decl: "d5", stem: la.replace(/ēs$/, ""), g, plOnly };
  // 4ª: -ūs
  if (f.includes("-ūs")) {
    if (g === "n") return { la, decl: "d4n", stem: la.replace(/ū$/, ""), g, plOnly };
    return { la, decl: "d4", stem: la.replace(/us$/, ""), g, plOnly };
  }
  // 1ª: -ae
  if (f.includes("-ae") && la.endsWith("a")) return { la, decl: "d1", stem: la.slice(0, -1), g, plOnly };
  if (f.includes("-ārum")) return { la, decl: "d1", stem: la.replace(/ae$/, ""), g, plOnly: true };
  // 2ª  (atenção: \b não funciona após vogal com macron — usar includes/regex unicode)
  if (f.includes("-ī") || f.includes("-ōrum") || /^[^\s-]*[a-zāēōū]rī(\s|$)/.test(f) || /^[^\s-]+ī(\s|$)/.test(f)) {
    if (g === "n") {
      const stem = la.endsWith("um") ? la.slice(0, -2) : la.replace(/a$/, "");
      return { la, decl: "d2n", stem, g, plOnly: plOnly || /-ōrum/.test(f) && la.endsWith("a") };
    }
    if (la.endsWith("us")) return { la, decl: "d2m", stem: la.slice(0, -2), g, plOnly };
    if (la.endsWith("ī")) return { la, decl: "d2m", stem: la.slice(0, -1), g, plOnly: true }; // līberī
    // -er / -ir: genitivo no forms (ex.: "librī m." / "puerī m." / "-brī m.")
    const m = f.match(/^-?([a-zāēīōūȳ]+)ī(\s|$|\.)/);
    let stem = la;
    if (m) {
      const tok = m[1];
      if (f.startsWith("-")) { // "-chra" style: substitui o fim
        stem = la.slice(0, la.length - (tok.length - 1)) ; // aproximação
        // melhor: acha overlap
        stem = mergeStem(la, tok);
      } else stem = tok;
    }
    return { la, decl: "d2r", stem, g, plOnly };
  }
  // 3ª
  if (/-is\b|-.*is\b|is f|is m|tis|dis|nis|ris|bis/.test(f) || GEN3[la] !== undefined) {
    let stem = GEN3[la];
    if (stem === null) return null;
    if (!stem) {
      const m = f.match(/-([a-zāēīōūȳ]*)is\b/);
      if (m && m[1]) stem = mergeStem(la, m[1]);
      else if (la.endsWith("is") || la.endsWith("ēs")) stem = la.slice(0, -2);
      else return null;
    }
    if (g === "n") {
      const decl = NEUT_I.has(la) ? "d3ni" : "d3n";
      return { la, decl, stem, g, plOnly };
    }
    // tema em -i: parissílabo em -is/-ēs, ou tema com 2 consoantes finais
    const pari = (la.endsWith("is") || la.endsWith("ēs")) && !NO_IUM.has(la);
    const twoCons = /[bcdfgklmnprstvx]{2}$/.test(mNorm(stem)) && !NO_IUM.has(la);
    return { la, decl: (pari || twoCons) ? "d3i" : "d3", stem, g, plOnly };
  }
  return null;
}
/* junta lema + pedaço do genitivo: pāstor + ōris → pāstōr- */
function mergeStem(la, genPart) {
  const nLa = mNorm(la), nGp = mNorm(genPart);
  for (let k = Math.min(nGp.length, nLa.length); k > 0; k--) {
    if (nLa.endsWith(nGp.slice(0, k))) return la.slice(0, la.length - k) + genPart;
  }
  return la.replace(/[aeiouāēīōū]?s?$/, "") + genPart;
}

/* adjetivos: retorna {type:'adj12'|'adj3', stem} */
function adjClass(v) {
  const la = v.la.split(/[ ,(/]/)[0];
  const f = v.forms || "";
  if (/^-a -um/.test(f)) return { la, type: "adj12", stem: la.replace(/us$/, "") };
  const mEr = f.match(/^-([a-zāēīōūȳ]+)ra -[a-zāēīōūȳ]+um/); // pulcher -chra -chrum
  if (mEr) return { la, type: "adj12", stem: mergeStem(la, mEr[1] + "r") };
  if (/^-e\b/.test(f)) return { la, type: "adj3", stem: la.replace(/is$/, "") };
  if (/^-(ant|ent)is/.test(f)) return { la, type: "adj3x", stem: mergeStem(la, f.match(/^-([a-zāēīōūȳ]+)is/)[1]) };
  return null;
}

/* ---------- gera tabela completa {sg:[5], pl:[5]} ---------- */
function declineNoun(cls) {
  const e = NOUN_ENDINGS[cls.decl];
  const row = n => e[n].map((end, i) => {
    if (end === null) {
      if (i === 0) return cls.la;            // nom sg = lema
      if (i === 1) return cls.la;            // acus sg neutro = nom
      return null;
    }
    return cls.stem + end;
  });
  return { sg: cls.plOnly ? null : row("sg"), pl: row("pl") };
}

/* ---------- análise: dado a forma clicada + entrada do dicionário ---------- */
function analyzeForm(surface, entry) {
  const cls = nounClass(entry) || null;
  const results = [];
  const nSurf = mNorm(surface);
  if (cls) {
    const t = declineNoun(cls);
    ["sg", "pl"].forEach(num => {
      if (!t[num]) return;
      t[num].forEach((form, i) => {
        if (form && mNorm(form) === nSurf)
          results.push({ kind: "noun", cls, case: CASES[i], caseIdx: i, num, table: t });
      });
    });
    if (results.length) return results;
    if (t) return [{ kind: "noun", cls, case: null, num: null, table: t }]; // tabela sem célula exata
  }
  const adj = adjClass(entry);
  if (adj) return [{ kind: "adj", adj }];
  // verbo: análise por terminação (heurística)
  if (/^v\.|v\. |dep/.test(entry.forms || "") || entry.forms === "v.") {
    const g = verbGuess(nSurf);
    if (g) return [{ kind: "verb", guess: g }];
  }
  // glosas funcionais (formas flexionadas do EXTRA_GLOSS): só padrões verbais fortes
  if (entry.fn) {
    const g = verbGuess(nSurf, true);
    if (g) return [{ kind: "verb", guess: g }];
  }
  return null;
}

/* heurística de terminações verbais → descrição PT */
function verbGuess(n, strict) {
  const R = [
    [/(ba)m$/, "1ª sing. do imperfeito (eu …va)"], [/bās$/, "2ª sing. do imperfeito"],
    [/bat$/, "3ª sing. do imperfeito (ele …va)"], [/bāmus$/, "1ª pl. do imperfeito"],
    [/bant$/, "3ª pl. do imperfeito (eles …vam)"], [/bātur$/, "3ª sing. do imperfeito passivo"],
    [/bantur$/, "3ª pl. do imperfeito passivo"],
    [/bō$/, "1ª sing. do futuro (eu …rei)"], [/bit$/, "3ª sing. do futuro"],
    [/bunt$/, "3ª pl. do futuro"], [/bitur$/, "3ª sing. do futuro passivo"],
    [/(āv|ēv|īv|u|s|x)it$/, "3ª sing. do perfeito (ele …ou)"],
    [/ērunt$/, "3ª pl. do perfeito (eles …aram)"], [/(āv|ēv|īv)ī$/, "1ª sing. do perfeito (eu …ei)"],
    [/istī$/, "2ª sing. do perfeito"], [/erat$/, "3ª sing. do mais-que-perfeito (tinha …)"],
    [/erant$/, "3ª pl. do mais-que-perfeito"], [/erit$/, "3ª sing. do futuro perfeito ou subj. perfeito"],
    [/isse$/, "infinitivo perfeito"], [/ntur$/, "3ª pl. passiva/depoente"],
    [/tur$/, "3ª sing. passiva/depoente"], [/minī$/, "2ª pl. passiva/depoente"],
    [/mur$/, "1ª pl. passiva/depoente"], [/or$/, "1ª sing. passiva/depoente (sou …)"],
    [/ris$/, "2ª sing. passiva/depoente"], [/mus$/, "1ª pl. (nós …mos)"],
    [/tis$/, "2ª pl. (vós …is)"], [/nt$/, "3ª pl. (eles …m)"],
    [/(āre|ēre|ere|īre|ārī|ērī|īrī|ī)$/, "infinitivo"],
    [/ns$/, "particípio presente (que …)"], [/ntem$/, "particípio presente (acus.)"],
    [/ndum$/, "gerúndio/gerundivo"], [/ndī$/, "gerúndio (gen.)"],
    [/(t|s)us$/, "particípio perfeito passivo (…ado/ido)"],
    [/ūrus$/, "particípio futuro (que vai …)"],
    [/t$/, "3ª sing. do presente (ele …)"], [/s$/, "2ª sing. do presente (tu …s)"], [/ō$/, "1ª sing. do presente (eu …o)"]
  ];
  const list = strict ? R.slice(0, R.length - 3) : R;
  for (const [re, desc] of list) if (re.test(n)) return desc;
  return null;
}

/* ============================================================
   CONJUGAÇÕES — modelos completos (gerados)
   ============================================================ */
const VERB_MODELS = [
  { id: "am", inf: "amāre", pt: "amar", conj: "1ª (-āre)", pres: "am", perf: "amāv", sup: "amāt", tv: "ā" },
  { id: "mon", inf: "monēre", pt: "advertir", conj: "2ª (-ēre)", pres: "mon", perf: "monu", sup: "monit", tv: "ē" },
  { id: "leg", inf: "legere", pt: "ler", conj: "3ª (-ere)", pres: "leg", perf: "lēg", sup: "lēct", tv: "e" },
  { id: "aud", inf: "audīre", pt: "ouvir", conj: "4ª (-īre)", pres: "aud", perf: "audīv", sup: "audīt", tv: "ī" }
];
const PERSONS = ["ego", "tū", "is/ea", "nōs", "vōs", "iī/eae"];
function conjTable(m) {
  const p = m.pres, pf = m.perf, tv = m.tv;
  const third = m.id === "leg", fourth = m.id === "aud";
  const futStem = (third || fourth) ? null : tv + "b";
  const t = {};
  t["presente"] = third ? [p+"ō", p+"is", p+"it", p+"imus", p+"itis", p+"unt"]
    : fourth ? [p+"iō", p+"īs", p+"it", p+"īmus", p+"ītis", p+"iunt"]
    : [m.id==="am" ? p+"ō" : p+"eō", p+tv+"s", p+tv.replace("ē","e").replace("ā","a")+"t", p+tv+"mus", p+tv+"tis", m.id==="am" ? p+"ant" : p+"ent"];
  const impStem = third ? p+"ēb" : fourth ? p+"iēb" : p+tv+"b";
  t["imperfeito"] = ["am","ās","at","āmus","ātis","ant"].map(e=>impStem+e);
  t["futuro"] = (third||fourth)
    ? ["am","ēs","et","ēmus","ētis","ent"].map(e=>(fourth?p+"i":p)+e)
    : ["ō","is","it","imus","itis","unt"].map(e=>futStem+e);
  t["perfeito"] = ["ī","istī","it","imus","istis","ērunt"].map(e=>pf+e);
  t["mais-que-perfeito"] = ["eram","erās","erat","erāmus","erātis","erant"].map(e=>pf+e);
  t["futuro perfeito"] = ["erō","eris","erit","erimus","eritis","erint"].map(e=>pf+e);
  t["subj. presente"] = third ? ["am","ās","at","āmus","ātis","ant"].map(e=>p+e)
    : fourth ? ["am","ās","at","āmus","ātis","ant"].map(e=>p+"i"+e)
    : m.id==="am" ? ["em","ēs","et","ēmus","ētis","ent"].map(e=>p+e)
    : ["eam","eās","eat","eāmus","eātis","eant"].map(e=>p+e);
  const infB = m.inf.slice(0, -1); // amār-
  t["subj. imperfeito"] = [m.inf+"m", infB+"ēs", m.inf+"t", infB+"ēmus", infB+"ētis", m.inf+"nt"];
  t["subj. perfeito"] = ["erim","erīs","erit","erīmus","erītis","erint"].map(e=>pf+e);
  t["subj. mais-que-perf."] = ["issem","issēs","isset","issēmus","issētis","issent"].map(e=>pf+e);
  return t;
}
const ESSE_TABLE = {
  "presente": ["sum","es","est","sumus","estis","sunt"],
  "imperfeito": ["eram","erās","erat","erāmus","erātis","erant"],
  "futuro": ["erō","eris","erit","erimus","eritis","erunt"],
  "perfeito": ["fuī","fuistī","fuit","fuimus","fuistis","fuērunt"],
  "mais-que-perfeito": ["fueram","fuerās","fuerat","fuerāmus","fuerātis","fuerant"],
  "futuro perfeito": ["fuerō","fueris","fuerit","fuerimus","fueritis","fuerint"],
  "subj. presente": ["sim","sīs","sit","sīmus","sītis","sint"],
  "subj. imperfeito": ["essem","essēs","esset","essēmus","essētis","essent"]
};

/* ============================================================
   DRILL adaptativo (Declinā!)
   ============================================================ */
function gramKey(type, a, b) { return `${type}|${a}|${b}`; }
function gramStat(k) { return (S.gram && S.gram[k]) || { ok: 0, bad: 0 }; }
function gramAcc(k) { const s = gramStat(k); const n = s.ok + s.bad; return n === 0 ? null : s.ok / n; }
function gramRecord(k, ok) {
  if (!S.gram) S.gram = {};
  if (!S.gram[k]) S.gram[k] = { ok: 0, bad: 0 };
  S.gram[k][ok ? "ok" : "bad"]++;
  save();
}

/* pool de substantivos decliáveis já estudados */
function drillNounPool() {
  const learned = new Set(Object.values(S.srs || {}).map(x => x.cap));
  const maxCap = Math.max(2, maxUnlockedCap());
  const pool = [];
  COURSE.forEach(ch => {
    if (ch.num > maxCap) return;
    ch.vocab.forEach(v => {
      const c = nounClass(v);
      if (c && !c.plOnly) pool.push({ v, cls: c });
    });
  });
  return pool;
}

function makeGramExercise() {
  const pool = drillNounPool();
  const useVerb = Math.random() < 0.35 && maxUnlockedCap() >= 15;
  if (useVerb) {
    const m = VERB_MODELS[Math.floor(Math.random() * VERB_MODELS.length)];
    const table = conjTable(m);
    const maxCapN = maxUnlockedCap();
    let tenses = ["presente"];
    if (maxCapN >= 19) tenses.push("imperfeito");
    if (maxCapN >= 20) tenses.push("futuro");
    if (maxCapN >= 21) tenses.push("perfeito");
    if (maxCapN >= 24) tenses.push("mais-que-perfeito");
    if (maxCapN >= 27) tenses.push("subj. presente");
    if (maxCapN >= 28) tenses.push("subj. imperfeito");
    if (maxCapN >= 30) tenses.push("futuro perfeito");
    // pondera pro tempo mais fraco
    tenses.sort((a, b) => (gramAcc(gramKey("v", m.conj, a)) ?? .5) - (gramAcc(gramKey("v", m.conj, b)) ?? .5));
    const tense = Math.random() < .6 ? tenses[0] : tenses[Math.floor(Math.random() * tenses.length)];
    const pi = Math.floor(Math.random() * 6);
    const answer = table[tense][pi];
    const wrong = shuffle(Object.entries(table).flatMap(([tn, fs]) => tn === tense ? fs.filter((f,i)=>i!==pi) : [fs[pi]])).slice(0, 3);
    return { kind: "v", key: gramKey("v", m.conj, tense),
      prompt: `<span class="la">${m.inf}</span> (${m.pt}) — <b>${PERSONS[pi]}</b>, ${tense}:`,
      options: shuffle([answer, ...wrong].filter((x,i,a)=>a.indexOf(x)===i).slice(0,4)), answer };
  }
  const { v, cls } = pool[Math.floor(Math.random() * pool.length)];
  const t = declineNoun(cls);
  // pondera pra célula mais fraca da declinação
  const cells = [];
  ["sg", "pl"].forEach(num => { if (t[num]) t[num].forEach((f, i) => { if (f) cells.push({ num, i, f }); }); });
  cells.sort((a, b) => (gramAcc(gramKey("n", cls.decl, CASES[a.i] + a.num)) ?? .5) - (gramAcc(gramKey("n", cls.decl, CASES[b.i] + b.num)) ?? .5));
  const cell = Math.random() < .6 ? cells[0] : cells[Math.floor(Math.random() * cells.length)];
  const answer = cell.f;
  const wrong = shuffle(cells.filter(c => c.f !== answer).map(c => c.f)).slice(0, 3);
  return { kind: "n", key: gramKey("n", cls.decl, CASES[cell.i] + cell.num),
    prompt: `<span class="la">${v.la}</span> (${v.pt}) — <b>${CASES[cell.i]} ${cell.num === "sg" ? "singular" : "plural"}</b>:`,
    hint: DECL_LABEL[cls.decl],
    options: shuffle([answer, ...wrong].filter((x,i,a)=>a.indexOf(x)===i).slice(0,4)), answer };
}

/* ============================================================
   APPENDIX GRAMMATICVS — os casos e o verbo, explicados
   ============================================================ */
const APPENDIX = [
  { icon: "🎯", title: "Nominativo — quem faz",
    body: `É o caso do <b>sujeito</b>: quem pratica a ação ou sobre quem se afirma algo. Em português é simplesmente "o cachorro late", "Roma é grande".
    <br><span class="ex-la">Pāstor ovēs dūcit.</span> — <b>O pastor</b> conduz as ovelhas.
    <br><span class="ex-la">Rōma magna est.</span> — <b>Roma</b> é grande.
    <br>💡 O predicativo com "ser" também fica no nominativo: <span class="ex-la">Mārcus <b>puer improbus</b> est.</span>` },
  { icon: "📣", title: "Vocativo — chamando alguém",
    body: `O caso de <b>chamar/interpelar</b>. Quase sempre igual ao nominativo — a exceção famosa: palavras em <b>-us</b> viram <b>-e</b>.
    <br><span class="ex-la">Venī, Mārc<b>e</b>! Tacē, serv<b>e</b>!</span>
    <br>💡 É o "ó fulano!" do português antigo. Nomes em -ius fazem -ī: <span class="ex-la">Iūlī!</span>` },
  { icon: "🎬", title: "Acusativo — quem recebe a ação",
    body: `O caso do <b>objeto direto</b>: a coisa afetada pelo verbo.
    <br><span class="ex-la">Iūlia rosam carpit.</span> — Júlia colhe <b>a rosa</b>.
    <br><span class="ex-la">Mārcus Iūli<b>am</b> pulsat.</span> — Marcos bate <b>em Júlia</b>.
    <br>Também indica <b>direção</b> (para onde): <span class="ex-la">Rōm<b>am</b> it</span> = vai <b>a Roma</b>; e acompanha preposições de movimento/extensão: <span class="ex-la">ad, per, ante, post, inter, circum, prope</span>.
    <br>💡 E é o "sujeito" das frases relatadas (AcI): <span class="ex-la">Videō <b>puerum</b> dormīre</span> = vejo que o menino dorme.` },
  { icon: "🔗", title: "Genitivo — o 'de' do português",
    body: `O caso da <b>posse e do pertencimento</b>. Traduza quase sempre por "de".
    <br><span class="ex-la">fīlius Iūli<b>ī</b></span> = o filho <b>de Júlio</b> · <span class="ex-la">māter puell<b>ae</b></span> = a mãe <b>da menina</b>
    <br><span class="ex-la">numerus servōr<b>um</b></span> = o número <b>dos escravos</b>
    <br>💡 Alguns adjetivos e verbos pedem genitivo: <span class="ex-la">plēnus lacrimār<b>um</b></span> (cheio <b>de</b> lágrimas), <span class="ex-la">glōriae cupidus</span> (ávido <b>de</b> glória).` },
  { icon: "🎁", title: "Dativo — para quem",
    body: `O caso do <b>objeto indireto</b>: o destinatário, o beneficiado. Traduza por "a/para alguém".
    <br><span class="ex-la">Iūlius fīli<b>ae</b> mālum dat.</span> — Júlio dá uma maçã <b>à filha</b>.
    <br>Verbos que pedem dativo: <span class="ex-la">dare, dīcere, ostendere, pārēre</span> (obedecer <b>a</b>), <span class="ex-la">imperāre</span> (mandar <b>em</b>), <span class="ex-la">nocēre</span> (fazer mal <b>a</b>).
    <br>Usos especiais que você vai ver direto:
    <br>• <b>dativo de posse</b>: <span class="ex-la">Mārc<b>ō</b> ūna soror est</span> = Marcos <b>tem</b> uma irmã (lit. "para Marcos há…")
    <br>• com <b>dolet</b>: <span class="ex-la">pēs <b>mihi</b> dolet</span> = meu pé dói
    <br>• <b>agente do gerundivo</b>: <span class="ex-la">Latīna <b>vōbīs</b> discenda est</span> = o latim deve ser aprendido <b>por vós</b>.` },
  { icon: "🧰", title: "Ablativo — o canivete suíço",
    body: `O caso mais versátil — cobre tudo que em português vira "em/com/por/de". Os usos, do mais comum ao mais fino:
    <br>• <b>lugar onde</b> (com in): <span class="ex-la">in hort<b>ō</b>, in Itali<b>ā</b></span>
    <br>• <b>origem</b> (ab/ex/dē): <span class="ex-la">ex silv<b>ā</b>, ab oppid<b>ō</b></span>
    <br>• <b>companhia</b> (cum): <span class="ex-la">cum amīc<b>ā</b> suā</span>
    <br>• <b>instrumento/meio</b> — SEM preposição!: <span class="ex-la">gladi<b>ō</b> pugnat</span> = luta <b>com a espada</b>; <span class="ex-la">oculīs vidēmus</span> = vemos <b>com os olhos</b>
    <br>• <b>agente da passiva</b> (ā/ab + pessoa): <span class="ex-la">ā Iūli<b>ō</b> portātur</span> = é carregado <b>por Júlio</b>
    <br>• <b>tempo quando</b>: <span class="ex-la">hiem<b>e</b></span> = no inverno; <span class="ex-la">e<b>ō</b> tempore</span> = naquele tempo
    <br>• <b>preço</b>: <span class="ex-la">centum sēstertiī<b>s</b> cōnstat</span> = custa 100 sestércios
    <br>• <b>comparação</b>: <span class="ex-la">vīt<b>ā</b> cārior</span> = mais caro que a vida
    <br>• <b>ablativo absoluto</b> — uma mini-oração à parte: <span class="ex-la">sōle orient<b>e</b></span> = ao nascer do sol; <span class="ex-la">Mīnōtaurō occīs<b>ō</b></span> = morto o Minotauro.` },
  { icon: "📍", title: "Locativo — o fóssil",
    body: `Sobrou só em nomes de cidades e umas palavrinhas: indica <b>lugar onde</b> sem preposição.
    <br><span class="ex-la">Rōm<b>ae</b></span> = em Roma · <span class="ex-la">Tūscul<b>ī</b></span> = em Túsculo · <span class="ex-la">dom<b>ī</b></span> = em casa
    <br>💡 O trio das cidades: <span class="ex-la">Rōmam</span> (para Roma, acus.) / <span class="ex-la">Rōmā</span> (de Roma, abl.) / <span class="ex-la">Rōmae</span> (em Roma, loc.) — sempre sem preposição.` },
  { icon: "⏳", title: "Os tempos do verbo",
    body: `<table><tr><th>tempo</th><th>exemplo</th><th>tradução</th></tr>
    <tr><td>presente</td><td class="la">amat</td><td>ama</td></tr>
    <tr><td>imperfeito</td><td class="la">amābat</td><td>amava (ação contínua/habitual no passado)</td></tr>
    <tr><td>perfeito</td><td class="la">amāvit</td><td>amou (ação concluída)</td></tr>
    <tr><td>mais-que-perfeito</td><td class="la">amāverat</td><td>tinha amado</td></tr>
    <tr><td>futuro</td><td class="la">amābit</td><td>amará</td></tr>
    <tr><td>futuro perfeito</td><td class="la">amāverit</td><td>terá amado</td></tr></table>
    💡 A dupla que confunde: <b>imperfeito</b> = filme (cenário, hábito: "chovia, ele morava…"); <b>perfeito</b> = foto (evento: "entrou, disse, caiu").` },
  { icon: "🎭", title: "Os modos — fato, ordem ou possibilidade",
    body: `• <b>Indicativo</b> — fatos: <span class="ex-la">Mārcus dormit.</span>
    <br>• <b>Imperativo</b> — ordens: <span class="ex-la">Venī! Tacē! Audīte!</span> (futuro: <span class="ex-la">exspectātō!</span>)
    <br>• <b>Subjuntivo</b> — desejo, finalidade, dúvida, hipótese. Os gatilhos clássicos:
    <br>&nbsp;&nbsp;<span class="ex-la"><b>ut</b> discat</span> = para que aprenda · <span class="ex-la"><b>nē</b> cadat</span> = para que não caia
    <br>&nbsp;&nbsp;<span class="ex-la"><b>cum</b> nāvigāret</span> = quando/como navegasse · <span class="ex-la"><b>utinam</b> veniat!</span> = tomara que venha
    <br>&nbsp;&nbsp;pergunta indireta: <span class="ex-la">nesciō quid <b>agat</b></span> = não sei o que ele faz
    <br>• <b>Infinitivo</b> — nas frases relatadas (AcI): <span class="ex-la">dīcit puerum dormīre</span>.` },
  { icon: "🔄", title: "As vozes — ativa, passiva e os depoentes",
    body: `• <b>Ativa</b>: <span class="ex-la">servus saccum portat</span> = o escravo carrega o saco.
    <br>• <b>Passiva</b> (-tur, -ntur…): <span class="ex-la">saccus ā servō portātur</span> = o saco é carregado pelo escravo.
    <br>&nbsp;&nbsp;Perfeito passivo é composto, como em português: <span class="ex-la">pulsātus est</span> = foi golpeado.
    <br>• <b>Depoentes</b> — forma passiva, sentido ativo (decoreba boa): <span class="ex-la">loquitur</span> fala, <span class="ex-la">sequitur</span> segue, <span class="ex-la">proficīscitur</span> parte, <span class="ex-la">laetātur</span> alegra-se, <span class="ex-la">verētur</span> teme, <span class="ex-la">cōnātur</span> tenta.` },
  { icon: "🧱", title: "As formas nominais do verbo",
    body: `• <b>Particípio presente</b> (-ns): <span class="ex-la">gallus can<b>ēns</b></span> = o galo que canta
    <br>• <b>Particípio perfeito passivo</b> (-tus): <span class="ex-la">epistula scrīp<b>ta</b></span> = a carta escrita
    <br>• <b>Particípio futuro</b> (-ūrus): <span class="ex-la">pāri<b>tūrus</b> sum</span> = estou prestes a obedecer
    <br>• <b>Gerúndio</b> (-ndī/-ndō/-ndum): <span class="ex-la">ars vola<b>ndī</b></span> = a arte de voar
    <br>• <b>Gerundivo</b> (-ndus + esse): obrigação — <span class="ex-la">discipulus pūnie<b>ndus</b> est</span> = o aluno deve ser castigado
    <br>• <b>Supino</b> (-tum): <span class="ex-la">dormī<b>tum</b> īre</span> = ir dormir.` }
];
