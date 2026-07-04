/* ============================================================
   LATINVM — Expansão 4b: Capitula XXIII–XXVI
   Carrega DEPOIS de course4.js, ANTES de app.js.
   ============================================================ */

/* ================= CAPITVLVM XXIII ================= */
COURSE.push({
  num: 23, roman: "XXIII", icon: "📜",
  title: "Epistula Magistrī",
  subtitle: "A carta do professor · particípio futuro (-tūrus) · perfeitos novos",
  grammar: [
    { title: "Particípio futuro: -tūrus",
      html: `"Que vai fazer" — o futuro como adjetivo:
      <br><span class="ex-la">Posthāc bonus puer <b>futūrus</b> sum.</span> = De agora em diante vou ser um bom menino.
      <br><span class="ex-la">Semper vōbīs <b>pāritūrus</b> sum, numquam <b>pugnātūrus</b>, numquam <b>dormītūrus</b>.</span>
      <br>Com <span class="ex-la">esse</span> vira infinitivo futuro: <span class="ex-la">Mārcus prōmittit 'sē bonum puerum <b>futūrum esse</b>'.</span>
      <br>Passivo (supino + īrī): <span class="ex-la">Aemilia putat Mārcum ā patre <b>verberātum īrī</b>.</span>` },
    { title: "Mais perfeitos para a coleção",
      html: `<table><tr><th>presente</th><th>perfeito</th><th>particípio</th></tr>
      <tr><td class="la">ferre</td><td class="la">tulisse</td><td class="la">lātum</td></tr>
      <tr><td class="la">mittere</td><td class="la">mīsisse</td><td class="la">missum</td></tr>
      <tr><td class="la">dūcere</td><td class="la">dūxisse</td><td class="la">ductum</td></tr>
      <tr><td class="la">facere</td><td class="la">fēcisse</td><td class="la">factum</td></tr>
      <tr><td class="la">legere</td><td class="la">lēgisse</td><td class="la">lēctum</td></tr>
      <tr><td class="la">fugere</td><td class="la">fūgisse</td><td class="la">—</td></tr></table>
      <span class="ex-la">Quis epistulam mīsit? Quis eam tulit?</span>` },
    { title: "Ablativo absoluto (perfeito) · mē pudet",
      html: `Particípio perfeito no ablativo absoluto = "depois que…":
      <br><span class="ex-la"><b>Marcō inclūsō</b>, Dāvus redit.</span> = Trancado Marcos, Davo volta.
      <br><span class="ex-la"><b>Epistulā lēctā</b>… · <b>Signō integrō</b>, nēmō scit.</span>
      <br><b>mē pudet</b> + genitivo = tenho vergonha de:
      <br><span class="ex-la">Nōnne tē pudet <b>factī tuī</b>? Puerum pudet factōrum suōrum.</span>` }
  ],
  vocab: [
    { la: "signum", forms: "-ī n.", pt: "selo; sinal", ex: "Iūlius signum epistulae rumpit." },
    { la: "litterae", forms: "-ārum f. pl.", pt: "carta (= epistula)", ex: "Nōlō hās litterās legere!" },
    { la: "vultus", forms: "-ūs m.", pt: "rosto, semblante", ex: "Mārcus vultum ā patre āvertit." },
    { la: "laus", forms: "laudis f.", pt: "elogio, louvor", ex: "Puer piger laudem nōn meret." },
    { la: "factum", forms: "-ī n.", pt: "feito, ato", ex: "Factum tuum indignum est." },
    { la: "pudor", forms: "-ōris m.", pt: "vergonha", ex: "Mārcus propter pudōrem rubet." },
    { la: "prōmissum", forms: "-ī n.", pt: "promessa", ex: "Iūlius nōn crēdit Mārcum prōmissum factūrum esse." },
    { la: "verbera", forms: "-um n. pl.", pt: "açoites, surra", ex: "Verbera magistrī nōn satis fuērunt." },
    { la: "clāvis", forms: "-is f.", pt: "chave", ex: "Fer mihi clāvem cubiculī!" },
    { la: "comes", forms: "-itis m.", pt: "companheiro", ex: "Dāvus certē bonus comes erit." },
    { la: "mercēs", forms: "-ēdis f.", pt: "salário, pagamento", ex: "Mercēs numquam mihi trāditur ad diem." },
    { la: "integer", forms: "-gra -grum", pt: "intacto, inteiro", ex: "Signō integrō, nēmō epistulam legit." },
    { la: "pallidus", forms: "-a -um", pt: "pálido", ex: "Mārcus pallidus patrem legentem spectat." },
    { la: "plānus", forms: "-a -um", pt: "claro, evidente", ex: "Epistula omnem rem plānam facit." },
    { la: "trādere", forms: "v.", pt: "entregar", ex: "Iānitor epistulam dominō trādit." },
    { la: "continēre", forms: "v.", pt: "conter", ex: "Fortasse epistula aliās rēs continet." },
    { la: "salūtem dīcere", forms: "loc.", pt: "saudar (no começo da carta)", ex: "Diodōrus Iūliō salūtem dīcit." },
    { la: "pallēre", forms: "v.", pt: "estar pálido", ex: "Quī timet pallēre solet." },
    { la: "rubēre", forms: "v.", pt: "estar vermelho, corar", ex: "Is quem factī suī pudet rubēre solet." },
    { la: "solvere", forms: "v.", pt: "pagar (uma dívida)", ex: "Iūlius mercēdem solvere nōn vult." },
    { la: "merēre", forms: "v.", pt: "merecer", ex: "Magister mercēdem nōn meruit." },
    { la: "fatērī", forms: "v. dep.", pt: "confessar", ex: "Mārcus omnia fatētur." },
    { la: "negāre", forms: "v.", pt: "negar", ex: "Num hoc negāre audēs?" },
    { la: "prōmittere", forms: "v.", pt: "prometer", ex: "Hoc vōbīs prōmittō, pater et māter!" },
    { la: "inclūdere", forms: "v.", pt: "trancar, encerrar", ex: "Dāvus puerum in cubiculō inclūdit." },
    { la: "pudet (mē)", forms: "v. impess. + gen.", pt: "tenho vergonha de", ex: "Nōnne tē pudet factī tuī?" },
    { la: "perdere", forms: "v.", pt: "perder; desperdiçar", ex: "Nōlō pecūniam meam perdere!" },
    { la: "herī", forms: "adv.", pt: "ontem", ex: "Mēdus herī domō fūgit." },
    { la: "fortasse", forms: "adv.", pt: "talvez", ex: "Fortasse magister aliquid dē Mārcō scrīpsit." },
    { la: "posthāc", forms: "adv.", pt: "de agora em diante", ex: "Posthāc bonus puer futūrus sum." }
  ],
  pensum: [
    { t: "mcq", q: "“Mārcus dīcit 'sē posthāc bonum puerum futūrum esse'” =", options: ["Marcos diz que de agora em diante será um bom menino", "Marcos diz que foi um bom menino", "Marcos diz que é um bom menino agora"], a: 0,
      why: "futūrum esse = infinitivo futuro: que será." },
    { t: "cloze", prompt: "Posthāc semper vōbīs pāri___ sum, pater!", options: ["-tūrus", "-ēns", "-tus"], a: 0,
      why: "Particípio futuro: pāritūrus sum = vou obedecer." },
    { t: "cloze", prompt: "Iūlius epistulam nōndum lēgit: signum adhūc integr___ est.", options: ["-um", "-a", "-ō"], a: 0,
      why: "signum é neutro: signum integrum." },
    { t: "gap", prompt: "Mārcus nihil negat, sed omnia ___: 'Rēctē dīcis, pater. Tabula Sextī est.'", a: ["fatetur", "fatētur"], hint: "(confessa — depoente)",
      why: "fatērī ↔ negāre: confessar." },
    { t: "mcq", q: "ferre — qual é o perfeito?", options: ["tulisse", "ferrisse", "lātisse"], a: 0,
      why: "ferre, tulisse, lātum — perfeito irregular." },
    { t: "cloze", prompt: "Epistul___ lēct___, Aemilia 'Hoc tē nōn excūsat' inquit.", options: ["-ā / -ā", "-a / -a", "-am / -am"], a: 0,
      why: "Ablativo absoluto: epistulā lēctā = lida a carta." },
    { t: "build", pt: "O porteiro entrega a carta ao seu senhor.", la: "Iānitor epistulam dominō suō trādit", extra: ["trādunt", "dominum"] },
    { t: "read", text: "Mārcus, cuius vultus ad nōmen magistrī colōrem mūtāvit, pallidus et tremēns patrem legentem spectat. Puer pallet ob timōrem; quī timet pallēre solet.",
      q: "Cūr Mārcus pallet?", options: ["Ob timōrem", "Ob pudōrem", "Ob gaudium"], a: 0,
      why: "Medo → pālido; vergonha → vermelho (rubet)." },
    { t: "listen", text: "Abī hinc ab oculīs meīs! Dūc eum in cubiculum, Dāve!", options: ["Abī hinc ab oculīs meīs! Dūc eum in cubiculum, Dāve!", "Venī hūc ad mē, mī fīlī!", "Fer mihi mercēdem dēbitam, magister!"], a: 0,
      why: "Júlio furioso manda trancar Marcos no quarto." },
    { t: "type", prompt: "“ontem”:", a: ["heri", "herī"], why: "herī ↔ crās (amanhã)." }
  ],
  lectio: {
    title: "Epistula Magistrī",
    source: "Adaptado de Familia Romana, cap. XXIII",
    text: `Tabellārius Tūsculō epistulam affert, quam iānitor dominō suō trādit. Iūlius cēram aspiciēns signum magistrī cognōscit. "Nōlō hās litterās legere" inquit, "nam certē magister pecūniam poscit quam eī dēbeō." Aemilia: "At fortasse epistula aliās rēs continet. Signō integrō, nēmō scit." Iūlius signum rumpit et epistulam aperit.

In epistulā magister scrīpsit: "Diodōrus Iūliō salūtem dīcit. Discipulus improbus atque piger est tuus Mārcus fīlius: male recitat, foedē et prāvē scrībit, nec umquam rēctē respondet. Fīlium tuum nihil docēre possum, quia ipse nihil discere vult."

Dum pater legit, Mārcus pallidus et tremēns eum spectat: puer pallet ob timōrem. Iūlius fīliō tabulam ostendit: "Vidēsne nōmen 'Sextī' in parte superiōre īnscrīptum? Haec nōn tua, sed Sextī tabula est!" Mārcus, quī iam nōn audet mentīrī, omnia fatētur ac rubet propter pudōrem.

"Posthāc bonus puer futūrus sum" inquit, "semper vōbīs pāritūrus sum nec umquam in lūdō dormītūrus. Hoc vōbīs prōmittō!" Sed pater nōn crēdit eum prōmissum factūrum esse. Dāvus Mārcum in cubiculum dūcit atque inclūdit. Iūlius mercēdem solvere nōn vult: "Magister ipse fatētur 'sē fīlium meum nihil docēre posse' — ergō mercēdem nōn meruit!"`,
    questions: [
      { q: "Quis epistulam Tūsculō attulit?", options: ["Tabellārius", "Mēdus", "Dāvus"], a: 0 },
      { q: "Cuius nōmen in tabulā īnscrīptum est?", options: ["Sextī", "Mārcī", "Quīntī"], a: 0 },
      { q: "Quid Mārcus parentibus prōmittit?", options: ["Sē posthāc bonum puerum futūrum esse", "Sē mercēdem solūtūrum esse", "Sē epistulam scrīptūrum esse"], a: 0 },
      { q: "Cūr Iūlius mercēdem solvere nōn vult?", options: ["Quia magister fatētur sē Mārcum nihil docēre posse", "Quia pecūniam nōn habet", "Quia epistula perdita est"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XXIV ================= */
COURSE.push({
  num: 24, roman: "XXIV", icon: "🤕",
  title: "Puer Aegrōtus",
  subtitle: "Quinto de cama · mais-que-perfeito (-erat)",
  grammar: [
    { title: "O mais-que-perfeito: -erat",
      html: `"Tinha feito" — ação anterior a outra ação do passado:
      <br><span class="ex-la">Puer ūmidus <b>erat</b>, quod per imbrem <b>ambulāverat</b>.</span> = estava molhado porque tinha andado na chuva.
      <table><tr><th>pessoa</th><th>desinência</th><th>exemplo</th></tr>
      <tr><td class="la">ego</td><td class="la">-eram</td><td class="la">scrīpseram</td></tr>
      <tr><td class="la">tū</td><td class="la">-erās</td><td class="la">scrīpserās</td></tr>
      <tr><td class="la">is</td><td class="la">-erat</td><td class="la">scrīpserat</td></tr>
      <tr><td class="la">nōs</td><td class="la">-erāmus</td><td class="la">scrīpserāmus</td></tr>
      <tr><td class="la">vōs</td><td class="la">-erātis</td><td class="la">scrīpserātis</td></tr>
      <tr><td class="la">iī</td><td class="la">-erant</td><td class="la">scrīpserant</td></tr></table>
      Base = tema do perfeito: <span class="ex-la">fuerat, ceciderat, dīxerat, dormīverat, pugnāverant.</span>` },
    { title: "Mais-que-perfeito passivo · depoentes no perfeito",
      html: `Passivo = particípio + eram/erās/erat:
      <br><span class="ex-la">Mārcus ā Sextō <b>pulsātus erat</b>.</span> = tinha sido golpeado.
      <br><span class="ex-la">Cūr <b>verberātus erās</b>?</span>
      <br>Depoentes no perfeito (forma passiva, sentido ativo):
      <br><span class="ex-la"><b>cōnātus est</b></span> = tentou · <span class="ex-la"><b>locūtus est</b></span> = falou · <span class="ex-la"><b>passus est</b></span> = sofreu · <span class="ex-la"><b>fassus est</b></span> = confessou · <span class="ex-la"><b>mentītus est</b></span> = mentiu.` },
    { title: "Comparativo com ablativo",
      html: `Em vez de <span class="ex-la">quam</span>, o segundo termo pode ir para o ablativo:
      <br><span class="ex-la">Pēs dexter maior est <b>pede laevō</b>.</span> = maior que o pé esquerdo.
      <br><span class="ex-la">Melior sum <b>frātre meō</b>. · Is canis <b>lupō</b> ferōcior est!</span>` }
  ],
  vocab: [
    { la: "latus", forms: "-eris n.", pt: "lado", ex: "Puer in latere dextrō cubat." },
    { la: "dolor", forms: "-ōris m.", pt: "dor", ex: "Ob dolōrem ē lectō surgere nōn possum." },
    { la: "os", forms: "ossis n.", pt: "osso", ex: "Ossa tua integra sunt omnia." },
    { la: "sonus", forms: "-ī m.", pt: "som", ex: "Nūllus sonus audītur ab ūllā parte." },
    { la: "strepitus", forms: "-ūs m.", pt: "barulho, estrondo", ex: "Quīntus tantum strepitum mīrātur." },
    { la: "tumultus", forms: "-ūs m.", pt: "tumulto, alvoroço", ex: "Quidnam tantus tumultus significāvit?" },
    { la: "aegrōtus", forms: "-a -um", pt: "doente", ex: "Puer aegrōtus dormīre nōn potest." },
    { la: "laevus", forms: "-a -um", pt: "esquerdo", ex: "Pēs dexter maior est pede laevō." },
    { la: "pār", forms: "paris", pt: "igual, par", ex: "Herī pedēs parēs erant." },
    { la: "impār", forms: "-aris", pt: "desigual", ex: "Hodiē pedēs tam imparēs sunt!" },
    { la: "subitus", forms: "-a -um", pt: "súbito, repentino", ex: "Avēs tempestāte subitā territae silent." },
    { la: "cruentus", forms: "-a -um", pt: "ensanguentado", ex: "Mārcus sordidus atque cruentus rediit." },
    { la: "mīrārī", forms: "v. dep.", pt: "admirar-se de", ex: "Quīntus mīrātur quod pedēs imparēs sunt." },
    { la: "recumbere", forms: "v.", pt: "deitar-se de novo", ex: "Puer aegrōtus in lectō recumbit." },
    { la: "percutere", forms: "v.", pt: "bater em, golpear", ex: "Mārcus forem manibus pedibusque percutit." },
    { la: "frangere", forms: "v.", pt: "quebrar", ex: "Mārcus forem frangere cōnātur." },
    { la: "flēre", forms: "v.", pt: "chorar", ex: "Nōlī flēre, Quīnte!" },
    { la: "patī", forms: "v. dep.", pt: "sofrer, suportar", ex: "Dolōrem gravem patior." },
    { la: "ignōrāre", forms: "v.", pt: "não saber, ignorar", ex: "Omnia ignōrō, dum hīc sōlus cubō." },
    { la: "nōscere", forms: "v.", pt: "conhecer (perf. nōvisse)", ex: "Canis tē nōvit, ignōrat illum." },
    { la: "cupere", forms: "v.", pt: "desejar", ex: "Omnia scīre cupiō." },
    { la: "mordēre", forms: "v.", pt: "morder", ex: "Canis tabellārium momordit." },
    { la: "verērī", forms: "v. dep.", pt: "temer, recear", ex: "Tabellārius canem veritus est." },
    { la: "mentīrī", forms: "v. dep.", pt: "mentir", ex: "Tam turpiter frāter tuus mentītus est!" },
    { la: "iūxtā", forms: "prep. + acus.", pt: "ao lado de", ex: "Syra iūxtā lectum cōnsīdit." },
    { la: "dēnuō", forms: "adv.", pt: "de novo", ex: "Pēs dēnuō dolēre incipit." },
    { la: "continuō", forms: "adv.", pt: "imediatamente", ex: "Syra continuō accurrit." },
    { la: "etsī", forms: "conj.", pt: "embora, ainda que", ex: "Nōn fleō, etsī dolōrem gravem patior." },
    { la: "intus", forms: "adv.", pt: "dentro (de casa)", ex: "Trīstis sum, quod mihi necesse est intus cubāre." },
    { la: "cēterum", forms: "adv.", pt: "de resto, além disso", ex: "Cēterum quid attulit tabellārius?" }
  ],
  pensum: [
    { t: "cloze", prompt: "Puer ūmidus erat quod per imbrem ambulāv___.", options: ["-erat", "-it", "-ērunt"], a: 0,
      why: "Mais-que-perfeito: ambulāverat = tinha andado (antes de chegar)." },
    { t: "mcq", q: "“Mārcus ā Sextō pulsātus erat” =", options: ["Marcos tinha sido golpeado por Sexto", "Marcos golpeou Sexto", "Marcos será golpeado por Sexto"], a: 0,
      why: "Mais-que-perfeito passivo: pulsātus erat." },
    { t: "cloze", prompt: "Herī laudātus sum, quia pulchrē scrīps___ et recitāv___.", options: ["-eram / -eram", "-ī / -ī", "-erō / -erō"], a: 0,
      why: "Ação anterior ao elogio: scrīpseram, recitāveram." },
    { t: "gap", prompt: "Pedēs, quī herī parēs erant, hodiē imparēs sunt: pēs dexter maior est pede ___.", a: ["laevo", "laevō"], hint: "(esquerdo — ablativo de comparação)",
      why: "maior pede laevō = maior quam pēs laevus." },
    { t: "cloze", prompt: "Mārcus forem frangere cōnā___, quod aliter exīre nōn potest.", options: ["-tur", "-t", "-mus"], a: 0,
      why: "cōnārī é depoente: cōnātur = tenta." },
    { t: "build", pt: "Sira senta-se ao lado da cama e consola o menino.", la: "Syra iūxtā lectum cōnsīdit et puerum cōnsōlātur", extra: ["cōnsīdunt", "lectus"] },
    { t: "read", text: "Mārcus 'sē bonum discipulum fuisse' dīxit, etsī in lūdō dormīverat nec magistrum recitantem audīverat. Postrēmō litterās pulchrās quās Sextus scrīpserat mātrī ostendit.",
      q: "Quis litterās pulchrās scrīpserat?", options: ["Sextus", "Mārcus", "Quīntus"], a: 0,
      why: "«litterās… quās Sextus scrīpserat» — Marcos mentiu de novo!" },
    { t: "listen", text: "Nōlī flēre! Puerum Rōmānum sine lacrimīs dolōrem patī decet.", options: ["Nōlī flēre! Puerum Rōmānum sine lacrimīs dolōrem patī decet.", "Flē, puer! Dolor tuus magnus est.", "Canis tē momordit, Quīnte?"], a: 0,
      why: "Sira: menino romano aguenta a dor sem lágrimas." },
    { t: "mcq", q: "“etsī” significa:", options: ["embora", "porque", "depois que"], a: 0,
      why: "etsī = quamquam: «Nōn fleō, etsī dolōrem patior»." },
    { t: "type", prompt: "“dor”:", a: ["dolor"], why: "dolor, -ōris m. — de dolēre (doer)." }
  ],
  lectio: {
    title: "Puer Aegrōtus",
    source: "Adaptado de Familia Romana, cap. XXIV",
    text: `Interim Quīntus lectō tenētur. Puer aegrōtus super lectum sē convertit nec dormīre potest, sīve in latere dextrō cubat sīve in latere laevō. Pedēs aspiciēns mīrātur: "Pēs dexter multō maior est quam pēs laevus!" Pedēs, quī herī parēs erant, hodiē tam imparēs sunt.

Subitō silentium clāmōre maximō rumpitur: Mārcus in cubiculō suō clāmat et forem manibus pedibusque percutit. Quīntus Syram vocat, quae continuō accurrit. "Nōlī hoc mīrārī" inquit Syra, "Mārcus forem frangere cōnātur, quod aliter exīre nōn potest. Sed tū quid agis?" — "Valdē mihi dolet pēs. Fortasse os frāctum est." — "Ossa tua integra sunt omnia. Nōlī flēre!" — "Nōn fleō, etsī dolōrem gravem patior. Sed omnia ignōrō: quid factum est postquam frāter meus domum rediit?"

Syra omnia nārrat: Mēdus herī domō fūgerat, itaque Mārcus sine comite in lūdum ierat. Puerī in viā pugnāverant, et Mārcus sordidus atque cruentus redierat, quod humī iacuerat et ā Sextō pulsātus erat. Etiam mentītus erat: litterās quās Sextus scrīpserat mātrī ostenderat atque dīxerat 'sē ipsum eās scrīpsisse'!

Quīntus: "Profectō verbera meruit! Ego melior sum frātre meō: herī laudātus sum, quia pulchrē scrīpseram et recitāveram." Syra rīdēns: "At tūne ipse semper bonus discipulus es?"`,
    questions: [
      { q: "Cūr Quīntus pedēs suōs mīrātur?", options: ["Quod imparēs sunt", "Quod sordidī sunt", "Quod parēs sunt"], a: 0 },
      { q: "Quam ob rem Mārcus forem percutit?", options: ["Quod aliter exīre nōn potest", "Quod pēs eī dolet", "Quod canem timet"], a: 0 },
      { q: "Cūr Mārcus cruentus redierat?", options: ["Quod ā Sextō pulsātus erat", "Quod dē arbore ceciderat", "Quod canis eum momorderat"], a: 0 },
      { q: "Quid Mārcus mātrī ostenderat?", options: ["Litterās quās Sextus scrīpserat", "Tabulam suam novam", "Epistulam magistrī"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XXV ================= */
COURSE.push({
  num: 25, roman: "XXV", icon: "🐂",
  title: "Thēseus et Mīnōtaurus",
  subtitle: "O mito do labirinto · imperativo dos depoentes",
  grammar: [
    { title: "Imperativo dos depoentes: -re / -minī",
      html: `<table><tr><th>singular</th><th>plural</th></tr>
      <tr><td class="la">laetāre!</td><td class="la">laetāminī!</td></tr>
      <tr><td class="la">intuēre!</td><td class="la">intuēminī!</td></tr>
      <tr><td class="la">sequere!</td><td class="la">sequiminī!</td></tr>
      <tr><td class="la">revertere!</td><td class="la">revertiminī!</td></tr>
      <tr><td class="la">opperīre!</td><td class="la">opperīminī!</td></tr></table>
      <span class="ex-la">Sequere mē, Ariadna! · Laetāminī, cīvēs meī! Sequiminī mē ad portum!</span>` },
    { title: "Imperfeito + perfeito: a arte de narrar",
      html: `O imperfeito pinta o cenário; o perfeito conta o que aconteceu:
      <br><span class="ex-la">In Crētā ōlim <b>vīvēbat</b> mōnstrum terribile… Mīnōtaurus hominēs vīvōs <b>vorābat</b>.</span>
      <br><span class="ex-la">Thēseus labyrinthum <b>intrāvit</b> et mōnstrum gladiō <b>occīdit</b>.</span>
      <br>Perfeitos novos: <span class="ex-la">trāxisse, interfēcisse, occīdisse, relīquisse, repperisse, iussisse.</span>` },
    { title: "cupidus + genitivo · Mīnōtaurō occīsō",
      html: `<span class="ex-la">Thēseus <b>glōriae cupidus</b> erat. · Mīnōs <b>cupidus aurī</b>…</span> = desejoso DE glória, DE ouro.
      <br>Ablativo absoluto com particípio perfeito:
      <br><span class="ex-la"><b>Mīnōtaurō occīsō</b>, Thēseus exitum repperit.</span> = morto o Minotauro…
      <br>Cidades sem preposição: <span class="ex-la"><b>Athēnīs</b></span> = em/de Atenas, <span class="ex-la"><b>Athēnās</b></span> = para Atenas.` }
  ],
  vocab: [
    { la: "fābula", forms: "-ae f.", pt: "história, conto", ex: "Nārrā mihi aliquam fābulam!" },
    { la: "mōnstrum", forms: "-ī n.", pt: "monstro", ex: "Mōnstrum terribile hominēs vīvōs vorat." },
    { la: "taurus", forms: "-ī m.", pt: "touro", ex: "Mīnōtaurō caput taurī erat." },
    { la: "labyrinthus", forms: "-ī m.", pt: "labirinto", ex: "Nēmō exitum labyrinthī reperīre potest." },
    { la: "aedificium", forms: "-ī n.", pt: "edifício", ex: "Labyrinthus est magnum aedificium." },
    { la: "moenia", forms: "-ium n. pl.", pt: "muralhas", ex: "Rōmulus prīma moenia Rōmāna aedificāvit." },
    { la: "rēx", forms: "rēgis m.", pt: "rei", ex: "Mīnōs rēx tunc Crētam regēbat." },
    { la: "mors", forms: "mortis f.", pt: "morte", ex: "Colōre ātrō mors significātur." },
    { la: "glōria", forms: "-ae f.", pt: "glória", ex: "Thēseus glōriae cupidus erat." },
    { la: "auxilium", forms: "-ī n.", pt: "ajuda, auxílio", ex: "Ariadna Thēseō auxilium tulit." },
    { la: "cīvis", forms: "-is m./f.", pt: "cidadão", ex: "Thēseus cīvēs suōs ā mōnstrō servāvit." },
    { la: "exitus", forms: "-ūs m.", pt: "saída", ex: "Thēseus exitum labyrinthī facile repperit." },
    { la: "fīlum", forms: "-ī n.", pt: "fio", ex: "Ariadna Thēseō fīlum longum dedit." },
    { la: "mora", forms: "-ae f.", pt: "demora", ex: "Sine morā nāvem cōnscendit." },
    { la: "lītus", forms: "-oris n.", pt: "praia, litoral", ex: "Ariadna amīcum in lītore quaesīvit." },
    { la: "saxum", forms: "-ī n.", pt: "rocha, penhasco", ex: "Aegeus dē saxō sē iēcit in mare." },
    { la: "timidus", forms: "-a -um", pt: "medroso", ex: "Nōlī putāre mē puerum timidum esse!" },
    { la: "terribilis", forms: "-e", pt: "terrível", ex: "Mōnstrum terribile in labyrinthō habitābat." },
    { la: "saevus", forms: "-a -um", pt: "cruel, feroz", ex: "Mōnstrum saevum hominēs vorābat." },
    { la: "cupidus", forms: "-a -um + gen.", pt: "desejoso de", ex: "Mīnōs cupidus aurī erat." },
    { la: "parātus", forms: "-a -um", pt: "pronto, preparado", ex: "Ad pugnam parātus sum." },
    { la: "regere", forms: "v.", pt: "reger, governar", ex: "Thēseus multōs annōs Athēnās rēxit." },
    { la: "interficere", forms: "v.", pt: "matar", ex: "Achillēs Hectorem interfēcit." },
    { la: "occīdere", forms: "v.", pt: "matar (com arma)", ex: "Thēseus Mīnōtaurum gladiō occīdit." },
    { la: "vorāre", forms: "v.", pt: "devorar", ex: "Mīnōtaurus hominēs vīvōs vorābat." },
    { la: "cōnstituere", forms: "v.", pt: "decidir", ex: "Thēseus Mīnōtaurum interficere cōnstituit." },
    { la: "dēserere", forms: "v.", pt: "abandonar", ex: "Thēseus amīcam suam dēseruit." },
    { la: "pollicērī", forms: "v. dep.", pt: "prometer", ex: "Hoc tibi polliceor." },
    { la: "oblīvīscī", forms: "v. dep. + gen.", pt: "esquecer", ex: "Thēseus vēla mūtāre oblītus erat." },
    { la: "ōlim", forms: "adv.", pt: "certa vez, outrora", ex: "In Crētā ōlim vīvēbat mōnstrum terribile." }
  ],
  pensum: [
    { t: "cloze", prompt: "Laetāminī, cīvēs meī! Sequ___ mē ad portum!", options: ["-iminī", "-untur", "-ere"], a: 0,
      why: "Imperativo plural dos depoentes: sequiminī! = segui-me!" },
    { t: "cloze", prompt: "Et tū, Ariadna, sequ___ mē! Proficīscere mēcum Athēnās!", options: ["-ere", "-iminī", "-itur"], a: 0,
      why: "Imperativo singular depoente: sequere! = segue!" },
    { t: "mcq", q: "“In Crētā ōlim vīvēbat mōnstrum terribile” — vīvēbat é:", options: ["imperfeito: descreve o cenário do passado", "perfeito: ação pontual e acabada", "presente histórico"], a: 0,
      why: "Imperfeito pinta o pano de fundo da narrativa." },
    { t: "gap", prompt: "Thēseus fīlum Ariadnae secūtus exitum labyrinthī facile ___.", a: ["repperit"], hint: "(encontrou — perfeito de reperīre)",
      why: "reperīre, repperisse: achou a saída graças ao fio." },
    { t: "mcq", q: "“Mīnōtaurō occīsō, Thēseus exitum repperit” =", options: ["Morto o Minotauro, Teseu encontrou a saída", "O Minotauro matou Teseu na saída", "Teseu matou o Minotauro na saída"], a: 0,
      why: "Ablativo absoluto: Mīnōtaurō occīsō = depois que o Minotauro foi morto." },
    { t: "cloze", prompt: "Rēx Mīnōs cupidus aur___ atque sanguinis erat.", options: ["-ī", "-um", "-ō"], a: 0,
      why: "cupidus + genitivo: cupidus aurī = desejoso de ouro." },
    { t: "build", pt: "Ariadne dá a Teseu um longo fio.", la: "Ariadna Thēseō fīlum longum dat", extra: ["Thēseum", "dedērunt"] },
    { t: "read", text: "Nāvis rediēns eadem vēla ātra gerēbat quae abiēns gesserat: Thēseus enim vēla mūtāre oblītus erat. Aegeus, arbitrātus fīlium suum mortuum esse, dē saxō sē iēcit in mare.",
      q: "Cūr Aegeus sē in mare iēcit?", options: ["Quod putāvit fīlium suum mortuum esse", "Quod nāvis mersa erat", "Quod Mīnōtaurum timēbat"], a: 0,
      why: "Velas pretas = morte; daí o nome «mare Aegaeum»." },
    { t: "listen", text: "Nōlī timēre! Ego mortem nōn timeō.", options: ["Nōlī timēre! Ego mortem nōn timeō.", "Nōlī flēre! Ego dolōrem nōn patior.", "Timē mortem, Thēseu!"], a: 0,
      why: "Teseu a Ariadne, antes de entrar no labirinto." },
    { t: "type", prompt: "“rei”:", a: ["rex", "rēx"], why: "rēx, rēgis m. — quī terram regit." }
  ],
  lectio: {
    title: "Thēseus et Mīnōtaurus",
    source: "Adaptado de Familia Romana, cap. XXV",
    text: `Syra Quīntō fābulam nārrat: "In īnsulā Crētā ōlim vīvēbat mōnstrum terribile, nōmine Mīnōtaurus, cui caput taurī, corpus virī erat. Mīnōtaurus in magnō labyrinthō habitābat et nihil praeter hominēs vīvōs edēbat. Itaque quotannīs complūrēs adulēscentēs virginēsque Athēnīs in Crētam mittēbantur, quī omnēs ā mōnstrō saevō vorābantur.

"Eō tempore Thēseus, vir glōriae cupidus, Athēnīs vīvēbat. Is Mīnōtaurum interficere cōnstituit atque in Crētam profectus est. Ibi Ariadna, fīlia rēgis Mīnōis, quae eum amāre coeperat, ad eum accessit: 'Quōmodo exitum labyrinthī reperiēs? Ecce fīlum quod tibi viam mōnstrābit.' Thēseus 'Opperīre mē hīc!' inquit, 'Brevī hūc redībō neque sine tē in patriam revertar. Hoc tibi polliceor.'

"Thēseus, fīlum post sē trahēns, labyrinthum intrāvit ac sine morā Mīnōtaurum petīvit, quem post brevem pugnam gladiō occīdit. Mīnōtaurō occīsō, fīlum secūtus exitum facile repperit. 'Laetāminī, cīvēs meī! Sequiminī mē ad portum!'

"Thēseus cum Ariadnā Naxum nāvigāvit — ibi vērō puellam dormientem relīquit! Māne Ariadna amīcum in lītore quaesīvit neque repperit: 'Thēseu! Revertere ad mē!' Sed nāvis iam procul erat. Ita virgō misera sōla dēserta est ab eō virō quem ante omnēs amābat."`,
    questions: [
      { q: "Quid erat Mīnōtaurus?", options: ["Mōnstrum cui caput taurī, corpus virī erat", "Rēx Crētae", "Taurus albus"], a: 0 },
      { q: "Quis Thēseō fīlum dedit?", options: ["Ariadna", "Mīnōs", "Daedalus"], a: 0 },
      { q: "Quōmodo Thēseus Mīnōtaurum interfēcit?", options: ["Gladiō occīdit", "Fīlō necāvit", "In mare iēcit"], a: 0 },
      { q: "Ubi Thēseus Ariadnam relīquit?", options: ["In īnsulā Naxō", "Athēnīs", "In labyrinthō"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XXVI ================= */
COURSE.push({
  num: 26, roman: "XXVI", icon: "🪶",
  title: "Daedalus et Īcarus",
  subtitle: "Dédalo e Ícaro · o gerúndio (-ndum -ndī -ndō)",
  grammar: [
    { title: "O gerúndio: o infinitivo que declina",
      html: `<table><tr><th>infinitivo</th><th>acus. (ad)</th><th>gen.</th><th>abl.</th></tr>
      <tr><td class="la">volāre</td><td class="la">ad volandum</td><td class="la">volandī</td><td class="la">volandō</td></tr>
      <tr><td class="la">docēre</td><td class="la">ad docendum</td><td class="la">docendī</td><td class="la">docendō</td></tr>
      <tr><td class="la">scrībere</td><td class="la">ad scrībendum</td><td class="la">scrībendī</td><td class="la">scrībendō</td></tr>
      <tr><td class="la">dormīre</td><td class="la">ad dormiendum</td><td class="la">dormiendī</td><td class="la">dormiendō</td></tr></table>
      <span class="ex-la">Ālae necessāriae sunt <b>ad volandum</b>.</span> = asas são necessárias para voar.
      <br><span class="ex-la">Fessus sum <b>ambulandō</b>.</span> = estou cansado de andar.` },
    { title: "Gerúndio no genitivo",
      html: `Depois de substantivos e adjetivos:
      <br><span class="ex-la"><b>ars volandī</b></span> = a arte de voar · <span class="ex-la"><b>cōnsilium fugiendī</b></span> = o plano de fugir
      <br><span class="ex-la">tempus <b>dormiendī</b> est · fīnem <b>nārrandī</b> facit · cupidus <b>audiendī</b> · studiōsus <b>volandī</b></span>
      <br>Com <span class="ex-la">causā</span> (por causa de): <span class="ex-la">fābula nōn modo dēlectandī, sed etiam <b>monendī causā</b> nārrātur.</span>` },
    { title: "summus / īnfimus · vidērī · estō!",
      html: `<span class="ex-la"><b>summus</b></span> = o mais alto ↔ <span class="ex-la"><b>īnfimus</b></span> = o mais baixo:
      <br><span class="ex-la">Nōlī volāre in summō āere prope sōlem, nec in īnfimō āere prope mare!</span>
      <br><b>vidērī</b> = parecer: <span class="ex-la">Īnsulae parvae esse <b>videntur</b>.</span>
      <br><b>estō!</b> = imperativo de esse: <span class="ex-la">Cautus <b>estō</b>, mī fīlī!</span>` }
  ],
  vocab: [
    { la: "fuga", forms: "-ae f.", pt: "fuga", ex: "Daedalus cōnsilium fugae excōgitāvit." },
    { la: "cōnsilium", forms: "-ī n.", pt: "plano, ideia", ex: "Hoc est cōnsilium meum." },
    { la: "carcer", forms: "-eris m.", pt: "prisão, cárcere", ex: "Carcerem nostrum relinquimus!" },
    { la: "penna", forms: "-ae f.", pt: "pena (de ave)", ex: "Daedalus ālās ex pennīs cōnfēcit." },
    { la: "ignis", forms: "-is m.", pt: "fogo", ex: "Ignis sōlis cēram mollīvit." },
    { la: "ars", forms: "artis f.", pt: "arte, habilidade", ex: "Haud difficilis est ars volandī." },
    { la: "opus", forms: "-eris n.", pt: "obra, trabalho", ex: "Opus iam perfectum est." },
    { la: "nātūra", forms: "-ae f.", pt: "natureza", ex: "Nēmō nisi deus nātūram suam mūtāre potest." },
    { la: "orbis", forms: "-is m.", pt: "círculo; mundo (orbis terrārum)", ex: "Aquila in magnum orbem circum carcerem volat." },
    { la: "lacertus", forms: "-ī m.", pt: "braço", ex: "Daedalus pennās in lacertīs fīxit." },
    { la: "lībertās", forms: "-ātis f.", pt: "liberdade", ex: "Īcarus lībertātem quaerēns mortem invēnit." },
    { la: "cāsus", forms: "-ūs m.", pt: "queda; acaso", ex: "Fābula dē cāsū Īcarī mē maximē dēlectat." },
    { la: "celer", forms: "-eris -ere", pt: "rápido, veloz", ex: "Nāvis Thēseī nimis celeris fuit." },
    { la: "reliquus", forms: "-a -um", pt: "restante", ex: "Reliquam fābulam tibi nārrābō." },
    { la: "audāx", forms: "-ācis", pt: "audacioso, ousado", ex: "Nōlī nimis audāx esse in volandō!" },
    { la: "līber", forms: "-era -erum", pt: "livre", ex: "Quis tam līber est quam avis?" },
    { la: "ingēns", forms: "-entis", pt: "enorme", ex: "Daedalus ālās ingentēs cōnfēcit." },
    { la: "summus", forms: "-a -um", pt: "o mais alto", ex: "Īcarus in summum caelum ascendit." },
    { la: "īnfimus", forms: "-a -um", pt: "o mais baixo", ex: "Nōlī volāre in īnfimō āere prope mare!" },
    { la: "cautus", forms: "-a -um", pt: "cauteloso, prudente", ex: "Cautus estō, mī fīlī!" },
    { la: "temerārius", forms: "-a -um", pt: "imprudente, temerário", ex: "Puer temerārius altius sē levāvit." },
    { la: "cōnficere", forms: "v.", pt: "fabricar, fazer", ex: "Daedalus sibi et fīliō ālās cōnfēcit." },
    { la: "perficere", forms: "v.", pt: "completar, concluir", ex: "Certē cōnsilium meum perficiam." },
    { la: "effugere", forms: "v.", pt: "escapar", ex: "Pater et fīlius ē labyrinthō effūgērunt." },
    { la: "iuvāre", forms: "v.", pt: "ajudar", ex: "Quis nōs in fugiendō iuvāre poterit?" },
    { la: "imitārī", forms: "v. dep.", pt: "imitar", ex: "Avēs imitābimur in volandō." },
    { la: "mollīre", forms: "v.", pt: "amolecer", ex: "Igne cēram molliam." },
    { la: "ūrere", forms: "v.", pt: "queimar", ex: "Ignis sōlis pennās ussit." },
    { la: "vidērī", forms: "v. dep.", pt: "parecer", ex: "Illae īnsulae parvae esse videntur." },
    { la: "accidere", forms: "v.", pt: "acontecer", ex: "Quid tum accidit?" }
  ],
  pensum: [
    { t: "cloze", prompt: "Ālae necessāriae sunt ad vola___.", options: ["-ndum", "-re", "-ndī"], a: 0,
      why: "ad + gerúndio no acusativo: ad volandum = para voar." },
    { t: "cloze", prompt: "Haud difficilis est ars vola___.", options: ["-ndī", "-ndum", "-ndō"], a: 0,
      why: "Genitivo depois de substantivo: ars volandī." },
    { t: "cloze", prompt: "Fessus sum ambula___ in hōc carcere, pater!", options: ["-ndō", "-ndum", "-ndī"], a: 0,
      why: "Ablativo: fessus ambulandō = cansado de andar." },
    { t: "gap", prompt: "Daedalus cōnsilium ___ iam excōgitāvit: per āera ēvolābimus!", a: ["fugiendi", "fugiendī"], hint: "(de fugir — gerúndio no genitivo)",
      why: "cōnsilium fugiendī = cōnsilium fugae." },
    { t: "mcq", q: "“Cautus estō, mī fīlī!” — estō é:", options: ["imperativo de esse: sê!", "perfeito de esse", "gerúndio de esse"], a: 0,
      why: "estō! estōte! = imperativo futuro de esse." },
    { t: "mcq", q: "“Illae īnsulae parvae esse videntur” =", options: ["Aquelas ilhas parecem ser pequenas", "Aquelas ilhas veem coisas pequenas", "Aquelas ilhas são vistas raramente"], a: 0,
      why: "vidērī = parecer: videntur = parecem." },
    { t: "build", pt: "O pai ensina ao filho a arte de voar.", la: "Pater fīlium artem volandī docet", extra: ["volāre", "fīliō"] },
    { t: "read", text: "Daedalus fīlium monuit: 'Volā post mē in mediō āere! Sīn volābis in summō āere prope caelum, ignis sōlis cēram molliet atque pennās ūret.' Sed puer temerārius, cupidus sōlem propius aspiciendī, in summum caelum ascendit.",
      q: "Quid Daedalus fīlium facere iussit?", options: ["In mediō āere post sē volāre", "In summō āere volāre", "In mare dēscendere"], a: 0,
      why: "«Volā post mē in mediō āere!» — Ícaro não obedeceu." },
    { t: "listen", text: "Imitāre mē! Movē ālās sūrsum deorsum hōc modō!", options: ["Imitāre mē! Movē ālās sūrsum deorsum hōc modō!", "Sequere mē in labyrinthum, mī fīlī!", "Nōlī movēre ālās, Īcare!"], a: 0,
      why: "imitāre! = imperativo depoente; sūrsum deorsum = para cima e para baixo." },
    { t: "type", prompt: "“fogo”:", a: ["ignis"], why: "ignis, -is m. — o fogo do sol derreteu a cera." }
  ],
  lectio: {
    title: "Daedalus et Īcarus",
    source: "Adaptado de Familia Romana, cap. XXVI",
    text: `Rēx Mīnōs īrātus Daedalum, quī fīlum cōnfēcerat, in labyrinthum inclūdī iussit ūnā cum Īcarō fīliō. Daedalus intrā mūrōs errābat nec exitum invenīre poterat, etsī ipse labyrinthum aedificāverat. Quoniam aliae viae clausae erant, vir audāx per āera effugere cōnstituit: "Mīnōs terrae marīque imperat, sed dominus āeris nōn est. Per āera hinc ēvolābimus! Nēmō nōs volantēs persequī poterit."

Īcarus: "Ego quidem studiōsus sum volandī, sed ālae necessāriae sunt ad volandum. Hominēs sumus, nōn avēs." Daedalus "Arte meā" inquit "ipsa nātūra mūtārī potest." Itaque arte mīrābilī sibi et fīliō ālās ingentēs cōnfēcit ex pennīs, quās cērā iūnxit et in lacertīs fīxit. Tum fīlium artem volandī docuit: "Imitāre mē! Movē ālās sūrsum deorsum! Sed hoc tē moneō: volā post mē in mediō āere. Sīn volābis in summō āere prope sōlem, ignis cēram molliet atque pennās ūret. Cautus estō, mī fīlī!"

Pater et fīlius ē labyrinthō ēvolāvērunt. Īcarus, novā lībertāte dēlectātus, dēspiciēns multitūdinem īnsulārum mīrātus est. Tum puer temerārius, cupidus sōlem propius aspiciendī, in summum caelum ascendit. Ignis sōlis cēram mollīvit et pennās ussit: puer territus in mare cecidit ac mersus est. Ea maris pars etiam nunc 'mare Īcarium' appellātur.`,
    questions: [
      { q: "Quis Daedalum in labyrinthum inclūdī iussit?", options: ["Rēx Mīnōs", "Thēseus", "Aegeus"], a: 0 },
      { q: "Ex quibus rēbus Daedalus ālās cōnfēcit?", options: ["Ex pennīs et cērā", "Ex fīlō et saxīs", "Ex vēlīs ātrīs"], a: 0 },
      { q: "Cūr Īcarus in mare cecidit?", options: ["Quia ignis sōlis cēram mollīvit et pennās ussit", "Quia ālās movēre nōluit", "Quia pater eum relīquit"], a: 0 },
      { q: "Quōmodo ea maris pars nunc appellātur?", options: ["Mare Īcarium", "Mare Aegaeum", "Mare nostrum"], a: 0 }
    ]
  }
});

/* ============================================================
   Glossário extra + nomes novos
   ============================================================ */
NOMINA.push(
  { la: "Thēseus", pt: "Teseu — herói ateniense, matou o Minotauro" },
  { la: "Mīnōtaurus", pt: "Minotauro — monstro de Creta: cabeça de touro, corpo de homem" },
  { la: "Ariadna", pt: "Ariadne — filha de Minos, deu o fio a Teseu" },
  { la: "Mīnōs", pt: "Minos — rei de Creta" },
  { la: "Daedalus", pt: "Dédalo — artífice ateniense, construiu o labirinto" },
  { la: "Īcarus", pt: "Ícaro — filho de Dédalo, voou perto demais do sol" },
  { la: "Crēta", pt: "Creta — a grande ilha do Minotauro" },
  { la: "Athēnae", pt: "Atenas — cidade da Grécia, pátria de Teseu" },
  { la: "Athēniēnsis", pt: "ateniense, de Atenas" },
  { la: "Naxus", pt: "Naxos — ilha onde Ariadne foi abandonada" },
  { la: "Aegeus", pt: "Egeu — rei de Atenas, pai de Teseu" },
  { la: "Aegaeum", pt: "o mar Egeu (do nome do rei Egeu)" },
  { la: "Īcarium", pt: "o mar Icário (onde Ícaro caiu)" },
  { la: "Achillēs", pt: "Aquiles — chefe dos gregos na guerra de Troia" },
  { la: "Hectōr", pt: "Heitor — chefe troiano, morto por Aquiles" },
  { la: "Trōia", pt: "Troia — cidade da Ásia" },
  { la: "Rōmulus", pt: "Rômulo — fundador de Roma" },
  { la: "Remus", pt: "Remo — irmão de Rômulo" },
  { la: "Corinthus", pt: "Corinto — cidade grega perto do Istmo" },
  { la: "Peloponnēsus", pt: "Peloponeso — península do sul da Grécia" }
);

Object.assign(EXTRA_GLOSS, {
  "tabellarius": "carteiro, mensageiro", "ianitor": "porteiro", "cera": "cera",
  "ceram": "cera (acus.)", "rumpit": "rompe, quebra", "debeo": "devo",
  "debet": "deve", "debetur": "é devido", "mercedem": "salário (acus.)",
  "attulit": "trouxe", "affert": "traz", "mentiri": "mentir", "audet": "ousa",
  "tremens": "tremendo", "genua": "joelhos", "silentium": "silêncio",
  "excusat": "desculpa", "scindit": "rasga", "aliquid": "algo",
  "aliquam": "alguma", "aliquis": "alguém", "aliquem": "alguém (acus.)",
  "semel": "uma vez", "umquam": "alguma vez", "antehac": "antes disso",
  "cras": "amanhã", "ob": "por causa de", "superiore": "superior, de cima (abl.)",
  "inscriptum": "inscrito, escrito em", "futurus": "que vai ser",
  "pariturus": "que vai obedecer", "dormiturus": "que vai dormir",
  "facturus": "que vai fazer", "scripturus": "que vai escrever",
  "quidnam": "o que afinal?", "quisnam": "quem afinal?", "illinc": "dali",
  "hinc": "daqui", "forem": "porta (acus.)", "foris": "porta; lá fora",
  "umidus": "molhado, úmido", "imbrem": "chuva (acus.)", "humi": "no chão",
  "lautus": "lavado", "momordit": "mordeu", "morsus": "mordido",
  "veritus": "tendo temido", "fassus": "tendo confessado",
  "mentitus": "tendo mentido", "passus": "tendo sofrido", "novit": "conhece",
  "nuper": "há pouco", "vix": "mal, dificilmente", "valde": "muito, fortemente",
  "aliter": "de outro modo", "denuo": "de novo", "sibi": "a si, para si",
  "vivebat": "vivia", "edebat": "comia", "quotannis": "todo ano",
  "complures": "vários", "adulescentes": "jovens", "virgines": "moças, virgens",
  "virgo": "moça, virgem", "ater": "preto", "atra": "preta (n. pl.)",
  "atrum": "preto (acus.)", "expugnavit": "conquistou", "bello": "guerra (abl.)",
  "coepit": "começou", "coeperat": "tinha começado", "accessit": "aproximou-se",
  "conscendit": "embarcou (em)", "profectus": "tendo partido",
  "secutus": "tendo seguido", "occiso": "morto (abl.)", "repperit": "encontrou",
  "petivit": "atacou, foi atrás de", "opperire": "espera! (imper. dep.)",
  "revertere": "volta! (imper. dep.)", "revertar": "voltarei (dep.)",
  "laetamini": "alegrai-vos!", "sequimini": "segui!", "intuemini": "olhai!",
  "arbitratus": "julgando, achando", "iecit": "lançou, atirou",
  "maerebat": "sofria, estava de luto", "deserta": "abandonada",
  "relicta": "deixada, abandonada", "quaesivit": "procurou", "traxit": "arrastou",
  "trahens": "arrastando", "interfecit": "matou", "somno": "sono (abl.)",
  "aera": "o ar (acus.)", "aere": "ar (abl.)", "aeris": "do ar",
  "aquila": "águia", "excogitavit": "inventou, planejou",
  "evolaverunt": "voaram para fora", "evolabimus": "voaremos para fora",
  "persequi": "perseguir", "consequi": "alcançar", "confecit": "fabricou",
  "confecerat": "tinha fabricado", "iunxit": "juntou, uniu", "fixit": "fixou",
  "mollivit": "amoleceu", "ussit": "queimou", "mersus": "afundado",
  "cecidit": "caiu", "sursum": "para cima", "deorsum": "para baixo",
  "sin": "mas se", "quoniam": "visto que, já que", "verum": "mas",
  "haud": "não (enfático)", "paene": "quase", "quidem": "de fato, certamente",
  "tamquam": "como, tal qual", "quisquam": "alguém (após negação)",
  "trans": "através de, do outro lado de", "esto": "sê!", "estote": "sede!",
  "levavit": "ergueu, levantou", "propius": "mais perto",
  "aspiciendi": "de olhar", "despiciens": "olhando para baixo",
  "suspexit": "olhou para cima", "intra": "dentro de", "errabat": "vagava",
  "multitudinem": "multidão (acus.)", "libertate": "liberdade (abl.)"
});
