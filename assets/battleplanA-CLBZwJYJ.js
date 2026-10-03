import{r as o,a as H,g as A,j as a,C as O,N as B,M as C,i as G,w as U,P as _,A as K,R as c,x as Y,y as Z}from"./index-BeKx-Ibw.js";const J=new Map,P={light:"Light",medium:"Medium",deep:"Deep"},V=["low","medium","high"];function R(l){const s=Math.floor(l/60),i=l%60;return s===0?`${i}m`:i===0?`${s}h`:`${s}h ${i}m`}function W({orders:l=[],energy:s="high",onSetEnergy:i,today:$,onSelectQuest:g,onCompleteTask:x,onOpenWarTable:d,onReoptimize:u,dodges:r=J,onVerdictMenu:j,onClose:L,ownRealm:I=!1}){var D;const[y,f]=o.useState(0),[p,N]=o.useState("step"),[w,v]=o.useState(null),[z,m]=o.useState(null);o.useEffect(()=>{f(e=>Math.min(Math.max(e,0),Math.max(0,l.length-1)))},[l.length]);const k=H(),q=o.useMemo(()=>l.reduce((e,n)=>e+A(n.task),0),[l]),T=o.useMemo(()=>l.map((e,n)=>({e,i:n})).filter(({e})=>e.task.hardDue&&e.task.due&&e.task.due<=k&&e.task.status!=="done"),[l,k]),t=w??l[y]??null,h=!!w,E=t?((D=r==null?void 0:r.get)==null?void 0:D.call(r,t.task.id))??0:0,b=C(E),S=e=>{v(null),m(null),f(e),N("step")};return a.jsxs("section",{className:"lay-battleplan-a","aria-label":"The Battle Plan",children:[a.jsx("style",{children:X}),a.jsx(O,{onClose:L,name:"the battle plan"}),a.jsxs("header",{className:"lay-battleplan-a-head",children:[a.jsxs("button",{type:"button",className:"lay-battleplan-a-flip",onClick:()=>N(e=>e==="step"?"day":"step"),"aria-expanded":p==="day",children:[a.jsx("span",{className:"lay-battleplan-a-date",children:$}),a.jsxs("span",{className:"lay-battleplan-a-line",children:["A winnable day, nothing more.",a.jsxs("span",{className:"lay-battleplan-a-load",children:["~",R(q)," planned"]})]}),a.jsx("span",{className:"lay-battleplan-a-flip-hint",children:p==="step"?"the day's hands ›":"‹ back to the step"})]}),a.jsxs("div",{className:"lay-battleplan-a-energy energy-row",children:[a.jsx("span",{className:"lay-battleplan-a-energy-label",children:"Today's energy"}),V.map(e=>a.jsx("button",{type:"button",className:`lay-battleplan-a-energy-btn ${s===e?"on":""}`,"aria-pressed":s===e,onClick:()=>i==null?void 0:i(e),children:e},e))]})]}),T.length>0&&a.jsx("ul",{className:"lay-battleplan-a-shouts",children:T.map(({e,i:n})=>a.jsx("li",{children:a.jsxs("button",{type:"button",onClick:()=>S(n),children:[a.jsx("span",{"aria-hidden":"true",children:"⚑"})," ",a.jsx("span",{className:"lay-battleplan-a-shout-what",children:e.task.title})," ",a.jsx("span",{className:"lay-battleplan-a-shout-when",children:e.task.due===k?"— its deadline is today":`— its deadline was ${e.task.due}`})]})},e.task.id))}),a.jsx("main",{className:"lay-battleplan-a-face",children:l.length===0&&!w?a.jsxs(B,{children:["Nothing is on today's plan. Declare an energy above and press"," ",a.jsx("b",{children:"Re-plan the day"}),", or open ",a.jsx("b",{children:"The whole day"})," to place work by hand."]}):p==="day"?a.jsxs("div",{className:"lay-battleplan-a-day",children:[a.jsx("p",{className:"lay-battleplan-a-day-lead",children:"Today's steps. Tap one to bring it forward."}),a.jsx("ol",{className:"lay-battleplan-a-roster",children:l.map((e,n)=>{var M;const F=((M=r==null?void 0:r.get)==null?void 0:M.call(r,e.task.id))??0;return a.jsx("li",{children:a.jsxs("button",{type:"button",className:`lay-battleplan-a-roster-row ${n===y?"here":""} ${e.task.status==="done"?"sealed":""}`,"aria-current":n===y?"true":void 0,onClick:()=>S(n),children:[a.jsx("span",{className:"lay-battleplan-a-dot",style:{background:e.epic.accent||"var(--gold)"},"aria-hidden":"true"}),a.jsx("span",{className:"lay-battleplan-a-roster-title",children:e.task.title}),a.jsxs("span",{className:"lay-battleplan-a-roster-meta",children:[P[e.task.effort]??"Medium",e.task.status==="done"?" · sealed":"",C(F)?" · 🥀":""]})]})},e.task.id)})})]}):t&&a.jsxs("article",{className:"lay-battleplan-a-step",children:[a.jsxs("p",{className:"lay-battleplan-a-road",children:[a.jsx("span",{className:"lay-battleplan-a-dot",style:{background:t.epic.accent||"var(--gold)"},"aria-hidden":"true"}),t.epic.title," · ",t.quest.title]}),a.jsx("h3",{className:"lay-battleplan-a-title",children:t.task.title}),a.jsxs("p",{className:"lay-battleplan-a-meta",children:[P[t.task.effort]??"Medium"," ·"," ",R(A(t.task)),G(t.task)?" · a standing duty":"",t.task.due?` · ${t.task.hardDue?"⚑ ":""}due ${t.task.due}`:""]}),t.task.notes&&a.jsx("p",{className:"lay-battleplan-a-notes",children:t.task.notes}),z&&a.jsx("p",{className:"lay-battleplan-a-sealed",children:z}),h&&a.jsx("p",{className:"lay-battleplan-a-sealed",children:"Sealed. The rail below lifts the seal if that was a slip."}),b&&a.jsxs("p",{className:`lay-battleplan-a-dodge lay-battleplan-a-dodge-${b}`,children:[a.jsx("span",{"aria-hidden":"true",children:"🥀"})," Planned and not done ",E," times",b==="mark"?" — worth a verdict.":" — a warning, not yet a verdict.",a.jsx("span",{className:"lay-battleplan-a-dodge-ask",children:b==="mark"?U.join(" "):""})]}),j&&a.jsx("button",{type:"button",className:"lay-battleplan-a-verdict",onClick:e=>j(e,t.quest.id,t.task.id),children:"Say why — not today, needs context…"})]})}),p==="step"&&l.length>0&&a.jsx(_,{index:y,total:l.length,onGo:e=>{v(null),m(null),f(e)},labels:l.map(e=>e.epic.title)}),a.jsx(K,{children:p==="step"&&t?a.jsxs(a.Fragment,{children:[a.jsx(c,{tone:"primary",onPress:()=>{x==null||x(t.quest.id,t.task.id);const e=Y(t.task.id);if(e){m(h?null:Z(e,{ownRealm:I}).note);return}m(null),v(h?null:t)},note:h?"undo the seal":"marks it done",title:h?"Sealed — press to unseal":"Sign it off",children:h?"✦ Lift the seal":"✦ Sign it off"}),a.jsx(c,{onPress:()=>g==null?void 0:g(t.quest.id),note:"the whole road",title:"Open the quest this step belongs to",children:"The road"}),a.jsx(c,{onPress:()=>d==null?void 0:d(),note:"hours and fields",title:"Open the War Table — the whole day on one page",children:"⛶ The whole day"})]}):a.jsxs(a.Fragment,{children:[a.jsx(c,{tone:"primary",onPress:()=>u==null?void 0:u(),note:"fit it into winnable days",title:"Re-plan every open task into winnable days",children:"⟳ Re-plan the day"}),a.jsx(c,{onPress:()=>d==null?void 0:d(),note:"hours and fields",title:"Open the War Table — the whole day on one page",children:"⛶ The whole day"})]})})]})}const X=`
.lay-battleplan-a, .lay-battleplan-a * { box-sizing: border-box; }

.lay-battleplan-a {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  min-width: 0;
  /* THE ZONE CONTRACT'S OWN RAIL. This section replaces the .study-right slot
     wholesale, so it must keep that slot's width or it sizes to max-content
     (the joined dodge questions run ~900px) and eats the hero band the
     contract reserves for the painting. The height cap is the .study-card rule's,
     written in dvh rather than vh by the family law, so a tall day scrolls
     inside the face instead of running off the top and bottom of the room
     and taking the rail — which holds the primary act — with it. */
  width: clamp(300px, 23vw, 420px);
  max-width: 100%;
  max-height: calc(100dvh - 7.5rem);
  padding: 0.9rem 0.85rem 0;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--parchment-raised);
  color: var(--ink);
  /* nothing may escape sideways; the one scroller is the face below */
  overflow: hidden;
}

/* The phone's own budget. MEASURED, not chosen: the card's fixed furniture —
   the padding, the flip head and the energy row, three 0.55rem gaps, the pager
   and the rail — comes to roughly 275px on a 375x667. The old 46dvh cap (307px
   there) left the step region about 32px, less than its own 19px Cinzel title
   and road line, and one hard-deadline shout drove it to zero in silence,
   because a min-height of 0 lets a flex child collapse rather than overflow. So
   the cap is 72dvh and the face carries a floor of its own below. dvh, never
   vh, so a moving Safari toolbar cannot push the rail — which holds the
   primary act — off the bottom of the screen. NOTE, honestly, that the phone
   room pads the wrap by 48vh of sky and scrolls, so 48 + 72 no longer fits one
   screen: the rail is reached by a short scroll rather than sitting in the
   thumb's third unaided. That is the cost of a face big enough to read, and it
   is a trade worth a ruling rather than a quiet choice of number. */
@media (max-width: 1100px) {
  .lay-battleplan-a { width: min(640px, 94vw); }
}
@media (max-width: 640px) {
  .lay-battleplan-a { width: 100%; max-height: 72dvh; }
}

.lay-battleplan-a .lay-close {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  line-height: 1;
  background: none;
  border: none;
  color: var(--ink-dim);
  cursor: pointer;
}
.lay-battleplan-a .lay-close:hover { color: var(--gold-bright); }

.lay-battleplan-a-head { flex: 0 0 auto; }

.lay-battleplan-a-flip {
  display: block;
  width: 100%;
  min-height: 44px;
  /* room for the 44px close, so the date never runs under it */
  padding: 0.2rem 48px 0.35rem 0;
  text-align: left;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
}
.lay-battleplan-a-date {
  display: block;
  font-family: 'Cinzel', Georgia, serif;
  font-size: 20px;
  line-height: 1.2;
  color: var(--gold-bright);
  overflow-wrap: anywhere;
}
.lay-battleplan-a-line {
  display: block;
  font-size: 14px;
  color: var(--ink-dim);
  overflow-wrap: anywhere;
}
.lay-battleplan-a-load { color: var(--gold); margin-left: 0.4rem; }
.lay-battleplan-a-flip-hint {
  display: block;
  margin-top: 0.15rem;
  font-size: 13px;
  color: var(--gold);
}

.lay-battleplan-a-energy {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.35rem;
}
.lay-battleplan-a-energy-label {
  font-size: 13px;
  color: var(--ink-dim);
  margin-right: 0.1rem;
}
.lay-battleplan-a-energy-btn {
  flex: 1 1 auto;
  min-width: 64px;
  min-height: 44px;
  padding: 0 0.5rem;
  font-size: 14px;
  text-transform: capitalize;
  color: var(--ink-dim);
  background: var(--parchment);
  border: 1px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
}
.lay-battleplan-a-energy-btn.on {
  color: var(--parchment);
  background: var(--gold);
  border-color: var(--gold-bright);
  font-weight: 600;
}

.lay-battleplan-a-shouts {
  flex: 0 0 auto;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.lay-battleplan-a-shouts button {
  display: block;
  width: 100%;
  min-height: 44px;
  padding: 0.35rem 0.5rem;
  text-align: left;
  font-size: 14px;
  line-height: 1.3;
  color: #f6d9a0;
  background: rgba(160, 60, 40, 0.28);
  border: 1px solid #a2472e;
  border-radius: 8px;
  cursor: pointer;
  overflow-wrap: anywhere;
}
.lay-battleplan-a-shout-what { font-weight: 600; }
.lay-battleplan-a-shout-when { color: #e8bd8e; }

.lay-battleplan-a-face {
  flex: 1 1 auto;
  /* The one region this whole design exists for may not be squeezed to
     nothing by the furniture around it; it scrolls inside itself instead. */
  min-height: 7rem;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 0.4rem;
}

.lay-battleplan-a-dot {
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  margin-right: 0.4rem;
  flex: 0 0 auto;
}

.lay-battleplan-a-road {
  margin: 0 0 0.2rem;
  font-size: 13px;
  color: var(--ink-dim);
  overflow-wrap: anywhere;
}
.lay-battleplan-a-title {
  margin: 0 0 0.3rem;
  font-family: 'Cinzel', Georgia, serif;
  font-size: 19px;
  line-height: 1.25;
  color: var(--ink);
  overflow-wrap: anywhere;
}
.lay-battleplan-a-meta {
  margin: 0;
  font-size: 14px;
  color: var(--gold);
  overflow-wrap: anywhere;
}
.lay-battleplan-a-notes {
  margin: 0.45rem 0 0;
  padding: 0.4rem 0.5rem;
  font-size: 14px;
  line-height: 1.4;
  color: var(--ink);
  background: var(--parchment);
  border-left: 3px solid var(--gold);
  border-radius: 4px;
  overflow-wrap: anywhere;
}
.lay-battleplan-a-sealed {
  margin: 0.45rem 0 0;
  font-size: 14px;
  color: var(--green-bright);
}
.lay-battleplan-a-dodge {
  margin: 0.45rem 0 0;
  font-size: 13px;
  line-height: 1.4;
  color: var(--ink-dim);
  overflow-wrap: anywhere;
}
.lay-battleplan-a-dodge-mark { color: #e0b48a; }
.lay-battleplan-a-dodge-ask { display: block; color: var(--ink-dim); }

.lay-battleplan-a-verdict {
  display: block;
  width: 100%;
  min-height: 44px;
  margin-top: 0.5rem;
  padding: 0.4rem 0.6rem;
  text-align: left;
  font-size: 14px;
  color: var(--ink);
  background: var(--parchment);
  border: 1px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
  overflow-wrap: anywhere;
}

.lay-battleplan-a-day-lead {
  margin: 0 0 0.35rem;
  font-size: 13px;
  color: var(--ink-dim);
}
.lay-battleplan-a-roster { list-style: none; margin: 0; padding: 0; }
.lay-battleplan-a-roster li + li { margin-top: 0.3rem; }
.lay-battleplan-a-roster-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 48px;
  padding: 0.4rem 0.5rem;
  gap: 0.15rem;
  text-align: left;
  background: var(--parchment);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--ink);
  cursor: pointer;
}
.lay-battleplan-a-roster-row.here { border-color: var(--gold); }
.lay-battleplan-a-roster-row.sealed .lay-battleplan-a-roster-title {
  color: var(--ink-dim);
  text-decoration: line-through;
}
.lay-battleplan-a-roster-title {
  flex: 1 1 60%;
  min-width: 0;
  font-size: 15px;
  line-height: 1.3;
  overflow-wrap: anywhere;
}
.lay-battleplan-a-roster-meta {
  flex: 0 1 auto;
  font-size: 12px;
  color: var(--ink-dim);
  overflow-wrap: anywhere;
}

.lay-battleplan-a .lay-nothing {
  margin: 0.6rem 0;
  font-size: 15px;
  line-height: 1.5;
  color: var(--ink-dim);
  overflow-wrap: anywhere;
}
.lay-battleplan-a .lay-nothing b { color: var(--gold); font-weight: 600; }

.lay-battleplan-a .lay-pager {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.15rem 0;
}
.lay-battleplan-a .lay-pager button {
  width: 56px;
  min-height: 44px;
  flex: 0 0 auto;
  font-size: 20px;
  line-height: 1;
  color: var(--ink);
  background: var(--parchment);
  border: 1px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
}
.lay-battleplan-a .lay-pager button:disabled { opacity: 0.35; cursor: default; }
.lay-battleplan-a .lay-pager-here {
  flex: 1 1 auto;
  min-width: 0;
  text-align: center;
  font-size: 13px;
  color: var(--ink-dim);
  overflow-wrap: anywhere;
}

/* THE RAIL IS STICKY INSIDE THE CARD, never fixed to the viewport — a
   viewport-fixed rail is what put another layout's own act strip underneath
   two other bars. It is the last flex child, so it sits on the card's floor
   whatever the step above it does. */
.lay-battleplan-a .lay-rail {
  flex: 0 0 auto;
  position: sticky;
  bottom: 0;
  margin: 0 -0.85rem;
  padding: 0.4rem 0.85rem 0.5rem;
  background: var(--parchment-raised);
  border-top: 1px solid var(--border);
}
.lay-battleplan-a .lay-rail-acts {
  display: flex;
  gap: 0.4rem;
  align-items: stretch;
}
.lay-battleplan-a .lay-act {
  flex: 1 1 0;
  min-width: 0;
  min-height: 52px;
  padding: 0.3rem 0.35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  background: var(--parchment);
  border: 1px solid var(--border);
  border-radius: 9px;
  color: var(--ink);
  cursor: pointer;
}
/* The primary is first and widest — the Battle Plan's central verb takes
   the thumb's easiest cell. */
.lay-battleplan-a .lay-act-primary {
  flex: 1.5 1 0;
  background: var(--gold);
  border-color: var(--gold-bright);
  color: var(--parchment);
}
.lay-battleplan-a .lay-act:disabled { opacity: 0.4; cursor: default; }
.lay-battleplan-a .lay-act-word {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.15;
  text-align: center;
  overflow-wrap: anywhere;
}
/* THE TOOLTIP LAW'S TOUCH HOME. Touch has no hover, so the plain meaning is a
   permanent second line under the verb rather than a title nobody can reach. */
.lay-battleplan-a .lay-act-note {
  font-size: 11px;
  line-height: 1.15;
  text-align: center;
  color: var(--ink-dim);
  overflow-wrap: anywhere;
}
.lay-battleplan-a .lay-act-primary .lay-act-note { color: #4a3a15; }
.lay-battleplan-a .lay-rail-note {
  margin: 0.3rem 0 0;
  font-size: 12px;
  color: var(--ink-dim);
}
`;export{W as default};
