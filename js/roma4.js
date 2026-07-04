/* ============================================================
   LATINVM — LIBER II: Capitula LI–LVI (lote final!)
   Dos elógios arcaicos dos Cipiões ao Somnium Scipionis de
   Cícero — o fim do curso Ørberg.
   ============================================================ */

/* ================= CAPITVLVM LI ================= */
COURSE.push({
  num: 51, roman: "LI", icon: "🪦",
  title: "Scīpiō Aemiliānus",
  subtitle: "Latim ARCAICO nas tumbas dos Cipiões · Cartago destruída (146 a.C.)",
  grammar: [
    { title: "Latim arcaico: lendo as inscrições",
      html: `As tumbas dos Cipiões guardam o latim mais antigo que você vai ler. As chaves de conversão:
      <table><tr><th>arcaico</th><th>clássico</th></tr>
      <tr><td class="la">quei</td><td class="la">quī</td></tr>
      <tr><td class="la">quoius</td><td class="la">cuius</td></tr>
      <tr><td class="la">Cnaivod (abl.)</td><td class="la">Cnaeō</td></tr>
      <tr><td class="la">parisuma</td><td class="la">parissima (= pār)</td></tr>
      <tr><td class="la">cōnsol · aidīlis</td><td class="la">cōnsul · aedīlis</td></tr>
      <tr><td class="la">-os = -us · oi = ū · duonoro = bonōrum</td><td class="la"></td></tr></table>` },
    { title: "prōgnātus + ablativo de origem",
      html: `<span class="ex-la">Cornēlius Lūcius Scīpiō Barbātus, <b>Cnaivōd patre prōgnātus</b></span> = nascido do pai Cneu.
      <br>Clássico: <span class="ex-la">patre nātus/ortus</span> — origem no ablativo, sem preposição.` },
    { title: "Karthāgō dēlenda — o fim de Cartago",
      html: `Catão terminava todo discurso com <span class="ex-la">"Cēterum cēnseō <b>Karthāginem esse dēlendam</b>!"</span> (gerundivo + AcI). Em 146 a.C., <b>Scīpiō Aemiliānus</b> destruiu Cartago — e chorou sobre as ruínas, citando Homero: temia que um dia Roma tivesse o mesmo destino.` }
  ],
  vocab: [
    { la: "sepulcrum", forms: "-ī n.", pt: "sepulcro, túmulo", ex: "Sepulcra Scīpiōnum restant." },
    { la: "titulus", forms: "(rev.)", pt: "inscrição, epitáfio", ex: "Titulus in sepulcrō scrīptus." },
    { la: "prōgnātus", forms: "-a -um + abl.", pt: "nascido de", ex: "Cnaeō patre prōgnātus." },
    { la: "sapiēns", forms: "(rev.)", pt: "sábio", ex: "Fortis vir sapiēnsque." },
    { la: "fōrma", forms: "(rev.)", pt: "beleza; forma", ex: "Quoius fōrma virtūtī parissima fuit." },
    { la: "cēnsor", forms: "-ōris m.", pt: "censor (magistrado)", ex: "Cōnsul, cēnsor, aedīlis fuit." },
    { la: "aedīlis", forms: "-is m.", pt: "edil (magistrado)", ex: "Aedīlis apud vōs fuit." },
    { la: "subigere", forms: "-ēgisse -āctum", pt: "subjugar", ex: "Omnem Lūcāniam subēgit." },
    { la: "obses", forms: "-idis m.", pt: "refém", ex: "Obsidēs abdūxit." },
    { la: "abdūcere", forms: "v.", pt: "levar embora", ex: "Obsidēsque abdūcit." },
    { la: "dīlēctus", forms: "-ūs m.", pt: "recrutamento", ex: "Dīlēctūs mīlitum āctus est." },
    { la: "cēnsēre", forms: "-uisse cēnsum", pt: "opinar; votar", ex: "Cēnseō Karthāginem esse dēlendam." },
    { la: "ruīna", forms: "-ae f.", pt: "ruína", ex: "Super ruīnās urbis flēvit." },
    { la: "flēre", forms: "(rev.)", pt: "chorar", ex: "Scīpiō flēvisse dīcitur." },
    { la: "fortūna (mūtārī)", forms: "loc.", pt: "—", ex: "Fortūnam urbium mūtārī posse sciēbat." },
    { la: "excidium", forms: "-ī n.", pt: "destruição", ex: "Excidium Karthāginis." },
    { la: "septimāna? — diēs septimus", forms: "loc.", pt: "—", ex: "Septimō diē urbs capta est." },
    { la: "resistere", forms: "-stitisse", pt: "resistir", ex: "Karthāginiēnsēs ācriter restitērunt." },
    { la: "dēdere (sē)", forms: "-didisse", pt: "render-se", ex: "Multī sē dēdidērunt." },
    { la: "incendium", forms: "-ī n.", pt: "incêndio", ex: "Incendium XVII diēs dūrāvit." },
    { la: "dūrāre", forms: "v.", pt: "durar", ex: "Bellum trēs annōs dūrāvit." },
    { la: "aemulus", forms: "-a -um", pt: "rival", ex: "Karthāgō aemula imperiī Rōmānī." },
    { la: "vestīgium (urbis)", forms: "(rev.)", pt: "vestígio", ex: "Vix vestīgia urbis restant." },
    { la: "posteritās", forms: "(rev.)", pt: "posteridade", ex: "Posteritātī trāditum est." },
    { la: "fatum (urbium)", forms: "(rev.)", pt: "destino", ex: "Idem fātum Rōmae timēbat." }
  ],
  pensum: [
    { t: "mcq", q: "No latim arcaico, QUEI e QUOIUS são:", options: ["quī e cuius", "quis e quibus", "quem e quōrum"], a: 0,
      why: "As grafias antigas das tumbas dos Cipiões." },
    { t: "cloze", prompt: "Scīpiō Barbātus, Cnaeō patre prōgnāt___.", options: ["-us", "-ō", "-um"], a: 0,
      why: "prōgnātus concorda com o sujeito; a origem fica no ablativo." },
    { t: "gap", prompt: "Cēterum cēnseō Karthāginem esse ___!", a: ["delendam", "dēlendam"], hint: "(que deve ser destruída)",
      why: "O bordão de Catão: gerundivo no AcI." },
    { t: "mcq", q: "Quem destruiu Cartago em 146 a.C.?", options: ["Scīpiō Aemiliānus", "Scīpiō Āfricānus maior", "Catō ipse"], a: 0,
      why: "O neto adotivo do vencedor de Zama." },
    { t: "cloze", prompt: "Incendium urbis XVII diēs dūrāv___.", options: ["-it", "-ērunt", "-erat"], a: 0,
      why: "incendium (sing.): dūrāvit — 17 dias de fogo." },
    { t: "build", pt: "Cipião chorou sobre as ruínas da cidade.", la: "Scīpiō super ruīnās urbis flēvit", extra: ["ruīnīs", "urbem"] },
    { t: "read", text: "Urbe captā, Scīpiō Aemiliānus super ruīnās Karthāginis flēvisse dīcitur, versūs Homērī recitāns dē excidiō Trōiae. Interrogātus cūr flēret, respondit: 'Fortūnam urbium mūtārī posse sciō — et idem fātum Rōmae aliquandō timeō.'",
      q: "Cūr Scīpiō super ruīnās flēvit?", options: ["Quia idem fātum Rōmae timēbat", "Quia mīlitēs āmīserat", "Quia Karthāginem amābat"], a: 0,
      why: "A lição trágica: nenhum império é eterno — nem Roma." },
    { t: "listen", text: "Karthāgō dēlēta est annō sescentēsimō octāvō ab urbe conditā.", options: ["Karthāgō dēlēta est annō sescentēsimō octāvō ab urbe conditā", "Karthāgō condita est ante Rōmam", "Karthāgō numquam capta est"], a: 0,
      why: "146 a.C. = 608 a.u.c. — o fim da rival." },
    { t: "cloze", prompt: "Vix vestīgia urb__ antīquae restant.", options: ["-is", "-ī", "-em"], a: 0,
      why: "Genitivo: urbis — 'mal restam vestígios da cidade'." },
    { t: "type", prompt: "“túmulo”:", a: ["sepulcrum"], why: "sepulcrum — onde o latim arcaico sobreviveu." }
  ],
  lectio: {
    title: "Scīpiō Aemiliānus",
    source: "Adaptado de Roma Aeterna, cap. LI",
    text: `In sepulcrō Scīpiōnum, quod adhūc restat viā Appiā, titulī antīquissimī leguntur. Ecce titulus Scīpiōnis Barbātī, litterīs prīscīs scrīptus: CORNELIVS LVCIVS SCIPIO BARBATVS, CNAIVOD PATRE PROGNATVS, FORTIS VIR SAPIENSQVE, QVOIVS FORMA VIRTVTEI PARISVMA FVIT, CONSOL CENSOR AIDILIS QVEI FVIT APVD VOS — id est, sermōne classicō: 'Cnaeō patre prōgnātus, fortis vir sapiēnsque, cuius fōrma virtūtī parissima fuit; cōnsul, cēnsor, aedīlis quī fuit apud vōs.'

Posteā, cum Karthāgō vīrēs recēpisset, Catō senex in senātū omnēs sententiās sīc claudēbat: "Cēterum cēnseō Karthāginem esse dēlendam!" Tertium igitur bellum Pūnicum initum est.

P. Cornēlius Scīpiō Aemiliānus, nepōs Āfricānī per adoptiōnem, urbem obsēdit. Karthāginiēnsēs ācerrimē restitērunt — postrēmō tamen urbs capta est, et incendium septendecim diēs dūrāvit.

Urbe dēlētā, Scīpiō super ruīnās flēvisse dīcitur, versūs Homērī dē excidiō Trōiae recitāns. Interrogātus cūr flēret: "Fortūnam urbium mūtārī posse sciō," inquit, "et idem fātum Rōmae aliquandō timeō." Ita Karthāgō, aemula imperiī Rōmānī, annō sescentēsimō octāvō ab urbe conditā dēlēta est.`,
    questions: [
      { q: "Quid QVOIVS sermōne classicō significat?", options: ["cuius", "quibus", "quod"], a: 0 },
      { q: "Quōmodo Catō sententiās claudēbat?", options: ["'Cēnseō Karthāginem esse dēlendam'", "'Vīvat Rōma aeterna'", "'Pāx vōbīscum'"], a: 0 },
      { q: "Quamdiū incendium Karthāginis dūrāvit?", options: ["Septendecim diēs", "Trēs diēs", "Annum"], a: 0 },
      { q: "Cūr Scīpiō flēvit?", options: ["Idem fātum Rōmae timēbat", "Amīcōs āmīserat", "Urbem pulchram dēsīderābat"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM LII ================= */
COURSE.push({
  num: 52, roman: "LII", icon: "💰",
  title: "Iugurtha",
  subtitle: "Salústio · a guerra da Numídia · 'urbem vēnālem!' · dehinc, obviam īre",
  grammar: [
    { title: "Salústio: o moralista seco",
      html: `<b>C. Sallustius Crispus</b> (86–35 a.C.) escreve curto, denso e amargo: pra ele, a guerra de Jugurta expôs a <b>corrupção da nobreza romana</b> — «tunc prīmum superbiae nōbilitātis obviam itum est» (pela primeira vez se enfrentou a soberba da nobreza).` },
    { title: "obviam īrī — passiva impessoal",
      html: `<span class="ex-la">superbiae nōbilitātis <b>obviam itum est</b></span> = "foi-se ao encontro da soberba" = ela foi enfrentada.
      <br>Verbos intransitivos fazem passiva impessoal: <span class="ex-la">pugnātum est</span> = lutou-se · <span class="ex-la">ventum est</span> = chegou-se.` },
    { title: "A frase da venalidade",
      html: `Jugurta subornava senadores e, saindo de Roma, olhou pra trás:
      <br><span class="ex-la">"Ō urbem <b>vēnālem</b> et mātūrē peritūram, sī ēmptōrem invēnerit!"</span>
      <br>= Ó cidade à venda, que perecerá logo — se achar comprador! (acusativo de exclamação)` }
  ],
  vocab: [
    { la: "atrōx", forms: "(rev.)", pt: "atroz", ex: "Bellum magnum et atrōx fuit." },
    { la: "varius", forms: "-a -um", pt: "variável, variado", ex: "Variā victōriā pugnātum est." },
    { la: "nōbilitās", forms: "-ātis f.", pt: "a nobreza", ex: "Superbia nōbilitātis." },
    { la: "obviam īre", forms: "loc. + dat.", pt: "ir ao encontro; enfrentar", ex: "Superbiae obviam itum est." },
    { la: "vēnālis", forms: "-e", pt: "à venda, venal", ex: "Ō urbem vēnālem!" },
    { la: "ēmptor", forms: "-ōris m.", pt: "comprador", ex: "Sī ēmptōrem invēnerit." },
    { la: "largītiō", forms: "-ōnis f.", pt: "suborno, largueza", ex: "Largītiōne senātōrēs corrūpit." },
    { la: "avāritia", forms: "-ae f.", pt: "ganância", ex: "Avāritia nōbilium patefacta est." },
    { la: "adoptāre", forms: "v.", pt: "adotar", ex: "Micipsa Iugurtham adoptāvit." },
    { la: "adulēscentia", forms: "-ae f.", pt: "juventude", ex: "Iugurtha ab adulēscentiā fortis erat." },
    { la: "dīvidere (rēgnum)", forms: "(rev.)", pt: "dividir", ex: "Rēgnum inter trēs dīvīsum est." },
    { la: "aemulātiō", forms: "-ōnis f.", pt: "rivalidade", ex: "Aemulātiō inter frātrēs orta est." },
    { la: "īnsidiīs petere", forms: "loc.", pt: "atacar de emboscada", ex: "Hiempsalem īnsidiīs petīvit." },
    { la: "polliciērī", forms: "pollicitum dep.", pt: "prometer", ex: "Pecūniam pollicitus est." },
    { la: "fidēs (pūblica)", forms: "(rev.)", pt: "garantia, palavra", ex: "Fidē pūblicā Rōmam vocātus." },
    { la: "impūnē", forms: "adv.", pt: "impunemente", ex: "Impūne scelera fēcit." },
    { la: "difficile bellum", forms: "loc.", pt: "—", ex: "Bellum in dēsertīs difficile erat." },
    { la: "legiō", forms: "-ōnis f.", pt: "legião", ex: "Legiōnēs in Numidiam missae sunt." },
    { la: "disciplīna", forms: "-ae f.", pt: "disciplina", ex: "Metellus disciplīnam restituit." },
    { la: "prōdere", forms: "-didisse -ditum", pt: "trair; transmitir", ex: "Ā socerō prōditus est." },
    { la: "vincīre", forms: "vīnxisse vīnctum", pt: "acorrentar", ex: "Iugurtha vīnctus Rōmam ductus est." },
    { la: "triumphō dūcere", forms: "loc.", pt: "levar no triunfo", ex: "Ante currum Mariī ductus est." },
    { la: "carcer (morī in)", forms: "(rev.)", pt: "—", ex: "In carcere periit." },
    { la: "novus homō", forms: "loc.", pt: "homem novo (sem ancestrais nobres)", ex: "Marius novus homō cōnsul factus est." }
  ],
  pensum: [
    { t: "cloze", prompt: "Tunc prīmum superbiae nōbilitātis obviam it__ est.", options: ["-um", "-us", "-a"], a: 0,
      why: "Passiva impessoal: itum est = 'foi-se' (enfrentou-se)." },
    { t: "mcq", q: "“Ō urbem vēnālem!” — que caso é urbem?", options: ["Acusativo de exclamação", "Nominativo", "Vocativo"], a: 0,
      why: "Exclamações vão pro acusativo: Ō mē miserum!" },
    { t: "gap", prompt: "Iugurtha senātōrēs ___ corrūpit.", a: ["largitione", "largītiōne"], hint: "(com suborno)",
      why: "O dinheiro numida comprando o senado." },
    { t: "mcq", q: "Quem terminou a guerra capturando Jugurta?", options: ["Marius (com Sulla capturando o rei)", "Metellus", "Scīpiō"], a: 0,
      why: "Mário venceu; Sula negociou a traição — e a rivalidade dos dois começa aí." },
    { t: "cloze", prompt: "Iugurtha vīnct__ Rōmam ductus est.", options: ["-us", "-um", "-ō"], a: 0,
      why: "Concorda com o sujeito: vīnctus = acorrentado." },
    { t: "build", pt: "Jugurta atacou o irmão de emboscada.", la: "Iugurtha frātrem īnsidiīs petīvit", extra: ["frātris", "īnsidiās"] },
    { t: "read", text: "Iugurtha, fidē pūblicā Rōmam vocātus, senātōrēs pecūniā corrūpit. Urbe ēgrediēns, saepe tacitus respiciēns, postrēmō dīxisse fertur: 'Ō urbem vēnālem et mātūrē peritūram, sī ēmptōrem invēnerit!'",
      q: "Quid Iugurtha dē Rōmā dīxit?", options: ["Urbem vēnālem esse et peritūram sī ēmptōrem inveniat", "Urbem aeternam esse", "Urbem pauperem esse"], a: 0,
      why: "A frase-síntese da corrupção da época." },
    { t: "listen", text: "Iugurtha vīnctus ante currum Mariī ductus est.", options: ["Iugurtha vīnctus ante currum Mariī ductus est", "Marius vīnctus in Numidiam missus est", "Iugurtha triumphum Rōmae ēgit"], a: 0,
      why: "O triunfo de Mário (104 a.C.): o rei acorrentado diante do carro." },
    { t: "cloze", prompt: "Marius, nov__ hom__, cōnsul factus est.", options: ["-us / -ō", "-um / -inem", "-ī / -inis"], a: 0,
      why: "novus homō = sem ancestrais nobres — o outsider no consulado." },
    { t: "type", prompt: "“ganância”:", a: ["avaritia", "avāritia"], why: "avāritia — o vício da época, segundo Salústio." }
  ],
  lectio: {
    title: "Iugurtha",
    source: "Adaptado de Roma Aeterna, cap. LII (Salústio)",
    text: `Bellum scrīptūrus sum quod populus Rōmānus cum Iugurthā, rēge Numidārum, gessit — prīmum quia magnum et atrōx variāque victōriā fuit, dehinc quia tunc prīmum superbiae nōbilitātis obviam itum est.

Micipsa, rēx Numidiae, Iugurtham, frātris fīlium, adoptāvit et rēgnum inter eum et duōs fīliōs suōs dīvīsit. Sed Iugurtha, glōriae cupidus et audāx, Hiempsalem īnsidiīs interfēcit, Adherbalem bellō vīcit — et senātōrēs Rōmānōs, quī rem cognōscere dēbēbant, largītiōne corrūpit! Fidē pūblicā Rōmam vocātus, plūrēs etiam pecūniā corrūpit. Urbe ēgrediēns dīxisse fertur: "Ō urbem vēnālem et mātūrē peritūram, sī ēmptōrem invēnerit!"

Bellum in dēsertīs Numidiae difficile et longum fuit, dum ducēs Rōmānī aut corruptī aut ignāvī sunt. Tandem Q. Metellus disciplīnam restituit, et C. Marius, novus homō — cui nōbilitās cōnsulātum invidēbat — bellum cōnfēcit: Iugurtha, ā Bocchō socerō prōditus, Sullae quaestōrī trāditus est.

Vīnctus ante currum Mariī triumphantis ductus, in carcere Rōmānō periit. Sed ex illā victōriā duo nōmina surrēxērunt quae mox Rōmam ipsam dīvīsūra erant: Marius et Sulla.`,
    questions: [
      { q: "Cūr bellum Iugurthīnum memorābile est?", options: ["Quia superbiae nōbilitātis obviam itum est", "Quia brevissimum fuit", "Quia Rōma victa est"], a: 0 },
      { q: "Quōmodo Iugurtha senātōrēs vīcit?", options: ["Largītiōne et pecūniā", "Armīs", "Ēloquentiā"], a: 0 },
      { q: "Quis Iugurtham prōdidit?", options: ["Bocchus socer", "Marius", "Metellus"], a: 0 },
      { q: "Quae duo nōmina ex hōc bellō surrēxērunt?", options: ["Marius et Sulla", "Catō et Scīpiō", "Caesar et Pompeius"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM LIII ================= */
COURSE.push({
  num: 53, roman: "LIII", icon: "⚔️",
  title: "Marius et Sulla",
  subtitle: "Cimbros e teutões · a primeira guerra civil · prōscrīptiō",
  grammar: [
    { title: "dum + presente histórico",
      html: `<span class="ex-la"><b>Dum</b> bellum in Numidiā <b>geritur</b>, Rōmānī ā Cimbrīs victī sunt.</span>
      <br>Regra fixa: dum ("enquanto") leva presente do indicativo mesmo narrando o passado.` },
    { title: "Ordinais em cargos",
      html: `<span class="ex-la">Marius <b>secundō</b> cōnsul factus est… <b>tertiō</b> quoque et <b>quārtō</b> dēlātus est cōnsulātus.</span>
      <br>= pela segunda, terceira, quarta vez… Mário foi cônsul <b>sete vezes</b> — recorde escandaloso pra república.` },
    { title: "prōscrīptiō — a palavra sinistra",
      html: `Sula inventou a <b>prōscrīptiō</b>: listas públicas de cidadãos que qualquer um podia matar, com os bens confiscados. <span class="ex-la">Prīmus Sulla exemplum prōscrīptiōnis invēnit — exemplum quod posterī secūtī sunt.</span>` }
  ],
  vocab: [
    { la: "interniciō", forms: "-ōnis f.", pt: "massacre, aniquilação", ex: "Ingentī interniciōne victī sunt." },
    { la: "timor", forms: "-ōris m.", pt: "medo", ex: "Timor Rōmae grandis fuit." },
    { la: "dēcernere", forms: "-crēvisse -crētum", pt: "decretar", ex: "Bellum Mariō dēcrētum est." },
    { la: "cōnsulātus", forms: "-ūs m.", pt: "consulado", ex: "Quārtō cōnsulātū Cimbrōs vīcit." },
    { la: "dēferre", forms: "(rev.)", pt: "conferir (cargo)", ex: "Cōnsulātus eī dēlātus est." },
    { la: "collēga", forms: "-ae m.", pt: "colega (de cargo)", ex: "Collēgam Catulum habuit." },
    { la: "cōnflīgere", forms: "-īxisse", pt: "chocar-se, combater", ex: "Cum Cimbrīs cōnflīxit." },
    { la: "līberāre (metū)", forms: "(rev.)", pt: "livrar (do medo)", ex: "Italiam metū līberāvit." },
    { la: "cīvīlis", forms: "-e", pt: "civil; entre cidadãos", ex: "Bellum cīvīle prīmum ortum est." },
    { la: "discordia", forms: "-ae f.", pt: "discórdia", ex: "Discordia ducum rem pūblicam lacerāvit." },
    { la: "occupāre", forms: "v.", pt: "ocupar, tomar", ex: "Sulla urbem armīs occupāvit." },
    { la: "armātus (in urbem)", forms: "(rev.)", pt: "—", ex: "Prīmus armātus urbem intrāvit." },
    { la: "fugere (ex urbe)", forms: "(rev.)", pt: "—", ex: "Marius ex urbe fūgit." },
    { la: "palūs", forms: "-ūdis f.", pt: "pântano", ex: "In palūde latuit." },
    { la: "latēre", forms: "-uisse", pt: "esconder-se", ex: "Senex in palūde latēbat." },
    { la: "reditus", forms: "-ūs m.", pt: "retorno", ex: "Reditus Mariī cruentus fuit." },
    { la: "caedēs", forms: "-is f.", pt: "matança", ex: "Caedēs cīvium facta est." },
    { la: "prōscrīptiō", forms: "-ōnis f.", pt: "proscrição (lista de morte)", ex: "Prōscrīptiōnis exemplum invēnit." },
    { la: "tabula (prōscrīptiōnis)", forms: "(rev.)", pt: "tábua, lista", ex: "Nōmina in tabulās relāta sunt." },
    { la: "bona", forms: "-ōrum n. pl.", pt: "bens, patrimônio", ex: "Bona prōscrīptōrum vēndita sunt." },
    { la: "dictātūra", forms: "-ae f.", pt: "ditadura", ex: "Sulla dictātūram perpetuam sūmpsit." },
    { la: "dēpōnere (dictātūram)", forms: "(rev.)", pt: "—", ex: "Dictātūram sponte dēposuit." },
    { la: "fēlīx", forms: "-īcis", pt: "feliz; bem-sucedido", ex: "Sulla 'Fēlīx' sē appellāvit." },
    { la: "cruentus", forms: "-a -um", pt: "sangrento", ex: "Victōria cruenta fuit." }
  ],
  pensum: [
    { t: "cloze", prompt: "Dum bellum in Numidiā ger____, Cimbrī Rōmānōs vīcērunt.", options: ["-itur", "-ēbātur", "-ētur"], a: 0,
      why: "dum + presente do indicativo, mesmo no passado: geritur." },
    { t: "mcq", q: "Quantas vezes Mário foi cônsul?", options: ["Septiēns (7)", "Bis (2)", "Semel (1)"], a: 0,
      why: "Recorde que quebrou as regras da república." },
    { t: "gap", prompt: "Sulla prīmus exemplum ___ invēnit.", a: ["proscriptionis", "prōscrīptiōnis"], hint: "(da proscrição)",
      why: "As listas de morte — a invenção sinistra de Sula." },
    { t: "mcq", q: "O que era ser 'prōscrīptus'?", options: ["Estar numa lista pública: qualquer um podia te matar", "Ser exilado com honras", "Perder só o cargo"], a: 0,
      why: "Nome na tábua = morte autorizada + bens confiscados." },
    { t: "cloze", prompt: "Marius senex in palūd__ latuit.", options: ["-e", "-em", "-is"], a: 0,
      why: "in + ablativo: in palūde — o velho general escondido no pântano." },
    { t: "build", pt: "Sula ocupou a cidade com homens armados.", la: "Sulla urbem armātīs mīlitibus occupāvit", extra: ["urbis", "armōrum"] },
    { t: "read", text: "Sulla, victōriā partā, dictātor perpetuus factus est — quod nēmō ante eum fēcerat. Sed rem incrēdibilem fēcit: dictātūram sponte dēposuit et prīvātus in vīllam sē recēpit. 'Fēlīcem' sē appellāvit.",
      q: "Quid Sulla dē dictātūrā fēcit?", options: ["Sponte dēposuit", "Ūsque ad mortem tenuit", "Fīliō trādidit"], a: 0,
      why: "O paradoxo de Sula: o tirano que renunciou." },
    { t: "listen", text: "Prīmum bellum cīvīle inter Marium et Sullam ortum est.", options: ["Prīmum bellum cīvīle inter Marium et Sullam ortum est", "Marius et Sulla contrā Cimbrōs pugnāvērunt", "Bellum Pūnicum tertium ortum est"], a: 0,
      why: "cīvīle = entre cidadãos: romano matando romano." },
    { t: "cloze", prompt: "Bona prōscrīptōrum vēndit__ sunt.", options: ["-a", "-ī", "-ae"], a: 0,
      why: "bona (neutro plural): vēndita sunt." },
    { t: "type", prompt: "“matança”:", a: ["caedes", "caedēs"], why: "caedēs, -is f. — a palavra da guerra civil." }
  ],
  lectio: {
    title: "Marius et Sulla",
    source: "Adaptado de Roma Aeterna, cap. LIII (Eutrópio V–VI)",
    text: `Dum bellum in Numidiā contrā Iugurtham geritur, cōnsulēs Rōmānī ā Cimbrīs et Teutonibus, gentibus Germānōrum, ingentī interniciōne victī sunt. Timor Rōmae grandis fuit, quantus vix Hannibalis tempore: nē iterum barbarī Rōmam venīrent! Ergō Marius post victōriam Iugurthīnam iterum cōnsul factus est, bellumque eī contrā Cimbrōs et Teutonēs dēcrētum est. Tertiō quoque eī et quārtō dēlātus est cōnsulātus. Teutonēs in Galliā, deinde Cimbrōs in Italiā ingentibus proeliīs dēlēvit — et Italiam metū līberāvit.

Sed mox discordia inter Marium et Sullam orta est, et prīmum bellum cīvīle! Sulla, prīmus omnium, armātus urbem intrāvit. Marius fūgit et senex in palūde latuit; posteā rediit, et reditus eius cruentissimus fuit: caedēs cīvium per urbem facta est. Septimō cōnsulātū Marius mortuus est.

Sulla victor rem inaudītam invēnit: prōscrīptiōnem. Nōmina cīvium in tabulās pūblicās referēbantur: quisquis prōscrīptum occīderat, praemium accipiēbat, bonaque occīsōrum vēndēbantur.

Dictātor perpetuus factus, Sulla tamen rem incrēdibilem fēcit: dictātūram sponte dēposuit et prīvātus vīxit. 'Fēlīcem' sē appellāvit — sed rēs pūblica iam aegrōtābat morbō quō peritūra erat.`,
    questions: [
      { q: "Quis Cimbrōs et Teutonēs dēlēvit?", options: ["Marius", "Sulla", "Metellus"], a: 0 },
      { q: "Quid Sulla prīmus omnium fēcit?", options: ["Armātus urbem intrāvit", "Cōnsul septiēns fuit", "Rēgem sē fēcit"], a: 0 },
      { q: "Quid erat prōscrīptiō?", options: ["Tabulae cīvium quōs occīdere licēbat", "Lēx dē agrīs", "Cēnsus novus"], a: 0 },
      { q: "Quid Sulla dē dictātūrā fēcit?", options: ["Sponte dēposuit", "Fīliō trādidit", "Ūsque ad mortem retinuit"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM LIV ================= */
COURSE.push({
  num: 54, roman: "LIV", icon: "🎤",
  title: "Cn. Pompeius Magnus",
  subtitle: "Cícero orador! · Dē imperiō Cn. Pompeī · a arte da retórica",
  grammar: [
    { title: "Cícero: agora é oratória",
      html: `Você chegou ao <b>discurso de verdade</b>: Cícero defendendo (66 a.C.) que Pompeu comande a guerra contra Mitridates. Marcas do gênero: o vocativo <span class="ex-la"><b>Quirītēs!</b></span> (= cidadãos romanos!), perguntas retóricas, acumulação, e frases que crescem em ondas até o clímax.` },
    { title: "AcI em cascata (as notícias da Ásia)",
      html: `Cícero relata cartas inteiras em infinitivo:
      <br><span class="ex-la">Litterae afferuntur <b>vīcōs exūstōs esse</b>, <b>rēgnum in hostium potestāte esse</b>, <b>Lūcullum discēdere</b>…</span>
      <br>Cada notícia = um AcI pendurado no verbo de informação.` },
    { title: "O elogio quádruplo do general",
      html: `A estrutura-modelo da oratória: o general perfeito precisa de 4 coisas —
      <span class="ex-la">scientia reī mīlitāris, virtūs, auctōritās, fēlīcitās</span>
      (competência, valor, prestígio e sorte). E Pompeu, claro, tem todas.` }
  ],
  vocab: [
    { la: "Quirītēs", forms: "-ium m. pl.", pt: "cidadãos romanos (vocativo de discurso)", ex: "Quirītēs! Bellum vōbīs īnfertur." },
    { la: "ōrātiō", forms: "-ōnis f.", pt: "discurso", ex: "Ōrātiō dē imperiō Pompeī." },
    { la: "vectīgal", forms: "-ālis n.", pt: "imposto, renda pública", ex: "Vectīgālia vestra perīculō sunt." },
    { la: "īnferre (bellum)", forms: "loc.", pt: "mover guerra", ex: "Bellum sociīs īnfertur." },
    { la: "lacessere", forms: "-īvisse -ītum", pt: "provocar", ex: "Alter lacessītus est." },
    { la: "occāsiō", forms: "(rev.)", pt: "oportunidade", ex: "Occāsiōnem oblātam arbitrātur." },
    { la: "littera afferuntur", forms: "loc.", pt: "chegam cartas", ex: "Litterae ex Asiā afferuntur." },
    { la: "exūrere", forms: "-ussisse -ustum", pt: "queimar completamente", ex: "Vīcī exūstī sunt." },
    { la: "fīnitimus", forms: "(rev.)", pt: "limítrofe", ex: "Rēgnum fīnitimum vectīgālibus vestrīs." },
    { la: "scientia", forms: "-ae f.", pt: "conhecimento", ex: "Scientia reī mīlitāris." },
    { la: "auctōritās", forms: "-ātis f.", pt: "prestígio, autoridade", ex: "Auctōritās ducis magna est." },
    { la: "fēlīcitās", forms: "-ātis f.", pt: "sorte, sucesso", ex: "Fēlīcitās Pompeī singulāris." },
    { la: "imperātor (dēligere)", forms: "(rev.)", pt: "—", ex: "Imperātōrem dēligere dēbētis." },
    { la: "pīrāta (rev.)", forms: "-ae m.", pt: "pirata", ex: "Pompeius pīrātās paucīs mēnsibus dēlēvit." },
    { la: "praedicāre", forms: "v.", pt: "proclamar", ex: "Quis nōn praedicat virtūtem eius?" },
    { la: "testis (rev.)", forms: "-is m.", pt: "testemunha", ex: "Testis est Sicilia, testis Āfrica." },
    { la: "innocentia", forms: "-ae f.", pt: "integridade", ex: "Innocentia ducis rāra est." },
    { la: "temperantia", forms: "-ae f.", pt: "moderação", ex: "Temperantiā omnēs superat." },
    { la: "hūmānitās", forms: "-ātis f.", pt: "humanidade, cultura", ex: "Hūmānitāte sociōs sibi conciliat." },
    { la: "cōnsilium (rev.)", forms: "-ī n.", pt: "plano; senso", ex: "Cōnsiliō valet." },
    { la: "dēligere", forms: "-lēgisse -lēctum", pt: "escolher", ex: "Quem imperātōrem dēligētis?" },
    { la: "ūnus omnium", forms: "loc.", pt: "único entre todos", ex: "Ūnus omnium bella cōnfēcit." },
    { la: "cēnsēre (rev.)", forms: "v.", pt: "opinar", ex: "Cēnseō Pompeiō bellum mandandum esse." },
    { la: "persuādēre", forms: "-sisse + dat.", pt: "persuadir", ex: "Populō persuāsit." }
  ],
  pensum: [
    { t: "mcq", q: "“Quirītēs!” é:", options: ["O vocativo padrão do orador ao povo romano", "Um nome próprio", "Um palavrão"], a: 0,
      why: "Todo discurso à assembleia abre chamando Quirītēs." },
    { t: "cloze", prompt: "Litterae afferuntur vīcōs exūst__ esse.", options: ["-ōs", "-ī", "-īs"], a: 0,
      why: "AcI: vīcōs exūstōs esse — a notícia em infinitivo." },
    { t: "gap", prompt: "In imperātōre quattuor rēs esse dēbent: scientia, virtūs, auctōritās, ___.", a: ["felicitas", "fēlīcitās"], hint: "(sorte)",
      why: "O elogio quádruplo — a sorte fecha a lista." },
    { t: "mcq", q: "Que feito recente provava a fēlīcitās de Pompeu?", options: ["Limpou os mares dos piratas em poucos meses", "Destruiu Cartago", "Venceu Aníbal"], a: 0,
      why: "A campanha-relâmpago de 67 a.C. (lembra do cap. XXXII!)." },
    { t: "cloze", prompt: "Cicerō populō persuās__ ut Pompeiō bellum mandāret.", options: ["-it", "-us est", "-ērunt"], a: 0,
      why: "persuādēre + dativo + ut: persuāsit." },
    { t: "build", pt: "Cícero proferiu um discurso sobre o comando de Pompeu.", la: "Cicerō ōrātiōnem dē imperiō Pompeī habuit", extra: ["ōrātiōnis", "imperium"] },
    { t: "read", text: "Testis est Sicilia, testis Āfrica, testis Gallia, testis Hispānia: omnēs prōvinciae virtūtem Pompeī vīdērunt. Quis igitur dubitāre potest quīn huic ūnī bellum Asiāticum mandandum sit?",
      q: "Quō artificiō Cicerō ūtitur?", options: ["Repetītiōne ('testis est…') et interrogātiōne rhētoricā", "Fābulā dē animālibus", "Versibus poēticīs"], a: 0,
      why: "Anáfora + pergunta retórica: as armas do orador." },
    { t: "listen", text: "Quirītēs! Bellum grave vectīgālibus vestrīs īnfertur.", options: ["Quirītēs! Bellum grave vectīgālibus vestrīs īnfertur", "Senātōrēs! Pāx firma vōbīs datur", "Mīlitēs! Proelium crās committētur"], a: 0,
      why: "A abertura de alarme: guerra contra as SUAS rendas." },
    { t: "cloze", prompt: "Quem imperātōrem dēlig_____, Quirītēs?", options: ["-ētis", "-itis", "-unt"], a: 0,
      why: "Futuro 2ª plural: dēligētis — a pergunta ao povo." },
    { t: "type", prompt: "“discurso”:", a: ["oratio", "ōrātiō"], why: "ōrātiō — a arte que governava Roma." }
  ],
  lectio: {
    title: "Cn. Pompeius Magnus",
    source: "Adaptado de Roma Aeterna, cap. LIV (Cícero, De imperio Cn. Pompei)",
    text: `Quirītēs! Bellum grave et perīculōsum vestrīs vectīgālibus ac sociīs ā duōbus potentissimīs rēgibus īnfertur, Mithridāte et Tigrāne. Equitibus Rōmānīs, honestissimīs virīs, afferuntur ex Asiā cotīdiē litterae: vīcōs complūrēs exūstōs esse; rēgnum Ariobarzānis, quod fīnitimum est vestrīs vectīgālibus, tōtum in hostium potestāte esse; Lūcullum ab eō bellō discēdere.

Ūnum virum habētis in quō summa sunt omnia: nam in summō imperātōre quattuor hae rēs inesse dēbent — scientia reī mīlitāris, virtūs, auctōritās, fēlīcitās.

Quis umquam plūra bella gessit quam Cn. Pompeius? Testis est Sicilia, testis Āfrica, testis Gallia, testis Hispānia! Nūper, cum mare tōtum pīrātīs īnfestum esset, Pompeius tantum bellum tam brevī tempore cōnfēcit quam celeritātem nēmō umquam spērāvisset. Iam innocentia, temperantia, hūmānitās eius sociōs omnēs Rōmānīs amīcōs facit. Dē fēlīcitāte autem — quae maxima est — timidē dīcam: sed dī immortālēs eī victōriam quasi in manum dedērunt.

Quārē dubitātis, Quirītēs, quīn huic ūnī bellum mandandum sit? Populus Rōmānus Cicerōnī assēnsit — et lēx dē imperiō Cn. Pompeī lāta est.`,
    questions: [
      { q: "Quōs Cicerō 'Quirītēs' vocat?", options: ["Cīvēs Rōmānōs in cōntiōne", "Senātōrēs", "Mīlitēs"], a: 0 },
      { q: "Quattuor rēs summī imperātōris quae sunt?", options: ["Scientia, virtūs, auctōritās, fēlīcitās", "Dīvitiae, arma, nāvēs, equī", "Genus, fōrma, aetās, vōx"], a: 0 },
      { q: "Quod bellum Pompeius brevissimē cōnfēcerat?", options: ["Bellum pīrāticum", "Bellum Pūnicum", "Bellum cīvīle"], a: 0 },
      { q: "Quid populus fēcit?", options: ["Cicerōnī assēnsit et lēgem tulit", "Cicerōnem exsiliō pūnīvit", "Lūcullum retinuit"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM LV ================= */
COURSE.push({
  num: 55, roman: "LV", icon: "🏛️",
  title: "Dē Rē Pūblicā",
  subtitle: "O diálogo de Cícero · as três formas de governo · rēs pūblica = rēs populī",
  grammar: [
    { title: "O diálogo filosófico",
      html: `Cícero escreveu <i>Dē rē pūblicā</i> como conversa entre <b>Cipião Emiliano</b> e amigos (129 a.C.). É filosofia grega em roupa romana: perguntas, respostas, definições. <span class="ex-la">Est igitur rēs pūblica <b>rēs populī</b>.</span> — a definição que atravessou os séculos.` },
    { title: "cum + subjuntivo (narrativo) dominando tudo",
      html: `<span class="ex-la"><b>Cum</b> Scīpiō in hortīs <b>esset</b>, amīcī eum vīsitāvērunt.</span>
      <br>Na prosa filosófica e histórica, quase todo pano de fundo vem em cum + subjuntivo: "como/quando/já que".` },
    { title: "As três formas — e a mista",
      html: `<span class="ex-la"><b>rēgnum</b></span> (um só) · <span class="ex-la"><b>optimātēs</b></span> (poucos) · <span class="ex-la"><b>cīvitās populāris</b></span> (todos). Cada uma degenera: tirania, oligarquia, turba. A melhor? A <b>mista</b> — e Cipião diz: é a constituição <b>romana</b>, feita não por um gênio, mas por gerações.` }
  ],
  vocab: [
    { la: "rēs pūblica", forms: "reī pūblicae f.", pt: "a coisa pública, o Estado", ex: "Rēs pūblica est rēs populī." },
    { la: "populus", forms: "(rev.)", pt: "povo (com direito)", ex: "Populus est coetus iūris cōnsēnsū sociātus." },
    { la: "coetus", forms: "-ūs m.", pt: "reunião, agrupamento", ex: "Coetus multitūdinis." },
    { la: "cōnsēnsus", forms: "-ūs m.", pt: "consenso, acordo", ex: "Iūris cōnsēnsū sociātus." },
    { la: "societās", forms: "-ātis f.", pt: "sociedade, parceria", ex: "Societās utilitātis commūnis." },
    { la: "ūtilitās", forms: "-ātis f.", pt: "utilidade, interesse", ex: "Utilitātis commūniōne sociātus." },
    { la: "genus (cīvitātis)", forms: "(rev.)", pt: "tipo, forma", ex: "Tria genera rērum pūblicārum." },
    { la: "optimātēs", forms: "-ium m. pl.", pt: "os aristocratas", ex: "Penes optimātēs potestās est." },
    { la: "populāris", forms: "-e", pt: "popular, do povo", ex: "Cīvitās populāris dīcitur." },
    { la: "penes", forms: "prep. + acus.", pt: "em poder de", ex: "Penes ūnum summa rērum est." },
    { la: "tyrannus", forms: "-ī m.", pt: "tirano", ex: "Rēx iniūstus tyrannus fit." },
    { la: "dominātus", forms: "-ūs m.", pt: "dominação", ex: "Dominātus paucōrum." },
    { la: "licentia", forms: "-ae f.", pt: "libertinagem, excesso", ex: "Licentia populī perīculōsa est." },
    { la: "temperāre", forms: "v.", pt: "moderar, equilibrar", ex: "Cīvitās temperāta ex tribus generibus." },
    { la: "aequābilis", forms: "-e", pt: "equilibrado, uniforme", ex: "Ius aequābile omnibus." },
    { la: "stabilis", forms: "-e", pt: "estável", ex: "Fōrma cīvitātis stabilis." },
    { la: "praestāre (rev.)", forms: "v.", pt: "ser superior", ex: "Quod genus praestat?" },
    { la: "iniūstus", forms: "-a -um", pt: "injusto", ex: "Rēx iniūstus tyrannus est." },
    { la: "sapientia", forms: "-ae f.", pt: "sabedoria", ex: "Sapientiā maiōrum cōnstitūta est." },
    { la: "maiōrēs", forms: "-um m. pl.", pt: "os antepassados", ex: "Mōs maiōrum servandus est." },
    { la: "cōnstituere", forms: "-uisse -ūtum", pt: "estabelecer", ex: "Rem pūblicam cōnstituērunt." },
    { la: "generātiō? — saeculum", forms: "(rev.)", pt: "geração/século", ex: "Nōn ūnīus hominis, sed multōrum saeculōrum opus." },
    { la: "disputāre", forms: "v.", pt: "discutir, debater", ex: "Dē rē pūblicā disputāvērunt." },
    { la: "fēriae", forms: "-ārum f. pl.", pt: "feriado, dias de festa", ex: "Fēriīs Latīnīs amīcī convēnērunt." }
  ],
  pensum: [
    { t: "mcq", q: "“Rēs pūblica est rēs populī” — a definição exige que o povo seja:", options: ["Unido por consenso de direito e utilidade comum", "Apenas uma multidão qualquer", "Só os patrícios"], a: 0,
      why: "«coetus iūris cōnsēnsū et ūtilitātis commūniōne sociātus»." },
    { t: "cloze", prompt: "Cum Scīpiō in hortīs ____, amīcī convēnērunt.", options: ["esset", "erat", "est"], a: 0,
      why: "cum narrativo + subjuntivo imperfeito." },
    { t: "gap", prompt: "Rēx iniūstus ___ fit.", a: ["tyrannus"], hint: "(tirano)",
      why: "A degeneração da monarquia." },
    { t: "mcq", q: "As três formas simples de governo:", options: ["rēgnum, optimātēs, cīvitās populāris", "cōnsul, senātus, tribūnus", "tyrannis, oligarchia, anarchia"], a: 0,
      why: "Um, poucos, todos — o esquema grego romanizado." },
    { t: "cloze", prompt: "Penes ūn__ summa rērum est in rēgnō.", options: ["-um", "-ō", "-īus"], a: 0,
      why: "penes + acusativo: penes ūnum." },
    { t: "build", pt: "A melhor cidade é equilibrada das três formas.", la: "Optima cīvitās ex tribus generibus temperāta est", extra: ["genera", "cīvitātem"] },
    { t: "read", text: "Scīpiō: 'Nostra rēs pūblica nōn ūnīus ingeniō, sed multōrum, nec ūnā hominis vītā, sed aliquot cōnstitūta saeculīs est. Numquam enim fuit tam excellēns vir ut nihil eum fugeret.'",
      q: "Quōmodo rēs pūblica Rōmāna cōnstitūta est?", options: ["Multōrum ingeniō per multa saecula", "Ab ūnō sapiente", "Ā deīs ipsīs"], a: 0,
      why: "Contra o legislador-gênio grego: a sabedoria acumulada das gerações." },
    { t: "listen", text: "Est igitur rēs pūblica rēs populī.", options: ["Est igitur rēs pūblica rēs populī", "Est igitur rēs populī rēs rēgis", "Rēs pūblica nihil est nisi rēgnum"], a: 0,
      why: "A frase mais citada do pensamento político romano." },
    { t: "cloze", prompt: "Amīcī dē rē pūblicā disputāv_____.", options: ["-ērunt", "-erat", "-erint"], a: 0,
      why: "Perfeito 3ª plural: o diálogo aconteceu." },
    { t: "type", prompt: "“sabedoria”:", a: ["sapientia"], why: "sapientia maiōrum — a dos antepassados." }
  ],
  lectio: {
    title: "Dē Rē Pūblicā",
    source: "Adaptado de Roma Aeterna, cap. LV (Cícero, De re publica)",
    text: `Fēriīs Latīnīs, cum P. Scīpiō Aemiliānus in hortīs suīs esset, amīcī eum vīsitāvērunt: C. Laelius, L. Fūrius Philus, aliīque virī doctī. Sermō dē rē pūblicā ortus est, et Laelius Scīpiōnem rogāvit ut sententiam suam dē optimō statū cīvitātis expōneret.

Scīpiō: "Est igitur rēs pūblica rēs populī. Populus autem nōn omnis hominum coetus est, sed coetus multitūdinis iūris cōnsēnsū et ūtilitātis commūniōne sociātus.

"Tria sunt genera rērum pūblicārum: cum penes ūnum est summa rērum, rēgem illum vocāmus; cum penes dēlēctōs, cīvitās optimātium dīcitur; cum in populō sunt omnia, cīvitās populāris est. Sed ūnum quodque genus in vitium praeceps dēlābitur: rēx fit tyrannus, optimātēs factiō paucōrum, populus turba et cōnfūsiō!

"Itaque quārtum quoddam genus maximē probandum est, quod ex tribus prīmīs temperātum et aequātum sit. Atque haec est fōrma cīvitātis nostrae! Nam nostra rēs pūblica nōn ūnīus ingeniō, sed multōrum, nec ūnā hominis vītā, sed aliquot cōnstitūta saeculīs est."

Omnēs sapientiam Scīpiōnis laudāvērunt — et sermō ūsque ad vesperum dūxit.`,
    questions: [
      { q: "Quid est rēs pūblica secundum Scīpiōnem?", options: ["Rēs populī", "Rēs rēgum", "Rēs senātūs"], a: 0 },
      { q: "Quot genera simplicia rērum pūblicārum sunt?", options: ["Tria", "Quattuor", "Duo"], a: 0 },
      { q: "Quid rēx iniūstus fit?", options: ["Tyrannus", "Cōnsul", "Optimās"], a: 0 },
      { q: "Quae fōrma cīvitātis optima est?", options: ["Temperāta ex tribus generibus", "Rēgnum pūrum", "Cīvitās populāris pūra"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM LVI ================= */
COURSE.push({
  num: 56, roman: "LVI", icon: "🌌",
  title: "Somnium Scīpiōnis",
  subtitle: "O Sonho de Cipião — o gran finale do curso · a Via Láctea e a alma imortal",
  grammar: [
    { title: "O texto final",
      html: `Você chegou ao último capítulo do Ørberg: o <b>Sonho de Cipião</b>, fecho do <i>Dē rē pūblicā</i>. Cipião sonha com o avô Africano, que lhe mostra o cosmos do alto da <b>Via Láctea</b> (orbis lacteus) — e a recompensa eterna dos que servem à pátria. Depois disto, você está pronto pra ler <b>qualquer autor romano</b>.` },
    { title: "A promessa central (AcI + gerundivo + tudo junto)",
      html: `<span class="ex-la">Omnibus quī patriam <b>cōnservāverint</b>, <b>adiūverint</b>, <b>auxerint</b>, certum esse in caelō dēfīnītum locum, ubi beātī aevō sempiternō <b>fruantur</b>.</span>
      <br>Futuro perfeito na relativa + AcI + subjuntivo — o latim inteiro numa frase.` },
    { title: "E agora?",
      html: `O caminho natural depois do curso: <b>César</b> (Dē bellō Gallicō — prosa límpida), <b>Nepote</b> e <b>Eutrópio</b> (fáceis, você já provou), cartas de <b>Cícero</b> e <b>Plínio</b>, depois <b>Vergílio</b> em verso de verdade. O leitor com glossário do app continua aqui pro que você importar. <span class="ex-la">Macte virtūte estō!</span>` }
  ],
  vocab: [
    { la: "somnium", forms: "-ī n.", pt: "sonho", ex: "Somnium Scīpiōnis clārissimum est." },
    { la: "tribūnus mīlitum", forms: "loc.", pt: "tribuno militar", ex: "Tribūnus ad quārtam legiōnem vēnī." },
    { la: "complectī", forms: "(rev.)", pt: "abraçar", ex: "Complexus mē senex collacrimāvit." },
    { la: "suspicere", forms: "-spexisse", pt: "olhar pra cima", ex: "Suspexit ad caelum." },
    { la: "grātēs", forms: "f. pl. (rev.)", pt: "graças", ex: "Grātēs tibi agō, summe Sōl!" },
    { la: "artus", forms: "-ūs m.", pt: "membro (do corpo)", ex: "Somnus artūs occupāvit." },
    { la: "orbis", forms: "-is m.", pt: "círculo, esfera", ex: "Orbis lacteus fulgēbat." },
    { la: "lacteus", forms: "-a -um", pt: "de leite, lácteo", ex: "Orbem lacteum Graecī 'galaxian' vocant." },
    { la: "fulgēre", forms: "fulsisse", pt: "brilhar, fulgir", ex: "Stēllae fulgēbant quās numquam vīdimus." },
    { la: "sempiternus", forms: "-a -um", pt: "eterno, perpétuo", ex: "Aevō sempiternō fruuntur." },
    { la: "aevum", forms: "-ī n.", pt: "eternidade; era", ex: "Aevō sempiternō beātī." },
    { la: "fruī", forms: "frūctum dep. + abl.", pt: "gozar de, desfrutar", ex: "Vītā beātā fruuntur." },
    { la: "dēfīnītus", forms: "-a -um", pt: "determinado", ex: "Certus et dēfīnītus locus in caelō." },
    { la: "cōnservāre", forms: "(rev.)", pt: "preservar", ex: "Quī patriam cōnservāverint." },
    { la: "augēre", forms: "auxisse auctum", pt: "aumentar, engrandecer", ex: "Quī patriam auxerint." },
    { la: "hinc (dē caelō)", forms: "adv.", pt: "daqui", ex: "Omnia mihi contemplantī praeclāra vidēbantur." },
    { la: "contemplārī", forms: "v. dep.", pt: "contemplar", ex: "Terram dē caelō contemplābar." },
    { la: "exiguus", forms: "-a -um", pt: "minúsculo", ex: "Terra tam exigua vidēbātur!" },
    { la: "pūnctum", forms: "-ī n.", pt: "ponto", ex: "Terra quasi pūnctum est." },
    { la: "glōria (hūmāna)", forms: "(rev.)", pt: "—", ex: "Quam exigua est glōria hūmāna!" },
    { la: "immortālis", forms: "-e", pt: "imortal", ex: "Animus immortālis est." },
    { la: "dīvīnus", forms: "-a -um", pt: "divino", ex: "Animus dīvīnus est." },
    { la: "regere", forms: "rēxisse rēctum", pt: "reger, governar", ex: "Deus mundum regit, animus corpus." },
    { la: "iūstitia (colere)", forms: "(rev.)", pt: "—", ex: "Iūstitiam cole et pietātem!" },
    { la: "via (in caelum)", forms: "(rev.)", pt: "—", ex: "Ea vīta via est in caelum." }
  ],
  pensum: [
    { t: "cloze", prompt: "Omnibus quī patriam cōnservāv______, locus in caelō dēfīnītus est.", options: ["-erint", "-issent", "-ērunt"], a: 0,
      why: "Futuro perfeito na relativa: quī cōnservāverint = os que tiverem preservado." },
    { t: "mcq", q: "“aevō sempiternō fruantur” — por que ablativo?", options: ["fruī rege ablativo", "É dativo", "Erro do texto"], a: 0,
      why: "fruī, ūtī, potīrī + ablativo — os depoentes especiais." },
    { t: "gap", prompt: "Orbis ___ inter flammās cēterās fulgēbat.", a: ["lacteus"], hint: "(lácteo — a Via Láctea!)",
      why: "orbis lacteus = galaxias em grego = nossa galáxia." },
    { t: "mcq", q: "Vista do céu, como parecia a Terra?", options: ["Tam exigua ut quasi pūnctum esset", "Magna et clāra", "Plāna et quadrāta"], a: 0,
      why: "O 'pale blue dot' com 2000 anos de antecedência." },
    { t: "cloze", prompt: "Animus hominis immortāl__ est.", options: ["-is", "-e", "-em"], a: 0,
      why: "Adjetivo 3ª decl. concordando: immortālis." },
    { t: "build", pt: "Deus rege o mundo como a alma rege o corpo.", la: "Deus mundum regit ut animus corpus", extra: ["mundī", "animum"] },
    { t: "read", text: "'Iūstitiam cole' inquit Āfricānus 'et pietātem: ea vīta via est in caelum, in coetum eōrum quī iam vīxērunt et corpore laxātī illum incolunt locum quem vidēs — orbem lacteum.'",
      q: "Quae vīta via in caelum est?", options: ["Iūstitia et pietās", "Glōria mīlitāris", "Dīvitiae"], a: 0,
      why: "A conclusão moral do curso inteiro: justiça e dever." },
    { t: "listen", text: "Grātēs tibi agō, summe Sōl!", options: ["Grātēs tibi agō, summe Sōl!", "Valē, mī fīlī, in aeternum!", "Salvē, magne Iuppiter!"], a: 0,
      why: "O grito de Masinissa velho — grātēs agere = agradecer solenemente." },
    { t: "cloze", prompt: "Quam exigua est glōria hūmān__!", options: ["-a", "-ae", "-am"], a: 0,
      why: "Concordância: glōria hūmāna — a lição do cosmos." },
    { t: "type", prompt: "“imortal”:", a: ["immortalis", "immortālis"], why: "immortālis — a última palavra do curso: a alma." }
  ],
  lectio: {
    title: "Somnium Scīpiōnis",
    source: "Adaptado de Roma Aeterna, cap. LVI (Cícero, De re publica VI)",
    text: `Cum in Āfricam vēnissem tribūnus mīlitum, nihil mihi fuit potius quam ut Masinissam convenīrem, rēgem familiae nostrae amīcissimum. Ad quem ut vēnī, complexus mē senex collacrimāvit et suspexit ad caelum: "Grātēs tibi agō, summe Sōl, quod, antequam ex hāc vītā migrō, cōnspiciō in meō rēgnō P. Cornēlium Scīpiōnem!"

Post epulās, cum artūs meōs somnus complexus esset, Āfricānus avus mihi in quiēte appāruit, et ex altō quōdam locō, stēllīs clārō et fulgentī, terrās mihi ostendit. "Vidēsne illam urbem?" inquit. Ego autem omnia contemplābar: erat orbis lacteus inter flammās cēterās fulgentissimus; terra autem tam exigua vidēbātur ut mē imperiī nostrī, quō quasi pūnctum eius attingimus, paenitēret. Quam exigua est glōria hūmāna!

Āfricānus: "Omnibus quī patriam cōnservāverint, adiūverint, auxerint, certum esse in caelō dēfīnītum locum sciās, ubi beātī aevō sempiternō fruantur. Animus enim hominis immortālis est ac dīvīnus: deus mundum regit ut animus corpus.

"Iūstitiam igitur cole et pietātem: ea vīta via est in caelum!" — Ille discessit; ego somnō solūtus sum.

FĪNIS. Macte virtūte estō, discipule: iam Rōmānōs ipsōs legere potes!`,
    questions: [
      { q: "Quis Scīpiōnī in somniō appāruit?", options: ["Āfricānus avus", "Masinissa", "Iuppiter"], a: 0 },
      { q: "Quālis terra dē caelō vidēbātur?", options: ["Exigua, quasi pūnctum", "Ingēns et clāra", "Plāna"], a: 0 },
      { q: "Quibus locus in caelō dēfīnītus est?", options: ["Quī patriam cōnservāverint", "Quī dīvitiās parāverint", "Quī bella gesserint"], a: 0 },
      { q: "Quae vīta via in caelum est?", options: ["Iūstitia et pietās", "Glōria et fāma", "Ōtium et voluptās"], a: 0 }
    ]
  }
});

/* ============================================================
   Nomes e glossário dos caps XLI–LVI
   ============================================================ */
NOMINA.push(
  { la: "Līvius", pt: "Tito Lívio — historiador de Roma (Ab urbe condita)" },
  { la: "Rōmulus", pt: "Rômulo — fundador e 1º rei (rev.)" },
  { la: "Remus", pt: "Remo — irmão gêmeo de Rômulo" },
  { la: "Rhēa Silvia", pt: "Reia Sílvia — mãe dos gêmeos" },
  { la: "Amūlius", pt: "Amúlio — usurpador de Alba" },
  { la: "Numitor", pt: "Numitor — rei legítimo de Alba, avô dos gêmeos" },
  { la: "Faustulus", pt: "Fáustulo — pastor que criou os gêmeos" },
  { la: "Numa", pt: "Numa Pompílio — 2º rei, o religioso" },
  { la: "Tullus", pt: "Tulo Hostílio — 3º rei, o guerreiro" },
  { la: "Horātius", pt: "Horácio — vencedor dos Curiácios" },
  { la: "Ancus", pt: "Anco Márcio — 4º rei" },
  { la: "Tanaquil", pt: "Tanaquil — rainha etrusca vidente" },
  { la: "Servius", pt: "Sérvio Túlio — 6º rei, criador do censo" },
  { la: "Tullia", pt: "Túlia — a filha criminosa de Sérvio" },
  { la: "Lucrētia", pt: "Lucrécia — cuja morte derrubou os reis" },
  { la: "Brūtus", pt: "Bruto — libertador, primeiro cônsul" },
  { la: "Collātīnus", pt: "Colatino — marido de Lucrécia" },
  { la: "Cincinnātus", pt: "Cincinato — o ditador do arado" },
  { la: "Pyrrhus", pt: "Pirro — rei do Épiro, dos elefantes" },
  { la: "Fabricius", pt: "Fabrício — o incorruptível" },
  { la: "Hannibal", pt: "Aníbal — o grande inimigo (gen. Hannibalis)" },
  { la: "Hamilcar", pt: "Amílcar Barca — pai de Aníbal" },
  { la: "Scīpiō", pt: "Cipião (Africano = venceu Zama; Emiliano = destruiu Cartago)" },
  { la: "Philippus", pt: "Filipe V — rei da Macedônia" },
  { la: "Flāminīnus", pt: "Flaminino — libertador da Grécia" },
  { la: "Catō", pt: "Catão — 'Karthāgō dēlenda est' (gen. Catōnis)" },
  { la: "Iugurtha", pt: "Jugurta — rei da Numídia" },
  { la: "Marius", pt: "Mário — 7 vezes cônsul" },
  { la: "Sulla", pt: "Sula — ditador das proscrições" },
  { la: "Pompeius", pt: "Pompeu Magno (rev.)" },
  { la: "Cicerō", pt: "Cícero — o orador (gen. Cicerōnis)" },
  { la: "Laelius", pt: "Lélio — amigo de Cipião no diálogo" },
  { la: "Masinissa", pt: "Masinissa — rei númida aliado" },
  { la: "Mithridātēs", pt: "Mitridates — rei do Ponto" },
  { la: "Sabīnī", pt: "os sabinos" },
  { la: "Cimbrī", pt: "os cimbros (germanos)" },
  { la: "Teutonēs", pt: "os teutões" },
  { la: "Numidia", pt: "Numídia — reino norte-africano" },
  { la: "Macedonia", pt: "Macedônia" },
  { la: "Eutropius", pt: "Eutrópio — autor do Breviário" },
  { la: "Gellius", pt: "Aulo Gélio — Noites Áticas" },
  { la: "Nepōs", pt: "Cornélio Nepote — biógrafo" },
  { la: "Sallustius", pt: "Salústio — historiador moralista" }
);

Object.assign(EXTRA_GLOSS, {
  "constat": "é consenso", "supererat": "restava", "peperit": "deu à luz",
  "vagitum": "choro de bebê (acus.)", "sicco": "seco (abl.)", "educandos": "para criar",
  "cognita": "conhecida (abl.)", "reddiderunt": "devolveram", "orto": "surgido (abl.)",
  "crinibus": "cabelos (abl.)", "passis": "soltos (abl.)", "nefando": "abominável",
  "aspergerent": "manchassem", "recenset": "passa em revista", "operuit": "cobriu",
  "integro": "novo, do zero (abl.)", "auxerunt": "engrandeceram", "adortus": "tendo atacado",
  "lugebat": "chorava a morte de", "quaecumque": "toda que", "fregisset": "tivesse quebrado",
  "traduxit": "transferiu", "sustulit": "levantou; tirou", "reposuit": "recolocou",
  "arsit": "ardeu", "coniuravit": "conspirou", "pelleretur": "fosse expulso",
  "saepsit": "cercou", "iussu": "por ordem (abl.)", "stricto": "desembainhado (abl.)",
  "postero": "seguinte (abl.)", "dexteras": "mãos direitas", "impune": "impunemente",
  "fore": "= futurum esse (que será)", "adultero": "adúltero (dat.)", "abrogavit": "revogou",
  "coepere": "= coeperunt", "gessere": "= gesserunt", "fecere": "= fecerunt",
  "sudorem": "suor (acus.)", "tersit": "enxugou", "recusavit": "recusou",
  "opplet": "enche", "oppletos": "cheios", "labebantur": "escorregavam",
  "ferme": "aproximadamente", "detraxerat": "tinha arrancado", "revectus": "trazido de volta",
  "praestitisse": "ter superado", "infitiandum": "de se negar", "destitit": "parou de",
  "indigens": "necessitado de", "consueverat": "costumava", "perfunctus": "tendo passado por",
  "acquievit": "descansou, morreu", "initum": "iniciado", "prospere": "com sucesso",
  "convenerat": "tinha se reunido", "stadio": "estádio (abl.)", "utentes": "usando",
  "iterata": "repetida (abl.)", "priscis": "antigas (abl.)", "adoptionem": "adoção (acus.)",
  "obsedit": "sitiou", "acerrime": "ferocissimamente", "aliquando": "algum dia",
  "sescentesimo": "sexcentésimo", "dehinc": "em seguida", "fertur": "conta-se que",
  "respiciens": "olhando pra trás", "maturē": "cedo, logo", "mature": "cedo, logo",
  "perituram": "que perecerá", "ignavi": "covardes/inertes", "confecit": "concluiu",
  "invidebat": "invejava; negava por inveja", "surrexerunt": "surgiram",
  "divisura": "que dividiriam", "grandis": "grande", "sponte": "por vontade própria",
  "privatus": "sem cargo, cidadão comum", "inaudītam": "inaudita", "inauditam": "inaudita",
  "referebantur": "eram inscritos", "quisquis": "quem quer que (rev.)",
  "complures": "vários", "assensit": "assentiu", "lata": "aprovada (lei)",
  "contione": "assembleia (abl.)", "celeritatem": "rapidez (acus.)", "speravisset": "teria esperado",
  "quasi": "como que, quase", "conciliat": "conquista, atrai", "quare": "por isso; por quê",
  "visitaverunt": "visitaram", "exponeret": "expusesse", "delectos": "escolhidos",
  "praeceps": "de cabeça, despencando", "delabitur": "resvala, degenera",
  "factio": "facção", "confusio": "confusão", "probandum": "aprovável",
  "aequatum": "equilibrado", "aliquot": "alguns, várias", "vesperum": "entardecer (acus.)",
  "epulas": "banquete (acus.)", "quiete": "sono (abl.)", "fulgenti": "brilhante (abl.)",
  "attingimus": "tocamos, alcançamos", "paeniteret": "me envergonhava",
  "scias": "saibas", "laxati": "libertos", "incolunt": "habitam",
  "migro": "parto, emigro", "conspicio": "avisto", "recreor": "me renovo",
  "macte": "parabéns! (macte virtūte = honra ao mérito)", "esto": "sê! (imperativo futuro)"
});
