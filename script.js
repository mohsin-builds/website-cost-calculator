const questions = [
    {
        id: "businessType",
        title: "What type of business is this for?",
        subtitle: "Choose the option that best describes your business.",
        type: "single",
        options: [
            {
                value: "local-business",
                label: "Local Business",
                desc: "Services, shops, companies",
                icon: "store",
                min: 0,
                max: 0
            },
            {
                value: "restaurant",
                label: "Restaurant",
                desc: "Restaurant, café, food business",
                icon: "utensils",
                min: 100,
                max: 250
            },
            {
                value: "tourism",
                label: "Tourism",
                desc: "Hotels, villas, tours",
                icon: "plane",
                min: 150,
                max: 350
            },
            {
                value: "ecommerce",
                label: "E-commerce",
                desc: "Online store or product brand",
                icon: "shopping-cart",
                min: 450,
                max: 900
            },
            {
                value: "professional",
                label: "Professional Service",
                desc: "Consultant, agency, freelancer",
                icon: "briefcase-business",
                min: 0,
                max: 150
            },
            {
                value: "other",
                label: "Other",
                desc: "Something different",
                icon: "ellipsis",
                min: 100,
                max: 300
            }
        ]
    },

    {
        id: "websiteType",
        title: "What kind of website do you need?",
        subtitle: "Choose the closest match. We’ll use it as the base for your estimate.",
        type: "single",
        options: [
            {
                value: "landing",
                label: "Landing Page",
                desc: "One focused page for leads or campaigns",
                icon: "panel-top",
                min: 650,
                max: 1100
            },
            {
                value: "brochure",
                label: "Brochure Website",
                desc: "A clean website for your company",
                icon: "building-2",
                min: 1100,
                max: 1900
            },
            {
                value: "business",
                label: "Business Website",
                desc: "A stronger multi-page business presence",
                icon: "monitor",
                min: 1600,
                max: 2900
            },
            {
                value: "store",
                label: "Online Store",
                desc: "Products, cart, checkout and payments",
                icon: "shopping-bag",
                min: 2600,
                max: 4800
            },
            {
                value: "booking",
                label: "Booking Website",
                desc: "Appointments, reservations or availability",
                icon: "calendar-days",
                min: 2200,
                max: 3900
            },
            {
                value: "custom",
                label: "Custom Web Platform",
                desc: "Advanced workflows or custom functionality",
                icon: "code-2",
                min: 3800,
                max: 7200
            }
        ]
    },

    {
        id: "pages",
        title: "How many pages do you expect?",
        subtitle: "A rough number is enough. You can always change the scope later.",
        type: "single",
        options: [
            {
                value: "1",
                label: "1 Page",
                desc: "A focused landing page",
                icon: "file",
                min: 0,
                max: 0
            },
            {
                value: "2-5",
                label: "2–5 Pages",
                desc: "A small company website",
                icon: "files",
                min: 300,
                max: 650
            },
            {
                value: "6-10",
                label: "6–10 Pages",
                desc: "A growing business website",
                icon: "layout-grid",
                min: 700,
                max: 1400
            },
            {
                value: "11-20",
                label: "11–20 Pages",
                desc: "More services, content or locations",
                icon: "layers",
                min: 1400,
                max: 2600
            },
            {
                value: "20+",
                label: "20+ Pages",
                desc: "Large content or complex structure",
                icon: "library",
                min: 2500,
                max: 5000
            }
        ]
    },

    {
        id: "features",
        title: "Which extra features do you need?",
        subtitle: "Select all that apply — or continue if you don’t need any extras.",
        type: "multi",
        optional: true,
        options: [
            {
                value: "forms",
                label: "Advanced Forms",
                desc: "Quotes, enquiries or applications",
                icon: "mail",
                min: 150,
                max: 350
            },
            {
                value: "booking",
                label: "Booking System",
                desc: "Appointments or reservations",
                icon: "calendar-check",
                min: 450,
                max: 900
            },
            {
                value: "payments",
                label: "Online Payments",
                desc: "Accept secure online payments",
                icon: "credit-card",
                min: 500,
                max: 1000
            },
            {
                value: "multilingual",
                label: "Multilingual",
                desc: "Two or more languages",
                icon: "languages",
                min: 350,
                max: 750
            },
            {
                value: "blog",
                label: "Blog / News",
                desc: "Publish articles and updates",
                icon: "book-open",
                min: 200,
                max: 450
            },
            {
                value: "members",
                label: "Member Area",
                desc: "Accounts, login or private content",
                icon: "users",
                min: 850,
                max: 1700
            }
        ]
    },

    {
        id: "designLevel",
        title: "What design level are you aiming for?",
        subtitle: "This affects the amount of custom art direction, UI work and polish.",
        type: "single",
        options: [
            {
                value: "simple",
                label: "Simple & Clean",
                desc: "Professional, efficient and minimal",
                icon: "layout-template",
                min: 0,
                max: 250
            },
            {
                value: "premium",
                label: "Premium",
                desc: "More custom UI and stronger visual polish",
                icon: "sparkles",
                min: 550,
                max: 1200
            },
            {
                value: "custom",
                label: "Fully Custom",
                desc: "High-end art direction and unique interactions",
                icon: "pen-tool",
                min: 1200,
                max: 2600
            }
        ]
    },

    {
        id: "content",
        title: "Is your website content ready?",
        subtitle: "Tell us how much writing and content preparation you’ll need.",
        type: "single",
        options: [
            {
                value: "ready",
                label: "Everything Ready",
                desc: "Text and images are prepared",
                icon: "circle-check",
                min: 0,
                max: 0
            },
            {
                value: "partial",
                label: "Partially Ready",
                desc: "Some content still needs work",
                icon: "file-pen-line",
                min: 250,
                max: 700
            },
            {
                value: "need-copy",
                label: "I Need Copywriting",
                desc: "Help with page copy and structure",
                icon: "pen-line",
                min: 600,
                max: 1400
            }
        ]
    },

    {
        id: "seo",
        title: "How much SEO setup do you need?",
        subtitle: "Choose the level of search visibility support you want at launch.",
        type: "single",
        options: [
            {
                value: "basic",
                label: "Basic Setup",
                desc: "Titles, metadata and technical essentials",
                icon: "search",
                min: 0,
                max: 200
            },
            {
                value: "local",
                label: "Local SEO",
                desc: "Built for local discovery and service areas",
                icon: "map-pin",
                min: 350,
                max: 750
            },
            {
                value: "growth",
                label: "Growth SEO",
                desc: "Keyword structure and stronger on-page SEO",
                icon: "chart-no-axes-column-increasing",
                min: 750,
                max: 1500
            }
        ]
    },

    {
        id: "timeline",
        title: "When would you like to launch?",
        subtitle: "Faster schedules can require priority production time.",
        type: "single",
        options: [
            {
                value: "flexible",
                label: "I’m Flexible",
                desc: "Quality first, no hard deadline",
                icon: "calendar",
                min: 0,
                max: 0
            },
            {
                value: "4-6",
                label: "4–6 Weeks",
                desc: "A comfortable standard timeline",
                icon: "clock",
                min: 0,
                max: 0
            },
            {
                value: "2-3",
                label: "2–3 Weeks",
                desc: "A faster priority schedule",
                icon: "timer",
                min: 300,
                max: 700
            },
            {
                value: "asap",
                label: "As Soon As Possible",
                desc: "Rush production where feasible",
                icon: "zap",
                min: 700,
                max: 1500
            }
        ]
    }
];


const state = {
    currentStep: 0,
    answers: {}
};


const stepText = document.getElementById("stepText");
const progressPercent = document.getElementById("progressPercent");
const progressBar = document.getElementById("progressBar");
const questionTitle = document.getElementById("questionTitle");
const questionSubtitle = document.getElementById("questionSubtitle");
const optionsGrid = document.getElementById("optionsGrid");
const continueBtn = document.getElementById("continueBtn");
const privacyNote = document.querySelector(".privacy-note");


/* =========================================================
   ACTION BUTTONS
   ========================================================= */

const actions = document.createElement("div");
actions.className = "calculator-actions";

const backBtn = document.createElement("button");
backBtn.type = "button";
backBtn.className = "back-btn";
backBtn.innerHTML = "<span>←</span> Back";

continueBtn.parentNode.insertBefore(actions, continueBtn);

actions.append(backBtn, continueBtn);


/* =========================================================
   ICONS
   ========================================================= */

function refreshIcons() {
    if (window.lucide) {
        window.lucide.createIcons();
    }
}


/* =========================================================
   OPTION HTML
   ========================================================= */

function optionMarkup(option) {
    return `
        <button
            class="option-card"
            type="button"
            data-value="${option.value}"
        >
            <i data-lucide="${option.icon}"></i>

            <strong>${option.label}</strong>

            <span>${option.desc}</span>
        </button>
    `;
}


/* =========================================================
   RENDER CURRENT STEP
   ========================================================= */

function renderStep() {

    const question = questions[state.currentStep];

    const stepNumber = state.currentStep + 1;

    const percent = Math.round(
        (stepNumber / questions.length) * 100
    );


    stepText.textContent =
        `STEP ${String(stepNumber).padStart(2, "0")} OF ${String(questions.length).padStart(2, "0")}`;

    progressPercent.textContent = `${percent}%`;

    progressBar.style.width = `${percent}%`;


    questionTitle.textContent = question.title;

    questionSubtitle.textContent = question.subtitle;


    optionsGrid.innerHTML =
        question.options
            .map(optionMarkup)
            .join("");


    optionsGrid.classList.toggle(
        "multi-select",
        question.type === "multi"
    );


    backBtn.hidden = state.currentStep === 0;


    continueBtn.innerHTML =
        state.currentStep === questions.length - 1
            ? "See my estimate <span>→</span>"
            : "Continue <span>→</span>";


    restoreSelection(question);

    updateContinueState(question);

    bindOptionEvents(question);

    refreshIcons();
}


/* =========================================================
   RESTORE PREVIOUS ANSWER
   ========================================================= */

function restoreSelection(question) {

    const saved = state.answers[question.id];


    optionsGrid
        .querySelectorAll(".option-card")
        .forEach(card => {

            const value = card.dataset.value;


            if (question.type === "multi") {

                const values =
                    Array.isArray(saved)
                        ? saved
                        : [];


                card.classList.toggle(
                    "selected",
                    values.includes(value)
                );

            } else {

                card.classList.toggle(
                    "selected",
                    saved === value
                );

            }

        });
}


/* =========================================================
   CONTINUE BUTTON STATE
   ========================================================= */

function updateContinueState(question) {

    if (
        question.type === "multi" &&
        question.optional
    ) {

        continueBtn.disabled = false;

        return;
    }


    const answer = state.answers[question.id];


    continueBtn.disabled =
        question.type === "multi"
            ? !Array.isArray(answer) ||
              answer.length === 0
            : !answer;
}


/* =========================================================
   OPTION SELECTION
   ========================================================= */

function bindOptionEvents(question) {

    optionsGrid
        .querySelectorAll(".option-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    const value =
                        card.dataset.value;


                    /* MULTIPLE SELECT */

                    if (question.type === "multi") {

                        const current =
                            Array.isArray(
                                state.answers[question.id]
                            )
                                ? [
                                    ...state.answers[
                                        question.id
                                    ]
                                  ]
                                : [];


                        const index =
                            current.indexOf(value);


                        if (index >= 0) {

                            current.splice(
                                index,
                                1
                            );

                            card.classList.remove(
                                "selected"
                            );

                        } else {

                            current.push(value);

                            card.classList.add(
                                "selected"
                            );

                        }


                        state.answers[
                            question.id
                        ] = current;

                    }


                    /* SINGLE SELECT */

                    else {

                        state.answers[
                            question.id
                        ] = value;


                        optionsGrid
                            .querySelectorAll(
                                ".option-card"
                            )
                            .forEach(item => {

                                item.classList.toggle(
                                    "selected",
                                    item === card
                                );

                            });
                    }


                    updateContinueState(
                        question
                    );
                }
            );

        });
}


/* =========================================================
   FIND OPTION
   ========================================================= */

function findOption(questionId, value) {

    const question =
        questions.find(
            item => item.id === questionId
        );


    return question?.options.find(
        option => option.value === value
    );
}


/* =========================================================
   PRICE CALCULATION
   ========================================================= */

function calculateEstimate() {

    let min = 0;
    let max = 0;


    questions.forEach(question => {

        const answer =
            state.answers[question.id];


        if (question.type === "multi") {

            const values =
                Array.isArray(answer)
                    ? answer
                    : [];


            values.forEach(value => {

                const option =
                    findOption(
                        question.id,
                        value
                    );


                if (option) {

                    min += option.min || 0;
                    max += option.max || 0;

                }

            });

        } else if (answer) {

            const option =
                findOption(
                    question.id,
                    answer
                );


            if (option) {

                min += option.min || 0;
                max += option.max || 0;

            }

        }

    });


    return {
        min,
        max
    };
}


/* =========================================================
   TIMELINE CALCULATION
   ========================================================= */

function calculateTimeline() {

    let weeks = 2;


    const typeWeights = {

        landing: 0,
        brochure: 1,
        business: 2,
        store: 3,
        booking: 3,
        custom: 5

    };


    const pageWeights = {

        "1": 0,
        "2-5": 1,
        "6-10": 2,
        "11-20": 4,
        "20+": 6

    };


    weeks +=
        typeWeights[
            state.answers.websiteType
        ] || 0;


    weeks +=
        pageWeights[
            state.answers.pages
        ] || 0;


    const features =
        Array.isArray(
            state.answers.features
        )
            ? state.answers.features.length
            : 0;


    weeks += Math.ceil(
        features / 2
    );


    if (
        state.answers.designLevel ===
        "premium"
    ) {

        weeks += 1;

    }


    if (
        state.answers.designLevel ===
        "custom"
    ) {

        weeks += 2;

    }


    if (
        state.answers.content ===
        "need-copy"
    ) {

        weeks += 1;

    }


    const minWeeks =
        Math.max(
            2,
            weeks - 1
        );


    const maxWeeks =
        Math.max(
            minWeeks + 1,
            weeks + 1
        );


    return `${minWeeks}–${maxWeeks} weeks`;
}


/* =========================================================
   EUR FORMAT
   ========================================================= */

function formatEUR(value) {

    return new Intl.NumberFormat(
        "en-IE",
        {
            style: "currency",
            currency: "EUR",
            maximumFractionDigits: 0
        }
    ).format(value);
}


/* =========================================================
   RESULT SCREEN
   ========================================================= */

function getOptionLabel(questionId, value) {

    const option = findOption(
        questionId,
        value
    );

    return option
        ? option.label
        : "";
}


function getScopeSummary() {

    const features =
        Array.isArray(state.answers.features)
            ? state.answers.features.length
            : 0;


    return [
        {
            label: "Website",
            value: getOptionLabel(
                "websiteType",
                state.answers.websiteType
            )
        },
        {
            label: "Pages",
            value: getOptionLabel(
                "pages",
                state.answers.pages
            )
        },
        {
            label: "Design",
            value: getOptionLabel(
                "designLevel",
                state.answers.designLevel
            )
        },
        {
            label: "Features",
            value:
                features > 0
                    ? `${features} selected`
                    : "No extras"
        }
    ];
}

/* =========================================================
   SHOW RESULT
   ========================================================= */

function showResult() {

    const {
        min,
        max
    } = calculateEstimate();

    const timeline =
        calculateTimeline();

    const scope =
        getScopeSummary();

    const scopeHTML =
        scope
            .map(item => `
                <div class="scope-item">
                    <span>${item.label}</span>
                    <strong>${item.value}</strong>
                </div>
            `)
            .join("");


    stepText.textContent =
        "YOUR ESTIMATE";

    progressPercent.textContent =
        "100%";

    progressBar.style.width =
        "100%";


    questionTitle.textContent =
        "Your website estimate is ready.";

    questionSubtitle.textContent =
        "Here’s a realistic professional planning range based on the scope you selected.";


    optionsGrid.classList.remove(
        "multi-select"
    );

    optionsGrid.classList.add(
        "result-mode"
    );


    optionsGrid.innerHTML = `

        <div class="estimate-result">

            <span class="estimate-kicker">
                TYPICAL PROFESSIONAL MARKET RANGE
            </span>

            <strong class="estimate-price">
                ${formatEUR(min)}
                –
                ${formatEUR(max)}
            </strong>

            <p class="estimate-intro">
                Estimated investment for a project
                with your selected requirements.
            </p>

            <div class="estimate-summary">
                ${scopeHTML}
            </div>

            <div class="estimate-timeline">

                <div class="estimate-timeline-icon">
                    <i data-lucide="clock-3"></i>
                </div>

                <div>
                    <span>Estimated build time</span>
                    <strong>${timeline}</strong>
                </div>

            </div>

            <div class="estimate-points">

                <div>
                    <i data-lucide="check-circle-2"></i>

                    <span>
                        Responsive website design
                        and development
                    </span>
                </div>

                <div>
                    <i data-lucide="check-circle-2"></i>

                    <span>
                        Core technical setup
                        and launch preparation
                    </span>
                </div>

                <div>
                    <i data-lucide="check-circle-2"></i>

                    <span>
                        Scope can be tailored
                        before development begins
                    </span>
                </div>

            </div>

            <p class="estimate-disclaimer">
                This calculator provides a professional
                planning estimate and is not a fixed
                Mohsin Builds quote. Final pricing can
                vary depending on content, integrations,
                complexity and confirmed project scope.
            </p>

        </div>
    `;


    actions.classList.add(
        "result-actions"
    );


    backBtn.hidden = false;

    backBtn.innerHTML =
        "<span>←</span> Edit answers";


    continueBtn.disabled = false;

    continueBtn.innerHTML =
        "Get a tailored quote <span>↗</span>";


    continueBtn.dataset.resultCta =
        "true";


    if (privacyNote) {

        privacyNote.innerHTML = `
            <i data-lucide="shield-check"></i>

            <span>
                No signup required.
                Your answers are not stored.
            </span>
        `;

    }


    refreshIcons();
}


/* =========================================================
   CONTINUE
   ========================================================= */

continueBtn.addEventListener(
    "click",
    () => {

        if (
            continueBtn.dataset.resultCta ===
            "true"
        ) {

            window.open(
                "https://mohsinbuilds.netlify.app",
                "_blank",
                "noopener,noreferrer"
            );

            return;
        }


        if (continueBtn.disabled) {
            return;
        }


        if (
            state.currentStep <
            questions.length - 1
        ) {

            state.currentStep += 1;

            renderStep();

        } else {

            showResult();

        }

    }
);


/* =========================================================
   BACK
   ========================================================= */

backBtn.addEventListener(
    "click",
    () => {

        if (
            continueBtn.dataset.resultCta ===
            "true"
        ) {

            delete continueBtn.dataset.resultCta;

            actions.classList.remove(
                "result-actions"
            );

            optionsGrid.classList.remove(
                "result-mode"
            );


            if (privacyNote) {

                privacyNote.innerHTML = `
                    <i data-lucide="lock-keyhole"></i>
                    <span>
                        Your answers are not stored.
                    </span>
                `;

            }


            renderStep();

            return;
        }


        if (state.currentStep > 0) {

            state.currentStep -= 1;

            renderStep();

        }

    }
);


/* =========================================================
   START CALCULATOR
   ========================================================= */

renderStep();