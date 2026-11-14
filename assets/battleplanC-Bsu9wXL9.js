import{r as p,j as a}from"./styles-DDO230I-.js";import{h as P,R as h,aL as D,aS as f,G as U,aT as Y,N as K,aU as Z,i as J,aP as X,J as q,L as Q,aV as aa,K as ea}from"./index-ClGvR7HJ.js";const ta=new Map,la={light:"Light",medium:"Medium",deep:"Deep"},ia=["low","medium","high"];function H(d){const s=Math.floor(d/60),o=d%60;return s===0?`${o}m`:o===0?`${s}h`:`${s}h ${o}m`}function O(d){const s=aa[d];if(!s)return null;const o=[];return s.deep&&o.push(`${s.deep} deep`),s.medium&&o.push(`${s.medium} medium`),s.light&&o.push(`${s.light} light`),o.join(" · ")}function oa({orders:d=[],energy:s="high",onSetEnergy:o,today:C,onSelectQuest:N,onCompleteTask:E,onOpenWarTable:u,onReoptimize:w,dodges:S=ta,onVerdictMenu:I,onClose:G,ownRealm:F=!1,onOpenGatehouse:T=null}){var M;const[i,m]=p.useState(null),[L,R]=p.useState(null),x=p.useRef(null),v=e=>{R(e),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>R(null),2600)};p.useEffect(()=>()=>x.current&&clearTimeout(x.current),[]);const[k,W]=p.useState(()=>new Map),b=p.useMemo(()=>{if(k.size===0)return d;const e=d.slice(),l=[...k.values()].sort((t,r)=>t.at-r.at);for(const{at:t,entry:r}of l)e.some(c=>c.task.id===r.task.id)||e.splice(Math.min(t,e.length),0,r);return e},[d,k]),n=p.useMemo(()=>(i==null?void 0:i.kind)!=="step"?null:b.find(e=>e.task.id===i.id)??null,[i,b]),$=()=>m(null);p.useEffect(()=>{if(!i)return;const e=l=>{l.key==="Escape"&&(l.stopPropagation(),m(null))};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[i]);const B=b.reduce((e,l)=>e+P(l.task),0),V=e=>{var l,t;(t=(l=e.target)==null?void 0:l.closest)!=null&&t.call(l,"button")||i&&m(null)},A=e=>k.has(e),_=()=>{if(!n)return;const{id:e}=n.task;E==null||E(n.quest.id,n.task.id);const l=ea(e);if(l){v(Q(l,{ownRealm:F}).say);return}const t=A(e),r=b.findIndex(c=>c.task.id===e);W(c=>{const g=new Map(c);return t?g.delete(e):g.set(e,{at:r<0?c.size:r,entry:n}),g}),v(t?"Seal lifted — it stands open again.":"Sealed. Lift the seal to undo it.")};let y,j;if((i==null?void 0:i.kind)==="energy")y=ia.map(e=>a.jsx(h,{tone:s===e?"primary":"plain",note:O(e),title:`Declare today's energy as ${e}`,onPress:()=>{o==null||o(e),v(`Today's energy is ${e}.`)},children:e},e)),j=L??"The day's shape follows what you declare here.";else if(n){const e=A(n.task.id),l=S.get(n.task.id)??0,t=D({task:n.task,dodged:l});y=[a.jsx(h,{tone:"primary",note:e?"takes the wax back off":"marks it done in the ledger",title:e?"Lift the seal on this step":"Sign this step off",onPress:_,children:e?"Lift the seal":"Sign it off"},"sign"),a.jsx(h,{note:"walk to the road it belongs to",title:`Open ${n.quest.title}`,onPress:()=>N==null?void 0:N(n.quest.id),children:"The road"},"road")],I&&y.push(a.jsx(h,{note:"not today · out of my hands · I don't understand it",title:"Give this step a verdict",onPress:r=>I(r,n.quest.id,n.task.id),children:"Verdicts"},"verdict")),t&&T&&y.push(a.jsx(h,{note:"decide there what to do with it",title:f.press,onPress:()=>T(n.task.id),children:f.press},"gatehouse")),j=L??(t?`${f.line(l)}${T?"":` ${f.where}`}`:"Reading is above; every hand this step has is down here.")}else y=[a.jsx(h,{note:"the whole day on one page, hours drawn in",title:"Open the War Table",onPress:()=>u==null?void 0:u(),disabled:!u,children:"The War Table"},"wartable"),a.jsx(h,{note:"re-plan every open step into winnable days",title:"Reoptimize",onPress:()=>{var e;v(((e=w==null?void 0:w())==null?void 0:e.line)??"Re-planned. The day above is the new one.")},disabled:!w,children:"⟳ Reoptimize"},"reoptimize")],j=L??"Tap a step above to aim it — then act from down here.";let z=null;return(i==null?void 0:i.kind)==="energy"?z=a.jsxs("div",{className:"lay-battleplan-aimed",children:[a.jsx("span",{className:"lay-battleplan-aimed-label",children:"Today's energy"}),a.jsx("span",{className:"lay-battleplan-aimed-title",children:s}),a.jsx("button",{type:"button",className:"lay-battleplan-release",onClick:$,"aria-label":"Leave the energy alone",title:"Leave the energy alone",children:"×"})]}):n&&(z=a.jsxs("div",{className:"lay-battleplan-aimed",children:[a.jsx("span",{className:"lay-battleplan-aimed-dot",style:{background:((M=n.epic)==null?void 0:M.accent)??"var(--gold)"},"aria-hidden":"true"}),a.jsx("span",{className:"lay-battleplan-aimed-title",children:n.task.title}),a.jsx("button",{type:"button",className:"lay-battleplan-release",onClick:$,"aria-label":`Let ${n.task.title} go`,title:"Let this step go",children:"×"})]})),a.jsxs("div",{className:"lay-battleplan-c",children:[a.jsx("style",{children:na}),a.jsx(U,{onClose:G,name:"the battle plan"}),a.jsx(Y,{rail:a.jsxs(a.Fragment,{children:[z,a.jsx(q,{note:j,children:y})]}),children:a.jsxs("div",{className:"lay-battleplan-page",onClick:V,children:[a.jsxs("header",{className:"lay-battleplan-head",children:[a.jsx("h2",{className:"lay-battleplan-date",children:C}),a.jsxs("p",{className:"lay-battleplan-claim",children:["A winnable day, nothing more.",a.jsxs("span",{className:"lay-battleplan-load",title:"Planned time, from effort budgets: light 30m, medium 75m, deep 2.5h",children:["~",H(B)," planned"]})]})]}),a.jsxs("button",{type:"button",className:"lay-battleplan-aim lay-battleplan-energy-aim","aria-pressed":(i==null?void 0:i.kind)==="energy",title:"Aim at today's energy — the three levels stand in the rail",onClick:()=>m({kind:"energy"}),children:[a.jsxs("span",{className:"lay-battleplan-aim-body",children:[a.jsx("span",{className:"lay-battleplan-aim-title",children:"Today’s energy"}),a.jsxs("span",{className:"lay-battleplan-aim-meta",children:[s," · ",O(s)]})]}),a.jsx("span",{className:"lay-battleplan-chev","aria-hidden":"true",children:"›"})]}),b.length===0?a.jsx(K,{children:"Nothing stands on today’s plan yet. Reoptimize, in the rail below, fills it from the open roads."}):a.jsx("ul",{className:"lay-battleplan-steps",children:b.map(({epic:e,quest:l,task:t})=>{const r=A(t.id),c=D({task:t,dodged:S.get(t.id)??0}),g=(i==null?void 0:i.kind)==="step"&&i.id===t.id;return a.jsx("li",{className:"lay-battleplan-step",children:a.jsxs("button",{type:"button",className:"lay-battleplan-aim","aria-pressed":g,"data-sealed":r?"true":"false",title:`Aim at ${t.title} — its hands appear in the rail`,onClick:()=>m({kind:"step",id:t.id}),children:[a.jsx("span",{className:"lay-battleplan-ring","data-sealed":r?"true":"false","aria-hidden":"true"}),a.jsxs("span",{className:"lay-battleplan-aim-body",children:[a.jsxs("span",{className:"lay-battleplan-aim-title",children:[r&&a.jsx("span",{className:"lay-battleplan-sr",children:"Sealed. "}),c&&a.jsxs(a.Fragment,{children:[a.jsxs("span",{className:"lay-battleplan-sr",children:[f.chip,". "]}),a.jsx(Z,{className:"lay-battleplan-bellmark"})," "]}),t.title]}),a.jsxs("span",{className:"lay-battleplan-aim-meta",children:[a.jsx("span",{className:"lay-battleplan-dot",style:{background:(e==null?void 0:e.accent)??"var(--gold)"},"aria-hidden":"true"}),l!=null&&l.title?`${l.title} · `:"",la[t.effort]??"Medium"," · ",H(P(t)),J(t)?a.jsxs("span",{children:[" · ",X(t)]}):t.due?a.jsxs("span",{className:t.hardDue?"lay-battleplan-hard":void 0,children:[" · ",t.hardDue?"⚑ ":"","due ",t.due.slice(5)]}):null]})]}),a.jsx("span",{className:"lay-battleplan-chev","aria-hidden":"true",children:"›"})]})},t.id)})})]})})]})}const na=`
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
/* D497 = B: the drawn bell before a title the Gatehouse asks about */
.lay-battleplan-c .lay-battleplan-bellmark { vertical-align: -2px; font-size: 15px; color: var(--ink, #e9dcc0); }
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
`;export{oa as default};
