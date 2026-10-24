import{r,a as oa,a6 as da,a7 as pa,a8 as ha,a9 as ca,aa as ba,j as e,ab as ma,ac as ya,ad as ua,N as _,ae as ga,af as fa,ag as xa,ah as wa,ai as ka,h as va,G as Na,C as ja,aj as U,ak as N,A as Ea,R as G,al as Ta,a5 as Sa,i as A,am as Ra,an as za}from"./index-BGqc6Ton.js";const Aa=new Map,Oa={light:"Light",medium:"Medium",deep:"Deep"};function Ia(i){const l=Math.floor(i/60),s=i%60;return l===0?`${s}m`:s===0?`${l}h`:`${l}h ${s}m`}function K(i){const l=(i%1440+1440)%1440,s=String(Math.floor(l/60)).padStart(2,"0"),o=String(l%60).padStart(2,"0");return Ta(`${s}:${o}`)}function $a(i){let l=i==null?void 0:i.parentElement;for(;l;){const s=getComputedStyle(l).overflowY;if(s==="auto"||s==="scroll")return l;l=l.parentElement}return null}function La({sheetYields:i=!1,guide:l=null,dueByDate:s=null,orders:o=[],energy:c="high",onSetEnergy:b,today:j,onSelectQuest:m,onCompleteTask:x,onOpenWarTable:w,onReoptimize:f,dodges:h=Aa,anchors:n,onVerdictMenu:k,onOpenRite:y=null,onClose:Y,stepsMark:E=null}){var W;const[T,X]=r.useState("peek"),O=(l==null?void 0:l.target)==="task"?o.find(a=>a.task.id===l.taskId):null,I=(l==null?void 0:l.target)==="energy"?"Next: tell the realm today's energy":O?`Next: ${O.task.title}`:null,[S,Z]=r.useState(()=>{try{return localStorage.getItem("questos-war-horizon")==="week"?"week":"day"}catch{return"day"}}),J=a=>{Z(a);try{localStorage.setItem("questos-war-horizon",a)}catch{}},[u,V]=r.useState("date"),g=oa(),d=r.useMemo(()=>{if(!s)return null;const a=da(g),t=pa(ha(s,a),u);return{span:a,groups:ba(t,u,g),carried:ca(s,a,g)}},[s,g,u]),$=(a,t)=>e.jsx(q,{entry:a,lit:N(l,"task",a.task.id),dodges:h,onSelectQuest:m,onCompleteTask:x,onVerdictMenu:k,onOpenRite:y,signed:a.task.status==="done",meta:t},a.task.id),Q=s?e.jsx("div",{className:"lay-battleplan-horizon",role:"group","aria-label":"Today, or the whole week",children:[["day","Today"],["week","This week"]].map(([a,t])=>e.jsx("button",{type:"button",className:S===a?"on":"","aria-pressed":S===a,onClick:()=>J(a),children:t},a))}):null,aa=d?e.jsxs("div",{className:"lay-battleplan-week",children:[e.jsxs("p",{className:"lay-battleplan-week-span",children:["This week · ",d.span.from.slice(5)," – ",d.span.to.slice(5)]}),d.carried.length>0&&e.jsxs("section",{className:"lay-battleplan-field",children:[e.jsxs("header",{className:"lay-battleplan-field-head",children:[e.jsx("span",{className:"lay-battleplan-field-name",children:"Carried from before this week"}),e.jsx("span",{className:"lay-battleplan-field-hours",children:d.carried.length})]}),e.jsx("ul",{className:"lay-battleplan-list",children:d.carried.map(a=>$(a,ma(a.day,g)))})]}),e.jsx("div",{className:"lay-battleplan-order",role:"group","aria-label":"Order the week by",children:ya.map(a=>e.jsx("button",{type:"button",className:u===a?"on":"","aria-pressed":u===a,onClick:()=>V(a),children:ua[a]},a))}),d.groups.length===0?e.jsx(_,{children:"Nothing dated this week."}):d.groups.map(a=>e.jsxs("section",{className:"lay-battleplan-field",children:[e.jsx("header",{className:"lay-battleplan-field-head",children:e.jsx("span",{className:"lay-battleplan-field-name",children:a.label})}),e.jsx("ul",{className:"lay-battleplan-list",children:a.rows.map(t=>$(t,`${u==="date"?t.quest.title:ga(t.day,g)}${t.task.hardDue?" · ⚑":""}`))})]},a.key))]}):null,[,ea]=r.useState(0);r.useEffect(()=>{const a=setInterval(()=>ea(t=>t+1),6e4);return()=>clearInterval(a)},[]);const[ta,la]=r.useState(0);r.useEffect(()=>{const a=typeof window>"u"?null:window.visualViewport;if(!a)return;const t=()=>{const p=Math.max(0,window.innerHeight-a.height-a.offsetTop);la(p>120?Math.round(p):0)};return t(),a.addEventListener("resize",t),a.addEventListener("scroll",t),()=>{a.removeEventListener("resize",t),a.removeEventListener("scroll",t)}},[]);const{hours:R,placeholder:na}=r.useMemo(()=>fa({anchors:n}),[n]),C=r.useMemo(()=>xa(R),[R]),z=r.useMemo(()=>wa(o,a=>a.task.effort,a=>a.task.title,a=>a.urgent===!0),[o]),H=new Date,v=ka(H.getHours()*60+H.getMinutes(),R),sa=o.reduce((a,t)=>a+va(t.task),0),L=(l==null?void 0:l.target)==="task"?l.taskId:null,M=L?((W=C.find(a=>{var t;return(t=z[a.id])==null?void 0:t.some(p=>p.task.id===L)}))==null?void 0:W.id)??null:null,D=r.useRef({}),P=r.useRef(null);r.useEffect(()=>{var F;const a=M??v;if(!a)return;const t=D.current[a],p=$a(t);if(!t||!p)return;const ra=((F=P.current)==null?void 0:F.getBoundingClientRect().height)??0,ia=t.getBoundingClientRect().top-p.getBoundingClientRect().top+p.scrollTop-ra-8;p.scrollTo({top:Math.max(0,ia)})},[v,T,M]);const B=o.length===0;return e.jsxs("div",{className:"lay-battleplan",style:{"--lay-bp-keyboard":`${ta}px`},children:[e.jsx("style",{children:Ca}),e.jsxs(Na,{stop:T,onStop:X,yielded:i,label:"The Battle Plan",hint:I,lit:!!I&&T==="peek",children:[e.jsxs("div",{className:"lay-battleplan-lip",ref:P,"data-sheet-lip":"",children:[e.jsxs("div",{className:"lay-battleplan-head",children:[e.jsx("h2",{className:"lay-battleplan-date",children:j}),e.jsx(ja,{onClose:Y,name:"the battle plan"})]}),e.jsxs("p",{className:"lay-battleplan-claim",children:[e.jsx("span",{children:"A winnable day, nothing more."}),e.jsxs("span",{className:"lay-battleplan-load",title:"Planned time, from effort budgets: light 30m, medium 75m, deep 2.5h",children:["~",Ia(sa)," planned"]})]}),e.jsxs("div",{className:`lay-battleplan-energy${N(l,"energy")?` ${U}`:""}`,role:"group","aria-label":"Today's energy",children:[e.jsx("span",{className:"lay-battleplan-energy-label",children:"Today's energy"}),["low","medium","high"].map(a=>e.jsx("button",{type:"button",className:`lay-battleplan-energy-btn ${c===a?"on":""}`,"aria-pressed":c===a,onClick:()=>b==null?void 0:b(a),title:`Declare ${a} energy — the day's five are chosen against it`,children:a},a))]})]}),e.jsxs("div",{className:"lay-battleplan-day",children:[Q,S==="week"&&d?aa:B?e.jsx(_,{children:"No orders on the board today. Reoptimize packs the open work into winnable days, and the War Table draws the whole day with its hours — either door is below."}):C.map(a=>e.jsxs("section",{className:`lay-battleplan-field ${v===a.id?"is-now":""}`,ref:t=>{D.current[a.id]=t},children:[e.jsxs("header",{className:"lay-battleplan-field-head",children:[e.jsx("span",{className:"lay-battleplan-field-name",children:a.label}),e.jsxs("span",{className:"lay-battleplan-field-hours",children:[K(a.from)," – ",K(a.to)]}),v===a.id&&e.jsx("span",{className:"lay-battleplan-here",children:"you are here"})]}),z[a.id].length===0?e.jsx("p",{className:"lay-battleplan-open",children:"Open ground."}):e.jsx("ul",{className:"lay-battleplan-list",children:z[a.id].map(t=>e.jsx(q,{entry:t,lit:N(l,"task",t.task.id),dodges:h,onSelectQuest:m,onCompleteTask:x,onVerdictMenu:k,onOpenRite:y,stepsLine:E&&E.taskId===t.task.id?E.line:null},t.task.id))})]},a.id)),na&&!B&&e.jsx("p",{className:"lay-battleplan-placeholder",children:"Placeholder hours — the Rule of the House will write the real ones."})]}),e.jsxs(Ea,{children:[e.jsx(G,{tone:"primary",onPress:w,title:"Open the War Table — the whole day on one page, with the hours drawn in",note:"the whole day, hours drawn in",lit:N(l,"wartable"),children:"⛶ The War Table"}),e.jsx(G,{onPress:f,title:"Re-plan every open task into winnable days",note:"re-plan the open work",children:"⟳ Reoptimize"})]})]})]})}function q({entry:i,dodges:l,onSelectQuest:s,onCompleteTask:o,onVerdictMenu:c,onOpenRite:b=null,lit:j=!1,signed:m=!1,meta:x=null,stepsLine:w=null}){const{epic:f,quest:h,task:n}=i,k=Sa((l==null?void 0:l.get(n.id))??0)==="mark";return e.jsxs("li",{className:`lay-battleplan-row${j?` ${U}`:""}${m?" is-signed":""}`,children:[e.jsx("button",{type:"button",className:"lay-battleplan-sign",title:m?"Sealed today — tap to unseal":"Sign it off","aria-label":`${m?"Unseal":"Sign off"} ${n.title}`,"aria-pressed":m,onClick:()=>o==null?void 0:o(h.id,n.id),children:e.jsx("span",{className:"lay-battleplan-ring","aria-hidden":"true"})}),e.jsxs("button",{type:"button",className:"lay-battleplan-main",onClick:()=>b&&A(n)?b(n.id):s==null?void 0:s(h.id),onContextMenu:c?y=>c(y,h.id,n.id):void 0,title:b&&A(n)?"Open this rite’s page":`Open ${h.title}`,children:[e.jsxs("span",{className:"lay-battleplan-title",children:[k&&e.jsxs("span",{className:"lay-battleplan-wilt",title:"Shown and set aside more than twice — this one wants a verdict, not another push",children:["🥀"," "]}),n.title]}),e.jsxs("span",{className:"lay-battleplan-meta",children:[e.jsx("i",{className:"lay-battleplan-accent",style:{background:f==null?void 0:f.accent},"aria-hidden":"true"}),x??e.jsxs(e.Fragment,{children:[Oa[n.effort]??"Medium",A(n)?` · ${Ra(n)}`:n.due?` · ${n.hardDue?"⚑ ":""}due ${n.due.slice(5)}`:""]}),e.jsx(za,{task:n})]}),w&&e.jsx("span",{className:"lay-battleplan-steps",children:w})]}),c&&e.jsx("button",{type:"button",className:"lay-battleplan-more",onClick:y=>c(y,h.id,n.id),title:"Give this step a verdict — not today, out of my hands, needs more context…","aria-label":`Verdicts for ${n.title}`,children:"⋯"})]})}const Ca=`
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
.lay-battleplan-row.is-signed .lay-battleplan-title { text-decoration: line-through; opacity: 0.72; }
`;export{La as default};
