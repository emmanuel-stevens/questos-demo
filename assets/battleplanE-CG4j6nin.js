import{r as x,j as e}from"./styles-DDO230I-.js";import{bV as pe,bW as de,bX as oe,ap as be,aA as ce,aB as ye,aC as he,aD as me,h as xe,bY as ge,aM as L,r as g,bZ as ue,b_ as fe,b$ as ke,aE as K,c0 as je,c1 as Ne,aF as q,c2 as U,N as we,c3 as y,c4 as z,c5 as ve,aG as E,aH as $e,aI as ze,aK as Ee,aL as Le,i as C,aN as R,aO as Ae,aP as De,aQ as Se,aR as _e}from"./index-ClGvR7HJ.js";import{u as Ie,R as Me,L as Fe}from"./family-B7csnT5Q.js";const Z=Object.freeze({word:"Shuffle",label:"Shuffle the day",title:"Re-plan the open work into winnable days (the desk calls it Reoptimize)"}),Be=de(oe("hours")),T=`your Quarters, under ${Be.name} → ${pe.hours.name}`,G=Object.freeze({empty:`No orders on the board today. ${Z.word}, at the top of the scroll, packs the open work into winnable days; the hours the day is built on are set in ${T}.`,placeholder:`The hours are the realm’s placeholders until you set your own in ${T}.`}),Oe=new Map,J={light:"Light",medium:"Medium",deep:"Deep"};function We(d){const s=Math.floor(d/60),t=d%60;return s===0?`${t}m`:t===0?`${s}h`:`${s}h ${t}m`}function Y(d){const s=(d%1440+1440)%1440,t=String(Math.floor(s/60)).padStart(2,"0"),o=String(s%60).padStart(2,"0");return Ee(`${t}:${o}`)}function Ce({sheetYields:d=!1,guide:s=null,orders:t=[],energy:o="high",onSetEnergy:b,isCampDay:r=!1,onToggleCampDay:j,today:w,onSelectQuest:h,onCompleteTask:u,onReoptimize:n,onOpenBookshelf:l=null,dodges:v=Oe,anchors:f,onVerdictMenu:$,onOpenRite:m=null,onClose:A,rolled:p=!0,onRoll:k,stepsMark:D=null,noDay:I=[],onNameRiteDay:M=null,onOpenGatehouse:N=null,held:F=[],onTickHeld:B=null}){const V=Ie(),[,Q]=x.useState(0),[ee,S]=be();x.useEffect(()=>{p&&S(null)},[p,S]),x.useEffect(()=>{const a=setInterval(()=>Q(i=>i+1),6e4);return()=>clearInterval(a)},[]);const{hours:_,placeholder:ae}=x.useMemo(()=>ce({anchors:f}),[f]),le=x.useMemo(()=>ye(_),[_]),O=x.useMemo(()=>he(t,a=>a.task.effort,a=>a.task.title,a=>a.urgent===!0),[t]),W=new Date,H=me(W.getHours()*60+W.getMinutes(),_),se=t.reduce((a,i)=>a+xe(i.task),0),te=t.length===0,P=(s==null?void 0:s.target)==="task"?t.find(a=>a.task.id===s.taskId):null,c=P??t[0]??null,ie=!!P||(s==null?void 0:s.target)==="energy";if(p||d)return e.jsxs("div",{className:"lay-bpe",children:[e.jsx("style",{children:X}),e.jsxs("div",{className:`lay-bpe-rod${ie?" guide-lit":""}`,style:{bottom:`${V+ue}px`,height:`${ge}px`},children:[c&&L(c.task,g())!=="none"&&e.jsx(Me,{onPress:()=>{L(c.task,g())!=="none"&&(u==null||u(c.quest.id,c.task.id))},label:`Sign off ${c.task.title}`}),e.jsxs("button",{type:"button",className:"lay-bpe-rodbtn",onClick:()=>k==null?void 0:k(!1),"aria-label":"Unroll the day",children:[e.jsx("span",{className:"lay-rod-text",children:c?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"lay-rod-kicker",children:"Next"}),c.task.title]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"lay-rod-kicker",children:"The day"}),w," · unroll to plan"]})}),e.jsx("span",{className:"lay-rod-chev","aria-hidden":"true",children:"⌃"})]})]})]});const re=()=>k==null?void 0:k(!0),ne={...Z,onPress:()=>{var a;return S(((a=n==null?void 0:n())==null?void 0:a.line)??null)}};return e.jsxs("div",{className:"lay-bpe",children:[e.jsx("style",{children:X}),e.jsxs(Fe,{name:"The day",badge:fe.battleplan,rods:!0,onSetDown:re,lead:ne,said:ee,ariaLabel:"The day, unrolled",children:[e.jsxs("div",{className:"lay-bpe-top",children:[e.jsx(ke,{text:w,className:"lay-bpe-date",size:52}),e.jsxs("p",{className:"lay-bpe-claim",children:[e.jsx("span",{children:"A winnable day, nothing more."}),e.jsxs("span",{title:"Planned time, from effort budgets: light 30m, medium 75m, deep 2.5h",children:["~",We(se)," planned"]})]})]}),e.jsxs("div",{className:`lay-bpe-energy${q(s,"energy")?` ${K}`:""}`,role:"group","aria-label":"Today's energy",children:[e.jsx("span",{className:"lay-bpe-energy-label",children:"Today's energy"}),e.jsx("button",{type:"button",className:`lay-bpe-energy-btn energy-cell energy-camp${r?" on lit":""}`,"aria-pressed":!!r,"aria-label":r?"Camp Day — resting today":"Camp Day — rest today",title:"Camp Day — a day of rest: streaks pause instead of break",onClick:()=>{r||j==null||j()},children:e.jsx(je,{})}),["low","medium","high"].map((a,i)=>e.jsx("button",{type:"button",className:`lay-bpe-energy-btn energy-cell${!r&&o===a?" on lit":""}`,"aria-pressed":!r&&o===a,"aria-label":`${a[0].toUpperCase()}${a.slice(1)} energy`,onClick:()=>b==null?void 0:b(a),title:`${a[0].toUpperCase()}${a.slice(1)} energy — the day's five are chosen against it`,children:e.jsx(Ne,{n:i+1})},a))]}),l&&e.jsx("div",{className:"lay-bpe-acts",children:e.jsx("button",{type:"button",className:"lay-bpe-allquests",onClick:l,title:U.title,children:U.word})}),te?e.jsx(we,{children:G.empty}):le.map(a=>e.jsxs("section",{className:`lay-bpe-field${H===a.id?" is-now":""}`,children:[e.jsxs("header",{className:"lay-bpe-field-head",children:[e.jsx("span",{className:"lay-bpe-field-name",children:a.label}),e.jsxs("span",{className:"lay-bpe-field-hours",children:[Y(a.from)," – ",Y(a.to)]}),H===a.id&&e.jsx("span",{className:"lay-bpe-here",children:"you are here"})]}),O[a.id].length===0?e.jsx("p",{className:"lay-bpe-open",children:"Open ground."}):e.jsx("ul",{className:"lay-bpe-list",children:O[a.id].map(i=>e.jsx(He,{entry:i,lit:q(s,"task",i.task.id),dodges:v,onSelectQuest:h,onCompleteTask:u,onVerdictMenu:$,onOpenRite:m,onOpenGatehouse:N,stepsLine:D&&D.taskId===i.task.id?D.line:null},i.task.id))})]},a.id)),F.length>0&&e.jsxs("section",{className:"lay-bpe-field lay-bpe-noday lay-bpe-held","aria-label":y.head,children:[e.jsx("header",{className:"lay-bpe-field-head",children:e.jsx("span",{className:"lay-bpe-field-name",children:y.head})}),e.jsx("ul",{className:"lay-bpe-list",children:F.map(a=>e.jsxs("li",{className:`lay-bpe-row${z(a)?" is-done":""}`,children:[B&&e.jsx("button",{type:"button",className:"lay-bpe-sign","aria-pressed":z(a),title:z(a)?y.untick:y.tick,"aria-label":z(a)?`${a.step.title}: ${y.untick}`:`${a.step.title}: ${y.tick}`,onClick:()=>B(a.id),children:e.jsx("span",{className:"lay-bpe-ring","aria-hidden":"true"})}),e.jsxs("button",{type:"button",className:"lay-bpe-main",onClick:()=>N==null?void 0:N(),disabled:!N,title:y.press,children:[e.jsx("span",{className:"lay-bpe-title",children:a.step.title}),e.jsx("span",{className:"lay-bpe-meta",children:ve(a)})]})]},a.id))}),e.jsx("p",{className:"lay-bpe-open",children:y.why})]}),I.length>0&&e.jsxs("section",{className:"lay-bpe-field lay-bpe-noday","aria-label":E.head,children:[e.jsx("header",{className:"lay-bpe-field-head",children:e.jsx("span",{className:"lay-bpe-field-name",children:E.head})}),e.jsx("ul",{className:"lay-bpe-list",children:I.map(a=>e.jsxs("li",{className:"lay-bpe-row",children:[e.jsxs("button",{type:"button",className:"lay-bpe-main",onClick:()=>m?m(a.task.id):h==null?void 0:h(a.quest.id),title:m?E.press:`Open ${a.quest.title}`,children:[e.jsx("span",{className:"lay-bpe-title",children:a.task.title}),e.jsxs("span",{className:"lay-bpe-meta",children:[e.jsx("i",{className:"lay-bpe-accent",style:{background:a.epic.accent},"aria-hidden":"true"}),J[a.task.effort]??"Medium"," · ",$e(a.task,g())]})]}),M&&e.jsx(ze,{dress:"lay-bpe",short:!0,onName:i=>M(a.quest.id,a.task.id,i)})]},a.task.id))}),e.jsx("p",{className:"lay-bpe-open",children:E.why})]}),ae&&e.jsx("p",{className:"lay-bpe-placeholder",children:G.placeholder})]})]})}function He({entry:d,dodges:s,onSelectQuest:t,onCompleteTask:o,onVerdictMenu:b,onOpenRite:r=null,onOpenGatehouse:j=null,lit:w=!1,stepsLine:h=null}){const{epic:u,quest:n,task:l}=d,v=s.get(l.id)??0,f=Le({task:l,dodged:v}),[$,m]=x.useState(!1),A=!!r&&C(l);return e.jsxs("li",{className:`lay-bpe-row${f?" is-asked":""}${w?` ${K}`:""}`,children:[L(l,g())==="none"?e.jsx("span",{className:"lay-bpe-sign is-kept",role:"img","aria-label":R(l,g()),title:R(l,g()),children:e.jsx("span",{className:"lay-bpe-ring","aria-hidden":"true"})}):e.jsx("button",{type:"button",className:"lay-bpe-sign",title:"Sign it off","aria-label":`Sign off ${l.title}`,onClick:()=>{L(l,g())!=="none"&&(o==null||o(n.id,l.id))},children:e.jsx("span",{className:"lay-bpe-ring","aria-hidden":"true"})}),f&&e.jsx(Ae,{title:l.title,open:$,onToggle:()=>m(p=>!p),className:"lay-bpe-bell"}),e.jsxs("button",{type:"button",className:"lay-bpe-main",onClick:()=>A?r(l.id):t==null?void 0:t(n.id),onContextMenu:b?p=>b(p,n.id,l.id):void 0,title:A?"Open this rite’s page":`Open ${n.title}`,children:[e.jsx("span",{className:"lay-bpe-title",children:l.title}),e.jsxs("span",{className:"lay-bpe-meta",children:[e.jsx("i",{className:"lay-bpe-accent",style:{background:u.accent},"aria-hidden":"true"}),J[l.effort]??"Medium",C(l)?` · ${De(l)}`:l.due?` · ${l.hardDue?"⚑ ":""}due ${l.due.slice(5)}`:"",e.jsx(Se,{task:l})]}),h&&e.jsx("span",{className:"lay-bpe-steps",children:h})]}),b&&e.jsx("button",{type:"button",className:"lay-bpe-more",onClick:p=>b(p,n.id,l.id),title:"Give this step a verdict — not today, out of my hands, needs more context…","aria-label":`Verdicts for ${l.title}`,children:"⋯"}),f&&$&&e.jsx(_e,{taskId:l.id,dodged:v,onOpenGatehouse:j,onDone:()=>m(!1),className:"lay-bpe-ask"})]})}const X=`
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
`;export{Ce as default};
