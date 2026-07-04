/* ============================================================
   LATINVM — LIBER II: Capitula XLI–XLV (lote 2)
   Tito Lívio, Ab urbe condita I: de Enéias no Lácio à queda
   dos reis. Agora é autor romano de verdade!
   ============================================================ */

/* ================= CAPITVLVM XLI ================= */
COURSE.push({
  num: 41, roman: "XLI", icon: "🐺",
  title: "Orīginēs",
  subtitle: "Tito Lívio começa! Enéias no Lácio · Rômulo e Remo · -ēre = -ērunt",
  grammar: [
    { title: "Agora é Lívio de verdade",
      html: `Deste capítulo em diante você lê <b>Tito Lívio</b>, <i>Ab urbe condita</i> (com cortes marcados pelo Ørberg). Lívio escreveu sob Augusto a história de Roma inteira em 142 livros. O estilo: períodos longos, discurso indireto extenso, e a fórmula <span class="ex-la">satis cōnstat</span> = "é consenso que…" + AcI.` },
    { title: "-ēre = -ērunt (a marca de Lívio)",
      html: `Na prosa histórica, a 3ª plural do perfeito aparece na forma curta:
      <br><span class="ex-la">fuēre = fuērunt · vēnēre = vēnērunt · coepēre = coepērunt</span>
      <br>Quando vir um verbo terminado em <b>-ēre</b> que não é infinitivo, teste ler como -ērunt.` },
    { title: "A lenda que você precisa saber",
      html: `Enéias funda <b>Lāvīnium</b>; o filho Ascânio funda <b>Alba Longa</b>. Gerações depois, o usurpador <b>Amūlius</b> derruba o irmão <b>Numitor</b> e força a filha dele, <b>Rhēa Silvia</b>, a ser vestal. Ela dá à luz gêmeos de Marte: <b>Rōmulus e Remus</b>, jogados no Tibre, salvos e amamentados pela <b>loba</b> (lupa).` }
  ],
  vocab: [
    { la: "orīgō", forms: "-inis f.", pt: "origem", ex: "Orīginēs urbis Rōmae." },
    { la: "cōnstat", forms: "v. impess.", pt: "é consenso, consta", ex: "Satis cōnstat Aenēam in Italiam vēnisse." },
    { la: "ēgredī", forms: "-gressum dep.", pt: "desembarcar, sair", ex: "Trōiānī ē nāvibus ēgressī sunt." },
    { la: "immēnsus", forms: "-a -um", pt: "imenso", ex: "Ab immēnsō prope errōre." },
    { la: "superesse", forms: "v.", pt: "restar, sobrar", ex: "Nihil praeter arma et nāvēs supererat." },
    { la: "indigena", forms: "-ae m.", pt: "nativo, natural da terra", ex: "Latīnī indigenae erant." },
    { la: "foedus", forms: "-eris n.", pt: "tratado, aliança", ex: "Foedus inter Latīnum et Aenēam ictum est." },
    { la: "iungere", forms: "(rev.)", pt: "unir", ex: "Fīliam Aenēae in mātrimōnium iūnxit." },
    { la: "mātrimōnium", forms: "-ī n.", pt: "casamento", ex: "Lāvīniam in mātrimōnium dedit." },
    { la: "oppidum condere", forms: "loc.", pt: "fundar cidade (rev.)", ex: "Aenēās oppidum condidit." },
    { la: "vestālis", forms: "-is f.", pt: "vestal (sacerdotisa de Vesta)", ex: "Rhēa Silvia vestālis facta est." },
    { la: "geminī", forms: "-ōrum m. pl.", pt: "gêmeos", ex: "Vestālis geminōs peperit." },
    { la: "parere", forms: "peperisse partum", pt: "dar à luz, parir", ex: "Geminōs peperit." },
    { la: "lupa", forms: "-ae f.", pt: "loba", ex: "Lupa puerōs nūtrīvit." },
    { la: "nūtrīre", forms: "v.", pt: "amamentar, criar", ex: "Lupa geminōs nūtrīvisse dīcitur." },
    { la: "pāstor rēgius", forms: "loc.", pt: "pastor do rei", ex: "Faustulus pāstor puerōs invēnit." },
    { la: "alveus", forms: "-ī m.", pt: "cesto, gamela", ex: "Puerī in alveō expositī sunt." },
    { la: "expōnere", forms: "-posuisse -positum", pt: "expor, abandonar (criança)", ex: "Īnfantēs in rīpā expositī sunt." },
    { la: "stirps", forms: "stirpis f.", pt: "estirpe, descendência", ex: "Stirps rēgia Albae." },
    { la: "avus", forms: "-ī m.", pt: "avô", ex: "Numitor avus geminōrum erat." },
    { la: "imperium dēferre", forms: "loc.", pt: "entregar o poder", ex: "Imperium Numitōrī dēlātum est." },
    { la: "certāmen", forms: "-inis n.", pt: "disputa, competição", ex: "Certāmen inter frātrēs ortum est." },
    { la: "augurium", forms: "-ī n.", pt: "augúrio (sinal dos pássaros)", ex: "Auguriīs deōs cōnsuluērunt." },
    { la: "vultur", forms: "-uris m.", pt: "abutre", ex: "Remō sex vulturēs appāruērunt." },
    { la: "interficere", forms: "-fēcisse -fectum", pt: "matar", ex: "Remus ā Rōmulō interfectus est." },
    { la: "condere urbem", forms: "(rev.)", pt: "fundar a cidade", ex: "Rōmulus urbem novam condidit." }
  ],
  pensum: [
    { t: "mcq", q: "“Satis cōnstat Aenēam in Italiam vēnisse” =", options: ["É consenso que Enéias veio à Itália", "Enéias consta na lista da Itália", "Basta que Enéias venha à Itália"], a: 0,
      why: "cōnstat + AcI: a fórmula do historiador." },
    { t: "cloze", prompt: "Trōiānī et Latīnī foedus fēc___ (forma curta de Lívio).", options: ["-ēre", "-erant", "-erint"], a: 0,
      why: "fēcēre = fēcērunt: a 3ª plural curta do perfeito." },
    { t: "gap", prompt: "Lupa geminōs ___ dīcitur.", a: ["nutrivisse", "nūtrīvisse"], hint: "(ter amamentado)",
      why: "dīcitur + infinitivo perfeito: a lenda reportada." },
    { t: "mcq", q: "Quem eram os pais de Rômulo e Remo (segundo a lenda)?", options: ["Mārs e Rhēa Silvia", "Aenēās e Lāvīnia", "Numitor e Vesta"], a: 0,
      why: "A vestal e o deus da guerra — sangue divino pra cidade guerreira." },
    { t: "cloze", prompt: "Amūlius frātrem Numitōr__ rēgnō expulit.", options: ["-em", "-is", "-ī"], a: 0,
      why: "Objeto direto: Numitōrem." },
    { t: "build", pt: "A loba amamentou os gêmeos na margem do rio.", la: "Lupa geminōs in rīpā flūminis nūtrīvit", extra: ["gemini", "rīpam"] },
    { t: "read", text: "Rōmulus et Remus urbem condere cōnstituērunt, sed certāmen ortum est: uter nōmen novae urbī daret? Auguriīs deōs cōnsuluērunt: Remō prius sex vulturēs, Rōmulō posteā duodecim appāruērunt.",
      q: "Quot vulturēs Rōmulō appāruērunt?", options: ["Duodecim", "Sex", "Nūllī"], a: 0,
      why: "12 contra 6 — mas 'prius' contra 'posteā': daí a briga fatal." },
    { t: "listen", text: "Rōmulus urbem novam in monte Palātīnō condidit.", options: ["Rōmulus urbem novam in monte Palātīnō condidit", "Remus urbem novam in Aventīnō condidit", "Aenēās Albam Longam condidit"], a: 0,
      why: "753 a.C., a data que todo romano sabia." },
    { t: "cloze", prompt: "Remus ā Rōmul__ interfectus est.", options: ["-ō", "-um", "-us"], a: 0,
      why: "Agente da passiva: ā Rōmulō." },
    { t: "type", prompt: "“loba”:", a: ["lupa"], why: "A lupa Capitōlīna — símbolo de Roma até hoje." }
  ],
  lectio: {
    title: "Orīginēs",
    source: "Adaptado de Roma Aeterna, cap. XLI (Lívio I.1–7)",
    text: `Iam prīmum omnium satis cōnstat, Trōiā captā, Aenēam domō profugum in Italiam vēnisse. Ibi Latīnus rēx et Aenēās foedus fēcēre: Latīnus Aenēae Lāvīniam fīliam in mātrimōnium dedit, et Trōiānī oppidum condidērunt, quod Aenēās ab nōmine uxōris Lāvīnium appellāvit. Ascanius, fīlius Aenēae, novam ipse urbem sub monte Albānō condidit, quae Alba Longa appellāta est.

Ibi per multās aetātēs stirps Aenēae rēgnāvit, dōnec Amūlius Numitōrem frātrem māiōrem rēgnō expulit, et Rhēam Silviam, frātris fīliam, vestālem fēcit — nē quem partum habēret. Sed vestālis geminōs peperit, Mārtem patrem esse dēclārāns. Rēx īrātus puerōs in Tiberim expōnī iussit.

Forte aqua alveum cum puerīs in siccō relīquit. Lupa, quae dē montibus dēscenderat, vāgītum audīvit et geminōs nūtrīvisse dīcitur! Faustulus, pāstor rēgius, puerōs invēnit et uxōrī ēducandōs dedit.

Adulēscentēs Rōmulus et Remus, cognitā orīgine suā, Amūlium interfēcērunt et avō Numitōrī rēgnum reddidērunt. Deinde urbem novam condere cōnstituērunt — sed certāmine ortō, Remus ā frātre interfectus est. Ita Rōmulus sōlus urbem condidit, quam ā suō nōmine Rōmam vocāvit.`,
    questions: [
      { q: "Quod oppidum Aenēās condidit?", options: ["Lāvīnium", "Albam Longam", "Rōmam"], a: 0 },
      { q: "Quis geminōs nūtrīvisse dīcitur?", options: ["Lupa", "Faustulus", "Rhēa Silvia"], a: 0 },
      { q: "Cui Rōmulus et Remus rēgnum reddidērunt?", options: ["Numitōrī avō", "Amūliō", "Latīnō"], a: 0 },
      { q: "Quōmodo Remus periit?", options: ["Ā frātre interfectus est", "In Tiberī mersus est", "Ab Amūliō occīsus est"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XLII ================= */
COURSE.push({
  num: 42, roman: "XLII", icon: "⚖️",
  title: "Bellum et Pāx",
  subtitle: "O rapto das sabinas · Rômulo e Numa · cum…tum · supino em -um",
  grammar: [
    { title: "cum… tum = não só… mas principalmente",
      html: `<span class="ex-la"><b>Cum</b> aetās vīrēsque, <b>tum</b> avīta glōria animum stimulābat.</span>
      <br>= tanto a idade e as forças quanto (sobretudo) a glória do avô o estimulavam.
      <br>Não confundir com cum temporal/causal!` },
    { title: "Supino em -um (ir PARA fazer)",
      html: `Com verbos de movimento:
      <br><span class="ex-la">Sabīnī Rōmam <b>spectātum</b> vēnērunt.</span> = vieram <b>para assistir</b>.
      <br><span class="ex-la">lēgātōs <b>questum</b> mīsērunt</span> = mandaram embaixadores para reclamar.` },
    { title: "O contraste Rômulo × Numa",
      html: `Lívio constrói os dois primeiros reis como opostos: <b>Rômulo</b>, o guerreiro que dobra a cidade pela força (o rapto das sabinas, as guerras); <b>Numa Pompílio</b>, o sábio sabino que dá a Roma a religião, os sacerdotes, o calendário — <span class="ex-la">urbem, quam vī et armīs conditam habēbat, iūre lēgibusque dē integrō condere parat.</span>` }
  ],
  vocab: [
    { la: "asȳlum", forms: "-ī n.", pt: "asilo, refúgio", ex: "Rōmulus asȳlum aperuit." },
    { la: "turba", forms: "-ae f.", pt: "multidão", ex: "Turba omnis generis eō cōnfūgit." },
    { la: "cōnūbium", forms: "-ī n.", pt: "direito de casamento", ex: "Fīnitimī cōnūbium negāvērunt." },
    { la: "fīnitimus", forms: "-a -um", pt: "vizinho (de fronteira)", ex: "Populī fīnitimī Rōmānōs spernēbant." },
    { la: "lūdī", forms: "-ōrum m. pl.", pt: "jogos (públicos)", ex: "Rōmulus lūdōs parāvit." },
    { la: "spectāculum", forms: "-ī n.", pt: "espetáculo", ex: "Ad spectāculum vēnērunt." },
    { la: "rapere", forms: "-uisse -ptum", pt: "raptar, arrebatar", ex: "Virginēs Sabīnae raptae sunt." },
    { la: "virgō", forms: "-inis f.", pt: "moça, virgem", ex: "Virginēs raptae flēbant." },
    { la: "querī", forms: "questum dep.", pt: "queixar-se", ex: "Parentēs virginum querēbantur." },
    { la: "iniūria", forms: "-ae f.", pt: "injustiça, ofensa", ex: "Iniūriam ultum īre volēbant." },
    { la: "medius", forms: "-a -um", pt: "o meio de", ex: "In mediam pugnam sē iēcērunt." },
    { la: "hinc… illinc", forms: "adv.", pt: "de um lado… do outro", ex: "Hinc patrēs, illinc virī." },
    { la: "ōrāre", forms: "(rev.)", pt: "implorar", ex: "Mulierēs pācem ōrāvērunt." },
    { la: "socer", forms: "-erī m.", pt: "sogro", ex: "Socerōs generōsque ōrābant." },
    { la: "ūnus populus", forms: "loc.", pt: "um só povo", ex: "Ex duōbus populīs ūnus factus est." },
    { la: "sacerdōs", forms: "-ōtis m./f.", pt: "sacerdote", ex: "Numa sacerdōtēs creāvit." },
    { la: "rītus", forms: "-ūs m.", pt: "rito, cerimônia", ex: "Rītūs sacrōrum docuit." },
    { la: "iūs", forms: "iūris n. (rev.)", pt: "direito, lei", ex: "Iūra dedit populō." },
    { la: "īnsigne", forms: "-is n.", pt: "insígnia, distintivo", ex: "Īnsignia imperiī sūmpsit." },
    { la: "līctor", forms: "-ōris m.", pt: "lictor (guarda do rei)", ex: "Duodecim līctōrēs rēgem antēcēdēbant." },
    { la: "caelestis", forms: "-e", pt: "celeste, do céu", ex: "Rōmulus inter caelestēs receptus est." },
    { la: "prōcella", forms: "(rev.)", pt: "tempestade", ex: "Prōcella rēgem operuit." },
    { la: "deinceps", forms: "adv.", pt: "em seguida, sucessivamente", ex: "Numa deinceps rēgnāvit." },
    { la: "pietās", forms: "(rev.)", pt: "devoção religiosa", ex: "Numa pietātem docuit." },
    { la: "annus", forms: "(rev.)", pt: "ano; calendário", ex: "Numa annum in duodecim mēnsēs dīvīsit." }
  ],
  pensum: [
    { t: "mcq", q: "Por que Rômulo raptou as sabinas?", options: ["Porque os vizinhos negavam casamento aos romanos", "Por vingança de guerra", "Por ordem dos deuses"], a: 0,
      why: "Sem cōnūbium, a cidade nova morreria em uma geração." },
    { t: "cloze", prompt: "Sabīnī Rōmam spectāt__ vēnērunt.", options: ["-um", "-ūrus", "-iō"], a: 0,
      why: "Supino com verbo de movimento: spectātum = para assistir." },
    { t: "gap", prompt: "Mulierēs in mediam pugnam sē iēcērunt et ___ ōrāvērunt.", a: ["pacem", "pācem"], hint: "(paz)",
      why: "As sabinas param a batalha entre pais e maridos." },
    { t: "mcq", q: "“Cum aetās, tum glōria animum stimulābat” =", options: ["Tanto a idade quanto (sobretudo) a glória o estimulavam", "Quando a idade veio, a glória o estimulou", "Com a idade, a glória o estimulava"], a: 0,
      why: "cum…tum correlativo, não o cum temporal." },
    { t: "cloze", prompt: "Ex duōbus popul__ ūnus factus est.", options: ["-īs", "-ōs", "-ī"], a: 0,
      why: "ex + ablativo: ex duōbus populīs." },
    { t: "build", pt: "Numa deu leis e ritos ao povo romano.", la: "Numa iūra et rītūs populō Rōmānō dedit", extra: ["populum", "iūs"] },
    { t: "read", text: "Ōlim, dum Rōmulus exercitum recēnset, subitō prōcella cum magnō fragōre orta rēgem dēnsā nūbe operuit. Rōmulus posteā in terrīs nōn fuit: patrēs eum ad deōs raptum esse dīxērunt.",
      q: "Quid Rōmulō factum esse dīcitur?", options: ["Ad deōs raptus est", "In flūmine mersus est", "Ā Sabīnīs interfectus est"], a: 0,
      why: "A apoteose de Rômulo — que vira o deus Quirīnus." },
    { t: "listen", text: "Virginēs Sabīnae inter lūdōs raptae sunt.", options: ["Virginēs Sabīnae inter lūdōs raptae sunt", "Mātrēs Rōmānae ad lūdōs vēnērunt", "Sabīnī lūdōs Rōmānīs parāvērunt"], a: 0,
      why: "O rapto durante o espetáculo — o casamento fundador de Roma." },
    { t: "cloze", prompt: "Numa ann__ in duodecim mēnsēs dīvīsit.", options: ["-um", "-ō", "-īs"], a: 0,
      why: "Objeto: annum — Numa cria o calendário (lembra do cap. XIII!)." },
    { t: "type", prompt: "“sacerdote”:", a: ["sacerdos", "sacerdōs"], why: "sacerdōs, -ōtis — criação de Numa." }
  ],
  lectio: {
    title: "Bellum et Pāx",
    source: "Adaptado de Roma Aeterna, cap. XLII (Lívio I.8–21)",
    text: `Urbs nova crēscēbat, sed virī sine mulieribus erant: populī enim fīnitimī cōnūbium Rōmānīs negābant. Tum Rōmulus dolum parāvit: lūdōs magnificōs fēcit et fīnitimōs ad spectāculum invītāvit. Sabīnī cum līberīs et coniugibus spectātum vēnērunt. Ubi signum datum est, iuvenēs Rōmānī virginēs Sabīnās rapuērunt! Parentēs virginum, iniūriam questī, bellum parāvērunt.

Cum aciēs Rōmāna et Sabīna in mediō campō stārent, subitō mulierēs raptae, crīnibus passīs, in mediam pugnam sē iēcērunt: hinc patrēs, illinc virōs ōrantēs nē sanguine sē nefandō aspergerent. Movet rēs ducēs: nōn pācem modo, sed ūnum populum ex duōbus faciunt.

Rōmulus multōs annōs rēgnāvit. Ōlim, dum exercitum recēnset, prōcella orta rēgem dēnsā nūbe operuit, neque posteā in terrīs fuit: patrēs eum ad deōs raptum esse dīxērunt, et Quirīnum deum vocāvērunt.

Deinceps Numa Pompilius, vir Sabīnus iūstissimus, rēx creātus est. Is urbem, quam Rōmulus vī et armīs condiderat, iūre lēgibusque dē integrō condere parāvit: sacerdōtēs creāvit, rītūs sacrōrum docuit, annum in duodecim mēnsēs dīvīsit. Ita duo rēgēs, alter bellō, alter pāce, cīvitātem auxērunt.`,
    questions: [
      { q: "Cūr Rōmānī virginēs rapuērunt?", options: ["Quia fīnitimī cōnūbium negābant", "Quia bellum volēbant", "Quia Sabīnī lūdōs nōn parāvērunt"], a: 0 },
      { q: "Quis pugnam inter Rōmānōs et Sabīnōs fīnīvit?", options: ["Mulierēs raptae", "Numa", "Iuppiter"], a: 0 },
      { q: "Quid Rōmulō factum est?", options: ["Ad deōs raptus esse dīcitur", "Ā Sabīnīs occīsus est", "In exsilium iit"], a: 0 },
      { q: "Quālis rēx Numa fuit?", options: ["Iūstus et pācis amāns", "Ferōx et bellicōsus", "Superbus et crūdēlis"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XLIII ================= */
COURSE.push({
  num: 43, roman: "XLIII", icon: "🤺",
  title: "Rōma et Alba",
  subtitle: "Horácios contra Curiácios · Tullus Hostilius · gerúndio de finalidade",
  grammar: [
    { title: "ratus, arbitrātus — particípios depoentes",
      html: `Particípio perfeito dos depoentes tem sentido ATIVO:
      <br><span class="ex-la">Senēscere cīvitātem ōtiō <b>ratus</b>, māteriam bellī quaerēbat.</span>
      <br>= <b>achando</b> que a cidade envelhecia no ócio… (rērī = achar)
      <br>Também: <span class="ex-la">questus</span> = tendo-se queixado, <span class="ex-la">ēgressus</span> = tendo saído.` },
    { title: "māteria bellī faciendī — gerundivo no genitivo",
      html: `<span class="ex-la">māteriam <b>bellī faciendī</b> quaerēbat</span> = buscava pretexto <b>para fazer guerra</b>.
      <br><span class="ex-la">tempus <b>pugnandī</b></span> = hora de lutar · <span class="ex-la">cupidus <b>rēgnandī</b></span> = ávido de reinar.` },
    { title: "O duelo dos trigêmeos",
      html: `Guerra Roma × Alba decidida por <b>3 contra 3</b>: os Horātiī (romanos) contra os Curiātiī (albanos). Dois romanos caem; o terceiro, <b>ilesos os três inimigos feridos</b>, finge fugir pra separá-los — e mata um por um. <span class="ex-la">"Duōs frātrum mānibus dedī; tertium causae bellī dabō!"</span>` }
  ],
  vocab: [
    { la: "ferōx", forms: "-ōcis", pt: "feroz, arrojado", ex: "Tullus ferōcior quam Rōmulus fuit." },
    { la: "ōtium", forms: "-ī n.", pt: "ócio, paz", ex: "Senēscere cīvitātem ōtiō ratus." },
    { la: "senēscere", forms: "-nuisse", pt: "envelhecer", ex: "Cīvitās ōtiō senēscit." },
    { la: "praeda", forms: "-ae f.", pt: "presa, saque", ex: "Agrestēs praedās agēbant." },
    { la: "lēgātus", forms: "-ī m.", pt: "embaixador; legado", ex: "Lēgātī rēs repetītum missī sunt." },
    { la: "trigeminī", forms: "-ōrum m. pl.", pt: "trigêmeos", ex: "Horātiī trigeminī frātrēs erant." },
    { la: "aciēs", forms: "-ēī f.", pt: "linha de batalha; exército", ex: "Utraque aciēs spectābat." },
    { la: "dīmicāre", forms: "v.", pt: "combater, lutar", ex: "Prō patriā dīmicāvērunt." },
    { la: "ferrum", forms: "-ī n.", pt: "ferro; espada", ex: "Ferrō dīmicātum est." },
    { la: "vulnus", forms: "-eris n.", pt: "ferimento", ex: "Duo Rōmānī vulneribus periērunt." },
    { la: "integer", forms: "-gra -grum", pt: "intacto, ileso", ex: "Horātius integer fuit." },
    { la: "fuga", forms: "-ae f.", pt: "fuga", ex: "Fugam simulāvit." },
    { la: "simulāre", forms: "(rev.)", pt: "fingir", ex: "Fugam simulāvit ut hostēs sēparāret." },
    { la: "intervāllum", forms: "-ī n.", pt: "intervalo, distância", ex: "Magnīs intervāllīs sequēbantur." },
    { la: "caedere", forms: "cecīdisse caesum", pt: "matar, abater", ex: "Singulōs caecīdit." },
    { la: "spolium", forms: "-ī n.", pt: "despojo", ex: "Spolia trium Curiātiōrum gerēbat." },
    { la: "sponsa", forms: "-ae f.", pt: "noiva", ex: "Soror sponsam Curiātiī fuerat." },
    { la: "flēre", forms: "-ēvisse", pt: "chorar (rev.)", ex: "Soror sponsum flēbat." },
    { la: "trānsfīgere", forms: "-fīxisse -fīxum", pt: "traspassar", ex: "Sorōrem gladiō trānsfīxit." },
    { la: "atrōx", forms: "-ōcis", pt: "atroz, terrível", ex: "Atrōx facinus vīsum est." },
    { la: "supplicium", forms: "(rev.)", pt: "pena capital", ex: "Ad supplicium damnātus est." },
    { la: "prōvocāre", forms: "v.", pt: "apelar (à assembleia)", ex: "Ad populum prōvocāvit." },
    { la: "absolvere", forms: "-visse -ūtum", pt: "absolver", ex: "Populus eum absolvit." },
    { la: "dīruere", forms: "-uisse -utum", pt: "arrasar, demolir", ex: "Alba dīruta est." },
    { la: "imperāre", forms: "(rev.)", pt: "mandar; dominar", ex: "Tullus Albānīs imperāvit." }
  ],
  pensum: [
    { t: "cloze", prompt: "Senēscere cīvitātem ōtiō rat___, bellum quaerēbat.", options: ["-us", "-ā", "-um"], a: 0,
      why: "ratus = particípio depoente ativo: 'achando'." },
    { t: "mcq", q: "“māteriam bellī faciendī quaerēbat” =", options: ["buscava pretexto para fazer guerra", "buscava material feito na guerra", "fazia guerra por material"], a: 0,
      why: "Gerundivo no genitivo: bellī faciendī." },
    { t: "gap", prompt: "Horātius fugam ___ ut Curiātiōs sēparāret.", a: ["simulavit", "simulāvit"], hint: "(fingiu)",
      why: "A jogada tática mais famosa de Lívio I." },
    { t: "mcq", q: "Como a guerra Roma × Alba foi decidida?", options: ["Duelo de trigêmeos: 3 contra 3", "Grande batalha campal", "Por sorteio"], a: 0,
      why: "Pra poupar os dois exércitos: Horātiī vs Curiātiī." },
    { t: "cloze", prompt: "Duo Rōmānī vulner_____ periērunt.", options: ["-ibus", "-a", "-um"], a: 0,
      why: "Ablativo de causa: vulneribus." },
    { t: "build", pt: "O romano matou os três inimigos um a um.", la: "Rōmānus trēs hostēs singulōs cecīdit", extra: ["hostium", "integrōs"] },
    { t: "read", text: "Horātius victor sorōrem suam vīdit flentem: sponsum enim Curiātium lūgēbat. Īrātus gladiō sorōrem trānsfīxit: 'Sīc eat quaecumque Rōmāna lūgēbit hostem!' Atrōx facinus patribus vīsum est — sed populus eum absolvit.",
      q: "Cūr Horātius sorōrem occīdit?", options: ["Quia hostem mortuum lūgēbat", "Quia fūgerat", "Quia Curiātiōs adiūverat"], a: 0,
      why: "O lado sombrio da virtus romana — e o primeiro julgamento com apelo ao povo." },
    { t: "listen", text: "Trēs Horātiī cum tribus Curiātiīs dīmicāvērunt.", options: ["Trēs Horātiī cum tribus Curiātiīs dīmicāvērunt", "Duo rēgēs inter sē pugnāvērunt", "Cīvitātēs pācem fēcērunt"], a: 0,
      why: "3 × 3 pelo destino de duas cidades." },
    { t: "cloze", prompt: "Alba dīrut__ est, et Albānī Rōmam trāductī sunt.", options: ["-a", "-um", "-ae"], a: 0,
      why: "Alba (fem.) dīruta est — a cidade-mãe destruída pela filha." },
    { t: "type", prompt: "“ferimento”:", a: ["vulnus"], why: "vulnus, -eris n. — 3ª declinação neutra." }
  ],
  lectio: {
    title: "Rōma et Alba",
    source: "Adaptado de Roma Aeterna, cap. XLIII (Lívio I.22–31)",
    text: `Post Numam Tullus Hostilius rēx creātus est — nōn sōlum proximō rēgī dissimilis, sed ferōcior etiam quam Rōmulus. Senēscere cīvitātem ōtiō ratus, undique māteriam bellī faciendī quaerēbat. Forte agrestēs Rōmānī ex Albānō agrō, Albānī ex Rōmānō praedās agēbant — inde bellum inter Rōmam et Albam, mātrem et fīliam, ortum est.

Nē tamen duo exercitūs inter sē caederent, placuit rem paucōrum certāmine fīnīrī: forte in utrōque exercitū erant trigeminī frātrēs, Horātiī Rōmānī et Curiātiī Albānī. Ferrō dīmicāvērunt, dum utraque aciēs spectat. Duo Rōmānī cecidērunt; trēs Albānī vulnerātī sunt. Tum Horātius, quī integer erat, fugam simulāvit: Curiātiī magnīs intervāllīs secūtī sunt — et ille singulōs adortus omnēs trēs cecīdit!

Victor Horātius domum rediēns sorōrem vīdit flentem: sponsum enim Curiātium lūgēbat. Īrātus gladiō sorōrem trānsfīxit: "Sīc eat quaecumque Rōmāna lūgēbit hostem!" Ob atrōx facinus ad supplicium damnātus, ad populum prōvocāvit — et populus eum absolvit.

Posteā, cum dux Albānus foedus frēgisset, Tullus Albam dīruit et Albānōs omnēs Rōmam trādūxit: ita ūna cīvitās ex duābus facta est.`,
    questions: [
      { q: "Quālis rēx Tullus fuit?", options: ["Ferōcior quam Rōmulus", "Pācis amāns ut Numa", "Timidus"], a: 0 },
      { q: "Quot Horātiī superfuērunt?", options: ["Ūnus", "Trēs", "Nūllus"], a: 0 },
      { q: "Quōmodo Horātius Curiātiōs vīcit?", options: ["Fugam simulāvit et singulōs cecīdit", "Omnēs simul aggressus est", "Auxiliō frātrum"], a: 0 },
      { q: "Quid Albae factum est?", options: ["Dīruta est", "Rōmam vīcit", "Foedus servāvit"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XLIV ================= */
COURSE.push({
  num: 44, roman: "XLIV", icon: "👑",
  title: "Rēgēs et Rēgīnae",
  subtitle: "Anco, Tarquínio Prisco, Sérvio Túlio — e a terrível Túlia",
  grammar: [
    { title: "ferunt, trāditur — mais vozes da tradição",
      html: `Como dīcitur: <span class="ex-la"><b>Ferunt</b> Tanaquilem rēgnī perītam fuisse.</span> = contam que…
      <br><span class="ex-la">Servius <b>trāditur</b> servā nātus esse.</span> = a tradição diz que Sérvio nasceu de escrava.` },
    { title: "comitia, patrēs auctōrēs — o vocabulário político",
      html: `<span class="ex-la"><b>comitia</b> -ōrum</span> = assembleia que elege o rei · <span class="ex-la">populus <b>creāvit</b>, patrēs <b>auctōrēs factī sunt</b></span> = o povo elegeu, os senadores ratificaram — a fórmula constitucional que Lívio repete a cada rei.` },
    { title: "Os reis que faltavam",
      html: `<b>Ancus Mārcius</b> (neto de Numa): funda Óstia. <b>Tarquinius Prīscus</b> (etrusco, guiado pela esposa vidente <b>Tanaquil</b>): o Circo, a Cloaca. <b>Servius Tullius</b> (nascido de escrava, cabeça em chamas no presságio): o censo e as centúrias. E <b>Tullia</b>, filha de Sérvio, que passa de carro sobre o corpo do pai — <span class="ex-la">scelerātus vīcus</span>.` }
  ],
  vocab: [
    { la: "interrēx", forms: "-rēgis m.", pt: "inter-rei (entre dois reinados)", ex: "Patrēs interrēgem nōmināvērunt." },
    { la: "comitia", forms: "-ōrum n. pl.", pt: "assembleia eleitoral", ex: "Interrēx comitia habuit." },
    { la: "creāre", forms: "v.", pt: "eleger, criar", ex: "Ancum populus rēgem creāvit." },
    { la: "auctor", forms: "-ōris m.", pt: "fiador, autor", ex: "Patrēs auctōrēs factī sunt." },
    { la: "nepōs", forms: "-ōtis m.", pt: "neto", ex: "Ancus nepōs Numae erat." },
    { la: "religiō", forms: "-ōnis f.", pt: "culto, escrúpulo religioso", ex: "Proximus rēx religiōnēs neglēxerat." },
    { la: "neglegere", forms: "-ēxisse -ēctum", pt: "negligenciar", ex: "Sacra pūblica neglēxit." },
    { la: "carcer", forms: "-eris m.", pt: "prisão", ex: "Ancus carcerem aedificāvit." },
    { la: "colōnia", forms: "-ae f.", pt: "colônia", ex: "Ōstia colōnia dēducta est." },
    { la: "perītus", forms: "-a -um + gen.", pt: "conhecedor de", ex: "Tanaquil caelestium prōdigiōrum perīta." },
    { la: "prōdigium", forms: "-ī n.", pt: "prodígio, presságio", ex: "Prōdigium mīrābile vīsum est." },
    { la: "aquila", forms: "(rev.)", pt: "águia", ex: "Aquila pilleum sustulit." },
    { la: "circus", forms: "-ī m.", pt: "circo (de corridas)", ex: "Circum Maximum aedificāvit." },
    { la: "cloāca", forms: "-ae f.", pt: "esgoto, cloaca", ex: "Cloāca Maxima adhūc restat." },
    { la: "cēnsus", forms: "-ūs m.", pt: "censo, recenseamento", ex: "Servius cēnsum īnstituit." },
    { la: "classis", forms: "(rev.)", pt: "classe (de cidadãos)", ex: "Populum in classēs dīvīsit." },
    { la: "gradus", forms: "-ūs m.", pt: "degrau; posição", ex: "Gradūs dignitātis fēcit." },
    { la: "īnsidiae", forms: "-ārum f. pl.", pt: "emboscada, cilada", ex: "Rēx īnsidiīs periit." },
    { la: "scelus", forms: "(rev.)", pt: "crime", ex: "Scelus Tulliae omnēs terruit." },
    { la: "carpentum", forms: "-ī n.", pt: "carruagem", ex: "Tullia carpentō vecta est." },
    { la: "cadāver", forms: "-eris n.", pt: "cadáver", ex: "Super cadāver patris carpentum ēgit." },
    { la: "furia", forms: "-ae f.", pt: "fúria (espírito vingador)", ex: "Furiīs agitāta est." },
    { la: "vīcus", forms: "-ī m.", pt: "rua; bairro", ex: "Vīcus scelerātus appellātus est." },
    { la: "trādere", forms: "-didisse -ditum", pt: "transmitir; contar", ex: "Ita trāditur." },
    { la: "dignitās", forms: "-ātis f.", pt: "dignidade, posição", ex: "Dignitās cīvium ex cēnsū pendēbat." }
  ],
  pensum: [
    { t: "mcq", q: "“Ancum populus creāvit; patrēs auctōrēs factī sunt” =", options: ["O povo elegeu Anco; os senadores ratificaram", "O povo criou Anco; os pais viraram autores", "Anco elegeu o povo com os senadores"], a: 0,
      why: "A fórmula constitucional de eleição dos reis." },
    { t: "cloze", prompt: "Servius servā nātus esse trādit___.", options: ["-ur", "-us", "-ō"], a: 0,
      why: "trāditur + nom. + inf.: 'a tradição conta que'." },
    { t: "gap", prompt: "Tanaquil caelestium prōdigiōrum ___ erat.", a: ["perita", "perīta"], hint: "(conhecedora — feminino)",
      why: "perītus + genitivo: a rainha etrusca que lia presságios." },
    { t: "mcq", q: "Qual presságio marcou Sérvio Túlio menino?", options: ["Caput flammā ārsit sine iniūriā", "Aquila coronam dedit", "Lupa eum nūtrīvit"], a: 0,
      why: "A cabeça em chamas que não queimava — sinal de realeza." },
    { t: "cloze", prompt: "Servius cēns__ īnstituit, rem saluberrimam imperiō.", options: ["-um", "-ū", "-ūs"], a: 0,
      why: "Objeto: cēnsum — a invenção do recenseamento." },
    { t: "build", pt: "Túlia conduziu a carruagem sobre o cadáver do pai.", la: "Tullia carpentum super cadāver patris ēgit", extra: ["cadāvere", "patrem"] },
    { t: "read", text: "Tarquinius Prīscus, cum Rōmam veniret, prōdigium vīdit: aquila pilleum eius sustulit et rūrsus capitī reposuit. Tanaquil uxor, caelestium prōdigiōrum perīta, 'rēgnum eī portendī' dīxit.",
      q: "Quid aquila fēcit?", options: ["Pilleum sustulit et capitī reposuit", "Tarquinium vulnerāvit", "Carpentum secūta est"], a: 0,
      why: "A águia devolvendo o gorro = coroa prometida." },
    { t: "listen", text: "Tullia super corpus patris carpentum ēgisse dīcitur.", options: ["Tullia super corpus patris carpentum ēgisse dīcitur", "Tanaquil rēgnum virō suō portendit", "Servius populum in classēs dīvīsit"], a: 0,
      why: "O crime que deu nome ao 'vīcus scelerātus'." },
    { t: "cloze", prompt: "Ille vīcus posteā 'scelerāt__' appellātus est.", options: ["-us", "-um", "-ī"], a: 0,
      why: "vīcus (masc.): scelerātus." },
    { t: "type", prompt: "“neto”:", a: ["nepos", "nepōs"], why: "nepōs, -ōtis m. — Ancus, neto de Numa." }
  ],
  lectio: {
    title: "Rēgēs et Rēgīnae",
    source: "Adaptado de Roma Aeterna, cap. XLIV (Lívio I.32–48)",
    text: `Mortuō Tullō, Ancum Mārcium, nepōtem Numae, rēgem populus creāvit; patrēs auctōrēs factī sunt. Is sacra pūblica, quae avus īnstituerat, restituit, carcerem in mediā urbe aedificāvit, et Ōstiam colōniam in ōre Tiberis dēdūxit.

Eō rēgnante Lucumō, vir dīves Etrūscus, Rōmam migrāvit cum uxōre Tanaquile, caelestium prōdigiōrum perītā. Dum Rōmam veniunt, aquila pilleum eius sustulit et rūrsus capitī reposuit: Tanaquil rēgnum virō portendī dīxit. Nec falsa fuit: is, nōmine mūtātō Tarquinius Prīscus vocātus, post Ancum rēx creātus est. Circum Maximum aedificāvit et cloācās fēcit.

In domō rēgis prōdigium mīrābile vīsum est: caput puerī dormientis, cui Servius Tullius nōmen erat, flammā ārsit sine iniūriā. Is — quamquam servā nātus esse trāditur — posteā rēx factus est, et rem saluberrimam īnstituit: cēnsum, quō populus in classēs dīvidēbātur.

Sed Tullia, fīlia Servī, cum L. Tarquiniō coniūrāvit ut pater rēgnō pellerētur. Servius in viā occīsus est — et Tullia super cadāver patris carpentum ēgisse trāditur! Ille vīcus posteā 'scelerātus' appellātus est.`,
    questions: [
      { q: "Quam colōniam Ancus dēdūxit?", options: ["Ōstiam", "Albam", "Lāvīnium"], a: 0 },
      { q: "Quid Tanaquil ex prōdigiō aquilae intellēxit?", options: ["Rēgnum virō portendī", "Mortem virī", "Bellum futūrum"], a: 0 },
      { q: "Quid Servius īnstituit?", options: ["Cēnsum", "Comitia", "Carcerem"], a: 0 },
      { q: "Quod scelus Tullia fēcit?", options: ["Super cadāver patris carpentum ēgit", "Virum interfēcit", "Templum incendit"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XLV ================= */
COURSE.push({
  num: 45, roman: "XLV", icon: "🗽",
  title: "Rōma Līberāta",
  subtitle: "Lucrécia, Brutus e o fim dos reis · 509 a.C. · AcI com infinitivo futuro",
  grammar: [
    { title: "O juramento de Brutus (AcI futuro em série)",
      html: `<span class="ex-la">"Iūrō mē L. Tarquinium Superbum cum coniuge et līberīs ferrō ignī quācumque vī <b>exsecūtūrum</b> (esse), nec illōs nec alium quemquam <b>rēgnāre passūrum</b> (esse)."</span>
      <br>Nos juramentos, o esse do infinitivo futuro costuma ser omitido.` },
    { title: "prohibēre, dictitāre, iterāre",
      html: `<span class="ex-la">socerum sepelīrī <b>prohibuit</b></span> = proibiu que o sogro fosse sepultado (+ AcI passivo).
      <br><span class="ex-la"><b>dictitāns</b> 'Rōmulum quoque īnsepultum periisse'</span> = vivia dizendo (frequentativo de dīcere).` },
    { title: "A revolução de 509 a.C.",
      html: `<b>Tarquinius Superbus</b> reina pelo medo. O filho <b>Sextus</b> viola <b>Lucrētia</b>, esposa de Colatino. Ela conta ao pai e ao marido, exige vingança e se mata. <b>Brūtus</b> ergue o punhal e jura expulsar os reis. Nasce a <b>rēs pūblica</b>: <span class="ex-la">duo cōnsulēs prō ūnō rēge</span>, poder anual.` }
  ],
  vocab: [
    { la: "superbus", forms: "(rev.)", pt: "soberbo", ex: "Tarquiniō 'Superbō' cognōmen datum est." },
    { la: "sepelīre", forms: "-īvisse sepultum", pt: "sepultar", ex: "Socerum sepelīrī prohibuit." },
    { la: "custōs", forms: "-ōdis m.", pt: "guarda", ex: "Custōdibus armātīs corpus saepsit." },
    { la: "exsilium", forms: "-ī n.", pt: "exílio", ex: "Multōs in exsilium ēgit." },
    { la: "metum inicere", forms: "loc.", pt: "incutir medo", ex: "Ut plūribus metum iniceret." },
    { la: "stuprum", forms: "-ī n.", pt: "violação, estupro", ex: "Sextus Lucrētiae stuprum intulit." },
    { la: "pudīcitia", forms: "-ae f.", pt: "castidade, pudicícia", ex: "Pudīcitia Lucrētiae nōta erat." },
    { la: "maestus", forms: "-a -um", pt: "aflito, de luto", ex: "Lucrētia maesta sedēbat." },
    { la: "testis", forms: "-is m./f.", pt: "testemunha", ex: "Vōs testēs facio." },
    { la: "culter", forms: "-trī m. (rev.)", pt: "faca, punhal", ex: "Cultrō sē ipsa interfēcit." },
    { la: "castus", forms: "-a -um", pt: "casto, puro", ex: "Corpus violātum, animus castus." },
    { la: "iūrāre", forms: "v.", pt: "jurar", ex: "Brūtus per sanguinem iūrāvit." },
    { la: "exsequī", forms: "(rev.)", pt: "perseguir até o fim", ex: "Tarquinium exsecūtūrum iūrāvit." },
    { la: "patī", forms: "passum dep.", pt: "tolerar, sofrer", ex: "Nēminem rēgnāre passūrum." },
    { la: "portae claudere", forms: "loc.", pt: "fechar as portas a", ex: "Tarquiniō portae clausae sunt." },
    { la: "annuus", forms: "-a -um", pt: "anual", ex: "Imperium annuum cōnsulum." },
    { la: "bīnī", forms: "-ae -a", pt: "dois de cada vez", ex: "Bīnī cōnsulēs creātī sunt." },
    { la: "lībertās", forms: "-ātis f.", pt: "liberdade", ex: "Lībertātis auctor Brūtus fuit." },
    { la: "vindicāre", forms: "v.", pt: "vingar; reivindicar", ex: "Mortem Lucrētiae vindicāvit." },
    { la: "coniūrātiō", forms: "-ōnis f.", pt: "conjuração", ex: "Coniūrātiō contrā rēgem facta est." },
    { la: "expellere", forms: "-pulisse -pulsum", pt: "expulsar", ex: "Rēgēs Rōmā expulsī sunt." },
    { la: "posterī", forms: "-ōrum m. pl.", pt: "os descendentes", ex: "Posterī lībertātem servāvērunt." },
    { la: "fascēs", forms: "-ium m. pl.", pt: "fasces (feixes dos lictores)", ex: "Fascēs cōnsulibus praelātī sunt." },
    { la: "occāsiō", forms: "-ōnis f.", pt: "ocasião, oportunidade", ex: "Occāsiōnem exspectābat." }
  ],
  pensum: [
    { t: "cloze", prompt: "Brūtus iūrāvit sē nec illōs nec alium quemquam rēgnāre pass_____.", options: ["-ūrum", "-us est", "-ūrī"], a: 0,
      why: "AcI futuro no juramento: passūrum (esse) — o esse cai." },
    { t: "mcq", q: "“socerum sepelīrī prohibuit” =", options: ["proibiu que o sogro fosse sepultado", "proibiu o sogro de sepultar", "o sogro proibiu o sepultamento"], a: 0,
      why: "prohibēre + AcI passivo: o desrespeito fundador do Soberbo." },
    { t: "gap", prompt: "Lucrētia cultrō sē ipsa ___.", a: ["interfecit", "interfēcit"], hint: "(matou)",
      why: "'Corpus violātum, animus castus — mors testis erit.'" },
    { t: "mcq", q: "O que nasceu com a expulsão dos reis (509 a.C.)?", options: ["A república: dois cônsules com poder anual", "O império de Augusto", "A democracia ateniense"], a: 0,
      why: "duo prō ūnō rēge, imperium annuum — pra ninguém virar tirano." },
    { t: "cloze", prompt: "Rēgēs Rōmā expuls__ sunt.", options: ["-ī", "-ōs", "-us"], a: 0,
      why: "Perfeito passivo plural: expulsī sunt." },
    { t: "build", pt: "Brutus jurou vingar a morte de Lucrécia.", la: "Brūtus mortem Lucrētiae vindicātūrum esse iūrāvit", extra: ["Lucrētiam", "vindicat"] },
    { t: "read", text: "Lucrētia, vocātīs patre et coniuge, rem nārrāvit et 'Vōs' inquit 'vidēritis quid illī dēbeātur: ego mē etsī peccātō absolvō, suppliciō nōn līberō!' — et cultrō, quem sub veste habēbat, sē interfēcit.",
      q: "Quid Lucrētia ā patre et coniuge petīvit?", options: ["Ut iniūriam vindicārent", "Ut sē occīderent", "Ut rēgem servārent"], a: 0,
      why: "Ela exige a vingança e assume a própria morte como testemunho." },
    { t: "listen", text: "Brūtus cultrum ex vulnere Lucrētiae extrāxit et iūrāvit.", options: ["Brūtus cultrum ex vulnere Lucrētiae extrāxit et iūrāvit", "Tarquinius cultrum Lucrētiae dedit", "Collātīnus rēgem occīdit"], a: 0,
      why: "O punhal ensanguentado vira o juramento da liberdade." },
    { t: "cloze", prompt: "Prō ūnō rēge duo cōnsul__ creātī sunt.", options: ["-ēs", "-is", "-ibus"], a: 0,
      why: "Nominativo plural: cōnsulēs." },
    { t: "type", prompt: "“liberdade”:", a: ["libertas", "lībertās"], why: "lībertās, -ātis f. — a palavra da república." }
  ],
  lectio: {
    title: "Rōma Līberāta",
    source: "Adaptado de Roma Aeterna, cap. XLV (Lívio I.49–60)",
    text: `Inde L. Tarquinius rēgnāre coepit, cui 'Superbō' cognōmen datum est, quia socerum suum sepelīrī prohibuit, dictitāns 'Rōmulum quoque īnsepultum periisse'. Custōdibus armātīs corpus saepsit: neque enim ad iūs rēgnī quicquam praeter vim habēbat, ut quī neque populī iussū neque auctōribus patribus rēgnāret.

Dum rēx bellum gerit, Sextus fīlius Rōmam? — immō Collātiam vēnit, ubi Lucrētia, uxor Collātīnī, pudīcitiā nōta, eum benignē accēpit. Nocte Sextus, ferrō strictō, stuprum eī intulit. Posterō diē Lucrētia, vocātīs patre et coniuge, rem nārrāvit: "Corpus est tantum violātum, animus castus est: mors testis erit. Sed date dexterās fidemque, haud impūne adulterō fore!" — et cultrō sē interfēcit.

Brūtus cultrum ex vulnere extrāxit et: "Per hunc castissimum sanguinem iūrō, mē L. Tarquinium Superbum cum scelerātā coniuge et omnī līberōrum stirpe ferrō, ignī, quācumque vī exsecūtūrum, nec illōs nec alium quemquam rēgnāre Rōmae passūrum!"

Populus, hōc scelere commōtus, imperium rēgī abrogāvit. Tarquiniō portae clausae sunt: in exsilium iit. Prō ūnō rēge duo cōnsulēs annuī creātī sunt — et Brūtus, lībertātis auctor, prīmus cōnsul fuit. Rōma līberāta est!`,
    questions: [
      { q: "Cūr Tarquiniō 'Superbō' cognōmen datum est?", options: ["Quia socerum sepelīrī prohibuit et vī rēgnābat", "Quia pulcher erat", "Quia multa aedificāvit"], a: 0 },
      { q: "Quid Lucrētia fēcit post iniūriam?", options: ["Rem nārrāvit et sē interfēcit", "In exsilium iit", "Tarquinium occīdit"], a: 0 },
      { q: "Quid Brūtus iūrāvit?", options: ["Sē Tarquiniōs exsecūtūrum nec quemquam rēgnāre passūrum", "Sē rēgem futūrum", "Sē Rōmā discessūrum"], a: 0 },
      { q: "Quid prō ūnō rēge creātum est?", options: ["Duo cōnsulēs annuī", "Decem tribūnī", "Dictātor perpetuus"], a: 0 }
    ]
  }
});
