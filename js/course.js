/* ============================================================
   LATINVM — Conteúdo do curso
   Baseado em: Hans H. Ørberg, Lingua Latina per se Illustrata,
   Pars I: Familia Romana (capítulos I–VIII).
   Uso pessoal de estudo.
   ============================================================ */

const COURSE = [

/* ================= CAPITVLVM I ================= */
{
  num: 1, roman: "I", icon: "🗺️",
  title: "Imperium Rōmānum",
  subtitle: "O Império Romano · est/sunt · masculino, feminino e neutro",
  grammar: [
    { title: "est · sunt (ser/estar)",
      html: `Em latim não existe artigo (o, a, um, uma) e o verbo costuma vir no fim da frase.
      <br><span class="ex-la">Rōma in Italiā est.</span> = Roma está na Itália.
      <br><span class="ex-la">Italia et Graecia in Eurōpā sunt.</span> = A Itália e a Grécia estão na Europa.
      <br><b>est</b> = singular (1 coisa) · <b>sunt</b> = plural (2+ coisas).` },
    { title: "Os três gêneros: -us, -a, -um",
      html: `Todo substantivo latino tem gênero, e o adjetivo concorda com ele:
      <table><tr><th>gênero</th><th>singular</th><th>plural</th></tr>
      <tr><td>masculino</td><td class="la">fluvius magnus</td><td class="la">fluviī magnī</td></tr>
      <tr><td>feminino</td><td class="la">īnsula magna</td><td class="la">īnsulae magnae</td></tr>
      <tr><td>neutro</td><td class="la">oppidum magnum</td><td class="la">oppida magna</td></tr></table>` },
    { title: "Perguntas: -ne, ubi, num, quid",
      html: `<span class="ex-la">Estne Gallia in Eurōpā?</span> — o sufixo <b>-ne</b> transforma em pergunta (sim/não).
      <br><span class="ex-la">Ubi est Rōma?</span> — <b>ubi</b> = onde.
      <br><span class="ex-la">Num Rhodus fluvius est?</span> — <b>num</b> espera resposta "não".
      <br><span class="ex-la">Quid est Brundisium?</span> — <b>quid</b> = o quê.` }
  ],
  vocab: [
    { la: "fluvius", forms: "-ī m.", pt: "rio", ex: "Nīlus fluvius magnus est." },
    { la: "īnsula", forms: "-ae f.", pt: "ilha", ex: "Corsica īnsula est." },
    { la: "oppidum", forms: "-ī n.", pt: "cidade (pequena)", ex: "Tūsculum oppidum Rōmānum est." },
    { la: "imperium", forms: "-ī n.", pt: "império; comando", ex: "In imperiō Rōmānō multae sunt prōvinciae." },
    { la: "prōvincia", forms: "-ae f.", pt: "província", ex: "Gallia prōvincia Rōmāna est." },
    { la: "numerus", forms: "-ī m.", pt: "número", ex: "Centum magnus numerus est." },
    { la: "littera", forms: "-ae f.", pt: "letra", ex: "A littera prīma est." },
    { la: "vocābulum", forms: "-ī n.", pt: "palavra, vocábulo", ex: "Īnsula vocābulum Latīnum est." },
    { la: "magnus", forms: "-a -um", pt: "grande", ex: "Nīlus fluvius magnus est." },
    { la: "parvus", forms: "-a -um", pt: "pequeno", ex: "Tiberis fluvius parvus est." },
    { la: "multī", forms: "-ae -a", pt: "muitos", ex: "In Graeciā multae sunt īnsulae." },
    { la: "paucī", forms: "-ae -a", pt: "poucos", ex: "In Galliā paucae sunt īnsulae." },
    { la: "Graecus", forms: "-a -um", pt: "grego", ex: "Rhodus īnsula Graeca est." },
    { la: "Rōmānus", forms: "-a -um", pt: "romano", ex: "Hispānia prōvincia Rōmāna est." },
    { la: "Latīnus", forms: "-a -um", pt: "latino", ex: "Littera Latīna est." },
    { la: "ubi", forms: "adv.", pt: "onde", ex: "Ubi est Rōma?" },
    { la: "quoque", forms: "adv.", pt: "também", ex: "Hispānia quoque in Eurōpā est." },
    { la: "sed", forms: "conj.", pt: "mas", ex: "Nōn in Eurōpā, sed in Āfricā." },
    { la: "nōn", forms: "adv.", pt: "não", ex: "Aegyptus in Eurōpā nōn est." },
    { la: "et", forms: "conj.", pt: "e", ex: "Italia et Graecia." },
    { la: "in", forms: "prep. + abl.", pt: "em", ex: "Rōma in Italiā est." },
    { la: "ūnus", forms: "-a -um", pt: "um (1)", ex: "Ūnus fluvius." },
    { la: "duo", forms: "duae, duo", pt: "dois (2)", ex: "Duo fluviī magnī." },
    { la: "trēs", forms: "tria", pt: "três (3)", ex: "Trēs prōvinciae." },
    { la: "mīlle", forms: "num.", pt: "mil (1000)", ex: "Mīlle numerus magnus est." }
  ],
  pensum: [
    { t: "cloze", prompt: "Nīlus fluvi__ magn__ est.", options: ["-us / -us", "-a / -a", "-um / -um"], a: 0,
      why: "fluvius é masculino: fluvius magnus." },
    { t: "cloze", prompt: "Corsica et Sardinia īnsul__ sunt.", options: ["-ae", "-a", "-ī"], a: 0,
      why: "īnsula é feminino; plural = īnsulae." },
    { t: "cloze", prompt: "Brundisium oppid__ est.", options: ["-um", "-us", "-a"], a: 0,
      why: "oppidum é neutro: -um no singular." },
    { t: "mcq", q: "Italia et Graecia in Eurōpā ___.", options: ["sunt", "est", "-ne"], a: 0,
      why: "Dois sujeitos = plural: sunt." },
    { t: "mcq", q: "Como se pergunta “A Gália está na Europa?”", options: ["Estne Gallia in Eurōpā?", "Ubi Gallia est?", "Gallia in Eurōpā sunt?"], a: 0,
      why: "O sufixo -ne no verbo cria a pergunta sim/não." },
    { t: "build", pt: "Roma está na Itália.", la: "Rōma in Italiā est", extra: ["sunt", "Graecia"] },
    { t: "build", pt: "O Nilo não está na Europa, mas na África.", la: "Nīlus in Eurōpā nōn est sed in Āfricā", extra: ["quoque", "sunt"] },
    { t: "type", prompt: "Complete com o verbo certo: Rhēnus et Dānuvius fluviī ___.", a: ["sunt"],
      why: "Sujeito plural (dois rios) pede sunt." },
    { t: "type", prompt: "Traduza para o latim: “onde” (advérbio de pergunta)", a: ["ubi"],
      why: "Ubi est Rōma? = Onde está Roma?" },
    { t: "cloze", prompt: "In Graeciā mult__ sunt īnsul__.", options: ["-ae / -ae", "-ī / -ī", "-a / -a"], a: 0,
      why: "īnsulae é feminino plural: multae īnsulae." }
  ],
  lectio: {
    title: "Imperium Rōmānum",
    source: "Adaptado de Familia Romana, cap. I",
    text: `Rōma in Italiā est. Italia in Eurōpā est. Graecia quoque in Eurōpā est. Italia et Graecia in Eurōpā sunt. Aegyptus in Eurōpā nōn est: Aegyptus in Āfricā est. Syria nōn est in Eurōpā, sed in Asiā.

Estne Gallia in Eurōpā? Gallia in Eurōpā est. Ubi est Rōma? Rōma est in Italiā. Estne Nīlus in Eurōpā? Nīlus in Eurōpā nōn est: Nīlus in Āfricā est. Nīlus fluvius est. Rhēnus quoque fluvius est. Nīlus et Rhēnus fluviī sunt. Nīlus fluvius magnus est; Tiberis fluvius parvus est.

Corsica īnsula est. Corsica et Sardinia et Sicilia īnsulae sunt. Britannia quoque īnsula est. Sicilia īnsula magna est; Melita īnsula parva est. Brundisium oppidum est. Tūsculum quoque oppidum est. Brundisium oppidum magnum, Tūsculum oppidum parvum est. In Graeciā et in Italiā sunt multa oppida.

In imperiō Rōmānō multae sunt prōvinciae: Hispānia, Gallia, Syria, Aegyptus. Hispānia et Gallia prōvinciae Rōmānae sunt. Magnum est imperium Rōmānum!`,
    questions: [
      { q: "Ubi est Rōma?", options: ["In Italiā", "In Graeciā", "In Āfricā"], a: 0 },
      { q: "Estne Nīlus in Eurōpā?", options: ["Nōn est: in Āfricā est", "Est: in Italiā est", "Est: in Graeciā est"], a: 0 },
      { q: "Quid est Corsica?", options: ["Īnsula", "Fluvius", "Oppidum"], a: 0 },
      { q: "Qual é grande: Tiberis ou Nīlus?", options: ["Nīlus", "Tiberis", "Os dois"], a: 0 }
    ]
  }
},

/* ================= CAPITVLVM II ================= */
{
  num: 2, roman: "II", icon: "👨‍👩‍👧‍👦",
  title: "Familia Rōmāna",
  subtitle: "A família · genitivo (posse) · quis? quae? cuius?",
  grammar: [
    { title: "O genitivo: 'de quem'",
      html: `O genitivo indica posse (o "de" do português):
      <table><tr><th>nominativo</th><th>genitivo</th><th>tradução</th></tr>
      <tr><td class="la">Iūlius</td><td class="la">Iūliī</td><td>de Júlio</td></tr>
      <tr><td class="la">Aemilia</td><td class="la">Aemiliae</td><td>de Emília</td></tr>
      <tr><td class="la">oppidum</td><td class="la">oppidī</td><td>da cidade</td></tr></table>
      <span class="ex-la">Mārcus fīlius Iūliī est.</span> = Marcos é filho de Júlio.
      <br>Plural: <span class="ex-la">numerus servōrum</span> = o número dos escravos.` },
    { title: "quis? quae? cuius? quot?",
      html: `<span class="ex-la">Quis est Mārcus?</span> — <b>quis</b> = quem (masculino).
      <br><span class="ex-la">Quae est Iūlia?</span> — <b>quae</b> = quem (feminino).
      <br><span class="ex-la">Cuius servus est Dāvus?</span> — <b>cuius</b> = de quem.
      <br><span class="ex-la">Quot līberī?</span> — <b>quot</b> = quantos (não muda).` },
    { title: "meus / tuus",
      html: `<b>meus, -a, -um</b> = meu · <b>tuus, -a, -um</b> = teu. Concordam como adjetivos:
      <br><span class="ex-la">fīlius meus, fīlia mea, oppidum meum.</span>
      <br>Atenção: <span class="ex-la">līberī</span> (com i curto) = filhos/crianças; <span class="ex-la">librī</span> = livros!` }
  ],
  vocab: [
    { la: "familia", forms: "-ae f.", pt: "família (inclui os escravos)", ex: "In familiā meā sunt trēs līberī." },
    { la: "pater", forms: "patris m.", pt: "pai", ex: "Iūlius pater Mārcī est." },
    { la: "māter", forms: "mātris f.", pt: "mãe", ex: "Aemilia māter Iūliae est." },
    { la: "fīlius", forms: "-ī m.", pt: "filho", ex: "Mārcus fīlius Iūliī est." },
    { la: "fīlia", forms: "-ae f.", pt: "filha", ex: "Iūlia fīlia Aemiliae est." },
    { la: "vir", forms: "virī m.", pt: "homem; marido", ex: "Iūlius vir Aemiliae est." },
    { la: "fēmina", forms: "-ae f.", pt: "mulher", ex: "Aemilia fēmina Rōmāna est." },
    { la: "puer", forms: "puerī m.", pt: "menino", ex: "Mārcus puer Rōmānus est." },
    { la: "puella", forms: "-ae f.", pt: "menina", ex: "Iūlia puella parva est." },
    { la: "līberī", forms: "-ōrum m. pl.", pt: "filhos, crianças", ex: "Quot līberī in familiā sunt?" },
    { la: "servus", forms: "-ī m.", pt: "escravo", ex: "Dāvus servus Iūliī est." },
    { la: "ancilla", forms: "-ae f.", pt: "escrava, criada", ex: "Syra ancilla Aemiliae est." },
    { la: "dominus", forms: "-ī m.", pt: "senhor, dono", ex: "Iūlius dominus servōrum est." },
    { la: "liber", forms: "librī m.", pt: "livro", ex: "Titulus librī est Grammatica Latīna." },
    { la: "titulus", forms: "-ī m.", pt: "título", ex: "Titulus capitulī prīmī." },
    { la: "pāgina", forms: "-ae f.", pt: "página", ex: "Litterae in pāginā prīmā sunt." },
    { la: "antīquus", forms: "-a -um", pt: "antigo", ex: "Liber antīquus est." },
    { la: "novus", forms: "-a -um", pt: "novo", ex: "Ecce liber novus." },
    { la: "meus", forms: "-a -um", pt: "meu", ex: "Fīlius meus est Mārcus." },
    { la: "tuus", forms: "-a -um", pt: "teu, seu", ex: "Ubi est vir tuus?" },
    { la: "quis", forms: "quae, quid", pt: "quem? o quê?", ex: "Quis est Iūlius?" },
    { la: "cuius", forms: "pron.", pt: "de quem?", ex: "Cuius servus est Dāvus?" },
    { la: "quot", forms: "indecl.", pt: "quantos?", ex: "Quot fīliī et quot fīliae?" },
    { la: "centum", forms: "num.", pt: "cem (100)", ex: "In familiā sunt centum servī." },
    { la: "ecce", forms: "interj.", pt: "eis, olha aqui", ex: "Ecce Mārcus, fīlius meus." }
  ],
  pensum: [
    { t: "cloze", prompt: "Mārcus fīlius Iūli__ est.", options: ["-ī", "-us", "-ō"], a: 0,
      why: "Genitivo de posse: Iūliī = de Júlio." },
    { t: "cloze", prompt: "Iūlia fīlia Aemili__ est.", options: ["-ae", "-a", "-am"], a: 0,
      why: "Genitivo feminino: Aemiliae = de Emília." },
    { t: "mcq", q: "“Cuius servus est Dāvus?” significa:", options: ["De quem Davo é escravo?", "Quem é o escravo Davo?", "Onde está o escravo Davo?"], a: 0,
      why: "cuius = genitivo de quis: 'de quem'." },
    { t: "mcq", q: "Qual a diferença entre līberī e librī?", options: ["līberī = filhos; librī = livros", "līberī = livros; librī = filhos", "São a mesma palavra"], a: 0,
      why: "Pegadinha clássica do cap. II: a vogal muda tudo." },
    { t: "cloze", prompt: "Magnus est numerus serv__.", options: ["-ōrum", "-us", "-ī"], a: 0,
      why: "Genitivo plural: servōrum = dos escravos." },
    { t: "build", pt: "Emília é a mulher de Júlio.", la: "Aemilia fēmina Iūliī est", extra: ["fīlia", "meus"] },
    { t: "build", pt: "Quantos filhos há na tua família?", la: "Quot līberī in familiā tuā sunt", extra: ["est", "cuius"] },
    { t: "type", prompt: "“De quem?” em latim:", a: ["cuius"], why: "Cuius liber est? = De quem é o livro?" },
    { t: "type", prompt: "Complete: Dēlia ancilla me__ est. (minha)", a: ["mea"], why: "ancilla é feminino: mea." },
    { t: "mcq", q: "Quis est Aemilia?", options: ["Māter Mārcī et Quīntī et Iūliae", "Fīlia Iūliī", "Ancilla Syrae"], a: 0,
      why: "Emília é a mãe dos três filhos de Júlio." }
  ],
  lectio: {
    title: "Familia Rōmāna",
    source: "Adaptado de Familia Romana, cap. II",
    text: `Iūlius vir Rōmānus est. Aemilia fēmina Rōmāna est. Iūlius et Aemilia in magnā vīllā habitant. Mārcus puer Rōmānus est. Quīntus quoque puer Rōmānus est. Iūlia puella Rōmāna est. Mārcus et Quīntus et Iūlia sunt trēs līberī.

Quis est Mārcus? Mārcus fīlius Iūliī est. Quis est Quīntus? Quīntus quoque fīlius Iūliī est. Quae est Iūlia? Iūlia fīlia Iūliī est. Iūlius pater Mārcī et Quīntī et Iūliae est. Aemilia māter līberōrum est.

In familiā Iūliī sunt multī servī: Dāvus, Mēdus, Lēander, cēterīque multī. Dāvus servus Iūliī est; Iūlius dominus Dāvī est. Syra et Dēlia ancillae Aemiliae sunt. Quot servī sunt in familiā? In familiā Iūliī sunt centum servī. Centum magnus numerus est! Numerus līberōrum parvus est: trēs.

Ecce liber novus. Titulus librī est GRAMMATICA LATINA. In librō multa capitula sunt: capitulum prīmum, capitulum secundum, capitulum tertium. Līberī et librī duo vocābula Latīna sunt!`,
    questions: [
      { q: "Quot līberī sunt in familiā Iūliī?", options: ["Trēs", "Centum", "Duo"], a: 0 },
      { q: "Cuius fīlia est Iūlia?", options: ["Iūliī et Aemiliae", "Dāvī", "Syrae"], a: 0 },
      { q: "Quae est Syra?", options: ["Ancilla Aemiliae", "Fīlia Iūliī", "Māter Mārcī"], a: 0 },
      { q: "Quot servī sunt in familiā?", options: ["Centum", "Trēs", "Decem"], a: 0 }
    ]
  }
},

/* ================= CAPITVLVM III ================= */
{
  num: 3, roman: "III", icon: "😤",
  title: "Puer Improbus",
  subtitle: "Verbos · acusativo (objeto) · cūr? quia · quī/quae relativo",
  grammar: [
    { title: "Verbos: a ação entra em cena",
      html: `Primeiros verbos de ação (3ª pessoa do singular):
      <br><span class="ex-la">cantat</span> canta · <span class="ex-la">pulsat</span> bate em · <span class="ex-la">plōrat</span> chora · <span class="ex-la">rīdet</span> ri · <span class="ex-la">videt</span> vê · <span class="ex-la">audit</span> ouve · <span class="ex-la">venit</span> vem · <span class="ex-la">dormit</span> dorme · <span class="ex-la">vocat</span> chama.
      <br><span class="ex-la">Iūlia cantat.</span> = Júlia canta.` },
    { title: "O acusativo: quem sofre a ação",
      html: `O objeto direto muda de forma (caso acusativo):
      <table><tr><th>sujeito (nom.)</th><th>objeto (acus.)</th></tr>
      <tr><td class="la">Mārcus</td><td class="la">Mārcum</td></tr>
      <tr><td class="la">Iūlia</td><td class="la">Iūliam</td></tr></table>
      <span class="ex-la">Mārcus Iūliam pulsat.</span> = Marcos bate em Júlia.
      <br><span class="ex-la">Iūlia Mārcum videt.</span> = Júlia vê Marcos.
      <br>Pronomes: <b>mē</b> = me · <b>tē</b> = te · <b>eum</b> = ele (obj.) · <b>eam</b> = ela (obj.).` },
    { title: "cūr? … quia · o relativo quī/quae",
      html: `<span class="ex-la">Cūr Iūlia plōrat? Iūlia plōrat, quia Mārcus eam pulsat.</span>
      <br><b>cūr</b> = por quê? · <b>quia</b> = porque.
      <br>Relativo: <span class="ex-la">puer quī rīdet</span> = o menino que ri; <span class="ex-la">puella quae plōrat</span> = a menina que chora.` }
  ],
  vocab: [
    { la: "cantat", forms: "v.", pt: "canta", ex: "Iūlia laeta cantat." },
    { la: "pulsat", forms: "v.", pt: "bate em, golpeia", ex: "Mārcus Iūliam pulsat." },
    { la: "plōrat", forms: "v.", pt: "chora", ex: "Cūr plōrat Iūlia?" },
    { la: "rīdet", forms: "v.", pt: "ri", ex: "Mārcus rīdet: hahahae!" },
    { la: "videt", forms: "v.", pt: "vê", ex: "Aemilia Iūlium nōn videt." },
    { la: "audit", forms: "v.", pt: "ouve", ex: "Māter fīliam audit." },
    { la: "dormit", forms: "v.", pt: "dorme", ex: "Dominus dormit." },
    { la: "venit", forms: "v.", pt: "vem", ex: "Iūlius venit." },
    { la: "vocat", forms: "v.", pt: "chama", ex: "Iūlia Iūlium vocat." },
    { la: "interrogat", forms: "v.", pt: "pergunta", ex: "Aemilia Syram interrogat." },
    { la: "respondet", forms: "v.", pt: "responde", ex: "Aemilia respondet." },
    { la: "verberat", forms: "v.", pt: "castiga, açoita", ex: "Pater fīlium improbum verberat." },
    { la: "īrātus", forms: "-a -um", pt: "irritado, bravo", ex: "Mārcus Iūlium īrātum videt." },
    { la: "laetus", forms: "-a -um", pt: "alegre, feliz", ex: "Puella laeta cantat." },
    { la: "improbus", forms: "-a -um", pt: "malvado, mau", ex: "Puer improbus est Mārcus." },
    { la: "probus", forms: "-a -um", pt: "bom, honesto", ex: "Dāvus servus probus est." },
    { la: "cūr", forms: "adv.", pt: "por quê?", ex: "Cūr Iūlia plōrat?" },
    { la: "quia", forms: "conj.", pt: "porque", ex: "Plōrat quia Mārcus eam pulsat." },
    { la: "mē", forms: "pron. acus.", pt: "me, a mim", ex: "Mārcus mē pulsat!" },
    { la: "tē", forms: "pron. acus.", pt: "te, a ti", ex: "Iūlia tē vocat." },
    { la: "eum", forms: "pron. acus. m.", pt: "ele (objeto)", ex: "Pater eum nōn audit." },
    { la: "eam", forms: "pron. acus. f.", pt: "ela (objeto)", ex: "Mārcus eam pulsat." },
    { la: "iam", forms: "adv.", pt: "já, agora", ex: "Iam nōn cantat puella." },
    { la: "neque", forms: "conj.", pt: "e não, nem", ex: "Māter audit, neque pater audit." },
    { la: "hīc", forms: "adv.", pt: "aqui", ex: "Iūlia hīc est." }
  ],
  pensum: [
    { t: "cloze", prompt: "Mārcus Iūli__ pulsat.", options: ["-am", "-a", "-ae"], a: 0,
      why: "Júlia é o objeto: acusativo Iūliam." },
    { t: "cloze", prompt: "Iūlia Mārc__ videt.", options: ["-um", "-us", "-ī"], a: 0,
      why: "Marcos é o objeto: acusativo Mārcum." },
    { t: "mcq", q: "Cūr Iūlia plōrat?", options: ["Quia Mārcus eam pulsat", "Quia laeta est", "Quia dormit"], a: 0,
      why: "A cena central do capítulo: Marcos bate, Júlia chora." },
    { t: "mcq", q: "“puer quī rīdet” significa:", options: ["o menino que ri", "o menino ri de quem?", "quem é o menino?"], a: 0,
      why: "quī é pronome relativo masculino." },
    { t: "build", pt: "A mãe ouve a filha que chora.", la: "Māter fīliam quae plōrat audit", extra: ["quī", "videt"] },
    { t: "build", pt: "Por que Marcos ri?", la: "Cūr Mārcus rīdet", extra: ["quia", "plōrat"] },
    { t: "type", prompt: "Complete: Iūlia plōrat, ___ Mārcus eam pulsat. (porque)", a: ["quia"],
      why: "cūr pergunta, quia responde." },
    { t: "type", prompt: "“Marcos me bate!” — Mārcus ___ pulsat!", a: ["me", "mē"],
      why: "mē = acusativo de ego." },
    { t: "cloze", prompt: "Pater fīli__ improb__ verberat.", options: ["-um / -um", "-us / -us", "-ī / -ī"], a: 0,
      why: "Objeto no acusativo, adjetivo concorda: fīlium improbum." },
    { t: "mcq", q: "Escolha o par correto:", options: ["eum = ele (obj.) · eam = ela (obj.)", "eum = ela · eam = ele", "eum = eles · eam = elas"], a: 0,
      why: "-um masculino, -am feminino, como nos substantivos." }
  ],
  lectio: {
    title: "Puer Improbus",
    source: "Adaptado de Familia Romana, cap. III",
    text: `Iūlia, fīlia Iūliī et Aemiliae, est parva puella laeta quae cantat et rīdet. Sed iam nōn cantat puella, neque rīdet: Iūlia plōrat! Cūr plōrat Iūlia? Puella plōrat, quia Mārcus eam pulsat. Mārcus est puer improbus quī parvam puellam pulsat — et rīdet!

Aemilia audit fīliam quae plōrat. Iūlia Iūlium vocat: "Pater! Pa-ater!" Māter fīliam audit, neque pater eam audit. Aemilia Syram interrogat: "Ubi est vir meus? Iūlia eum vocat. Cūr nōn venit?" Syra respondet: "Dominus dormit." Aemilia: "Ō! Fīlia plōrat — et pater dormit!"

Iam pater audit fīliam quae plōrat et fīlium quī rīdet. Iūlius venit et Aemiliam interrogat: "Cūr Iūlia plōrat et Mārcus rīdet?" Aemilia respondet: "Mārcus rīdet, quia Iūlia plōrat; et Iūlia plōrat, quia Mārcus eam pulsat. Puer improbus est Mārcus!"

Iūlius Mārcum vocat. Mārcus venit et Iūlium īrātum videt — neque iam rīdet puer! Pater īrātus fīlium improbum verberat. Iam nōn Iūlia, sed Mārcus plōrat.`,
    questions: [
      { q: "Cūr Iūlia plōrat?", options: ["Quia Mārcus eam pulsat", "Quia pater dormit", "Quia māter cantat"], a: 0 },
      { q: "Quis dormit?", options: ["Iūlius", "Mārcus", "Aemilia"], a: 0 },
      { q: "Quem Iūlius īrātus verberat?", options: ["Mārcum", "Iūliam", "Syram"], a: 0 },
      { q: "No fim, quem chora?", options: ["Mārcus", "Iūlia", "Aemilia"], a: 0 }
    ]
  }
},

/* ================= CAPITVLVM IV ================= */
{
  num: 4, roman: "IV", icon: "💰",
  title: "Dominus et Servī",
  subtitle: "Vocativo · imperativo · suus/eius · números 1–10",
  grammar: [
    { title: "Vocativo: chamando alguém",
      html: `Para chamar alguém, palavras em -us mudam para -e:
      <br><span class="ex-la">Mēdus → Venī, Mēde!</span> · <span class="ex-la">servus → Ō serve improbe!</span> · <span class="ex-la">Dāvus → Dāve!</span>
      <br>As outras não mudam: <span class="ex-la">Venī, Iūlia!</span>` },
    { title: "Imperativo: dando ordens",
      html: `A ordem usa o tema do verbo:
      <table><tr><th>indicativo</th><th>imperativo</th></tr>
      <tr><td class="la">venit</td><td class="la">venī!</td></tr>
      <tr><td class="la">tacet</td><td class="la">tacē!</td></tr>
      <tr><td class="la">pōnit</td><td class="la">pōne!</td></tr>
      <tr><td class="la">sūmit</td><td class="la">sūme!</td></tr>
      <tr><td class="la">respondet</td><td class="la">respondē!</td></tr></table>` },
    { title: "suus vs. eius",
      html: `Os dois significam "dele/dela", mas:
      <br><b>suus, -a, -um</b> = do próprio sujeito da frase. <span class="ex-la">Iūlius servum suum vocat.</span> (o escravo dele mesmo)
      <br><b>eius</b> = de outra pessoa. <span class="ex-la">Pecūnia eius in sacculō est.</span> (o dinheiro daquele outro)` }
  ],
  vocab: [
    { la: "pecūnia", forms: "-ae f.", pt: "dinheiro", ex: "Mēdus pecūniam dominī habet." },
    { la: "nummus", forms: "-ī m.", pt: "moeda", ex: "In sacculō decem nummī sunt." },
    { la: "sacculus", forms: "-ī m.", pt: "bolsinha, saquinho", ex: "Iūlius sacculum in mēnsā pōnit." },
    { la: "mēnsa", forms: "-ae f.", pt: "mesa", ex: "Sacculus in mēnsā est." },
    { la: "habet", forms: "v.", pt: "tem", ex: "Dāvus ūnum nummum habet." },
    { la: "numerat", forms: "v.", pt: "conta (números)", ex: "Iūlius pecūniam numerat." },
    { la: "pōnit", forms: "v.", pt: "põe, coloca", ex: "Sacculum in mēnsā pōnit." },
    { la: "sūmit", forms: "v.", pt: "pega, toma", ex: "Dāvus sacculum suum sūmit." },
    { la: "salūtat", forms: "v.", pt: "cumprimenta, saúda", ex: "Servus dominum salūtat." },
    { la: "tacet", forms: "v.", pt: "cala-se", ex: "Servus tacet et audit." },
    { la: "accūsat", forms: "v.", pt: "acusa", ex: "Dominus Mēdum accūsat." },
    { la: "imperat", forms: "v. + dat.", pt: "ordena, manda", ex: "Dominus servō imperat." },
    { la: "pāret", forms: "v. + dat.", pt: "obedece", ex: "Servus dominō pāret." },
    { la: "discēdit", forms: "v.", pt: "vai embora, sai", ex: "Dāvus discēdit." },
    { la: "adest", forms: "v.", pt: "está presente", ex: "Ecce Dāvus adest." },
    { la: "abest", forms: "v.", pt: "está ausente", ex: "Mēdus abest neque venit." },
    { la: "bonus", forms: "-a -um", pt: "bom", ex: "Nummum habē, bone serve!" },
    { la: "malus", forms: "-a -um", pt: "mau", ex: "Mēdus servus malus est." },
    { la: "nūllus", forms: "-a -um", pt: "nenhum", ex: "Dāvus nūllum nummum habet." },
    { la: "suus", forms: "-a -um", pt: "seu (do sujeito)", ex: "Iūlius servum suum vocat." },
    { la: "eius", forms: "gen.", pt: "dele, dela", ex: "Pecūnia eius in sacculō est." },
    { la: "quattuor", forms: "num.", pt: "quatro (4)", ex: "Quattuor nummī." },
    { la: "quīnque", forms: "num.", pt: "cinco (5)", ex: "Quīnque rosae." },
    { la: "decem", forms: "num.", pt: "dez (10)", ex: "Decem nummī in sacculō sunt." },
    { la: "tantum", forms: "adv.", pt: "somente, apenas", ex: "Novem tantum nummī!" }
  ],
  pensum: [
    { t: "mcq", q: "Como Júlio chama o escravo Mēdus?", options: ["Venī, Mēde!", "Venī, Mēdus!", "Venī, Mēdum!"], a: 0,
      why: "Vocativo: -us vira -e." },
    { t: "cloze", prompt: "Tacē et audī, serv__!", options: ["-e", "-us", "-um"], a: 0,
      why: "Chamando o escravo: vocativo serve." },
    { t: "mcq", q: "Qual é o imperativo de pōnit?", options: ["pōne!", "pōnit!", "pōnat!"], a: 0,
      why: "Ordem direta: Pōne sacculum in mēnsā!" },
    { t: "cloze", prompt: "Iūlius servum ___ vocat. (o próprio escravo dele)", options: ["suum", "eius", "meum"], a: 0,
      why: "suus refere-se ao sujeito da frase (Iūlius)." },
    { t: "cloze", prompt: "Dāvus probus est: pecūnia ___ in sacculō ___ est. (dele = de Davo, falando de fora)", options: ["eius / eius", "sua / suā", "tua / tuā"], a: 0,
      why: "Quando o possuidor não é o sujeito, usa-se eius." },
    { t: "build", pt: "O escravo cumprimenta o senhor.", la: "Servus dominum salūtat", extra: ["dominus", "servum"] },
    { t: "build", pt: "Em minha bolsinha há dez moedas.", la: "In sacculō meō decem nummī sunt", extra: ["est", "nummōs"] },
    { t: "type", prompt: "Imperativo de venit:", a: ["veni", "venī"], why: "Venī, Mēde!" },
    { t: "type", prompt: "Complete: Mēdus ___ neque venit. (está ausente)", a: ["abest"],
      why: "abest = está ausente; adest = está presente." },
    { t: "mcq", q: "Servus dominō ___.", options: ["pāret", "pārat", "pāritur"], a: 0,
      why: "pāret + dativo = obedece a alguém." }
  ],
  lectio: {
    title: "Dominus et Servī",
    source: "Adaptado de Familia Romana, cap. IV",
    text: `Iūlius dominus est. Dāvus et Mēdus servī Iūliī sunt. Dominus servōs suōs vocat: "Venī, Mēde! Venī, improbe serve!" Sed Mēdus abest neque venit. Cūr Mēdus abest? Mēdus abest, quia pecūniam dominī habet! Is servus improbus est.

Ecce Iūlius venit. Īrātus est dominus, et sacculum suum in mēnsā pōnit. "Ecce sacculus meus. Iam nōn centum, sed tantum decem nummī in sacculō meō sunt. Cēterī nummī in sacculō Mēdī sunt!" Iūlius pecūniam numerat: "Ūnus, duo, trēs, quattuor, quīnque, sex, septem, octō, novem. Quid? Novem tantum? Cūr ūnus nummus abest?"

Aemilia: "Nummus quī abest in sacculō Dāvī est — neque tuus, sed Dāvī est nummus. Nōn Dāvum, sed Mēdum accūsā!"

Ecce Dāvus adest et dominum salūtat: "Salvē, domine!" In sacculō Dāvī ūnus est nummus, quī eius est. Iūlius: "Ō Dāve, nummum habē, bone serve! Nōn meus, sed tuus est. Sūme sacculum tuum et discēde!" Dāvus sacculum suum sūmit et discēdit.

Iam rīdet Iūlius, neque Dāvum accūsat: "Probus servus est Dāvus. Sed mea est pecūnia quae in sacculō Mēdī est!"`,
    questions: [
      { q: "Cūr Mēdus abest?", options: ["Quia pecūniam dominī habet", "Quia dormit", "Quia in hortō est"], a: 0 },
      { q: "Quot nummī sunt in sacculō Iūliī?", options: ["Novem", "Centum", "Decem"], a: 0 },
      { q: "Quis est servus probus?", options: ["Dāvus", "Mēdus", "Iūlius"], a: 0 },
      { q: "“Sūme sacculum tuum!” é…", options: ["uma ordem (imperativo)", "uma pergunta", "uma negação"], a: 0 }
    ]
  }
},

/* ================= CAPITVLVM V ================= */
{
  num: 5, roman: "V", icon: "🌹",
  title: "Vīlla et Hortus",
  subtitle: "A casa romana · ablativo com in · acusativo plural · is/ea/id",
  grammar: [
    { title: "Ablativo: onde as coisas estão",
      html: `Com <b>in</b> (em), usa-se o ablativo:
      <table><tr><th>nominativo</th><th>in + ablativo</th></tr>
      <tr><td class="la">hortus</td><td class="la">in hortō</td></tr>
      <tr><td class="la">vīlla</td><td class="la">in vīllā</td></tr>
      <tr><td class="la">cubiculum</td><td class="la">in cubiculō</td></tr>
      <tr><td class="la">(plural) horti</td><td class="la">in hortīs</td></tr></table>
      Também com <b>ab</b> (de, desde), <b>ex</b> (de dentro de), <b>cum</b> (com):
      <span class="ex-la">ex hortō, cum familiā suā, ab Iūliā.</span>` },
    { title: "Acusativo plural",
      html: `<table><tr><th>singular</th><th>plural</th></tr>
      <tr><td class="la">rosam</td><td class="la">rosās</td></tr>
      <tr><td class="la">servum</td><td class="la">servōs</td></tr>
      <tr><td class="la">līlium</td><td class="la">līlia</td></tr></table>
      <span class="ex-la">Iūlia rosās carpit.</span> = Júlia colhe rosas.
      <br>Verbos no plural: <span class="ex-la">puerī veniunt, rosae dēlectant, līberī habitant.</span>` },
    { title: "is, ea, id: ele, ela",
      html: `<table><tr><th>caso</th><th>m.</th><th>f.</th><th>n.</th></tr>
      <tr><td>nom.</td><td class="la">is</td><td class="la">ea</td><td class="la">id</td></tr>
      <tr><td>acus.</td><td class="la">eum</td><td class="la">eam</td><td class="la">id</td></tr>
      <tr><td>gen.</td><td class="la">eius</td><td class="la">eius</td><td class="la">eius</td></tr>
      <tr><td>abl.</td><td class="la">eō</td><td class="la">eā</td><td class="la">eō</td></tr></table>
      <span class="ex-la">Iūlius in vīllā habitat; ea magna est.</span>` }
  ],
  vocab: [
    { la: "vīlla", forms: "-ae f.", pt: "casa de campo, vila", ex: "Iūlius in magnā vīllā habitat." },
    { la: "hortus", forms: "-ī m.", pt: "jardim", ex: "In hortō multae rosae sunt." },
    { la: "cubiculum", forms: "-ī n.", pt: "quarto", ex: "Vīlla multa cubicula habet." },
    { la: "ātrium", forms: "-ī n.", pt: "átrio (sala central)", ex: "In ātriō impluvium est." },
    { la: "peristȳlum", forms: "-ī n.", pt: "peristilo (pátio com colunas)", ex: "Puerī in peristȳlō sunt." },
    { la: "impluvium", forms: "-ī n.", pt: "impluvio (tanque de chuva)", ex: "Aqua in impluviō est." },
    { la: "aqua", forms: "-ae f.", pt: "água", ex: "Aqua in impluviō est." },
    { la: "rosa", forms: "-ae f.", pt: "rosa", ex: "Iūlia rosās carpit." },
    { la: "līlium", forms: "-ī n.", pt: "lírio", ex: "In hortō rosae et līlia sunt." },
    { la: "nāsus", forms: "-ī m.", pt: "nariz", ex: "Syra nāsum foedum habet." },
    { la: "pulcher", forms: "-chra -chrum", pt: "bonito, belo", ex: "Rosa pulchra est." },
    { la: "foedus", forms: "-a -um", pt: "feio", ex: "Nāsus foedus est." },
    { la: "sōlus", forms: "-a -um", pt: "sozinho, só", ex: "Iūlia sōla est in hortō." },
    { la: "habitat", forms: "v.", pt: "mora, habita", ex: "Iūlius in vīllā habitat." },
    { la: "carpit", forms: "v.", pt: "colhe", ex: "Puella rosās carpit." },
    { la: "amat", forms: "v.", pt: "ama, gosta de", ex: "Iūlia rosās amat." },
    { la: "dēlectat", forms: "v.", pt: "agrada, encanta", ex: "Rosae Iūliam dēlectant." },
    { la: "ex", forms: "prep. + abl.", pt: "de (dentro de)", ex: "Puerī ex peristȳlō veniunt." },
    { la: "ab", forms: "prep. + abl.", pt: "de, desde; por", ex: "Puerī ab Iūliā discēdunt." },
    { la: "cum", forms: "prep. + abl.", pt: "com", ex: "Iūlius cum familiā suā habitat." },
    { la: "sine", forms: "prep. + abl.", pt: "sem", ex: "Pater sine rosīs discēdit." },
    { la: "etiam", forms: "adv.", pt: "também, até", ex: "Etiam Sextus librōs amat." },
    { la: "rūrsus", forms: "adv.", pt: "de novo", ex: "Iūlia rūrsus rosās carpit." },
    { la: "is, ea, id", forms: "pron.", pt: "ele, ela, isso", ex: "Ea in hortō est." },
    { la: "baculum", forms: "-ī n.", pt: "bastão, vara", ex: "Iūlius baculum habet." }
  ],
  pensum: [
    { t: "cloze", prompt: "Iūlia in hort__ est.", options: ["-ō", "-um", "-us"], a: 0,
      why: "in + ablativo: in hortō." },
    { t: "cloze", prompt: "Iūlius in vīll__ magn__ habitat.", options: ["-ā / -ā", "-am / -am", "-a / -a"], a: 0,
      why: "in + ablativo feminino: in vīllā magnā (com ā longo)." },
    { t: "cloze", prompt: "Iūlia ros__ carpit. (várias rosas)", options: ["-ās", "-ae", "-am"], a: 0,
      why: "Objeto plural feminino: rosās." },
    { t: "cloze", prompt: "Puerī ex peristȳl__ veniunt.", options: ["-ō", "-um", "-ī"], a: 0,
      why: "ex + ablativo: ex peristȳlō." },
    { t: "mcq", q: "“Rosae Iūliam dēlectant” significa:", options: ["As rosas encantam Júlia", "Júlia colhe as rosas", "Júlia encanta as rosas"], a: 0,
      why: "rosae = sujeito plural; Iūliam = objeto; dēlectant = plural." },
    { t: "mcq", q: "Como se diz “com a sua família”?", options: ["cum familiā suā", "cum familiam suam", "in familiā suā"], a: 0,
      why: "cum rege ablativo." },
    { t: "build", pt: "Júlia está sozinha no jardim.", la: "Iūlia sōla in hortō est", extra: ["hortum", "sunt"] },
    { t: "build", pt: "Os meninos saem de perto de Júlia.", la: "Puerī ab Iūliā discēdunt", extra: ["Iūliam", "venit"] },
    { t: "type", prompt: "Complete: Iūlius sine ros__ discēdit. (sem as rosas)", a: ["is", "īs", "rosis", "rosīs"],
      why: "sine + ablativo plural: sine rosīs." },
    { t: "mcq", q: "is / ea / id — qual é o feminino?", options: ["ea", "is", "id"], a: 0,
      why: "is (m.), ea (f.), id (n.)." }
  ],
  lectio: {
    title: "Puella in Hortō",
    source: "Fabellae Latinae 6 (adaptado)",
    text: `Iūlius, quī magnam pecūniam habet, in magnā et pulchrā vīllā habitat cum familiā suā. Vīlla eius habet ātrium et peristȳlum et multa cubicula. In ātriō est impluvium; in impluviō aqua est.

Ubi est Iūlia? Iūlia est in hortō vīllae. Puella laeta rīdet et rosās carpit. Quot rosās carpit Iūlia? Quīnque rosās magnās et pulchrās carpit. Rosae Iūliam dēlectant.

Iūlia, quae sōla est in hortō, puerōs vocat: "Venīte, Mārce et Quīnte!" Puerī ex peristȳlō veniunt et Iūliam in hortō vident. Iūlia: "Ecce quīnque rosae. Vidēte rosās meās!" Quīntus: "Quīnque parvus numerus est! In hortō centum rosae sunt!" Mārcus: "Nōn centum tantum, sed mīlle rosae in hortō meō sunt!" Iūlia: "Nōn tuus est hortus!" Puerī ab Iūliā discēdunt. Rosae eōs nōn dēlectant.

Iūlius, pater Iūliae, ex vīllā venit. Iūlia: "Ecce decem rosae! Habē eās, pater! Nōnne pulchrae sunt?" Sed Iūlius nōn respondet: Mēdum vocat, et ab fīliā suā discēdit — sine rosīs. Iūlia iam nōn laeta est neque cantat: "Pater rosās nōn amat. Num fīliam suam amat?"`,
    questions: [
      { q: "Ubi est Iūlia?", options: ["In hortō", "In ātriō", "In cubiculō"], a: 0 },
      { q: "Quot rosās carpit Iūlia prīmum?", options: ["Quīnque", "Decem", "Centum"], a: 0 },
      { q: "Quem Iūlius vocat?", options: ["Mēdum", "Mārcum", "Iūliam"], a: 0 },
      { q: "Iūlius discēdit…", options: ["sine rosīs", "cum rosīs", "cum Iūliā"], a: 0 }
    ]
  }
},

/* ================= CAPITVLVM VI ================= */
{
  num: 6, roman: "VI", icon: "🛣️",
  title: "Via Latīna",
  subtitle: "Estradas · preposições · quō? unde? · voz passiva",
  grammar: [
    { title: "Preposições: acusativo vs. ablativo",
      html: `Com <b>acusativo</b> (movimento em direção / através):
      <br><span class="ex-la">ad vīllam</span> (para) · <span class="ex-la">per portam</span> (por, através) · <span class="ex-la">ante eum</span> (diante de) · <span class="ex-la">post eum</span> (atrás de) · <span class="ex-la">circum oppidum</span> (ao redor) · <span class="ex-la">prope Rōmam</span> (perto de) · <span class="ex-la">inter Rōmam et Tūsculum</span> (entre).
      <br>Com <b>ablativo</b> (origem / companhia / lugar):
      <br><span class="ex-la">ab oppidō</span> (de) · <span class="ex-la">ex hortō</span> (de dentro) · <span class="ex-la">cum amīcā</span> (com) · <span class="ex-la">sine dominō</span> (sem) · <span class="ex-la">procul ā Graeciā</span> (longe de).` },
    { title: "Cidades sem preposição: Rōmam, Rōmā, Rōmae",
      html: `Nomes de cidades dispensam preposição:
      <br><span class="ex-la">Rōmam it.</span> = vai <b>a</b> Roma (acusativo).
      <br><span class="ex-la">Rōmā venit.</span> = vem <b>de</b> Roma (ablativo).
      <br><span class="ex-la">Rōmae habitat.</span> = mora <b>em</b> Roma (locativo).
      <br>Perguntas: <b>quō?</b> = para onde? · <b>unde?</b> = de onde?` },
    { title: "Voz passiva: -tur",
      html: `<table><tr><th>ativa</th><th>passiva</th></tr>
      <tr><td class="la">servus saccum portat</td><td class="la">saccus ā servō portātur</td></tr>
      <tr><td class="la">equus dominum vehit</td><td class="la">dominus equō vehitur</td></tr></table>
      <span class="ex-la">ā/ab + ablativo</span> = agente (por quem); ablativo sozinho = instrumento (com o quê).` }
  ],
  vocab: [
    { la: "via", forms: "-ae f.", pt: "estrada, caminho", ex: "Via Latīna nōn longa est." },
    { la: "porta", forms: "-ae f.", pt: "portão (da cidade)", ex: "Mēdus per portam Capēnam intrat." },
    { la: "mūrus", forms: "-ī m.", pt: "muro, muralha", ex: "Circum oppidum mūrus est." },
    { la: "saccus", forms: "-ī m.", pt: "saco", ex: "Servus saccum portat." },
    { la: "umerus", forms: "-ī m.", pt: "ombro", ex: "Saccus in umerō est." },
    { la: "equus", forms: "-ī m.", pt: "cavalo", ex: "Dominus equō vehitur." },
    { la: "amīcus", forms: "-ī m.", pt: "amigo", ex: "Cornēlius amīcus Iūliī est." },
    { la: "amīca", forms: "-ae f.", pt: "amiga; namorada", ex: "Lȳdia amīca Mēdī est." },
    { la: "inimīcus", forms: "-ī m.", pt: "inimigo", ex: "Mēdus inimīcus Iūliī est?" },
    { la: "longus", forms: "-a -um", pt: "longo, comprido", ex: "Via Appia longa est." },
    { la: "fessus", forms: "-a -um", pt: "cansado", ex: "Servus fessus est." },
    { la: "ambulat", forms: "v.", pt: "anda, caminha", ex: "Mēdus Rōmam ambulat." },
    { la: "portat", forms: "v.", pt: "carrega, leva", ex: "Servus saccum portat." },
    { la: "vehit", forms: "v.", pt: "transporta, carrega", ex: "Equus dominum vehit." },
    { la: "intrat", forms: "v.", pt: "entra (em)", ex: "Mēdus Rōmam intrat." },
    { la: "timet", forms: "v.", pt: "teme, tem medo de", ex: "Mēdus Cornēlium timet." },
    { la: "it", forms: "v. (eunt pl.)", pt: "vai", ex: "Quō it Mēdus? Rōmam it." },
    { la: "ad", forms: "prep. + acus.", pt: "para, em direção a", ex: "Ad amīcam suam ambulat." },
    { la: "per", forms: "prep. + acus.", pt: "por, através de", ex: "Per portam intrat." },
    { la: "ante", forms: "prep. + acus.", pt: "diante de, antes de", ex: "Rōma ante eum est." },
    { la: "post", forms: "prep. + acus.", pt: "atrás de, depois de", ex: "Post eum est Tūsculum." },
    { la: "inter", forms: "prep. + acus.", pt: "entre", ex: "Inter Rōmam et Tūsculum." },
    { la: "prope", forms: "prep. + acus.", pt: "perto de", ex: "Prope oppidum Tūsculum." },
    { la: "procul", forms: "adv.", pt: "longe", ex: "Lȳdia procul ā Graeciā habitat." },
    { la: "quō", forms: "adv.", pt: "para onde?", ex: "Quō it Mēdus?" },
    { la: "unde", forms: "adv.", pt: "de onde?", ex: "Unde venit? Tūsculō venit." },
    { la: "autem", forms: "conj.", pt: "porém, por sua vez", ex: "Lȳdia autem Rōmae habitat." }
  ],
  pensum: [
    { t: "mcq", q: "“Mēdus vai a Roma” =", options: ["Mēdus Rōmam it.", "Mēdus in Rōmam it.", "Mēdus Rōmā it."], a: 0,
      why: "Cidades: acusativo sem preposição para destino." },
    { t: "mcq", q: "“Cornēlius vem de Roma” =", options: ["Cornēlius Rōmā venit.", "Cornēlius Rōmam venit.", "Cornēlius ad Rōmam venit."], a: 0,
      why: "Origem de cidade: ablativo sem preposição." },
    { t: "cloze", prompt: "Mēdus per port__ Capēn__ intrat.", options: ["-am / -am", "-ā / -ā", "-a / -a"], a: 0,
      why: "per + acusativo: per portam Capēnam." },
    { t: "cloze", prompt: "Saccus ā serv__ portātur.", options: ["-ō", "-um", "-us"], a: 0,
      why: "Agente da passiva: ā/ab + ablativo." },
    { t: "mcq", q: "“Dominus equō vehitur” significa:", options: ["O senhor é levado pelo cavalo", "O senhor leva o cavalo", "O cavalo é levado ao senhor"], a: 0,
      why: "vehitur é passivo; equō é o instrumento." },
    { t: "build", pt: "Medo anda em direção à sua namorada.", la: "Mēdus ad amīcam suam ambulat", extra: ["ab", "vehitur"] },
    { t: "build", pt: "Túsculo está atrás dele, Roma está diante dele.", la: "Post eum est Tūsculum Rōma ante eum est", extra: ["inter", "procul"] },
    { t: "type", prompt: "“Para onde?” em latim:", a: ["quo", "quō"], why: "Quō it Mēdus? — Rōmam!" },
    { t: "type", prompt: "“De onde?” em latim:", a: ["unde"], why: "Unde venit? — Tūsculō!" },
    { t: "mcq", q: "Qual preposição pede ablativo?", options: ["sine", "per", "ante"], a: 0,
      why: "sine, cum, ab, ex + ablativo; per, ante, post, inter + acusativo." }
  ],
  lectio: {
    title: "Mēdus et Cornēlius",
    source: "Fabellae Latinae 7 (adaptado)",
    text: `Lȳdia est fēmina pulchra quae Rōmae habitat. Nōn Rōmāna est, sed Graeca; Lȳdia autem procul ā Graeciā habitat. Amīcus Lȳdiae est Mēdus, servus Iūliī. Lȳdia Mēdum amat et ab eō amātur.

Ubi est Mēdus? Nōn est in vīllā apud dominum suum, sed in viā Latīnā inter Rōmam et Tūsculum. Quō it Mēdus sine dominō suō? Rōmam it. Post eum est Tūsculum, Rōma ante eum est. Mēdus laetus est et cantat, quia ad amīcam suam ambulat.

Sed iam tacet Mēdus. Cūr iam nōn cantat servus? Mēdus tacet, quia videt dominum Rōmānum quī equō vehitur. Quis est? Est Cornēlius, amīcus Iūliī, quī Tūsculī habitat. Is ā Mēdō timētur.

Iam Cornēlius prope Mēdum est, neque ab eō salūtātur. Cornēlius interrogat: "Quis est dominus tuus, serve? Estne Iūlius?" Mēdus, quī amīcum Iūliī timet, nūllum verbum respondet et Rōmam ambulat. Cornēlius equum suum interrogat: "Cūr servus mē nōn salūtat?" Equus verba dominī audit neque respondet — nam equus verba nōn habet!

Ecce Mēdus per portam Capēnam Rōmam intrat et laetus ad ōstium Lȳdiae ambulat. Lȳdia amīcum suum salūtat et ab amīcō suō salūtātur.`,
    questions: [
      { q: "Quō it Mēdus?", options: ["Rōmam", "Tūsculum", "In Graeciam"], a: 0 },
      { q: "Cūr Mēdus iam nōn cantat?", options: ["Quia Cornēlium videt et timet", "Quia fessus est", "Quia Lȳdia abest"], a: 0 },
      { q: "Cornēlius quō vehitur?", options: ["Equō", "Lectīcā", "Sacculō"], a: 0 },
      { q: "Per quam portam Mēdus Rōmam intrat?", options: ["Per portam Capēnam", "Per portam Tūsculānam", "Per mūrum"], a: 0 }
    ]
  }
},

/* ================= CAPITVLVM VII ================= */
{
  num: 7, roman: "VII", icon: "🪞",
  title: "Puella et Rosa",
  subtitle: "Dativo (dar a alguém) · hic/haec/hoc · e/ex, plēnus",
  grammar: [
    { title: "O dativo: para quem se dá",
      html: `Quem recebe algo fica no dativo:
      <table><tr><th>nominativo</th><th>dativo</th></tr>
      <tr><td class="la">Iūlia</td><td class="la">Iūliae</td></tr>
      <tr><td class="la">Mārcus</td><td class="la">Mārcō</td></tr>
      <tr><td class="la">(pron.) ea/is</td><td class="la">eī</td></tr></table>
      <span class="ex-la">Iūlius fīliae suae mālum dat.</span> = Júlio dá uma maçã à sua filha.
      <br><span class="ex-la">Dēlia eī speculum dat.</span> = Délia dá o espelho a ela.` },
    { title: "Verbos novos do capítulo",
      html: `<span class="ex-la">dat</span> dá · <span class="ex-la">exspectat</span> espera · <span class="ex-la">currit</span> corre · <span class="ex-la">tenet</span> segura · <span class="ex-la">terget</span> enxuga · <span class="ex-la">claudit</span> fecha · <span class="ex-la">aperit</span> abre · <span class="ex-la">vertit</span> vira · <span class="ex-la">exit</span> sai · <span class="ex-la">lacrimat</span> chora (lágrimas).
      <br><span class="ex-la">Iūlia oculōs claudit — et aperit.</span>` },
    { title: "et…et · neque…neque · nōn sōlum…sed etiam",
      html: `<span class="ex-la">et mālum et pirum</span> = tanto a maçã quanto a pera.
      <br><span class="ex-la">neque mālum neque pirum</span> = nem a maçã nem a pera.
      <br><span class="ex-la">nōn sōlum mālum, sed etiam pirum</span> = não só a maçã, mas também a pera.
      <br><b>plēnus + genitivo:</b> <span class="ex-la">oculī plēnī lacrimārum</span> = olhos cheios de lágrimas.` }
  ],
  vocab: [
    { la: "speculum", forms: "-ī n.", pt: "espelho", ex: "Syra speculum tenet." },
    { la: "oculus", forms: "-ī m.", pt: "olho", ex: "Oculī Dēliae pulchrī sunt." },
    { la: "lacrima", forms: "-ae f.", pt: "lágrima", ex: "Lacrimae in oculīs sunt." },
    { la: "ōstium", forms: "-ī n.", pt: "porta (de casa), entrada", ex: "Mēdus ōstium pulsat." },
    { la: "mālum", forms: "-ī n.", pt: "maçã", ex: "Iūlius fīliae mālum dat." },
    { la: "pirum", forms: "-ī n.", pt: "pera", ex: "In sacculō māla et pira sunt." },
    { la: "ōsculum", forms: "-ī n.", pt: "beijo", ex: "Iūlius fīliae ōsculum dat." },
    { la: "dat", forms: "v.", pt: "dá", ex: "Pater fīliae mālum dat." },
    { la: "tenet", forms: "v.", pt: "segura, tem na mão", ex: "Dēlia speculum tenet." },
    { la: "terget", forms: "v.", pt: "enxuga, limpa", ex: "Syra oculōs terget." },
    { la: "claudit", forms: "v.", pt: "fecha", ex: "Claude oculōs!" },
    { la: "aperit", forms: "v.", pt: "abre", ex: "Iam aperī oculōs!" },
    { la: "vertit", forms: "v.", pt: "vira, gira", ex: "Dēlia sē ad Syram vertit." },
    { la: "currit", forms: "v.", pt: "corre", ex: "Iūlia ad ōstium currit." },
    { la: "exspectat", forms: "v.", pt: "espera", ex: "Aemilia ancillās exspectat." },
    { la: "exit", forms: "v.", pt: "sai", ex: "Ancilla ē cubiculō exit." },
    { la: "lacrimat", forms: "v.", pt: "chora, verte lágrimas", ex: "Syra nōn rīdet, sed lacrimat." },
    { la: "fōrmōsus", forms: "-a -um", pt: "formoso, bonito", ex: "Nāsus tuus fōrmōsus est." },
    { la: "plēnus", forms: "-a -um + gen.", pt: "cheio (de)", ex: "Oculī plēnī lacrimārum." },
    { la: "salvē", forms: "interj.", pt: "olá! salve!", ex: "Salvē, domine!" },
    { la: "immō", forms: "adv.", pt: "pelo contrário", ex: "Immō fōrmōsus est!" },
    { la: "eī", forms: "pron. dat.", pt: "a ele, a ela", ex: "Dēlia eī speculum dat." },
    { la: "sē", forms: "pron. refl.", pt: "se, a si mesmo", ex: "Dēlia sē in speculō videt." },
    { la: "nōn sōlum… sed etiam", forms: "loc.", pt: "não só… mas também", ex: "Nōn sōlum māla, sed etiam pira." },
    { la: "illīc", forms: "adv.", pt: "ali, lá", ex: "Illīc bonum speculum est." }
  ],
  pensum: [
    { t: "cloze", prompt: "Iūlius fīli__ su__ mālum dat.", options: ["-ae / -ae", "-am / -am", "-a / -a"], a: 0,
      why: "Quem recebe fica no dativo: fīliae suae." },
    { t: "cloze", prompt: "Dēlia speculum Mārc__ dat.", options: ["-ō", "-um", "-us"], a: 0,
      why: "Dativo masculino: Mārcō = a Marcos." },
    { t: "mcq", q: "“Dēlia eī speculum dat” — quem recebe o espelho?", options: ["Ela/ele (eī = dativo)", "Délia", "Ninguém"], a: 0,
      why: "eī é o dativo de is/ea: 'a ele/ela'." },
    { t: "mcq", q: "“Oculī plēnī lacrimārum” =", options: ["olhos cheios de lágrimas", "olhos e lágrimas cheias", "lágrimas nos olhos cheios"], a: 0,
      why: "plēnus rege genitivo: lacrimārum = de lágrimas." },
    { t: "build", pt: "Júlia fecha os olhos.", la: "Iūlia oculōs claudit", extra: ["aperit", "oculī"] },
    { t: "build", pt: "Délia se vê no espelho.", la: "Dēlia sē in speculō videt", extra: ["eam", "speculum"] },
    { t: "type", prompt: "Imperativo: “Fecha os olhos!” — ___ oculōs!", a: ["claude"],
      why: "claudit → claude!" },
    { t: "type", prompt: "“Pelo contrário” em latim:", a: ["immo", "immō"],
      why: "— Foedus est nāsus meus! — Immō fōrmōsus est!" },
    { t: "mcq", q: "“nōn sōlum mālum, sed etiam pirum” =", options: ["não só a maçã, mas também a pera", "nem maçã nem pera", "ou maçã ou pera"], a: 0,
      why: "Estrutura fixa: nōn sōlum… sed etiam." },
    { t: "cloze", prompt: "Ancillae ē cubicul__ exeunt.", options: ["-ō", "-um", "-a"], a: 0,
      why: "ē/ex + ablativo: ē cubiculō." }
  ],
  lectio: {
    title: "Speculum Aemiliae",
    source: "Fabellae Latinae 8 (adaptado)",
    text: `Syra et Dēlia, ancillae amīcae, ex ātriō exeunt. Syra: "Venī in cubiculum Iūliae. Illīc bonum speculum est." Syra et Dēlia in cubiculum intrant. Syra speculum videt, quod in mēnsā est.

Syra: "Ecce speculum. Claude oculōs, Dēlia!" Dēlia oculōs claudit. Syra speculum sūmit et ante Dēliam tenet. Syra: "Iam aperī oculōs!" Dēlia oculōs aperit et sē videt in speculō. Oculī Dēliae pulchrī sunt et fōrmōsus est nāsus eius.

Dēlia sē ad Syram vertit — et in oculīs Syrae lacrimās videt! Dēlia: "Quid est, Syra? Ecce lacrimae in oculīs tuīs!" Syra: "Oculī meī nōn tam pulchrī sunt quam tuī, et foedus est nāsus meus." Dēlia: "Ō Syra! Tergē oculōs! Nōn pulchrī sunt oculī plēnī lacrimārum. Sine lacrimīs pulchrī sunt oculī tuī, neque nāsus tuus foedus est!"

Syra oculōs terget. "Iamne pulchrī sunt oculī meī?" Dēlia rīdet et eī speculum dat: "Ecce speculum. Vidē oculōs tuōs in speculō!"

Aemilia in cubiculō suō ancillās exspectat, neque ancillae veniunt; itaque eās vocat: "Syra et Dēlia! Venīte!" Ancillae ex cubiculō Iūliae exeunt. Aemilia imperat: "Dēlia, sūme speculum et ante mē tenē!" Dēlia: "Sed speculum tuum hīc nōn est. Iūlia in cubiculō suō habet speculum tuum!" Aemilia: "Quid agit Iūlia cum speculō meō?"`,
    questions: [
      { q: "Ubi est speculum Aemiliae?", options: ["In cubiculō Iūliae", "In ātriō", "In hortō"], a: 0 },
      { q: "Cūr Syra lacrimat?", options: ["Quia oculōs et nāsum suum foedōs putat", "Quia Dēlia eam pulsat", "Quia Aemilia īrāta est"], a: 0 },
      { q: "Quid Dēlia Syrae dat?", options: ["Speculum", "Mālum", "Rosam"], a: 0 },
      { q: "Quis ancillās exspectat?", options: ["Aemilia", "Iūlia", "Iūlius"], a: 0 }
    ]
  }
},

/* ================= CAPITVLVM VIII ================= */
{
  num: 8, roman: "VIII", icon: "💍",
  title: "Taberna Rōmāna",
  subtitle: "Comprar e vender · hic/ille · quanto custa? · ablativo de preço",
  grammar: [
    { title: "hic, haec, hoc · ille, illa, illud",
      html: `<b>hic</b> = este (perto de mim) · <b>ille</b> = aquele (longe):
      <table><tr><th>caso</th><th>este</th><th>aquele</th></tr>
      <tr><td>nom. m.</td><td class="la">hic ānulus</td><td class="la">ille ānulus</td></tr>
      <tr><td>nom. f.</td><td class="la">haec gemma</td><td class="la">illa gemma</td></tr>
      <tr><td>nom. n.</td><td class="la">hoc ōrnāmentum</td><td class="la">illud ōrnāmentum</td></tr>
      <tr><td>acus. m.</td><td class="la">hunc ānulum</td><td class="la">illum ānulum</td></tr>
      <tr><td>acus. f.</td><td class="la">hanc gemmam</td><td class="la">illam gemmam</td></tr></table>` },
    { title: "Quantī? Ablativo de preço",
      html: `<span class="ex-la">Quantī cōnstat ānulus?</span> = Quanto custa o anel?
      <br><span class="ex-la">Ānulus centum sēstertiīs cōnstat.</span> = O anel custa 100 sestércios (ablativo).
      <br><span class="ex-la">Iūlius ānulum centum sēstertiīs emit.</span> = compra por 100.
      <br><b>tantī… quantī</b> = por tanto… quanto · <b>tam… quam</b> = tão… quanto.` },
    { title: "Comprar, vender, mostrar",
      html: `<span class="ex-la">emit</span> compra · <span class="ex-la">vendit</span> vende · <span class="ex-la">ōstendit</span> mostra · <span class="ex-la">mōnstrat</span> aponta, mostra · <span class="ex-la">accipit</span> recebe · <span class="ex-la">cōnstat</span> custa · <span class="ex-la">convenit</span> serve, fica bem · <span class="ex-la">aspicit</span> olha para.
      <br><span class="ex-la">Tabernārius ōrnāmenta ōstendit.</span>` }
  ],
  vocab: [
    { la: "taberna", forms: "-ae f.", pt: "loja, taberna", ex: "Multae tabernae sunt in viā." },
    { la: "tabernārius", forms: "-ī m.", pt: "lojista, comerciante", ex: "Tabernārius ōrnāmenta vendit." },
    { la: "gemma", forms: "-ae f.", pt: "pedra preciosa, gema", ex: "Gemma in ānulō est." },
    { la: "margarīta", forms: "-ae f.", pt: "pérola", ex: "Margarītae circum collum sunt." },
    { la: "ānulus", forms: "-ī m.", pt: "anel", ex: "Ānulus gemmātus pulcher est." },
    { la: "ōrnāmentum", forms: "-ī n.", pt: "joia, adorno", ex: "Aemilia multa ōrnāmenta habet." },
    { la: "collum", forms: "-ī n.", pt: "pescoço", ex: "Margarītās circum collum pōnit." },
    { la: "digitus", forms: "-ī m.", pt: "dedo", ex: "Ānulus in digitō est." },
    { la: "pretium", forms: "-ī n.", pt: "preço", ex: "Magnum pretium est!" },
    { la: "sēstertius", forms: "-ī m.", pt: "sestércio (moeda)", ex: "Centum sēstertiīs cōnstat." },
    { la: "emit", forms: "v.", pt: "compra", ex: "Iūlius ānulum emit." },
    { la: "vendit", forms: "v.", pt: "vende", ex: "Tabernārius gemmās vendit." },
    { la: "ōstendit", forms: "v.", pt: "mostra, exibe", ex: "Domina sacculum ostendit." },
    { la: "mōnstrat", forms: "v.", pt: "mostra, aponta", ex: "Dēlia alium ānulum mōnstrat." },
    { la: "accipit", forms: "v.", pt: "recebe, aceita", ex: "Aemilia ōrnāmenta ā virō accipit." },
    { la: "cōnstat", forms: "v. + abl.", pt: "custa", ex: "Quantī cōnstat? Mīlle sēstertiīs!" },
    { la: "convenit", forms: "v. + ad", pt: "serve, fica bem", ex: "Ānulus ad digitum convenit." },
    { la: "aspicit", forms: "v.", pt: "olha para", ex: "Aspice hunc ānulum!" },
    { la: "ōrnat", forms: "v.", pt: "enfeita, adorna", ex: "Dēlia dominam suam ōrnat." },
    { la: "hic, haec, hoc", forms: "pron.", pt: "este, esta, isto", ex: "Aspice hunc ānulum!" },
    { la: "ille, illa, illud", forms: "pron.", pt: "aquele, aquela", ex: "Pretium illīus gemmae magnum est." },
    { la: "quantī", forms: "adv.", pt: "por quanto?", ex: "Quantī cōnstat ānulus?" },
    { la: "tantus", forms: "-a -um", pt: "tão grande", ex: "Tanta gemma ad parvum ānulum nōn convenit." },
    { la: "quam", forms: "adv.", pt: "que!, quão; do que", ex: "Quam pulcher est hic ānulus!" },
    { la: "alius", forms: "-a -ud", pt: "outro", ex: "Dēlia alium ānulum mōnstrat." },
    { la: "nimis", forms: "adv.", pt: "demais, excessivamente", ex: "Gemma nimis magna est." }
  ],
  pensum: [
    { t: "mcq", q: "“Aspice ___ ānulum!” (este anel, perto de mim)", options: ["hunc", "hic", "illud"], a: 0,
      why: "Acusativo masculino de hic: hunc ānulum." },
    { t: "cloze", prompt: "Haec gemma mīlle sēstertī__ cōnstat.", options: ["-īs", "-ōs", "-ī"], a: 0,
      why: "Preço no ablativo: mīlle sēstertiīs." },
    { t: "mcq", q: "“Quantī cōnstat ānulus?” significa:", options: ["Quanto custa o anel?", "Quantos anéis há?", "Onde está o anel?"], a: 0,
      why: "quantī = genitivo de preço na pergunta." },
    { t: "mcq", q: "hic / haec / hoc — qual acompanha ōrnāmentum?", options: ["hoc", "hic", "haec"], a: 0,
      why: "ōrnāmentum é neutro: hoc ōrnāmentum." },
    { t: "build", pt: "O lojista mostra os anéis.", la: "Tabernārius ānulōs ōstendit", extra: ["emit", "ānulus"] },
    { t: "build", pt: "Emília recebe muitas joias do seu marido.", la: "Aemilia multa ōrnāmenta ā virō suō accipit", extra: ["vendit", "virum"] },
    { t: "type", prompt: "Complete: Ānulus ad digitum ___. (fica bem, serve)", a: ["convenit"],
      why: "convenit ad = ajusta-se a." },
    { t: "type", prompt: "“Compra” (verbo, 3ª sing.):", a: ["emit"],
      why: "emit ↔ vendit: comprar ↔ vender." },
    { t: "cloze", prompt: "Dēlia ānulum in digit__ dominae pōnit.", options: ["-ō", "-um", "-ī"], a: 0,
      why: "in + ablativo (lugar onde): in digitō." },
    { t: "mcq", q: "“Quam pulcher est hic ānulus!” é…", options: ["uma exclamação: Que bonito é este anel!", "uma pergunta: Qual anel é bonito?", "uma comparação: mais bonito que"], a: 0,
      why: "quam + adjetivo = exclamação." }
  ],
  lectio: {
    title: "Ōrnāmenta Dominae",
    source: "Fabellae Latinae 9 (adaptado)",
    text: `Aemilia in cubiculō suō est cum Dēliā ancillā. Dēlia dominam suam ōrnat: margarītās circum collum Aemiliae pōnit. Aemilia ōrnāmentīs dēlectātur, neque sine ōrnāmentīs ē cubiculō exit. Multās margarītās et gemmās pulchrās habet, neque ūnum tantum ānulum, sed decem ānulōs gemmātōs! Aemilia multa ōrnāmenta ā virō suō pecūniōsō accipit.

Domina ancillae suae sacculum ostendit: "In hōc sacculō nōn nummī, sed ānulī sunt." Aemilia quattuor ānulōs ē sacculō sūmit et in mēnsā pōnit. Dēlia: "Ō, quam pulchrī sunt illī ānulī!"

Aemilia ūnum ānulum Dēliae ostendit: "Aspice hunc ānulum! Pretium huius ānulī est mīlle et centum sēstertiī." Dēlia: "Id magnum pretium est!" Aemilia: "Haec gemma sōla mīlle sēstertiīs cōnstat. Hunc ānulum pōne in digitō meō!" Ancilla ānulum in digitō dominae pōnit — in digitō quārtō, nam ānulus ad eum digitum convenit.

Aemilia cum ōrnāmentīs ē cubiculō exit, neque ōstium post sē claudit. Dēlia, quae iam sōla est, trēs ānulōs in mēnsā aspicit. Ōstium claudit, et ānulum quī magnam gemmam habet in digitō suō pōnit! "Quam pulcher est hic ānulus! Etiam ad meum digitum convenit!"

Sed Dēlia ancilla proba est: trēs ānulōs rūrsus in sacculō dominae pōnit et sine ōrnāmentīs ē cubiculō exit. Dēlia ōstium post sē claudit.`,
    questions: [
      { q: "Quid Dēlia circum collum Aemiliae pōnit?", options: ["Margarītās", "Rosās", "Nummōs"], a: 0 },
      { q: "Quantī cōnstat gemma sōla?", options: ["Mīlle sēstertiīs", "Centum sēstertiīs", "Decem sēstertiīs"], a: 0 },
      { q: "In quō digitō ānulus pōnitur?", options: ["In digitō quārtō", "In digitō prīmō", "In collō"], a: 0 },
      { q: "Quid Dēlia in fīne agit?", options: ["Ānulōs in sacculō dominae pōnit et exit", "Ānulum sūmit et discēdit", "Ānulum Aemiliae dat"], a: 0 }
    ]
  }
}
];

/* ===== Nomes próprios (lugares e personagens) ===== */
const NOMINA = [
  { la: "Rōma", pt: "Roma (a cidade)" }, { la: "Italia", pt: "Itália" },
  { la: "Eurōpa", pt: "Europa" }, { la: "Graecia", pt: "Grécia" },
  { la: "Hispānia", pt: "Espanha (Hispânia)" }, { la: "Gallia", pt: "Gália (França)" },
  { la: "Aegyptus", pt: "Egito" }, { la: "Āfrica", pt: "África" },
  { la: "Asia", pt: "Ásia" }, { la: "Syria", pt: "Síria" },
  { la: "Arabia", pt: "Arábia" }, { la: "Germānia", pt: "Germânia (Alemanha)" },
  { la: "Britannia", pt: "Britânia (Grã-Bretanha)" }, { la: "Nīlus", pt: "o rio Nilo" },
  { la: "Rhēnus", pt: "o rio Reno" }, { la: "Dānuvius", pt: "o rio Danúbio" },
  { la: "Tiberis", pt: "o rio Tibre (de Roma)" }, { la: "Corsica", pt: "Córsega" },
  { la: "Sardinia", pt: "Sardenha" }, { la: "Sicilia", pt: "Sicília" },
  { la: "Melita", pt: "Malta" }, { la: "Rhodus", pt: "Rodes (ilha grega)" },
  { la: "Brundisium", pt: "Bríndisi (porto no sul da Itália)" },
  { la: "Tūsculum", pt: "Túsculo (cidadezinha perto de Roma)" },
  { la: "Tūsculō", pt: "Túsculo (abl.)" }, { la: "Tūsculī", pt: "em Túsculo" },
  { la: "Capēna", pt: "Capena (portão sul de Roma)" }, { la: "Latīna", pt: "Latina (a via / latina)" },
  { la: "Appia", pt: "Ápia (a via)" },
  { la: "Iūlius", pt: "Júlio — o pai, dono da vīlla" },
  { la: "Aemilia", pt: "Emília — a mãe, esposa de Júlio" },
  { la: "Mārcus", pt: "Marcos — o filho travesso" },
  { la: "Quīntus", pt: "Quinto — o filho do meio" },
  { la: "Iūlia", pt: "Júlia — a filha caçula" },
  { la: "Iūliam", pt: "Júlia (objeto) — a filha caçula" },
  { la: "Iūliae", pt: "de/para Júlia — a filha caçula" },
  { la: "Iūliī", pt: "de Júlio — o pai" },
  { la: "Iūlium", pt: "Júlio (objeto) — o pai" },
  { la: "Iūliō", pt: "Júlio (abl.) — o pai" },
  { la: "Dāvus", pt: "Davo — escravo honesto de Júlio" },
  { la: "Mēdus", pt: "Medo — escravo fujão, namorado de Lídia" },
  { la: "Syra", pt: "Sira — escrava de Emília" },
  { la: "Dēlia", pt: "Délia — escrava de Emília" },
  { la: "Lēander", pt: "Leandro — escravo de Júlio" },
  { la: "Cornēlius", pt: "Cornélio — amigo de Júlio, mora em Túsculo" },
  { la: "Cornēlia", pt: "Cornélia — filha de Cornélio" },
  { la: "Sextus", pt: "Sexto — filho de Cornélio" },
  { la: "Fabia", pt: "Fábia — esposa de Cornélio" },
  { la: "Libanus", pt: "Líbano — escravo de Cornélio" },
  { la: "Lȳdia", pt: "Lídia — namorada grega de Medo, mora em Roma" }
];

/* ===== Palavras funcionais extras para o leitor (glossário) ===== */
const EXTRA_GLOSS = {
  "est": "é, está", "sunt": "são, estão", "esse": "ser, estar", "estne": "é? está?",
  "et": "e", "sed": "mas", "non": "não", "quoque": "também", "que": "e (enclítico)",
  "in": "em (abl.) / para (acus.)", "ex": "de (dentro de)", "e": "de (dentro de)",
  "ab": "de, desde; por", "a": "de; por", "ad": "para, junto a", "cum": "com",
  "sine": "sem", "per": "por, através de", "inter": "entre", "ante": "diante de",
  "post": "atrás de, depois", "circum": "ao redor de", "prope": "perto de",
  "apud": "junto a, na casa de", "procul": "longe",
  "qui": "que, o qual", "quae": "que, a qual", "quod": "que, o qual (n.)",
  "quem": "que, o qual (acus.)", "quis": "quem?", "quid": "o quê?",
  "cuius": "de quem", "quot": "quantos", "cur": "por quê?", "quia": "porque",
  "ubi": "onde", "quo": "para onde", "unde": "de onde", "num": "acaso…? (espera 'não')",
  "nonne": "não é verdade que…?", "quam": "quão, que!; do que", "quantum": "quanto",
  "ecce": "eis, olha", "iam": "já, agora", "hic": "este; aqui", "haec": "esta",
  "hoc": "isto", "hunc": "este (acus.)", "hanc": "esta (acus.)", "huius": "deste/desta",
  "ille": "aquele", "illa": "aquela", "illud": "aquilo", "illi": "aqueles; àquele",
  "illum": "aquele (acus.)", "illam": "aquela (acus.)", "illius": "daquele/daquela",
  "illic": "ali, lá", "is": "ele", "ea": "ela", "id": "isso", "eum": "ele (obj.)",
  "eam": "ela (obj.)", "eius": "dele, dela", "ei": "a ele, a ela; eles",
  "eo": "ele (abl.)", "eos": "eles (obj.)", "eas": "elas (obj.)", "eae": "elas",
  "se": "se, a si", "me": "me, a mim", "te": "te, a ti", "mihi": "para mim",
  "tibi": "para ti", "meus": "meu", "mea": "minha", "meum": "meu (n.)",
  "tuus": "teu", "tua": "tua", "tuum": "teu (n.)", "suus": "seu (próprio)",
  "sua": "sua (própria)", "suum": "seu (próprio, n.)", "suo": "seu (abl.)",
  "neque": "e não, nem", "nec": "nem", "nam": "pois", "autem": "porém",
  "itaque": "portanto, e assim", "etiam": "também, até", "tam": "tão",
  "tantum": "somente; tão grande (n.)", "tanta": "tão grande", "tantus": "tão grande",
  "solum": "somente", "sola": "sozinha", "solus": "sozinho", "rursus": "de novo",
  "nullus": "nenhum", "nulla": "nenhuma", "nullum": "nenhum (n.)",
  "multi": "muitos", "multae": "muitas", "multa": "muitas coisas", "multas": "muitas (acus.)",
  "multos": "muitos (acus.)", "pauci": "poucos", "paucae": "poucas", "pauca": "poucas coisas",
  "omnis": "todo", "omnes": "todos", "alius": "outro", "alia": "outra", "aliud": "outro (n.)",
  "alium": "outro (acus.)", "ceteri": "os demais", "cetera": "as demais coisas",
  "ceterae": "as demais", "primum": "primeiro", "primus": "primeiro", "prima": "primeira",
  "secunda": "segunda", "secundus": "segundo", "tertia": "terceira", "tertius": "terceiro",
  "quartus": "quarto", "quarto": "quarto (abl.)", "unus": "um", "una": "uma",
  "duo": "dois", "duae": "duas", "duos": "dois (acus.)", "tres": "três", "tria": "três (n.)",
  "quattuor": "quatro", "quinque": "cinco", "sex": "seis", "septem": "sete",
  "octo": "oito", "novem": "nove", "decem": "dez", "centum": "cem", "mille": "mil",
  "salve": "olá!", "salvete": "olá! (a vários)", "o": "ó!", "immo": "pelo contrário",
  "uhuhu": "buáá! (choro)", "hahahae": "hahaha! (riso)", "hihihi": "hi-hi-hi! (relincho)",
  "veni": "vem! (ordem)", "venite": "vinde! (ordem)", "vide": "vê! (ordem)",
  "videte": "vede! (ordem)", "audi": "ouve! (ordem)", "tace": "cala-te!",
  "responde": "responde!", "accusa": "acusa!", "sume": "pega!", "discede": "sai!",
  "habe": "tem! toma!", "pone": "põe!", "claude": "fecha!", "aperi": "abre!",
  "terge": "enxuga!", "tene": "segura!", "aspice": "olha!", "saluta": "cumprimenta!",
  "i": "vai! (ordem)", "ite": "ide!", "ambulate": "andai!",
  "verbum": "palavra", "verba": "palavras", "verbis": "com palavras",
  "habitant": "moram", "habent": "têm", "veniunt": "vêm", "vident": "veem",
  "discedunt": "vão embora", "delectant": "agradam", "exeunt": "saem",
  "intrant": "entram", "audiuntur": "são ouvidas", "amatur": "é amado/a",
  "timetur": "é temido/a", "salutatur": "é cumprimentado/a", "tenetur": "é segurado/a",
  "delectatur": "deleita-se", "ornatur": "é adornado/a", "ornantur": "são adornadas",
  "vehitur": "é levado (montado)", "portatur": "é carregado", "ponitur": "é posto",
  "vocare": "chamar", "putat": "acha, considera", "agit": "faz",
  "gemmatus": "com pedras preciosas", "gemmati": "com gemas", "gemmatos": "com gemas (acus.)",
  "pecuniosus": "rico", "pecunioso": "rico (abl.)", "fine": "fim (abl.)",
  "gratias": "obrigado (agradecimentos)", "domi": "em casa", "domine": "senhor! (voc.)"
};
