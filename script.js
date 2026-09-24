"use strict";

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       CONFIG
    ====================================================== */

    const MOHSIN_BUILDS_CONTACT =
        "https://mohsinbuilds.com/contact.html";

    const GA_MEASUREMENT_ID =
        "G-VRW30YBDE9";

    const CONSENT_KEY =
        "mohsin_wcc_analytics_consent";


    /* =====================================================
       QUESTIONS
    ====================================================== */

    const questions = [

        {
            id: "businessType",

            title:
                "What type of business is this for?",

            subtitle:
                "Choose the option that best describes your business.",

            type:
                "single",

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
                    min: 0,
                    max: 0
                },

                {
                    value: "tourism",
                    label: "Tourism",
                    desc: "Hotels, villas, tours",
                    icon: "plane",
                    min: 0,
                    max: 0
                },

                {
                    value: "ecommerce",
                    label: "E-commerce",
                    desc: "Online store or product brand",
                    icon: "shopping-cart",
                    min: 0,
                    max: 0
                },

                {
                    value: "professional",
                    label: "Professional Service",
                    desc: "Consultant, agency, freelancer",
                    icon: "briefcase-business",
                    min: 0,
                    max: 0
                },

                {
                    value: "other",
                    label: "Other",
                    desc: "Something different",
                    icon: "ellipsis",
                    min: 0,
                    max: 0
                }

            ]
        },


        {
            id: "websiteType",

            title:
                "What kind of website do you need?",

            subtitle:
                "Choose the closest match. We’ll use it as the base for your estimate.",

            type:
                "single",

            options: [

                {
                    value: "landing",
                    label: "Landing Page",
                    desc: "One focused page for leads or campaigns",
                    icon: "panel-top",
                    min: 100,
                    max: 150
                },

                {
                    value: "brochure",
                    label: "Brochure Website",
                    desc: "A clean website for your company",
                    icon: "building-2",
                    min: 220,
                    max: 350
                },

                {
                    value: "business",
                    label: "Business Website",
                    desc: "A stronger multi-page business presence",
                    icon: "monitor",
                    min: 300,
                    max: 450
                },

                {
                    value: "store",
                    label: "Online Store",
                    desc: "Products, cart, checkout and payments",
                    icon: "shopping-bag",
                    min: 450,
                    max: 650
                },

                {
                    value: "booking",
                    label: "Booking Website",
                    desc: "Appointments, reservations or availability",
                    icon: "calendar-days",
                    min: 400,
                    max: 600
                },

                {
                    value: "custom",
                    label: "Custom Web Platform",
                    desc: "Advanced workflows or custom functionality",
                    icon: "code-2",
                    min: 550,
                    max: 750
                }

            ]
        },


        {
            id: "pages",

            title:
                "How many pages do you expect?",

            subtitle:
                "A rough number is enough. You can always change the scope later.",

            type:
                "single",

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
                    min: 80,
                    max: 150
                },

                {
                    value: "6-10",
                    label: "6–10 Pages",
                    desc: "A growing business website",
                    icon: "layout-grid",
                    min: 150,
                    max: 250
                },

                {
                    value: "11-20",
                    label: "11–20 Pages",
                    desc: "More services, content or locations",
                    icon: "layers",
                    min: 220,
                    max: 350
                },

                {
                    value: "20+",
                    label: "20+ Pages",
                    desc: "Large content or complex structure",
                    icon: "library",
                    min: 300,
                    max: 450
                }

            ]
        },


        {
            id: "features",

            title:
                "Which extra features do you need?",

            subtitle:
                "Select all that apply — or continue if you don’t need any extras.",

            type:
                "multi",

            optional:
                true,

            options: [

                {
                    value: "forms",
                    label: "Advanced Forms",
                    desc: "Quotes, enquiries or applications",
                    icon: "mail",
                    min: 30,
                    max: 60
                },

                {
                    value: "booking",
                    label: "Booking System",
                    desc: "Appointments or reservations",
                    icon: "calendar-check",
                    min: 70,
                    max: 120
                },

                {
                    value: "payments",
                    label: "Online Payments",
                    desc: "Accept secure online payments",
                    icon: "credit-card",
                    min: 80,
                    max: 150
                },

                {
                    value: "multilingual",
                    label: "Multilingual",
                    desc: "Two or more languages",
                    icon: "languages",
                    min: 50,
                    max: 100
                },

                {
                    value: "blog",
                    label: "Blog / News",
                    desc: "Publish articles and updates",
                    icon: "book-open",
                    min: 40,
                    max: 80
                },

                {
                    value: "members",
                    label: "Member Area",
                    desc: "Accounts, login or private content",
                    icon: "users",
                    min: 100,
                    max: 180
                }

            ]
        },


        {
            id: "designLevel",

            title:
                "What design level are you aiming for?",

            subtitle:
                "This affects the amount of custom art direction, UI work and polish.",

            type:
                "single",

            options: [

                {
                    value: "simple",
                    label: "Simple & Clean",
                    desc: "Professional, efficient and minimal",
                    icon: "layout-template",
                    min: 0,
                    max: 0
                },

                {
                    value: "premium",
                    label: "Premium",
                    desc: "More custom UI and stronger visual polish",
                    icon: "sparkles",
                    min: 80,
                    max: 150
                },

                {
                    value: "custom",
                    label: "Fully Custom",
                    desc: "High-end art direction and unique interactions",
                    icon: "pen-tool",
                    min: 150,
                    max: 250
                }

            ]
        },


        {
            id: "content",

            title:
                "Is your website content ready?",

            subtitle:
                "Tell us how much writing and content preparation you’ll need.",

            type:
                "single",

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
                    min: 40,
                    max: 80
                },

                {
                    value: "need-copy",
                    label: "I Need Copywriting",
                    desc: "Help with page copy and structure",
                    icon: "pen-line",
                    min: 80,
                    max: 150
                }

            ]
        },


        {
            id: "seo",

            title:
                "How much SEO setup do you need?",

            subtitle:
                "Choose the level of search visibility support you want at launch.",

            type:
                "single",

            options: [

                {
                    value: "basic",
                    label: "Basic Setup",
                    desc: "Titles, metadata and technical essentials",
                    icon: "search",
                    min: 0,
                    max: 0
                },

                {
                    value: "local",
                    label: "Local SEO",
                    desc: "Built for local discovery and service areas",
                    icon: "map-pin",
                    min: 50,
                    max: 100
                },

                {
                    value: "growth",
                    label: "Growth SEO",
                    desc: "Keyword structure and stronger on-page SEO",
                    icon: "chart-no-axes-column-increasing",
                    min: 100,
                    max: 180
                }

            ]
        },


        {
            id: "timeline",

            title:
                "When would you like to launch?",

            subtitle:
                "Faster schedules can require priority production time.",

            type:
                "single",

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
                    min: 50,
                    max: 100
                },

                {
                    value: "asap",
                    label: "As Soon As Possible",
                    desc: "Rush production where feasible",
                    icon: "zap",
                    min: 100,
                    max: 180
                }

            ]
        }

    ];


    /* =====================================================
       STATE
    ====================================================== */

    const state = {
        currentStep: 0,
        answers: {}
    };


    /* =====================================================
       ELEMENTS
    ====================================================== */

    const stepText =
        document.getElementById("stepText");

    const progressPercent =
        document.getElementById("progressPercent");

    const progressTrack =
        document.getElementById("progressTrack");

    const progressBar =
        document.getElementById("progressBar");

    const questionTitle =
        document.getElementById("questionTitle");

    const questionSubtitle =
        document.getElementById("questionSubtitle");

    const optionsGrid =
        document.getElementById("optionsGrid");

    const continueBtn =
        document.getElementById("continueBtn");

    const backBtn =
        document.getElementById("backBtn");

    const privacyNote =
        document.querySelector(".privacy-note");


    /* =====================================================
       ICONS
    ====================================================== */

    function refreshIcons() {

        if (
            window.lucide &&
            typeof window.lucide.createIcons === "function"
        ) {
            window.lucide.createIcons();
        }

    }


    /* =====================================================
       CONSENT STORAGE
    ====================================================== */

    function readConsent() {

        try {
            return localStorage.getItem(
                CONSENT_KEY
            );
        }

        catch {
            return null;
        }

    }


    function saveConsent(value) {

        try {

            localStorage.setItem(
                CONSENT_KEY,
                value
            );

        }

        catch {
            return;
        }

    }


    /* =====================================================
       ANALYTICS
    ====================================================== */

    function analyticsAllowed() {

        return (
            readConsent() ===
            "granted"
        );

    }


    function loadGoogleAnalytics() {

        if (
            window.__wccAnalyticsLoaded
        ) {
            return;
        }


        window.__wccAnalyticsLoaded =
            true;


        window.dataLayer =
            window.dataLayer || [];


        window.gtag =
            window.gtag ||
            function () {
                window.dataLayer.push(arguments);
            };


        const script =
            document.createElement("script");


        script.async =
            true;


        script.src =
            `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;


        document.head.appendChild(
            script
        );


        window.gtag(
            "js",
            new Date()
        );


        window.gtag(
            "config",
            GA_MEASUREMENT_ID,
            {
                send_page_view: true,

                linker: {
                    domains: [
                        "mohsinbuilds.com",
                        "mohsinlabs.com"
                    ]
                }
            }
        );

    }


    function trackEvent(name) {

        if (
            analyticsAllowed() &&
            typeof window.gtag === "function"
        ) {
            window.gtag(
                "event",
                name
            );
        }

    }


    /* =====================================================
       CONSENT UI
    ====================================================== */

    const consentBanner =
        document.getElementById(
            "consentBanner"
        );

    const acceptAnalytics =
        document.getElementById(
            "acceptAnalytics"
        );

    const rejectAnalytics =
        document.getElementById(
            "rejectAnalytics"
        );

    const cookieSettingsBtn =
        document.getElementById(
            "cookieSettingsBtn"
        );


    function showConsent() {

        if (consentBanner) {
            consentBanner.hidden =
                false;
        }

    }


    function hideConsent() {

        if (consentBanner) {
            consentBanner.hidden =
                true;
        }

    }


    acceptAnalytics
        ?.addEventListener(
            "click",
            () => {

                saveConsent(
                    "granted"
                );

                loadGoogleAnalytics();

                hideConsent();

            }
        );


    rejectAnalytics
        ?.addEventListener(
            "click",
            () => {

                saveConsent(
                    "denied"
                );

                hideConsent();

            }
        );


    cookieSettingsBtn
        ?.addEventListener(
            "click",
            showConsent
        );


    const savedConsent =
        readConsent();


    if (
        savedConsent ===
        "granted"
    ) {

        loadGoogleAnalytics();

    }

    else if (
        savedConsent !==
        "denied"
    ) {

        showConsent();

    }


    /* =====================================================
       OPTIONS
    ====================================================== */

    function createOptionCard(option) {

        const button =
            document.createElement("button");


        button.type =
            "button";


        button.className =
            "option-card";


        button.dataset.value =
            option.value;


        button.setAttribute(
            "aria-pressed",
            "false"
        );


        const icon =
            document.createElement("i");


        icon.setAttribute(
            "data-lucide",
            option.icon
        );


        const title =
            document.createElement("strong");


        title.textContent =
            option.label;


        const desc =
            document.createElement("span");


        desc.textContent =
            option.desc;


        button.append(
            icon,
            title,
            desc
        );


        return button;

    }


    function findOption(
        questionId,
        value
    ) {

        const question =
            questions.find(
                item =>
                    item.id ===
                    questionId
            );


        return question
            ?.options
            .find(
                option =>
                    option.value ===
                    value
            );

    }


    function getOptionLabel(
        questionId,
        value
    ) {

        return (
            findOption(
                questionId,
                value
            )?.label || ""
        );

    }


    /* =====================================================
       SELECTIONS
    ====================================================== */

    function restoreSelection(question) {

        const saved =
            state.answers[
                question.id
            ];


        optionsGrid
            .querySelectorAll(
                ".option-card"
            )
            .forEach(
                card => {

                    let selected =
                        false;


                    if (
                        question.type ===
                        "multi"
                    ) {

                        selected =
                            Array.isArray(saved) &&
                            saved.includes(
                                card.dataset.value
                            );

                    }

                    else {

                        selected =
                            saved ===
                            card.dataset.value;

                    }


                    card.classList.toggle(
                        "selected",
                        selected
                    );


                    card.setAttribute(
                        "aria-pressed",
                        String(selected)
                    );

                }
            );

    }


    function updateContinueState(
        question
    ) {

        if (
            question.optional
        ) {

            continueBtn.disabled =
                false;

            return;

        }


        const answer =
            state.answers[
                question.id
            ];


        continueBtn.disabled =
            question.type ===
                "multi"

                ? (
                    !Array.isArray(answer) ||
                    answer.length === 0
                )

                : !answer;

    }


    function selectOption(
        question,
        card
    ) {

        const value =
            card.dataset.value;


        trackEvent(
            "calculator_started"
        );


        if (
            question.type ===
            "multi"
        ) {

            const current =
                Array.isArray(
                    state.answers[
                        question.id
                    ]
                )

                    ? [
                        ...state.answers[
                            question.id
                        ]
                    ]

                    : [];


            const index =
                current.indexOf(
                    value
                );


            if (
                index >= 0
            ) {

                current.splice(
                    index,
                    1
                );

            }

            else {

                current.push(
                    value
                );

            }


            state.answers[
                question.id
            ] =
                current;

        }

        else {

            state.answers[
                question.id
            ] =
                value;

        }


        restoreSelection(
            question
        );


        updateContinueState(
            question
        );

    }


    /* =====================================================
       RENDER QUESTION
    ====================================================== */

    function renderStep() {

        const question =
            questions[
                state.currentStep
            ];


        const step =
            state.currentStep + 1;


        const percent =
            Math.round(
                (
                    step /
                    questions.length
                ) *
                100
            );


        delete continueBtn
            .dataset
            .resultCta;


        optionsGrid
            .classList
            .remove(
                "result-mode"
            );


        stepText.textContent =
            `STEP ${String(step).padStart(2, "0")} OF ${String(questions.length).padStart(2, "0")}`;


        progressPercent.textContent =
            `${percent}%`;


        progressBar.style.width =
            `${percent}%`;


        progressTrack.setAttribute(
            "aria-valuenow",
            String(percent)
        );


        questionTitle.textContent =
            question.title;


        questionSubtitle.textContent =
            question.subtitle;


        optionsGrid.replaceChildren();


        question.options.forEach(
            option => {

                const card =
                    createOptionCard(
                        option
                    );


                card.addEventListener(
                    "click",
                    () => {

                        selectOption(
                            question,
                            card
                        );

                    }
                );


                optionsGrid.appendChild(
                    card
                );

            }
        );


        backBtn.hidden =
            state.currentStep === 0;


        backBtn.innerHTML =
            `
                <span aria-hidden="true">
                    ←
                </span>
                Back
            `;


        continueBtn.innerHTML =
            state.currentStep ===
                questions.length - 1

                ? `
                    See my estimate
                    <span aria-hidden="true">
                        →
                    </span>
                `

                : `
                    Continue
                    <span aria-hidden="true">
                        →
                    </span>
                `;


        restoreSelection(
            question
        );


        updateContinueState(
            question
        );


        refreshIcons();

    }


    /* =====================================================
       PRICE
    ====================================================== */

    function calculateEstimate() {

        let min =
            0;

        let max =
            0;


        questions.forEach(
            question => {

                const answer =
                    state.answers[
                        question.id
                    ];


                if (
                    question.type ===
                    "multi"
                ) {

                    const values =
                        Array.isArray(answer)
                            ? answer
                            : [];


                    values.forEach(
                        value => {

                            const option =
                                findOption(
                                    question.id,
                                    value
                                );


                            if (option) {

                                min +=
                                    option.min;

                                max +=
                                    option.max;

                            }

                        }
                    );

                }

                else if (
                    answer
                ) {

                    const option =
                        findOption(
                            question.id,
                            answer
                        );


                    if (option) {

                        min +=
                            option.min;

                        max +=
                            option.max;

                    }

                }

            }
        );


        /*
           Current entry pricing model.
        */

        const finalMin =
            Math.min(
                min,
                1000
            );


        const finalMax =
            Math.min(
                max,
                1200
            );


        return {

            min:
                finalMin,

            max:
                Math.max(
                    finalMin,
                    finalMax
                )

        };

    }


    /* =====================================================
       TIMELINE
    ====================================================== */

    function calculateTimeline() {

        let weeks =
            2;


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


        const featureCount =
            Array.isArray(
                state.answers.features
            )

                ? state.answers
                    .features
                    .length

                : 0;


        weeks +=
            Math.ceil(
                featureCount / 2
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


        return (
            `${minWeeks}–${maxWeeks} weeks`
        );

    }


    /* =====================================================
       MONEY
    ====================================================== */

    function formatEUR(value) {

        return new Intl
            .NumberFormat(
                "en-IE",
                {
                    style:
                        "currency",

                    currency:
                        "EUR",

                    maximumFractionDigits:
                        0
                }
            )
            .format(
                value
            );

    }


    /* =====================================================
       RESULT
    ====================================================== */

    function showResult() {

        const {
            min,
            max
        } =
            calculateEstimate();


        const timeline =
            calculateTimeline();


        trackEvent(
            "calculator_completed"
        );


        const featureCount =
            Array.isArray(
                state.answers.features
            )

                ? state.answers
                    .features
                    .length

                : 0;


        const result =
            document.createElement(
                "div"
            );


        result.className =
            "estimate-result";


        result.innerHTML =
            `
                <span class="estimate-kicker">
                    ESTIMATED PROJECT RANGE
                </span>

                <strong class="estimate-price">
                    ${formatEUR(min)} – ${formatEUR(max)}
                </strong>

                <p class="estimate-intro">
                    Estimated investment for a project with
                    your selected requirements.
                </p>


                <div class="estimate-summary">

                    <div class="scope-item">
                        <span>
                            Website
                        </span>

                        <strong>
                            ${getOptionLabel(
                                "websiteType",
                                state.answers.websiteType
                            )}
                        </strong>
                    </div>


                    <div class="scope-item">
                        <span>
                            Pages
                        </span>

                        <strong>
                            ${getOptionLabel(
                                "pages",
                                state.answers.pages
                            )}
                        </strong>
                    </div>


                    <div class="scope-item">
                        <span>
                            Design
                        </span>

                        <strong>
                            ${getOptionLabel(
                                "designLevel",
                                state.answers.designLevel
                            )}
                        </strong>
                    </div>


                    <div class="scope-item">
                        <span>
                            Features
                        </span>

                        <strong>
                            ${
                                featureCount > 0
                                    ? `${featureCount} selected`
                                    : "No extras"
                            }
                        </strong>
                    </div>

                </div>


                <div class="estimate-timeline">

                    <div class="estimate-timeline-icon">
                        <i
                            data-lucide="clock-3"
                            aria-hidden="true"
                        ></i>
                    </div>

                    <div>
                        <span>
                            Estimated build time
                        </span>

                        <strong>
                            ${timeline}
                        </strong>
                    </div>

                </div>


                <div class="estimate-points">

                    <div>
                        <i data-lucide="check-circle-2"></i>
                        Responsive website design and development
                    </div>

                    <div>
                        <i data-lucide="check-circle-2"></i>
                        Core technical setup and launch preparation
                    </div>

                    <div>
                        <i data-lucide="check-circle-2"></i>
                        Scope can be tailored before development begins
                    </div>

                </div>


                <p class="estimate-disclaimer">
                    This calculator provides a planning estimate
                    and is not a fixed Mohsin Builds quote.
                    Final pricing can vary depending on content,
                    integrations, complexity and confirmed project scope.
                </p>
            `;


        stepText.textContent =
            "YOUR ESTIMATE";


        progressPercent.textContent =
            "100%";


        progressBar.style.width =
            "100%";


        progressTrack.setAttribute(
            "aria-valuenow",
            "100"
        );


        questionTitle.textContent =
            "Your website estimate is ready.";


        questionSubtitle.textContent =
            "Here’s a practical planning range based on the scope you selected.";


        optionsGrid.classList.add(
            "result-mode"
        );


        optionsGrid.replaceChildren(
            result
        );


        backBtn.hidden =
            false;


        backBtn.innerHTML =
            `
                <span aria-hidden="true">
                    ↻
                </span>

                Start over
            `;


        continueBtn.disabled =
            false;


        continueBtn.innerHTML =
            `
                Get a tailored quote

                <span aria-hidden="true">
                    ↗
                </span>
            `;


        continueBtn.dataset.resultCta =
            "true";


        refreshIcons();

    }


    /* =====================================================
       CONTINUE
    ====================================================== */

    continueBtn.addEventListener(
        "click",
        () => {

            if (
                continueBtn.dataset
                    .resultCta ===
                "true"
            ) {

                trackEvent(
                    "quote_clicked"
                );


                window.open(
                    MOHSIN_BUILDS_CONTACT,
                    "_blank",
                    "noopener,noreferrer"
                );


                return;

            }


            if (
                continueBtn.disabled
            ) {
                return;
            }


            if (
                state.currentStep <
                questions.length - 1
            ) {

                state.currentStep +=
                    1;


                renderStep();

            }

            else {

                showResult();

            }

        }
    );


    /* =====================================================
       BACK / RESTART
    ====================================================== */

    backBtn.addEventListener(
        "click",
        () => {

            if (
                continueBtn.dataset
                    .resultCta ===
                "true"
            ) {

                state.currentStep =
                    0;


                state.answers =
                    {};


                delete continueBtn
                    .dataset
                    .resultCta;


                renderStep();


                return;

            }


            if (
                state.currentStep > 0
            ) {

                state.currentStep -=
                    1;


                renderStep();

            }

        }
    );


    /* =====================================================
       INIT
    ====================================================== */

    renderStep();

    refreshIcons();


    window.addEventListener(
        "load",
        refreshIcons,
        {
            once: true
        }
    );

});