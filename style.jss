:root{
--bg:#050816;
--bg-soft:#0a1022;
--panel:rgba(15,24,48,.72);
--panel-strong:rgba(18,29,58,.92);
--border:rgba(255,255,255,.10);
--border-bright:rgba(255,255,255,.18);
--text:#f4f7ff;
--muted:#9ba8c5;
--muted-light:#c3cbe0;
--accent:#6ee7ff;
--accent-2:#9b8cff;
--accent-3:#56f0b0;
--danger:#ff708d;
--warning:#ffd166;
--success:#63e6be;
--shadow:0 30px 80px rgba(0,0,0,.35);
--radius:24px
}

*{
box-sizing:border-box
}

html{
scroll-behavior:smooth
}

body{
margin:0;
background:
radial-gradient(circle at 10% 10%,rgba(110,231,255,.08),transparent 25%),
radial-gradient(circle at 90% 20%,rgba(155,140,255,.10),transparent 28%),
linear-gradient(135deg,#050816,#080d1d 55%,#050816);
color:var(--text);
font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
line-height:1.6;
min-height:100vh
}

/* =========================================================
   BACKGROUND
========================================================= */

.background{
position:fixed;
inset:0;
overflow:hidden;
pointer-events:none;
z-index:-2
}

.grid-overlay{
position:absolute;
inset:0;
background-image:
linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),
linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);
background-size:48px 48px;
mask-image:linear-gradient(to bottom,rgba(0,0,0,.8),transparent 90%)
}

.orb{
position:absolute;
border-radius:50%;
filter:blur(40px);
opacity:.55
}

.orb-one{
width:360px;
height:360px;
background:rgba(110,231,255,.10);
top:-120px;
left:-100px
}

.orb-two{
width:420px;
height:420px;
background:rgba(155,140,255,.12);
right:-150px;
top:160px
}

.orb-three{
width:330px;
height:330px;
background:rgba(86,240,176,.07);
left:35%;
bottom:-180px
}

.floating-code{
position:absolute;
color:rgba(110,231,255,.09);
font:700 50px/1 ui-monospace,monospace;
animation:floatCode 9s ease-in-out infinite
}

.code-one{
left:8%;
top:30%
}

.code-two{
right:8%;
top:65%;
animation-delay:2s
}

.code-three{
left:48%;
top:12%;
font-size:38px;
animation-delay:4s
}

.code-four{
right:22%;
top:38%;
font-size:34px;
animation-delay:1s
}

@keyframes floatCode{
50%{
transform:translateY(-20px) rotate(4deg)
}
}

/* =========================================================
   HEADER
========================================================= */

.top-header{
position:sticky;
top:0;
z-index:50;
display:flex;
align-items:center;
justify-content:space-between;
gap:20px;
padding:18px 5%;
background:rgba(5,8,22,.76);
backdrop-filter:blur(22px);
border-bottom:1px solid var(--border)
}

.brand{
display:flex;
align-items:center;
gap:14px
}

.school-logo{
width:50px;
height:50px;
border-radius:16px;
display:grid;
place-items:center;
font-weight:900;
background:linear-gradient(135deg,var(--accent),var(--accent-2));
color:#071020;
box-shadow:0 0 30px rgba(110,231,255,.18)
}

.brand h1{
font-size:17px;
margin:0;
letter-spacing:.4px
}

.brand p{
margin:2px 0 0;
color:var(--muted);
font-size:12px
}

.header-badge,
.bot-status{
border:1px solid var(--border);
background:rgba(255,255,255,.045);
padding:9px 14px;
border-radius:999px;
color:var(--muted-light);
font-size:12px;
font-weight:700;
letter-spacing:.5px
}

.live-dot{
display:inline-block;
width:8px;
height:8px;
background:var(--accent-3);
border-radius:50%;
margin-right:8px;
box-shadow:0 0 12px var(--accent-3)
}

/* =========================================================
   NAVIGATION
========================================================= */

.activity-navigation{
position:sticky;
top:87px;
z-index:40;
display:flex;
justify-content:center;
gap:8px;
flex-wrap:wrap;
padding:12px 5%;
background:rgba(5,8,22,.60);
backdrop-filter:blur(18px);
border-bottom:1px solid var(--border)
}

.activity-tab,
.tab{
border:1px solid transparent;
background:transparent;
color:var(--muted-light);
padding:10px 15px;
border-radius:14px;
cursor:pointer;
font-weight:700;
transition:.25s
}

.activity-tab:hover,
.tab:hover{
color:var(--text);
background:rgba(255,255,255,.05)
}

.activity-tab.active,
.tab.active{
color:#04111d;
background:linear-gradient(135deg,var(--accent),#a8f1ff);
box-shadow:0 10px 30px rgba(110,231,255,.12)
}

.tab-icon{
margin-right:5px
}

/* =========================================================
   MAIN
========================================================= */

main{
width:min(1180px,92%);
margin:0 auto
}

.page{
display:none
}

.page.active{
display:block
}

.page-section{
padding:58px 0
}

/* =========================================================
   HERO
========================================================= */

.hero{
min-height:590px;
display:grid;
grid-template-columns:1.1fr .9fr;
align-items:center;
gap:40px;
padding:55px 0
}

.hero-content{
max-width:720px
}

.eyebrow,
.section-label{
font-size:11px;
letter-spacing:2.2px;
font-weight:900;
color:var(--accent);
text-transform:uppercase
}

.eyebrow span{
margin-right:8px
}

.hero h2{
font-size:clamp(46px,7vw,82px);
line-height:.98;
margin:18px 0 24px;
letter-spacing:-3px
}

.hero h2 span{
background:linear-gradient(90deg,var(--accent),var(--accent-2));
-webkit-background-clip:text;
background-clip:text;
color:transparent
}

.hero h2 strong{
display:block;
color:var(--accent-3)
}

.hero p{
font-size:18px;
color:var(--muted-light);
max-width:680px
}

.hero-pills{
display:flex;
gap:10px;
flex-wrap:wrap;
margin:26px 0
}

.hero-pills span,
.ct-tags span,
.mini-ct span{
border:1px solid var(--border);
background:rgba(255,255,255,.045);
padding:8px 12px;
border-radius:999px;
font-size:12px;
color:var(--muted-light)
}

/* =========================================================
   HERO VISUAL
========================================================= */

.hero-visual{
height:420px;
position:relative;
display:grid;
place-items:center
}

.brain-core{
width:190px;
height:190px;
border-radius:50%;
display:grid;
place-items:center;
align-content:center;
gap:6px;
background:
radial-gradient(
circle,
rgba(110,231,255,.24),
rgba(155,140,255,.12) 45%,
rgba(255,255,255,.025) 70%
);
border:1px solid var(--border-bright);
box-shadow:
0 0 80px rgba(110,231,255,.12),
inset 0 0 50px rgba(155,140,255,.08);
z-index:3
}

.brain-icon{
font-size:62px;
filter:drop-shadow(0 0 18px rgba(110,231,255,.3))
}

.brain-core span{
font-size:11px;
letter-spacing:3px;
color:var(--accent);
font-weight:900
}

.brain-orbit{
position:absolute;
border:1px solid rgba(110,231,255,.18);
border-radius:50%;
transform:rotate(-18deg)
}

.orbit-a{
width:310px;
height:170px;
animation:spin 9s linear infinite
}

.orbit-b{
width:230px;
height:330px;
transform:rotate(55deg);
border-color:rgba(155,140,255,.20);
animation:spin 12s linear infinite reverse
}

@keyframes spin{
to{
transform:rotate(342deg)
}
}

.node{
position:absolute;
padding:9px 12px;
border:1px solid var(--border-bright);
border-radius:12px;
background:rgba(10,16,34,.86);
font-weight:900;
color:var(--accent);
box-shadow:var(--shadow);
animation:nodeFloat 4s ease-in-out infinite
}

.node-1{
top:40px;
left:16%
}

.node-2{
top:23%;
right:12%;
animation-delay:1s
}

.node-3{
bottom:23%;
left:14%;
animation-delay:2s
}

.node-4{
bottom:35px;
right:20%;
animation-delay:3s
}

@keyframes nodeFloat{
50%{
transform:translateY(-8px)
}
}

/* =========================================================
   SECTION HEADINGS
========================================================= */

.section-heading{
margin:25px 0 30px
}

.section-heading h2,
.activity-header h2{
font-size:clamp(30px,4vw,46px);
line-height:1.05;
margin:10px 0
}

.section-heading h2 span,
.activity-header h2 span,
.reflection-section h2 span{
color:var(--accent)
}

.section-heading p,
.activity-header p{
color:var(--muted);
max-width:760px
}

/* =========================================================
   ACTIVITY CARDS
========================================================= */

.activity-cards{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:16px
}

.activity-card{
position:relative;
min-height:310px;
padding:25px;
border:1px solid var(--border);
background:
linear-gradient(
145deg,
rgba(18,29,58,.80),
rgba(10,16,34,.72)
);
border-radius:22px;
box-shadow:var(--shadow);
overflow:hidden;
transition:.3s
}

.activity-card:before{
content:"";
position:absolute;
width:140px;
height:140px;
right:-70px;
top:-70px;
border-radius:50%;
background:rgba(110,231,255,.08);
filter:blur(8px)
}

.activity-card:hover{
transform:translateY(-8px);
border-color:rgba(110,231,255,.28);
box-shadow:
0 30px 70px rgba(0,0,0,.42),
0 0 35px rgba(110,231,255,.06)
}

.activity-card.activity-ai{
grid-column:span 2;
border-color:rgba(155,140,255,.22)
}

.card-number{
font:900 12px ui-monospace,monospace;
color:var(--accent);
letter-spacing:2px
}

.card-icon{
font-size:34px;
margin:22px 0 10px
}

.activity-card h3{
margin:0 0 10px;
font-size:20px
}

.activity-card p{
color:var(--muted);
font-size:14px
}

.ct-tags{
display:flex;
gap:7px;
flex-wrap:wrap;
margin:18px 0
}

/* =========================================================
   BUTTONS
========================================================= */

.card-button,
.primary-button,
.secondary-button,
.primary{
border-radius:14px;
padding:12px 18px;
cursor:pointer;
font-weight:800;
transition:.25s
}

.card-button,
.primary-button,
.primary{
border:0;
background:linear-gradient(135deg,var(--accent),#a5f1ff);
color:#04111d;
box-shadow:0 12px 30px rgba(110,231,255,.10)
}

.secondary-button{
background:rgba(255,255,255,.06);
color:var(--text);
border:1px solid var(--border)
}

.card-button:hover,
.primary-button:hover,
.secondary-button:hover,
.primary:hover{
transform:translateY(-2px)
}

/* =========================================================
   CT PIPELINE
========================================================= */

.ct-pipeline,
.premium-panel,
.result-card{
border:1px solid var(--border);
background:
linear-gradient(
145deg,
rgba(18,29,58,.78),
rgba(10,16,34,.72)
);
border-radius:var(--radius);
box-shadow:var(--shadow)
}

.ct-pipeline{
padding:28px;
margin-top:35px
}

.pipeline-title span{
font-size:11px;
letter-spacing:2px;
color:var(--accent);
font-weight:900
}

.pipeline-title h3{
margin:5px 0 25px;
font-size:24px
}

.pipeline{
display:flex;
align-items:center;
gap:10px
}

.pipeline-step{
text-align:center;
min-width:100px
}

.pipeline-icon{
width:46px;
height:46px;
border-radius:15px;
margin:auto;
display:grid;
place-items:center;
background:rgba(110,231,255,.09);
border:1px solid var(--border);
color:var(--accent);
font-weight:900
}

.pipeline-step strong{
display:block;
margin-top:9px;
font-size:13px
}

.pipeline-step small{
color:var(--muted);
font-size:11px
}

.pipeline-line{
height:1px;
background:linear-gradient(
90deg,
var(--accent),
var(--accent-2)
);
opacity:.35;
flex:1
}

/* =========================================================
   PROFILE
========================================================= */

.profile-panel{
padding:32px;
max-width:850px
}

.panel-badge{
display:inline-block;
color:var(--accent);
font:800 10px ui-monospace,monospace;
letter-spacing:2px;
margin-bottom:22px
}

.grid2{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:18px
}

/* =========================================================
   FORMS
========================================================= */

.premium-panel{
padding:28px
}

.premium-panel label{
display:block;
color:var(--muted-light);
font-size:13px;
font-weight:700;
margin-bottom:18px
}

.premium-panel input,
.premium-panel select,
.premium-panel textarea,
.gameArea input,
.gameArea select,
.gameArea textarea{
width:100%;
margin-top:8px;
background:rgba(255,255,255,.045);
border:1px solid var(--border);
border-radius:13px;
padding:13px 14px;
color:var(--text);
outline:none
}

.premium-panel input:focus,
.premium-panel select:focus,
.premium-panel textarea:focus,
.gameArea input:focus,
.gameArea select:focus,
.gameArea textarea:focus{
border-color:rgba(110,231,255,.55);
box-shadow:0 0 0 3px rgba(110,231,255,.06)
}

option{
background:#0b1226;
color:#fff
}

.check{
display:flex!important;
gap:9px;
align-items:center
}

.check input{
width:auto!important;
margin:0!important
}

/* =========================================================
   ACTIVITY HEADER
========================================================= */

.activity-header{
display:flex;
align-items:flex-start;
justify-content:space-between;
gap:25px;
padding:20px 0
}

.score-box{
min-width:150px;
text-align:center;
padding:18px 20px;
border:1px solid var(--border);
background:rgba(255,255,255,.045);
border-radius:20px
}

.score-box small{
display:block;
color:var(--muted);
font-size:10px;
letter-spacing:2px
}

.score-box strong{
font-size:32px;
color:var(--accent)
}

.timer-box strong{
font-family:ui-monospace,monospace
}

/* =========================================================
   LEVEL BAR
========================================================= */

.level-bar{
display:flex;
align-items:center;
gap:9px;
flex-wrap:wrap;
padding:13px;
margin-bottom:20px;
border:1px solid var(--border);
border-radius:18px;
background:rgba(255,255,255,.035)
}

.level-bar>span{
font-size:10px;
letter-spacing:2px;
color:var(--muted);
font-weight:900;
margin-right:auto
}

.level-bar button{
background:rgba(255,255,255,.05);
border:1px solid var(--border);
color:var(--muted-light);
border-radius:11px;
padding:9px 13px;
font-weight:800;
cursor:pointer
}

.level-bar button:hover{
border-color:var(--accent);
color:var(--accent)
}

/* =========================================================
   GAME AREA
========================================================= */

.gameArea{
padding:28px
}

.gameArea h3{
font-size:22px;
margin-top:0
}

.gameArea .muted,
.muted{
color:var(--muted)
}

.gameOption{
display:block;
width:100%;
text-align:left;
padding:14px 16px;
margin:10px 0;
border:1px solid var(--border);
border-radius:14px;
background:rgba(255,255,255,.035);
color:var(--text);
cursor:pointer;
transition:.2s
}

.gameOption:hover{
border-color:rgba(110,231,255,.4);
transform:translateX(4px)
}

.question{
padding:18px;
margin:14px 0;
border:1px solid var(--border);
border-radius:18px;
background:rgba(255,255,255,.025)
}

.question h4{
margin:0 0 7px;
color:var(--accent)
}

.question p{
color:var(--muted-light)
}

/* =========================================================
   PICTURES / SEQUENCE
========================================================= */

.picture{
font-size:35px;
letter-spacing:10px;
padding:15px;
border:1px solid var(--border);
border-radius:16px;
background:rgba(255,255,255,.03)
}

#seq{
margin:18px 0
}

.seqItem{
cursor:grab
}

.seqItem:active{
cursor:grabbing
}

/* =========================================================
   STATS
========================================================= */

.stats{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:15px
}

.stat{
padding:22px;
border:1px solid var(--border);
border-radius:20px;
background:rgba(255,255,255,.035)
}

.stat b{
font-size:11px;
color:var(--muted);
text-transform:uppercase;
letter-spacing:1px
}

.stat h2{
margin:7px 0 0;
color:var(--accent)
}

/* =========================================================
   PROGRESS
========================================================= */

.progress-details{
margin-top:20px;
overflow:auto
}

.miniTable{
width:100%;
border-collapse:collapse;
min-width:680px
}

.miniTable th,
.miniTable td{
padding:12px;
border-bottom:1px solid var(--border);
text-align:left
}

.miniTable th{
color:var(--accent);
font-size:11px;
letter-spacing:1px
}

.miniTable td{
color:var(--muted-light);
font-size:13px
}

/* =========================================================
   FEEDBACK
========================================================= */

.feedback-tabs{
display:flex;
gap:8px;
flex-wrap:wrap;
margin:0 0 18px
}

.feedback-box-panel{
max-width:1000px
}

.feedback-box-panel h3{
font-size:25px;
margin:8px 0 22px
}

.success{
color:var(--success);
font-weight:800
}

.error{
color:var(--danger);
font-weight:800
}

/* =========================================================
   RESULT
========================================================= */

.result-card{
max-width:850px;
margin:65px auto;
padding:45px;
text-align:center
}

.bigScore{
font-size:92px;
line-height:1;
font-weight:950;
margin:22px 0;
background:linear-gradient(
90deg,
var(--accent),
var(--accent-2)
);
-webkit-background-clip:text;
background-clip:text;
color:transparent
}

.result-grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:12px
}

.result-grid div{
padding:17px;
border:1px solid var(--border);
border-radius:17px;
background:rgba(255,255,255,.035)
}

.result-grid small{
display:block;
color:var(--muted);
font-size:10px;
letter-spacing:1.5px
}

.result-grid strong{
display:block;
margin-top:4px
}

.result-actions{
display:flex;
justify-content:center;
gap:10px;
margin-top:25px
}

/* =========================================================
   REFLECTION
========================================================= */

.reflection-section{
width:min(1180px,92%);
margin:40px auto 60px;
padding:38px;
border:1px solid var(--border);
border-radius:28px;
background:
linear-gradient(
135deg,
rgba(18,29,58,.80),
rgba(10,16,34,.70)
);
display:flex;
align-items:center;
justify-content:space-between;
gap:30px
}

.reflection-section h2{
font-size:clamp(28px,4vw,48px);
line-height:1.05;
margin:10px 0
}

.reflection-section p{
color:var(--muted);
max-width:700px
}

.reflection-points{
display:flex;
flex-wrap:wrap;
gap:9px
}

.reflection-points div{
border:1px solid var(--border);
padding:8px 11px;
border-radius:999px;
color:var(--muted-light);
font-size:12px
}

.reflection-mark{
width:130px;
height:130px;
flex:none;
border-radius:50%;
display:grid;
place-items:center;
align-content:center;
background:
radial-gradient(
circle,
rgba(110,231,255,.16),
transparent 70%
);
border:1px solid var(--border)
}

.reflection-mark span{
font-size:36px;
font-weight:950;
color:var(--accent)
}

.reflection-mark small{
font-size:9px;
letter-spacing:3px;
color:var(--muted)
}

/* =========================================================
   FOOTER
========================================================= */

footer{
padding:28px 5%;
border-top:1px solid var(--border);
color:var(--muted);
display:flex;
justify-content:space-between;
gap:15px;
flex-wrap:wrap;
font-size:12px
}

footer strong{
color:var(--text)
}

/* =========================================================
   CHATBOT
========================================================= */

#gameArea:has(#chatA){
background:
linear-gradient(
145deg,
rgba(14,24,48,.94),
rgba(8,13,29,.96)
);
position:relative;
overflow:hidden
}

#gameArea:has(#chatA):before{
content:"🤖";
position:absolute;
right:30px;
top:24px;
width:76px;
height:76px;
display:grid;
place-items:center;
font-size:42px;
border-radius:22px;
background:
linear-gradient(
135deg,
rgba(110,231,255,.15),
rgba(155,140,255,.15)
);
border:1px solid var(--border-bright);
box-shadow:0 0 35px rgba(110,231,255,.08)
}

#chatA{
min-height:180px;
max-height:380px;
overflow:auto;
margin:22px 0;
padding:18px;
border:1px solid var(--border);
border-radius:20px;
background:rgba(3,7,18,.45)
}

.chat-row{
display:flex;
align-items:flex-start;
gap:10px;
margin:8px 0
}

.chat-avatar{
width:38px;
height:38px;
min-width:38px;
display:grid;
place-items:center;
border-radius:12px;
background:rgba(255,255,255,.045);
border:1px solid var(--border)
}

.chatBubble{
padding:13px 16px;
margin:2px 0;
border:1px solid var(--border);
border-radius:16px;
background:rgba(255,255,255,.045);
animation:messagePop .3s ease;
max-width:85%
}

.chatBubble b{
display:block;
color:var(--accent);
margin-bottom:3px
}

.chatBubble span{
display:block
}

.user-row{
justify-content:flex-end
}

.user-bubble{
background:rgba(110,231,255,.08);
border-color:rgba(110,231,255,.18)
}

.bot-bubble,
.ai-bubble{
background:rgba(155,140,255,.08)
}

@keyframes messagePop{
from{
opacity:0;
transform:translateY(7px)
}
to{
opacity:1;
transform:none
}
}

#chatQ{
max-width:760px!important;
display:inline-block!important;
margin-right:8px!important
}

.gameArea:has(#chatA)>.primary{
margin-top:12px
}

/* =========================================================
   CHAT INPUT AREA
========================================================= */

.chat-input-area{
display:flex;
align-items:center;
gap:8px;
margin-top:12px
}

.chat-input-area input{
flex:1
}

.chat-input-area button{
flex:none
}

/* =========================================================
   ADMIN COMPATIBILITY
========================================================= */

.top{
position:sticky;
top:0;
z-index:50;
display:flex;
align-items:center;
justify-content:space-between;
gap:20px;
padding:18px 5%;
background:rgba(5,8,22,.76);
backdrop-filter:blur(22px);
border-bottom:1px solid var(--border)
}

.top .logo{
width:50px;
height:50px;
border-radius:16px;
display:grid;
place-items:center;
font-weight:900;
background:linear-gradient(
135deg,
var(--accent),
var(--accent-2)
);
color:#071020
}

.top .brand{
display:flex;
align-items:center;
gap:14px
}

.top .brand b{
font-size:17px
}

.top .brand small{
display:block;
color:var(--muted);
font-size:12px
}

.top .status{
border:1px solid var(--border);
background:rgba(255,255,255,.045);
padding:9px 14px;
border-radius:999px;
color:var(--muted-light);
font-size:12px;
font-weight:800
}

.heading{
margin:35px 0
}

.heading h2{
font-size:42px;
margin:10px 0
}

.panel{
padding:28px;
border:1px solid var(--border);
background:
linear-gradient(
145deg,
rgba(18,29,58,.78),
rgba(10,16,34,.72)
);
border-radius:var(--radius);
box-shadow:var(--shadow)
}

.feedbackActions{
display:flex;
gap:10px;
flex-wrap:wrap
}

.feedbackActions button{
margin-top:0!important
}

.admin-table{
overflow:auto
}

/* =========================================================
   ADMIN TABLE
========================================================= */

.admin-table table{
width:100%;
border-collapse:collapse;
min-width:800px
}

.admin-table th,
.admin-table td{
padding:12px;
border-bottom:1px solid var(--border);
text-align:left
}

.admin-table th{
color:var(--accent);
font-size:11px;
letter-spacing:1px;
text-transform:uppercase
}

.admin-table td{
color:var(--muted-light);
font-size:13px
}

/* =========================================================
   MOBILE / TABLET
========================================================= */

@media(max-width:950px){

.activity-cards{
grid-template-columns:repeat(2,1fr)
}

.activity-card.activity-ai{
grid-column:span 2
}

.hero{
grid-template-columns:1fr
}

.hero-visual{
height:350px
}

.pipeline{
overflow:auto;
justify-content:flex-start
}

.pipeline-step{
flex:none
}

.stats{
grid-template-columns:repeat(2,1fr)
}

}

/* =========================================================
   MOBILE
========================================================= */

@media(max-width:650px){

.top-header{
padding:14px 4%
}

.header-badge{
display:none
}

.activity-navigation{
top:78px;
justify-content:flex-start;
overflow:auto;
flex-wrap:nowrap
}

.activity-tab{
white-space:nowrap
}

.page-section{
padding:38px 0
}

.hero{
padding:25px 0
}

.hero h2{
font-size:48px;
letter-spacing:-2px
}

.hero-visual{
height:300px
}

.brain-core{
width:145px;
height:145px
}

.brain-icon{
font-size:48px
}

.orbit-a{
width:230px;
height:130px
}

.orbit-b{
width:175px;
height:250px
}

.grid2,
.result-grid,
.stats{
grid-template-columns:1fr
}

.activity-cards{
grid-template-columns:1fr
}

.activity-card.activity-ai{
grid-column:auto
}

.activity-header{
flex-direction:column
}

.score-box{
width:100%
}

.profile-panel,
.premium-panel,
.result-card,
.reflection-section,
.panel{
padding:22px
}

.bigScore{
font-size:70px
}

.result-actions{
flex-direction:column
}

.reflection-section{
flex-direction:column;
align-items:flex-start
}

.reflection-mark{
align-self:center
}

#chatQ{
max-width:100%!important;
margin-right:0!important
}

.chat-input-area{
flex-direction:column;
align-items:stretch
}

.chat-input-area button{
width:100%
}

.chatBubble{
max-width:90%
}

.gameArea:has(#chatA):before{
position:relative;
right:auto;
top:auto;
margin:0 auto 10px
}

.top .status{
display:none
}

.heading h2{
font-size:32px
}

}

/* =========================================================
   EXTRA FORM / ACCESSIBILITY SUPPORT
========================================================= */

button,
input,
select,
textarea{
font:inherit
}

button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible{
outline:2px solid var(--accent);
outline-offset:2px
}

button:disabled{
opacity:.55;
cursor:not-allowed;
transform:none!important
}

textarea{
resize:vertical
}

label{
cursor:default
}

/* =========================================================
   LEVEL 3 PATTERN SUPPORT
========================================================= */

.level3-pattern-row select{
cursor:pointer
}

.level3-pattern-row select option{
background:#0b1226;
color:#fff
}

.level3VerbSelect{
min-height:48px
}

/* =========================================================
   SUCCESS / ERROR MESSAGE BOXES
========================================================= */

.success,
.error{
margin:12px 0
}

.success{
padding:10px 13px;
border-radius:12px;
background:rgba(99,230,190,.06);
border:1px solid rgba(99,230,190,.15)
}

.error{
padding:10px 13px;
border-radius:12px;
background:rgba(255,112,141,.06);
border:1px solid rgba(255,112,141,.15)
}

/* =========================================================
   SCROLLBAR
========================================================= */

::-webkit-scrollbar{
width:9px;
height:9px
}

::-webkit-scrollbar-track{
background:rgba(255,255,255,.025)
}

::-webkit-scrollbar-thumb{
background:rgba(155,140,255,.30);
border-radius:999px
}

::-webkit-scrollbar-thumb:hover{
background:rgba(110,231,255,.40)
}

/* =========================================================
   PRINT
========================================================= */

@media print{

.top-header,
.activity-navigation,
.background,
footer,
.result-actions{
display:none!important
}

body{
background:#fff;
color:#111
}

.panel,
.result-card,
.premium-panel{
box-shadow:none;
background:#fff;
border:1px solid #ccc
}

}
