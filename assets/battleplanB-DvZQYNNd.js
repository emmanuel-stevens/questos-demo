import{r as i,a as f,ag as ga,ah as xa,ai as fa,aj as ua,ak as wa,j as e,al as ka,am as va,an as Na,N as Y,ao as ja,ap as Ea,aq as Ta,ar as Sa,as as za,k as Ra,J as Aa,C as Oa,at as aa,au as E,av as T,aw as Ia,ax as Ca,B as $a,R as J,ay as I,az as Da,af as Ha,aA as X,aB as Z,i as C,aC as La,aD as Ma}from"./index-DoW_xDLS.js";const Pa=new Map,ea={light:"Light",medium:"Medium",deep:"Deep"};function Ba(r){const l=Math.floor(r/60),s=r%60;return l===0?`${s}m`:s===0?`${l}h`:`${l}h ${s}m`}function V(r){const l=(r%1440+1440)%1440,s=String(Math.floor(l/60)).padStart(2,"0"),o=String(l%60).padStart(2,"0");return Da(`${s}:${o}`)}function Wa(r){let l=r==null?void 0:r.parentElement;for(;l;){const s=getComputedStyle(l).overflowY;if(s==="auto"||s==="scroll")return l;l=l.parentElement}return null}function qa({sheetYields:r=!1,guide:l=null,dueByDate:s=null,orders:o=[],energy:b="high",onSetEnergy:m,today:S,onSelectQuest:p,onCompleteTask:w,onOpenWarTable:k,onReoptimize:u,dodges:y=Pa,anchors:n,onVerdictMenu:v,onOpenRite:c=null,onClose:ta,stepsMark:z=null,noDay:$=[],onNameRiteDay:D=null}){var K;const[R,la]=i.useState("peek"),H=(l==null?void 0:l.target)==="task"?o.find(a=>a.task.id===l.taskId):null,L=(l==null?void 0:l.target)==="energy"?"Next: tell the realm today's energy":H?`Next: ${H.task.title}`:null,[N,na]=i.useState(()=>{try{return localStorage.getItem("questos-war-horizon")==="week"?"week":"day"}catch{return"day"}}),sa=a=>{na(a);try{localStorage.setItem("questos-war-horizon",a)}catch{}},[g,ia]=i.useState("date"),x=f(),h=i.useMemo(()=>{if(!s)return null;const a=ga(x),t=xa(fa(s,a),g);return{span:a,groups:wa(t,g,x),carried:ua(s,a,x)}},[s,x,g]),M=(a,t)=>e.jsx(Q,{entry:a,lit:E(l,"task",a.task.id),dodges:y,onSelectQuest:p,onCompleteTask:w,onVerdictMenu:v,onOpenRite:c,signed:a.task.status==="done",meta:t},a.task.id),ra=s?e.jsx("div",{className:"lay-battleplan-horizon",role:"group","aria-label":"Today, or the whole week",children:[["day","Today"],["week","This week"]].map(([a,t])=>e.jsx("button",{type:"button",className:N===a?"on":"","aria-pressed":N===a,onClick:()=>sa(a),children:t},a))}):null,oa=h?e.jsxs("div",{className:"lay-battleplan-week",children:[e.jsxs("p",{className:"lay-battleplan-week-span",children:["This week · ",h.span.from.slice(5)," – ",h.span.to.slice(5)]}),h.carried.length>0&&e.jsxs("section",{className:"lay-battleplan-field",children:[e.jsxs("header",{className:"lay-battleplan-field-head",children:[e.jsx("span",{className:"lay-battleplan-field-name",children:"Carried from before this week"}),e.jsx("span",{className:"lay-battleplan-field-hours",children:h.carried.length})]}),e.jsx("ul",{className:"lay-battleplan-list",children:h.carried.map(a=>M(a,ka(a.day,x)))})]}),e.jsx("div",{className:"lay-battleplan-order",role:"group","aria-label":"Order the week by",children:va.map(a=>e.jsx("button",{type:"button",className:g===a?"on":"","aria-pressed":g===a,onClick:()=>ia(a),children:Na[a]},a))}),h.groups.length===0?e.jsx(Y,{children:"Nothing dated this week."}):h.groups.map(a=>e.jsxs("section",{className:"lay-battleplan-field",children:[e.jsx("header",{className:"lay-battleplan-field-head",children:e.jsx("span",{className:"lay-battleplan-field-name",children:a.label})}),e.jsx("ul",{className:"lay-battleplan-list",children:a.rows.map(t=>M(t,`${g==="date"?t.quest.title:ja(t.day,x)}${t.task.hardDue?" · ⚑":""}`))})]},a.key))]}):null,[,da]=i.useState(0);i.useEffect(()=>{const a=setInterval(()=>da(t=>t+1),6e4);return()=>clearInterval(a)},[]);const[pa,ca]=i.useState(0);i.useEffect(()=>{const a=typeof window>"u"?null:window.visualViewport;if(!a)return;const t=()=>{const d=Math.max(0,window.innerHeight-a.height-a.offsetTop);ca(d>120?Math.round(d):0)};return t(),a.addEventListener("resize",t),a.addEventListener("scroll",t),()=>{a.removeEventListener("resize",t),a.removeEventListener("scroll",t)}},[]);const{hours:A,placeholder:ha}=i.useMemo(()=>Ea({anchors:n}),[n]),P=i.useMemo(()=>Ta(A),[A]),O=i.useMemo(()=>Sa(o,a=>a.task.effort,a=>a.task.title,a=>a.urgent===!0),[o]),B=new Date,j=za(B.getHours()*60+B.getMinutes(),A),ya=o.reduce((a,t)=>a+Ra(t.task),0),W=(l==null?void 0:l.target)==="task"?l.taskId:null,_=W?((K=P.find(a=>{var t;return(t=O[a.id])==null?void 0:t.some(d=>d.task.id===W)}))==null?void 0:K.id)??null:null,F=i.useRef({}),q=i.useRef(null);i.useEffect(()=>{var U;const a=_??j;if(!a)return;const t=F.current[a],d=Wa(t);if(!t||!d)return;const ba=((U=q.current)==null?void 0:U.getBoundingClientRect().height)??0,ma=t.getBoundingClientRect().top-d.getBoundingClientRect().top+d.scrollTop-ba-8;d.scrollTo({top:Math.max(0,ma)})},[j,R,_]);const G=o.length===0;return e.jsxs("div",{className:"lay-battleplan",style:{"--lay-bp-keyboard":`${pa}px`},children:[e.jsx("style",{children:_a}),e.jsxs(Aa,{stop:R,onStop:la,yielded:r,label:"The Battle Plan",hint:L,lit:!!L&&R==="peek",children:[e.jsxs("div",{className:"lay-battleplan-lip",ref:q,"data-sheet-lip":"",children:[e.jsxs("div",{className:"lay-battleplan-head",children:[e.jsx("h2",{className:"lay-battleplan-date",children:S}),e.jsx(Oa,{onClose:ta,name:"the battle plan"})]}),e.jsxs("p",{className:"lay-battleplan-claim",children:[e.jsx("span",{children:"A winnable day, nothing more."}),e.jsxs("span",{className:"lay-battleplan-load",title:"Planned time, from effort budgets: light 30m, medium 75m, deep 2.5h",children:["~",Ba(ya)," planned"]})]}),e.jsxs("div",{className:`lay-battleplan-energy${E(l,"energy")?` ${aa}`:""}`,role:"group","aria-label":"Today's energy",children:[e.jsx("span",{className:"lay-battleplan-energy-label",children:"Today's energy"}),["low","medium","high"].map(a=>e.jsx("button",{type:"button",className:`lay-battleplan-energy-btn ${b===a?"on":""}`,"aria-pressed":b===a,onClick:()=>m==null?void 0:m(a),title:`Declare ${a} energy — the day's five are chosen against it`,children:a},a))]})]}),e.jsxs("div",{className:"lay-battleplan-day",children:[ra,N==="week"&&h?oa:G?e.jsx(Y,{children:"No orders on the board today. Reoptimize packs the open work into winnable days, and Settings holds the hours the day is built on — either door is below."}):P.map(a=>e.jsxs("section",{className:`lay-battleplan-field ${j===a.id?"is-now":""}`,ref:t=>{F.current[a.id]=t},children:[e.jsxs("header",{className:"lay-battleplan-field-head",children:[e.jsx("span",{className:"lay-battleplan-field-name",children:a.label}),e.jsxs("span",{className:"lay-battleplan-field-hours",children:[V(a.from)," – ",V(a.to)]}),j===a.id&&e.jsx("span",{className:"lay-battleplan-here",children:"you are here"})]}),O[a.id].length===0?e.jsx("p",{className:"lay-battleplan-open",children:"Open ground."}):e.jsx("ul",{className:"lay-battleplan-list",children:O[a.id].map(t=>e.jsx(Q,{entry:t,lit:E(l,"task",t.task.id),dodges:y,onSelectQuest:p,onCompleteTask:w,onVerdictMenu:v,onOpenRite:c,stepsLine:z&&z.taskId===t.task.id?z.line:null},t.task.id))})]},a.id)),N!=="week"&&$.length>0&&e.jsxs("section",{className:"lay-battleplan-field lay-battleplan-noday","aria-label":T.head,children:[e.jsx("header",{className:"lay-battleplan-field-head",children:e.jsx("span",{className:"lay-battleplan-field-name",children:T.head})}),e.jsx("ul",{className:"lay-battleplan-list",children:$.map(a=>{var t;return e.jsxs("li",{className:"lay-battleplan-row",children:[e.jsxs("button",{type:"button",className:"lay-battleplan-main",onClick:()=>c?c(a.task.id):p==null?void 0:p(a.quest.id),title:c?T.press:`Open ${a.quest.title}`,children:[e.jsx("span",{className:"lay-battleplan-title",children:a.task.title}),e.jsxs("span",{className:"lay-battleplan-meta",children:[e.jsx("i",{className:"lay-battleplan-accent",style:{background:(t=a.epic)==null?void 0:t.accent},"aria-hidden":"true"}),ea[a.task.effort]??"Medium"," · ",Ia(a.task,f())]})]}),D&&e.jsx(Ca,{dress:"lay-battleplan",short:!0,onName:d=>D(a.quest.id,a.task.id,d)})]},a.task.id)})}),e.jsx("p",{className:"lay-battleplan-open",children:T.why})]}),ha&&!G&&e.jsx("p",{className:"lay-battleplan-placeholder",children:"Placeholder hours — the Rule of the House will write the real ones."})]}),e.jsxs($a,{children:[e.jsx(J,{tone:"primary",onPress:k,title:I.doorTitle,note:I.phoneNote,lit:E(l,"wartable"),children:I.door}),e.jsx(J,{onPress:u,title:"Re-plan every open task into winnable days",note:"re-plan the open work",children:"⟳ Reoptimize"})]})]})]})}function Q({entry:r,dodges:l,onSelectQuest:s,onCompleteTask:o,onVerdictMenu:b,onOpenRite:m=null,lit:S=!1,signed:p=!1,meta:w=null,stepsLine:k=null}){const{epic:u,quest:y,task:n}=r,v=Ha((l==null?void 0:l.get(n.id))??0)==="mark";return e.jsxs("li",{className:`lay-battleplan-row${S?` ${aa}`:""}${p?" is-signed":""}`,children:[X(n,f())==="none"?e.jsx("span",{className:"lay-battleplan-sign is-kept",role:"img","aria-label":Z(n,f()),title:Z(n,f()),children:e.jsx("span",{className:"lay-battleplan-ring","aria-hidden":"true"})}):e.jsx("button",{type:"button",className:"lay-battleplan-sign",title:p?"Sealed today — tap to unseal":"Sign it off","aria-label":`${p?"Unseal":"Sign off"} ${n.title}`,"aria-pressed":p,onClick:()=>{X(n,f())!=="none"&&(o==null||o(y.id,n.id))},children:e.jsx("span",{className:"lay-battleplan-ring","aria-hidden":"true"})}),e.jsxs("button",{type:"button",className:"lay-battleplan-main",onClick:()=>m&&C(n)?m(n.id):s==null?void 0:s(y.id),onContextMenu:b?c=>b(c,y.id,n.id):void 0,title:m&&C(n)?"Open this rite’s page":`Open ${y.title}`,children:[e.jsxs("span",{className:"lay-battleplan-title",children:[v&&e.jsxs("span",{className:"lay-battleplan-wilt",title:"Shown and set aside more than twice — this one wants a verdict, not another push",children:["🥀"," "]}),n.title]}),e.jsxs("span",{className:"lay-battleplan-meta",children:[e.jsx("i",{className:"lay-battleplan-accent",style:{background:u==null?void 0:u.accent},"aria-hidden":"true"}),w??e.jsxs(e.Fragment,{children:[ea[n.effort]??"Medium",C(n)?` · ${La(n)}`:n.due?` · ${n.hardDue?"⚑ ":""}due ${n.due.slice(5)}`:""]}),e.jsx(Ma,{task:n})]}),k&&e.jsx("span",{className:"lay-battleplan-steps",children:k})]}),b&&e.jsx("button",{type:"button",className:"lay-battleplan-more",onClick:c=>b(c,y.id,n.id),title:"Give this step a verdict — not today, out of my hands, needs more context…","aria-label":`Verdicts for ${n.title}`,children:"⋯"})]})}const _a=`
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
`;export{qa as default};
