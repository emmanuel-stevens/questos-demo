import{r as l,a8 as Re,a9 as Ie,ab as Oe,ac as q,b as Le,j as a,N as te,F as Ae,C as Fe,A as He,R as G,ah as $e,ai as qe}from"./index-CYLJyUTU.js";function le(c,p){const s=l.useRef(null);return l.useEffect(()=>{const r=s.current;r&&(r.style.height="auto",r.style.height=`${Math.min(r.scrollHeight,p)}px`)},[c,p]),s}function re({open:c,onToggle:p,label:s,children:r}){return a.jsxs("section",{className:`lay-journal-fold ${c?"is-open":""}`,children:[a.jsxs("button",{type:"button",className:"lay-journal-fold-head","aria-expanded":c,onClick:p,children:[a.jsx("span",{className:"lay-journal-fold-label",children:s}),a.jsx("span",{className:"lay-journal-fold-chev","aria-hidden":"true",children:c?"⌄":"›"})]}),c&&a.jsx("div",{className:"lay-journal-fold-body",children:r})]})}function We({sheetYields:c=!1,epics:p=[],meta:s={},today:r,face:v,onSave:R,onSaveJournal:I,onSaveMorning:O,onClose:u}){const i=l.useRef(typeof localStorage>"u"?null:Re(localStorage,r)).current,[f,ie]=l.useState(()=>v??(Ie()?"evening":"day"));l.useEffect(()=>{v&&ie(v)},[v]);const g=f==="evening",[se,de]=l.useState("rest"),d=(s.reckonings??[]).find(e=>e.date===r),[x,he]=l.useState((i==null?void 0:i.line)??(d==null?void 0:d.line)??""),[w,ce]=l.useState(!1),W=s.journal??[],n=W.find(e=>e.date===r),[h,L]=l.useState((i==null?void 0:i.page)??(n==null?void 0:n.text)??""),[K,C]=l.useState(!1),A=l.useRef((i==null?void 0:i.page)!=null),[y,D]=l.useState((i==null?void 0:i.morning)??(n==null?void 0:n.morning)??""),[ue,M]=l.useState(!1),P=l.useRef((i==null?void 0:i.morning)!=null),[k,me]=l.useState(!0),[pe,ge]=l.useState(!1),[ye,fe]=l.useState(!1);l.useEffect(()=>{!A.current&&n&&L(n.text??""),!P.current&&(n!=null&&n.morning)&&D(n.morning)},[n]),l.useEffect(()=>{const e=o=>o.key==="Escape"&&!w&&(u==null?void 0:u());return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[u,w]);const[F,je]=l.useState(0);l.useEffect(()=>{const e=typeof window>"u"?null:window.visualViewport;if(!e)return;const o=()=>{const m=Math.max(0,window.innerHeight-e.height-e.offsetTop);je(m>120?Math.round(m):0)};return o(),e.addEventListener("resize",o),e.addEventListener("scroll",o),()=>{e.removeEventListener("resize",o),e.removeEventListener("scroll",o)}},[]);const B=(d==null?void 0:d.line)??"";l.useEffect(()=>{if(w)return;const e=Oe({page:h,morning:y,line:x},{page:n==null?void 0:n.text,morning:n==null?void 0:n.morning,line:B});try{e?localStorage.setItem(q,JSON.stringify({date:r,line:x,page:h,morning:y})):localStorage.removeItem(q)}catch{}},[h,y,x,w,r,n,B]);const{planned:b,sealed:N,missed:U,beyond:j}=l.useMemo(()=>{var ee;const e=new Map;p.forEach(t=>t.quests.forEach(ae=>ae.tasks.forEach(ne=>e.set(ne.id,{epic:t,quest:ae,task:ne}))));const o=((ee=s.dayPlan)==null?void 0:ee.date)===r?s.dayPlan.taskIds.filter(t=>e.has(t)):[...e.values()].filter(({task:t})=>t.status!=="done"&&(t.scheduled??t.due)===r).map(({task:t})=>t.id),m=[...e.values()].filter(({task:t})=>t.completedAt&&Le(t.completedAt)===r),E=new Set(m.map(({task:t})=>t.id));return{planned:o.map(t=>e.get(t)),sealed:o.filter(t=>E.has(t)).map(t=>e.get(t)),missed:o.filter(t=>!E.has(t)).map(t=>e.get(t)),beyond:m.filter(({task:t})=>!o.includes(t.id))}},[p,s,r]),xe=N.length+j.length,Y=e=>$e(e),_=W.filter(e=>e.date!==r&&((e.text??"").trim()||(e.morning??"").trim())).sort((e,o)=>e.date<o.date?1:-1).slice(0,14),we=()=>{const e=h.trim();return e!==""||n?e:void 0},be=()=>{R==null||R({date:r,plannedIds:b.map(({task:e})=>e.id),sealedIds:N.map(({task:e})=>e.id),missedIds:U.map(({task:e})=>e.id),beyondIds:j.map(({task:e})=>e.id),energy:qe(s),line:x.trim()},we());try{localStorage.removeItem(q)}catch{}ce(!0),setTimeout(()=>u==null?void 0:u(),2200)},J=((n==null?void 0:n.text)??"").trim(),T=h.trim()!==J,Q=!T&&J!=="",ve=()=>{T&&(I==null||I(r,h.trim()),C(!0),setTimeout(()=>C(!1),1400))},z=((n==null?void 0:n.morning)??"").trim(),S=y.trim()!==z,V=!S&&z!=="",ke=()=>{S&&(O==null||O(r,y.trim()),M(!0),setTimeout(()=>M(!1),1400))},Ne=F>0?150:240,X=le(h,Ne),Te=le(y,F>0?170:260),ze=f==="morning"?"The Journal — the morning page":g?"The Evening Reflection":"The Journal",Se=f==="morning"?"Empty the head before the day begins. Tonight’s rite quotes your words into the chronicle exactly as written — your voice, untouched.":g?"One minute of truth, then the lamp goes out. What remains is not debt — it is tomorrow’s road.":"The day in your own hand — what happened, what it meant, what tomorrow should know.",Ee=b.length===0&&j.length===0,H=({epic:e,task:o},m,E)=>a.jsxs("li",{className:`lay-journal-row ${m==="✓"?"is-sealed":""}`,children:[a.jsx("span",{className:"lay-journal-mark","aria-hidden":"true",children:m}),a.jsx("i",{className:"lay-journal-accent",style:{background:e.accent},"aria-hidden":"true"}),a.jsxs("span",{className:"lay-journal-row-text",children:[a.jsx("span",{className:"lay-journal-row-title",children:o.title}),a.jsx("span",{className:"lay-journal-row-word",children:E})]})]},o.id),Z=z!==""&&f!=="morning"&&a.jsx(re,{open:pe,onToggle:()=>ge(e=>!e),label:"The morning’s words",children:a.jsx("blockquote",{className:"lay-journal-quote",children:z})}),$=a.jsx(re,{open:ye,onToggle:()=>fe(e=>!e),label:"Earlier pages",children:_.length===0?a.jsx(te,{children:"No earlier pages yet. Today’s is the first — and every one after it is kept here."}):_.map(e=>a.jsxs("div",{className:"lay-journal-past",children:[a.jsx("div",{className:"lay-journal-past-date",children:Y(e.date)}),(e.morning??"").trim()!==""&&a.jsxs("p",{className:"lay-journal-past-text is-morning",children:["☀ ",e.morning]}),(e.text??"").trim()!==""&&a.jsx("p",{className:"lay-journal-past-text",children:e.text})]},e.date))});return w?a.jsxs("div",{className:"lay-journal lay-journal-ember",children:[a.jsx("style",{children:oe}),a.jsxs("div",{className:"lay-journal-ember-inner",children:[a.jsx("div",{className:"lay-journal-ember-flame",children:"🌙"}),a.jsx("div",{className:"lay-journal-ember-line",children:"The lamp is out. The day is closed."})]})]}):a.jsxs("div",{className:"lay-journal",style:{"--lay-journal-keyboard":`${F}px`},children:[a.jsx("style",{children:oe}),a.jsxs(Ae,{stop:se,onStop:de,yielded:c,label:"The Journal",children:[a.jsxs("div",{className:"lay-journal-lip",children:[a.jsxs("div",{className:"lay-journal-head",children:[a.jsxs("div",{className:"lay-journal-names",children:[a.jsx("div",{className:"lay-journal-kicker",children:ze}),a.jsx("h2",{className:"lay-journal-date",children:Y(r)})]}),a.jsx(Fe,{onClose:u,name:"the journal"})]}),a.jsx("p",{className:"lay-journal-framing",children:Se}),g&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"lay-journal-tally",children:[a.jsxs("span",{className:"lay-journal-tally-count",children:[xe," sealed today"]}),a.jsxs("span",{className:"lay-journal-tally-say",children:[b.length===0?"no orders were posted this morning":`${N.length} of the morning’s ${b.length}`,b.length>0&&j.length>0?`, ${j.length} beyond the plan`:""]})]}),a.jsxs("button",{type:"button",className:"lay-journal-list-toggle","aria-expanded":k,onClick:()=>me(e=>!e),children:[a.jsx("span",{children:k?"Hide the day’s work":"Show the day’s work"}),a.jsx("span",{"aria-hidden":"true",children:k?"⌄":"›"})]})]})]}),a.jsx("div",{className:"lay-journal-page",children:g?a.jsxs(a.Fragment,{children:[k&&(Ee?a.jsx(te,{children:"Nothing was posted this morning and nothing has been sealed yet today. The honest line below is still worth writing."}):a.jsxs("ul",{className:"lay-journal-list",children:[N.map(e=>H(e,"✓","sealed")),U.map(e=>H(e,"○","still open")),j.map(e=>H(e,"＋","beyond the plan"))]})),a.jsx("label",{className:"lay-journal-label",htmlFor:"lay-journal-line",children:"One honest line"}),a.jsx("input",{id:"lay-journal-line",className:"lay-journal-line",value:x,onChange:e=>he(e.target.value),placeholder:"Why the day went as it did…",maxLength:200}),a.jsx("label",{className:"lay-journal-label",htmlFor:"lay-journal-page",children:"Anything else on your mind?"}),a.jsx("textarea",{id:"lay-journal-page",ref:X,className:`lay-journal-text${K?" is-glowing":""}`,value:h,onChange:e=>{A.current=!0,L(e.target.value)},placeholder:"Start with the first thought — a few words is enough, and more usually follow.",rows:3}),Z,$]}):f==="morning"?a.jsxs(a.Fragment,{children:[a.jsx("label",{className:"lay-journal-label",htmlFor:"lay-journal-morning",children:"What’s in there this morning?"}),a.jsx("textarea",{id:"lay-journal-morning",ref:Te,className:`lay-journal-text${ue?" is-glowing":""}`,value:y,onChange:e=>{P.current=!0,D(e.target.value)},placeholder:"Everything, in any order — worries, plans, fragments. Nobody grades a brain dump.",rows:5}),a.jsx("p",{className:"lay-journal-hint",children:"Writing this pays Discipline and Communication once for the day. There is no streak — a quiet morning costs nothing."}),$]}):a.jsxs(a.Fragment,{children:[Z,a.jsx("label",{className:"lay-journal-label",htmlFor:"lay-journal-day",children:"Anything on your mind?"}),a.jsx("textarea",{id:"lay-journal-day",ref:X,className:`lay-journal-text${K?" is-glowing":""}`,value:h,onChange:e=>{A.current=!0,L(e.target.value)},placeholder:"Start with the first thought — a few words is enough, and more usually follow.",rows:5}),a.jsx("p",{className:"lay-journal-hint",children:"The evening reflection — the look back at what you planned against what you finished — opens here once evening comes."}),$]})}),a.jsx(He,{note:g&&d?`You reflected earlier tonight${d.line?` — “${d.line}”`:""}. Snuffing again rewrites the record.`:null,children:f==="morning"?a.jsx(G,{tone:"primary",onPress:ke,disabled:!S,title:"Keep the morning page — tonight's rite quotes it verbatim",note:V?"kept — tonight’s rite will quote it":S?"keep these words for tonight’s rite":"write a word first",children:V?"✒ Kept — the morning is on the page":"Keep the morning page"}):a.jsxs(a.Fragment,{children:[a.jsx(G,{tone:g?"plain":"primary",onPress:ve,disabled:!T,title:"Keep the page's words without closing the day",note:Q?"kept — the day is still open":T?"keep the words, the day stays open":"nothing new to keep yet",children:Q?"✒ Inked — the page is kept":"Ink the page"}),g&&a.jsx(G,{tone:"primary",onPress:be,title:"Snuff the lamp — seal the reflection and the page together, and close the day",note:"seals the record and the page, and closes the day",children:"🪔 Snuff the lamp"})]})})]})]})}const oe=`
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
`;export{We as default};
