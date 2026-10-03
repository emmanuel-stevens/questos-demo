import{r as p,g as I,j as a,R as b,C as W,W as B,N as Y,M as _,A as U,y as Z,a7 as K,x as J}from"./index-BeKx-Ibw.js";const X=new Map,q={light:"Light",medium:"Medium",deep:"Deep"},Q=["low","medium","high"];function R(d){const i=Math.floor(d/60),r=d%60;return i===0?`${r}m`:r===0?`${i}h`:`${i}h ${r}m`}function O(d){const i=K[d];if(!i)return null;const r=[];return i.deep&&r.push(`${i.deep} deep`),i.medium&&r.push(`${i.medium} medium`),i.light&&r.push(`${i.light} light`),r.join(" · ")}function ta({orders:d=[],energy:i="high",onSetEnergy:r,today:P,onSelectQuest:j,onCompleteTask:N,onOpenWarTable:f,onReoptimize:u,dodges:$=X,onVerdictMenu:z,onClose:H,ownRealm:C=!1}){var S;const[l,y]=p.useState(null),[E,A]=p.useState(null),m=p.useRef(null),v=e=>{A(e),m.current&&clearTimeout(m.current),m.current=setTimeout(()=>A(null),2600)};p.useEffect(()=>()=>m.current&&clearTimeout(m.current),[]);const[w,D]=p.useState(()=>new Map),h=p.useMemo(()=>{if(w.size===0)return d;const e=d.slice(),n=[...w.values()].sort((t,o)=>t.at-o.at);for(const{at:t,entry:o}of n)e.some(c=>c.task.id===o.task.id)||e.splice(Math.min(t,e.length),0,o);return e},[d,w]),s=p.useMemo(()=>(l==null?void 0:l.kind)!=="step"?null:h.find(e=>e.task.id===l.id)??null,[l,h]),M=()=>y(null);p.useEffect(()=>{if(!l)return;const e=n=>{n.key==="Escape"&&(n.stopPropagation(),y(null))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[l]);const G=h.reduce((e,n)=>e+I(n.task),0),F=e=>{var n,t;(t=(n=e.target)==null?void 0:n.closest)!=null&&t.call(n,"button")||l&&y(null)},T=e=>w.has(e),V=()=>{if(!s)return;const{id:e}=s.task;N==null||N(s.quest.id,s.task.id);const n=J(e);if(n){v(Z(n,{ownRealm:C}).say);return}const t=T(e),o=h.findIndex(c=>c.task.id===e);D(c=>{const g=new Map(c);return t?g.delete(e):g.set(e,{at:o<0?c.size:o,entry:s}),g}),v(t?"Seal lifted — it stands open again.":"Sealed. Lift the seal to undo it.")};let x,k;if((l==null?void 0:l.kind)==="energy")x=Q.map(e=>a.jsx(b,{tone:i===e?"primary":"plain",note:O(e),title:`Declare today's energy as ${e}`,onPress:()=>{r==null||r(e),v(`Today's energy is ${e}.`)},children:e},e)),k=E??"The day's shape follows what you declare here.";else if(s){const e=T(s.task.id);x=[a.jsx(b,{tone:"primary",note:e?"takes the wax back off":"marks it done in the ledger",title:e?"Lift the seal on this step":"Sign this step off",onPress:V,children:e?"Lift the seal":"Sign it off"},"sign"),a.jsx(b,{note:"walk to the road it belongs to",title:`Open ${s.quest.title}`,onPress:()=>j==null?void 0:j(s.quest.id),children:"The road"},"road")],z&&x.push(a.jsx(b,{note:"not today · out of my hands · I don't understand it",title:"Give this step a verdict",onPress:n=>z(n,s.quest.id,s.task.id),children:"Verdicts"},"verdict")),k=E??"Reading is above; every hand this step has is down here."}else x=[a.jsx(b,{note:"the whole day on one page, hours drawn in",title:"Open the War Table",onPress:()=>f==null?void 0:f(),disabled:!f,children:"The War Table"},"wartable"),a.jsx(b,{note:"re-plan every open step into winnable days",title:"Reoptimize",onPress:()=>{u==null||u(),v("Re-planned. The day above is the new one.")},disabled:!u,children:"⟳ Reoptimize"},"reoptimize")],k=E??"Tap a step above to aim it — then act from down here.";let L=null;return(l==null?void 0:l.kind)==="energy"?L=a.jsxs("div",{className:"lay-battleplan-aimed",children:[a.jsx("span",{className:"lay-battleplan-aimed-label",children:"Today's energy"}),a.jsx("span",{className:"lay-battleplan-aimed-title",children:i}),a.jsx("button",{type:"button",className:"lay-battleplan-release",onClick:M,"aria-label":"Leave the energy alone",title:"Leave the energy alone",children:"×"})]}):s&&(L=a.jsxs("div",{className:"lay-battleplan-aimed",children:[a.jsx("span",{className:"lay-battleplan-aimed-dot",style:{background:((S=s.epic)==null?void 0:S.accent)??"var(--gold)"},"aria-hidden":"true"}),a.jsx("span",{className:"lay-battleplan-aimed-title",children:s.task.title}),a.jsx("button",{type:"button",className:"lay-battleplan-release",onClick:M,"aria-label":`Let ${s.task.title} go`,title:"Let this step go",children:"×"})]})),a.jsxs("div",{className:"lay-battleplan-c",children:[a.jsx("style",{children:aa}),a.jsx(W,{onClose:H,name:"the battle plan"}),a.jsx(B,{rail:a.jsxs(a.Fragment,{children:[L,a.jsx(U,{note:k,children:x})]}),children:a.jsxs("div",{className:"lay-battleplan-page",onClick:F,children:[a.jsxs("header",{className:"lay-battleplan-head",children:[a.jsx("h2",{className:"lay-battleplan-date",children:P}),a.jsxs("p",{className:"lay-battleplan-claim",children:["A winnable day, nothing more.",a.jsxs("span",{className:"lay-battleplan-load",title:"Planned time, from effort budgets: light 30m, medium 75m, deep 2.5h",children:["~",R(G)," planned"]})]})]}),a.jsxs("button",{type:"button",className:"lay-battleplan-aim lay-battleplan-energy-aim","aria-pressed":(l==null?void 0:l.kind)==="energy",title:"Aim at today's energy — the three levels stand in the rail",onClick:()=>y({kind:"energy"}),children:[a.jsxs("span",{className:"lay-battleplan-aim-body",children:[a.jsx("span",{className:"lay-battleplan-aim-title",children:"Today’s energy"}),a.jsxs("span",{className:"lay-battleplan-aim-meta",children:[i," · ",O(i)]})]}),a.jsx("span",{className:"lay-battleplan-chev","aria-hidden":"true",children:"›"})]}),h.length===0?a.jsx(Y,{children:"Nothing stands on today’s plan yet. Reoptimize, in the rail below, fills it from the open roads."}):a.jsx("ul",{className:"lay-battleplan-steps",children:h.map(({epic:e,quest:n,task:t})=>{const o=T(t.id),c=_($.get(t.id)??0)==="mark",g=(l==null?void 0:l.kind)==="step"&&l.id===t.id;return a.jsx("li",{className:"lay-battleplan-step",children:a.jsxs("button",{type:"button",className:"lay-battleplan-aim","aria-pressed":g,"data-sealed":o?"true":"false",title:`Aim at ${t.title} — its hands appear in the rail`,onClick:()=>y({kind:"step",id:t.id}),children:[a.jsx("span",{className:"lay-battleplan-ring","data-sealed":o?"true":"false","aria-hidden":"true"}),a.jsxs("span",{className:"lay-battleplan-aim-body",children:[a.jsxs("span",{className:"lay-battleplan-aim-title",children:[o&&a.jsx("span",{className:"lay-battleplan-sr",children:"Sealed. "}),c&&a.jsxs("span",{className:"lay-battleplan-wilt",title:"Moved past more than once — this step wants a verdict, not an excuse",children:["🥀"," "]}),t.title]}),a.jsxs("span",{className:"lay-battleplan-aim-meta",children:[a.jsx("span",{className:"lay-battleplan-dot",style:{background:(e==null?void 0:e.accent)??"var(--gold)"},"aria-hidden":"true"}),n!=null&&n.title?`${n.title} · `:"",q[t.effort]??"Medium"," · ",R(I(t)),t.due?a.jsxs("span",{className:t.hardDue?"lay-battleplan-hard":void 0,children:[" · ",t.hardDue?"⚑ ":"","due ",t.due.slice(5)]}):null]})]}),a.jsx("span",{className:"lay-battleplan-chev","aria-hidden":"true",children:"›"})]})},t.id)})})]})})]})}const aa=`
.lay-battleplan-c {
  position: relative;
  display: flex;
  flex-direction: column;
  /* IT IS SIZED TO THE SLOT IT IS ACTUALLY GIVEN, NOT TO THE VIEWPORT. This
     renders in the .study-right slot — a flex child of .study-wrap, which is
     inset 0 with padding 5rem 2rem 2rem and align-items center. A 100dvh child
     of a box that tall overflows by its parent's own padding, and centring
     splits the overflow evenly: the close and the sticky rail — the entire
     acting half of a layout whose whole thesis is "acting is below" — each land
     outside the visible box. The 7.5rem is the shipped .study-card's own
     number, so this card is bounded exactly as the one it replaces.
     dvh AND NEVER vh — the first adversarial finding. Inside the box nothing is
     measured against the screen at all: the rail sizes itself and the page takes
     what is left, so nothing is re-derived when Safari's toolbars move. */
  height: 100%;
  max-height: calc(100dvh - 7.5rem);
  /* the Zone Contract's rail width, the same clamp .study-right carries —
     without it the card is shrink-to-fit against whatever the flex row leaves */
  width: clamp(300px, 23vw, 420px);
  overflow: hidden;
  background: var(--parchment, #1c1710);
  color: var(--ink, #e9dcc0);
}
/* Under 1100px .study-wrap becomes a column and hands its cards
   min(640px, 94vw). This card takes the same width there, so replacing
   .study-right never narrows the day to a desktop rail on a phone. */
@media (max-width: 1100px) {
  .lay-battleplan-c {
    width: min(640px, 94vw);
  }
}
.lay-battleplan-c .lay-close {
  position: absolute;
  top: calc(env(safe-area-inset-top, 0px) + 6px);
  right: 6px;
  z-index: 4;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--border, #3d3320);
  background: rgba(28, 23, 16, 0.85);
  color: var(--ink, #e9dcc0);
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
}
.lay-battleplan-c .lay-waterline {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
}
/* THE PAGE ABOVE THE WATERLINE — the surface's ONE scroller. Nothing is fixed
   over it, so nothing can be trapped beneath anything. */
.lay-battleplan-c .lay-above {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
}
.lay-battleplan-c .lay-battleplan-page {
  padding-bottom: 12px;
}
.lay-battleplan-c .lay-battleplan-head {
  padding: calc(env(safe-area-inset-top, 0px) + 14px) 58px 12px 14px;
}
.lay-battleplan-c .lay-battleplan-date {
  margin: 0;
  font-family: 'Cinzel', Georgia, serif;
  font-size: 24px;
  line-height: 1.15;
  color: var(--gold-bright, #f4c95d);
}
.lay-battleplan-c .lay-battleplan-claim {
  margin: 6px 0 0;
  font-family: 'IM Fell English', Georgia, serif;
  font-style: italic;
  font-size: 16px;
  color: var(--ink, #e9dcc0);
}
.lay-battleplan-c .lay-battleplan-load {
  display: inline-block;
  margin-left: 8px;
  font-style: normal;
  font-family: inherit;
  font-size: 13px;
  color: var(--ink-dim, #a8987a);
}
/* THE AIM — one shape for a step and for the energy line, because they do the
   same thing: they point, and the rail acts. 56px of row so the target clears
   44pt with room for the finger's own slop. */
.lay-battleplan-c .lay-battleplan-aim {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 56px;
  padding: 10px 12px;
  text-align: left;
  font: inherit;
  color: inherit;
  background: transparent;
  border: 0;
  border-top: 1px solid var(--border, #3d3320);
  cursor: pointer;
}
.lay-battleplan-c .lay-battleplan-aim[aria-pressed='true'] {
  background: rgba(217, 164, 65, 0.16);
  box-shadow: inset 3px 0 0 var(--gold-bright, #f4c95d);
}
.lay-battleplan-c .lay-battleplan-aim[data-sealed='true'] .lay-battleplan-aim-title {
  color: var(--ink-dim, #a8987a);
  text-decoration: line-through;
  text-decoration-color: rgba(168, 152, 122, 0.6);
}
.lay-battleplan-c .lay-battleplan-aim-body {
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1 1 auto;
  min-width: 0;
}
.lay-battleplan-c .lay-battleplan-aim-title {
  font-size: 16px;
  line-height: 1.25;
  color: var(--ink, #e9dcc0);
}
/* Wrapping, never truncating: a step's title is the one thing on this surface
   the knight cannot look up somewhere else. */
.lay-battleplan-c .lay-battleplan-aim-meta {
  font-size: 13px;
  line-height: 1.3;
  color: var(--ink-dim, #a8987a);
}
.lay-battleplan-c .lay-battleplan-hard {
  color: var(--gold-bright, #f4c95d);
}
.lay-battleplan-c .lay-battleplan-dot,
.lay-battleplan-c .lay-battleplan-aimed-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
  vertical-align: middle;
}
.lay-battleplan-c .lay-battleplan-ring {
  flex: 0 0 auto;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid var(--ink-dim, #a8987a);
  align-self: flex-start;
  margin-top: 3px;
}
.lay-battleplan-c .lay-battleplan-ring[data-sealed='true'] {
  background: var(--gold, #d9a441);
  border-color: var(--gold-bright, #f4c95d);
}
.lay-battleplan-c .lay-battleplan-chev {
  flex: 0 0 auto;
  color: var(--ink-dim, #a8987a);
  font-size: 20px;
  line-height: 1;
}
.lay-battleplan-c .lay-battleplan-steps {
  margin: 0;
  padding: 0;
  list-style: none;
}
.lay-battleplan-c .lay-battleplan-step {
  list-style: none;
}
.lay-battleplan-c .lay-nothing {
  margin: 0;
  padding: 22px 16px 26px;
  font-size: 16px;
  line-height: 1.45;
  color: var(--ink-dim, #a8987a);
  border-top: 1px solid var(--border, #3d3320);
}
.lay-battleplan-c .lay-battleplan-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}
/* BELOW THE WATERLINE. The aimed head and the rail are one block and both are
   in normal flow at the end of the flex column — this is the repair for the two
   findings about trapped content, and the reason there is no z-index war. */
.lay-battleplan-c .lay-battleplan-aimed {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 6px 8px 14px;
  background: rgba(217, 164, 65, 0.16);
  border-top: 1px solid var(--gold, #d9a441);
}
.lay-battleplan-c .lay-battleplan-aimed-label {
  font-size: 13px;
  color: var(--ink-dim, #a8987a);
}
.lay-battleplan-c .lay-battleplan-aimed-title {
  flex: 1 1 auto;
  min-width: 0;
  font-size: 16px;
  line-height: 1.25;
  color: var(--gold-bright, #f4c95d);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.lay-battleplan-c .lay-battleplan-release {
  flex: 0 0 auto;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--border, #3d3320);
  background: transparent;
  color: var(--ink, #e9dcc0);
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
}
.lay-battleplan-c .lay-rail {
  flex: 0 0 auto;
  position: sticky;
  bottom: 0;
  z-index: 2;
  background: var(--parchment-raised, #241d13);
  border-top: 1px solid var(--border, #3d3320);
  box-shadow: 0 -10px 24px rgba(0, 0, 0, 0.45);
  padding: 8px 10px calc(8px + env(safe-area-inset-bottom, 0px));
}
.lay-battleplan-c .lay-rail-acts {
  display: flex;
  gap: 8px;
}
.lay-battleplan-c .lay-act {
  flex: 1 1 0;
  min-width: 44px;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  padding: 8px 6px;
  border-radius: 12px;
  border: 1px solid var(--border, #3d3320);
  background: rgba(233, 220, 192, 0.06);
  color: var(--ink, #e9dcc0);
  font: inherit;
  cursor: pointer;
}
.lay-battleplan-c .lay-act[disabled] {
  opacity: 0.45;
  cursor: default;
}
.lay-battleplan-c .lay-act-word {
  font-size: 15px;
  font-weight: 600;
  text-align: center;
}
/* THE TOOLTIP LAW'S TOUCH HOME — the plain meaning rides permanently under the
   verb, because touch has no hover and iOS steals the long press. */
.lay-battleplan-c .lay-act-note {
  font-size: 12px;
  line-height: 1.2;
  text-align: center;
  color: var(--ink-dim, #a8987a);
}
/* The primary act is the rail's first and widest cell — it carries half again
   the width of its neighbours, which is what "widest" has to mean on 393pt. */
.lay-battleplan-c .lay-act-primary {
  flex: 1.6 1 0;
  background: linear-gradient(180deg, var(--gold-bright, #f4c95d), var(--gold, #d9a441));
  border-color: var(--gold-bright, #f4c95d);
  color: #241a06;
}
/* Solid, never an alpha — opacity is part of contrast, and this realm has
   already shipped a 5.56:1 colour that measured 3.69:1 once its own alpha
   applied. */
.lay-battleplan-c .lay-act-primary .lay-act-note {
  color: #33260c;
}
.lay-battleplan-c .lay-rail-note {
  margin: 8px 2px 0;
  font-size: 13px;
  line-height: 1.35;
  text-align: center;
  color: var(--ink-dim, #a8987a);
}
@media (prefers-reduced-motion: reduce) {
  .lay-battleplan-c * { transition: none !important; animation: none !important; }
}
`;export{ta as default};
