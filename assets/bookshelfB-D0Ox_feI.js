import{r as i,ak as M,aj as Ge,z as Qe,E as eo,am as ge,ap as ve,aL as oo,aM as ao,ao as Se,j as e,F as so,C as to,az as lo,aA as ro,aB as io,aC as no,A as ae,R as j,at as ho,au as we,aQ as co,aD as je,ar as ze,aP as Fe,as as te,an as Re,i as R,N as Te,aR as po,aS as fo,aT as bo,aU as xo,aF as yo,av as mo,a as ko,aw as uo,aq as Ne,ax as go,ay as vo,aK as wo,aG as jo,aI as No,aN as Ce,aO as Co}from"./index-CYLJyUTU.js";const Eo=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV"],F="__the-shelf__",Ee="__a-book-to-be-written__",Oo=310,Oe=[{key:"todo",label:"To do"},{key:"waiting",label:"In other hands"},{key:"done",label:"Sealed"}],Ao={novice:1,intermediate:2,expert:3,master:4};function Io(s){return s.quests.reduce((t,r)=>t+r.tasks.length,0)}function Ae(s){return s.quests.reduce((t,r)=>t+r.tasks.filter(n=>n.status!=="done"&&!R(n)).length,0)}function le(s){const t=Io(s);return t>=25?"tall":t>=10?"mid":"short"}function re(s){return Math.max(1,...s.quests.map(t=>Ao[t.difficulty]??1))}function So(s){const t=re(s);return t>=3?"gold":t===2?"crimson":"linen"}const Ie={tall:3,mid:2,short:1},se={shelf:{label:"Shelf",fn:(s,t)=>(s.order??je)-(t.order??je)},alpha:{label:"A–Z",fn:(s,t)=>s.title.localeCompare(t.title)},difficulty:{label:"Difficulty",fn:(s,t)=>re(t)-re(s)},left:{label:"Tasks left",fn:(s,t)=>Ae(t)-Ae(s)},tier:{label:"Stature",fn:(s,t)=>Ie[le(t)]-Ie[le(s)]}};function zo(s){if(s.quarter)return`sworn to ${s.quarter} at the Muster`;const t=s.quests.flatMap(n=>n.tasks.filter(c=>c.due&&!R(c))).sort((n,c)=>{const h=b=>b.boss&&b.hardDue?0:b.hardDue?1:b.boss?2:3;return h(n)-h(c)||(n.due<c.due?-1:1)})[0];return t?`"${t.title.length>60?`${t.title.slice(0,58)}…`:t.title}" — ${t.hardDue?"⚑ ":""}dated ${t.due}`:null}function Fo(s,t){if(ze(s))return`Closed ${String(s.sealedAt).slice(0,10)} — ${Fe(s)}`;if(te(s))return`Planned since ${String(s.vaultedAt).slice(0,10)} — out of your days until you begin it.`;if(M(s))return"Offered — not yours until you take it.";const r=Re(s,t),n=Se(s);return`${r.done} of ${r.total} chapters closed${n.total?` · ${n.percent}%`:""}`}function Ro({book:s,statuses:t,onSelectQuest:r,onMoveTask:n}){const[c,h]=i.useState(null),b=s.quests.filter(d=>t.get(d.id)!=="locked"&&d.tasks.some(p=>!R(p))).sort((d,p)=>{const x=u=>u.tasks.some(f=>f.status!=="done"&&!R(f));return(x(p)?1:0)-(x(d)?1:0)});return b.length===0?e.jsx(Te,{children:"No chapters carry tasks yet — the board waits for work."}):e.jsx("div",{className:"lay-bookshelf-board",children:b.map(d=>e.jsxs("section",{className:"lay-bookshelf-col",children:[e.jsx("button",{type:"button",className:"lay-bookshelf-col-head",style:{"--accent":s.accent},onClick:()=>r==null?void 0:r(d.id),children:d.title}),Oe.map(p=>{const x=d.tasks.filter(f=>f.status===p.key&&!R(f)),u=p.key==="done"?x.slice(0,5):x;return e.jsxs("div",{className:"lay-bookshelf-lane",children:[e.jsxs("div",{className:"lay-bookshelf-lane-label",children:[p.label," · ",x.length]}),u.map(f=>{const k=c===f.id;return e.jsxs("div",{className:"lay-bookshelf-card-wrap",children:[e.jsx("button",{type:"button",className:"lay-bookshelf-card",style:{"--accent":s.accent},"aria-expanded":k,onClick:()=>h(k?null:f.id),children:f.title}),k&&e.jsxs("div",{className:"lay-bookshelf-card-moves",children:[Oe.filter(m=>m.key!==p.key).map(m=>e.jsxs("button",{type:"button",className:"lay-bookshelf-move",onClick:()=>{n==null||n(d.id,f.id,m.key),h(null)},children:["→ ",m.label]},m.key)),e.jsx("button",{type:"button",className:"lay-bookshelf-move",onClick:()=>r==null?void 0:r(d.id),children:"Open the chapter"})]})]},f.id)}),p.key==="done"&&x.length>5&&e.jsxs("div",{className:"lay-bookshelf-lane-label",children:["+ ",x.length-5," more sealed"]})]},p.key)})]},d.id))})}function $o({sheetYields:s=!1,epics:t=[],statuses:r=new Map,openTo:n,onSelectQuest:c,onGoToRoundTable:h,onBind:b,onTakeOffering:d,offerPlacement:p,onAddQuest:x,onAddEpic:u,onMoveTask:f,onEditQuest:k,onEditEpic:m,onVault:V,onWake:W,onUnseal:K,onStrike:T,onSetWaits:Be,today:$e=null,onClose:I}){const[B,Le]=i.useState("shelf"),g=i.useMemo(()=>{var a;return[...t].sort(((a=se[B])==null?void 0:a.fn)??se.shelf.fn)},[t,B]),$=i.useMemo(()=>g.filter(M),[g]),L=i.useMemo(()=>Ge(g),[g]),ie=p==="lead"||p==="B",[P,N]=i.useState(()=>n&&g.some(a=>a.id===n)?n:F),o=i.useMemo(()=>g.find(a=>a.id===P)??null,[g,P]),v=P===Ee?"write":o?"volume":"shelf",[y,X]=i.useState("toc");i.useEffect(()=>{X("toc")},[P]);const[C,S]=i.useState(null),[Y,Z]=i.useState(null),[ne,_]=i.useState(""),[de,E]=i.useState(null),[U,Pe]=i.useState(!1),[J,he]=i.useState(!1),[q,ce]=i.useState(!1),[G,pe]=i.useState(!1),[Q,fe]=i.useState(!1),[be,_e]=i.useState("rest"),[xe]=Qe(),He=Math.min(eo(be,xe),Math.max(0,xe.height-Oo));i.useEffect(()=>{const a=l=>{if(l.key==="Escape"){if(C){S(null);return}J||q||G||Q||Y||I==null||I()}};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[I,C,J,q,G,Q,Y]);const O=o?M(o):!1,ee=o?ge(o):!1,oe=o?ve(o):!1,ye=o?oo(o,{canStrike:!!T,isStanding:ao(o),isOffered:O}):{show:!1,strike:!1},me={toc:"The chapters in the order the book tells them. Tap one to open it.",road:"What must be sealed first, on the calendar. Tap a title to open it, the ✒ to say what it waits on.",register:"What this campaign still owes, grouped by kind.",board:"Tap a card once to see where it can go, and again to move it. A card never leaves its own chapter.",ends:"The volume's own paperwork: what it knows, what it has not decided yet, and how it ends."},De=()=>e.jsxs(ae,{note:"Tap a volume to open it. Flick the grip down and the Study is still behind all of this.",children:[e.jsx(j,{tone:"primary",onPress:()=>N(Ee),note:L.length===0?"your first":"the next volume",title:"Begin a volume that is not written yet",children:"🪶 A book to be written"}),e.jsx(j,{onPress:()=>h==null?void 0:h(),note:"argue it first",children:"⚔ The War Room"})]}),Me=()=>e.jsxs(ae,{note:"What a book holds is not decided alone — the seats argue what it demands and whether now is its time.",children:[e.jsx(j,{tone:"primary",onPress:()=>h==null?void 0:h(),note:"take the idea to the table",children:"⚔ The War Room"}),e.jsx(j,{onPress:()=>N(F),note:"back to the books",children:"◂ The shelf"})]}),Ve=()=>{const a=O?e.jsx(j,{tone:"primary",onPress:()=>d==null?void 0:d(o.id),disabled:!d,note:"it becomes yours; nothing was scheduled until now",children:"✦ Take this road"}):!ee&&oe?e.jsx(j,{tone:"primary",onPress:()=>S(o),note:"the goal wears a date and tells its story",children:"⚭ Perform the Binding"}):null,l=O?"This road is not in your realm yet. Read it, then take it — or leave it on the shelf.":!ee&&oe?"The realm never binds for you. The ceremony is yours to perform.":me[y];return e.jsxs(ae,{note:l,dense:!a,children:[a,e.jsx(j,{tone:y==="ends"?"here":"plain",onPress:()=>X("ends"),title:me.ends,children:"Endpapers"})]})},We=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-sorts",role:"group","aria-label":"Sort the shelf",children:Object.entries(se).map(([a,l])=>e.jsx("button",{type:"button",className:`lay-bookshelf-sort${B===a?" on":""}`,"aria-pressed":B===a,onClick:()=>Le(a),children:l.label},a))}),e.jsxs("button",{type:"button",className:"lay-bookshelf-legend-toggle","aria-expanded":U,onClick:()=>Pe(a=>!a),children:[U?"▾":"▸"," How to read the shelf"]}),U&&e.jsxs("div",{className:"lay-bookshelf-legend",children:[e.jsxs("p",{children:["A book's ",e.jsx("i",{children:"height"})," is the work inside: tall volumes hold 25+ actions, middling 10+, slim ones fewer."]}),e.jsxs("p",{children:["Its ",e.jsx("i",{children:"ribbon"})," is the difficulty: linen for novice, crimson for the adept, gold thread for master work."]}),e.jsx("p",{children:"Its wear is its use — heavy, handled books age."}),e.jsxs("p",{children:[e.jsx("b",{children:"The binding ceremony."})," A scroll is a dream still — undated, or untold. When its goal wears a real date ",e.jsx("i",{children:"and"})," the book tells its story, a golden clasp appears. The binding itself is yours to perform; the realm never binds for you."]})]}),ie&&ke(),L.length===0?e.jsx(Te,{children:"No volumes stand here yet. A campaign is a life project with chapters — begin one with the quill below, or take the idea to the War Room first."}):e.jsx("ul",{className:"lay-bookshelf-stack",children:L.map(ue)}),!ie&&ke(),e.jsxs("div",{className:"lay-bookshelf-others",children:[e.jsx("div",{className:"lay-bookshelf-band",children:"the other books on this shelf"}),e.jsx(po,{onOpen:()=>fe(!0)}),e.jsx(fo,{onOpen:()=>he(!0)}),e.jsx(bo,{onOpen:()=>ce(!0)}),e.jsx(xo,{onOpen:()=>pe(!0)})]})]}),ke=()=>$.length===0?null:e.jsxs("div",{className:"lay-bookshelf-offers",children:[e.jsx("div",{className:"lay-bookshelf-band",children:"offered — yours if you take them"}),e.jsx("ul",{className:"lay-bookshelf-stack",children:$.map(ue)})]});function ue(a){const l=Re(a,r),H=!ge(a)&&ve(a),A=M(a);return e.jsx("li",{children:e.jsxs("button",{type:"button",className:`lay-bookshelf-volume size-${le(a)}`,style:{"--accent":a.accent},onClick:()=>N(a.id),children:[e.jsx("span",{className:`lay-bookshelf-ribbon ribbon-${So(a)}`,"aria-hidden":"true"}),e.jsxs("span",{className:"lay-bookshelf-volume-text",children:[e.jsxs("span",{className:"lay-bookshelf-volume-title",children:[A&&e.jsx("span",{"aria-hidden":"true",children:"✦ "}),a.title,H&&e.jsxs("span",{className:"lay-bookshelf-clasp",title:"Ready for the binding",children:[" ","⚭"]})]}),e.jsx("span",{className:"lay-bookshelf-volume-sub",children:A?"offered — not yours yet":te(a)?`planned since ${String(a.vaultedAt).slice(0,10)}`:`${l.done}/${l.total} chapters closed`})]})]})},a.id)}const Ke=()=>e.jsxs("div",{className:"lay-bookshelf-write",children:[e.jsx("h3",{className:"lay-bookshelf-write-title",children:"A Book to Be Written"}),e.jsx("p",{className:"lay-bookshelf-write-line",children:"Life is not over. There is always another volume."}),e.jsxs("p",{className:"lay-bookshelf-write-line",children:["What this book holds is not decided alone. Bring the idea to the War Room — the seats will argue what it demands, what it trains, and whether now is its time."," ",u?"Or take the quill and write it plainly.":"Or voice the campaign to your squire — a spoken volume is written whole."]}),u&&e.jsx(yo,{onAdd:a=>{u(a),N(F)}})]}),Xe=()=>{const a=wo(o);return e.jsxs(e.Fragment,{children:[O&&e.jsx("p",{className:"lay-bookshelf-offer-banner",children:"This road is on the offered shelf. It is not in your realm yet — nothing in it is scheduled, counted, or on your list until you take it."}),e.jsx("ol",{className:"lay-bookshelf-chapters",children:o.quests.map((l,H)=>{const A=r.get(l.id)??l.status,z=A==="locked",Je=A==="complete",D=jo(l);return de===l.id?e.jsx("li",{children:e.jsx(Ne,{value:l.title,onSave:qe=>{k==null||k(l.id,qe),E(null)},onCancel:()=>E(null)})},l.id):e.jsxs("li",{className:"lay-bookshelf-chapter-row",children:[e.jsxs("button",{type:"button",className:`lay-bookshelf-chapter chapter-${A}`,onClick:()=>c==null?void 0:c(l.id),disabled:z,children:[e.jsxs("span",{className:"lay-bookshelf-numeral",children:[Eo[H]??H+1,"."]}),e.jsxs("span",{className:"lay-bookshelf-chapter-text",children:[e.jsx("span",{className:"lay-bookshelf-chapter-title",children:z?"A Sealed Chapter":l.title}),!z&&D.total>0&&e.jsx("span",{className:"lay-bookshelf-chapter-bar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${D.percent}%`}})})]}),e.jsx("span",{className:"lay-bookshelf-folio",children:Je?"✓":z?"🔒":`${D.done}/${D.total}`})]}),k&&!z&&e.jsx("button",{type:"button",className:"lay-bookshelf-quill","aria-label":`Rename "${l.title}"`,title:"Rename this chapter",onClick:()=>E(l.id),children:"✒"})]},l.id)})}),x&&e.jsx(No,{onAdd:l=>x(o.id,l)}),e.jsxs("div",{className:"lay-bookshelf-colophon",children:[e.jsx("p",{children:o.description}),!O&&!ee&&!oe&&e.jsxs("p",{className:"lay-bookshelf-hint",children:[!Ce(o)&&!Co(o)?"A scroll still — its goal wears no date and its story is untold. Give the boss a real deadline and the book a real description, and the clasp will appear.":Ce(o)?"A scroll still — its story is untold. Tell the book what it is for and what done means, and the clasp will appear.":"A scroll still — give the goal a real date (a sworn quarter, a dated boss, a hard deadline), and the clasp will appear."," ","Or take the whole plan to the table first — it may be worth binding, or worth setting down."]}),e.jsxs("p",{className:"lay-bookshelf-xp",children:[a.earned,"/",a.potential," XP"]})]})]})},Ye=()=>e.jsxs("div",{className:"lay-bookshelf-ends",children:[de==="__volume__"?e.jsx(Ne,{value:o.title,subtitle:o.tagline??"",subtitleLabel:"the volume's one line…",onSave:a=>{m==null||m(o.id,a),E(null)},onCancel:()=>E(null)}):m&&e.jsx("button",{type:"button",className:"lay-bookshelf-wide",onClick:()=>E("__volume__"),children:"✒ Rename this volume"}),e.jsx("button",{type:"button",className:"lay-bookshelf-wide",onClick:()=>h==null?void 0:h(o.id),children:"⚔ Review this plan with the War Room"}),e.jsx("p",{className:"lay-bookshelf-said",children:"The seats read what is still open — finished steps are history and are never re-opened."}),ye.show&&e.jsxs("div",{className:"lay-bookshelf-verbs",children:[e.jsx("div",{className:"lay-bookshelf-band",children:"how this volume ends"}),ze(o)?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"lay-bookshelf-said",children:["Closed ",String(o.sealedAt).slice(0,10)," — ",Fe(o)]}),e.jsx("button",{type:"button",className:"lay-bookshelf-wide",onClick:()=>K==null?void 0:K(o.id),children:"Reopen it"}),e.jsx("p",{className:"lay-bookshelf-said",children:"The ending is forgotten and the road returns to your days — use this if you closed it by mistake."})]}):te(o)?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"lay-bookshelf-said",children:["Planned since ",String(o.vaultedAt).slice(0,10)," — out of your days until you begin it."]}),e.jsx("button",{type:"button",className:"lay-bookshelf-wide",onClick:()=>W==null?void 0:W(o.id),children:"Begin it"})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"lay-bookshelf-wide",onClick:()=>V==null?void 0:V(o.id),children:"Mark it planned"}),e.jsx("p",{className:"lay-bookshelf-said",children:"Not yet — it leaves your days and waits with the plans until you are ready to walk it. Reversible."})]}),ye.strike&&(Y===o.id?e.jsxs("div",{className:"lay-bookshelf-strike",children:[e.jsxs("label",{className:"lay-bookshelf-said",htmlFor:"lay-bookshelf-strike-field",children:["This cannot be undone. Type ",e.jsx("strong",{children:o.title})," to strike it:"]}),e.jsx("input",{id:"lay-bookshelf-strike-field",className:"lay-bookshelf-field",value:ne,onChange:a=>_(a.target.value),placeholder:o.title}),e.jsx("button",{type:"button",className:"lay-bookshelf-wide lay-bookshelf-danger",disabled:ne.trim()!==o.title,onClick:()=>{T==null||T(o.id),Z(null),_(""),N(F)},children:"Strike it"}),e.jsx("button",{type:"button",className:"lay-bookshelf-wide",onClick:()=>{Z(null),_("")},children:"Keep it"})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"lay-bookshelf-wide lay-bookshelf-danger",onClick:()=>{Z(o.id),_("")},children:"Strike it"}),e.jsx("p",{className:"lay-bookshelf-said",children:"Remove it entirely. There is no undo — take a copy from the Saddlebag first if you want one."})]}))]}),!O&&e.jsxs("div",{className:"lay-bookshelf-papers",children:[e.jsx(go,{epic:o,scope:"epic"}),e.jsx(vo,{scope:"epic",targetId:o.id,targetTitle:o.title})]})]}),Ze=()=>y==="road"?e.jsx("div",{className:"book-leaf",children:e.jsx(mo,{book:o,epics:t,statuses:r,today:$e??ko(),onSelectQuest:c,onSetWaits:Be})}):y==="board"?e.jsx(Ro,{book:o,statuses:r,onSelectQuest:c,onMoveTask:f}):y==="register"?e.jsx("div",{className:"book-leaf",children:e.jsx(uo,{book:o})}):y==="ends"?Ye():Xe(),Ue=()=>v==="shelf"?We():v==="write"?Ke():e.jsxs(e.Fragment,{children:[e.jsx(ho,{page:we(y)?y:null,onChoose:X,fill:!0,dark:!0}),we(y)&&y!=="toc"&&e.jsx("div",{className:"lay-bookshelf-viewhead",children:co(y)}),Ze()]}),w=o?Se(o):null;return e.jsxs("div",{className:"lay-bookshelf-lectern",style:{"--lay-lectern-top":`${He}px`},children:[e.jsx("style",{children:To}),e.jsx("div",{className:"lay-bookshelf-scrim","aria-hidden":"true"}),e.jsxs(so,{stop:be,onStop:_e,yielded:s,label:"The Bookshelf",children:[e.jsxs("div",{className:"lay-bookshelf-head",children:[e.jsxs("div",{className:"lay-bookshelf-head-row",children:[v==="shelf"?e.jsx("span",{className:"lay-bookshelf-kicker",children:"The Bookshelf"}):e.jsx("button",{type:"button",className:"lay-bookshelf-back",onClick:()=>N(F),children:"◂ The shelf"}),e.jsx(to,{onClose:I,name:"the Bookshelf"})]}),e.jsxs("div",{className:"lay-bookshelf-head-name",children:[e.jsx("h2",{className:"lay-bookshelf-title",children:v==="write"?"A Book to Be Written":o?o.title:"Your volumes"}),e.jsx("p",{className:"lay-bookshelf-standing",children:v==="write"?"Nothing is written until you write it.":o?Fo(o,r):`${L.length} underway${$.length?` · ${$.length} offered`:""}`}),o&&(w==null?void 0:w.total)>0&&e.jsx("div",{className:"lay-bookshelf-progress",role:"progressbar","aria-valuenow":w.percent,"aria-valuemin":0,"aria-valuemax":100,"aria-label":`${w.done} of ${w.total} steps done across the volume`,children:e.jsx("span",{style:{width:`${w.percent}%`,background:o.accent}})})]})]}),e.jsx("div",{className:"lay-bookshelf-body",children:Ue()}),e.jsx("div",{className:"lay-bookshelf-sill",children:v==="shelf"?De():v==="write"?Me():Ve()})]}),C&&e.jsx("div",{className:"lay-bookshelf-ceremony",onClick:()=>S(null),children:e.jsxs("div",{className:"lay-bookshelf-ceremony-card",onClick:a=>a.stopPropagation(),children:[e.jsx("div",{className:"lay-bookshelf-kicker",children:"The Binding Ceremony"}),e.jsx("h3",{className:"lay-bookshelf-title",children:C.title}),e.jsxs("p",{className:"lay-bookshelf-said",children:["The goal wears a date: ",zo(C)??"a dated path exists",". And its story is told — the book knows what it is for. Bind this scroll and it takes its place among the books: sealed, shelved, and never silently demoted."]}),e.jsx("button",{type:"button",className:"lay-bookshelf-wide lay-bookshelf-seal",onClick:()=>{b==null||b(C.id),S(null)},children:"⚭ Bind the volume"}),e.jsx("button",{type:"button",className:"lay-bookshelf-wide",onClick:()=>S(null),children:"Not yet"})]})}),J&&e.jsx(lo,{onClose:()=>he(!1)}),q&&e.jsx(ro,{onClose:()=>ce(!1)}),G&&e.jsx(io,{onClose:()=>pe(!1)}),Q&&e.jsx(no,{onClose:()=>fe(!1)})]})}const To=`
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

/* ── THE BAR'S HEADING (B106) — the desk's line under the bar, for the views
   that are not this lectern's own contents */
.lay-bookshelf-viewhead { margin: 0 0 10px; font-size: 13px; font-style: italic; color: var(--ink-dim); }

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
`;export{$o as default};
