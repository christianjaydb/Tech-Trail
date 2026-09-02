/* ============================================================
   Computer Systems Basics Challenge — quiz engine
   QUESTION_POOL is provided by questions_data.js (loaded first)
   ============================================================ */

const root = document.getElementById('app');

/* ---------- Randomization helpers ---------- */

// Fisher-Yates shuffle — returns a NEW array, never mutates input
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Returns a shuffled copy of a question with its choices shuffled too
function shuffleChoices(question) {
  return Object.assign({}, question, { choices: shuffle(question.choices) });
}

// Picks `count` unique questions from the pool and shuffles their choices.
// Never mutates QUESTION_POOL.
function shuffleQuestions(pool, count) {
  const picked = shuffle(pool).slice(0, count);
  return picked.map(shuffleChoices);
}

/* ---------- Mode configuration ---------- */

const MODES = {
  quick:     { name: 'Quick Quiz',    count: 10,  desc: '10 questions. Fast diagnostic pass with immediate feedback.', code: 'QK-10' },
  standard:  { name: 'Standard Quiz', count: 25,  desc: '25 questions across all topics, with a live progress readout.', code: 'STD-25' },
  challenge: { name: 'Challenge Mode',count: 50,  desc: '50 questions, ramping from easy to hard. 5 mistakes and it\'s over.', code: 'CHL-50' },
  practice:  { name: 'Practice Mode', count: null,desc: 'Unlimited, untimed practice with an explanation after every answer.', code: 'PRC-∞' },
  full:      { name: 'Full Review',   count: QUESTION_POOL.length, desc: `The entire ${QUESTION_POOL.length}-question pool, shuffled, no repeats.`, code: `FUL-${QUESTION_POOL.length}` },
};

// Icons echo the brand-mark's circuit language (currentColor stroke, 1.6 weight,
// round caps) so each route reads as a distinct signal rather than a decoration.
const MODE_ICONS = {
  // Quick Quiz — a lightning bolt, for a fast diagnostic pass
  quick: `
<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M18 5 L9.5 18.5 L15 18.5 L13.5 27 L23 13 L16.8 13 Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" fill="currentColor" fill-opacity="0.14"/>
</svg>`,
  // Standard Quiz — a filled progress bar, for the live progress readout
  standard: `
<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="5" y="12.5" width="22" height="7" rx="3.5" stroke="currentColor" stroke-width="1.6"/>
  <rect x="7.3" y="14.8" width="12" height="2.4" rx="1.2" fill="currentColor"/>
</svg>`,
  // Challenge Mode — ramping bars with a lit node at the peak, for rising difficulty
  challenge: `
<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <line x1="8" y1="23" x2="8" y2="18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  <line x1="16" y1="23" x2="16" y2="13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  <line x1="24" y1="23" x2="24" y2="8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  <circle cx="24" cy="8" r="1.9" fill="currentColor"/>
</svg>`,
  // Practice Mode — a bold infinity loop, for untimed and unlimited repetition
  practice: `
<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M16 16 C16 12 12.8 9.2 9.8 9.2 C6.3 9.2 4 12.1 4 16 C4 19.9 6.3 22.8 9.8 22.8 C13.8 22.8 15.3 19 16 16 C16.7 13 18.2 9.2 22.2 9.2 C25.7 9.2 28 12.1 28 16 C28 19.9 25.7 22.8 22.2 22.8 C19.2 22.8 16 20 16 16 Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
</svg>`,
  // Full Review — stacked layers, for the entire question pool
  full: `
<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M16 7 L25 12 L16 17 L7 12 Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  <path d="M7 17.5 L16 22.5 L25 17.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 22.5 L16 27.5 L25 22.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
};

const MAX_CHALLENGE_MISTAKES = 5;

function ratingFor(pct) {
  if (pct >= 90) return 'Excellent';
  if (pct >= 80) return 'Very Good';
  if (pct >= 70) return 'Good';
  if (pct >= 60) return 'Needs Improvement';
  return 'Keep Practicing';
}

/* ---------- Application state ---------- */

let state = null;

function freshState() {
  return {
    screen: 'home',
    mode: null,
    timerSetting: 0, // 0 = no timer
    questions: [],
    index: 0,
    score: 0,
    streak: 0,
    highestStreak: 0,
    correctCount: 0,
    incorrectCount: 0,
    incorrectLog: [],
    selected: null,
    answered: false,
    timeLeft: 0,
    timerId: null,
    startTime: null,
    endTime: null,
    mistakes: 0,
    practicePool: [],   // shuffled queue for practice mode
    pendingMode: null,  // mode chosen but awaiting timer selection
  };
}

state = freshState();

function stopTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function goto(screen) {
  state.screen = screen;
  render();
}

/* ---------- Quiz session setup ---------- */

function buildSession(mode) {
  if (mode === 'challenge') {
    const easy = shuffle(QUESTION_POOL.filter(q => q.difficulty === 'Easy'));
    const medium = shuffle(QUESTION_POOL.filter(q => q.difficulty === 'Medium'));
    const hard = shuffle(QUESTION_POOL.filter(q => q.difficulty === 'Hard'));
    const eCount = Math.min(15, easy.length);
    const mCount = Math.min(20, medium.length);
    const hCount = Math.min(15, hard.length);
    const seq = [...easy.slice(0, eCount), ...medium.slice(0, mCount), ...hard.slice(0, hCount)];
    return seq.map(shuffleChoices);
  }
  if (mode === 'full') {
    return shuffleQuestions(QUESTION_POOL, QUESTION_POOL.length);
  }
  const cfg = MODES[mode];
  return shuffleQuestions(QUESTION_POOL, cfg.count);
}

function startQuiz(mode, timerSetting) {
  stopTimer();
  const fresh = freshState();
  fresh.mode = mode;
  fresh.timerSetting = mode === 'practice' ? 0 : timerSetting;
  fresh.startTime = Date.now();

  if (mode === 'practice') {
    fresh.practicePool = shuffle(QUESTION_POOL);
    fresh.questions = [fresh.practicePool.shift()].map(shuffleChoices);
  } else {
    fresh.questions = buildSession(mode);
  }
  state = fresh;
  goto('quiz');
  armTimer();
}

function nextPracticeQuestion() {
  if (state.practicePool.length === 0) {
    state.practicePool = shuffle(QUESTION_POOL);
  }
  const q = shuffleChoices(state.practicePool.shift());
  state.questions.push(q);
}

/* ---------- Timer ---------- */

function armTimer() {
  stopTimer();
  if (!state.timerSetting) return;
  state.timeLeft = state.timerSetting;
  state.timerId = setInterval(() => {
    state.timeLeft -= 1;
    if (state.timeLeft <= 0) {
      stopTimer();
      if (!state.answered) submitAnswer(null, true);
    } else {
      renderTimerOnly();
    }
  }, 1000);
}

/* ---------- Answering ---------- */

function submitAnswer(choice, timedOut) {
  if (state.answered) return;
  const q = state.questions[state.index];
  stopTimer();
  state.answered = true;
  state.selected = choice;
  const correct = !timedOut && choice === q.answer;

  if (correct) {
    state.correctCount += 1;
    state.streak += 1;
    state.highestStreak = Math.max(state.highestStreak, state.streak);
  } else {
    state.incorrectCount += 1;
    state.streak = 0;
    state.mistakes += 1;
    state.incorrectLog.push({
      question: q.question,
      userAnswer: timedOut ? '(no answer — time expired)' : choice,
      correctAnswer: q.answer,
      explanation: q.explanation,
    });
  }
  // Score is always the percentage of correct answers out of everything
  // answered so far, capped between 0 and 100 — never a raw point tally.
  const answeredSoFar = state.correctCount + state.incorrectCount;
  state.score = answeredSoFar > 0
    ? Math.max(0, Math.min(100, Math.round((state.correctCount / answeredSoFar) * 100)))
    : 0;
  render();
}

function advance() {
  const isLast = state.index >= state.questions.length - 1;

  if (state.mode === 'challenge' && state.mistakes >= MAX_CHALLENGE_MISTAKES) {
    finishQuiz();
    return;
  }
  if (state.mode === 'practice') {
    state.index += 1;
    nextPracticeQuestion();
    state.answered = false;
    state.selected = null;
    render();
    armTimer();
    return;
  }
  if (isLast) {
    finishQuiz();
    return;
  }
  state.index += 1;
  state.answered = false;
  state.selected = null;
  render();
  armTimer();
}

// Lets the player end the run early from mid-quiz. Whatever has been
// answered so far still counts — results are computed from the same
// score/correctCount/incorrectCount tallies as a normal finish.
// Uses a custom modal instead of window.confirm(), since native browser
// dialogs are blocked in sandboxed/embedded previews and would otherwise
// make the button appear to do nothing.
function confirmEndQuiz() {
  const answered = state.correctCount + state.incorrectCount;
  const msg = answered > 0
    ? `You've answered ${answered} question${answered === 1 ? '' : 's'} so far. Your results will be based on those.`
    : 'No questions have been answered yet — your results will be empty.';
  showModal({
    title: 'End quiz now?',
    body: msg,
    confirmLabel: 'End Quiz',
    cancelLabel: 'Keep Playing',
    onConfirm: finishQuiz,
  });
}

function showModal({ title, body, confirmLabel, cancelLabel, onConfirm }) {
  const overlay = el('div', { class: 'modal-overlay', role: 'presentation' });
  const onKeydown = (e) => { if (e.key === 'Escape') { e.preventDefault(); close(); } };
  const close = () => {
    overlay.remove();
    document.removeEventListener('keydown', onKeydown);
  };
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', onKeydown);

  const box = el('div', { class: 'modal-box', role: 'alertdialog', 'aria-modal': 'true', 'aria-label': title }, [
    el('h3', { class: 'modal-title' }, title),
    el('p', { class: 'modal-body' }, body),
    el('div', { class: 'modal-actions' }, [
      el('button', { class: 'ghost-btn', onclick: close }, cancelLabel),
      el('button', {
        class: 'primary-btn danger',
        onclick: () => { close(); onConfirm(); },
      }, confirmLabel),
    ]),
  ]);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
  box.querySelector('.primary-btn')?.focus();
}

function finishQuiz() {
  stopTimer();
  state.endTime = Date.now();
  goto('results');
}

/* ---------- Rendering ---------- */

function render() {
  root.innerHTML = '';
  root.appendChild(renderBrandBar());

  let body;
  switch (state.screen) {
    case 'home': body = renderHome(); break;
    case 'timer-select': body = renderTimerSelect(); break;
    case 'quiz': body = renderQuiz(); break;
    case 'results': body = renderResults(); break;
    case 'review': body = renderReview(); break;
    default: body = renderHome();
  }
  root.appendChild(body);
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === null || v === undefined || v === false) continue; // skip falsy attrs (e.g. disabled: null)
    if (k === 'class') node.className = v;
    else if (k === 'text') node.textContent = v;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2), v);
    else if (v === true) node.setAttribute(k, '');
    else node.setAttribute(k, v);
  }
  (Array.isArray(children) ? children : [children]).forEach(c => {
    if (c) node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  });
  return node;
}

const TRAIL_MARK_SVG = `
<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="9" y="9" width="14" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/>
  <rect x="13" y="13" width="6" height="6" rx="1" fill="currentColor"/>
  <line x1="13" y1="9" x2="13" y2="6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  <line x1="19" y1="9" x2="19" y2="6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  <line x1="13" y1="23" x2="13" y2="26" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  <line x1="19" y1="23" x2="19" y2="26" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  <line x1="9" y1="13" x2="6" y2="13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  <line x1="9" y1="19" x2="6" y2="19" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  <line x1="23" y1="13" x2="26" y2="13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  <line x1="23" y1="19" x2="26" y2="19" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
</svg>`;

function renderBrandBar() {
  return el('div', { class: 'brand-bar' }, [
    el('div', { class: 'brand' }, [
      (() => {
        const mark = el('div', { class: 'brand-mark', 'aria-hidden': 'true' });
        mark.innerHTML = TRAIL_MARK_SVG;
        return mark;
      })(),
      el('div', { class: 'brand-word' }, ['Tech', el('em', {}, 'Trail')]),
    ]),
    el('div', { class: 'brand-tag' }, 'CS Basics Training Route'),
  ]);
}

/* ---- Home ---- */

function renderHome() {
  const wrap = el('div', { class: 'screen' });
  wrap.appendChild(el('div', { class: 'hero' }, [
    el('h1', {}, ['Chart your route through ', el('span', {}, 'computer systems')]),
    el('p', {}, `A self-guided trail through hardware, operating systems, networking, and cybersecurity fundamentals. Every attempt reshuffles a fresh path from a pool of ${QUESTION_POOL.length} questions — no two runs look the same.`),
    el('div', { class: 'hero-stats' }, [
      el('span', {}, [el('b', {}, String(QUESTION_POOL.length)), ' questions']),
      el('span', {}, [el('b', {}, '5'), ' routes']),
    ]),
  ]));

  wrap.appendChild(el('div', { class: 'section-label' }, 'Choose your route'));

  const grid = el('div', { class: 'mode-grid' });
  Object.entries(MODES).forEach(([key, cfg]) => {
    const icon = el('div', { class: `mode-icon mode-icon-${key}`, 'aria-hidden': 'true' });
    icon.innerHTML = MODE_ICONS[key] || '';
    const card = el('button', {
      class: 'mode-card',
      onclick: () => {
        state.pendingMode = key;
        if (key === 'practice') {
          startQuiz('practice', 0);
        } else {
          goto('timer-select');
        }
      },
    }, [
      icon,
      el('div', { class: 'mode-meta' }, cfg.code),
      el('div', { class: 'mode-name' }, cfg.name),
      el('p', { class: 'mode-desc' }, cfg.desc),
    ]);
    grid.appendChild(card);
  });
  wrap.appendChild(grid);

  return wrap;
}

/* ---- Timer select ---- */

function renderTimerSelect() {
  const mode = state.pendingMode;
  const cfg = MODES[mode];
  const wrap = el('div', { class: 'screen' });
  const panel = el('div', { class: 'panel' });
  panel.appendChild(el('h2', {}, `${cfg.name} — Timer`));
  panel.appendChild(el('p', { class: 'panel-sub' }, 'Choose a per-question time limit, or run without one.'));

  const options = [
    { label: 'No Timer', value: 0 },
    { label: '15 seconds', value: 15 },
    { label: '30 seconds', value: 30 },
    { label: '60 seconds', value: 60 },
  ];
  let chosen = 0;
  const row = el('div', { class: 'choice-row', role: 'group', 'aria-label': 'Timer options' });
  options.forEach(opt => {
    const btn = el('button', {
      class: 'pill-btn' + (opt.value === chosen ? ' active' : ''),
      onclick: () => {
        chosen = opt.value;
        row.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      },
    }, opt.label);
    row.appendChild(btn);
  });
  panel.appendChild(row);

  panel.appendChild(el('div', { class: 'btn-row' }, [
    el('button', { class: 'primary-btn', onclick: () => startQuiz(mode, chosen) }, `Start ${cfg.name}`),
    el('button', { class: 'ghost-btn', onclick: () => goto('home') }, 'Back'),
  ]));

  wrap.appendChild(panel);
  return wrap;
}

/* ---- Quiz ---- */

function diffClass(d) {
  return 'diff-' + d.toLowerCase();
}

function renderQuiz() {
  const q = state.questions[state.index];
  const wrap = el('div', { class: 'screen' });

  const totalLabel = state.mode === 'practice' ? '∞' : String(state.questions.length);
  const qNumLabel = `${state.index + 1} / ${totalLabel}`;

  const stickyBar = el('div', { class: 'quiz-stickybar' });
  stickyBar.appendChild(el('div', { class: 'quiz-topbar' }, [
    el('button', { class: 'end-btn', onclick: confirmEndQuiz, type: 'button' }, ['✕ ', 'End Quiz']),
  ]));

  const scoreCell = telCell('Score', `${state.score}%`, 'accent');
  if (state.answered && state.selected === q.answer) {
    scoreCell.classList.add('pulse');
  }
  const streakCell = telCell('Streak', String(state.streak), 'accent');
  if (state.answered && state.streak > 0 && state.selected === q.answer) {
    streakCell.classList.add('pulse');
  }

  const timerLow = state.timerSetting && state.timeLeft <= 5;
  const timerCell = telCell('Timer', state.timerSetting ? `${state.timeLeft}s` : '—', timerLow ? 'amber' : '');
  timerCell.classList.add('timer-cell');
  if (timerLow) timerCell.classList.add('low');
  if (state.timerSetting) {
    const pct = Math.max(0, Math.min(100, (state.timeLeft / state.timerSetting) * 100));
    const bar = el('div', { class: 'timer-bar' });
    bar.appendChild(el('div', { class: 'timer-bar-fill', style: `width:${pct}%` }));
    timerCell.appendChild(bar);
  }

  const telemetry = el('div', { class: 'telemetry' }, [
    telCell('Question', qNumLabel),
    scoreCell,
    streakCell,
    telCell('Difficulty', q.difficulty, diffClass(q.difficulty)),
    timerCell,
  ]);
  stickyBar.appendChild(telemetry);

  if (state.mode !== 'practice') {
    const pct = Math.round(((state.index) / state.questions.length) * 100);
    const track = el('div', { class: 'progress-track' });
    track.appendChild(el('div', { class: 'progress-fill', style: `width:${pct}%` }));
    stickyBar.appendChild(track);
  }
  wrap.appendChild(stickyBar);

  const card = el('div', { class: 'q-card' });
  card.appendChild(el('div', { class: 'q-meta' }, [
    el('span', { class: 'q-tag' }, q.category),
    el('span', { class: 'q-tag ' + diffClass(q.difficulty) }, q.difficulty),
  ]));
  card.appendChild(el('p', { class: 'q-text' }, q.question));

  const letters = ['A', 'B', 'C', 'D'];
  const choicesWrap = el('div', { class: 'choices', role: 'radiogroup', 'aria-label': 'Answer choices' });
  q.choices.forEach((choice, i) => {
    const isCorrect = choice === q.answer;
    const isPicked = choice === state.selected;
    let cls = 'choice-btn';
    let badge = letters[i] || '•';
    if (state.answered) {
      if (isCorrect) { cls += ' correct'; badge = '✓'; }
      else if (isPicked) { cls += ' incorrect'; badge = '✗'; }
      else { cls += ' dim'; }
    } else if (isPicked) {
      cls += ' selected';
    }
    const btn = el('button', {
      class: cls,
      disabled: state.answered ? 'disabled' : null,
      'aria-pressed': isPicked ? 'true' : 'false',
      onclick: () => submitAnswer(choice, false),
    }, [
      el('span', { class: 'letter' }, badge),
      el('span', {}, choice),
    ]);
    choicesWrap.appendChild(btn);
  });
  card.appendChild(choicesWrap);

  if (!state.answered) {
    card.appendChild(el('div', { class: 'kbd-hint' }, [
      el('kbd', {}, '1–4'), 'or', el('kbd', {}, 'A–D'), 'to answer · ',
      el('kbd', {}, 'Esc'), 'to end quiz',
    ]));
  }

  if (state.answered) {
    const wasCorrect = state.selected === q.answer;
    const fb = el('div', { class: 'feedback ' + (wasCorrect ? 'ok' : 'no'), role: 'status', 'aria-live': 'polite' });
    fb.appendChild(el('div', { class: 'status-line' },
      wasCorrect ? '✓ CORRECT' : `✗ INCORRECT — Correct answer: ${q.answer}`));
    fb.appendChild(el('div', { class: 'explain' }, q.explanation));
    card.appendChild(fb);

    const footer = el('div', { class: 'q-footer' });
    const isLastNonPractice = state.mode !== 'practice' && state.index >= state.questions.length - 1;
    const challengeOver = state.mode === 'challenge' && state.mistakes >= MAX_CHALLENGE_MISTAKES;
    let label = 'Next Question →';
    if (challengeOver) label = 'See Results →';
    else if (isLastNonPractice) label = 'Finish Quiz →';
    footer.appendChild(el('button', { class: 'primary-btn', onclick: advance }, label));
    card.appendChild(footer);
    card.appendChild(el('div', { class: 'kbd-hint' }, [el('kbd', {}, 'Enter'), 'to continue']));
  }

  wrap.appendChild(card);

  if (state.mode === 'challenge') {
    const remaining = MAX_CHALLENGE_MISTAKES - state.mistakes;
    wrap.appendChild(el('p', { class: 'panel-sub', style: 'margin-top:14px;font-family:var(--font-mono);font-size:12px;' },
      `Mistakes remaining before shutdown: ${remaining} / ${MAX_CHALLENGE_MISTAKES}`));
  }

  return wrap;
}

function telCell(label, value, extraClass = '') {
  return el('div', { class: 'cell' }, [
    el('div', { class: 'k' }, label),
    el('div', { class: 'v ' + extraClass }, value),
  ]);
}

// Lightweight update of just the timer readout to avoid full re-render churn each second
function renderTimerOnly() {
  if (state.screen !== 'quiz') return;
  const cells = root.querySelectorAll('.telemetry .cell .v');
  const timerCell = root.querySelector('.telemetry .cell.timer-cell');
  const low = state.timerSetting && state.timeLeft <= 5;
  if (cells.length >= 5) {
    cells[4].textContent = state.timerSetting ? `${state.timeLeft}s` : '—';
    cells[4].className = 'v' + (low ? ' amber' : '');
  }
  if (timerCell) {
    timerCell.classList.toggle('low', !!low);
    const fill = timerCell.querySelector('.timer-bar-fill');
    if (fill && state.timerSetting) {
      const pct = Math.max(0, Math.min(100, (state.timeLeft / state.timerSetting) * 100));
      fill.style.width = pct + '%';
    }
  }
}

/* ---- Results ---- */

function renderResults() {
  const wrap = el('div', { class: 'screen' });
  const answered = state.correctCount + state.incorrectCount;
  const pct = answered > 0 ? Math.round((state.correctCount / answered) * 100) : 0;
  const rating = ratingFor(pct);
  const seconds = Math.max(0, Math.round(((state.endTime || Date.now()) - state.startTime) / 1000));
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const timeStr = `${mins}m ${secs}s`;

  const pctEl = el('div', { class: 'pct' }, '0%');
  wrap.appendChild(el('div', { class: 'rating-banner' }, [
    pctEl,
    el('div', { class: 'label' }, `${rating} · ${MODES[state.mode].name}`),
  ]));
  animateCountUp(pctEl, pct, '%');

  wrap.appendChild(el('div', { class: 'stat-grid' }, [
    statCell('Final Score', `${pct}%`),
    statCell('Correct', String(state.correctCount)),
    statCell('Incorrect', String(state.incorrectCount)),
    statCell('Accuracy', `${pct}%`),
    statCell('Highest Streak', String(state.highestStreak)),
    statCell('Time Taken', timeStr),
  ]));

  const btnRow = el('div', { class: 'btn-row' });
  btnRow.appendChild(el('button', { class: 'primary-btn', onclick: () => startQuiz(state.mode, state.timerSetting) }, 'Play Again'));
  btnRow.appendChild(el('button', { class: 'ghost-btn', onclick: () => goto('home') }, 'Try Another Mode'));
  if (state.incorrectLog.length > 0) {
    btnRow.appendChild(el('button', { class: 'ghost-btn', onclick: () => goto('review') }, 'Review Incorrect Answers'));
  }
  btnRow.appendChild(el('button', { class: 'ghost-btn', onclick: () => goto('home') }, 'Back to Home'));
  wrap.appendChild(btnRow);

  return wrap;
}

// Animates a number counting up to `target` over ~700ms. Respects the
// reduced-motion setting by jumping straight to the final value.
function animateCountUp(node, target, suffix = '') {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    node.textContent = `${target}${suffix}`;
    return;
  }
  const duration = 700;
  const start = performance.now();
  function tick(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    node.textContent = `${Math.round(target * eased)}${suffix}`;
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function statCell(label, value) {
  return el('div', { class: 'stat-cell' }, [
    el('div', { class: 'k' }, label),
    el('div', { class: 'v' }, value),
  ]);
}

/* ---- Review ---- */

function renderReview() {
  const wrap = el('div', { class: 'screen' });
  wrap.appendChild(el('div', { class: 'section-label' }, `Incorrect answers (${state.incorrectLog.length})`));

  if (state.incorrectLog.length === 0) {
    wrap.appendChild(el('div', { class: 'empty-note' }, 'No incorrect answers to review — clean run.'));
  } else {
    state.incorrectLog.forEach(item => {
      const box = el('div', { class: 'review-item' });
      box.appendChild(el('p', { class: 'q' }, item.question));
      box.appendChild(el('div', { class: 'row wrong' }, [
        el('span', { class: 'lbl' }, 'Your answer:'),
        el('span', { class: 'val' }, item.userAnswer),
      ]));
      box.appendChild(el('div', { class: 'row right' }, [
        el('span', { class: 'lbl' }, 'Correct answer:'),
        el('span', { class: 'val' }, item.correctAnswer),
      ]));
      box.appendChild(el('div', { class: 'explain' }, item.explanation));
      wrap.appendChild(box);
    });
  }

  wrap.appendChild(el('div', { class: 'btn-row' }, [
    el('button', { class: 'ghost-btn', onclick: () => goto('results') }, '← Back to Results'),
    el('button', { class: 'primary-btn', onclick: () => goto('home') }, 'Back to Home'),
  ]));

  return wrap;
}

/* ---------- Keyboard shortcuts ---------- */
// 1-4 / A-D pick an answer, Enter advances once answered, Escape opens
// the End Quiz confirmation. Disabled while the modal owns focus/keys.
function handleQuizKeydown(e) {
  if (document.querySelector('.modal-overlay')) return;
  if (state.screen !== 'quiz') return;
  const q = state.questions[state.index];

  if (!state.answered) {
    const numMap = { '1': 0, '2': 1, '3': 2, '4': 3 };
    const letMap = { a: 0, b: 1, c: 2, d: 3 };
    let idx = null;
    if (Object.prototype.hasOwnProperty.call(numMap, e.key)) idx = numMap[e.key];
    else if (Object.prototype.hasOwnProperty.call(letMap, e.key.toLowerCase())) idx = letMap[e.key.toLowerCase()];
    if (idx !== null && q.choices[idx] !== undefined) {
      e.preventDefault();
      submitAnswer(q.choices[idx], false);
      return;
    }
  } else if (e.key === 'Enter') {
    e.preventDefault();
    advance();
    return;
  }

  if (e.key === 'Escape') {
    e.preventDefault();
    confirmEndQuiz();
  }
}
document.addEventListener('keydown', handleQuizKeydown);

/* ---------- Boot ---------- */

render();
