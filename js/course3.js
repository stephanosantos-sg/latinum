/* ============================================================
   LATINVM — Expansão 2: Capitula XIII–XVIII + Fabellae 15–21
   Carrega DEPOIS de course2.js, ANTES de app.js.
   ============================================================ */

/* ================= CAPITVLVM XIII ================= */
COURSE.push({
  num: 13, roman: "XIII", icon: "📅",
  title: "Annus et Mēnsēs",
  subtitle: "O calendário · superlativo (-issimus) · 5ª declinação (diēs)",
  grammar: [
    { title: "O superlativo: -issimus",
      html: `"O mais … de todos":
      <br><span class="ex-la">Februārius mēnsis brev<b>issimus</b> annī est.</span> = Fevereiro é o mês mais curto do ano.
      <br><span class="ex-la">diēs long<b>issimus</b> · nox brevissima · mēnsis calidissimus</span>
      <br>Comparativo → superlativo: <span class="ex-la">longior → longissimus · brevior → brevissimus.</span>` },
    { title: "A 5ª declinação: diēs, diēī",
      html: `<table><tr><th>caso</th><th>singular</th><th>plural</th></tr>
      <tr><td>nom.</td><td class="la">diēs</td><td class="la">diēs</td></tr>
      <tr><td>acus.</td><td class="la">diem</td><td class="la">diēs</td></tr>
      <tr><td>gen.</td><td class="la">diēī</td><td class="la">diērum</td></tr>
      <tr><td>abl.</td><td class="la">diē</td><td class="la">diēbus</td></tr></table>
      Do mesmo grupo: <span class="ex-la">faciēs</span> (rosto), <span class="ex-la">rēs</span> (coisa) — vêm nos próximos capítulos.` },
    { title: "Ordinais e as estações",
      html: `<span class="ex-la">prīmus, secundus, tertius, quārtus, quīntus, sextus, septimus, octāvus, nōnus, decimus, ūndecimus, duodecimus… postrēmus</span> (último).
      <br>As 4 estações: <span class="ex-la">vēr</span> (primavera), <span class="ex-la">aestās</span> (verão), <span class="ex-la">autumnus</span> (outono), <span class="ex-la">hiems</span> (inverno).` }
  ],
  vocab: [
    { la: "annus", forms: "-ī m.", pt: "ano", ex: "Annus duodecim mēnsēs habet." },
    { la: "mēnsis", forms: "-is m.", pt: "mês", ex: "December mēnsis postrēmus est." },
    { la: "diēs", forms: "-ēī m.", pt: "dia", ex: "Annus trecentōs sexāgintā quīnque diēs habet." },
    { la: "nox", forms: "noctis f.", pt: "noite", ex: "Hieme noctēs longae sunt." },
    { la: "hōra", forms: "-ae f.", pt: "hora", ex: "Diēs in duodecim hōrās dīviditur." },
    { la: "tempus", forms: "-oris n.", pt: "tempo", ex: "Saeculum longum tempus est." },
    { la: "saeculum", forms: "-ī n.", pt: "século (100 anos)", ex: "Centum annī sunt saeculum." },
    { la: "vēr", forms: "vēris n.", pt: "primavera", ex: "Vēr initium annī antīquī erat." },
    { la: "aestās", forms: "-ātis f.", pt: "verão", ex: "Aestāte diēs longī sunt." },
    { la: "autumnus", forms: "-ī m.", pt: "outono", ex: "Autumnus post aestātem venit." },
    { la: "hiems", forms: "hiemis f.", pt: "inverno", ex: "Hiems frīgida est." },
    { la: "lūna", forms: "-ae f.", pt: "lua", ex: "Lūna noctem illūstrat." },
    { la: "stēlla", forms: "-ae f.", pt: "estrela", ex: "Stēllae in caelō lūcent." },
    { la: "lūx", forms: "lūcis f.", pt: "luz", ex: "Sōl lūcem diēī dat." },
    { la: "initium", forms: "-ī n.", pt: "início, começo", ex: "Prīma hōra initium diēī est." },
    { la: "calidus", forms: "-a -um", pt: "quente", ex: "Iūlius mēnsis calidissimus est." },
    { la: "frīgidus", forms: "-a -um", pt: "frio", ex: "Hiems frīgida est." },
    { la: "clārus", forms: "-a -um", pt: "claro, brilhante", ex: "Sōl clārior est quam lūna." },
    { la: "obscūrus", forms: "-a -um", pt: "escuro", ex: "Nox obscūra est." },
    { la: "aequus", forms: "-a -um", pt: "igual", ex: "Diēs atque nox aequae sunt." },
    { la: "tōtus", forms: "-a -um", pt: "todo, inteiro", ex: "Tōtō annō hōrae duodecim sunt." },
    { la: "postrēmus", forms: "-a -um", pt: "último", ex: "December mēnsis postrēmus est." },
    { la: "dīviditur", forms: "v. pass.", pt: "é dividido", ex: "Annus in mēnsēs dīviditur." },
    { la: "illūstrat", forms: "v.", pt: "ilumina", ex: "Lūna noctem illūstrat." },
    { la: "lūcet", forms: "v.", pt: "brilha", ex: "Sōl in caelō lūcet." },
    { la: "incipit", forms: "v.", pt: "começa", ex: "Novus annus incipit." },
    { la: "nunc", forms: "adv.", pt: "agora", ex: "Nunc hiems est." },
    { la: "tunc", forms: "adv.", pt: "então, naquele tempo", ex: "Tunc mēnsis prīmus erat Mārtius." },
    { la: "vel", forms: "conj.", pt: "ou", ex: "Trecentī sexāgintā quīnque diēs vel annus." },
    { la: "item", forms: "adv.", pt: "igualmente, do mesmo modo", ex: "Item nox in hōrās dīviditur." }
  ],
  pensum: [
    { t: "mcq", q: "Quot mēnsēs habet annus?", options: ["Duodecim", "Decem", "Trecentōs"], a: 0,
      why: "12 meses; 365 dias." },
    { t: "cloze", prompt: "Februārius mēnsis brev______ annī est.", options: ["-issimus", "-ior", "-is"], a: 0,
      why: "Superlativo: brevissimus = o mais curto." },
    { t: "gap", prompt: "Annus in duodecim mēnsēs ___.", a: ["dividitur", "dīviditur"], hint: "(é dividido)",
      why: "Passiva: dīviditur." },
    { t: "mcq", q: "diēs, diēī (5ª declinação): qual é o acusativo singular?", options: ["diem", "diēī", "diē"], a: 0,
      why: "5ª declinação: acusativo em -em." },
    { t: "cloze", prompt: "Hiem__ diēs brevēs et noctēs longae sunt.", options: ["-e", "-s", "-em"], a: 0,
      why: "Ablativo de tempo: hieme = no inverno." },
    { t: "build", pt: "A lua ilumina a noite.", la: "Lūna noctem illūstrat", extra: ["diēs", "lūcet"] },
    { t: "read", text: "Quattuor tempora annī sunt: vēr, aestās, autumnus, hiems. Aestāte diēs longī et calidī sunt; hieme diēs brevēs et frīgidī. Mēnsis Iūlius calidissimus annī est.",
      q: "Quī mēnsis calidissimus est?", options: ["Iūlius", "Februārius", "December"], a: 0,
      why: "«Mēnsis Iūlius calidissimus annī est»." },
    { t: "listen", text: "Nox obscūra est, sed lūna et stēllae lūcent.", options: ["Nox obscūra est, sed lūna et stēllae lūcent", "Diēs clārus est et sōl lūcet", "Hiems frīgida est et nox longa"], a: 0,
      why: "nox (noite) + lūna + stēllae." },
    { t: "mcq", q: "vēr · aestās · autumnus · hiems — o que é aestās?", options: ["verão", "primavera", "outono"], a: 0,
      why: "aestās, -ātis f. = verão (aestāte = no verão)." },
    { t: "type", prompt: "“inverno”:", a: ["hiems"], why: "hiems, hiemis f." }
  ],
  lectio: {
    title: "Annus et Mēnsēs",
    source: "Adaptado de Familia Romana, cap. XIII",
    text: `Annus in duodecim mēnsēs dīviditur, quibus haec sunt nōmina: Iānuārius, mēnsis prīmus; Februārius, secundus; Mārtius, tertius; Aprīlis, quārtus; Māius, quīntus; Iūnius, sextus; Iūlius, septimus; Augustus, octāvus; September, nōnus; Octōber, decimus; November, ūndecimus; December, mēnsis duodecimus ac postrēmus. Ūnus annus trecentōs sexāgintā quīnque diēs habet. Centum annī sunt saeculum: saeculum longum tempus est!

Mēnsis Februārius brevissimus est: duodētrīgintā diēs tantum habet. Diēs longissimus — et nox brevissima — est mēnse Iūniō. Mēnsēs Iūlius et Augustus ab hominibus nōminantur: Iūlius ā Iūliō Caesare, Augustus ā Caesare Augustō.

Quattuor tempora annī sunt: vēr, aestās, autumnus, hiems. Aestās calida est: mēnsis Iūlius calidissimus annī est. Hiems frīgida est: hieme diēs brevēs et noctēs longae sunt. Vēr et autumnus inter aestātem et hiemem sunt.

Diēs in duodecim hōrās dīviditur: prīma hōra initium diēī est. Nocte sōl nōn lūcet: tunc lūna et stēllae caelum illūstrant. Sed lūna nōn tam clāra est quam sōl: sōl multō clārior est quam lūna et stēllae omnēs.`,
    questions: [
      { q: "Quot diēs habet annus?", options: ["Trecentōs sexāgintā quīnque", "Duodecim", "Centum"], a: 0 },
      { q: "Quī mēnsis brevissimus est?", options: ["Februārius", "Iūnius", "December"], a: 0 },
      { q: "Quandō est diēs longissimus?", options: ["Mēnse Iūniō", "Mēnse Februāriō", "Hieme"], a: 0 },
      { q: "Quid caelum nocte illūstrat?", options: ["Lūna et stēllae", "Sōl", "Nihil"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XIV ================= */
COURSE.push({
  num: 14, roman: "XIV", icon: "🐓",
  title: "Novus Diēs",
  subtitle: "Acordar romano · uter? uterque, neuter, alter · particípio presente",
  grammar: [
    { title: "uter? · uterque · neuter · alter",
      html: `Falando de <b>dois</b>:
      <br><span class="ex-la"><b>uter</b> puer aegrōtat?</span> = qual dos dois meninos está doente?
      <br><span class="ex-la"><b>uterque</b> puer</span> = cada um dos dois, ambos.
      <br><span class="ex-la"><b>neuter</b> puer</span> = nenhum dos dois.
      <br><span class="ex-la"><b>alter</b>… <b>alter</b>…</span> = um… o outro…: <span class="ex-la">Alter puer dormit, alter vigilat.</span>` },
    { title: "Particípio presente: -ns",
      html: `O "-ndo" do latim, usado como adjetivo:
      <br><span class="ex-la">gallus can<b>ēns</b></span> = o galo que canta (cantando)
      <br><span class="ex-la">puer dormi<b>ēns</b></span> = o menino que dorme
      <br>Acusativo: <span class="ex-la">gallum canentem, puerum dormientem.</span>` },
    { title: "valet / aegrōtat · mihi, tibi",
      html: `<span class="ex-la">Mārcus <b>valet</b>, Quīntus <b>aegrōtat</b>.</span> = Marcos está bem de saúde, Quinto está doente.
      <br>Dativos dos pronomes: <b>mihi</b> = para mim, <b>tibi</b> = para ti:
      <br><span class="ex-la">Caput mihi dolet. Quid tibi dolet?</span>` }
  ],
  vocab: [
    { la: "gallus", forms: "-ī m.", pt: "galo", ex: "Gallus canēns novum diem salūtat." },
    { la: "fenestra", forms: "-ae f.", pt: "janela", ex: "Fenestra aperta est." },
    { la: "parentēs", forms: "-um m. pl.", pt: "os pais", ex: "Mārcus parentēs salūtat." },
    { la: "vestīmenta", forms: "-ōrum n. pl.", pt: "roupas", ex: "Puer vestīmenta gerit." },
    { la: "tunica", forms: "-ae f.", pt: "túnica", ex: "Mārcus tunicam gerit." },
    { la: "toga", forms: "-ae f.", pt: "toga", ex: "Virī Rōmānī togās gerunt." },
    { la: "calceus", forms: "-ī m.", pt: "sapato", ex: "Calceōs in pedēs pōnit." },
    { la: "faciēs", forms: "-ēī f.", pt: "rosto, face", ex: "Puer faciem lavat." },
    { la: "quiētus", forms: "-a -um", pt: "quieto, tranquilo", ex: "Vīlla quiēta est." },
    { la: "apertus", forms: "-a -um", pt: "aberto", ex: "Fenestra aperta est." },
    { la: "clausus", forms: "-a -um", pt: "fechado", ex: "Fenestra Quīntī clausa est." },
    { la: "sordidus", forms: "-a -um", pt: "sujo", ex: "Manūs sordidae sunt." },
    { la: "pūrus", forms: "-a -um", pt: "limpo, puro", ex: "Iam manūs pūrae sunt." },
    { la: "uter", forms: "-tra -trum", pt: "qual dos dois?", ex: "Uter puer aegrōtat?" },
    { la: "uterque", forms: "utraque utrumque", pt: "cada um dos dois, ambos", ex: "Uterque puer in cubiculō parvō cubat." },
    { la: "neuter", forms: "-tra -trum", pt: "nenhum dos dois", ex: "Neuter puer sē movet." },
    { la: "alter", forms: "-era -erum", pt: "um (de dois); o outro", ex: "Alter dormit, alter vigilat." },
    { la: "omnis", forms: "-e", pt: "todo, cada", ex: "Omnēs dormiunt." },
    { la: "cubat", forms: "v.", pt: "está deitado, dorme", ex: "Mārcus in lectō cubat." },
    { la: "vigilat", forms: "v.", pt: "está acordado, vigia", ex: "Quīntus vigilat." },
    { la: "valet", forms: "v.", pt: "está bem de saúde", ex: "Mārcus valet." },
    { la: "aegrōtat", forms: "v.", pt: "está doente", ex: "Quīntus aegrōtat." },
    { la: "excitat", forms: "v.", pt: "acorda (alguém)", ex: "Dāvus puerum excitat." },
    { la: "surgit", forms: "v.", pt: "levanta-se", ex: "Mārcus ē lectō surgit." },
    { la: "lavat", forms: "v.", pt: "lava", ex: "Puer manūs et faciem lavat." },
    { la: "gerit", forms: "v.", pt: "veste, usa", ex: "Mārcus tunicam gerit." },
    { la: "inquit", forms: "v.", pt: "diz (ele)", ex: "'Hōra prīma est' inquit Dāvus." },
    { la: "mihi", forms: "dat.", pt: "para mim, me", ex: "Caput mihi dolet." },
    { la: "tibi", forms: "dat.", pt: "para ti, te", ex: "Quid tibi dolet?" },
    { la: "adhūc", forms: "adv.", pt: "ainda", ex: "Adhūc nox est." },
    { la: "māne", forms: "adv.", pt: "de manhã", ex: "Māne gallus canit." },
    { la: "hodiē", forms: "adv.", pt: "hoje", ex: "Hodiē novus diēs incipit." },
    { la: "valē", forms: "interj.", pt: "tchau! adeus!", ex: "Valē, pater!" }
  ],
  pensum: [
    { t: "mcq", q: "“Alter puer dormit, alter vigilat” =", options: ["Um menino dorme, o outro está acordado", "Ambos os meninos dormem", "Nenhum dos dois dorme"], a: 0,
      why: "alter… alter… = um… o outro…" },
    { t: "cloze", prompt: "___ puer aegrōtat, Mārcusne an Quīntus?", options: ["Uter", "Uterque", "Neuter"], a: 0,
      why: "uter? = qual dos dois? (pergunta)." },
    { t: "mcq", q: "“gallus canēns” significa:", options: ["o galo que canta", "o galo cantou", "canta, galo!"], a: 0,
      why: "Particípio presente: canēns = que canta." },
    { t: "gap", prompt: "Caput ___ dolet!", a: ["mihi"], hint: "(para mim — 'minha cabeça dói')",
      why: "dolet + dativo: mihi." },
    { t: "cloze", prompt: "Fenestra Mārcī apert__ est, fenestra Quīntī claus__.", options: ["-a / -a", "-us / -us", "-um / -um"], a: 0,
      why: "fenestra é feminino: aperta, clausa." },
    { t: "build", pt: "Davo acorda o menino que dorme.", la: "Dāvus puerum dormientem excitat", extra: ["dormiēns", "vigilat"] },
    { t: "read", text: "Nox est. Mārcus bene dormit, sed Quīntus dormīre nōn potest, quod caput et pēs eī dolet. Alter puer valet, alter aegrōtat.",
      q: "Uter puer dormīre nōn potest?", options: ["Quīntus", "Mārcus", "Uterque"], a: 0,
      why: "Quinto está doente (a queda da árvore!) e fica acordado." },
    { t: "listen", text: "Surge ē lectō! Hōra prīma est.", options: ["Surge ē lectō! Hōra prīma est.", "Dormī bene! Nox est.", "Gallus canit māne."], a: 0,
      why: "surge! = levanta! — o grito do Davo de manhã." },
    { t: "gap", prompt: "Puer aquā frīgidā manūs et faciem ___.", a: ["lavat"], hint: "(lava)",
      why: "lavat = lava; depois as mãos ficam pūrae." },
    { t: "type", prompt: "“tchau / adeus” (para uma pessoa):", a: ["vale", "valē"], why: "Valē! (plural: valēte!)" }
  ],
  lectio: {
    title: "Novus Diēs",
    source: "Adaptado de Familia Romana, cap. XIV",
    text: `Nox est. Vīlla Iūliī obscūra et quiēta est. Mārcus quiētus in lectō suō cubat: is bene dormit. Quīntus dormīre nōn potest, quod et caput et pēs eī dolet — itaque is nōn dormit, sed vigilat. Alter puer dormit, alter vigilat; alter valet, alter aegrōtat.

Fenestra Mārcī aperta est, et āēr frīgidus cubiculum intrat; fenestra Quīntī clausa est, quia puer aeger est. Uterque puer in cubiculō parvō cubat; neuter in cubiculō magnō.

Ecce gallus canit: "Cucurrū!" Gallus canēns novum diem salūtat. Iam māne est. Dāvus cubiculum intrat: "Hōra prīma est" inquit. "Surge ē lectō, puer!" Mārcus sē vertit neque oculōs aperit. "Surge, Mārce!" Tandem puer surgit.

Mārcus aquā frīgidā manūs et faciem lavat: iam manūs eius pūrae sunt, nōn sordidae. Tum puer vestīmenta gerit: tunicam et togam; calceōs in pedēs pōnit. Mārcus pānem ēst et parentēs salūtat: "Valē, pater! Valē, māter!" Puer cum Dāvō ad lūdum it — novus diēs incipit!`,
    questions: [
      { q: "Uter puer vigilat?", options: ["Quīntus", "Mārcus", "Neuter"], a: 0 },
      { q: "Cūr fenestra Quīntī clausa est?", options: ["Quia puer aeger est", "Quia nox est", "Quia gallus canit"], a: 0 },
      { q: "Quis Mārcum excitat?", options: ["Dāvus", "Aemilia", "Gallus ipse"], a: 0 },
      { q: "Quō it Mārcus māne?", options: ["Ad lūdum", "In hortum", "Tūsculum ad medicum"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XV ================= */
COURSE.push({
  num: 15, roman: "XV", icon: "🏫",
  title: "Magister et Discipulī",
  subtitle: "A escola · EU, TU, NÓS, VÓS — as pessoas do verbo!",
  grammar: [
    { title: "As pessoas do verbo (a grande virada!)",
      html: `Até aqui tudo era "ele/eles". Agora o verbo conjuga inteiro:
      <table><tr><th>pessoa</th><th>ser</th><th>cantar</th></tr>
      <tr><td class="la">ego</td><td class="la">sum</td><td class="la">cantō</td></tr>
      <tr><td class="la">tū</td><td class="la">es</td><td class="la">cantās</td></tr>
      <tr><td class="la">is/ea</td><td class="la">est</td><td class="la">cantat</td></tr>
      <tr><td class="la">nōs</td><td class="la">sumus</td><td class="la">cantāmus</td></tr>
      <tr><td class="la">vōs</td><td class="la">estis</td><td class="la">cantātis</td></tr>
      <tr><td class="la">iī/eae</td><td class="la">sunt</td><td class="la">cantant</td></tr></table>
      Desinências: <b>-ō, -s, -t, -mus, -tis, -nt</b>. O pronome é opcional: <span class="ex-la">sōlus sum</span> já diz "eu estou sozinho".` },
    { title: "rēs, reī (5ª declinação)",
      html: `<span class="ex-la">rēs</span> = coisa: <span class="ex-la">Mārcus librum et cēterās rēs fert.</span>
      <br>Declina como diēs: <span class="ex-la">rēs, rem, reī, rē — pl. rēs, rērum, rēbus.</span>` },
    { title: "antequam · nōndum · statim · solet",
      html: `<span class="ex-la">Titus iānuam pulsat <b>antequam</b> intrat.</span> = antes de entrar.
      <br><b>nōndum</b> = ainda não · <b>statim</b> = imediatamente.
      <br><span class="ex-la">Magister discipulōs improbōs verberāre <b>solet</b>.</span> = costuma (fazer algo).` }
  ],
  vocab: [
    { la: "lūdus", forms: "-ī m.", pt: "escola", ex: "Puerī māne in lūdum eunt." },
    { la: "magister", forms: "-trī m.", pt: "professor, mestre", ex: "Magister lūdī Diodōrus est." },
    { la: "discipulus", forms: "-ī m.", pt: "aluno", ex: "Sextus discipulus probus est." },
    { la: "sella", forms: "-ae f.", pt: "cadeira", ex: "Sextus in sellā sedet." },
    { la: "virga", forms: "-ae f.", pt: "vara (de castigo)", ex: "Magister discipulōs virgā verberat." },
    { la: "iānua", forms: "-ae f.", pt: "porta", ex: "Titus iānuam pulsat." },
    { la: "rēs", forms: "reī f.", pt: "coisa", ex: "Mārcus cēterās rēs fert." },
    { la: "tergum", forms: "-ī n.", pt: "costas", ex: "Puer tergum vertit." },
    { la: "sevērus", forms: "-a -um", pt: "severo, rígido", ex: "Diodōrus magister sevērus est." },
    { la: "tacitus", forms: "-a -um", pt: "calado, em silêncio", ex: "Discipulus tacitus sedet." },
    { la: "ego", forms: "pron.", pt: "eu", ex: "Ego sōlus sum." },
    { la: "tū", forms: "pron.", pt: "tu, você", ex: "Cūr tū sōlus es?" },
    { la: "nōs", forms: "pron.", pt: "nós", ex: "Nōs discipulī sumus." },
    { la: "vōs", forms: "pron.", pt: "vós, vocês", ex: "Vōs improbī estis!" },
    { la: "sum / es / est", forms: "v.", pt: "sou / és / é", ex: "Ego probus sum, tū improbus es." },
    { la: "sumus / estis / sunt", forms: "v.", pt: "somos / sois / são", ex: "Nōs discipulī sumus." },
    { la: "sedet", forms: "v.", pt: "está sentado", ex: "Sextus in sellā sedet." },
    { la: "cōnsīdit", forms: "v.", pt: "senta-se", ex: "Cōnsīde, Sexte!" },
    { la: "advenit", forms: "v.", pt: "chega", ex: "Titus ad lūdum advenit." },
    { la: "metuit", forms: "v.", pt: "teme, tem medo de", ex: "Mārcus magistrum metuit." },
    { la: "pūnit", forms: "v.", pt: "castiga, pune", ex: "Magister improbōs pūnit." },
    { la: "docet", forms: "v.", pt: "ensina", ex: "Magister puerōs docet." },
    { la: "solet", forms: "v. + inf.", pt: "costuma", ex: "Magister sevērus pūnīre solet." },
    { la: "redit", forms: "v.", pt: "volta, retorna", ex: "Post lūdum domum redit." },
    { la: "domum", forms: "acus.", pt: "para casa", ex: "Discipulī domum eunt." },
    { la: "exclāmat", forms: "v.", pt: "exclama", ex: "'Ō improbī!' exclāmat magister." },
    { la: "antequam", forms: "conj.", pt: "antes de/que", ex: "Iānuam pulsat antequam intrat." },
    { la: "nōndum", forms: "adv.", pt: "ainda não", ex: "Cēterī nōndum adsunt." },
    { la: "statim", forms: "adv.", pt: "imediatamente, já", ex: "Statim intrat." },
    { la: "at", forms: "conj.", pt: "mas, porém", ex: "At Mārcus improbus est!" }
  ],
  pensum: [
    { t: "cloze", prompt: "Ego sōlus ___, quod cēterī discipulī absunt.", options: ["sum", "es", "est"], a: 0,
      why: "ego → sum (1ª pessoa)." },
    { t: "cloze", prompt: "Cūr tū sōlus ___, Sexte?", options: ["es", "sum", "est"], a: 0,
      why: "tū → es (2ª pessoa)." },
    { t: "cloze", prompt: "Nōs discipulī ___.", options: ["sumus", "estis", "sunt"], a: 0,
      why: "nōs → sumus." },
    { t: "cloze", prompt: "Ego cant__, tū cantā__.", options: ["-ō / -s", "-t / -t", "-mus / -tis"], a: 0,
      why: "Desinências: -ō (eu), -s (tu)." },
    { t: "gap", prompt: "Mārcus magistrum ___, nam Diodōrus sevērus est.", a: ["metuit"], hint: "(teme)",
      why: "metuit = timet." },
    { t: "mcq", q: "“Titus iānuam pulsat antequam intrat” =", options: ["Tito bate na porta antes de entrar", "Tito bate na porta depois de entrar", "Tito entra sem bater"], a: 0,
      why: "antequam = antes de." },
    { t: "build", pt: "Nós somos alunos bons.", la: "Nōs discipulī probī sumus", extra: ["estis", "sunt"] },
    { t: "read", text: "Magister intrāns Sextum sōlum in sellā sedentem videt. Sextus dē sellā surgēns magistrum salūtat: 'Salvē, magister!' — 'Salvē, Sexte! Cōnsīde!'",
      q: "Quid Sextus facit antequam magistrum salūtat?", options: ["Dē sellā surgit", "Iānuam claudit", "Domum redit"], a: 0,
      why: "«dē sellā surgēns» — levanta em respeito." },
    { t: "listen", text: "Cūr tū sōlus es, Sexte?", options: ["Cūr tū sōlus es, Sexte?", "Cūr vōs sōlī estis?", "Quis sōlus est?"], a: 0,
      why: "tū… es — segunda pessoa do singular." },
    { t: "type", prompt: "Complete: Vōs improbī ___! (sois)", a: ["estis"], why: "vōs → estis." }
  ],
  lectio: {
    title: "Magister et Discipulī",
    source: "Adaptado de Familia Romana, cap. XV",
    text: `Mārcus librum et cēterās rēs sēcum ferēns Tūsculum ambulat. Illīc est lūdus puerōrum. Magister lūdī est vir Graecus, cui nōmen est Diodōrus. Mārcus magistrum metuit, Diodōrus enim magister sevērus est, quī discipulōs improbōs virgā verberāre solet.

Sextus, quī prīmus ad lūdum advenit, sōlus lūdum intrat. Magister intrāns Sextum in sellā sedentem videt. Sextus dē sellā surgēns magistrum salūtat: "Salvē, magister!" — "Salvē, Sexte! Cōnsīde!" Discipulus tacitus ante magistrum sedet.

Magister interrogat: "Cūr tū sōlus es, Sexte?" — "Ego sōlus sum, quod cēterī discipulī omnēs absunt." Magister exclāmat: "Ō, discipulōs improbōs!" — "Num ego discipulus improbus sum?" — "Immō tū probus es, Sexte, at Mārcus et Quīntus et Titus improbī sunt!"

Hīc Titus ad lūdum advenit et iānuam pulsat antequam intrat: discipulus nōn statim intrat! Postrēmō Mārcus quoque advenit. Magister: "Cūr nunc venīs, Mārce? Sextus iam adest!" Mārcus nihil respondet. At magister "Nōs tē nōn exspectāmus" inquit. "Cōnsīdite, puerī, et tacēte!" Discipulī cōnsīdunt et tacent.`,
    questions: [
      { q: "Quis est Diodōrus?", options: ["Magister lūdī, vir Graecus", "Discipulus probus", "Servus Iūliī"], a: 0 },
      { q: "Quis prīmus ad lūdum advenit?", options: ["Sextus", "Mārcus", "Titus"], a: 0 },
      { q: "Quid Titus facit antequam intrat?", options: ["Iānuam pulsat", "Exclāmat", "Magistrum verberat"], a: 0 },
      { q: "Quōmodo magister improbōs pūnīre solet?", options: ["Virgā verberat", "Domum mittit", "Nihil facit"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XVI ================= */
COURSE.push({
  num: 16, roman: "XVI", icon: "⛵",
  title: "Tempestās",
  subtitle: "No mar · verbos depoentes · ablativo absoluto",
  grammar: [
    { title: "Verbos depoentes: forma passiva, sentido ativo",
      html: `Um grupo de verbos só existe na forma passiva, mas com sentido ativo:
      <br><span class="ex-la">laetātur</span> = alegra-se · <span class="ex-la">verētur</span> = teme · <span class="ex-la">sequitur</span> = segue · <span class="ex-la">loquitur</span> = fala · <span class="ex-la">proficīscitur</span> = parte · <span class="ex-la">orītur</span> = surge, nasce · <span class="ex-la">intuētur</span> = olha para · <span class="ex-la">opperītur</span> = espera.
      <br><span class="ex-la">Nāvis ē portū proficīscitur.</span> = O navio parte do porto.` },
    { title: "Ablativo absoluto",
      html: `Duas palavras no ablativo = uma oração inteira de contexto:
      <br><span class="ex-la"><b>Sōle oriente</b>, nāvis ē portū ēgreditur.</span> = Ao nascer do sol…
      <br><span class="ex-la"><b>Ventō secundō</b>, nāvis plēnīs vēlīs vehitur.</span> = Com vento favorável…
      <br><span class="ex-la"><b>Marī turbidō</b>, nautae perterritī sunt.</span> = Estando o mar agitado…` },
    { title: "urbs · nāvis · a costa",
      html: `<span class="ex-la">urbs, urbis f.</span> = cidade grande (Roma é <i>urbs</i>; Túsculo é <i>oppidum</i>).
      <br><span class="ex-la">Ōra maritima</span> = o litoral; <span class="ex-la">portus, -ūs m.</span> = porto (4ª decl.);
      <span class="ex-la">Ōstia sita est eō locō quō Tiberis in mare īnfluit.</span>` }
  ],
  vocab: [
    { la: "nāvis", forms: "-is f.", pt: "navio", ex: "Nāvis ē portū proficīscitur." },
    { la: "nauta", forms: "-ae m.", pt: "marinheiro", ex: "Nautae vēla dant." },
    { la: "portus", forms: "-ūs m.", pt: "porto", ex: "Ōstia magnum portum habet." },
    { la: "ōra", forms: "-ae f.", pt: "costa, litoral", ex: "In ōrā Italiae multī portūs sunt." },
    { la: "urbs", forms: "urbis f.", pt: "cidade (grande)", ex: "Rōma urbs magna est." },
    { la: "locus", forms: "-ī m.", pt: "lugar", ex: "Eō locō Tiberis in mare īnfluit." },
    { la: "ventus", forms: "-ī m.", pt: "vento", ex: "Ventus secundus est." },
    { la: "tempestās", forms: "-ātis f.", pt: "tempestade", ex: "Tempestās oritur!" },
    { la: "flūctus", forms: "-ūs m.", pt: "onda", ex: "Flūctūs altī nāvem pulsant." },
    { la: "vēlum", forms: "-ī n.", pt: "vela (de navio)", ex: "Nāvis plēnīs vēlīs vehitur." },
    { la: "gubernātor", forms: "-ōris m.", pt: "piloto, timoneiro", ex: "Gubernātor nāvem gubernat." },
    { la: "fulgur", forms: "-uris n.", pt: "relâmpago", ex: "Fulgur caelum illūstrat." },
    { la: "altum", forms: "-ī n.", pt: "alto-mar", ex: "Nāvis in altō est." },
    { la: "maritimus", forms: "-a -um", pt: "marítimo, do mar", ex: "Ōstia oppidum maritimum est." },
    { la: "situs", forms: "-a -um", pt: "situado", ex: "Rōma ad Tiberim sita est." },
    { la: "proficīscitur", forms: "v. dep.", pt: "parte, põe-se a caminho", ex: "Nāvis ē portū proficīscitur." },
    { la: "laetātur", forms: "v. dep.", pt: "alegra-se", ex: "Lȳdia laetātur." },
    { la: "verētur", forms: "v. dep.", pt: "teme, receia", ex: "Nauta tempestātem verētur." },
    { la: "sequitur", forms: "v. dep.", pt: "segue", ex: "Lȳdia amīcum suum sequitur." },
    { la: "loquitur", forms: "v. dep.", pt: "fala, conversa", ex: "Mēdus cum Lȳdiā loquitur." },
    { la: "orītur", forms: "v. dep.", pt: "surge, nasce (sol)", ex: "Sōle oriente nāvis ēgreditur." },
    { la: "intuētur", forms: "v. dep.", pt: "olha para, contempla", ex: "Mēdus ōram intuētur." },
    { la: "opperītur", forms: "v. dep.", pt: "espera, aguarda", ex: "Nāvis nōs opperītur." },
    { la: "ēgreditur", forms: "v. dep.", pt: "sai", ex: "Nāvis ē portū ēgreditur." },
    { la: "nāvigat", forms: "v.", pt: "navega", ex: "Nāvis per mare nāvigat." },
    { la: "gubernat", forms: "v.", pt: "pilota, governa", ex: "Gubernātor nāvem gubernat." },
    { la: "servat", forms: "v.", pt: "salva", ex: "Servāte nōs, dī bonī!" },
    { la: "īnfluit", forms: "v.", pt: "deságua", ex: "Tiberis in mare īnfluit." },
    { la: "appellātur", forms: "v. pass.", pt: "é chamado", ex: "Mare nostrum appellātur." },
    { la: "occidit", forms: "v.", pt: "põe-se (o sol)", ex: "Sōl occidit: nox venit." },
    { la: "vērō", forms: "adv.", pt: "de fato; porém", ex: "Mēdus vērō nōn laetātur." },
    { la: "paulum", forms: "adv.", pt: "pouco", ex: "Paulum aquae in Tiberī est." }
  ],
  pensum: [
    { t: "mcq", q: "“Nāvis ē portū proficīscitur” — proficīscitur é:", options: ["depoente: forma passiva, sentido ativo (parte)", "passiva normal (é partido)", "erro do texto"], a: 0,
      why: "Depoentes só existem na forma passiva: proficīscitur = parte." },
    { t: "cloze", prompt: "Lȳdia laetā___, Mēdus vērō ōram Italiae intuē___.", options: ["-tur / -tur", "-t / -t", "-nt / -nt"], a: 0,
      why: "Depoentes: laetātur (alegra-se), intuētur (contempla)." },
    { t: "mcq", q: "“Sōle oriente, nāvis ēgreditur” =", options: ["Ao nascer do sol, o navio sai", "O sol nasce do navio", "O navio nasce com o sol"], a: 0,
      why: "Ablativo absoluto: sōle oriente = enquanto o sol nasce." },
    { t: "gap", prompt: "Gubernātor nāvem ___.", a: ["gubernat"], hint: "(pilota)",
      why: "gubernātor gubernat — daí vem 'governar'." },
    { t: "cloze", prompt: "Rōma urbs magna est; Tūsculum oppid__ parv__ est.", options: ["-um / -um", "-us / -us", "-a / -a"], a: 0,
      why: "urbs = cidade grande; oppidum (neutro) = cidade pequena." },
    { t: "build", pt: "Ondas altas batem no navio.", la: "Flūctūs altī nāvem pulsant", extra: ["flūctus", "pulsat"] },
    { t: "read", text: "Ōstia est oppidum maritimum quod magnum portum habet. Ōstia sita est eō locō quō Tiberis in mare īnfluit. Omnēs nāvēs Ōstiam adīre possunt.",
      q: "Ubi sita est Ōstia?", options: ["Quō Tiberis in mare īnfluit", "In monte prope Rōmam", "In īnsulā Graecā"], a: 0,
      why: "Óstia fica na foz do Tibre — o porto de Roma." },
    { t: "listen", text: "Tempestās oritur et flūctūs nāvem pulsant.", options: ["Tempestās oritur et flūctūs nāvem pulsant", "Ventō secundō nāvis vehitur", "Sōl lūcet et mare quiētum est"], a: 0,
      why: "tempestās + flūctūs: o mar virou." },
    { t: "gap", prompt: "Lȳdia Mopsum relinquit et amīcum suum ___.", a: ["sequitur"], hint: "(segue — depoente)",
      why: "sequitur = segue." },
    { t: "type", prompt: "“porto”:", a: ["portus"], why: "portus, -ūs m. — 4ª declinação." }
  ],
  lectio: {
    title: "Tempestās",
    source: "Adaptado de Familia Romana, cap. XVI",
    text: `Rōma nōn ad mare, sed ad Tiberim flūmen sita est. Ōstia est oppidum maritimum quod magnum portum habet: Ōstia sita est eō locō quō Tiberis in mare īnfluit. In portū Ōstiēnsī multae nāvēs sunt.

Mēdus et Lȳdia, quī in patriam suam Graeciam īre volunt, Ōstiam adveniunt. In portū nāvis eōs opperītur. Mēdus et Lȳdia nāvem ascendunt, et sōle oriente nāvis ē portū ēgreditur. Ventō secundō nāvis plēnīs vēlīs per mare vehitur. Lȳdia laetātur: "Quam pulchrum est mare!" Mēdus vērō ōram Italiae intuētur, quae iam procul abest.

Sed sōle occidente ventus magnus mare turbat: tempestās oritur! Flūctūs altī nāvem pulsant; fulgura caelum illūstrant. Nautae perterritī sunt. Gubernātor, quī nāvem gubernāre nōn iam potest, clāmat: "Servāte nōs, dī bonī!" Mēdus quoque deōs vocat, et Lȳdia amīcum suum complectitur.

Post tempestātem sōl rūrsus oritur: mare iam quiētum est. Omnēs laetantur, et nāvis per mare quiētum ad Graeciam nāvigat.`,
    questions: [
      { q: "Ubi sita est Ōstia?", options: ["Quō Tiberis in mare īnfluit", "Ad montem Tūsculānum", "In Graeciā"], a: 0 },
      { q: "Quō Mēdus et Lȳdia īre volunt?", options: ["In Graeciam", "Rōmam", "In Āfricam"], a: 0 },
      { q: "Quid nāvem in tempestāte pulsat?", options: ["Flūctūs altī", "Aliae nāvēs", "Nautae"], a: 0 },
      { q: "Quis nāvem gubernat?", options: ["Gubernātor", "Mēdus", "Neptūnus"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XVII ================= */
COURSE.push({
  num: 17, roman: "XVII", icon: "🔢",
  title: "Numerī Difficilēs",
  subtitle: "Aritmética na escola · a passiva em todas as pessoas · dezenas",
  grammar: [
    { title: "A passiva nas pessoas todas",
      html: `<table><tr><th>ativa</th><th>passiva</th></tr>
      <tr><td class="la">laudō (elogio)</td><td class="la">laudor (sou elogiado)</td></tr>
      <tr><td class="la">laudās</td><td class="la">laudāris</td></tr>
      <tr><td class="la">laudat</td><td class="la">laudātur</td></tr>
      <tr><td class="la">laudāmus</td><td class="la">laudāmur</td></tr>
      <tr><td class="la">laudātis</td><td class="la">laudāminī</td></tr>
      <tr><td class="la">laudant</td><td class="la">laudantur</td></tr></table>
      <span class="ex-la">Cūr ego semper ā tē reprehendor, numquam laudor?</span>` },
    { title: "As dezenas",
      html: `<span class="ex-la">decem</span> 10 · <span class="ex-la">vīgintī</span> 20 · <span class="ex-la">trīgintā</span> 30 · <span class="ex-la">quadrāgintā</span> 40 · <span class="ex-la">quīnquāgintā</span> 50 · <span class="ex-la">sexāgintā</span> 60 · <span class="ex-la">septuāgintā</span> 70 · <span class="ex-la">octōgintā</span> 80 · <span class="ex-la">nōnāgintā</span> 90 · <span class="ex-la">centum</span> 100.
      <br><span class="ex-la">Dīmidium centum est quīnquāgintā.</span>` },
    { title: "facilis/difficilis · rēctē/prāvē",
      html: `<span class="ex-la">Numerī parvī facilēs sunt, numerī magnī difficilēs.</span>
      <br><b>rēctē</b> = corretamente · <b>prāvē</b> = erradamente:
      <br><span class="ex-la">Sextus rēctē respondet; Mārcus prāvē respondet.</span>` }
  ],
  vocab: [
    { la: "vīgintī", forms: "num.", pt: "vinte (20)", ex: "Bis decem sunt vīgintī." },
    { la: "trīgintā", forms: "num.", pt: "trinta (30)", ex: "Ter decem sunt trīgintā." },
    { la: "quadrāgintā", forms: "num.", pt: "quarenta (40)", ex: "XL est quadrāgintā." },
    { la: "quīnquāgintā", forms: "num.", pt: "cinquenta (50)", ex: "Dīmidium centum est quīnquāgintā." },
    { la: "sexāgintā", forms: "num.", pt: "sessenta (60)", ex: "LX est sexāgintā." },
    { la: "nōnāgintā", forms: "num.", pt: "noventa (90)", ex: "Nōnāgintā sēstertiī īnsunt." },
    { la: "pars", forms: "partis f.", pt: "parte", ex: "Numerus in duās partēs dīviditur." },
    { la: "dīmidius", forms: "-a -um", pt: "meio, metade", ex: "Dīmidium decem est quīnque." },
    { la: "facilis", forms: "-e", pt: "fácil", ex: "Numerī parvī facilēs sunt." },
    { la: "difficilis", forms: "-e", pt: "difícil", ex: "Numerī magnī difficilēs sunt." },
    { la: "doctus", forms: "-a -um", pt: "instruído, sábio", ex: "Sextus discipulus doctus est." },
    { la: "industrius", forms: "-a -um", pt: "aplicado, esforçado", ex: "Discipulus industrius laudātur." },
    { la: "piger", forms: "-gra -grum", pt: "preguiçoso", ex: "Discipulus piger reprehenditur." },
    { la: "rēctē", forms: "adv.", pt: "corretamente", ex: "Rēctē respondēs, Sexte!" },
    { la: "prāvē", forms: "adv.", pt: "erradamente", ex: "Prāvē computās, Mārce!" },
    { la: "laudat", forms: "v.", pt: "elogia", ex: "Magister Sextum laudat." },
    { la: "reprehendit", forms: "v.", pt: "repreende, critica", ex: "Magister Mārcum reprehendit." },
    { la: "computat", forms: "v.", pt: "calcula, conta", ex: "Mārcus digitīs computat." },
    { la: "discit", forms: "v.", pt: "aprende", ex: "Discipulī numerōs discunt." },
    { la: "dēbet", forms: "v. + inf.", pt: "deve", ex: "Discipulus discere dēbet." },
    { la: "semper", forms: "adv.", pt: "sempre", ex: "Cūr semper reprehendor?" },
    { la: "numquam", forms: "adv.", pt: "nunca", ex: "Numquam laudor!" },
    { la: "saepe", forms: "adv.", pt: "muitas vezes", ex: "Sextus saepe laudātur." },
    { la: "bis", forms: "adv.", pt: "duas vezes", ex: "Bis decem sunt vīgintī." },
    { la: "ter", forms: "adv.", pt: "três vezes", ex: "Ter decem sunt trīgintā." },
    { la: "quotiēns", forms: "adv.", pt: "quantas vezes?", ex: "Quotiēns X in C inest?" },
    { la: "tam… quam", forms: "adv.", pt: "tão… quanto", ex: "Titus tam piger est quam Mārcus." },
    { la: "laudor / laudāris", forms: "v. pass.", pt: "sou / és elogiado", ex: "Ā magistrō laudāris." },
    { la: "laudāmur / laudāminī", forms: "v. pass.", pt: "somos / sois elogiados", ex: "Nōs nōn laudāmur." }
  ],
  pensum: [
    { t: "cloze", prompt: "Cūr ego semper ā tē reprehend__, numquam laud__?", options: ["-or / -or", "-ō / -ō", "-tur / -tur"], a: 0,
      why: "Passiva 1ª pessoa: reprehendor, laudor." },
    { t: "cloze", prompt: "Tū ā magistrō laudā___, Sexte.", options: ["-ris", "-tur", "-minī"], a: 0,
      why: "Passiva 2ª pessoa singular: laudāris." },
    { t: "cloze", prompt: "Vōs nōn laudā_____, sed reprehendiminī!", options: ["-minī", "-mur", "-ntur"], a: 0,
      why: "Passiva 2ª pessoa plural: laudāminī." },
    { t: "mcq", q: "Quot sunt quattuor et septem?", options: ["Ūndecim", "Duodecim", "Novem"], a: 0,
      why: "4 + 7 = 11 (ūndecim)." },
    { t: "gap", prompt: "Dīmidium centum est ___.", a: ["quinquaginta", "quīnquāgintā"], hint: "(cinquenta)",
      why: "Metade de 100 = 50." },
    { t: "mcq", q: "“Bis decem sunt vīgintī” =", options: ["2 × 10 = 20", "2 + 10 = 20", "10 ÷ 2 = 20"], a: 0,
      why: "bis = duas vezes." },
    { t: "build", pt: "Sexto responde corretamente e é elogiado.", la: "Sextus rēctē respondet et laudātur", extra: ["prāvē", "laudat"] },
    { t: "read", text: "Magister Mārcum interrogat: 'Quot sunt octō et sex?' Mārcus digitīs computat et respondet: 'Tredecim!' — 'Prāvē respondēs, Mārce! Octō et sex sunt quattuordecim.'",
      q: "Cūr Mārcus reprehenditur?", options: ["Quia prāvē computat", "Quia digitōs nōn habet", "Quia rēctē respondet"], a: 0,
      why: "8 + 6 = 14, não 13!" },
    { t: "listen", text: "Rēctē respondēs, Sexte! Tū discipulus doctus es.", options: ["Rēctē respondēs, Sexte! Tū discipulus doctus es.", "Prāvē respondēs, Mārce! Tū piger es.", "Quot sunt octō et sex?"], a: 0,
      why: "rēctē + laus (elogio) para o Sexto." },
    { t: "type", prompt: "“sempre”:", a: ["semper"], why: "semper ↔ numquam (nunca)." }
  ],
  lectio: {
    title: "Numerī Difficilēs",
    source: "Adaptado de Familia Romana, cap. XVII",
    text: `In lūdō Diodōrus magister discipulōs numerōs docet; discipulī numerōs discunt. Magister interrogat: "Quot sunt quattuor et septem?" Sextus statim respondet: "Quattuor et septem sunt ūndecim." — "Rēctē respondēs, Sexte: tū discipulus doctus et industrius es, et ā mē laudāris."

Tum magister Mārcum interrogat: "Quot sunt octō et sex?" Mārcus digitīs computat et respondet: "Octō et sex sunt... tredecim!" — "Prāvē respondēs, Mārce! Octō et sex sunt quattuordecim. Tū rēctē computāre nōn potes!"

Mārcus: "Cūr ego semper ā tē reprehendor, numquam laudor?" Magister: "Quia tū numquam rēctē respondēs! Sextus saepe laudātur, quia bene discit. Vōs, Mārce et Tite, nōn laudāminī, sed reprehendiminī, quia pigrī estis et male discitis!"

Discipulī quoque partēs discunt: dīmidium decem est quīnque; dīmidium centum est quīnquāgintā. Et bis decem sunt vīgintī; ter decem sunt trīgintā. Numerī parvī facilēs sunt; numerī magnī difficilēs. Difficile est magnōs numerōs sine tabulā computāre!`,
    questions: [
      { q: "Quot sunt quattuor et septem?", options: ["Ūndecim", "Tredecim", "Quattuordecim"], a: 0 },
      { q: "Quis rēctē respondet?", options: ["Sextus", "Mārcus", "Titus"], a: 0 },
      { q: "Cūr Mārcus nōn laudātur?", options: ["Quia prāvē respondet", "Quia doctus est", "Quia magister eum amat"], a: 0 },
      { q: "Quid est dīmidium centum?", options: ["Quīnquāgintā", "Vīgintī", "Decem"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XVIII ================= */
COURSE.push({
  num: 18, roman: "XVIII", icon: "✍️",
  title: "Litterae Latīnae",
  subtitle: "Escrever · advérbios em -ē · īdem · quisque",
  grammar: [
    { title: "Advérbios em -ē",
      html: `Adjetivo → advérbio:
      <table><tr><th>adjetivo</th><th>advérbio</th></tr>
      <tr><td class="la">pulcher</td><td class="la">pulchrē (belamente)</td></tr>
      <tr><td class="la">foedus</td><td class="la">foedē (feiamente)</td></tr>
      <tr><td class="la">rēctus</td><td class="la">rēctē (corretamente)</td></tr>
      <tr><td class="la">prāvus</td><td class="la">prāvē (erradamente)</td></tr>
      <tr><td class="la">stultus</td><td class="la">stultē (tolamente)</td></tr></table>
      <span class="ex-la">Sextus pulchrē scrībit; Mārcus foedē scrībit!</span>` },
    { title: "īdem, eadem, idem · quisque",
      html: `<b>īdem</b> = o mesmo: <span class="ex-la">Mārcus eadem vocābula rūrsus scrībit.</span>
      <br><b>quisque</b> = cada um: <span class="ex-la">Quisque discipulus suā manū scrībit.</span>
      <br><b>Vogais e consoantes:</b> <span class="ex-la">vōcālēs sunt A E I O V Y; cēterae litterae cōnsonantēs sunt.</span>` },
    { title: "Escrever à romana",
      html: `<span class="ex-la">tabula</span> = tabuinha de cera · <span class="ex-la">stilus</span> = estilete (escreve e apaga!) · <span class="ex-la">charta</span> = papiro · <span class="ex-la">calamus</span> = pena de escrever · <span class="ex-la">mendum</span> = erro.
      <br><span class="ex-la">In tabulā Mārcī multa menda sunt!</span>` }
  ],
  vocab: [
    { la: "vōcālis", forms: "-is f.", pt: "vogal", ex: "Vōcālēs sunt A, E, I, O, V, Y." },
    { la: "cōnsonāns", forms: "-antis f.", pt: "consoante", ex: "Cēterae litterae cōnsonantēs sunt." },
    { la: "syllaba", forms: "-ae f.", pt: "sílaba", ex: "In vocābulō trēs syllabae sunt." },
    { la: "tabula", forms: "-ae f.", pt: "tabuinha (de cera)", ex: "Discipulī in tabulīs scrībunt." },
    { la: "stilus", forms: "-ī m.", pt: "estilete (de escrever)", ex: "Mārcus stilum tenet." },
    { la: "charta", forms: "-ae f.", pt: "papiro, papel", ex: "Epistula in chartā scrībitur." },
    { la: "calamus", forms: "-ī m.", pt: "pena (de escrever)", ex: "Calamō in chartā scrībimus." },
    { la: "mendum", forms: "-ī n.", pt: "erro", ex: "In tabulā tuā multa menda sunt!" },
    { la: "epistula", forms: "-ae f.", pt: "carta", ex: "Epistulam ad amīcum scrībit." },
    { la: "zephyrus", forms: "-ī m.", pt: "vento oeste (letra grega Z!)", ex: "Z est littera Graeca." },
    { la: "turpis", forms: "-e", pt: "feio, vergonhoso", ex: "Litterae turpēs sunt." },
    { la: "īdem", forms: "eadem, idem", pt: "o mesmo", ex: "Eadem vocābula rūrsus scrībit." },
    { la: "quisque", forms: "quaeque, quodque", pt: "cada um", ex: "Quisque discipulus scrībit." },
    { la: "scrībit", forms: "v.", pt: "escreve", ex: "Sextus pulchrē scrībit." },
    { la: "legit", forms: "v.", pt: "lê", ex: "Magister librum legit." },
    { la: "dictat", forms: "v.", pt: "dita", ex: "Magister discipulīs dictat." },
    { la: "dēlet", forms: "v.", pt: "apaga", ex: "Mārcus menda sua dēlet." },
    { la: "significat", forms: "v.", pt: "significa", ex: "Littera X numerum decem significat." },
    { la: "iungit", forms: "v.", pt: "junta, une", ex: "Litterae iunguntur in syllabās." },
    { la: "oportet", forms: "v. impess.", pt: "convém, deve-se", ex: "Nōn oportet bis X scrībere." },
    { la: "pulchrē", forms: "adv.", pt: "belamente, bem", ex: "Sextus pulchrē scrībit." },
    { la: "foedē", forms: "adv.", pt: "feiamente, mal", ex: "Mārcus foedē scrībit." },
    { la: "nōn modo… sed etiam", forms: "loc.", pt: "não só… mas também", ex: "Nōn modo numerōs, sed etiam litterās discunt." },
    { la: "ūsque ad", forms: "prep.", pt: "até", ex: "Ab A ūsque ad Z." },
    { la: "quōmodo", forms: "adv.", pt: "como? de que modo?", ex: "Quōmodo hic numerus scrībitur?" }
  ],
  pensum: [
    { t: "mcq", q: "Quot sunt litterae Latīnae?", options: ["Vīgintī trēs", "Vīgintī sex", "Duodecim"], a: 0,
      why: "23 letras, de A até Z (sem J, U, W)." },
    { t: "cloze", prompt: "Sextus pulchr__ scrībit; Mārcus foed__ scrībit.", options: ["-ē / -ē", "-us / -us", "-er / -er"], a: 0,
      why: "Advérbios em -ē: pulchrē, foedē." },
    { t: "mcq", q: "Quais são as vōcālēs?", options: ["A, E, I, O, V, Y", "B, C, D, F, G", "X, Y, Z"], a: 0,
      why: "As seis vogais latinas (V = U!)." },
    { t: "gap", prompt: "Mārcus menda sua ___ et eadem vocābula rūrsus scrībit.", a: ["delet", "dēlet"], hint: "(apaga)",
      why: "Na tabuinha de cera, o estilete apaga e reescreve." },
    { t: "mcq", q: "“Quisque discipulus suā manū scrībit” =", options: ["Cada aluno escreve com a própria mão", "Algum aluno escreve à mão", "Todos escrevem na mesma mão"], a: 0,
      why: "quisque = cada um." },
    { t: "cloze", prompt: "Littera X numerum decem signific__.", options: ["-at", "-ant", "-ātur"], a: 0,
      why: "significat: X = 10 nos numerais romanos." },
    { t: "build", pt: "O professor dita e os alunos escrevem.", la: "Magister dictat et discipulī scrībunt", extra: ["scrībit", "legunt"] },
    { t: "read", text: "Magister discipulīs dictat, et discipulī in tabulīs suīs scrībunt. Sextus pulchrē et rēctē scrībit. Mārcus vērō prāvē scrībit: in tabulā eius multa menda sunt!",
      q: "Quid in tabulā Mārcī est?", options: ["Multa menda", "Litterae pulchrae", "Nihil"], a: 0,
      why: "«in tabulā eius multa menda sunt»." },
    { t: "listen", text: "Scrībe eadem vocābula rūrsus, Mārce!", options: ["Scrībe eadem vocābula rūrsus, Mārce!", "Lege eundem librum, Sexte!", "Dēlē omnia menda, Tite!"], a: 0,
      why: "eadem vocābula = as mesmas palavras (īdem)." },
    { t: "type", prompt: "“erro” (na tabuinha):", a: ["mendum"], why: "mendum, -ī n. — daí vem 'emenda'." }
  ],
  lectio: {
    title: "Litterae Latīnae",
    source: "Adaptado de Familia Romana, cap. XVIII",
    text: `Discipulī nōn modo numerōs, sed etiam litterās discunt. Omnēs litterae Latīnae sunt vīgintī trēs, ab A ūsque ad Z. Litterae sunt aut vōcālēs aut cōnsonantēs: vōcālēs sunt A, E, I, O, V, Y; cēterae cōnsonantēs sunt. Litterae iunguntur in syllabās: in vocābulō LATINA trēs syllabae sunt.

Magister discipulīs dictat, et discipulī in tabulīs suīs scrībunt. Sextus pulchrē et rēctē scrībit: litterae eius pulchrae sunt. Mārcus vērō neque pulchrē neque rēctē scrībit: foedē scrībit, et in tabulā eius multa menda sunt!

Magister tabulam Mārcī spectat et exclāmat: "Ō Mārce! Turpēs sunt litterae tuae, et menda multa videō. Dēlē omnia menda!" Mārcus stilō menda sua dēlet et eadem vocābula rūrsus scrībit — neque nunc pulchrius scrībit quam anteā.

Litterīs etiam numerī significantur: littera X numerum 'decem' significat, C 'centum', M 'mīlle'. Quisque discipulus litterās et numerōs suā manū scrībere discit. In tabulīs stilō scrībimus; in chartā calamō scrībimus. Sīc discipulī legunt et scrībunt, dum sōl in caelō est.`,
    questions: [
      { q: "Quot litterae Latīnae sunt?", options: ["Vīgintī trēs", "Duodecim", "Centum"], a: 0 },
      { q: "Quae litterae sunt vōcālēs?", options: ["A, E, I, O, V, Y", "B, C, D", "Omnēs"], a: 0 },
      { q: "Quis pulchrē scrībit?", options: ["Sextus", "Mārcus", "Titus"], a: 0 },
      { q: "Quid littera X significat?", options: ["Numerum decem", "Numerum centum", "Vōcālem"], a: 0 }
    ]
  }
});

/* ============================================================
   Fabellae 15–21
   ============================================================ */
FABELLAE.push(
{
  id: "fab15", cap: 13, icon: "🗓️",
  title: "Kalendārium Rōmānum",
  level: "cap. I–XIII",
  text: `Cornēlius suō Sextō fīliō kalendārium mōnstrat: "Ecce kalendārium Rōmānum, Sexte, cum nōminibus mēnsium et numerō diērum. Annus tōtus quot mēnsēs et quot diēs habet?"

Sextus: "Duodecim mēnsēs et trecentōs sexāgintā quīnque diēs."

Cornēlius: "Hoc est kalendārium novum. In kalendāriō Rōmānō antīquissimō numerus mēnsium erat decem tantum, nōn duodecim. Tunc mēnsis annī prīmus erat Mārtius, id est initium vēris. Ergō necesse erat annō dare duōs novōs mēnsēs: Iānuārium et Februārium. Quam longus est mēnsis Iānuārius?"

Sextus: "Iānuārius ūnum et trīgintā diēs longus est."

Cornēlius: "Quī mēnsis brevissimus est?"

Sextus: "Februārius, quī duodētrīgintā tantum diēs habet."

Cornēlius: "Quī diēs annī brevissimus est?" Sextus nōn respondet, neque enim diēs nōmināre potest. Cornēlius: "Diēs brevissimus — et nox longissima — est ante diem octāvum kalendās Iānuāriās. Diēs longissimus — et nox brevissima — ante diem octāvum kalendās Iūliās est. Eō diē sōl altissimus est in caelō."

Sextus: "Aestāte diēs et hōrae nōn sōlum longiōrēs, sed etiam calidiōrēs sunt. Quī mēnsis annī calidissimus est?"

Cornēlius: "Mēnsis annī calidissimus est Iūlius. Iī duo mēnsēs, Iūlius et Augustus, nōn ā deīs, sed ab hominibus nōminantur: Iūlius ā Iūliō Caesare et Augustus ā Caesare Augustō. Ante tempora eōrum nōmina eōrum mēnsium erant 'Quīntīlis' et 'Sextīlis', ā numerīs 'quīntō' et 'sextō'."

Sextus: "Etiam praenōmina sunt 'Quīntus' et 'Sextus'! Cūr numerī sunt praenōmina nostra?"

Cornēlius: "In familiīs antīquīs magnus numerus erat līberōrum: ergō fīliō quīntō nōmen erat 'Quīntus' et fīliō sextō 'Sextus'. Nunc, quia paucī sunt līberī, etiam fīliō prīmō aut secundō praenōmen datur 'Quīntus' aut 'Sextus'."

Sextus gaudet quod patrī eius nōn sex fīliī sunt, sed ūnus tantum!`
},
{
  id: "fab16", cap: 14, icon: "🫏",
  title: "Asinus currēns",
  level: "cap. I–XIV",
  text: `In campō prope hortum Iūliī puerī pilā lūdere solent. Mārcus pilam sūmit et "Venī mēcum in campum, Quīnte!" inquit. Mārcus in campō cum frātre suō pilā lūdere vult.

Mārcus et Quīntus campum petunt cum cane, cui nōmen est Cerberus. Puerī pilā lūdere incipiunt. Alter ad alterum pilam iacit: prīmum Mārcus ad Quīntum, quī pilam capit et ad Mārcum iacit. Mārcus pilam capit et rūrsus ad Quīntum iacit — neque Quīntus pilam capere potest: sed canis pilam capit! Iam canis ante Quīntum stat pilam ōre tenēns.

Quīntus pilam ā cane poscit: "Dā mihi pilam, Cerbere!" Canis autem pilam dentibus tenet neque eam relinquit.

Prope puerōs lūdentēs parvus asinus in herbā iacet. "Ille asinus mē portāre potest" inquit Mārcus, atque ad asinum adit. "Surge, asine!" inquit, et asinum pede pulsat. Asinus surgit, et Mārcus eum ascendit. Iam puer super asinum sedēns "Ecce equus meus, Quīnte!" inquit. "Eques fortis est frāter tuus!"

Quīntus: "Quī asinō vehitur eques nōn est! Neque asinus tē vehere vult."

Mārcus asinum manū verberat et clāmat: "Curre, asine!" — sed asinus, quī puerum gravem vehere nōn vult, quiētus stat neque sē movet. Asinus rudit: "Hīaāhīaā!"

Canis asinum rudere audit et lātrat: "Baubau!" Pila ex ōre canis cadit. Quīntus pilam capit eamque in asinum iacit! Asinus perterritus currit — et Mārcus ad terram cadit!

In herbā iacēns Mārcus asinum currentem aspicit. "Cōnsiste, asine!" clāmat puer, sed asinus ab eō fugit. Canis post asinum currit. Quīntus rīdet, quod 'equitem fortem' in herbā iacentem videt!

Mārcus īrātus "Stultus est asinus!" inquit. Quīntus: "Quī asinō vehitur tam stultus est quam asinus suus! Surge, 'asine'!"`
},
{
  id: "fab17", cap: 15, icon: "🤒",
  title: "Puer aeger et medicus",
  level: "cap. I–XV",
  text: `Hodiē māne Mārcus dīcit 'sē ē lectō surgere nōn posse nec lūdum petere.'

"Cūr surgere nōn potes?" interrogat Dāvus.

"Surgere nōn possum" respondet Mārcus, "quia aegrōtō. Caput mihi dolet." Hoc dīcēns puer oculōs claudit et tergum ad Dāvum vertit.

Dāvus Iūlium vocat: "Venī, domine, et aspice tuum Mārcum fīlium, quī dīcit 'sē aegrōtāre'!" Iūlius intrat et spectat fīlium in lectō iacentem. Mārcus sē vertit et faciem dolentem ostendit; manum ad frontem appōnit et "Aegrōtō, pater" inquit. "Ei, ei! quam dolet caput! Surgere nōn possum."

"Sī aegrōtās" inquit Iūlius, "necesse est medicum vocāre. Is tē sānāre potest." Iūlius statim servum iubet Tūsculum īre atque medicum arcessere.

Post hōram servus cum medicō ad vīllam redit. Medicus Mārcum linguam ostendere iubet, et linguam eius rubram esse videt. Tum oculōs et aurēs eius spectat et frontem tangit: nec nimis calida nec nimis frīgida est frōns. Deinde medicus manum super pectus puerī impōnit et eum bene spīrāre atque cor eius bene palpitāre sentit: puer pulmōnēs bonōs et cor bonum habet.

"Quid tibi dolet?" interrogat medicus. "Caput et venter dolet" respondet Mārcus.

Tum medicus "Ergō" inquit "corpus tuum nimis plēnum est sanguinis. Necesse est vēnam aperīre. Ecce culter meus." Medicus puerō cultrum suum ostendit.

Cultrum medicī vidēns Mārcus "Iam nōn tam male mē habeō" inquit. "Satis bene mē valēre sentiō. Caput iam nōn dolet, neque mē ventrem malum habēre putō."

Rīdet medicus. At pater īrātus iubet fīlium suum statim ē lectō surgere atque lūdum petere!`
},
{
  id: "fab18", cap: 15, icon: "🌑",
  title: "Canis ululāns",
  level: "cap. I–XV",
  text: `Nox est. Vīlla Iūliī obscūra et quiēta est. Omnēs dormiunt. Parentēs in magnō cubiculō suō dormiunt. Uterque fīlius, Mārcus et Quīntus, in cubiculō suō parvō dormit. Soror eōrum Iūlia etiam in parvō cubiculō cubat, sed hāc nocte male dormit, quia caput eī dolet; puella vigilāns gallum canentem exspectat.

Fenestra cubiculī clausa nōn est: āēr frīgidus cubiculum intrat. Puella per fenestram apertam nihil videt praeter caelum obscūrum, nam lūna et stēllae nūbibus operiuntur. Iūlia noctem obscūram timet: ea enim sōlem et caelum clārum amat, hortō et rosīs dēlectātur.

Tum per noctem obscūram et quiētam canis ululat: "Uhuhuhū!"

Iūlia canem ululāre audit et perterrita est: capillī horrent, cor palpitat! Puella in lectō sē movēre nōn audet et clāmat: "Mamma! Venī!"

Aemilia clāmōre fīliae excitātur et statim accurrit. "Quid est, mea fīlia?" interrogat. "Nōn dormīs? Adhūc nox est."

Iūlia: "Nōn dormiō quod lupum timeō. Audī, mamma: lupus ululat! In hortō nostrō est lupus ferus!"

Aemilia canem rūrsus ululāre audit et "Nōn est lupus, Iūlia" inquit. "Est canis tua Margarīta quae ululat! Num tū canem tuam timēs?"

Etiam Mārcus et Quīntus clāmōrem vōcēsque audiunt et cubiculum Iūliae intrant. "Quid nōn dormītis?" interrogant. "Num iam tempus est ē lectō surgere?"

"Nōndum māne est" inquit māter. "Iūlia perterrita est, quia putat canem ululantem esse lupum! Sed nunc vōs omnēs dormīte!"

Mārcus "Ō, quam stulta es, Iūlia!" inquit rīdēns. "Tacē, Mārce!" inquit māter. "Adhūc tempus est dormīre. Audīmus ululantem canem, nōn gallum canentem."`
},
{
  id: "fab19", cap: 16, icon: "🛤️",
  title: "Via Ōstiēnsis",
  level: "cap. I–XVI",
  text: `Mēdus cum amīcā suā in patriam suam Graeciam īre vult.

Mēdus: "In portū Ōstiēnsī bona nāvis nōs opperītur. Necesse est nōs ambulāre Ōstiam, neque enim equum aut asinum habēmus."

Lȳdia: "Ōstiam ambulāre nōn possumus! Nimis longa est via."

Mēdus: "Via Ōstiēnsis paulō longior est quam via Latīna Tūsculō Rōmam. Sī fessa es, ego tē portāre possum!" Hoc dīcēns Mēdus amīcam suam complectitur eīque ōsculum dat.

Lȳdia: "Tū mē portāre nōn potes. At sī necesse est, tēcum Ōstiam ambulō."

Ergō Mēdus et Lȳdia Rōmā ēgrediuntur et Ōstiam ambulāre incipiunt. Mēdus saccum portat cum rēbus Lȳdiae et suīs. Post trēs hōrās Lȳdia cōnsistit ac fessa apud viam cōnsīdit. Mēdus quoque cōnsistit et trīstis viam longam ante sē intuētur. Tum viam post sē spectat: illīc venit vir crassus cum asinō quī duōs saccōs gravēs vehit.

Mēdus illum virum salūtat: "Salvē, bone vir! Ecce amīca mea fessa: iam nōn potest ambulāre. Potestne eam portāre asinus tuus?"

"Asinus meus iam duōs saccōs gravēs portat" inquit vir crassus. "Mē portāre nōn potest aut nōn vult, quia ego nimis crassus sum. Sed amīca tua tenuis et levis est. Asinum meum ascende, fōrmōsa! Dā mihi manum!"

Lȳdia surgit et asinum ascendit. Super asinum sedēns "Ambulā, asine!" inquit, sed asinus in viā stat neque ē locō sē movet. Tum Mēdus herbam carpit et ante asinum tenet: asinus herbam ēsse vult atque ambulāre incipit! Lȳdia laeta asinō vehitur.

Mēdus: "Bonus es vir. Nōs Rōmā venīmus et Ōstiam īmus. Quod nōmen tibi est?" — "Mihi nōmen est Mopsus. Ōstiam eō, nam illīc habitō. Tabernārius sum: māla et pira vēndō."

Dum Mēdus cum Mopsō loquitur, Ōstiam adveniunt. Asinus ante tabernam Mopsī cōnsistit; dominus asinō suō fessō māla dat.

Mēdus: "Valē, Mopse, bone amīce!" Item Lȳdia "Valē, amīce!" inquit. "Nihil habeō quod tibi dare possum — praeter ōsculum." Et Mopsō ōsculum dat! Ille ōsculō tam pulchrae fēminae laetātur.

Mēdus id spectāns nōn laetātur: "Venī mēcum, Lȳdia!" inquit, et statim ad portum īre incipit. Lȳdia Mopsum trīstem relinquit et amīcum suum sequitur.`
},
{
  id: "fab20", cap: 17, icon: "🐎",
  title: "Medicus doctus",
  level: "cap. I–XVII",
  text: `Dominus, cum Tūsculum it, equō vehitur aut lectīcā portātur ā servīs suīs. Servī vērō asinīs vehī solent; sed servus quī medicum arcessere iubētur nōn asinō pigrō, sed equō currente vehitur. Medicus quoque equō vehitur: itaque brevī tempore ad aegrum venīre potest.

Lēander Syrum equum ascendere vidēns interrogat: "Cūr tū hodiē equō veheris, Syre? Nōs servī asinīs vehimur, nōn equīs!"

Syrus: "Equō vehor quia medicum arcessere iubeor. Equō currente brevī tempore Tūsculum ad medicum vehor."

Syrus igitur equō vehitur Tūsculum, ac post hōram cum medicō redit.

Medicus ōstiāriō "Aperī ōstium!" inquit. "Medicus sum: ā dominō tuō exspector."

"Rēctē dīcis, medice" inquit ōstiārius ōstium aperiēns. "Tū ā dominō exspectāris, quia fīlius eius aegrōtat. Ātrium intrā!"

Medicus ātrium intrat atque illīc ā Dāvō servō salūtātur: "Salvē, medice!"

Medicus: "Ubi est dominus tuus? Cūr ā servō, nōn ā dominō salūtor?"

Iūlius intrāns "Salvē, medice!" inquit. "Laetor tē iam adesse, nam tū ut 'medicus doctus' ab aegrīs laudāris. Venī mēcum ad fīlium meum aegrum!"

Medicus: "Rēctē dīcis: laudor ā multīs aegrīs quōs sānō vel sānāre cōnor."

Iūlius: "Vōs medicī laudāminī ab aegrīs quōs bene sānātis — nōn laudāminī ab iīs quōs male sānāre cōnāminī et quī adhūc aegrī sunt, aut iam mortuī!"`
},
{
  id: "fab21", cap: 18, icon: "🔤",
  title: "Numerī et litterae",
  level: "cap. I–XVIII",
  text: `Quibus litterīs significantur numerī? Litterae septem quibus numerī significantur sunt C, D, I, L, M, V, X. Litterā I significātur numerus 'ūnus', V 'quīnque', X 'decem', L 'quīnquāgintā', C 'centum', D 'quīngentī', M 'mīlle'.

Sī bis scrībuntur litterae I, X, C, M, significantur numerī 'duo' II, 'vīgintī' XX, 'ducentī' CC, 'duo mīlia' MM. Sī eaedem litterae ter scrībuntur, significantur 'trēs' III, 'trīgintā' XXX, 'trecentī' CCC. Sī ante V et X pōnitur I, fīunt numerī 'quattuor' IV et 'novem' IX.

Diodōrus magister discipulōs suōs et litterās et numerōs docet. "Ecce" inquit "trēs litterae: X, C, M. Quaeque littera numerum significat. Quōs numerōs?"

Titus: "Littera X numerum 'decem' significat, C 'centum', M 'mīlle'."

Magister: "Dīvidite quemque numerum in dīmidiās partēs! Quid est dīmidium 'decem', dīmidium 'centum', dīmidium 'mīlle'?"

Sextus: "Dīmidium decem est quīnque, dīmidium centum quīnquāgintā, dīmidium mīlle quīncentī."

Magister: "'Quīngentī', nōn 'quīncentī'! Quōmodo hī numerī breviter scrībuntur?"

Sextus: "'Quīnque' scrībitur litterā V, 'quīnquāgintā' L, 'quīngentī' D."

Magister: "Prōme tabulam et stilum, Mārce, et scrībe X bis et ter!" Mārcus bis X scrībit: XX, tum eandem litteram ter scrībit: XXX.

Magister: "Quōs numerōs scrībis?"

Mārcus: "Scrībō numerōs 'duodecim' et 'trēdecim'."

Magister: "Ō Mārce, quam stultē respondēs! 'Duodecim' et 'trēdecim' scrībuntur XII et XIII, nōn XX et XXX! Iīs litterīs significantur numerī 'vīgintī' et 'trīgintā'."

Sextus: "Litterā L nōn modo numerus significātur, sed etiam praenōmen 'Lūcius'. Itemque litterīs M et C significantur praenōmina 'Mārcus' et 'Gāius'. Cūr praenōmen 'Gāius' scrībitur litterā C, nōn G?"

Magister: "Quia antīquīs temporibus ūna littera erat C, significāns et C et G."

Sextus: "Ergō numerus QVINGENTI tunc erat QVINCENTI!"

Magister: "Rēctē dīcis. At nunc additur parva līnea quae litteram G, nōn C, esse significat."`
}
);

/* ============================================================
   Glossário extra + nomes novos
   ============================================================ */
NOMINA.push(
  { la: "Titus", pt: "Tito — colega de escola de Marcos" },
  { la: "Diodōrus", pt: "Diodoro — o professor grego, sevērus" },
  { la: "Mopsus", pt: "Mopso — taberneiro de Óstia, dono do burro" },
  { la: "Cerberus", pt: "Cérbero — cão dos meninos" },
  { la: "Ōstia", pt: "Óstia — o porto de Roma, na foz do Tibre" },
  { la: "Iānus", pt: "Jano — deus de duas faces (→ Iānuārius)" },
  { la: "Mārs", pt: "Marte — deus da guerra (→ Mārtius)" },
  { la: "Caesar", pt: "Júlio César (→ mês Iūlius)" },
  { la: "Augustus", pt: "César Augusto (→ mês Augustus)" },
  { la: "Ōstiēnsis", pt: "de Óstia (via Ostiense)" }
);

Object.assign(EXTRA_GLOSS, {
  "pila": "bola", "pilam": "bola (acus.)", "ludere": "brincar, jogar",
  "ludit": "brinca", "ludunt": "brincam", "solent": "costumam",
  "eques": "cavaleiro", "equitem": "cavaleiro (acus.)", "rudit": "zurra",
  "poscit": "exige, pede", "stat": "está de pé", "tum": "então",
  "deinde": "em seguida", "tandem": "finalmente", "postremo": "por fim",
  "sanare": "curar", "sanat": "cura", "sano": "eu curo", "conor": "tento",
  "conatur": "tenta", "conamini": "tentais", "palpitat": "palpita, bate",
  "horrent": "arrepiam-se", "clamor": "grito", "clamore": "grito (abl.)",
  "praeter": "exceto, além de", "operiuntur": "são cobertos",
  "complectitur": "abraça", "egrediuntur": "saem", "egreditur": "sai",
  "laetantur": "alegram-se", "laetor": "alegro-me", "vereor": "temo",
  "sequuntur": "seguem", "loquuntur": "falam", "loqui": "falar",
  "turbat": "agita, perturba", "quamquam": "embora", "si": "se",
  "sive": "ou, ou seja", "seu": "ou", "culter": "faca, bisturi",
  "cultrum": "faca (acus.)", "frons": "testa; fronte", "spectat": "olha, observa",
  "gaudet": "alegra-se", "erat": "era", "erant": "eram", "breviter": "brevemente",
  "additur": "é somado", "adduntur": "são somados", "fiunt": "tornam-se, viram",
  "fit": "torna-se", "prome": "tira! saca!", "quaeque": "cada (f.)",
  "quemque": "cada (acus.)", "eandem": "a mesma (acus.)", "eaedem": "as mesmas",
  "eundem": "o mesmo (acus.)", "eodem": "no mesmo", "anteā": "antes",
  "antea": "antes", "iterum": "de novo", "vero": "porém, de fato",
  "ostiarius": "porteiro", "ostiario": "porteiro (dat.)", "lectica": "liteira",
  "lecticā": "liteira (abl.)", "hac": "esta (abl.)", "hoc": "isto; este (abl.)",
  "his": "estes (abl./dat.)", "hi": "estes", "hae": "estas", "harum": "destas",
  "horum": "destes", "quibus": "aos quais, com os quais", "quos": "os quais (acus.)",
  "quas": "as quais (acus.)", "quorum": "dos quais", "quarum": "das quais",
  "cui": "a quem, ao qual", "quam": "que, a qual (acus.); quão",
  "secum": "consigo", "mecum": "comigo", "tecum": "contigo",
  "nobis": "para nós", "vobis": "para vós", "noctu": "de noite",
  "cotidie": "todo dia", "mox": "logo", "iam": "já", "usque": "até",
  "significatur": "é indicado", "significantur": "são indicados",
  "scribuntur": "são escritos", "scribitur": "é escrito", "dividite": "dividi!",
  "nominare": "nomear", "nominatur": "é chamado", "nominantur": "são chamados",
  "kalendarium": "calendário", "kalendas": "calendas (dia 1º)",
  "temporibus": "tempos (abl.)", "tempora": "tempos; estações"
});
