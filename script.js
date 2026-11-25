// Lesson cards and money habits are kept in simple arrays so they are easy to edit.
const modules = [
  {
    title: "Understanding Money",
    description:
      "What is money? Needs vs. wants, income, and everyday expenses.",
    lessons: 4,
    icon: "K",
  },
  {
    title: "Saving, Goals & Investing",
    description:
      "Why saving matters, short-term vs. long-term goals, safe places to keep money, M-Shwari, MMFs, and junior compound growth.",
    lessons: 4,
    icon: "S",
  },
  {
    title: "Budgeting",
    description:
      "Planning pocket money, balancing spending and saving, avoiding impulse buys.",
    lessons: 4,
    icon: "B",
  },
  {
    title: "Borrowing and Debt",
    description:
      "What is borrowing, interest, Fuliza basics, and why repayment matters.",
    lessons: 4,
    icon: "↔",
  },
  {
    title: "Digital Money and M-Pesa",
    description:
      "How mobile money works, Till vs. Paybill, transaction fees, and staying safe.",
    lessons: 5,
    icon: "M",
  },
  {
    title: "Entrepreneurship",
    description:
      "Earning as a teen, turning skills into micro-income, pricing and profit.",
    lessons: 3,
    icon: "E",
  },
];

const moneyTips = [
  {
    category: "01 · Spending",
    title: "Think before spending",
    description:
      "Use the 24-hour rule before buying something you saw online. Waiting one day helps you tell if you truly want it or if it was just a passing urge.",
    action: "24-Hour Pause",
    icon: "1",
  },
  {
    category: "02 · Saving",
    title: "Save something from your pocket money",
    description:
      "Even KSh 50 a week builds a habit. Put your savings aside first—into a locked savings jar or M-Pesa lock savings—before you start spending the rest.",
    action: "Start with KSh 50",
    icon: "2",
  },
  {
    category: "03 · Borrowing",
    title: "Understand borrowing before accepting a loan",
    description:
      "Know the fees, interest, and repayment date before you borrow. A quick mobile loan can cost much more than you expect if you miss the deadline.",
    action: "Read the terms",
    icon: "3",
  },
  {
    category: "04 · Security",
    title: "Protect your M-Pesa PIN",
    description:
      "Never share your PIN or ID details, even with friends. Keep your phone locked and always double-check the recipient name before confirming any transfer.",
    action: "Keep it private",
    icon: "4",
  },
  {
    category: "05 · Safety",
    title: "Learn to recognise online scams",
    description:
      "If a deal on Instagram or WhatsApp looks too good, pause. Never pay a “registration fee” to claim a prize or get a quick online job.",
    action: "Verify first",
    icon: "5",
  },
  {
    category: "06 · Budgeting",
    title: "Understand the difference between needs and wants",
    description:
      "Separate school essentials from impulse treats. Cover your transport, stationery, and lunch first before spending on snacks or data bundles.",
    action: "Prioritise essentials",
    icon: "6",
  },
  {
    category: "07 · Tracking",
    title: "Track everyday micro-spends",
    description:
      "Small daily expenses like snacks, airtime, or boda-boda rides add up swiftly. Review your M-Pesa statements weekly or note small cash buys in a pocket notebook.",
    action: "Log micro-spends",
    icon: "7",
  },
  {
    category: "08 · Mindfulness",
    title: "Set a 72-hour cooling period for peer hype",
    description:
      "When a viral gadget or fashion trend sparks sudden excitement among friends, step back for 3 full days. Rational thinking returns once social pressure settles.",
    action: "Cooling period",
    icon: "8",
  },
  {
    category: "09 · Social life",
    title: "Budget for social outings and group gifts",
    description:
      "Birthdays, hangouts, and school group fundraisers happen regularly. Set aside a tiny fixed social pool each month so you never dip into your savings or emergency funds.",
    action: "Plan group costs",
    icon: "9",
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

const moduleGrid = document.querySelector("#module-grid");
const tipsGrid = document.querySelector("#tips-grid");
const checklistItems = document.querySelector("#checklist-items");

function renderModules() {
  moduleGrid.innerHTML = modules
    .map(
      (module, index) => `
    <article class="module-card">
      <div>
        <div class="module-top"><span class="module-number">${String(index + 1).padStart(2, "0")}</span><span class="module-icon" aria-hidden="true">${module.icon}</span></div>
        <h2>${module.title}</h2><p>${module.description}</p>
      </div>
      <div class="module-bottom"><span class="lesson-count">${module.lessons} Lessons</span><button class="module-start" type="button" data-module="${index}">Get Started</button></div>
    </article>`,
    )
    .join("");
}

function renderTips() {
  tipsGrid.innerHTML = moneyTips
    .map(
      (tip) => `
    <article class="tip-card">
      <div class="tip-card-top"><span class="tag">${tip.category}</span><span class="module-icon" aria-hidden="true">${tip.icon}</span></div>
      <h2>${tip.title}</h2><p>${tip.description}</p>
      <div class="tip-card-bottom"><span>${tip.action}</span><span class="tip-arrow" aria-hidden="true">→</span></div>
    </article>`,
    )
    .join("");
}

function renderChecklist() {
  checklistItems.innerHTML = weeklyHabits
    .map(
      (habit, index) => `
    <label class="check-row">
      <input type="checkbox" class="habit-checkbox" aria-label="${habit.title}" data-habit="${index}">
      <span class="check-box" aria-hidden="true"></span>
      <span class="check-copy"><strong>${habit.title}</strong><span>${habit.detail}</span></span>
    </label>`,
    )
    .join("");
}

function updateChecklist() {
  const checkboxes = [...document.querySelectorAll(".habit-checkbox")];
  const completed = checkboxes.filter((checkbox) => checkbox.checked).length;
  const counter = document.querySelector("#checklist-counter");
  const progress = document.querySelector("#checklist-progress");
  const progressBar = document.querySelector(".progress-large");
  counter.textContent = `${completed} / ${checkboxes.length}`;
  progress.style.width = `${(completed / checkboxes.length) * 100}%`;
  progressBar.setAttribute("aria-valuenow", String(completed));
}

function setupLessonTabs() {
  const tabs = [...document.querySelectorAll(".lesson-tab")];
  tabs.forEach((tab, index) => {
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

function setupQuiz() {
  document.querySelectorAll("[data-quiz]").forEach((quiz) => {
    const feedback = quiz.parentElement.querySelector(".quiz-feedback");
    quiz.addEventListener("click", (event) => {
      const answer = event.target.closest(".answer-option");
      if (!answer) return;
      quiz
        .querySelectorAll(".answer-option")
        .forEach((option) => option.classList.remove("is-correct", "is-wrong"));
      const isCorrect = answer.dataset.correct === "true";
      answer.classList.add(isCorrect ? "is-correct" : "is-wrong");
      feedback.textContent = isCorrect
        ? "That’s right. Confirm the name and total, and keep your PIN private."
        : "Not quite. Check the payment details carefully, and never share your PIN.";
    });
  });
}

function setupNavigation() {
  const nav = document.querySelector("#primary-nav");
  const menuButton = document.querySelector(".menu-toggle");
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
  const observedSections = document.querySelectorAll("main section[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll("[data-nav]").forEach((link) => {
          if (link.dataset.nav === entry.target.id)
            link.setAttribute("aria-current", "page");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-25% 0px -65% 0px" },
  );
  observedSections.forEach((section) => observer.observe(section));
}

renderModules();
renderTips();
renderChecklist();
setupLessonTabs();
setupQuiz();
setupNavigation();
updateChecklist();

moduleGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-module]");
  if (!button) return;
  document
    .querySelector("#sample-lesson")
    .scrollIntoView({ behavior: "smooth", block: "start" });
});

checklistItems.addEventListener("change", updateChecklist);
document.querySelector("#reset-checklist").addEventListener("click", () => {
  document.querySelectorAll(".habit-checkbox").forEach((checkbox) => {
    checkbox.checked = false;
  });
  updateChecklist();
});
