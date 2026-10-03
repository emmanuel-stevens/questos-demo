import{r as h,ak as M,aj as Ue,z as Ge,E as qe,am as ve,ap as we,aG as Qe,aH as eo,ao as ze,j as e,F as oo,C as ao,av as lo,aw as so,ax as to,ay as ro,A as oe,R as j,az as je,ar as Se,aK as Fe,as as le,an as Te,i as I,N as Re,aL as io,aM as no,aN as ho,aO as co,aA as po,aq as Ne,at as fo,au as bo,aF as yo,aB as xo,aD as mo,aI as Ce,aJ as ko}from"./index-BeKx-Ibw.js";const se=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV"],R="__the-shelf__",Ee="__a-book-to-be-written__",uo=310,Oe=[{key:"todo",label:"To do"},{key:"waiting",label:"In other hands"},{key:"done",label:"Sealed"}],go={novice:1,intermediate:2,expert:3,master:4};function vo(l){return l.quests.reduce((t,r)=>t+r.tasks.length,0)}function Ae(l){return l.quests.reduce((t,r)=>t+r.tasks.filter(i=>i.status!=="done"&&!I(i)).length,0)}function te(l){const t=vo(l);return t>=25?"tall":t>=10?"mid":"short"}function re(l){return Math.max(1,...l.quests.map(t=>go[t.difficulty]??1))}function wo(l){const t=re(l);return t>=3?"gold":t===2?"crimson":"linen"}const Ie={tall:3,mid:2,short:1},ae={shelf:{label:"Shelf",fn:(l,t)=>(l.order??je)-(t.order??je)},alpha:{label:"A–Z",fn:(l,t)=>l.title.localeCompare(t.title)},difficulty:{label:"Difficulty",fn:(l,t)=>re(t)-re(l)},left:{label:"Tasks left",fn:(l,t)=>Ae(t)-Ae(l)},tier:{label:"Stature",fn:(l,t)=>Ie[te(t)]-Ie[te(l)]}};function jo(l){const t=l.tasks.filter(s=>!I(s)),r=t.filter(s=>s.hardDue&&s.due).map(s=>s.due).sort()[0];if(r)return{label:`⚑ ${r.slice(5)}`,hard:!0};const i=t.filter(s=>s.due&&s.status==="todo").map(s=>s.due).sort()[0];if(i)return{label:`due ${i.slice(5)}`,hard:!1};const c=t.filter(s=>s.scheduled&&s.status==="todo").map(s=>s.scheduled).sort();return c.length?{label:`~${c[c.length-1].slice(5)}`,hard:!1}:null}function No(l){if(l.quarter)return`sworn to ${l.quarter} at the Muster`;const t=l.quests.flatMap(i=>i.tasks.filter(c=>c.due&&!I(c))).sort((i,c)=>{const s=f=>f.boss&&f.hardDue?0:f.hardDue?1:f.boss?2:3;return s(i)-s(c)||(i.due<c.due?-1:1)})[0];return t?`"${t.title.length>60?`${t.title.slice(0,58)}…`:t.title}" — ${t.hardDue?"⚑ ":""}dated ${t.due}`:null}function Co(l,t){if(Se(l))return`Closed ${String(l.sealedAt).slice(0,10)} — ${Fe(l)}`;if(le(l))return`Planned since ${String(l.vaultedAt).slice(0,10)} — out of your days until you begin it.`;if(M(l))return"Offered — not yours until you take it.";const r=Te(l,t),i=ze(l);return`${r.done} of ${r.total} chapters closed${i.total?` · ${i.percent}%`:""}`}function Eo({book:l,statuses:t,onSelectQuest:r}){const i=l.quests,c=new Map(i.map((s,f)=>[s.id,se[f]??String(f+1)]));return e.jsxs("ol",{className:"lay-bookshelf-road",children:[i.map((s,f)=>{const d=t.get(s.id)??s.status,b=d==="locked",p=jo(s),x=(s.prerequisites??[]).map(m=>c.get(m)).filter(Boolean),y=e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"lay-bookshelf-way-mark","aria-hidden":"true",children:d==="complete"?"✓":b?"🔒":d==="active"?"◉":"○"}),e.jsxs("span",{className:"lay-bookshelf-way-text",children:[e.jsxs("span",{className:"lay-bookshelf-way-title",children:[se[f]??f+1,". ",b?"A sealed waystone":s.title]}),e.jsxs("span",{className:`lay-bookshelf-way-date${p!=null&&p.hard?" lay-bookshelf-hard":""}`,children:[d==="complete"?"won":(p==null?void 0:p.label)??"undated",x.length>0&&` · waits on ${x.join(", ")}`]})]})]});return e.jsx("li",{className:`lay-bookshelf-way lay-bookshelf-way-${d}`,children:b?e.jsx("div",{className:"lay-bookshelf-way-face",children:y}):e.jsx("button",{type:"button",className:"lay-bookshelf-way-face",onClick:()=>r==null?void 0:r(s.id),children:y})},s.id)}),e.jsx("li",{className:"lay-bookshelf-road-foot",children:"— here ends the map, not the road —"})]})}function Oo({book:l,statuses:t,onSelectQuest:r,onMoveTask:i}){const[c,s]=h.useState(null),f=l.quests.filter(d=>t.get(d.id)!=="locked"&&d.tasks.some(b=>!I(b))).sort((d,b)=>{const p=x=>x.tasks.some(y=>y.status!=="done"&&!I(y));return(p(b)?1:0)-(p(d)?1:0)});return f.length===0?e.jsx(Re,{children:"No chapters carry tasks yet — the board waits for work."}):e.jsx("div",{className:"lay-bookshelf-board",children:f.map(d=>e.jsxs("section",{className:"lay-bookshelf-col",children:[e.jsx("button",{type:"button",className:"lay-bookshelf-col-head",style:{"--accent":l.accent},onClick:()=>r==null?void 0:r(d.id),children:d.title}),Oe.map(b=>{const p=d.tasks.filter(y=>y.status===b.key&&!I(y)),x=b.key==="done"?p.slice(0,5):p;return e.jsxs("div",{className:"lay-bookshelf-lane",children:[e.jsxs("div",{className:"lay-bookshelf-lane-label",children:[b.label," · ",p.length]}),x.map(y=>{const m=c===y.id;return e.jsxs("div",{className:"lay-bookshelf-card-wrap",children:[e.jsx("button",{type:"button",className:"lay-bookshelf-card",style:{"--accent":l.accent},"aria-expanded":m,onClick:()=>s(m?null:y.id),children:y.title}),m&&e.jsxs("div",{className:"lay-bookshelf-card-moves",children:[Oe.filter(k=>k.key!==b.key).map(k=>e.jsxs("button",{type:"button",className:"lay-bookshelf-move",onClick:()=>{i==null||i(d.id,y.id,k.key),s(null)},children:["→ ",k.label]},k.key)),e.jsx("button",{type:"button",className:"lay-bookshelf-move",onClick:()=>r==null?void 0:r(d.id),children:"Open the chapter"})]})]},y.id)}),b.key==="done"&&p.length>5&&e.jsxs("div",{className:"lay-bookshelf-lane-label",children:["+ ",p.length-5," more sealed"]})]},b.key)})]},d.id))})}function zo({sheetYields:l=!1,epics:t=[],statuses:r=new Map,openTo:i,onSelectQuest:c,onGoToRoundTable:s,onBind:f,onTakeOffering:d,offerPlacement:b,onAddQuest:p,onAddEpic:x,onMoveTask:y,onEditQuest:m,onEditEpic:k,onVault:W,onWake:V,onUnseal:K,onStrike:$,onClose:z}){const[B,$e]=h.useState("shelf"),g=h.useMemo(()=>{var a;return[...t].sort(((a=ae[B])==null?void 0:a.fn)??ae.shelf.fn)},[t,B]),L=h.useMemo(()=>g.filter(M),[g]),P=h.useMemo(()=>Ue(g),[g]),ie=b==="lead"||b==="B",[_,N]=h.useState(()=>i&&g.some(a=>a.id===i)?i:R),o=h.useMemo(()=>g.find(a=>a.id===_)??null,[g,_]),v=_===Ee?"write":o?"volume":"shelf",[S,ne]=h.useState("toc");h.useEffect(()=>{ne("toc")},[_]);const[C,F]=h.useState(null),[X,Y]=h.useState(null),[de,H]=h.useState(""),[he,E]=h.useState(null),[Z,Be]=h.useState(!1),[J,ce]=h.useState(!1),[U,pe]=h.useState(!1),[G,fe]=h.useState(!1),[q,be]=h.useState(!1),[ye,Le]=h.useState("rest"),[xe]=Ge(),Pe=Math.min(qe(ye,xe),Math.max(0,xe.height-uo));h.useEffect(()=>{const a=n=>{if(n.key==="Escape"){if(C){F(null);return}J||U||G||q||X||z==null||z()}};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[z,C,J,U,G,q,X]);const O=o?M(o):!1,Q=o?ve(o):!1,ee=o?we(o):!1,me=o?Qe(o,{canStrike:!!$,isStanding:eo(o),isOffered:O}):{show:!1,strike:!1},_e=[{key:"toc",label:"Contents"},{key:"road",label:"The road"},{key:"board",label:"The board"},{key:"ends",label:"Endpapers"}],ke={toc:"The chapters in the order the book tells them. Tap one to open it.",road:"The same chapters walked as a journey — where you are, and what waits on what.",board:"Tap a card once to see where it can go, and again to move it. A card never leaves its own chapter.",ends:"The volume's own paperwork: what it knows, what it has not decided yet, and how it ends."},He=()=>e.jsxs(oe,{note:"Tap a volume to open it. Flick the grip down and the Study is still behind all of this.",children:[e.jsx(j,{tone:"primary",onPress:()=>N(Ee),note:P.length===0?"your first":"the next volume",title:"Begin a volume that is not written yet",children:"🪶 A book to be written"}),e.jsx(j,{onPress:()=>s==null?void 0:s(),note:"argue it first",children:"⚔ The War Room"})]}),De=()=>e.jsxs(oe,{note:"What a book holds is not decided alone — the seats argue what it demands and whether now is its time.",children:[e.jsx(j,{tone:"primary",onPress:()=>s==null?void 0:s(),note:"take the idea to the table",children:"⚔ The War Room"}),e.jsx(j,{onPress:()=>N(R),note:"back to the books",children:"◂ The shelf"})]}),Me=()=>{const a=O?e.jsx(j,{tone:"primary",onPress:()=>d==null?void 0:d(o.id),disabled:!d,note:"it becomes yours; nothing was scheduled until now",children:"✦ Take this road"}):!Q&&ee?e.jsx(j,{tone:"primary",onPress:()=>F(o),note:"the goal wears a date and tells its story",children:"⚭ Perform the Binding"}):null,n=O?"This road is not in your realm yet. Read it, then take it — or leave it on the shelf.":!Q&&ee?"The realm never binds for you. The ceremony is yours to perform.":ke[S];return e.jsxs(oe,{note:n,dense:!a,children:[a,_e.map(u=>e.jsx(j,{tone:S===u.key?"here":"plain",onPress:()=>ne(u.key),title:ke[u.key],children:u.label},u.key))]})},We=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-sorts",role:"group","aria-label":"Sort the shelf",children:Object.entries(ae).map(([a,n])=>e.jsx("button",{type:"button",className:`lay-bookshelf-sort${B===a?" on":""}`,"aria-pressed":B===a,onClick:()=>$e(a),children:n.label},a))}),e.jsxs("button",{type:"button",className:"lay-bookshelf-legend-toggle","aria-expanded":Z,onClick:()=>Be(a=>!a),children:[Z?"▾":"▸"," How to read the shelf"]}),Z&&e.jsxs("div",{className:"lay-bookshelf-legend",children:[e.jsxs("p",{children:["A book's ",e.jsx("i",{children:"height"})," is the work inside: tall volumes hold 25+ actions, middling 10+, slim ones fewer."]}),e.jsxs("p",{children:["Its ",e.jsx("i",{children:"ribbon"})," is the difficulty: linen for novice, crimson for the adept, gold thread for master work."]}),e.jsx("p",{children:"Its wear is its use — heavy, handled books age."}),e.jsxs("p",{children:[e.jsx("b",{children:"The binding ceremony."})," A scroll is a dream still — undated, or untold. When its goal wears a real date ",e.jsx("i",{children:"and"})," the book tells its story, a golden clasp appears. The binding itself is yours to perform; the realm never binds for you."]})]}),ie&&ue(),P.length===0?e.jsx(Re,{children:"No volumes stand here yet. A campaign is a life project with chapters — begin one with the quill below, or take the idea to the War Room first."}):e.jsx("ul",{className:"lay-bookshelf-stack",children:P.map(ge)}),!ie&&ue(),e.jsxs("div",{className:"lay-bookshelf-others",children:[e.jsx("div",{className:"lay-bookshelf-band",children:"the other books on this shelf"}),e.jsx(io,{onOpen:()=>be(!0)}),e.jsx(no,{onOpen:()=>ce(!0)}),e.jsx(ho,{onOpen:()=>pe(!0)}),e.jsx(co,{onOpen:()=>fe(!0)})]})]}),ue=()=>L.length===0?null:e.jsxs("div",{className:"lay-bookshelf-offers",children:[e.jsx("div",{className:"lay-bookshelf-band",children:"offered — yours if you take them"}),e.jsx("ul",{className:"lay-bookshelf-stack",children:L.map(ge)})]});function ge(a){const n=Te(a,r),u=!ve(a)&&we(a),A=M(a);return e.jsx("li",{children:e.jsxs("button",{type:"button",className:`lay-bookshelf-volume size-${te(a)}`,style:{"--accent":a.accent},onClick:()=>N(a.id),children:[e.jsx("span",{className:`lay-bookshelf-ribbon ribbon-${wo(a)}`,"aria-hidden":"true"}),e.jsxs("span",{className:"lay-bookshelf-volume-text",children:[e.jsxs("span",{className:"lay-bookshelf-volume-title",children:[A&&e.jsx("span",{"aria-hidden":"true",children:"✦ "}),a.title,u&&e.jsxs("span",{className:"lay-bookshelf-clasp",title:"Ready for the binding",children:[" ","⚭"]})]}),e.jsx("span",{className:"lay-bookshelf-volume-sub",children:A?"offered — not yours yet":le(a)?`planned since ${String(a.vaultedAt).slice(0,10)}`:`${n.done}/${n.total} chapters closed`})]})]})},a.id)}const Ve=()=>e.jsxs("div",{className:"lay-bookshelf-write",children:[e.jsx("h3",{className:"lay-bookshelf-write-title",children:"A Book to Be Written"}),e.jsx("p",{className:"lay-bookshelf-write-line",children:"Life is not over. There is always another volume."}),e.jsxs("p",{className:"lay-bookshelf-write-line",children:["What this book holds is not decided alone. Bring the idea to the War Room — the seats will argue what it demands, what it trains, and whether now is its time."," ",x?"Or take the quill and write it plainly.":"Or voice the campaign to your squire — a spoken volume is written whole."]}),x&&e.jsx(po,{onAdd:a=>{x(a),N(R)}})]}),Ke=()=>{const a=yo(o);return e.jsxs(e.Fragment,{children:[O&&e.jsx("p",{className:"lay-bookshelf-offer-banner",children:"This road is on the offered shelf. It is not in your realm yet — nothing in it is scheduled, counted, or on your list until you take it."}),e.jsx("ol",{className:"lay-bookshelf-chapters",children:o.quests.map((n,u)=>{const A=r.get(n.id)??n.status,T=A==="locked",Ze=A==="complete",D=xo(n);return he===n.id?e.jsx("li",{children:e.jsx(Ne,{value:n.title,onSave:Je=>{m==null||m(n.id,Je),E(null)},onCancel:()=>E(null)})},n.id):e.jsxs("li",{className:"lay-bookshelf-chapter-row",children:[e.jsxs("button",{type:"button",className:`lay-bookshelf-chapter chapter-${A}`,onClick:()=>c==null?void 0:c(n.id),disabled:T,children:[e.jsxs("span",{className:"lay-bookshelf-numeral",children:[se[u]??u+1,"."]}),e.jsxs("span",{className:"lay-bookshelf-chapter-text",children:[e.jsx("span",{className:"lay-bookshelf-chapter-title",children:T?"A Sealed Chapter":n.title}),!T&&D.total>0&&e.jsx("span",{className:"lay-bookshelf-chapter-bar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${D.percent}%`}})})]}),e.jsx("span",{className:"lay-bookshelf-folio",children:Ze?"✓":T?"🔒":`${D.done}/${D.total}`})]}),m&&!T&&e.jsx("button",{type:"button",className:"lay-bookshelf-quill","aria-label":`Rename "${n.title}"`,title:"Rename this chapter",onClick:()=>E(n.id),children:"✒"})]},n.id)})}),p&&e.jsx(mo,{onAdd:n=>p(o.id,n)}),e.jsxs("div",{className:"lay-bookshelf-colophon",children:[e.jsx("p",{children:o.description}),!O&&!Q&&!ee&&e.jsxs("p",{className:"lay-bookshelf-hint",children:[!Ce(o)&&!ko(o)?"A scroll still — its goal wears no date and its story is untold. Give the boss a real deadline and the book a real description, and the clasp will appear.":Ce(o)?"A scroll still — its story is untold. Tell the book what it is for and what done means, and the clasp will appear.":"A scroll still — give the goal a real date (a sworn quarter, a dated boss, a hard deadline), and the clasp will appear."," ","Or take the whole plan to the table first — it may be worth binding, or worth setting down."]}),e.jsxs("p",{className:"lay-bookshelf-xp",children:[a.earned,"/",a.potential," XP"]})]})]})},Xe=()=>e.jsxs("div",{className:"lay-bookshelf-ends",children:[he==="__volume__"?e.jsx(Ne,{value:o.title,subtitle:o.tagline??"",subtitleLabel:"the volume's one line…",onSave:a=>{k==null||k(o.id,a),E(null)},onCancel:()=>E(null)}):k&&e.jsx("button",{type:"button",className:"lay-bookshelf-wide",onClick:()=>E("__volume__"),children:"✒ Rename this volume"}),e.jsx("button",{type:"button",className:"lay-bookshelf-wide",onClick:()=>s==null?void 0:s(o.id),children:"⚔ Review this plan with the War Room"}),e.jsx("p",{className:"lay-bookshelf-said",children:"The seats read what is still open — finished steps are history and are never re-opened."}),me.show&&e.jsxs("div",{className:"lay-bookshelf-verbs",children:[e.jsx("div",{className:"lay-bookshelf-band",children:"how this volume ends"}),Se(o)?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"lay-bookshelf-said",children:["Closed ",String(o.sealedAt).slice(0,10)," — ",Fe(o)]}),e.jsx("button",{type:"button",className:"lay-bookshelf-wide",onClick:()=>K==null?void 0:K(o.id),children:"Reopen it"}),e.jsx("p",{className:"lay-bookshelf-said",children:"The ending is forgotten and the road returns to your days — use this if you closed it by mistake."})]}):le(o)?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"lay-bookshelf-said",children:["Planned since ",String(o.vaultedAt).slice(0,10)," — out of your days until you begin it."]}),e.jsx("button",{type:"button",className:"lay-bookshelf-wide",onClick:()=>V==null?void 0:V(o.id),children:"Begin it"})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"lay-bookshelf-wide",onClick:()=>W==null?void 0:W(o.id),children:"Mark it planned"}),e.jsx("p",{className:"lay-bookshelf-said",children:"Not yet — it leaves your days and waits with the plans until you are ready to walk it. Reversible."})]}),me.strike&&(X===o.id?e.jsxs("div",{className:"lay-bookshelf-strike",children:[e.jsxs("label",{className:"lay-bookshelf-said",htmlFor:"lay-bookshelf-strike-field",children:["This cannot be undone. Type ",e.jsx("strong",{children:o.title})," to strike it:"]}),e.jsx("input",{id:"lay-bookshelf-strike-field",className:"lay-bookshelf-field",value:de,onChange:a=>H(a.target.value),placeholder:o.title}),e.jsx("button",{type:"button",className:"lay-bookshelf-wide lay-bookshelf-danger",disabled:de.trim()!==o.title,onClick:()=>{$==null||$(o.id),Y(null),H(""),N(R)},children:"Strike it"}),e.jsx("button",{type:"button",className:"lay-bookshelf-wide",onClick:()=>{Y(null),H("")},children:"Keep it"})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"lay-bookshelf-wide lay-bookshelf-danger",onClick:()=>{Y(o.id),H("")},children:"Strike it"}),e.jsx("p",{className:"lay-bookshelf-said",children:"Remove it entirely. There is no undo — take a copy from the Saddlebag first if you want one."})]}))]}),!O&&e.jsxs("div",{className:"lay-bookshelf-papers",children:[e.jsx(fo,{epic:o,scope:"epic"}),e.jsx(bo,{scope:"epic",targetId:o.id,targetTitle:o.title})]})]}),Ye=()=>v==="shelf"?We():v==="write"?Ve():S==="road"?e.jsx(Eo,{book:o,statuses:r,onSelectQuest:c}):S==="board"?e.jsx(Oo,{book:o,statuses:r,onSelectQuest:c,onMoveTask:y}):S==="ends"?Xe():Ke(),w=o?ze(o):null;return e.jsxs("div",{className:"lay-bookshelf-lectern",style:{"--lay-lectern-top":`${Pe}px`},children:[e.jsx("style",{children:Ao}),e.jsx("div",{className:"lay-bookshelf-scrim","aria-hidden":"true"}),e.jsxs(oo,{stop:ye,onStop:Le,yielded:l,label:"The Bookshelf",children:[e.jsxs("div",{className:"lay-bookshelf-head",children:[e.jsxs("div",{className:"lay-bookshelf-head-row",children:[v==="shelf"?e.jsx("span",{className:"lay-bookshelf-kicker",children:"The Bookshelf"}):e.jsx("button",{type:"button",className:"lay-bookshelf-back",onClick:()=>N(R),children:"◂ The shelf"}),e.jsx(ao,{onClose:z,name:"the Bookshelf"})]}),e.jsxs("div",{className:"lay-bookshelf-head-name",children:[e.jsx("h2",{className:"lay-bookshelf-title",children:v==="write"?"A Book to Be Written":o?o.title:"Your volumes"}),e.jsx("p",{className:"lay-bookshelf-standing",children:v==="write"?"Nothing is written until you write it.":o?Co(o,r):`${P.length} underway${L.length?` · ${L.length} offered`:""}`}),o&&(w==null?void 0:w.total)>0&&e.jsx("div",{className:"lay-bookshelf-progress",role:"progressbar","aria-valuenow":w.percent,"aria-valuemin":0,"aria-valuemax":100,"aria-label":`${w.done} of ${w.total} steps done across the volume`,children:e.jsx("span",{style:{width:`${w.percent}%`,background:o.accent}})})]})]}),e.jsx("div",{className:"lay-bookshelf-body",children:Ye()}),e.jsx("div",{className:"lay-bookshelf-sill",children:v==="shelf"?He():v==="write"?De():Me()})]}),C&&e.jsx("div",{className:"lay-bookshelf-ceremony",onClick:()=>F(null),children:e.jsxs("div",{className:"lay-bookshelf-ceremony-card",onClick:a=>a.stopPropagation(),children:[e.jsx("div",{className:"lay-bookshelf-kicker",children:"The Binding Ceremony"}),e.jsx("h3",{className:"lay-bookshelf-title",children:C.title}),e.jsxs("p",{className:"lay-bookshelf-said",children:["The goal wears a date: ",No(C)??"a dated path exists",". And its story is told — the book knows what it is for. Bind this scroll and it takes its place among the books: sealed, shelved, and never silently demoted."]}),e.jsx("button",{type:"button",className:"lay-bookshelf-wide lay-bookshelf-seal",onClick:()=>{f==null||f(C.id),F(null)},children:"⚭ Bind the volume"}),e.jsx("button",{type:"button",className:"lay-bookshelf-wide",onClick:()=>F(null),children:"Not yet"})]})}),J&&e.jsx(lo,{onClose:()=>ce(!1)}),U&&e.jsx(so,{onClose:()=>pe(!1)}),G&&e.jsx(to,{onClose:()=>fe(!1)}),q&&e.jsx(ro,{onClose:()=>be(!1)})]})}const Ao=`
/* THE ROOT TAKES NO PRESSES. It is a full-viewport fixed box, and a transparent
   fixed box still eats every tap inside it — so with no "pointer-events" rule
   the room switcher (z-index 12) and the bell (15) were dead under it, and
   because the root carries no handler the press did nothing at all. Only the
   drawer and the ceremony take presses back; journalB is the same pattern. */
.lay-bookshelf-lectern { position: fixed; inset: 0; z-index: 40; pointer-events: none; }
/* everything the lectern actually mounts takes its presses back — the drawer,
   the ceremony and the five shelf books, which are siblings of the sheet and
   would otherwise render perfectly and refuse every tap */
.lay-bookshelf-lectern > * { pointer-events: auto; }

/* the room shows through, and the top chrome is left alone — the ~70px the
   phone nav occupies plus the safe area. It paints nothing and takes nothing:
   the band exists to name the line, not to intercept it. */
.lay-bookshelf-lectern .lay-bookshelf-scrim {
  position: absolute;
  top: calc(env(safe-area-inset-top, 0px) + 70px);
  left: 0; right: 0; bottom: 0;
  background: transparent;
  pointer-events: none;
}

.lay-bookshelf-lectern .lay-sheet {
  position: fixed; left: 0; right: 0; bottom: 0;
  pointer-events: auto;
  display: flex; flex-direction: column;
  background: var(--parchment);
  border-top: 1px solid var(--gold);
  border-radius: 14px 14px 0 0;
  box-shadow: 0 -14px 34px var(--shadow);
  transition: top 180ms ease;
  max-height: 100dvh;
}
/* THE CLAMP OF FINDING 1, and the one "!important" on this surface. The shared
   Sheet writes its top as an INLINE style, and nothing but this beats an inline
   style; the value is the clamped one computed in the component, so no stop can
   resolve to a lectern under MIN_WORKABLE_LECTERN. */
.lay-bookshelf-lectern .lay-sheet { top: var(--lay-lectern-top) !important; }
.lay-bookshelf-lectern .lay-grip {
  width: 100%; min-height: 44px; border: 0; background: none;
  display: flex; align-items: center; justify-content: center; flex: 0 0 auto;
}
.lay-bookshelf-lectern .lay-grip-bar {
  width: 46px; height: 5px; border-radius: 3px; background: var(--border);
}
.lay-bookshelf-lectern .lay-sheet-body {
  display: flex; flex-direction: column; min-height: 0; overflow: hidden; flex: 1 1 auto;
}

/* FINDING 2, AS A RULE RATHER THAN AN ASSERTION. Three of this surface's
   writing seams belong to other components; a selector reaches them, a promise
   does not. */
.lay-bookshelf-lectern input,
.lay-bookshelf-lectern textarea,
.lay-bookshelf-lectern select { font-size: 16px; }
/* THE 44pt FLOOR IS SCOPED TO THE ROOT, not to the body, for the same reason
   the 16px rule is: five of the shelf's other books are unmodified desktop
   overlays mounted OUTSIDE ".lay-bookshelf-body", so a floor written for the
   body reached not one control inside them. */
.lay-bookshelf-lectern button { min-height: 44px; }

/* ── THE HEAD ─────────────────────────────────────────────────────────────── */
.lay-bookshelf-head {
  flex: 0 0 auto; padding: 0 12px 8px; border-bottom: 1px solid var(--border);
}
.lay-bookshelf-head-row {
  display: flex; align-items: center; justify-content: space-between; gap: 8px;
}
.lay-bookshelf-kicker {
  font-family: 'Cinzel', Georgia, serif; font-size: 12px; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--gold-bright);
}
.lay-bookshelf-back {
  min-height: 44px; padding: 0 12px; font-size: 15px;
  background: none; border: 1px solid var(--border); border-radius: 10px; color: var(--ink);
}
.lay-bookshelf-lectern .lay-close {
  min-width: 44px; min-height: 44px; font-size: 22px; line-height: 1;
  background: none; border: 1px solid var(--border); border-radius: 10px; color: var(--ink);
  flex: 0 0 auto;
}
.lay-bookshelf-title {
  margin: 0; font-family: 'Cinzel', Georgia, serif; font-weight: 400;
  font-size: 18px; line-height: 1.25; color: var(--ink);
}
.lay-bookshelf-standing { margin: 2px 0 0; font-size: 13px; color: var(--ink-dim); line-height: 1.3; }
.lay-bookshelf-progress {
  margin-top: 6px; height: 4px; border-radius: 2px; background: var(--parchment-raised);
  overflow: hidden;
}
.lay-bookshelf-progress > span { display: block; height: 100%; }

/* ── THE ONE SCROLLER ─────────────────────────────────────────────────────── */
.lay-bookshelf-body {
  flex: 1 1 auto; min-height: 0;
  overflow-y: auto; overflow-x: hidden; -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  padding: 10px 12px 14px;
  color: var(--ink);
}

/* ── THE SHELF FACE ───────────────────────────────────────────────────────── */
.lay-bookshelf-sorts { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
.lay-bookshelf-sort {
  min-height: 44px; padding: 0 12px; font-size: 14px;
  border: 1px solid var(--border); border-radius: 999px;
  background: none; color: var(--ink-dim);
}
.lay-bookshelf-sort.on { color: var(--ink); border-color: var(--ink-dim); background: var(--parchment-raised); }
.lay-bookshelf-legend-toggle {
  width: 100%; min-height: 44px; text-align: left; padding: 0 4px;
  background: none; border: 0; color: var(--ink-dim); font-size: 14px;
}
.lay-bookshelf-legend {
  border-left: 2px solid var(--border); padding: 4px 0 4px 10px; margin-bottom: 8px;
  font-size: 14px; line-height: 1.45; color: var(--ink-dim);
}
.lay-bookshelf-legend p { margin: 0 0 6px; }

.lay-bookshelf-band {
  margin: 12px 0 6px; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--ink-dim); border-top: 1px solid var(--border); padding-top: 8px;
}
.lay-bookshelf-stack { list-style: none; margin: 0; padding: 0; }
.lay-bookshelf-stack li { margin-bottom: 8px; }
.lay-bookshelf-volume {
  display: flex; align-items: stretch; gap: 10px; width: 100%; min-height: 56px;
  padding: 8px 10px; text-align: left;
  background: var(--parchment-raised); border: 1px solid var(--border);
  border-left: 3px solid var(--accent, var(--border)); border-radius: 10px;
  color: var(--ink); font: inherit;
}
.lay-bookshelf-ribbon { flex: 0 0 4px; border-radius: 2px; }
.lay-bookshelf-ribbon.ribbon-gold { background: var(--gold-bright); }
.lay-bookshelf-ribbon.ribbon-crimson { background: #8c3a34; }
.lay-bookshelf-ribbon.ribbon-linen { background: var(--border); }
.lay-bookshelf-volume-text { display: flex; flex-direction: column; justify-content: center; gap: 3px; min-width: 0; }
.lay-bookshelf-volume-title { font-size: 15px; line-height: 1.3; }
.lay-bookshelf-volume-sub { font-size: 13px; color: var(--ink-dim); }
.lay-bookshelf-clasp { color: var(--gold-bright); }
.lay-bookshelf-volume.size-tall { min-height: 68px; }
.lay-bookshelf-others { margin-top: 6px; }

/* ── THE WRITE FACE ───────────────────────────────────────────────────────── */
.lay-bookshelf-write-title {
  margin: 0 0 6px; font-family: 'Cinzel', Georgia, serif; font-weight: 400; font-size: 18px;
}
.lay-bookshelf-write-line { margin: 0 0 10px; font-size: 15px; line-height: 1.5; color: var(--ink-dim); }

/* ── THE CONTENTS FACE ────────────────────────────────────────────────────── */
.lay-bookshelf-offer-banner {
  margin: 0 0 10px; padding: 8px 10px; font-size: 14px; line-height: 1.45;
  border: 1px dashed var(--gold); border-radius: 10px; color: var(--ink);
}
.lay-bookshelf-chapters { list-style: none; margin: 0; padding: 0; }
.lay-bookshelf-chapter-row { display: flex; gap: 6px; margin-bottom: 8px; }
.lay-bookshelf-chapter {
  flex: 1 1 auto; display: flex; align-items: center; gap: 10px; min-width: 0;
  min-height: 56px; padding: 8px 10px; text-align: left;
  background: none; border: 1px solid var(--border); border-radius: 10px;
  color: var(--ink); font: inherit; font-size: 15px;
}
.lay-bookshelf-chapter:disabled { color: var(--ink-dim); opacity: 0.75; }
.lay-bookshelf-chapter.chapter-complete { border-color: #4a5f3a; }
.lay-bookshelf-chapter.chapter-active { border-color: var(--gold); }
.lay-bookshelf-numeral { flex: 0 0 auto; color: var(--ink-dim); font-family: 'Cinzel', Georgia, serif; }
.lay-bookshelf-chapter-text { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 5px; }
.lay-bookshelf-chapter-title { line-height: 1.3; }
.lay-bookshelf-chapter-bar { display: block; height: 3px; background: var(--parchment-raised); border-radius: 2px; }
.lay-bookshelf-chapter-bar > span { display: block; height: 100%; background: var(--gold); border-radius: 2px; }
.lay-bookshelf-folio { flex: 0 0 auto; font-size: 13px; color: var(--ink-dim); }
.lay-bookshelf-quill {
  flex: 0 0 44px; min-width: 44px; min-height: 56px;
  background: none; border: 1px solid var(--border); border-radius: 10px;
  color: var(--ink-dim); font-size: 17px;
}
.lay-bookshelf-colophon { margin-top: 14px; padding-top: 10px; border-top: 1px solid var(--border); }
.lay-bookshelf-colophon p { margin: 0 0 8px; font-size: 14px; line-height: 1.5; color: var(--ink-dim); }
.lay-bookshelf-hint { color: var(--ink); }
.lay-bookshelf-xp { color: var(--gold); }

/* ── THE ROAD FACE ────────────────────────────────────────────────────────── */
.lay-bookshelf-road { list-style: none; margin: 0; padding: 0; }
.lay-bookshelf-way { position: relative; padding-left: 26px; }
/* the inked road itself: one line down the left, drawn between the waystones */
.lay-bookshelf-way::before {
  content: ''; position: absolute; left: 11px; top: 0; bottom: 0;
  border-left: 2px dashed var(--border);
}
.lay-bookshelf-way:first-child::before { top: 28px; }
.lay-bookshelf-way:last-of-type::before { bottom: auto; height: 28px; }
.lay-bookshelf-way-complete::before { border-left-style: solid; border-left-color: var(--gold); }
.lay-bookshelf-way-face {
  position: relative; display: flex; align-items: center; gap: 10px;
  width: 100%; min-height: 56px; padding: 8px 10px 8px 0; text-align: left;
  background: none; border: 0; color: var(--ink); font: inherit;
}
.lay-bookshelf-way-mark {
  position: absolute; left: -26px; width: 22px; text-align: center;
  color: var(--ink-dim); font-size: 15px;
}
.lay-bookshelf-way-complete .lay-bookshelf-way-mark { color: var(--gold-bright); }
.lay-bookshelf-way-active .lay-bookshelf-way-mark { color: var(--gold); }
.lay-bookshelf-way-text { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
.lay-bookshelf-way-title { font-size: 15px; line-height: 1.3; }
.lay-bookshelf-way-date { font-size: 13px; color: var(--ink-dim); }
.lay-bookshelf-hard { color: var(--gold-bright); }
.lay-bookshelf-road-foot {
  margin-top: 10px; text-align: center; font-size: 13px; color: var(--ink-dim); font-style: italic;
}

/* ── THE BOARD FACE ───────────────────────────────────────────────────────── */
.lay-bookshelf-board { display: flex; flex-direction: column; gap: 14px; }
.lay-bookshelf-col-head {
  width: 100%; min-height: 44px; text-align: left; padding: 6px 10px;
  background: var(--parchment-raised); border: 1px solid var(--border);
  border-left: 3px solid var(--accent, var(--border)); border-radius: 10px;
  color: var(--ink); font: inherit; font-size: 15px;
}
.lay-bookshelf-lane { margin-top: 8px; }
.lay-bookshelf-lane-label {
  font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--ink-dim); margin-bottom: 4px;
}
.lay-bookshelf-card-wrap { margin-bottom: 6px; }
.lay-bookshelf-card {
  width: 100%; min-height: 48px; text-align: left; padding: 8px 10px;
  background: none; border: 1px solid var(--border);
  border-left: 3px solid var(--accent, var(--border)); border-radius: 8px;
  color: var(--ink); font: inherit; font-size: 14px; line-height: 1.35;
}
.lay-bookshelf-card[aria-expanded='true'] { border-color: var(--ink-dim); background: var(--parchment-raised); }
.lay-bookshelf-card-moves { display: flex; flex-wrap: wrap; gap: 6px; padding: 6px 0 2px 10px; }
.lay-bookshelf-move {
  flex: 1 1 auto; min-width: 44%; min-height: 44px; padding: 0 10px;
  background: none; border: 1px solid var(--border); border-radius: 8px;
  color: var(--ink); font: inherit; font-size: 14px;
}

/* ── THE ENDPAPERS ────────────────────────────────────────────────────────── */
.lay-bookshelf-ends { display: flex; flex-direction: column; }
.lay-bookshelf-wide {
  width: 100%; min-height: 52px; margin-bottom: 6px; padding: 8px 12px;
  background: var(--parchment-raised); border: 1px solid var(--border); border-radius: 10px;
  color: var(--ink); font: inherit; font-size: 15px;
}
.lay-bookshelf-wide:disabled { opacity: 0.45; }
.lay-bookshelf-danger { border-color: #6b3a2c; color: #e0a08c; }
.lay-bookshelf-seal { border-color: var(--gold); color: var(--gold-bright); }
.lay-bookshelf-said { margin: 0 0 10px; font-size: 13px; line-height: 1.45; color: var(--ink-dim); }
.lay-bookshelf-verbs { margin-top: 6px; }
.lay-bookshelf-strike { display: flex; flex-direction: column; }
.lay-bookshelf-field {
  width: 100%; min-height: 48px; margin-bottom: 8px; padding: 8px 10px;
  font-size: 16px; border: 1px solid var(--gold); border-radius: 10px;
  background: var(--parchment); color: var(--ink);
}
.lay-bookshelf-papers { margin-top: 12px; padding-top: 10px; border-top: 1px solid var(--border); }

/* ── THE SILL ─────────────────────────────────────────────────────────────── */
.lay-bookshelf-sill {
  flex: 0 0 auto; border-top: 1px solid var(--gold); background: var(--parchment-raised);
  padding: 8px 12px calc(8px + env(safe-area-inset-bottom, 0px));
}
.lay-bookshelf-lectern .lay-rail-acts { display: flex; flex-wrap: wrap; gap: 8px; align-items: stretch; }
.lay-bookshelf-lectern .lay-act {
  flex: 1 1 0; min-width: 78px; min-height: 52px;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
  padding: 6px 8px; border: 1px solid var(--border); border-radius: 10px;
  background: var(--parchment); color: var(--ink); font: inherit;
}
.lay-bookshelf-lectern .lay-rail-dense .lay-act { min-height: 48px; }
.lay-bookshelf-lectern .lay-act-word { font-size: 14px; text-align: center; line-height: 1.2; }
.lay-bookshelf-lectern .lay-act-note { font-size: 11px; color: var(--ink-dim); line-height: 1.2; text-align: center; }
/* THE ONE AFFORDANCE COLOUR, spent on the primary act and nothing else — and
   it takes the whole first row, so it is unmistakably first (§14). */
.lay-bookshelf-lectern .lay-act-primary {
  flex: 1 1 100%; border-color: var(--gold); color: var(--gold-bright);
}
/* "you are here" is a state, not an affordance, so it borrows no gold */
.lay-bookshelf-lectern .lay-act-here {
  border-color: var(--ink-dim); background: var(--parchment-raised); color: var(--ink);
}
.lay-bookshelf-lectern .lay-act:disabled { opacity: 0.45; }
.lay-bookshelf-lectern .lay-rail-note { margin: 6px 0 0; font-size: 12px; color: var(--ink-dim); line-height: 1.35; }
.lay-bookshelf-lectern .lay-nothing {
  margin: 20px 4px; color: var(--ink-dim); font-size: 15px; line-height: 1.5; text-align: center;
}

/* ── THE CEREMONY ─────────────────────────────────────────────────────────── */
/* it is a descendant of the root, so it must take its presses back explicitly
   or the one ceremony this card must keep renders perfectly and cannot be
   pressed — which is worse than the drift it was fixed alongside */
.lay-bookshelf-ceremony {
  position: fixed; inset: 0; z-index: 50; display: flex; align-items: flex-end;
  background: rgba(0, 0, 0, 0.55);
  pointer-events: auto;
}
.lay-bookshelf-ceremony-card {
  width: 100%; max-height: 90dvh; overflow-y: auto;
  padding: 16px 12px calc(16px + env(safe-area-inset-bottom, 0px));
  background: var(--parchment); border-top: 1px solid var(--gold); border-radius: 14px 14px 0 0;
}

@media (prefers-reduced-motion: reduce) {
  .lay-bookshelf-lectern .lay-sheet { transition: none; }
}
`;export{zo as default};
