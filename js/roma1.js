/* ============================================================
   LATINVM — LIBER II: ROMA AETERNA (Pars II do Ørberg)
   Capitula XXXVI–XL (lote 1). Prosa literária: a Eneida de
   Vergílio em prosa (solūtīs versibus) + a cidade de Roma.
   ============================================================ */

/* ================= CAPITVLVM XXXVI ================= */
COURSE.push({
  num: 36, roman: "XXXVI", icon: "🏛️",
  title: "Rōma Aeterna",
  subtitle: "LIBER II começa! A cidade de Roma · dīcitur + infinitivo",
  grammar: [
    { title: "Bem-vindo ao Roma Aeterna",
      html: `Aqui muda o jogo: acabou a história da família — agora é <b>prosa literária de verdade</b> sobre Roma e sua história. As frases ficam mais longas, com orações encadeadas. A estratégia de leitura: ache o <b>verbo principal</b> primeiro, depois encaixe as orações relativas (quī, quae, quod) e os ablativos absolutos ao redor.` },
    { title: "dīcitur + infinitivo (nominativo + inf.)",
      html: `A "voz do historiador" — reporta tradição sem afirmar:
      <br><span class="ex-la">Rōmulus Palātium mūnīvisse <b>dīcitur</b>.</span> = Diz-se que Rômulo fortificou o Palatino.
      <br><span class="ex-la">Iūnō hanc urbem <b>dīlēxisse dīcitur</b>.</span>
      <br>O sujeito fica no <b>nominativo</b> (diferente do AcI com dīcit).` },
    { title: "O perfeito passivo narrativo",
      html: `A história é contada em perfeitos passivos:
      <br><span class="ex-la">Palātium prīmum <b>mūnītum est</b>.</span> = O Palatino foi fortificado primeiro.
      <br><span class="ex-la">Urbs 'Rōma quadrāta' <b>appellābātur</b>.</span>
      <br>E medidas: <span class="ex-la">vīgintī <b>mīlia passuum</b> ā marī</span> = a 20 milhas do mar (gen. após mīlia).` }
  ],
  vocab: [
    { la: "rīpa", forms: "-ae f.", pt: "margem (de rio)", ex: "Rōma in rīpā Tiberis sita est." },
    { la: "collis", forms: "-is m.", pt: "colina", ex: "Moenia septem collēs complectuntur." },
    { la: "moenia", forms: "-ium n. pl.", pt: "muralhas (da cidade)", ex: "Moenia Rōmāna antīqua." },
    { la: "templum", forms: "-ī n.", pt: "templo", ex: "In Capitōliō templum Iovis est." },
    { la: "āra", forms: "-ae f.", pt: "altar", ex: "Āra maxima Herculis." },
    { la: "forum", forms: "-ī n.", pt: "foro, praça pública", ex: "Forum Rōmānum inter collēs situm est." },
    { la: "theātrum", forms: "-ī n.", pt: "teatro", ex: "In theātrō lūdī fīunt." },
    { la: "domus", forms: "-ūs f.", pt: "casa (declinação mista!)", ex: "Prīncipēs domōs magnificās aedificāvērunt." },
    { la: "casa", forms: "-ae f.", pt: "choupana, cabana", ex: "Casa Rōmulī strāmentō tēcta." },
    { la: "aedificium", forms: "-ī n.", pt: "edifício", ex: "Multa aedificia pūblica in urbe sunt." },
    { la: "monumentum", forms: "-ī n.", pt: "monumento", ex: "Monumenta antīqua restant." },
    { la: "prīnceps", forms: "-ipis m.", pt: "imperador; o principal", ex: "Augustus prīnceps Rōmānus fuit." },
    { la: "rēx", forms: "rēgis m.", pt: "rei", ex: "Rōmulus prīmus rēx Rōmānōrum fuit." },
    { la: "aetās", forms: "-ātis f.", pt: "idade, época", ex: "Post Iūliī Caesaris aetātem." },
    { la: "mīlle passūs", forms: "pl. mīlia passuum", pt: "milha romana (~1,5 km)", ex: "Vīgintī mīlia passuum ā marī." },
    { la: "mūnīre", forms: "-īvisse -ītum", pt: "fortificar", ex: "Collēs propinquī bene mūnīrī possunt." },
    { la: "aedificāre", forms: "v.", pt: "construir", ex: "Prīncipēs domōs sibi aedificāvērunt." },
    { la: "trānsīre", forms: "v.", pt: "atravessar", ex: "Hōc locō flūmen facile trānsītur." },
    { la: "patēre", forms: "v.", pt: "estender-se; estar aberto", ex: "Campus Mārtius ūsque ad Tiberim patet." },
    { la: "restāre", forms: "v.", pt: "restar, sobrar", ex: "Nūlla casa restat ex illā urbe." },
    { la: "perīre", forms: "-iisse", pt: "perecer, desaparecer", ex: "Moenia quadrāta iam prīdem periērunt." },
    { la: "tegere", forms: "tēxisse tēctum", pt: "cobrir", ex: "Casa strāmentō tēcta." },
    { la: "propinquus", forms: "-a -um", pt: "próximo, vizinho", ex: "Collēs propinquī flūminī." },
    { la: "magnificus", forms: "-a -um", pt: "magnífico", ex: "Domūs magnificae in Palātiō." },
    { la: "nōbilis", forms: "-e", pt: "nobre, ilustre", ex: "Rōmānī nōbilissimī in Palātiō habitāvērunt." },
    { la: "prīdem", forms: "adv.", pt: "há muito tempo", ex: "Iam prīdem periērunt." },
    { la: "posteā", forms: "adv.", pt: "depois, mais tarde", ex: "Posteā prīncipēs ibi habitāvērunt." },
    { la: "ūsque ad", forms: "prep.", pt: "até", ex: "Ūsque ad Tiberim flūmen." }
  ],
  pensum: [
    { t: "mcq", q: "“Rōmulus Palātium mūnīvisse dīcitur” =", options: ["Diz-se que Rômulo fortificou o Palatino", "Rômulo diz que fortificou o Palatino", "Rômulo mandou fortificar o Palatino"], a: 0,
      why: "dīcitur + infinitivo: a tradição reportada, sujeito no nominativo." },
    { t: "cloze", prompt: "Urbs Rōma in rīp__ Tiberis sita est.", options: ["-ā", "-am", "-ae"], a: 0,
      why: "in + ablativo: in rīpā." },
    { t: "cloze", prompt: "Palātium prīmum mūnīt__ est.", options: ["-um", "-us", "-a"], a: 0,
      why: "Perfeito passivo com sujeito neutro: mūnītum est." },
    { t: "gap", prompt: "Moenia Rōmāna septem ___ complectuntur.", a: ["colles", "collēs"], hint: "(colinas — acusativo plural)",
      why: "As famosas sete colinas de Roma." },
    { t: "mcq", q: "Quantas eram as colinas de Roma?", options: ["Septem", "Trēs", "Duodecim"], a: 0,
      why: "Palātium, Capitōlium, Aventīnus, Caelius, Esquiliae, Vīminālis, Quirīnālis." },
    { t: "build", pt: "Roma está situada a vinte milhas do mar.", la: "Rōma vīgintī mīlia passuum ā marī sita est", extra: ["mare", "passūs"] },
    { t: "read", text: "Nūlla casa restat ex illā urbe antīquissimā quae 'Rōma quadrāta' appellābātur — praeter 'casam Rōmulī' strāmentō tēctam, quam Rōmānī etiam nunc cōnservant.",
      q: "Quid restat ex urbe antīquissimā?", options: ["Casa Rōmulī", "Moenia quadrāta", "Templum Iovis"], a: 0,
      why: "Os romanos preservavam a 'cabana de Rômulo' como relíquia." },
    { t: "listen", text: "Urbs Rōma in rīpā Tiberis flūminis sita est.", options: ["Urbs Rōma in rīpā Tiberis flūminis sita est", "Urbs Rōma in monte Capitōlīnō sita est", "Ōstia in ōrā maritimā sita est"], a: 0,
      why: "A primeira frase do Roma Aeterna!" },
    { t: "cloze", prompt: "Prīncipēs Rōmānī domōs magnificās sibi aedificāv_____.", options: ["-ērunt", "-erat", "-erint"], a: 0,
      why: "Perfeito 3ª plural: aedificāvērunt." },
    { t: "type", prompt: "“rei”:", a: ["rex", "rēx"], why: "rēx, rēgis m. — Rōmulus prīmus rēx." }
  ],
  lectio: {
    title: "Rōma Aeterna",
    source: "Adaptado de Roma Aeterna, cap. XXXVI",
    text: `Urbs Rōma in rīpā Tiberis flūminis sita est vīgintī mīlia passuum ā marī. Hōc locō flūmen facile trānsītur, et collēs propinquī bene mūnīrī possunt. Moenia Rōmāna antīqua septem collēs sīve montēs complectuntur, quōrum haec sunt nōmina: Palātium, Capitōlium, Aventīnus, Caelius, Esquiliae, Vīminālis, Quirīnālis. Ā colle Quirīnālī ūsque ad Tiberim flūmen campus Mārtius patet.

Palātium prīmum mūnītum est. Sed ea moenia quadrāta, quibus Rōmulus, prīmus rēx Rōmānōrum, Palātium mūnīvisse dīcitur, iam prīdem periērunt; neque ūlla casa restat ex illā urbe antīquissimā, quae ā fōrmā moenium 'Rōma quadrāta' appellābātur — praeter 'casam Rōmulī' strāmentō tēctam.

Posteā Rōmānī nōbilissimī in Palātiō habitāvērunt, ibique post Iūliī Caesaris aetātem Augustus, Tiberius aliīque prīncipēs Rōmānī domōs magnificās sibi aedificāvērunt.

In Capitōliō, quī mōns arx Rōmae est, templum Iovis Optimī Maximī stat, omnium templōrum Rōmānōrum maximum atque pulcherrimum. Inter Capitōlium et Palātium situm est forum Rōmānum, quō cīvēs conveniunt: ibi templa, āra, monumenta veterum Rōmānōrum spectantur. Rōma nōn sine causā 'aeterna' appellātur!`,
    questions: [
      { q: "Ubi sita est Rōma?", options: ["In rīpā Tiberis", "In ōrā maritimā", "In monte Īdā"], a: 0 },
      { q: "Quot collēs moenia complectuntur?", options: ["Septem", "Vīgintī", "Duōs"], a: 0 },
      { q: "Quis Palātium mūnīvisse dīcitur?", options: ["Rōmulus", "Augustus", "Iūlius Caesar"], a: 0 },
      { q: "Quid in Capitōliō stat?", options: ["Templum Iovis", "Casa Rōmulī", "Theātrum"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XXXVII ================= */
COURSE.push({
  num: 37, roman: "XXXVII", icon: "🐴",
  title: "Trōia Capta",
  subtitle: "A queda de Troia (Eneida II em prosa) · ut consecutivo · abl. absoluto em série",
  grammar: [
    { title: "Vergílio em prosa (solūtīs versibus)",
      html: `Deste capítulo até o XL você lê a <b>Eneida de Vergílio</b> reescrita em prosa pelo Ørberg. É a história que todo romano sabia de cor: Troia cai, Enéias foge com o pai nos ombros e parte para fundar o povo que dará origem a Roma.` },
    { title: "tantus… ut + subjuntivo (consecutivo)",
      html: `Resultado/consequência:
      <br><span class="ex-la">Sāturnus <b>tantā</b> iūstitiā fuisse dīcitur <b>ut</b> nec servīret quisquam sub illō.</span>
      <br>= de tamanha justiça <b>que</b> ninguém era escravo sob ele.
      <br><span class="ex-la">Tantus clāmor fuit <b>ut</b> omnēs excitārentur.</span>` },
    { title: "Ablativos absolutos em cadeia",
      html: `A prosa histórica encadeia os cenários assim:
      <br><span class="ex-la"><b>Faunō mortuō</b>, Latīnus rēgnum accēpit.</span> = Morto Fauno, Latino recebeu o reino.
      <br><span class="ex-la"><b>Urbe captā</b>, Trōiānī fūgērunt.</span> · <span class="ex-la"><b>Equō in urbem ductō</b>, Trōiānī dormiēbant.</span>
      <br>Leia como: "com X feito, …"` }
  ],
  vocab: [
    { la: "incola", forms: "-ae m.", pt: "habitante", ex: "Aborīginēs incolae prīmī Italiae fuērunt." },
    { la: "iūstitia", forms: "-ae f.", pt: "justiça", ex: "Sāturnus tantā iūstitiā fuit." },
    { la: "aureus", forms: "-a -um", pt: "de ouro, dourado", ex: "Memoria aetātis aureae." },
    { la: "rēgnāre", forms: "v.", pt: "reinar", ex: "Faunus in Latiō rēgnāvit." },
    { la: "rēgnum", forms: "-ī n.", pt: "reino, poder real", ex: "Latīnus rēgnum accēpit." },
    { la: "rēgia", forms: "-ae f.", pt: "palácio real", ex: "Sōla in rēgiā erat fīlia." },
    { la: "profugus", forms: "-a -um", pt: "fugitivo, exilado", ex: "Aenēās profugus ex Trōiā vēnit." },
    { la: "benignus", forms: "-a -um", pt: "bondoso, generoso", ex: "Faunus rēx benignus erat." },
    { la: "iuventūs", forms: "-ūtis f.", pt: "juventude", ex: "Fīlius in prīmā iuventūte periit." },
    { la: "mātūrus", forms: "-a -um", pt: "maduro; pronto", ex: "Lāvīnia iam mātūra virō erat." },
    { la: "gener", forms: "-erī m.", pt: "genro", ex: "Latīnus generum externum quaerēbat." },
    { la: "ōmen", forms: "-inis n.", pt: "presságio", ex: "Ōmen deōrum rēgem terruit." },
    { la: "pāx", forms: "pācis f.", pt: "paz", ex: "Pāx inter Latīnōs et Trōiānōs facta est." },
    { la: "dolus", forms: "-ī m.", pt: "ardil, truque", ex: "Graecī dolō ūsī sunt." },
    { la: "ligneus", forms: "-a -um", pt: "de madeira", ex: "Equus ligneus ante portās stābat." },
    { la: "incendere", forms: "-disse -ēnsum", pt: "incendiar", ex: "Graecī urbem incendērunt." },
    { la: "ēvertere", forms: "-tisse -sum", pt: "destruir, derrubar", ex: "Trōia ēversa est." },
    { la: "condere", forms: "-didisse -ditum", pt: "fundar", ex: "Aenēās novam urbem condere volēbat." },
    { la: "somnus", forms: "-ī m.", pt: "sono", ex: "Trōiānī somnō vīnōque sepultī erant." },
    { la: "cīvis", forms: "-is m./f.", pt: "cidadão", ex: "Cīvēs perterritī fūgērunt." },
    { la: "sacer", forms: "-cra -crum", pt: "sagrado", ex: "Rēs sacrās sēcum tulit." },
    { la: "umbra", forms: "-ae f.", pt: "sombra; fantasma", ex: "Umbra Hectoris eī appāruit." },
    { la: "appārēre", forms: "-uisse", pt: "aparecer", ex: "In somnīs Hector appāruit." },
    { la: "quisquam", forms: "quidquam", pt: "alguém (com negação)", ex: "Nec serviēbat quisquam sub illō." },
    { la: "proprius", forms: "-a -um", pt: "próprio, particular", ex: "Nec quidquam proprium habēbat." },
    { la: "commūnis", forms: "-e", pt: "comum", ex: "Omnia commūnia omnibus erant." },
    { la: "externus", forms: "-a -um", pt: "estrangeiro, de fora", ex: "Gener externus ōmine prōmissus." }
  ],
  pensum: [
    { t: "mcq", q: "“Faunō mortuō, Latīnus rēgnum accēpit” =", options: ["Morto Fauno, Latino recebeu o reino", "Fauno morreu com Latino no reino", "Fauno matou Latino pelo reino"], a: 0,
      why: "Ablativo absoluto: 'com Fauno morto'." },
    { t: "cloze", prompt: "Sāturnus tantā iūstitiā fuit ut nēmō sub illō serv____.", options: ["-īret", "-it", "-iēbat"], a: 0,
      why: "ut consecutivo + subjuntivo imperfeito: servīret." },
    { t: "gap", prompt: "Graecī equum ___ ante portās Trōiae relīquērunt.", a: ["ligneum"], hint: "(de madeira — acusativo)",
      why: "O cavalo de madeira: o dolus mais famoso da história." },
    { t: "mcq", q: "Por que os troianos levaram o cavalo pra dentro?", options: ["Putābant equum dōnum deōrum esse", "Equus parvus erat", "Graecī id imperāvērunt"], a: 0,
      why: "Acharam que era oferenda aos deuses — timeō Danaōs et dōna ferentēs!" },
    { t: "cloze", prompt: "Urbe capt__, Aenēās cum patre fūgit.", options: ["-ā", "-am", "-a"], a: 0,
      why: "Ablativo absoluto: urbe captā." },
    { t: "build", pt: "Enéias carregou o pai nos ombros.", la: "Aenēās patrem umerīs portāvit", extra: ["pater", "umerōs"] },
    { t: "read", text: "Nocte Graecī ex equō ligneō exiērunt et portās urbis sociīs aperuērunt. Trōiānī, quī somnō vīnōque sepultī erant, resistere nōn potuērunt: urbs tōta incēnsa atque ēversa est.",
      q: "Cūr Trōiānī resistere nōn potuērunt?", options: ["Quia somnō vīnōque sepultī erant", "Quia arma nōn habēbant", "Quia portae clausae erant"], a: 0,
      why: "«somnō vīnōque sepultī» — enterrados no sono e no vinho." },
    { t: "listen", text: "Equus ligneus ante portās Trōiae stat.", options: ["Equus ligneus ante portās Trōiae stat", "Mīlitēs Graecī in equō sē occultant", "Trōia tōta nocte ārdet"], a: 0,
      why: "ligneus = de madeira; ante portās = diante das portas." },
    { t: "mcq", q: "Quem apareceu em sonho a Enéias mandando fugir?", options: ["Umbra Hectoris", "Iuppiter ipse", "Rēx Priamus"], a: 0,
      why: "O fantasma de Heitor: 'Heu fuge, nāte deā!'" },
    { t: "type", prompt: "“fundar (uma cidade)”:", a: ["condere"], why: "condere urbem — o verbo do destino de Enéias." }
  ],
  lectio: {
    title: "Trōia Capta",
    source: "Adaptado de Roma Aeterna, cap. XXXVII (Eneida II)",
    text: `Italiae incolae prīmī Aborīginēs fuērunt. Eōrum rēx Sāturnus tantā iūstitiā fuisse dīcitur ut nec servīret quisquam sub illō nec quidquam proprium habēret, sed omnia commūnia omnibus essent: ea aetās 'aurea' vocātur. Post hunc Pīcus, deinde Faunus in Latiō rēgnāvit. Faunō mortuō, Latīnus, fīlius eius, rēgnum accēpit. Sōla in rēgiā erat fīlia, nōmine Lāvīnia, iam mātūra virō — cui ōmina deōrum generum externum prōmittēbant.

Intereā trāns mare Graecī iam decem annōs Trōiam oppugnābant. Postrēmō dolō ūsī sunt: equum ligneum ingentem aedificāvērunt, in quō fortissimī mīlitēs sē occultāvērunt, et simulāvērunt sē domum nāvigāre. Trōiānī laetī equum — dōnum deōrum, ut putābant — in urbem dūxērunt!

Nocte, dum Trōiānī somnō vīnōque sepultī dormiunt, Graecī ex equō exiērunt et portās sociīs aperuērunt. Urbs tōta incēnsa atque ēversa est.

Aenēae dormientī umbra Hectoris appāruit: "Heu, fuge, nāte deā! Hostis habet mūrōs. Sacra Trōiae tēcum fer: hīs novam urbem quaere!" Aenēās patrem Anchīsēn umerīs portāns, parvum Iūlum manū dūcēns, cum sociīs ex urbe ārdentī fūgit — profugus, quī gentem Rōmānam conditūrus erat.`,
    questions: [
      { q: "Quālis rēx Sāturnus fuisse dīcitur?", options: ["Tantā iūstitiā ut nēmō servīret", "Crūdēlis et sevērus", "Bellicōsus"], a: 0 },
      { q: "Quō dolō Graecī Trōiam cēpērunt?", options: ["Equō ligneō", "Longā oppugnātiōne", "Pecūniā"], a: 0 },
      { q: "Quis Aenēae in somnīs appāruit?", options: ["Umbra Hectoris", "Venus māter", "Latīnus rēx"], a: 0 },
      { q: "Quem Aenēās umerīs portāvit?", options: ["Patrem Anchīsēn", "Fīlium Iūlum", "Uxōrem"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XXXVIII ================= */
COURSE.push({
  num: 38, roman: "XXXVIII", icon: "⛵",
  title: "Pius Aenēās",
  subtitle: "As errâncias de Enéias (Eneida III) · gerundivo de finalidade",
  grammar: [
    { title: "pius — a palavra-chave de Enéias",
      html: `<b>pius</b> não é só "piedoso": é quem cumpre o dever com os deuses, a família e a pátria. Enéias carrega o pai, o filho e os deuses de Troia — por isso é <span class="ex-la">pius Aenēās</span> na Eneida inteira. Substantivo: <span class="ex-la">pietās</span>.` },
    { title: "Gerundivo de finalidade (dar algo PARA fazer)",
      html: `<span class="ex-la">Faunus Euandrō arva <b>colenda</b> dedit.</span> = Fauno deu a Evandro campos <b>para cultivar</b>.
      <br><span class="ex-la">Nāvēs <b>aedificandās</b> cūrāvit.</span> = providenciou que se construíssem navios.
      <br>O gerundivo concorda com o objeto (arva colenda, urbem condendam).` },
    { title: "Navegação épica",
      html: `<span class="ex-la">nāvem dēdūcere</span> = lançar ao mar · <span class="ex-la">ventīs vēla dare</span> = zarpar
      <br><span class="ex-la">classem aedificāre</span> = construir a frota · <span class="ex-la">cursum tenēre/flectere</span> = manter/mudar o rumo
      <br><span class="ex-la">appellere (nāvem)</span> = aportar · <span class="ex-la">sēdēs quaerere</span> = buscar nova morada.` }
  ],
  vocab: [
    { la: "pius", forms: "-a -um", pt: "piedoso, fiel ao dever", ex: "Pius Aenēās sacra Trōiae fert." },
    { la: "pietās", forms: "-ātis f.", pt: "piedade, devoção", ex: "Pietās Aenēae nōta est." },
    { la: "sēdēs", forms: "-is f.", pt: "morada, assento", ex: "Trōiānī novās sēdēs quaerunt." },
    { la: "fātum", forms: "-ī n.", pt: "destino", ex: "Fāta Aenēān in Italiam vocant." },
    { la: "ōrāculum", forms: "-ī n.", pt: "oráculo", ex: "Ōrāculum Apollinis cōnsuluērunt." },
    { la: "mōnstrum", forms: "-ī n.", pt: "monstro; prodígio", ex: "Multa mōnstra in itinere vīdērunt." },
    { la: "unda", forms: "-ae f.", pt: "onda", ex: "Nāvēs undīs iactābantur." },
    { la: "lītus", forms: "-oris n.", pt: "praia, litoral", ex: "Ad lītus ignōtum appulērunt." },
    { la: "socius", forms: "-ī m.", pt: "companheiro, aliado", ex: "Aenēās cum sociīs nāvigat." },
    { la: "comes", forms: "-itis m./f.", pt: "companheiro (de viagem)", ex: "Paucī comitēs restābant." },
    { la: "cūnctī", forms: "-ae -a", pt: "todos (juntos)", ex: "Cūnctī nāvēs cōnscendērunt." },
    { la: "hiems", forms: "hiemis f.", pt: "inverno; tempestade", ex: "Eā hieme classem aedificāvērunt." },
    { la: "condere", forms: "-didisse -ditum", pt: "fundar (rev.)", ex: "Urbem in Crētā condidērunt." },
    { la: "dēdūcere", forms: "v.", pt: "lançar (navio) ao mar", ex: "Nāvēs dēductae sunt." },
    { la: "vēla dare", forms: "loc.", pt: "zarpar, dar velas", ex: "Ventīs vēla dedērunt." },
    { la: "appellere", forms: "-pulisse -pulsum", pt: "aportar", ex: "Ad īnsulam Dēlum appulērunt." },
    { la: "cōnscendere", forms: "-disse", pt: "embarcar; subir em", ex: "Nāvēs cōnscendērunt." },
    { la: "errāre", forms: "v.", pt: "vagar (rev.)", ex: "Septem annōs per maria errāvērunt." },
    { la: "cōnsulere", forms: "-uisse -ltum", pt: "consultar", ex: "Ōrāculum cōnsuluērunt." },
    { la: "monēre", forms: "v.", pt: "advertir, avisar", ex: "Penātēs Aenēān monuērunt." },
    { la: "antīquus", forms: "-a -um", pt: "antigo (rev.)", ex: "'Antīquam mātrem quaerite!'" },
    { la: "ignōtus", forms: "-a -um", pt: "desconhecido", ex: "Ad terram ignōtam vēnērunt." },
    { la: "trīstis", forms: "-e", pt: "triste (rev.)", ex: "Trīstēs Crētam relīquērunt." },
    { la: "pestis", forms: "-is f.", pt: "peste, praga", ex: "Pestis Trōiānōs Crētā expulit." },
    { la: "cinis", forms: "-eris m.", pt: "cinza", ex: "Ex cineribus Trōiae surgent." },
    { la: "tandem", forms: "adv.", pt: "finalmente (rev.)", ex: "Tandem Italiam vīdērunt." }
  ],
  pensum: [
    { t: "mcq", q: "Por que Enéias é chamado de pius?", options: ["Porque cumpre o dever com deuses, família e pátria", "Porque reza o dia inteiro", "Porque é pobre"], a: 0,
      why: "pietās = devoção ao dever — a virtude romana central." },
    { t: "cloze", prompt: "Faunus Euandrō arva col____ dedit.", options: ["-enda", "-ēns", "-uit"], a: 0,
      why: "Gerundivo de finalidade: arva colenda = campos para cultivar." },
    { t: "gap", prompt: "Trōiānī ventīs ___ dedērunt.", a: ["vela", "vēla"], hint: "(velas — zarpar)",
      why: "ventīs vēla dare = zarpar." },
    { t: "cloze", prompt: "Trōiānī novās sēd__ quaerēbant.", options: ["-ēs", "-is", "-ibus"], a: 0,
      why: "Acusativo plural da 3ª: sēdēs." },
    { t: "mcq", q: "“Antīquam mātrem quaerite!” — o que o oráculo quis dizer?", options: ["A terra de origem dos ancestrais troianos", "A mãe de Enéias", "A cidade de Troia"], a: 0,
      why: "O enigma: a 'mãe antiga' era a Itália, terra de Dardanus." },
    { t: "build", pt: "Enéias navega com os companheiros por mares desconhecidos.", la: "Aenēās cum sociīs per maria ignōta nāvigat", extra: ["sociōs", "marī"] },
    { t: "read", text: "Trōiānī prīmum in Crētā urbem condidērunt. Sed pestis gravis hominēs et agrōs afflīxit, et Penātēs Aenēān in somnīs monuērunt: 'Nōn Crēta vōbīs sēdēs dēstināta est: Ītaliam quaerite!'",
      q: "Cūr Trōiānī Crētam relīquērunt?", options: ["Quia pestis eōs afflīxit et Penātēs Ītaliam mōnstrāvērunt", "Quia Graecī eōs oppugnāvērunt", "Quia rēx Crētae eōs expulit"], a: 0,
      why: "A falsa parada em Creta: a peste + o aviso dos Penates." },
    { t: "listen", text: "Fāta Aenēān in Ītaliam vocant.", options: ["Fāta Aenēān in Ītaliam vocant", "Aenēās in Crētā manēre vult", "Penātēs Trōiam spectant"], a: 0,
      why: "fāta = o destino; o fio condutor da Eneida." },
    { t: "cloze", prompt: "Septem annōs per maria errāv_____.", options: ["-ērunt", "-erant", "-erint"], a: 0,
      why: "Perfeito: errāvērunt — sete anos de errância." },
    { t: "type", prompt: "“destino”:", a: ["fatum", "fātum"], why: "fātum, -ī n. — o que foi 'dito' (fārī) pelos deuses." }
  ],
  lectio: {
    title: "Pius Aenēās",
    source: "Adaptado de Roma Aeterna, cap. XXXVIII (Eneida III)",
    text: `Eā hieme quae Trōiam captam secūta est, Trōiānī profugī sub monte Īdā classem vīgintī nāvium aedificāvērunt. Prīmā aestāte pater Anchīsēs ventīs vēla dare iussit: cūnctī nāvēs cōnscendērunt, et Aenēās, lītora patriae lacrimāns relinquēns, cum sociīs in altum vectus est — novās sēdēs quaerēns, quās fāta prōmittēbant.

Prīmum in Thrāciā urbem condere cōnātus est, sed mōnstrum horrendum eum terruit. Inde ad īnsulam Dēlum appulērunt, ubi ōrāculum Apollinis cōnsuluērunt. Deus respondit: "Antīquam mātrem quaerite! Ibi domus Aenēae cūnctīs dominābitur ōrīs." Anchīsēs Crētam significārī putāvit — sed in Crētā pestis gravis hominēs agrōsque afflīxit. Tum Penātēs Aenēae in somnīs appāruērunt: "Nōn haec sēdēs vōbīs dēstināta est: est locus, Hesperiam Graecī dīcunt, Ītalia ab incolīs appellātur — illa vōbīs antīqua māter est!"

Septem annōs pius Aenēās per maria ignōta errāvit, multa mōnstra vīdit, multōs comitēs āmīsit — postrēmō patrem ipsum. At numquam fāta dēseruit: gēns Rōmāna ex cineribus Trōiae surrēctūra erat.`,
    questions: [
      { q: "Quot nāvēs Trōiānī aedificāvērunt?", options: ["Vīgintī", "Septem", "Centum"], a: 0 },
      { q: "Quid ōrāculum Apollinis iussit?", options: ["Antīquam mātrem quaerere", "Trōiam renovāre", "In Dēlō manēre"], a: 0 },
      { q: "Quae terra erat 'antīqua māter'?", options: ["Ītalia", "Crēta", "Thrācia"], a: 0 },
      { q: "Quot annōs Aenēās errāvit?", options: ["Septem", "Decem", "Ūnum"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XXXIX ================= */
COURSE.push({
  num: 39, roman: "XXXIX", icon: "🌊",
  title: "Karthāgō",
  subtitle: "Juno, a tempestade e Dido (Eneida I) · infinitivo futuro no AcI",
  grammar: [
    { title: "Infinitivo futuro no discurso indireto",
      html: `Pra reportar o futuro dentro de um AcI:
      <br><span class="ex-la">Audīverat genus Trōiānum arcem Karthāginis <b>expugnātūrum esse</b>.</span>
      <br>= Ouvira que a estirpe troiana <b>haveria de destruir</b> a cidadela de Cartago.
      <br>Forma: particípio futuro (-ūrus) + esse. É a profecia que move o ódio de Juno!` },
    { title: "memor + genitivo · verbos de memória",
      html: `<span class="ex-la"><b>memor</b> veteris bellī</span> = lembrada da velha guerra (Troia).
      <br><span class="ex-la">meminisse</b></span> = lembrar (só perfeito, como ōdisse) · <span class="ex-la">oblīvīscī</span> = esquecer (depoente) — ambos + genitivo.` },
    { title: "A cena da tempestade",
      html: `Juno pede os ventos a Éolo; Netuno acalma o mar:
      <br><span class="ex-la">Aeolus ventōs ēmīsit; procella nāvēs dispersit.</span>
      <br><span class="ex-la">Neptūnus, mare turbātum sentiēns, ventōs increpuit: 'Quōs ego…!'</span>
      <br>— a interrupção ameaçadora mais famosa da literatura latina.` }
  ],
  vocab: [
    { la: "rēgīna", forms: "-ae f.", pt: "rainha", ex: "Dīdō rēgīna Karthāginis erat." },
    { la: "arx", forms: "arcis f.", pt: "cidadela, fortaleza", ex: "Arx Karthāginis alta erat." },
    { la: "gēns", forms: "gentis f.", pt: "estirpe, povo (rev.)", ex: "Gēns Trōiāna ōlim Karthāginem dēlēbit." },
    { la: "bellicōsus", forms: "-a -um", pt: "belicoso, guerreiro", ex: "Karthāgō dīves atque bellicōsa erat." },
    { la: "dīligere", forms: "-lēxisse -lēctum", pt: "prezar, amar", ex: "Iūnō Karthāginem dīlēxit." },
    { la: "memor", forms: "-oris + gen.", pt: "lembrado de", ex: "Memor veteris bellī." },
    { la: "procella", forms: "-ae f.", pt: "tempestade, rajada", ex: "Procella nāvēs dispersit." },
    { la: "dispergere", forms: "-sisse -sum", pt: "dispersar, espalhar", ex: "Nāvēs dispersae sunt." },
    { la: "mergere", forms: "-sisse -sum", pt: "afundar", ex: "Ūna nāvis mersa est." },
    { la: "ēmittere", forms: "v.", pt: "soltar, lançar", ex: "Aeolus ventōs ēmīsit." },
    { la: "increpāre", forms: "-uisse", pt: "repreender", ex: "Neptūnus ventōs increpuit." },
    { la: "hospes", forms: "-itis m.", pt: "hóspede; estrangeiro", ex: "Dīdō hospitēs benignē accēpit." },
    { la: "hospitium", forms: "-ī n.", pt: "hospitalidade", ex: "Rēgīna hospitium Trōiānīs obtulit." },
    { la: "cāsus", forms: "-ūs m.", pt: "desgraça; acaso", ex: "Cāsūs Trōiae nārrāvit." },
    { la: "fāma", forms: "-ae f.", pt: "fama; boato", ex: "Fāma Trōiae ubīque nōta erat." },
    { la: "fortūna", forms: "-ae f.", pt: "sorte, fortuna", ex: "Fortūna profugōs Karthāginem tulit." },
    { la: "nebula", forms: "-ae f.", pt: "névoa, nuvem", ex: "Venus fīlium nebulā tēxit." },
    { la: "mīrārī", forms: "v. dep. (rev.)", pt: "admirar-se", ex: "Aenēās moenia surgentia mīrātur." },
    { la: "surgere", forms: "surrēxisse", pt: "erguer-se (rev.)", ex: "Moenia nova surgēbant." },
    { la: "benignē", forms: "adv.", pt: "com bondade", ex: "Benignē acceptī sunt." },
    { la: "spernere", forms: "sprēvisse sprētum", pt: "desprezar", ex: "Iūnō fōrmam suam sprētam esse meminerat." },
    { la: "ōlim", forms: "adv.", pt: "um dia (passado ou futuro)", ex: "Ōlim arx expugnābitur." },
    { la: "dēlēre", forms: "-ēvisse -ētum", pt: "destruir", ex: "Karthāgō dēlenda est!" },
    { la: "aequor", forms: "-oris n.", pt: "mar (superfície)", ex: "Aequor placidum factum est." },
    { la: "placidus", forms: "-a -um", pt: "calmo, plácido", ex: "Mare placidum est." },
    { la: "ignārus", forms: "-a -um", pt: "sem saber, ignorante de", ex: "Ignārī quō essent." }
  ],
  pensum: [
    { t: "mcq", q: "“Audīverat genus Trōiānum arcem expugnātūrum esse” =", options: ["Ouvira que os troianos um dia destruiriam a cidadela", "Ouviu os troianos destruindo a cidadela", "Ouvira que a cidadela destruiu os troianos"], a: 0,
      why: "Infinitivo futuro (expugnātūrum esse) no discurso indireto: a profecia." },
    { t: "cloze", prompt: "Iūnō, memor veteris bell__, Trōiānōs ōderat.", options: ["-ī", "-um", "-ō"], a: 0,
      why: "memor + genitivo: memor bellī." },
    { t: "gap", prompt: "Aeolus ventōs ___, et procella nāvēs dispersit.", a: ["emisit", "ēmīsit"], hint: "(soltou)",
      why: "Juno subornou Éolo pra soltar os ventos." },
    { t: "mcq", q: "Quem acalmou o mar?", options: ["Neptūnus", "Iuppiter", "Venus"], a: 0,
      why: "'Quōs ego…!' — Netuno repreende os ventos sem terminar a ameaça." },
    { t: "cloze", prompt: "Dīdō rēgīn__ hospitēs benignē accēpit.", options: ["-a", "-am", "-ae"], a: 0,
      why: "Sujeito: rēgīna (nominativo)." },
    { t: "build", pt: "A rainha recebeu os troianos com bondade.", la: "Rēgīna Trōiānōs benignē accēpit", extra: ["Trōiānī", "benignus"] },
    { t: "read", text: "Venus fīlium suum nebulā tēxit, nē quis eum vidēret. Aenēās ignārus per urbem novam ambulāvit et moenia surgentia mīrātus est: 'Ō fortūnātī, quōrum iam moenia surgunt!'",
      q: "Cūr nēmō Aenēān vīdit?", options: ["Quia Venus eum nebulā tēxerat", "Quia nox erat", "Quia sē occultābat in silvā"], a: 0,
      why: "Vênus protege o filho com uma névoa mágica." },
    { t: "listen", text: "Urbs antīqua fuit, Karthāgō, dīves atque bellicōsa.", options: ["Urbs antīqua fuit, Karthāgō, dīves atque bellicōsa", "Urbs nova erat, Rōma, parva atque pauper", "Īnsula magna fuit, Crēta, in marī sita"], a: 0,
      why: "A abertura do capítulo — eco do 'Urbs antiqua fuit' de Vergílio." },
    { t: "cloze", prompt: "Aenēās cāsūs Trōiae rēgīnae nārrāv___.", options: ["-it", "-ērunt", "-isse"], a: 0,
      why: "Perfeito 3ª sing.: nārrāvit — e é isso que Dido pede no jantar." },
    { t: "type", prompt: "“rainha”:", a: ["regina", "rēgīna"], why: "rēgīna, -ae f. < rēx." }
  ],
  lectio: {
    title: "Karthāgō",
    source: "Adaptado de Roma Aeterna, cap. XXXIX (Eneida I)",
    text: `Urbs antīqua fuit, Karthāgō, in ōrā Āfricae contrā Ītaliam sita, dīves atque bellicōsa. Hanc urbem Iūnō magis aliīs omnibus dīlēxisse dīcitur: hoc rēgnum omnium gentium esse volēbat. Sed audīverat genus ā Trōiānō sanguine ortum ōlim arcem Karthāginis expugnātūrum esse. Id metuēns, et memor veteris bellī quod ad Trōiam gesserat, Iūnō Trōiānōs profugōs tōtō marī arcēbat.

Cum Trōiānī ē Siciliā in altum vēla dedissent, Iūnō ad Aeolum, rēgem ventōrum, vēnit eumque ōrāvit ut ventōs ēmitteret. Aeolus pāruit: procella horrenda nāvēs dispersit, ūna mersa est. Sed Neptūnus, mare turbātum sentiēns, caput placidum undīs extulit et ventōs increpuit: "Quōs ego…! Sed mōtōs praestat compōnere flūctūs." Aequor placidum fēcit.

Aenēās cum septem nāvibus ad lītus Āfricae appulit. Venus fīlium nebulā tēxit, nē quis eum vidēret. Ignārus per urbem novam ambulāvit et moenia surgentia mīrātus est. In templō rēgīna Dīdō, pulcherrima fēmina, hospitēs benignē accēpit: "Nōn ignāra malī, miserīs succurrere discō." Nocte in convīviō rēgīna Aenēān ōrāvit ut cāsūs Trōiae ā prīncipiō nārrāret — et amōrem iam in pectore fovēbat.`,
    questions: [
      { q: "Cūr Iūnō Trōiānōs ōderat?", options: ["Quia genus Trōiānum Karthāginem ōlim dēlētūrum erat", "Quia Aenēās eam sprēverat", "Quia Karthāginem timēbat"], a: 0 },
      { q: "Quis ventōs ēmīsit?", options: ["Aeolus", "Neptūnus", "Iuppiter"], a: 0 },
      { q: "Quōmodo Venus fīlium prōtēxit?", options: ["Nebulā eum tēxit", "Gladium eī dedit", "Nāvem eī mīsit"], a: 0 },
      { q: "Quid Dīdō in convīviō ōrāvit?", options: ["Ut Aenēās cāsūs Trōiae nārrāret", "Ut Trōiānī discēderent", "Ut Aenēās sēcum pugnāret"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XL ================= */
COURSE.push({
  num: 40, roman: "XL", icon: "🔥",
  title: "Īnfēlīx Dīdō",
  subtitle: "O amor e a morte de Dido (Eneida IV) · nōn dubitō quīn · velim",
  grammar: [
    { title: "nōn dubitō quīn + subjuntivo",
      html: `"Não duvido que…":
      <br><span class="ex-la">Equidem <b>nōn dubitō quīn</b> deā nātus <b>sit</b>.</span> = Não duvido que ele seja filho de uma deusa.
      <br>Regra: dubitāre negado + quīn + subjuntivo. (Afirmativo usa num/an.)` },
    { title: "velim + subjuntivo — o desejo educado (ou trágico)",
      html: `<span class="ex-la"><b>Velim</b> prius terra mē dēvoret…</span> = Eu preferiria que a terra me engolisse antes…
      <br>velim/nōlim/mālim = subjuntivo de volō: desejo suavizado. No juramento de Dido, é trágico: ela quebra o voto ao Sychaeus morto.` },
    { title: "O vocabulário da paixão",
      html: `<span class="ex-la">amōre <b>flagrāre</b></span> = arder de amor · <span class="ex-la">vulnus amōris</span> = a ferida do amor
      <br><span class="ex-la">effigiēs? — <b>haerēre</b> in pectore</span> = ficar cravado no peito
      <br>E o fim: <span class="ex-la">rogus</span> (pira), <span class="ex-la">ēnsis</span> (espada), <span class="ex-la">morī</span> (morrer) — <span class="ex-la">"Sīc, sīc iuvat īre sub umbrās."</span>` }
  ],
  vocab: [
    { la: "īnfēlīx", forms: "-īcis", pt: "infeliz, desgraçado", ex: "Īnfēlīx Dīdō amōre flagrat." },
    { la: "flagrāre", forms: "v.", pt: "arder, queimar", ex: "Rēgīna caecō amōre flagrat." },
    { la: "virtūs", forms: "-ūtis f.", pt: "valor, coragem, virtude", ex: "Magna virī virtūs in animō versātur." },
    { la: "vultus", forms: "-ūs m.", pt: "rosto, expressão", ex: "Vultus verbaque haerent fīxa in pectore." },
    { la: "haerēre", forms: "-sisse", pt: "estar cravado, grudado", ex: "Verba in pectore haerent." },
    { la: "quiēs", forms: "-ētis f.", pt: "descanso, sossego", ex: "Cūra membrīs quiētem nōn dat." },
    { la: "alloquī", forms: "v. dep.", pt: "dirigir a palavra a", ex: "Annam sorōrem alloquitur." },
    { la: "dubitāre", forms: "v.", pt: "duvidar; hesitar", ex: "Nōn dubitō quīn deā nātus sit." },
    { la: "coniugium", forms: "-ī n.", pt: "casamento, união", ex: "Nūllī virō coniugiō mē iungam." },
    { la: "iungere", forms: "iūnxisse iūnctum", pt: "unir, juntar", ex: "Coniugiō iungī nōlēbat." },
    { la: "fallere", forms: "fefellisse falsum", pt: "enganar, trair", ex: "Prīmus amor mē morte fefellit." },
    { la: "succumbere", forms: "-cubuisse", pt: "sucumbir, ceder", ex: "Huius amōrī succumbere potuī." },
    { la: "fatērī", forms: "v. dep. (rev.)", pt: "confessar", ex: "Fateor, Anna: hic sōlus animum flexit." },
    { la: "flectere", forms: "-xisse -xum", pt: "dobrar, comover", ex: "Hic sōlus animum meum flexit." },
    { la: "dēvorāre", forms: "v.", pt: "devorar, engolir", ex: "Velim terra mē dēvoret!" },
    { la: "pudor", forms: "-ōris m.", pt: "pudor, honra", ex: "Ante, Pudor, quam tē violō!" },
    { la: "spēlunca", forms: "-ae f.", pt: "caverna, gruta", ex: "In spēluncam eandem fūgērunt." },
    { la: "coniūnx", forms: "-iugis m./f.", pt: "cônjuge", ex: "Sychaeus coniūnx mortuus erat." },
    { la: "rogus", forms: "-ī m.", pt: "pira funerária", ex: "Rogum in ātriō exstruī iussit." },
    { la: "ēnsis", forms: "-is m.", pt: "espada", ex: "Ēnse Trōiānō incubuit." },
    { la: "morī", forms: "v. dep. (mortuum)", pt: "morrer", ex: "'Sīc moriēmur inultae?'" },
    { la: "relinquere", forms: "(rev.)", pt: "abandonar", ex: "Aenēās rēgīnam relīquit." },
    { la: "iubēre", forms: "(rev.)", pt: "ordenar", ex: "Iuppiter Aenēān discēdere iussit." },
    { la: "furor", forms: "-ōris m.", pt: "loucura, fúria", ex: "Furor et īra rēgīnam cēpērunt." },
    { la: "exsequī", forms: "v. dep.", pt: "executar, cumprir", ex: "Iussa deōrum exsequitur." },
    { la: "umbra", forms: "-ae f. (rev.)", pt: "sombra; o mundo dos mortos", ex: "Iuvat īre sub umbrās." }
  ],
  pensum: [
    { t: "cloze", prompt: "Nōn dubitō quīn deā nātus ___.", options: ["sit", "est", "erit"], a: 0,
      why: "nōn dubitō quīn + subjuntivo: nātus sit." },
    { t: "mcq", q: "“Velim prius terra mē dēvoret” =", options: ["Eu preferiria que a terra me engolisse antes", "A terra vai me engolir primeiro", "Quero devorar a terra primeiro"], a: 0,
      why: "velim + subjuntivo: o desejo — aqui, o juramento trágico de Dido." },
    { t: "gap", prompt: "At rēgīna iam caecō amōre ___.", a: ["flagrat"], hint: "(arde)",
      why: "A primeira frase do capítulo: Dido arde de amor cego." },
    { t: "cloze", prompt: "Vultus verbaque haerent fīx__ in pectore.", options: ["-a", "-us", "-ī"], a: 0,
      why: "Neutro plural concordando com vultus + verba: fīxa." },
    { t: "mcq", q: "Quem mandou Enéias partir de Cartago?", options: ["Iuppiter, per Mercurium", "Dīdō ipsa", "Anna soror"], a: 0,
      why: "Mercúrio traz a ordem: 'nāvigā! Ītaliam quaere!' — o dever vence o amor." },
    { t: "build", pt: "A rainha fala à irmã Ana.", la: "Rēgīna Annam sorōrem alloquitur", extra: ["sorōris", "alloquuntur"] },
    { t: "read", text: "Mercurius Aenēān monuit: 'Rēgnī rērumque tuārum oblīte! Uxōrius urbem pulchram aedificās? Ascaniō dēbētur Ītalia!' Aenēās, iussīs deōrum territus, classem parārī iussit — sed rēgīnam vītāre nōn potuit.",
      q: "Cūr Aenēās Karthāginem relīquit?", options: ["Quia Iuppiter per Mercurium eum discēdere iussit", "Quia Dīdōnem nōn amābat", "Quia Karthāgō pauper erat"], a: 0,
      why: "Não por desamor: por fātum. É o conflito central da Eneida." },
    { t: "listen", text: "At rēgīna iam caecō amōre flagrat.", options: ["At rēgīna iam caecō amōre flagrat", "At rēx īrā magnā ārdet", "Et Dīdō placidē dormit"], a: 0,
      why: "A abertura do livro IV: caecus amor = amor cego." },
    { t: "cloze", prompt: "Dīdō ēns__ Trōiānō incubuit.", options: ["-e", "-em", "-is"], a: 0,
      why: "Ablativo (instrumento): ēnse — sobre a espada de Enéias." },
    { t: "type", prompt: "“espada” (a palavra épica):", a: ["ensis", "ēnsis"], why: "ēnsis, -is m. — gladius é a prosa, ēnsis é a poesia." }
  ],
  lectio: {
    title: "Īnfēlīx Dīdō",
    source: "Adaptado de Roma Aeterna, cap. XL (Eneida IV)",
    text: `At rēgīna iam caecō amōre flagrat. Magna virī virtūs et gentis honōs in animō versātur; vultus verbaque haerent fīxa in pectore, neque cūra membrīs placidam quiētem dat. Prīmā lūce Annam sorōrem alloquitur: "Anna soror, quālis hospes tēctīs nostrīs successit! Equidem nōn dubitō quīn deā nātus sit. Fateor: post mortem miserī Sychaeī coniugis hic sōlus animum meum flexit. Sed velim prius terra mē dēvoret, quam tē violō, Pudor!" Anna tamen sorōrī suāsit nē amōrī resisteret.

Diē quōdam, dum in silvīs vēnantur, tempestās orta est: Dīdō et Aenēās in eandem spēluncam fūgērunt. Ille diēs prīmus malōrum causa fuit: Dīdō coniugium vocat culpam suam.

Sed Iuppiter Mercurium mīsit, quī Aenēān monēret: "Rēgnī rērumque tuārum oblīte! Ītalia Ascaniō dēbētur: nāvigā!" Aenēās, iussīs deōrum territus, classem parārī iussit. Frūstrā rēgīna ōrāvit, flēvit, furuit: pius Aenēās fāta sequī dēbēbat.

Tum īnfēlīx Dīdō rogum exstruī iussit, et — classe Trōiānā iam vēla dante — ēnse Trōiānō incubuit: "Sīc, sīc iuvat īre sub umbrās. Exoriāre, aliquis nostrīs ex ossibus ultor!" Ex illā morte ōdium aeternum inter Karthāginem et Rōmam nātum esse dīcitur.`,
    questions: [
      { q: "Quem Dīdō prīmā lūce alloquitur?", options: ["Annam sorōrem", "Aenēān", "Mercurium"], a: 0 },
      { q: "Ubi Dīdō et Aenēās coniūnctī sunt?", options: ["In spēluncā", "In templō", "In rēgiā"], a: 0 },
      { q: "Quis Aenēān discēdere iussit?", options: ["Iuppiter per Mercurium", "Anna", "Dīdō"], a: 0 },
      { q: "Quōmodo Dīdō periit?", options: ["Ēnse Trōiānō incubuit", "In marī mersa est", "Morbō cōnsūmpta est"], a: 0 }
    ]
  }
});

/* ============================================================
   Nomes e glossário do Liber II
   ============================================================ */
NOMINA.push(
  { la: "Aenēās", pt: "Enéias — herói troiano, ancestral dos romanos (acus. Aenēān)" },
  { la: "Vergilius", pt: "Vergílio — poeta da Eneida (70–19 a.C.)" },
  { la: "Trōia", pt: "Troia — cidade destruída pelos gregos" },
  { la: "Trōiānus", pt: "troiano" },
  { la: "Dīdō", pt: "Dido — rainha e fundadora de Cartago (gen. Dīdōnis)" },
  { la: "Anchīsēs", pt: "Anquises — pai de Enéias (acus. Anchīsēn)" },
  { la: "Ascanius", pt: "Ascânio/Iulo — filho de Enéias" },
  { la: "Iūlus", pt: "Iulo — outro nome de Ascânio (origem do nome 'Júlio'!)" },
  { la: "Hector", pt: "Heitor — maior herói de Troia (gen. Hectoris)" },
  { la: "Latīnus", pt: "Latino — rei do Lácio, pai de Lavínia" },
  { la: "Lāvīnia", pt: "Lavínia — princesa prometida a Enéias" },
  { la: "Sāturnus", pt: "Saturno — rei da idade de ouro" },
  { la: "Faunus", pt: "Fauno — rei do Lácio" },
  { la: "Euander", pt: "Evandro — grego que fundou aldeia no Palatino" },
  { la: "Aeolus", pt: "Éolo — rei dos ventos" },
  { la: "Sychaeus", pt: "Siqueu — primeiro marido (morto) de Dido" },
  { la: "Anna", pt: "Ana — irmã de Dido" },
  { la: "Latium", pt: "Lácio — região de Roma" },
  { la: "Tiberis", pt: "o rio Tibre (rev.)" },
  { la: "Aventīnus", pt: "Aventino — uma das 7 colinas" },
  { la: "Esquiliae", pt: "Esquilino — uma das 7 colinas" },
  { la: "Dēlos", pt: "Delos — ilha do oráculo de Apolo" },
  { la: "Apollō", pt: "Apolo — deus dos oráculos (gen. Apollinis)" },
  { la: "Penātēs", pt: "Penates — deuses do lar troianos" },
  { la: "Hesperia", pt: "Hespéria — 'terra do poente', a Itália" },
  { la: "Mercurius", pt: "Mercúrio — mensageiro (rev.)" }
);

Object.assign(EXTRA_GLOSS, {
  "sive": "ou, ou seja (rev.)", "quorum": "dos quais (rev.)", "quadratus": "quadrado",
  "quadrata": "quadrada", "stramentum": "palha", "stramento": "palha (abl.)",
  "complectuntur": "abraçam, cercam", "arcebat": "mantinha longe", "arcere": "afastar",
  "gesserat": "tinha travado (guerra)", "vela": "velas", "dedissent": "tivessem dado",
  "oravit": "implorou", "paruit": "obedeceu", "extulit": "ergueu",
  "praestat": "é melhor", "componere": "acalmar, compor", "motos": "agitados",
  "succurrere": "socorrer", "fovebat": "alimentava, nutria", "venantur": "caçam",
  "orta": "surgida", "culpam": "culpa", "oblite": "ó esquecido! (voc.)",
  "debetur": "é devida", "frustra": "em vão", "flevit": "chorou",
  "furuit": "enfureceu-se", "exstrui": "ser erguida", "incubuit": "deitou-se sobre",
  "exoriare": "que surjas! (imperativo-desejo)", "ossibus": "ossos (abl.)",
  "ultor": "vingador", "odium": "ódio", "natum": "nascido", "solutis": "soltos",
  "versibus": "versos (abl.)", "affixit": "atingiu", "afflixit": "atingiu, assolou",
  "destinata": "destinada", "dominabitur": "dominará", "oris": "costas, praias (abl.)",
  "significari": "ser indicado", "amisit": "perdeu", "deseruit": "abandonou",
  "surrectura": "que haveria de surgir", "sepulti": "enterrados, imersos",
  "simulaverunt": "fingiram", "occultaverunt": "esconderam", "ingens": "enorme",
  "ingentem": "enorme (acus.)", "nate": "ó nascido! (voc.)", "ardenti": "em chamas (abl.)",
  "conditurus": "que haveria de fundar", "iactabantur": "eram jogados",
  "appulerunt": "aportaram", "appulit": "aportou", "consuluerunt": "consultaram",
  "horrendum": "horrendo", "terruit": "aterrorizou", "inde": "dali, em seguida",
  "intereā": "enquanto isso", "interea": "enquanto isso", "postremo": "por fim (rev.)",
  "equidem": "certamente, eu cá", "successit": "chegou, entrou", "violo": "violo, quebro",
  "suasit": "aconselhou", "resisteret": "resistisse", "quodam": "um certo (abl.)",
  "eandem": "a mesma (acus.) (rev.)", "iussis": "ordens (abl.)", "parari": "ser preparada",
  "dante": "dando (abl.)", "aeternum": "eterno", "contra": "em frente a; contra"
});
