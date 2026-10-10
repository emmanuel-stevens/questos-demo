import{r as u,z as ke,B as we,E as pe,j as e,F as Ne,C as Ee,N as ze,D as Oe,w as Pe,s as ge,u as G,G as ue,A as x,R as l,o as Te,n as ee,p as Fe,q as Ae,v as Le}from"./index-CYLJyUTU.js";const xe=300,me=[{kind:"courier",icon:"🕊",name:"The Courier",gloss:"word from the road, awaiting triage"},{kind:"unsorted",icon:"📥",name:"Unsorted Demands",gloss:"accepted, unrouted; the Compost burns the stale"},{kind:"verdict",icon:"📜",name:"The Founder's Scroll",gloss:"decisions only you can make"},{kind:"dodged",icon:"🥀",name:"Dodged",gloss:`planned ${Oe} times or more, and not done`},{kind:"waiting",icon:"⏳",name:"Waiting too long",gloss:"out of your hands, and it has been a while"},{kind:"cadence",icon:"↻",name:"Cadences proposed",gloss:"a step the squire heard repeat, not yet standing"},{kind:"tome",icon:"📚",name:"Skills proposed",gloss:"the squire's suggestion, yours to rule"}],qe={propose_step:"A step, proposed",propose_quest:"A road, proposed",report_done:"A step reported finished"};function Ie(o){if(!o)return"";const h=new Date(o);return Number.isNaN(h.getTime())?"":h.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}function m({label:o,children:h}){return e.jsxs("div",{className:"lay-gatehouse-draft-field",children:[e.jsx("span",{className:"lay-gatehouse-draft-label",children:o}),e.jsx("span",{className:"lay-gatehouse-draft-value",children:h})]})}function _e({draft:o,kind:h}){return e.jsxs("div",{className:"lay-gatehouse-draft",children:[e.jsxs("div",{className:"lay-gatehouse-draft-head",children:[qe[h]??"A draft"," — nothing has entered your realm"]}),h==="propose_quest"?e.jsxs(e.Fragment,{children:[o.title&&e.jsx(m,{label:"Road",children:o.title}),o.epic&&e.jsx(m,{label:"Under",children:o.epic}),o.why&&e.jsx(m,{label:"True when walked",children:o.why}),Array.isArray(o.steps)&&o.steps.length>0&&e.jsx(m,{label:`Steps (${o.steps.length})`,children:e.jsx("ol",{className:"lay-gatehouse-draft-steps",children:o.steps.map((p,y)=>e.jsx("li",{children:String(p)},y))})})]}):h==="report_done"?e.jsxs(e.Fragment,{children:[o.step&&e.jsx(m,{label:"Step",children:o.step}),o.note&&e.jsx(m,{label:"Note",children:o.note})]}):h==="propose_step"?e.jsxs(e.Fragment,{children:[o.title&&e.jsx(m,{label:"Step",children:o.title}),o.quest&&e.jsx(m,{label:"For the road",children:o.quest}),o.effort&&e.jsx(m,{label:"Effort",children:o.effort})]}):Object.entries(o??{}).filter(([,p])=>p!=null&&p!=="").map(([p,y])=>e.jsx(m,{label:p,children:Array.isArray(y)?y.join(" · "):String(y)},p)),o.displaces&&e.jsxs("div",{className:"lay-gatehouse-draft-displaces",children:[e.jsx("strong",{children:"Displaces:"})," ",o.displaces]})]})}function He({sheetYields:o=!1,items:h,arrivals:p=[],onDismissArrival:y,onRouteArrival:$,onPileArrival:H,unsorted:z=[],onRouteUnsorted:C,onBurnUnsorted:D,routableQuests:ye=[],routableEpics:ae=[],onRaiseRoad:R,cadences:A=[],onRuleCadence:M,onStrikeCadence:W,skillProposals:L=[],onBindSkills:K,onStrikeSkills:B,onClose:b,onDoNow:E,onSnooze:J,onKill:X,onReturnToTodo:Y,onSelectQuest:g,onVerdictMenu:Z}){var de,he,ce;const q=h.filter(t=>t.reason==="dodged"),I=h.filter(t=>t.reason==="waiting"),_=h.filter(t=>t.reason==="verdict"),O=h.length===0&&p.length===0&&z.length===0,P=u.useMemo(()=>{const t=[];return p.forEach(a=>t.push({kind:"courier",id:a.id,title:a.text,arrival:a})),z.forEach(a=>t.push({kind:"unsorted",id:a.id,title:a.text,demand:a})),_.forEach(a=>t.push({kind:"verdict",id:a.task.id,title:a.task.title,item:a})),q.forEach(a=>t.push({kind:"dodged",id:a.task.id,title:a.task.title,item:a})),I.forEach(a=>t.push({kind:"waiting",id:a.task.id,title:a.task.title,item:a})),A.forEach(a=>t.push({kind:"cadence",id:a.task.id,title:a.task.title,item:a})),L.forEach(a=>t.push({kind:"tome",id:a.task.id,title:a.task.title,item:a})),t},[p,z,_,q,I,A,L]),V=(t,a)=>`${t}-${a}`,[v,te]=u.useState(null),n=u.useMemo(()=>P.find(t=>V(t.kind,t.id)===v)??null,[P,v]),[fe,T]=u.useState(!1),[je,S]=u.useState(!1),[f,k]=u.useState(""),[U,se]=u.useState("rest"),[w]=ke(),ie=we.find(t=>w.height-pe(t,w)>=xe)??"full",re=u.useRef(null);u.useEffect(()=>{const t=`${w.width}x${w.height}:${O?"clear":"waiting"}`;re.current!==t&&(re.current=t,!O&&w.height-pe(U,w)<xe&&se(ie))},[w,O,U,ie]),u.useEffect(()=>{const t=a=>{a.key==="Escape"&&(b==null||b())};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[b]);const Q=u.useRef(new Map);u.useEffect(()=>{var t;v&&((t=Q.current.get(v))==null||t.scrollIntoView({block:"nearest"}))},[v]);const ne=t=>{te(t),T(!1),k("")},c=()=>{te(null),T(!1),k("")},N=(t,a,s,i={},r=null)=>{const d=V(t,a);return e.jsxs("li",{ref:j=>{j?Q.current.set(d,j):Q.current.delete(d)},className:"lay-gatehouse-row","data-aimed":v===d?"yes":void 0,...i,children:[e.jsx("button",{type:"button",className:"lay-gatehouse-aim",onClick:()=>ne(d),"aria-pressed":v===d,children:s}),r]},d)},oe={courier:p.length,unsorted:z.length,verdict:_.length,dodged:q.length,waiting:I.length,cadence:A.length,tome:L.length},be=t=>e.jsxs("div",{className:"lay-gatehouse-head",children:[e.jsxs("span",{className:"lay-gatehouse-head-name",children:[t.icon," ",t.name]}),e.jsx("span",{className:"lay-gatehouse-head-count",children:oe[t.kind]}),e.jsx("span",{className:"lay-gatehouse-head-gloss",children:t.gloss})]}),ve=()=>{if(O)return e.jsx(x,{note:"The gate is clear. Lower the portcullis and the Study is behind it.",children:e.jsx(l,{tone:"primary",onPress:b,note:"back to the room",children:"Lower the gate"})});if(!n)return e.jsxs(x,{dense:!0,note:"Tap anything in the queue and its verdicts appear here — nothing above this line changes your realm.",children:[e.jsx(l,{tone:"primary",onPress:()=>ne(P[0]?V(P[0].kind,P[0].id):null),note:"aims the floor; decides nothing",children:"Start at the top"}),e.jsx(l,{onPress:b,note:"back to the room",children:"Lower the gate"})]});if(je&&(n==null?void 0:n.kind)==="courier"){const s=n.arrival,i=()=>{f&&(R==null||R(n.id,f),S(!1),c())};return e.jsxs(x,{note:Te(s)??"Raising builds every step it proposed, in the volume you choose.",children:[e.jsxs("select",{className:"lay-gatehouse-picker",value:f,onChange:r=>k(r.target.value),"aria-label":"Choose the volume",children:[e.jsx("option",{value:"",children:"Choose the volume…"}),ae.map(r=>e.jsx("option",{value:r.id,children:r.title},r.id))]}),e.jsx(l,{tone:"primary",onPress:i,disabled:!f,note:"raise it there",children:"Raise it"}),e.jsx(l,{onPress:()=>{S(!1),k("")},note:"pick nothing",children:"Cancel"})]})}if(fe){const s=new Map;ye.forEach(r=>{s.has(r.epicTitle)||s.set(r.epicTitle,[]),s.get(r.epicTitle).push(r)});const i=()=>{f&&(n.kind==="courier"?$==null||$(n.id,f):C==null||C(n.id,f),c())};return e.jsxs(x,{note:"Routing files it as a real step on that road. Nothing moves until you press Route.",children:[e.jsxs("select",{className:"lay-gatehouse-picker",value:f,onChange:r=>k(r.target.value),"aria-label":"Choose the road",children:[e.jsx("option",{value:"",children:"Choose the road…"}),[...s.entries()].map(([r,d])=>e.jsx("optgroup",{label:r,children:d.map(j=>e.jsx("option",{value:j.id,children:j.title},j.id))},r))]}),e.jsx(l,{tone:"primary",onPress:i,disabled:!f,note:"file it there",children:"Route"}),e.jsx(l,{onPress:()=>{T(!1),k("")},note:"pick nothing",children:"Cancel"})]})}if(n.kind==="courier"){const s=ee(n.arrival).raiseRoad;return e.jsxs(x,{note:s?"Still three verbs — Route comes in two sizes here, the whole road or one step of it.":"Three verbs, and only these three (Hold was struck 08-01 — an arrival at the gate already is held).",children:[s&&e.jsx(l,{tone:"primary",onPress:()=>{var r;const i=(r=Fe(n.arrival))==null?void 0:r.epicHint;k(ae.some(d=>d.id===i)?i:""),S(!0)},note:"all of its steps",children:"Raise the road"}),ee(n.arrival).route&&e.jsx(l,{tone:s?"plain":"primary",onPress:()=>T(!0),note:s?"the title alone":"into a road",children:s?"Take one step":"Route"}),ee(n.arrival).stow&&e.jsx(l,{onPress:()=>{H==null||H(n.id),c()},note:"save it for later",children:"Stow"}),e.jsx(l,{tone:"danger",onPress:()=>{y==null||y(n.id),c()},note:"say no, for good",children:"Dismiss"})]})}if(n.kind==="unsorted")return e.jsxs(x,{note:"It was accepted once and never given a road. Either it gets one now, or it goes.",children:[e.jsx(l,{tone:"primary",onPress:()=>T(!0),note:"into a road",children:"Route"}),e.jsx(l,{tone:"danger",onPress:()=>{D==null||D(n.id),c()},note:"let it go",children:"🔥 Burn"})]});if(n.kind==="verdict")return e.jsx(x,{note:"This one is parked on a decision only you can make. Open the road and make it.",children:e.jsx(l,{tone:"primary",onPress:()=>g==null?void 0:g(n.item.quest.id),note:"see it in its road",children:"Open the road"})});if(n.kind==="dodged"){const{quest:s,task:i}=n.item;return i.hardDue?e.jsxs(x,{note:"A real-world deadline rides on this one, so it cannot be moved or struck from the gate.",children:[e.jsx(l,{tone:"primary",onPress:()=>{E==null||E(s.id,i.id),c()},note:"mark it done",children:"Do it"}),e.jsx(l,{onPress:()=>g==null?void 0:g(s.id),note:"see it in its road",children:"Open the road"})]}):e.jsxs(x,{note:"The questions above the list are the ones worth asking before you answer this.",children:[e.jsx(l,{tone:"primary",onPress:()=>{E==null||E(s.id,i.id),c()},note:"mark it done",children:"Do it"}),e.jsx(l,{onPress:()=>{J==null||J(s.id,i.id),c()},note:"not today",children:"Reschedule"}),e.jsx(l,{tone:"danger",onPress:()=>{X==null||X(s.id,i.id),c()},note:"off the road",children:"Kill"}),e.jsx(l,{onPress:()=>g==null?void 0:g(s.id),note:"see it in its road",children:"Open"})]})}if(n.kind==="cadence"){const{quest:s,task:i,proposal:r}=n.item;return e.jsxs(x,{note:`${ge(r)} · ${G(r.proposedAt)} — nothing standing is written until you say so.`,children:[!Ae(i,r.recurring)&&e.jsx(l,{tone:"primary",onPress:()=>{M==null||M(s.id,i.id),c()},note:"it comes back",children:"Make it a rite"}),e.jsx(l,{onPress:()=>{W==null||W(s.id,i.id),c()},note:"the step stays",children:"Leave it once"})]})}if(n.kind==="tome"){const{epic:s,quest:i,task:r,proposal:d}=n.item,{home:j}=ue(r,s);return e.jsxs(x,{note:`${G(d.proposedAt)} — it already trains ${j?j.name:"no skill"}. Nothing is written until you say so.`,children:[Le(d).map(F=>e.jsxs(l,{tone:"primary",onPress:()=>{K==null||K(i.id,r.id,[F.id]),c()},note:F.blurb,children:[F.icon," ",F.name]},F.id)),e.jsx(l,{onPress:()=>{B==null||B(i.id,r.id),c()},note:"the step is untouched",children:"None of these"})]})}const{quest:t,task:a}=n.item;return e.jsxs(x,{note:"It left your hands a while ago. Either it is back with you, or it is still theirs.",children:[e.jsx(l,{tone:"primary",onPress:()=>{Y==null||Y(t.id,a.id),c()},note:"it is yours again",children:"Back to todo"}),e.jsx(l,{onPress:()=>g==null?void 0:g(t.id),note:"see it in its road",children:"Open the road"})]})},le=((he=(de=n==null?void 0:n.arrival)==null?void 0:de.draft)==null?void 0:he.displaces)??null;return e.jsxs("div",{className:"lay-gatehouse-portcullis",children:[e.jsx("style",{children:Ge}),e.jsx("div",{className:"lay-gatehouse-scrim",onClick:b,"aria-hidden":"true"}),e.jsxs(Ne,{stop:U,onStop:se,yielded:o,label:"The Gatehouse",children:[e.jsxs("div",{className:"lay-gatehouse-lintel",children:[e.jsxs("div",{children:[e.jsx("div",{className:"lay-gatehouse-kicker",children:"The Gatehouse"}),e.jsx("h2",{className:"lay-gatehouse-title",children:"Nothing waits here unseen"})]}),e.jsx(Ee,{onClose:b,name:"the Gatehouse"})]}),e.jsx("div",{className:"lay-gatehouse-queue",children:O?e.jsx(ze,{children:"The gate is clear. Nothing needs a verdict right now."}):me.map(t=>oe[t.kind]===0?null:e.jsxs("section",{className:"lay-gatehouse-section",children:[be(t),t.kind==="dodged"&&e.jsx("ul",{className:"lay-gatehouse-questions",children:Pe.map(a=>e.jsx("li",{children:a},a))}),e.jsxs("ul",{className:"lay-gatehouse-list",children:[t.kind==="courier"&&p.map(a=>{var s,i;return N("courier",a.id,e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"lay-gatehouse-text",children:a.text}),e.jsxs("span",{className:"lay-gatehouse-meta",children:[((s=a.provenance)==null?void 0:s.by)==="mcp"&&e.jsx("span",{className:"lay-gatehouse-prov",children:"⌁ by machine — an AI proposed it; nothing has entered your realm"}),e.jsx("span",{children:Ie(a.receivedAt)})]})]}),{},a.draft?e.jsx(_e,{draft:a.draft,kind:(i=a.provenance)==null?void 0:i.kind}):null)}),t.kind==="unsorted"&&z.map(a=>{var s;return N("unsorted",a.id,e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"lay-gatehouse-text",children:a.text}),e.jsx("span",{className:"lay-gatehouse-meta",children:e.jsxs("span",{children:["piled ",((s=a.piledAt)==null?void 0:s.slice(5))??""]})})]}))}),t.kind==="verdict"&&_.map(({epic:a,task:s})=>N("verdict",s.id,e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"lay-gatehouse-dot",style:{background:a.accent}}),e.jsx("span",{className:"lay-gatehouse-text",children:s.title})]}))),t.kind==="dodged"&&q.map(({epic:a,quest:s,task:i,dodged:r})=>N("dodged",i.id,e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"lay-gatehouse-dot",style:{background:a.accent}}),e.jsx("span",{className:"lay-gatehouse-text",children:i.title}),e.jsxs("span",{className:"lay-gatehouse-meta",children:[r!=null&&e.jsxs("span",{children:["planned ",r," times, not done"]}),i.hardDue&&e.jsx("span",{className:"lay-gatehouse-hard",children:"⚑ hard deadline"})]})]}),{onContextMenu:d=>Z==null?void 0:Z(d,s.id,i.id)})),t.kind==="waiting"&&I.map(({epic:a,task:s,days:i})=>N("waiting",s.id,e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"lay-gatehouse-dot",style:{background:a.accent}}),e.jsx("span",{className:"lay-gatehouse-text",children:s.title}),e.jsx("span",{className:"lay-gatehouse-meta",children:e.jsxs("span",{children:[i,"d out of your hands"]})})]}))),t.kind==="cadence"&&A.map(({epic:a,task:s,proposal:i})=>N("cadence",s.id,e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"lay-gatehouse-dot",style:{background:a.accent}}),e.jsx("span",{className:"lay-gatehouse-text",children:s.title}),e.jsxs("span",{className:"lay-gatehouse-meta",children:[e.jsx("span",{children:ge(i)}),e.jsx("span",{children:G(i.proposedAt)})]})]}))),t.kind==="tome"&&L.map(({epic:a,task:s,proposal:i})=>{const{home:r}=ue(s,a);return N("tome",s.id,e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"lay-gatehouse-dot",style:{background:a.accent}}),e.jsx("span",{className:"lay-gatehouse-text",children:s.title}),e.jsxs("span",{className:"lay-gatehouse-meta",children:[e.jsxs("span",{children:["trains ",r?r.name:"no skill"]}),e.jsx("span",{children:G(i.proposedAt)})]})]}))})]})]},t.kind))}),e.jsxs("div",{className:"lay-gatehouse-floor",children:[n&&e.jsxs("div",{className:"lay-gatehouse-aimed",children:[e.jsx("span",{className:"lay-gatehouse-aimed-kind",children:(ce=me.find(t=>t.kind===n.kind))==null?void 0:ce.icon}),e.jsx("span",{className:"lay-gatehouse-aimed-title",children:n.title})]}),le&&e.jsxs("p",{className:"lay-gatehouse-displaces",children:[e.jsx("strong",{children:"Displaces:"})," ",le]}),ve()]})]})]})}const Ge=`
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
`;export{He as default};
