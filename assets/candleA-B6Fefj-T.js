import{r as o,j as e}from"./styles-VMcKyWxm.js";import{bW as _,bX as Q,bY as ee,H as w,N as k,K as p,R as s,J as ae,bZ as ne}from"./index-D68ZsN-E.js";import{k as le,a as te}from"./keepBeside-DRwxueQy.js";const oe=["The phone rests in another room.","No games — not on phone, console, or this machine.","Notifications are silenced.","One task. This one."],D=["The road","Beside the work"];function ce({entry:t,onSnuff:m,onForged:g}){const[N,G]=o.useState(null),[,M]=o.useState(0),[f,x]=o.useState("vow"),[T,F]=o.useState(0),[E,B]=o.useState([]),[I,K]=o.useState(()=>new Set),[z,S]=o.useState(null),R=o.useRef(!1),{focusUrl:W,focusSet:$,setFocus:U,release:C}=_(),O=a=>{C(),m==null||m(a)},q=a=>{C(),g==null||g(a)},c=(t==null?void 0:t.task)??null,r=(t==null?void 0:t.quest)??null,i=(t==null?void 0:t.epic)??null,l=N!==null;o.useEffect(()=>{if(!l)return;const a=setInterval(()=>M(n=>n+1),1e3);return()=>clearInterval(a)},[l]);const A=l||f==="map";o.useEffect(()=>{!A||!(t!=null&&t.task)||R.current||(R.current=!0,Q("/api/commonplace").then(a=>a.json()).then(a=>B(ee((a==null?void 0:a.captures)??[],t))).catch(()=>{}))},[A,t]);const y=l?Math.floor((Date.now()-N)/1e3):0,P=String(Math.floor(y/60)).padStart(2,"0"),H=String(y%60).padStart(2,"0"),u=Math.floor(y/60),V=a=>{S(null),le(a,r.id).then(n=>{n.ok?K(h=>te(h,a,!0)):S(n.error)})},J=()=>{G(Date.now()),x("flame")},v=()=>O(u),X=()=>q(u),d=()=>O(0),b=()=>x(l?"flame":"vow");o.useEffect(()=>{const a=n=>{n.key==="Escape"&&(f==="map"?b():l?v():d())};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)});const L=(c==null?void 0:c.title)??"",Y=L.length>60,Z=o.useMemo(()=>[i==null?void 0:i.title,r==null?void 0:r.title].filter(Boolean).join(" · "),[i,r]);if(!c||!r||!i)return e.jsxs("div",{className:"lay-candle-a",role:"dialog","aria-modal":"true","aria-label":"The candle",children:[e.jsx("style",{children:j}),e.jsx(w,{onClose:d,name:"the candle"}),e.jsxs("div",{className:"lay-candle-a-face",children:[e.jsx("div",{className:"lay-candle-a-light","aria-hidden":"true",children:"🕯️"}),e.jsxs(k,{children:["There is no step under this flame. Pick a step from the day's board and light the candle from there — ",e.jsx("b",{children:"nothing has been recorded"}),"."]}),e.jsx("div",{className:"lay-candle-a-dark"})]}),e.jsx(p,{children:e.jsx(s,{tone:"primary",onPress:d,note:"nothing is recorded",children:"Back to the day"})})]});if(f==="map"){const a=r.tasks??[];return e.jsxs("div",{className:"lay-candle-a lay-candle-a-mapface",style:{"--accent":i.accent},role:"dialog","aria-modal":"true","aria-label":"The road",children:[e.jsx("style",{children:j}),e.jsx(w,{onClose:b,name:"the road",kind:"panel"}),e.jsxs("header",{className:"lay-candle-a-maphead",children:[e.jsx("div",{className:"lay-candle-a-map-epic",children:i.title}),e.jsx("h2",{className:"lay-candle-a-map-quest",children:r.title}),l&&e.jsxs("p",{className:"lay-candle-a-still",children:["The candle is still lit — ",P,":",H," so far."]})]}),e.jsx(ae,{index:T,total:D.length,onGo:F,labels:D}),e.jsxs("div",{className:"lay-candle-a-face",children:[T===0?a.length===0?e.jsx(k,{children:"This step stands alone on its road — there is nothing else on it yet."}):e.jsx("ul",{className:"lay-candle-a-steps",children:a.map(n=>{const h=n.id===c.id;return e.jsxs("li",{className:`lay-candle-a-step${n.status==="done"?" done":""}${h?" here":""}`,"aria-current":h?"step":void 0,children:[e.jsx("span",{className:"lay-candle-a-step-mark","aria-hidden":"true",children:n.status==="done"?"✓":h?"▶":"○"}),e.jsx("span",{className:"lay-candle-a-step-title",children:n.title})]},n.id)})}):E.length===0?e.jsx(k,{children:"Nothing in your Bookmarks touches this step yet. Scraps land here on their own once they share words with the work."}):e.jsxs("div",{className:"lay-candle-a-scraps",children:[e.jsx("p",{className:"lay-candle-a-scraps-note",children:"Keeping one inks it onto this road — that is a real use event, and it is how a scrap earns its patina."}),z&&e.jsx("p",{className:"lay-candle-a-scraps-note",role:"alert",children:z}),E.map(n=>e.jsxs("div",{className:"lay-candle-a-scrap",children:[e.jsx("p",{children:n.text.length>140?n.text.slice(0,138)+"…":n.text}),I.has(n.id)||(n.usedIn??[]).includes(r.id)?e.jsx("span",{className:"lay-candle-a-scrap-kept",children:"✒ kept beside the work"}):e.jsx("button",{type:"button",className:"lay-candle-a-scrap-keep",onClick:()=>V(n.id),children:"Keep beside the work"})]},n.id))]}),e.jsx("div",{className:"lay-candle-a-dark"})]}),e.jsx(p,{children:e.jsx(s,{tone:"primary",onPress:b,note:l?"the minutes kept counting":"nothing has started yet",children:l?"Back to the flame":"Back to the vow"})})]})}return e.jsxs("div",{className:`lay-candle-a${l?" lit":""}`,style:{"--accent":i.accent},role:"dialog","aria-modal":"true","aria-label":l?"The candle is lit":"Before the flame",children:[e.jsx("style",{children:j}),e.jsx(w,{onClose:l?v:d,name:"the candle"}),e.jsxs("div",{className:"lay-candle-a-face",children:[e.jsx("div",{className:"lay-candle-a-light","aria-hidden":"true",children:"🕯️"}),e.jsx("div",{className:"lay-candle-a-kicker",children:l?"The candle is lit":"Before you light it"}),e.jsx("h2",{className:`lay-candle-a-subject${Y?" long":""}`,children:L}),l?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"lay-candle-a-count",role:"timer","aria-live":"off","aria-label":`${u} minutes on this step`,children:[P,":",H]}),e.jsx("p",{className:"lay-candle-a-since",children:"since you lit it"})]}):e.jsx("ul",{className:"lay-candle-a-vows",children:oe.map(a=>e.jsx("li",{children:a},a))}),e.jsx(ne,{focusUrl:W,focusSet:$,onSet:U,place:"rail"}),e.jsx("div",{className:"lay-candle-a-dark"})]}),e.jsxs("button",{type:"button",className:"lay-candle-a-road",onClick:()=>x("map"),children:[e.jsx("span",{className:"lay-candle-a-road-name",children:Z}),e.jsx("span",{className:"lay-candle-a-road-chev","aria-hidden":"true",children:"›"})]}),l?e.jsxs(p,{children:[e.jsx(s,{tone:"primary",onPress:X,note:"keeps the minutes and finishes the step",children:"Forged — mark it done"}),e.jsx(s,{onPress:v,note:"keeps the minutes, leaves the step open",children:"Snuff the candle"})]}):e.jsxs(p,{note:"Nothing is recorded until you light it.",children:[e.jsx(s,{tone:"primary",onPress:J,note:"the minutes start now",children:"Light the candle"}),e.jsx(s,{onPress:d,note:"nothing is recorded",children:"Not now"})]})]})}const j=`
.lay-candle-a, .lay-candle-a * { box-sizing: border-box; }

/* dvh AND NEVER vh: a moving Safari toolbar must not push the act rail — which
   holds the primary act — under the bottom of the glass. */
.lay-candle-a {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 100dvh;
  z-index: 120;
  display: flex;
  flex-direction: column;
  /* the glow comes FROM the flame: the focal point sits on the light's own row */
  background: radial-gradient(ellipse at 50% 22%, rgba(58, 42, 18, 0.98), rgba(8, 6, 3, 0.995) 70%);
  color: var(--ink);
  font-family: Georgia, 'Times New Roman', serif;
  padding: max(0.75rem, env(safe-area-inset-top)) 1rem max(0.75rem, env(safe-area-inset-bottom));
  overflow: hidden;
}

.lay-candle-a .lay-close {
  position: absolute;
  top: max(0.25rem, env(safe-area-inset-top));
  right: 0.25rem;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 1;
  background: none;
  border: none;
  color: var(--ink-dim);
  cursor: pointer;
}
.lay-candle-a .lay-close:hover { color: var(--gold-bright); }

/* THE ONE SCROLLER. Every child inside it holds its natural height except the
   dark room, so nothing here is a percentage of anything. */
.lay-candle-a-face {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* clear of the 44px close */
  padding: 44px 0 0.5rem;
}

.lay-candle-a-light {
  flex: 0 0 auto;
  font-size: 40px;
  line-height: 1.1;
  text-shadow: 0 0 24px rgba(244, 201, 93, 0.55);
  animation: lay-candle-a-flicker 4s ease-in-out infinite;
}
@keyframes lay-candle-a-flicker {
  0%, 100% { opacity: 1; }
  45% { opacity: 0.86; }
  70% { opacity: 0.97; }
}
@media (prefers-reduced-motion: reduce) {
  .lay-candle-a-light { animation: none; }
}

.lay-candle-a-kicker {
  flex: 0 0 auto;
  margin-top: 0.35rem;
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold);
}

.lay-candle-a-subject {
  flex: 0 0 auto;
  margin: 0.6rem 0 0;
  max-width: 34ch;
  font-family: 'Cinzel', Georgia, serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 1.25;
  color: var(--ink);
  overflow-wrap: anywhere;
  /* five lines, then an ellipsis — the map holds the rest of the road */
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.lay-candle-a-subject.long { font-size: 18px; }

.lay-candle-a-count {
  flex: 0 0 auto;
  margin-top: 0.9rem;
  font-family: 'Cinzel', Georgia, serif;
  font-weight: 700;
  font-size: min(56px, 14vw);
  line-height: 1;
  font-variant-numeric: tabular-nums;
  color: var(--ink);
}
.lay-candle-a-since {
  flex: 0 0 auto;
  margin: 0.35rem 0 0;
  font-size: 13px;
  color: var(--ink-dim);
}

.lay-candle-a-vows {
  flex: 0 0 auto;
  list-style: none;
  margin: 0.9rem 0 0;
  padding: 0;
  max-width: 34ch;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.lay-candle-a-vows li {
  font-size: 16px;
  line-height: 1.45;
  color: var(--ink);
  overflow-wrap: anywhere;
}

/* THE DARK ROOM — nothing, on purpose, and the only thing that collapses. */
.lay-candle-a-dark { flex: 1 1 0; min-height: 0; }

/* THE ROAD — one full-width door, lit at rest. Never a hover: touch has no
   hover, and this is chrome rather than a painted object. */
.lay-candle-a-road {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  min-height: 56px;
  margin-bottom: 0.55rem;
  padding: 0.5rem 0.75rem;
  text-align: left;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 15px;
  line-height: 1.3;
  color: var(--ink);
  background: rgba(28, 23, 16, 0.72);
  border: 1px solid var(--gold);
  border-left: 4px solid var(--accent, var(--gold));
  border-radius: 10px;
  cursor: pointer;
}
.lay-candle-a-road-name {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.lay-candle-a-road-chev { flex: 0 0 auto; color: var(--gold); font-size: 20px; }

/* THE RETURN. Stacked rather than side by side: two full sentences in one row
   on a 393pt phone arrive as three wrapped lines each. The act is FIRST and is
   the only filled control on the screen; the way out sits under it.
   THE PADDING SHORTHAND IS RESET, NOT PATCHED ON ONE EDGE. The shared .lay-rail
   ships padding 0.4rem 0.5rem calc(0.4rem + env(safe-area-inset-bottom, 0px)),
   plus a bar background and a gold top border. Overriding padding-top alone left
   the home-indicator inset applied TWICE — once at the root, once here, ~74px of
   dead glass under the primary act on a 393x852 phone — and inset the acts 8px
   per side from .lay-candle-a-road directly above them. The root owns the safe
   area; the rail sits flush on the flame's own ground. */
.lay-candle-a .lay-rail {
  flex: 0 0 auto;
  position: sticky;
  bottom: 0;
  padding: 0.15rem 0 0;
  background: none;
  border-top: none;
}
.lay-candle-a .lay-rail-acts {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.lay-candle-a .lay-act {
  width: 100%;
  min-height: 52px;
  padding: 0.45rem 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  font-family: Georgia, 'Times New Roman', serif;
  color: var(--ink);
  background: rgba(28, 23, 16, 0.72);
  border: 1px solid var(--border);
  border-radius: 10px;
  cursor: pointer;
}
/* THE ONE FILLED CONTROL. The tone the rail actually passes is primary — the
   only gold tone styles.css defines — so this rule wears that name; written as
   .lay-act-primary it styled nothing and finding 4's "the only filled control on
   the screen" was false on the glass. */
.lay-candle-a .lay-act-primary {
  min-height: 60px;
  background: var(--gold);
  border-color: var(--gold-bright);
  color: #26200f;
}
.lay-candle-a .lay-act:disabled { opacity: 0.4; cursor: default; }
.lay-candle-a .lay-act-word {
  font-size: 17px;
  font-weight: 600;
  line-height: 1.15;
  text-align: center;
  overflow-wrap: anywhere;
}
/* THE TOOLTIP LAW'S TOUCH HOME: the plain meaning is a permanent second line
   under the verb, because touch has no hover to hide it behind. */
.lay-candle-a .lay-act-note {
  font-size: 12px;
  line-height: 1.2;
  text-align: center;
  color: var(--ink-dim);
  overflow-wrap: anywhere;
}
.lay-candle-a .lay-act-primary .lay-act-note { color: #4a3a15; }
.lay-candle-a .lay-rail-note {
  margin: 0.4rem 0 0;
  font-size: 12px;
  line-height: 1.3;
  text-align: center;
  color: var(--ink-dim);
}

/* ——— the map ——— */
.lay-candle-a-maphead {
  flex: 0 0 auto;
  padding: 44px 0 0.25rem;
  border-bottom: 1px solid var(--border);
}
.lay-candle-a-map-epic {
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent, var(--gold));
  overflow-wrap: anywhere;
}
.lay-candle-a-map-quest {
  margin: 0.2rem 0 0;
  font-family: 'Cinzel', Georgia, serif;
  font-size: 20px;
  line-height: 1.25;
  color: var(--ink);
  overflow-wrap: anywhere;
}
.lay-candle-a-still {
  margin: 0.35rem 0 0.4rem;
  font-size: 14px;
  color: var(--gold);
}

.lay-candle-a-mapface .lay-candle-a-face {
  align-items: stretch;
  text-align: left;
  padding-top: 0.5rem;
}

.lay-candle-a .lay-pager {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0;
}
.lay-candle-a .lay-pager button {
  width: 56px;
  min-height: 44px;
  flex: 0 0 auto;
  font-size: 22px;
  line-height: 1;
  color: var(--ink);
  background: rgba(28, 23, 16, 0.72);
  border: 1px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
}
.lay-candle-a .lay-pager button:disabled { opacity: 0.35; cursor: default; }
.lay-candle-a .lay-pager-here {
  flex: 1 1 auto;
  min-width: 0;
  text-align: center;
  font-size: 14px;
  color: var(--ink-dim);
  overflow-wrap: anywhere;
}

.lay-candle-a-steps { list-style: none; margin: 0; padding: 0; }
.lay-candle-a-step {
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  min-height: 44px;
  padding: 0.55rem 0.5rem;
  font-size: 15px;
  line-height: 1.35;
  color: var(--ink);
  border-bottom: 1px solid var(--border);
  overflow-wrap: anywhere;
}
.lay-candle-a-step-mark { flex: 0 0 auto; color: var(--ink-dim); }
.lay-candle-a-step.done { color: var(--ink-dim); }
.lay-candle-a-step.done .lay-candle-a-step-title { text-decoration: line-through; }
.lay-candle-a-step.here { color: var(--gold-bright); }
.lay-candle-a-step.here .lay-candle-a-step-mark { color: var(--gold-bright); }

.lay-candle-a-scraps { display: flex; flex-direction: column; gap: 0.6rem; }
.lay-candle-a-scraps-note {
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
  color: var(--ink-dim);
}
.lay-candle-a-scrap {
  padding: 0.6rem 0.65rem;
  background: rgba(28, 23, 16, 0.72);
  border: 1px solid var(--border);
  border-left: 3px solid var(--gold);
  border-radius: 8px;
}
.lay-candle-a-scrap p {
  margin: 0 0 0.45rem;
  font-size: 15px;
  line-height: 1.45;
  color: var(--ink);
  overflow-wrap: anywhere;
}
.lay-candle-a-scrap-keep {
  width: 100%;
  min-height: 44px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 15px;
  color: var(--ink);
  background: var(--parchment);
  border: 1px solid var(--gold);
  border-radius: 8px;
  cursor: pointer;
}
.lay-candle-a-scrap-kept { font-size: 14px; color: var(--green-bright); }

.lay-candle-a .lay-nothing {
  margin: 1rem 0;
  font-size: 16px;
  line-height: 1.5;
  color: var(--ink-dim);
  overflow-wrap: anywhere;
}
.lay-candle-a .lay-nothing b { color: var(--gold); font-weight: 600; }

/* LANDSCAPE, and any short viewport. Nothing here moves a target: the type
   shrinks, the dark room is already gone (it collapses first by construction),
   and the face scrolls if the two together are still not enough. */
@media (max-height: 480px) {
  .lay-candle-a-light { font-size: 28px; }
  .lay-candle-a-count { margin-top: 0.4rem; font-size: 40px; }
  .lay-candle-a-subject { margin-top: 0.35rem; font-size: 19px; -webkit-line-clamp: 3; }
  .lay-candle-a-subject.long { font-size: 17px; }
  .lay-candle-a-vows { margin-top: 0.5rem; gap: 0.3rem; }
  .lay-candle-a-face { padding-top: 44px; }
  .lay-candle-a-road { min-height: 48px; margin-bottom: 0.4rem; }
}
`;export{ce as default};
