/* ============================================================
   LATINVM — Expansão 3: Capitula XIX–XXII
   Carrega DEPOIS de course3.js, ANTES de app.js.
   ============================================================ */

/* ================= CAPITVLVM XIX ================= */
COURSE.push({
  num: 19, roman: "XIX", icon: "💑",
  title: "Marītus et Uxor",
  subtitle: "Amor de juventude · pretérito imperfeito (-bam, -bat) · melior, peior, optimus",
  grammar: [
    { title: "O pretérito imperfeito (ativo)",
      html: `O passado que dura ou se repete — "eu amava, ele tinha":
      <table><tr><th>pessoa</th><th>amāre</th><th>habēre</th><th>esse</th></tr>
      <tr><td class="la">ego</td><td class="la">amā<b>bam</b></td><td class="la">habē<b>bam</b></td><td class="la">eram</td></tr>
      <tr><td class="la">tū</td><td class="la">amā<b>bās</b></td><td class="la">habē<b>bās</b></td><td class="la">erās</td></tr>
      <tr><td class="la">is/ea</td><td class="la">amā<b>bat</b></td><td class="la">habē<b>bat</b></td><td class="la">erat</td></tr>
      <tr><td class="la">nōs</td><td class="la">amā<b>bāmus</b></td><td class="la">habē<b>bāmus</b></td><td class="la">erāmus</td></tr>
      <tr><td class="la">vōs</td><td class="la">amā<b>bātis</b></td><td class="la">habē<b>bātis</b></td><td class="la">erātis</td></tr>
      <tr><td class="la">iī/eae</td><td class="la">amā<b>bant</b></td><td class="la">habē<b>bant</b></td><td class="la">erant</td></tr></table>
      3ª/4ª conjugação: <b>-ēbam</b>: <span class="ex-la">scrībēbat, dormiēbat.</span>
      <br><span class="ex-la">Ante decem annōs Iūlius uxōrem nōn habēbat.</span>` },
    { title: "O imperfeito passivo",
      html: `"Era amado, era elogiado":
      <br><span class="ex-la">amā<b>bar</b> · amā<b>bāris</b> · amā<b>bātur</b> · amā<b>bāmur</b> · amā<b>bāminī</b> · amā<b>bantur</b></span>
      <br><span class="ex-la">Iūlius Aemiliam amābat, sed ab eā nōn <b>amābātur</b>.</span> = Júlio amava Emília, mas não era amado por ela.
      <br><span class="ex-la">Pulchritūdō eius verbīs magnificīs laudābātur.</span>` },
    { title: "Comparativos irregulares · dīves e pauper",
      html: `<table><tr><th>positivo</th><th>comparativo</th><th>superlativo</th></tr>
      <tr><td class="la">bonus</td><td class="la">melior</td><td class="la">optimus</td></tr>
      <tr><td class="la">malus</td><td class="la">peior</td><td class="la">pessimus</td></tr>
      <tr><td class="la">magnus</td><td class="la">maior</td><td class="la">maximus</td></tr>
      <tr><td class="la">parvus</td><td class="la">minor</td><td class="la">minimus</td></tr>
      <tr><td class="la">multī</td><td class="la">plūrēs</td><td class="la">plūrimī</td></tr></table>
      <span class="ex-la">Iuppiter pessimus marītus est ac Venus pessima uxor!</span>
      <br><b>dīves</b> (rico) ↔ <b>pauper</b> (pobre): <span class="ex-la">Iūlius adulēscēns dīves, Aemilia virgō pauper erat.</span>` }
  ],
  vocab: [
    { la: "uxor", forms: "-ōris f.", pt: "esposa", ex: "Aemilia uxor Iūliī est." },
    { la: "marītus", forms: "-ī m.", pt: "marido", ex: "Iūlius marītus Aemiliae est." },
    { la: "coniūnx", forms: "-iugis m./f.", pt: "cônjuge", ex: "Iūnō coniūnx Iovis est." },
    { la: "columna", forms: "-ae f.", pt: "coluna", ex: "Tēctum altīs columnīs sustinētur." },
    { la: "signum", forms: "-ī n.", pt: "estátua; sinal", ex: "Tria signa inter columnās stant." },
    { la: "tēctum", forms: "-ī n.", pt: "teto, telhado", ex: "Coniugēs sub eōdem tēctō habitant." },
    { la: "dea", forms: "-ae f.", pt: "deusa", ex: "Venus dea amōris est." },
    { la: "mātrōna", forms: "-ae f.", pt: "matrona, mulher casada", ex: "Iūnō dea mātrōnārum est." },
    { la: "amor", forms: "-ōris m.", pt: "amor", ex: "Amor dōnum Veneris est." },
    { la: "pulchritūdō", forms: "-inis f.", pt: "beleza", ex: "Pulchritūdō Veneris ab omnibus laudātur." },
    { la: "adulēscēns", forms: "-entis m.", pt: "jovem, rapaz", ex: "Iūlius adulēscēns vīgintī duōrum annōrum erat." },
    { la: "virgō", forms: "-inis f.", pt: "moça, donzela", ex: "Aemilia virgō septendecim annōrum erat." },
    { la: "domus", forms: "-ūs f.", pt: "casa", ex: "Rōmae multae domūs sunt." },
    { la: "forum", forms: "-ī n.", pt: "foro, praça", ex: "Aemilia Iūlium in forō vidēbat." },
    { la: "dōnum", forms: "-ī n.", pt: "presente", ex: "Iūlius multa dōna eī dabat." },
    { la: "flōs", forms: "flōris m.", pt: "flor", ex: "Rosae et līlia flōrēs sunt." },
    { la: "dīves", forms: "-itis", pt: "rico", ex: "Pater Iūliī homō dīves erat." },
    { la: "pauper", forms: "-eris", pt: "pobre", ex: "Aemilia virgō pauper erat." },
    { la: "miser", forms: "-era -erum", pt: "infeliz, coitado", ex: "Iūlius miser erat et male dormiēbat." },
    { la: "beātus", forms: "-a -um", pt: "feliz", ex: "Nunc beātī sunt coniugēs." },
    { la: "dignus", forms: "-a -um + abl.", pt: "digno (de)", ex: "Tū sōlus amōre meō dignus erās." },
    { la: "melior / optimus", forms: "comp./sup.", pt: "melhor / o melhor", ex: "Iūlius marītus melior quam Iuppiter est." },
    { la: "peior / pessimus", forms: "comp./sup.", pt: "pior / o pior", ex: "Iuppiter pessimus marītus est." },
    { la: "plūrēs / plūrimī", forms: "comp./sup.", pt: "mais numerosos / muitíssimos", ex: "Rōmae plūrimī hominēs habitant." },
    { la: "ūllus", forms: "-a -um", pt: "algum (após negação)", ex: "Neque ūlla dea peior est quam Venus." },
    { la: "possidēre", forms: "v.", pt: "possuir", ex: "Pater Iūliī multās vīllās possidēbat." },
    { la: "remittere", forms: "v.", pt: "mandar de volta, devolver", ex: "Aemilia omnia dōna remittēbat." },
    { la: "ōsculārī", forms: "v. dep.", pt: "beijar", ex: "Iūlius uxōrem suam ōsculātur." },
    { la: "augēre", forms: "v.", pt: "aumentar", ex: "Tempus amōrem meum auget." },
    { la: "tamen", forms: "adv.", pt: "contudo, mesmo assim", ex: "Pauper erat; tamen Iūlius eam amābat." }
  ],
  pensum: [
    { t: "cloze", prompt: "Ante decem annōs Iūlius uxōrem nōn habē___.", options: ["-bat", "-t", "-bit"], a: 0,
      why: "Imperfeito: habēbat = tinha (naquele tempo)." },
    { t: "cloze", prompt: "Tunc ego tē amā___, sed tū mē nōn amā___.", options: ["-bam / -bās", "-ō / -s", "-bat / -bat"], a: 0,
      why: "Imperfeito: amābam (eu), amābās (tu)." },
    { t: "gap", prompt: "Aemilia Crassum amābat, neque ab eō ___.", a: ["amabatur", "amābātur"], hint: "(era amada — imperfeito passivo)",
      why: "Passiva do imperfeito: amābātur." },
    { t: "mcq", q: "bonus → melior → ___?", options: ["optimus", "pessimus", "maximus"], a: 0,
      why: "bonus, melior, optimus = bom, melhor, ótimo." },
    { t: "mcq", q: "“Nēmō deōrum peior marītus est quam Iuppiter” =", options: ["Nenhum deus é pior marido que Júpiter", "Júpiter é o melhor marido entre os deuses", "Nenhum deus é marido de Júpiter"], a: 0,
      why: "peior = pior; Júpiter é o pessimus marītus." },
    { t: "gap", prompt: "Pater Iūliī homō ___ erat, pater Aemiliae pauper.", a: ["dives", "dīves"], hint: "(rico)",
      why: "dīves ↔ pauper." },
    { t: "build", pt: "Júlio escrevia cartas a Emília todos os dias.", la: "Iūlius cotīdiē epistulās ad Aemiliam scrībēbat", extra: ["scrībit", "dōna"] },
    { t: "read", text: "Iūlius Aemiliam amābat et cotīdiē epistulās ad eam scrībēbat. Sed Aemilia epistulās nōn legēbat et omnia dōna ad eum remittēbat: ea enim alium virum amābat. Itaque Iūlius miser erat.",
      q: "Cūr Iūlius miser erat?", options: ["Quia Aemilia alium virum amābat", "Quia pauper erat", "Quia epistulās scrībere nōn poterat"], a: 0,
      why: "Emília amava outro (Crasso Dīves) e devolvia tudo." },
    { t: "listen", text: "Ut tunc tē amābam, ita etiam nunc tē amō.", options: ["Ut tunc tē amābam, ita etiam nunc tē amō.", "Ut tunc mē amābās, ita nunc mē amās.", "Tunc tē nōn amābam, sed nunc tē amō."], a: 0,
      why: "amābam (imperfeito) + amō (presente): o amor não diminuiu com o tempo." },
    { t: "type", prompt: "“esposa”:", a: ["uxor"], why: "uxor, -ōris f. — marītus et uxor = coniugēs." }
  ],
  lectio: {
    title: "Marītus et Uxor",
    source: "Adaptado de Familia Romana, cap. XIX",
    text: `Iūlius cum Aemiliā uxōre suā in peristȳlō ambulat. Tēctum peristȳlī altīs columnīs sustinētur, inter quās tria pulchra signa stant: ūnum Iūnōnis, alterum Cupīdinis, tertium Veneris. Iuppiter malus marītus est, quī multās deās amat praeter Iūnōnem coniugem suam: nēmō deōrum peior marītus est quam Iuppiter, neque ūlla dea peior uxor quam Venus. At Iūlius certē marītus melior est quam Iuppiter!

Ante decem annōs Iūlius uxōrem nōn habēbat. Adulēscēns dīves erat, quī Rōmae apud parentēs suōs habitābat. Aemilia virgō pauper erat septendecim annōrum. Iūlius eam amābat: cotīdiē epistulās ad eam scrībēbat et cum epistulīs rosās aliōsque flōrēs mittēbat. Sed Aemilia Iūlium nōn amābat, neque eum salūtābat, cum eum in forō vidēbat; omnia dōna ad eum remittēbat. Ea enim alium virum amābat, cui nōmen erat Crassus Dīves — neque ab eō amābātur, quod pauper erat. Itaque Iūlius miser erat et nocte male dormiēbat.

Sed post paucōs diēs epistulae et flōrēs nōn iam remittēbantur... Annō post Iūlius et Aemilia coniugēs erant, sub eōdem tēctō habitantēs. Etiam nunc beātī sunt: Iūlius uxōrem suam amat et ab eā amātur. Iūlius Aemiliam ōsculātur: "Ut tunc tē amābam, ita etiam nunc tē amō."`,
    questions: [
      { q: "Quis peior marītus est quam Iuppiter?", options: ["Nēmō", "Iūlius", "Vulcānus"], a: 0 },
      { q: "Quālis erat Aemilia ante decem annōs?", options: ["Virgō pauper", "Mātrōna dīves", "Dea pulchra"], a: 0 },
      { q: "Quem Aemilia tunc amābat?", options: ["Crassum Dīvitem", "Iūlium", "Vulcānum"], a: 0 },
      { q: "Cūr Iūlius tunc miser erat?", options: ["Quia Aemilia eum nōn amābat", "Quia pauper erat", "Quia parentēs eius mortuī erant"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XX ================= */
COURSE.push({
  num: 20, roman: "XX", icon: "👶",
  title: "Parentēs",
  subtitle: "O bebê que vem aí · futuro (-bō, -bit / -am, -et) · volō, nōlō, nōlī!",
  grammar: [
    { title: "O futuro (ativo)",
      html: `1ª/2ª conjugação: <b>-bō, -bis, -bit</b>; 3ª/4ª: <b>-am, -ēs, -et</b>:
      <table><tr><th>pessoa</th><th>amāre</th><th>scrībere</th><th>esse</th></tr>
      <tr><td class="la">ego</td><td class="la">amā<b>bō</b></td><td class="la">scrīb<b>am</b></td><td class="la">erō</td></tr>
      <tr><td class="la">tū</td><td class="la">amā<b>bis</b></td><td class="la">scrīb<b>ēs</b></td><td class="la">eris</td></tr>
      <tr><td class="la">is/ea</td><td class="la">amā<b>bit</b></td><td class="la">scrīb<b>et</b></td><td class="la">erit</td></tr>
      <tr><td class="la">nōs</td><td class="la">amā<b>bimus</b></td><td class="la">scrīb<b>ēmus</b></td><td class="la">erimus</td></tr>
      <tr><td class="la">vōs</td><td class="la">amā<b>bitis</b></td><td class="la">scrīb<b>ētis</b></td><td class="la">eritis</td></tr>
      <tr><td class="la">iī/eae</td><td class="la">amā<b>bunt</b></td><td class="la">scrīb<b>ent</b></td><td class="la">erunt</td></tr></table>
      <span class="ex-la">Mox parvulum īnfantem habēbimus.</span> · <span class="ex-la">Iūlius crās Rōmam ībit</span> (īre: ībō, ībis, ībit).` },
    { title: "O futuro passivo",
      html: `<span class="ex-la">laudā<b>bor</b> · laudā<b>beris</b> · laudā<b>bitur</b> · laudā<b>bimur</b> · laudā<b>biminī</b> · laudā<b>buntur</b></span>
      <br>3ª/4ª conjugação: <span class="ex-la">reprehend<b>ar</b>, reprehend<b>ēris</b>, reprehend<b>ētur</b>…</span>
      <br><span class="ex-la">Tū ā nōbīs 'Iūlia' vocāberis, et nōs ā tē 'pater' et 'māter' vocābimur.</span>
      <br><span class="ex-la">Tū et parvula soror aequē amābiminī.</span>` },
    { title: "volō, nōlō · nōlī + infinitivo",
      html: `Querer e não querer:
      <br><span class="ex-la"><b>volō, vīs, vult — volumus, vultis, volunt</b></span>
      <br><span class="ex-la">nōlō</span> (= nōn volō): <span class="ex-la">Plūrēs quam duōs fīliōs habēre nōlō!</span>
      <br>Proibição: <b>nōlī / nōlīte</b> + infinitivo:
      <br><span class="ex-la"><b>Nōlī abīre!</b></span> = Não vá embora! · <span class="ex-la">Nōlīte mē 'Iūliolam' vocāre!</span>` }
  ],
  vocab: [
    { la: "īnfāns", forms: "-antis m./f.", pt: "bebê", ex: "Īnfāns in cūnīs cubat." },
    { la: "cūnae", forms: "-ārum f. pl.", pt: "berço", ex: "Cūnae lectulus īnfantis sunt." },
    { la: "somnus", forms: "-ī m.", pt: "sono", ex: "Somnus īnfantī tam necessārius est quam cibus." },
    { la: "lac", forms: "lactis n.", pt: "leite", ex: "Īnfāns lacte mātris vīvit." },
    { la: "mulier", forms: "-eris f.", pt: "mulher", ex: "Mulier quae aliēnum īnfantem alit nūtrīx vocātur." },
    { la: "nūtrīx", forms: "-īcis f.", pt: "ama de leite", ex: "Multī īnfantēs ā nūtrīcibus aluntur." },
    { la: "gradus", forms: "-ūs m.", pt: "passo", ex: "Īnfāns prīmōs gradūs facit." },
    { la: "sermō", forms: "-ōnis m.", pt: "conversa, fala", ex: "Sermō eōrum est dē rēbus futūrīs." },
    { la: "fīliola", forms: "-ae f.", pt: "filhinha", ex: "Nōnne laetus eris, sī fīliolam habēbis?" },
    { la: "officium", forms: "-ī n.", pt: "dever, obrigação", ex: "Hoc est mātris officium!" },
    { la: "colloquium", forms: "-ī n.", pt: "conversa, diálogo", ex: "Ecce colloquium eōrum." },
    { la: "silentium", forms: "-ī n.", pt: "silêncio", ex: "Iūlia silentium parentum animadvertit." },
    { la: "parvulus", forms: "-a -um", pt: "pequenino", ex: "Parvulus īnfāns fārī nōn potest." },
    { la: "necessārius", forms: "-a -um", pt: "necessário", ex: "Somnus virō industriō necessārius est." },
    { la: "aliēnus", forms: "-a -um", pt: "alheio, de outro", ex: "Nūtrīx aliēnum īnfantem alit." },
    { la: "futūrus", forms: "-a -um", pt: "futuro", ex: "Dē tempore futūrō colloquuntur." },
    { la: "fārī", forms: "v. dep.", pt: "falar", ex: "Īnfāns nōndum fārī potest." },
    { la: "carēre", forms: "v. + abl.", pt: "carecer de, estar sem", ex: "Īnfāns cibō carēre nōn potest." },
    { la: "vāgīre", forms: "v.", pt: "chorar (de bebê)", ex: "Īnfāns quī cibō caret magnā vōce vāgit." },
    { la: "alere", forms: "v.", pt: "alimentar, criar", ex: "Māter ipsa īnfantem suum alet." },
    { la: "colloquī", forms: "v. dep.", pt: "conversar", ex: "Iūlius cum uxōre colloquitur." },
    { la: "volō / vīs / vult", forms: "v. irr.", pt: "quero / queres / quer", ex: "Cūr tū fīlium habēre vīs?" },
    { la: "nōlle", forms: "v. irr. (nōlō)", pt: "não querer", ex: "Plūrēs fīliōs habēre nōlō." },
    { la: "nōlī / nōlīte", forms: "+ inf.", pt: "não faças! (proibição)", ex: "Nōlī abīre, Aemilia!" },
    { la: "manēre", forms: "v.", pt: "ficar, permanecer", ex: "Semper apud īnfantem meum manēbō." },
    { la: "cūrāre", forms: "v.", pt: "cuidar de", ex: "Māter ipsa īnfantem aegrum cūrābit." },
    { la: "dēbēre", forms: "v. + inf.", pt: "dever", ex: "Māter apud īnfantem manēre dēbet." },
    { la: "dīligere", forms: "v.", pt: "amar, estimar", ex: "Fīliam aequē dīligō ac fīliōs." },
    { la: "mox", forms: "adv.", pt: "logo, em breve", ex: "Mox imbrem habēbimus." },
    { la: "crās", forms: "adv.", pt: "amanhã", ex: "Iūlius crās Rōmam ībit." }
  ],
  pensum: [
    { t: "cloze", prompt: "Mox novum īnfantem habē_____.", options: ["-bimus", "-mus", "-bāmus"], a: 0,
      why: "Futuro 1ª pessoa do plural: habēbimus = teremos." },
    { t: "cloze", prompt: "Nocte sōl nōn lūcē___, sed stēllae lūcē___.", options: ["-bit / -bunt", "-t / -nt", "-bat / -bant"], a: 0,
      why: "Futuro: lūcēbit, lūcēbunt." },
    { t: "cloze", prompt: "Tū ā nōbīs 'Iūlia' vocā_____.", options: ["-beris", "-ris", "-tur"], a: 0,
      why: "Futuro passivo 2ª pessoa: vocāberis = serás chamada." },
    { t: "gap", prompt: "Post paucōs mēnsēs novus īnfāns in cūnīs ___.", a: ["erit"], hint: "(estará — futuro de esse)",
      why: "erō, eris, erit — futuro de esse." },
    { t: "mcq", q: "“Nōlī abīre!” =", options: ["Não vá embora!", "Ele não quer ir embora.", "Vá embora agora!"], a: 0,
      why: "nōlī + infinitivo = proibição (imperativo negativo)." },
    { t: "mcq", q: "“Cūr tū fīlium habēre vīs?” =", options: ["Por que você quer ter um filho?", "Por que ele quer ter um filho?", "Por que você tem um filho?"], a: 0,
      why: "vīs = queres (volō, vīs, vult)." },
    { t: "build", pt: "A própria mãe alimentará seu bebê.", la: "Māter ipsa īnfantem suum alet", extra: ["alit", "nūtrīx"] },
    { t: "read", text: "Iūlia: 'Sorōrem habēre nōlō! Sī sorōrem habēbō, ea sōla ā vōbīs amābitur, ego nōn amābor!' Aemilia: 'Minimē: tū et parvula soror aequē amābiminī.'",
      q: "Cūr Iūlia sorōrem habēre nōn vult?", options: ["Quod putat sorōrem sōlam amātam fore", "Quod frātrem parvulum timet", "Quod cūnae vacuae sunt"], a: 0,
      why: "Ela teme perder o amor dos pais; a mãe promete: aequē amābiminī." },
    { t: "listen", text: "Mox imbrem habēbimus: caelum nūbibus ātrīs operītur.", options: ["Mox imbrem habēbimus: caelum nūbibus ātrīs operītur.", "Mox sōl lūcēbit et caelum clārum erit.", "Imber cadit et caelum obscūrum est."], a: 0,
      why: "habēbimus = teremos (futuro): a chuva está chegando." },
    { t: "type", prompt: "“amanhã”:", a: ["cras", "crās"], why: "crās ↔ hodiē ↔ herī." }
  ],
  lectio: {
    title: "Parentēs",
    source: "Adaptado de Familia Romana, cap. XX",
    text: `Puerī parvulī quī nōndum fārī possunt 'īnfantēs' dīcuntur. Īnfāns in cūnīs cubāre solet et multās hōrās dormit; nam somnus īnfantī tam necessārius est quam cibus. Īnfāns quī cibō caret magnā vōce vāgit: ita cibum postulat. Tum māter accurrit atque eī lac dat; īnfāns enim nōn pāne, sed lacte vīvit. Mulier quae aliēnum īnfantem alit 'nūtrīx' vocātur.

Post paucōs mēnsēs novus īnfāns in cūnīs erit: Aemilia rūrsus parvulum īnfantem habēbit. Iūlius et Aemilia in peristȳlō dē tempore futūrō colloquuntur. Iūlius: "Mox parvulum fīlium habēbimus!" Aemilia: "Fīlium? Ego alteram fīliam habēre volō! Num parvulam fīliam minus amābis quam fīlium?" Iūlius: "Minimē! Nēminem magis amābō quam parvulam fīliam. Nōlī abīre — tēcum colloquī volō!"

Aemilia: "Ego ipsa īnfantem meum alam et cūrābō, neque eum apud nūtrīcem relinquam. Semper apud eum manēbō: hoc est mātris officium!" Iūlius: "Meum officium est pecūniam facere ac magnam familiam alere! Sī īnfāns nocte vāgiet, ego in aliō cubiculō dormiam!"

Tum Iūlia intrat: "Sī parvulam sorōrem habēbō, ea sōla ā vōbīs amābitur!" Aemilia: "Minimē, Iūlia: tū et parvula soror aequē amābiminī."`,
    questions: [
      { q: "Quōmodo īnfāns cibum postulat?", options: ["Magnā vōce vāgit", "Verba dīcit", "Tacitus exspectat"], a: 0 },
      { q: "Quid Aemilia habēre vult?", options: ["Alteram fīliam", "Plūrēs fīliōs", "Novam ancillam"], a: 0 },
      { q: "Quis īnfantem Aemiliae alet?", options: ["Māter ipsa", "Nūtrīx", "Syra"], a: 0 },
      { q: "Ubi Iūlius dormiet, sī īnfāns nocte vāgiet?", options: ["In aliō cubiculō", "Apud cūnās", "In peristȳlō"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XXI ================= */
COURSE.push({
  num: 21, roman: "XXI", icon: "🥊",
  title: "Pugna Discipulōrum",
  subtitle: "A briga e a mentira · pretérito perfeito (-vī, -it) · perfeito × imperfeito",
  grammar: [
    { title: "O pretérito perfeito (ativo)",
      html: `O passado pontual, concluído — "golpeei, escreveu":
      <table><tr><th>pessoa</th><th>pulsāre</th><th>esse</th></tr>
      <tr><td class="la">ego</td><td class="la">pulsāv<b>ī</b></td><td class="la">fuī</td></tr>
      <tr><td class="la">tū</td><td class="la">pulsāv<b>istī</b></td><td class="la">fuistī</td></tr>
      <tr><td class="la">is/ea</td><td class="la">pulsāv<b>it</b></td><td class="la">fuit</td></tr>
      <tr><td class="la">nōs</td><td class="la">pulsāv<b>imus</b></td><td class="la">fuimus</td></tr>
      <tr><td class="la">vōs</td><td class="la">pulsāv<b>istis</b></td><td class="la">fuistis</td></tr>
      <tr><td class="la">iī/eae</td><td class="la">pulsāv<b>ērunt</b></td><td class="la">fuērunt</td></tr></table>
      Temas do perfeito: <span class="ex-la">recitāre → recitāv- · pārēre → pāru- · scrībere → scrīps- · dīcere → dīx- · dormīre → dormīv- · iacēre → iacu-.</span>` },
    { title: "O perfeito passivo: particípio + sum",
      html: `Particípio perfeito (-tus -a -um) + presente de <i>esse</i>:
      <br><span class="ex-la">Mārcus ā Sextō <b>pulsātus est</b>.</span> = Marcos foi golpeado por Sexto.
      <br><span class="ex-la">Ā magistrō <b>laudātus sum</b>.</span> · <span class="ex-la">Omnēs <b>verberātī sumus</b>!</span>
      <br>O particípio concorda: <span class="ex-la">fīlius laudāt<b>us</b> est, fīlia laudāt<b>a</b> est, fīliī laudāt<b>ī</b> sunt.</span>` },
    { title: "Perfeito × imperfeito",
      html: `Imperfeito = o pano de fundo; perfeito = o evento que acontece:
      <br><span class="ex-la">Nox obscūra <b>erat</b>: nūlla lūna caelum <b>illūstrābat</b>.</span> (cenário)
      <br><span class="ex-la">Tum fulgur caelum <b>illūstrāvit</b>!</span> (ação pontual)
      <br><span class="ex-la">Hodiē māne vestīmenta munda <b>erant</b> — sed Mārcus per imbrem <b>ambulāvit</b> et humī <b>iacuit</b>.</span>` }
  ],
  vocab: [
    { la: "vestis", forms: "-is f.", pt: "roupa, veste", ex: "Vestis Mārcī sordida et ūmida est." },
    { la: "genū", forms: "-ūs n.", pt: "joelho", ex: "Genua Mārcī sordida sunt." },
    { la: "humus", forms: "-ī f.", pt: "chão, solo (terra)", ex: "Humus propter imbrem ūmida est." },
    { la: "cruor", forms: "-ōris m.", pt: "sangue (derramado)", ex: "Iūlius cruōrem in faciē fīliī cōnspicit." },
    { la: "bōs", forms: "bovis m./f.", pt: "boi", ex: "Sextus tam validus est quam bōs!" },
    { la: "cornū", forms: "-ūs n.", pt: "chifre", ex: "Bōs īrātus cornū pulsat." },
    { la: "causa", forms: "-ae f.", pt: "causa, motivo", ex: "Sextus mē sine causā pulsāvit!" },
    { la: "porcus", forms: "-ī m.", pt: "porco", ex: "Tam sordidus es quam porcus!" },
    { la: "pugna", forms: "-ae f.", pt: "briga, luta", ex: "Satis audīvī dē pugnā vestrā." },
    { la: "sordēs", forms: "-ium f. pl.", pt: "sujeira", ex: "Mārcus sordēs ē faciē lavat." },
    { la: "solum", forms: "-ī n.", pt: "chão, piso", ex: "Sordidum est hoc solum!" },
    { la: "tabella", forms: "-ae f.", pt: "tabuinha (pequena)", ex: "Mārcus aliēnam tabellam ostendit." },
    { la: "mundus", forms: "-a -um", pt: "limpo", ex: "Māne vestīmenta munda erant." },
    { la: "candidus", forms: "-a -um", pt: "branco, alvo", ex: "Vestīmenta tam candida quam nix erant." },
    { la: "angustus", forms: "-a -um", pt: "estreito", ex: "Puerī in viā angustā pugnāvērunt." },
    { la: "validus", forms: "-a -um", pt: "forte", ex: "Sextus multō validior est quam ego." },
    { la: "indignus", forms: "-a -um", pt: "indigno, vergonhoso", ex: "Duōs cum ūnō pugnāre indignum est." },
    { la: "falsus", forms: "-a -um", pt: "falso", ex: "Quod Mārcus dīcit falsum est." },
    { la: "cognōscere", forms: "v.", pt: "reconhecer, conhecer", ex: "Difficile est puerum sordidum cognōscere." },
    { la: "cōnspicere", forms: "v.", pt: "avistar, notar", ex: "Aemilia vestīgia in solō cōnspicit." },
    { la: "excūsāre", forms: "v.", pt: "desculpar", ex: "Mārcus sē excūsāre cōnātur." },
    { la: "vincere", forms: "v.", pt: "vencer", ex: "Sōlus Sextum vincere nōn possum." },
    { la: "narrāre", forms: "v.", pt: "contar, narrar", ex: "Narrā nōbīs omnia!" },
    { la: "mūtāre", forms: "v.", pt: "trocar, mudar", ex: "Mārcus vestīmenta mūtat." },
    { la: "mentīrī", forms: "v. dep.", pt: "mentir", ex: "Mārcus mentītur!" },
    { la: "crēdere", forms: "v. + dat.", pt: "acreditar (em)", ex: "Aemilia fīliō suō crēdit." },
    { la: "fallere", forms: "v.", pt: "enganar", ex: "Mārcus patrem fallere nōn potest." },
    { la: "dubitāre", forms: "v.", pt: "duvidar", ex: "Iūlius dē verbīs eius dubitat." },
    { la: "aliquis / aliquid", forms: "pron.", pt: "alguém / algo", ex: "Aliquis pedibus sordidīs intrāvit!" },
    { la: "postquam", forms: "conj.", pt: "depois que", ex: "Postquam vestem mūtāvit, mundus redit." }
  ],
  pensum: [
    { t: "cloze", prompt: "Prīmum Sextus mē pulsāv___, deinde ego illum pulsāv___.", options: ["-it / -ī", "-ī / -it", "-bat / -bam"], a: 0,
      why: "Perfeito: pulsāvit (ele), pulsāvī (eu)." },
    { t: "cloze", prompt: "Quid? Vōs duo ūnum pulsāv______?", options: ["-istis", "-imus", "-ērunt"], a: 0,
      why: "Perfeito 2ª pessoa do plural: pulsāvistis." },
    { t: "gap", prompt: "Mārcus ā Sextō ___ est.", a: ["pulsatus", "pulsātus"], hint: "(foi golpeado — perfeito passivo)",
      why: "Particípio + est: pulsātus est = foi golpeado." },
    { t: "gap", prompt: "Nōn Mārcus, sed Sextus litterās ___.", a: ["scripsit", "scrīpsit"], hint: "(escreveu)",
      why: "Perfeito de scrībere: scrīpsit (tema scrīps-)." },
    { t: "mcq", q: "“Nox obscūra erat; tum fulgur caelum illūstrāvit.” — por que dois tempos?", options: ["erat = cenário (imperfeito); illūstrāvit = evento pontual (perfeito)", "Os dois são perfeitos", "Os dois são imperfeitos"], a: 0,
      why: "Imperfeito descreve o pano de fundo; perfeito narra o acontecimento." },
    { t: "mcq", q: "“Mārcus mentītur” =", options: ["Marcos está mentindo", "Marcos é mencionado", "Marcos está medindo"], a: 0,
      why: "mentīrī (depoente) = falsum dīcere." },
    { t: "build", pt: "Marcos mostra aos pais uma tabuinha alheia.", la: "Mārcus parentibus aliēnam tabellam ostendit", extra: ["suam", "scrīpsit"] },
    { t: "read", text: "Mārcus mātrī tabellam ostendit et 'Ipse hās litterās scrīpsī' inquit. Sed litterās nōn Mārcus, sed Sextus scrīpsit: puerī enim tabellās inter pugnam mūtāvērunt. Aemilia fīliō crēdit, at Iūlius dubitat.",
      q: "Quis litterās in tabellā scrīpsit?", options: ["Sextus", "Mārcus", "Titus"], a: 0,
      why: "Marcos trocou as tabuinhas durante a briga — a letra bonita é do Sexto." },
    { t: "listen", text: "Quis tē pulsāvit, mī fīlī?", options: ["Quis tē pulsāvit, mī fīlī?", "Quem tū pulsāvistī, mī fīlī?", "Cūr mē pulsāvistis, puerī?"], a: 0,
      why: "pulsāvit = golpeou (3ª sing.): o pai pergunta quem bateu no filho." },
    { t: "type", prompt: "“sangue (derramado)”:", a: ["cruor"], why: "cruor, -ōris m. = sanguis." }
  ],
  lectio: {
    title: "Pugna Discipulōrum",
    source: "Adaptado de Familia Romana, cap. XXI",
    text: `Ecce Mārcus ē lūdō domum revertitur. Difficile est eum cognōscere: puer sordidus est, et sanguis dē nāsō eius fluit! Hodiē māne vestīmenta Mārcī munda erant atque tam candida quam nix — nunc sordida et ūmida sunt, quod Mārcus per imbrem ambulāvit et humī iacuit. Mārcus enim in viā angustā cum Sextō pugnāvit: prīmum Sextus ōs Mārcī pugnō pulsāvit, deinde Mārcus et Titus Sextum pulsāvērunt.

Iūlius cruōrem in faciē fīliī cōnspiciēns "Quis tē pulsāvit?" inquit. Mārcus: "Ā Sextō pulsātus sum. Sed nōs eum vīcimus: duo enim erāmus!" Iūlius: "Quid? Duo cum ūnō pugnāvistis? Id indignum est!"

Mārcus, postquam vestem mūtāvit, mundus redit et mātrem salūtat. "In lūdōne bonus puer fuistī?" interrogat māter. "Profectō bonus puer fuī" respondet Mārcus, "magister litterās meās laudāvit. Ecce tabella mea!" Sed Mārcus mentītur: nōn suam, sed aliēnam tabellam ostendit! Litterās enim quae in eā tabellā leguntur nōn Mārcus, sed Sextus scrīpsit. Aemilia, quae omnia crēdit, ā fīliō improbō fallitur. At Iūlius tabellam in manūs sūmit: "Mentīris, Mārce! Hoc tuā manū scrīptum nōn est!"`,
    questions: [
      { q: "Cūr vestīmenta Mārcī ūmida sunt?", options: ["Quod per imbrem ambulāvit", "Quod in flūmine natāvit", "Quod lavātus est"], a: 0 },
      { q: "Ā quō Mārcus pulsātus est?", options: ["Ā Sextō", "Ā Titō", "Ā magistrō"], a: 0 },
      { q: "Quis litterās in tabellā scrīpsit?", options: ["Sextus", "Mārcus", "Titus"], a: 0 },
      { q: "Quis ā Mārcō fallitur?", options: ["Aemilia", "Iūlius", "Magister"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XXII ================= */
COURSE.push({
  num: 22, roman: "XXII", icon: "🐕",
  title: "Cavē Canem",
  subtitle: "O carteiro e o cão de guarda · particípio perfeito passivo · supino (-tum, -tū)",
  grammar: [
    { title: "O particípio perfeito passivo: -tus -a -um",
      html: `Adjetivo verbal — "escrito, fechado, rompido":
      <table><tr><th>verbo</th><th>perfeito</th><th>particípio</th></tr>
      <tr><td class="la">scrībere</td><td class="la">scrīpsisse</td><td class="la">scrīptus</td></tr>
      <tr><td class="la">claudere</td><td class="la">clausisse</td><td class="la">clausus</td></tr>
      <tr><td class="la">rumpere</td><td class="la">rūpisse</td><td class="la">ruptus</td></tr>
      <tr><td class="la">vincīre</td><td class="la">vīnxisse</td><td class="la">vinctus</td></tr>
      <tr><td class="la">solvere</td><td class="la">solvisse</td><td class="la">solūtus</td></tr>
      <tr><td class="la">scindere</td><td class="la">scidisse</td><td class="la">scissus</td></tr></table>
      <span class="ex-la">Ecce catēna <b>rupta</b>!</span> · <span class="ex-la">In līmine 'SALVĒ' <b>scrīptum</b> est.</span>` },
    { title: "Ablativo absoluto com particípio",
      html: `Contexto em duas palavras no ablativo:
      <br><span class="ex-la"><b>Iānitōre dormiente</b>, canis vigilāns iānuam custōdit.</span> = Enquanto o porteiro dorme…
      <br><span class="ex-la"><b>Cane lātrante</b>, iānitor ē somnō excitātur.</span> = Com o cão latindo…
      <br><span class="ex-la"><b>Cane vinctō</b>, tabellārius tandem intrat.</span> = Depois de acorrentado o cão…` },
    { title: "O supino: -tum e -tū",
      html: `<b>-tum</b> (com īre, venīre, mittere) = "para fazer algo":
      <br><span class="ex-la">Amīcī <b>salūtātum</b> veniunt.</span> = vêm para saudar · <span class="ex-la">Vesperī omnēs <b>dormītum</b> eunt.</span>
      <br><b>-tū</b> (com facilis/difficilis):
      <br><span class="ex-la">Multa faciliōra sunt <b>dictū</b> quam <b>factū</b>.</span> = mais fáceis de dizer do que de fazer.
      <br><span class="ex-la">Vōx tua difficilis est <b>audītū</b>.</span>` }
  ],
  vocab: [
    { la: "foris", forms: "-is f.", pt: "porta (folha), batente", ex: "Iānua ē duābus foribus cōnstat." },
    { la: "līmen", forms: "-inis n.", pt: "soleira", ex: "In līmine 'SALVĒ' scrīptum est." },
    { la: "cardō", forms: "-inis m.", pt: "gonzo, dobradiça", ex: "Foris in cardinibus vertitur." },
    { la: "iānitor", forms: "-ōris m.", pt: "porteiro", ex: "Iānitor intrā iānuam sedet." },
    { la: "tabellārius", forms: "-ī m.", pt: "carteiro", ex: "Tabellārius epistulās fert." },
    { la: "catēna", forms: "-ae f.", pt: "corrente", ex: "Canis catēnā vincītur." },
    { la: "aurum", forms: "-ī n.", pt: "ouro", ex: "Ānulus ex aurō factus est." },
    { la: "lignum", forms: "-ī n.", pt: "madeira", ex: "Forēs ē lignō factae sunt." },
    { la: "faber", forms: "-brī m.", pt: "artesão, ferreiro", ex: "Deus fabrōrum est Vulcānus." },
    { la: "imāgō", forms: "-inis f.", pt: "imagem, figura", ex: "Īnfrā imāginem canis scrīptum est: CAVĒ CANEM." },
    { la: "pallium", forms: "-ī n.", pt: "manto, capa", ex: "Canis pallium eius dentibus prehendit." },
    { la: "ferōx", forms: "-ōcis", pt: "feroz", ex: "Canis prope tam ferōx est quam lupus." },
    { la: "ferreus", forms: "-a -um", pt: "de ferro", ex: "Catēna ex ānulīs ferreīs cōnstat." },
    { la: "aureus", forms: "-a -um", pt: "de ouro", ex: "Ānulus aureus pulchrior est quam ferreus." },
    { la: "ligneus", forms: "-a -um", pt: "de madeira", ex: "Tabellārius baculō ligneō forēs pulsat." },
    { la: "custōdīre", forms: "v.", pt: "guardar, vigiar", ex: "Canis vigilāns iānuam custōdit." },
    { la: "admittere", forms: "v.", pt: "deixar entrar", ex: "Iānitor tabellārium in vīllam admittit." },
    { la: "vincīre", forms: "v.", pt: "amarrar, acorrentar", ex: "Necesse est canem catēnā vincīre." },
    { la: "mordēre", forms: "v.", pt: "morder", ex: "Cavē! Canis tē mordēbit!" },
    { la: "cavēre", forms: "v.", pt: "tomar cuidado (com)", ex: "Cavē canem!" },
    { la: "monēre", forms: "v.", pt: "advertir, avisar", ex: "Iānitor hominem dē cane ferōcī monet." },
    { la: "solvere", forms: "v.", pt: "soltar, desamarrar", ex: "Nōlī canem solvere!" },
    { la: "terrēre", forms: "v.", pt: "assustar, aterrorizar", ex: "Neque imāgō neque canis vērus mē terret!" },
    { la: "accēdere", forms: "v.", pt: "aproximar-se", ex: "Tabellārius propius ad canem accēdit." },
    { la: "salīre", forms: "v.", pt: "pular, saltar", ex: "Canis in eum salit!" },
    { la: "rumpere", forms: "v.", pt: "romper, quebrar", ex: "Canis catēnam rumpit — ecce catēna rupta!" },
    { la: "prehendere", forms: "v.", pt: "agarrar", ex: "Canis pallium dentibus prehendit." },
    { la: "tremere", forms: "v.", pt: "tremer", ex: "Tabellārius tōtō corpore tremit." },
    { la: "pellere", forms: "v.", pt: "expulsar, empurrar", ex: "Canis eum ex ōstiō pellit." },
    { la: "sinere", forms: "v. + inf.", pt: "deixar, permitir", ex: "Canis eum sē movēre nōn sinit." }
  ],
  pensum: [
    { t: "cloze", prompt: "Ecce catēna rupt__: canis catēnam rūpit!", options: ["-a", "-us", "-um"], a: 0,
      why: "O particípio concorda: catēna (feminino) rupta." },
    { t: "cloze", prompt: "Cane vinct__, tabellārius tandem intrat.", options: ["-ō", "-us", "-am"], a: 0,
      why: "Ablativo absoluto: cane vinctō = depois de acorrentado o cão." },
    { t: "cloze", prompt: "Hāc hōrā erus meus dormīt___ īre solet.", options: ["-um", "-ū", "-us"], a: 0,
      why: "Supino em -um com īre: dormītum īre = ir dormir." },
    { t: "gap", prompt: "In līmine 'CAVĒ CANEM' ___ est.", a: ["scriptum", "scrīptum"], hint: "(escrito — particípio)",
      why: "scrīptum est = está escrito (particípio neutro)." },
    { t: "mcq", q: "“Id facilius est dictū quam factū” =", options: ["É mais fácil falar do que fazer", "É difícil dizer e fazer", "Fazer é mais fácil do que falar"], a: 0,
      why: "Supino em -ū com facilis/difficilis: dictū, factū." },
    { t: "mcq", q: "“Cavē canem!” =", options: ["Cuidado com o cão!", "Acorrente o cão!", "Alimente o cão!"], a: 0,
      why: "cavēre = tomar cuidado — o aviso clássico na soleira da entrada romana." },
    { t: "build", pt: "O porteiro abre as portas e deixa o carteiro entrar.", la: "Iānitor forēs aperit et tabellārium admittit", extra: ["claudit", "canem"] },
    { t: "read", text: "Tabellārius 'Neque imāgō neque canis vērus mē terret!' inquit et propius ad canem accēdit. Subitō canis in eum salit catēnam rumpēns et pallium eius dentibus prehendit!",
      q: "Quid canis dentibus prehendit?", options: ["Pallium tabellāriī", "Epistulam", "Baculum ligneum"], a: 0,
      why: "O cão rasga o manto novo do carteiro: pallium scissum!" },
    { t: "listen", text: "Cavē! Canis tē mordēbit!", options: ["Cavē! Canis tē mordēbit!", "Tacē! Canis tē audit!", "Venī! Canis tē exspectat!"], a: 0,
      why: "mordēbit = vai morder (futuro): o aviso do porteiro." },
    { t: "type", prompt: "“corrente”:", a: ["catena", "catēna"], why: "catēna, -ae f. — ex ānulīs ferreīs facta." }
  ],
  lectio: {
    title: "Cavē Canem",
    source: "Adaptado de Familia Romana, cap. XXII",
    text: `Iānua vīllae ē duābus foribus cōnstat; sub foribus est līmen, in quō 'SALVĒ' scrīptum est. Servus cuius officium est forēs aperīre et claudere ac vīllam custōdīre 'iānitor' appellātur. Iānitor intrā iānuam sedet cum cane, quī prope tam ferōx est quam lupus; itaque necesse est eum catēnā vincīre.

Ecce tabellārius — sīc appellātur servus quī epistulās fert — extrā forēs stat. Iānitōre dormiente, tabellārius forēs baculō pulsat et clāmat: "Heus, iānitor! Quīn aperīs? Epistulam afferō ad Lūcium Iūlium Balbum!" Cane lātrante, iānitor ē somnō excitātur et forēs aperit.

In līmine 'CAVĒ CANEM' scrīptum est īnfrā imāginem canis ferōcis. "Neque haec imāgō neque canis vērus mē terret!" inquit tabellārius, et propius ad canem accēdit. Subitō canis in eum salit catēnam rumpēns! Canis pallium eius dentibus prehendit: homō territus ex ōstiō cēdit. Iānitor rīdēns virum territum dērīdet: "Quīn prōcēdis?" — "Id facilius est dictū quam factū!" inquit tabellārius. "Vincī istum canem ferōcem!"

Iānitor catēnam ruptam manū prehendit et canem rūrsus vincit. Cane vinctō, tabellārius tandem intrat epistulamque iānitōrī dat; quī eam ad dominum suum fert.`,
    questions: [
      { q: "Quid est iānitōris officium?", options: ["Forēs aperīre et vīllam custōdīre", "Epistulās ferre", "Cibum coquere"], a: 0 },
      { q: "Quis epistulās fert?", options: ["Tabellārius", "Iānitor", "Faber"], a: 0 },
      { q: "Quid in līmine īnfrā imāginem canis scrīptum est?", options: ["'Cavē canem'", "'Salvē, domine'", "Nihil"], a: 0 },
      { q: "Quōmodo canis sē līberat?", options: ["Catēnam rumpit", "Iānitor eum solvit", "Tabellārius eum solvit"], a: 0 }
    ]
  }
});

/* ============================================================
   Glossário extra + nomes novos
   ============================================================ */
NOMINA.push(
  { la: "Iuppiter", pt: "Júpiter (gen. Iovis) — rei dos deuses, pessimus marītus" },
  { la: "Iūnō", pt: "Juno — esposa de Júpiter, deusa das matronas" },
  { la: "Venus", pt: "Vênus — deusa do amor e da beleza" },
  { la: "Cupīdō", pt: "Cupido — filho de Vênus, deus do amor" },
  { la: "Vulcānus", pt: "Vulcano — marido de Vênus, deus dos ferreiros" },
  { la: "Crassus Dīves", pt: "Crasso, o Rico — o romano que Emília amava na juventude" },
  { la: "Tlēpolemus", pt: "Tlepólemo — o tabellārius (carteiro)" },
  { la: "Lūcius Iūlius Balbus", pt: "nome completo de Júlio" },
  { la: "Capitōlium", pt: "Capitólio — colina de Roma, templo de Júpiter" },
  { la: "Palātium", pt: "Palatino — colina das casas magníficas de Roma" }
);

Object.assign(EXTRA_GLOSS, {
  "amabam": "eu amava (imperfeito)", "amabat": "amava (imperfeito)",
  "amabatur": "era amado(a)", "amabantur": "eram amados(as)",
  "habebat": "tinha (imperfeito)", "habitabat": "morava",
  "habitabant": "moravam", "scribebat": "escrevia", "mittebat": "mandava",
  "remittebat": "devolvia", "remittebantur": "eram devolvidos(as)",
  "salutabat": "cumprimentava", "videbat": "via", "dormiebat": "dormia",
  "legebat": "lia", "dabat": "dava", "possidebat": "possuía",
  "eramus": "éramos", "coniuges": "cônjuges, o casal",
  "peristylum": "peristilo (pátio com colunas)", "peristylo": "peristilo (abl.)",
  "sustinetur": "é sustentado", "septendecim": "dezessete",
  "annorum": "de anos (gen.)", "immo": "pelo contrário", "vix": "mal, com dificuldade",
  "erit": "será, estará (futuro)", "erunt": "serão", "ero": "serei", "eris": "serás",
  "habebit": "terá", "habebimus": "teremos", "habebo": "terei",
  "amabo": "amarei", "amabis": "amarás", "amabit": "amará",
  "amabitur": "será amado(a)", "amabor": "serei amado(a)", "amabimini": "sereis amados(as)",
  "vocaberis": "serás chamada", "vocabimur": "seremos chamados",
  "alam": "alimentarei", "alet": "alimentará", "aletur": "será alimentado",
  "curabo": "cuidarei", "manebo": "ficarei", "relinquam": "deixarei",
  "dormiam": "dormirei", "dormiemus": "dormiremos", "vagiet": "vai chorar (bebê)",
  "ibit": "irá", "ibo": "irei", "ibis": "irás", "postulat": "exige, pede",
  "volo": "quero", "vis": "queres", "vult": "quer", "volumus": "queremos",
  "vultis": "quereis", "volunt": "querem", "nolo": "não quero", "nolunt": "não querem",
  "noli": "não faças!", "nolite": "não façais!", "aeque": "igualmente",
  "minime": "de jeito nenhum", "profecto": "com certeza", "magis": "mais",
  "vagit": "chora (de bebê)", "operitur": "é coberto", "accurrit": "acorre, vem correndo",
  "pulsavit": "golpeou (perfeito)", "pulsavi": "golpeei", "pulsavisti": "golpeaste",
  "pulsavimus": "golpeamos", "pulsavistis": "golpeastes", "pulsaverunt": "golpearam",
  "pulsatus": "golpeado", "ambulavit": "andou", "iacuit": "ficou deitado",
  "pugnavit": "brigou", "pugnaverunt": "brigaram", "pugnavistis": "brigastes",
  "fui": "fui (perfeito)", "fuisti": "foste", "fuit": "foi", "fuimus": "fomos",
  "fuistis": "fostes", "fuerunt": "foram", "scripsit": "escreveu", "scripsi": "escrevi",
  "scripsisti": "escreveste", "dixit": "disse", "mutavit": "trocou",
  "mutaverunt": "trocaram", "laudavit": "elogiou", "laudatus": "elogiado",
  "verberatus": "surrado", "audivi": "ouvi", "dormivit": "dormiu",
  "dormivi": "dormi", "vicimus": "vencemos", "sumit": "pega, toma",
  "fallitur": "é enganado(a)", "vestigia": "pegadas, rastros",
  "naso": "nariz (abl.)", "sanguis": "sangue", "fluit": "escorre, flui",
  "nix": "neve", "pugno": "punho (abl.)", "os": "boca; osso",
  "revertitur": "volta, retorna", "interim": "enquanto isso", "humi": "no chão",
  "rupit": "rompeu", "rupta": "rompida", "ruptam": "rompida (acus.)",
  "vinctus": "acorrentado", "vincto": "acorrentado (abl.)", "vinxit": "acorrentou",
  "vincitur": "é acorrentado", "scriptum": "escrito", "scissum": "rasgado",
  "territus": "assustado", "territum": "assustado (acus.)", "monitus": "avisado",
  "solutum": "solto", "latrante": "latindo (abl.)", "dormiente": "dormindo (abl.)",
  "rumpens": "rompendo", "fremit": "rosna", "heus": "ei! ô!",
  "quin": "por que não?", "sicut": "assim como", "nuper": "há pouco",
  "foras": "para fora", "foris": "porta; lá fora", "baculo": "bastão (abl.)",
  "infra": "abaixo de", "subito": "de repente", "propius": "mais perto",
  "erus": "patrão, senhor", "constat": "consiste (em), é composto",
  "affero": "trago", "cedit": "recua, vai", "deridet": "zomba de",
  "procedis": "avanças", "salutatum": "para saudar (supino)",
  "dormitum": "para dormir (supino)", "lavatum": "para se lavar (supino)",
  "dictu": "de dizer (supino)", "factu": "de fazer (supino)",
  "auditu": "de ouvir (supino)"
});
