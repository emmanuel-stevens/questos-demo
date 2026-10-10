import{aX as ae,r as s,aY as te,b0 as le,j as e,F as ne,C as se,aZ as oe,a_ as ie,a$ as re,N as I,A as O,R as x}from"./index-CYLJyUTU.js";function R({open:t,onToggle:d,label:c,count:u=null,children:b}){return e.jsxs("section",{className:`lay-candle-fold${t?" is-open":""}`,children:[e.jsxs("button",{type:"button",className:"lay-candle-fold-head","aria-expanded":t,onClick:d,children:[e.jsx("span",{className:"lay-candle-fold-label",children:c}),u!=null&&e.jsx("span",{className:"lay-candle-fold-count",children:u}),e.jsx("span",{className:"lay-candle-fold-chev","aria-hidden":"true",children:t?"⌄":"›"})]}),t&&e.jsx("div",{className:"lay-candle-fold-body",children:b})]})}function he({entry:t,onSnuff:d,onForged:c,onOpenScreen:u=null,sheetYields:b=!1}){const{focusUrl:L,focusSet:P,setFocus:G,release:N}=ae(),o=a=>{N(),d==null||d(a)},k=a=>{N(),c==null||c(a)},h=!!(t!=null&&t.task&&(t!=null&&t.quest)&&(t!=null&&t.epic)),[B]=s.useState(()=>Date.now()),[,H]=s.useState(0),[y,D]=s.useState([]),[p,v]=s.useState("loading"),[M,q]=s.useState(()=>new Set),[S,T]=s.useState(null),[z,E]=s.useState(null),[K,w]=s.useState("rest"),[C,F]=s.useState(!1),[A,U]=s.useState(!1),[g,i]=s.useState(!1);s.useEffect(()=>{const a=setInterval(()=>H(l=>l+1),1e3);return()=>clearInterval(a)},[]),s.useEffect(()=>{if(!h)return;let a=!0;return v("loading"),fetch("/api/commonplace").then(l=>l.ok?l.json():Promise.reject(new Error("no answer"))).then(l=>{a&&(D(te((l==null?void 0:l.captures)??[],t)),v("ready"))}).catch(()=>{a&&v("failed")}),()=>{a=!1}},[t,h]),s.useEffect(()=>{const a=l=>{l.key==="Escape"&&i(!g)};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[g]);const j=Math.floor((Date.now()-B)/1e3),_=String(Math.floor(j/60)).padStart(2,"0"),W=String(j%60).padStart(2,"0"),n=Math.floor(j/60),r=n===1?"minute":"minutes",$=s.useMemo(()=>h?t.quest.tasks??[]:[],[t,h]),Y=$.filter(a=>{var l;return a.id!==((l=t==null?void 0:t.task)==null?void 0:l.id)});if(!h)return null;const X=a=>{E(null),T(a),fetch(`/api/commonplace?id=${encodeURIComponent(a)}&use=${encodeURIComponent(t.quest.id)}`,{method:"PATCH"}).then(l=>{if(!l.ok)throw new Error("refused");q(m=>new Set(m).add(a))}).catch(()=>{E("That did not save. The scrap is untouched — try it again.")}).finally(()=>T(null))},V=()=>k==null?void 0:k(n),Z=()=>{n<1?i(!0):o==null||o(n)},J=()=>o==null?void 0:o(0),Q={"--lay-candle-accent":t.epic.accent},f=le.candle,ee={left:`${f.x-7}%`,top:`${f.y-5}%`,width:`${f.w+14}%`,height:`${f.h+11}%`};return e.jsxs("div",{className:"lay-candle",style:Q,role:"dialog","aria-modal":"true","aria-label":"The candle",children:[e.jsx("style",{children:de}),e.jsx("div",{className:"lay-candle-paint","aria-hidden":"true",children:e.jsx("span",{className:"lay-candle-glow",style:ee})}),e.jsxs(ne,{stop:K,onStop:w,yielded:b,label:"The candle",children:[e.jsx("div",{className:"lay-candle-lip",children:e.jsxs("div",{className:"lay-candle-head",children:[e.jsxs("div",{className:"lay-candle-state",children:[e.jsx("div",{className:"lay-candle-kicker",children:"The candle is lit"}),e.jsxs("div",{className:"lay-candle-clock",role:"timer","aria-live":"off","aria-label":`Burning for ${n} ${r}`,children:[_,":",W]})]}),e.jsx(se,{onClose:()=>i(!0),name:"the candle"})]})}),g?e.jsxs("div",{className:"lay-candle-body",children:[e.jsx("h2",{className:"lay-candle-leave-head",children:"Put the candle out?"}),e.jsx("p",{className:"lay-candle-leave-say",children:n<1?"It has been lit for less than a minute, so there are no minutes to keep. The step stays exactly where it is.":`${n} ${r} have burned on this step. Leaving keeps them in your focus log — the step itself stays open.`})]}):e.jsxs("div",{className:"lay-candle-body",children:[e.jsx("h2",{className:"lay-candle-task",children:t.task.title}),e.jsxs("div",{className:"lay-candle-road",children:[e.jsx("i",{className:"lay-candle-accent","aria-hidden":"true"}),e.jsxs("span",{className:"lay-candle-road-text",children:[e.jsx("span",{className:"lay-candle-epic",children:t.epic.title}),e.jsx("span",{className:"lay-candle-quest",children:t.quest.title})]})]}),e.jsxs("ul",{className:"lay-candle-vows",children:[e.jsx("li",{children:"The phone rests in another room."}),e.jsx("li",{children:"No games — not on phone, console, or this machine."}),e.jsx("li",{children:"Notifications are silenced."}),e.jsx("li",{children:"One task. This one."})]}),e.jsx(oe,{focusUrl:L,focusSet:P,onSet:G,place:"rail"}),e.jsx(ie,{place:"rail"}),e.jsx(re,{onOpen:u,place:"rail"}),e.jsxs(R,{open:C,onToggle:()=>{const a=!C;F(a),a&&w("full")},label:"The road this step sits on",children:[e.jsx("ul",{className:"lay-candle-steps",children:$.map(a=>{const l=a.id===t.task.id,m=a.status==="done";return e.jsxs("li",{className:`lay-candle-step${m?" is-done":""}${l?" is-current":""}`,children:[e.jsx("span",{className:"lay-candle-step-mark","aria-hidden":"true",children:m?"✓":l?"▶":"○"}),e.jsxs("span",{className:"lay-candle-step-text",children:[e.jsx("span",{className:"lay-candle-step-title",children:a.title}),e.jsx("span",{className:"lay-candle-step-word",children:m?"done":l?"this one":"still open"})]})]},a.id)})}),Y.length===0&&e.jsx(I,{children:"This step is the whole road. When it is forged, the road is finished."})]}),e.jsxs(R,{open:A,onToggle:()=>{const a=!A;U(a),a&&w("full")},label:"From your Bookmarks",count:p==="ready"&&y.length>0?y.length:null,children:[p==="loading"&&e.jsx("p",{className:"lay-candle-hint",children:"Looking through the book…"}),p==="failed"&&e.jsx("p",{className:"lay-candle-warn",children:"The book did not answer just now. Nothing is lost — your scraps are still there, and the candle burns on regardless."}),p==="ready"&&y.length===0&&e.jsx(I,{children:"Nothing you have captured matches this step yet. Scraps you keep in the Bookmarks find their way here on their own."}),p==="ready"&&y.map(a=>{const l=M.has(a.id)||(a.usedIn??[]).includes(t.quest.id);return e.jsxs("div",{className:"lay-candle-scrap",children:[e.jsx("p",{className:"lay-candle-scrap-text",children:a.text.length>220?`${a.text.slice(0,218)}…`:a.text}),l?e.jsx("span",{className:"lay-candle-scrap-kept",children:"✒ kept beside the work"}):e.jsxs("button",{type:"button",className:"lay-candle-scrap-keep",onClick:()=>X(a.id),disabled:S===a.id,title:"A use event — this inks the scrap onto a bound page",children:[S===a.id?"Keeping…":"Keep beside the work",e.jsx("span",{className:"lay-candle-scrap-note",children:"inks it onto this road, for good"})]})]},a.id)}),z&&e.jsx("p",{className:"lay-candle-warn",children:z})]})]}),g?e.jsxs(O,{note:"Nothing is written until you choose one of these.",children:[e.jsx(x,{tone:"primary",onPress:n<1?J:()=>o==null?void 0:o(n),title:"Put the candle out and go back to the Study",note:n<1?"closes the candle — there are no minutes to keep":`keeps the ${n} ${r} and closes the candle`,children:n<1?"Put it out":`Keep the ${n} ${r} and go`}),e.jsx(x,{tone:"plain",onPress:()=>i(!1),title:"Go back — the candle is still burning",note:"the clock never stopped",children:"Stay lit"})]}):e.jsxs(O,{note:n<1?"The clock has not turned a minute yet — nothing is recorded until it does.":null,children:[e.jsx(x,{tone:"primary",onPress:V,title:"The step is done — record these minutes and seal it",note:n<1?"seals the step; no minutes have burned yet":`seals the step and keeps the ${n} ${r}`,children:"Forged — mark it done"}),e.jsx(x,{tone:"plain",onPress:Z,title:"Put the candle out — the step stays open",note:n<1?"puts it out; it will ask first":`keeps the ${n} ${r}; the step stays open`,children:"Snuff the candle"})]})]}),e.jsx("button",{type:"button",className:"lay-candle-room",onClick:()=>i(!0),"aria-label":"Leave the candle",title:"Leave the candle — you will be asked what to keep before anything is recorded"})]})}const de=`
/* THE THESIS, IN THREE RULES. The wrapper covers the viewport so the sheet can
   be positioned against it; the room beneath stays VISIBLE and stops being a
   set of doors for as long as the candle burns (see finding 3 — that is the
   shipped reading, held rather than re-decided here). */
.lay-candle {
  position: fixed;
  inset: 0;
  z-index: 60;
}

/* The ruled backdrop. Deliberately no scrim colour: darkening the study would
   put a modal over the room this layout exists to keep, and the sheet's own
   ground already separates the work from the paint. */
.lay-candle-room {
  position: absolute;
  inset: 0;
  border: 0;
  padding: 0;
  margin: 0;
  background: transparent;
  cursor: pointer;
}

/* THE PAINTING'S OWN BOX, reproduced exactly as .study-paint-layer-mobile
   draws it: top-anchored, aspect-locked, both minimums at 100%, which is the
   geometry \`background-size: cover\` resolves to on a phone. Percentages inside
   it are therefore percentages OF THE PAINTING, which is the only unit the
   measured regions in src/painted.js are valid in.

   AND IT IS GATED AT 640px FOR THE SAME REASON THAT LAYER IS. Above 640px the
   Study paints the 16:9 \`study.jpg\`, which carries no chamberstick at these
   coordinates — and the layout switch is global and fixed at every width, so
   \`?layout=B\` on a laptop is one click away. Ungated, the aspect-locked box on
   a 1440x900 window resolves the glow to y≈980px, below the viewport entirely:
   the confirmation would be silently absent rather than merely unpainted. The
   lip's words and running clock carry the state wherever the paint cannot,
   which is the same fallback the short-landscape rule below relies on. */
.lay-candle-paint {
  display: none;
}

@media (max-width: 640px) {
  .lay-candle-paint {
    display: block;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    aspect-ratio: 1008 / 2184;
    min-width: 100%;
    min-height: 100%;
    pointer-events: none;
    z-index: 1;
  }
}

.lay-candle-glow {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    ellipse at 50% 38%,
    rgba(244, 201, 93, 0.55),
    rgba(217, 164, 65, 0.24) 45%,
    rgba(217, 164, 65, 0) 72%
  );
  animation: lay-candle-flicker 4.2s ease-in-out infinite;
}

@keyframes lay-candle-flicker {
  0%, 100% { opacity: 0.82; transform: scale(1); }
  40% { opacity: 1; transform: scale(1.05); }
  70% { opacity: 0.9; transform: scale(0.98); }
}

@media (prefers-reduced-motion: reduce) {
  .lay-candle-glow { animation: none; opacity: 0.9; }
}

/* IN SHORT LANDSCAPE THE ROOM CANNOT TESTIFY. The painting is width-bound, so
   at 852x393 the chamberstick sits at roughly y=700 on a 393pt-tall screen —
   off the bottom of the crop. The glow is hidden rather than left burning in
   the dark below the fold, and the lip's words carry the state instead. The
   sheet is also pulled up: the shared resting formula is measured for a
   portrait phone, and at this aspect it would leave the work about 110pt of
   room. This CONSTRAINS a shared detent for an orientation the formula was
   never measured for; it does not rename or add one. */
@media (orientation: landscape) and (max-height: 520px) {
  .lay-candle-paint { display: none; }
  .lay-candle .lay-sheet { top: min(38dvh, 190px) !important; }
}

/* The sheet and the rail clear the home indicator; nothing on this surface
   takes typed text, so there is no keyboard to measure. */
.lay-candle .lay-sheet { z-index: 2; }
.lay-candle .lay-sheet-body { padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 8px); }
.lay-candle .lay-rail { bottom: env(safe-area-inset-bottom, 0px); }

/* ---- the lip ---- */
.lay-candle-lip {
  position: sticky;
  top: 0;
  z-index: 2;
  padding: 0.25rem 0.9rem 0.45rem;
  background: var(--parchment-raised);
  border-bottom: 1px solid var(--border);
}
.lay-candle-head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 44px;
}
.lay-candle-state {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
}
.lay-candle-kicker {
  font-family: 'Cinzel', Georgia, serif;
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold);
}
.lay-candle-clock {
  font-family: 'Cinzel', Georgia, serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  color: var(--gold-bright);
}

/* ---- the body: the one scroller ---- */
.lay-candle-body { padding: 0.7rem 0.9rem 0.2rem; }

.lay-candle-task {
  margin: 0;
  font-family: 'Cinzel', Georgia, serif;
  font-weight: 700;
  font-size: 21px;
  line-height: 1.25;
  color: var(--ink);
  overflow-wrap: anywhere;
}

.lay-candle-road {
  display: flex;
  align-items: stretch;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.lay-candle-accent {
  flex: 0 0 3px;
  border-radius: 2px;
  background: var(--lay-candle-accent, var(--gold));
}
.lay-candle-road-text { display: flex; flex-direction: column; min-width: 0; }
.lay-candle-epic {
  font-family: 'Cinzel', Georgia, serif;
  font-size: 13px;
  letter-spacing: 0.06em;
  color: var(--gold);
}
.lay-candle-quest { font-size: 14px; color: var(--ink-dim); overflow-wrap: anywhere; }

.lay-candle-vows {
  margin: 0.85rem 0 0.2rem;
  padding-left: 1.1rem;
  list-style: none;
}
.lay-candle-vows li {
  position: relative;
  margin: 0.4rem 0;
  font-size: 16px;
  line-height: 1.4;
  color: var(--ink);
}
.lay-candle-vows li::before {
  content: '';
  position: absolute;
  left: -1.1rem;
  top: 0.55em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
}

/* ---- folds: 44pt heads, plain-English labels ---- */
.lay-candle-fold { border-top: 1px solid var(--border); margin-top: 0.85rem; }
.lay-candle-fold-head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  min-height: 48px;
  padding: 0.5rem 0;
  background: none;
  border: 0;
  text-align: left;
  cursor: pointer;
  color: var(--ink);
  font-family: 'Cinzel', Georgia, serif;
  font-size: 15px;
}
.lay-candle-fold-label { flex: 1; min-width: 0; }
.lay-candle-fold-count {
  min-width: 24px;
  padding: 0.1rem 0.4rem;
  border-radius: 10px;
  background: rgba(217, 164, 65, 0.18);
  color: var(--gold-bright);
  font-size: 13px;
  text-align: center;
}
.lay-candle-fold-chev { color: var(--gold); font-size: 18px; }
.lay-candle-fold-body { padding-bottom: 0.6rem; }

/* ---- the road ---- */
.lay-candle-steps { list-style: none; margin: 0; padding: 0; }
.lay-candle-step {
  display: flex;
  gap: 0.55rem;
  padding: 0.45rem 0;
  border-bottom: 1px solid rgba(61, 51, 32, 0.6);
}
.lay-candle-step:last-child { border-bottom: 0; }
.lay-candle-step-mark { color: var(--ink-dim); font-size: 15px; line-height: 1.4; }
.lay-candle-step.is-current .lay-candle-step-mark { color: var(--gold-bright); }
.lay-candle-step.is-done .lay-candle-step-mark { color: var(--green-bright); }
.lay-candle-step-text { display: flex; flex-direction: column; min-width: 0; }
.lay-candle-step-title { font-size: 15px; line-height: 1.35; color: var(--ink); overflow-wrap: anywhere; }
.lay-candle-step.is-done .lay-candle-step-title { color: var(--ink-dim); }
.lay-candle-step.is-current .lay-candle-step-title { color: var(--gold-bright); }
.lay-candle-step-word {
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-dim);
}

/* ---- the scraps ---- */
.lay-candle-scrap {
  padding: 0.6rem 0;
  border-bottom: 1px solid rgba(61, 51, 32, 0.6);
}
.lay-candle-scrap:last-child { border-bottom: 0; }
.lay-candle-scrap-text {
  margin: 0 0 0.5rem;
  font-size: 15px;
  line-height: 1.45;
  color: var(--ink);
  font-style: italic;
}
.lay-candle-scrap-keep {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  width: 100%;
  min-height: 48px;
  padding: 0.5rem 0.7rem;
  border: 1px solid var(--gold);
  border-radius: 6px;
  background: transparent;
  color: var(--gold-bright);
  font-family: 'Cinzel', Georgia, serif;
  font-size: 15px;
  text-align: left;
  cursor: pointer;
}
.lay-candle-scrap-keep:disabled { opacity: 1; color: var(--ink-dim); border-color: var(--border); cursor: default; }
.lay-candle-scrap-note {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 13px;
  color: var(--ink-dim);
}
.lay-candle-scrap-kept {
  display: inline-block;
  font-size: 14px;
  color: var(--green-bright);
}

.lay-candle-hint { margin: 0.3rem 0; font-size: 14px; color: var(--ink-dim); }
/* A warning is a colour AND a word — never colour alone. */
.lay-candle-warn {
  margin: 0.5rem 0 0;
  padding: 0.5rem 0.6rem;
  border-left: 3px solid var(--gold);
  font-size: 14px;
  line-height: 1.4;
  color: var(--ink);
  background: rgba(217, 164, 65, 0.09);
}

/* ---- the question ---- */
.lay-candle-leave-head {
  margin: 0;
  font-family: 'Cinzel', Georgia, serif;
  font-size: 20px;
  color: var(--gold-bright);
}
.lay-candle-leave-say {
  margin: 0.5rem 0 0;
  font-size: 16px;
  line-height: 1.45;
  color: var(--ink);
}
`;export{he as default};
