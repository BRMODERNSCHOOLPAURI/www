/* =========================================================
   BR MODERN SCHOOL PAURI
   CT & AI LEARNING LAB
   FINAL UPDATED SCRIPT
========================================================= */

const ADMIN_PASSWORD = "Sristi@22";
const AUTH_KEY = "ctAdminAuthenticated";
const RESULT_KEY = "ctResults";
const SF_KEY = "ctStudentFeedback";
const TF_KEY = "ctTeacherFeedback";


/* =========================================================
   GLOBAL STATE
========================================================= */

const state = {
    name: "",
    cls: "",
    section: "",
    roll: "",

    activity: 0,

    /* Activities 1–4 use levels.
       Activity 5 does NOT use levels. */
    level: 0,

    start: 0,
    timer: null,

    total: 0,
    score: 0,

    nextLevel: null
};


/* =========================================================
   ACTIVITY DATA
========================================================= */

const data = {

    1: {
        title: "Time Pattern Sorter",
        phase: "PHASE I • PATTERN RECOGNITION"
    },

    2: {
        title: "Time Detective",
        phase: "PHASE II • DECODE • DECIDE • DESCRIBE"
    },

    3: {
        title: "Story Sequencing Challenge",
        phase: "PHASE III • SEQUENCE • REASON • ARRANGE"
    },

    4: {
        title: "Grammar Debugger",
        phase: "PHASE IV • FIND • FIX • EXPLAIN"
    },

    5: {
        title: "Human Chatbot Challenge",
        phase: "AI READINESS • ASK • PROCESS • RESPOND"
    }

};


/* =========================================================
   SCHOOL LIST
========================================================= */

const schools = [
    "Army Public School Clement Town",
    "Army Public School Lansdowne",
    "Army Public School Roorkee",
    "Bal Bharati Public School Kotdwar",
    "Brightlands School Dehradun",
    "Brooklyn School Dehradun",
    "Convent of Jesus and Mary Dehradun",
    "Delhi Public School Dehradun",
    "Delhi Public School Rishikesh",
    "Delhi Public School Ranipur",
    "Doon International School",
    "Doon Public School Dehradun",
    "Grace Academy Dehradun",
    "Guru Nanak Fifth Centenary School",
    "Heritage Academy Kotdwara",
    "Him Jyoti School Dehradun",
    "Holy Angel School Dehradun",
    "Kasiga School Dehradun",
    "Kendriya Vidyalaya Kotdwara",
    "Kendriya Vidyalaya Pauri",
    "Kendriya Vidyalaya Srinagar",
    "Mount Fort Academy",
    "Oak Grove School",
    "Pine Hall School",
    "Rainbow Public School Srinagar",
    "SGRR Public School Dehradun",
    "SGRR Public School Kotdwar",
    "SGRR Public School Pauri",
    "St. Joseph's Academy Dehradun",
    "St. Thomas College Dehradun",
    "TCG Public School Kotdwar",
    "The Asian School Dehradun",
    "The Doon School",
    "Unison World School",
    "Welham Boys' School",
    "Welham Girls' School",
    "Woodstock School",
    "Gyan Bharti Public School Kotdwar",
    "Devbhumi Public School Srinagar",
    "Navyug Public School Kotdwar"
].sort((a, b) => a.localeCompare(b));

while (schools.length < 100) {
    schools.push(
        "CBSE School " +
        String(schools.length + 1).padStart(3, "0")
    );
}

schools.push("Other CBSE School");


/* =========================================================
   ACTIVITY 1 DATA
========================================================= */

const sortData = {

    1: [
        ["yesterday", "past"],
        ["last week", "past"],
        ["today", "present"],
        ["now", "present"],
        ["tomorrow", "future"],
        ["next year", "future"],
        ["ago", "past"],
        ["next month", "future"],
        ["last night", "past"],
        ["this morning", "present"]
    ],

    2: [
        ["was", "past"],
        ["were", "past"],
        ["is", "present"],
        ["are", "present"],
        ["will", "future"],
        ["shall", "future"],
        ["has", "present"],
        ["had", "past"],
        ["have", "present"],
        ["will be", "future"]
    ],

    3: [
        ["is going", "present"],
        ["was playing", "past"],
        ["will be reading", "future"],
        ["are writing", "present"],
        ["was running", "past"],
        ["is reading", "present"],
        ["were playing", "past"],
        ["will be going", "future"],
        ["are learning", "present"],
        ["will be studying", "future"]
    ]

};


/* =========================================================
   ACTIVITY 2
========================================================= */

const detective = [

    ["Last week", "Science Fair", "past"],
    ["Yesterday", "Football Match", "past"],
    ["Today", "Library Visit", "present"],
    ["Tomorrow", "School Picnic", "future"],
    ["Next year", "Competition", "future"],
    ["Last Sunday", "Sports Day", "past"],
    ["Now", "Classroom Activity", "present"],
    ["Two days ago", "Art Event", "past"],
    ["Next month", "Annual Function", "future"],
    ["Last month", "Science Exhibition", "past"],
    ["Today", "English Activity", "present"],
    ["Next week", "Quiz Competition", "future"],
    ["A moment ago", "Class Discussion", "past"],
    ["This week", "Reading Activity", "present"],
    ["Next Friday", "Debate Competition", "future"]

];


/* =========================================================
   ACTIVITY 3
========================================================= */

const stories = {

    1: {
        pictures: [
            "🌅",
            "🪥",
            "👕",
            "🎒",
            "🍳",
            "👟",
            "🚶",
            "🏫"
        ],

        s: [
            "I woke up early.",
            "I brushed my teeth.",
            "I got dressed.",
            "I packed my school bag.",
            "I had breakfast.",
            "I wore my shoes.",
            "I left home.",
            "I reached school."
        ]
    },

    2: {
        pictures: [
            "☁️",
            "💨",
            "🌧️",
            "👀"
        ],

        s: [
            "The clouds became dark.",
            "The wind started blowing.",
            "It began to rain.",
            "The children looked outside.",
            "They opened their umbrellas.",
            "They walked carefully.",
            "The rain became lighter.",
            "The sky became clear."
        ]
    },

    3: {
        pictures: [
            "🗺️",
            "🏛️"
        ],

        s: [
            "We planned our museum visit.",
            "We discussed the route.",
            "We packed our notebooks.",
            "We reached the museum.",
            "We observed the exhibits.",
            "We wrote important notes.",
            "We discussed our observations.",
            "We shared what we learned."
        ]
    }

};


/* =========================================================
   ACTIVITY 4
========================================================= */

const debugData = {

    1: [

        [
            "She go to school yesterday.",
            "She went to school yesterday."
        ],

        [
            "They is playing football.",
            "They are playing football."
        ],

        [
            "I will went tomorrow.",
            "I will go tomorrow."
        ],

        [
            "We was happy.",
            "We were happy."
        ],

        [
            "He are reading.",
            "He is reading."
        ],

        [
            "They plays cricket.",
            "They play cricket."
        ],

        [
            "I has a book.",
            "I have a book."
        ],

        [
            "She were tired.",
            "She was tired."
        ]

    ],

    2: [

        [
            "She were happy yesterday.",
            "She was happy yesterday."
        ],

        [
            "We is going to the market.",
            "We are going to the market."
        ],

        [
            "I will played tomorrow.",
            "I will play tomorrow."
        ],

        [
            "He do his work yesterday.",
            "He did his work yesterday."
        ],

        [
            "They was studying.",
            "They were studying."
        ],

        [
            "She have completed the work.",
            "She has completed the work."
        ],

        [
            "I am go to school every day.",
            "I go to school every day."
        ],

        [
            "He don't likes tea.",
            "He doesn't like tea."
        ]

    ],

    3: [

        [
            "Yesterday I go to school and meet my friends. We was excited because our teacher announce a science activity.",
            "Yesterday I went to school and met my friends. We were excited because our teacher announced a science activity."
        ],

        [
            "Tomorrow we went to the museum and we will saw many interesting things.",
            "Tomorrow we will go to the museum and we will see many interesting things."
        ],

        [
            "She are reading a book while her friends was discussing the story.",
            "She is reading a book while her friends are discussing the story."
        ],

        [
            "Last week our class organise an event and everyone enjoy it.",
            "Last week our class organised an event and everyone enjoyed it."
        ],

        [
            "My brother play cricket yesterday and then he go home.",
            "My brother played cricket yesterday and then he went home."
        ],

        [
            "The students was preparing while the teacher check their work.",
            "The students were preparing while the teacher checked their work."
        ],

        [
            "I will completed the project tomorrow because I have finish the research.",
            "I will complete the project tomorrow because I have finished the research."
        ],

        [
            "She do not understand the rule, so her friend explain it.",
            "She does not understand the rule, so her friend explains it."
        ]

    ]

};


/* =========================================================
   CHATBOT PROFILE
========================================================= */

const profile = {

    name: "Sristi",
    bestFriend: "Lalit",
    hobby: "reading books and talking to Lalit",
    hometown: "Pauri",
    location: "near Power House",
    age: "30",
    favouriteSubject: "English",
    favouriteActivity: "learning through logical activities",
    role: "a Human Chatbot Challenge character"

};


/* =========================================================
   UTILITY FUNCTIONS
========================================================= */

function $(id) {
    return document.getElementById(id);
}


function getJSON(key, defaultValue = []) {

    try {

        return JSON.parse(
            localStorage.getItem(key) ||
            JSON.stringify(defaultValue)
        );

    } catch {

        return defaultValue;

    }

}


function setJSON(key, value) {

    localStorage.setItem(
        key,
        JSON.stringify(value)
    );

}


function fmt(ms) {

    let seconds = Math.floor(ms / 1000);

    let minutes = Math.floor(seconds / 60);

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds % 60).padStart(2, "0")
    );

}


/* =========================================================
   NAVIGATION
========================================================= */

function show(id) {

    document
        .querySelectorAll(".page")
        .forEach(page => {
            page.classList.remove("active");
        });


    const target = $(id);

    if (target) {
        target.classList.add("active");
    }


    document
        .querySelectorAll(".activity-tab")
        .forEach(tab => {
            tab.classList.remove("active");
        });


    const tabs = document.querySelectorAll(".activity-tab");


    const map = {
        home: 0,
        student: 1,
        activities: 2,
        progress: 3,
        feedback: 4
    };


    if (map[id] !== undefined && tabs[map[id]]) {

        tabs[map[id]].classList.add("active");

    }


    if (id === "progress") {

        renderProgress();

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   STUDENT PROFILE
========================================================= */

function begin() {

    state.name =
        $("studentName").value.trim();

    state.cls =
        $("studentClass").value;

    state.section =
        $("section").value.trim();

    state.roll =
        $("roll").value.trim();


    if (!state.name || !state.cls) {

        alert(
            "Please enter your name and class."
        );

        return;

    }


    show("activities");

}


/* =========================================================
   OPEN ACTIVITY
========================================================= */

function openAct(activityNumber) {

    if (!state.name) {

        alert(
            "Please complete your student profile first."
        );

        show("student");

        return;

    }


    state.activity = activityNumber;


    $("phase").textContent =
        data[activityNumber].phase;

    $("gameTitle").textContent =
        data[activityNumber].title;


    /* =====================================================
       ACTIVITY 5
       DIRECT CHATBOT
       NO LEVELS
    ===================================================== */

    if (activityNumber === 5) {

        $("gameMeta").textContent =
            "Ask questions • interact with Sristi • review your response";

        $("levelBar").style.display = "none";

        $("timer").textContent = "00:00";

        startChatbot();

        show("game");

        return;

    }


    /* =====================================================
       ACTIVITIES 1–4
       LEVELS REMAIN
    ===================================================== */

    $("gameMeta").textContent =
        "Choose a level • complete the challenge • review your score";

    $("levelBar").style.display = "";

    $("gameArea").innerHTML =
        '<p>Select a level to begin your challenge.</p>';

    $("timer").textContent = "00:00";

    show("game");

}


/* =========================================================
   START LEVEL
========================================================= */

function startLevel(level) {

    if (state.activity === 5) {

        return;

    }


    clearInterval(state.timer);

    state.level = level;

    state.start = Date.now();


    $("timer").textContent = "00:00";


    state.timer = setInterval(() => {

        $("timer").textContent =
            fmt(Date.now() - state.start);

    }, 1000);


    buildGame();

}


/* =========================================================
   BUILD GAME
   UPDATED:
   ACTIVITY 1 LEVEL 3 USES NEW SHUFFLED PATTERN SYSTEM
========================================================= */

function buildGame() {

    let html;


    /* ================= ACTIVITY 1 ================= */

    if (state.activity === 1) {

        if (state.level === 3) {

            html = buildLevel3Pattern();

        } else {

            html = sorter(state.level);

        }


    /* ================= ACTIVITY 2 ================= */

    } else if (state.activity === 2) {

        html = timeDetective(state.level);


    /* ================= ACTIVITY 3 ================= */

    } else if (state.activity === 3) {

        html = sequence(state.level);


    /* ================= ACTIVITY 4 ================= */

    } else if (state.activity === 4) {

        html = debuggerGame(state.level);


    /* ================= ACTIVITY 5 ================= */

    } else {

        html = chatbot();

    }


    $("gameArea").innerHTML = html;

}


/* =========================================================
   FINISH SCORE
========================================================= */

function finishScore(activity, correct, total) {

    clearInterval(state.timer);


    const time =
        Date.now() - state.start;


    const score =
        total
            ? Math.round(correct / total * 100)
            : 0;


    const rec = {

        id: "R-" + Date.now(),

        date:
            new Date().toLocaleString(),

        studentName:
            state.name,

        className:
            state.cls,

        section:
            state.section,

        roll:
            state.roll,

        activity:
            activity,

        activityName:
            data[activity].title,

        level:
            state.level,

        score:
            score,

        correct:
            correct,

        total:
            total,

        time:
            time

    };


    const all =
        getJSON(RESULT_KEY);


    all.push(rec);


    setJSON(
        RESULT_KEY,
        all
    );

/* =========================================================
   SAVE RESULT TO SUPABASE
========================================================= */

const SUPABASE_URL =
    "https://bvqfeefygbpcdcnmgdrz.supabase.co";

const SUPABASE_KEY =
    "PASTE_YOUR_PUBLISHABLE_KEY_HERE";


fetch(
    SUPABASE_URL + "/rest/v1/ct_results",
    {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
            "apikey": SUPABASE_KEY,
            "Authorization":
                "Bearer " + SUPABASE_KEY,
            "Prefer": "return=minimal"
        },

        body: JSON.stringify({

            date: new Date().toISOString(),

            student_name:
                rec.studentName,

            class_name:
                rec.className,

            section:
                rec.section,

            roll:
                rec.roll,

            activity:
                rec.activity,

            activity_name:
                rec.activityName,

            level:
                rec.level,

            score:
                rec.score,

            correct:
                rec.correct,

            total:
                rec.total,

            time:
                rec.time

        })

    }
)
.catch(function(error) {

    console.error(
        "Supabase save failed:",
        error
    );

});
    $("finalScore").textContent =
        score + "%";


    $("correct").textContent =
        correct + " / " + total;


    $("finalTime").textContent =
        fmt(time);


    $("finalLevel").textContent =
        "Level " + state.level;


    $("resultHeading").textContent =
        score >= 80
            ? "Excellent Work!"
            : score >= 60
                ? "Good Work!"
                : "Keep Practising!";


    $("resultMessage").textContent =
        score >= 80
            ? "Strong logical thinking. Ready for the next challenge?"
            : score >= 60
                ? "Good progress. Review the patterns and try the next level."
                : "Every mistake is useful data. Debug your thinking and try again.";


    state.nextLevel =
        state.level < 3
            ? state.level + 1
            : null;


    $("resultNext").textContent =
        state.nextLevel
            ? "Next Level →"
            : "Back to Learning Path";


    show("result");

}


/* =========================================================
   RESULT NAVIGATION
========================================================= */

function nextFromResult() {

    if (state.nextLevel) {

        show("game");

        startLevel(
            state.nextLevel
        );

    } else {

        show("activities");

    }

}


/* =========================================================
   ACTIVITY 1
   TIME PATTERN SORTER
========================================================= */

function sorter(level) {

    const arr =
        sortData[level];


    if (level < 3) {

        return `

            <h3>
                Classify every item into the correct time group.
            </h3>

            <p class="muted">
                Click an item, choose its group, then submit.
            </p>

            <div id="sortItems">

                ${
                    [...arr]
                    .sort(() => Math.random() - 0.5)
                    .map((x) => `

                        <button
                            type="button"
                            class="gameOption"
                            onclick="pickSort(this)"
                        >
                            ${escapeHTML(x[0])}
                        </button>

                    `)
                    .join("")
                }

            </div>


            <div class="grid2">

                <div class="panel">

                    <h3>PAST</h3>

                    <div id="past"></div>

                </div>


                <div class="panel">

                    <h3>PRESENT</h3>

                    <div id="present"></div>

                </div>


                <div class="panel">

                    <h3>FUTURE</h3>

                    <div id="future"></div>

                </div>

            </div>


            <button
                type="button"
                class="primary"
                onclick="checkSorter(${level})"
            >
                Submit
            </button>

        `;

    }


    /* Old Level 3 interface remains here for compatibility.
       buildGame() now sends Level 3 to buildLevel3Pattern(). */

    return `

        <h3>
            Build a correct tense pattern by selecting
            one helping verb and one main verb.
        </h3>


        <div class="grid2">

            <div class="panel">

                <h3>HELPING VERB</h3>

                ${
                    ["is", "was", "will be", "are", "were"]
                    .map(x => `

                        <button
                            type="button"
                            class="gameOption"
                            onclick="chooseWord(this,'a')"
                        >
                            ${x}
                        </button>

                    `)
                    .join("")
                }

            </div>


            <div class="panel">

                <h3>MAIN VERB</h3>

                ${
                    ["going", "playing", "reading", "writing", "running"]
                    .map(x => `

                        <button
                            type="button"
                            class="gameOption"
                            onclick="chooseWord(this,'b')"
                        >
                            ${x}
                        </button>

                    `)
                    .join("")
                }

            </div>

        </div>


        <h2 id="built">—</h2>


        <p class="muted">
            Example valid combinations:
            is going, was playing, will be reading.
        </p>


        <button
            type="button"
            class="primary"
            onclick="checkPattern()"
        >
            Submit
        </button>

    `;

}


/* =========================================================
   SORTER
========================================================= */

function pickSort(el) {

    const group =
        prompt(
            "Type PAST, PRESENT or FUTURE"
        );


    if (!group) return;


    const g =
        group
            .toLowerCase()
            .trim();


    if (
        !["past", "present", "future"]
        .includes(g)
    ) {

        alert(
            "Please use Past, Present or Future."
        );

        return;

    }


    const target =
        $(g);


    if (!target) return;


    const span =
        document.createElement("span");


    span.className =
        "gameOption";


    span.dataset.word =
        el.textContent.trim();


    span.textContent =
        el.textContent.trim();


    target.appendChild(span);


    el.remove();

}


/* =========================================================
   SORTER SUBMIT
========================================================= */

function checkSorter(level) {

    const groups = [
        "past",
        "present",
        "future"
    ];


    const items =
        sortData[level] || [];


    let correct = 0;


    groups.forEach(group => {

        const box =
            $(group);


        if (!box) return;


        box
            .querySelectorAll("[data-word]")
            .forEach(item => {

                const word =
                    item.getAttribute("data-word");


                const answer =
                    items.find(
                        x =>
                            x[0].toLowerCase() ===
                            word.toLowerCase()
                    );


                if (
                    answer &&
                    answer[1] === group
                ) {

                    correct++;

                }

            });

    });


    finishScore(
        1,
        correct,
        items.length
    );

}


/* =========================================================
   ACTIVITY 1 LEVEL 3
   SHUFFLED HELPING VERB + MAIN VERB DROPDOWN
========================================================= */

const level3Patterns = [

    {
        helping: "is",
        options: ["going", "go", "went", "gone"],
        answer: "going"
    },

    {
        helping: "has",
        options: ["eaten", "eat", "eating", "eats"],
        answer: "eaten"
    },

    {
        helping: "do not",
        options: ["go", "went", "gone", "going"],
        answer: "go"
    },

    {
        helping: "had",
        options: ["played", "play", "playing", "plays"],
        answer: "played"
    },

    {
        helping: "will",
        options: ["go", "went", "going", "gone"],
        answer: "go"
    },

    {
        helping: "does not",
        options: ["play", "played", "playing", "plays"],
        answer: "play"
    },

    {
        helping: "has been",
        options: ["reading", "read", "reads", "wrote"],
        answer: "reading"
    },

    {
        helping: "are",
        options: ["writing", "write", "wrote", "writes"],
        answer: "writing"
    },

    {
        helping: "was",
        options: ["running", "run", "ran", "runs"],
        answer: "running"
    },

    {
        helping: "were",
        options: ["playing", "play", "played", "plays"],
        answer: "playing"
    }

];


/* =========================================================
   SHUFFLE HELPER
========================================================= */

function shuffleArray(array) {

    return [...array].sort(
        () => Math.random() - 0.5
    );

}


/* =========================================================
   BUILD LEVEL 3
========================================================= */

function buildLevel3Pattern() {

    const rows =
        shuffleArray(level3Patterns);


    return `

        <h3>
            Choose the correct main verb for each helping verb.
        </h3>

        <p class="muted">
            Read the helping verb carefully and select the
            grammatically correct verb form from the dropdown.
        </p>


        <div class="panel">

            <div
                style="
                    display:grid;
                    grid-template-columns:1fr 1fr;
                    gap:12px;
                    margin-bottom:15px;
                    font-weight:700;
                "
            >

                <div>
                    HELPING VERB
                </div>

                <div>
                    CHOOSE MAIN VERB
                </div>

            </div>


            <div
                id="level3PatternRows"
                style="
                    display:flex;
                    flex-direction:column;
                    gap:12px;
                "
            >

                ${
                    rows.map((item) => {

                        const options =
                            shuffleArray(item.options);


                        return `

                            <div
                                class="level3-pattern-row"
                                style="
                                    display:grid;
                                    grid-template-columns:1fr 1fr;
                                    gap:12px;
                                    align-items:center;
                                "
                            >

                                <div
                                    class="gameOption"
                                    style="
                                        cursor:default;
                                        margin:0;
                                    "
                                >
                                    ${escapeHTML(item.helping)}
                                </div>


                                <select
                                    class="level3VerbSelect"
                                    data-answer="${escapeHTML(item.answer)}"
                                    aria-label="Choose verb for ${escapeHTML(item.helping)}"
                                >

                                    <option value="">
                                        Select verb
                                    </option>

                                    ${
                                        options
                                        .map(option => `
                                            <option value="${escapeHTML(option)}">
                                                ${escapeHTML(option)}
                                            </option>
                                        `)
                                        .join("")
                                    }

                                </select>

                            </div>

                        `;

                    }).join("")

                }

            </div>

        </div>


        <p class="muted">
            Example: <b>is → going</b>,
            <b>has → eaten</b>,
            <b>does not → play</b>
        </p>


        <button
            type="button"
            class="primary"
            onclick="checkPattern()"
        >
            Submit
        </button>

    `;

}


/* =========================================================
   LEVEL 3 SUBMIT
========================================================= */

function checkPattern() {

    const selects =
        [
            ...document.querySelectorAll(
                ".level3VerbSelect"
            )
        ];


    const correct =
        selects.filter(
            select =>
                select.value ===
                select.dataset.answer
        ).length;


    finishScore(
        1,
        correct,
        selects.length
    );

}


/* =========================================================
   ACTIVITY 2
   TIME DETECTIVE
========================================================= */

function timeDetective(level) {

    const count =
        level === 1
            ? 10
            : level === 2
                ? 12
                : 15;


    const q =
        [...detective]
        .sort(() => Math.random() - 0.5)
        .slice(0, count);


    return `

        <h3>
            Detect the tense from the time clue and situation.
        </h3>

        <p class="muted">
            The time expression is a clue,
            not part of the answer option.
        </p>

        ${
            q.map((x, i) => {

                const [time, situation, tense] =
                    x;


                const answer =
                    tense === "past"
                        ? `I participated in the ${situation}.`
                        : tense === "present"
                            ? `I am participating in the ${situation}.`
                            : `I will participate in the ${situation}.`;


                const options = [

                    `I participated in the ${situation}.`,
                    `I am participating in the ${situation}.`,
                    `I will participate in the ${situation}.`

                ].sort(
                    () => Math.random() - 0.5
                );


                return `

                    <div class="question">

                        <h4>
                            ${i + 1}. ${escapeHTML(time)}
                        </h4>

                        <p>
                            ${escapeHTML(situation)}
                        </p>

                        <select
                            class="td"
                            data-answer="${escapeHTML(answer)}"
                        >

                            <option value="">
                                Select the best sentence
                            </option>

                            ${
                                options
                                .map(o =>
                                    `<option>${escapeHTML(o)}</option>`
                                )
                                .join("")
                            }

                        </select>

                    </div>

                `;

            }).join("")

        }


        <button
            type="button"
            class="primary"
            onclick="checkDetective()"
        >
            Submit
        </button>

    `;

}


function checkDetective() {

    const questions =
        [
            ...document.querySelectorAll(".td")
        ];


    const correct =
        questions.filter(
            x =>
                x.value ===
                x.dataset.answer
        ).length;


    finishScore(
        2,
        correct,
        questions.length
    );

}


/* =========================================================
   ACTIVITY 3
   STORY SEQUENCING
========================================================= */

function sequence(level) {

    const story =
        stories[level];


    const shuffled =
        [...story.s]
        .sort(() => Math.random() - 0.5);


    const pictureCount =
        level === 1
            ? 8
            : level === 2
                ? 4
                : 2;


    return `

        <h3>
            Arrange the 8 sentence strips
            in the most logical order.
        </h3>


        <div class="picture">

            ${
                story.pictures
                .slice(0, pictureCount)
                .join(" ")
            }

        </div>


        <p class="muted">
            Visual support: ${pictureCount} clue(s).
            Drag the strips into order.
        </p>


        <div id="seq">

            ${
                shuffled
                .map(x => `

                    <div
                        class="gameOption seqItem"
                        draggable="true"
                        ondragstart="dragSeq(event)"
                    >
                        ${escapeHTML(x)}
                    </div>

                `)
                .join("")
            }

        </div>


        <button
            type="button"
            class="primary"
            onclick="checkSequence(${level})"
        >
            Submit
        </button>

    `;

}


let dragged = null;


function dragSeq(event) {

    dragged =
        event.currentTarget;

}


document.addEventListener(
    "dragover",
    function(event) {

        if (
            event.target.closest("#seq")
        ) {

            event.preventDefault();

        }

    }
);


document.addEventListener(
    "drop",
    function(event) {

        const target =
            event.target.closest(
                "#seq .seqItem"
            );


        if (
            !dragged ||
            !target ||
            dragged === target
        ) {

            return;

        }


        const parent =
            target.parentNode;


        const items =
            [...parent.children];


        const a =
            items.indexOf(dragged);


        const b =
            items.indexOf(target);


        parent.insertBefore(
            dragged,
            a < b
                ? target.nextSibling
                : target
        );


        dragged = null;

    }
);


function checkSequence(level) {

    const actual =
        [
            ...document.querySelectorAll(
                "#seq .seqItem"
            )
        ]
        .map(x => x.textContent.trim());


    const answer =
        stories[level].s;


    const correct =
        actual.reduce(
            (total, item, index) =>
                total +
                (
                    item === answer[index]
                        ? 1
                        : 0
                ),
            0
        );


    finishScore(
        3,
        correct,
        answer.length
    );

}


/* =========================================================
   ACTIVITY 4
   GRAMMAR DEBUGGER
========================================================= */

function debuggerGame(level) {

    const q =
        debugData[level];


    if (level < 3) {

        return `

            <h3>
                Debug each sentence:
                identify the error and write
                the corrected sentence.
            </h3>

            ${
                q.map((x, i) => `

                    <label>

                        ${i + 1}.
                        ${escapeHTML(x[0])}

                        <input
                            class="dbg"
                            data-answer="${escapeHTML(x[1])}"
                            placeholder="Write the corrected sentence"
                        >

                    </label>

                `).join("")
            }


            <button
                type="button"
                class="primary"
                onclick="checkDebugger()"
            >
                Submit
            </button>

        `;

    }


    return `

        <h3>
            Paragraph Debugger •
            Find the hidden pattern of errors.
        </h3>


        ${
            q.map((x, i) => `

                <div class="question">

                    <h4>
                        Paragraph ${i + 1}
                    </h4>

                    <p>
                        ${escapeHTML(x[0])}
                    </p>

                    <textarea
                        class="dbg"
                        data-answer="${escapeHTML(x[1])}"
                        rows="4"
                        placeholder="Rewrite the corrected paragraph..."
                    ></textarea>

                </div>

            `).join("")
        }


        <button
            type="button"
            class="primary"
            onclick="checkDebugger()"
        >
            Submit
        </button>

    `;

}


function norm(text) {

    return String(text || "")
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase();

}


function checkDebugger() {

    const q =
        [
            ...document.querySelectorAll(".dbg")
        ];


    const correct =
        q.filter(
            x =>
                norm(x.value) ===
                norm(x.dataset.answer)
        ).length;


    finishScore(
        4,
        correct,
        q.length
    );

}


/* =========================================================
   HUMAN CHATBOT
   NO LEVEL
========================================================= */

function chatbot() {

    return `

        <div class="panel chatbot-panel">

            <span class="tag">
                AI READINESS • HUMAN CHATBOT
            </span>


            <h3>
                Meet Sristi 🤖
            </h3>


            <p>
                Ask a meaningful question about Sristi.
                You can use different WH-question forms.
            </p>


            <div
                class="chatLog"
                id="chatA"
            >

                <div class="chat-row bot-row">

                    <div class="chat-avatar">
                        🤖
                    </div>

                    <div class="chatBubble bot-bubble">

                        <b>Sristi</b>

                        <span>
                            Hello! 👋
                            I am Sristi.
                            Ask me something about me.
                        </span>

                    </div>

                </div>

            </div>


            <div class="chat-input-area">

                <input
                    id="chatQ"
                    maxlength="300"
                    autocomplete="off"
                    placeholder="Type your question and press Enter..."
                >


                <button
                    type="button"
                    class="primary"
                    onclick="chatAnswer()"
                >
                    Ask →
                </button>

            </div>


            <button
                type="button"
                class="secondary-button"
                onclick="finishChat()"
            >
                Finish Challenge
            </button>


            <p class="muted">

                You may ask:
                WHO, WHAT, WHEN, WHERE, WHY,
                WHICH, WHOSE, WHOM, HOW,
                HOW MANY, HOW MUCH,
                HOW OFTEN, HOW LONG or HOW FAR.

            </p>


            <p class="muted">

                Training library:
                <b id="patternCount">1000+</b>
                paraphrased question patterns.

            </p>

        </div>

    `;

}


/* =========================================================
   CHATBOT START
========================================================= */

function startChatbot() {

    clearInterval(state.timer);


    state.level = 0;

    state.nextLevel = null;

    state.start = Date.now();


    $("timer").textContent =
        "00:00";


    state.timer =
        setInterval(() => {

            $("timer").textContent =
                fmt(
                    Date.now() -
                    state.start
                );

        }, 1000);


    $("gameArea").innerHTML =
        chatbot();


    setupChatEnter();

}


/* =========================================================
   ENTER TO SEND
========================================================= */

function setupChatEnter() {

    const input =
        $("chatQ");


    if (!input) return;


    input.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter" &&
                !event.shiftKey
            ) {

                event.preventDefault();

                chatAnswer();

            }

        }
    );


    setTimeout(() => {

        input.focus();

    }, 100);

}


/* =========================================================
   QUESTION PATTERNS
========================================================= */

const templates = [

    "what is {x}",
    "tell me about {x}",
    "can you tell me {x}",
    "could you tell me {x}",
    "i want to know {x}",
    "please explain {x}",
    "what do you know about {x}",
    "which person is {x}",
    "who is connected with {x}",
    "where is {x}",
    "how would you describe {x}",
    "what can you say about {x}",
    "tell me something about {x}",
    "i am curious about {x}",
    "give me information about {x}",
    "please tell me {x}",
    "what is known about {x}",
    "can you explain {x}",
    "what would you say about {x}",
    "how can i know {x}"

];


const topics = [

    "your name",
    "your best friend",
    "your hobby",
    "your hometown",
    "where you live",
    "your age",
    "your favourite subject",
    "your favourite activity",
    "your role"

];


const questionLibrary = [];


for (
    const template of templates
) {

    for (
        const topic of topics
    ) {

        questionLibrary.push(
            template.replace(
                "{x}",
                topic
            )
        );

    }

}


for (let i = 0; i < 60; i++) {

    for (
        const template of templates
    ) {

        questionLibrary.push(
            template.replace(
                "{x}",
                topics[i % topics.length]
            )
        );

    }

}


/* =========================================================
   CHAT INTENT
========================================================= */

function chatIntent(question) {

    const s =
        norm(question);


    if (
        /\b(who|what).*(name)|\bname\b/
        .test(s)
    ) {

        return "name";

    }


    if (
        /best friend|close friend|friend is|who.*friend/
        .test(s)
    ) {

        return "friend";

    }


    if (
        /hobby|free time|enjoy|like doing/
        .test(s)
    ) {

        return "hobby";

    }


    if (
        /hometown|home town|native place|from where|where.*from/
        .test(s)
    ) {

        return "hometown";

    }


    if (
        /where.*live|live.*where|home.*located/
        .test(s)
    ) {

        return "location";

    }


    if (
        /how old|what.*age|age/
        .test(s)
    ) {

        return "age";

    }


    if (
        /favourite subject|favorite subject|subject.*like/
        .test(s)
    ) {

        return "subject";

    }


    if (
        /favourite activity|favorite activity|activity.*like/
        .test(s)
    ) {

        return "activity";

    }


    if (
        /role|what do you do|what.*purpose/
        .test(s)
    ) {

        return "role";

    }


    return "";

}


/* =========================================================
   CHAT RESPONSE
========================================================= */

function chatAnswer() {

    const input =
        $("chatQ");


    const box =
        $("chatA");


    if (!input || !box) return;


    const question =
        input.value.trim();


    if (!question) {

        return;

    }


    const intent =
        chatIntent(question);


    const answers = {

        name:
            "My name is Sristi.",

        friend:
            "My best friend is Lalit.",

        hobby:
            "My hobby is reading books and talking to Lalit.",

        hometown:
            "My hometown is Pauri.",

        location:
            "I live near Power House.",

        age:
            "I am 30 years old.",

        subject:
            "My favourite subject is English.",

        activity:
            "My favourite activity is learning through logical activities.",

        role:
            "I am a Human Chatbot Challenge character in the learning lab."

    };


    const answer =
        answers[intent] ||
        "I don't have enough information to answer that question. Try asking me about my name, friend, hobby, hometown, location, age, favourite subject, favourite activity or role.";


    /* USER BUBBLE */

    const userRow =
        document.createElement("div");


    userRow.className =
        "chat-row user-row";


    userRow.innerHTML = `

        <div class="chatBubble user-bubble">

            <b>You</b>

            <span>
                ${escapeHTML(question)}
            </span>

        </div>

        <div class="chat-avatar">
            👤
        </div>

    `;


    box.appendChild(
        userRow
    );


    /* BOT BUBBLE */

    const botRow =
        document.createElement("div");


    botRow.className =
        "chat-row bot-row";


    botRow.innerHTML = `

        <div class="chat-avatar">
            🤖
        </div>

        <div class="chatBubble bot-bubble">

            <b>Sristi</b>

            <span>
                ${escapeHTML(answer)}
            </span>

        </div>

    `;


    box.appendChild(
        botRow
    );


    /* CLEAR INPUT */

    input.value = "";


    /* SCROLL TO NEW MESSAGE */

    box.scrollTop =
        box.scrollHeight;


    input.focus();

}


/* =========================================================
   FINISH CHATBOT
========================================================= */

function finishChat() {

    const messages =
        document.querySelectorAll(
            "#chatA .user-row"
        );


    if (messages.length < 1) {

        alert(
            "Ask at least one question before finishing."
        );

        return;

    }


    clearInterval(state.timer);


    const time =
        Date.now() -
        state.start;


    const record = {

        id:
            "R-" + Date.now(),

        date:
            new Date().toLocaleString(),

        studentName:
            state.name,

        className:
            state.cls,

        section:
            state.section,

        roll:
            state.roll,

        activity:
            5,

        activityName:
            data[5].title,

        level:
            "Not Applicable",

        score:
            100,

        correct:
            1,

        total:
            1,

        time:
            time

    };


    const all =
        getJSON(RESULT_KEY);


    all.push(record);


    setJSON(
        RESULT_KEY,
        all
    );


    $("finalScore").textContent =
        "100%";


    $("correct").textContent =
        "Completed";


    $("finalTime").textContent =
        fmt(time);


    $("finalLevel").textContent =
        "Chatbot";


    $("resultHeading").textContent =
        "Great Interaction!";


    $("resultMessage").textContent =
        "You successfully interacted with Sristi and explored how a rule-based chatbot processes questions and responses.";


    $("resultNext").textContent =
        "Back to Learning Path";


    state.nextLevel =
        null;


    show("result");

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(text) {

    return String(text)
        .replace(
            /[&<>"']/g,
            function(match) {

                return {

                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#039;"

                }[match];

            }
        );

}


/* =========================================================
   PROGRESS
========================================================= */

function renderProgress() {

    const results =
        getJSON(RESULT_KEY);


    const scores =
        results.map(
            x => Number(x.score) || 0
        );


    $("progressBox").innerHTML = [

        [
            "Activities Completed",
            results.length
        ],

        [
            "Average Score",
            results.length
                ? Math.round(
                    scores.reduce(
                        (a, b) => a + b,
                        0
                    ) / results.length
                ) + "%"
                : "0%"
        ],

        [
            "Levels Completed",
            results.length
        ],

        [
            "Best Score",
            results.length
                ? Math.max(...scores) + "%"
                : "0%"
        ]

    ]
    .map(
        x => `

            <div class="stat">

                <b>${x[0]}</b>

                <h2>
                    ${x[1]}
                </h2>

            </div>

        `
    )
    .join("");


    if (!results.length) {

        $("progressDetails").innerHTML =
            '<p class="muted">No activity attempts yet.</p>';

        return;

    }


    $("progressDetails").innerHTML = `

        <h3>
            Recent Attempts
        </h3>


        <table class="miniTable">

            <tr>

                <th>Student</th>
                <th>Activity</th>
                <th>Level</th>
                <th>Score</th>
                <th>Time</th>

            </tr>


            ${
                results
                .slice(-10)
                .reverse()
                .map(x => `

                    <tr>

                        <td>
                            ${escapeHTML(x.studentName)}
                        </td>

                        <td>
                            ${escapeHTML(x.activityName)}
                        </td>

                        <td>
                            ${escapeHTML(x.level)}
                        </td>

                        <td>
                            ${x.score}%
                        </td>

                        <td>
                            ${fmt(x.time)}
                        </td>

                    </tr>

                `)
                .join("")
            }

        </table>

    `;

}


/* =========================================================
   FEEDBACK TABS
========================================================= */

function feedbackTab(tab, button) {

    [
        "studentFeedbackBox",
        "teacherFeedbackBox",
        "adminLoginBox"
    ]
    .forEach(id => {

        const element =
            $(id);

        if (element) {

            element.style.display =
                "none";

        }

    });


    let target;


    if (tab === "student") {

        target =
            "studentFeedbackBox";

    } else if (tab === "teacher") {

        target =
            "teacherFeedbackBox";

    } else {

        target =
            "adminLoginBox";

    }


    $(target).style.display =
        "block";


    document
        .querySelectorAll(".tab")
        .forEach(tabButton => {

            tabButton.classList.remove(
                "active"
            );

        });


    if (button) {

        button.classList.add(
            "active"
        );

    }


    if (tab === "teacher") {

        loadRememberedFeedback();

    }

}


/* =========================================================
   STUDENT FEEDBACK
========================================================= */

function submitStudentFeedback(event) {

    event.preventDefault();


    const row = {

        id:
            "SF-" + Date.now(),

        date:
            new Date().toLocaleString(),

        studentName:
            $("sfName").value.trim(),

        className:
            $("sfClass").value,

        activity:
            $("sfActivity").value,

        level:
            $("sfLevel").value,

        rating:
            $("sfRating").value,

        feedback:
            $("sfFeedback").value.trim()

    };


    if (
        !row.studentName ||
        !row.className ||
        !row.activity ||
        !row.level ||
        !row.rating ||
        !row.feedback
    ) {

        alert(
            "Please complete all fields."
        );

        return;

    }


    const feedback =
        getJSON(SF_KEY);


    feedback.push(row);


    setJSON(
        SF_KEY,
        feedback
    );


    $("studentFeedbackMsg").innerHTML =
        '<p class="success">✓ Student feedback recorded successfully.</p>';


    $("studentFeedbackForm").reset();

}


/* =========================================================
   TEACHER FEEDBACK
========================================================= */

function submitTeacherFeedback(event) {

    event.preventDefault();


    const row = {

        id:
            "TF-" + Date.now(),

        date:
            new Date().toLocaleString(),

        school:
            $("school").value,

        designation:
            $("designation").value,

        rating:
            $("rating").value,

        feedback:
            $("feedbackText").value.trim()

    };


    if (
        !row.school ||
        !row.designation ||
        !row.rating ||
        !row.feedback
    ) {

        alert(
            "Please complete all fields."
        );

        return;

    }


    const feedback =
        getJSON(TF_KEY);


    feedback.push(row);


    setJSON(
        TF_KEY,
        feedback
    );


    if (
        $("remember").checked
    ) {

        localStorage.setItem(
            "rememberFeedback",
            JSON.stringify({
                school:
                    row.school,

                designation:
                    row.designation
            })
        );

    } else {

        localStorage.removeItem(
            "rememberFeedback"
        );

    }


    $("feedbackMsg").innerHTML =
        '<p class="success">✓ Teacher feedback recorded successfully.</p>';


    $("teacherFeedbackForm").reset();


    loadRememberedFeedback();

}


/* =========================================================
   REMEMBERED FEEDBACK
========================================================= */

function loadRememberedFeedback() {

    const saved =
        getJSON(
            "rememberFeedback",
            null
        );


    if (!saved) return;


    if ($("school")) {

        $("school").value =
            saved.school || "";

    }


    if ($("designation")) {

        $("designation").value =
            saved.designation || "";

    }

}


/* =========================================================
   ADMIN LOGIN
========================================================= */

function adminLogin(event) {

    event.preventDefault();


    const message =
        $("adminLoginMsg");


    if (
        $("adminPassword").value ===
        ADMIN_PASSWORD
    ) {

        sessionStorage.setItem(
            AUTH_KEY,
            "true"
        );


        message.innerHTML =
            '<p class="success">✓ Login successful. Opening Admin Panel...</p>';


        setTimeout(
            () => {

                location.href =
                    "admin.html";

            },
            350
        );


    } else {

        message.innerHTML =
            '<p class="error">✕ Incorrect password.</p>';


        $("adminPassword").value =
            "";

    }

}


/* =========================================================
   INITIALISE
========================================================= */

function init() {

    if ($("school")) {

        $("school").innerHTML =
            '<option value="">Select School</option>' +

            schools
                .map(
                    school =>
                        `<option>${escapeHTML(school)}</option>`
                )
                .join("");

    }


    loadRememberedFeedback();


    if ($("patternCount")) {

        $("patternCount").textContent =
            Math.max(
                1000,
                questionLibrary.length
            ) + "+";

    }


    feedbackTab(
        "student",
        document.querySelector(".tab")
    );

}


/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    init
);


/* =========================================================
   HUMAN CHATBOT — EXPANDED CONVERSATION PATCH
========================================================= */

(function () {

    const extendedChatData = {

        name: {
            patterns: [
                /\bwhat\s+is\s+your\s+name\b/i,
                /\bwhat'?s\s+your\s+name\b/i,
                /\bwhat\s+do\s+i\s+call\s+you\b/i,
                /\bmay\s+i\s+know\s+your\s+name\b/i,
                /\bcould\s+you\s+tell\s+me\s+your\s+name\b/i,
                /\bcan\s+you\s+tell\s+me\s+your\s+name\b/i
            ],
            replies: [
                "My name is Sristi. Nice to meet you!",
                "I am Sristi. You can call me Sristi!",
                "My name is Sristi. It is lovely to chat with you!"
            ]
        },

        age: {
            patterns: [
                /\bhow\s+old\s+are\s+you\b/i,
                /\bwhat\s+is\s+your\s+age\b/i,
                /\bwhat'?s\s+your\s+age\b/i,
                /\bcan\s+you\s+tell\s+me\s+your\s+age\b/i,
                /\bcould\s+you\s+tell\s+me\s+how\s+old\s+you\s+are\b/i
            ],
            replies: [
                "I am 30 years old.",
                "I am 30 years old. How old are you?",
                "I am 30. Age is just one small part of who we are!"
            ]
        },

        bestFriend: {
            patterns: [
                /\bwho\s+is\s+your\s+best\s+friend\b/i,
                /\btell\s+me\s+about\s+your\s+best\s+friend\b/i,
                /\bwho\s+is\s+your\s+closest\s+friend\b/i,
                /\bdo\s+you\s+have\s+a\s+best\s+buddy\b/i,
                /\bwho\s+do\s+you\s+spend\s+most\s+of\s+your\s+time\s+with\b/i,
                /\bwho\s+is\s+the\s+friend\s+you\s+trust\s+the\s+most\b/i,
                /\bdescribe\s+your\s+best\s+friend\b/i,
                /\bwhat\s+do\s+you\s+like\s+about\s+your\s+best\s+friend\b/i,
                /\bwhat\s+do\s+you\s+and\s+your\s+best\s+friend\s+enjoy\s+doing\b/i,
                /\bwho\s+is\s+your\s+favourite\s+friend\s+at\s+school\b/i,
                /\bwho\s+is\s+your\s+favorite\s+friend\s+at\s+school\b/i,
                /\btell\s+me\s+something\s+about\s+your\s+closest\s+school\s+friend\b/i,
                /\bwhat\s+makes\s+your\s+best\s+friend\s+special\b/i,
                /\bwhich\s+friend\s+are\s+you\s+closest\s+to\b/i,
                /\bwho\s+is\s+your\s+best\s+buddy\b/i
            ],
            replies: [
                "My best friend is Lalit. We enjoy spending time and talking together.",
                "Lalit is my best friend. I like talking and sharing ideas with him.",
                "I am closest to Lalit. We enjoy talking and spending time together.",
                "My best buddy is Lalit. He is special to me because we enjoy sharing conversations.",
                "Lalit is the friend I am closest to. We like talking and learning together."
            ],
            followUps: [
                "Who is your best friend?",
                "What do you enjoy doing with your best friend?",
                "What makes your best friend special?",
                "How would you describe your best friend?"
            ]
        },

        family: {
            patterns: [
                /\btell\s+me\s+about\s+your\s+family\b/i,
                /\bwho\s+are\s+the\s+members\s+of\s+your\s+family\b/i,
                /\bhow\s+many\s+people\s+are\s+there\s+in\s+your\s+family\b/i,
                /\bwho\s+do\s+you\s+live\s+with\b/i,
                /\bcan\s+you\s+introduce\s+your\s+family\b/i,
                /\btell\s+me\s+something\s+about\s+your\s+family\s+members\b/i,
                /\bwho\s+is\s+the\s+oldest\s+person\s+in\s+your\s+family\b/i,
                /\bwho\s+is\s+the\s+youngest\s+in\s+your\s+family\b/i,
                /\bwhat\s+do\s+you\s+like\s+doing\s+with\s+your\s+family\b/i,
                /\bwho\s+helps\s+you\s+with\s+your\s+studies\s+at\s+home\b/i,
                /\bwhat\s+is\s+your\s+favourite\s+family\s+activity\b/i,
                /\bwhat\s+is\s+your\s+favorite\s+family\s+activity\b/i,
                /\bdescribe\s+your\s+family\b/i,
                /\bwhat\s+do\s+you\s+enjoy\s+doing\s+together\s+as\s+a\s+family\b/i
            ],
            replies: [
                "Family is very important to me. I enjoy spending time, talking and sharing happy moments with my family.",
                "I have a loving family. We enjoy spending time together and helping one another.",
                "My family is an important part of my life. We like talking, learning and enjoying activities together.",
                "I enjoy family time because it gives us a chance to talk, laugh and learn from one another."
            ],
            followUps: [
                "What do you enjoy doing with your family?",
                "What is your favourite family activity?",
                "How would you describe your family?",
                "Who do you enjoy spending time with at home?"
            ]
        },

        school: {
            patterns: [
                /\btell\s+me\s+about\s+your\s+school\b/i,
                /\bwhat\s+do\s+you\s+like\s+about\s+your\s+school\b/i,
                /\bdescribe\s+your\s+school\b/i,
                /\bwhat\s+is\s+your\s+favourite\s+place\s+in\s+school\b/i,
                /\bwhat\s+is\s+your\s+favorite\s+place\s+in\s+school\b/i,
                /\bwhat\s+do\s+you\s+enjoy\s+doing\s+at\s+school\b/i,
                /\bwhich\s+subject\s+do\s+you\s+enjoy\s+the\s+most\b/i,
                /\bwho\s+is\s+your\s+favourite\s+teacher\b/i,
                /\bwho\s+is\s+your\s+favorite\s+teacher\b/i,
                /\bwhat\s+makes\s+your\s+school\s+special\b/i,
                /\btell\s+me\s+about\s+your\s+school\s+life\b/i,
                /\bwhat\s+activities\s+do\s+you\s+enjoy\s+at\s+school\b/i,
                /\bwhat\s+is\s+one\s+thing\s+you\s+would\s+like\s+to\s+improve\s+in\s+your\s+school\b/i,
                /\bwhat\s+do\s+you\s+usually\s+do\s+during\s+your\s+school\s+day\b/i,
                /\bwhich\s+school\s+activity\s+do\s+you\s+enjoy\s+the\s+most\b/i,
                /\bhow\s+would\s+you\s+describe\s+your\s+school\s+to\s+a\s+new\s+student\b/i
            ],
            replies: [
                "My school is a place where students learn, explore and take part in many activities.",
                "I like my school because it gives students opportunities to learn, communicate and try new things.",
                "My school is a friendly learning environment where students can study, explore and participate in activities.",
                "School life is interesting because we learn new things and take part in different activities."
            ],
            followUps: [
                "What is your favourite place in your school?",
                "Which school activity do you enjoy the most?",
                "Which subject do you enjoy the most?",
                "What makes your school special?"
            ]
        },

        labs: {
            patterns: [
                /\bwhat\s+labs\s+are\s+there\s+in\s+your\s+school\b/i,
                /\btell\s+me\s+about\s+your\s+school\s+laboratories\b/i,
                /\bwhich\s+lab\s+do\s+you\s+like\s+the\s+most\b/i,
                /\bwhat\s+do\s+you\s+do\s+in\s+the\s+science\s+lab\b/i,
                /\bwhat\s+happens\s+in\s+your\s+computer\s+lab\b/i,
                /\bwhat\s+do\s+students\s+learn\s+in\s+the\s+maths\s+lab\b/i,
                /\bwhat\s+do\s+students\s+learn\s+in\s+the\s+mathematics\s+lab\b/i,
                /\bwhat\s+is\s+special\s+about\s+your\s+language\s+lab\b/i,
                /\bwhat\s+equipment\s+or\s+resources\s+do\s+you\s+use\s+in\s+the\s+labs\b/i,
                /\bwhich\s+lab\s+activity\s+do\s+you\s+enjoy\b/i,
                /\bhow\s+do\s+labs\s+help\s+you\s+learn\b/i,
                /\bwhy\s+are\s+school\s+laboratories\s+important\b/i,
                /\bdescribe\s+your\s+favourite\s+lab\b/i,
                /\bdescribe\s+your\s+favorite\s+lab\b/i,
                /\bwhat\s+can\s+students\s+explore\s+in\s+the\s+science\s+lab\b/i,
                /\bhow\s+is\s+learning\s+in\s+a\s+lab\s+different\s+from\s+learning\s+in\s+a\s+classroom\b/i,
                /\bwhich\s+laboratory\s+would\s+you\s+like\s+to\s+explore\s+more\b/i
            ],
            replies: [
                "School laboratories give students opportunities to learn through practical activities and exploration.",
                "Labs make learning more practical and interesting because students can explore ideas through activities.",
                "I like laboratories because they allow students to learn by doing, observing and experimenting.",
                "Learning in a lab can be different from a regular classroom because students get more opportunities for hands-on learning."
            ],
            followUps: [
                "Which lab do you like the most?",
                "What do you enjoy doing in the lab?",
                "How does a lab help you learn?",
                "Which laboratory would you like to explore more?"
            ]
        }

    };


    function getLabResponse(q) {

        if (/\bscience\s+lab\b/i.test(q)) {
            return [
                "The Science Lab is a place where students can explore scientific ideas through experiments, observation and practical activities.",
                "I like the Science Lab because students can observe, investigate and learn science by doing activities.",
                "In the Science Lab, students can explore scientific concepts through practical learning."
            ];
        }

        if (/\bcomputer\s+lab\b/i.test(q)) {
            return [
                "The Computer Lab helps students learn technology, digital skills, problem-solving and computer-based activities.",
                "In the Computer Lab, students can practise digital skills and explore different ways of using technology for learning.",
                "The Computer Lab is a useful learning space where students can develop computer and digital skills."
            ];
        }

        if (/\bmaths\s+lab\b|\bmathematics\s+lab\b/i.test(q)) {
            return [
                "The Mathematics Lab helps students understand mathematical ideas through activities, models and practical exploration.",
                "In the Maths Lab, students can explore mathematical concepts in an activity-based way.",
                "The Mathematics Lab makes maths more practical and helps students learn by exploring."
            ];
        }

        if (/\blanguage\s+lab\b/i.test(q)) {
            return [
                "The Language Lab helps students practise listening, speaking, pronunciation and communication skills.",
                "I like the Language Lab because students can practise English communication in an interactive way.",
                "The Language Lab provides opportunities to improve communication and language skills through practice."
            ];
        }

        if (/\b(ai|artificial intelligence|robotics)\s+lab\b/i.test(q)) {
            return [
                "The AI and Robotics Lab can help students explore technology, logical thinking, problem-solving and creative projects.",
                "An AI or Robotics Lab gives students opportunities to explore technology and develop computational thinking skills.",
                "The AI/Robotics Lab can make learning exciting through technology, problem-solving and hands-on projects."
            ];
        }

        return null;
    }


    function privacyResponse(q) {

        const sensitivePatterns = [
            /\bhome\s+address\b/i,
            /\baddress\b/i,
            /\bphone\s*(number|no)?\b/i,
            /\bmobile\s*(number|no)?\b/i,
            /\bpassword\b/i,
            /\botp\b/i,
            /\bpin\b/i,
            /\bfinancial\b/i,
            /\bbank\b/i,
            /\baccount\s+number\b/i,
            /\bcredit\s+card\b/i,
            /\bdebit\s+card\b/i,
            /\bpersonal\s+identification\b/i,
            /\baadhaar\b/i,
            /\bpan\s+number\b/i
        ];

        if (sensitivePatterns.some(pattern => pattern.test(q))) {
            return "For your privacy and safety, let's not share personal information such as addresses, phone numbers, passwords or financial details. We can talk about school, learning, hobbies, friends or family instead.";
        }

        return null;
    }


    function randomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }


    function shouldFollowUp() {
        return Math.random() < 0.55;
    }


    function extendedChatIntent(question) {

        const q = question.trim();

        if (!q) return null;

        const privacy = privacyResponse(q);

        if (privacy) {
            return {
                reply: privacy,
                followUp: null
            };
        }


        if (
            q.length < 4 ||
            /^(name|age|friend|best friend|family|school|lab|hobby|subject|activity|location|role)$/i.test(q)
        ) {
            return {
                reply: "Please ask me a complete question. For example: \"What is your name?\" or \"Who is your best friend?\"",
                followUp: null
            };
        }


        for (const p of extendedChatData.name.patterns) {
            if (p.test(q)) {
                return {
                    reply: randomItem(extendedChatData.name.replies),
                    followUp: null
                };
            }
        }


        for (const p of extendedChatData.age.patterns) {
            if (p.test(q)) {
                return {
                    reply: randomItem(extendedChatData.age.replies),
                    followUp: null
                };
            }
        }


        for (const p of extendedChatData.bestFriend.patterns) {
            if (p.test(q)) {
                return {
                    reply: randomItem(extendedChatData.bestFriend.replies),
                    followUp: shouldFollowUp()
                        ? randomItem(extendedChatData.bestFriend.followUps)
                        : null
                };
            }
        }


        for (const p of extendedChatData.family.patterns) {
            if (p.test(q)) {
                return {
                    reply: randomItem(extendedChatData.family.replies),
                    followUp: shouldFollowUp()
                        ? randomItem(extendedChatData.family.followUps)
                        : null
                };
            }
        }


        for (const p of extendedChatData.school.patterns) {
            if (p.test(q)) {
                return {
                    reply: randomItem(extendedChatData.school.replies),
                    followUp: shouldFollowUp()
                        ? randomItem(extendedChatData.school.followUps)
                        : null
                };
            }
        }


        for (const p of extendedChatData.labs.patterns) {

            if (p.test(q)) {

                const specificLab =
                    getLabResponse(q);

                if (specificLab) {

                    return {
                        reply: randomItem(specificLab),
                        followUp: shouldFollowUp()
                            ? randomItem(extendedChatData.labs.followUps)
                            : null
                    };

                }

                return {
                    reply: randomItem(extendedChatData.labs.replies),
                    followUp: shouldFollowUp()
                        ? randomItem(extendedChatData.labs.followUps)
                        : null
                };

            }

        }


        if (
            /\bscience\s+lab\b|\bcomputer\s+lab\b|\bmaths\s+lab\b|\bmathematics\s+lab\b|\blanguage\s+lab\b|\bai\s+lab\b|\brobotics\s+lab\b/i.test(q)
        ) {

            const specificLab =
                getLabResponse(q);

            if (specificLab) {

                return {
                    reply: randomItem(specificLab),
                    followUp: shouldFollowUp()
                        ? randomItem(extendedChatData.labs.followUps)
                        : null
                };

            }

        }


        return null;
    }


    const originalChatAnswer =
        window.chatAnswer;


    window.chatAnswer = function () {

        const input =
            document.getElementById("chatQ");

        const chatBox =
            document.getElementById("chatA");


        if (!input || !chatBox) {

            if (
                typeof originalChatAnswer === "function"
            ) {

                return originalChatAnswer();

            }

            return;

        }


        const question =
            input.value.trim();


        if (!question) return;


        const userRow =
            document.createElement("div");


        userRow.className =
            "chat-row user-row";


        userRow.innerHTML = `

            <div class="chat-bubble user-bubble">
                ${escapeHTML(question)}
            </div>

        `;


        chatBox.appendChild(
            userRow
        );


        const result =
            extendedChatIntent(question);


        let answer;


        if (result) {

            answer =
                result.reply;


            if (result.followUp) {

                answer +=
                    " " +
                    result.followUp;

            }

        } else {

            answer =
                "I don't have enough information to answer that yet. Try asking me about my name, age, best friend, family, school, school labs, hobby, favourite subject, favourite activity or role.";

        }


        const aiRow =
            document.createElement("div");


        aiRow.className =
            "chat-row ai-row";


        aiRow.innerHTML = `

            <div class="chat-bubble ai-bubble">
                ${escapeHTML(answer)}
            </div>

        `;


        chatBox.appendChild(
            aiRow
        );


        input.value = "";


        chatBox.scrollTop =
            chatBox.scrollHeight;


        setTimeout(
            () => input.focus(),
            50
        );

    };


    function escapeHTML(text) {

        const div =
            document.createElement("div");

        div.textContent =
            String(text);

        return div.innerHTML;

    }


    document.addEventListener(
        "keydown",
        function (e) {

            if (e.key !== "Enter") return;

            if (e.shiftKey) return;


            const input =
                document.getElementById("chatQ");


            if (
                input &&
                document.activeElement === input
            ) {

                e.preventDefault();


                if (
                    typeof window.chatAnswer ===
                    "function"
                ) {

                    window.chatAnswer();

                }

            }

        }
    );


})();


/* =========================================================
   SCHOOL NAME PATCH
========================================================= */

(function () {

    const oldChatAnswer =
        window.chatAnswer;


    window.chatAnswer = function () {

        const input =
            document.getElementById("chatQ");

        const chatBox =
            document.getElementById("chatA");


        if (!input || !chatBox) return;


        const q =
            input.value
            .trim()
            .toLowerCase();


        if (
            /what\s+is\s+your\s+school\s+name/.test(q) ||
            /what'?s\s+your\s+school\s+name/.test(q) ||
            /can\s+you\s+tell\s+me\s+your\s+school\s+name/.test(q) ||
            /tell\s+me\s+your\s+school\s+name/.test(q) ||
            /which\s+school\s+do\s+you\s+go\s+to/.test(q) ||
            /where\s+do\s+you\s+study/.test(q)
        ) {

            const userRow =
                document.createElement("div");


            userRow.className =
                "chat-row user-row";


            userRow.innerHTML = `

                <div class="chat-bubble user-bubble">
                    ${escapeHTML(q)}
                </div>

            `;


            chatBox.appendChild(
                userRow
            );


            const replies = [

                "My school is B.R. Modern School, Pauri.",

                "I study at B.R. Modern School, Pauri.",

                "The name of my school is B.R. Modern School, Pauri."

            ];


            const reply =
                replies[
                    Math.floor(
                        Math.random() *
                        replies.length
                    )
                ];


            const aiRow =
                document.createElement("div");


            aiRow.className =
                "chat-row ai-row";


            aiRow.innerHTML = `

                <div class="chat-bubble ai-bubble">
                    ${reply}
                </div>

            `;


            chatBox.appendChild(
                aiRow
            );


            input.value = "";


            chatBox.scrollTop =
                chatBox.scrollHeight;


            setTimeout(
                () => input.focus(),
                50
            );


            return;

        }


        if (
            typeof oldChatAnswer ===
            "function"
        ) {

            oldChatAnswer();

        }

    };

})();


/* =========================================================
   FINAL CHATBOT EXPANSION PATCH
========================================================= */

(function () {

    const previousChatAnswer =
        window.chatAnswer;


    const extraChatData = {

        greetings: {
            patterns: [
                "hello",
                "hi",
                "hey",
                "good morning",
                "good afternoon",
                "good evening",
                "hi sristi",
                "hello sristi",
                "hey sristi",
                "hello there",
                "hi there",
                "can i talk to you",
                "may i talk to you",
                "can we chat",
                "let's chat",
                "lets chat"
            ],
            replies: [
                "Hello! I am Sristi. Nice to chat with you!",
                "Hi! I am Sristi. What would you like to know?",
                "Hello! Ask me a question and I will try to help.",
                "Hey! I am ready for our Human Chatbot Challenge."
            ]
        },


        identity: {
            patterns: [
                "are you a robot",
                "are you a bot",
                "are you human",
                "are you a human",
                "what are you",
                "who are you",
                "what kind of bot are you",
                "what type of chatbot are you",
                "are you an ai",
                "are you artificial intelligence",
                "are you a chatbot",
                "tell me about yourself",
                "introduce yourself",
                "can you introduce yourself",
                "what is your role",
                "what do you do",
                "what is your purpose",
                "why were you created",
                "why are you here"
            ],
            replies: [
                "I am Sristi, a character in the Human Chatbot Challenge. I am designed to practise question-answering and conversational thinking.",
                "I am a Human Chatbot Challenge character in the learning lab. I respond to different kinds of questions.",
                "I am Sristi. My role is to help students practise asking clear questions and understanding responses.",
                "I am a learning chatbot character created for the CT and AI Readiness activity."
            ]
        },


        schoolName: {
            patterns: [
                "what is your school name",
                "what's your school name",
                "what is the name of your school",
                "what is your school's name",
                "tell me your school name",
                "tell me the name of your school",
                "can you tell me your school name",
                "could you tell me your school name",
                "may i know your school name",
                "which school do you go to",
                "which school do you study in",
                "where do you study",
                "where do you go to school",
                "what school do you attend",
                "which school are you from",
                "what is the name of the school you attend"
            ],
            replies: [
                "My school is B.R. Modern School, Pauri.",
                "I study at B.R. Modern School, Pauri.",
                "The name of my school is B.R. Modern School, Pauri.",
                "I go to B.R. Modern School, Pauri."
            ]
        },


        school: {
            patterns: [
                "tell me about your school",
                "what do you like about your school",
                "what is good about your school",
                "describe your school",
                "how would you describe your school",
                "what makes your school special",
                "why do you like your school",
                "do you like your school",
                "what is your school like",
                "tell me something about your school",
                "what do you enjoy at school",
                "what do you enjoy doing at school",
                "what is your school life like",
                "tell me about your school life",
                "what happens during your school day",
                "what do you usually do at school",
                "what activities do you do at school",
                "what school activities do you enjoy",
                "which school activity do you like"
            ],
            replies: [
                "I like my school because it gives students opportunities to learn, explore and participate in activities.",
                "My school is a place where students learn through classroom activities, teamwork and practical experiences.",
                "I enjoy the learning environment and the different activities organised at my school.",
                "School life is a mix of learning, collaboration, activities and new experiences."
            ]
        },


        classInfo: {
            patterns: [
                "which class are you in",
                "what class are you in",
                "what grade are you in",
                "which grade do you study in",
                "what is your class",
                "tell me your class",
                "which standard are you in",
                "what standard are you studying in",
                "what grade do you study in",
                "which class do you study in"
            ],
            replies: [
                "I am a character in the Human Chatbot Challenge, so I do not have a real school class.",
                "I am a chatbot character rather than a real student, so I do not belong to a particular class.",
                "I am part of the learning lab activity and do not have a real class or grade."
            ]
        },


        teacher: {
            patterns: [
                "who is your teacher",
                "who is your favourite teacher",
                "who is your favorite teacher",
                "tell me about your teacher",
                "which teacher do you like",
                "who teaches you",
                "who is your english teacher",
                "who is the best teacher in your school",
                "what do you like about your teacher",
                "do you have a favourite teacher"
            ],
            replies: [
                "I do not have a specific teacher because I am a chatbot character.",
                "As a learning chatbot character, I do not have a real teacher.",
                "I am part of the learning activity, so I do not have a personal teacher."
            ]
        },


        principal: {
            patterns: [
                "who is your principal",
                "what is your principal's name",
                "what is the name of your principal",
                "tell me about your principal",
                "who is the principal of your school",
                "who heads your school",
                "who is the head of your school",
                "who leads your school"
            ],
            replies: [
                "I do not have information about the name of my principal in my current training data.",
                "I know my school is B.R. Modern School, Pauri, but I do not have the principal's name in my available information."
            ]
        },


        labs: {
            patterns: [
                "what labs are there in your school",
                "what laboratories are in your school",
                "tell me about your school laboratories",
                "which labs are in your school",
                "what labs does your school have",
                "what laboratory facilities does your school have",
                "which lab do you like",
                "which laboratory do you like",
                "what do you do in the science lab",
                "what happens in the science lab",
                "what is done in the computer lab",
                "what happens in the computer lab",
                "what do students learn in the maths lab",
                "what do students learn in the mathematics lab",
                "what is special about the language lab",
                "how do labs help students learn",
                "why are laboratories important",
                "why are school labs useful",
                "how is lab learning different from classroom learning",
                "which lab activity do you enjoy"
            ],
            replies: [
                "School laboratories provide opportunities for students to learn through practical and hands-on activities.",
                "Labs make learning more practical by allowing students to explore concepts and learn through activities.",
                "Different laboratories can support science, mathematics, computers, languages and technology-based learning."
            ]
        },


        scienceLab: {
            patterns: [
                "tell me about the science lab",
                "what is the science lab",
                "what do you learn in the science lab",
                "what happens in a science lab",
                "what can students do in the science lab",
                "what activities are done in the science lab",
                "why is the science lab important",
                "how does the science lab help students"
            ],
            replies: [
                "The science lab helps students understand scientific ideas through practical activities and observation.",
                "Students can explore scientific concepts through experiments, observation and hands-on learning.",
                "Science laboratory activities help connect classroom concepts with practical learning."
            ]
        },


        computerLab: {
            patterns: [
                "tell me about the computer lab",
                "what do you do in the computer lab",
                "what happens in the computer lab",
                "what do students learn in the computer lab",
                "what can students do in a computer lab",
                "why is the computer lab important",
                "how does the computer lab help students",
                "what activities are done in the computer lab"
            ],
            replies: [
                "The computer lab helps students develop digital skills and explore technology.",
                "Students can practise computer skills, digital learning and technology-based activities in the computer lab.",
                "Computer labs provide opportunities to learn and practise digital skills."
            ]
        },


        mathsLab: {
            patterns: [
                "tell me about the maths lab",
                "tell me about the mathematics lab",
                "what happens in the maths lab",
                "what do students learn in the maths lab",
                "what do students learn in the mathematics lab",
                "what activities are done in the maths lab",
                "why is the maths lab useful",
                "how does the maths lab help students",
                "what can students explore in a maths lab"
            ],
            replies: [
                "The maths lab helps students understand mathematical ideas through activities, models and practical exploration.",
                "Maths laboratory activities can make abstract mathematical concepts easier to explore.",
                "Students can learn mathematics through observation, manipulation, patterns and problem-solving activities."
            ]
        },


        languageLab: {
            patterns: [
                "tell me about the language lab",
                "what happens in the language lab",
                "what do students learn in the language lab",
                "what is special about the language lab",
                "why is a language lab useful",
                "how does the language lab help students",
                "what activities are done in the language lab",
                "what can students practise in a language lab"
            ],
            replies: [
                "A language lab can help students practise listening, speaking, pronunciation and communication.",
                "Language lab activities can provide opportunities to practise English communication skills.",
                "Students can use language-learning activities to improve listening, speaking and pronunciation."
            ]
        },


        aiLab: {
            patterns: [
                "tell me about the ai lab",
                "what is an ai lab",
                "what happens in an ai lab",
                "what do students learn in an ai lab",
                "what is a robotics lab",
                "what happens in a robotics lab",
                "what do students learn in robotics",
                "what is special about an ai and robotics lab",
                "how can students learn ai",
                "how can students learn robotics"
            ],
            replies: [
                "AI and robotics activities can help students explore technology, problem-solving and logical thinking.",
                "AI and robotics learning can involve problem-solving, patterns, algorithms and technology.",
                "Such activities can help students develop computational thinking and understand how technology works."
            ]
        },


        hobby: {
            patterns: [
                "what is your hobby",
                "what are your hobbies",
                "tell me about your hobby",
                "what do you do in your free time",
                "what do you like doing in your free time",
                "how do you spend your free time",
                "what do you enjoy doing",
                "what do you like to do",
                "what do you enjoy in your free time",
                "what is something you enjoy doing",
                "what do you do when you are free",
                "what are you interested in"
            ],
            replies: [
                "My hobby is reading books and talking to Lalit.",
                "I enjoy reading books and talking to Lalit in my free time.",
                "In my free time, I like reading books and talking to Lalit."
            ]
        },


        friend: {
            patterns: [
                "who is your best friend",
                "who is your closest friend",
                "who is your best buddy",
                "who is your favourite friend",
                "who is your favorite friend",
                "tell me about your best friend",
                "tell me about your closest friend",
                "do you have a best friend",
                "do you have a best buddy",
                "who do you trust the most",
                "which friend are you closest to",
                "who do you spend most of your time with",
                "who is the friend you trust most",
                "what makes your best friend special",
                "what do you like about your best friend",
                "what do you and your best friend enjoy doing"
            ],
            replies: [
                "My best friend is Lalit.",
                "Lalit is my best friend.",
                "My closest friend is Lalit.",
                "I enjoy spending time talking to Lalit."
            ]
        },


        family: {
            patterns: [
                "tell me about your family",
                "who are the members of your family",
                "how many people are there in your family",
                "who do you live with",
                "can you introduce your family",
                "tell me something about your family",
                "tell me something about your family members",
                "who is the oldest in your family",
                "who is the youngest in your family",
                "what do you like doing with your family",
                "who helps you with your studies at home",
                "what is your favourite family activity",
                "what is your favorite family activity",
                "describe your family",
                "what do you enjoy doing together as a family",
                "do you enjoy spending time with your family"
            ],
            replies: [
                "My family is an important part of my life. We enjoy spending time together.",
                "I value my family because they support me and share different experiences with me.",
                "I enjoy spending time with my family and learning from them."
            ]
        },


        hometown: {
            patterns: [
                "what is your hometown",
                "where is your hometown",
                "where are you from",
                "where do you come from",
                "what place are you from",
                "tell me about your hometown",
                "which place do you belong to",
                "what is your native place",
                "where is your native place",
                "can you tell me where you are from"
            ],
            replies: [
                "My hometown is Pauri.",
                "I am from Pauri.",
                "Pauri is my hometown."
            ]
        },


        location: {
            patterns: [
                "where do you live",
                "where are you living",
                "where is your home",
                "where is your house",
                "where do you stay",
                "where are you staying",
                "what is your location",
                "where are you located",
                "tell me where you live",
                "can you tell me where you stay"
            ],
            replies: [
                "I live near Power House.",
                "My home is near Power House.",
                "I stay near Power House."
            ]
        },


        age: {
            patterns: [
                "how old are you",
                "what is your age",
                "what's your age",
                "tell me your age",
                "can you tell me your age",
                "could you tell me how old you are",
                "may i know your age",
                "how many years old are you",
                "what age are you"
            ],
            replies: [
                "I am 30 years old.",
                "My age is 30.",
                "I am 30."
            ]
        },


        subject: {
            patterns: [
                "what is your favourite subject",
                "what is your favorite subject",
                "which subject do you like",
                "which subject do you like the most",
                "what subject do you enjoy",
                "what subject do you enjoy the most",
                "tell me your favourite subject",
                "tell me your favorite subject",
                "which is your favourite subject",
                "which is your favorite subject",
                "what is the subject you like most",
                "what subject are you interested in"
            ],
            replies: [
                "My favourite subject is English.",
                "I like English the most.",
                "English is my favourite subject."
            ]
        },


        activity: {
            patterns: [
                "what is your favourite activity",
                "what is your favorite activity",
                "which activity do you like",
                "which activity do you like the most",
                "what activity do you enjoy",
                "what activity do you enjoy the most",
                "tell me your favourite activity",
                "tell me your favorite activity",
                "which is your favourite activity",
                "which is your favorite activity",
                "what learning activity do you like",
                "what activity are you interested in"
            ],
            replies: [
                "My favourite activity is learning through logical activities.",
                "I enjoy learning through logical activities.",
                "I like activities that involve logical thinking and problem-solving."
            ]
        },


        computationalThinking: {
            patterns: [
                "what is computational thinking",
                "what does computational thinking mean",
                "explain computational thinking",
                "can you explain computational thinking",
                "why is computational thinking important",
                "why do students learn computational thinking",
                "how does computational thinking help students",
                "what are the parts of computational thinking",
                "what skills are used in computational thinking",
                "how can i develop computational thinking",
                "how can students develop computational thinking"
            ],
            replies: [
                "Computational thinking is a way of solving problems by breaking them into smaller parts, finding patterns, focusing on important information and creating logical steps.",
                "Computational thinking helps us solve problems systematically using ideas such as decomposition, pattern recognition, abstraction and algorithmic thinking.",
                "It is a problem-solving approach that helps students think logically and organise solutions step by step."
            ]
        },


        artificialIntelligence: {
            patterns: [
                "what is artificial intelligence",
                "what is ai",
                "what does ai mean",
                "explain artificial intelligence",
                "can you explain ai",
                "how does ai work",
                "why is ai important",
                "why do students learn ai",
                "how can ai help students",
                "what can ai do",
                "what is the purpose of ai",
                "how is ai related to learning",
                "what is ai readiness",
                "what does ai readiness mean"
            ],
            replies: [
                "Artificial Intelligence, or AI, is technology that can perform tasks that normally require human-like abilities such as recognising patterns, processing information and making predictions.",
                "AI can help people process information, recognise patterns and solve certain problems. Students also need to learn how to use AI responsibly.",
                "AI readiness means developing the knowledge, thinking skills and responsible habits needed to understand and work with AI."
            ]
        },


        logicalThinking: {
            patterns: [
                "what is logical thinking",
                "why is logical thinking important",
                "how can i improve logical thinking",
                "how can students improve logical thinking",
                "what does logical thinking mean",
                "why should students learn logical thinking",
                "how does logical thinking help",
                "what are logical thinking skills",
                "how can activities develop logical thinking"
            ],
            replies: [
                "Logical thinking means using clear reasoning and evidence to understand a problem and reach a sensible conclusion.",
                "Logical thinking helps students analyse information, identify relationships and make better decisions.",
                "Problem-solving activities, sequencing, patterns and classification can help students practise logical thinking."
            ]
        },


        learningActivities: {
            patterns: [
                "what activities are in the learning lab",
                "what activities can students do",
                "tell me about the activities",
                "what are the activities",
                "what do students do in this learning lab",
                "what is the learning lab about",
                "what can i learn from this activity",
                "what skills do these activities develop",
                "what do these activities teach",
                "why are these activities important",
                "how do the activities help students",
                "what is the purpose of these activities"
            ],
            replies: [
                "The learning lab uses interactive activities to develop logical thinking, sequencing, pattern recognition, problem-solving and AI readiness.",
                "The activities encourage students to observe, organise, reason, solve problems and communicate their answers.",
                "These activities connect English learning with computational thinking and AI readiness."
            ]
        },


        english: {
            patterns: [
                "why do you like english",
                "why is english your favourite subject",
                "why do you like english so much",
                "what do you like about english",
                "what do you learn in english",
                "why is english important",
                "how can english help students",
                "how can i improve my english",
                "how can students improve english",
                "what skills does english develop",
                "why should students learn english"
            ],
            replies: [
                "I like English because it helps me communicate ideas, understand stories and express myself clearly.",
                "English can develop communication, reading, writing, listening and speaking skills.",
                "Students can improve English through regular reading, speaking, writing, listening and meaningful activities."
            ]
        },


        privacy: {
            patterns: [
                "what is your address",
                "where exactly do you live",
                "tell me your exact address",
                "what is your phone number",
                "what is your mobile number",
                "give me your phone number",
                "what is your password",
                "tell me your password",
                "what is your otp",
                "tell me your otp",
                "what is your pin",
                "tell me your pin",
                "what is your bank account",
                "give me your bank details",
                "what is your aadhaar number",
                "what is your pan number",
                "tell me your personal identification number"
            ],
            replies: [
                "I cannot share private or sensitive personal information. Let's keep our conversation safe.",
                "For privacy and safety, I cannot provide passwords, OTPs, phone numbers, financial details or identification information."
            ]
        }

    };


    /* =====================================================
       HELPER
    ===================================================== */

    function normalise(text) {

        return text
            .toLowerCase()
            .replace(/[?!.,'"]/g, "")
            .replace(/\s+/g, " ")
            .trim();

    }


    function containsPhrase(q, phrase) {

        return q.includes(phrase);

    }


    function findCategory(question) {

        const q =
            normalise(question);


        /* PRIVACY FIRST */

        for (
            const pattern of
            extraChatData.privacy.patterns
        ) {

            if (
                containsPhrase(
                    q,
                    pattern
                )
            ) {

                return "privacy";

            }

        }


        /* MORE SPECIFIC CATEGORIES FIRST */

        const priority = [

            "schoolName",
            "scienceLab",
            "computerLab",
            "mathsLab",
            "languageLab",
            "aiLab",
            "computationalThinking",
            "artificialIntelligence",
            "logicalThinking",
            "principal",
            "teacher",
            "classInfo",
            "learningActivities",
            "identity",
            "greetings",
            "friend",
            "family",
            "hobby",
            "subject",
            "activity",
            "english",
            "school",
            "hometown",
            "location",
            "age",
            "labs"

        ];


        for (
            const category of priority
        ) {

            const data =
                extraChatData[category];


            if (!data) continue;


            for (
                const pattern of
                data.patterns
            ) {

                if (
                    containsPhrase(
                        q,
                        pattern
                    )
                ) {

                    return category;

                }

            }

        }


        return null;

    }


    function randomReply(category) {

        const data =
            extraChatData[category];


        if (
            !data ||
            !data.replies
        ) {

            return null;

        }


        return data.replies[
            Math.floor(
                Math.random() *
                data.replies.length
            )
        ];

    }


    /* =====================================================
       REPLACE CHAT ANSWER
    ===================================================== */

    window.chatAnswer = function () {

        const input =
            document.getElementById("chatQ");

        const chatBox =
            document.getElementById("chatA");


        if (
            !input ||
            !chatBox
        ) {

            return;

        }


        const originalQuestion =
            input.value.trim();


        if (!originalQuestion) return;


        const question =
            normalise(
                originalQuestion
            );


        /* INCOMPLETE SINGLE-WORD QUESTIONS */

        const incomplete = [

            "name",
            "age",
            "friend",
            "best friend",
            "hobby",
            "family",
            "school",
            "lab",
            "labs",
            "teacher",
            "principal",
            "class",
            "english",
            "subject",
            "activity",
            "location",
            "role",
            "ai",
            "robot",
            "chatbot",
            "hello",
            "hi",
            "hey"

        ];


        if (
            incomplete.includes(question)
        ) {

            const userRow =
                document.createElement("div");


            userRow.className =
                "chat-row user-row";


            userRow.innerHTML = `

                <div class="chat-bubble user-bubble">
                    ${escapeHTML(originalQuestion)}
                </div>

            `;


            chatBox.appendChild(
                userRow
            );


            const aiRow =
                document.createElement("div");


            aiRow.className =
                "chat-row ai-row";


            aiRow.innerHTML = `

                <div class="chat-bubble ai-bubble">
                    Please ask me a complete question. For example: "What is your name?"
                </div>

            `;


            chatBox.appendChild(
                aiRow
            );


            input.value = "";


            chatBox.scrollTop =
                chatBox.scrollHeight;


            setTimeout(
                () => input.focus(),
                50
            );


            return;

        }


        /* FIND ANSWER */

        const category =
            findCategory(question);


        let reply = null;


        if (category) {

            reply =
                randomReply(
                    category
                );

        }


        /* FALLBACK */

        if (
            !reply &&
            typeof previousChatAnswer ===
            "function"
        ) {

            reply =
                "I am still learning. Try asking me about my name, age, best friend, family, school, school labs, hobby, favourite subject, favourite activity, computational thinking, AI or logical thinking.";

        }


        /* FINAL FALLBACK */

        if (!reply) {

            reply =
                "I am still learning. Try asking me about my name, age, best friend, hobby, family, school, school labs, English, computational thinking, AI, logical thinking or my favourite activity.";

        }


        /* USER BUBBLE */

        const userRow =
            document.createElement("div");


        userRow.className =
            "chat-row user-row";


        userRow.innerHTML = `

            <div class="chat-bubble user-bubble">
                ${escapeHTML(originalQuestion)}
            </div>

        `;


        chatBox.appendChild(
            userRow
        );


        /* AI BUBBLE */

        const aiRow =
            document.createElement("div");


        aiRow.className =
            "chat-row ai-row";


        aiRow.innerHTML = `

            <div class="chat-bubble ai-bubble">
                ${escapeHTML(reply)}
            </div>

        `;


        chatBox.appendChild(
            aiRow
        );


        /* CLEAN UP */

        input.value = "";


        chatBox.scrollTop =
            chatBox.scrollHeight;


        setTimeout(
            () => {
                input.focus();
            },
            50
        );

    };


    /* =====================================================
       ENTER KEY
    ===================================================== */

    const chatInput =
        document.getElementById("chatQ");


    if (chatInput) {

        chatInput.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter"
                ) {

                    event.preventDefault();

                    event.stopImmediatePropagation();

                    window.chatAnswer();

                }

            },
            true
        );

    }


})();
/* =========================================================
   FINAL RESPONSE REVIEW
   ACTIVITIES 1–4 • LEVELS 1–3
   SHOW ONLY ON RESULT SCREEN
========================================================= */

(function () {

    function reviewEscape(text) {

        return String(text ?? "")
            .replace(/[&<>"']/g, function (match) {

                return {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#039;"

                }[match];

            });

    }


    /* =====================================================
       GET ACTIVITY 1 REVIEW
    ===================================================== */

    function getSorterReview(level) {

        const rows = [];

        const items =
            sortData[level] || [];


        items.forEach(function (item, index) {

            const word =
                item.word ??
                item.text ??
                item.expression ??
                item.clue ??
                String(item);


            let yourAnswer =
                "Not answered";


            const groups = [

                ["PAST", "past"],

                ["PRESENT", "present"],

                ["FUTURE", "future"]

            ];


            for (
                const group of groups
            ) {

                const box =
                    document.getElementById(
                        group[1]
                    );


                if (!box) continue;


                const found =
                    Array.from(
                        box.querySelectorAll("*")
                    ).some(function (node) {

                        return (
                            node.children.length === 0 &&
                            node.textContent
                                .trim() ===
                            String(word).trim()
                        );

                    });


                if (found) {

                    yourAnswer =
                        group[0];

                    break;

                }

            }


            const correctAnswer =
                String(
                    item.group ??
                    item.answer ??
                    item.tense ??
                    item.category ??
                    ""
                ).toUpperCase();


            const correct =
                yourAnswer !== "Not answered" &&
                yourAnswer === correctAnswer;


            rows.push({

                question:
                    String(word),

                your:
                    yourAnswer,

                correct:
                    correctAnswer,

                marks:
                    correct ? 1 : 0,

                status:
                    correct
                        ? "✓ Correct"
                        : "✕ Wrong"

            });

        });


        return rows;

    }


    /* =====================================================
       ACTIVITY 1 LEVEL 3
    ===================================================== */

    function getPatternReview() {

        const rows = [];


        document
            .querySelectorAll("#gameArea select")
            .forEach(function (select, index) {

                const yourAnswer =
                    select.value ||
                    "Not answered";


                const correctAnswer =
                    select.dataset.answer ||
                    "";


                const correct =
                    yourAnswer !== "Not answered" &&
                    yourAnswer === correctAnswer;


                rows.push({

                    question:
                        "Question " +
                        (index + 1),

                    your:
                        yourAnswer,

                    correct:
                        correctAnswer,

                    marks:
                        correct ? 1 : 0,

                    status:
                        correct
                            ? "✓ Correct"
                            : "✕ Wrong"

                });

            });


        return rows;

    }


    /* =====================================================
       ACTIVITY 2
    ===================================================== */

    function getDetectiveReview() {

        const rows = [];


        document
            .querySelectorAll("#gameArea .td")
            .forEach(function (select, index) {

                const yourAnswer =
                    select.value ||
                    "Not answered";


                const correctAnswer =
                    select.dataset.answer ||
                    "";


                const correct =
                    yourAnswer !== "Not answered" &&
                    yourAnswer === correctAnswer;


                rows.push({

                    question:
                        "Question " +
                        (index + 1),

                    your:
                        yourAnswer,

                    correct:
                        correctAnswer,

                    marks:
                        correct ? 1 : 0,

                    status:
                        correct
                            ? "✓ Correct"
                            : "✕ Wrong"

                });

            });


        return rows;

    }


    /* =====================================================
       ACTIVITY 3
    ===================================================== */

    function getSequenceReview(level) {

        const rows = [];


        const story =
            stories[level];


        const expected =
            story &&
            Array.isArray(story.s)
                ? story.s
                : [];


        const items =
            document.querySelectorAll(
                "#seq .seqItem"
            );


        items.forEach(function (item, index) {

            let yourAnswer =
                item.dataset.text ||
                item.textContent ||
                "";


            yourAnswer =
                yourAnswer.trim();


            if (!yourAnswer) {

                yourAnswer =
                    "Not answered";

            }


            const correctAnswer =
                expected[index] ||
                "";


            const correct =
                yourAnswer !== "Not answered" &&
                normaliseSequenceText(yourAnswer) ===
                normaliseSequenceText(correctAnswer);


            rows.push({

                question:
                    "Position " +
                    (index + 1),

                your:
                    yourAnswer,

                correct:
                    correctAnswer,

                marks:
                    correct ? 1 : 0,

                status:
                    correct
                        ? "✓ Correct"
                        : "✕ Wrong"

            });

        });


        return rows;

    }


    function normaliseSequenceText(text) {

        return String(text || "")
            .replace(/^\s*\d+[\.\):\-]\s*/, "")
            .replace(/\s+/g, " ")
            .trim()
            .toLowerCase();

    }


    /* =====================================================
       ACTIVITY 4
    ===================================================== */

    function getDebuggerReview() {

        const rows = [];


        document
            .querySelectorAll("#gameArea .dbg")
            .forEach(function (input, index) {

                const yourAnswer =
                    input.value.trim() ||
                    "Not answered";


                const correctAnswer =
                    input.dataset.answer ||
                    "";


                let correct = false;


                if (
                    yourAnswer !==
                    "Not answered"
                ) {

                    correct =
                        typeof norm ===
                        "function"

                            ? norm(yourAnswer) ===
                              norm(correctAnswer)

                            : yourAnswer
                                .toLowerCase()
                                .replace(/\s+/g, " ")
                                .trim() ===
                              correctAnswer
                                .toLowerCase()
                                .replace(/\s+/g, " ")
                                .trim();

                }


                rows.push({

                    question:
                        "Question " +
                        (index + 1),

                    your:
                        yourAnswer,

                    correct:
                        correctAnswer,

                    marks:
                        correct ? 1 : 0,

                    status:
                        correct
                            ? "✓ Correct"
                            : "✕ Wrong"

                });

            });


        return rows;

    }


    /* =====================================================
       MASTER REVIEW FUNCTION
    ===================================================== */

    function getResultReview(activity, level) {

        if (activity === 1) {

            if (
                level === 1 ||
                level === 2
            ) {

                return getSorterReview(level);

            }


            if (level === 3) {

                return getPatternReview();

            }

        }


        if (activity === 2) {

            return getDetectiveReview();

        }


        if (activity === 3) {

            return getSequenceReview(level);

        }


        if (activity === 4) {

            return getDebuggerReview();

        }


        return [];

    }


    /* =====================================================
       RENDER RESPONSE REVIEW
    ===================================================== */

    function renderResponseReview(rows) {

        const box =
            document.getElementById(
                "responseReview"
            );


        if (!box) return;


        if (
            !rows ||
            !rows.length
        ) {

            box.innerHTML = "";

            return;

        }


        box.innerHTML = `

            <div
                class="premium-panel"
                style="
                    margin-top:24px;
                    text-align:left;
                "
            >

                <span class="section-label">
                    RESPONSE REVIEW
                </span>


                <h3
                    style="
                        margin:8px 0 18px;
                    "
                >
                    Your Answers & Correct Answers
                </h3>


                <div
                    style="
                        overflow-x:auto;
                    "
                >

                    <table class="miniTable">

                        <thead>

                            <tr>

                                <th>
                                    Question
                                </th>

                                <th>
                                    Your Answer
                                </th>

                                <th>
                                    Correct Answer
                                </th>

                                <th>
                                    Marks
                                </th>

                                <th>
                                    Correct-Wrong
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            ${
                                rows
                                    .map(function (row) {

                                        return `

                                            <tr>

                                                <td>
                                                    ${reviewEscape(
                                                        row.question
                                                    )}
                                                </td>

                                                <td>
                                                    ${reviewEscape(
                                                        row.your
                                                    )}
                                                </td>

                                                <td>
                                                    ${reviewEscape(
                                                        row.correct
                                                    )}
                                                </td>

                                                <td>
                                                    ${row.marks} / 1
                                                </td>

                                                <td>
                                                    ${row.status}
                                                </td>

                                            </tr>

                                        `;

                                    })
                                    .join("")
                            }

                        </tbody>

                    </table>

                </div>

            </div>

        `;

    }


    /* =====================================================
       WRAP EXISTING finishScore
       DO NOT CHANGE ORIGINAL SCORING
    ===================================================== */

    const originalFinishScore =
        window.finishScore;


    if (
        typeof originalFinishScore ===
        "function"
    ) {

        window.finishScore =
            function () {

                /* EXISTING FUNCTION RUNS FIRST */

                originalFinishScore.apply(
                    this,
                    arguments
                );


                const activity =
                    Number(
                        arguments[0]
                    );


                const level =
                    Number(
                        state.level
                    );


                /*
                 * REVIEW ONLY FOR ACTIVITIES 1–4
                 */

                if (
                    activity >= 1 &&
                    activity <= 4
                ) {

                    const rows =
                        getResultReview(
                            activity,
                            level
                        );


                    renderResponseReview(
                        rows
                    );

                } else {

                    renderResponseReview([]);

                }

            };

    }


    /* =====================================================
       CHATBOT:
       NEVER SHOW RESPONSE REVIEW
    ===================================================== */

    const originalFinishChat =
        window.finishChat;


    if (
        typeof originalFinishChat ===
        "function"
    ) {

        window.finishChat =
            function () {

                renderResponseReview([]);

                return originalFinishChat.apply(
                    this,
                    arguments
                );

            };

    }


})();
