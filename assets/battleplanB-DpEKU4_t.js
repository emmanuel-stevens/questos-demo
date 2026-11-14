import{r,j as e}from"./styles-DDO230I-.js";import{ap as fa,r as j,ar as ka,as as wa,at as va,au as Na,av as ja,aw as Ea,ax as Ta,ay as Sa,N as Z,az as za,aA as Aa,aB as Ra,aC as Oa,aD as Ia,h as $a,T as Ca,G as Da,aE as la,aF as A,aG as R,aH as Ha,aI as La,J as Ma,R as V,aJ as H,aK as Pa,aL as Ba,aM as Q,aN as aa,aO as Wa,i as L,aP as Fa,aQ as _a,aR as Ga}from"./index-ClGvR7HJ.js";const qa=new Map,na={light:"Light",medium:"Medium",deep:"Deep"};function Ka(i){const l=Math.floor(i/60),s=i%60;return l===0?`${s}m`:s===0?`${l}h`:`${l}h ${s}m`}function ea(i){const l=(i%1440+1440)%1440,s=String(Math.floor(l/60)).padStart(2,"0"),o=String(l%60).padStart(2,"0");return Pa(`${s}:${o}`)}function Ua(i){let l=i==null?void 0:i.parentElement;for(;l;){const s=getComputedStyle(l).overflowY;if(s==="auto"||s==="scroll")return l;l=l.parentElement}return null}function Za({sheetYields:i=!1,guide:l=null,dueByDate:s=null,orders:o=[],energy:y="high",onSetEnergy:m,today:O,onSelectQuest:x,onCompleteTask:g,onOpenWarTable:I,onReoptimize:u,dodges:f=qa,anchors:c,onVerdictMenu:n,onOpenRite:h=null,onClose:E,stepsMark:k=null,noDay:T=[],onNameRiteDay:b=null,onOpenGatehouse:M=null}){var J;const[$,sa]=r.useState("peek"),[w,ra]=fa(),P=(l==null?void 0:l.target)==="task"?o.find(a=>a.task.id===l.taskId):null,B=(l==null?void 0:l.target)==="energy"?"Next: tell the realm today's energy":P?`Next: ${P.task.title}`:null,[S,ia]=r.useState(()=>{try{return localStorage.getItem("questos-war-horizon")==="week"?"week":"day"}catch{return"day"}}),oa=a=>{ia(a);try{localStorage.setItem("questos-war-horizon",a)}catch{}},[v,da]=r.useState("date"),N=j(),p=r.useMemo(()=>{if(!s)return null;const a=ka(N),t=wa(va(s,a),v);return{span:a,groups:ja(t,v,N),carried:Na(s,a,N)}},[s,N,v]),W=(a,t)=>e.jsx(ta,{entry:a,lit:A(l,"task",a.task.id),dodges:f,onSelectQuest:x,onCompleteTask:g,onVerdictMenu:n,onOpenRite:h,onOpenGatehouse:M,signed:a.task.status==="done",meta:t},a.task.id),pa=s?e.jsx("div",{className:"lay-battleplan-horizon",role:"group","aria-label":"Today, or the whole week",children:[["day","Today"],["week","This week"]].map(([a,t])=>e.jsx("button",{type:"button",className:S===a?"on":"","aria-pressed":S===a,onClick:()=>oa(a),children:t},a))}):null,ca=p?e.jsxs("div",{className:"lay-battleplan-week",children:[e.jsxs("p",{className:"lay-battleplan-week-span",children:["This week · ",p.span.from.slice(5)," – ",p.span.to.slice(5)]}),p.carried.length>0&&e.jsxs("section",{className:"lay-battleplan-field",children:[e.jsxs("header",{className:"lay-battleplan-field-head",children:[e.jsx("span",{className:"lay-battleplan-field-name",children:"Carried from before this week"}),e.jsx("span",{className:"lay-battleplan-field-hours",children:p.carried.length})]}),e.jsx("ul",{className:"lay-battleplan-list",children:p.carried.map(a=>W(a,Ea(a.day,N)))})]}),e.jsx("div",{className:"lay-battleplan-order",role:"group","aria-label":"Order the week by",children:Ta.map(a=>e.jsx("button",{type:"button",className:v===a?"on":"","aria-pressed":v===a,onClick:()=>da(a),children:Sa[a]},a))}),p.groups.length===0?e.jsx(Z,{children:"Nothing dated this week."}):p.groups.map(a=>e.jsxs("section",{className:"lay-battleplan-field",children:[e.jsx("header",{className:"lay-battleplan-field-head",children:e.jsx("span",{className:"lay-battleplan-field-name",children:a.label})}),e.jsx("ul",{className:"lay-battleplan-list",children:a.rows.map(t=>W(t,`${v==="date"?t.quest.title:za(t.day,N)}${t.task.hardDue?" · ⚑":""}`))})]},a.key))]}):null,[,ha]=r.useState(0);r.useEffect(()=>{const a=setInterval(()=>ha(t=>t+1),6e4);return()=>clearInterval(a)},[]);const[ba,ya]=r.useState(0);r.useEffect(()=>{const a=typeof window>"u"?null:window.visualViewport;if(!a)return;const t=()=>{const d=Math.max(0,window.innerHeight-a.height-a.offsetTop);ya(d>120?Math.round(d):0)};return t(),a.addEventListener("resize",t),a.addEventListener("scroll",t),()=>{a.removeEventListener("resize",t),a.removeEventListener("scroll",t)}},[]);const{hours:C,placeholder:ma}=r.useMemo(()=>Aa({anchors:c}),[c]),F=r.useMemo(()=>Ra(C),[C]),D=r.useMemo(()=>Oa(o,a=>a.task.effort,a=>a.task.title,a=>a.urgent===!0),[o]),_=new Date,z=Ia(_.getHours()*60+_.getMinutes(),C),xa=o.reduce((a,t)=>a+$a(t.task),0),G=(l==null?void 0:l.target)==="task"?l.taskId:null,q=G?((J=F.find(a=>{var t;return(t=D[a.id])==null?void 0:t.some(d=>d.task.id===G)}))==null?void 0:J.id)??null:null,K=r.useRef({}),U=r.useRef(null);r.useEffect(()=>{var X;const a=q??z;if(!a)return;const t=K.current[a],d=Ua(t);if(!t||!d)return;const ga=((X=U.current)==null?void 0:X.getBoundingClientRect().height)??0,ua=t.getBoundingClientRect().top-d.getBoundingClientRect().top+d.scrollTop-ga-8;d.scrollTo({top:Math.max(0,ua)})},[z,$,q]);const Y=o.length===0;return e.jsxs("div",{className:"lay-battleplan",style:{"--lay-bp-keyboard":`${ba}px`},children:[e.jsx("style",{children:Ya}),e.jsxs(Ca,{stop:$,onStop:sa,yielded:i,label:"The Battle Plan",hint:B,lit:!!B&&$==="peek",children:[e.jsxs("div",{className:"lay-battleplan-lip",ref:U,"data-sheet-lip":"",children:[e.jsxs("div",{className:"lay-battleplan-head",children:[e.jsx("h2",{className:"lay-battleplan-date",children:O}),e.jsx(Da,{onClose:E,name:"the battle plan"})]}),e.jsxs("p",{className:"lay-battleplan-claim",children:[e.jsx("span",{children:"A winnable day, nothing more."}),e.jsxs("span",{className:"lay-battleplan-load",title:"Planned time, from effort budgets: light 30m, medium 75m, deep 2.5h",children:["~",Ka(xa)," planned"]})]}),e.jsxs("div",{className:`lay-battleplan-energy${A(l,"energy")?` ${la}`:""}`,role:"group","aria-label":"Today's energy",children:[e.jsx("span",{className:"lay-battleplan-energy-label",children:"Today's energy"}),["low","medium","high"].map(a=>e.jsx("button",{type:"button",className:`lay-battleplan-energy-btn ${y===a?"on":""}`,"aria-pressed":y===a,onClick:()=>m==null?void 0:m(a),title:`Declare ${a} energy — the day's five are chosen against it`,children:a},a))]})]}),e.jsxs("div",{className:"lay-battleplan-day",children:[pa,S==="week"&&p?ca:Y?e.jsx(Z,{children:"No orders on the board today. Reoptimize packs the open work into winnable days, and Settings holds the hours the day is built on — either door is below."}):F.map(a=>e.jsxs("section",{className:`lay-battleplan-field ${z===a.id?"is-now":""}`,ref:t=>{K.current[a.id]=t},children:[e.jsxs("header",{className:"lay-battleplan-field-head",children:[e.jsx("span",{className:"lay-battleplan-field-name",children:a.label}),e.jsxs("span",{className:"lay-battleplan-field-hours",children:[ea(a.from)," – ",ea(a.to)]}),z===a.id&&e.jsx("span",{className:"lay-battleplan-here",children:"you are here"})]}),D[a.id].length===0?e.jsx("p",{className:"lay-battleplan-open",children:"Open ground."}):e.jsx("ul",{className:"lay-battleplan-list",children:D[a.id].map(t=>e.jsx(ta,{entry:t,lit:A(l,"task",t.task.id),dodges:f,onSelectQuest:x,onCompleteTask:g,onVerdictMenu:n,onOpenRite:h,onOpenGatehouse:M,stepsLine:k&&k.taskId===t.task.id?k.line:null},t.task.id))})]},a.id)),S!=="week"&&T.length>0&&e.jsxs("section",{className:"lay-battleplan-field lay-battleplan-noday","aria-label":R.head,children:[e.jsx("header",{className:"lay-battleplan-field-head",children:e.jsx("span",{className:"lay-battleplan-field-name",children:R.head})}),e.jsx("ul",{className:"lay-battleplan-list",children:T.map(a=>{var t;return e.jsxs("li",{className:"lay-battleplan-row",children:[e.jsxs("button",{type:"button",className:"lay-battleplan-main",onClick:()=>h?h(a.task.id):x==null?void 0:x(a.quest.id),title:h?R.press:`Open ${a.quest.title}`,children:[e.jsx("span",{className:"lay-battleplan-title",children:a.task.title}),e.jsxs("span",{className:"lay-battleplan-meta",children:[e.jsx("i",{className:"lay-battleplan-accent",style:{background:(t=a.epic)==null?void 0:t.accent},"aria-hidden":"true"}),na[a.task.effort]??"Medium"," · ",Ha(a.task,j())]})]}),b&&e.jsx(La,{dress:"lay-battleplan",short:!0,onName:d=>b(a.quest.id,a.task.id,d)})]},a.task.id)})}),e.jsx("p",{className:"lay-battleplan-open",children:R.why})]}),ma&&!Y&&e.jsx("p",{className:"lay-battleplan-placeholder",children:"Placeholder hours — the Rule of the House will write the real ones."})]}),e.jsxs(Ma,{live:!0,note:w==null?void 0:w.line,noteKey:w==null?void 0:w.n,children:[e.jsx(V,{tone:"primary",onPress:I,title:H.doorTitle,note:H.phoneNote,lit:A(l,"wartable"),children:H.door}),e.jsx(V,{onPress:()=>{var a;return ra(((a=u==null?void 0:u())==null?void 0:a.line)??null)},title:"Re-plan every open task into winnable days",note:"re-plan the open work",children:"⟳ Reoptimize"})]})]})]})}function ta({entry:i,dodges:l,onSelectQuest:s,onCompleteTask:o,onVerdictMenu:y,onOpenRite:m=null,onOpenGatehouse:O=null,lit:x=!1,signed:g=!1,meta:I=null,stepsLine:u=null}){const{epic:f,quest:c,task:n}=i,h=(l==null?void 0:l.get(n.id))??0,E=Ba({task:n,dodged:h}),[k,T]=r.useState(!1);return e.jsxs("li",{className:`lay-battleplan-row${E?" is-asked":""}${x?` ${la}`:""}${g?" is-signed":""}`,children:[Q(n,j())==="none"?e.jsx("span",{className:"lay-battleplan-sign is-kept",role:"img","aria-label":aa(n,j()),title:aa(n,j()),children:e.jsx("span",{className:"lay-battleplan-ring","aria-hidden":"true"})}):e.jsx("button",{type:"button",className:"lay-battleplan-sign",title:g?"Sealed today — tap to unseal":"Sign it off","aria-label":`${g?"Unseal":"Sign off"} ${n.title}`,"aria-pressed":g,onClick:()=>{Q(n,j())!=="none"&&(o==null||o(c.id,n.id))},children:e.jsx("span",{className:"lay-battleplan-ring","aria-hidden":"true"})}),E&&e.jsx(Wa,{title:n.title,open:k,onToggle:()=>T(b=>!b),className:"lay-battleplan-bell"}),e.jsxs("button",{type:"button",className:"lay-battleplan-main",onClick:()=>m&&L(n)?m(n.id):s==null?void 0:s(c.id),onContextMenu:y?b=>y(b,c.id,n.id):void 0,title:m&&L(n)?"Open this rite’s page":`Open ${c.title}`,children:[e.jsx("span",{className:"lay-battleplan-title",children:n.title}),e.jsxs("span",{className:"lay-battleplan-meta",children:[e.jsx("i",{className:"lay-battleplan-accent",style:{background:f==null?void 0:f.accent},"aria-hidden":"true"}),I??e.jsxs(e.Fragment,{children:[na[n.effort]??"Medium",L(n)?` · ${Fa(n)}`:n.due?` · ${n.hardDue?"⚑ ":""}due ${n.due.slice(5)}`:""]}),e.jsx(_a,{task:n})]}),u&&e.jsx("span",{className:"lay-battleplan-steps",children:u})]}),y&&e.jsx("button",{type:"button",className:"lay-battleplan-more",onClick:b=>y(b,c.id,n.id),title:"Give this step a verdict — not today, out of my hands, needs more context…","aria-label":`Verdicts for ${n.title}`,children:"⋯"}),E&&k&&e.jsx(Ga,{taskId:n.id,dodged:h,onOpenGatehouse:O,onDone:()=>T(!1),className:"lay-battleplan-ask"})]})}const Ya=`
/* The foot the shared rail cannot know about: the squire's bar is a fixture of
   THIS room, and the measured keyboard rides on top of it (finding 2). Scoped
   under .lay-battleplan so it reaches only this layout's own sheet. */
.lay-battleplan {
  /* THE FOOT IS MEASURED WHERE IT CAN BE (the stranger's walk, 2026-09-02,
     finding #4). 86px was a guess at the bar's height, and at rest on a
     393x852 phone the bar sat on both rail acts: a tap on "The War Table"
     landed in the bar's text field. --bar-clearance is the bar's measured top
     edge, written on the root by SquireBar and 0 where no bar mounts, so the
     guess stays as the floor and the measurement wins whenever it is larger.
     IT GOES HERE AND NOT ON THE RAIL'S OWN PADDING: the rail was sticky at the
     foot of the scrollport then, so a taller rail covered the rows under it, and the
     first repair did exactly that - the phone walk's tap on the guided row
     landed on the rail and nothing lit. The foot moves the rail and the body's
     clearance together, which is what the variable exists for. */
  --lay-bp-foot: max(86px, var(--bar-clearance, 0px));
  --lay-bp-clear: calc(var(--lay-bp-foot) + var(--lay-bp-keyboard, 0px) + env(safe-area-inset-bottom, 0px));
}
.lay-battleplan .lay-sheet-body { padding-bottom: var(--lay-bp-clear); }
/* NOT STICKY ON THIS LAYOUT (2026-09-16, the founder on his phone). The shared
   rail sticks at the scrollport's foot; here it stood mid-list at rest and the
   rows scrolled beneath it, so it takes its place at the end of the day and
   scrolls with it. The body's padding above is what keeps it clear of the bar. */
.lay-battleplan .lay-rail { position: static; }
/* THE SAFE AREA WAS COUNTED TWICE, and no instrument in this realm can see it
   (2026-08-21). The --lay-bp-clear above already adds env(safe-area-inset-bottom),
   and the SHARED .lay-rail adds it a second time in its own padding-bottom — a
   rule that is correct for a rail sitting ON the viewport edge, which every
   other layout's is and this one's is not. On a 393x852 iPhone the inset is
   34px, so the rail floats 120px above the scrollport bottom while still
   padding 34 against a home indicator that is 120px away: 34px of dead rail,
   every render.

   HEADLESS CHROME REPORTS THE INSET AS ZERO, so the phone walk measured the 0px
   version and will keep reporting this repair as a no-op. It is arithmetic, and
   it wants the founder's own phone to confirm it.

   SCOPED, NOT SHARED. The shared rule stays exactly as it is, because it is
   right for every rail that does sit at bottom: 0. This is (0,2,0) against its
   (0,1,0), so it wins here and nowhere else. The invariant it rests on:
   --lay-bp-foot is 86px, comfortably more than any inset, so the offset alone
   already clears the indicator.

   AND THERE ARE NO BACKTICKS IN THIS COMMENT ON PURPOSE. It lives inside
   BATTLEPLAN_B_CSS, a template literal, and a stray backtick there has taken
   the whole app down three times — an escaped one is legal and is still the
   shape of the trap. Prose costs nothing. */
.lay-battleplan .lay-rail { padding-bottom: 0.4rem; }

.lay-battleplan-lip {
  position: sticky;
  top: 0;
  z-index: 2;
  padding: 0.35rem 0.9rem 0.55rem;
  background: var(--parchment-raised);
  border-bottom: 1px solid var(--border);
}
.lay-battleplan-head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 44px;
}
.lay-battleplan-date {
  flex: 1;
  margin: 0;
  min-width: 0;
  font-family: 'Cinzel', Georgia, serif;
  font-size: 20px;
  line-height: 1.2;
  color: var(--gold-bright);
}
.lay-battleplan-claim {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.6rem;
  margin: 0.1rem 0 0.5rem;
  font-size: 14px;
  font-style: italic;
  color: var(--ink-dim);
}
.lay-battleplan-load { font-style: normal; color: var(--gold); white-space: nowrap; }
.lay-battleplan-energy { display: flex; align-items: center; gap: 0.3rem; }
.lay-battleplan-energy-label {
  margin-right: auto;
  font-size: 13px;
  font-style: italic;
  color: var(--ink-dim);
}
.lay-battleplan-energy-btn {
  min-height: 44px;
  min-width: 68px;
  padding: 0 0.5rem;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: transparent;
  color: var(--ink-dim);
  font-family: inherit;
  font-size: 15px;
  text-transform: capitalize;
}
.lay-battleplan-energy-btn.on {
  border-color: var(--gold);
  background: rgba(217, 164, 65, 0.16);
  color: var(--gold-bright);
}

.lay-battleplan-day { padding: 0.5rem 0.9rem 0; }
.lay-battleplan-field { margin-bottom: 0.9rem; }
.lay-battleplan-field-head {
  display: flex;
  align-items: baseline;
  gap: 0.45rem;
  padding-bottom: 0.2rem;
  border-bottom: 1px solid var(--border);
}
.lay-battleplan-field-name {
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-dim);
}
.lay-battleplan-field-hours { font-size: 12px; color: var(--ink-dim); opacity: 0.85; }
.lay-battleplan-field.is-now .lay-battleplan-field-name { color: var(--gold-bright); }
.lay-battleplan-here {
  margin-left: auto;
  font-size: 12px;
  font-style: italic;
  color: var(--gold);
}
.lay-battleplan-open {
  margin: 0.4rem 0 0;
  font-size: 14px;
  font-style: italic;
  color: var(--ink-dim);
}
.lay-battleplan-list { margin: 0; padding: 0; list-style: none; }
.lay-battleplan-row {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  min-height: 56px;
  border-bottom: 1px solid var(--border);
}
.lay-battleplan-sign {
  flex: 0 0 auto;
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}
.lay-battleplan-ring {
  width: 22px;
  height: 22px;
  border: 2px solid var(--gold);
  border-radius: 50%;
}
.lay-battleplan-main {
  flex: 1 1 auto;
  min-width: 0;
  display: block;
  padding: 0.35rem 0.2rem;
  min-height: 44px;
  border: 0;
  background: transparent;
  color: var(--ink);
  font-family: inherit;
  text-align: left;
  cursor: pointer;
}
/* 16px, and it wraps. Nothing on a phone may be nowrap: a clipped title is a
   task the knight cannot identify, and a clipped row is horizontal overflow. */
.lay-battleplan-title {
  display: block;
  font-size: 16px;
  line-height: 1.25;
  overflow-wrap: anywhere;
}
.lay-battleplan-meta {
  display: block;
  margin-top: 0.15rem;
  font-size: 13px;
  color: var(--ink-dim);
}
.lay-battleplan-steps {
  display: block;
  margin-top: 0.15rem;
  font-size: 13px;
  color: var(--ink-dim);
  font-variant-numeric: tabular-nums;
}
.lay-battleplan-accent {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 0.35rem;
  border-radius: 50%;
  vertical-align: middle;
}
.lay-battleplan-more {
  flex: 0 0 auto;
  width: 44px;
  height: 44px;
  border: 0;
  background: transparent;
  color: var(--ink-dim);
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
}
.lay-battleplan-placeholder {
  margin: 0 0 0.6rem;
  font-size: 12px;
  font-style: italic;
  color: var(--ink-dim);
}
/* THE WEEK FACE (2026-09-03). Two toggles in the day's own idiom — 44pt pills,
   the lit one gold — and a signed row the day face cannot have: a step sealed
   today stays on the week under today's key (X44), struck through, its ring
   filled, and the same ring unseals it. */
.lay-battleplan-horizon { display: flex; gap: 6px; margin: 0 0 10px; }
.lay-battleplan-horizon button,
.lay-battleplan-order button {
  min-height: 44px; flex: 1 1 0; padding: 0 12px;
  border: 1px solid var(--border); border-radius: 999px;
  background: transparent; color: var(--ink-dim);
  font: inherit; font-size: 14px; cursor: pointer;
}
.lay-battleplan-horizon button.on,
.lay-battleplan-order button.on { border-color: var(--gold); color: var(--gold); }
.lay-battleplan-order { display: flex; gap: 6px; margin: 8px 0 12px; }
.lay-battleplan-week-span { margin: 0 0 6px; font-size: 13px; color: var(--ink-dim); }
.lay-battleplan-row.is-signed .lay-battleplan-ring { background: var(--gold); }
.lay-battleplan-sign.is-kept { cursor: default; }
.lay-battleplan-sign.is-kept .lay-battleplan-ring { background: var(--gold); }
.lay-battleplan-noday { margin-top: 1rem; }
.lay-battleplan-noday .lay-battleplan-field-head { border-bottom-style: dashed; }
/* B231 (D364 = A): the weekday choice on a no-day row — a 44pt press at the
   row's end in the trial's own pill idiom (the horizon toggles'), lit gold
   while open; the seven stand inline under the row, 44pt each, one ink, none
   pressed for him. The row wraps so the list takes the whole width. */
.lay-battleplan-noday .lay-battleplan-row { flex-wrap: wrap; }
.lay-battleplan-nameday { display: contents; }
.lay-battleplan-nameday-press {
  flex: 0 0 auto; min-height: 44px; min-width: 44px; padding: 0 12px;
  border: 1px solid var(--border); border-radius: 8px; background: transparent;
  color: var(--ink-dim); font: inherit; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer;
}
.lay-battleplan-nameday.is-open .lay-battleplan-nameday-press { border-color: var(--gold); color: var(--gold-bright); }
.lay-battleplan-nameday-caret { margin-left: 6px; font-size: 11px; }
.lay-battleplan-nameday-days { flex-basis: 100%; display: flex; flex-direction: column; padding: 0 0 6px; }
.lay-battleplan-nameday-head { padding: 6px 0 2px; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-dim); }
.lay-battleplan-nameday-day {
  min-height: 44px; display: flex; align-items: center; gap: 8px; padding: 0 4px;
  border: 0; border-top: 1px solid var(--border); background: transparent;
  color: var(--ink); font: inherit; font-size: 16px; text-align: left; cursor: pointer;
}
.lay-battleplan-nameday-day:hover { color: var(--gold-bright); }
.lay-battleplan-nameday-today { font-size: 12px; font-style: italic; color: var(--ink-dim); }
.lay-battleplan-row.is-signed .lay-battleplan-title { text-decoration: line-through; opacity: 0.72; }
/* D497 = B: the Gatehouse's bell before the title (a 44pt press, its box
   reaching 12px under the title so the title stands close, as the rose did),
   and its answer under the row across the title's column, in flow. */
.lay-battleplan-row.is-asked { flex-wrap: wrap; }
.lay-battleplan-bell {
  position: relative; z-index: 1; flex: 0 0 auto; align-self: flex-start; width: 44px; height: 44px; margin: -3px -12px 0 -6px;
  display: grid; place-items: center; padding: 0; border: 0; background: transparent; color: var(--ink); font-size: 15px; cursor: pointer;
}
.lay-battleplan-bell[aria-expanded="true"] { color: var(--gold); }
.lay-battleplan-ask {
  flex: 0 0 calc(100% - 88px); box-sizing: border-box; margin: 0 44px 0.5rem 44px; padding: 0.6rem 0.7rem;
  border: 1px solid var(--border); border-radius: 8px;
}
.lay-battleplan-ask p { margin: 0 0 0.5rem; font-size: 14px; line-height: 1.35; color: var(--ink); }
.lay-battleplan-ask p:last-child { margin-bottom: 0; color: var(--ink-dim); font-style: italic; }
.lay-battleplan-ask button {
  min-height: 44px; padding: 0 0.9rem; border: 1px solid var(--gold); border-radius: 6px;
  background: transparent; color: var(--ink); font-family: inherit; font-size: 14px; cursor: pointer;
}
`;export{Za as default};
