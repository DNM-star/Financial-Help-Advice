// Shared navigation and simple interactive learning activities for each page.
const modules = [
  {
    title: "Understanding Money",
    description:
      "What is money? Needs vs. wants, income, and everyday expenses.",
    lessons: 4,
    icon: "money",
  },
  {
    title: "Saving, Goals & Investing",
    description:
      "Why saving matters, short-term vs. long-term goals, safe places to keep money, M-Shwari, MMFs, and junior compound growth.",
    lessons: 4,
    icon: "saving",
  },
  {
    title: "Budgeting",
    description:
      "Planning pocket money, balancing spending and saving, avoiding impulse buys.",
    lessons: 4,
    icon: "budget",
  },
  {
    title: "Borrowing and Debt",
    description:
      "What is borrowing, interest, Fuliza basics, and why repayment matters.",
    lessons: 4,
    icon: "borrow",
  },
  {
    title: "Digital Money and M-Pesa",
    description:
      "How mobile money works, Till vs. Paybill, transaction fees, and staying safe.",
    lessons: 5,
    icon: "phone",
  },
  {
    title: "Entrepreneurship",
    description:
      "Earning as a teen, turning skills into micro-income, pricing and profit.",
    lessons: 3,
    icon: "growth",
  },
];

const moneyTips = [
  {
    category: "01 · Spending",
    title: "Think before spending",
    description:
      "Use the 24-hour rule before buying something you saw online. Waiting one day helps you tell if you truly want it or if it was just a passing urge.",
    action: "24-Hour Pause",
    icon: "clock",
  },
  {
    category: "02 · Saving",
    title: "Save something from your pocket money",
    description:
      "Even KSh 50 a week builds a habit. Put your savings aside first—into a locked savings jar or M-Pesa lock savings—before you start spending the rest.",
    action: "Start with KSh 50",
    icon: "saving",
  },
  {
    category: "03 · Borrowing",
    title: "Understand borrowing before accepting a loan",
    description:
      "Know the fees, interest, and repayment date before you borrow. A quick mobile loan can cost much more than you expect if you miss the deadline.",
    action: "Read the Terms",
    icon: "receipt",
  },
  {
    category: "04 · Security",
    title: "Protect your M-Pesa PIN",
    description:
      "Never share your PIN or ID details, even with friends. Keep your phone locked and always double-check the recipient name before confirming any transfer.",
    action: "Keep It Private",
    icon: "lock",
  },
  {
    category: "05 · Safety",
    title: "Learn to recognise online scams",
    description:
      "If a deal on Instagram or WhatsApp looks too good, pause. Never pay a registration fee to claim a prize or get a quick online job.",
    action: "Verify First",
    icon: "warning",
  },
  {
    category: "06 · Budgeting",
    title: "Understand the difference between needs and wants",
    description:
      "Separate school essentials from impulse treats. Cover your transport, stationery, and lunch first before spending on snacks or data bundles.",
    action: "Prioritise Essentials",
    icon: "balance",
  },
  {
    category: "07 · Tracking",
    title: "Track everyday micro-spends",
    description:
      "Small daily expenses like snacks, airtime, or boda-boda rides add up swiftly. Review your M-Pesa statements weekly or note small cash buys in a pocket notebook.",
    action: "Log Micro-Spends",
    icon: "ledger",
  },
  {
    category: "08 · Mindfulness",
    title: "Set a 72-hour cooling period for peer hype",
    description:
      "When a viral gadget or fashion trend sparks sudden excitement among friends, step back for 3 full days. Rational thinking returns once social pressure settles.",
    action: "Cooling Period",
    icon: "time",
  },
  {
    category: "09 · Social Life",
    title: "Budget for social outings and group gifts",
    description:
      "Birthdays, hangouts, and school group fundraisers happen regularly. Set aside a tiny fixed social pool each month so you never dip into your savings or emergency funds.",
    action: "Plan Group Costs",
    icon: "people",
  },
];

const weeklyHabits = [
  {
    title: "I waited 24 hours before making an online or impulse purchase",
    detail: "Practiced the 24-hour rule",
  },
  {
    title: "I saved at least KSh 50 from my pocket money or allowance",
    detail: "Paid myself first",
  },
  {
    title: "I checked the full fees and repayment date before borrowing",
    detail: "Avoided surprise loan costs",
  },
  {
    title: "I kept my M-Pesa PIN and personal ID details completely private",
    detail: "Protected my mobile money",
  },
  {
    title: "I paused and verified a suspicious deal or link before clicking",
    detail: "Stayed alert against scams",
  },
  {
    title: "I covered my school needs before spending on wants",
    detail: "Balanced needs and wants",
  },
];

const stories = [
  {
    category: "budgeting",
    label: "Budgeting",
    title: "Managing KSh 500 Pocket Money",
    intro:
      "Stretching a term-time allowance across snacks, airtime, and a small weekly saving.",
    situation:
      "Brian receives KSh 500 every Monday morning. By Tuesday afternoon, mandazis, smokies, and data bundles usually wipe out his balance.",
    decisions: [
      "Split it into 50% snacks, 30% airtime, and 20% savings.",
      "Carry packed snacks twice a week to free up KSh 150.",
    ],
    lesson: "Giving every shilling a job on Monday prevents mid-week regret.",
  },
  {
    category: "saving",
    label: "Saving",
    title: "Saving Towards a New Phone",
    intro:
      "Saying no to impulse buys for four months to reach a KSh 12,000 goal without borrowing.",
    situation:
      "Amina wants a KSh 12,000 smartphone for school research and photography. She earns KSh 750 a week from chores and tutoring.",
    decisions: [
      "Set aside KSh 600 weekly in a separate savings account.",
      "Track milestones every KSh 3,000 to stay motivated.",
    ],
    lesson:
      "Consistency beats size: small weekly deposits build real purchasing power.",
  },
  {
    category: "peer-pressure",
    label: "Peer Pressure",
    title: "Handling Pressure from Friends to Spend",
    intro:
      "Navigating weekend outings without going broke or feeling left out.",
    situation:
      "Your friends plan a Saturday hangout where everyone is ordering KSh 800 meals, but your budget is KSh 250.",
    decisions: [
      "Suggest an affordable alternative like Karura Forest or Uhuru Park.",
      "Eat at home first and order a drink to join the outing.",
    ],
    lesson:
      "True friends respect your budget; you do not have to buy belonging.",
  },
  {
    category: "digital-money",
    label: "Digital Money",
    title: "Understanding a Parent’s Use of Fuliza",
    intro: "Why mobile overdrafts in emergencies can quietly add up in fees.",
    situation:
      "Kamau notices his mum using Fuliza at the supermarket when her M-Pesa balance falls short by KSh 400.",
    decisions: [
      "Learn how daily Fuliza fees work and how to repay promptly.",
      "Build a small emergency buffer so overdrafts are a last resort.",
    ],
    lesson:
      "Overdrafts solve today’s shortage at tomorrow’s cost—use them only for true emergencies.",
  },
  {
    category: "hustle",
    label: "Hustle",
    title: "Starting a Small Business",
    intro:
      "Selling revision notes or baking mandazis on weekends to earn your own cash.",
    situation:
      "Wanjiku has KSh 400 saved and wants to bake and sell mandazis to neighbours on Saturday mornings.",
    decisions: [
      "Separate business capital from personal pocket money.",
      "Reinvest some profit to buy ingredients for the next week.",
    ],
    lesson:
      "Profit is what remains after you pay back your capital—never eat your seed money.",
  },
  {
    category: "safety",
    label: "Safety",
    title: "Recognising Online Financial Scams",
    intro:
      "Spotting fake WhatsApp sellers and M-Pesa reversal tricks before you lose savings.",
    situation:
      "An Instagram page offers ‘original’ sneakers for half the usual price and demands full M-Pesa payment before delivery.",
    decisions: [
      "Insist on pay-on-delivery or a verified physical shop.",
      "Never share your M-Pesa PIN or click ‘reversal’ links.",
    ],
    lesson:
      "If a deal feels rushed or too cheap to be true, pause—scammers rely on urgency.",
  },
];

const iconMarkup = {
  money:
    '<circle cx="16" cy="16" r="12"></circle><path d="M16 8v16M11 12c0-2 2-3 5-3s5 1 5 3-2 3-5 4-5 2-5 4 2 3 5 3 5-1 5-3"></path>',
  saving:
    '<path d="M7 25h18M9 25V15a7 7 0 0 1 14 0v10"></path><path d="M16 8V5m-3 2 3-1 3 1"></path><circle cx="16" cy="15" r="2"></circle>',
  budget:
    '<rect x="5" y="7" width="22" height="20" rx="2"></rect><path d="M5 13h22M13 13v14"></path>',
  borrow: '<path d="M5 11h21m-5-5 5 5-5 5M27 21H6m5-5-5 5 5 5"></path>',
  phone:
    '<rect x="10" y="4" width="12" height="24" rx="2"></rect><path d="M14 9h4m-4 13h4"></path>',
  growth:
    '<path d="M16 27V16m0 5c-6 0-9-4-9-10 6 0 9 4 9 10zm0-5c0-6 4-9 10-9 0 6-4 9-10 9z"></path>',
  clock:
    '<circle cx="16" cy="16" r="12"></circle><path d="M16 9v8l5 3"></path>',
  receipt:
    '<rect x="7" y="5" width="18" height="22" rx="2"></rect><path d="M11 11h10m-10 5h10m-10 5h6"></path>',
  lock: '<rect x="7" y="13" width="18" height="14" rx="2"></rect><path d="M11 13V9a5 5 0 0 1 10 0v4"></path><circle cx="16" cy="19" r="1.5"></circle>',
  warning:
    '<path d="M16 4 3 27h26L16 4z"></path><path d="M16 12v7m0 4h.01"></path>',
  balance:
    '<path d="M16 5v22m-9-16h18M8 11l-4 9h8l-4-9zm16 0-4 9h8l-4-9zM10 27h12"></path>',
  ledger:
    '<rect x="6" y="4" width="20" height="24" rx="2"></rect><path d="M11 10h10m-10 6h10m-10 6h7"></path>',
  time: '<circle cx="16" cy="16" r="12"></circle><path d="M16 6v10l6 4m-16-8h3m14 8h2"></path>',
  people:
    '<circle cx="12" cy="11" r="4"></circle><path d="M4 27c0-5 3-8 8-8s8 3 8 8m1-17a4 4 0 0 1 0 8m1 3c3 1 5 3 5 6"></path>',
};

function icon(name, className = "line-icon") {
  return `<svg class="${className}" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconMarkup[name] || iconMarkup.money}</svg>`;
}

function setupNavigation() {
  const nav = document.querySelector("#primary-nav");
  const menuButton = document.querySelector(".menu-toggle");
  if (!nav || !menuButton) return;
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation",
    );
  });
  nav.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  });
}

function renderModules() {
  const grid = document.querySelector("#module-grid");
  if (!grid) return;
  grid.innerHTML = modules
    .map(
      (module, index) => `
    <article class="module-card">
      <div><div class="module-top"><span class="module-number">${String(index + 1).padStart(2, "0")}</span>${icon(module.icon, "module-svg")}</div>
      <h2>${module.title}</h2><p>${module.description}</p></div>
      <div class="module-bottom"><span class="lesson-count">${module.lessons} Lessons</span><a class="module-start" href="#sample-lesson">Get Started</a></div>
    </article>`,
    )
    .join("");
}

function renderTips() {
  const grid = document.querySelector("#tips-grid");
  if (!grid) return;
  grid.innerHTML = moneyTips
    .map(
      (tip) => `
    <article class="tip-card"><div class="tip-card-top"><span class="tag">${tip.category}</span>${icon(tip.icon, "tip-svg")}</div>
      <h2>${tip.title}</h2><p>${tip.description}</p><div class="tip-card-bottom"><span>${tip.action}</span><span class="tip-arrow" aria-hidden="true">→</span></div></article>`,
    )
    .join("");
}

function renderChecklist() {
  const list = document.querySelector("#checklist-items");
  if (!list) return;
  list.innerHTML = weeklyHabits
    .map(
      (habit, index) => `
    <label class="check-row"><input type="checkbox" class="habit-checkbox" aria-label="${habit.title}" data-habit="${index}">
      <span class="check-box" aria-hidden="true"></span><span class="check-copy"><strong>${habit.title}</strong><span>${habit.detail}</span></span></label>`,
    )
    .join("");
  const counter = document.querySelector("#checklist-counter");
  const progress = document.querySelector("#checklist-progress");
  const progressBar = document.querySelector(".progress-large");
  function updateProgress() {
    const checkboxes = [...list.querySelectorAll(".habit-checkbox")];
    const completed = checkboxes.filter((checkbox) => checkbox.checked).length;
    counter.textContent = `${completed} / ${checkboxes.length}`;
    progress.style.width = `${(completed / checkboxes.length) * 100}%`;
    progressBar.setAttribute("aria-valuenow", String(completed));
  }
  list.addEventListener("change", updateProgress);
  document.querySelector("#reset-checklist").addEventListener("click", () => {
    list.querySelectorAll(".habit-checkbox").forEach((checkbox) => {
      checkbox.checked = false;
    });
    updateProgress();
  });
  updateProgress();
}

function setupLessonTabs() {
  const tabs = [...document.querySelectorAll('.lesson-tab[role="tab"]')];
  if (!tabs.length) return;
  tabs.forEach((tab, index) => {
    tab.tabIndex = tab.getAttribute("aria-selected") === "true" ? 0 : -1;
    tab.addEventListener("click", () => {
      tabs.forEach((item) => {
        const selected = item === tab;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-selected", String(selected));
        item.tabIndex = selected ? 0 : -1;
        document.querySelector(`#panel-${item.dataset.tab}`).hidden = !selected;
      });
    });
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowRight", "ArrowLeft"].includes(event.key)) return;
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      tabs[(index + direction + tabs.length) % tabs.length].focus();
    });
  });
}

function setupLessonQuiz() {
  document.querySelectorAll("[data-quiz]").forEach((quiz) => {
    const feedback = quiz.parentElement.querySelector(".quiz-feedback");
    quiz.addEventListener("click", (event) => {
      const answer = event.target.closest(".answer-option");
      if (!answer) return;
      quiz
        .querySelectorAll(".answer-option")
        .forEach((option) => option.classList.remove("is-correct", "is-wrong"));
      const correct = answer.dataset.correct === "true";
      answer.classList.add(correct ? "is-correct" : "is-wrong");
      feedback.textContent = correct
        ? "That’s right. Confirm the name and total, and keep your PIN private."
        : "Not quite. Check the payment details carefully, and never share your PIN.";
    });
  });
}

function renderStories() {
  const grid = document.querySelector("#stories-grid");
  if (!grid) return;
  grid.innerHTML = stories
    .map(
      (story, index) => `
    <article class="story-card" data-category="${story.category}"><div class="story-card-main"><div class="story-card-top"><span class="tag">${story.label}</span><span class="story-number">${String(index + 1).padStart(2, "0")}</span></div>
      <h2>${story.title}</h2><p class="story-intro">${story.intro}</p><div class="story-situation"><span class="eyebrow">The Situation</span><p>${story.situation}</p></div>
      <div class="story-decisions"><span class="small-label">Possible Decisions</span><ul>${story.decisions.map((decision) => `<li><span aria-hidden="true">→</span>${decision}</li>`).join("")}</ul></div></div>
      <div class="story-lesson"><span class="eyebrow">Key Lesson</span><p>${story.lesson}</p></div></article>`,
    )
    .join("");
  const filters = document.querySelector("#story-filters");
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    filters.querySelectorAll("[data-filter]").forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    let visible = 0;
    grid.querySelectorAll(".story-card").forEach((card) => {
      const show =
        button.dataset.filter === "all" ||
        card.dataset.category === button.dataset.filter;
      card.hidden = !show;
      if (show) visible += 1;
    });
    document.querySelector("#story-count").textContent =
      `Showing ${visible} ${visible === 1 ? "story" : "stories"}`;
  });
}

const scenarioOutcomes = {
  A: {
    title: "Outcome: Your goal slips backward",
    text: "Your phone fund drops to KSh 8,700. If your friend forgets or delays paying back, your four-month timeline stretches out.",
    takeaway:
      "Never lend money from a dedicated savings goal. Only lend what you can afford to lose without derailing your own plans.",
  },
  B: {
    title: "Outcome: Boundaries with kindness",
    text: "Your friend understands you are working toward a specific target. Offering a small amount from spending money—or simply saying no—protects your savings and keeps the friendship honest.",
    takeaway:
      "Setting clear financial boundaries is a sign of maturity. Real friends respect a locked goal.",
  },
  C: {
    title: "Outcome: Unnecessary tension",
    text: "Ghosting a friend creates confusion at school on Monday, even though your reason for not lending was completely valid.",
    takeaway:
      "A calm, direct ‘I’m saving for a goal right now so I can’t lend’ is better than silence.",
  },
};

function setupScenario(
  buttonSelector,
  outcomeId,
  titleId,
  textId,
  takeawayId,
  attributeName,
) {
  const buttons = document.querySelectorAll(buttonSelector);
  const outcome = document.querySelector(outcomeId);
  if (!buttons.length || !outcome) return;
  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      buttons.forEach((item) =>
        item.classList.toggle("is-selected", item === button),
      );
      const result = scenarioOutcomes[button.getAttribute(attributeName)];
      document.querySelector(titleId).textContent = result.title;
      document.querySelector(textId).textContent = result.text;
      document.querySelector(takeawayId).textContent = result.takeaway;
      outcome.hidden = false;
    }),
  );
}

function setupPlayPage() {
  const quizContainer = document.querySelector("#quiz-container");
  if (!quizContainer) return;
  const completed = new Set();
  const quizData = [
    {
      question:
        "You want to withdraw KSh 1,000 from an M-Pesa agent. Roughly how much should you expect to pay in withdrawal fees?",
      options: ["KSh 0 (It’s free)", "Around KSh 29", "Around KSh 150"],
      correct: 1,
      explanation:
        "Withdrawing KSh 501–1,000 at an M-Pesa agent costs around KSh 29. Knowing tariff bands helps you plan ahead.",
    },
    {
      question:
        "Which of these is a need rather than a want during school term?",
      options: [
        "Matatu fare to school",
        "A new pair of trendy sneakers",
        "Extra gaming data bundles",
      ],
      correct: 0,
      explanation:
        "Transport to school is essential. Sneakers and extra data are wants—great to save for, but secondary to needs.",
    },
    {
      question:
        "If you save KSh 1,000 in an account earning 8% interest per year, what happens?",
      options: [
        "You lose KSh 80 to fees",
        "Your money grows by about KSh 80 in a year",
        "The balance stays exactly KSh 1,000",
      ],
      correct: 1,
      explanation:
        "Interest is money paid to you for saving. At 8% a year, KSh 1,000 earns roughly KSh 80.",
    },
  ];
  let currentQuestion = 0;
  let score = 0;
  let answered = false;
  const questionNumber = document.querySelector("#quiz-q-number");
  const questionText = document.querySelector("#quiz-question");
  const options = document.querySelector("#quiz-options");
  const feedback = document.querySelector("#quiz-feedback");
  const nextButton = document.querySelector("#quiz-next-btn");
  const restartButton = document.querySelector("#quiz-restart-btn");
  const scorePill = document.querySelector("#quiz-score-pill");

  function updateGlobalProgress() {
    const count = completed.size;
    const percent = Math.round((count / 4) * 100);
    document.querySelector("#global-progress-text").textContent =
      `${count}/4 Challenges Completed`;
    document.querySelector("#global-progress-pct").textContent = `${percent}%`;
    document.querySelector("#global-progress-bar").style.width = `${percent}%`;
    document.querySelector("#global-progress-badge").textContent =
      count === 4
        ? "Level 2: Money Master"
        : count >= 2
          ? "Level 1: Rising Saver"
          : "Level 1: Smart Spender";
  }
  function completeModule(name) {
    completed.add(name);
    updateGlobalProgress();
  }
  function renderQuestion() {
    const item = quizData[currentQuestion];
    answered = false;
    questionNumber.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    questionText.textContent = item.question;
    feedback.hidden = true;
    nextButton.hidden = true;
    restartButton.hidden = true;
    document
      .querySelectorAll("#quiz-dots span")
      .forEach((dot, index) =>
        dot.classList.toggle("is-current", index <= currentQuestion),
      );
    options.replaceChildren(
      ...item.options.map((text, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-option";
        button.textContent = text;
        button.addEventListener("click", () => {
          if (answered) return;
          answered = true;
          const correct = index === item.correct;
          if (correct) score += 1;
          scorePill.textContent = `Score: ${score} / ${quizData.length}`;
          button.classList.add(correct ? "is-correct" : "is-wrong");
          document
            .querySelectorAll("#quiz-options button")
            .forEach((option, optionIndex) => {
              if (optionIndex === item.correct && !correct)
                option.classList.add("is-correct");
            });
          document.querySelector("#quiz-feedback-title").textContent = correct
            ? "Spot on!"
            : "Not quite";
          document.querySelector("#quiz-feedback-text").textContent =
            item.explanation;
          feedback.className = `challenge-feedback ${correct ? "success" : "error"}`;
          feedback.hidden = false;
          if (currentQuestion < quizData.length - 1) nextButton.hidden = false;
          else {
            restartButton.hidden = false;
            completeModule("quiz");
          }
        });
        return button;
      }),
    );
  }
  nextButton.addEventListener("click", () => {
    currentQuestion += 1;
    renderQuestion();
  });
  restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    scorePill.textContent = `Score: 0 / ${quizData.length}`;
    renderQuestion();
  });
  renderQuestion();

  const budgetInputs = ["transport", "snacks", "savings", "fun"].map((name) => [
    name,
    document.querySelector(`#slider-${name}`),
  ]);
  const totalBudget = 1500;
  function updateBudget() {
    const allocations = Object.fromEntries(
      budgetInputs.map(([name, input]) => [name, Number(input.value)]),
    );
    const total = Object.values(allocations).reduce(
      (sum, amount) => sum + amount,
      0,
    );
    const remaining = totalBudget - total;
    document.querySelector("#budget-remaining").textContent =
      `KSh ${remaining.toLocaleString("en-KE")}`;
    document
      .querySelector("#budget-remaining")
      .classList.toggle("over-budget", remaining < 0);
    budgetInputs.forEach(([name]) => {
      document.querySelector(`#val-${name}`).textContent =
        `KSh ${allocations[name].toLocaleString("en-KE")}`;
    });
    const denominator = Math.max(totalBudget, total);
    budgetInputs.forEach(([name]) => {
      document.querySelector(`#bar-${name}`).style.width =
        `${(allocations[name] / denominator) * 100}%`;
    });
    return allocations;
  }
  budgetInputs.forEach(([, input]) =>
    input.addEventListener("input", updateBudget),
  );
  document.querySelector("#budget-lock-btn").addEventListener("click", () => {
    const allocations = updateBudget();
    const total = Object.values(allocations).reduce(
      (sum, amount) => sum + amount,
      0,
    );
    const feedbackBox = document.querySelector("#budget-feedback");
    feedbackBox.hidden = false;
    if (total > totalBudget) {
      feedbackBox.className = "challenge-feedback error";
      feedbackBox.textContent = `You’re over budget by KSh ${(total - totalBudget).toLocaleString("en-KE")}. Trim snacks or fun to balance your KSh 1,500.`;
    } else if (allocations.savings < 200) {
      feedbackBox.className = "challenge-feedback warm";
      feedbackBox.textContent =
        "Budget balanced. Try setting aside at least KSh 200 for savings to build your emergency cushion.";
    } else {
      feedbackBox.className = "challenge-feedback success";
      feedbackBox.textContent = `Great balance! You covered your essentials and saved KSh ${allocations.savings.toLocaleString("en-KE")} for the future.`;
      completeModule("budget");
    }
  });
  updateBudget();

  const myths = [
    {
      statement: "‘Fuliza is basically free emergency money.’",
      fact: "Fact: Fuliza has an access fee and daily maintenance fees. Understand the total cost before borrowing.",
    },
    {
      statement: "‘You need at least KSh 5,000 to start saving.’",
      fact: "Fact: Consistency beats size. Saving KSh 50 a week builds the habit—and adds up to KSh 2,600 in a year before interest.",
    },
    {
      statement: "‘If it’s on a WhatsApp forward, the promo is legit.’",
      fact: "Fact: Scammers copy familiar logos. Real promotions never ask for your M-Pesa PIN or a processing fee to claim a prize.",
    },
  ];
  const revealed = new Set();
  document.querySelector("#myths-grid").innerHTML = myths
    .map(
      (myth, index) =>
        `<button class="myth-card" type="button" data-myth="${index}" aria-expanded="false"><span class="myth-badge">Myth</span><strong>${myth.statement}</strong><span class="myth-fact" hidden>${myth.fact}</span><span class="myth-action">Tap to reveal fact →</span></button>`,
    )
    .join("");
  document.querySelector("#myths-grid").addEventListener("click", (event) => {
    const card = event.target.closest("[data-myth]");
    if (!card) return;
    const fact = card.querySelector(".myth-fact");
    const showing = card.getAttribute("aria-expanded") === "true";
    fact.hidden = showing;
    card.setAttribute("aria-expanded", String(!showing));
    card.querySelector(".myth-badge").textContent = showing ? "Myth" : "Fact";
    card.querySelector(".myth-action").textContent = showing
      ? "Tap to reveal fact →"
      : "Tap to hide fact ↑";
    if (showing) revealed.delete(card.dataset.myth);
    else revealed.add(card.dataset.myth);
    document.querySelector("#myths-counter").textContent =
      `${revealed.size} / 3 Revealed`;
    if (revealed.size === 3) completeModule("myths");
  });

  const scamScenarios = [
    {
      sender: "SMS · +254 712 889 014",
      message:
        "‘CONGRATULATIONS! You have won KSh 15,000 in the Safaricom Youth Draw. Send KSh 150 for verification to receive your prize.’",
      answer: "scam",
      explanation:
        "Scam! Real promotions never ask you to send money to claim a prize. Check official channels rather than replying to a personal number.",
    },
    {
      sender: "SMS · MPESA",
      message:
        "‘SK49H2L9P1 Confirmed. You have received KSh 500.00 from MARY WANJIKU. New M-Pesa balance is KSh 1,240.00.’",
      answer: "legit",
      explanation:
        "This resembles a standard transaction confirmation, but always check your own M-Pesa messages and balance before acting.",
    },
    {
      sender: "WhatsApp · Unknown Number",
      message:
        "‘Hi, I accidentally sent KSh 2,000 to your M-Pesa. Please reverse it to 0799441122 urgently, my mum is in hospital.’",
      answer: "scam",
      explanation:
        "Scam! Check your actual balance first and never send money to a number in a message. Contact the provider through official channels.",
    },
  ];
  const checkedScams = new Set();
  document.querySelector("#scam-list").innerHTML = scamScenarios
    .map(
      (scenario, index) =>
        `<article class="scam-card" data-scam="${index}"><div class="scam-card-top"><span class="eyebrow">${scenario.sender}</span><span class="scam-status" hidden></span></div><p class="scam-message">${scenario.message}</p><div class="scam-buttons"><button type="button" data-answer="legit">Legit</button><button type="button" data-answer="scam">Scam</button></div><p class="scam-explanation" hidden></p></article>`,
    )
    .join("");
  document.querySelector("#scam-list").addEventListener("click", (event) => {
    const choice = event.target.closest("[data-answer]");
    if (!choice) return;
    const card = choice.closest("[data-scam]");
    const scenario = scamScenarios[Number(card.dataset.scam)];
    const correct = choice.dataset.answer === scenario.answer;
    const status = card.querySelector(".scam-status");
    status.hidden = false;
    status.className = `scam-status ${correct ? "success" : "error"}`;
    status.textContent = correct ? "Correct" : "Watch out";
    const explanation = card.querySelector(".scam-explanation");
    explanation.hidden = false;
    explanation.className = `scam-explanation ${correct ? "success" : "error"}`;
    explanation.textContent = scenario.explanation;
    card
      .querySelectorAll("[data-answer]")
      .forEach((button) =>
        button.classList.toggle("is-selected", button === choice),
      );
    checkedScams.add(card.dataset.scam);
    document.querySelector("#scam-counter").textContent =
      `${checkedScams.size} / 3`;
    if (checkedScams.size === 3) completeModule("scam");
  });
  updateGlobalProgress();
  setupScenario(
    ".scenario-choice",
    "#scenario-outcome",
    "#outcome-title",
    "#outcome-text",
    "#outcome-takeaway",
    "data-choice",
  );
}

function setupStoryScenario() {
  setupScenario(
    ".story-choice",
    "#story-outcome",
    "#story-outcome-title",
    "#story-outcome-text",
    "#story-outcome-takeaway",
    "data-story-choice",
  );
}

setupNavigation();
renderModules();
renderTips();
renderChecklist();
setupLessonTabs();
setupLessonQuiz();
renderStories();
setupPlayPage();
setupStoryScenario();
