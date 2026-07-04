# LATINVM 🏛️

App de latim estilo Duolingo/LingQ baseado em **Lingua Latina per se Illustrata — Pars I: Familia Romana** (Hans H. Ørberg) e nas **Fabellae Latinae**. Uso pessoal de estudo.

## Rodar

Qualquer servidor estático serve:

```bash
cd ~/Downloads/latinum
python3 -m http.server 5199
# abre http://localhost:5199
```

(Também abre direto por `file://index.html`, mas o áudio TTS funciona melhor via http.)

## O que tem

- **Cursus** — trilha completa dos 35 capítulos (I–XXXV). Cada capítulo: lições de vocabulário (flashcards + quiz + pares + escuta + digitação), Grammatica (cards de gramática + drills de terminação estilo Pensum A), Pēnsum (montar frases, completar lacunas digitando, mini-leituras com pergunta, exercícios de escuta) e Lēctiō (leitura do texto adaptado + perguntas de compreensão em latim).
- **Repetītiō** — revisão espaçada (SRS, SM-2 simplificado) de todo vocabulário visto.
- **Bibliothēca** — as 30 Fabellae Latinae + os 24 Colloquia Personarum no modo leitura LingQ: toca na palavra → glossário PT + status azul (nova) / amarelo (aprendendo) / sem marca (sei).
- **Profectus** — XP, ofensiva (streak), ranking Cursus Honorum (Discipulus → Imperātor).
- Áudio via voz do sistema (usa voz italiana como aproximação da pronúncia restaurada).
- Progresso salvo em `localStorage` (por navegador).

## Estrutura

```
index.html
css/style.css
js/course.js    ← conteúdo caps I–VIII: vocab, gramática, exercícios, leituras
js/fabellae.js  ← histórias 1–9 da Bibliothēca
js/course2.js   ← expansão: caps IX–XII, fabellae 10–14, glossário extra
js/course3.js   ← expansão 2: caps XIII–XVIII, fabellae 15–21
js/app.js       ← engine (lições, SRS, leitor, gamificação)
content/        ← PDFs originais + textos extraídos (familia_romana.txt tem os 35 capítulos)
artifact.html   ← versão single-file gerada (publicada como Artifact no claude.ai)
```

## Tipos de exercício suportados (pensum)

`cloze` (múltipla escolha de terminação) · `mcq` · `gap` (completar lacuna digitando) · `type` (digitar) · `build` (montar frase com banco de palavras) · `pairs` (ligar pares) · `read` (mini-leitura + pergunta, palavras clicáveis) · `listen` (escuta com TTS: `{t:'listen', text, options, a}` ou automático por vocab).

## Estrutura de conteúdo

`js/course.js` (I–VIII) → `js/course2.js` (IX–XII) → `js/course3.js` (XIII–XVIII) → `js/course4a-d.js` (XIX–XXXV) → `js/fabellae.js` + `js/fabellae2.js` (30 fábulas) → `js/colloquia.js` (24 diálogos, gerado por `build_modules.py` a partir do PDF). Novos módulos: seguir o padrão `COURSE.push` / `FABELLAE.push` / `COLLOQUIA`.

Para atualizar o site: commit + push (GitHub Pages). Para atualizar o Artifact: regenerar `artifact.html` (charset + title + viewport + style.css + body do index + todos os js inline) e republicar na mesma URL.
