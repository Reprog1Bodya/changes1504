// quiz.js
document.addEventListener('DOMContentLoaded', () => {
  const quizData = [
    { q: "Какова ваша основная цель изучения языка?", opts: [
      { t: "Карьера и международный бизнес", s: { eng: 3, ger: 2, fre: 1 } },
      { t: "Путешествия и свободное общение", s: { spa: 3, ita: 2, eng: 1 } },
      { t: "Погружение в культуру, аниме или кино", s: { jpn: 3, srb: 1, pol: 1 } },
      { t: "Переезд или общение с родственниками", s: { pol: 3, srb: 2, ger: 1 } }
    ]},
    { q: "Как вы относитесь к грамматике?", opts: [
      { t: "Люблю чёткие правила и структуру", s: { ger: 3, pol: 2 } },
      { t: "Предпочитаю минимум правил и быструю практику", s: { spa: 3, ita: 2 } },
      { t: "Удобно учиться на контексте и исключениях", s: { eng: 3, fre: 2 } },
      { t: "Готов к сложной, но логичной системе", s: { jpn: 3, srb: 2 } }
    ]},
    { q: "Какой регион мира вам наиболее интересен?", opts: [
      { t: "Западная и Центральная Европа", s: { fre: 2, ger: 3, eng: 2 } },
      { t: "Южная Европа и Средиземноморье", s: { spa: 3, ita: 2, srb: 1 } },
      { t: "Восточная Европа и Балканы", s: { pol: 3, srb: 2 } },
      { t: "Азия и Дальний Восток", s: { jpn: 3 } }
    ]},
    { q: "Какое произношение вам ближе?", opts: [
      { t: "Чёткое, с акцентом на правильность", s: { ger: 2, fre: 2 } },
      { t: "Плавное, открытое и мелодичное", s: { spa: 3, ita: 3 } },
      { t: "Интонационное, с мягкими звуками", s: { jpn: 2, eng: 2 } },
      { t: "Богатое согласными и ударениями", s: { pol: 3, srb: 2 } }
    ]},
    { q: "Сколько времени вы готовы уделять занятиям в неделю?", opts: [
      { t: "2–3 часа (лёгкий старт)", s: { spa: 2, ita: 2, eng: 1 } },
      { t: "4–5 часов (системный подход)", s: { ger: 2, fre: 2, pol: 1 } },
      { t: "5+ часов (глубокое погружение)", s: { jpn: 3, srb: 2 } },
      { t: "Гибкий график, главное — регулярность", s: { eng: 3, fre: 2 } }
    ]},
    { q: "Какой контент вы потребляете чаще всего?", opts: [
      { t: "Фильмы, сериалы, YouTube", s: { eng: 3, fre: 2, spa: 1 } },
      { t: "Музыка, оперное искусство, театр", s: { ita: 3, srb: 2, fre: 1 } },
      { t: "Технологии, наука, бизнес-литература", s: { ger: 3, eng: 2 } },
      { t: "Аниме, манга, игры, восточная философия", s: { jpn: 3 } }
    ]},
    { q: "Есть ли у вас опыт изучения иностранных языков?", opts: [
      { t: "Только школьный английский", s: { eng: 2, spa: 2, ita: 1 } },
      { t: "Никакого, начинаю с нуля", s: { eng: 3, spa: 2, pol: 1 } },
      { t: "Знаю 1–2 языка, готов к сложным", s: { ger: 2, fre: 2, jpn: 2 } },
      { t: "Владею славянским языком", s: { pol: 3, srb: 2 } }
    ]},
    { q: "Какой стиль общения вам импонирует?", opts: [
      { t: "Прямой, деловой и лаконичный", s: { ger: 3, eng: 2 } },
      { t: "Эмоциональный, тёплый и выразительный", s: { spa: 3, ita: 2, srb: 1 } },
      { t: "Вежливый, с уважением к иерархии", s: { jpn: 3, fre: 2 } },
      { t: "Дружелюбный, открытый и неформальный", s: { pol: 2, ita: 2, eng: 1 } }
    ]},
    { q: "Что для вас важнее всего в языке?", opts: [
      { t: "Универсальность и глобальное признание", s: { eng: 3, fre: 2, spa: 2 } },
      { t: "Богатая история и литературная традиция", s: { fre: 2, ita: 3, pol: 2 } },
      { t: "Логичность и практическая польза в ЕС", s: { ger: 3, pol: 2, fre: 1 } },
      { t: "Уникальность и глубина культурного кода", s: { jpn: 3, srb: 2 } }
    ]},
    { q: "Как вы планируете использовать язык через год?", opts: [
      { t: "Свободно смотреть фильмы без субтитров", s: { eng: 2, fre: 2, spa: 2, jpn: 2 } },
      { t: "Работать или учиться в другой стране", s: { ger: 3, eng: 2, pol: 1 } },
      { t: "Путешествовать и легко заводить знакомства", s: { spa: 3, ita: 2, srb: 2 } },
      { t: "Читать оригинальную литературу", s: { fre: 2, pol: 3, ita: 1, ger: 1 } }
    ]}
  ];

  const state = { current: 0, scores: { eng:0, ger:0, spa:0, pol:0, jpn:0, fre:0, srb:0, ita:0 }, selected: null };
  const langNames = { eng:"Английского", ger:"Немецкого", spa:"Испанского", pol:"Польского", jpn:"Японского", fre:"Французского", srb:"Сербского", ita:"Итальянского" };
  const langDesc = {
    eng: "Самый универсальный язык для бизнеса, путешествий и медиа. Идеален для быстрого старта и карьеры.",
    ger: "Язык точности и инженерии. Отлично подходит для работы в Европе и технической сферы.",
    spa: "Мелодичный и логичный. Второй по распространённости в мире, идеален для путешествий и лёгкого входа.",
    pol: "Близкий к русскому, но со своей уникальной грамматикой. Отличный выбор для карьеры в ЕС.",
    jpn: "Уникальная письменность и глубокая культура. Для тех, кто ценит дисциплину и инновации.",
    fre: "Язык дипломатии, искусства и романтики. Прекрасно звучит и высоко ценится в культуре.",
    srb: "Тёплый и выразительный язык Балкан. Отлично подойдёт для культурного обмена и туризма.",
    ita: "Язык музыки, искусства и dolce vita. Лёгкий в произношении и невероятно атмосферный."
  };

  const els = {
    start: document.getElementById('quiz-start'),
    content: document.getElementById('quiz-content'),
    result: document.getElementById('quiz-result'),
    question: document.getElementById('question-text'),
    options: document.getElementById('options-container'),
    bar: document.getElementById('progress-bar'),
    counter: document.getElementById('current-q'),
    nextBtn: document.getElementById('next-btn'),
    resultLang: document.getElementById('result-lang'),
    resultDesc: document.getElementById('result-desc'),
    regBtn: document.getElementById('result-register-btn'),
    restartBtn: document.getElementById('restart-quiz-btn')
  };

  function showScreen(screen) {
    if (!screen) return;
    [els.start, els.content, els.result].forEach(s => s?.classList.remove('active'));
    screen.classList.add('active');
  }

  function renderQuestion() {
    const q = quizData[state.current];
    els.question.textContent = q.q;
    els.counter.textContent = state.current + 1;
    els.bar.style.width = `${(state.current / quizData.length) * 100}%`;
    els.options.innerHTML = '';
    state.selected = null;
    els.nextBtn.disabled = true;

    q.opts.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt.t;
      btn.onclick = () => {
        state.selected = i;
        document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        els.nextBtn.disabled = false;
      };
      els.options.appendChild(btn);
    });
  }

  function calculateResult() {
    let max = -1, winners = [];
    for (let l in state.scores) {
      if (state.scores[l] > max) { max = state.scores[l]; winners = [l]; }
      else if (state.scores[l] === max) winners.push(l);
    }
    return winners[0];
  }

  document.getElementById('start-quiz-btn')?.addEventListener('click', () => {
    state.current = 0;
    state.scores = { eng:0, ger:0, spa:0, pol:0, jpn:0, fre:0, srb:0, ita:0 };
    showScreen(els.content);
    renderQuestion();
  });

  els.nextBtn?.addEventListener('click', () => {
    if (state.selected === null) return;
    const scores = quizData[state.current].opts[state.selected].s;
    for (let l in scores) state.scores[l] += scores[l];
    state.current++;
    if (state.current < quizData.length) renderQuestion();
    else {
      const win = calculateResult();
      els.resultLang.textContent = `Курс ${langNames[win]} языка`;
      els.resultDesc.textContent = langDesc[win];
      showScreen(els.result);
    }
  });

  els.regBtn?.addEventListener('click', () => {
    document.querySelector('.main-courses')?.scrollIntoView({ behavior: 'smooth' });
  });
  els.restartBtn?.addEventListener('click', () => showScreen(els.start));
});