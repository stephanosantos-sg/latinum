/* ============================================================
   LATINVM — engine
   ============================================================ */

/* ---------- helpers ---------- */
const $ = s => document.querySelector(s);
const norm = s => (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z]/g, "");
const normPhrase = s => (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z\s]/g, "").replace(/\s+/g, " ").trim();
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; };
const esc = s => (s || "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const todayKey = () => new Date().toISOString().slice(0, 10);

/* ---------- state ---------- */
const DEFAULT_STATE = { xp: 0, streak: 0, lastDay: null, lessons: {}, srs: {}, words: {}, readFab: {}, rate: 0.85, gram: {} };
let S = loadState();
function loadState() {
  try { return Object.assign({}, DEFAULT_STATE, JSON.parse(localStorage.getItem("latinum") || "{}")); }
  catch { return { ...DEFAULT_STATE }; }
}
function save() {
  S.savedAt = Date.now();
  localStorage.setItem("latinum", JSON.stringify(S));
  scheduleCloudPush();
}

/* ---------- sincronização na nuvem (Firestore — mesmo projeto do Orbita) ---------- */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyA5Mr_PMNfazmPqOeDaqdwWv3yHzEone5Q",
  authDomain: "orbita-386d6.firebaseapp.com",
  projectId: "orbita-386d6",
  storageBucket: "orbita-386d6.firebasestorage.app",
  messagingSenderId: "558543348252",
  appId: "1:558543348252:web:e9b79438b31bb9db7435d9"
};
let _fbUser = null, _fbDb = null, _pushTimer = null, _syncStatus = "off";
const cloudAvailable = () => typeof firebase !== "undefined";

function initCloud() {
  if (!cloudAvailable() || _fbDb) return;
  firebase.initializeApp(FIREBASE_CONFIG);
  _fbDb = firebase.firestore();
  firebase.auth().onAuthStateChanged(user => {
    _fbUser = user;
    if (user) { _syncStatus = "on"; cloudPull(); }
    else _syncStatus = "off";
    renderSyncChip();
    if (document.querySelector("#sync-box")) renderProfile();
  });
}
async function cloudLogin() {
  if (!cloudAvailable()) return;
  try {
    await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  } catch (e) {
    toast("❌ Login falhou: " + (e.code || e.message));
  }
}
function cloudLogout() {
  if (cloudAvailable()) firebase.auth().signOut();
  toast("Desconectado — progresso continua salvo neste navegador");
}
async function cloudPull() {
  if (!_fbUser || !_fbDb) return;
  try {
    const doc = await _fbDb.collection("users").doc(_fbUser.uid).get();
    const cloud = doc.exists ? doc.data().latinum : null;
    if (cloud && (cloud.savedAt || 0) > (S.savedAt || 0)) {
      S = Object.assign({}, DEFAULT_STATE, cloud);
      localStorage.setItem("latinum", JSON.stringify(S));
      renderStats();
      toast("☁️ Progresso da nuvem carregado (" + S.xp + " XP)");
      App.go("profile");
    } else {
      cloudPush(); // local é mais novo (ou nuvem vazia): sobe
    }
  } catch (e) { console.error("cloudPull:", e); _syncStatus = "error"; }
}
async function cloudPush() {
  if (!_fbUser || !_fbDb) return;
  try {
    await _fbDb.collection("users").doc(_fbUser.uid).set({ latinum: JSON.parse(JSON.stringify(S)) }, { merge: true });
    _syncStatus = "on";
    const el = document.querySelector("#sync-status");
    if (el) el.textContent = "☁️ Sincronizado agora há pouco";
  } catch (e) { console.error("cloudPush:", e); _syncStatus = "error"; }
}
function scheduleCloudPush() {
  if (!_fbUser) return;
  clearTimeout(_pushTimer);
  _pushTimer = setTimeout(cloudPush, 3000);
}
function renderSyncChip() {
  const chip = document.getElementById("sync-chip");
  if (!chip) return;
  if (!cloudAvailable()) { chip.hidden = true; return; }
  chip.hidden = false;
  if (_fbUser) {
    chip.textContent = "☁️✓";
    chip.classList.add("on");
    chip.title = "Sincronizado como " + (_fbUser.email || "") + " — toque pra ver";
  } else {
    chip.textContent = "☁️ entrar";
    chip.classList.remove("on");
    chip.title = "Entre com Google pra sincronizar o progresso entre aparelhos";
  }
}
function syncChipTap() {
  if (!cloudAvailable()) return;
  if (_fbUser) App.go("profile");
  else cloudLogin();
}

/* ---------- ranks (Cursus Honorum) ---------- */
const RANKS = [
  { xp: 0, name: "Discipulus", badge: "🎓" },
  { xp: 120, name: "Scrība", badge: "✍️" },
  { xp: 320, name: "Quaestor", badge: "📜" },
  { xp: 650, name: "Aedīlis", badge: "🏗️" },
  { xp: 1100, name: "Praetor", badge: "⚖️" },
  { xp: 1700, name: "Cōnsul", badge: "🦅" },
  { xp: 2600, name: "Imperātor", badge: "👑" }
];
const rankFor = xp => RANKS.slice().reverse().find(r => xp >= r.xp);

/* ---------- dictionary (course vocab + extras) ---------- */
const DICT = [];
COURSE.forEach(ch => ch.vocab.forEach(v => DICT.push({ ...v, cap: ch.num })));
NOMINA.forEach(n => DICT.push({ la: n.la, forms: "nome próprio", pt: n.pt, ex: "", cap: 0 }));
Object.entries(EXTRA_GLOSS).forEach(([la, pt]) => DICT.push({ la, forms: "", pt, ex: "", cap: 0, fn: true }));

const ENDINGS = ["orum", "arum", "ibus", "erunt", "isti", "imus", "itis", "ntur", "tur", "mus", "tis", "unt", "ent", "ant", "int", "am", "as", "at", "em", "es", "et", "is", "it", "os", "us", "um", "ae", "is", "o", "a", "e", "i", "u", "s", "t", "m", ""];
function stemOf(w) { // crude stem: strip one common ending
  for (const e of ENDINGS) if (e && w.length - e.length >= 3 && w.endsWith(e)) return w.slice(0, -e.length);
  return w;
}
const DICT_INDEX = {};   // exact normalized headword(s) -> entry
const DICT_STEMS = [];   // {stem, entry}
DICT.forEach(en => {
  en.la.split(/[,;·…]| — /).forEach(part => {
    part.split(/\s+/).forEach(tok => {
      const n = norm(tok);
      if (n.length > 1 && !DICT_INDEX[n]) DICT_INDEX[n] = en;
    });
    const n = norm(part.replace(/\s+/g, ""));
    if (n && !DICT_INDEX[n]) DICT_INDEX[n] = en;
  });
  const head = norm(en.la.split(/[,\s]/)[0]);
  if (head.length >= 3 && !en.fn) DICT_STEMS.push({ stem: stemOf(head), entry: en });
});
/* índice de TODAS as formas declinadas (gerado pelo motor de morfologia) */
const FORM_INDEX = {};
if (typeof nounClass === "function") {
  DICT.forEach(en => {
    if (en.fn) return;
    try {
      const cls = nounClass(en);
      if (!cls) return;
      const t = declineNoun(cls);
      ["sg", "pl"].forEach(num => (t[num] || []).forEach(f => {
        if (f) { const k = norm(f); if (k.length > 1 && !FORM_INDEX[k]) FORM_INDEX[k] = en; }
      }));
    } catch (e) { /* ignora entradas que o motor não parseia */ }
  });
}

function lookup(word) {
  const n = norm(word);
  if (!n) return null;
  const exact = DICT_INDEX[n];
  // forma declinada real ganha de glosa funcional manual (análise mais rica)
  if (exact && !(exact.fn && FORM_INDEX[n])) return exact;
  if (FORM_INDEX[n]) return FORM_INDEX[n];
  if (exact) return exact;
  // try stripping enclitic -que / -ne
  for (const enc of ["que", "ne"]) {
    if (n.endsWith(enc) && DICT_INDEX[n.slice(0, -enc.length)]) return DICT_INDEX[n.slice(0, -enc.length)];
  }
  // stem match: longest stem that prefixes the word, remainder ≤ 4 chars
  let best = null;
  const ws = stemOf(n);
  for (const { stem, entry } of DICT_STEMS) {
    if ((n.startsWith(stem) && n.length - stem.length <= 4) || ws === stem) {
      if (!best || stem.length > best.stem.length) best = { stem, entry };
    }
  }
  return best ? best.entry : null;
}

/* ---------- TTS ---------- */
let VOICE = null;
function pickVoice() {
  const vs = speechSynthesis.getVoices();
  VOICE = vs.find(v => v.lang === "it-IT") || vs.find(v => v.lang.startsWith("it")) ||
    vs.find(v => v.lang.startsWith("es")) || vs.find(v => v.lang.startsWith("pt")) || null;
}
if ("speechSynthesis" in window) {
  pickVoice();
  speechSynthesis.onvoiceschanged = pickVoice;
}
function speak(text) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const plain = text.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[ȳȲ]/g, "y");
  const u = new SpeechSynthesisUtterance(plain);
  if (VOICE) u.voice = VOICE;
  u.lang = VOICE ? VOICE.lang : "it-IT";
  u.rate = S.rate || 0.85;
  speechSynthesis.speak(u);
}
function stopSpeak() {
  if ("speechSynthesis" in window) speechSynthesis.cancel();
}
const RATES = [0.5, 0.6, 0.7, 0.85, 1.0, 1.15, 1.3];
function changeRate(dir) {
  let i = RATES.indexOf(S.rate);
  if (i === -1) i = 3;
  i = Math.min(RATES.length - 1, Math.max(0, i + dir));
  S.rate = RATES[i];
  save();
  document.querySelectorAll(".tts-rate").forEach(el => el.textContent = rateLabel());
  toast(`${dir < 0 ? "🐢" : "🐇"} Velocidade: ${rateLabel()}`);
  // efeito imediato: a Web Speech não muda o rate de fala em andamento,
  // então reinicia a frase atual na velocidade nova
  if (window._ab && speechSynthesis.speaking) {
    if (window._ab.playing) abSpeakSentence(window._ab.i);
    else abSpeakSentence0(window._ab.i);
  }
}
function rateLabel() { return (S.rate || 0.85).toFixed(2).replace(/0$/, "") + "×"; }
function ttsControls(js) {
  return `<div class="tts-row">
    <button class="speak-btn" onclick="${js}">🔊 ouvir</button>
    <button class="speak-btn" onclick="stopSpeak()" title="parar leitura">⏹ parar</button>
    <button class="speak-btn" onclick="changeRate(-1)" title="mais devagar">🐢</button>
    <span class="tts-rate">${rateLabel()}</span>
    <button class="speak-btn" onclick="changeRate(1)" title="mais rápido">🐇</button>
  </div>`;
}

/* ---------- streak / xp ---------- */
function addXP(n) {
  S.xp += n;
  const t = todayKey();
  if (!S.day || S.day.date !== t) S.day = { date: t, xp: 0, hit: false };
  S.day.xp += n;
  if (S.day.xp >= 30 && !S.day.hit) { S.day.hit = true; setTimeout(() => toast("🎯 Meta diária batida — 30 XP! Optimē!"), 600); }
  save(); renderStats();
}
function bumpStreak() {
  const t = todayKey();
  if (S.lastDay === t) return;
  const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
  S.streak = (S.lastDay === y) ? S.streak + 1 : 1;
  S.lastDay = t;
  save();
}
function renderStats() {
  $("#stat-streak").textContent = S.streak;
  $("#stat-xp").textContent = S.xp;
  $("#stat-words").textContent = Object.values(S.words).filter(v => v === 2).length + Object.keys(S.srs).filter(k => (S.srs[k].reps || 0) >= 3).length;
  $("#stat-rank").textContent = rankFor(S.xp).name;
  const due = dueWords().length + dueSents().length;
  const b = $("#review-badge");
  b.hidden = due === 0;
  b.textContent = due;
  renderSyncChip();
}

/* ---------- SRS: SM-2 (SuperMemo-2, o algoritmo do Anki) ----------
   Wozniak 1987; curva do esquecimento de Ebbinghaus; spacing effect
   (Cepeda et al. 2006). Cada item tem um fator de facilidade (EF) que
   estica o intervalo a cada acerto e encolhe com os erros.            */
const INTERVALS = [1, 2, 4, 8, 16, 32, 64]; // legado (migração)
function sm2Update(it, ok, typed) {
  // migra itens antigos (lvl) pro SM-2
  if (it.ef === undefined) { it.ef = 2.5; it.interval = INTERVALS[it.lvl || 0] || 1; it.streak = it.lvl || 0; }
  const q = ok ? (typed ? 5 : 4) : 2; // qualidade 0-5 (implícita: acerto digitado > acerto mcq > erro)
  if (q < 3) {
    it.streak = 0;
    it.interval = 1; // errou: volta pra amanhã
  } else {
    it.streak = (it.streak || 0) + 1;
    if (it.streak === 1) it.interval = 1;
    else if (it.streak === 2) it.interval = 6;
    else it.interval = Math.round(it.interval * it.ef);
  }
  // ajuste do fator de facilidade (fórmula original do SM-2)
  it.ef = Math.max(1.3, it.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
  it.reps = (it.reps || 0) + (ok ? 1 : 0);
  const d = new Date(); d.setDate(d.getDate() + Math.min(it.interval, 365));
  it.due = d.toISOString().slice(0, 10);
}
function srsKey(v) { return norm(v.la) + "|" + v.cap; }
function srsAdd(v) {
  const k = srsKey(v);
  if (!S.srs[k]) S.srs[k] = { la: v.la, cap: v.cap, ef: 2.5, interval: 0, streak: 0, due: todayKey(), reps: 0 };
}
function srsAnswer(k, ok, typed) {
  const it = S.srs[k]; if (!it) return;
  sm2Update(it, ok, typed);
  save();
}

/* ---------- cards de frase (sentence mining) ---------- */
function sentAdd(word, sent, src) {
  if (!S.sents) S.sents = {};
  const id = norm(word) + "|" + norm(sent).slice(0, 24);
  if (S.sents[id]) { toast("Essa frase já está na revisão"); return; }
  S.sents[id] = { word, sent, src, ef: 2.5, interval: 0, streak: 0, due: todayKey(), reps: 0 };
  save(); renderStats();
  toast("➕ Frase adicionada à Repetītiō!");
}
function dueSents() {
  const t = todayKey();
  return Object.entries(S.sents || {}).filter(([, it]) => it.due <= t);
}
function sentAnswer(id, ok, typed) {
  const it = (S.sents || {})[id]; if (!it) return;
  sm2Update(it, ok, typed);
  save();
}
function dueWords() {
  const t = todayKey();
  return Object.entries(S.srs).filter(([, it]) => it.due <= t).map(([k, it]) => {
    const ch = COURSE.find(c => c.num === it.cap);
    const v = ch && ch.vocab.find(v => norm(v.la) === k.split("|")[0]);
    return v ? { k, v } : null;
  }).filter(Boolean);
}

/* ---------- course structure ---------- */
function lessonsOf(ch) {
  // Ordem do livro: primeiro LÊ o capítulo (per se illustrata!),
  // depois vocabulário, gramática e pensa.
  const ls = [{ id: `c${ch.num}-l`, name: "Lēctiō", icon: "📖", kind: "lectio" }];
  const chunks = [];
  for (let i = 0; i < ch.vocab.length; i += 9) chunks.push(ch.vocab.slice(i, i + 9));
  chunks.forEach((c, i) => ls.push({ id: `c${ch.num}-v${i}`, name: `Vocābula ${["I", "II", "III", "IV"][i] || i + 1}`, icon: "🃏", kind: "vocab", words: c }));
  const half = Math.ceil(ch.pensum.length / 2);
  ls.push({ id: `c${ch.num}-g`, name: "Grammatica", icon: "🏺", kind: "pensum", items: ch.pensum.slice(0, half), showGrammar: true });
  ls.push({ id: `c${ch.num}-p`, name: "Pēnsum", icon: "✒️", kind: "pensum", items: ch.pensum.slice(half) });
  return ls;
}
function chapterProgress(ch) {
  const ls = lessonsOf(ch);
  const done = ls.filter(l => S.lessons[l.id]).length;
  return { done, total: ls.length, pct: Math.round(done / ls.length * 100) };
}
function chapterUnlocked(ch) {
  if (ch.num === 1) return true;
  const prev = COURSE.find(c => c.num === ch.num - 1);
  return chapterProgress(prev).done >= chapterProgress(prev).total - 1; // lectio pode ficar por último
}
function maxUnlockedCap() {
  let m = 1;
  COURSE.forEach(ch => { if (chapterUnlocked(ch)) m = ch.num; });
  return m;
}

/* ---------- navigation ---------- */
const App = {
  go(view, arg) {
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.nav === view));
    speechSynthesis && speechSynthesis.cancel();
    window._ab = null;
    window._rerenderReader = null;
    hideGloss();
    if (view === "home") renderHome();
    if (view === "review") renderReview();
    if (view === "library") renderLibrary();
    if (view === "profile") renderProfile();
    window.scrollTo(0, 0);
  }
};

/* ---------- HOME (course path) ---------- */
function nextLesson() {
  // primeira lição disponível e não concluída (na ordem do curso)
  for (const ch of COURSE) {
    if (!chapterUnlocked(ch)) continue;
    let prevDone = true;
    for (const l of lessonsOf(ch)) {
      const done = !!S.lessons[l.id];
      if (!done && prevDone) return { ch, l };
      prevDone = done;
    }
  }
  return null;
}
function setLiber(n) { S.liber = n; save(); renderHome(); window.scrollTo(0, 0); }
function renderHome() {
  // aba padrão: onde está a fronteira do progresso
  if (S.liber === undefined) S.liber = (nextLesson()?.ch.num || 1) >= 36 ? 2 : 1;
  const liber = S.liber;
  let h = `<h1 class="page-title">Cursus Latīnus</h1>`;
  // card "Continuar" — direto pra próxima lição
  const nx = nextLesson();
  if (nx) {
    h += `<div class="lib-item glass continue-card" onclick="startLesson('${nx.ch.num}','${nx.l.id}')">
      <div class="lib-icon">${nx.ch.icon}</div>
      <div class="lib-info"><div class="lib-sub" style="color:var(--gold)">CONTINUAR</div>
      <div class="lib-title">Cap. ${nx.ch.roman} · ${nx.l.icon} ${nx.l.name}</div>
      <div class="lib-sub">${esc(nx.ch.title)}</div></div>
      <div style="font-size:1.4rem">▶️</div></div>`;
  }
  // abas dos livros
  h += `<div class="liber-tabs">
    <button class="liber-tab ${liber === 1 ? "active" : ""}" onclick="setLiber(1)">📕 Liber I<small>Familia Rōmāna</small></button>
    <button class="liber-tab ${liber === 2 ? "active" : ""}" onclick="setLiber(2)">📗 Liber II<small>Rōma Aeterna</small></button>
  </div>`;
  // dica de instalação no iOS (some depois de dispensada ou instalada)
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const standalone = navigator.standalone || (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches);
  if (isIOS && !standalone && !S.iosHintOff) {
    h += `<div class="gram-card glass" style="border-color:rgba(242,193,78,.4)">
      <h3>📲 Instale como app no iPhone</h3>
      <p>No <b>Safari</b>: toque em <b>Compartilhar</b> (□↑) → <b>Adicionar à Tela de Início</b>. Vira um app de verdade: ícone, tela cheia e funciona offline.</p>
      <button class="btn-main btn-ghost" style="margin-top:10px" onclick="S.iosHintOff=true;save();renderHome()">Entendi, esconder</button></div>`;
  }
  COURSE.filter(ch => liber === 1 ? ch.num <= 35 : ch.num >= 36).forEach(ch => {
    const unlocked = chapterUnlocked(ch);
    const pr = chapterProgress(ch);
    const ls = lessonsOf(ch);
    h += `<section class="unit-card glass ${unlocked ? "" : "locked"}">
      ${pr.done === pr.total ? `<div class="unit-crowns">👑</div>` : ""}
      <div class="unit-head" onclick="toggleUnit(${ch.num})">
        <div class="unit-icon ${pr.done === pr.total ? "done" : ""}">${ch.icon}</div>
        <div class="unit-info">
          <div class="unit-cap">Capitulum ${ch.roman}</div>
          <div class="unit-title">${ch.title}</div>
          <div class="unit-sub">${ch.subtitle}</div>
        </div>
      </div>
      <div class="unit-progress"><div style="width:${pr.pct}%"></div></div>
      <div class="lesson-row" id="unit-${ch.num}" ${unlocked ? "" : "hidden"} style="${pr.done > 0 && pr.done < pr.total ? "" : (ch.num === maxUnlockedCap() ? "" : "display:none")}">`;
    let prevDone = true;
    ls.forEach(l => {
      const done = !!S.lessons[l.id];
      const avail = unlocked && (prevDone || done);
      h += `<div class="lesson-chip ${done ? "done" : ""} ${avail ? "" : "locked"}" onclick="startLesson('${ch.num}','${l.id}')">
        <span class="lc-icon">${l.icon}</span>${l.name}<span class="lc-status">${done ? "✓" : avail ? "" : "🔒"}</span></div>`;
      prevDone = done;
    });
    h += `<div class="lesson-chip" onclick="showGrammar(${ch.num})"><span class="lc-icon">🏛️</span>Gramática<span class="lc-status">ref.</span></div>`;
    h += `</div></section>`;
  });
  h += `<div class="lib-item glass" onclick="showAppendix()" style="margin-top:6px">
    <div class="lib-icon">📖</div>
    <div class="lib-info"><div class="lib-title">Appendix Grammaticus</div>
    <div class="lib-sub">os casos explicados do zero (dativo? ablativo?) · tempos · modos · tabelas</div></div>
    <div>→</div></div>`;
  if (liber === 2) h += `<p class="page-sub" style="text-align:center;margin-top:20px">🏛️ O curso Ørberg completo: 56 capítulos, do "Rōma in Italiā est" ao Somnium Scīpiōnis. Macte virtūte estō!</p>`;
  $("#view").innerHTML = h;
}
function toggleUnit(num) {
  const el = $(`#unit-${num}`);
  if (el && !el.hidden) el.style.display = el.style.display === "none" ? "" : "none";
}

/* ---------- GRAMMAR REFERENCE ---------- */
function showGrammar(num) {
  const ch = COURSE.find(c => c.num === num);
  let h = `<div class="lesson-top"><button class="btn-quit" onclick="App.go('home')">←</button>
    <h1 class="page-title" style="margin:0">Cap. ${ch.roman} — Grammatica</h1></div>`;
  ch.grammar.forEach(g => { h += `<div class="gram-card glass"><h3>${g.title}</h3><p>${g.html}</p></div>`; });
  h += `<button class="btn-main btn-ghost" onclick="App.go('home')">Voltar ao Cursus</button>`;
  $("#view").innerHTML = h;
  window.scrollTo(0, 0);
}

/* ============================================================
   LESSON ENGINE
   ============================================================ */
let L = null; // current lesson session

function startLesson(chNum, lessonId) {
  const ch = COURSE.find(c => c.num == chNum);
  const lesson = lessonsOf(ch).find(l => l.id === lessonId);
  if (!lesson) return;
  let queue = [];
  if (lesson.kind === "vocab") queue = buildVocabQueue(ch, lesson.words);
  if (lesson.kind === "pensum") queue = lesson.items.map(x => ({ ...x }));
  if (lesson.kind === "lectio") { openLectio(ch); return; }
  L = { ch, lesson, queue, idx: 0, total: queue.length, correct: 0, wrong: 0, combo: 0, best: 0, xp: 0 };
  if (lesson.showGrammar) renderGrammarIntro();
  else renderExercise();
}

function buildVocabQueue(ch, words) {
  const q = [];
  words.forEach(v => q.push({ t: "flash", v }));
  const drills = [];
  words.forEach(v => {
    drills.push({ t: "mcqv", dir: "la>pt", v });
    drills.push({ t: "mcqv", dir: "pt>la", v });
  });
  const d = shuffle(drills).slice(0, Math.min(9, drills.length));
  // dois exercícios de escuta
  shuffle(words).slice(0, 2).forEach((v, i) => d.splice(2 + i * 3, 0, { t: "listen", v }));
  // um exercício de pares no meio
  d.splice(Math.floor(d.length / 2), 0, { t: "pairs", words: shuffle(words).slice(0, 5) });
  // duas digitações no final (só palavras simples, sem "a / b" ou "a, b")
  const typable = words.filter(v => !/[\/,…() ]/.test(v.la));
  shuffle(typable).slice(0, 2).forEach(v => d.push({ t: "typev", v }));
  return q.concat(d);
}

function renderGrammarIntro() {
  let h = `<div class="lesson-top"><button class="btn-quit" onclick="App.go('home')">✕</button>
    <h1 class="page-title" style="margin:0">Cap. ${L.ch.roman} — Grammatica nova</h1></div>`;
  L.ch.grammar.forEach(g => { h += `<div class="gram-card glass"><h3>${g.title}</h3><p>${g.html}</p></div>`; });
  h += `<button class="btn-main" onclick="renderExercise()">Agora pratica ⚡</button>`;
  $("#view").innerHTML = h;
  window.scrollTo(0, 0);
}

function lessonHeader() {
  const pct = Math.round(L.idx / L.total * 100);
  return `<div class="lesson-top">
    <button class="btn-quit" onclick="App.go('home')">✕</button>
    <div class="progressbar"><div style="width:${pct}%"></div></div>
    <div class="combo">${L.combo > 1 ? "🔥" + L.combo : ""}</div>
  </div>`;
}

function renderExercise() {
  if (!L || L.idx >= L.queue.length) return finishLesson();
  const ex = L.queue[L.idx];
  let h = lessonHeader();
  if (ex.t === "flash") h += exFlash(ex);
  else if (ex.t === "mcqv") h += exMcqVocab(ex);
  else if (ex.t === "mcq") h += exMcq(ex);
  else if (ex.t === "cloze") h += exCloze(ex);
  else if (ex.t === "build") h += exBuild(ex);
  else if (ex.t === "type" || ex.t === "typev") h += exType(ex);
  else if (ex.t === "pairs") h += exPairs(ex);
  else if (ex.t === "gap") h += exGap(ex);
  else if (ex.t === "listen") h += exListen(ex);
  else if (ex.t === "read") h += exRead(ex);
  h += `<div id="feedback" class="feedback"><div class="fb-text" id="fb-text"></div></div>
  <button id="btn-continue" class="btn-main" onclick="nextExercise()" style="display:none">Continuar</button>
  <p class="kbd-hint"><kbd>1</kbd>–<kbd>9</kbd> escolhe · <kbd>Enter</kbd> confirma/continua · <kbd>⌫</kbd> desfaz</p>`;
  $("#view").innerHTML = h;
  const inp = $("#type-input"); if (inp) { inp.focus(); inp.addEventListener("keydown", e => { if (e.key === "Enter") checkType(); }); }
  if (ex.t === "flash") speak(ex.v.la);
  if (ex.t === "listen") setTimeout(() => speak(ex._say), 250);
  if (ex.t === "read") bindReaderWords();
  if (ex.t === "pairs") window._pairSel = null;
  window.scrollTo(0, 0);
}

/* ---- exercise renderers ---- */
function exFlash(ex) {
  const v = ex.v;
  const canBack = L.idx > 0 && L.queue[L.idx - 1].t === "flash";
  return `<div class="exercise glass"><div class="ex-kind">Palavra nova ${L.idx + 1}/${L.queue.filter(x => x.t === "flash").length}</div>
    <div class="flashcard">
      <div class="fc-word">${esc(v.la)}</div>
      <div class="fc-forms">${esc(v.forms)}</div>
      ${ttsControls(`speak('${esc(v.la).replace(/'/g, "\\'")}')`)}
      <div class="fc-pt">${esc(v.pt)}</div>
      <div class="fc-ex">"${esc(v.ex)}"</div>
    </div>
    <div style="display:flex;gap:10px">
      ${canBack ? `<button class="btn-main btn-ghost" style="flex:0 0 auto;width:auto;padding:15px 20px" onclick="flashPrev()">← anterior</button>` : ""}
      <button class="btn-main" style="flex:1" onclick="flashNext()">Entendi →</button>
    </div></div>`;
}
function flashNext() {
  const ex = L.queue[L.idx];
  if (!ex._seen) { ex._seen = true; addXP(1); L.xp += 1; }
  L.idx++; renderExercise();
}
function flashPrev() {
  if (L && L.idx > 0 && L.queue[L.idx - 1].t === "flash") { L.idx--; renderExercise(); }
}

function exMcqVocab(ex) {
  const v = ex.v;
  const pool = L.ch.vocab.filter(x => x.la !== v.la);
  const dis = shuffle(pool).slice(0, 3);
  const la2pt = ex.dir === "la>pt";
  const opts = shuffle([v, ...dis]);
  ex._answer = opts.indexOf(v);
  ex._opts = opts;
  return `<div class="exercise glass"><div class="ex-kind">${la2pt ? "O que significa?" : "Como se diz em latim?"}</div>
    <div class="ex-prompt ${la2pt ? "la" : ""}">${la2pt ? `<span class="la">${esc(v.la)}</span> <button class="speak-btn" onclick="speak('${esc(v.la).replace(/'/g, "\\'")}')">🔊</button>` : esc(v.pt)}</div>
    <div class="options">${opts.map((o, i) =>
      `<button class="opt" onclick="checkMcq(${i})">${la2pt ? esc(o.pt) : `<span class="la">${esc(o.la)}</span>`}</button>`).join("")}</div></div>`;
}
function exMcq(ex) {
  ex._answer = ex.a;
  return `<div class="exercise glass"><div class="ex-kind">Escolha</div>
    <div class="ex-prompt">${esc(ex.q)}</div>
    <div class="options">${ex.options.map((o, i) => `<button class="opt" onclick="checkMcq(${i})"><span class="la">${esc(o)}</span></button>`).join("")}</div></div>`;
}
function exCloze(ex) {
  ex._answer = ex.a;
  return `<div class="exercise glass"><div class="ex-kind">Complete a terminação</div>
    <div class="ex-prompt la">${esc(ex.prompt)}</div>
    <div class="options">${ex.options.map((o, i) => `<button class="opt" onclick="checkMcq(${i})"><span class="la">${esc(o)}</span></button>`).join("")}</div></div>`;
}
function checkMcq(i) {
  const ex = L.queue[L.idx];
  const ok = i === ex._answer;
  document.querySelectorAll(".opt").forEach((b, j) => {
    b.disabled = true;
    if (j === ex._answer) b.classList.add("correct");
    else if (j === i && !ok) b.classList.add("wrong");
  });
  feedback(ok, ex.why || (ex._opts ? `${ex._opts[ex._answer].la} = ${ex._opts[ex._answer].pt}` : ""), ex);
}

function exBuild(ex) {
  const words = ex.la.split(" ");
  ex._target = normPhrase(ex.la);
  const bank = shuffle(words.concat(ex.extra || []));
  return `<div class="exercise glass"><div class="ex-kind">Monte a frase em latim</div>
    <div class="ex-prompt">${esc(ex.pt)}</div>
    <div class="build-area" id="build-area"></div>
    <div class="bank" id="bank">${bank.map((w, i) => `<button class="token la" id="tok${i}" onclick="tokTap(${i},'${esc(w).replace(/'/g, "\\'")}')">${esc(w)}</button>`).join("")}</div>
    <button class="btn-main" id="btn-check" onclick="checkBuild()" disabled>Verificar</button></div>`;
}
window._built = [];
function tokTap(i, w) {
  const tok = $(`#tok${i}`);
  if (tok.classList.contains("ghost")) return;
  tok.classList.add("ghost");
  window._built.push({ i, w });
  redrawBuild();
}
function redrawBuild() {
  $("#build-area").innerHTML = window._built.map((t, j) =>
    `<button class="token la" data-i="${t.i}" data-w="${esc(t.w)}" onclick="tokRemove(${j})">${esc(t.w)}</button>`).join("");
  $("#btn-check").disabled = window._built.length === 0;
  [...$("#build-area").children].forEach(tok => { tok.onpointerdown = e => tokDragStart(e, tok); });
}
function tokRemove(j) {
  if (window._justDragged) return; // clique fantasma pós-arrasto
  const t = window._built.splice(j, 1)[0];
  $(`#tok${t.i}`).classList.remove("ghost");
  redrawBuild();
}
/* arrastar-e-soltar pra reordenar a frase (pointer events = mouse + touch) */
function tokDragStart(e, tok) {
  const sx = e.clientX, sy = e.clientY;
  let started = false;
  const move = ev => {
    if (!started) {
      if (Math.hypot(ev.clientX - sx, ev.clientY - sy) < 8) return;
      started = true;
      tok.classList.add("dragging");
    }
    ev.preventDefault();
    const area = $("#build-area");
    if (!area) return;
    const others = [...area.children].filter(c => c !== tok);
    let placed = false;
    for (const o of others) {
      const r = o.getBoundingClientRect();
      const sameRow = ev.clientY >= r.top - 6 && ev.clientY <= r.bottom + 6;
      if (ev.clientY < r.top - 6 || (sameRow && ev.clientX < r.left + r.width / 2)) {
        area.insertBefore(tok, o); placed = true; break;
      }
    }
    if (!placed) area.appendChild(tok);
  };
  const up = () => {
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerup", up);
    document.removeEventListener("pointercancel", up);
    if (started) {
      tok.classList.remove("dragging");
      const area = $("#build-area");
      if (area) window._built = [...area.children].map(el => ({ i: +el.dataset.i, w: el.dataset.w }));
      window._justDragged = true;
      setTimeout(() => { window._justDragged = false; }, 250);
      redrawBuild();
    }
  };
  document.addEventListener("pointermove", move, { passive: false });
  document.addEventListener("pointerup", up);
  document.addEventListener("pointercancel", up);
}
function checkBuild() {
  const ex = L.queue[L.idx];
  const got = normPhrase(window._built.map(t => t.w).join(" "));
  const exact = got === ex._target;
  // latim tem ordem livre: aceita qualquer ordem com exatamente as palavras certas
  const bag = s => s.split(" ").sort().join(" ");
  const okBag = !exact && bag(got) === bag(ex._target);
  const ok = exact || okBag;
  $("#btn-check").style.display = "none";
  window._built = [];
  feedback(ok, ok ? (okBag ? `Ordem também válida! No livro: "${ex.la}"` : "") : `Resposta: "${ex.la}"`, ex);
  if (ok) speak(ex.la);
}

function exType(ex) {
  const v = ex.v;
  const prompt = ex.t === "typev" ? `Escreva em latim: <b>${esc(v.pt)}</b>` : esc(ex.prompt);
  ex._answers = ex.t === "typev"
    ? [v.la, ...v.la.split(/[,\/…]| — /).map(s => s.trim()).filter(Boolean)]
    : ex.a;
  return `<div class="exercise glass"><div class="ex-kind">Digite</div>
    <div class="ex-prompt">${prompt}</div>
    ${ex.t === "typev" ? `<div class="ex-hint">${esc(v.forms)} — não precisa dos tracinhos (ā ē ī ō ū)</div>` : `<div class="ex-hint">Macrons são opcionais.</div>`}
    <input id="type-input" class="type-input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="scrībe hīc…">
    <button class="btn-main" id="btn-check" onclick="checkType()">Verificar</button></div>`;
}
function checkType() {
  const ex = L.queue[L.idx];
  if ($("#btn-check").style.display === "none") return;
  const got = norm($("#type-input").value);
  const ok = ex._answers.some(a => norm(a) === got);
  $("#btn-check").style.display = "none";
  $("#type-input").disabled = true;
  const model = ex.t === "typev" ? ex._answers[0] : ex._answers[ex._answers.length - 1];
  feedback(ok, ok ? (ex.why || "") : `Resposta: "${model}"${ex.why ? " — " + ex.why : ""}`, ex);
  if (ok) speak(model);
}

function exGap(ex) {
  ex._answers = ex.a;
  const parts = ex.prompt.split("___");
  return `<div class="exercise glass"><div class="ex-kind">Complete a lacuna</div>
    <div class="ex-prompt la" style="line-height:2.4">${esc(parts[0])}<input id="type-input" class="type-input gap-input" autocomplete="off" autocapitalize="off" spellcheck="false">${esc(parts[1] || "")}</div>
    ${ex.hint ? `<div class="ex-hint">${esc(ex.hint)}</div>` : `<div class="ex-hint">Macrons são opcionais.</div>`}
    <button class="btn-main" id="btn-check" onclick="checkType()">Verificar</button></div>`;
}

function exListen(ex) {
  if (ex.v) { // palavra do vocabulário (gerado automaticamente)
    const pool = L.ch.vocab.filter(x => x.la !== ex.v.la);
    const opts = shuffle([ex.v, ...shuffle(pool).slice(0, 3)]);
    ex._answer = opts.indexOf(ex.v);
    ex._opts = opts;
    ex._say = ex.v.la;
    return `<div class="exercise glass"><div class="ex-kind">O que você ouviu?</div>
      <div class="listen-big"><button class="listen-btn" onclick="speak(L.queue[L.idx]._say)">🔊</button>
      <button class="speak-btn" onclick="const r=S.rate;S.rate=0.6;speak(L.queue[L.idx]._say);S.rate=r;">🐢 devagar</button></div>
      <div class="options">${opts.map((o, i) => `<button class="opt" onclick="checkMcq(${i})"><span class="la">${esc(o.la)}</span></button>`).join("")}</div></div>`;
  }
  // frase hand-authored: {text, options, a, why}
  ex._answer = ex.a;
  ex._say = ex.text;
  return `<div class="exercise glass"><div class="ex-kind">Escute a frase</div>
    <div class="listen-big"><button class="listen-btn" onclick="speak(L.queue[L.idx]._say)">🔊</button>
    <button class="speak-btn" onclick="const r=S.rate;S.rate=0.6;speak(L.queue[L.idx]._say);S.rate=r;">🐢 devagar</button></div>
    <div class="ex-hint">Qual frase você ouviu?</div>
    <div class="options">${ex.options.map((o, i) => `<button class="opt" onclick="checkMcq(${i})"><span class="la">${esc(o)}</span></button>`).join("")}</div></div>`;
}

function exRead(ex) {
  ex._answer = ex.a;
  return `<div class="exercise glass"><div class="ex-kind">Leia e responda</div>
    <div class="reader-text mini-read">${readerHTML(ex.text, true)}</div>
    <div class="ex-prompt la" style="font-size:1.08rem;margin-top:14px">${esc(ex.q)}</div>
    <div class="options">${ex.options.map((o, i) => `<button class="opt" onclick="checkMcq(${i})"><span class="la">${esc(o)}</span></button>`).join("")}</div>
    <div class="ex-hint" style="margin-top:8px">👆 dá pra tocar nas palavras do texto</div></div>`;
}

function exPairs(ex) {
  ex._left = ex.words.map(v => ({ id: norm(v.la), txt: v.la, la: true }));
  ex._right = shuffle(ex.words.map(v => ({ id: norm(v.la), txt: v.pt })));
  ex._remaining = ex.words.length;
  const cells = [];
  for (let i = 0; i < ex.words.length; i++) {
    cells.push(ex._left[i], ex._right[i]);
  }
  return `<div class="exercise glass"><div class="ex-kind">Ligue os pares</div>
    <div class="pairs-grid">${cells.map((c, i) =>
      `<button class="pair-btn" id="pair${i}" data-id="${c.id}" onclick="pairTap(${i})">${c.la ? `<span class="la">${esc(c.txt)}</span>` : esc(c.txt)}</button>`).join("")}</div></div>`;
}
function pairTap(i) {
  const btn = $(`#pair${i}`);
  const ex = L.queue[L.idx];
  if (window._pairSel === null || window._pairSel === undefined) { window._pairSel = i; btn.classList.add("sel"); return; }
  if (window._pairSel === i) { btn.classList.remove("sel"); window._pairSel = null; return; }
  const prev = $(`#pair${window._pairSel}`);
  if (prev.dataset.id === btn.dataset.id) {
    prev.classList.add("done"); btn.classList.add("done");
    prev.classList.remove("sel");
    ex._remaining--;
    addXP(1); L.xp += 1;
    if (ex._remaining === 0) { L.combo++; L.best = Math.max(L.best, L.combo); L.correct++; setTimeout(() => { L.idx++; renderExercise(); }, 350); }
  } else {
    prev.classList.remove("sel");
    prev.classList.add("shake"); btn.classList.add("shake");
    setTimeout(() => { prev.classList.remove("shake"); btn.classList.remove("shake"); }, 350);
  }
  window._pairSel = null;
}

/* ---- feedback & flow ---- */
function feedback(ok, note, ex) {
  const fb = $("#feedback");
  fb.classList.add("show", ok ? "ok" : "bad");
  $("#fb-text").innerHTML = ok
    ? `✅ <b>Rēctē!</b> +${2 + Math.min(L.combo, 3)} XP${note ? `<small>${note}</small>` : ""}`
    : `❌ <b>Nōn rēctē.</b>${note ? `<small>${note}</small>` : ""}`;
  $("#btn-continue").style.display = "";
  $("#btn-continue").focus();
  if (ok) { L.combo++; L.best = Math.max(L.best, L.combo); L.correct++; const gain = 2 + Math.min(L.combo, 3); addXP(gain); L.xp += gain; }
  else {
    L.combo = 0; L.wrong++;
    // reenfileira o exercício errado (estilo Duolingo)
    const clone = { ...ex }; delete clone._answer; delete clone._opts; delete clone._answers; delete clone._target;
    L.queue.push(clone); L.total++;
  }
  if (ex._srsKey) srsAnswer(ex._srsKey, ok, ex.t === "typev" || ex.t === "type" || ex.t === "gap");
  if (ex._sentKey) sentAnswer(ex._sentKey, ok, true);
}
function nextExercise() { L.idx++; renderExercise(); }

function finishLesson() {
  bumpStreak();
  if (L.lesson) S.lessons[L.lesson.id] = true;
  // agenda vocab no SRS
  if (L.lesson && L.lesson.kind === "vocab") L.lesson.words.forEach(v => srsAdd({ ...v, cap: L.ch.num }));
  save(); renderStats();
  const acc = L.correct + L.wrong === 0 ? 100 : Math.round(L.correct / (L.correct + L.wrong) * 100);
  $("#view").innerHTML = `<div class="lesson-end glass">
    <div class="big">${acc >= 90 ? "🏆" : acc >= 70 ? "🎉" : "💪"}</div>
    <h2>${acc >= 90 ? "Optimē!" : acc >= 70 ? "Bene!" : "Perge!"}</h2>
    <p style="color:var(--text-dim)">${L.lesson ? L.lesson.name : "Repetītiō"} concluída</p>
    <div class="end-stats">
      <div class="end-stat"><b>+${L.xp}</b><span>XP</span></div>
      <div class="end-stat"><b>${acc}%</b><span>acertos</span></div>
      <div class="end-stat"><b>🔥${L.best}</b><span>melhor combo</span></div>
    </div>
    <button class="btn-main" onclick="App.go('home')">Continuar</button>
  </div>`;
  L = null;
}

/* ============================================================
   LECTIO (reading inside course)
   ============================================================ */
function openLectio(ch) {
  const lec = ch.lectio;
  let h = `<div class="lesson-top"><button class="btn-quit" onclick="App.go('home')">←</button>
    <h1 class="page-title" style="margin:0">Lēctiō — Cap. ${ch.roman}</h1></div>
  <div class="reader glass">
    <h2>${esc(lec.title)}</h2>
    <div class="r-meta">${esc(lec.source)}</div>
    <div class="reader-legend"><span><i style="background:var(--blue-new)"></i>ainda não estudada</span>
      <span><i style="background:var(--yellow-known)"></i>no seu SRS</span>
      <span>sem marca = dominada · automático pelo seu progresso · 👆 toque pra ver/corrigir</span></div>
    ${abControls()}
    <div class="reader-text" id="reader-text">${readerHTML(lec.text)}</div>
  </div>
  <button class="btn-main btn-ghost" style="margin-top:14px" onclick="openPensumA()">✏️ Pēnsum A — complete as terminações</button>
  <div class="exercise glass" style="margin-top:16px"><div class="ex-kind">Pēnsum C — entendeu?</div><div id="lectio-qs"></div></div>`;
  $("#view").innerHTML = h;
  window._lectioText = lec.text;
  window._lectioCh = ch;
  abInit();
  window._paSource = { title: lec.title, text: lec.text };
  window._paScored = false;
  window._rerenderReader = () => openLectio(ch);
  renderLectioQs(ch, 0, 0);
  bindReaderWords();
  window.scrollTo(0, 0);
}
function speakLectio() { speak(window._lectioText.replace(/\n+/g, ". ")); }
function renderLectioQs(ch, qi, correct) {
  const qs = ch.lectio.questions;
  const box = $("#lectio-qs");
  if (qi >= qs.length) {
    S.lessons[`c${ch.num}-l`] = true;
    bumpStreak(); addXP(10); save(); renderStats();
    box.innerHTML = `<div class="ex-prompt">🏆 Lēctiō concluída! +10 XP</div>
      <p class="ex-hint">${correct}/${qs.length} respostas certas de primeira.</p>
      <button class="btn-main" onclick="App.go('home')">Continuar</button>`;
    return;
  }
  const q = qs[qi];
  const order = shuffle(q.options.map((o, i) => ({ o, i })));
  box.innerHTML = `<div class="ex-prompt la" style="font-size:1.1rem">${qi + 1}. ${esc(q.q)}</div>
    <div class="options">${order.map(x =>
      `<button class="opt" onclick="lectioAnswer(${x.i},${q.a},${qi},${correct},this)"><span class="la">${esc(x.o)}</span></button>`).join("")}</div>`;
}
function lectioAnswer(i, a, qi, correct, btn) {
  const ch = window._lectioCh;
  if (i === a) {
    btn.classList.add("correct");
    addXP(3);
    setTimeout(() => renderLectioQs(ch, qi + 1, correct + 1), 500);
  } else {
    btn.classList.add("wrong");
    btn.disabled = true;
  }
}

/* ============================================================
   AUDIOBOOK (karaokê frase a frase)
   ============================================================ */
function abControls() {
  return `<div class="tts-row" id="ab-controls">
    <button class="speak-btn" id="ab-play" onclick="abToggle()">▶️ ouvir</button>
    <button class="speak-btn" onclick="abStep(-1)" title="frase anterior">⏮</button>
    <button class="speak-btn" onclick="abStep(1)" title="próxima frase">⏭</button>
    <button class="speak-btn" onclick="abRepeat()" title="repete a frase">🔁</button>
    <button class="speak-btn" onclick="changeRate(-1)" title="mais devagar">🐢</button>
    <span class="tts-rate">${rateLabel()}</span>
    <button class="speak-btn" onclick="changeRate(1)" title="mais rápido">🐇</button>
    <button class="speak-btn ${S.hideMacrons ? "toggled" : ""}" onclick="toggleMacrons()" title="esconde/mostra macrons (modo texto real)">ā/a</button>
  </div>`;
}
function abInit() {
  window._ab = { sents: readerHTML._sents.slice(), i: 0, playing: false };
}
function abHighlight(i) {
  document.querySelectorAll(".snt.playing").forEach(el => el.classList.remove("playing"));
  const el = document.querySelector(`.snt[data-si="${i}"]`);
  if (el) { el.classList.add("playing"); el.scrollIntoView({ block: "center", behavior: "smooth" }); }
}
function abSpeakSentence(i) {
  const ab = window._ab;
  if (!ab || i >= ab.sents.length || i < 0) return abStopUI();
  ab.i = i;
  abHighlight(i);
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(stripMacrons(ab.sents[i]));
  if (VOICE) u.voice = VOICE;
  u.lang = VOICE ? VOICE.lang : "it-IT";
  u.rate = S.rate || 0.85;
  u.onend = () => {
    if (!window._ab || !window._ab.playing) return;
    if (ab.i + 1 < ab.sents.length) abSpeakSentence(ab.i + 1);
    else abStopUI(true);
  };
  speechSynthesis.speak(u);
}
function abToggle() {
  const ab = window._ab;
  if (!ab) return;
  if (ab.playing) {
    ab.playing = false;
    speechSynthesis.cancel();
    const b = $("#ab-play"); if (b) b.textContent = "▶️ ouvir";
  } else {
    ab.playing = true;
    const b = $("#ab-play"); if (b) b.textContent = "⏸ pausa";
    abSpeakSentence(ab.i);
  }
}
function abStep(d) {
  const ab = window._ab; if (!ab) return;
  ab.i = Math.max(0, Math.min(ab.sents.length - 1, ab.i + d));
  abHighlight(ab.i);
  if (ab.playing) abSpeakSentence(ab.i);
  else { speechSynthesis.cancel(); abSpeakSentence0(ab.i); }
}
function abSpeakSentence0(i) { // fala uma frase sem engatar a próxima
  const ab = window._ab; if (!ab) return;
  abHighlight(i);
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(stripMacrons(ab.sents[i]));
  if (VOICE) u.voice = VOICE;
  u.lang = VOICE ? VOICE.lang : "it-IT";
  u.rate = S.rate || 0.85;
  speechSynthesis.speak(u);
}
function abRepeat() {
  const ab = window._ab; if (!ab) return;
  if (ab.playing) abSpeakSentence(ab.i); else abSpeakSentence0(ab.i);
}
function abStopUI(finished) {
  const ab = window._ab;
  if (ab) { ab.playing = false; if (finished) ab.i = 0; }
  document.querySelectorAll(".snt.playing").forEach(el => el.classList.remove("playing"));
  const b = $("#ab-play"); if (b) b.textContent = "▶️ ouvir";
}
function toggleMacrons() {
  S.hideMacrons = !S.hideMacrons;
  save();
  toast(S.hideMacrons ? "ā/a — modo texto real: macrons escondidos (toca na palavra pra ver)" : "ā/a — macrons visíveis");
  if (window._rerenderReader) window._rerenderReader();
}

/* ============================================================
   PĒNSUM A — terminações apagadas em qualquer leitura
   ============================================================ */
function openPensumA() {
  const src = window._paSource;
  if (!src) return;
  // escolhe palavras que o motor sabe analisar
  const seen = new Set(), items = {};
  for (const m of src.text.matchAll(/[A-Za-zĀĒĪŌŪȲāēīōūȳ]+/g)) {
    const w = m[0], n = norm(w);
    if (n.length < 4 || seen.has(n)) continue;
    const e = FORM_INDEX[n];
    if (!e) continue;
    let an;
    try { an = analyzeForm(w, e); } catch { continue; }
    if (!an || !an[0] || an[0].kind !== "noun" || !an[0].case) continue;
    const stemN = mNorm(an[0].cls.stem);
    if (!n.startsWith(stemN)) continue;
    const endLen = n.length - stemN.length;
    if (endLen < 1 || endLen > 4 || endLen >= w.length) continue;
    seen.add(n);
    items[n] = { end: w.slice(w.length - endLen), la: e.la, pt: e.pt };
  }
  const chosenKeys = shuffle(Object.keys(items)).slice(0, 12);
  const chosen = new Set(chosenKeys);
  if (chosen.size < 4) { toast("Texto curto demais pra gerar um Pēnsum aqui"); return; }
  window._paItems = [];
  let gi = 0;
  const html = src.text.split(/\n\n+/).map(p =>
    `<p>${p.replace(/([A-Za-zĀĒĪŌŪȲāēīōūȳ]+)/g, w => {
      const n = norm(w);
      if (chosen.has(n)) {
        chosen.delete(n); // só a primeira ocorrência vira lacuna
        const it = items[n];
        window._paItems.push({ end: it.end, la: it.la, pt: it.pt, full: w });
        const stem = w.slice(0, w.length - it.end.length);
        return `${esc(stem)}<input class="pa-input" data-pi="${gi++}" maxlength="6" autocomplete="off" autocapitalize="off" spellcheck="false">`;
      }
      return w;
    })}</p>`).join("");
  $("#view").innerHTML = `<div class="lesson-top"><button class="btn-quit" onclick="window._rerenderReader && window._rerenderReader()">←</button>
    <h1 class="page-title" style="margin:0">Pēnsum A</h1></div>
  <div class="reader glass">
    <div class="r-meta">${esc(src.title)} · complete as terminações (macrons opcionais)</div>
    <div class="reader-text" style="font-size:1.08rem;line-height:2.2">${html}</div>
  </div>
  <div id="pa-result" class="feedback" style="margin-top:14px"><div class="fb-text" id="pa-text"></div></div>
  <button class="btn-main" id="pa-check" onclick="checkPensumA()">Verificar (+1 XP por acerto)</button>
  <button class="btn-main btn-ghost" style="margin-top:8px" onclick="revealPensumA()">Mostrar respostas</button>`;
  const first = document.querySelector(".pa-input");
  if (first) first.focus();
  window.scrollTo(0, 0);
}
function checkPensumA() {
  let ok = 0, total = 0;
  document.querySelectorAll(".pa-input").forEach(inp => {
    const it = window._paItems[+inp.dataset.pi];
    total++;
    const good = norm(inp.value) === norm(it.end) && inp.value.trim() !== "";
    inp.classList.remove("pa-ok", "pa-bad");
    inp.classList.add(good ? "pa-ok" : "pa-bad");
    inp.title = it.la + " = " + it.pt;
    if (good) { ok++; inp.disabled = true; }
  });
  const fresh = window._paScored ? 0 : ok;
  if (!window._paScored && ok > 0) { addXP(ok); bumpStreak(); }
  window._paScored = true;
  const r = $("#pa-result");
  r.classList.add("show", ok === total ? "ok" : "bad");
  $("#pa-text").innerHTML = ok === total
    ? `🏆 <b>Pēnsum solūtum!</b> ${ok}/${total} — Optimē!`
    : `${ok}/${total} certas${fresh ? ` (+${fresh} XP)` : ""}. As vermelhas ainda dão pra corrigir e verificar de novo.`;
}
function revealPensumA() {
  document.querySelectorAll(".pa-input").forEach(inp => {
    const it = window._paItems[+inp.dataset.pi];
    inp.value = it.end;
    inp.disabled = true;
    inp.classList.add("pa-ok");
  });
  toast("Respostas reveladas — sem XP dessa vez 😉");
  window._paScored = true;
}

/* ============================================================
   READER core (LingQ style)
   ============================================================ */
const stripMacrons = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ȳ/g, "y").replace(/Ȳ/g, "Y");

/* Detecção AUTOMÁTICA do status da palavra:
   0 = nova (azul: existe no curso mas você ainda não estudou)
   1 = aprendendo (amarela: está no seu SRS, ainda não madura)
   2 = conhecida (sem marca: madura no SRS, palavra funcional ou nome)
   Clique manual (S.words) sempre tem prioridade. */
const _wsCache = new Map();
function wordStatusAuto(w, n) {
  if (S.words[n] !== undefined) return S.words[n];
  if (_wsCache.has(n)) return _wsCache.get(n);
  let st;
  const e = lookup(w);
  if (!e) st = 0;                        // desconhecida do glossário: nova
  else if (e.fn || !e.cap) st = 2;       // palavra funcional ou nome próprio: sem marca
  else if (/(prep|conj|interj|indecl|pron|adv|num|loc)\.?/.test(e.forms || "") || /[\/()]/.test(e.la)) st = 2; // palavra-cola/paradigma: sem marca
  else {
    const it = S.srs[norm(e.la) + "|" + e.cap];
    if (!it) st = 0;                     // ainda não estudada em lição
    else st = (it.interval || 0) >= 21 ? 2 : 1; // madura → conhecida; senão aprendendo
  }
  _wsCache.set(n, st);
  return st;
}
function wsCacheClear() { _wsCache.clear(); }

function wrapWords(s, plain) {
  return s.replace(/([A-Za-zĀĒĪŌŪȲāēīōūȳ]+)/g, m => {
    const n = norm(m);
    if (n.length < 2) return S.hideMacrons && !plain ? stripMacrons(m) : m;
    const st = plain ? 2 : wordStatusAuto(m, n);
    const cls = st === 2 ? "" : st === 1 ? "learning" : "new";
    const shown = S.hideMacrons && !plain ? stripMacrons(m) : m;
    return `<span class="w ${cls}" data-w="${esc(m)}">${shown}</span>`;
  });
}
function readerHTML(text, plain) {
  let si = 0;
  wsCacheClear();
  readerHTML._sents = [];
  const html = text.split(/\n\n+/).map(p => {
    const sents = p.split(/(?<=[.!?…])(?=\s)/).map(s => s.trim()).filter(Boolean);
    return `<p>${sents.map(s => {
      readerHTML._sents.push(s);
      return `<span class="snt" data-si="${si++}">${wrapWords(s, plain)}</span>`;
    }).join(" ")}</p>`;
  }).join("");
  return html;
}
function bindReaderWords() {
  document.querySelectorAll(".w").forEach(el => {
    el.onclick = e => { e.stopPropagation(); showGloss(el); };
  });
}
function showGloss(el) {
  const word = el.dataset.w;
  const entry = lookup(word);
  const n = norm(word);
  const pop = $("#gloss-pop");
  let morphHtml = "";
  if (entry) {
    try {
      const an = analyzeForm(word, entry);
      if (an && an[0]) {
        const a = an[0];
        if (a.kind === "noun" && a.case) {
          const alts = an.filter(x => x.case).map(x => `${x.case} ${x.num === "sg" ? "sing." : "pl."}`).join(" ou ");
          morphHtml = `<div class="g-morph">🏛️ <b>${alts}</b> · ${DECL_LABEL[a.cls.decl]}
            <button class="g-table-btn" onclick="showParadigm('${esc(word)}')">📊 tabela</button></div>`;
          window._paradigm = { entry, an };
        } else if (a.kind === "noun") {
          morphHtml = `<div class="g-morph">🏛️ ${DECL_LABEL[a.cls.decl]}
            <button class="g-table-btn" onclick="showParadigm('${esc(word)}')">📊 tabela</button></div>`;
          window._paradigm = { entry, an };
        } else if (a.kind === "verb" && a.guess) {
          morphHtml = `<div class="g-morph">⚙️ provável: <b>${a.guess}</b></div>`;
        }
      }
    } catch (e) { /* análise é bônus, nunca quebra o popup */ }
  }
  pop.innerHTML = `<div class="g-word">${esc(word)} <button class="speak-btn" style="margin:0;padding:2px 8px" onclick="speak('${esc(word)}')">🔊</button></div>
    ${entry ? `<div class="g-forms">${esc(entry.la)}${entry.forms ? " · " + esc(entry.forms) : ""}</div>
    <div class="g-pt">${esc(entry.pt)}</div>
    ${morphHtml}
    ${entry.ex ? `<div class="g-note">"${esc(entry.ex)}"</div>` : ""}`
      : `<div class="g-pt">🤔 ainda não está no glossário</div><div class="g-note">Palavra de um capítulo mais à frente — ou um nome próprio.</div>`}
    <div class="g-actions">
      <button onclick="setWord('${n}',0)">🔵 Nova</button>
      <button onclick="setWord('${n}',1)">🟡 Aprendendo</button>
      <button onclick="setWord('${n}',2)">✅ Sei</button>
    </div>
    ${el.closest(".snt") ? `<div class="g-actions"><button onclick="sentAdd(window._glossCtx.w, window._glossCtx.s, window._glossCtx.src);hideGloss()">➕ frase inteira na Repetītiō</button></div>` : ""}`;
  window._glossCtx = { w: word, s: (el.closest(".snt") || {}).textContent || "", src: (window._paSource || {}).title || "" };
  pop.hidden = false;
  const r = el.getBoundingClientRect();
  const pw = 300;
  let x = Math.min(Math.max(8, r.left), window.innerWidth - pw - 8);
  let y = r.bottom + 8;
  pop.style.left = x + "px";
  pop.style.top = y + "px";
  requestAnimationFrame(() => {
    const pr = pop.getBoundingClientRect();
    if (pr.bottom > window.innerHeight - 10) pop.style.top = (r.top - pr.height - 8) + "px";
  });
}
function setWord(n, st) {
  if (st === 0) delete S.words[n]; else S.words[n] = st;
  save(); renderStats(); hideGloss();
  document.querySelectorAll(`.w`).forEach(el => {
    if (norm(el.dataset.w) === n) {
      el.classList.remove("new", "learning");
      if (st === 1) el.classList.add("learning");
      if (st === 0) el.classList.add("new");
    }
  });
}
function hideGloss() { const p = $("#gloss-pop"); if (p) p.hidden = true; }

/* ---------- tabela de paradigma (overlay) ---------- */
function showParadigm(word) {
  const P = window._paradigm;
  if (!P) return;
  hideGloss();
  const a = P.an[0];
  const t = a.table || declineNoun(a.cls);
  const hits = new Set(P.an.filter(x => x.case).map(x => x.num + x.caseIdx));
  let rows = "";
  for (let i = 0; i < 5; i++) {
    rows += `<tr><th>${CASE_ABBR[i]}</th>
      <td class="la ${hits.has("sg" + i) ? "hit" : ""}" onclick="speak(this.textContent)">${t.sg ? (t.sg[i] || "—") : "—"}</td>
      <td class="la ${hits.has("pl" + i) ? "hit" : ""}" onclick="speak(this.textContent)">${t.pl[i] || "—"}</td></tr>`;
  }
  let ov = $("#paradigm-ov");
  if (!ov) { ov = document.createElement("div"); ov.id = "paradigm-ov"; ov.className = "paradigm-ov"; document.body.appendChild(ov); }
  ov.innerHTML = `<div class="paradigm-card glass">
    <div class="g-word">${esc(P.entry.la)} <span class="g-forms">${esc(P.entry.forms || "")}</span></div>
    <div class="g-pt">${esc(P.entry.pt)} · ${DECL_LABEL[a.cls.decl]}</div>
    <table class="paradigm-table"><tr><th></th><th>singular</th><th>plural</th></tr>${rows}</table>
    <p class="ex-hint">👆 toca numa forma pra ouvir · a célula dourada é a forma do texto</p>
    <div style="display:flex;gap:8px">
      <button class="btn-main btn-ghost" style="margin-top:8px" onclick="showAppendix()">📖 O que é cada caso?</button>
      <button class="btn-main" style="margin-top:8px" onclick="closeParadigm()">Fechar</button>
    </div>
  </div>`;
  ov.hidden = false;
  ov.onclick = e => { if (e.target === ov) closeParadigm(); };
}
function closeParadigm() { const ov = $("#paradigm-ov"); if (ov) ov.hidden = true; }

/* ---------- Appendix Grammaticus ---------- */
function showAppendix() {
  closeParadigm();
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  let h = `<div class="lesson-top"><button class="btn-quit" onclick="App.go('home')">←</button>
    <h1 class="page-title" style="margin:0">Appendix Grammaticus</h1></div>
  <p class="page-sub">Os casos e o verbo latino explicados do zero — pra quem faz tempo que não vê gramática. Consulte sempre que travar.</p>`;
  APPENDIX.forEach(a => { h += `<div class="gram-card glass"><h3>${a.icon} ${a.title}</h3><p>${a.body}</p></div>`; });
  h += `<div class="gram-card glass"><h3>🏛️ Modelos de conjugação</h3><p>As 4 conjugações + esse, em todos os tempos. Toca numa forma pra ouvir.</p>
    <div class="lesson-row" style="margin-top:10px">${VERB_MODELS.map(m =>
      `<div class="lesson-chip" onclick="showConjugation('${m.id}')"><span class="lc-icon">⚙️</span><span class="la">${m.inf}</span><span class="lc-status">${m.conj.split(" ")[0]}</span></div>`).join("")}
    <div class="lesson-chip" onclick="showConjugation('esse')"><span class="lc-icon">⭐</span><span class="la">esse</span><span class="lc-status">irr.</span></div></div>
    <div id="conj-box"></div></div>
  <button class="btn-main btn-ghost" onclick="App.go('home')">Voltar ao Cursus</button>`;
  $("#view").innerHTML = h;
  window.scrollTo(0, 0);
}
function showConjugation(id) {
  const box = $("#conj-box");
  const table = id === "esse" ? ESSE_TABLE : conjTable(VERB_MODELS.find(m => m.id === id));
  const name = id === "esse" ? "esse (ser/estar)" : (m => `${m.inf} (${m.pt})`)(VERB_MODELS.find(m => m.id === id));
  let h = `<h3 style="margin-top:14px">${name}</h3><div style="overflow-x:auto"><table class="paradigm-table"><tr><th></th>${PERSONS.map(p => `<th>${p}</th>`).join("")}</tr>`;
  Object.entries(table).forEach(([tense, forms]) => {
    h += `<tr><th>${tense}</th>${forms.map(f => `<td class="la" onclick="speak(this.textContent)">${f}</td>`).join("")}</tr>`;
  });
  h += `</table></div>`;
  box.innerHTML = h;
  box.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ---------- Declinā! (drill adaptativo) ---------- */
let G = null;
function startDeclina() {
  G = { i: 0, total: 12, ok: 0, xp: 0 };
  nextGram();
}
function nextGram() {
  if (!G || G.i >= G.total) return finishGram();
  const ex = makeGramExercise();
  G.cur = ex;
  const pct = Math.round(G.i / G.total * 100);
  $("#view").innerHTML = `<div class="lesson-top">
    <button class="btn-quit" onclick="G=null;App.go('review')">✕</button>
    <div class="progressbar"><div style="width:${pct}%"></div></div>
    <div class="combo">${G.ok}✓</div></div>
  <div class="exercise glass"><div class="ex-kind">Declinā! ${ex.kind === "v" ? "· conjugação" : "· " + (ex.hint || "")}</div>
    <div class="ex-prompt">${ex.prompt}</div>
    <div class="options">${ex.options.map((o, i) => `<button class="opt" onclick="checkGram(${i})"><span class="la">${esc(o)}</span></button>`).join("")}</div>
    <div id="feedback" class="feedback"><div class="fb-text" id="fb-text"></div></div>
    <button id="btn-continue" class="btn-main" onclick="nextGram()" style="display:none">Continuar</button></div>`;
  window.scrollTo(0, 0);
}
function checkGram(i) {
  const ex = G.cur;
  const ok = ex.options[i] === ex.answer;
  document.querySelectorAll(".opt").forEach((b, j) => {
    b.disabled = true;
    if (ex.options[j] === ex.answer) b.classList.add("correct");
    else if (j === i && !ok) b.classList.add("wrong");
  });
  gramRecord(ex.key, ok);
  const fb = $("#feedback");
  fb.classList.add("show", ok ? "ok" : "bad");
  $("#fb-text").innerHTML = ok ? `✅ <b>Rēctē!</b> +3 XP` : `❌ <b>Nōn rēctē.</b><small>Resposta: ${esc(ex.answer)}</small>`;
  if (ok) { G.ok++; addXP(3); G.xp += 3; speak(ex.answer); }
  G.i++;
  $("#btn-continue").style.display = "";
}
function finishGram() {
  bumpStreak(); save(); renderStats();
  const acc = G.total ? Math.round(G.ok / G.total * 100) : 0;
  $("#view").innerHTML = `<div class="lesson-end glass">
    <div class="big">${acc >= 90 ? "🏆" : acc >= 70 ? "🎉" : "💪"}</div>
    <h2>${acc >= 90 ? "Optimē dēclīnās!" : acc >= 70 ? "Bene!" : "Perge exercēre!"}</h2>
    <div class="end-stats">
      <div class="end-stat"><b>+${G.xp}</b><span>XP</span></div>
      <div class="end-stat"><b>${acc}%</b><span>acertos</span></div></div>
    <button class="btn-main" onclick="startDeclina()">Mais uma rodada</button>
    <button class="btn-main btn-ghost" style="margin-top:8px" onclick="App.go('review')">Voltar</button></div>`;
  G = null;
}
function heatmapHTML() {
  const noun = [["d1", "1ª"], ["d2m", "2ª"], ["d2n", "2ª n."], ["d3", "3ª"], ["d3i", "3ª -i"], ["d4", "4ª"], ["d5", "5ª"]];
  const cell = k => {
    const acc = gramAcc(k);
    const cls = acc === null ? "" : acc >= .85 ? "hm-g" : acc >= .6 ? "hm-y" : "hm-r";
    return `<td class="hm ${cls}" title="${acc === null ? "sem dados" : Math.round(acc * 100) + "%"}"></td>`;
  };
  let h = `<table class="hm-table"><tr><th></th>${CASE_ABBR.map(c => `<th>${c}</th>`).join("")}</tr>`;
  noun.forEach(([d, lbl]) => {
    h += `<tr><th>${lbl}</th>${CASES.map(c => {
      // agrega sg+pl
      const k1 = gramKey("n", d, c + "sg"), k2 = gramKey("n", d, c + "pl");
      const s1 = gramStat(k1), s2 = gramStat(k2);
      const n = s1.ok + s1.bad + s2.ok + s2.bad;
      const acc = n === 0 ? null : (s1.ok + s2.ok) / n;
      const cls = acc === null ? "" : acc >= .85 ? "hm-g" : acc >= .6 ? "hm-y" : "hm-r";
      return `<td class="hm ${cls}" title="${acc === null ? "—" : Math.round(acc * 100) + "%"}"></td>`;
    }).join("")}</tr>`;
  });
  h += `</table>`;
  const tenses = ["presente", "imperfeito", "futuro", "perfeito", "subj. presente"];
  h += `<table class="hm-table" style="margin-top:8px"><tr><th></th>${tenses.map(t => `<th>${t.replace("subj. ", "subj.")}</th>`).join("")}</tr>`;
  ["1ª (-āre)", "2ª (-ēre)", "3ª (-ere)", "4ª (-īre)"].forEach(cj => {
    h += `<tr><th>${cj.split(" ")[0]}</th>${tenses.map(t => cell(gramKey("v", cj, t))).join("")}</tr>`;
  });
  h += `</table>`;
  return h;
}
document.addEventListener("click", e => { if (!e.target.closest("#gloss-pop") && !e.target.closest(".w")) hideGloss(); });

/* ============================================================
   LIBRARY (Fabellae)
   ============================================================ */
function renderLibrary() {
  const maxCap = maxUnlockedCap();
  let h = `<h1 class="page-title">Bibliothēca</h1>
  <p class="page-sub">Leituras graduadas estilo LingQ: toque nas palavras que não conhece. Desbloqueie mais completando capítulos.</p>

  <input id="vocab-search" class="type-input" style="margin-bottom:6px" placeholder="🔎 Vocabulārium — busca latim ou português (ex.: ovibus, ovelha…)"
    autocomplete="off" autocapitalize="off" spellcheck="false">
  <div id="vocab-results"></div>`;

  h += `<h2 class="lib-section">📖 Fabellae Latīnae <small>historinhas</small></h2>`;
  FABELLAE.forEach(f => {
    const open = f.cap <= maxCap;
    const read = S.readFab[f.id];
    h += `<div class="lib-item glass ${open ? "" : "locked"}" onclick="openFabella('${f.id}')">
      <div class="lib-icon">${f.icon}</div>
      <div class="lib-info"><div class="lib-title">${esc(f.title)}</div>
      <div class="lib-sub">${esc(f.level)} · ${f.text.split(/\s+/).length} palavras</div></div>
      <div>${read ? "✅" : open ? "→" : "🔒"}</div>
    </div>`;
  });

  h += `<h2 class="lib-section">💬 Colloquia Persōnarum <small>diálogos, um por capítulo</small></h2>`;
  (typeof COLLOQUIA !== "undefined" ? COLLOQUIA : []).forEach(c => {
    const open = c.cap <= maxCap;
    const read = S.readFab[c.id];
    h += `<div class="lib-item glass ${open ? "" : "locked"}" onclick="openColloquium('${c.id}')">
      <div class="lib-icon">💬</div>
      <div class="lib-info"><div class="lib-title">${esc(c.title)}</div>
      <div class="lib-sub">cap. ${c.cap}${c.personae ? " · " + esc(c.personae) : ""}</div></div>
      <div>${read ? "✅" : open ? "→" : "🔒"}</div>
    </div>`;
  });
  $("#view").innerHTML = h;
  const si = $("#vocab-search");
  if (si) si.addEventListener("input", () => vocabSearch(si.value));
}
function vocabSearch(q) {
  const box = $("#vocab-results");
  const nq = norm(q);
  if (!nq || nq.length < 2) { box.innerHTML = ""; return; }
  const qLower = q.toLowerCase().trim();
  const hits = [];
  const pushed = new Set();
  const add = (en, via) => {
    const k = en.la + en.cap;
    if (pushed.has(k)) return;
    pushed.add(k);
    hits.push({ en, via });
  };
  // forma flexionada exata
  if (FORM_INDEX[nq]) add(FORM_INDEX[nq], "forma de");
  DICT.forEach(en => {
    if (en.fn) return;
    if (norm(en.la).startsWith(nq)) add(en);
    else if (en.pt.toLowerCase().includes(qLower)) add(en, "pt");
  });
  box.innerHTML = hits.slice(0, 20).map(h => {
    const ch = h.en.cap ? `cap. ${h.en.cap}` : "nome/extra";
    const cls = (typeof nounClass === "function") ? (() => { try { return nounClass(h.en); } catch { return null; } })() : null;
    return `<div class="lib-item glass" style="padding:11px 14px;margin-bottom:8px">
      <div class="lib-info"><div class="lib-title" style="font-size:.98rem">${h.via === "forma de" ? `<span style="color:var(--text-dim);font-size:.8rem">${esc(q)} → forma de </span>` : ""}${esc(h.en.la)} <span style="color:var(--text-dim);font-size:.78rem;font-style:italic">${esc(h.en.forms || "")}</span></div>
      <div class="lib-sub">${esc(h.en.pt)} · ${ch}</div></div>
      <button class="speak-btn" style="margin:0" onclick="event.stopPropagation();speak('${esc(h.en.la).replace(/'/g, "\\'")}')">🔊</button>
      ${cls ? `<button class="speak-btn" style="margin:0" onclick='event.stopPropagation();window._paradigm={entry:${JSON.stringify({ la: h.en.la, forms: h.en.forms, pt: h.en.pt }).replace(/'/g, "&#39;")},an:[{kind:"noun",cls:${JSON.stringify(cls).replace(/'/g, "&#39;")},case:null,table:null}]};showParadigm()'>📊</button>` : ""}
    </div>`;
  }).join("") || `<p class="ex-hint">Nada achado com "${esc(q)}".</p>`;
}
function openColloquium(id) {
  const c = COLLOQUIA.find(x => x.id === id);
  if (!c) return;
  let h = `<div class="lesson-top"><button class="btn-quit" onclick="App.go('library')">←</button>
    <h1 class="page-title" style="margin:0">${esc(c.title)}</h1></div>
  <div class="reader glass">
    <div class="r-meta">Colloquia Persōnarum · cap. ${c.cap}${c.personae ? " · Persōnae: " + esc(c.personae) : ""}</div>
    <div class="reader-legend"><span><i style="background:var(--blue-new)"></i>ainda não estudada</span>
      <span><i style="background:var(--yellow-known)"></i>no seu SRS</span>
      <span>sem marca = dominada · 👆 toque pra ver/corrigir</span></div>
    ${abControls()}
    <div class="reader-text">${readerHTML(c.text)}</div>
  </div>
  <button class="btn-main btn-ghost" onclick="openPensumA()">✏️ Pēnsum A — complete as terminações</button>
  <button class="btn-main" style="margin-top:8px" onclick="finishFabella('${c.id}')">Lēgī! — terminei de ler (+8 XP)</button>`;
  $("#view").innerHTML = h;
  abInit();
  window._paSource = { title: c.title, text: c.text };
  window._paScored = false;
  window._rerenderReader = () => openColloquium(id);
  bindReaderWords();
  window.scrollTo(0, 0);
}
function openFabella(id) {
  const f = FABELLAE.find(x => x.id === id);
  if (!f) return;
  let h = `<div class="lesson-top"><button class="btn-quit" onclick="App.go('library')">←</button>
    <h1 class="page-title" style="margin:0">${esc(f.title)}</h1></div>
  <div class="reader glass">
    <div class="r-meta">Fabellae Latīnae · ${esc(f.level)}</div>
    <div class="reader-legend"><span><i style="background:var(--blue-new)"></i>ainda não estudada</span>
      <span><i style="background:var(--yellow-known)"></i>no seu SRS</span>
      <span>sem marca = dominada · 👆 toque pra ver/corrigir</span></div>
    ${abControls()}
    <div class="reader-text">${readerHTML(f.text)}</div>
  </div>
  <button class="btn-main btn-ghost" onclick="openPensumA()">✏️ Pēnsum A — complete as terminações</button>
  <button class="btn-main" style="margin-top:8px" onclick="finishFabella('${f.id}')">Lēgī! — terminei de ler (+8 XP)</button>`;
  $("#view").innerHTML = h;
  abInit();
  window._paSource = { title: f.title, text: f.text };
  window._paScored = false;
  window._rerenderReader = () => openFabella(id);
  bindReaderWords();
  window.scrollTo(0, 0);
}
function finishFabella(id) {
  if (!S.readFab[id]) { S.readFab[id] = true; addXP(8); bumpStreak(); save(); }
  toast("📖 Fabella lēcta! +8 XP");
  App.go("library");
}

/* ============================================================
   REVIEW (SRS)
   ============================================================ */
function srsForecast() {
  const all = [...Object.values(S.srs || {}), ...Object.values(S.sents || {})];
  const days = [];
  for (let d = 0; d < 7; d++) {
    const dt = new Date(Date.now() + d * 864e5).toISOString().slice(0, 10);
    days.push({ label: d === 0 ? "hoje" : d === 1 ? "amanhã" : "+" + d, n: all.filter(it => d === 0 ? it.due <= dt : it.due === dt).length });
  }
  const novas = all.filter(it => (it.interval || 0) === 0).length;
  const aprendendo = all.filter(it => (it.interval || 0) > 0 && it.interval < 21).length;
  const maduras = all.filter(it => (it.interval || 0) >= 21).length;
  return { days, novas, aprendendo, maduras, total: all.length };
}
function renderReview() {
  const due = dueWords().length;
  const dSents = dueSents().length;
  const f = srsForecast();
  const maxDay = Math.max(1, ...f.days.map(d => d.n));
  $("#view").innerHTML = `<h1 class="page-title">Repetītiō</h1>
  <p class="page-sub">Revisão espaçada (algoritmo SM-2, o mesmo do Anki) + ginásio de gramática adaptativo.</p>
  <div class="lib-item glass" onclick="startSrsReview()">
    <div class="lib-icon">🔁</div>
    <div class="lib-info"><div class="lib-title">Repetītiō verbōrum</div>
    <div class="lib-sub">${due + dSents === 0 ? "nada vencido agora — volte amanhã" : due + " palavra" + (due !== 1 ? "s" : "") + (dSents ? " + " + dSents + " frase" + (dSents !== 1 ? "s" : "") : "") + " pra revisar"}</div></div>
    <div>${due + dSents > 0 ? "→" : "🌿"}</div></div>
  <div class="lib-item glass" onclick="startDeclina()">
    <div class="lib-icon">🏛️</div>
    <div class="lib-info"><div class="lib-title">Declinā!</div>
    <div class="lib-sub">drill infinito de declinação e conjugação — foca nas suas células fracas</div></div>
    <div>→</div></div>
  <div class="lib-item glass" onclick="showAppendix()">
    <div class="lib-icon">📖</div>
    <div class="lib-info"><div class="lib-title">Appendix Grammaticus</div>
    <div class="lib-sub">o que é cada caso (dativo, ablativo…), tempos, modos e as tabelas completas</div></div>
    <div>→</div></div>
  <div class="gram-card glass" style="margin-top:16px"><h3>📈 Suas revisões</h3>
    <div class="srs-stats">
      <span><b>${f.novas}</b> novas</span> · <span><b>${f.aprendendo}</b> aprendendo</span> · <span><b>${f.maduras}</b> maduras <small>(intervalo ≥ 21 dias)</small></span>
    </div>
    <div class="forecast">${f.days.map(d => `
      <div class="fc-col"><div class="fc-bar" style="height:${Math.round(d.n / maxDay * 48) + 4}px"></div>
      <div class="fc-n">${d.n}</div><div class="fc-l">${d.label}</div></div>`).join("")}</div>
    <p class="ex-hint" style="margin-top:10px">🔬 Método: <b>repetição espaçada</b> (SM-2/SuperMemo, usado pelo Anki). Cada palavra tem um fator de facilidade: acertou → o intervalo estica (1 → 6 → ×2,5 dias…); acertou <i>digitando</i> → estica mais; errou → volta pra amanhã e o fator encolhe. Você revê cada palavra pouco antes de esquecê-la — a curva do esquecimento de Ebbinghaus. Nas leituras, toque numa palavra → "➕ frase inteira" pra minerar frases pra cá.</p>
  </div>
  <div class="gram-card glass" style="margin-top:16px"><h3>🗺️ Seu mapa de domínio</h3>
    <p class="ex-hint" style="margin-bottom:8px">Declinações × casos e conjugações × tempos, pintados pelo seu desempenho no Declinā!. <span style="color:var(--green)">■</span> ≥85% · <span style="color:#f2c14e">■</span> 60-84% · <span style="color:var(--red)">■</span> &lt;60% · cinza = sem dados.</p>
    <div style="overflow-x:auto">${heatmapHTML()}</div></div>`;
}
function startSrsReview() {
  const due = dueWords();
  const dSents = dueSents();
  if (due.length === 0 && dSents.length === 0) {
    toast("🌿 Nihil repetendum — nada vencido agora");
    return;
  }
  const batch = shuffle(due).slice(0, 12);
  const queue = batch.map(({ k, v }) => {
    const r = Math.random();
    const ex = r < 0.4 ? { t: "mcqv", dir: "la>pt", v } : r < 0.8 ? { t: "mcqv", dir: "pt>la", v } : { t: "typev", v };
    ex._srsKey = k;
    return ex;
  });
  // cards de frase: lacuna com a palavra minerada
  shuffle(dSents).slice(0, 6).forEach(([id, it]) => {
    const entry = lookup(it.word);
    const re = new RegExp(it.word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    queue.push({
      t: "gap",
      prompt: it.sent.replace(re, "___"),
      a: [it.word, stripMacrons(it.word)],
      hint: (entry ? entry.pt : "") + (it.src ? " · " + it.src : ""),
      why: entry ? `${entry.la} = ${entry.pt}` : "",
      _sentKey: id
    });
  });
  L = { ch: COURSE[0], lesson: null, queue, idx: 0, total: queue.length, correct: 0, wrong: 0, combo: 0, best: 0, xp: 0 };
  // mcqv precisa de ch.vocab pra distratores: usa o pool inteiro
  L.ch = { vocab: DICT.filter(d => !d.fn), roman: "R" };
  renderExercise();
}

/* ============================================================
   PROFILE
   ============================================================ */
function renderProfile() {
  const r = rankFor(S.xp);
  const next = RANKS[RANKS.indexOf(r) + 1];
  const totalLessons = COURSE.reduce((a, c) => a + lessonsOf(c).length, 0);
  const doneLessons = Object.keys(S.lessons).length;
  const known = Object.values(S.words).filter(v => v === 2).length;
  const learning = Object.keys(S.srs).length;
  let h = `<h1 class="page-title">Profectus tuus</h1>
  <p class="page-sub">Seu progresso no Cursus Honorum do latim.</p>
  <div class="prof-grid">
    <div class="prof-card glass"><div class="big">🎯 ${(S.day && S.day.date === todayKey()) ? S.day.xp : 0}/30</div><div class="lbl">XP hoje (meta diária)</div></div>
    <div class="prof-card glass"><div class="big">⚡ ${S.xp}</div><div class="lbl">XP total</div></div>
    <div class="prof-card glass"><div class="big">🔥 ${S.streak}</div><div class="lbl">dias seguidos</div></div>
    <div class="prof-card glass"><div class="big">📜 ${learning}</div><div class="lbl">palavras no SRS</div></div>
    <div class="prof-card glass"><div class="big">📚 ${doneLessons}/${totalLessons}</div><div class="lbl">lições concluídas</div></div>
  </div>
  <div class="rank-track glass">
    <h3 style="font-family:Georgia,serif;color:var(--gold);margin-bottom:10px">Cursus Honōrum</h3>
    ${RANKS.map(rk => `<div class="rank-item ${S.xp >= rk.xp ? "reached" : ""} ${rk.name === r.name ? "current" : ""}">
      <div class="rk-badge">${rk.badge}</div><div class="rk-name">${rk.name}</div>
      <div class="rk-xp">${rk.xp} XP</div></div>`).join("")}
    ${next ? `<p class="ex-hint" style="margin-top:10px">Faltam <b>${next.xp - S.xp} XP</b> pra virar ${next.name}.</p>` : `<p class="ex-hint" style="margin-top:10px">Avē, Imperātor! 👑</p>`}
  </div>
  <div class="gram-card glass"><h3>Sobre este curso</h3>
    <p>Baseado em <i>Lingua Latina per se Illustrata — Pars I: Familia Romana</i> (Hans H. Ørberg) e nas <i>Fabellae Latinae</i>. Método natural: você aprende latim <b>em latim</b>, com contexto, sem tradução decorada. Capítulos I–VIII disponíveis; a estrutura já aceita os capítulos IX–XXXV.</p></div>
  <div class="gram-card glass" id="sync-box"><h3>☁️ Sincronização automática</h3>
    ${!cloudAvailable()
      ? `<p>Indisponível nesta versão (bloqueio de rede). Use o link <b>stephanosantos-sg.github.io/latinum</b> pra sincronizar.</p>`
      : _fbUser
        ? `<p>Conectado como <b>${esc(_fbUser.email || "")}</b>. O progresso sobe pra nuvem sozinho a cada mudança e desce em qualquer aparelho logado.</p>
           <p class="ex-hint" id="sync-status" style="margin-top:6px">${_syncStatus === "error" ? "⚠️ Erro na última sincronização" : "☁️ Sincronizado"}</p>
           <div class="lesson-row" style="margin-top:10px">
             <div class="lesson-chip" onclick="cloudPull()"><span class="lc-icon">⬇️</span>Puxar da nuvem</div>
             <div class="lesson-chip" onclick="cloudPush().then(()=>toast('☁️ Enviado!'))"><span class="lc-icon">⬆️</span>Enviar agora</div>
             <div class="lesson-chip" onclick="cloudLogout()"><span class="lc-icon">🚪</span>Sair</div>
           </div>`
        : `<p>Entre com sua conta Google (a mesma do Orbita) e o progresso sincroniza sozinho entre celular e computador.</p>
           <button class="btn-main" style="margin-top:10px" onclick="cloudLogin()">Entrar com Google</button>`
    }
  </div>
  <div class="gram-card glass"><h3>💾 Salvar / transferir progresso</h3>
    <p>Seu progresso fica salvo neste navegador. Pra ter backup ou levar pra outro aparelho (celular ↔ computador), exporte aqui e importe lá.</p>
    <div class="lesson-row" style="margin-top:12px">
      <div class="lesson-chip" onclick="exportProgress()"><span class="lc-icon">📤</span>Baixar arquivo</div>
      <div class="lesson-chip" onclick="copyProgress()"><span class="lc-icon">📋</span>Copiar código</div>
      <div class="lesson-chip" onclick="showImport()"><span class="lc-icon">📥</span>Importar</div>
    </div>
    <div id="import-box" hidden style="margin-top:12px">
      <textarea id="import-text" class="type-input" style="min-height:90px;font-family:monospace;font-size:.8rem" placeholder="Cole aqui o código copiado no outro aparelho — ou escolha o arquivo abaixo"></textarea>
      <input type="file" id="import-file" accept=".json,application/json" style="margin:10px 0;color:var(--text-dim)">
      <button class="btn-main" onclick="importProgress()">Importar progresso</button>
      <p class="ex-hint" style="margin-top:8px">⚠️ Importar substitui o progresso deste navegador.</p>
    </div>
  </div>
  <button class="btn-main btn-ghost" onclick="resetProgress()">Zerar progresso</button>`;
  $("#view").innerHTML = h;
  const fileInput = $("#import-file");
  if (fileInput) fileInput.addEventListener("change", e => {
    const f = e.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => { $("#import-text").value = r.result; };
    r.readAsText(f);
  });
}

/* ---------- backup / restore ---------- */
function exportProgress() {
  const blob = new Blob([JSON.stringify(S, null, 1)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `latinum-progresso-${todayKey()}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
  toast("📤 Arquivo de progresso baixado");
}
function copyProgress() {
  const code = "LATINVM1:" + btoa(unescape(encodeURIComponent(JSON.stringify(S))));
  const done = () => toast("📋 Código copiado! Cole no outro aparelho.");
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code).then(done, () => promptCopy(code));
  } else promptCopy(code);
}
function promptCopy(code) {
  const box = $("#import-box"); box.hidden = false;
  $("#import-text").value = code;
  $("#import-text").select();
  toast("Selecione e copie o código acima");
}
function showImport() {
  const box = $("#import-box");
  box.hidden = !box.hidden;
  if (!box.hidden) { $("#import-text").value = ""; $("#import-text").focus(); }
}
function importProgress() {
  let raw = $("#import-text").value.trim();
  if (!raw) { toast("Cole o código ou escolha o arquivo primeiro"); return; }
  try {
    if (raw.startsWith("LATINVM1:")) raw = decodeURIComponent(escape(atob(raw.slice(9))));
    const data = JSON.parse(raw);
    if (typeof data.xp !== "number" || typeof data.lessons !== "object")
      throw new Error("formato");
    if (!confirm(`Importar progresso com ${data.xp} XP e ${Object.keys(data.lessons || {}).length} lições? O progresso atual deste navegador será substituído.`)) return;
    S = Object.assign({}, DEFAULT_STATE, data);
    save(); renderStats();
    toast("📥 Progresso importado!");
    App.go("profile");
  } catch (e) {
    toast("❌ Código/arquivo inválido — confere se copiou inteiro");
  }
}
function resetProgress() {
  if (!confirm("Zerar todo o progresso (XP, streak, lições, SRS)?" + (_fbUser ? " Isso também zera a cópia na nuvem." : ""))) return;
  S = { ...DEFAULT_STATE, lessons: {}, srs: {}, words: {}, readFab: {} };
  save(); renderStats(); App.go("home");
}

/* ============================================================
   ATALHOS DE TECLADO (estilo Duolingo)
   1-9/0 escolhe opção · Enter confirma/continua · Backspace desfaz no build
   ============================================================ */
document.addEventListener("keydown", e => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const tag = document.activeElement && document.activeElement.tagName;
  const typing = tag === "INPUT" || tag === "TEXTAREA";

  if (e.key === "Enter") {
    if (typing) return; // inputs já tratam Enter
    const cont = $("#btn-continue");
    if (cont && cont.style.display !== "none" && cont.offsetParent) { cont.click(); e.preventDefault(); return; }
    const check = $("#btn-check");
    if (check && !check.disabled && check.style.display !== "none" && check.offsetParent) { check.click(); e.preventDefault(); return; }
    const main = document.querySelector(".exercise .btn-main:not(#btn-check), .lesson-end .btn-main");
    if (main && main.offsetParent) { main.click(); e.preventDefault(); }
    return;
  }
  if (typing) return;

  if (/^[0-9]$/.test(e.key)) {
    const idx = e.key === "0" ? 9 : parseInt(e.key, 10) - 1;
    const opts = [...document.querySelectorAll(".opt")];
    if (opts.length && opts.some(b => !b.disabled)) {
      if (opts[idx] && !opts[idx].disabled) { opts[idx].click(); e.preventDefault(); }
      return;
    }
    const pairs = [...document.querySelectorAll(".pair-btn")];
    if (pairs.length) {
      if (pairs[idx] && !pairs[idx].classList.contains("done")) { pairs[idx].click(); e.preventDefault(); }
      return;
    }
    const toks = [...document.querySelectorAll("#bank .token")];
    if (toks.length) {
      const free = toks.filter(t => !t.classList.contains("ghost"));
      if (free[idx]) { free[idx].click(); e.preventDefault(); }
      return;
    }
    return;
  }
  if (e.key === "Backspace") {
    if (window._built && window._built.length && $("#build-area")) { tokRemove(window._built.length - 1); e.preventDefault(); }
    return;
  }
  if (e.key === "ArrowLeft" && typeof L !== "undefined" && L && L.queue[L.idx] && L.queue[L.idx].t === "flash") { flashPrev(); e.preventDefault(); return; }
  if (e.key === "ArrowRight" && typeof L !== "undefined" && L && L.queue[L.idx] && L.queue[L.idx].t === "flash") { flashNext(); e.preventDefault(); return; }
  if (e.key === "Escape") {
    const ov = $("#paradigm-ov");
    if (ov && !ov.hidden) { closeParadigm(); e.preventDefault(); return; }
    hideGloss();
    return;
  }
  if (e.key === " " && window._ab) { abToggle(); e.preventDefault(); }
});

/* ---------- toast ---------- */
let toastTimer = null;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg; t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.hidden = true; }, 2200);
}

/* ---------- boot ---------- */
initCloud();
renderStats();
renderHome();
// PWA: registra o service worker (só em https/localhost)
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
