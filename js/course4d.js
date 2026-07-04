/* ============================================================
   LATINVM — Expansão 4d: Capitula XXXI–XXXV (fim do livro!)
   Carrega DEPOIS de course4c.js, ANTES de app.js.
   ============================================================ */

/* ================= CAPITVLVM XXXI ================= */
COURSE.push({
  num: 31, roman: "XXXI", icon: "🍷",
  title: "Inter Pōcula",
  subtitle: "Conversa à mesa · gerundivo (-ndus) · quīdam, quisquis",
  grammar: [
    { title: "O gerundivo: -ndus (o que DEVE ser feito)",
      html: `Adjetivo verbal em <b>-ndus -nda -ndum</b>: com <i>esse</i>, indica obrigação:
      <br><span class="ex-la">Discipulus piger pūnie<b>ndus</b> est.</span> = O aluno preguiçoso deve ser castigado.
      <br><span class="ex-la">Lingua Latīna vōbīs disce<b>nda</b> est.</span> = O latim deve ser aprendido por vós.
      <br>Quem deve fazer vai no <b>dativo</b>: <span class="ex-la">Quidquid dominus imperāvit, servō facie<b>ndum</b> est.</span>
      <br>Impessoal: <span class="ex-la">Tace<b>ndum</b> est, nōn bibe<b>ndum</b>!</span> = É hora de calar, não de beber!` },
    { title: "quīdam · aliquis · quisquis",
      html: `Três graus de indefinição:
      <br><span class="ex-la"><b>quīdam</b>, quaedam, quoddam</span> = um certo (sei qual, não digo): <span class="ex-la">servus quīdam</span>.
      <br><span class="ex-la"><b>aliquis</b>, aliquid</span> = alguém, algo: <span class="ex-la">Quid novī? — Aliquid novī per nūntiōs cognōscere potes.</span>
      <br><span class="ex-la"><b>quisquis</b>, quidquid</span> = quem quer que, tudo o que: <span class="ex-la"><b>Quisquis</b> amat valeat! Dabō tibi <b>quidquid</b> optāveris.</span>` },
    { title: "ōdisse · tot… quot · tantum quantum",
      html: `<span class="ex-la"><b>ōdisse</b></span> = odiar: só tem forma de perfeito, mas sentido presente:
      <br><span class="ex-la">Servī dominum clēmentem amant, sevērum <b>ōdērunt</b>.</span>
      <br>Correlativos: <span class="ex-la">Rōmae <b>tot</b> servī sunt <b>quot</b> hominēs līberī.</span> = tantos… quantos.
      <br><span class="ex-la">Dabō <b>tantum quantum</b> ille surripuit.</span> = tanto quanto.` }
  ],
  vocab: [
    { la: "pōtiō", forms: "-ōnis f.", pt: "bebida", ex: "Cibus et pōtiō convīvīs placent." },
    { la: "nūntius", forms: "-ī m.", pt: "mensageiro; notícia", ex: "Servī sunt malī nūntiī." },
    { la: "rūmor", forms: "-ōris m.", pt: "boato, rumor", ex: "Servī saepe falsōs rūmōrēs nūntiant." },
    { la: "mūnus", forms: "-eris n.", pt: "presente, dádiva", ex: "Bacchus rēgī mūnus pessimum dedit." },
    { la: "fidēs", forms: "-eī f.", pt: "confiança, lealdade", ex: "Servī īnfīdī fidē meā dignī nōn sunt." },
    { la: "crux", forms: "crucis f.", pt: "cruz", ex: "Servus fugitīvus in cruce fīgētur!" },
    { la: "praemium", forms: "-ī n.", pt: "recompensa, prêmio", ex: "Magnum praemium dabō eī quī servum invēnerit." },
    { la: "poena", forms: "-ae f.", pt: "castigo, pena", ex: "Poena sevēra servōs ā maleficiīs dēterret." },
    { la: "iūs", forms: "iūris n.", pt: "direito", ex: "Id iūs est dominī Rōmānī." },
    { la: "lēx", forms: "lēgis f.", pt: "lei", ex: "Nūlla lēx dominum vetat servum suum pūnīre." },
    { la: "scelus", forms: "-eris n.", pt: "crime", ex: "Patrem necāre turpissimum scelus est." },
    { la: "supplicium", forms: "-ī n.", pt: "suplício, pena capital", ex: "Supplicium est poena sevērissima." },
    { la: "mōs", forms: "mōris m.", pt: "costume", ex: "Aliī nunc sunt mōrēs." },
    { la: "iuvenis", forms: "-is m.", pt: "jovem", ex: "Quid nōn faciunt iuvenēs amōris causā?" },
    { la: "senex", forms: "senis m.", pt: "velho, idoso", ex: "Nestor senex ad nōnāgēsimum annum vīxit." },
    { la: "avārus", forms: "-a -um", pt: "avarento, ganancioso", ex: "Midās rēx avārus erat." },
    { la: "fidus", forms: "-a -um", pt: "fiel, confiável", ex: "Ūnum sōlum servum fidum esse crēdō." },
    { la: "īnfīdus", forms: "-a -um", pt: "infiel, desleal", ex: "Medus omnium īnfīdissimus est!" },
    { la: "fugitīvus", forms: "-a -um", pt: "fugitivo", ex: "Difficile est servum fugitīvum in tantā urbe reperīre." },
    { la: "clēmēns", forms: "-entis", pt: "clemente, brando", ex: "Aemilia marītō suādet ut clēmēns sit." },
    { la: "iūstus", forms: "-a -um", pt: "justo", ex: "Dominus iūstus sine causā nōn pūnit." },
    { la: "crūdēlis", forms: "-e", pt: "cruel", ex: "Manlius pater crūdēlis fuit." },
    { la: "vetus", forms: "-eris", pt: "velho, antigo", ex: "Veterēs Rōmānī ergā līberōs sevērī erant." },
    { la: "ēbrius", forms: "-a -um", pt: "bêbado", ex: "Orontēs ēbrius sub mēnsam lābitur." },
    { la: "aufugere", forms: "v. (perf. aufūgit)", pt: "fugir", ex: "Medus herī aufūgit." },
    { la: "auferre", forms: "abstulisse, ablātum", pt: "levar embora, roubar", ex: "Servus centum sēstertiōs abstulit." },
    { la: "ōdisse", forms: "v. perf.", pt: "odiar", ex: "Servī dominum sevērum ōdērunt." },
    { la: "vetāre", forms: "v.", pt: "proibir", ex: "Lēx servum aliēnum necāre vetat." },
    { la: "quīdam", forms: "quaedam, quoddam", pt: "um certo, um tal", ex: "Servus quīdam in viā Latīnā vīsus est." },
    { la: "quisquis", forms: "quidquid", pt: "quem quer que; tudo o que", ex: "Quisquis amat valeat!" }
  ],
  pensum: [
    { t: "mcq", q: "“Tacendum est, nōn bibendum!” =", options: ["É hora de calar, não de beber!", "Cala e bebe!", "Ele cala e não bebe"], a: 0,
      why: "Gerundivo impessoal: -ndum est = deve-se fazer." },
    { t: "cloze", prompt: "Discipulus piger pūnie___ est.", options: ["-ndus", "-ns", "-tur"], a: 0,
      why: "Gerundivo: pūniendus = que deve ser castigado." },
    { t: "cloze", prompt: "Lingua Latīna vōbīs disce___ est.", options: ["-nda", "-ndus", "-ndī"], a: 0,
      why: "lingua é feminino: discenda; o agente (vōbīs) vai no dativo." },
    { t: "gap", prompt: "Medus dominō centum sēstertiōs ___.", a: ["abstulit"], hint: "(levou embora — perfeito de auferre)",
      why: "auferre, abstulisse, ablātum." },
    { t: "mcq", q: "“Servī dominum sevērum ōdērunt” — ōdērunt é:", options: ["perfeito com sentido presente (odeiam)", "só passado (odiaram)", "futuro (odiarão)"], a: 0,
      why: "ōdisse (como meminisse) só existe no perfeito, mas o sentido é presente." },
    { t: "build", pt: "O senhor severo tem tantos inimigos quantos escravos.", la: "Dominus sevērus tot hostēs habet quot servōs", extra: ["quantum", "amīcōs"] },
    { t: "read", text: "Midās, rēx avārus, ā Bacchō deō petīvit ut quidquid tetigisset aurum fieret. Sed cibus quoque et pōtiō, simul atque ā rēge tācta erat, aurum fīēbat: itaque rēx miser famē et sitī moriēbātur.",
      q: "Cūr Midās famē moriēbātur?", options: ["Quia cibus, simul atque eum tetigit, aurum fīēbat", "Quia Bacchus cibum eī nōn dabat", "Quia rēx cibum emere nōn poterat"], a: 0,
      why: "O toque de ouro virou maldição: até a comida virava ouro." },
    { t: "listen", text: "Quisquis amat valeat! Pereat quī nescit amāre!", options: ["Quisquis amat valeat! Pereat quī nescit amāre!", "Quisquis vīnum amat bibat mēcum!", "Vīvāmus atque amēmus, mea Lesbia!"], a: 0,
      why: "A canção do Orontes bêbado — inscrição real achada em Pompeia!" },
    { t: "cloze", prompt: "Servus ___ herī aufūgit — nōmen eius nesciō.", options: ["quīdam", "quisquis", "aliquid"], a: 0,
      why: "quīdam = um certo (escravo específico, sem nomear)." },
    { t: "type", prompt: "“lei”:", a: ["lex", "lēx"], why: "lēx, lēgis f. — daí 'legal', 'legislação'." }
  ],
  lectio: {
    title: "Inter Pōcula",
    source: "Adaptado de Familia Romana, cap. XXXI",
    text: `Convīvae nōn sōlum dē cibō et pōtiōne, sed etiam dē rēbus urbānīs loquuntur. Iūlius: "Quid novī ex urbe? Octō diēs iam sunt cum Rōmae nōn fuī." Cornēlius: "Herī servum quendam tuum in viā Latīnā vīdī."

Iūlius: "Medus est nōmen eius servī, quī herī aufūgit centum sēstertiōs sēcum auferēns. Atque ego illī servō praeter cēterōs fīdēbam! Magnum praemium dabō eī quī eum hūc retrāxerit. Nisi pecūniam mihi reddiderit, in cruce fīgētur!"

Aemilia marītō suādet ut clēmēns sit: "Nōlī Medum cruciāre! Servī dominum clēmentem amant, sevērum ōdērunt." Iūlius: "Servī mē metuunt, nec vērō ōdērunt, nam numquam sine causā servum pūnīvī. Sed necesse est servōs fugitīvōs sevērē pūnīre: id iūs est dominī Rōmānī, ut in lēgibus scrīptum est."

Orontēs, quī nimium vīnī bibit, pōculum tollit et exclāmat: "Vīvat quisquis fēminās amat! Quisquis amat valeat, pereat quī nescit amāre!" Deinde ēbrius sub mēnsam lābitur. Duo servī eum ē triclīniō auferunt atque in cubiculō pōnunt.`,
    questions: [
      { q: "Quis servum Iūliī in viā Latīnā vīdit?", options: ["Cornēlius", "Orontēs", "Aemilia"], a: 0 },
      { q: "Quantum pecūniae Medus abstulit?", options: ["Centum sēstertiōs", "Mīlle sēstertiōs", "Nihil"], a: 0 },
      { q: "Quid Aemilia marītō suādet?", options: ["Ut clēmēns sit", "Ut Medum cruciet", "Ut plūs vīnī bibat"], a: 0 },
      { q: "Cūr Orontēs sub mēnsam lābitur?", options: ["Quia ēbrius est", "Quia dormīre vult", "Quia servī eum pulsant"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XXXII ================= */
COURSE.push({
  num: 32, roman: "XXXII", icon: "⚓",
  title: "Classis Rōmāna",
  subtitle: "Piratas e a frota · subjuntivo perfeito · utinam / nē + subjuntivo",
  grammar: [
    { title: "Subjuntivo perfeito: -erim",
      html: `Infinitivo perfeito sem -isse + terminações:
      <table><tr><th>pessoa</th><th>ativa</th><th>passiva</th></tr>
      <tr><td class="la">ego</td><td class="la">laudāverim</td><td class="la">laudātus sim</td></tr>
      <tr><td class="la">tū</td><td class="la">laudāverīs</td><td class="la">laudātus sīs</td></tr>
      <tr><td class="la">is</td><td class="la">laudāverit</td><td class="la">laudātus sit</td></tr>
      <tr><td class="la">nōs</td><td class="la">laudāverīmus</td><td class="la">laudātī sīmus</td></tr>
      <tr><td class="la">vōs</td><td class="la">laudāverītis</td><td class="la">laudātī sītis</td></tr>
      <tr><td class="la">iī</td><td class="la">laudāverint</td><td class="la">laudātī sint</td></tr></table>
      Na interrogativa indireta: <span class="ex-la">Pater dubitat num fīlius ā magistrō laudātus <b>sit</b>. Mīror unde pecūniam <b>sūmpserīs</b>.</span>` },
    { title: "Proibição: nē + subjuntivo perfeito",
      html: `Jeito elegante de dizer "não faças!":
      <br><span class="ex-la"><b>Nē timuerīs!</b></span> = nōlī timēre! · <span class="ex-la"><b>Nē timuerītis</b>, amīcī!</span> (plural)
      <br><span class="ex-la"><b>Nē dēspērāverīs!</b> · <b>Nē oblīta sīs</b> mē servum fugitīvum esse!</span>
      <br>(depoente/passiva: nē + particípio + sīs)` },
    { title: "utinam — o desejo",
      html: `<b>utinam</b> + subjuntivo = oxalá, tomara:
      <br><span class="ex-la"><b>Utinam</b> salvī in Graeciam perveniant!</span> = Tomara que cheguem salvos!
      <br><span class="ex-la"><b>Utinam</b> ille anulus vītam tuam servet!</span>
      <br>Negativo: <span class="ex-la"><b>utinam nē</b> piratae mē occīdant!</span>
      <br>E o provérbio dos corajosos: <span class="ex-la">Fortēs fortūna adiuvat!</span>` }
  ],
  vocab: [
    { la: "pīrāta", forms: "-ae m.", pt: "pirata", ex: "Pīrātae Caesarem adulēscentem cēpērunt." },
    { la: "praedō", forms: "-ōnis m.", pt: "salteador, pirata", ex: "Ōlim maria īnfesta erant praedōnibus." },
    { la: "classis", forms: "-is f.", pt: "frota, esquadra", ex: "Pompeius classī Rōmānae praepositus est." },
    { la: "servitūs", forms: "-ūtis f.", pt: "escravidão", ex: "Nautae in servitūtem abdūcēbantur." },
    { la: "vīs", forms: "acc. vim, abl. vī f.", pt: "força, violência", ex: "Tanta erat vīs praedōnum ut nēmō iīs resistere posset." },
    { la: "audācia", forms: "-ae f.", pt: "audácia, ousadia", ex: "Magna est audācia pīrātārum." },
    { la: "inopia", forms: "-ae f.", pt: "falta, escassez", ex: "Rōmae maxima inopia frūmentī facta est." },
    { la: "victōria", forms: "-ae f.", pt: "vitória", ex: "Hāc victōriā omnēs gentēs līberātae sunt." },
    { la: "victor", forms: "-ōris m.", pt: "vencedor", ex: "Pompeium victōrem populus laudibus affēcit." },
    { la: "gēns", forms: "gentis f.", pt: "povo, nação", ex: "Maria omnium gentium commūnia sunt." },
    { la: "poēta", forms: "-ae m.", pt: "poeta", ex: "Ovidius poēta ēgregius fuit." },
    { la: "amīcitia", forms: "-ae f.", pt: "amizade", ex: "Vēra amīcitia rāra est." },
    { la: "cursus", forms: "-ūs m.", pt: "rumo, curso", ex: "Nāvēs cursum ad orientem flectunt." },
    { la: "cūnctus", forms: "-a -um", pt: "todo, inteiro (pl. todos)", ex: "Cūncta maria praedōnibus īnfesta erant." },
    { la: "īnfestus", forms: "-a -um", pt: "infestado, perigoso", ex: "Mare pīrātīs īnfestum tūtum nōn est." },
    { la: "cārus", forms: "-a -um", pt: "caro; querido", ex: "Lībertās mihi vītā cārior est." },
    { la: "vīlis", forms: "-e", pt: "barato", ex: "Pānis tam vīlis fuit quam anteā." },
    { la: "ēgregius", forms: "-a -um", pt: "notável, excelente", ex: "Pompeius dux ēgregius fuit." },
    { la: "commūnis", forms: "-e", pt: "comum, de todos", ex: "Commūnī perīculō līberātī sumus." },
    { la: "grātus", forms: "-a -um", pt: "agradável, bem-vindo; grato", ex: "Grātus nūntius Rōmam pervēnit." },
    { la: "inermis", forms: "-e", pt: "desarmado", ex: "Nōn inermis occīdar!" },
    { la: "superbus", forms: "-a -um", pt: "soberbo, arrogante", ex: "Caesar vir superbus erat." },
    { la: "tuērī", forms: "v. dep.", pt: "proteger, guardar", ex: "Classis nāvēs mercātōriās tuētur." },
    { la: "adiuvāre", forms: "v.", pt: "ajudar", ex: "Fortēs fortūna adiuvat." },
    { la: "redimere", forms: "-ēmisse -ēmptum", pt: "resgatar (pagando)", ex: "Amīcum ē servitūte redēmī." },
    { la: "minārī", forms: "v. dep. + dat.", pt: "ameaçar", ex: "Caesar supplicium pīrātīs minātus est." },
    { la: "dēsistere", forms: "-stitisse", pt: "parar de, desistir", ex: "Nāvēs persequī dēsistunt." },
    { la: "ubīque", forms: "adv.", pt: "em toda parte", ex: "Nautae ubīque nāvigant." },
    { la: "dōnec", forms: "conj.", pt: "enquanto; até que", ex: "Dōnec ego vīvam, nēmō tibi nocēbit!" },
    { la: "utinam", forms: "adv. + subj.", pt: "oxalá, tomara", ex: "Utinam salvī in Graeciam perveniant!" }
  ],
  pensum: [
    { t: "cloze", prompt: "Nē timu___, amīcī! Nāvēs longae nōs tuentur.", options: ["-erītis", "-istis", "-ētis"], a: 0,
      why: "Proibição: nē + subjuntivo perfeito (timuerītis, 2ª pl.)." },
    { t: "gap", prompt: "Utinam salvī in Graeciam ___!", a: ["perveniant"], hint: "(cheguem — subjuntivo)",
      why: "utinam + subjuntivo = desejo." },
    { t: "mcq", q: "“Fortēs fortūna adiuvat” =", options: ["A fortuna ajuda os corajosos", "Os fortes ajudam a fortuna", "A fortuna é mais forte que todos"], a: 0,
      why: "Provérbio citado pelo Medo ao sacar o gládio." },
    { t: "cloze", prompt: "Pater dubitat num fīlius ā magistrō laudātus ___.", options: ["sit", "est", "erit"], a: 0,
      why: "Interrogativa indireta pede subjuntivo: laudātus sit (perfeito passivo)." },
    { t: "mcq", q: "Quis classī Rōmānae praepositus est?", options: ["Gnaeus Pompeius", "Iūlius Caesar", "Nestor"], a: 0,
      why: "Pompeu varreu os piratas de todos os mares em poucos meses." },
    { t: "build", pt: "Enquanto eu viver, ninguém te fará mal.", la: "Dōnec ego vīvam nēmō tibi nocēbit", extra: ["vīvit", "mihi"] },
    { t: "read", text: "Iūlius Caesar adulēscēns ā praedōnibus captus est. Piratae vīgintī talenta postulāvērunt, sed Caesar superbus quīnquāgintā talenta iīs obtulit — et simul supplicium iīs minātus est! Ubi prīmum redēmptus est, captōs praedōnēs in crucem tollī iussit.",
      q: "Quantum Caesar pīrātīs obtulit?", options: ["Quīnquāgintā talenta", "Vīgintī talenta", "Nihil"], a: 0,
      why: "Achou pouco o resgate pedido e ofereceu mais — puro orgulho romano." },
    { t: "listen", text: "Nē dēspērāverīs! Fortasse anulō istō aureō tē redimere poteris.", options: ["Nē dēspērāverīs! Fortasse anulō istō aureō tē redimere poteris.", "Nē timuerīs! Mīlitēs tē nōn cognōscunt.", "Utinam anulus vītam tuam servet!"], a: 0,
      why: "nē dēspērāverīs = não desesperes (nē + subj. perfeito)." },
    { t: "cloze", prompt: "Mīror unde pecūniam sūmps___ ut aliōs redimerēs.", options: ["-erīs", "-istī", "-is"], a: 0,
      why: "Interrogativa indireta: sūmpserīs (subjuntivo perfeito, 2ª sing.)." },
    { t: "type", prompt: "“vitória”:", a: ["victoria", "victōria"], why: "victōria, -ae f. < vincere." }
  ],
  lectio: {
    title: "Classis Rōmāna",
    source: "Adaptado de Familia Romana, cap. XXXII",
    text: `Ōlim cūncta maria tam īnfesta erant praedōnibus ut nēmō sine perīculō mortis aut servitūtis nāvigāret. Multa oppida maritima ā praedōnibus capta sunt, et Rōmae maxima inopia frūmentī facta est. Postrēmō Gnaeus Pompeius, dux ēgregius, classī Rōmānae praepositus est, quī brevī tempore praedōnēs omnēs vīcit. Hāc victōriā omnēs gentēs commūnī perīculō līberātae sunt.

Amīcī nostrī in marī Tūscō nāvigantēs nāvem quandam sē persequī arbitrantur. Cūnctī perturbātī sunt. Lȳdia genua flectit et Deum precātur: "Pater noster quī es in caelīs! Līberā nōs ā malō!" Medus autem gladium ēdūcit: "Nōn inermis occīdar! Dōnec ego vīvam, nēmō tibi nocēbit!"

Tum gubernātor in mare prōspicit: "Nāvēs longae sunt, quae mare percurrunt ut nōs ā pīrātīs tueantur. Nē timuerītis, amīcī!" Medus vērō mīlitēs aequē timet atque pīrātās: timet enim nē sē captum Rōmam abdūcant, nam servus fugitīvus est.

Nāvēs longae, ubi cognōvērunt nāvem mercātōriam esse, persequī dēsistunt atque cursum ad orientem flectunt. Hīc amīcōs nostrōs in mediō cursū relinquimus. Utinam salvī in Graeciam perveniant!`,
    questions: [
      { q: "Quis praedōnēs maritimōs vīcit?", options: ["Gnaeus Pompeius", "Iūlius Caesar", "Medus"], a: 0 },
      { q: "Quid Lȳdia facit cum nāvis appropinquat?", options: ["Deum precātur", "Gladium ēdūcit", "Rēmigāre incipit"], a: 0 },
      { q: "Cūr Medus mīlitēs timet?", options: ["Quia servus fugitīvus est", "Quia pīrāta est", "Quia natāre nescit"], a: 0 },
      { q: "Quō nāvēs longae cursum flectunt?", options: ["Ad orientem", "Ad occidentem", "Rōmam"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XXXIII ================= */
COURSE.push({
  num: 33, roman: "XXXIII", icon: "🛡️",
  title: "Exercitus Rōmānus",
  subtitle: "A carta do soldado Emílio · subjuntivo mais-que-perfeito · imperativo futuro",
  grammar: [
    { title: "Subjuntivo mais-que-perfeito: -isset",
      html: `Infinitivo perfeito + terminações pessoais:
      <table><tr><th>pessoa</th><th>ativa</th><th>passiva</th></tr>
      <tr><td class="la">ego</td><td class="la">laudāvissem</td><td class="la">laudātus essem</td></tr>
      <tr><td class="la">tū</td><td class="la">laudāvissēs</td><td class="la">laudātus essēs</td></tr>
      <tr><td class="la">is</td><td class="la">laudāvisset</td><td class="la">laudātus esset</td></tr>
      <tr><td class="la">nōs</td><td class="la">laudāvissēmus</td><td class="la">laudātī essēmus</td></tr>
      <tr><td class="la">vōs</td><td class="la">laudāvissētis</td><td class="la">laudātī essētis</td></tr>
      <tr><td class="la">iī</td><td class="la">laudāvissent</td><td class="la">laudātī essent</td></tr></table>
      Irreal do passado: <span class="ex-la">Sī bonus discipulus <b>fuissēs</b>, magister tē <b>laudāvisset</b>.</span> = Se tivesses sido…, teria elogiado.
      <br>Com cum narrativo: <span class="ex-la">Mīlitēs, cum arma <b>cēpissent</b>, vallum ascendērunt.</span>` },
    { title: "Imperativo futuro: -tō / -tōte",
      html: `Ordem para o futuro ("daqui em diante…"):
      <br><span class="ex-la">Plūrēs epistulās ā mē <b>exspectātō</b>, atque plūrēs etiam ipsa <b>scrībitō</b>!</span>
      <br>Plural: <span class="ex-la">Dē rē pūblicā et prīvātā <b>narrātōte</b> mihi! <b>Scītōte</b> mē omnia cognōscere velle.</span>
      <br>De esse: <span class="ex-la">Posthāc bonus discipulus <b>estō</b>!</span>` },
    { title: "O exército romano",
      html: `<span class="ex-la">legiō</span> se divide em <b>dez</b> <span class="ex-la">cohortēs</span> (distributivos: <span class="ex-la">dēnī</span> = 10 cada, <span class="ex-la">sēnī, quīnī, quaternī</span> mil soldados por legião).
      <br>Em marcha o exército é <span class="ex-la"><b>agmen</b></span>; em ordem de batalha, <span class="ex-la"><b>aciēs</b></span>.
      <br><span class="ex-la">Castra vallō et fossā mūniuntur.</span> Após a vitória, o general é saudado <span class="ex-la"><b>imperātor</b></span>.` }
  ],
  vocab: [
    { la: "legiō", forms: "-ōnis f.", pt: "legião", ex: "Legiō in decem cohortēs dīviditur." },
    { la: "cohors", forms: "-rtis f.", pt: "coorte", ex: "Cohortēs in longō ōrdine prōgrediuntur." },
    { la: "agmen", forms: "-inis n.", pt: "coluna (em marcha)", ex: "Exercitus prōcēdēns agmen dīcitur." },
    { la: "aciēs", forms: "-ēī f.", pt: "linha de batalha", ex: "Exercitus ad pugnam īnstrūctus aciēs appellātur." },
    { la: "proelium", forms: "-ī n.", pt: "batalha, combate", ex: "Hostēs proeliō victī sunt." },
    { la: "imperātor", forms: "-ōris m.", pt: "general (título)", ex: "Dux ā mīlitibus 'imperātor' salūtātur." },
    { la: "castra", forms: "-ōrum n. pl.", pt: "acampamento", ex: "Exercitus vesperī castra pōnit." },
    { la: "vallum", forms: "-ī n.", pt: "paliçada, muralha", ex: "Mīlitēs vallum ascendērunt." },
    { la: "aetās", forms: "-ātis f.", pt: "idade", ex: "Valerius adulēscēns eiusdem aetātis erat." },
    { la: "stipendium", forms: "-ī n.", pt: "soldo; serviço militar", ex: "Aemilius in Germāniā stipendia meret." },
    { la: "virtūs", forms: "-ūtis f.", pt: "coragem, valor", ex: "Virtūs mīlitum ab imperātōre laudātur." },
    { la: "valētūdō", forms: "-inis f.", pt: "saúde", ex: "Valētūdinem tuam cūrā dīligenter!" },
    { la: "amnis", forms: "-is m.", pt: "rio", ex: "Danuvius amnis praeter castra fluit." },
    { la: "rīpa", forms: "-ae f.", pt: "margem (de rio)", ex: "Hostēs ad rīpam flūminis fūgērunt." },
    { la: "caedēs", forms: "-is f.", pt: "matança, carnificina", ex: "Tanta caedēs hostium facta est ut meminisse horream." },
    { la: "vulnus", forms: "-eris n.", pt: "ferida, ferimento", ex: "Vulnus meum leve est." },
    { la: "pāx", forms: "pācis f.", pt: "paz", ex: "Post longum bellum omnēs pācem dēsīderant." },
    { la: "lēgātus", forms: "-ī m.", pt: "emissário, embaixador", ex: "Lēgātī ā Germānīs missī ad castra vēnērunt." },
    { la: "ēnsis", forms: "-is m.", pt: "espada (poético)", ex: "Quis fuit horrendōs prīmus quī prōtulit ēnsēs?" },
    { la: "idōneus", forms: "-a -um", pt: "adequado, apropriado", ex: "Locus idōneus est ad pugnandum." },
    { la: "mīlitāris", forms: "-e", pt: "militar", ex: "Aemilius reī mīlitāris studiōsus erat." },
    { la: "pūblicus", forms: "-a -um", pt: "público", ex: "Pater dē rēbus pūblicīs scrībit." },
    { la: "prīvātus", forms: "-a -um", pt: "privado, particular", ex: "Aemilia dē rēbus prīvātīs scrībere solet." },
    { la: "arduus", forms: "-a -um", pt: "íngreme, escarpado", ex: "Celsī et arduī montēs Germāniam ab Italiā disiungunt." },
    { la: "incolumis", forms: "-e", pt: "incólume, são e salvo", ex: "Plērīque mīlitēs ex proeliō incolumēs sunt." },
    { la: "hortārī", forms: "v. dep.", pt: "exortar, encorajar", ex: "Dux mīlitēs hortātur ut fortiter pugnent." },
    { la: "īnstruere", forms: "-ūxisse -ūctum", pt: "formar, dispor (tropas)", ex: "Cohortēs in trēs ōrdinēs īnstruuntur." },
    { la: "mūnīre", forms: "v.", pt: "fortificar", ex: "Castra vallō et fossā mūniuntur." },
    { la: "vulnerāre", forms: "v.", pt: "ferir", ex: "Aemilius sagittā vulnerātus est." },
    { la: "fere", forms: "adv.", pt: "aproximadamente, quase", ex: "Iter quīndecim fere diēbus cōnficitur." }
  ],
  pensum: [
    { t: "cloze", prompt: "Sī bonus discipulus fu___, magister tē laudāvisset.", options: ["-issēs", "-erīs", "-istī"], a: 0,
      why: "Irreal do passado: fuissēs… laudāvisset (mais-que-perfeito do subjuntivo)." },
    { t: "cloze", prompt: "Mīlitēs, cum arma cēp___, vallum ascendērunt.", options: ["-issent", "-ērunt", "-erint"], a: 0,
      why: "cum narrativo + mais-que-perfeito: cēpissent = tendo pegado as armas." },
    { t: "gap", prompt: "Plūrēs epistulās ā mē ___, atque plūrēs etiam ipsa scrībitō!", a: ["exspectato", "exspectātō"], hint: "(espera! — imperativo futuro)",
      why: "Imperativo futuro em -tō: exspectātō, scrībitō." },
    { t: "mcq", q: "“Scrībitō!” e “narrātōte!” são:", options: ["imperativos futuros (sing. e pl.)", "subjuntivos perfeitos", "particípios presentes"], a: 0,
      why: "-tō / -tōte = ordem válida daqui em diante." },
    { t: "mcq", q: "Ex quot cohortibus cōnstat ūna legiō?", options: ["Ex decem", "Ex vīgintī", "Ex tribus"], a: 0,
      why: "Cada legião = 10 coortes (dēnae cohortēs)." },
    { t: "build", pt: "Antes da batalha, o general exorta os soldados.", la: "Ante proelium dux mīlitēs hortātur", extra: ["aciēs", "pugnat"] },
    { t: "read", text: "Mediā nocte in castra nūntiātum est magnum hostium numerum flūmen trānsiisse. Mīlitēs Rōmānī, cum parātī essent ad castra dēfendenda, prīmum impetum facile sustinuērunt. Hostēs, cum longā pugnā fatīgātī essent, terga vertērunt.",
      q: "Quid hostēs postrēmō fēcērunt?", options: ["Terga vertērunt", "Castra expugnāvērunt", "Pācem petīvērunt"], a: 0,
      why: "terga vertere = virar as costas = fugir." },
    { t: "listen", text: "Utinam patrem audīvissem, cum mē ad studium litterārum hortārētur!", options: ["Utinam patrem audīvissem, cum mē ad studium litterārum hortārētur!", "Utinam pater mē audiat, cum eum hortor!", "Patrem audīvī, cum mē hortārētur."], a: 0,
      why: "Desejo irreal do passado: 'quem dera eu tivesse escutado meu pai!'" },
    { t: "cloze", prompt: "Exercitus prōcēdēns agmen, ad pugnam īnstrūctus ___ dīcitur.", options: ["aciēs", "cohors", "legiō"], a: 0,
      why: "agmen = coluna em marcha; aciēs = linha de batalha." },
    { t: "type", prompt: "“paz”:", a: ["pax", "pāx"], why: "pāx, pācis f. ↔ bellum." }
  ],
  lectio: {
    title: "Exercitus Rōmānus",
    source: "Adaptado de Familia Romana, cap. XXXIII",
    text: `Exercitus Rōmānus ex legiōnibus cōnstat, quae in dēnās cohortēs dīviduntur. Exercitus prōcēdēns agmen dīcitur; ad pugnam īnstrūctus aciēs appellātur. Post victōriam dux ā mīlitibus 'imperātor' salūtātur.

Aemilius, frāter Aemiliae minor, quī in Germāniā stipendia meret, epistulam ad sorōrem scrīpsit: "Aemilius sorōrī suae cārissimae salūtem dīcit. Grātissima mihi fuit epistula tua. Ō, quam longē absum ab Italiā et ab iīs omnibus quōs dīligō! Utinam ego Rōmae essem aut tū apud mē essēs!

Herī exercitum Germānōrum proeliō vīcimus. Hostēs, cum longā pugnā fatīgātī essent, terga vertērunt: magnus numerus eōrum caesus aut captus est, reliquī trāns flūmen fūgērunt. Ipse sagittā in bracchiō vulnerātus sum, sed vulnus meum leve est. At amīcus meus Pūblius Valerius, graviter vulnerātus, in manibus meīs ex vulnere mortuus est. Utinam patrem audīvissem, cum mē ad studium litterārum hortārētur! Sī eum audīvissem, ad bellum profectus nōn essem, nec tot caedēs vīdissem.

Posthāc plūrēs epistulās ā mē exspectātō, atque plūrēs etiam ipsa scrībitō! Valētūdinem tuam cūrā dīligenter!"`,
    questions: [
      { q: "Ubi Aemilius stipendia meret?", options: ["In Germāniā", "In Italiā", "In Graeciā"], a: 0 },
      { q: "Quōmodo Aemilius vulnerātus est?", options: ["Sagittā in bracchiō", "Gladiō in pede", "Pīlō in capite"], a: 0 },
      { q: "Quis in manibus Aemiliī mortuus est?", options: ["Pūblius Valerius", "Dux exercitūs", "Frāter eius"], a: 0 },
      { q: "Quid Aemilia posthāc facere dēbet?", options: ["Plūrēs epistulās scrībere", "In Germāniam īre", "Nihil scrībere"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XXXIV ================= */
COURSE.push({
  num: 34, roman: "XXXIV", icon: "📜",
  title: "Dē Arte Poēticā",
  subtitle: "Catulo, Ovídio, Marcial · sílabas longas e breves · hexâmetro e pentâmetro",
  grammar: [
    { title: "Sílabas longas e breves",
      html: `A métrica latina mede a <b>duração</b> das sílabas, não o acento:
      <br><b>Breve</b> (⏑): termina em vogal breve — <span class="ex-la">se-de-ō</span>.
      <br><b>Longa</b> (–): termina em vogal longa, ditongo (ae, au, oe…) ou consoante — <span class="ex-la">nō, um, rum</span>.
      <br><b>Elisão</b>: vogal final (e -am/-em/-um) cai antes de vogal: <span class="ex-la">Lesbi(a) atqu(e) amēmus · Ōd(ī) et amō.</span>` },
    { title: "Os pés e os versos",
      html: `<table><tr><th>pé</th><th>esquema</th><th>exemplo</th></tr>
      <tr><td>trocheu</td><td>– ⏑</td><td class="la">lū-na</td></tr>
      <tr><td>iambo</td><td>⏑ –</td><td class="la">vi-rī</td></tr>
      <tr><td>dáctilo</td><td>– ⏑ ⏑</td><td class="la">fē-mi-na</td></tr>
      <tr><td>espondeu</td><td>– –</td><td class="la">nē-mō</td></tr></table>
      <b>Hexâmetro</b> = 6 pés (o 5º sempre dáctilo). <b>Pentâmetro</b> = 5, sempre depois de um hexâmetro (dístico elegíaco). <b>Hendecassílabo</b> = 11 sílabas, o verso favorito de Catulo.` },
    { title: "Os três poetas do jantar",
      html: `<b>Catullus</b> — os amores com Lesbia: <span class="ex-la">Ōdī et amō!</span>
      <br><b>Ovidius</b> — mestre da elegia: <span class="ex-la">Quot caelum stēllās, tot habet tua Rōma puellās.</span>
      <br><b>Martiālis</b> — doze livros de <span class="ex-la">epigrammata</span> cheios de sal: <span class="ex-la">Nōn amō tē, Sabidī, nec possum dīcere quārē.</span>` }
  ],
  vocab: [
    { la: "lūdus", forms: "-ī m.", pt: "jogo, espetáculo", ex: "Mārcus lūdīs et certāminibus studet." },
    { la: "certāmen", forms: "-inis n.", pt: "competição, luta", ex: "In amphitheātrō certāmen magnificum spectāvī." },
    { la: "gladiātor", forms: "-ōris m.", pt: "gladiador", ex: "Plūs trecentī gladiātōrēs certābant." },
    { la: "spectātor", forms: "-ōris m.", pt: "espectador", ex: "Spectātōrēs dēlectātī manibus plaudunt." },
    { la: "circus", forms: "-ī m.", pt: "circo (corridas)", ex: "Iūlius cursūs equōrum in circō spectat." },
    { la: "aurīga", forms: "-ae m.", pt: "cocheiro, auriga", ex: "Aurīga est quī currum regit." },
    { la: "theātrum", forms: "-ī n.", pt: "teatro", ex: "Fabia fābulās in theātrō spectāre māvult." },
    { la: "cōmoedia", forms: "-ae f.", pt: "comédia", ex: "Nūper cōmoediam Plautī spectāvī." },
    { la: "ingenium", forms: "-ī n.", pt: "índole, talento", ex: "Ovidius ingenium mulierum bene nōverat." },
    { la: "ratiō", forms: "-ōnis f.", pt: "razão, motivo", ex: "Poēta ratiōnem dolōris suī reddit." },
    { la: "fātum", forms: "-ī n.", pt: "destino, fado", ex: "Poēta fātum rēgis Priamī canere volēbat." },
    { la: "tenebrae", forms: "-ārum f. pl.", pt: "trevas, escuridão", ex: "In tenebrīs legere nōn possum." },
    { la: "lucerna", forms: "-ae f.", pt: "lamparina", ex: "Lucernās accendite, servī!" },
    { la: "passer", forms: "-eris m.", pt: "pardal", ex: "Passer mortuus est meae puellae." },
    { la: "dēliciae", forms: "-ārum f. pl.", pt: "delícias, xodó", ex: "Lesbia passerem in dēliciīs habēbat." },
    { la: "mēns", forms: "mentis f.", pt: "mente, espírito", ex: "Mēns poētae amōre accēnsa erat." },
    { la: "bāsium", forms: "-ī n.", pt: "beijo", ex: "Dā mī bāsia mīlle, deinde centum!" },
    { la: "odium", forms: "-ī n.", pt: "ódio", ex: "Mēns poētae inter amōrem et odium dīviditur." },
    { la: "rīsus", forms: "-ūs m.", pt: "riso", ex: "Hī versūs magnum rīsum movent." },
    { la: "epigramma", forms: "-atis n.", pt: "epigrama", ex: "Martiālis duodecim librōs epigrammatum scrīpsit." },
    { la: "anus", forms: "-ūs f.", pt: "velha, anciã", ex: "Anus est fēmina vetus." },
    { la: "venustus", forms: "-a -um", pt: "encantador, gracioso", ex: "Catullus carmina venusta scrīpsit." },
    { la: "perpetuus", forms: "-a -um", pt: "perpétuo, sem fim", ex: "Nox est perpetua ūna dormienda." },
    { la: "iocōsus", forms: "-a -um", pt: "engraçado, jocoso", ex: "Catullus etiam versūs iocōsōs scrīpsit." },
    { la: "sērius", forms: "-a -um", pt: "sério", ex: "Nōn omnia carmina sēria sunt." },
    { la: "certāre", forms: "v.", pt: "competir, lutar", ex: "Gladiātōrēs gladiīs et scūtīs certant." },
    { la: "plaudere", forms: "-sisse -sum", pt: "aplaudir", ex: "Omnēs Cornēliō diū plaudunt." },
    { la: "favēre", forms: "v. + dat.", pt: "torcer por, favorecer", ex: "Cui aurīgae favēs?" },
    { la: "lūgēre", forms: "v.", pt: "chorar (um morto), lamentar", ex: "Lūgēte, ō Venerēs Cupīdinēsque!" },
    { la: "nūbere", forms: "-psisse + dat.", pt: "casar-se com (a mulher)", ex: "Lesbia Catullō nūbere nōluit." }
  ],
  pensum: [
    { t: "mcq", q: "“Ōdī et amō” — quem escreveu?", options: ["Catullus", "Ovidius", "Martiālis"], a: 0,
      why: "Catulo 85, sobre Lésbia: «Odeio e amo… e me torturo»." },
    { t: "cloze", prompt: "Dā mī bāsia mīlle, deinde cent___!", options: ["-um", "-ī", "-ae"], a: 0,
      why: "centum é indeclinável — Catulo 5, os mil beijos de Lésbia." },
    { t: "gap", prompt: "Vīvāmus, mea Lesbia, atque ___!", a: ["amemus", "amēmus"], hint: "(amemos — subjuntivo exortativo)",
      why: "O verso mais famoso de Catulo: vivamos e amemos!" },
    { t: "mcq", q: "O hexâmetro tem quantos pés?", options: ["Sex", "Quīnque", "Ūndecim"], a: 0,
      why: "hex = seis em grego; o 5º pé é sempre dáctilo." },
    { t: "cloze", prompt: "Pēs dactylus cōnstat ex syllabā longā et ___ brevibus.", options: ["duābus", "tribus", "ūnā"], a: 0,
      why: "dáctilo = – ⏑ ⏑ (como fē-mi-na)." },
    { t: "cloze", prompt: "Lūgēte, ō Venerēs Cupīdinēsqu___!", options: ["-e", "-ī", "-ae"], a: 0,
      why: "-que enclítico = 'e' — abertura do carme do pardal (Catulo 3)." },
    { t: "build", pt: "O pardal da minha menina morreu.", la: "Passer mortuus est meae puellae", extra: ["vīvit", "puerī"] },
    { t: "read", text: "Cornēlius epigramma Martiālis recitat: 'Nōn amō tē, Sabidī, nec possum dīcere quārē. Hoc tantum possum dīcere: nōn amō tē!' Rīdent omnēs et Cornēliō diū plaudunt.",
      q: "Quid Cornēlius recitat?", options: ["Epigramma Martiālis", "Carmen Catullī", "Cōmoediam Plautī"], a: 0,
      why: "Marcial I.32 — a antipatia sem motivo, em dístico." },
    { t: "listen", text: "Ōdī et amō! Quārē id faciam, fortasse requīris? Nesciō, sed fierī sentiō — et excrucior!", options: ["Ōdī et amō! Quārē id faciam, fortasse requīris? Nesciō, sed fierī sentiō — et excrucior!", "Amō et gaudeō! Cūr id faciam, bene sciō.", "Nōn amō tē, nec possum dīcere quārē."], a: 0,
      why: "Catulo 85 inteiro — dois versos, uma vida." },
    { t: "type", prompt: "“beijo” (na língua de Catulo):", a: ["basium", "bāsium"], why: "bāsium, -ī n. — daí o 'beijo' do português!" }
  ],
  lectio: {
    title: "Dē Arte Poēticā",
    source: "Adaptado de Familia Romana, cap. XXXIV",
    text: `Post cēnam convīvae dē lūdīs et dē arte poēticā loquuntur. Cornēlius modo in amphitheātrō certāmen gladiātōrum spectāvit; Iūlius cursūs equōrum in circō spectāre māvult; Fabia lūdōs scaenicōs praefert. Sed Iūlius, quī artis poēticae studiōsus est, librum Catullī prōferrī iubet.

Lucernīs accēnsīs, Iūlius carmen recitat dē morte passeris quem Lesbia in dēliciīs habuerat: "Lūgēte, ō Venerēs Cupīdinēsque! Passer mortuus est meae puellae, passer, dēliciae meae puellae, quem plūs illa oculīs suīs amābat." Deinde aliud carmen recitat: "Vīvāmus, mea Lesbia, atque amēmus! Dā mī bāsia mīlle, deinde centum!"

Postrēmō Catullus intellēxit Lesbiam īnfīdam esse, neque tamen dēsiit eam amāre: "Ōdī et amō! Quārē id faciam, fortasse requīris? Nesciō, sed fierī sentiō — et excrucior!"

Tum Cornēlius epigrammata Martiālis recitat, quae sale plēna sunt. Martiālis enim duodecim librōs epigrammatum scrīpsit, quibus hominēs stultōs dērīdet: "Nōn amō tē, Sabidī, nec possum dīcere quārē. Hoc tantum possum dīcere: nōn amō tē!" Rīdent omnēs et Cornēliō valdē et diū plaudunt.`,
    questions: [
      { q: "Quid Iūlius in circō spectāre māvult?", options: ["Cursūs equōrum", "Gladiātōrēs", "Cōmoediās"], a: 0 },
      { q: "Quis erat passer mortuus?", options: ["Dēliciae Lesbiae", "Avis Martiālis", "Passer Ovidiī"], a: 0 },
      { q: "Quot bāsia poēta ā Lesbiā petit?", options: ["Mīlle, deinde centum", "Decem tantum", "Nūlla"], a: 0 },
      { q: "Cuius epigrammata Cornēlius recitat?", options: ["Martiālis", "Catullī", "Vergiliī"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XXXV ================= */
COURSE.push({
  num: 35, roman: "XXXV", icon: "📖",
  title: "Ars Grammatica",
  subtitle: "O gramático Donato · as oito partēs ōrātiōnis · revisão do livro inteiro",
  grammar: [
    { title: "As oito partes do discurso",
      html: `Segundo Donato (séc. IV): <span class="ex-la">nōmen, prōnōmen, verbum, adverbium, participium, coniūnctiō, praepositiō, interiectiō.</span>
      <br>Nome <b>proprium</b> (de um só): <span class="ex-la">Rōma, Tiberis</span> · <b>appellātīvum</b> (de muitos): <span class="ex-la">urbs, flūmen</span>.
      <br>Seis casos: <span class="ex-la">nōminātīvus, genetīvus, datīvus, accūsātīvus, vocātīvus, ablātīvus.</span>
      <br>Três graus: <span class="ex-la">positīvus (doctus), comparātīvus (doctior), superlātīvus (doctissimus).</span>` },
    { title: "Os gêneros do verbo · declinações · conjugações",
      html: `<table><tr><th>gênero</th><th>exemplo</th></tr>
      <tr><td>āctīvum</td><td class="la">legō (→ legor)</td></tr>
      <tr><td>passīvum</td><td class="la">legor (→ legō)</td></tr>
      <tr><td>neutrum</td><td class="la">stō, currō ("stor" não existe!)</td></tr>
      <tr><td>dēpōnēns</td><td class="la">loquor, luctor (sem "loquō")</td></tr></table>
      5 declinações pelo genitivo: <span class="ex-la">-ae, -ī, -is, -ūs, -ēī</span> · 4 conjugações pelo infinitivo: <span class="ex-la">-āre, -ēre, -ere, -īre.</span>` },
    { title: "Preposições e interjeições",
      html: `Com <b>acusativo</b>: <span class="ex-la">ad, ante, apud, circum, contrā, inter, per, post, prope, trāns…</span>
      <br>Com <b>ablativo</b>: <span class="ex-la">ā/ab, cum, cōram, dē, ē/ex, prō, prae, sine.</span>
      <br><b>in</b> e <b>sub</b> com os dois: acusativo = movimento (<span class="ex-la">in urbem</span>), ablativo = lugar (<span class="ex-la">in urbe</span>).
      <br><b>Interiectiō</b> exprime emoção: <span class="ex-la">euax!</span> (alegria), <span class="ex-la">heu!</span> (dor), <span class="ex-la">papae!</span> (admiração), <span class="ex-la">attat!</span> (medo).` }
  ],
  vocab: [
    { la: "ōrātiō", forms: "-ōnis f.", pt: "discurso, fala", ex: "Partēs ōrātiōnis octō sunt." },
    { la: "cāsus", forms: "-ūs m.", pt: "caso (gramatical)", ex: "Cāsūs nōminum sex sunt." },
    { la: "dēclīnātiō", forms: "-ōnis f.", pt: "declinação", ex: "Dēclīnātiōnēs nōminum sunt quīnque." },
    { la: "coniugātiō", forms: "-ōnis f.", pt: "conjugação", ex: "Amāre est verbum prīmae coniugātiōnis." },
    { la: "comparātiō", forms: "-ōnis f.", pt: "comparação (graus)", ex: "Gradūs comparātiōnis trēs sunt." },
    { la: "coniūnctiō", forms: "-ōnis f.", pt: "conjunção", ex: "Coniūnctiō sententiam adnectit atque ōrdinat." },
    { la: "praepositiō", forms: "-ōnis f.", pt: "preposição", ex: "Praepositiō aliīs partibus ōrātiōnis praepōnitur." },
    { la: "interiectiō", forms: "-ōnis f.", pt: "interjeição", ex: "Interiectiō mentis affectum significat." },
    { la: "participium", forms: "-ī n.", pt: "particípio", ex: "Participium partem capit nōminis, partem verbī." },
    { la: "significātiō", forms: "-ōnis f.", pt: "significado, sentido", ex: "Adverbium significātiōnem verbī explānat." },
    { la: "quālitās", forms: "-ātis f.", pt: "qualidade", ex: "Adiectīva quālitātem aut quantitātem significant." },
    { la: "quantitās", forms: "-ātis f.", pt: "quantidade", ex: "'Multum' et 'parum' quantitātem significant." },
    { la: "speciēs", forms: "-ēī f.", pt: "espécie, tipo", ex: "Coniūnctiōnum quīnque speciēs sunt." },
    { la: "affectus", forms: "-ūs m.", pt: "emoção, sentimento", ex: "Laetitia et īra affectūs sunt." },
    { la: "īra", forms: "-ae f.", pt: "ira, raiva", ex: "Īra est affectus eius quī īrātus est." },
    { la: "sacerdōs", forms: "-ōtis m./f.", pt: "sacerdote, sacerdotisa", ex: "'Sacerdōs' nōmen commūne est: hic et haec sacerdōs." },
    { la: "scamnum", forms: "-ī n.", pt: "banco, banqueta", ex: "'Scamnum' nōmen neutrum est." },
    { la: "proprius", forms: "-a -um", pt: "próprio (de um só)", ex: "'Rōma' nōmen proprium est." },
    { la: "positīvus", forms: "-a -um", pt: "positivo (grau)", ex: "Gradus positīvus est 'doctus', comparātīvus 'doctior'." },
    { la: "similis", forms: "-e", pt: "semelhante, parecido", ex: "Frātrēs geminī tam similēs sunt quam ōva." },
    { la: "īnflectere", forms: "-xisse -xum", pt: "flexionar, declinar", ex: "Nōmina per cāsūs īnflectuntur." },
    { la: "dēmere", forms: "-mpsisse -mptum", pt: "tirar, remover", ex: "'Legor', -r litterā dēmptā, fit 'legō'." },
    { la: "explānāre", forms: "v.", pt: "explicar, esclarecer", ex: "Explānāre est plānum facere." },
    { la: "dumtaxat", forms: "adv.", pt: "somente, apenas", ex: "Adiectīva dumtaxat comparantur." },
    { la: "forsitan", forms: "adv.", pt: "talvez", ex: "'Forsitan' idem significat quod 'fortasse'." },
    { la: "quidnī", forms: "adv.", pt: "por que não? claro!", ex: "'Quidnī?' — 'certē!'" }
  ],
  pensum: [
    { t: "mcq", q: "Partēs ōrātiōnis quot sunt?", options: ["Octō", "Sex", "Duodecim"], a: 0,
      why: "nōmen, prōnōmen, verbum, adverbium, participium, coniūnctiō, praepositiō, interiectiō." },
    { t: "cloze", prompt: "'Rōma' nōmen ___ est, 'urbs' appellātīvum.", options: ["proprium", "commūne", "neutrum"], a: 0,
      why: "proprium = de um só; appellātīvum = de muitos." },
    { t: "cloze", prompt: "Verba dēpōnentia in -r dēsinunt, ut loqu___.", options: ["-or", "-ō", "-it"], a: 0,
      why: "Depoentes só existem na forma passiva: loquor, luctor." },
    { t: "gap", prompt: "Cāsūs nōminum sunt ___: nōminātīvus, genetīvus, datīvus, accūsātīvus, vocātīvus, ablātīvus.", a: ["sex"], hint: "(seis)",
      why: "Os seis casos por que os nomes se declinam." },
    { t: "mcq", q: "Quae praepositiōnēs ablātīvō iunguntur?", options: ["Ā, ab, cum, dē, ē, ex, prō, sine", "Ad, ante, apud, inter, per", "In et sub tantum"], a: 0,
      why: "As preposições de ablativo; ad/ante/apud etc. pedem acusativo." },
    { t: "cloze", prompt: "Gradūs comparātiōnis sunt trēs: positīvus, comparātīvus, ___.", options: ["superlātīvus", "optātīvus", "īnfīnītīvus"], a: 0,
      why: "doctus → doctior → doctissimus." },
    { t: "build", pt: "O pronome é colocado no lugar do nome.", la: "Prōnōmen prō nōmine pōnitur", extra: ["verbum", "dīcitur"] },
    { t: "read", text: "Magister discipulum interrogat: 'Verbum quid est?' Discipulus respondet: 'Pars ōrātiōnis cum tempore et persōnā, sine cāsū.' Magister: 'Genera verbōrum quot sunt?' Discipulus: 'Quattuor: āctīva, passīva, neutra, dēpōnentia.'",
      q: "Quot sunt genera verbōrum?", options: ["Quattuor", "Octō", "Duo"], a: 0,
      why: "āctīva (legō), passīva (legor), neutra (stō), dēpōnentia (loquor)." },
    { t: "listen", text: "Interiectiō mentis affectum significat, ut euax! aut heu!", options: ["Interiectiō mentis affectum significat, ut euax! aut heu!", "Coniūnctiō sententiam adnectit, ut et aut atque.", "Praepositiō cāsibus servit, ut ad aut ab."], a: 0,
      why: "euax! = alegria; heu! = dor — emoção em estado bruto." },
    { t: "type", prompt: "“caso” (nominativo, genitivo…):", a: ["casus", "cāsus"], why: "cāsus, -ūs m. — 4ª declinação." }
  ],
  lectio: {
    title: "Ars Grammatica",
    source: "Adaptado de Familia Romana, cap. XXXV (Donato)",
    text: `In librō quī 'Ars grammatica' īnscrībitur, Dōnātus magister discipulum dē partibus ōrātiōnis interrogat. Magister: "Partēs ōrātiōnis quot sunt?" Discipulus: "Octō: nōmen, prōnōmen, verbum, adverbium, participium, coniūnctiō, praepositiō, interiectiō."

Magister: "Nōmen quid est?" Discipulus: "Pars ōrātiōnis cum cāsū, corpus aut rem significāns. Aut ūnīus nōmen est et 'proprium' dīcitur, ut Rōma, aut multōrum et 'appellātīvum', ut urbs. Cāsūs nōminum sex sunt: nōminātīvus, genetīvus, datīvus, accūsātīvus, vocātīvus, ablātīvus."

Magister: "Prōnōmen quid est?" Discipulus: "Pars ōrātiōnis quae prō nōmine posita tantundem paene significat, ut ego, tū, ille." Magister: "Verbum quid est?" Discipulus: "Pars ōrātiōnis cum tempore et persōnā, sine cāsū. Genera verbōrum quattuor sunt: āctīva, ut legō, passīva, ut legor, neutra, ut stō, dēpōnentia, ut loquor."

Magister: "Interiectiō quid est?" Discipulus: "Pars ōrātiōnis significāns mentis affectum: aut laetitiam, ut euax! aut dolōrem, ut heu! aut admīrātiōnem, ut papae! aut metum, ut attat!" Ita discipulus, quī tōtam artem grammaticam bene didicit, ā magistrō suō meritō laudātur.`,
    questions: [
      { q: "Quot sunt partēs ōrātiōnis?", options: ["Octō", "Sex", "Quattuor"], a: 0 },
      { q: "Quod nōmen proprium est?", options: ["Rōma", "Urbs", "Flūmen"], a: 0 },
      { q: "Quod verbum dēpōnēns est?", options: ["Loquor", "Legō", "Stō"], a: 0 },
      { q: "Quid significat interiectiō 'heu'?", options: ["Dolōrem", "Laetitiam", "Metum"], a: 0 }
    ]
  }
});

/* ============================================================
   Glossário extra + nomes novos
   ============================================================ */
NOMINA.push(
  { la: "Pompeius", pt: "Gneu Pompeu — o general que varreu os piratas dos mares" },
  { la: "Midās", pt: "Midas — rei avarento do toque de ouro" },
  { la: "Bacchus", pt: "Baco — deus do vinho" },
  { la: "Apollō", pt: "Apolo — deus que deu orelhas de burro a Midas" },
  { la: "Catullus", pt: "Catulo — poeta dos amores com Lésbia" },
  { la: "Lesbia", pt: "Lésbia — a amada (e infiel) de Catulo" },
  { la: "Ovidius", pt: "Ovídio — poeta da 'Ars amandi' e dos 'Amōrēs'" },
  { la: "Martiālis", pt: "Marcial — mestre do epigrama, 12 livros de farpas" },
  { la: "Tibullus", pt: "Tibulo — poeta que preferia o campo à guerra" },
  { la: "Ennius", pt: "Ênio — «Amīcus certus in rē incertā cernitur»" },
  { la: "Plautus", pt: "Plauto — comediógrafo (o 'Amphitryon')" },
  { la: "Dōnātus", pt: "Donato — gramático do séc. IV, autor da 'Ars grammatica'" },
  { la: "Valerius", pt: "Públio Valério — amigo de armas do Emílio, morto em combate" },
  { la: "Danuvius", pt: "Danúbio — o rio da fronteira germânica" },
  { la: "Germānī", pt: "germanos — os inimigos além do Danúbio" },
  { la: "Alpēs", pt: "Alpes — os montes entre a Itália e a Germânia" },
  { la: "Paris", pt: "Páris — príncipe troiano que raptou Helena" },
  { la: "Helena", pt: "Helena — a mulher mais bela, causa da guerra de Troia" },
  { la: "Priamus", pt: "Príamo — velho rei de Troia" },
  { la: "Nestor", pt: "Nestor — chefe grego que viveu até os 90" }
);

Object.assign(EXTRA_GLOSS, {
  "convivae": "convidados do jantar", "urbanis": "da cidade (abl.)",
  "quendam": "um certo (acus.)", "cuiusdam": "de um certo",
  "aliquis": "alguém", "aliquid": "algo", "quidquid": "tudo o que",
  "priusquam": "antes que", "namque": "pois, porque", "ideo": "por isso",
  "quamobrem": "por quê; razão pela qual", "funditus": "até o fundo",
  "fidebam": "eu confiava", "retraxerit": "tiver trazido de volta",
  "figetur": "será pregado", "suadet": "aconselha, sugere",
  "cruciare": "torturar", "pereat": "que morra!", "valeat": "que passe bem!",
  "labitur": "escorrega, desliza", "triclinio": "sala de jantar (abl.)",
  "poculum": "taça", "pocula": "taças", "nimium": "demais",
  "auferens": "levando embora", "ignoscere": "perdoar (+ dat.)",
  "oderunt": "odeiam", "odi": "odeio", "meminisse": "lembrar-se",
  "precatur": "reza, suplica", "genua": "joelhos", "flectit": "dobra; vira",
  "educit": "saca, puxa para fora", "prospicit": "olha ao longe",
  "percurrunt": "percorrem", "tueantur": "protejam",
  "arbitrantur": "acham, julgam", "persequi": "perseguir",
  "desistunt": "param de", "mercatoriam": "mercante (acus.)",
  "orientem": "oriente, leste", "abducant": "levem embora",
  "interea": "enquanto isso", "etiamnunc": "ainda agora",
  "aliquot": "alguns, uns tantos", "aliquando": "um dia, algum dia",
  "ubique": "em toda parte", "seu": "ou", "neu": "e que não",
  "donec": "enquanto; até que", "utinam": "oxalá, tomara",
  "meret": "ganha (soldo), serve", "stipendia": "soldo; serviço militar",
  "fatigati": "cansados, exaustos", "terga": "costas",
  "verterunt": "viraram", "sagitta": "flecha", "bracchio": "braço (abl.)",
  "hortaretur": "exortava", "exspectato": "espera! (imper. futuro)",
  "scribito": "escreve! (imper. futuro)", "narratote": "narrai! (imper. futuro)",
  "scitote": "sabei! (imper. futuro)", "salutem": "saudação (acus.)",
  "profectus": "tendo partido", "vidissem": "eu tivesse visto",
  "accensis": "acesas (abl.)", "requiris": "perguntas",
  "excrucior": "sou torturado", "basia": "beijos", "lugete": "chorai!",
  "plaudunt": "aplaudem", "recitat": "recita", "sale": "sal; graça (abl.)",
  "quare": "por quê", "dummodo": "contanto que",
  "plerumque": "quase sempre", "interdum": "às vezes",
  "inscribitur": "é intitulado", "adnectit": "liga, conecta",
  "didicit": "aprendeu", "affectum": "emoção (acus.)",
  "admirationem": "admiração (acus.)", "dumtaxat": "somente",
  "tantundem": "o mesmo tanto", "quidni": "por que não? claro!",
  "forsitan": "talvez", "quapropter": "pelo que, portanto",
  "propterea": "por isso", "en": "eis!", "eia": "vamos! coragem!",
  "euax": "oba! (alegria)", "papae": "uau! (admiração)",
  "attat": "ai! (medo)", "heu": "ai! (dor)"
});
