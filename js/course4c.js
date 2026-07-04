/* ============================================================
   LATINVM — Expansão 4c: Capitula XXVII–XXX
   Carrega DEPOIS dos capítulos anteriores, ANTES de app.js.
   ============================================================ */

/* ================= CAPITVLVM XXVII ================= */
COURSE.push({
  num: 27, roman: "XXVII", icon: "🌾",
  title: "Rēs Rūsticae",
  subtitle: "A vida no campo · subjuntivo presente · imperat/ōrat/cūrat ut + subjuntivo",
  grammar: [
    { title: "O subjuntivo presente (coniūnctīvus)",
      html: `O modo das ordens indiretas, desejos e finalidades:
      <table><tr><th>indicativo</th><th>subjuntivo</th></tr>
      <tr><td class="la">intrat</td><td class="la">intret</td></tr>
      <tr><td class="la">tacet</td><td class="la">taceat</td></tr>
      <tr><td class="la">claudit</td><td class="la">claudat</td></tr>
      <tr><td class="la">audit</td><td class="la">audiat</td></tr></table>
      1ª conjugação: <b>-em, -ēs, -et…</b>; as demais: <b>-am, -ās, -at…</b>
      <br>esse: <span class="ex-la">sim, sīs, sit, sīmus, sītis, sint.</span>` },
    { title: "imperat / ōrat / cūrat ut (nē) + subjuntivo",
      html: `Mandar, pedir e cuidar "que alguém faça":
      <br><span class="ex-la">Dominus imperat ut colōnus mercēdem <b>solvat</b>.</span> = manda que o colono pague.
      <br><span class="ex-la">Colōnus ōrat ut dominus patientiam <b>habeat</b>.</span>
      <br>Negativo com <b>nē</b>: <span class="ex-la">Pāstōris officium est cūrāre <b>nē</b> ovēs aberrent <b>nēve</b> ā lupō rapiantur.</span>
      <br>Passiva: <span class="ex-la">Imperat ut servus teneātur et verberētur.</span>` },
    { title: "ūtī + ablativo · rūs e ōtium",
      html: `<span class="ex-la">Quī arat arātrō <b>ūtitur</b>; quī metit falce ūtitur; quī serit manū suā ūtitur.</span> — ūtī (depoente) = usar, com ablativo.
      <br><span class="ex-la">rūs</span> ↔ <span class="ex-la">urbs</span>: <span class="ex-la">rūrī</span> = no campo. <span class="ex-la">ōtium</span> ↔ <span class="ex-la">negōtium</span> (nec + ōtium!).
      <br><span class="ex-la">Colōnus aliēnōs agrōs prō dominō absentī colit et mercēdem solvit.</span>` }
  ],
  vocab: [
    { la: "ager", forms: "-grī m.", pt: "campo (de cultivo)", ex: "In agrīs frūmentum crēscit." },
    { la: "agricola", forms: "-ae m.", pt: "agricultor", ex: "Agricola est vir cuius negōtium est agrōs colere." },
    { la: "frūmentum", forms: "-ī n.", pt: "trigo, cereal", ex: "Mēnse Augustō frūmentum metitur." },
    { la: "sēmen", forms: "-inis n.", pt: "semente", ex: "Agricola sēmen manū spargit." },
    { la: "arātrum", forms: "-ī n.", pt: "arado", ex: "Arātrum est īnstrūmentum quō agrī arantur." },
    { la: "falx", forms: "falcis f.", pt: "foice", ex: "Frūmentum falce metitur." },
    { la: "vīnea", forms: "-ae f.", pt: "vinha, vinhedo", ex: "Agrī in quibus vītēs crēscunt vīneae dīcuntur." },
    { la: "vītis", forms: "-is f.", pt: "videira", ex: "Aspice hanc vītem: tot ūvae vīnum bonum prōmittunt!" },
    { la: "ūva", forms: "-ae f.", pt: "uva", ex: "Ex ūvīs mātūrīs vīnum efficitur." },
    { la: "rūs", forms: "rūris n.", pt: "campo (oposto de cidade)", ex: "Rūs quiētum et amoenum Iūlium dēlectat." },
    { la: "ōtium", forms: "-ī n.", pt: "ócio, descanso", ex: "Rūrī dominus in ōtiō est." },
    { la: "negōtium", forms: "-ī n.", pt: "trabalho, ocupação", ex: "In urbe Iūlius semper in negōtiō est." },
    { la: "colōnus", forms: "-ī m.", pt: "colono (arrendatário)", ex: "Colōnus aliēnōs agrōs prō dominō colit." },
    { la: "pecus", forms: "-oris n.", pt: "gado, rebanho (coletivo)", ex: "Herba est pecoris pābulum." },
    { la: "grex", forms: "gregis m.", pt: "rebanho", ex: "Ovis ē grege aberrāverat." },
    { la: "mercēs", forms: "-ēdis f.", pt: "renda, pagamento", ex: "Colōnus mercēdem dominō solvit." },
    { la: "patientia", forms: "-ae f.", pt: "paciência", ex: "Hic fīnis est patientiae meae!" },
    { la: "precēs", forms: "-um f. pl.", pt: "preces, súplicas", ex: "Precibus colōnī dominus movētur." },
    { la: "calor", forms: "-ōris m.", pt: "calor", ex: "Nihil vīneīs magis prōdest quam sōl et calor." },
    { la: "frīgus", forms: "-oris n.", pt: "frio", ex: "Imber et frīgus vīneīs nocent." },
    { la: "fertilis", forms: "-e", pt: "fértil", ex: "Aegyptus terra fertilissima est." },
    { la: "mātūrus", forms: "-a -um", pt: "maduro", ex: "Mēnse Augustō frūmentum mātūrum est." },
    { la: "siccus", forms: "-a -um", pt: "seco", ex: "Solum nimis siccum est nec rigārī potest." },
    { la: "arat", forms: "v.", pt: "ara, lavra", ex: "Agricola arāns post arātrum ambulat." },
    { la: "serit", forms: "v.", pt: "semeia", ex: "Novum frūmentum seritur." },
    { la: "metit", forms: "v.", pt: "ceifa, colhe", ex: "Quī metit falce ūtitur." },
    { la: "colit", forms: "v.", pt: "cultiva", ex: "Colōnī agrōs Iūliī colunt." },
    { la: "ūtitur", forms: "v. dep. + abl.", pt: "usa", ex: "Quī arat arātrō ūtitur." },
    { la: "prōdest", forms: "v. + dat.", pt: "é útil, faz bem", ex: "Sōl vīneīs prōdest." },
    { la: "nocet", forms: "v. + dat.", pt: "prejudica, faz mal", ex: "Frīgus vīneīs nocet." }
  ],
  pensum: [
    { t: "cloze", prompt: "Dominus imperat ut colōnus mercēdem solv___.", options: ["-at", "-it", "-et"], a: 0,
      why: "Depois de imperat ut: subjuntivo presente da 3ª conjugação = solvat." },
    { t: "cloze", prompt: "Moneō tē ut studiōsus ___, discipule!", options: ["sīs", "es", "sit"], a: 0,
      why: "Subjuntivo de esse, 2ª pessoa: sīs (sim, sīs, sit…)." },
    { t: "gap", prompt: "Quī arat arātrō ___.", a: ["utitur", "ūtitur"], hint: "(usa — depoente + ablativo)",
      why: "ūtī pede ablativo: arātrō ūtitur." },
    { t: "mcq", q: "“Pāstōris officium est cūrāre nē ovēs aberrent” =", options: ["cuidar para que as ovelhas NÃO se percam", "cuidar para que as ovelhas se percam", "mandar as ovelhas para longe"], a: 0,
      why: "nē + subjuntivo = para que não." },
    { t: "cloze", prompt: "Cūrā ut uxor et līberī vale___!", options: ["-ant", "-ent", "-bant"], a: 0,
      why: "valēre é da 2ª conjugação: subjuntivo valeant." },
    { t: "build", pt: "O agricultor espalha a semente com a mão.", la: "Agricola sēmen manū spargit", extra: ["falce", "metit"] },
    { t: "read", text: "Iūlius colōnum in agrō cōnspicit et interrogat: 'Cūr nōndum solvistī mercēdem quam ter quaterve iam abs tē poposcī?' Colōnus pallidus prae metū loquī nōn potest.",
      q: "Cūr colōnus nōn respondet?", options: ["Quia prae metū loquī nōn potest", "Quia dominum nōn audit", "Quia mercēdem iam solvit"], a: 0,
      why: "«pallidus prae metū» — o medo trava a fala do colono." },
    { t: "listen", text: "Imperō tibi ut mercēdem solvās!", options: ["Imperō tibi ut mercēdem solvās!", "Ōrō tē ut mihi parcās!", "Cūrā ut agrī bene colantur!"], a: 0,
      why: "imperō ut + subjuntivo 2ª pessoa: solvās." },
    { t: "mcq", q: "Quis est colōnus?", options: ["Agricola quī aliēnōs agrōs prō dominō colit", "Servus quī in vīllā labōrat", "Dominus praediī"], a: 0,
      why: "Colōnus cultiva terra alheia e paga mercēs ao dono." },
    { t: "type", prompt: "“campo” (o contrário de urbs):", a: ["rus", "rūs"], why: "rūs, rūris n. — locativo rūrī = no campo." }
  ],
  lectio: {
    title: "Rēs Rūsticae",
    source: "Adaptado de Familia Romana, cap. XXVII",
    text: `Iūlius, quī nūper ex urbe in praedium suum vēnit, circā agrōs et vīneās ambulat. In agrīs frūmentum crēscit; mēnse Augustō frūmentum mātūrum falce metitur, deinde agrī arantur et novum frūmentum seritur. Quī arat arātrō ūtitur; quī serit nūllō īnstrūmentō ūtitur praeter manum. Agricola est vir cuius negōtium est agrōs colere.

Agrī Iūliī nōn ā dominō ipsō coluntur, sed ā colōnīs, quī mercēdem dominō solvunt. Hōc annō quīdam colōnus mercēdem nōndum solvit. Iūlius eī imperat ut accēdat: "Imperō tibi ut mercēdem solvās!" Colōnus pallidus prae metū dominum ōrat ut patientiam habeat: "Uxor mea gravida est nec īnfantēs cūrāre potest. Intrā duōs mēnsēs omnia accipiēs!" Hīs precibus dominus sevērus tandem movētur: "Abī domum! Prīmum cūrā ut uxor et līberī valeant, tum vērō labōrā ut pecūniam omnem solvās!"

Colōnō dīmissō, Iūlius dē pāstōre audit quī officium suum neglēxit: ovis ē grege aberrāverat et paene ā lupō rapta est. Iūlius īrātus: "Pāstōris officium est cūrāre nē ovēs aberrent nēve ā lupō rapiantur! Ego cūrābō nē ille pāstor posthāc officium neglegat." Etsī dominus sevērus exīstimātur, tamen inhūmānus nōn est.`,
    questions: [
      { q: "Quandō frūmentum metitur?", options: ["Mēnse Augustō", "Mēnse Iānuāriō", "Hieme"], a: 0 },
      { q: "Quis agrōs Iūliī colit?", options: ["Colōnī", "Dominus ipse", "Servī urbānī"], a: 0 },
      { q: "Quid colōnus dominum ōrat?", options: ["Ut patientiam habeat", "Ut pecūniam sibi det", "Ut agrōs vēndat"], a: 0 },
      { q: "Quid est officium pāstōris?", options: ["Cūrāre nē ovēs aberrent", "Agrōs arāre", "Mercēdem solvere"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XXVIII ================= */
COURSE.push({
  num: 28, roman: "XXVIII", icon: "🌊",
  title: "Perīcula Maris",
  subtitle: "Medo e Lídia no mar · ut/nē + subjuntivo imperfeito · mālle",
  grammar: [
    { title: "O subjuntivo imperfeito: -rem, -rēs, -ret",
      html: `Depois de verbo no passado, o subjuntivo também vai ao passado — infinitivo + <b>-m, -s, -t…</b>:
      <table><tr><th>presente</th><th>passado</th></tr>
      <tr><td class="la">monet ut pāreat</td><td class="la">monuit ut pārēret</td></tr>
      <tr><td class="la">imperat ut surgat</td><td class="la">imperāvit ut surgeret</td></tr></table>
      <span class="ex-la">Iesūs virō claudō imperāvit ut surgeret et ambulāret.</span>
      <br>esse: <span class="ex-la">essem, essēs, esset…</span>` },
    { title: "ut/nē no passado · a passiva em -rētur",
      html: `<span class="ex-la">Multīs prōmissīs eī persuāsī ut mēcum <b>proficīscerētur</b>.</span> = convenci-a a partir comigo.
      <br><span class="ex-la">Ē vīllā fūgī, ut verbera <b>vītārem</b> atque ut semper cum eā <b>essem</b>.</span> (finalidade no passado)
      <br>Passiva: <span class="ex-la">Chrīstus cūrāvit ut ē tempestāte <b>servārēmur</b> nēve <b>mergerēmur</b>.</span>` },
    { title: "mālle = magis velle · caecus, surdus, mūtus, claudus",
      html: `Preferir: <span class="ex-la">mālō, māvīs, māvult, mālumus, māvultis, mālunt.</span>
      <br><span class="ex-la">Lȳdia Rōmae vīvere <b>māvult</b> quam in Graeciā.</span>
      <br>Os quatro que Cristo curava com palavras:
      <br><span class="ex-la">Efficiēbat ut <b>caecī</b> vidērent, <b>surdī</b> audīrent, <b>mūtī</b> loquerentur, <b>claudī</b> ambulārent.</span>` }
  ],
  vocab: [
    { la: "fretum", forms: "-ī n.", pt: "estreito (de mar)", ex: "Fretō Siculō Sicilia ab Italiā disiungitur." },
    { la: "animus", forms: "-ī m.", pt: "ânimo, espírito", ex: "Corpus sānum est mihi, animus vērō turbātus." },
    { la: "turba", forms: "-ae f.", pt: "multidão", ex: "Magna turba eum sequēbātur." },
    { la: "fāma", forms: "-ae f.", pt: "fama, notícia", ex: "Fāma dē factīs eius mīrābilibus exiit." },
    { la: "libellus", forms: "-ī m.", pt: "livrinho", ex: "Lȳdia libellum intrā vestem occultat." },
    { la: "prīnceps", forms: "-ipis m.", pt: "chefe, príncipe", ex: "Iaīrus prīnceps Iūdaeōrum erat." },
    { la: "potestās", forms: "-ātis f.", pt: "poder", ex: "Tōtus mundus in potestāte Deī est." },
    { la: "mundus", forms: "-ī m.", pt: "mundo", ex: "Mundus est caelum et terra et mare." },
    { la: "nāvicula", forms: "-ae f.", pt: "barquinho", ex: "Nāvicula flūctibus iactābātur." },
    { la: "perīculum", forms: "-ī n.", pt: "perigo", ex: "Multa perīcula nautīs impendent." },
    { la: "praedō", forms: "-ōnis m.", pt: "pirata, salteador", ex: "Praedōnēs maritimī nāvēs persequuntur." },
    { la: "pecūlium", forms: "-ī n.", pt: "pecúlio (dinheiro do escravo)", ex: "Dominus mihi pecūlium nōn dabat." },
    { la: "caecus", forms: "-a -um", pt: "cego", ex: "Caecus vidēre nōn potest." },
    { la: "surdus", forms: "-a -um", pt: "surdo", ex: "Surdus audīre nōn potest." },
    { la: "mūtus", forms: "-a -um", pt: "mudo", ex: "Mūtus loquī nōn potest." },
    { la: "claudus", forms: "-a -um", pt: "coxo, manco", ex: "Claudus ambulāre nōn potest." },
    { la: "mortālis", forms: "-e", pt: "mortal", ex: "Hominēs mortālēs nāscuntur ac moriuntur." },
    { la: "immortālis", forms: "-e", pt: "imortal", ex: "Deus immortālis semper vīvit." },
    { la: "salvus", forms: "-a -um", pt: "salvo, são e salvo", ex: "Salvum mē fac, Domine!" },
    { la: "tūtus", forms: "-a -um", pt: "seguro", ex: "Nūllum mare tūtum est ā praedōnibus." },
    { la: "nāscitur", forms: "v. dep.", pt: "nasce", ex: "Chrīstus in oppidō Bethlehem nātus est." },
    { la: "moritur", forms: "v. dep.", pt: "morre", ex: "Hominēs mortālēs moriuntur." },
    { la: "oboedit", forms: "v. + dat.", pt: "obedece", ex: "Ventī et mare eī oboediunt." },
    { la: "servit", forms: "v. + dat.", pt: "serve, é escravo de", ex: "Nēmō potest duōbus dominīs servīre." },
    { la: "māvult", forms: "v. (mālle)", pt: "prefere", ex: "Lȳdia Rōmae vīvere māvult quam in Graeciā." },
    { la: "persuādet", forms: "v. + dat.", pt: "persuade, convence", ex: "Mēdus eī persuāsit ut sēcum venīret." },
    { la: "vītat", forms: "v.", pt: "evita", ex: "Gubernātor perīcula vītāre cūrat." },
    { la: "spērat", forms: "v.", pt: "espera, tem esperança", ex: "Omnēs id futūrum esse spērāmus." },
    { la: "pervenit", forms: "v.", pt: "chega (a)", ex: "Quandō in Graeciam perveniēmus?" },
    { la: "utrum… an", forms: "conj.", pt: "será que… ou", ex: "Utrum aegrōtās an territus es?" }
  ],
  pensum: [
    { t: "cloze", prompt: "Iesūs virō claudō imperāvit ut surge___ et ambulā___.", options: ["-ret / -ret", "-t / -t", "-at / -at"], a: 0,
      why: "Verbo principal no passado (imperāvit) → subjuntivo imperfeito: surgeret, ambulāret." },
    { t: "cloze", prompt: "Mēdus Lȳdiae persuāsit ut sēcum proficīscerē___.", options: ["-tur", "-ris", "-minī"], a: 0,
      why: "Depoente no subjuntivo imperfeito, 3ª pessoa: proficīscerētur." },
    { t: "mcq", q: "“Lȳdia Rōmae vīvere māvult quam in Graeciā” =", options: ["Lídia prefere viver em Roma a viver na Grécia", "Lídia não quer viver nem em Roma nem na Grécia", "Lídia quer mais a Grécia do que Roma"], a: 0,
      why: "māvult (mālle) = magis vult, prefere." },
    { t: "gap", prompt: "Nēmō potest duōbus dominīs ___.", a: ["servire", "servīre"], hint: "(servir — verbo + dativo)",
      why: "servīre + dativo: duōbus dominīs." },
    { t: "mcq", q: "Quid surdus facere nōn potest?", options: ["Audīre", "Vidēre", "Ambulāre"], a: 0,
      why: "surdus = surdo; caecus não vê, claudus não anda, mūtus não fala." },
    { t: "build", pt: "Os ventos e o mar obedecem a ele.", la: "Ventī et mare eī oboediunt", extra: ["eum", "pārent"] },
    { t: "read", text: "Nāvicula in mediō marī flūctibus iactābātur. Quārtā vigiliā noctis Iesūs ad discipulōs vēnit super mare ambulāns. Discipulī territī clāmāvērunt, sed ille 'Nōlīte timēre!' inquit.",
      q: "Quōmodo Iesūs ad nāviculam vēnit?", options: ["Super mare ambulāns", "Aliā nāve vectus", "Natāns"], a: 0,
      why: "«super mare ambulāns» — a cena que Lídia lê para Medo." },
    { t: "listen", text: "Domine, salvā nōs! Perīmus!", options: ["Domine, salvā nōs! Perīmus!", "Domine, servā mē! Cadō!", "Nōlīte timēre, discipulī!"], a: 0,
      why: "O grito dos discípulos na tempestade: salvā nōs, perīmus!" },
    { t: "cloze", prompt: "Gubernātor cūrāvit nē nāvis merge___.", options: ["-rētur", "-tur", "-bātur"], a: 0,
      why: "Passiva do subjuntivo imperfeito: mergerētur." },
    { t: "type", prompt: "“perigo”:", a: ["periculum", "perīculum"], why: "perīculum, -ī n. — multa perīcula nautīs impendent." }
  ],
  lectio: {
    title: "Perīcula Maris",
    source: "Adaptado de Familia Romana, cap. XXVIII",
    text: `Mēdus et Lȳdia ventō secundō ad fretum Siculum nāvigant, quō Sicilia ab Italiā disiungitur. Post tempestātem animus Mēdī turbātus est. "Quis est ille dominus tuus" inquit "cui mare et ventī oboedīre videntur?" Lȳdia: "Chrīstus est Deī fīlius, quī in oppidō Bethlehem nātus est. Verbīs sōlīs efficiēbat ut caecī vidērent, surdī audīrent, mūtī loquerentur, claudī ambulārent."

Tum Lȳdia libellum prōmit, quem Matthaeus, discipulus Chrīstī, scrīpsit, atque Mēdō recitat: Nāvicula flūctibus iactābātur, et quārtā vigiliā noctis Iesūs super mare ambulāns ad discipulōs vēnit. Iī territī clāmāvērunt, sed ille "Nōlīte timēre!" inquit — tum surgēns ventīs et marī imperāvit, et facta est tranquillitās magna.

Gubernātor, quī sermōnem eōrum exaudīvit, "Mihi nēmō persuādēbit" inquit "hominem super mare ambulāre posse! Nec tūtī sumus: multa perīcula nautīs impendent — saxa quibus nāvēs franguntur, vorāginēs, praedōnēs maritimī, quī mercēs rapiunt nautāsque occīdunt."

Mēdus dē sē narrat: "In Italiā dominō sevērō serviēbam. Herī ē vīllā fūgī, ut verbera vītārem atque ut semper cum amīcā meā essem. Multīs prōmissīs eī persuāsī ut mēcum proficīscerētur." Lȳdia ānulum aureum ostendit, quem Mēdus prope centum sēstertiīs ēmit. "Nōnne tua erat ista pecūnia?" Mēdus rubēns nescit quid respondeat.`,
    questions: [
      { q: "Ubi nātus est Chrīstus?", options: ["In oppidō Bethlehem", "Rōmae", "In Graeciā"], a: 0 },
      { q: "Quid Iesūs verbīs sōlīs efficiēbat?", options: ["Ut caecī vidērent et surdī audīrent", "Ut nautae dīvitēs essent", "Ut nāvēs mergerentur"], a: 0 },
      { q: "Cūr Mēdus ē vīllā dominī fūgit?", options: ["Ut verbera vītāret et cum amīcā esset", "Ut praedō maritimus fieret", "Quia dominus eum līberāvit"], a: 0 },
      { q: "Quid Mēdus Lȳdiae dedit?", options: ["Ānulum aureum", "Libellum", "Centum ovēs"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XXIX ================= */
COURSE.push({
  num: 29, roman: "XXIX", icon: "🐬",
  title: "Nāvigāre Necesse Est",
  subtitle: "O mercador, Aríon e Polícrates · cum + subjuntivo · ut final × ut consecutivo",
  grammar: [
    { title: "cum + subjuntivo",
      html: `<b>cum</b> com subjuntivo = "quando, como, já que":
      <br><span class="ex-la"><b>Cum</b> Arīōn ex Italiā in Graeciam <b>nāvigāret</b>, nautae eum necāre cōnstituērunt.</span> = quando Aríon navegava…
      <br><span class="ex-la">Gubernātor, <b>cum</b> omnēs attentōs <b>videat</b>, fābulam narrat.</span> = como vê todos atentos…
      <br>Presente do subjuntivo para o presente, imperfeito para o passado.` },
    { title: "ut final × ut consecutivo",
      html: `Final (para quê): <span class="ex-la">Dāvus clāmat, <b>ut</b> puerum excitet.</span> = para acordar o menino.
      <br>Consecutivo (tão… que): <span class="ex-la">Dāvus <b>ita</b> clāmat <b>ut</b> puerum excitet.</span> = grita tanto que o acorda.
      <br><span class="ex-la">Arīōn <b>tam</b> pulchrē fidibus canēbat <b>ut</b> alter Orpheus appellārētur.</span>
      <br>Negativo final: <b>nē</b>: <span class="ex-la">Syra tacet, nē puellam excitet.</span>` },
    { title: "magnī aestimāre · dum anima est, spēs est",
      html: `Genitivo de valor: <span class="ex-la">Mercātōrēs mercēs suās <b>magnī</b> aestimant, vītam nautārum <b>parvī</b>.</span> = dão muito valor às mercadorias, pouco à vida dos marinheiros.
      <br>Dois provérbios do capítulo:
      <br><span class="ex-la"><b>Dum anima est, spēs est.</b></span> = enquanto há vida, há esperança.
      <br><span class="ex-la"><b>Nōlī quemquam ante mortem beātum dīcere!</b></span>` }
  ],
  vocab: [
    { la: "vīta", forms: "-ae f.", pt: "vida", ex: "Iactūrā mercium vīta omnium servāta est." },
    { la: "spēs", forms: "-eī f.", pt: "esperança", ex: "Dum anima est, spēs est." },
    { la: "lucrum", forms: "-ī n.", pt: "lucro", ex: "Mercātor magnum lucrum facere spērābat." },
    { la: "dīvitiae", forms: "-ārum f. pl.", pt: "riquezas", ex: "Arīōn magnās dīvitiās sēcum habēbat." },
    { la: "iactūra", forms: "-ae f.", pt: "perda; lançamento ao mar", ex: "Iactūrā mercium nāvis servāta est." },
    { la: "laetitia", forms: "-ae f.", pt: "alegria", ex: "Polycratēs maximā laetitiā affectus est." },
    { la: "trīstitia", forms: "-ae f.", pt: "tristeza", ex: "Trīstitia tua mē nōn afficit." },
    { la: "fundus", forms: "-ī m.", pt: "fundo", ex: "In fundō maris multae nāvēs mersae iacent." },
    { la: "delphīnus", forms: "-ī m.", pt: "golfinho", ex: "Delphīnus Arīonem in dorsō suō vēxit." },
    { la: "fidēs", forms: "-ium f. pl.", pt: "lira (as cordas)", ex: "Arīōn pulchrē fidibus canēbat." },
    { la: "fidicen", forms: "-inis m.", pt: "tocador de lira, citaredo", ex: "Orpheus fidicen nōbilissimus fuit." },
    { la: "cantus", forms: "-ūs m.", pt: "canto", ex: "Delphīnus cantū Arīonis allectus est." },
    { la: "carmen", forms: "-inis n.", pt: "canção, poema", ex: "Arīōn ante mortem carmen cecinit." },
    { la: "dorsum", forms: "-ī n.", pt: "dorso, costas (de animal)", ex: "In dorsō delphīnī sedēbat." },
    { la: "salūs", forms: "-ūtis f.", pt: "salvação", ex: "Nōlī umquam dē salūte dēspērāre!" },
    { la: "fūr", forms: "fūris m.", pt: "ladrão", ex: "Fūr es, Mēde!" },
    { la: "fūrtum", forms: "-ī n.", pt: "furto, roubo", ex: "Lȳdia Mēdum fūrtī accūsat." },
    { la: "tyrannus", forms: "-ī m.", pt: "tirano", ex: "Polycratēs tyrannus Samius erat." },
    { la: "fortūna", forms: "-ae f.", pt: "sorte, fortuna", ex: "Varia est hominum fortūna." },
    { la: "piscātor", forms: "-ōris m.", pt: "pescador", ex: "Piscātor piscem tyrannō dōnāvit." },
    { la: "maestus", forms: "-a -um", pt: "triste, abatido", ex: "Nōn mīrum est mercātōrem maestum esse." },
    { la: "fēlīx", forms: "-īcis", pt: "feliz, afortunado", ex: "Nōn tam fēlīx eris quam Arīōn!" },
    { la: "vēlōx", forms: "-ōcis", pt: "veloz", ex: "Nāvis vēlōx nōs persequitur!" },
    { la: "nōtus", forms: "-a -um", pt: "conhecido", ex: "Orpheus omnibus nōtus est." },
    { la: "āmittit", forms: "v.", pt: "perde", ex: "Mercātor omnia āmīsit." },
    { la: "queritur", forms: "v. dep.", pt: "queixa-se", ex: "Mercātor multīs cum lacrimīs queritur." },
    { la: "invidet", forms: "v. + dat.", pt: "inveja", ex: "Nautae hominī dīvitī invidēbant." },
    { la: "parcit", forms: "v. + dat.", pt: "poupa (a vida de)", ex: "Arīōn ōrāvit ut sibi parcerent." },
    { la: "dēspērat", forms: "v.", pt: "desespera, perde a esperança", ex: "Arīōn iam dē salūte dēspērābat." },
    { la: "appropinquat", forms: "v. + dat.", pt: "aproxima-se", ex: "Nāvis praedōnum nōbīs appropinquat." }
  ],
  pensum: [
    { t: "mcq", q: "“Cum Arīōn in Graeciam nāvigāret, nautae eum necāre cōnstituērunt” — cum + subjuntivo =", options: ["quando/como Aríon navegava…", "com Aríon a navegar junto", "embora Aríon soubesse nadar"], a: 0,
      why: "cum + subjuntivo imperfeito = quando, como (circunstância no passado)." },
    { t: "cloze", prompt: "Arīōn tam pulchrē canēbat ut alter Orpheus appellā___.", options: ["-rētur", "-tur", "-bitur"], a: 0,
      why: "Consecutiva no passado: ut appellārētur (subjuntivo imperfeito passivo)." },
    { t: "cloze", prompt: "Nautae Arīonī imperāvērunt ut statim in mare dēsilī___.", options: ["-ret", "-t", "-at"], a: 0,
      why: "imperāvērunt (passado) → subjuntivo imperfeito: dēsilīret." },
    { t: "gap", prompt: "Dum anima est, ___ est.", a: ["spes", "spēs"], hint: "(esperança)",
      why: "O provérbio do timoneiro: enquanto há vida, há esperança." },
    { t: "mcq", q: "“Mercēs iēcimus ut omnēs salvī essēmus” — esse ut é:", options: ["final: para que todos ficássemos salvos", "consecutivo: tão… que ficamos salvos", "temporal: quando ficamos salvos"], a: 0,
      why: "ut final: a finalidade de jogar a carga ao mar." },
    { t: "build", pt: "O golfinho carregou Aríon no seu dorso.", la: "Delphīnus Arīonem in dorsō suō vēxit", extra: ["cantū", "piscis"] },
    { t: "read", text: "Polycratēs tyrannus ānulum suum pretiōsissimum in mare abiēcit, cum sēsē nimis fēlīcem esse cēnsēret. Paucīs post diēbus piscātor piscem tyrannō dōnāvit — et in ventre piscis ānulus inventus est!",
      q: "Ubi ānulus tyrannī inventus est?", options: ["In ventre piscis", "In fundō maris", "In dorsō delphīnī"], a: 0,
      why: "O anel jogado ao mar volta na barriga do peixe." },
    { t: "listen", text: "Nōlī quemquam ante mortem beātum dīcere!", options: ["Nōlī quemquam ante mortem beātum dīcere!", "Nōlī mē fūrem appellāre, Lȳdia!", "Nōlīte dē salūte dēspērāre, nautae!"], a: 0,
      why: "A lição da fortuna de Polícrates: ninguém é feliz antes do fim." },
    { t: "gap", prompt: "Nautae pauperēs hominī dīvitī ___.", a: ["invidebant", "invidēbant"], hint: "(invejavam — verbo + dativo)",
      why: "invidēre + dativo: hominī dīvitī invidēbant." },
    { t: "type", prompt: "“ladrão”:", a: ["fur", "fūr"], why: "fūr, fūris m. — daí 'furto' e 'furtar'." }
  ],
  lectio: {
    title: "Nāvigāre Necesse Est",
    source: "Adaptado de Familia Romana, cap. XXIX",
    text: `Multae nāvēs quotannīs in marī pereunt, nec tamen ūllīs perīculīs ā nāvigandō dēterrentur nautae: "Nāvigāre necesse est" aiunt. In nāve Mēdī mercātor Rōmānus maestus est, nam mercēs pretiōsae, in quibus omnem spem posuerat, flūctibus mersae sunt. "Heu, mē miserum! Quōmodo uxōrem et līberōs alam?" Gubernātor: "Iactūrā mercium vīta omnium nostrum servāta est. Bonum animum habē!"

Tum gubernātor, cum omnēs attentōs videat, fābulam dē Arīone narrat: Cum Arīōn, nōbilissimus suī temporis fidicen, ex Italiā in Graeciam nāvigāret magnāsque dīvitiās sēcum habēret, nautae pauperēs, quī hominī dīvitī invidēbant, eum necāre cōnstituērunt. Arīōn ōrāvit ut sibi licēret ante mortem carmen canere. In celsā puppī stāns carmen clārā vōce cecinit — tum in mare dēsiluit. Sed delphīnus, cantū allectus, hominem in dorsō suō sedentem vēxit et in lītore Graeciae salvum exposuit.

"Hāc fābulā monēmur ut semper bonō animō sīmus nēve umquam dē salūte dēspērēmus. Dum anima est, spēs est!"

Dum gubernātor loquitur, altera nāvis vēlōx procul in marī appāret, quae eōs persequitur: nāvis praedōnum est! Gubernātor perterritus exclāmat: "Ō dī bonī! Quid faciāmus?"`,
    questions: [
      { q: "Cūr mercātor maestus est?", options: ["Quia mercēs eius in mare iactae sunt", "Quia uxor eius mortua est", "Quia nāvem suam āmīsit"], a: 0 },
      { q: "Quid nautae Arīonī imperāvērunt?", options: ["Ut in mare dēsilīret", "Ut fidēs suās vēnderet", "Ut nāvem gubernāret"], a: 0 },
      { q: "Quōmodo Arīōn servātus est?", options: ["Delphīnō vectus est", "Natandō lītus petīvit", "Nautae eī pepercērunt"], a: 0 },
      { q: "Quae nāvis in fīne appāret?", options: ["Nāvis praedōnum", "Nāvis mercātōria", "Nāvis Rōmāna"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XXX ================= */
COURSE.push({
  num: 30, roman: "XXX", icon: "🍷",
  title: "Convīvium",
  subtitle: "O jantar romano · futuro perfeito (-erō) · fruī + ablativo",
  grammar: [
    { title: "O futuro perfeito: -erō, -eris, -erit",
      html: `"Quando eu tiver feito…" — tema do perfeito + <b>-erō, -eris, -erit, -erimus, -eritis, -erint</b>:
      <br><span class="ex-la">Tē laudābō, sī mihi <b>pārueris</b> et industrius <b>fueris</b>.</span>
      <br><span class="ex-la">Cēnābimus cum prīmum cocus cēnam <b>parāverit</b>.</span>
      <br><span class="ex-la">Sententiam nōn ante dīcam quam utrumque <b>gustāverō</b>.</span>
      <br>Passiva: <span class="ex-la">laudātus erō, laudātus eris, laudātus erit…</span>` },
    { title: "O triclīnium e a ordem da cēna",
      html: `Três leitos (<span class="ex-la">lectus summus, medius, īmus</span>) e a mesa no meio. Os romanos jantam <b>deitados</b>, não sentados! Em cada leito, <span class="ex-la">singulī aut bīnī aut ternī</span> convivas: no mínimo 3, no máximo 9 (<span class="ex-la">ter ternī sunt novem</span>).
      <br>A ordem: <span class="ex-la">ōva</span> → <span class="ex-la">piscēs cum holeribus</span> → <span class="ex-la">carō porcī</span> (caput cēnae) → <span class="ex-la">mēnsa secunda: nucēs, ūvae, māla.</span>` },
    { title: "fruī + ablativo · o vinho à romana",
      html: `<span class="ex-la">fruī</span> (depoente) = desfrutar de, com ablativo:
      <br><span class="ex-la">Post tanta negōtia magis quam umquam ōtiō <b>fruor</b>.</span>
      <br>Os romanos misturam o vinho com água: <span class="ex-la">vīnum <b>merum</b></span> = vinho puro, coisa de grego! <span class="ex-la">Sōlus Orontēs merum pōtat.</span>
      <br><span class="ex-la">Nōn vīvimus ut bibāmus, sed bibimus ut vīvāmus.</span>` }
  ],
  vocab: [
    { la: "convīvium", forms: "-ī n.", pt: "banquete, jantar festivo", ex: "Ante convīvium triclīnium flōribus exōrnātur." },
    { la: "convīva", forms: "-ae m./f.", pt: "conviva, convidado", ex: "In singulīs lectīs ternī convīvae accubant." },
    { la: "triclīnium", forms: "-ī n.", pt: "sala de jantar (três leitos)", ex: "Convīvae laetī triclīnium intrant." },
    { la: "cēna", forms: "-ae f.", pt: "jantar", ex: "Cēna hōrā nōnā vel decimā sūmitur." },
    { la: "hospes", forms: "-itis m.", pt: "hóspede; anfitrião", ex: "Cornēlius et Orontēs hospitēs Iūliī sunt." },
    { la: "balneum", forms: "-ī n.", pt: "banho", ex: "Iūlius ex agrīs reversus balneum petit." },
    { la: "culīna", forms: "-ae f.", pt: "cozinha", ex: "Cibus in culīnā coquitur." },
    { la: "cocus", forms: "-ī m.", pt: "cozinheiro", ex: "Cocus iste sānē negōtium suum scit!" },
    { la: "minister", forms: "-trī m.", pt: "criado (que serve à mesa)", ex: "Ministrī cibum in triclīnium portant." },
    { la: "vās", forms: "vāsis n., pl. vāsa", pt: "vaso, baixela", ex: "Vāsa argentea in mēnsā sunt." },
    { la: "argentum", forms: "-ī n.", pt: "prata", ex: "Ex argentō fīunt dēnāriī." },
    { la: "holus", forms: "-eris n.", pt: "legume, verdura", ex: "Piscēs cum holeribus appōnuntur." },
    { la: "nux", forms: "nucis f.", pt: "noz", ex: "In mēnsā secundā nucēs sunt." },
    { la: "carō", forms: "carnis f.", pt: "carne", ex: "Carō porcī maximē laudātur." },
    { la: "sāl", forms: "salis m.", pt: "sal", ex: "Orontēs salem carnī aspergit." },
    { la: "mel", forms: "mellis n.", pt: "mel", ex: "Nihil melle dulcius est." },
    { la: "merum", forms: "-ī n.", pt: "vinho puro (sem água)", ex: "Sōlus Orontēs merum pōtat." },
    { la: "famēs", forms: "-is f.", pt: "fome", ex: "Magnum malum est famēs." },
    { la: "sitis", forms: "-is f.", pt: "sede", ex: "Multō molestior est sitis quam famēs." },
    { la: "lībertīnus", forms: "-ī m.", pt: "liberto (ex-escravo)", ex: "Lībertīnus est quī servus fuit et līberātus est." },
    { la: "iūcundus", forms: "-a -um", pt: "agradável", ex: "Vīta rūstica iūcunda est." },
    { la: "molestus", forms: "-a -um", pt: "penoso, desagradável", ex: "Sex hōrās cibō caruisse molestum est." },
    { la: "dulcis", forms: "-e", pt: "doce", ex: "Paula vīnum dulce amat." },
    { la: "acerbus", forms: "-a -um", pt: "amargo, azedo", ex: "Hoc vīnum nimis acerbum est!" },
    { la: "coquit", forms: "v.", pt: "cozinha", ex: "Cocus cēnam in culīnā coquit." },
    { la: "fundit", forms: "v.", pt: "derrama, verte", ex: "Minister vīnum in pōculum fundit." },
    { la: "miscet", forms: "v.", pt: "mistura", ex: "Rōmānī vīnum cum aquā miscent." },
    { la: "gustat", forms: "v.", pt: "prova, degusta", ex: "Paula vīnum gustat." },
    { la: "fruitur", forms: "v. dep. + abl.", pt: "desfruta de", ex: "Iūlius ōtiō rūris fruitur." },
    { la: "accumbit", forms: "v.", pt: "reclina-se à mesa", ex: "Iūlius cum Aemiliā in lectō mediō accumbit." }
  ],
  pensum: [
    { t: "cloze", prompt: "Tē laudābō, sī mihi pāru___.", options: ["-eris", "-istī", "-ēs"], a: 0,
      why: "Futuro perfeito: pārueris = tiveres obedecido." },
    { t: "cloze", prompt: "Cēnābimus cum prīmum cocus cēnam parāv___.", options: ["-erit", "-it", "-at"], a: 0,
      why: "Futuro perfeito: parāverit = tiver preparado." },
    { t: "gap", prompt: "Rōmānī vīnum cum aquā ___.", a: ["miscent"], hint: "(misturam)",
      why: "miscēre: só Orontes bebe merum, vinho puro." },
    { t: "mcq", q: "Quot convīvae in singulīs lectīs accubāre solent?", options: ["Singulī aut bīnī aut ternī", "Semper novem", "Decem aut plūrēs"], a: 0,
      why: "1, 2 ou 3 por leito — por isso no máximo 9 convivas (ter ternī)." },
    { t: "mcq", q: "“Nōn vīvimus ut bibāmus, sed bibimus ut vīvāmus” =", options: ["Não vivemos para beber, mas bebemos para viver", "Não bebemos para viver, mas vivemos para beber", "Nem vivemos nem bebemos"], a: 0,
      why: "A sentença de Cornélio contra o beberrão Orontes." },
    { t: "cloze", prompt: "Sententiam meam nōn ante dīcam quam utrumque gustāv___.", options: ["-erō", "-ī", "-am"], a: 0,
      why: "Futuro perfeito, 1ª pessoa: gustāverō = eu tiver provado." },
    { t: "build", pt: "O criado derrama o vinho nos copos.", la: "Minister vīnum in pōcula fundit", extra: ["miscet", "mēnsam"] },
    { t: "read", text: "Paula vīnum gustāns 'Hoc vīnum nimis acerbum est' inquit, 'ego vīnum dulce amō: semper mel vīnō misceō.' Statim minister mel apportat, quod Paula in pōculum suum fundit.",
      q: "Quid Paula vīnō miscet?", options: ["Mel", "Salem", "Aquam calidam"], a: 0,
      why: "«semper mel vīnō misceō» — nihil melle dulcius est!" },
    { t: "listen", text: "Ergō bibāmus! Hoc vīnum ex optimīs ūvīs meārum vīneārum factum est.", options: ["Ergō bibāmus! Hoc vīnum ex optimīs ūvīs meārum vīneārum factum est.", "Ergō cēnēmus! Cibus optimus in culīnā parātus est.", "Pōcula exhaurīte, amīcī, et Falernum pōtāte!"], a: 0,
      why: "bibāmus! = bebamos! — o brinde de Júlio com o vinho albano." },
    { t: "type", prompt: "“fome”:", a: ["fames", "famēs"], why: "famēs, -is f. — a irmã dela é sitis, a sede." }
  ],
  lectio: {
    title: "Convīvium",
    source: "Adaptado de Familia Romana, cap. XXX",
    text: `Ex agrīs reversus Iūlius balneum petit, atque prīmum aquā calidā, tum frīgidā lavātur. Intereā Cornēlius et Orontēs, amīcī et hospitēs eius, cum uxōribus Fabiā et Paulā adveniunt: Iūlius eōs ad cēnam vocāvit.

Dum cibus in culīnā coquitur, servī triclīnium flōribus exōrnant. In triclīniō trēs lectī sunt: lectus summus, medius, īmus. Rōmānī nōn sedentēs cēnant, sed in lectīs cubantēs; in singulīs lectīs singulī aut bīnī aut ternī convīvae accubant. Tandem puer 'cēnam parātam esse' nūntiat, et convīvae laetī triclīnium intrant. In mēnsā vāsa et pōcula argentea sunt.

Prīmum ōva convīvīs appōnuntur, deinde piscēs cum holeribus; sequitur caput cēnae: porcus, quem Iūlius ipse ē grege ēlēgit. Postrēmō mēnsa secunda: nucēs, ūvae, varia genera mālōrum. Ministrī vīnum in pōcula fundunt. Rōmānī vīnum cum aquā miscent; sōlus Orontēs merum pōtat. Paula vērō, quae vīnum dulce amat, mel vīnō miscet.

Iūlius pōculum tollēns "Ergō bibāmus!" inquit. "Cum prīmum meum vīnum pōtāveritis, Falernum pōtābitis: tum utrumque comparāre poterimus." Omnēs Falernum multō melius esse sentiunt — sed neuter hospitum id apertē dīcere audet!`,
    questions: [
      { q: "Quid Iūlius facit ex agrīs reversus?", options: ["Balneum petit", "Statim cēnat", "Dormītum it"], a: 0 },
      { q: "Quōmodo Rōmānī cēnant?", options: ["In lectīs cubantēs", "In sellīs sedentēs", "Stantēs"], a: 0 },
      { q: "Quod est caput cēnae?", options: ["Porcus", "Ōva", "Nucēs"], a: 0 },
      { q: "Quis vīnum merum pōtat?", options: ["Orontēs", "Cornēlius", "Aemilia"], a: 0 }
    ]
  }
});

/* ============================================================
   Glossário extra + nomes novos
   ============================================================ */
NOMINA.push(
  { la: "Sāturnus", pt: "Saturno — deus dos agricultores, antigo rei do Lácio" },
  { la: "Orontēs", pt: "Orontes — hóspede grego de Júlio, lībertīnus" },
  { la: "Fabia", pt: "Fábia — esposa de Cornélio" },
  { la: "Paula", pt: "Paula — esposa de Orontes, do vinho com mel" },
  { la: "Chrīstus", pt: "Cristo — o 'dominus' de Lídia" },
  { la: "Iesūs", pt: "Jesus — nome de Cristo no libellus de Mateus" },
  { la: "Matthaeus", pt: "Mateus — evangelista, autor do libellus de Lídia" },
  { la: "Petrus", pt: "Pedro — o discípulo que andou sobre a água" },
  { la: "Bethlehem", pt: "Belém — cidade da Judeia onde Cristo nasceu" },
  { la: "Iūdaea", pt: "Judeia — região entre a Síria e o Egito" },
  { la: "Arīōn", pt: "Aríon — o citaredo de Lesbos salvo pelo golfinho" },
  { la: "Orpheus", pt: "Orfeu — o músico lendário que encantava as feras" },
  { la: "Polycratēs", pt: "Polícrates — tirano de Samos, o do anel no peixe" },
  { la: "Scylla", pt: "Cila — rochedos do lado da Itália, no estreito da Sicília" },
  { la: "Charybdis", pt: "Caríbdis — voragem do lado da Sicília" },
  { la: "Falernum", pt: "Falerno — o vinho mais famoso da Itália (da Campânia)" }
);

Object.assign(EXTRA_GLOSS, {
  "praedium": "propriedade rural", "nuper": "recentemente, há pouco",
  "circa": "ao redor de", "efficitur": "é produzido", "quidam": "um certo, um tal",
  "accedat": "se aproxime (subj.)", "solvisti": "pagaste", "poposci": "exigi (perf.)",
  "conspicit": "avista", "pallidus": "pálido", "metu": "medo (abl.)",
  "gravida": "grávida", "intra": "dentro de (+ acus.)", "abi": "vai! vai embora!",
  "valeant": "estejam bem (subj.)", "dimisso": "dispensado (abl.)",
  "aberrent": "se percam (subj.)", "aberraverat": "tinha se desgarrado",
  "rapiantur": "sejam roubadas (subj.)", "rapta": "roubada, arrebatada",
  "neglexit": "negligenciou (perf.)", "posthac": "de agora em diante",
  "paene": "quase", "existimatur": "é considerado", "inhumanus": "desumano",
  "etsi": "embora", "denique": "por fim", "prae": "diante de; por causa de",
  "abs": "= ā (de, por)", "neve": "e para que não", "utrum": "será que (…ou)",
  "an": "ou (em pergunta dupla)", "velut": "como, tal como",
  "disiungitur": "é separado", "occultat": "esconde", "promit": "tira, saca",
  "recitat": "lê em voz alta", "iactabatur": "era jogado, era sacudido",
  "vigilia": "vigília (um quarto da noite)", "tranquillitas": "calmaria",
  "exaudivit": "ouviu (de longe)", "impendent": "ameaçam, pairam sobre",
  "saxa": "rochedos", "franguntur": "são quebrados", "voragines": "voragens, redemoinhos",
  "merguntur": "afundam", "occidunt": "matam", "fugi": "fugi (perf.)",
  "promissis": "promessas (abl.)", "anulus": "anel", "sestertiis": "sestércios (abl.)",
  "rubens": "corando, ficando vermelho", "surrexit": "levantou-se (perf.)",
  "quotannis": "todo ano", "aiunt": "dizem", "alam": "alimentarei (subj.)",
  "heu": "ai! (dor)", "constituerunt": "decidiram", "liceret": "fosse permitido",
  "puppi": "popa (abl.)", "celsa": "alta, elevada", "cecinit": "cantou (perf.)",
  "desiluit": "saltou (para baixo)", "allectus": "atraído", "vexit": "carregou (perf.)",
  "litore": "litoral, praia (abl.)", "exposuit": "depositou em terra",
  "appellaretur": "fosse chamado", "protinus": "imediatamente",
  "repente": "de repente", "quasi": "como se, feito", "inde": "dali",
  "nonnumquam": "às vezes", "nonnulli": "alguns, vários",
  "reversus": "de volta, tendo voltado", "interea": "enquanto isso",
  "induit": "veste", "lautus": "banhado, lavado", "nuntiat": "anuncia",
  "sternitur": "é estendida, é forrada", "stratum": "forrado, coberto",
  "ova": "ovos", "apponuntur": "são servidos", "elegit": "escolheu (perf.)",
  "apportat": "traz", "tollens": "erguendo", "exhaurite": "esvaziai!",
  "intremus": "entremos!", "bibamus": "bebamos!", "potaveritis": "tiverdes bebido",
  "poterimus": "poderemos", "aperte": "abertamente", "utrumque": "ambos, um e outro",
  "demum": "finalmente, só então", "equidem": "eu, da minha parte",
  "sane": "certamente, sem dúvida", "paulisper": "por pouco tempo",
  "diu": "por muito tempo", "pridem": "há muito tempo", "circiter": "cerca de"
});
