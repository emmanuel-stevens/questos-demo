import{r as x,j as e}from"./styles-DDO230I-.js";import{M as ke,O as we,Q as pe,T as Ne,F as Ee,P as Pe,G as Oe,N as Te,D as ze,H as Fe,A as ge,B as H,U as ue,J as g,R as l,u as Ae,q as ee,v as Le,x as qe,E as Ie,z as Ge,C as _e}from"./index-ClGvR7HJ.js";const xe=300,me=[{kind:"courier",icon:"🕊",name:"The Courier",gloss:"word from the road, awaiting triage"},{kind:"unsorted",icon:"📥",name:"Unsorted Demands",gloss:"accepted, unrouted; the Compost burns the stale"},{kind:"verdict",icon:"📜",name:"The Founder's Scroll",gloss:"decisions only you can make"},{kind:"dodged",icon:"🥀",name:"Dodged",gloss:`planned ${ze} times or more, and not done`},{kind:"waiting",icon:"⏳",name:"Waiting too long",gloss:"out of your hands, and it has been a while"},{kind:"cadence",icon:"↻",name:"Cadences proposed",gloss:"a step the squire heard repeat, not yet standing"},{kind:"tome",icon:"📚",name:"Skills proposed",gloss:"the squire's suggestion, yours to rule"}],He={propose_step:"A step, proposed",propose_quest:"A road, proposed",report_done:"A step reported finished"};function $e(o){if(!o)return"";const c=new Date(o);return Number.isNaN(c.getTime())?"":c.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}function m({label:o,children:c}){return e.jsxs("div",{className:"lay-gatehouse-draft-field",children:[e.jsx("span",{className:"lay-gatehouse-draft-label",children:o}),e.jsx("span",{className:"lay-gatehouse-draft-value",children:c})]})}function Ce({draft:o,kind:c}){return e.jsxs("div",{className:"lay-gatehouse-draft",children:[e.jsxs("div",{className:"lay-gatehouse-draft-head",children:[He[c]??"A draft"," — nothing has entered your realm"]}),c==="propose_quest"?e.jsxs(e.Fragment,{children:[o.title&&e.jsx(m,{label:"Road",children:o.title}),o.epic&&e.jsx(m,{label:"Under",children:o.epic}),o.why&&e.jsx(m,{label:"True when walked",children:o.why}),Array.isArray(o.steps)&&o.steps.length>0&&e.jsx(m,{label:`Steps (${o.steps.length})`,children:e.jsx("ol",{className:"lay-gatehouse-draft-steps",children:o.steps.map((p,y)=>e.jsx("li",{children:String(p)},y))})})]}):c==="report_done"?e.jsxs(e.Fragment,{children:[o.step&&e.jsx(m,{label:"Step",children:o.step}),o.note&&e.jsx(m,{label:"Note",children:o.note})]}):c==="propose_step"?e.jsxs(e.Fragment,{children:[o.title&&e.jsx(m,{label:"Step",children:o.title}),o.quest&&e.jsx(m,{label:"For the road",children:o.quest}),o.effort&&e.jsx(m,{label:"Effort",children:o.effort})]}):Object.entries(o??{}).filter(([,p])=>p!=null&&p!=="").map(([p,y])=>e.jsx(m,{label:p,children:Array.isArray(y)?y.join(" · "):String(y)},p)),o.displaces&&e.jsxs("div",{className:"lay-gatehouse-draft-displaces",children:[e.jsx("strong",{children:"Displaces:"})," ",o.displaces]})]})}function We({sheetYields:o=!1,items:c,arrivals:p=[],onDismissArrival:y,onRouteArrival:$,onPileArrival:C,unsorted:O=[],onRouteUnsorted:D,onBurnUnsorted:E,routableQuests:ye=[],routableEpics:ae=[],onRaiseRoad:R,cadences:L=[],onRuleCadence:M,onStrikeCadence:W,skillProposals:q=[],onBindSkills:J,onStrikeSkills:K,onClose:b,onDoNow:P,onSnooze:X,onKill:Y,onReturnToTodo:Z,onSelectQuest:u,onVerdictMenu:V}){var de,he,ce;const I=c.filter(t=>t.reason==="dodged"),G=c.filter(t=>t.reason==="waiting"),_=c.filter(t=>t.reason==="verdict"),T=c.length===0&&p.length===0&&O.length===0,z=x.useMemo(()=>{const t=[];return p.forEach(a=>t.push({kind:"courier",id:a.id,title:a.text,arrival:a})),O.forEach(a=>t.push({kind:"unsorted",id:a.id,title:a.text,demand:a})),_.forEach(a=>t.push({kind:"verdict",id:a.task.id,title:a.task.title,item:a})),I.forEach(a=>t.push({kind:"dodged",id:a.task.id,title:a.task.title,item:a})),G.forEach(a=>t.push({kind:"waiting",id:a.task.id,title:a.task.title,item:a})),L.forEach(a=>t.push({kind:"cadence",id:a.task.id,title:a.task.title,item:a})),q.forEach(a=>t.push({kind:"tome",id:a.task.id,title:a.task.title,item:a})),t},[p,O,_,I,G,L,q]),B=(t,a)=>`${t}-${a}`,[v,te]=x.useState(null),i=x.useMemo(()=>z.find(t=>B(t.kind,t.id)===v)??null,[z,v]),[fe,F]=x.useState(!1),[je,S]=x.useState(!1),[f,k]=x.useState(""),[U,se]=x.useState("rest"),[w]=ke(),ie=we.find(t=>w.height-pe(t,w)>=xe)??"full",re=x.useRef(null);x.useEffect(()=>{const t=`${w.width}x${w.height}:${T?"clear":"waiting"}`;re.current!==t&&(re.current=t,!T&&w.height-pe(U,w)<xe&&se(ie))},[w,T,U,ie]),x.useEffect(()=>{const t=a=>{a.key==="Escape"&&(b==null||b())};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[b]);const Q=x.useRef(new Map);x.useEffect(()=>{var t;v&&((t=Q.current.get(v))==null||t.scrollIntoView({block:"nearest"}))},[v]);const ne=t=>{te(t),F(!1),k("")},d=()=>{te(null),F(!1),k("")},N=(t,a,s,r={},n=null)=>{const h=B(t,a);return e.jsxs("li",{ref:j=>{j?Q.current.set(h,j):Q.current.delete(h)},className:"lay-gatehouse-row","data-aimed":v===h?"yes":void 0,...r,children:[e.jsx("button",{type:"button",className:"lay-gatehouse-aim",onClick:()=>ne(h),"aria-pressed":v===h,children:s}),n]},h)},oe={courier:p.length,unsorted:O.length,verdict:_.length,dodged:I.length,waiting:G.length,cadence:L.length,tome:q.length},be=t=>e.jsxs("div",{className:"lay-gatehouse-head",children:[e.jsxs("span",{className:"lay-gatehouse-head-name",children:[t.icon," ",t.name]}),e.jsx("span",{className:"lay-gatehouse-head-count",children:oe[t.kind]}),e.jsx("span",{className:"lay-gatehouse-head-gloss",children:t.gloss})]}),ve=()=>{if(T)return e.jsx(g,{note:"The gate is clear. Lower the portcullis and the Study is behind it.",children:e.jsx(l,{tone:"primary",onPress:b,note:"back to the room",children:"Lower the gate"})});if(!i)return e.jsxs(g,{dense:!0,note:"Tap anything in the queue and its verdicts appear here — nothing above this line changes your realm.",children:[e.jsx(l,{tone:"primary",onPress:()=>ne(z[0]?B(z[0].kind,z[0].id):null),note:"aims the floor; decides nothing",children:"Start at the top"}),e.jsx(l,{onPress:b,note:"back to the room",children:"Lower the gate"})]});if(je&&(i==null?void 0:i.kind)==="courier"){const s=i.arrival,r=()=>{f&&(R==null||R(i.id,f),S(!1),d())};return e.jsxs(g,{note:Ae(s)??"Raising builds every step it proposed, in the volume you choose.",children:[e.jsxs("select",{className:"lay-gatehouse-picker",value:f,onChange:n=>k(n.target.value),"aria-label":"Choose the volume",children:[e.jsx("option",{value:"",children:"Choose the volume…"}),ae.map(n=>e.jsx("option",{value:n.id,children:n.title},n.id))]}),e.jsx(l,{tone:"primary",onPress:r,disabled:!f,note:"raise it there",children:"Raise it"}),e.jsx(l,{onPress:()=>{S(!1),k("")},note:"pick nothing",children:"Cancel"})]})}if(fe){const s=new Map;ye.forEach(n=>{s.has(n.epicTitle)||s.set(n.epicTitle,[]),s.get(n.epicTitle).push(n)});const r=()=>{f&&(i.kind==="courier"?$==null||$(i.id,f):D==null||D(i.id,f),d())};return e.jsxs(g,{note:"Routing files it as a real step on that road. Nothing moves until you press Route.",children:[e.jsxs("select",{className:"lay-gatehouse-picker",value:f,onChange:n=>k(n.target.value),"aria-label":"Choose the road",children:[e.jsx("option",{value:"",children:"Choose the road…"}),[...s.entries()].map(([n,h])=>e.jsx("optgroup",{label:n,children:h.map(j=>e.jsx("option",{value:j.id,children:j.title},j.id))},n))]}),e.jsx(l,{tone:"primary",onPress:r,disabled:!f,note:"file it there",children:"Route"}),e.jsx(l,{onPress:()=>{F(!1),k("")},note:"pick nothing",children:"Cancel"})]})}if(i.kind==="courier"){const s=ee(i.arrival).raiseRoad;return e.jsxs(g,{note:s?"Still three verbs — Route comes in two sizes here, the whole road or one step of it.":"Three verbs, and only these three (Hold was struck 08-01 — an arrival at the gate already is held).",children:[s&&e.jsx(l,{tone:"primary",onPress:()=>{var n;const r=(n=Le(i.arrival))==null?void 0:n.epicHint;k(ae.some(h=>h.id===r)?r:""),S(!0)},note:"all of its steps",children:"Raise the road"}),ee(i.arrival).route&&e.jsx(l,{tone:s?"plain":"primary",onPress:()=>F(!0),note:s?"the title alone":"into a road",children:s?"Take one step":"Route"}),ee(i.arrival).stow&&e.jsx(l,{onPress:()=>{C==null||C(i.id),d()},note:"save it for later",children:"Stow"}),e.jsx(l,{tone:"danger",onPress:()=>{y==null||y(i.id),d()},note:"say no, for good",children:"Dismiss"})]})}if(i.kind==="unsorted"&&qe(i.demand))return e.jsx(g,{note:Ie(i.demand,{refuse:"Burn"}),children:e.jsx(l,{tone:"danger",onPress:()=>{E==null||E(i.id),d()},note:"let it go",children:"🔥 Burn"})});if(i.kind==="unsorted")return e.jsxs(g,{note:"It was accepted once and never given a road. Either it gets one now, or it goes.",children:[e.jsx(l,{tone:"primary",onPress:()=>F(!0),note:"into a road",children:"Route"}),e.jsx(l,{tone:"danger",onPress:()=>{E==null||E(i.id),d()},note:"let it go",children:"🔥 Burn"})]});if(i.kind==="verdict")return e.jsx(g,{note:"This one is parked on a decision only you can make. Open the road and make it.",children:e.jsx(l,{tone:"primary",onPress:()=>u==null?void 0:u(i.item.quest.id),note:"see it in its road",children:"Open the road"})});if(i.kind==="dodged"){const{quest:s,task:r}=i.item;return r.hardDue?e.jsxs(g,{note:"A real-world deadline rides on this one, so it cannot be moved or struck from the gate.",children:[e.jsx(l,{tone:"primary",onPress:()=>{P==null||P(s.id,r.id),d()},note:"mark it done",children:"Do it"}),e.jsx(l,{onPress:()=>u==null?void 0:u(s.id),note:"see it in its road",children:"Open the road"})]}):e.jsxs(g,{note:"The questions above the list are the ones worth asking before you answer this.",children:[e.jsx(l,{tone:"primary",onPress:()=>{P==null||P(s.id,r.id),d()},note:"mark it done",children:"Do it"}),e.jsx(l,{onPress:()=>{X==null||X(s.id,r.id),d()},note:"not today",children:"Reschedule"}),e.jsx(l,{tone:"danger",onPress:()=>{Y==null||Y(s.id,r.id),d()},note:"off the road",children:"Kill"}),e.jsx(l,{onPress:()=>u==null?void 0:u(s.id),note:"see it in its road",children:"Open"})]})}if(i.kind==="cadence"){const{quest:s,task:r,proposal:n}=i.item;return e.jsxs(g,{note:`${ge(n)} · ${H(n.proposedAt)} — nothing standing is written until you say so.`,children:[!Ge(r,n.recurring)&&e.jsx(l,{tone:"primary",onPress:()=>{M==null||M(s.id,r.id),d()},note:"it comes back",children:"Make it a rite"}),e.jsx(l,{onPress:()=>{W==null||W(s.id,r.id),d()},note:"the step stays",children:"Leave it once"})]})}if(i.kind==="tome"){const{epic:s,quest:r,task:n,proposal:h}=i.item,{home:j}=ue(n,s);return e.jsxs(g,{note:`${H(h.proposedAt)} — it already trains ${j?j.name:"no skill"}. Nothing is written until you say so.`,children:[_e(h).map(A=>e.jsxs(l,{tone:"primary",onPress:()=>{J==null||J(r.id,n.id,[A.id]),d()},note:A.blurb,children:[A.icon," ",A.name]},A.id)),e.jsx(l,{onPress:()=>{K==null||K(r.id,n.id),d()},note:"the step is untouched",children:"None of these"})]})}const{quest:t,task:a}=i.item;return e.jsxs(g,{note:"It left your hands a while ago. Either it is back with you, or it is still theirs.",children:[e.jsx(l,{tone:"primary",onPress:()=>{Z==null||Z(t.id,a.id),d()},note:"it is yours again",children:"Back to todo"}),e.jsx(l,{onPress:()=>u==null?void 0:u(t.id),note:"see it in its road",children:"Open the road"})]})},le=((he=(de=i==null?void 0:i.arrival)==null?void 0:de.draft)==null?void 0:he.displaces)??null;return e.jsxs("div",{className:"lay-gatehouse-portcullis",children:[e.jsx("style",{children:De}),e.jsx("div",{className:"lay-gatehouse-scrim",onClick:b,"aria-hidden":"true"}),e.jsxs(Ne,{stop:U,onStop:se,yielded:o,label:"The Gatehouse",children:[e.jsxs("div",{className:"lay-gatehouse-lintel",children:[e.jsxs("div",{children:[e.jsx("div",{className:"lay-gatehouse-kicker",title:Ee("gatehouse"),children:"The Gatehouse"}),e.jsx("h2",{className:"lay-gatehouse-title",children:"Nothing waits here unseen"}),e.jsx(Pe,{term:"gatehouse"})]}),e.jsx(Oe,{onClose:b,name:"the Gatehouse"})]}),e.jsx("div",{className:"lay-gatehouse-queue",children:T?e.jsx(Te,{children:"The gate is clear. Nothing needs a verdict right now."}):me.map(t=>oe[t.kind]===0?null:e.jsxs("section",{className:"lay-gatehouse-section",children:[be(t),t.kind==="dodged"&&e.jsx("ul",{className:"lay-gatehouse-questions",children:Fe.map(a=>e.jsx("li",{children:a},a))}),e.jsxs("ul",{className:"lay-gatehouse-list",children:[t.kind==="courier"&&p.map(a=>{var s,r;return N("courier",a.id,e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"lay-gatehouse-text",children:a.text}),e.jsxs("span",{className:"lay-gatehouse-meta",children:[((s=a.provenance)==null?void 0:s.by)==="mcp"&&e.jsx("span",{className:"lay-gatehouse-prov",children:"⌁ by machine — an AI proposed it; nothing has entered your realm"}),e.jsx("span",{children:$e(a.receivedAt)})]})]}),{},a.draft?e.jsx(Ce,{draft:a.draft,kind:(r=a.provenance)==null?void 0:r.kind}):null)}),t.kind==="unsorted"&&O.map(a=>{var s;return N("unsorted",a.id,e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"lay-gatehouse-text",children:a.text}),e.jsx("span",{className:"lay-gatehouse-meta",children:e.jsxs("span",{children:["piled ",((s=a.piledAt)==null?void 0:s.slice(5))??""]})})]}))}),t.kind==="verdict"&&_.map(({epic:a,task:s})=>N("verdict",s.id,e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"lay-gatehouse-dot",style:{background:a.accent}}),e.jsx("span",{className:"lay-gatehouse-text",children:s.title})]}))),t.kind==="dodged"&&I.map(({epic:a,quest:s,task:r,dodged:n})=>N("dodged",r.id,e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"lay-gatehouse-dot",style:{background:a.accent}}),e.jsx("span",{className:"lay-gatehouse-text",children:r.title}),e.jsxs("span",{className:"lay-gatehouse-meta",children:[n!=null&&e.jsxs("span",{children:["planned ",n," times, not done"]}),r.hardDue&&e.jsx("span",{className:"lay-gatehouse-hard",children:"⚑ hard deadline"})]})]}),{onContextMenu:h=>V==null?void 0:V(h,s.id,r.id)})),t.kind==="waiting"&&G.map(({epic:a,task:s,days:r})=>N("waiting",s.id,e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"lay-gatehouse-dot",style:{background:a.accent}}),e.jsx("span",{className:"lay-gatehouse-text",children:s.title}),e.jsx("span",{className:"lay-gatehouse-meta",children:e.jsxs("span",{children:[r,"d out of your hands"]})})]}))),t.kind==="cadence"&&L.map(({epic:a,task:s,proposal:r})=>N("cadence",s.id,e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"lay-gatehouse-dot",style:{background:a.accent}}),e.jsx("span",{className:"lay-gatehouse-text",children:s.title}),e.jsxs("span",{className:"lay-gatehouse-meta",children:[e.jsx("span",{children:ge(r)}),e.jsx("span",{children:H(r.proposedAt)})]})]}))),t.kind==="tome"&&q.map(({epic:a,task:s,proposal:r})=>{const{home:n}=ue(s,a);return N("tome",s.id,e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"lay-gatehouse-dot",style:{background:a.accent}}),e.jsx("span",{className:"lay-gatehouse-text",children:s.title}),e.jsxs("span",{className:"lay-gatehouse-meta",children:[e.jsxs("span",{children:["trains ",n?n.name:"no skill"]}),e.jsx("span",{children:H(r.proposedAt)})]})]}))})]})]},t.kind))}),e.jsxs("div",{className:"lay-gatehouse-floor",children:[i&&e.jsxs("div",{className:"lay-gatehouse-aimed",children:[e.jsx("span",{className:"lay-gatehouse-aimed-kind",children:(ce=me.find(t=>t.kind===i.kind))==null?void 0:ce.icon}),e.jsx("span",{className:"lay-gatehouse-aimed-title",children:i.title})]}),le&&e.jsxs("p",{className:"lay-gatehouse-displaces",children:[e.jsx("strong",{children:"Displaces:"})," ",le]}),ve()]})]})]})}const De=`
/* THE ROOT LETS THE ROOM THROUGH, and not only visually. A transparent fixed
   div still EATS every tap inside its box, so an inset scrim under a root at
   inset:0 leaves the room switcher (z-index 12) and the bell (15) painted and
   dead beneath z-index 40 — and the root carries no onClick, so the tap does
   literally nothing. pointer-events none here, and auto on the two things that
   are actually surfaces, is what makes FINDING 3 true rather than drawn. */
.lay-gatehouse-portcullis { position: fixed; inset: 0; z-index: 40; pointer-events: none; }

/* the room shows through, and the top chrome is left alone (safe areas + the
   ~70px the bell-clearance arithmetic assumes) */
.lay-gatehouse-portcullis .lay-gatehouse-scrim {
  position: absolute;
  top: calc(env(safe-area-inset-top, 0px) + 70px);
  left: 0; right: 0; bottom: 0;
  background: transparent;
  pointer-events: auto;
}

.lay-gatehouse-portcullis .lay-sheet {
  pointer-events: auto;
  position: fixed; left: 0; right: 0; bottom: 0;
  display: flex; flex-direction: column;
  background: var(--parchment);
  border-top: 1px solid var(--gold);
  border-radius: 14px 14px 0 0;
  box-shadow: 0 -14px 34px var(--shadow);
  transition: top 180ms ease;
  max-height: 100dvh;
}
.lay-gatehouse-portcullis .lay-grip {
  width: 100%; min-height: 44px; border: 0; background: none;
  display: flex; align-items: center; justify-content: center; cursor: pointer;
  flex: 0 0 auto;
}
.lay-gatehouse-portcullis .lay-grip-bar {
  width: 46px; height: 5px; border-radius: 3px; background: var(--border);
}
.lay-gatehouse-portcullis .lay-sheet-body {
  display: flex; flex-direction: column; min-height: 0; overflow: hidden; flex: 1 1 auto;
}

.lay-gatehouse-lintel {
  flex: 0 0 auto;
  display: flex; align-items: flex-start; justify-content: space-between; gap: 8px;
  padding: 0 12px 8px;
  border-bottom: 1px solid var(--border);
}
.lay-gatehouse-kicker {
  font-family: 'Cinzel', Georgia, serif; font-size: 12px; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--gold-bright);
}
.lay-gatehouse-title { margin: 2px 0 0; font-size: 17px; color: var(--ink); font-weight: 400; }
.lay-gatehouse-portcullis .lay-close {
  min-width: 44px; min-height: 44px; font-size: 22px; line-height: 1;
  background: none; border: 1px solid var(--border); border-radius: 10px; color: var(--ink);
  flex: 0 0 auto;
}

/* THE ONE SCROLLER */
.lay-gatehouse-queue {
  flex: 1 1 auto; min-height: 0; overflow-y: auto; -webkit-overflow-scrolling: touch;
  padding: 8px 12px 12px;
  overscroll-behavior: contain;
}
.lay-gatehouse-section { margin-bottom: 14px; }
.lay-gatehouse-head { display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px; padding: 4px 0; }
.lay-gatehouse-head-name {
  font-family: 'Cinzel', Georgia, serif; font-size: 14px; color: var(--gold-bright);
}
.lay-gatehouse-head-count {
  font-size: 13px; color: var(--ink); border: 1px solid var(--border);
  border-radius: 999px; padding: 1px 8px;
}
.lay-gatehouse-head-gloss { flex: 1 1 100%; font-size: 13px; color: var(--ink-dim); line-height: 1.35; }

.lay-gatehouse-questions {
  margin: 4px 0 8px; padding: 8px 10px 8px 26px;
  border-left: 2px solid var(--border); color: var(--ink-dim); font-size: 13px; line-height: 1.5;
}

.lay-gatehouse-list { list-style: none; margin: 0; padding: 0; }
.lay-gatehouse-row { margin: 0 0 8px; }
.lay-gatehouse-row[data-aimed='yes'] .lay-gatehouse-aim {
  border-color: var(--gold-bright); background: var(--parchment-raised);
}
.lay-gatehouse-aim {
  display: block; width: 100%; min-height: 48px; text-align: left;
  padding: 10px 12px; border: 1px solid var(--border); border-radius: 10px;
  background: none; color: var(--ink); font: inherit; font-size: 15px; line-height: 1.4;
}
.lay-gatehouse-dot {
  display: inline-block; width: 8px; height: 8px; border-radius: 50%;
  margin-right: 8px; vertical-align: middle;
}
.lay-gatehouse-text { color: var(--ink); }
.lay-gatehouse-meta {
  display: flex; flex-wrap: wrap; gap: 8px; margin-top: 6px;
  font-size: 13px; color: var(--ink-dim);
}
.lay-gatehouse-prov { color: var(--gold); }
.lay-gatehouse-hard { color: var(--gold-bright); }

.lay-gatehouse-draft {
  margin-top: 8px; padding: 8px 10px; border: 1px dashed var(--border); border-radius: 8px;
  font-size: 14px;
}
.lay-gatehouse-draft-head { color: var(--gold); font-size: 13px; margin-bottom: 6px; }
.lay-gatehouse-draft-field { display: flex; gap: 8px; margin-bottom: 4px; }
.lay-gatehouse-draft-label { flex: 0 0 34%; color: var(--ink-dim); font-size: 13px; }
.lay-gatehouse-draft-value { flex: 1 1 auto; color: var(--ink); }
.lay-gatehouse-draft-steps { margin: 0; padding-left: 18px; }
.lay-gatehouse-draft-displaces {
  margin-top: 6px; padding-top: 6px; border-top: 1px solid var(--border); color: var(--ink);
}

/* THE VERDICT FLOOR — pinned inside the sheet at every detent */
.lay-gatehouse-floor {
  flex: 0 0 auto;
  border-top: 1px solid var(--gold);
  background: var(--parchment-raised);
  padding: 8px 12px calc(8px + env(safe-area-inset-bottom, 0px));
}
.lay-gatehouse-aimed {
  display: flex; gap: 8px; align-items: baseline; margin-bottom: 6px;
  font-size: 14px; color: var(--ink);
}
.lay-gatehouse-aimed-title {
  flex: 1 1 auto; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.lay-gatehouse-displaces {
  margin: 0 0 6px; font-size: 13px; color: var(--ink); line-height: 1.4;
}

.lay-gatehouse-portcullis .lay-rail-acts {
  display: flex; flex-wrap: wrap; gap: 8px; align-items: stretch;
}
.lay-gatehouse-portcullis .lay-act {
  flex: 1 1 0; min-width: 84px; min-height: 52px;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
  padding: 6px 8px; border: 1px solid var(--border); border-radius: 10px;
  background: var(--parchment); color: var(--ink); font: inherit;
}
.lay-gatehouse-portcullis .lay-rail-dense .lay-act { min-height: 48px; }
.lay-gatehouse-portcullis .lay-act-word { font-size: 15px; }
.lay-gatehouse-portcullis .lay-act-note { font-size: 11px; color: var(--ink-dim); line-height: 1.2; }
.lay-gatehouse-portcullis .lay-act-primary { border-color: var(--gold); color: var(--gold-bright); }
.lay-gatehouse-portcullis .lay-act-danger { border-color: #6b3a2c; color: #e0a08c; }
.lay-gatehouse-portcullis .lay-act:disabled { opacity: 0.45; }
.lay-gatehouse-portcullis .lay-rail-note {
  margin: 6px 0 0; font-size: 12px; color: var(--ink-dim); line-height: 1.35;
}

/* 16px, and not one pixel less — below it iOS zooms the surface and never
   zooms back, which is how a phone loses the floor it was standing on */
.lay-gatehouse-picker {
  flex: 1 1 100%; min-height: 48px; font-size: 16px;
  padding: 8px 10px; border-radius: 10px;
  border: 1px solid var(--gold); background: var(--parchment); color: var(--ink);
}

.lay-gatehouse-portcullis .lay-nothing {
  margin: 24px 8px; color: var(--ink-dim); font-size: 15px; line-height: 1.5; text-align: center;
}

@media (prefers-reduced-motion: reduce) {
  .lay-gatehouse-portcullis .lay-sheet { transition: none; }
}
`;export{We as default};
