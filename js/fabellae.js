/* ============================================================
   LATINVM — Bibliothēca
   Fabellae Latinae (Hans H. Ørberg, Domus Latina 2006),
   historinhas graduadas por capítulo. Uso pessoal de estudo.
   ============================================================ */

const FABELLAE = [
{
  id: "fab1", cap: 1, icon: "🗺️",
  title: "Prōvinciae Rōmānae",
  level: "cap. I",
  text: `In imperiō Rōmānō multae sunt prōvinciae. Hispānia et Gallia sunt prōvinciae Rōmānae. Britannia quoque prōvincia Rōmāna est. Hispānia et Gallia et Britannia trēs prōvinciae in Eurōpā sunt.

Ubi sunt prōvinciae Syria et Aegyptus? Syria in Asiā est, Aegyptus est in Āfricā. Britannia īnsula est. Num īnsulae sunt Gallia et Hispānia? Nōn sunt īnsulae; sed Corsica, Sardinia, Sicilia īnsulae sunt. Magna īnsula est Britannia. Sicilia quoque et Sardinia et Corsica magnae sunt īnsulae. Melita īnsula parva est.

Quid est Brundisium? Brundisium oppidum est. Quid est Dānuvius? Dānuvius est fluvius. Rhēnus quoque fluvius est. Rhēnus et Dānuvius sunt duo magnī fluviī in Eurōpā. Nīlus quoque magnus fluvius est. Estne Nīlus in Eurōpā? Nōn in Eurōpā, sed in Āfricā est Nīlus. Num Rhodus fluvius est? Nōn fluvius, sed īnsula est. Rhodus est īnsula Graeca. In Graeciā multae sunt īnsulae parvae et magnae.

ĪNSULA et OPPIDUM vocābula Latīna sunt. In vocābulō ĪNSULA sunt sex litterae: littera prīma I, secunda N, tertia S. I est littera et numerus. Numerī prīmī sunt I, II, III; litterae prīmae A, B, C.`
},
{
  id: "fab2", cap: 2, icon: "📚",
  title: "Līberī et librī",
  level: "cap. I–II",
  text: `Quid est Tūsculum? Tūsculum est oppidum Rōmānum. Estne magnum oppidum? Tūsculum nōn magnum, sed parvum oppidum est. Ubi est Tūsculum? Tūsculum est in Italiā.

Quis est Iūlius? Iūlius est vir Rōmānus. Cuius vir est? Vir Aemiliae est. Ubi est Iūlius? Est in oppidō Tūsculō. Estne Aemilia in oppidō? Nōn est.

Cornēlius: "Ubi est vir tuus, Aemilia?"
Aemilia: "Iūlius, vir meus, in oppidō Tūsculō est. Sed ecce Mārcus, fīlius meus, et Dēlia."
Cornēlius: "Quae est Dēlia?"
Aemilia: "Dēlia ancilla mea est. Dēlia et Syra et cēterae multae sunt ancillae meae. In familiā meā sunt multae ancillae multīque servī — et paucī līberī."
Cornēlius: "Quot līberī in familiā tuā sunt?"
Aemilia: "Trēs: duo fīliī et ūna fīlia. Fīliī meī sunt Mārcus et Quīntus, fīlia mea est Iūlia. In familiā meā sunt centum servī et trēs līberī."
Cornēlius: "Centum est magnus numerus! In meā familiā parvus numerus servōrum est. Neque magnus est numerus līberōrum meōrum: ūnus fīlius, Sextus, et ūna fīlia, Cornēlia. Parvus est numerus līberōrum — sed numerus librōrum meōrum nōn parvus est! Centum librī Latīnī et Graecī!"
Aemilia: "Centum librī! Magnus est numerus librōrum tuōrum!"
Cornēlius: "Ecce liber meus novus; titulus librī est GRAMMATICA LATINA."

Līberī et liber duo vocābula masculīna sunt. Līberī est plūrālis; liber singulāris — plūrālis: librī.`
},
{
  id: "fab3", cap: 3, icon: "😴",
  title: "Pater dormit",
  level: "cap. I–III",
  text: `Iūlia, fīlia Iūliī et Aemiliae, est parva puella laeta quae cantat et rīdet. Sed iam nōn cantat puella neque rīdet, sed plōrat: "Uhuhū!" Cūr plōrat Iūlia? Puella plōrat quia Mārcus eam pulsat. Mārcus est puer improbus quī parvam puellam pulsat — et rīdet!

Aemilia audit fīliam quae plōrat. Iūlia Iūlium vocat: "Pater! Pa-ater!" Māter fīliam audit, neque pater eam audit.

Aemilia Iūlium nōn videt et Syram ancillam interrogat: "Ubi est vir meus? Iūlia eum vocat. Cūr nōn venit?"
Syra: "Dominus dormit."
Aemilia: "Ō! Fīlia plōrat — et pater dormit!"
Iūlia: "Uhuhū! Mārcus mē pulsat!"
Mārcus rīdet: "Hahahae!"

Pater audit fīliam quae plōrat et fīlium quī rīdet. Iam nōn dormit Iūlius. Iūlius venit et Aemiliam interrogat: "Cūr Iūlia plōrat et Mārcus rīdet?"
Aemilia respondet: "Mārcus rīdet, quia Iūlia plōrat; et Iūlia plōrat et tē vocat, quia Mārcus eam pulsat. Puer improbus est Mārcus!"

Iūlius Mārcum vocat. Mārcus venit et Iūlium īrātum videt — neque iam rīdet puer. Pater īrātus fīlium improbum verberat! Iam nōn Iūlia, sed Mārcus plōrat.`
},
{
  id: "fab4", cap: 4, icon: "🪙",
  title: "Nummus Dāvī",
  level: "cap. I–IV",
  text: `Aemilia, quae virum suum nōn videt, Dāvum interrogat: "Ubi est vir meus? Cūr nōn venit?"

Dāvus audit dominum, quī Mēdum vocat: "Venī, Mēde! Venī, improbe serve!"
Dāvus: "Audī! Dominus Mēdum vocat, sed Mēdus abest neque venit."
Aemilia: "Mēdus nōn venit quia pecūniam dominī suī habet. Is servus improbus est! Sed ecce venit vir meus."

Aemilia laeta est, quia Iūlius venit. Is īrātus est, et sacculum suum in mēnsā pōnit.
Iūlius: "Ecce sacculus meus. Iam nōn centum, sed tantum decem nummī in sacculō meō sunt. Cēterī nummī meī sunt in sacculō Mēdī!" Dominus Mēdum servum accūsat.
Aemilia: "Nōn decem, sed tantum novem sunt nummī in sacculō tuō."
Iūlius pecūniam numerat: "Ūnus, duo, trēs, quattuor, quīnque, sex, septem, octō, novem. Quid? Novem tantum? Cūr ūnus nummus abest?"
Aemilia: "Quia in sacculō Dāvī est — neque tuus, sed Dāvī est nummus. Ecce Dāvus adest. Is nūllum tuum nummum habet. Nōn Dāvum, sed Mēdum accūsā!"
Dāvus: "Ecce parvus sacculus meus, domine. In sacculō ūnus est nummus, quī meus est."
Iūlius: "Ō Dāve, nummum habē, bone serve! Nōn meus, sed tuus est. Sūme sacculum tuum et discēde!"

Rīdet Aemilia. Iam Iūlius quoque rīdet neque Dāvum, servum probum, accūsat. Dāvus sacculum suum sūmit et discēdit.
Iūlius: "Probus servus est Dāvus; eius est pecūnia quae in sacculō eius est. Sed mea est pecūnia quae est in sacculō Mēdī!"`
},
{
  id: "fab5", cap: 5, icon: "📖",
  title: "Liber novus",
  level: "cap. I–V",
  text: `Cornēlius est dominus Rōmānus, quī in oppidō Tūsculō habitat. Cornēlius duōs līberōs habet, Sextum fīlium et Cornēliam fīliam, et decem tantum servōs. Paucī sunt servī Cornēliī, quia Cornēlius nōn magnam pecūniam habet. Sed multōs librōs Latīnōs et Graecōs habet: Cornēlius est dominus quī librōs et litterās amat. Etiam Sextus, fīlius Cornēliī, librōs et litterās amat.

Cornēlius suum Libanum servum vocat: "Venī, Libane!"
Libanus venit et dominum salūtat: "Salvē, domine! Ecce, servus tuus adest."
Cornēlius: "Salvē, Libane! Tacē et audī!" Servus tacet et audit.
Cornēlius eum interrogat: "Ubi est liber meus novus? Cūr hīc in mēnsā nōn est?"
Libanus tacet neque respondet.
Cornēlius imperat: "Respondē, serve!"
Libanus: "Nōn mē, sed fīlium tuum interrogā! Liber tuus novus est in cubiculō Sextī."

In cubiculō suō Sextus habet librum Cornēliī novum. Titulus librī est GRAMMATICA LATINA. Sextus Cornēliam vocat: "Venī, Cornēlia! Ecce liber novus. In librō multa capitula sunt. Ecce litterae Latīnae in pāginā prīmā: A, B, C, D, E, cēterae. Iam respondē, Cornēlia: quot litterae sunt in vocābulō LATINA?"
Cornēlia litterās numerat: "Ūna, duae, trēs, quattuor, quīnque, sex. In vocābulō LATINA sunt sex litterae."
Sextus: "Et quot syllabae?"
Cornēlia: "Trēs: syllaba prīma LA, secunda TI, tertia NA."

Cornēlius fīlium suum vocat: "Sexte, venī!" Sextus pāret: ex cubiculō venit cum librō Cornēliī. Pater īrātus fīlium interrogat: "Estne liber meus novus in cubiculō tuō?"
Sextus librum in mēnsā pōnit: "Nōn est in cubiculō meō. Ecce liber tuus in mēnsā tuā!"

Iam Cornēlius rīdet neque īrātus est. Pater, quem librī et litterae dēlectant, laetus est quia etiam fīlius librōs et litterās amat.`
},
{
  id: "fab6", cap: 5, icon: "🌹",
  title: "Puella in hortō",
  level: "cap. I–V",
  text: `Iūlius, quī magnam pecūniam habet, in magnā et pulchrā vīllā habitat cum familiā suā. Vīlla eius habet ātrium et peristȳlum et multa cubicula. Iūlius et Aemilia trēs līberōs habent: duōs fīliōs, Mārcum et Quīntum, et ūnam fīliam, Iūliam. Iūlia parva puella est.

Ubi est fīlia Iūliī et Aemiliae? Iūlia est in hortō vīllae. Puella laeta rīdet et rosās carpit. Quot rosās carpit Iūlia? Quīnque rosās magnās et pulchrās carpit. Rosae Iūliam dēlectant.

Iūlia, quae sōla est in hortō, puerōs vocat: "Venīte, Mārce et Quīnte!" Puerī ex peristȳlō veniunt et Iūliam in hortō vident.
Iūlia: "Ecce quīnque rosae. Vidēte rosās meās!"
Quīntus: "Quīnque parvus numerus est! In hortō est magnus numerus rosārum. Centum rosae hīc sunt!"
Mārcus: "Nōn centum tantum, sed mīlle rosae in hortō meō sunt."
Iūlia: "Nōn tuus est hortus!"
Mārcus: "Neque tuae sunt rosae!"
Puerī ab Iūliā discēdunt. Rosae eōs nōn dēlectant.

Iūlia rūrsus quīnque rosās pulchrās carpit. Iam puella nōn quīnque tantum, sed decem rosās habet. Puella, quae rosās amat, laeta est et cantat.

Iūlius, pater Iūliae, ex vīllā venit. Iūlius, quī baculum habet, īrātus est et fīliam suam interrogat: "Estne Mēdus hīc in hortō?"
Iūlia respondet: "Nōn est. In hortō nūllus est servus, sed ecce fīlia tua hīc est. Salūtā mē, pater!"
Iūlius: "Salvē, mea fīlia!"
Iūlia: "Ecce decem rosae! Habē eās, pater! Tuae sunt rosae. Nōnne pulchrae sunt?"
Iūlius nōn respondet, sed Mēdum vocat: "Mēde! Venī, improbe serve!" — et ab fīliā suā discēdit, sine rosīs.

Iūlia: "Cūr discēdit pater neque respondet? Is nōn amat rosās — num fīliam suam amat?" Iūlia iam nōn laeta est neque cantat. Sed Mēdus, quī nummōs dominī habet, iam abest ab vīllā et ab hortō.`
},
{
  id: "fab7", cap: 6, icon: "🐎",
  title: "Mēdus et Cornēlius",
  level: "cap. I–VI",
  text: `Lȳdia est fēmina pulchra quae Rōmae habitat. Estne fēmina Rōmāna? Nōn Rōmāna est, sed Graeca. Lȳdia autem procul ā Graeciā habitat, neque sōla est Rōmae, nam multās amīcās Rōmānās et Graecās habet. Etiam amīcum habet Lȳdia: is nōn Rōmānus est, sed Graecus, neque Rōmae habitat, sed prope oppidum Tūsculum. Amīcus Lȳdiae est Mēdus, servus Iūliī. Lȳdia Mēdum amat et ab eō amātur.

Estne Mēdus apud dominum suum? Nōn est in vīllā apud dominum, neque Tūsculī est, sed in viā Latīnā inter Rōmam et Tūsculum. Quō it Mēdus sine dominō suō? Rōmam it. Post eum est Tūsculum, Rōma ante eum est.

Mēdus laetus est et cantat, quia ad amīcam suam ambulat. Sed iam tacet Mēdus. Cūr iam nōn cantat servus? Mēdus tacet neque cantat, quia videt dominum Rōmānum quī equō vehitur Rōmā Tūsculum. Quis est dominus quem videt Mēdus? Est Cornēlius, quī Tūsculī habitat. Is ā Mēdō timētur, quia Iūliī est amīcus.

Cornēlius (ad equum suum): "Ecce servus quī sōlus Rōmam ambulat. Cuius is est servus? Estne servus Iūliī? Is est!" Verba Cornēliī ab equō tantum, nōn ā Mēdō audiuntur.

Iam Cornēlius prope Mēdum est, neque ab eō salūtātur. Neque servum salūtat Cornēlius, sed interrogat: "Quis est dominus tuus, serve? Estne Iūlius?"
Mēdus, quī amīcum Iūliī timet, nūllum verbum respondet, et Rōmam ad amīcam suam ambulat.

Cornēlius, quī sōlus equō vehitur, interrogat equum: "Cūr servus mē nōn salūtat, sed tacet neque respondet?" Equus verba dominī audit neque verbum respondet, sed tantum "Hihihī!" — nam equus verba nōn habet!

Ecce Mēdus per portam Capēnam Rōmam intrat et laetus ad ōstium Lȳdiae ambulat. Mēdus ōstium pulsat et intrat. Lȳdia laeta amīcum suum salūtat et ab amīcō suō salūtātur.`
},
{
  id: "fab8", cap: 7, icon: "🪞",
  title: "Speculum Aemiliae",
  level: "cap. I–VII",
  text: `Syra et Dēlia, ancillae amīcae, ex ātriō exeunt.
Syra: "Venī in cubiculum Iūliae. Illīc bonum speculum est. Iūlia speculum Aemiliae in cubiculō suō habet."

Syra et Dēlia in cubiculum Iūliae intrant. In cubiculō eius est parva mēnsa. Syra videt speculum, quod in mēnsā est.
Syra: "Ecce speculum. Claude oculōs, Dēlia!"
Dēlia oculōs claudit. Syra speculum sūmit et ante Dēliam tenet.
Syra: "Iam aperī oculōs!"
Dēlia oculōs aperit et sē videt in speculō, quod ā Syrā tenētur. Oculī Dēliae pulchrī sunt et fōrmōsus est nāsus eius. Dēlia est ancilla fōrmōsa.
Syra: "Ecce oculī tuī pulchrī et nāsus tuus fōrmōsus."

Dēlia verbīs Syrae dēlectātur et sē ad eam vertit. In oculīs Syrae lacrimās videt.
Dēlia: "Quid est, Syra? Ecce lacrimae in oculīs tuīs!"
Syra: "Oculī meī nōn tam pulchrī sunt quam tuī, et foedus est nāsus meus."
Dēlia: "Ō Syra! Tergē oculōs! Nōn pulchrī sunt oculī plēnī lacrimārum. Sine lacrimīs pulchrī sunt oculī tuī, neque nāsus tuus foedus est, sed tam fōrmōsus quam… Iūliae."
Syra oculōs terget et Dēliam interrogat: "Iamne pulchrī sunt oculī meī?"
Dēlia rīdet et eī speculum dat: "Ecce speculum. Vidē oculōs tuōs in speculō."
Syra speculum ante sē tenet — neque rīdet neque lacrimat.

Aemilia in cubiculō suō ancillās suās exspectat, neque ancillae veniunt; itaque Aemilia eās vocat: "Syra et Dēlia! Venīte!"
Ancillae, quae dominam suam vocāre audiunt, ex cubiculō Iūliae exeunt et in cubiculum Aemiliae intrant.
Aemilia imperat: "Syra, ī cum Iūliā in hortum! Illīc inter rosās ambulāte, nam Iūlia rosīs dēlectātur."
Syra cum Iūliā discēdit.
Aemilia (ad Dēliam): "Sūme speculum, Dēlia, et ante mē tenē!"
Dēlia: "Sed speculum tuum hīc nōn est. Iūlia in cubiculō suō habet speculum tuum."
Aemilia: "Quid? Quid agit Iūlia cum speculō meō?"`
},
{
  id: "fab9", cap: 8, icon: "💍",
  title: "Ōrnāmenta dominae",
  level: "cap. I–VIII",
  text: `Aemilia in cubiculō suō est cum Dēliā ancillā. Dēlia dominam suam ōrnat: margarītās circum collum Aemiliae pōnit. Aemilia ōrnāmentīs dēlectātur neque sine ōrnāmentīs ē cubiculō exit. Multās margarītās et gemmās pulchrās habet, neque ūnum tantum ānulum, sed decem ānulōs gemmātōs. Aemilia multa ōrnāmenta ā virō suō pecūniōsō accipit — et multās rosās ā fīliā suā.

Domina ancillae suae sacculum ostendit: "In hōc sacculō nōn nummī, sed ānulī sunt. Ecce ānulī gemmātī quī mē dēlectant." Aemilia quattuor ānulōs gemmātōs ē sacculō sūmit et in mēnsā pōnit.
Dēlia: "Ō, quam pulchrī sunt illī ānulī!"

Aemilia ūnum ex quattuor ānulīs sūmit et Dēliae ostendit: "Aspice hunc ānulum! Pretium huius ānulī est mīlle et centum sēstertiī."
Dēlia: "Id magnum pretium est!"
Dēlia ānulum sūmit et ante oculōs suōs tenet; gemmam ānulī aspicit: "In hōc ānulō nōn tanta gemma est quanta in illō." Dēlia mōnstrat alium ānulum gemmātum.
Aemilia: "Tanta gemma ad tam parvum ānulum nōn convenit. Haec gemma sōla mīlle sēstertiīs cōnstat. Hunc ānulum pōne in digitō meō!"

Ancilla ānulum gemmātum in digitō dominae pōnit. In quō digitō? In digitō quārtō, nam ānulus ad eum digitum convenit. Aemilia laeta aspicit digitum suum quī ānulō ōrnātur.
Aemilia: "Speculum tenē ante mē!"
Dēlia speculum tenet ante dominam, quae sē cum margarītīs suīs fōrmōsīs aspicit. Et ānulō et margarītīs dēlectātur.

Aemilia cum ōrnāmentīs ē cubiculō exit neque ōstium post sē claudit. Dēlia, quae iam sōla est in cubiculō, sacculum et ānulōs trēs quī in mēnsā sunt aspicit. Ōstium claudit, et ex ānulīs sūmit eum quī magnam gemmam habet.
Dēlia: "Quam pulcher est hic ānulus! Neque haec gemma nimis magna est. Etiam ad meum digitum convenit ānulus gemmātus!"

Ancilla, quae nūllum ōrnāmentum habet, ānulum Aemiliae in digitō suō pōnit! Digitum cum ānulō laeta aspicit — neque ea cum ōrnāmentīs exit. Dēlia, ancilla proba, quae tam pulchra est quam domina sua, trēs ānulōs rūrsus in sacculō dominae pōnit et sine ōrnāmentīs ē cubiculō exit. Dēlia ōstium post sē claudit.`
}
];
