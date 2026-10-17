import{r as i,a as ia,$ as ra,a0 as oa,a1 as da,a2 as pa,a3 as ha,j as e,a4 as ca,a5 as ba,a6 as ma,N as F,a7 as ya,a8 as ua,a9 as fa,aa as ga,ab as xa,g as wa,F as ka,C as va,ac as K,ad as N,A as Na,R as W,ae as ja,_ as Ea,i as Ta,af as Sa}from"./index-XbEUziCG.js";const Ra=new Map,za={light:"Light",medium:"Medium",deep:"Deep"};function Aa(r){const l=Math.floor(r/60),n=r%60;return l===0?`${n}m`:n===0?`${l}h`:`${l}h ${n}m`}function _(r){const l=(r%1440+1440)%1440,n=String(Math.floor(l/60)).padStart(2,"0"),o=String(l%60).padStart(2,"0");return ja(`${n}:${o}`)}function Oa(r){let l=r==null?void 0:r.parentElement;for(;l;){const n=getComputedStyle(l).overflowY;if(n==="auto"||n==="scroll")return l;l=l.parentElement}return null}function Ca({sheetYields:r=!1,guide:l=null,dueByDate:n=null,orders:o=[],energy:h="high",onSetEnergy:f,today:b,onSelectQuest:w,onCompleteTask:g,onOpenWarTable:x,onReoptimize:c,dodges:s=Ra,anchors:k,onVerdictMenu:m,onClose:q,stepsMark:j=null}){var P;const[E,U]=i.useState("peek"),z=(l==null?void 0:l.target)==="task"?o.find(a=>a.task.id===l.taskId):null,A=(l==null?void 0:l.target)==="energy"?"Next: tell the realm today's energy":z?`Next: ${z.task.title}`:null,[T,Y]=i.useState(()=>{try{return localStorage.getItem("questos-war-horizon")==="week"?"week":"day"}catch{return"day"}}),X=a=>{Y(a);try{localStorage.setItem("questos-war-horizon",a)}catch{}},[y,Z]=i.useState("date"),u=ia(),d=i.useMemo(()=>{if(!n)return null;const a=ra(u),t=oa(da(n,a),y);return{span:a,groups:ha(t,y,u),carried:pa(n,a,u)}},[n,u,y]),O=(a,t)=>e.jsx(G,{entry:a,lit:N(l,"task",a.task.id),dodges:s,onSelectQuest:w,onCompleteTask:g,onVerdictMenu:m,signed:a.task.status==="done",meta:t},a.task.id),J=n?e.jsx("div",{className:"lay-battleplan-horizon",role:"group","aria-label":"Today, or the whole week",children:[["day","Today"],["week","This week"]].map(([a,t])=>e.jsx("button",{type:"button",className:T===a?"on":"","aria-pressed":T===a,onClick:()=>X(a),children:t},a))}):null,V=d?e.jsxs("div",{className:"lay-battleplan-week",children:[e.jsxs("p",{className:"lay-battleplan-week-span",children:["This week · ",d.span.from.slice(5)," – ",d.span.to.slice(5)]}),d.carried.length>0&&e.jsxs("section",{className:"lay-battleplan-field",children:[e.jsxs("header",{className:"lay-battleplan-field-head",children:[e.jsx("span",{className:"lay-battleplan-field-name",children:"Carried from before this week"}),e.jsx("span",{className:"lay-battleplan-field-hours",children:d.carried.length})]}),e.jsx("ul",{className:"lay-battleplan-list",children:d.carried.map(a=>O(a,ca(a.day,u)))})]}),e.jsx("div",{className:"lay-battleplan-order",role:"group","aria-label":"Order the week by",children:ba.map(a=>e.jsx("button",{type:"button",className:y===a?"on":"","aria-pressed":y===a,onClick:()=>Z(a),children:ma[a]},a))}),d.groups.length===0?e.jsx(F,{children:"Nothing dated this week."}):d.groups.map(a=>e.jsxs("section",{className:"lay-battleplan-field",children:[e.jsx("header",{className:"lay-battleplan-field-head",children:e.jsx("span",{className:"lay-battleplan-field-name",children:a.label})}),e.jsx("ul",{className:"lay-battleplan-list",children:a.rows.map(t=>O(t,`${y==="date"?t.quest.title:ya(t.day,u)}${t.task.hardDue?" · ⚑":""}`))})]},a.key))]}):null,[,Q]=i.useState(0);i.useEffect(()=>{const a=setInterval(()=>Q(t=>t+1),6e4);return()=>clearInterval(a)},[]);const[aa,ea]=i.useState(0);i.useEffect(()=>{const a=typeof window>"u"?null:window.visualViewport;if(!a)return;const t=()=>{const p=Math.max(0,window.innerHeight-a.height-a.offsetTop);ea(p>120?Math.round(p):0)};return t(),a.addEventListener("resize",t),a.addEventListener("scroll",t),()=>{a.removeEventListener("resize",t),a.removeEventListener("scroll",t)}},[]);const{hours:S,placeholder:ta}=i.useMemo(()=>ua({anchors:k}),[k]),I=i.useMemo(()=>fa(S),[S]),R=i.useMemo(()=>ga(o,a=>a.task.effort,a=>a.task.title),[o]),$=new Date,v=xa($.getHours()*60+$.getMinutes(),S),la=o.reduce((a,t)=>a+wa(t.task),0),C=(l==null?void 0:l.target)==="task"?l.taskId:null,H=C?((P=I.find(a=>{var t;return(t=R[a.id])==null?void 0:t.some(p=>p.task.id===C)}))==null?void 0:P.id)??null:null,L=i.useRef({}),M=i.useRef(null);i.useEffect(()=>{var B;const a=H??v;if(!a)return;const t=L.current[a],p=Oa(t);if(!t||!p)return;const na=((B=M.current)==null?void 0:B.getBoundingClientRect().height)??0,sa=t.getBoundingClientRect().top-p.getBoundingClientRect().top+p.scrollTop-na-8;p.scrollTo({top:Math.max(0,sa)})},[v,E,H]);const D=o.length===0;return e.jsxs("div",{className:"lay-battleplan",style:{"--lay-bp-keyboard":`${aa}px`},children:[e.jsx("style",{children:Ia}),e.jsxs(ka,{stop:E,onStop:U,yielded:r,label:"The Battle Plan",hint:A,lit:!!A&&E==="peek",children:[e.jsxs("div",{className:"lay-battleplan-lip",ref:M,"data-sheet-lip":"",children:[e.jsxs("div",{className:"lay-battleplan-head",children:[e.jsx("h2",{className:"lay-battleplan-date",children:b}),e.jsx(va,{onClose:q,name:"the battle plan"})]}),e.jsxs("p",{className:"lay-battleplan-claim",children:[e.jsx("span",{children:"A winnable day, nothing more."}),e.jsxs("span",{className:"lay-battleplan-load",title:"Planned time, from effort budgets: light 30m, medium 75m, deep 2.5h",children:["~",Aa(la)," planned"]})]}),e.jsxs("div",{className:`lay-battleplan-energy${N(l,"energy")?` ${K}`:""}`,role:"group","aria-label":"Today's energy",children:[e.jsx("span",{className:"lay-battleplan-energy-label",children:"Today's energy"}),["low","medium","high"].map(a=>e.jsx("button",{type:"button",className:`lay-battleplan-energy-btn ${h===a?"on":""}`,"aria-pressed":h===a,onClick:()=>f==null?void 0:f(a),title:`Declare ${a} energy — the day's five are chosen against it`,children:a},a))]})]}),e.jsxs("div",{className:"lay-battleplan-day",children:[J,T==="week"&&d?V:D?e.jsx(F,{children:"No orders on the board today. Reoptimize packs the open work into winnable days, and the War Table draws the whole day with its hours — either door is below."}):I.map(a=>e.jsxs("section",{className:`lay-battleplan-field ${v===a.id?"is-now":""}`,ref:t=>{L.current[a.id]=t},children:[e.jsxs("header",{className:"lay-battleplan-field-head",children:[e.jsx("span",{className:"lay-battleplan-field-name",children:a.label}),e.jsxs("span",{className:"lay-battleplan-field-hours",children:[_(a.from)," – ",_(a.to)]}),v===a.id&&e.jsx("span",{className:"lay-battleplan-here",children:"you are here"})]}),R[a.id].length===0?e.jsx("p",{className:"lay-battleplan-open",children:"Open ground."}):e.jsx("ul",{className:"lay-battleplan-list",children:R[a.id].map(t=>e.jsx(G,{entry:t,lit:N(l,"task",t.task.id),dodges:s,onSelectQuest:w,onCompleteTask:g,onVerdictMenu:m,stepsLine:j&&j.taskId===t.task.id?j.line:null},t.task.id))})]},a.id)),ta&&!D&&e.jsx("p",{className:"lay-battleplan-placeholder",children:"Placeholder hours — the Rule of the House will write the real ones."})]}),e.jsxs(Na,{children:[e.jsx(W,{tone:"primary",onPress:x,title:"Open the War Table — the whole day on one page, with the hours drawn in",note:"the whole day, hours drawn in",lit:N(l,"wartable"),children:"⛶ The War Table"}),e.jsx(W,{onPress:c,title:"Re-plan every open task into winnable days",note:"re-plan the open work",children:"⟳ Reoptimize"})]})]})]})}function G({entry:r,dodges:l,onSelectQuest:n,onCompleteTask:o,onVerdictMenu:h,lit:f=!1,signed:b=!1,meta:w=null,stepsLine:g=null}){const{epic:x,quest:c,task:s}=r,k=Ea((l==null?void 0:l.get(s.id))??0)==="mark";return e.jsxs("li",{className:`lay-battleplan-row${f?` ${K}`:""}${b?" is-signed":""}`,children:[e.jsx("button",{type:"button",className:"lay-battleplan-sign",title:b?"Sealed today — tap to unseal":"Sign it off","aria-label":`${b?"Unseal":"Sign off"} ${s.title}`,"aria-pressed":b,onClick:()=>o==null?void 0:o(c.id,s.id),children:e.jsx("span",{className:"lay-battleplan-ring","aria-hidden":"true"})}),e.jsxs("button",{type:"button",className:"lay-battleplan-main",onClick:()=>n==null?void 0:n(c.id),onContextMenu:h?m=>h(m,c.id,s.id):void 0,title:`Open ${c.title}`,children:[e.jsxs("span",{className:"lay-battleplan-title",children:[k&&e.jsxs("span",{className:"lay-battleplan-wilt",title:"Shown and set aside more than twice — this one wants a verdict, not another push",children:["🥀"," "]}),s.title]}),e.jsxs("span",{className:"lay-battleplan-meta",children:[e.jsx("i",{className:"lay-battleplan-accent",style:{background:x==null?void 0:x.accent},"aria-hidden":"true"}),w??e.jsxs(e.Fragment,{children:[za[s.effort]??"Medium",Ta(s)?" · rite":"",s.due?` · ${s.hardDue?"⚑ ":""}due ${s.due.slice(5)}`:""]}),e.jsx(Sa,{task:s})]}),g&&e.jsx("span",{className:"lay-battleplan-steps",children:g})]}),h&&e.jsx("button",{type:"button",className:"lay-battleplan-more",onClick:m=>h(m,c.id,s.id),title:"Give this step a verdict — not today, out of my hands, needs more context…","aria-label":`Verdicts for ${s.title}`,children:"⋯"})]})}const Ia=`
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
`;export{Ca as default};
