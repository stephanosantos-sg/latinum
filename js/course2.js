/* ============================================================
   LATINVM — Expansão: Capitula IX–XII + novos exercícios
   Carrega DEPOIS de course.js e fabellae.js, ANTES de app.js.
   ============================================================ */

/* ================= CAPITVLVM IX ================= */
COURSE.push({
  num: 9, roman: "IX", icon: "🐑",
  title: "Pāstor et Ovēs",
  subtitle: "A 3ª declinação · pāstor, ovis, canis · dum · ipse",
  grammar: [
    { title: "A 3ª declinação",
      html: `A maior família de substantivos do latim. O genitivo termina em <b>-is</b>:
      <table><tr><th>caso</th><th>singular</th><th>plural</th></tr>
      <tr><td>nom.</td><td class="la">pāstor / ovis</td><td class="la">pāstōrēs / ovēs</td></tr>
      <tr><td>acus.</td><td class="la">pāstōrem / ovem</td><td class="la">pāstōrēs / ovēs</td></tr>
      <tr><td>gen.</td><td class="la">pāstōris / ovis</td><td class="la">pāstōrum / ovium</td></tr>
      <tr><td>dat.</td><td class="la">pāstōrī / ovī</td><td class="la">pāstōribus / ovibus</td></tr>
      <tr><td>abl.</td><td class="la">pāstōre / ove</td><td class="la">pāstōribus / ovibus</td></tr></table>
      Do mesmo grupo: <span class="ex-la">canis, pānis, mōns (montis), sōl (sōlis), arbor (arboris), nūbēs.</span>` },
    { title: "est ≠ ēst!",
      html: `Pegadinha do capítulo: <b>est</b> = é/está; <b>ēst</b> (com ē longo) = come!
      <br><span class="ex-la">Canis herbam nōn ēst.</span> = O cão não come capim.
      <br>Plural: <span class="ex-la">edunt</span> = comem. <span class="ex-la">Ovēs herbam edunt.</span>` },
    { title: "dum · ipse",
      html: `<b>dum</b> = enquanto: <span class="ex-la">Dum pāstor dormit, ovis errat.</span>
      <br><b>ipse, ipsa, ipsum</b> = ele mesmo, em pessoa: <span class="ex-la">Nōn sōlum ovēs, sed etiam pāstor ipse aquam bibit.</span>` }
  ],
  vocab: [
    { la: "pāstor", forms: "-ōris m.", pt: "pastor (de ovelhas)", ex: "Pāstor centum ovēs habet." },
    { la: "ovis", forms: "-is f.", pt: "ovelha", ex: "Ūna ovis nigra errat." },
    { la: "canis", forms: "-is m./f.", pt: "cão, cadela", ex: "Canis niger cum pāstōre est." },
    { la: "campus", forms: "-ī m.", pt: "campo, planície", ex: "Ovēs in campō sunt." },
    { la: "silva", forms: "-ae f.", pt: "floresta, mata", ex: "Lupus in silvā est." },
    { la: "mōns", forms: "montis m.", pt: "monte, montanha", ex: "Ovis in monte errat." },
    { la: "vallis", forms: "-is f.", pt: "vale", ex: "Inter montēs vallis est." },
    { la: "rīvus", forms: "-ī m.", pt: "riacho", ex: "Ovēs aquam bibunt ē rīvō." },
    { la: "herba", forms: "-ae f.", pt: "capim, erva", ex: "Cibus ovium est herba." },
    { la: "cibus", forms: "-ī m.", pt: "comida, alimento", ex: "Pāstor canī cibum dat." },
    { la: "pānis", forms: "-is m.", pt: "pão", ex: "Cibus pāstōris est pānis." },
    { la: "sōl", forms: "sōlis m.", pt: "sol", ex: "Sōl in caelō est." },
    { la: "caelum", forms: "-ī n.", pt: "céu", ex: "Nūlla nūbēs in caelō est." },
    { la: "nūbēs", forms: "-is f.", pt: "nuvem", ex: "Sōl lūcet sine nūbibus." },
    { la: "umbra", forms: "-ae f.", pt: "sombra", ex: "Pāstor in umbrā dormit." },
    { la: "arbor", forms: "-oris f.", pt: "árvore", ex: "Umbra est sub arboribus." },
    { la: "lupus", forms: "-ī m.", pt: "lobo", ex: "Lupus ovem ēsse vult." },
    { la: "vestīgium", forms: "-ī n.", pt: "pegada, rastro", ex: "Pāstor vestīgia ovis videt." },
    { la: "niger", forms: "-gra -grum", pt: "preto, negro", ex: "Canis niger est." },
    { la: "albus", forms: "-a -um", pt: "branco", ex: "Ovēs albae sunt." },
    { la: "ēst (edunt)", forms: "v.", pt: "come (comem)", ex: "Ovēs herbam edunt." },
    { la: "bibit", forms: "v.", pt: "bebe", ex: "Ovis aquam bibit." },
    { la: "dūcit", forms: "v.", pt: "leva, conduz", ex: "Pāstor ovēs ad rīvum dūcit." },
    { la: "quaerit", forms: "v.", pt: "procura", ex: "Pāstor ovem quaerit." },
    { la: "reperit", forms: "v.", pt: "encontra, acha", ex: "Pāstor ovem reperit." },
    { la: "lātrat", forms: "v.", pt: "late", ex: "Canis lātrat: baubau!" },
    { la: "ululat", forms: "v.", pt: "uiva", ex: "Lupus in silvā ululat." },
    { la: "errat", forms: "v.", pt: "vagueia, anda perdido", ex: "Ovis nigra ab ovibus albīs errat." },
    { la: "impōnit", forms: "v.", pt: "põe em cima", ex: "Pāstor ovem in umerōs impōnit." },
    { la: "dum", forms: "conj.", pt: "enquanto", ex: "Dum pāstor dormit, lupus venit." },
    { la: "ipse", forms: "-a -um", pt: "ele mesmo, em pessoa", ex: "Pāstor ipse pānem ēst." }
  ],
  pensum: [
    { t: "cloze", prompt: "Ūna ovis nigra et centum ov__ albae.", options: ["-ēs", "-is", "-ibus"], a: 0,
      why: "Nominativo plural da 3ª declinação: ovēs." },
    { t: "cloze", prompt: "Pāstor ovibus et can__ cibum dat.", options: ["-ī", "-em", "-is"], a: 0,
      why: "Quem recebe fica no dativo: canī = ao cão." },
    { t: "cloze", prompt: "Cibus pāstōr__ est pānis.", options: ["-is", "-ī", "-em"], a: 0,
      why: "Genitivo da 3ª: pāstōris = do pastor." },
    { t: "mcq", q: "Qual a diferença entre est e ēst?", options: ["est = é/está; ēst = come", "São a mesma palavra", "ēst = é; est = come"], a: 0,
      why: "O ē longo muda tudo: Canis pānem ēst = o cão come pão." },
    { t: "gap", prompt: "Ovēs herbam edunt et aquam ___ ē rīvō.", a: ["bibunt"], hint: "(bebem)",
      why: "bibit → plural bibunt." },
    { t: "gap", prompt: "___ pāstor in umbrā dormit, ovis nigra in silvam intrat.", a: ["dum"], hint: "(enquanto)",
      why: "dum = enquanto." },
    { t: "build", pt: "O pastor conduz as ovelhas ao monte.", la: "Pāstor ovēs ad montem dūcit", extra: ["ovis", "monte"] },
    { t: "read", text: "Ovis nigra ab aliīs ovibus errat et in silvam intrat. Pāstor eam nōn videt, sed vestīgia ovis in terrā reperit. Canis quoque vestīgia videt et lātrat.",
      q: "Quō it ovis nigra?", options: ["In silvam", "Ad rīvum", "In montem"], a: 0,
      why: "«in silvam intrat» — entra na floresta." },
    { t: "listen", text: "Lupus in silvā ululat.", options: ["Lupus in silvā ululat", "Canis in campō lātrat", "Ovis in silvā errat"], a: 0,
      why: "lupus (lobo) + ululat (uiva)." },
    { t: "type", prompt: "“ele mesmo, em pessoa”:", a: ["ipse"], why: "Pāstor ipse pānem ēst." }
  ],
  lectio: {
    title: "Pāstor et Ovēs",
    source: "Adaptado de Familia Romana, cap. IX",
    text: `Hic vir, quī in campō ambulat, pāstor Iūliī est. Pāstor nōn sōlus est in campō: canis niger cum eō est, et centum ovēs — ūna ovis nigra et multae ovēs albae. Cibus ovium est herba. Ovēs herbam edunt et aquam bibunt ē rīvō, quī inter campum et silvam est. Canis herbam nōn ēst: cibus canis est pānis. Pāstor canī suō pānem dat; itaque canis pāstōrem amat.

Sōl in caelō est suprā campum. Nūlla nūbēs in caelō vidētur. In silvā autem umbra est sub arboribus. Dum pāstor in umbrā dormit, ovis nigra ab aliīs ovibus errat et in silvam intrat! Canis lātrat, sed pāstor dormit.

In silvā est lupus. Lupus ululat: "Huhuhū!" Pāstor oculōs aperit et ovēs numerat: "Ūna ovis abest!" Pāstor et canis vestīgia ovis in terrā vident. Dum ovem quaerunt in silvā, lupus quoque ovem videt — lupus ovem ēsse vult!

Sed canis accurrit et lātrat. Pāstor, quī baculum habet, ipse accurrit. Lupus canem et baculum pāstōris timet et ex silvā currit — sine ove! Pāstor laetus ovem nigram in umerōs impōnit et cum cane suō ad campum it. Sīc ovis nigra ā pāstōre bonō reperītur.`,
    questions: [
      { q: "Quid ovēs edunt?", options: ["Herbam", "Pānem", "Ovēs aliās"], a: 0 },
      { q: "Cūr canis pāstōrem amat?", options: ["Quia pāstor eī cibum dat", "Quia pāstor dormit", "Quia canis herbam ēst"], a: 0 },
      { q: "Quid agit ovis nigra dum pāstor dormit?", options: ["In silvam intrat", "Aquam bibit", "Lātrat"], a: 0 },
      { q: "Quis ovem ēsse vult?", options: ["Lupus", "Canis", "Pāstor"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM X ================= */
COURSE.push({
  num: 10, roman: "X", icon: "🦅",
  title: "Bēstiae et Hominēs",
  subtitle: "O infinitivo · potest/vult/audet · quod = quia",
  grammar: [
    { title: "O infinitivo: -re",
      html: `A forma "de dicionário" do verbo (andar, voar, nadar):
      <table><tr><th>conjugação</th><th>3ª pessoa</th><th>infinitivo</th></tr>
      <tr><td>1ª (-āre)</td><td class="la">volat</td><td class="la">volāre</td></tr>
      <tr><td>2ª (-ēre)</td><td class="la">videt</td><td class="la">vidēre</td></tr>
      <tr><td>3ª (-ere)</td><td class="la">currit</td><td class="la">currere</td></tr>
      <tr><td>4ª (-īre)</td><td class="la">audit</td><td class="la">audīre</td></tr></table>` },
    { title: "potest · vult · audet + infinitivo",
      html: `<span class="ex-la">Piscis natāre potest, ambulāre nōn potest.</span> — <b>potest</b> = pode (pl. <b>possunt</b>).
      <br><span class="ex-la">Mārcus ascendere nōn audet.</span> — <b>audet</b> = ousa, tem coragem.
      <br><span class="ex-la">Lupus ovem ēsse vult.</span> — <b>vult</b> = quer.
      <br><span class="ex-la">Necesse est hominī spīrāre.</span> — <b>necesse est</b> (+ dat.) = é necessário.` },
    { title: "quod = quia · vīvus/mortuus",
      html: `<b>quod</b> também significa "porque" (igual a quia):
      <br><span class="ex-la">Hominēs volāre nōn possunt, quod ālās nōn habent.</span>
      <br><b>vīvus</b> = vivo · <b>mortuus</b> = morto: <span class="ex-la">Quī spīrat vīvus est; quī nōn spīrat mortuus est.</span>` }
  ],
  vocab: [
    { la: "bēstia", forms: "-ae f.", pt: "animal, bicho", ex: "Leō et lupus bēstiae ferae sunt." },
    { la: "fera", forms: "-ae f.", pt: "fera, animal selvagem", ex: "Ferae aliās bēstiās edunt." },
    { la: "avis", forms: "-is f.", pt: "ave, pássaro", ex: "Avēs in āere volant." },
    { la: "piscis", forms: "-is m.", pt: "peixe", ex: "Piscēs in aquā natant." },
    { la: "āla", forms: "-ae f.", pt: "asa", ex: "Avis duās ālās habet." },
    { la: "cauda", forms: "-ae f.", pt: "rabo, cauda", ex: "Piscis caudam movet." },
    { la: "pēs", forms: "pedis m.", pt: "pé", ex: "Homō duōs pedēs habet." },
    { la: "homō", forms: "-inis m.", pt: "ser humano, pessoa", ex: "Hominēs ambulāre possunt." },
    { la: "deus", forms: "-ī m.", pt: "deus", ex: "Mercurius deus mercātōrum est." },
    { la: "aquila", forms: "-ae f.", pt: "águia", ex: "Aquila parvās avēs capit." },
    { la: "leō", forms: "-ōnis m.", pt: "leão", ex: "In Āfricā multī leōnēs sunt." },
    { la: "mare", forms: "-is n.", pt: "mar", ex: "Piscēs in marī natant." },
    { la: "āēr", forms: "āeris m.", pt: "ar", ex: "Avēs in āere volant." },
    { la: "flūmen", forms: "-inis n.", pt: "rio (grande)", ex: "In flūmine multī piscēs sunt." },
    { la: "nīdus", forms: "-ī m.", pt: "ninho", ex: "In arbore nīdus est." },
    { la: "ōvum", forms: "-ī n.", pt: "ovo", ex: "In nīdō sunt ōva." },
    { la: "pullus", forms: "-ī m.", pt: "filhote (de ave)", ex: "Quattuor pullī in nīdō sunt." },
    { la: "rāmus", forms: "-ī m.", pt: "galho, ramo", ex: "Rāmus tenuis est." },
    { la: "folium", forms: "-ī n.", pt: "folha", ex: "Avēs inter folia sē occultant." },
    { la: "vōx", forms: "vōcis f.", pt: "voz", ex: "Iūlia vōcem pulchram habet." },
    { la: "canit", forms: "v.", pt: "canta (música)", ex: "Avēs canere possunt." },
    { la: "volat", forms: "v.", pt: "voa", ex: "Aquila suprā hortum volat." },
    { la: "natat", forms: "v.", pt: "nada", ex: "Piscis in aquā natat." },
    { la: "movet", forms: "v.", pt: "move, mexe", ex: "Avis ālās movet." },
    { la: "spīrat", forms: "v.", pt: "respira", ex: "Homō vīvit dum spīrat." },
    { la: "capit", forms: "v.", pt: "captura, pega", ex: "Aquila avēs capit." },
    { la: "cadit", forms: "v.", pt: "cai", ex: "Rāmus ad terram cadit." },
    { la: "sustinet", forms: "v.", pt: "sustenta, aguenta", ex: "Rāmus puerum sustinēre nōn potest." },
    { la: "potest", forms: "possunt", pt: "pode (podem)", ex: "Canis volāre nōn potest." },
    { la: "vult", forms: "v.", pt: "quer", ex: "Canis avem capere vult." },
    { la: "audet", forms: "v.", pt: "ousa, tem coragem de", ex: "Mārcus ascendere nōn audet." },
    { la: "vīvus", forms: "-a -um", pt: "vivo", ex: "Quī spīrat vīvus est." },
    { la: "mortuus", forms: "-a -um", pt: "morto", ex: "Pullī mortuī sunt." },
    { la: "crassus", forms: "-a -um", pt: "gordo; grosso", ex: "Quīntus puer crassus est." },
    { la: "tenuis", forms: "-e", pt: "fino", ex: "Rāmus tenuis cadit." },
    { la: "perterritus", forms: "-a -um", pt: "apavorado", ex: "Mārcus perterritus currit." },
    { la: "nēmō", forms: "pron.", pt: "ninguém", ex: "Nēmō sine cibō vīvere potest." },
    { la: "enim", forms: "conj.", pt: "pois, com efeito", ex: "Piscēs enim spīrāre nōn possunt." },
    { la: "quod", forms: "conj.", pt: "porque (= quia)", ex: "Volāre nōn potest, quod ālās nōn habet." }
  ],
  pensum: [
    { t: "mcq", q: "Hominēs ambulāre ___, volāre nōn ___.", options: ["possunt / possunt", "potest / potest", "possunt / potest"], a: 0,
      why: "Sujeito plural: possunt nas duas." },
    { t: "cloze", prompt: "Piscis in aquā nat__ potest.", options: ["-āre", "-at", "-ant"], a: 0,
      why: "Depois de potest vem o infinitivo: natāre." },
    { t: "gap", prompt: "Avēs volāre possunt, quod ___ habent.", a: ["alas", "ālās"], hint: "(asas, acusativo plural)",
      why: "āla → acusativo plural ālās." },
    { t: "mcq", q: "“Necesse est hominī spīrāre” significa:", options: ["Respirar é necessário ao ser humano", "O homem respira quando é necessário", "É necessário que o ar respire"], a: 0,
      why: "necesse est + dativo + infinitivo." },
    { t: "build", pt: "O peixe não pode andar.", la: "Piscis ambulāre nōn potest", extra: ["natāre", "possunt"] },
    { t: "mcq", q: "vīvus / mortuus — quem está vivo?", options: ["Quī spīrat", "Quī nōn spīrat", "Quī nōn sē movet"], a: 0,
      why: "Homō vīvit dum spīrat." },
    { t: "read", text: "Mārcus nīdum in arbore reperit et Quīntum vocat. Quīntus in arborem ascendit: Mārcus ipse ascendere nōn audet! In nīdō nōn ōva, sed quattuor pullī sunt.",
      q: "Quid est in nīdō?", options: ["Quattuor pullī", "Quattuor ōva", "Nihil"], a: 0,
      why: "«nōn ōva, sed quattuor pullī»." },
    { t: "listen", text: "Rāmus cum puerō ad terram cadit.", options: ["Rāmus cum puerō ad terram cadit", "Rāmus tenuis puerum sustinet", "Puer in arborem ascendit"], a: 0,
      why: "cadit = cai; a cena da queda do Quinto." },
    { t: "gap", prompt: "Quī spīrat ___ est; quī nōn spīrat mortuus est.", a: ["vivus", "vīvus"], hint: "(vivo)",
      why: "vīvus ↔ mortuus." },
    { t: "type", prompt: "“quer” (3ª pessoa do singular):", a: ["vult"], why: "Lupus ovem ēsse vult." }
  ],
  lectio: {
    title: "Bēstiae et Hominēs",
    source: "Adaptado de Familia Romana, cap. X",
    text: `Equus et asinus, leō et lupus, canis et ovis bēstiae sunt. Leō et lupus sunt bēstiae ferae, quae aliās bēstiās capiunt et edunt. Aliae bēstiae sunt avēs, aliae piscēs. Avēs in āere volant; piscēs in aquā natant; hominēs in terrā ambulant. Avis duās ālās habet, homō duōs pedēs, piscis neque ālās neque pedēs habet.

Canis volāre nōn potest, neque pāstor volāre potest. Hominēs ambulāre possunt, quod pedēs habent; volāre nōn possunt, quod ālās nōn habent. Piscēs in terrā vīvere nōn possunt, nam piscēs in āere spīrāre nōn possunt. Homō vīvit dum spīrat: quī spīrat vīvus est, quī nōn spīrat mortuus est.

In hortō Mārcus nīdum reperit et Quīntum vocat: "Venī, Quīnte! In hāc arbore nīdus est. Ascende!" Quīntus in arborem ascendit — Mārcus ipse ascendere nōn audet! In nīdō nōn ōva, sed quattuor pullī sunt. Sed rāmus quī nīdum sustinet tenuis est, et Quīntus puer crassus est: rāmus tenuis puerum crassum sustinēre nōn potest. Ecce rāmus cum puerō et nīdō et pullīs ad terram cadit!

Mārcus perterritus ad vīllam currit et magnā vōce clāmat: "Venī, pater! Quīntus... est... mortuus!" Iūlius cum Mārcō ad Quīntum currit. Quīntus oculōs aperit. "Ecce oculōs aperit," inquit Iūlius, "ergō vīvus est!" Sed puer ambulāre nōn potest; itaque ā Iūliō in vīllam portātur et in lectō pōnitur.`,
    questions: [
      { q: "Cūr hominēs volāre nōn possunt?", options: ["Quod ālās nōn habent", "Quod pedēs habent", "Quod crassī sunt"], a: 0 },
      { q: "Quis in arborem ascendit?", options: ["Quīntus", "Mārcus", "Iūlius"], a: 0 },
      { q: "Cūr rāmus cadit?", options: ["Quia tenuis est et puer crassus", "Quia aquila eum capit", "Quia Mārcus eum pulsat"], a: 0 },
      { q: "Estne Quīntus mortuus?", options: ["Nōn est: spīrat et oculōs aperit", "Est: sē nōn movet", "Est: mortuus est ut pullī"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XI ================= */
COURSE.push({
  num: 11, roman: "XI", icon: "🩺",
  title: "Corpus Hūmānum",
  subtitle: "O corpo · neutros da 3ª · acusativo + infinitivo (dīcit… esse)",
  grammar: [
    { title: "Neutros da 3ª declinação",
      html: `<table><tr><th>nom.</th><th>gen.</th><th>plural</th><th></th></tr>
      <tr><td class="la">corpus</td><td class="la">corporis</td><td class="la">corpora</td><td>corpo</td></tr>
      <tr><td class="la">caput</td><td class="la">capitis</td><td class="la">capita</td><td>cabeça</td></tr>
      <tr><td class="la">crūs</td><td class="la">crūris</td><td class="la">crūra</td><td>perna</td></tr>
      <tr><td class="la">ōs</td><td class="la">ōris</td><td class="la">ōra</td><td>boca</td></tr>
      <tr><td class="la">cor</td><td class="la">cordis</td><td class="la">corda</td><td>coração</td></tr></table>
      Neutro: nominativo = acusativo, plural em <b>-a</b>.` },
    { title: "Acusativo + infinitivo (AcI)",
      html: `Depois de <b>dīcit</b>, <b>putat</b>, <b>videt</b>, <b>audit</b>, <b>sentit</b>, a frase relatada vai para acusativo + infinitivo:
      <br><span class="ex-la">Medicus "puerum aegrum <b>esse</b>" dīcit.</span> = O médico diz que o menino está doente.
      <br><span class="ex-la">Aemilia Quīntum dormīre putat.</span> = Emília acha que Quinto dorme.
      <br><span class="ex-la">Mārcus Quīntum cadere videt.</span> = Marcos vê Quinto cair.` },
    { title: "dolet + dativo · bene/male",
      html: `<span class="ex-la">Pēs mihi dolet.</span> = Meu pé dói (lit.: o pé dói para mim).
      <br><span class="ex-la">Caput eī dolet.</span> = A cabeça dele dói.
      <br><b>bene</b> = bem · <b>male</b> = mal: <span class="ex-la">Quī oculōs bonōs habet bene videt.</span>` }
  ],
  vocab: [
    { la: "corpus", forms: "-oris n.", pt: "corpo", ex: "Corpus hūmānum quattuor membra habet." },
    { la: "membrum", forms: "-ī n.", pt: "membro", ex: "Bracchium membrum est." },
    { la: "bracchium", forms: "-ī n.", pt: "braço", ex: "In bracchiō est manus." },
    { la: "crūs", forms: "crūris n.", pt: "perna", ex: "In crūre pēs est." },
    { la: "manus", forms: "-ūs f.", pt: "mão", ex: "Duae manūs in corpore sunt." },
    { la: "caput", forms: "-itis n.", pt: "cabeça", ex: "In capite sunt oculī et aurēs." },
    { la: "auris", forms: "-is f.", pt: "orelha, ouvido", ex: "Hominēs auribus audiunt." },
    { la: "ōs", forms: "ōris n.", pt: "boca", ex: "In ōre lingua et dentēs sunt." },
    { la: "capillus", forms: "-ī m.", pt: "cabelo", ex: "Capillus fēminārum longus est." },
    { la: "frōns", forms: "frontis f.", pt: "testa", ex: "Suprā oculōs frōns est." },
    { la: "lingua", forms: "-ae f.", pt: "língua", ex: "Lingua rubra est." },
    { la: "dēns", forms: "dentis m.", pt: "dente", ex: "Dentēs albī sunt ut margarītae." },
    { la: "pectus", forms: "-oris n.", pt: "peito", ex: "In pectore cor et pulmōnēs sunt." },
    { la: "cor", forms: "cordis n.", pt: "coração", ex: "Sanguis ad cor fluit." },
    { la: "pulmō", forms: "-ōnis m.", pt: "pulmão", ex: "Anima in pulmōnēs intrat." },
    { la: "sanguis", forms: "-inis m.", pt: "sangue", ex: "Color sanguinis ruber est." },
    { la: "vēna", forms: "-ae f.", pt: "veia", ex: "Sanguis per vēnās fluit." },
    { la: "venter", forms: "-tris m.", pt: "barriga, ventre", ex: "In ventre cibus est." },
    { la: "medicus", forms: "-ī m.", pt: "médico", ex: "Iūlius medicum arcessit." },
    { la: "pōculum", forms: "-ī n.", pt: "copo", ex: "Pōculum aquae plēnum est." },
    { la: "lectus", forms: "-ī m.", pt: "cama, leito", ex: "Puer aeger in lectō iacet." },
    { la: "iacet", forms: "v.", pt: "está deitado, jaz", ex: "Quīntus in lectō iacet." },
    { la: "aeger", forms: "-gra -grum", pt: "doente", ex: "Puer aeger est." },
    { la: "sānus", forms: "-a -um", pt: "são, saudável", ex: "Mārcus sānus est." },
    { la: "stultus", forms: "-a -um", pt: "tolo, burro", ex: "Quī cerebrum parvum habet stultus est." },
    { la: "ruber", forms: "-bra -brum", pt: "vermelho", ex: "Sanguis ruber est." },
    { la: "bene", forms: "adv.", pt: "bem", ex: "Quī oculōs bonōs habet bene videt." },
    { la: "male", forms: "adv.", pt: "mal", ex: "Syra male audit." },
    { la: "dolet", forms: "v. + dat.", pt: "dói", ex: "Pēs mihi dolet!" },
    { la: "sentit", forms: "v.", pt: "sente", ex: "Puer sanguinem fluere sentit." },
    { la: "iubet", forms: "v.", pt: "manda, ordena", ex: "Medicus puerum ōs aperīre iubet." },
    { la: "tangit", forms: "v.", pt: "toca", ex: "Medicus pedem eius tangit." },
    { la: "fluit", forms: "v.", pt: "flui, escorre", ex: "Sanguis dē bracchiō fluit." },
    { la: "dīcit", forms: "v.", pt: "diz", ex: "Medicus 'puerum aegrum esse' dīcit." },
    { la: "putat", forms: "v.", pt: "acha, considera", ex: "Aemilia medicum stultum esse putat." },
    { la: "arcessit", forms: "v.", pt: "manda chamar", ex: "Iūlius medicum arcessit." }
  ],
  pensum: [
    { t: "mcq", q: "“Medicus Quīntum dormīre videt” =", options: ["O médico vê que Quinto dorme", "O médico dorme e Quinto vê", "Quinto vê o médico dormir"], a: 0,
      why: "Acusativo (Quīntum) + infinitivo (dormīre): a frase relatada." },
    { t: "cloze", prompt: "Iūlius 'Quīntum aegr__ esse' dīcit.", options: ["-um", "-us", "-ō"], a: 0,
      why: "No AcI o sujeito e o adjetivo vão pro acusativo: Quīntum aegrum." },
    { t: "gap", prompt: "Pēs mihi ___!", a: ["dolet"], hint: "(dói)",
      why: "dolet + dativo: o pé dói 'para mim'." },
    { t: "cloze", prompt: "Corpus hūmānum quattuor membr__ habet.", options: ["-a", "-ōs", "-ās"], a: 0,
      why: "membrum é neutro: plural em -a (nom. e acus.)." },
    { t: "mcq", q: "Qual é o plural de corpus?", options: ["corpora", "corpī", "corpūs"], a: 0,
      why: "Neutro da 3ª: corpus, corporis, pl. corpora." },
    { t: "build", pt: "O sangue flui pelas veias ao coração.", la: "Sanguis per vēnās ad cor fluit", extra: ["corde", "fluunt"] },
    { t: "read", text: "Medicus puerum ōs aperīre iubet. Quīntus ōs aperit atque medicus linguam eius spectat. Medicus 'linguam rubram esse' dīcit — sed lingua rubra esse dēbet!",
      q: "Quid medicus spectat?", options: ["Linguam Quīntī", "Pedem Quīntī", "Sanguinem Quīntī"], a: 0,
      why: "«linguam eius spectat»." },
    { t: "listen", text: "Puer aeger in lectō iacet.", options: ["Puer aeger in lectō iacet", "Puer sānus in hortō currit", "Medicus in lectō dormit"], a: 0,
      why: "aeger (doente) + iacet (está deitado)." },
    { t: "gap", prompt: "Syra aurēs malās habet: ea ___ audit.", a: ["male"], hint: "(mal)",
      why: "bene ↔ male: advérbios." },
    { t: "type", prompt: "“saudável, são”:", a: ["sanus", "sānus"], why: "sānus ↔ aeger." }
  ],
  lectio: {
    title: "Medicus Venit",
    source: "Adaptado de Familia Romana, cap. XI",
    text: `Corpus hūmānum quattuor membra habet: duo bracchia et duo crūra. In bracchiō est manus, in crūre pēs. In corpore ūnum caput est. In capite sunt oculī et aurēs, nāsus et ōs. In ōre lingua et dentēs sunt: dentēs albī sunt ut margarītae. Sub collō est pectus: in pectore cor et pulmōnēs sunt. Sanguis per vēnās ad cor fluit; color sanguinis ruber est.

Quīntus in lectō iacet. Puer aeger est, nam dē arbore ad terram cadit: pēs eī dolet! Aemilia apud fīlium suum aegrum est. Iūlius medicum Tūsculō arcessit.

Medicus venit et puerum aspicit. "Ōs aperī, puer!" Medicus linguam Quīntī rubram esse videt et pedem eius tangit. Quīntus clāmat: "Ei, ei! Pēs dolet!"

Medicus culter? — nōn: medicus vēnam Quīntī aperit! Ruber sanguis dē bracchiō puerī fluit. Quīntus sanguinem dē bracchiō suō fluere sentit — puer perterritus est. Aemilia fīliō suō pōculum aquae dat.

Medicus discēdit. Sed Aemilia 'medicum stultum esse' putat: iam enim nōn sōlum pēs, sed etiam bracchium Quīntō dolet!`,
    questions: [
      { q: "Quot membra habet corpus hūmānum?", options: ["Quattuor", "Duo", "Decem"], a: 0 },
      { q: "Cūr Quīntus in lectō iacet?", options: ["Quia dē arbore cadit et pēs eī dolet", "Quia dormīre vult", "Quia medicus eum vocat"], a: 0 },
      { q: "Quid medicus aperit?", options: ["Vēnam Quīntī", "Ōs suum", "Ōstium"], a: 0 },
      { q: "Quid Aemilia putat?", options: ["Medicum stultum esse", "Medicum bonum esse", "Quīntum sānum esse"], a: 0 }
    ]
  }
});

/* ================= CAPITVLVM XII ================= */
COURSE.push({
  num: 12, roman: "XII", icon: "⚔️",
  title: "Mīles Rōmānus",
  subtitle: "O exército · comparativo (-ior) · 4ª declinação · dativo de posse",
  grammar: [
    { title: "O comparativo: -ior",
      html: `"Mais … (do) que":
      <br><span class="ex-la">Hasta long<b>ior</b> est quam pīlum.</span> = A lança é mais comprida que o dardo.
      <br><span class="ex-la">Pīlum grav<b>ius</b> est quam sagitta.</span> (neutro: -ius)
      <br>Adjetivos da 3ª declinação: <span class="ex-la">brevis, gravis, levis, fortis, trīstis</span> — masc./fem. em -is, neutro em -e.` },
    { title: "A 4ª declinação: -us, -ūs",
      html: `<table><tr><th>caso</th><th>singular</th><th>plural</th></tr>
      <tr><td>nom.</td><td class="la">exercitus</td><td class="la">exercitūs</td></tr>
      <tr><td>acus.</td><td class="la">exercitum</td><td class="la">exercitūs</td></tr>
      <tr><td>gen.</td><td class="la">exercitūs</td><td class="la">exercituum</td></tr>
      <tr><td>abl.</td><td class="la">exercitū</td><td class="la">exercitibus</td></tr></table>
      Do mesmo grupo: <span class="ex-la">arcus</span> (arco), <span class="ex-la">passus</span> (passo), <span class="ex-la">manus</span> (mão — feminino!).` },
    { title: "Dativo de posse · os três nomes",
      html: `<span class="ex-la">Mārcō ūna soror est.</span> = Marcos tem uma irmã (lit.: para Marcos há uma irmã).
      <br><span class="ex-la">Quod nōmen est patrī?</span> = Qual é o nome do pai?
      <br>Todo romano tem três nomes: <b>praenōmen</b> (Lūcius) + <b>nōmen</b> (Iūlius) + <b>cognōmen</b> (Balbus).` }
  ],
  vocab: [
    { la: "frāter", forms: "-tris m.", pt: "irmão", ex: "Mārcus et Quīntus frātrēs sunt." },
    { la: "soror", forms: "-ōris f.", pt: "irmã", ex: "Iūlia soror eōrum est." },
    { la: "nōmen", forms: "-inis n.", pt: "nome", ex: "Quod nōmen est patrī?" },
    { la: "praenōmen", forms: "-inis n.", pt: "prenome (1º nome)", ex: "'Lūcius' praenōmen est." },
    { la: "avunculus", forms: "-ī m.", pt: "tio (irmão da mãe)", ex: "Aemilius avunculus līberōrum est." },
    { la: "mīles", forms: "-itis m.", pt: "soldado", ex: "Aemilius mīles Rōmānus est." },
    { la: "exercitus", forms: "-ūs m.", pt: "exército", ex: "Exercitus Rōmānus fīnēs dēfendit." },
    { la: "arma", forms: "-ōrum n. pl.", pt: "armas", ex: "Rōmānī bona arma habent." },
    { la: "gladius", forms: "-ī m.", pt: "espada", ex: "Mīles gladiō armātus est." },
    { la: "pīlum", forms: "-ī n.", pt: "dardo, lança de arremesso", ex: "Pīlum breve et grave est." },
    { la: "hasta", forms: "-ae f.", pt: "lança", ex: "Hasta longa est." },
    { la: "scūtum", forms: "-ī n.", pt: "escudo", ex: "Mīles scūtum portat." },
    { la: "arcus", forms: "-ūs m.", pt: "arco", ex: "Mārcus arcum facit." },
    { la: "sagitta", forms: "-ae f.", pt: "flecha", ex: "Sagittae procul volant." },
    { la: "castra", forms: "-ōrum n. pl.", pt: "acampamento militar", ex: "Castra mīlle passūs ā flūmine sunt." },
    { la: "fossa", forms: "-ae f.", pt: "fosso, vala", ex: "Circum castra fossa est." },
    { la: "vāllum", forms: "-ī n.", pt: "paliçada, muralha do acampamento", ex: "Vāllum altum est." },
    { la: "dux", forms: "ducis m.", pt: "comandante, chefe", ex: "Dux exercitum dūcit." },
    { la: "hostis", forms: "-is m.", pt: "inimigo (de guerra)", ex: "Hostēs castra expugnāre volunt." },
    { la: "fīnis", forms: "-is m.", pt: "fim; (pl.) fronteiras", ex: "Exercitus fīnēs dēfendit." },
    { la: "patria", forms: "-ae f.", pt: "pátria", ex: "Mīlitēs patriam dēfendunt." },
    { la: "passus", forms: "-ūs m.", pt: "passo (medida)", ex: "Mīlle passūs = 1 milha romana." },
    { la: "fortis", forms: "-e", pt: "forte, corajoso", ex: "Aemilius mīles fortis est." },
    { la: "gravis", forms: "-e", pt: "pesado; grave", ex: "Pīlum grave est." },
    { la: "levis", forms: "-e", pt: "leve", ex: "Sagitta levis est." },
    { la: "brevis", forms: "-e", pt: "curto, breve", ex: "Gladius brevis est." },
    { la: "altus", forms: "-a -um", pt: "alto; fundo", ex: "Vāllum altum est." },
    { la: "barbarus", forms: "-a -um", pt: "bárbaro, estrangeiro", ex: "Hostēs barbarī sunt." },
    { la: "trīstis", forms: "-e", pt: "triste", ex: "Aemilia trīstis est." },
    { la: "noster", forms: "-tra -trum", pt: "nosso", ex: "Cūr māter nostra trīstis est?" },
    { la: "mīlitat", forms: "v.", pt: "serve como soldado", ex: "Aemilius in Germāniā mīlitat." },
    { la: "pugnat", forms: "v.", pt: "luta, combate", ex: "Mīles gladiō pugnat." },
    { la: "dēfendit", forms: "v.", pt: "defende", ex: "Exercitus patriam dēfendit." },
    { la: "iacit", forms: "v.", pt: "lança, arremessa", ex: "Mīles pīlum iacit." },
    { la: "fert", forms: "v.", pt: "carrega, leva", ex: "Mīles arma fert." },
    { la: "expugnat", forms: "v.", pt: "toma de assalto, conquista", ex: "Hostēs castra expugnāre nōn possunt." }
  ],
  pensum: [
    { t: "mcq", q: "“Mārcō ūna soror est” =", options: ["Marcos tem uma irmã", "Marcos é uma irmã", "A irmã está com Marcos"], a: 0,
      why: "Dativo de posse: 'para Marcos há uma irmã' = ele tem." },
    { t: "cloze", prompt: "Hasta long__ est quam gladius.", options: ["-ior", "-a", "-issima"], a: 0,
      why: "Comparativo: longior = mais comprida (quam = do que)." },
    { t: "cloze", prompt: "Pīlum grav__ est quam sagitta.", options: ["-ius", "-ior", "-e"], a: 0,
      why: "pīlum é neutro: comparativo neutro em -ius (gravius)." },
    { t: "gap", prompt: "Mīles patriam ab hostibus ___.", a: ["defendit", "dēfendit"], hint: "(defende)",
      why: "dēfendit ab = defende de." },
    { t: "mcq", q: "exercitus, -ūs (4ª declinação): qual é o genitivo singular?", options: ["exercitūs", "exercitī", "exercitem"], a: 0,
      why: "4ª declinação: gen. sing. -ūs (igual ao nom. plural)." },
    { t: "build", pt: "O irmão de Emília é um soldado romano.", la: "Frāter Aemiliae mīles Rōmānus est", extra: ["soror", "mīlitem"] },
    { t: "read", text: "Castra exercitūs Rōmānī mīlle passūs ā flūmine Rhēnō sunt. Circum castra fossa et vāllum altum est. Germānī, quī trāns flūmen habitant, castra Rōmāna expugnāre nōn possunt.",
      q: "Cūr Germānī castra expugnāre nōn possunt?", options: ["Quia fossa et vāllum altum castra dēfendunt", "Quia flūmen nōn habent", "Quia mīlle passūs ambulāre nōn possunt"], a: 0,
      why: "O fosso e a paliçada protegem o acampamento." },
    { t: "listen", text: "Mīlitēs Rōmānī castra dēfendunt.", options: ["Mīlitēs Rōmānī castra dēfendunt", "Mīlitēs barbarī castra expugnant", "Mīles Rōmānus pīlum iacit"], a: 0,
      why: "mīlitēs (plural) + dēfendunt." },
    { t: "mcq", q: "Os três nomes de um romano, na ordem:", options: ["praenōmen + nōmen + cognōmen", "nōmen + praenōmen + cognōmen", "cognōmen + nōmen + praenōmen"], a: 0,
      why: "Lūcius (prae.) Iūlius (nōmen) Balbus (cog.)." },
    { t: "type", prompt: "“irmã”:", a: ["soror"], why: "soror, sorōris f. — 3ª declinação." }
  ],
  lectio: {
    title: "Mīles Rōmānus",
    source: "Adaptado de Familia Romana, cap. XII",
    text: `Mārcus et Quīntus frātrēs sunt; Iūlia soror eōrum est. Nōmen patris est 'Lūcius Iūlius Balbus'. Virō Rōmānō tria nōmina sunt: 'Lūcius' est praenōmen, 'Iūlius' nōmen, 'Balbus' cognōmen.

Aemiliae ūnus frāter est, cui nōmen est 'Aemilius'. Frāter Aemiliae est avunculus līberōrum. Aemilius procul ā sorōre suā abest — itaque trīstis est Aemilia, quae frātrem suum amat. Mārcus et Iūlia patrem interrogant: "Cūr māter nostra trīstis est?"

Ubi est Aemilius? Aemilius mīles est: in Germāniā mīlitat. Illīc exercitus Rōmānus fīnēs imperiī Rōmānī ā Germānīs dēfendit. Castra exercitūs mīlle passūs ā flūmine Rhēnō sunt. Mīlitēs Rōmānī hostēs barbarōs nōn timent, nam Rōmānī bona arma habent: gladium, pīlum, scūtum. Circum castra fossa et vāllum altum est: Germānī castra Rōmāna expugnāre nōn possunt!

Pīlum nōn tam longum est quam hasta: hasta longior est quam pīlum. Pīla gravia procul iacī nōn possunt; sagittae autem procul volant, quia levēs sunt.

Mārcus 'Aemilium fortem esse' putat. Puer ipse mīlitāre vult ut avunculus suus — sed Iūlius dīcit 'puerōs mīlitāre nōn posse'!`,
    questions: [
      { q: "Quot nōmina sunt virō Rōmānō?", options: ["Tria", "Duo", "Ūnum"], a: 0 },
      { q: "Ubi mīlitat Aemilius?", options: ["In Germāniā", "In Graeciā", "Rōmae"], a: 0 },
      { q: "Cūr Aemilia trīstis est?", options: ["Quia frāter eius procul abest", "Quia Iūlius mīles est", "Quia Mārcus pugnat"], a: 0 },
      { q: "Quae arma longiora sunt: hastae an pīla?", options: ["Hastae", "Pīla", "Gladiī"], a: 0 }
    ]
  }
});

/* ============================================================
   Exercícios novos (lacunas, leitura, escuta) nos caps I–VIII
   ============================================================ */
COURSE[0].pensum.push(
  { t: "gap", prompt: "Nīlus ___ magnus est.", a: ["fluvius"], hint: "(rio)", why: "Nīlus é um rio: fluvius." },
  { t: "read", text: "Sardinia īnsula magna est. In Sardiniā multa oppida parva sunt, sed nūllus fluvius magnus in īnsulā est.",
    q: "Suntne fluviī magnī in Sardiniā?", options: ["Nōn sunt", "Sunt multī", "Ūnus est"], a: 0,
    why: "«nūllus fluvius magnus in īnsulā est»." },
  { t: "listen", text: "Rōma in Italiā est.", options: ["Rōma in Italiā est", "Rōma in Graeciā est", "Rōma īnsula est"], a: 0,
    why: "Italia — a primeira frase do livro!" }
);
COURSE[1].pensum.push(
  { t: "gap", prompt: "Mārcus et Quīntus fīliī ___ sunt.", a: ["Iulii", "Iūliī"], hint: "(de Júlio — genitivo)", why: "Genitivo: Iūliī = de Júlio." },
  { t: "read", text: "In familiā Cornēliī ūnus fīlius et ūna fīlia sunt: Sextus et Cornēlia. Cornēlius paucōs servōs habet, sed centum librōs Latīnōs et Graecōs!",
    q: "Quot līberī sunt in familiā Cornēliī?", options: ["Duo", "Trēs", "Centum"], a: 0,
    why: "Ūnus fīlius + ūna fīlia = duo līberī." }
);
COURSE[2].pensum.push(
  { t: "gap", prompt: "Iūlia plōrat, ___ Mārcus eam pulsat.", a: ["quia"], hint: "(porque)", why: "cūr pergunta, quia responde." },
  { t: "read", text: "Iūlius dormit. Iūlia plōrat et patrem vocat: 'Pater! Pa-ater!' Māter fīliam audit, neque pater eam audit.",
    q: "Quis Iūliam nōn audit?", options: ["Pater", "Māter", "Mārcus"], a: 0,
    why: "«neque pater eam audit» — ele está dormindo." },
  { t: "listen", text: "Cūr Iūlia plōrat?", options: ["Cūr Iūlia plōrat?", "Cūr Mārcus rīdet?", "Ubi Iūlia cantat?"], a: 0,
    why: "cūr = por quê? · plōrat = chora." }
);
COURSE[3].pensum.push(
  { t: "gap", prompt: "Dāvus sacculum suum ___ et discēdit.", a: ["sumit", "sūmit"], hint: "(pega)", why: "sūmit = pega, toma." },
  { t: "read", text: "In sacculō Iūliī nōn centum, sed tantum novem nummī sunt. Cēterī nummī in sacculō Mēdī sunt — et Mēdus abest!",
    q: "Quot nummī sunt in sacculō Iūliī?", options: ["Novem", "Centum", "Decem"], a: 0,
    why: "«tantum novem nummī»." }
);
COURSE[4].pensum.push(
  { t: "gap", prompt: "Puerī ex peristȳlō ___ et Iūliam vident.", a: ["veniunt"], hint: "(vêm — plural)", why: "venit → plural veniunt." },
  { t: "read", text: "Vīlla Iūliī magna est: ātrium, peristȳlum et multa cubicula habet. In ātriō est impluvium; in impluviō aqua est.",
    q: "Ubi est impluvium?", options: ["In ātriō", "In hortō", "In cubiculō"], a: 0,
    why: "«In ātriō est impluvium»." }
);
COURSE[5].pensum.push(
  { t: "gap", prompt: "Mēdus per portam Capēnam Rōmam ___.", a: ["intrat"], hint: "(entra)", why: "intrat = entra." },
  { t: "read", text: "Mēdus in viā Latīnā est inter Rōmam et Tūsculum. Post eum est Tūsculum, Rōma ante eum est. Mēdus cantat, quia ad amīcam suam ambulat.",
    q: "Quid est ante Mēdum?", options: ["Rōma", "Tūsculum", "Vīlla Iūliī"], a: 0,
    why: "«Rōma ante eum est» — ele vai em direção a Roma." },
  { t: "listen", text: "Quō it Mēdus? Rōmam it.", options: ["Quō it Mēdus? Rōmam it.", "Unde venit Mēdus? Rōmā venit.", "Ubi est Mēdus? Rōmae est."], a: 0,
    why: "quō = para onde; Rōmam = acusativo de direção." }
);
COURSE[6].pensum.push(
  { t: "gap", prompt: "Dēlia ___ in speculō videt.", a: ["se", "sē"], hint: "(a si mesma)", why: "sē = pronome reflexivo." },
  { t: "read", text: "Syra lacrimat, quia oculōs suōs foedōs esse putat. Dēlia eī speculum dat: 'Vidē! Sine lacrimīs pulchrī sunt oculī tuī.'",
    q: "Quid Dēlia Syrae dat?", options: ["Speculum", "Mālum", "Lacrimās"], a: 0,
    why: "«eī speculum dat»." }
);
COURSE[7].pensum.push(
  { t: "gap", prompt: "Tabernārius ōrnāmenta ___.", a: ["vendit", "vēndit"], hint: "(vende)", why: "vendit ↔ emit (compra)." },
  { t: "read", text: "Aemilia ānulum Dēliae ostendit: 'Pretium huius ānulī est mīlle et centum sēstertiī. Haec gemma sōla mīlle sēstertiīs cōnstat!'",
    q: "Quantī cōnstat gemma sōla?", options: ["Mīlle sēstertiīs", "Centum sēstertiīs", "Mīlle et centum sēstertiīs"], a: 0,
    why: "«Haec gemma sōla mīlle sēstertiīs cōnstat»." },
  { t: "listen", text: "Quantī cōnstat hic ānulus?", options: ["Quantī cōnstat hic ānulus?", "Quam pulcher est hic ānulus!", "Quot ānulī in sacculō sunt?"], a: 0,
    why: "quantī cōnstat = quanto custa." }
);

/* ============================================================
   Fabellae novas (10–14)
   ============================================================ */
FABELLAE.push(
{
  id: "fab10", cap: 9, icon: "🐺",
  title: "Dominī et equī",
  level: "cap. I–IX",
  text: `Iūlius et Cornēlius sunt dominī Rōmānī. Iūlius est dominus pecūniōsus, quī magnam vīllam habet et magnam familiam, id est multōs servōs. Etiam decem equōs fōrmōsōs habet Iūlius. Cornēlius nōn tam pecūniōsus est quam Iūlius: is decem tantum servōs habet, et ūnum equum album. Cornēlius equum suum amat.

Iūlius imperat: "Dūc equum ante ōstium, Syre!" Ex decem equīs Iūliī Syrus sūmit illum nigrum quem dominus ante aliōs amat, eumque ante ōstium dūcit. Iam dominus in equō est: Iūlius equō vehitur Tūsculum ad amīcum suum Cornēlium.

Iūlius ante ōstium Cornēliī cōnsistit et amīcum suum salūtat: "Salvē, amīce! Sūme equum tuum et venī in silvam cum amīcō tuō!" Amīcī duo oppidum relinquunt et per vallem ad silvam eunt. Equī laetī per campum currunt. Ovēs, quae errant in campō, equōs timent et ad pāstōrēs suōs accurrunt. Canēs pāstōrum lātrant.

Iam equī fessī ante rīvum cōnsistunt. Sōl lūcet in caelō sine nūbibus; itaque Iūlius et Cornēlius umbram petunt: campum relinquunt et in silvam intrant. Hīc equus Cornēliī cōnsistit et hinnit: "Hihihī!" Equus terram ante sē aspicit.

Cornēlius in terrā reperit vestīgia lupī, quae digitō mōnstrat: "Ecce vestīgia lupī. Nōn procul abest lupus ipse." Lupus autem procul in monte ululat: "Huhuhū!" Equus Cornēliī, quī lupum ululāre audit, rūrsus hinnit.

Cornēlius: "Equus meus lupum timet." Iūlius: "Meus equus nōn timet lupum!" Cornēlius: "Neque lupus equum tuum timet!"

Cornēlius prope vestīgia lupī etiam alia vestīgia reperit: "Quid hoc est? Nōn sōlum lupī, sed etiam ovis vestīgia hīc sunt!" Iūlius: "Quid agit ovis in silvā cum lupō? Num lupum amat ovis?" Cornēlius: "Nōn lupum ovis, sed lupus ovem amat — et amīcam suam ēst!"`
},
{
  id: "fab11", cap: 10, icon: "🍞",
  title: "Tabernae Iūliī",
  level: "cap. I–X",
  text: `Iūlius est vir pecūniōsus quī magnam vīllam habet prope Tūsculum oppidum. Iūlius etiam tabernās habet in oppidō.

Grūmiō est tabernārius quī Tūsculī pānem vēndit. Quī ipsī pānem suum facere nōn possunt, pānem ā Grūmiōne emunt. Hōc modō ille pecūniam facit. Sed taberna ubi Grūmiō pānem vēndit nōn Grūmiōnis, sed Iūliī est! Iūlius est dominus Grūmiōnis et tabernae eius. Ergō Grūmiōnī necesse est pecūniam Iūliō dare.

Iūlius cum servīs Ursō et Dāvō Tūsculum it. Dominus equō vehitur, servī nōn equīs sed asinīs vehuntur. Grūmiō nōn sine timōre dominum venīre videt.

Iūlius ante tabernam Grūmiōnis cōnsistit eumque salūtat: "Salvē, Grūmiō!" et ab eō salūtātur: "Salvē, domine!"

Grūmiō parvā vōce Ursum interrogat: "Cūr dominus Tūsculum venit?" Ursus respondet: "Dominus ad tabernāriōs suōs adit quia pecūniam accipere vult." Rīdet Ursus. Grūmiō nōn rīdet: is verbīs Ursī nōn dēlectātur!

Grūmiō Iūliō pānem ostendit: "Ecce pānis meus bonus." Iūlius: "Quī pānem bonum vēndit magnam pecūniam facit. Mea est haec taberna: necesse est pecūniam dominō tabernae dare. Centum sēstertiōs dā!"

Grūmiō: "Centum sēstertiōs! Tanta pecūnia apud mē in hāc tabernā nōn reperītur." Grūmiō Iūliō ostendit sacculum suum, quī neque plēnus neque vacuus est. Grūmiō nummōs numerat: "Ūnus, duo, trēs... nōnāgintā. Ecce nōnāgintā sēstertiī īnsunt."

Iūlius īrātus: "Nōn satis est!" — sed pecūniam sūmit et in sacculō suō pōnit. Iam sacculus Grūmiōnis vacuus est — sed in cubiculō sub lectō suō Grūmiō nōn parvam pecūniam occultat!

Iūlius rūrsus in equum ascendit et it ad aliam tabernam suam. Tabernārius est Eumolpus, neque is pānem, sed gemmās vēndit. Quī gemmās vēndit magnam pecūniam facere potest!`
},
{
  id: "fab12", cap: 10, icon: "🌙",
  title: "Pater abest, adest māter",
  level: "cap. I–X",
  text: `Līberī in lectīs suīs dormiunt. Aemilia dormīre nōn potest, quia sōla iacet in magnō lectō sine virō suō. Cūr Aemilia sōla est? Sōla est, quia Iūlius, vir eius, abest: is Rōmae est.

Aemilia exit ē cubiculō, ōstium post sē claudit et intrat in ātrium, ubi circum impluvium ambulat.

Mārcus, quī hominem in ātriō ambulāre audit, timet et sē interrogat: "Quis est quī ambulat in ātriō, dum servī et līberī dormiunt? Quid agit ille homō? — Pater familiae Rōmae est. Dum dominus ā vīllā abest, fīlius eius est dominus! Necesse est sine timōre virum improbum petere...!"

Mārcus exit ē lectō atque ōstium aperit — neque ē cubiculō suō exīre audet! Baculum crassum, quod sub lectō iacet, sūmit, quia virum illum improbum baculō pulsāre vult.

Aemilia, quae ōstium aperīrī audit, ad cubiculum Mārcī sē vertit. Mārcus, quī hominem per umbram ad sē venīre audit, perterritus est: baculum pōnit, ōstium claudit — et lectum post ōstium pōnit!

Māter, quae ōstium aperīre vult neque potest, imperat: "Age! Aperī ōstium, Mārce! Māter tua est." Mārcus vōcem Aemiliae audit et ōstium aperit.

Mārcus: "Ō mamma! Vir improbus in ātriō ambulat et..."

Aemilia rīdet et fīliō suō ōsculum dat: "Nōn est vir improbus, sed fēmina proba, quae virum suum probum exspectat. Pater abest, sed māter tua apud tē adest. Nēmō improbus in hanc vīllam intrāre potest aut audet."

Et māter et fīlius rīdent et rūrsus lectōs suōs petunt.`
},
{
  id: "fab13", cap: 11, icon: "💤",
  title: "Servī dormiunt",
  level: "cap. I–XI",
  text: `In vīllā Iūliī multa sunt cubicula parva et magna. Magnum est cubiculum Iūliī et Aemiliae: in eō magnus lectus est. Cubicula līberōrum parva sunt, et in iīs lectī sunt parvī.

Servī multī in ūnō cubiculō magnō dormiunt. In cubiculō servōrum nūllī sunt lectī! Servī quī dormiunt nōn in lectīs, sed in terrā iacent. Etiam multae ancillae in ūnō cubiculō dormiunt, neque eae lectōs habent.

Ecce Dāvus, quī cum aliīs servīs fessīs in magnō cubiculō iacet. Paucī servī iam dormiunt, aliī verba faciunt, aliī rīdent. Servī quī dormīre volunt vōcēs aliōrum audiunt nec dormīre possunt.

Syrus, quī Mēdum apud sē nōn videt, Lēandrum interrogat: "Ubi est Mēdus? Cūr hīc nōn dormit? Estne aeger?" Lēander: "Mēdus sānus est, sed ā vīllā abest, quia nummōs dominī nostrī habet! Dāvus dīcit 'Mēdum Rōmae amīcam habēre.' Putat eum Rōmae esse apud amīcam suam." Syrus: "Ergō Mēdus nōn sōlus in terrā dormit, sed in lectō cum amīcā suā!" Syrus et Lēander rīdent.

Dāvus servōs tacēre iubet: "Tacēte, servī! Iam necesse est dormīre." Servī tacent atque oculōs claudunt. Iam nūlla vōx audītur.

Iam Dāvus et aliī multī dormiunt — sed Syrus et Lēander dormīre nōn possunt, quia Dāvum animam dūcere audiunt! Dāvus enim stertit: "Zzzzz... ārrch!" Anima Dāvī nōn vidērī, sed audīrī potest! Syrus oculōs claudere potest, aurēs claudere nōn potest.

Syrus īrātus: "Ssst! Tacē, Dāve!" Dāvus nōn respondet, sed Lēander: "Tacē, Syre! Dāvus nūllum verbum facit!" Syrus: "Verbum nōn facit, sed stertit. Audī! Nēmō hīc dormīre potest!"

Syrus sē ad Dāvum vertit et digitum suum ad nāsum eius appōnit! Iam nōn stertit Dāvus. Is atque cēterī servī bene dormiunt.`
},
{
  id: "fab14", cap: 12, icon: "🏹",
  title: "Puer armātus",
  level: "cap. I–XII",
  text: `Avunculus Mārcī, cui nōmen est Aemilius, in Germāniā mīlitat. Illīc exercitus Rōmānus fīnēs imperiī Rōmānī ā Germānīs dēfendit. Castra exercitūs mīlle passūs ā flūmine Rhēnō sunt in magnā silvā, ubi hostēs sē occultant. Mīlitēs Rōmānī impetum Germānōrum exspectant, neque hostēs barbarōs timent: Rōmānī enim bona arma habent, atque circum castra fossa et vāllum altum est. Germānī castra Rōmāna expugnāre nōn possunt.

Mārcus Aemilium mīlitem fortem esse putat. Puer ipse mīlitāre vult ut avunculus suus — neque arma habet Mārcus, et Iūlius dīcit 'nūllōs puerōs mīlitāre aut arma ferre posse.'

Quid igitur facit Mārcus? Arcum facit ex rāmō et līneā; etiam sagittās facit ex rāmīs tenuibus.

Dum Mārcus arcum facit, Iūlia in hortō lūdit cum cane suā Margarītā. Sub arbore puella rāmum reperit. Iūlia canī rāmum ostendit: "Ecce rāmus, Margarīta! Quaere eum!" — rāmumque procul ā cane iacit. Canis rāmum quaerit, reperit, ad Iūliam portat. Canis rāmum ante pedēs Iūliae pōnit et caudam movet.

Mārcus frātrem suum vocat atque eī arcum suum novum ostendit: "Ecce arcus meus, Quīnte. Iam mīles fortis est frāter tuus!"

Quīntus: "Mīles Rōmānus gladiō et pīlō armātus est, nōn arcū et sagittīs! Ea arma sunt Hispānōrum et Gallōrum quī in exercitū Rōmānō mīlitant."

Mārcus: "Sed exercituī necesse est arcūs et sagittās habēre: pīla gravia procul iacī nōn possunt; sagittae procul volant, quia levēs sunt."

Mārcus sagittam sūmit et in arcū pōnit. Ecce sagitta ex arcū iacitur et in hortō prope Iūliam ad terram cadit! Iūlia perterrita sagittam prope caput suum volāre sentit — sagitta aurem eius tangit!

Syra, quae cum Iūliā in hortō est, īrāta ad Mārcum currit. Mārcus, quī Syram accurrere videt, arcum ad terram iacit atque fugit! Syra arcum Mārcī manū capit eumque procul ex hortō iacit. Mārcus trīstis arcum suum volāre aspicit.

Quīntus rīdet, quod 'mīlitem fortem' sine armīs fugere videt!`
}
);

/* ============================================================
   Glossário extra + nomes novos
   ============================================================ */
NOMINA.push(
  { la: "Syrus", pt: "Siro — escravo de Júlio" },
  { la: "Ursus", pt: "Urso — escravo de Júlio" },
  { la: "Grūmiō", pt: "Grumião — padeiro, aluga a taberna de Júlio" },
  { la: "Eumolpus", pt: "Eumolpo — joalheiro, aluga taberna de Júlio" },
  { la: "Aemilius", pt: "Emílio — irmão de Emília, soldado na Germânia" },
  { la: "Mercurius", pt: "Mercúrio — deus mensageiro, dos mercadores" },
  { la: "Neptūnus", pt: "Netuno — deus do mar" },
  { la: "Padus", pt: "o rio Pó (norte da Itália)" },
  { la: "Balbus", pt: "Balbo — cognome de Júlio" },
  { la: "Lūcius", pt: "Lúcio — prenome de Júlio" },
  { la: "Germānī", pt: "os germanos" },
  { la: "Hispānī", pt: "os hispanos" },
  { la: "Gallī", pt: "os gauleses" }
);

Object.assign(EXTRA_GLOSS, {
  "milites": "soldados", "militem": "soldado (acus.)", "militis": "do soldado",
  "militum": "dos soldados", "militibus": "aos/com os soldados",
  "atque": "e (enfático)", "ac": "e", "aut": "ou", "an": "ou (em pergunta)",
  "ut": "como; para que", "sic": "assim", "igitur": "portanto", "ergo": "portanto",
  "satis": "bastante, suficiente", "vacuus": "vazio", "plenus": "cheio",
  "modo": "maneira, modo (abl.)", "consistit": "para, detém-se",
  "hinnit": "relincha", "stertit": "ronca", "lucet": "brilha",
  "accurrit": "corre até", "accurrunt": "correm até", "fugit": "foge",
  "inquit": "diz (ele)", "clamat": "grita", "ludit": "brinca",
  "relinquunt": "deixam (para trás)", "relinquit": "deixa",
  "occultant": "escondem", "occultat": "esconde", "appōnit": "encosta, põe junto",
  "apponit": "encosta, põe junto", "adit": "vai até", "insunt": "estão dentro",
  "inest": "está dentro", "timor": "medo", "timore": "medo (abl.)",
  "impetus": "ataque, investida", "impetum": "ataque (acus.)",
  "linea": "linha, barbante", "armatus": "armado", "armatis": "armados",
  "mercator": "mercador", "mercatorum": "dos mercadores", "asinis": "burros (abl.)",
  "nonaginta": "noventa (90)", "viginti": "vinte (20)", "id est": "isto é",
  "mamma": "mamãe", "age": "vamos! anda!", "eunt": "vão", "it": "vai",
  "ambulare": "andar", "volare": "voar", "natare": "nadar", "vivere": "viver",
  "spirare": "respirar", "esse": "ser, estar; comer", "dormire": "dormir",
  "militare": "servir como soldado", "ferre": "carregar", "facere": "fazer",
  "capere": "capturar", "videri": "ser visto", "audiri": "ser ouvido",
  "iaci": "ser lançado", "vivit": "vive", "vivunt": "vivem", "faciunt": "fazem",
  "facit": "faz", "volunt": "querem", "possunt": "podem", "audent": "ousam",
  "aliae": "outras", "aliis": "outros (abl./dat.)", "aliorum": "dos outros",
  "trans": "do outro lado de", "sub": "debaixo de", "supra": "acima de",
  "animal": "animal", "animalia": "animais", "anima": "respiração; alma",
  "animam": "respiração (acus.)", "nihil": "nada", "iis": "eles (abl./dat.)"
});
