import{r as m,j as e}from"./styles-VMcKyWxm.js";import{c1 as pe,c2 as de,c3 as ce,c4 as be,au as ye,aG as he,aH as me,aI as xe,aJ as ue,h as ge,c5 as fe,aS as A,r as j,c6 as ke,c7 as je,c8 as we,aK as K,c9 as Ne,ca as ve,aL as H,cb as W,N as $e,cc as g,cd as P,ce as Ee,aM as L,aN as ze,aO as Se,aQ as De,aR as Pe,i as q,aT as B,aU as Le,aV as Ae,aW as Ie,aX as _e,aY as Me}from"./index-D68ZsN-E.js";import{u as Ue,R as Ce,L as Fe}from"./family-h7MecHvr.js";const Z=Object.freeze({word:"Shuffle",label:"Shuffle the day",title:"Re-plan the open work into winnable days (the desk calls it Reoptimize)"}),Te=de(ce("hours")),X=`your Quarters, under ${Te.name} → ${pe.hours.name}`,R=Object.freeze({empty:`No orders on the board today. ${Z.word}, at the top of the scroll, packs the open work into winnable days; the hours the day is built on are set in ${X}.`,placeholder:`The hours are the realm’s placeholders until you set your own in ${X}.`});function Oe(r,{clock:i}={}){let n={clientX:0,clientY:0},o=!1;const p=be({onHold:()=>{o=!0,r==null||r(n)},...i?{clock:i}:{}});return{onPointerDown(l){o=!1,l.pointerType!=="mouse"&&(n={clientX:l.clientX,clientY:l.clientY},p.down(l.clientX,l.clientY))},onPointerMove(l){p.move(l.clientX,l.clientY)},onPointerUp(){p.end()},onPointerCancel(){p.end()},onTouchEnd(l){var h;o&&l.cancelable!==!1&&((h=l.preventDefault)==null||h.call(l))},takeClick(){const l=o;return o=!1,p.takeClick(),l}}}const Ye=r=>({preventDefault:()=>{},clientX:r.clientX,clientY:r.clientY}),He=new Map,V={light:"Light",medium:"Medium",deep:"Deep"};function We(r){const i=Math.floor(r/60),n=r%60;return i===0?`${n}m`:n===0?`${i}h`:`${i}h ${n}m`}function G(r){const i=(r%1440+1440)%1440,n=String(Math.floor(i/60)).padStart(2,"0"),o=String(i%60).padStart(2,"0");return De(`${n}:${o}`)}function Ge({sheetYields:r=!1,guide:i=null,orders:n=[],energy:o="high",onSetEnergy:p,isCampDay:l=!1,onToggleCampDay:h,today:S,onSelectQuest:w,onCompleteTask:f,onReoptimize:N,onOpenBookshelf:b=null,dodges:t=He,anchors:v,onVerdictMenu:$,onHoldMenu:D=null,onOpenRite:k=null,onClose:I,rolled:x=!0,onRoll:y,stepsMark:s=null,noDay:d=[],onNameRiteDay:E=null,onOpenGatehouse:z=null,held:U=[],onTickHeld:C=null}){const Q=Ue(),[,ee]=m.useState(0),[ae,_]=ye();m.useEffect(()=>{x&&_(null)},[x,_]),m.useEffect(()=>{const a=setInterval(()=>ee(c=>c+1),6e4);return()=>clearInterval(a)},[]);const{hours:M,placeholder:le}=m.useMemo(()=>he({anchors:v}),[v]),te=m.useMemo(()=>me(M),[M]),F=m.useMemo(()=>xe(n,a=>a.task.effort,a=>a.task.title,a=>a.urgent===!0),[n]),T=new Date,O=ue(T.getHours()*60+T.getMinutes(),M),se=n.reduce((a,c)=>a+ge(c.task),0),ie=n.length===0,Y=(i==null?void 0:i.target)==="task"?n.find(a=>a.task.id===i.taskId):null,u=Y??n[0]??null,ne=!!Y||(i==null?void 0:i.target)==="energy";if(x||r)return e.jsxs("div",{className:"lay-bpe",children:[e.jsx("style",{children:J}),e.jsxs("div",{className:`lay-bpe-rod${ne?" guide-lit":""}`,style:{bottom:`${Q+ke}px`,height:`${fe}px`},children:[u&&A(u.task,j())!=="none"&&e.jsx(Ce,{onPress:()=>{A(u.task,j())!=="none"&&(f==null||f(u.quest.id,u.task.id))},label:`Sign off ${u.task.title}`}),e.jsxs("button",{type:"button",className:"lay-bpe-rodbtn",onClick:()=>y==null?void 0:y(!1),"aria-label":"Unroll the day",children:[e.jsx("span",{className:"lay-rod-text",children:u?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"lay-rod-kicker",children:"Next"}),u.task.title]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"lay-rod-kicker",children:"The day"}),S," · unroll to plan"]})}),e.jsx("span",{className:"lay-rod-chev","aria-hidden":"true",children:"⌃"})]})]})]});const re=()=>y==null?void 0:y(!0),oe={...Z,onPress:()=>{var a;return _(((a=N==null?void 0:N())==null?void 0:a.line)??null)}};return e.jsxs("div",{className:"lay-bpe",children:[e.jsx("style",{children:J}),e.jsxs(Fe,{name:"The day",badge:je.battleplan,rods:!0,onSetDown:re,lead:oe,said:ae,ariaLabel:"The day, unrolled",children:[e.jsxs("div",{className:"lay-bpe-top",children:[e.jsx(we,{text:S,className:"lay-bpe-date",size:52}),e.jsxs("p",{className:"lay-bpe-claim",children:[e.jsx("span",{children:"A winnable day, nothing more."}),e.jsxs("span",{title:"Planned time, from effort budgets: light 30m, medium 75m, deep 2.5h",children:["~",We(se)," planned"]})]})]}),e.jsxs("div",{className:`lay-bpe-energy${H(i,"energy")?` ${K}`:""}`,role:"group","aria-label":"Today's energy",children:[e.jsx("span",{className:"lay-bpe-energy-label",children:"Today's energy"}),e.jsx("button",{type:"button",className:`lay-bpe-energy-btn energy-cell energy-camp${l?" on lit":""}`,"aria-pressed":!!l,"aria-label":l?"Camp Day — resting today":"Camp Day — rest today",title:"Camp Day — a day of rest: streaks pause instead of break",onClick:()=>{l||h==null||h()},children:e.jsx(Ne,{})}),["low","medium","high"].map((a,c)=>e.jsx("button",{type:"button",className:`lay-bpe-energy-btn energy-cell${!l&&o===a?" on lit":""}`,"aria-pressed":!l&&o===a,"aria-label":`${a[0].toUpperCase()}${a.slice(1)} energy`,onClick:()=>p==null?void 0:p(a),title:`${a[0].toUpperCase()}${a.slice(1)} energy — the day's five are chosen against it`,children:e.jsx(ve,{n:c+1})},a))]}),b&&e.jsx("div",{className:"lay-bpe-acts",children:e.jsx("button",{type:"button",className:"lay-bpe-allquests",onClick:b,title:W.title,children:W.word})}),ie?e.jsx($e,{children:R.empty}):te.map(a=>e.jsxs("section",{className:`lay-bpe-field${O===a.id?" is-now":""}`,children:[e.jsxs("header",{className:"lay-bpe-field-head",children:[e.jsx("span",{className:"lay-bpe-field-name",children:a.label}),e.jsxs("span",{className:"lay-bpe-field-hours",children:[G(a.from)," – ",G(a.to)]}),O===a.id&&e.jsx("span",{className:"lay-bpe-here",children:"you are here"})]}),F[a.id].length===0?e.jsx("p",{className:"lay-bpe-open",children:"Open ground."}):e.jsx("ul",{className:"lay-bpe-list",children:F[a.id].map(c=>e.jsx(qe,{entry:c,lit:H(i,"task",c.task.id),dodges:t,onSelectQuest:w,onCompleteTask:f,onVerdictMenu:$,onHoldMenu:D,onOpenRite:k,onOpenGatehouse:z,stepsLine:s&&s.taskId===c.task.id?s.line:null},c.task.id))})]},a.id)),U.length>0&&e.jsxs("section",{className:"lay-bpe-field lay-bpe-noday lay-bpe-held","aria-label":g.head,children:[e.jsx("header",{className:"lay-bpe-field-head",children:e.jsx("span",{className:"lay-bpe-field-name",children:g.head})}),e.jsx("ul",{className:"lay-bpe-list",children:U.map(a=>e.jsxs("li",{className:`lay-bpe-row${P(a)?" is-done":""}`,children:[C&&e.jsx("button",{type:"button",className:"lay-bpe-sign","aria-pressed":P(a),title:P(a)?g.untick:g.tick,"aria-label":P(a)?`${a.step.title}: ${g.untick}`:`${a.step.title}: ${g.tick}`,onClick:()=>C(a.id),children:e.jsx("span",{className:"lay-bpe-ring","aria-hidden":"true"})}),e.jsxs("button",{type:"button",className:"lay-bpe-main",onClick:()=>z==null?void 0:z(),disabled:!z,title:g.press,children:[e.jsx("span",{className:"lay-bpe-title",children:a.step.title}),e.jsx("span",{className:"lay-bpe-meta",children:Ee(a)})]})]},a.id))}),e.jsx("p",{className:"lay-bpe-open",children:g.why})]}),d.length>0&&e.jsxs("section",{className:"lay-bpe-field lay-bpe-noday","aria-label":L.head,children:[e.jsx("header",{className:"lay-bpe-field-head",children:e.jsx("span",{className:"lay-bpe-field-name",children:L.head})}),e.jsx("ul",{className:"lay-bpe-list",children:d.map(a=>e.jsxs("li",{className:"lay-bpe-row",children:[e.jsxs("button",{type:"button",className:"lay-bpe-main",onClick:()=>k?k(a.task.id):w==null?void 0:w(a.quest.id),title:k?L.press:`Open ${a.quest.title}`,children:[e.jsx("span",{className:"lay-bpe-title",children:a.task.title}),e.jsxs("span",{className:"lay-bpe-meta",children:[e.jsx("i",{className:"lay-bpe-accent",style:{background:a.epic.accent},"aria-hidden":"true"}),V[a.task.effort]??"Medium"," · ",ze(a.task,j())]})]}),E&&e.jsx(Se,{dress:"lay-bpe",short:!0,onName:c=>E(a.quest.id,a.task.id,c)})]},a.task.id))}),e.jsx("p",{className:"lay-bpe-open",children:L.why})]}),le&&e.jsx("p",{className:"lay-bpe-placeholder",children:R.placeholder})]})]})}function qe({entry:r,dodges:i,onSelectQuest:n,onCompleteTask:o,onVerdictMenu:p,onHoldMenu:l=null,onOpenRite:h=null,onOpenGatehouse:S=null,lit:w=!1,stepsLine:f=null}){const{epic:N,quest:b,task:t}=r,v=i.get(t.id)??0,$=Pe({task:t,dodged:v}),[D,k]=m.useState(!1),I=!!h&&q(t),x=m.useRef(null);x.current=l?d=>l(Ye(d),b.id,t.id):null;const y=m.useRef(null);y.current||(y.current=Oe(d=>{var E;return(E=x.current)==null?void 0:E.call(x,d)}));const s=l?y.current:null;return e.jsxs("li",{className:`lay-bpe-row${$?" is-asked":""}${w?` ${K}`:""}`,children:[A(t,j())==="none"?e.jsx("span",{className:"lay-bpe-sign is-kept",role:"img","aria-label":B(t,j()),title:B(t,j()),children:e.jsx("span",{className:"lay-bpe-ring","aria-hidden":"true"})}):e.jsx("button",{type:"button",className:"lay-bpe-sign",title:"Sign it off","aria-label":`Sign off ${t.title}`,onClick:()=>{A(t,j())!=="none"&&(o==null||o(b.id,t.id))},children:e.jsx("span",{className:"lay-bpe-ring","aria-hidden":"true"})}),$&&e.jsx(Le,{title:t.title,open:D,onToggle:()=>k(d=>!d),className:"lay-bpe-bell"}),e.jsxs("button",{type:"button",className:"lay-bpe-main","data-holdable":s?"":void 0,onClick:()=>{s!=null&&s.takeClick()||(I?h(t.id):n==null||n(b.id))},onPointerDown:s==null?void 0:s.onPointerDown,onPointerMove:s==null?void 0:s.onPointerMove,onPointerUp:s==null?void 0:s.onPointerUp,onPointerCancel:s==null?void 0:s.onPointerCancel,onTouchEnd:s==null?void 0:s.onTouchEnd,onContextMenu:p?d=>p(d,b.id,t.id):l?d=>l(d,b.id,t.id):void 0,title:I?"Open this rite’s page":`Open ${b.title}`,children:[e.jsx("span",{className:"lay-bpe-title",children:t.title}),e.jsxs("span",{className:"lay-bpe-meta",children:[e.jsx("i",{className:"lay-bpe-accent",style:{background:N.accent},"aria-hidden":"true"}),V[t.effort]??"Medium",q(t)?` · ${Ae(t)}`:t.due?` · ${t.hardDue?"⚑ ":""}due ${t.due.slice(5)}`:"",e.jsx(Ie,{task:t}),e.jsx(_e,{task:t})]}),f&&e.jsx("span",{className:"lay-bpe-steps",children:f})]}),p&&e.jsx("button",{type:"button",className:"lay-bpe-more",onClick:d=>p(d,b.id,t.id),title:"Give this step a verdict — not today, out of my hands, needs more context…","aria-label":`Verdicts for ${t.title}`,children:"⋯"}),$&&D&&e.jsx(Me,{taskId:t.id,dodged:v,onOpenGatehouse:S,onDone:()=>k(!1),className:"lay-bpe-ask"})]})}const J=`
.lay-bpe .lay-bpe-rod {
  position: fixed; left: 8px; right: 8px; z-index: 30; border-radius: 26px;
  background: linear-gradient(#d9c39a, #b89b6a 55%, #8c7248);
  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.55), inset 0 -3px 6px rgba(0, 0, 0, 0.25);
  display: flex; align-items: center; gap: 4px; padding: 0 6px 0 4px; color: #2b2013;
}
.lay-bpe .lay-bpe-rod.guide-lit { border-radius: 26px; }
.lay-bpe .lay-bpe-rodbtn {
  flex: 1 1 auto; min-width: 0; min-height: 44px; display: flex; align-items: center; gap: 8px;
  border: 0; background: none; color: #2b2013; font: inherit; font-size: 15px; text-align: left; padding: 0 4px; cursor: pointer;
}
.lay-bpe .lay-bpe-date { margin: 0.2rem 0 0; font-family: 'Cinzel', Georgia, serif; font-size: 22px; line-height: 1.2; color: var(--ink); }
.lay-bpe .lay-bpe-claim {
  display: flex; align-items: baseline; justify-content: space-between; gap: 0.6rem;
  margin: 0.25rem 0 0.5rem; font-size: 14.5px; font-style: italic; color: var(--ink-dim);
}
.lay-bpe .lay-bpe-energy { display: flex; align-items: center; gap: 0.35rem; margin: 0 0 0.4rem; }
.lay-bpe .lay-bpe-energy.guide-lit { border-radius: 999px; padding: 0.15rem 0.45rem; }
.lay-bpe .lay-bpe-energy-label { font-size: 12px; color: var(--ink-dim); margin-right: 0.2rem; }
.lay-bpe .lay-bpe-energy-btn {
  min-height: 44px; min-width: 68px; padding: 0 0.5rem; border: 1px solid var(--border); border-radius: 6px;
  background: transparent; color: var(--ink-dim); font-family: inherit; font-size: 14px; cursor: pointer;
}
.lay-bpe .lay-bpe-energy-btn.on { border-color: var(--gold); color: var(--ink); background: rgba(122, 92, 14, 0.12); }
.lay-bpe .lay-bpe-acts { display: flex; margin: 0 0 0.3rem; }
.lay-bpe .lay-bpe-allquests {
  min-height: 44px; min-width: 44px; padding: 0 0.9rem; border: 1px solid var(--border); border-radius: 6px;
  background: transparent; color: var(--ink); font-family: inherit; font-size: 14px; cursor: pointer;
}
.lay-bpe .lay-bpe-field { margin-top: 0.5rem; }
.lay-bpe .lay-bpe-field-head {
  display: flex; align-items: baseline; gap: 0.45rem; padding: 0.45rem 0 0.2rem;
  border-bottom: 1px solid rgba(43, 32, 19, 0.35);
}
.lay-bpe .lay-bpe-field-name { font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink); }
.lay-bpe .lay-bpe-field-hours { font-size: 13px; color: var(--ink-dim); }
.lay-bpe .lay-bpe-here { margin-left: auto; font-size: var(--lay-fs-fine); color: var(--gold); }
.lay-bpe .lay-bpe-open { margin: 0.4rem 0; font-size: 13px; font-style: italic; color: var(--ink-dim); }
.lay-bpe .lay-bpe-list { list-style: none; margin: 0; padding: 0; }
.lay-bpe .lay-bpe-row { display: flex; align-items: center; gap: 0.35rem; min-height: 56px; border-bottom: 1px solid rgba(43, 32, 19, 0.18); }
.lay-bpe .lay-bpe-row.guide-lit { border-radius: 10px; }
.lay-bpe .lay-bpe-sign { flex: 0 0 auto; width: 44px; height: 44px; display: grid; place-items: center; padding: 0; border: 0; background: transparent; cursor: pointer; }
.lay-bpe .lay-bpe-ring { width: 22px; height: 22px; border: 2px solid var(--ink); border-radius: 50%; }
.lay-bpe .lay-bpe-sign.is-kept { cursor: default; }
/* X333: a held step ticked on the plan — the ring filled, the words struck, as
   a sealed row wears them on the desk; it has paid nothing, and says so */
.lay-bpe .lay-bpe-held .is-done .lay-bpe-ring { background: var(--ink); }
.lay-bpe .lay-bpe-held .is-done .lay-bpe-title { text-decoration: line-through; opacity: 0.7; }
.lay-bpe .lay-bpe-sign.is-kept .lay-bpe-ring { background: var(--ink); }
.lay-bpe .lay-bpe-noday { margin-top: 0.9rem; }
.lay-bpe .lay-bpe-noday .lay-bpe-field-head { border-bottom-style: dashed; }
/* B231 (D364 = A): the weekday choice on a no-day row, in the paper's own
   idiom (the energy presses'): a 44pt press at the row's end, gold-edged while
   open; the seven stand inline under the row, 44pt each, one ink, none pressed
   for him. The row wraps so the list takes the whole width. */
.lay-bpe .lay-bpe-noday .lay-bpe-row { flex-wrap: wrap; }
.lay-bpe .lay-bpe-nameday { display: contents; }
.lay-bpe .lay-bpe-nameday-press {
  flex: 0 0 auto; min-height: 44px; min-width: 44px; padding: 0 12px;
  border: 1px solid rgba(43, 32, 19, 0.35); border-radius: 6px; background: transparent;
  color: var(--ink); font-family: inherit; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; cursor: pointer;
}
.lay-bpe .lay-bpe-nameday.is-open .lay-bpe-nameday-press { border-color: var(--gold); background: rgba(122, 92, 14, 0.12); }
.lay-bpe .lay-bpe-nameday-caret { margin-left: 6px; font-size: 11px; }
.lay-bpe .lay-bpe-nameday-days { flex-basis: 100%; display: flex; flex-direction: column; padding: 0 0 6px; }
.lay-bpe .lay-bpe-nameday-head { padding: 6px 0 2px; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-dim); }
.lay-bpe .lay-bpe-nameday-day {
  min-height: 44px; display: flex; align-items: center; gap: 8px; padding: 0 4px;
  border: 0; border-top: 1px solid rgba(43, 32, 19, 0.18); background: transparent;
  color: var(--ink); font: inherit; font-size: 16px; text-align: left; cursor: pointer;
}
.lay-bpe .lay-bpe-nameday-day:hover { background: rgba(122, 92, 14, 0.12); }
.lay-bpe .lay-bpe-nameday-today { font-size: 12px; font-style: italic; color: var(--ink-dim); }
.lay-bpe .lay-bpe-main { flex: 1 1 auto; min-width: 0; min-height: 44px; padding: 0.35rem 0.2rem; border: 0; background: none; color: var(--ink); text-align: left; font: inherit; cursor: pointer; }
/* A HELD FINGER OPENS THE STEP'S MENU (src/rowHold.js): iOS must not spend the
   hold on selecting the title or on its own callout over the row. */
.lay-bpe .lay-bpe-main[data-holdable] { -webkit-touch-callout: none; -webkit-user-select: none; user-select: none; }
.lay-bpe .lay-bpe-title { display: block; font-size: 16px; line-height: 1.25; overflow-wrap: anywhere; }
.lay-bpe .lay-bpe-meta { display: block; margin-top: 0.15rem; font-size: 13px; color: var(--ink-dim); }
.lay-bpe .lay-bpe-steps { display: block; margin-top: 0.15rem; font-size: 13px; color: var(--ink-dim); font-variant-numeric: tabular-nums; }
/* D497 = B: the Gatehouse's bell before the title, a 44px press whose drawn
   bell sits on the title's first line (lifted 3px to meet it); its box
   reaches under the title's first letters by 12px so the title stands close
   beside it, as the rose did. The
   answer opens under the row, across the title's column, in the paper's ink, on
   an opaque card (no see-through layers on the phone). */
.lay-bpe .lay-bpe-row.is-asked { flex-wrap: wrap; }
.lay-bpe .lay-bpe-bell {
  position: relative; z-index: 1; flex: 0 0 auto; align-self: flex-start; width: 44px; height: 44px; margin: -3px -12px 0 -6px;
  display: grid; place-items: center; padding: 0; border: 0; border-radius: 6px; background: transparent;
  color: var(--ink); font-size: 15px; cursor: pointer;
}
.lay-bpe .lay-bpe-bell[aria-expanded="true"] { color: var(--gold); }
.lay-bpe .lay-bpe-ask {
  flex: 0 0 calc(100% - 88px); box-sizing: border-box; margin: 0 44px 0.5rem 44px; padding: 0.6rem 0.7rem;
  border: 1px solid rgba(43, 32, 19, 0.35); border-radius: 8px; background: #fbf5e4;
}
.lay-bpe .lay-bpe-ask p { margin: 0 0 0.5rem; font-size: 14px; line-height: 1.35; color: var(--ink); }
.lay-bpe .lay-bpe-ask p:last-child { margin-bottom: 0; color: var(--ink-dim); font-style: italic; }
.lay-bpe .lay-bpe-ask button {
  min-height: 44px; padding: 0 0.9rem; border: 1px solid var(--border); border-radius: 6px;
  background: rgba(122, 92, 14, 0.12); color: var(--ink); font-family: inherit; font-size: 14px; cursor: pointer;
}
.lay-bpe .lay-bpe-accent { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 0.35rem; vertical-align: middle; }
.lay-bpe .lay-bpe-more { flex: 0 0 auto; width: 44px; height: 44px; border: 0; background: none; color: var(--ink-dim); font-size: 20px; cursor: pointer; }
.lay-bpe .lay-bpe-placeholder { margin: 0.6rem 0; font-size: var(--lay-fs-fine); font-style: italic; color: var(--ink-dim); }
`;export{Ge as default};
