import{r as t,j as e}from"./styles-DDO230I-.js";import{aW as ke,aX as ae,f as ne,aZ as S,a_ as Ne,a$ as A,b0 as Te,a as ze,b2 as Ee,b3 as H,b4 as D,N as le,aT as Se,J as Oe,G as Re,R as O,b9 as Ie,ba as Le}from"./index-ClGvR7HJ.js";const re=[{key:"line",word:"The line",means:"one honest sentence about the day"},{key:"page",word:"The page",means:"anything else on your mind"}],ie=v=>Ie(v);function Ae({epics:v,meta:m,today:o,face:w,onSave:oe,onSaveJournal:se,onSaveMorning:x,onClose:y}){const i=t.useRef(typeof localStorage>"u"?null:ke(localStorage,o,{meta:m,face:(w??(ae()?"evening":"day"))==="morning"?"morning":"day"})).current,s=(i==null?void 0:i.carried)??null,[h,ce]=t.useState(()=>w??(ae()?"evening":"day"));t.useEffect(()=>{w&&ce(w)},[w]);const c=h==="evening",p=ne(m.reckonings).find(a=>a.date===o),[k,de]=t.useState((i==null?void 0:i.line)??(p==null?void 0:p.line)??""),[f,he]=t.useState(!1),P=ne(m.journal),n=P.find(a=>a.date===o),[u,W]=t.useState((i==null?void 0:i.page)??S(n==null?void 0:n.text,s,"page")),[d,R]=t.useState((i==null?void 0:i.morning)??S(n==null?void 0:n.morning,s,"morning")),J=t.useRef((i==null?void 0:i.page)!=null),I=t.useRef((i==null?void 0:i.morning)!=null),[L,pe]=t.useState("line"),g=c?L:h==="morning"?"morning":"page",[ue,j]=t.useState(null),[K,me]=t.useState(null);t.useEffect(()=>{const a=typeof window>"u"?null:window.visualViewport;if(!a)return;const r=()=>me(a.height);return r(),a.addEventListener("resize",r),a.addEventListener("scroll",r),()=>{a.removeEventListener("resize",r),a.removeEventListener("scroll",r)}},[]),t.useEffect(()=>{!J.current&&n&&W(S(n.text,s,"page")),!I.current&&(n!=null&&n.morning)&&R(S(n.morning,s,"morning"))},[n,s]),t.useEffect(()=>{const a=r=>r.key==="Escape"&&!f&&y();return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[y,f]);const F=(p==null?void 0:p.line)??"";t.useEffect(()=>{if(f)return;const a=Ne({page:u,morning:d,line:k},{page:n==null?void 0:n.text,morning:n==null?void 0:n.morning,line:F});try{a?localStorage.setItem(A,JSON.stringify({date:o,line:k,page:u,morning:d,carried:Te(s,{page:u,morning:d})})):localStorage.removeItem(A)}catch{}},[u,d,k,f,o,n,F,s]);const{planned:T,sealed:z,missed:q,beyond:b}=t.useMemo(()=>{var Z;const a=new Map;v.forEach(l=>l.quests.forEach(Q=>Q.tasks.forEach(ee=>a.set(ee.id,{epic:l,quest:Q,task:ee}))));const r=((Z=m.dayPlan)==null?void 0:Z.date)===o?m.dayPlan.taskIds.filter(l=>a.has(l)):[...a.values()].filter(({task:l})=>l.status!=="done"&&(l.scheduled??l.due)===o).map(({task:l})=>l.id),Y=[...a.values()].filter(({task:l})=>l.completedAt&&ze(l.completedAt)===o),_=new Set(Y.map(({task:l})=>l.id));return{planned:r.map(l=>a.get(l)),sealed:r.filter(l=>_.has(l)).map(l=>a.get(l)),missed:r.filter(l=>!_.has(l)).map(l=>a.get(l)),beyond:Y.filter(({task:l})=>!r.includes(l.id))}},[v,m,o]),ge=z.length+b.length,M=P.filter(a=>a.date!==o&&((a.text??"").trim()||(a.morning??"").trim())).sort((a,r)=>a.date<r.date?1:-1).slice(0,14),B=((n==null?void 0:n.text)??"").trim(),E=u.trim()!==B,G=!E&&B!=="",N=((n==null?void 0:n.morning)??"").trim(),C=d.trim()!==N,V=!C&&N!=="",xe=()=>{const a=u.trim();return a!==""||n?a:void 0},U=()=>{E&&(se(o,u.trim()),j("The page is kept. The day is still open."))},ye=()=>{C&&(x==null||x(o,d.trim()),j("The morning page is kept."))},fe=()=>{oe({date:o,plannedIds:T.map(({task:a})=>a.id),sealedIds:z.map(({task:a})=>a.id),missedIds:q.map(({task:a})=>a.id),beyondIds:b.map(({task:a})=>a.id),energy:Le(m),line:k.trim()},xe());try{localStorage.removeItem(A)}catch{}he(!0),setTimeout(y,2200)};if(h==="morning"&&!f)return e.jsx(Ee,{phone:!0,epics:v,meta:m,today:o,morning:d,onMorning:a=>{I.current=!0,R(a)},savedMorning:N,onKeep:(a,r)=>x==null?void 0:x(a,r),onClose:y,fieldId:"lay-jnc-morning",mark:H(d,n==null?void 0:n.morning,s,"morning")?e.jsx(D,{carried:s}):null});if(f)return e.jsxs("div",{className:"lay-journal-c lay-journal-c-out",role:"dialog","aria-label":"The lamp is out",children:[e.jsx("style",{children:te}),e.jsxs("div",{className:"lay-journal-c-ember",children:[e.jsx("div",{className:"lay-journal-c-moon",children:"🌙"}),e.jsx("p",{className:"lay-journal-c-emberline",children:"The lamp is out. The day is closed."})]})]});const je=e.jsxs(e.Fragment,{children:[c&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"lay-journal-c-tally",children:[e.jsxs("div",{className:"lay-journal-c-tallybig",children:[ge," sealed today"]}),e.jsx("div",{className:"lay-journal-c-tallysub",children:T.length===0?"No orders were posted this morning.":`${z.length} of the morning's ${T.length}${b.length>0?`, ${b.length} beyond the plan`:""}.`})]}),e.jsx("p",{className:"lay-journal-c-hint",children:"One minute of truth, then the lamp goes out. What remains is not debt — it is tomorrow's road."}),T.length===0&&b.length===0?e.jsx(le,{children:"Nothing was posted this morning and nothing is marked done. The line is still worth writing."}):e.jsxs("ul",{className:"lay-journal-c-list",children:[z.map(({epic:a,task:r})=>e.jsxs("li",{className:"lay-journal-c-item is-sealed",children:[e.jsx("span",{className:"lay-journal-c-mark",children:"✓"}),e.jsx("span",{className:"lay-journal-c-dot",style:{background:a.accent}}),e.jsx("span",{className:"lay-journal-c-itemtext",children:r.title})]},r.id)),q.map(({epic:a,task:r})=>e.jsxs("li",{className:"lay-journal-c-item",children:[e.jsx("span",{className:"lay-journal-c-mark",children:"○"}),e.jsx("span",{className:"lay-journal-c-dot",style:{background:a.accent}}),e.jsx("span",{className:"lay-journal-c-itemtext",children:r.title})]},r.id)),b.map(({epic:a,task:r})=>e.jsxs("li",{className:"lay-journal-c-item",children:[e.jsx("span",{className:"lay-journal-c-mark",children:"＋"}),e.jsx("span",{className:"lay-journal-c-dot",style:{background:a.accent}}),e.jsx("span",{className:"lay-journal-c-itemtext",children:r.title})]},r.id))]}),p&&e.jsxs("p",{className:"lay-journal-c-note",children:["You reflected earlier tonight",p.line?` — “${p.line}”`:"",". Snuffing again rewrites the record."]})]}),h==="day"&&e.jsx("p",{className:"lay-journal-c-hint",children:"The day in your own hand — what happened, what it meant, what tomorrow should know."}),h==="morning"&&e.jsx("p",{className:"lay-journal-c-hint",children:"Empty the head before the day begins. Tonight's rite quotes your words into the chronicle exactly as written — your voice, untouched."}),N!==""&&h!=="morning"&&e.jsxs("div",{className:"lay-journal-c-block",children:[e.jsx("div",{className:"lay-journal-c-label",children:"The morning's words"}),e.jsx("blockquote",{className:"lay-journal-c-quote",children:N})]}),h==="morning"&&e.jsx("p",{className:"lay-journal-c-note",children:"Writing this pays Discipline and Communication once for the day. There is no streak — a quiet morning costs nothing."}),h==="day"&&e.jsx("p",{className:"lay-journal-c-note",children:"The evening reflection — the look back at what you planned against what you finished — opens here once evening comes."}),M.length>0?e.jsxs("div",{className:"lay-journal-c-block",children:[e.jsx("div",{className:"lay-journal-c-label",children:"Earlier pages"}),M.map(a=>e.jsxs("div",{className:"lay-journal-c-past",children:[e.jsx("div",{className:"lay-journal-c-pastdate",children:ie(a.date)}),(a.morning??"").trim()!==""&&e.jsxs("p",{className:"lay-journal-c-pasttext is-morning",children:["☀ ",a.morning]}),(a.text??"").trim()!==""&&e.jsx("p",{className:"lay-journal-c-pasttext",children:a.text})]},a.date))]}):e.jsx(le,{children:"No earlier pages yet. Whatever you write below becomes the first — nobody grades it, and a day left blank costs nothing."})]}),be=()=>g==="morning"?e.jsxs(e.Fragment,{children:[H(d,n==null?void 0:n.morning,s,"morning")&&e.jsx(D,{carried:s}),e.jsx("textarea",{className:"lay-journal-c-field lay-journal-c-area",value:d,onChange:a=>{I.current=!0,j(null),R(a.target.value)},placeholder:"Everything, in any order — worries, plans, fragments. Nobody grades a brain dump.","aria-label":"The morning page"})]}):g==="page"?e.jsxs(e.Fragment,{children:[H(u,n==null?void 0:n.text,s,"page")&&e.jsx(D,{carried:s}),e.jsx("textarea",{className:"lay-journal-c-field lay-journal-c-area",value:u,onChange:a=>{J.current=!0,j(null),W(a.target.value)},placeholder:"Start with the first thought — a few words is enough, and more usually follow.","aria-label":"The day's page"})]}):e.jsx("input",{className:"lay-journal-c-field lay-journal-c-line",value:k,onChange:a=>{j(null),de(a.target.value)},placeholder:"One honest line — why the day went as it did…",maxLength:200,"aria-label":"One honest line"}),ve=()=>g==="morning"?e.jsx(O,{tone:"primary",onPress:ye,disabled:!C,note:V?"already kept":"writes it to the page",title:"Keep the morning page",children:V?"✒ Kept":"☀ Keep the morning page"}):g==="page"?e.jsx(O,{tone:"primary",onPress:U,disabled:!E,note:G?"already kept":"keeps the words, not the day",title:"Keep the page's words without closing the day",children:G?"✒ Inked":"✒ Ink the page"}):c?e.jsx(O,{tone:"primary",onPress:fe,note:"keeps the line and the page",title:"Close the day — the record and the page are saved together",children:"🪔 Snuff the lamp"}):e.jsx(O,{tone:"primary",onPress:U,disabled:!E,note:"keeps the words",children:"✒ Ink the page"}),$=re.find(a=>a.key===g),X=$?`${$.word} — ${$.means}. `:"",we=ue??(c&&g==="page"?`${X}Keeping the page never closes the day. The lamp waits under “The line”.`:c&&g==="line"?`${X}The line is saved when the lamp is snuffed. Nothing is lost meanwhile.`:g==="morning"?"Nobody grades a brain dump, and there is no streak to break.":"The page is yours; the evening reflection opens on its own hour.");return e.jsxs("div",{className:"lay-journal-c",role:"dialog","aria-modal":"true","aria-label":c?"The Evening Reflection":"The Journal",style:K?{height:`${K}px`}:void 0,children:[e.jsx("style",{children:te}),e.jsx("button",{type:"button",className:"lay-journal-c-backdrop",onClick:y,"aria-label":`Close ${c?"the Evening Reflection":"the Journal"}`,children:e.jsx("span",{className:"lay-journal-c-grab"})}),e.jsxs("div",{className:"lay-journal-c-sheet",children:[e.jsxs("header",{className:"lay-journal-c-head",children:[e.jsx("div",{className:"lay-journal-c-kicker",children:c?"The Evening Reflection":h==="morning"?"The Journal — the morning page":"The Journal"}),e.jsx("h2",{className:"lay-journal-c-date",children:ie(o)})]}),e.jsx(Se,{rail:e.jsxs("div",{className:"lay-journal-c-rail",children:[c&&e.jsx("div",{className:"lay-journal-c-movements",role:"group","aria-label":"The rite's movements",children:re.map(a=>e.jsx("button",{type:"button",className:`lay-journal-c-mv${L===a.key?" is-open":""}`,"aria-pressed":L===a.key,onClick:()=>{pe(a.key),j(null)},title:a.means,children:e.jsx("span",{className:"lay-journal-c-mvword",children:a.word})},a.key))}),e.jsx("div",{className:"lay-journal-c-composer",children:be()}),e.jsxs(Oe,{note:we,children:[e.jsx(Re,{onClose:y,name:c?"the Evening Reflection":"the Journal",kind:"rite"}),ve()]})]}),children:je})]})]})}const te=`
.lay-journal-c {
  position: fixed; inset: 0; z-index: 60;
  display: flex; flex-direction: column;
  height: 100dvh; max-height: 100dvh;
  background: rgba(10, 8, 5, 0.75);
  color: var(--ink, #e9dcc0);
  font-size: 16px;
}

/* The room shows through here, and the whole strip closes the Journal. */
.lay-journal-c-backdrop {
  flex: none; min-height: 68px; width: 100%;
  display: flex; align-items: center; justify-content: center;
  background: none; border: 0; padding: 0;
  padding-top: env(safe-area-inset-top, 0px);
}
.lay-journal-c-grab { display: block; width: 36px; height: 4px; border-radius: 2px; background: var(--ink-dim, #a8987a); opacity: .7; }

.lay-journal-c-sheet {
  flex: 1; min-height: 0;
  display: flex; flex-direction: column;
  background: var(--parchment, #1c1710);
  border-top: 1px solid var(--border, #3d3320);
  border-radius: 16px 16px 0 0;
  overflow: hidden;
}

.lay-journal-c-head {
  flex: none;
  padding: 12px calc(env(safe-area-inset-right, 0px) + 16px) 10px calc(env(safe-area-inset-left, 0px) + 16px);
  border-bottom: 1px solid var(--border, #3d3320);
}
.lay-journal-c-kicker { font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: var(--gold-bright, #f4c95d); }
.lay-journal-c-date { margin: 3px 0 0; font-size: 17px; font-weight: 500; color: var(--ink, #e9dcc0); }

/* THE ONE PANNABLE SCROLLER. The shipped card's 88vh outer scroll and its
   nested 34vh list are both gone — a scroller inside a scroller on a phone is
   a coin toss over which one takes the drag. */
.lay-journal-c .lay-waterline { flex: 1; min-height: 0; display: flex; flex-direction: column; }
.lay-journal-c .lay-above {
  flex: 1; min-height: 0; overflow-y: auto; -webkit-overflow-scrolling: touch;
  padding: 14px calc(env(safe-area-inset-right, 0px) + 16px) 18px calc(env(safe-area-inset-left, 0px) + 16px);
}
.lay-journal-c .lay-nothing { color: var(--ink-dim, #a8987a); font-size: 15px; line-height: 1.5; padding: 20px 0; margin: 0; }

/* Gold TEXT is identity here (kicker, tally, labels); gold BORDER AND FILL are
   the finishing act's alone, which is the affordance colour §13 protects. */
.lay-journal-c-tally { margin-bottom: 10px; }
.lay-journal-c-tallybig {
  font-family: Cinzel, Georgia, serif; font-size: 28px; line-height: 1.15;
  letter-spacing: .03em; text-transform: uppercase; color: var(--gold-bright, #f4c95d);
}
.lay-journal-c-tallysub { margin-top: 4px; font-size: 15px; line-height: 1.45; color: var(--ink-dim, #a8987a); }

.lay-journal-c-hint { margin: 0 0 14px; font-size: 15px; line-height: 1.5; color: var(--ink-dim, #a8987a); }
.lay-journal-c-note { margin: 12px 0 0; font-size: 13px; line-height: 1.5; color: var(--ink-dim, #a8987a); }

.lay-journal-c-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
.lay-journal-c-item { display: flex; gap: 10px; align-items: flex-start; font-size: 15px; line-height: 1.4; }
.lay-journal-c-item.is-sealed .lay-journal-c-itemtext { color: var(--ink, #e9dcc0); }
.lay-journal-c-mark { flex: none; width: 16px; color: var(--ink-dim, #a8987a); }
.lay-journal-c-item.is-sealed .lay-journal-c-mark { color: var(--gold-bright, #f4c95d); }
.lay-journal-c-dot { flex: none; width: 9px; height: 9px; border-radius: 50%; margin-top: 6px; }
.lay-journal-c-itemtext { flex: 1; min-width: 0; color: var(--ink-dim, #a8987a); overflow-wrap: anywhere; }

.lay-journal-c-block { margin-top: 18px; }
.lay-journal-c-label { font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: var(--gold-bright, #f4c95d); margin-bottom: 6px; }
.lay-journal-c-quote { margin: 0; padding-left: 10px; border-left: 2px solid var(--border, #3d3320); font-size: 15px; line-height: 1.5; color: var(--ink-dim, #a8987a); }
.lay-journal-c-past { margin-bottom: 12px; }
.lay-journal-c-pastdate { font-size: 12px; color: var(--gold-bright, #f4c95d); opacity: .85; }
.lay-journal-c-pasttext { margin: 3px 0 0; font-size: 14px; line-height: 1.5; color: var(--ink-dim, #a8987a); overflow-wrap: anywhere; }
.lay-journal-c-pasttext.is-morning { color: var(--ink, #e9dcc0); opacity: .8; }

/* THE RAIL. Sticky inside the surface rather than fixed to the viewport — a
   viewport-fixed rail is what buried a sibling layout's own act row under two
   other bars. It never yields height to the column above it. */
.lay-journal-c-rail {
  flex: none;
  border-top: 1px solid var(--border, #3d3320);
  background: var(--parchment-raised, #241d13);
  padding-bottom: env(safe-area-inset-bottom, 0px);
}

/* THE OPENERS. Plain in both states. The open one is RECESSED, never gold —
   borrowing the act's colour to mean "this is showing" is how a colour stops
   meaning anything. */
.lay-journal-c-movements {
  display: flex; gap: 8px;
  padding: 8px calc(env(safe-area-inset-right, 0px) + 12px) 0 calc(env(safe-area-inset-left, 0px) + 12px);
}
.lay-journal-c-mv {
  flex: 1 1 0; min-height: 44px; min-width: 44px;
  font: inherit; font-size: 14px; line-height: 1.1;
  display: flex; align-items: center; justify-content: center;
  padding: 6px 4px; border-radius: 9px;
  border: 1px solid var(--border, #3d3320);
  background: transparent; color: var(--ink-dim, #a8987a);
}
.lay-journal-c-mv.is-open {
  background: var(--parchment, #1c1710);
  color: var(--ink, #e9dcc0);
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, .45);
}
.lay-journal-c-mvword { display: block; }

.lay-journal-c-composer {
  padding: 8px calc(env(safe-area-inset-right, 0px) + 12px) 4px calc(env(safe-area-inset-left, 0px) + 12px);
}

/* 16px or iOS zooms the surface in on focus and never zooms back out. */
.lay-journal-c-field {
  width: 100%; font: inherit; font-size: 16px; line-height: 1.4;
  background: var(--parchment, #1c1710); color: var(--ink, #e9dcc0);
  border: 1px solid var(--border, #3d3320); border-radius: 10px;
  padding: 10px 12px;
}
.lay-journal-c-field::placeholder { color: var(--ink-dim, #a8987a); opacity: .8; }
.lay-journal-c-field:focus { outline: none; border-color: var(--ink-dim, #a8987a); }
.lay-journal-c-line { min-height: 52px; }
/* The writing window is bounded so the rail can never eat the record above it,
   and floored so it is never a slot. */
.lay-journal-c-area { min-height: 96px; max-height: 30dvh; resize: none; }


/* THE ACT ROW. Close on the left at a fixed 96pt, the finishing verb filling
   the rest — and a 10px seam between them, because two hit areas that abut let
   DOM order decide a press. */
.lay-journal-c .lay-rail {
  padding: 8px calc(env(safe-area-inset-right, 0px) + 12px) 10px calc(env(safe-area-inset-left, 0px) + 12px);
}
.lay-journal-c .lay-rail-acts { display: flex; gap: 10px; align-items: stretch; }
.lay-journal-c .lay-close {
  flex: 0 0 96px; min-width: 96px; min-height: 56px;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1px;
  font: inherit; font-size: 20px; line-height: 1; border-radius: 10px;
  border: 1px solid var(--border, #3d3320);
  background: var(--parchment, #1c1710); color: var(--ink-dim, #a8987a);
}
/* The glyph is the ruled close; the word is added from this scope because the
   thumb zone is not a place for an unlabelled symbol. The accessible name
   comes from CardClose's own aria-label, so this is decoration, not the label. */
.lay-journal-c .lay-close::after { content: 'Close'; font-size: 12px; letter-spacing: .06em; }

.lay-journal-c .lay-act {
  flex: 1 1 0; min-height: 56px; min-width: 44px;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
  padding: 8px 6px; font: inherit; border-radius: 10px;
  border: 1px solid var(--border, #3d3320);
  background: var(--parchment, #1c1710); color: var(--ink, #e9dcc0);
}
/* The finishing act's gold, restated in this scope because it has to be: the
   rule above sets border and colour at two classes, so the shared
   .lay-act-primary (one class) loses to it and the act would render plain.
   NOTE: no backticks in here — this whole block is a template literal, and a
   backtick pair closes it and restarts it as a tagged template on whatever word
   follows. That threw at IMPORT time, and because Hosts.jsx imports all fifteen
   eagerly it took the WHOLE APP down in every mode — including the layouts that
   never render this file. Third time this trap has bitten. */
.lay-journal-c .lay-act-primary { border-color: var(--gold-bright, #f4c95d); color: var(--gold-bright, #f4c95d); }
.lay-journal-c .lay-act[disabled] { opacity: .45; }
.lay-journal-c .lay-act-word { font-size: 16px; line-height: 1.15; text-align: center; }
.lay-journal-c .lay-act-note { font-size: 11px; line-height: 1.15; color: var(--ink-dim, #a8987a); text-align: center; }
/* THE TOOLTIP LAW'S TOUCH HOME: touch has no hover, so the plain sentence sits
   permanently under the row rather than behind a long-press iOS steals anyway. */
.lay-journal-c .lay-rail-note { margin: 8px 2px 0; font-size: 13px; line-height: 1.4; color: var(--ink-dim, #a8987a); min-height: 18px; }

/* The lamp going out. Stilled for anyone who asked for less motion. */
.lay-journal-c-out { background: #05040a; }
.lay-journal-c-ember { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; padding: 24px; }
.lay-journal-c-moon { font-size: 46px; animation: lay-journal-c-fade 2.2s ease-out forwards; }
.lay-journal-c-emberline { margin: 0; font-size: 16px; color: var(--ink-dim, #a8987a); text-align: center; }
@keyframes lay-journal-c-fade { from { opacity: 1; } to { opacity: .25; } }
@media (prefers-reduced-motion: reduce) {
  .lay-journal-c-moon { animation: none; }
}
`;export{Ae as default};
