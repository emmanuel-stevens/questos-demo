import{r,a8 as ye,a9 as fe,ab as je,ac as I,b as ve,j as a,N as _,W as be,A as we,C as ke,R as E,ah as Ne,ai as Te}from"./index-CYLJyUTU.js";const Q=[{key:"line",word:"The line",means:"one honest sentence about the day"},{key:"page",word:"The page",means:"anything else on your mind"}],Z=v=>Ne(v);function ze({epics:v,meta:u,today:o,face:b,onSave:ae,onSaveJournal:ne,onSaveMorning:z,onClose:y}){const i=r.useRef(typeof localStorage>"u"?null:ye(localStorage,o)).current,[d,le]=r.useState(()=>b??(fe()?"evening":"day"));r.useEffect(()=>{b&&le(b)},[b]);const s=d==="evening",c=(u.reckonings??[]).find(e=>e.date===o),[f,te]=r.useState((i==null?void 0:i.line)??(c==null?void 0:c.line)??""),[j,re]=r.useState(!1),C=u.journal??[],n=C.find(e=>e.date===o),[p,L]=r.useState((i==null?void 0:i.page)??(n==null?void 0:n.text)??""),[m,A]=r.useState((i==null?void 0:i.morning)??(n==null?void 0:n.morning)??""),$=r.useRef((i==null?void 0:i.page)!=null),H=r.useRef((i==null?void 0:i.morning)!=null),[S,ie]=r.useState("line"),h=s?S:d==="morning"?"morning":"page",[oe,g]=r.useState(null),[P,se]=r.useState(null);r.useEffect(()=>{const e=typeof window>"u"?null:window.visualViewport;if(!e)return;const t=()=>se(e.height);return t(),e.addEventListener("resize",t),e.addEventListener("scroll",t),()=>{e.removeEventListener("resize",t),e.removeEventListener("scroll",t)}},[]),r.useEffect(()=>{!$.current&&n&&L(n.text??""),!H.current&&(n!=null&&n.morning)&&A(n.morning)},[n]),r.useEffect(()=>{const e=t=>t.key==="Escape"&&!j&&y();return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[y,j]);const D=(c==null?void 0:c.line)??"";r.useEffect(()=>{if(j)return;const e=je({page:p,morning:m,line:f},{page:n==null?void 0:n.text,morning:n==null?void 0:n.morning,line:D});try{e?localStorage.setItem(I,JSON.stringify({date:o,line:f,page:p,morning:m})):localStorage.removeItem(I)}catch{}},[p,m,f,j,o,n,D]);const{planned:w,sealed:k,missed:W,beyond:x}=r.useMemo(()=>{var U;const e=new Map;v.forEach(l=>l.quests.forEach(Y=>Y.tasks.forEach(X=>e.set(X.id,{epic:l,quest:Y,task:X}))));const t=((U=u.dayPlan)==null?void 0:U.date)===o?u.dayPlan.taskIds.filter(l=>e.has(l)):[...e.values()].filter(({task:l})=>l.status!=="done"&&(l.scheduled??l.due)===o).map(({task:l})=>l.id),B=[...e.values()].filter(({task:l})=>l.completedAt&&ve(l.completedAt)===o),G=new Set(B.map(({task:l})=>l.id));return{planned:t.map(l=>e.get(l)),sealed:t.filter(l=>G.has(l)).map(l=>e.get(l)),missed:t.filter(l=>!G.has(l)).map(l=>e.get(l)),beyond:B.filter(({task:l})=>!t.includes(l.id))}},[v,u,o]),ce=k.length+x.length,J=C.filter(e=>e.date!==o&&((e.text??"").trim()||(e.morning??"").trim())).sort((e,t)=>e.date<t.date?1:-1).slice(0,14),M=((n==null?void 0:n.text)??"").trim(),N=p.trim()!==M,K=!N&&M!=="",T=((n==null?void 0:n.morning)??"").trim(),R=m.trim()!==T,q=!R&&T!=="",de=()=>{const e=p.trim();return e!==""||n?e:void 0},F=()=>{N&&(ne(o,p.trim()),g("The page is kept. The day is still open."))},he=()=>{R&&(z==null||z(o,m.trim()),g("The morning page is kept."))},pe=()=>{ae({date:o,plannedIds:w.map(({task:e})=>e.id),sealedIds:k.map(({task:e})=>e.id),missedIds:W.map(({task:e})=>e.id),beyondIds:x.map(({task:e})=>e.id),energy:Te(u),line:f.trim()},de());try{localStorage.removeItem(I)}catch{}re(!0),setTimeout(y,2200)};if(j)return a.jsxs("div",{className:"lay-journal-c lay-journal-c-out",role:"dialog","aria-label":"The lamp is out",children:[a.jsx("style",{children:ee}),a.jsxs("div",{className:"lay-journal-c-ember",children:[a.jsx("div",{className:"lay-journal-c-moon",children:"🌙"}),a.jsx("p",{className:"lay-journal-c-emberline",children:"The lamp is out. The day is closed."})]})]});const ue=a.jsxs(a.Fragment,{children:[s&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"lay-journal-c-tally",children:[a.jsxs("div",{className:"lay-journal-c-tallybig",children:[ce," sealed today"]}),a.jsx("div",{className:"lay-journal-c-tallysub",children:w.length===0?"No orders were posted this morning.":`${k.length} of the morning's ${w.length}${x.length>0?`, ${x.length} beyond the plan`:""}.`})]}),a.jsx("p",{className:"lay-journal-c-hint",children:"One minute of truth, then the lamp goes out. What remains is not debt — it is tomorrow's road."}),w.length===0&&x.length===0?a.jsx(_,{children:"Nothing was posted this morning and nothing is marked done. The line is still worth writing."}):a.jsxs("ul",{className:"lay-journal-c-list",children:[k.map(({epic:e,task:t})=>a.jsxs("li",{className:"lay-journal-c-item is-sealed",children:[a.jsx("span",{className:"lay-journal-c-mark",children:"✓"}),a.jsx("span",{className:"lay-journal-c-dot",style:{background:e.accent}}),a.jsx("span",{className:"lay-journal-c-itemtext",children:t.title})]},t.id)),W.map(({epic:e,task:t})=>a.jsxs("li",{className:"lay-journal-c-item",children:[a.jsx("span",{className:"lay-journal-c-mark",children:"○"}),a.jsx("span",{className:"lay-journal-c-dot",style:{background:e.accent}}),a.jsx("span",{className:"lay-journal-c-itemtext",children:t.title})]},t.id)),x.map(({epic:e,task:t})=>a.jsxs("li",{className:"lay-journal-c-item",children:[a.jsx("span",{className:"lay-journal-c-mark",children:"＋"}),a.jsx("span",{className:"lay-journal-c-dot",style:{background:e.accent}}),a.jsx("span",{className:"lay-journal-c-itemtext",children:t.title})]},t.id))]}),c&&a.jsxs("p",{className:"lay-journal-c-note",children:["You reflected earlier tonight",c.line?` — “${c.line}”`:"",". Snuffing again rewrites the record."]})]}),d==="day"&&a.jsx("p",{className:"lay-journal-c-hint",children:"The day in your own hand — what happened, what it meant, what tomorrow should know."}),d==="morning"&&a.jsx("p",{className:"lay-journal-c-hint",children:"Empty the head before the day begins. Tonight's rite quotes your words into the chronicle exactly as written — your voice, untouched."}),T!==""&&d!=="morning"&&a.jsxs("div",{className:"lay-journal-c-block",children:[a.jsx("div",{className:"lay-journal-c-label",children:"The morning's words"}),a.jsx("blockquote",{className:"lay-journal-c-quote",children:T})]}),d==="morning"&&a.jsx("p",{className:"lay-journal-c-note",children:"Writing this pays Discipline and Communication once for the day. There is no streak — a quiet morning costs nothing."}),d==="day"&&a.jsx("p",{className:"lay-journal-c-note",children:"The evening reflection — the look back at what you planned against what you finished — opens here once evening comes."}),J.length>0?a.jsxs("div",{className:"lay-journal-c-block",children:[a.jsx("div",{className:"lay-journal-c-label",children:"Earlier pages"}),J.map(e=>a.jsxs("div",{className:"lay-journal-c-past",children:[a.jsx("div",{className:"lay-journal-c-pastdate",children:Z(e.date)}),(e.morning??"").trim()!==""&&a.jsxs("p",{className:"lay-journal-c-pasttext is-morning",children:["☀ ",e.morning]}),(e.text??"").trim()!==""&&a.jsx("p",{className:"lay-journal-c-pasttext",children:e.text})]},e.date))]}):a.jsx(_,{children:"No earlier pages yet. Whatever you write below becomes the first — nobody grades it, and a day left blank costs nothing."})]}),me=()=>h==="morning"?a.jsx("textarea",{className:"lay-journal-c-field lay-journal-c-area",value:m,onChange:e=>{H.current=!0,g(null),A(e.target.value)},placeholder:"Everything, in any order — worries, plans, fragments. Nobody grades a brain dump.","aria-label":"The morning page"}):h==="page"?a.jsx("textarea",{className:"lay-journal-c-field lay-journal-c-area",value:p,onChange:e=>{$.current=!0,g(null),L(e.target.value)},placeholder:"Start with the first thought — a few words is enough, and more usually follow.","aria-label":"The day's page"}):a.jsx("input",{className:"lay-journal-c-field lay-journal-c-line",value:f,onChange:e=>{g(null),te(e.target.value)},placeholder:"One honest line — why the day went as it did…",maxLength:200,"aria-label":"One honest line"}),ge=()=>h==="morning"?a.jsx(E,{tone:"primary",onPress:he,disabled:!R,note:q?"already kept":"writes it to the page",title:"Keep the morning page",children:q?"✒ Kept":"☀ Keep the morning page"}):h==="page"?a.jsx(E,{tone:"primary",onPress:F,disabled:!N,note:K?"already kept":"keeps the words, not the day",title:"Keep the page's words without closing the day",children:K?"✒ Inked":"✒ Ink the page"}):s?a.jsx(E,{tone:"primary",onPress:pe,note:"keeps the line and the page",title:"Close the day — the record and the page are saved together",children:"🪔 Snuff the lamp"}):a.jsx(E,{tone:"primary",onPress:F,disabled:!N,note:"keeps the words",children:"✒ Ink the page"}),O=Q.find(e=>e.key===h),V=O?`${O.word} — ${O.means}. `:"",xe=oe??(s&&h==="page"?`${V}Keeping the page never closes the day. The lamp waits under “The line”.`:s&&h==="line"?`${V}The line is saved when the lamp is snuffed. Nothing is lost meanwhile.`:h==="morning"?"Nobody grades a brain dump, and there is no streak to break.":"The page is yours; the evening reflection opens on its own hour.");return a.jsxs("div",{className:"lay-journal-c",role:"dialog","aria-modal":"true","aria-label":s?"The Evening Reflection":"The Journal",style:P?{height:`${P}px`}:void 0,children:[a.jsx("style",{children:ee}),a.jsx("button",{type:"button",className:"lay-journal-c-backdrop",onClick:y,"aria-label":`Close ${s?"the Evening Reflection":"the Journal"}`,children:a.jsx("span",{className:"lay-journal-c-grab"})}),a.jsxs("div",{className:"lay-journal-c-sheet",children:[a.jsxs("header",{className:"lay-journal-c-head",children:[a.jsx("div",{className:"lay-journal-c-kicker",children:s?"The Evening Reflection":d==="morning"?"The Journal — the morning page":"The Journal"}),a.jsx("h2",{className:"lay-journal-c-date",children:Z(o)})]}),a.jsx(be,{rail:a.jsxs("div",{className:"lay-journal-c-rail",children:[s&&a.jsx("div",{className:"lay-journal-c-movements",role:"group","aria-label":"The rite's movements",children:Q.map(e=>a.jsx("button",{type:"button",className:`lay-journal-c-mv${S===e.key?" is-open":""}`,"aria-pressed":S===e.key,onClick:()=>{ie(e.key),g(null)},title:e.means,children:a.jsx("span",{className:"lay-journal-c-mvword",children:e.word})},e.key))}),a.jsx("div",{className:"lay-journal-c-composer",children:me()}),a.jsxs(we,{note:xe,children:[a.jsx(ke,{onClose:y,name:s?"the Evening Reflection":"the Journal",kind:"rite"}),ge()]})]}),children:ue})]})]})}const ee=`
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
`;export{ze as default};
