import{r as l,aG as Fe,aH as ie,f as se,aJ as L,aK as $e,aL as D,aM as Ke,b as Ge,j as a,N as de,aO as We,aP as E,aQ as H,J as qe,C as Be,B as Ce,R as P,aV as De,aW as Pe}from"./index-DoW_xDLS.js";function he(g,p){const d=l.useRef(null);return l.useEffect(()=>{const r=d.current;r&&(r.style.height="auto",r.style.height=`${Math.min(r.scrollHeight,p)}px`)},[g,p]),d}function ce({open:g,onToggle:p,label:d,children:r}){return a.jsxs("section",{className:`lay-journal-fold ${g?"is-open":""}`,children:[a.jsxs("button",{type:"button",className:"lay-journal-fold-head","aria-expanded":g,onClick:p,children:[a.jsx("span",{className:"lay-journal-fold-label",children:d}),a.jsx("span",{className:"lay-journal-fold-chev","aria-hidden":"true",children:g?"⌄":"›"})]}),g&&a.jsx("div",{className:"lay-journal-fold-body",children:r})]})}function Je({sheetYields:g=!1,epics:p=[],meta:d={},today:r,face:v,onSave:A,onSaveJournal:F,onSaveMorning:j,onClose:u}){const i=l.useRef(typeof localStorage>"u"?null:Fe(localStorage,r,{meta:d,face:(v??(ie()?"evening":"day"))==="morning"?"morning":"day"})).current,s=(i==null?void 0:i.carried)??null,[y,me]=l.useState(()=>v??(ie()?"evening":"day"));l.useEffect(()=>{v&&me(v)},[v]);const x=y==="evening",[ge,pe]=l.useState("rest"),m=se(d.reckonings).find(e=>e.date===r),[k,fe]=l.useState((i==null?void 0:i.line)??(m==null?void 0:m.line)??""),[w,ye]=l.useState(!1),M=se(d.journal),n=M.find(e=>e.date===r),[h,$]=l.useState((i==null?void 0:i.page)??L(n==null?void 0:n.text,s,"page")),[J,U]=l.useState(!1),K=l.useRef((i==null?void 0:i.page)!=null),[c,G]=l.useState((i==null?void 0:i.morning)??L(n==null?void 0:n.morning,s,"morning")),[xe,Q]=l.useState(!1),W=l.useRef((i==null?void 0:i.morning)!=null),[z,je]=l.useState(!0),[we,be]=l.useState(!1),[ve,ke]=l.useState(!1);l.useEffect(()=>{!K.current&&n&&$(L(n.text,s,"page")),!W.current&&(n!=null&&n.morning)&&G(L(n.morning,s,"morning"))},[n,s]),l.useEffect(()=>{const e=o=>o.key==="Escape"&&!w&&(u==null?void 0:u());return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[u,w]);const[q,Ne]=l.useState(0);l.useEffect(()=>{const e=typeof window>"u"?null:window.visualViewport;if(!e)return;const o=()=>{const f=Math.max(0,window.innerHeight-e.height-e.offsetTop);Ne(f>120?Math.round(f):0)};return o(),e.addEventListener("resize",o),e.addEventListener("scroll",o),()=>{e.removeEventListener("resize",o),e.removeEventListener("scroll",o)}},[]);const Y=(m==null?void 0:m.line)??"";l.useEffect(()=>{if(w)return;const e=$e({page:h,morning:c,line:k},{page:n==null?void 0:n.text,morning:n==null?void 0:n.morning,line:Y});try{e?localStorage.setItem(D,JSON.stringify({date:r,line:k,page:h,morning:c,carried:Ke(s,{page:h,morning:c})})):localStorage.removeItem(D)}catch{}},[h,c,k,w,r,n,Y,s]);const{planned:N,sealed:S,missed:_,beyond:b}=l.useMemo(()=>{var le;const e=new Map;p.forEach(t=>t.quests.forEach(re=>re.tasks.forEach(oe=>e.set(oe.id,{epic:t,quest:re,task:oe}))));const o=((le=d.dayPlan)==null?void 0:le.date)===r?d.dayPlan.taskIds.filter(t=>e.has(t)):[...e.values()].filter(({task:t})=>t.status!=="done"&&(t.scheduled??t.due)===r).map(({task:t})=>t.id),f=[...e.values()].filter(({task:t})=>t.completedAt&&Ge(t.completedAt)===r),I=new Set(f.map(({task:t})=>t.id));return{planned:o.map(t=>e.get(t)),sealed:o.filter(t=>I.has(t)).map(t=>e.get(t)),missed:o.filter(t=>!I.has(t)).map(t=>e.get(t)),beyond:f.filter(({task:t})=>!o.includes(t.id))}},[p,d,r]),Te=S.length+b.length,V=e=>De(e),X=M.filter(e=>e.date!==r&&((e.text??"").trim()||(e.morning??"").trim())).sort((e,o)=>e.date<o.date?1:-1).slice(0,14),ze=()=>{const e=h.trim();return e!==""||n?e:void 0},Se=()=>{A==null||A({date:r,plannedIds:N.map(({task:e})=>e.id),sealedIds:S.map(({task:e})=>e.id),missedIds:_.map(({task:e})=>e.id),beyondIds:b.map(({task:e})=>e.id),energy:Pe(d),line:k.trim()},ze());try{localStorage.removeItem(D)}catch{}ye(!0),setTimeout(()=>u==null?void 0:u(),2200)},Z=((n==null?void 0:n.text)??"").trim(),O=h.trim()!==Z,ee=!O&&Z!=="",Oe=()=>{O&&(F==null||F(r,h.trim()),U(!0),setTimeout(()=>U(!1),1400))},T=((n==null?void 0:n.morning)??"").trim(),R=c.trim()!==T,ae=!R&&T!=="",Re=()=>{R&&(j==null||j(r,c.trim()),Q(!0),setTimeout(()=>Q(!1),1400))},Ie=q>0?150:240,ne=he(h,Ie),Le=he(c,q>0?170:260),Ee=y==="morning"?"The Journal — the morning page":x?"The Evening Reflection":"The Journal",He=y==="morning"?"Empty the head before the day begins. Tonight’s rite quotes your words into the chronicle exactly as written — your voice, untouched.":x?"One minute of truth, then the lamp goes out. What remains is not debt — it is tomorrow’s road.":"The day in your own hand — what happened, what it meant, what tomorrow should know.",Ae=N.length===0&&b.length===0,B=({epic:e,task:o},f,I)=>a.jsxs("li",{className:`lay-journal-row ${f==="✓"?"is-sealed":""}`,children:[a.jsx("span",{className:"lay-journal-mark","aria-hidden":"true",children:f}),a.jsx("i",{className:"lay-journal-accent",style:{background:e.accent},"aria-hidden":"true"}),a.jsxs("span",{className:"lay-journal-row-text",children:[a.jsx("span",{className:"lay-journal-row-title",children:o.title}),a.jsx("span",{className:"lay-journal-row-word",children:I})]})]},o.id),te=T!==""&&y!=="morning"&&a.jsx(ce,{open:we,onToggle:()=>be(e=>!e),label:"The morning’s words",children:a.jsx("blockquote",{className:"lay-journal-quote",children:T})}),C=a.jsx(ce,{open:ve,onToggle:()=>ke(e=>!e),label:"Earlier pages",children:X.length===0?a.jsx(de,{children:"No earlier pages yet. Today’s is the first — and every one after it is kept here."}):X.map(e=>a.jsxs("div",{className:"lay-journal-past",children:[a.jsx("div",{className:"lay-journal-past-date",children:V(e.date)}),(e.morning??"").trim()!==""&&a.jsxs("p",{className:"lay-journal-past-text is-morning",children:["☀ ",e.morning]}),(e.text??"").trim()!==""&&a.jsx("p",{className:"lay-journal-past-text",children:e.text})]},e.date))});return y==="morning"&&!w?a.jsx(We,{phone:!0,epics:p,meta:d,today:r,morning:c,onMorning:e=>{W.current=!0,G(e)},savedMorning:T,onKeep:(e,o)=>j==null?void 0:j(e,o),onClose:u,fieldId:"lay-jnb-morning",mark:E(c,n==null?void 0:n.morning,s,"morning")?a.jsx(H,{carried:s}):null}):w?a.jsxs("div",{className:"lay-journal lay-journal-ember",children:[a.jsx("style",{children:ue}),a.jsxs("div",{className:"lay-journal-ember-inner",children:[a.jsx("div",{className:"lay-journal-ember-flame",children:"🌙"}),a.jsx("div",{className:"lay-journal-ember-line",children:"The lamp is out. The day is closed."})]})]}):a.jsxs("div",{className:"lay-journal",style:{"--lay-journal-keyboard":`${q}px`},children:[a.jsx("style",{children:ue}),a.jsxs(qe,{stop:ge,onStop:pe,yielded:g,label:"The Journal",children:[a.jsxs("div",{className:"lay-journal-lip",children:[a.jsxs("div",{className:"lay-journal-head",children:[a.jsxs("div",{className:"lay-journal-names",children:[a.jsx("div",{className:"lay-journal-kicker",children:Ee}),a.jsx("h2",{className:"lay-journal-date",children:V(r)})]}),a.jsx(Be,{onClose:u,name:"the journal"})]}),a.jsx("p",{className:"lay-journal-framing",children:He}),x&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"lay-journal-tally",children:[a.jsxs("span",{className:"lay-journal-tally-count",children:[Te," sealed today"]}),a.jsxs("span",{className:"lay-journal-tally-say",children:[N.length===0?"no orders were posted this morning":`${S.length} of the morning’s ${N.length}`,N.length>0&&b.length>0?`, ${b.length} beyond the plan`:""]})]}),a.jsxs("button",{type:"button",className:"lay-journal-list-toggle","aria-expanded":z,onClick:()=>je(e=>!e),children:[a.jsx("span",{children:z?"Hide the day’s work":"Show the day’s work"}),a.jsx("span",{"aria-hidden":"true",children:z?"⌄":"›"})]})]})]}),a.jsx("div",{className:"lay-journal-page",children:x?a.jsxs(a.Fragment,{children:[z&&(Ae?a.jsx(de,{children:"Nothing was posted this morning and nothing has been sealed yet today. The honest line below is still worth writing."}):a.jsxs("ul",{className:"lay-journal-list",children:[S.map(e=>B(e,"✓","sealed")),_.map(e=>B(e,"○","still open")),b.map(e=>B(e,"＋","beyond the plan"))]})),a.jsx("label",{className:"lay-journal-label",htmlFor:"lay-journal-line",children:"One honest line"}),a.jsx("input",{id:"lay-journal-line",className:"lay-journal-line",value:k,onChange:e=>fe(e.target.value),placeholder:"Why the day went as it did…",maxLength:200}),a.jsx("label",{className:"lay-journal-label",htmlFor:"lay-journal-page",children:"Anything else on your mind?"}),E(h,n==null?void 0:n.text,s,"page")&&a.jsx(H,{carried:s}),a.jsx("textarea",{id:"lay-journal-page",ref:ne,className:`lay-journal-text${J?" is-glowing":""}`,value:h,onChange:e=>{K.current=!0,$(e.target.value)},placeholder:"Start with the first thought — a few words is enough, and more usually follow.",rows:3}),te,C]}):y==="morning"?a.jsxs(a.Fragment,{children:[a.jsx("label",{className:"lay-journal-label",htmlFor:"lay-journal-morning",children:"What’s in there this morning?"}),E(c,n==null?void 0:n.morning,s,"morning")&&a.jsx(H,{carried:s}),a.jsx("textarea",{id:"lay-journal-morning",ref:Le,className:`lay-journal-text${xe?" is-glowing":""}`,value:c,onChange:e=>{W.current=!0,G(e.target.value)},placeholder:"Everything, in any order — worries, plans, fragments. Nobody grades a brain dump.",rows:5}),a.jsx("p",{className:"lay-journal-hint",children:"Writing this pays Discipline and Communication once for the day. There is no streak — a quiet morning costs nothing."}),C]}):a.jsxs(a.Fragment,{children:[te,a.jsx("label",{className:"lay-journal-label",htmlFor:"lay-journal-day",children:"Anything on your mind?"}),E(h,n==null?void 0:n.text,s,"page")&&a.jsx(H,{carried:s}),a.jsx("textarea",{id:"lay-journal-day",ref:ne,className:`lay-journal-text${J?" is-glowing":""}`,value:h,onChange:e=>{K.current=!0,$(e.target.value)},placeholder:"Start with the first thought — a few words is enough, and more usually follow.",rows:5}),a.jsx("p",{className:"lay-journal-hint",children:"The evening reflection — the look back at what you planned against what you finished — opens here once evening comes."}),C]})}),a.jsx(Ce,{note:x&&m?`You reflected earlier tonight${m.line?` — “${m.line}”`:""}. Snuffing again rewrites the record.`:null,children:y==="morning"?a.jsx(P,{tone:"primary",onPress:Re,disabled:!R,title:"Keep the morning page — tonight's rite quotes it verbatim",note:ae?"kept — tonight’s rite will quote it":R?"keep these words for tonight’s rite":"write a word first",children:ae?"✒ Kept — the morning is on the page":"Keep the morning page"}):a.jsxs(a.Fragment,{children:[a.jsx(P,{tone:x?"plain":"primary",onPress:Oe,disabled:!O,title:"Keep the page's words without closing the day",note:ee?"kept — the day is still open":O?"keep the words, the day stays open":"nothing new to keep yet",children:ee?"✒ Inked — the page is kept":"Ink the page"}),x&&a.jsx(P,{tone:"primary",onPress:Se,title:"Snuff the lamp — seal the reflection and the page together, and close the day",note:"seals the record and the page, and closes the day",children:"🪔 Snuff the lamp"})]})})]})]})}const ue=`
/* THE THESIS, IN THREE RULES. The wrapper covers the screen so the sheet can be
   positioned against it, and takes NO presses — the painted doors above the
   drawer's edge stay live, which is the whole of variant B's claim. Only the
   sheet itself is pressable. */
.lay-journal {
  position: fixed;
  inset: 0;
  z-index: 60;
  pointer-events: none;
  --lay-journal-foot: 0px;
  --lay-journal-clear: calc(
    var(--lay-journal-foot) + var(--lay-journal-keyboard, 0px) + env(safe-area-inset-bottom, 0px)
  );
}
.lay-journal .lay-sheet { pointer-events: auto; }
/* THE SCROLLER IS THE SHEET'S BODY, and it is a COLUMN so the act bar actually
   lands on the drawer's floor. "position: sticky" only lifts a box that would
   otherwise fall BELOW the bottom line; on the day and morning faces the whole
   page is shorter than the scrollport, so a plain block body left the rail
   sitting wherever the text ended — roughly 110px of empty drawer beneath the
   one act that closes the day. As a flex column the page grows to fill
   (flex: 1 0 auto) and pushes the rail down; a long page still overflows and
   the rail sticks. The lip and the rail are pinned "0 0 auto" because a
   scrolling flex column with negative free space would otherwise SHRINK them
   and clip their own contents. */
.lay-journal .lay-sheet-body {
  display: flex;
  flex-direction: column;
  padding-bottom: calc(var(--lay-journal-clear) + 8px);
}
.lay-journal .lay-rail { flex: 0 0 auto; bottom: var(--lay-journal-clear); }

/* ---- the lip: fixed within the sheet, hideable by nothing ---- */
.lay-journal-lip {
  flex: 0 0 auto;
  position: sticky;
  top: 0;
  z-index: 2;
  padding: 0.3rem 0.9rem 0.5rem;
  background: var(--parchment-raised);
  border-bottom: 1px solid var(--border);
}
.lay-journal-head {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  min-height: 44px;
}
.lay-journal-names { flex: 1; min-width: 0; }
.lay-journal-kicker {
  font-family: 'Cinzel', Georgia, serif;
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold);
}
.lay-journal-date {
  margin: 0.1rem 0 0;
  font-family: 'Cinzel', Georgia, serif;
  font-size: 19px;
  line-height: 1.2;
  color: var(--gold-bright);
  overflow-wrap: anywhere;
}
.lay-journal-framing {
  margin: 0.35rem 0 0;
  font-size: 13px;
  line-height: 1.35;
  font-style: italic;
  color: var(--ink-dim);
}

.lay-journal-tally {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  margin-top: 0.5rem;
}
.lay-journal-tally-count {
  font-family: 'Cinzel', Georgia, serif;
  font-size: 19px;
  color: var(--gold-bright);
}
.lay-journal-tally-say {
  font-size: 15px;
  line-height: 1.3;
  color: var(--ink);
}
.lay-journal-list-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 44px;
  margin-top: 0.15rem;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--ink-dim);
  font-family: inherit;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
}

/* ---- the page: the scroller's growing middle ---- */
/* "1 0 auto" and not "1 1 auto": it must GROW to push the rail onto the floor
   when the words are few, and it must never shrink below its own text when
   they are many. */
.lay-journal-page { flex: 1 0 auto; padding: 0.6rem 0.9rem 0; }

.lay-journal-list { margin: 0 0 0.7rem; padding: 0; list-style: none; }
.lay-journal-row {
  display: flex;
  align-items: flex-start;
  gap: 0.4rem;
  min-height: 44px;
  padding: 0.35rem 0;
  border-bottom: 1px solid var(--border);
}
.lay-journal-mark {
  flex: 0 0 auto;
  width: 18px;
  font-size: 15px;
  line-height: 1.3;
  color: var(--ink-dim);
}
.lay-journal-row.is-sealed .lay-journal-mark { color: var(--green-bright); }
.lay-journal-accent {
  flex: 0 0 auto;
  width: 8px;
  height: 8px;
  margin-top: 0.45rem;
  border-radius: 50%;
}
.lay-journal-row-text { flex: 1 1 auto; min-width: 0; }
/* 16px and it WRAPS. A clipped title is a step the knight cannot identify. */
.lay-journal-row-title {
  display: block;
  font-size: 16px;
  line-height: 1.25;
  color: var(--ink);
  overflow-wrap: anywhere;
}
.lay-journal-row-word {
  display: block;
  margin-top: 0.1rem;
  font-size: 13px;
  color: var(--ink-dim);
}

.lay-journal-label {
  display: block;
  margin: 0.7rem 0 0.25rem;
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-dim);
}
/* 16px on everything that takes typed text — below it iOS zooms the page and
   never zooms back, which would break the drawer's measured edge outright. */
.lay-journal-line,
.lay-journal-text {
  width: 100%;
  font-family: inherit;
  font-size: 16px;
  color: var(--ink);
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid var(--border);
  border-radius: 6px;
}
.lay-journal-line { min-height: 44px; padding: 0.5rem 0.65rem; }
.lay-journal-text {
  padding: 0.5rem 0.65rem;
  line-height: 1.4;
  resize: none;
  overflow-y: auto;
  max-height: 45dvh;
}
.lay-journal-line:focus,
.lay-journal-text:focus {
  outline: 2px solid var(--gold);
  outline-offset: 1px;
}
.lay-journal-text.is-glowing {
  border-color: var(--gold);
  box-shadow: 0 0 12px rgba(217, 164, 65, 0.45);
}
.lay-journal-hint {
  margin: 0.4rem 0 0.2rem;
  font-size: 13px;
  line-height: 1.35;
  font-style: italic;
  color: var(--ink-dim);
}

/* ---- the folds: disclosure, never concealment ---- */
.lay-journal-fold { border-top: 1px solid var(--border); }
.lay-journal-fold:first-of-type { margin-top: 0.8rem; }
.lay-journal-fold-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
  min-height: 48px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--ink);
  font-family: inherit;
  font-size: 15px;
  text-align: left;
  cursor: pointer;
}
.lay-journal-fold.is-open .lay-journal-fold-label { color: var(--gold-bright); }
.lay-journal-fold-chev { color: var(--ink-dim); font-size: 18px; }
.lay-journal-fold-body { padding-bottom: 0.7rem; }

.lay-journal-quote {
  margin: 0;
  padding-left: 0.7rem;
  border-left: 2px solid var(--border);
  font-size: 15px;
  line-height: 1.45;
  color: var(--ink-dim);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.lay-journal-past { padding: 0.4rem 0; border-bottom: 1px solid var(--border); }
.lay-journal-past-date {
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gold);
}
.lay-journal-past-text {
  margin: 0.2rem 0 0;
  font-size: 15px;
  line-height: 1.4;
  color: var(--ink-dim);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.lay-journal-past-text.is-morning { color: var(--ink); }

/* ---- the ember ---- */
.lay-journal-ember {
  pointer-events: auto;
  display: grid;
  place-items: center;
  background: rgba(6, 5, 3, 0.94);
}
.lay-journal-ember-inner { text-align: center; padding: 0 1.5rem; }
.lay-journal-ember-flame { font-size: 48px; }
.lay-journal-ember-line {
  margin-top: 0.8rem;
  font-family: 'Cinzel', Georgia, serif;
  font-size: 17px;
  line-height: 1.4;
  color: var(--gold);
}

@media (prefers-reduced-motion: reduce) {
  .lay-journal-text.is-glowing { box-shadow: none; }
}
`;export{Je as default};
