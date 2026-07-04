/* ============================================================
   LATINVM — LIBER II: Capitula XLVI–L (lote 3)
   Eutrópio, Aulo Gélio, Lívio XXI–XLV, Cornélio Nepote:
   da república nascente a Aníbal e à Grécia libertada.
   ============================================================ */

/* ================= CAPITVLVM XLVI ================= */
COURSE.push({
  num: 46, roman: "XLVI", icon: "🚜",
  title: "Post Rēgēs Exāctōs",
  subtitle: "Eutrópio · cônsules e ditadores · Cincinato · Pirro · placuit ut/nē",
  grammar: [
    { title: "Eutrópio: o historiador fácil",
      html: `Depois de Lívio, um alívio: <b>Eutrópio</b> (séc. IV d.C.) escreveu um <i>Breviārium</i> — resumo da história romana em frases curtas e diretas. É o autor perfeito pra ganhar velocidade de leitura.` },
    { title: "placuit ut / nē + subjuntivo",
      html: `A fórmula das decisões públicas:
      <br><span class="ex-la"><b>Placuit nē</b> imperium longius quam annuum habērent.</span>
      <br>= decidiu-se que não tivessem o poder por mais de um ano.
      <br>Datas: <span class="ex-la">annō ducentēsimō ab urbe conditā</span> = no ano 200 da fundação (a.u.c.).` },
    { title: "dictātor — o freio de emergência",
      html: `Em crise, os romanos nomeavam um <b>dictātor</b> com poder total por <b>6 meses no máximo</b>. O exemplo moral: <b>Cincinnātus</b>, chamado do arado (<span class="ex-la">ab arātrō</span>) pra salvar o exército — vence em 16 dias e <b>devolve o poder</b> e volta pra roça.` }
  ],
  vocab: [
    { la: "exigere", forms: "-ēgisse -āctum", pt: "expulsar; exigir", ex: "Post rēgēs exāctōs." },
    { la: "potestās", forms: "-ātis f.", pt: "poder, autoridade", ex: "Alter alterum potestāte coercēbat." },
    { la: "coercēre", forms: "v.", pt: "conter, refrear", ex: "Ut alter alterum coercēret." },
    { la: "dictātor", forms: "-ōris m.", pt: "ditador (magistrado de emergência)", ex: "Dictātor dictus est." },
    { la: "arātrum", forms: "-ī n.", pt: "arado", ex: "Cincinnātus ab arātrō arcessītus est." },
    { la: "arāre", forms: "v.", pt: "arar", ex: "Agrum suum arābat." },
    { la: "obsidēre", forms: "-sēdisse -sessum", pt: "sitiar, cercar", ex: "Exercitus Rōmānus obsidēbātur." },
    { la: "līberāre", forms: "(rev.)", pt: "libertar", ex: "Exercitum obsidiōne līberāvit." },
    { la: "tribūnus", forms: "-ī m.", pt: "tribuno (da plebe)", ex: "Tribūnī plēbis creātī sunt." },
    { la: "plēbs", forms: "plēbis f.", pt: "a plebe", ex: "Plēbs ā patribus sēcessit." },
    { la: "sēcēdere", forms: "-cessisse", pt: "retirar-se, fazer secessão", ex: "Plēbs in montem sacrum sēcessit." },
    { la: "elephantus", forms: "-ī m.", pt: "elefante", ex: "Pyrrhus elephantōs habēbat." },
    { la: "incognitus", forms: "-a -um", pt: "desconhecido", ex: "Elephantī Rōmānīs incognitī erant." },
    { la: "victōria", forms: "(rev.)", pt: "vitória", ex: "Victōria Pyrrhī cāra fuit." },
    { la: "captīvus", forms: "-ī m.", pt: "prisioneiro (de guerra)", ex: "Captīvōs sine pretiō reddidit." },
    { la: "honorāre", forms: "v.", pt: "honrar", ex: "Rōmānōs honorāvit." },
    { la: "mīrārī", forms: "(rev.)", pt: "admirar", ex: "Pyrrhus virtūtem Rōmānōrum mīrātus est." },
    { la: "pauper", forms: "-eris", pt: "pobre", ex: "Cōnsulēs Rōmānī saepe pauperēs erant." },
    { la: "lēgātiō", forms: "-ōnis f.", pt: "embaixada", ex: "Lēgātiō ad Pyrrhum missa est." },
    { la: "corrumpere", forms: "-rūpisse -ruptum", pt: "corromper, subornar", ex: "Fabricius corrumpī nōn potuit." },
    { la: "aurum", forms: "-ī n.", pt: "ouro", ex: "Aurō corrumpī nōn potuit." },
    { la: "sōl (sole flecti)", forms: "loc.", pt: "—", ex: "Facilius sōl ā cursū suō āvertī potest quam Fabricius ā virtūte." },
    { la: "annuum imperium", forms: "loc.", pt: "poder anual", ex: "Placuit nē imperium longius quam annuum esset." },
    { la: "modestia", forms: "-ae f.", pt: "moderação", ex: "Modestia Cincinnātī laudātur." },
    { la: "obsidiō", forms: "-ōnis f.", pt: "cerco", ex: "Exercitum obsidiōne līberāvit." }
  ],
  pensum: [
    { t: "cloze", prompt: "Placuit nē imperium longius quam annuum habē____.", options: ["-rent", "-bant", "-bunt"], a: 0,
      why: "placuit nē + subjuntivo imperfeito: habērent." },
    { t: "mcq", q: "Por que DOIS cônsules?", options: ["Pra um conter o outro se quisesse ser mau", "Porque um só não dava conta", "Por tradição etrusca"], a: 0,
      why: "«ut alter alterum coercēret» — o freio mútuo." },
    { t: "gap", prompt: "Cincinnātus ab ___ arcessītus dictātor factus est.", a: ["aratro", "arātrō"], hint: "(do arado)",
      why: "O fazendeiro-ditador: vence e devolve o poder em 16 dias." },
    { t: "mcq", q: "O que assustou os romanos nas batalhas contra Pirro?", options: ["Os elefantes, animais desconhecidos", "Os navios gregos", "As catapultas"], a: 0,
      why: "Elefantes de guerra — primeira vez na Itália." },
    { t: "cloze", prompt: "Fabricius aur__ corrumpī nōn potuit.", options: ["-ō", "-um", "-ī"], a: 0,
      why: "Ablativo de meio: aurō = com ouro." },
    { t: "build", pt: "O ditador libertou o exército do cerco.", la: "Dictātor exercitum obsidiōne līberāvit", extra: ["exercituī", "obsidiōnem"] },
    { t: "read", text: "Pyrrhus, virtūtem Rōmānōrum mīrātus, captīvōs sine pretiō Rōmam remīsit. Dē Fabriciō, quem aurō corrumpere nōn potuerat, dīxit: 'Facilius sōl ā cursū suō āvertī potest quam Fabricius ā virtūte!'",
      q: "Quid Pyrrhus dē Fabriciō dīxit?", options: ["Facilius sōlem āvertī quam Fabricium ā virtūte", "Fabricium stultum esse", "Fabricium aurum amāre"], a: 0,
      why: "O elogio do inimigo: incorruptível como o curso do sol." },
    { t: "listen", text: "Prō ūnō rēge duo cōnsulēs creātī sunt.", options: ["Prō ūnō rēge duo cōnsulēs creātī sunt", "Prō duōbus cōnsulibus ūnus rēx creātus est", "Dictātor prō cōnsule bellum gessit"], a: 0,
      why: "A arquitetura da república em uma frase." },
    { t: "cloze", prompt: "Plēbs in montem sacrum sēcess__.", options: ["-it", "-ērunt", "-erat"], a: 0,
      why: "plēbs é singular: sēcessit — e daí nasceram os tribunos." },
    { t: "type", prompt: "“arado”:", a: ["aratrum", "arātrum"], why: "arātrum — de onde Cincinato foi chamado." }
  ],
  lectio: {
    title: "Post Rēgēs Exāctōs",
    source: "Adaptado de Roma Aeterna, cap. XLVI (Eutrópio I–III)",
    text: `Hinc cōnsulēs coepēre, prō ūnō rēge duo, hāc causā creātī ut, sī ūnus malus esse voluisset, alter eum, habēns potestātem similem, coercēret. Et placuit nē imperium longius quam annuum habērent.

Cum plēbs ā patribus opprimerētur, in montem sacrum sēcessit: tum tribūnī plēbis creātī sunt, quī plēbem contrā nōbilēs dēfenderent.

Ōlim exercitus Rōmānus in Algidō monte obsidēbātur. L. Quīnctius Cincinnātus, quī agrum suum ipse arābat, dictātor dictus est: ab arātrō arcessītus, sūdōrem tersit, togam sūmpsit — et intrā sēdecim diēs hostēs vīcit, exercitum obsidiōne līberāvit, et imperiō dēpositō ad arātrum rediit!

Posteā Pyrrhus, rēx Ēpīrī, cum elephantīs, quōs Rōmānī numquam vīderant, in Italiam vēnit. Prīmō vīcit — sed victōriā cārā: "Sī iterum sīc vīcerō, sine mīlitibus in Ēpīrum redībō!" Virtūtem Rōmānōrum mīrātus, captīvōs sine pretiō remīsit. Fabricium, lēgātum pauperem, aurō corrumpere cōnātus est; ille recūsāvit. Tum Pyrrhus: "Facilius sōl ā cursū suō āvertī potest quam Fabricius ā virtūte!" Postrēmō Pyrrhus victus Italiam relīquit.`,
    questions: [
      { q: "Cūr duo cōnsulēs creātī sunt?", options: ["Ut alter alterum coercēret", "Ut bella duo gererent", "Ut rēx et cōnsul essent"], a: 0 },
      { q: "Unde Cincinnātus arcessītus est?", options: ["Ab arātrō", "Ē senātū", "Ex exsiliō"], a: 0 },
      { q: "Quae animālia Pyrrhus sēcum dūxit?", options: ["Elephantōs", "Camēlōs", "Leōnēs"], a: 0 },
      { q: "Potuitne Pyrrhus Fabricium corrumpere?", options: ["Nōn potuit: nec aurō nec minīs", "Potuit aurō", "Potuit honōribus"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XLVII ================= */
COURSE.push({
  num: 47, roman: "XLVII", icon: "🏺",
  title: "Graecī et Rōmānī",
  subtitle: "Aulo Gélio · a cronologia comparada · interrogativa indireta no mais-que-perfeito",
  grammar: [
    { title: "Aulo Gélio e as Noites Áticas",
      html: `<b>Aulus Gellius</b> (séc. II d.C.) juntou nas <i>Noctēs Atticae</i> curiosidades de tudo que lia. Neste capítulo: uma <b>linha do tempo</b> comparando gregos e romanos — quem viveu quando, de Sólon a Aníbal.` },
    { title: "Interrogativa indireta no subjuntivo",
      html: `<span class="ex-la">Excerpēbāmus <b>quibus temporibus</b> Graecī Rōmānīque virī <b>flōruissent</b>.</span>
      <br>= anotávamos <b>em que épocas teriam florescido</b>… (mais-que-perfeito do subjuntivo)
      <br><span class="ex-la">flōrēre</span> (aetāte) = estar no auge da vida.` },
    { title: "As sincronias que valem saber",
      html: `Enquanto <b>Sólon</b> dava leis a Atenas, Roma tinha os Tarquínios; <b>Sócrates</b> morre (399 a.C.) quando Roma briga com os vizinhos; <b>Alexandre</b> conquista o Oriente enquanto Roma luta contra os samnitas — os dois mundos só se chocam de verdade com <b>Pirro</b> e depois <b>Aníbal</b>.` }
  ],
  vocab: [
    { la: "illūstris", forms: "-e", pt: "ilustre", ex: "Virī illūstrēs Graecī et Rōmānī." },
    { la: "flōrēre", forms: "-uisse", pt: "florescer; estar no auge", ex: "Quibus temporibus flōruerint." },
    { la: "cōnspectus", forms: "-ūs m.", pt: "visão de conjunto, panorama", ex: "Cōnspectum aetātum habēre." },
    { la: "sermō", forms: "-ōnis m.", pt: "conversa", ex: "In sermōnibus dē virīs clārīs." },
    { la: "temerē", forms: "adv.", pt: "sem pensar, ao acaso", ex: "Nē temerē dīcerēmus." },
    { la: "excerpere", forms: "-psisse -ptum", pt: "extrair, anotar (de livros)", ex: "Ex librīs chronicīs excerpēbāmus." },
    { la: "ingenium", forms: "-ī n.", pt: "talento, gênio", ex: "Vel ingeniō vel imperiō nōbilēs." },
    { la: "īnsignis", forms: "-e", pt: "notável", ex: "Virī īnsignēs ante bellum Pūnicum." },
    { la: "lēx dare", forms: "loc.", pt: "dar leis", ex: "Solōn lēgēs Athēniēnsibus dedit." },
    { la: "sapiēns", forms: "-entis m.", pt: "sábio", ex: "Septem sapientēs Graeciae." },
    { la: "philosophus", forms: "-ī m.", pt: "filósofo", ex: "Sōcratēs philosophus Athēnīs vīvēbat." },
    { la: "poēta", forms: "(rev.)", pt: "poeta", ex: "Homērus poēta antīquissimus." },
    { la: "tragoedia", forms: "-ae f.", pt: "tragédia", ex: "Tragoediās docēbat Sophoclēs." },
    { la: "damnāre", forms: "v.", pt: "condenar", ex: "Sōcratēs capitis damnātus est." },
    { la: "venēnum", forms: "-ī n.", pt: "veneno", ex: "Venēnō necātus est." },
    { la: "orbis terrārum", forms: "loc.", pt: "o mundo", ex: "Alexander orbem terrārum petēbat." },
    { la: "aequālis", forms: "-e", pt: "contemporâneo; igual", ex: "Aequālēs fuērunt Plato et camillus?" },
    { la: "circiter", forms: "adv.", pt: "aproximadamente", ex: "Annīs circiter quadrāgintā post." },
    { la: "memoriae prōdere", forms: "loc.", pt: "registrar pra posteridade", ex: "Scrīptōrēs memoriae prōdidērunt." },
    { la: "chronicus", forms: "-a -um", pt: "cronológico", ex: "Librī quī 'chronicī' appellantur." },
    { la: "commentārius", forms: "-ī m.", pt: "caderno de notas", ex: "In hōc commentāriō scrīpsimus." },
    { la: "cōnferre", forms: "contulisse", pt: "comparar; reunir", ex: "Aetātēs Graecōrum cum Rōmānīs cōnferre." },
    { la: "posteritās", forms: "-ātis f.", pt: "posteridade", ex: "Posteritātī trāditum est." },
    { la: "vetustās", forms: "-ātis f.", pt: "antiguidade", ex: "Vetustās omnia dēvorat." }
  ],
  pensum: [
    { t: "cloze", prompt: "Excerpēbāmus quibus temporibus virī illūstrēs flōru______.", options: ["-issent", "-ērunt", "-erant"], a: 0,
      why: "Interrogativa indireta: subjuntivo (flōruissent)." },
    { t: "mcq", q: "“flōrēre aetāte” significa:", options: ["estar no auge da vida", "gostar de flores", "envelhecer"], a: 0,
      why: "A metáfora padrão para o apogeu de alguém." },
    { t: "gap", prompt: "Sōcratēs ___ necātus est.", a: ["veneno", "venēnō"], hint: "(com veneno — ablativo)",
      why: "A cicuta, 399 a.C." },
    { t: "mcq", q: "Quem deu leis aos atenienses?", options: ["Solōn", "Sōcratēs", "Alexander"], a: 0,
      why: "Sólon, um dos sete sábios — na época dos Tarquínios em Roma." },
    { t: "cloze", prompt: "Virī vel ingeni__ vel imperi__ nōbilēs fuērunt.", options: ["-ō / -ō", "-um / -um", "-ī / -ī"], a: 0,
      why: "Ablativo de respeito: nobres pelo talento ou pelo comando." },
    { t: "build", pt: "Os sábios gregos floresceram antes da guerra púnica.", la: "Sapientēs Graecī ante bellum Pūnicum flōruērunt", extra: ["sapientium", "bellō"] },
    { t: "read", text: "Alexander, rēx Macedonum, eā aetāte orbem terrārum armīs petēbat quā Rōmānī cum Samnītibus, gente Italiae mediae, bella gerēbant. Neuter alterum nōverat: duo mundī nōndum coniūnctī erant.",
      q: "Quid Rōmānī agēbant dum Alexander Orientem vincit?", options: ["Cum Samnītibus bella gerēbant", "Graeciam petēbant", "Karthāginem dēlēbant"], a: 0,
      why: "A sincronia mais impressionante: Alexandre e Roma nem se conheciam." },
    { t: "listen", text: "Sōcratēs philosophus Athēnīs capitis damnātus est.", options: ["Sōcratēs philosophus Athēnīs capitis damnātus est", "Solōn lēgēs Athēniēnsibus dedit", "Homērus poēta caecus fuit"], a: 0,
      why: "capitis damnāre = condenar à morte." },
    { t: "cloze", prompt: "Ex librīs quī 'chronicī' appellantur excerp______.", options: ["-ēbāmus", "-iēbāmur", "-tī sunt"], a: 0,
      why: "1ª plural do imperfeito: excerpēbāmus — Gélio fala de si." },
    { t: "type", prompt: "“filósofo”:", a: ["philosophus"], why: "Palavra grega — como quase todo o vocabulário da cultura." }
  ],
  lectio: {
    title: "Graecī et Rōmānī",
    source: "Adaptado de Roma Aeterna, cap. XLVII (Aulo Gélio XVII.21)",
    text: `Ut cōnspectum quendam aetātum antīquissimārum habērēmus, nē in sermōnibus temerē aliquid dē virīs clārīs dīcerēmus, excerpēbāmus ex librīs quī 'chronicī' appellantur, quibus temporibus flōruissent Graecī simul atque Rōmānī virī, quī vel ingeniō vel imperiō nōbilēs īnsignēsque fuissent post Rōmam conditam ante secundum bellum Carthāginiēnsium.

Tarquiniō Superbō Rōmae rēgnante, Solōn Athēnīs lēgēs dedit — ūnus ex septem illīs sapientibus. Eādem ferē aetāte Pȳthagorās philosophus in Italiam vēnit.

Annīs post Rōmam līberātam circiter centum, Sōcratēs philosophus Athēnīs capitis damnātus venēnōque necātus est — cum Rōmānī cum fīnitimīs suīs bella gererent. Deinde Plato et Aristotelēs flōruērunt, dum Rōma cum Samnītibus pugnat.

Alexander, rēx Macedonum, eā aetāte orbem terrārum armīs petēbat: neuter tamen alterum mundum nōverat! Prīmum Pyrrhī bellō, deinde bellīs Pūnicīs, Graecī Rōmānīque vērē coniūnctī sunt — et tum virī Rōmānī, quōs mox vidēbimus, cum illūstribus Graecōrum cōnferrī coepērunt.`,
    questions: [
      { q: "Cūr Gellius aetātēs excerpēbat?", options: ["Nē temerē dē virīs clārīs dīceret", "Ut librum vēnderet", "Ut Graecōs vituperāret"], a: 0 },
      { q: "Quis Athēnīs lēgēs dedit, Tarquiniō rēgnante?", options: ["Solōn", "Sōcratēs", "Aristotelēs"], a: 0 },
      { q: "Quōmodo Sōcratēs periit?", options: ["Venēnō necātus est", "In bellō cecidit", "Senectūte mortuus est"], a: 0 },
      { q: "Nōveratne Alexander Rōmānōs?", options: ["Nōn: mundī nōndum coniūnctī erant", "Bene nōverat", "Cum iīs pugnāvit"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XLVIII ================= */
COURSE.push({
  num: 48, roman: "XLVIII", icon: "🐘",
  title: "Bellum Pūnicum Secundum",
  subtitle: "Aníbal: o juramento, os Alpes, Canas, Zama (Lívio XXI–XXX)",
  grammar: [
    { title: "scrīptūrus sum — o anúncio de Lívio",
      html: `<span class="ex-la">Bellum maximē omnium memorābile <b>scrīptūrus sum</b>.</span>
      <br>= Estou prestes a escrever a guerra mais memorável de todas.
      <br>Particípio futuro + sum = "vou/estou para" (conjugação perifrástica).` },
    { title: "Ablativo absoluto com nome próprio",
      html: `<span class="ex-la"><b>Hannibale duce</b>, Carthāginiēnsēs bellum gessēre.</span>
      <br>= sob o comando de Aníbal… (sem particípio: 'sendo Aníbal o líder')
      <br>Igual: <span class="ex-la">Rōmulō rēge · Cicerōne cōnsule.</span>` },
    { title: "A guerra em 4 atos",
      html: `① O menino Aníbal <b>jura ódio eterno</b> a Roma no altar. ② Atravessa os <b>Alpes</b> com elefantes. ③ <b>Cannae</b> (216 a.C.): a pior derrota de Roma — mas Roma não negocia. ④ Cipião invade a África: <b>Zama</b> (202 a.C.), Aníbal vencido.` }
  ],
  vocab: [
    { la: "memorābilis", forms: "-e", pt: "memorável", ex: "Bellum maximē memorābile." },
    { la: "validus", forms: "-a -um", pt: "forte, poderoso", ex: "Cīvitātēs validiōrēs numquam fuērunt." },
    { la: "opēs", forms: "-um f. pl.", pt: "recursos, riquezas", ex: "Validiōrēs opibus cīvitātēs." },
    { la: "rōbur", forms: "-oris n.", pt: "força, vigor", ex: "Tantum rōboris numquam fuit." },
    { la: "certāre", forms: "v.", pt: "competir, lutar", ex: "Odiīs magis quam vīribus certāvērunt." },
    { la: "iūs iūrandum", forms: "iūris iūrandī n.", pt: "juramento", ex: "Iūre iūrandō adāctus est." },
    { la: "altāria", forms: "-ium n. pl.", pt: "altar", ex: "Altāribus admōtus tāctīs sacrīs iūrāvit." },
    { la: "trāicere", forms: "-iēcisse -iectum", pt: "atravessar, transportar", ex: "Exercitum in Hispāniam trāiēcit." },
    { la: "saltus", forms: "-ūs m.", pt: "desfiladeiro, passo", ex: "Saltūs Alpium trānsiit." },
    { la: "nix", forms: "nivis f.", pt: "neve", ex: "Omnia nive oppleta erant." },
    { la: "iūmentum", forms: "-ī n.", pt: "animal de carga", ex: "Iūmenta in nive lābēbantur." },
    { la: "aciēs", forms: "(rev.)", pt: "linha de batalha", ex: "Aciēs Rōmāna circumventa est." },
    { la: "clādēs", forms: "-is f.", pt: "desastre, derrota", ex: "Clādēs Cannēnsis maxima fuit." },
    { la: "circumvenīre", forms: "v.", pt: "cercar", ex: "Rōmānī ab hostibus circumventī sunt." },
    { la: "cōnsul (cadere)", forms: "loc.", pt: "—", ex: "Cōnsul Aemilius Paulus cecidit." },
    { la: "dēspērāre", forms: "v.", pt: "desesperar", ex: "Rōmānī tamen dē salūte nōn dēspērāvērunt." },
    { la: "pācīscī", forms: "pactum dep.", pt: "negociar, pactuar", ex: "Dē pāce pacīscī nōluērunt." },
    { la: "anulus (aureus)", forms: "loc.", pt: "—", ex: "Trēs modiōs ānulōrum aureōrum Carthāginem mīsit." },
    { la: "modius", forms: "-ī m.", pt: "módio (medida)", ex: "Trēs modiī ānulōrum." },
    { la: "revocāre", forms: "v.", pt: "chamar de volta", ex: "Hannibal in Āfricam revocātus est." },
    { la: "committere (proelium)", forms: "loc.", pt: "travar batalha", ex: "Proelium apud Zamam commissum est." },
    { la: "condiciō", forms: "-ōnis f.", pt: "condição, termos", ex: "Condiciōnēs pācis gravēs fuērunt." },
    { la: "triumphus", forms: "-ī m.", pt: "triunfo (desfile do vencedor)", ex: "Scīpiō triumphum ēgit." },
    { la: "cognōmen accipere", forms: "loc.", pt: "receber cognome", ex: "Scīpiō 'Āfricānus' appellātus est." }
  ],
  pensum: [
    { t: "cloze", prompt: "Bellum maximē memorābile scrīpt____ sum.", options: ["-ūrus", "-us", "-ūrum"], a: 0,
      why: "Perifrástica: scrīptūrus sum = estou prestes a escrever." },
    { t: "mcq", q: "“Hannibale duce” =", options: ["sob o comando de Aníbal", "o líder Aníbal (sujeito)", "para o chefe Aníbal"], a: 0,
      why: "Ablativo absoluto sem particípio." },
    { t: "gap", prompt: "Hannibal puer novem annōrum ōdium in Rōmānōs ___.", a: ["iuravit", "iūrāvit"], hint: "(jurou)",
      why: "O juramento no altar, aos 9 anos, antes de ir pra Hispânia." },
    { t: "mcq", q: "O que fez de Canas a pior derrota de Roma?", options: ["A cavalaria cercou e aniquilou o exército inteiro", "Roma perdeu a frota", "Aníbal capturou a cidade"], a: 0,
      why: "O envolvimento duplo: ~50 mil mortos num dia." },
    { t: "cloze", prompt: "Omnia niv__ oppleta erant in Alpibus.", options: ["-e", "-em", "-is"], a: 0,
      why: "Ablativo: nive — a travessia impossível." },
    { t: "build", pt: "Aníbal atravessou os Alpes com elefantes.", la: "Hannibal Alpēs cum elephantīs trānsiit", extra: ["Alpium", "elephantōs"] },
    { t: "read", text: "Post clādem Cannēnsem Hannibal trēs modiōs ānulōrum aureōrum Carthāginem mīsit, quōs ex digitīs equitum Rōmānōrum occīsōrum dētrāxerat. Rōmānī tamen dē pāce pacīscī nōluērunt: numquam post Cannēnsem pugnam dē salūte dēspērāvērunt.",
      q: "Quid Hannibal Carthāginem mīsit?", options: ["Trēs modiōs ānulōrum aureōrum", "Captīvōs Rōmānōs", "Elephantōs"], a: 0,
      why: "Os anéis dos cavaleiros mortos — a prova macabra da vitória." },
    { t: "listen", text: "Hannibal Alpēs cum elephantīs trānsiit.", options: ["Hannibal Alpēs cum elephantīs trānsiit", "Scīpiō in Āfricam trāiēcit", "Rōmānī Alpēs mūnīvērunt"], a: 0,
      why: "A imagem eterna da segunda guerra púnica." },
    { t: "cloze", prompt: "Proelium apud Zamam commiss__ est.", options: ["-um", "-us", "-a"], a: 0,
      why: "proelium (neutro): commissum est — 202 a.C., o fim." },
    { t: "type", prompt: "“neve”:", a: ["nix"], why: "nix, nivis f. — a inimiga alpina de Aníbal." }
  ],
  lectio: {
    title: "Bellum Pūnicum Secundum",
    source: "Adaptado de Roma Aeterna, cap. XLVIII (Lívio XXI–XXX)",
    text: `Bellum maximē omnium memorābile quae umquam gesta sunt scrīptūrus sum: quod Hannibale duce Carthāginiēnsēs cum populō Rōmānō gessēre. Neque validiōrēs opibus ūllae inter sē cīvitātēs contulērunt arma, et odiīs prope maiōribus certāvērunt quam vīribus.

Fāma est Hannibalem, annōrum fermē novem, altāribus admōtum, tāctīs sacrīs iūrāvisse: sē, cum prīmum posset, hostem fore populō Rōmānō!

Vir factus, Hannibal ingentī exercitū cum elephantīs Alpēs trānsiit — per saltūs nive opplētōs, ubi hominēs iūmentaque lābēbantur. In Italiam dēscendit et Rōmānōs proeliīs continuīs vīcit. Apud Cannās clādēs maxima fuit: aciēs Rōmāna circumventa paene tōta caesa est, cōnsul alter cecidit. Hannibal trēs modiōs ānulōrum aureōrum, ex digitīs equitum occīsōrum dētractōrum, Carthāginem mīsit. Rōmānī tamen dē pāce pacīscī nōluērunt!

Postrēmō P. Cornēlius Scīpiō bellum in Āfricam trānstulit. Hannibal, in patriam revocātus, apud Zamam victus est. Pāx Carthāginiēnsibus gravibus condiciōnibus data est; Scīpiō, triumphō magnificō in urbem revectus, 'Āfricānus' appellātus est.`,
    questions: [
      { q: "Quid Hannibal puer iūrāvit?", options: ["Sē hostem fore populō Rōmānō", "Sē rēgem Carthāginis fore", "Sē numquam pugnātūrum"], a: 0 },
      { q: "Quā clāde Rōmānī maximē afflīctī sunt?", options: ["Cannēnsī", "Zamēnsī", "Alpīnā"], a: 0 },
      { q: "Voluēruntne Rōmānī post Cannās pācem?", options: ["Nōluērunt", "Statim pācem fēcērunt", "Hannibalī sē dedidērunt"], a: 0 },
      { q: "Ubi Hannibal victus est?", options: ["Apud Zamam", "Apud Cannās", "In Alpibus"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XLIX ================= */
COURSE.push({
  num: 49, roman: "XLIX", icon: "🎖️",
  title: "Hannibal",
  subtitle: "A biografia por Cornélio Nepote · tantō…quantō · quotiēscumque",
  grammar: [
    { title: "Nepote: o biógrafo",
      html: `<b>Cornēlius Nepōs</b> (séc. I a.C.) escreveu vidas de generais estrangeiros — e abre a de Aníbal com um elogio ao inimigo: o maior general contra o povo mais valente.` },
    { title: "tantō… quantō + comparativo",
      html: `<span class="ex-la">Hannibal <b>tantō</b> praestitit cēterōs imperātōrēs prūdentiā <b>quantō</b> populus Rōmānus antecēdit fortitūdine cūnctās natiōnēs.</span>
      <br>= superou os outros generais na medida em que Roma supera os povos em coragem. (ablativo de medida)` },
    { title: "quotiēscumque · nisi + invidia",
      html: `<span class="ex-la"><b>Quotiēscumque</b> cum Rōmānīs congressus est, semper discessit superior.</span> = todas as vezes que…
      <br><span class="ex-la">Quod <b>nisi</b> domī cīvium suōrum invidiā dēbilitātus esset, Rōmānōs vidētur superāre potuisse.</span> = e se não fosse a inveja dos concidadãos… (irreal do passado)` }
  ],
  vocab: [
    { la: "excellēns", forms: "-entis", pt: "excelente, superior", ex: "Dē excellentibus ducibus." },
    { la: "prūdentia", forms: "-ae f.", pt: "inteligência prática", ex: "Prūdentiā cēterōs praestitit." },
    { la: "fortitūdō", forms: "-inis f.", pt: "coragem", ex: "Fortitūdine Rōmānī antecēdunt." },
    { la: "praestāre", forms: "-stitisse", pt: "superar; garantir", ex: "Cēterōs imperātōrēs praestitit." },
    { la: "antecēdere", forms: "v.", pt: "superar, ir à frente", ex: "Populus Rōmānus natiōnēs antecēdit." },
    { la: "natiō", forms: "-ōnis f.", pt: "nação, povo", ex: "Cūnctae natiōnēs." },
    { la: "congredī", forms: "-gressum dep.", pt: "enfrentar, medir-se com", ex: "Quotiēscumque congressus est, vīcit." },
    { la: "superior", forms: "-ius", pt: "vencedor; superior", ex: "Semper superior discessit." },
    { la: "invidia", forms: "-ae f.", pt: "inveja", ex: "Invidiā cīvium dēbilitātus est." },
    { la: "dēbilitāre", forms: "v.", pt: "enfraquecer", ex: "Domī invidiā dēbilitātus." },
    { la: "odium cōnservāre", forms: "loc.", pt: "guardar ódio", ex: "Odium paternum cōnservāvit." },
    { la: "hērēditās", forms: "-ātis f.", pt: "herança", ex: "Odium velut hērēditāte relictum." },
    { la: "patria pellere", forms: "loc.", pt: "expulsar da pátria", ex: "Patriā pulsus est." },
    { la: "aliēnus", forms: "-a -um", pt: "alheio, de outrem", ex: "Aliēnīs opibus bellum gessit." },
    { la: "dēponere", forms: "-posuisse", pt: "depor, abandonar", ex: "Animum hostīlem numquam dēposuit." },
    { la: "venēnum (sūmere)", forms: "(rev.)", pt: "—", ex: "Venēnum sūmpsit nē Rōmānīs trāderētur." },
    { la: "custōdia", forms: "-ae f.", pt: "custódia, vigilância", ex: "Custōdiam Rōmānōrum effūgit." },
    { la: "senectūs", forms: "-ūtis f.", pt: "velhice", ex: "In senectūte quoque bella gessit." },
    { la: "comparāre", forms: "v.", pt: "comparar; preparar", ex: "Cum Rōmānīs comparātus." },
    { la: "callidus", forms: "-a -um", pt: "astuto", ex: "Dux callidissimus fuit." },
    { la: "īnsidiātor", forms: "-ōris m.", pt: "quem arma cilada", ex: "Īnsidiīs semper ūsus est." },
    { la: "perpetuus", forms: "-a -um", pt: "perpétuo", ex: "Odium perpetuum in Rōmānōs." },
    { la: "trādere (hostī)", forms: "(rev.)", pt: "entregar", ex: "Nē Rōmānīs trāderētur." },
    { la: "memoria dignus", forms: "loc.", pt: "digno de memória", ex: "Vir memoriā dignissimus." }
  ],
  pensum: [
    { t: "cloze", prompt: "Hannibal tant__ cēterōs praestitit prūdentiā quant__ Rōmānī fortitūdine antecēdunt.", options: ["-ō / -ō", "-um / -um", "-us / -us"], a: 0,
      why: "tantō…quantō: ablativo de medida na comparação dupla." },
    { t: "mcq", q: "“Quotiēscumque congressus est, superior discessit” =", options: ["Todas as vezes que enfrentou, saiu vencedor", "Certa vez enfrentou o superior e saiu", "Quando quis, saiu por cima"], a: 0,
      why: "quotiēscumque = toda vez que; superior discēdere = sair vencedor." },
    { t: "gap", prompt: "Hannibal domī cīvium suōrum ___ dēbilitātus est.", a: ["invidia", "invidiā"], hint: "(pela inveja)",
      why: "Nepote culpa a política interna cartaginesa." },
    { t: "mcq", q: "Segundo Nepote, o que Aníbal herdou do pai?", options: ["O ódio a Roma, como uma herança", "O comando da Hispânia", "Uma fortuna"], a: 0,
      why: "«odium paternum velut hērēditāte relictum»." },
    { t: "cloze", prompt: "Hannibal venēnum sūmpsit nē Rōmānīs trāder____.", options: ["-ētur", "-et", "-ent"], a: 0,
      why: "nē + subjuntivo imperfeito passivo: pra não ser entregue." },
    { t: "build", pt: "Aníbal nunca depôs o ânimo hostil contra Roma.", la: "Hannibal animum hostīlem in Rōmānōs numquam dēposuit", extra: ["Rōmam", "hostis"] },
    { t: "read", text: "Patriā pulsus, Hannibal ad rēgēs Orientis cōnfūgit eōsque contrā Rōmam armāvit. Postrēmō, cum Rōmānī eum sibi trādī postulārent, venēnum, quod semper sēcum habēbat, sūmpsit — nē vīvus in hostium potestātem venīret.",
      q: "Cūr Hannibal venēnum sūmpsit?", options: ["Nē vīvus Rōmānīs trāderētur", "Quia aeger erat", "Quia rēx eum damnāverat"], a: 0,
      why: "O fim do velho leão: livre até na morte." },
    { t: "listen", text: "Nēmō dubitat quīn Hannibal dux callidissimus fuerit.", options: ["Nēmō dubitat quīn Hannibal dux callidissimus fuerit", "Omnēs dubitant num Hannibal callidus fuerit", "Hannibal dubitāvit quīn Rōmānī fortēs essent"], a: 0,
      why: "nēmō dubitat quīn + subj. perfeito — revisão do cap. XL!" },
    { t: "cloze", prompt: "Odium patern__ velut hērēditāte relictum cōnservāvit.", options: ["-um", "-ī", "-ō"], a: 0,
      why: "Concordância com odium (neutro): paternum." },
    { t: "type", prompt: "“inveja”:", a: ["invidia"], why: "invidia — a que venceu Aníbal por dentro." }
  ],
  lectio: {
    title: "Hannibal",
    source: "Adaptado de Roma Aeterna, cap. XLIX (Cornélio Nepote)",
    text: `Sī vērum est — quod nēmō dubitat — populum Rōmānum omnēs gentēs virtūte superāvisse, nōn est īnfitiandum Hannibalem tantō praestitisse cēterōs imperātōrēs prūdentiā, quantō populus Rōmānus antecēdit fortitūdine cūnctās natiōnēs. Nam quotiēscumque cum eō in Italiā congressus est, semper discessit superior. Quod nisi domī cīvium suōrum invidiā dēbilitātus esset, Rōmānōs vidētur superāre potuisse.

Odium paternum ergā Rōmānōs, velut hērēditāte relictum, sīc cōnservāvit ut prius animam quam id dēposuerit: quī quidem, patriā pulsus et aliēnārum opum indigēns, numquam dēstitit animō bellāre cum Rōmānīs.

Nam ad Antiochum et ad Prūsiam, rēgēs Orientis, cōnfūgit eōsque contrā Rōmam armāvit. Postrēmō, cum lēgātī Rōmānī eum sibi trādī postulārent, Hannibal, nē vīvus in hostium potestātem venīret, venēnum sūmpsit quod semper sēcum habēre cōnsuēverat.

Sīc vir fortissimus, multīs variīsque perfūnctus labōribus, annō acquiēvit septuāgēsimō — līber usque ad mortem, hostis Rōmānōrum usque ad mortem.`,
    questions: [
      { q: "Quā rē Hannibal cēterōs imperātōrēs praestitit?", options: ["Prūdentiā", "Dīvitiīs", "Pulchritūdine"], a: 0 },
      { q: "Quid Hannibalem domī dēbilitāvit?", options: ["Invidia cīvium", "Morbus", "Paupertās"], a: 0 },
      { q: "Ad quōs Hannibal patriā pulsus cōnfūgit?", options: ["Ad rēgēs Orientis", "Ad Rōmānōs", "In Hispāniam"], a: 0 },
      { q: "Quōmodo Hannibal mortuus est?", options: ["Venēnum sūmpsit", "In proeliō cecidit", "Ā Rōmānīs occīsus est"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM L ================= */
COURSE.push({
  num: 50, roman: "L", icon: "🕊️",
  title: "Graecia Līberāta",
  subtitle: "Flaminino e a liberdade da Grécia (Lívio XXXI–XLV) · datação consular",
  grammar: [
    { title: "Datação por cônsules (abl. absoluto)",
      html: `<span class="ex-la"><b>P. Sulpiciō Galbā C. Aurēliō cōnsulibus</b>, bellum initum est.</span>
      <br>= no consulado de Sulpício Galba e Aurélio… O ano romano se diz pelos dois cônsules — decore o padrão, aparece em TUDO.
      <br>Também: <span class="ex-la">annō quīngentēsimō quīnquāgēsimō ab urbe conditā</span> (a.u.c.).` },
    { title: "Periochae — os resumos",
      html: `Dos 142 livros de Lívio, só 35 sobreviveram. Dos perdidos restam <b>Periochae</b>: resumos antigos de cada livro. O Ørberg mistura texto integral e periochae — você lê os dois estilos.` },
    { title: "A cena do Istmo (196 a.C.)",
      html: `Nos jogos ístmicos, o arauto proclama que Roma <b>liberta os gregos</b>: sem guarnições, sem tributo, com suas leis. A alegria foi tanta que <span class="ex-la">āvēs, quae supervolābant, vōce tantā perculsae dēcidisse dīcuntur!</span>` }
  ],
  vocab: [
    { la: "inīre (bellum)", forms: "loc.", pt: "iniciar (guerra)", ex: "Bellum cum Philippō initum est." },
    { la: "mandāre", forms: "v.", pt: "encarregar, confiar", ex: "Bellum cōnsulī mandātum est." },
    { la: "proelium equestre", forms: "loc.", pt: "combate de cavalaria", ex: "Equestribus proeliīs prosperē pugnāvit." },
    { la: "prosperē", forms: "adv.", pt: "com sucesso", ex: "Prosperē pugnātum est." },
    { la: "faucēs", forms: "-ium f. pl.", pt: "desfiladeiro; garganta", ex: "In faucibus Ēpīrī pugnāvit." },
    { la: "fugāre", forms: "v.", pt: "pôr em fuga", ex: "Rēgem fugātum coēgit revertī." },
    { la: "cōgere", forms: "coēgisse coāctum", pt: "forçar; reunir", ex: "Coēgit eum in rēgnum revertī." },
    { la: "amīcitiam recipere", forms: "loc.", pt: "receber na aliança", ex: "Achaeī in amīcitiam receptī sunt." },
    { la: "dēvincere", forms: "-vīcisse -victum", pt: "vencer completamente", ex: "Philippus dēvictus est." },
    { la: "lūdī Īsthmicī", forms: "loc.", pt: "jogos ístmicos", ex: "Ad lūdōs Īsthmicōs Graecī convēnērunt." },
    { la: "praecō", forms: "-ōnis m.", pt: "arauto", ex: "Praecō lībertātem prōnūntiāvit." },
    { la: "prōnūntiāre", forms: "v.", pt: "proclamar", ex: "Līberōs esse Graecōs prōnūntiāvit." },
    { la: "praesidium", forms: "-ī n.", pt: "guarnição", ex: "Sine praesidiīs līberī erunt." },
    { la: "tribūtum", forms: "-ī n.", pt: "tributo", ex: "Sine tribūtō vīvent." },
    { la: "immūnis", forms: "-e", pt: "isento", ex: "Immūnēs ā tribūtō." },
    { la: "gaudium", forms: "-ī n.", pt: "alegria", ex: "Gaudium incrēdibile fuit." },
    { la: "percellere", forms: "-culisse -culsum", pt: "abalar, derrubar", ex: "Āvēs vōce perculsae dēcidērunt." },
    { la: "supervolāre", forms: "v.", pt: "voar por cima", ex: "Āvēs supervolābant." },
    { la: "grātēs agere", forms: "loc.", pt: "dar graças", ex: "Grātēs Rōmānīs ēgērunt." },
    { la: "corōna", forms: "-ae f.", pt: "coroa (de flores/louro)", ex: "Flāminīnum corōnīs ōrnāvērunt." },
    { la: "servātor", forms: "-ōris m.", pt: "salvador", ex: "'Servātōrem' eum appellāvērunt." },
    { la: "trānsferre", forms: "-tulisse -lātum", pt: "transferir", ex: "Bellum in Asiam trānslātum est." },
    { la: "vexāre", forms: "v.", pt: "assolar, devastar", ex: "Thessaliam vexāvit." },
    { la: "vīcīnus", forms: "-a -um", pt: "vizinho", ex: "Thessalia vīcīna Macedoniae est." }
  ],
  pensum: [
    { t: "cloze", prompt: "P. Sulpiciō C. Aurēliō cōnsul____, bellum initum est.", options: ["-ibus", "-ēs", "-um"], a: 0,
      why: "Datação consular: ablativo absoluto (cōnsulibus)." },
    { t: "mcq", q: "O que o arauto proclamou nos jogos ístmicos?", options: ["Que os gregos eram livres, sem guarnição nem tributo", "Que a Grécia era província romana", "Que Filipe voltara ao trono"], a: 0,
      why: "A 'liberdade da Grécia' — o gesto de propaganda mais famoso de Roma." },
    { t: "gap", prompt: "Gaudium tantum fuit ut āvēs vōce perculsae ___ dīcantur.", a: ["decidisse", "dēcidisse"], hint: "(ter caído)",
      why: "O grito que derrubou pássaros em pleno voo!" },
    { t: "cloze", prompt: "Achaeī in amīciti__ receptī sunt.", options: ["-am", "-ā", "-ae"], a: 0,
      why: "in + acusativo (movimento figurado): in amīcitiam." },
    { t: "mcq", q: "Quem venceu Filipe V?", options: ["T. Quīnctius Flāminīnus", "Scīpiō Āfricānus", "Cincinnātus"], a: 0,
      why: "Flaminino, o filo-heleno — em Cinoscéfalas (197 a.C.)." },
    { t: "build", pt: "O arauto proclamou que os gregos eram livres.", la: "Praecō līberōs esse Graecōs prōnūntiāvit", extra: ["Graecī", "līberī"] },
    { t: "read", text: "Audītā vōce praecōnis, Graecī prīmō tacuērunt, velut nōn crēdentēs; deinde, iterātā prōnūntiātiōne, tantus clāmor ortus est ut āvēs supervolantēs dēciderent. Flāminīnum 'servātōrem līberātōremque' Graeciae appellāvērunt.",
      q: "Quōmodo Graecī prīmō sē gessērunt?", options: ["Tacuērunt, velut nōn crēdentēs", "Statim clāmāvērunt", "Fūgērunt"], a: 0,
      why: "O silêncio da incredulidade antes da explosão de alegria." },
    { t: "listen", text: "Praecō lībertātem Graecōrum prōnūntiāvit.", options: ["Praecō lībertātem Graecōrum prōnūntiāvit", "Philippus lībertātem Graecīs dedit", "Cōnsul bellum Graecīs indīxit"], a: 0,
      why: "praecō = arauto; a voz da proclamação." },
    { t: "cloze", prompt: "Bellum posteā in Asi__ trānslātum est.", options: ["-am", "-ā", "-a"], a: 0,
      why: "in + acusativo: pra Ásia (contra Antíoco)." },
    { t: "type", prompt: "“alegria”:", a: ["gaudium"], why: "gaudium — a palavra do Istmo." }
  ],
  lectio: {
    title: "Graecia Līberāta",
    source: "Adaptado de Roma Aeterna, cap. L (Lívio XXXI–XLV)",
    text: `Annō quīngentēsimō quīnquāgēsimō prīmō ab urbe conditā, P. Sulpiciō Galbā C. Aurēliō cōnsulibus, bellum cum rēge Philippō initum est, paucīs mēnsibus post pācem Carthāginiēnsibus datam. Id bellum P. Sulpiciō mandātum est, quī in Macedoniam exercitum dūxit et equestribus proeliīs prosperē cum Philippō pugnāvit.

Deinde T. Quīnctius Flāminīnus cōnsul adversus Philippum fēlīciter pugnāvit in faucibus Ēpīrī, fugātumque coēgit in rēgnum revertī. Achaeī aliīque Graecī in amīcitiam Rōmānōrum receptī sunt. Postrēmō Philippus apud Cynoscephalās dēvictus pācem petīvit.

Tum rēs memorābilis facta est. Ad lūdōs Īsthmicōs, quō tōta Graecia convēnerat, praecō in mediō stadiō prōnūntiāvit: "Senātus Rōmānus et T. Quīnctius imperātor omnēs Graecōs līberōs esse iubent, sine praesidiīs, immūnēs ā tribūtō, suīs lēgibus ūtentēs!"

Audītā vōce, Graecī prīmō tacuērunt velut nōn crēdentēs; deinde, iterātā prōnūntiātiōne, tantum gaudium tantusque clāmor ortus est ut āvēs, quae supervolābant, perculsae dēcidisse dīcantur. Flāminīnum 'servātōrem līberātōremque Graeciae' corōnīs ōrnātum appellāvērunt.`,
    questions: [
      { q: "Quōmodo Rōmānī annōs numerābant?", options: ["Cōnsulibus et ab urbe conditā", "Ā nātīvitāte Chrīstī", "Ā prīmā Olympiade tantum"], a: 0 },
      { q: "Quis Philippum dēvīcit?", options: ["Flāminīnus", "Sulpicius", "Scīpiō"], a: 0 },
      { q: "Quid praecō prōnūntiāvit?", options: ["Graecōs līberōs esse", "Graeciam prōvinciam esse", "Bellum novum"], a: 0 },
      { q: "Quid āvibus factum esse dīcitur?", options: ["Clāmōre perculsae dēcidērunt", "Fūgērunt in Macedoniam", "Cantāvērunt"], a: 0 }
    ]
  }
});
