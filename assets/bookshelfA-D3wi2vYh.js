import{r as m,aj as ne,ak as P,al as $e,am as Ie,an as he,ao as Be,j as e,R as L,ap as Z,m as Ee,C as Re,N as F,aq as we,ar as je,as as ve,at as Le,au as Pe,P as Fe,A as Me,av as He,aw as De,ax as We,ay as _e,az as de,aA as Ge,aB as Ve,aC as Xe,aD as Ke,i as I,aE as Ye,aF as qe,aG as Je,aH as Ue,aI as ce,aJ as Ze,aK as Qe}from"./index-BeKx-Ibw.js";const Ne=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV"],fe="__a-book-to-be-written__",U={shelf:{label:"Shelf order",fn:(a,l)=>(a.order??de)-(l.order??de)},alpha:{label:"A–Z",fn:(a,l)=>a.title.localeCompare(l.title)},difficulty:{label:"Difficulty",fn:(a,l)=>me(l)-me(a)},left:{label:"Tasks left",fn:(a,l)=>be(l)-be(a)},tier:{label:"Stature",fn:(a,l)=>pe[ye(l)]-pe[ye(a)]}},ea={novice:1,intermediate:2,expert:3,master:4},pe={tall:3,mid:2,short:1};function aa(a){return a.quests.reduce((l,b)=>l+b.tasks.length,0)}function be(a){return a.quests.reduce((l,b)=>l+b.tasks.filter(h=>h.status!=="done"&&!I(h)).length,0)}function ye(a){const l=aa(a);return l>=25?"tall":l>=10?"mid":"short"}function me(a){return Math.max(1,...a.quests.map(l=>ea[l.difficulty]??1))}function oa(a){let l=0;for(const b of String(a))l=(l*31+b.charCodeAt(0))%997;return l}function la(a){const l=a.tasks.filter(i=>!I(i)),b=l.filter(i=>i.hardDue&&i.due).map(i=>i.due).sort()[0];if(b)return{label:`⚑ ${b.slice(5)}`,hard:!0};const h=l.filter(i=>i.due&&i.status==="todo").map(i=>i.due).sort()[0];if(h)return{label:`due ${h.slice(5)}`,hard:!1};const c=l.filter(i=>i.scheduled&&i.status==="todo").map(i=>i.scheduled).sort();return c.length?{label:`~${c[c.length-1].slice(5)}`,hard:!1}:null}function sa(a){if(a.quarter)return`sworn to ${a.quarter} at the Muster`;const l=a.quests.flatMap(h=>h.tasks.filter(c=>c.due&&!I(c)).map(c=>c)).sort((h,c)=>{const i=f=>f.boss&&f.hardDue?0:f.hardDue?1:f.boss?2:3;return i(h)-i(c)||(h.due<c.due?-1:1)})[0];return l?`"${l.title.length>60?`${l.title.slice(0,58)}…`:l.title}" — ${l.hardDue?"⚑ ":""}dated ${l.due}`:null}const ue=[{key:"todo",label:"To do"},{key:"waiting",label:"In other hands"},{key:"done",label:"Sealed"}],ke=[{key:"chapters",word:"The chapters",gloss:"Every chapter of this volume, in order. Tap one to open it.",offering:!0},{key:"road",word:"The road",gloss:"The same chapters as a journey — waystones, and a seal where the road is won.",offering:!0},{key:"board",word:"The board",gloss:"Arrange a chapter’s steps: to do, in other hands, sealed.",offering:!0},{key:"brief",word:"The brief",gloss:"This campaign’s standing instructions — what your squire reads before it helps.",offering:!1},{key:"chats",word:"The chats",gloss:"File a conversation here before anyone has decided what it meant.",offering:!1},{key:"volume",word:"This volume",gloss:"What the book is for, what it has earned, and the verbs that end it.",offering:!1}];function ta({book:a,epics:l,statuses:b,titleEdit:h,setTitleEdit:c,onEditQuest:i,onSelectQuest:f,onAddQuest:y}){return a.quests.length===0?e.jsx(F,{children:"This volume holds no chapters yet. Take it to the War Room, or write the first chapter below."}):e.jsxs(e.Fragment,{children:[e.jsx("ol",{className:"lay-bookshelf-a-chapters",children:a.quests.map((p,d)=>{const t=b.get(p.id)??p.status,n=Ve(p),s=t==="locked",k=t==="complete";return h===p.id?e.jsx("li",{className:"lay-bookshelf-a-ch-row",children:e.jsx(we,{value:p.title,onSave:C=>{i==null||i(p.id,C),c(null)},onCancel:()=>c(null)})},p.id):e.jsxs("li",{className:"lay-bookshelf-a-ch-row",children:[e.jsxs("button",{type:"button",className:`lay-bookshelf-a-ch chapter-${t}`,onClick:()=>f(p.id),disabled:s,title:s?`A sealed chapter — it ${Xe(p,l,b)}`:`Open ${p.title}`,children:[e.jsxs("span",{className:"lay-bookshelf-a-numeral",children:[Ne[d]??d+1,"."]}),e.jsxs("span",{className:"lay-bookshelf-a-ch-words",children:[e.jsx("span",{className:"lay-bookshelf-a-ch-title",children:s?"A Sealed Chapter":p.title}),!s&&n.total>0&&e.jsx("span",{className:"lay-bookshelf-a-ch-bar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${n.percent}%`}})})]}),e.jsx("span",{className:"lay-bookshelf-a-folio",children:k?"✓":s?"🔒":`${n.done}/${n.total}`})]}),i&&!s&&e.jsx("button",{type:"button",className:"lay-bookshelf-a-ch-quill","aria-label":`Rename "${p.title}"`,title:"Rename this chapter, right here",onClick:()=>c(p.id),children:"✒"})]},p.id)})}),y&&e.jsx(Ke,{onAdd:p=>y(a.id,p)})]})}function ra({book:a,statuses:l,onSelectQuest:b}){const h=a.quests;if(h.length===0)return e.jsx(F,{children:"No chapters yet, so there is no road to walk."});const c=oa(a.id),i=84,f=h.length*i+70,y=h.map((d,t)=>({x:46+((c>>t%7)%13-6),y:46+t*i})),p=y.map((d,t)=>{if(t===0)return`M ${d.x} ${d.y}`;const n=y[t-1],s=(n.y+d.y)/2;return`C ${n.x} ${s}, ${d.x} ${s}, ${d.x} ${d.y}`}).join(" ");return e.jsx("div",{className:"lay-bookshelf-a-road",style:{"--accent":a.accent},children:e.jsxs("svg",{viewBox:`0 0 340 ${f}`,preserveAspectRatio:"xMidYMin meet",style:{width:"100%",height:`${f}px`},role:"img","aria-label":`The road of ${a.title}`,children:[e.jsx("defs",{children:e.jsxs("filter",{id:"lay-bookshelf-a-wobble",children:[e.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.014",numOctaves:"2",seed:c%50,result:"n"}),e.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"n",scale:"5"})]})}),e.jsx("path",{d:p,className:"road-ink road-ahead",filter:"url(#lay-bookshelf-a-wobble)"}),y.map((d,t)=>{if(t===0||!(l.get(h[t-1].id)==="complete"&&l.get(h[t].id)==="complete"))return null;const s=y[t-1],k=(s.y+d.y)/2;return e.jsx("path",{d:`M ${s.x} ${s.y} C ${s.x} ${k}, ${d.x} ${k}, ${d.x} ${d.y}`,className:"road-ink road-walked",filter:"url(#lay-bookshelf-a-wobble)"},`leg-${t}`)}),h.map((d,t)=>{const n=y[t],s=l.get(d.id)??d.status,k=la(d),C=d.title.length>26?`${d.title.slice(0,24)}…`:d.title;return e.jsxs("g",{className:`waystone stone-${s}`,onClick:()=>s!=="locked"&&b(d.id),style:{cursor:s==="locked"?"default":"pointer"},children:[e.jsx("rect",{x:"0",y:n.y-34,width:"340",height:"68",fill:"transparent"}),s==="complete"?e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:n.x,cy:n.y,r:"15",className:"seal-wax"}),e.jsx("circle",{cx:n.x-5,cy:n.y-6,r:"5",className:"seal-drip"}),e.jsx("text",{x:n.x,y:n.y+4.5,textAnchor:"middle",className:"seal-check",children:"✓"})]}):s==="locked"?e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:n.x,cy:n.y,r:"11",className:"stone-ring ring-locked"}),e.jsx("text",{x:n.x,y:n.y+4,textAnchor:"middle",className:"stone-lock",children:"🔒"})]}):e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:n.x,cy:n.y,r:"12",className:`stone-ring ring-${s}`}),s==="active"&&e.jsx("circle",{cx:n.x,cy:n.y,r:"5",className:"stone-here"})]}),e.jsx("text",{x:n.x+30,y:n.y-2,textAnchor:"start",className:"way-title",children:s==="locked"?"A sealed waystone":C}),e.jsx("text",{x:n.x+30,y:n.y+16,textAnchor:"start",className:`way-date ${k!=null&&k.hard?"way-hard":""}`,children:s==="complete"?"won":(k==null?void 0:k.label)??"undated"})]},d.id)}),e.jsx("text",{x:"170",y:f-16,textAnchor:"middle",className:"road-footnote",children:"— here ends the map, not the road —"})]})})}function ia({book:a,statuses:l,onSelectQuest:b,onMoveTask:h,say:c}){const i=a.quests.filter(f=>l.get(f.id)!=="locked"&&f.tasks.some(y=>!I(y))).sort((f,y)=>{const p=d=>d.tasks.some(t=>t.status!=="done"&&!I(t));return(p(y)?1:0)-(p(f)?1:0)});return i.length===0?e.jsx(F,{children:"No chapters carry steps yet — the board waits for work."}):e.jsx("div",{className:"lay-bookshelf-a-board",children:i.map(f=>{const y=f.tasks.filter(t=>!I(t)),p=y.filter(t=>t.status==="done"),d=[...y.filter(t=>t.status!=="done"),...p.slice(0,5)];return e.jsxs("section",{className:"lay-bookshelf-a-board-chapter",children:[e.jsx("button",{type:"button",className:"lay-bookshelf-a-board-head",onClick:()=>b(f.id),title:"Open the chapter",children:f.title}),e.jsx("ul",{className:"lay-bookshelf-a-board-list",children:d.map(t=>{var n;return e.jsxs("li",{className:"lay-bookshelf-a-step",children:[e.jsx("span",{className:"lay-bookshelf-a-step-title",children:t.title}),h?e.jsx("div",{className:"lay-bookshelf-a-lanes",role:"group","aria-label":`Where "${t.title}" stands`,children:ue.map(s=>e.jsx("button",{type:"button",className:`lay-bookshelf-a-lane${t.status===s.key?" on":""}`,"aria-pressed":t.status===s.key,disabled:t.status===s.key,onClick:()=>{h(f.id,t.id,s.key),Ye(t.id)||c(`Moved to ${s.label.toLowerCase()}.`)},title:`Walk this step to ${s.label}`,children:s.label},s.key))}):e.jsx("span",{className:"lay-bookshelf-a-lane-flat",children:((n=ue.find(s=>s.key===t.status))==null?void 0:n.label)??t.status})]},t.id)})}),p.length>5&&e.jsxs("p",{className:"lay-bookshelf-a-board-more",children:["+ ",p.length-5," more sealed"]})]},f.id)})})}function na({book:a,bookBound:l,onStrike:b,onVault:h,onWake:c,onUnseal:i,onGoToRoundTable:f,onBind:y,ending:p,setEnding:d,typed:t,setTyped:n,say:s}){const k=qe(a),C=Je(a,{canStrike:!!b,isStanding:Ue(a),isOffered:P(a)});return e.jsxs("div",{className:"lay-bookshelf-a-volume",children:[a.description&&e.jsx("p",{className:"lay-bookshelf-a-desc",children:a.description}),!P(a)&&!l&&!Z(a)&&e.jsxs("p",{className:"lay-bookshelf-a-hint",children:[!ce(a)&&!Ze(a)?"A scroll still — its goal wears no date and its story is untold. Give the boss a real deadline and the book a real description, and the clasp will appear.":ce(a)?"A scroll still — its story is untold. Tell the book what it is for and what done means, and the clasp will appear.":"A scroll still — give the goal a real date (a sworn quarter, a dated boss, a hard deadline), and the clasp will appear."," ","Or take the whole plan to the table first — it may be worth binding, or worth setting down."]}),e.jsxs("p",{className:"lay-bookshelf-a-xp",children:[k.earned,"/",k.potential," XP earned in this volume"]}),!l&&Z(a)&&!P(a)&&e.jsx("button",{type:"button",className:"lay-bookshelf-a-primary",onClick:()=>y==null?void 0:y(),title:"The goal wears a date and tells its story — perform the binding ceremony",children:"⚭ Perform the Binding"}),e.jsx("button",{type:"button",className:"lay-bookshelf-a-secondary",onClick:()=>f==null?void 0:f(a.id),title:"Take this plan to the table: are the remaining chapters the right ones? Finished steps are history and are never re-opened.",children:"⚔ Review this plan with the War Room"}),C.show&&e.jsxs("div",{className:"lay-bookshelf-a-verdicts",children:[je(a)?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"lay-bookshelf-a-state",children:["Closed ",String(a.sealedAt).slice(0,10)," — ",Qe(a)]}),e.jsx("button",{type:"button",className:"lay-bookshelf-a-secondary",onClick:()=>{i==null||i(a.id),s("Reopened — the road is back in your days.")},title:"Reopen it. The ending is forgotten and the road returns to your days — use this if you closed it by mistake.",children:"Reopen it"})]}):ve(a)?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"lay-bookshelf-a-state",children:["Planned since ",String(a.vaultedAt).slice(0,10)," — out of your days until you begin it."]}),e.jsx("button",{type:"button",className:"lay-bookshelf-a-secondary",onClick:()=>{c==null||c(a.id),s("Begun — it is in your days again.")},children:"Begin it"})]}):e.jsx("button",{type:"button",className:"lay-bookshelf-a-secondary",onClick:()=>{h==null||h(a.id),s("Marked planned — it waits with your plans.")},title:"Not yet — it leaves your days and waits with the plans until you are ready to walk it. Reversible.",children:"Mark it planned"}),C.strike&&(p===a.id?e.jsxs("div",{className:"lay-bookshelf-a-strike",children:[e.jsxs("label",{htmlFor:"lay-bookshelf-a-strike-field",children:["This cannot be undone. Type ",e.jsx("strong",{children:a.title})," to strike it:"]}),e.jsx("input",{id:"lay-bookshelf-a-strike-field",className:"lay-bookshelf-a-field",value:t,onChange:_=>n(_.target.value),placeholder:a.title,autoComplete:"off"}),e.jsxs("div",{className:"lay-bookshelf-a-strike-acts",children:[e.jsx("button",{type:"button",className:"lay-bookshelf-a-secondary",onClick:()=>{d(null),n("")},children:"Keep it"}),e.jsx("button",{type:"button",className:"lay-bookshelf-a-danger",disabled:t.trim()!==a.title,onClick:()=>{b(a.id),d(null),n("")},children:"Strike it"})]})]}):e.jsx("button",{type:"button",className:"lay-bookshelf-a-quiet",onClick:()=>{d(a.id),n("")},title:"Remove it entirely. There is no undo — take a copy from the Saddlebag first if you want one.",children:"Strike it"}))]})]})}function ge({onAddEpic:a,onGoToRoundTable:l}){return e.jsxs("div",{className:"lay-bookshelf-a-writing",children:[e.jsx("p",{className:"lay-bookshelf-a-epigraph",children:"Life is not over. There is always another volume."}),e.jsx("ol",{className:"lay-bookshelf-a-ghosts","aria-hidden":"true",children:[0,1,2].map(b=>e.jsxs("li",{children:[e.jsxs("span",{className:"lay-bookshelf-a-numeral",children:[Ne[b],"."]}),e.jsx("span",{className:"lay-bookshelf-a-ghost-line"})]},b))}),e.jsxs("p",{className:"lay-bookshelf-a-invite",children:["What this book holds is not decided alone. Bring the idea to the War Room — the seats will argue what it demands, what it trains, and whether now is its time."," ",a?"Or take the quill and write it plainly.":"Or voice the campaign to your squire — a spoken volume is written whole."]}),l&&e.jsx("button",{type:"button",className:"lay-bookshelf-a-secondary",onClick:()=>l(),title:"Take the idea to the War Room — the seats will argue what it demands",children:"⚔ Take it to the War Room"}),a&&e.jsx(Ge,{onAdd:b=>a(b)})]})}function ca({epics:a,statuses:l,openTo:b,onSelectQuest:h,onGoToRoundTable:c,onBind:i,onTakeOffering:f,offerPlacement:y,onAddQuest:p,onAddEpic:d,onMoveTask:t,onEditQuest:n,onEditEpic:s,onVault:k,onWake:C,onUnseal:_,onStrike:Ce,onClose:N}){const[G,ze]=m.useState("shelf"),T=m.useMemo(()=>{var o;return[...a??[]].sort(((o=U[G])==null?void 0:o.fn)??U.shelf.fn)},[a,G]),V=m.useMemo(()=>ne(T),[T]),X=m.useMemo(()=>T.filter(P),[T]),Q=y==="B"||y==="lead",[S,M]=m.useState(()=>$e([...ne(T),...T],b)),w=S===fe,r=w?null:T.find(o=>o.id===S)??V[0]??X[0]??null,j=r?P(r):!1,K=r?Ie(r):!1,v=m.useMemo(()=>j?ke.filter(o=>o.offering):ke,[j]),[g,H]=m.useState("chapters"),ee=Math.max(0,v.findIndex(o=>o.key===g)),B=v[ee]??v[0],[D,x]=m.useState(null),[ae,E]=m.useState(null),[Te,oe]=m.useState(null),[Se,le]=m.useState(""),[Y,A]=m.useState(!1),[R,se]=m.useState(null),[q,Ae]=m.useState(!1),[O,$]=m.useState(null);m.useEffect(()=>{H("chapters"),E(null),oe(null),le(""),A(!1)},[S]),m.useEffect(()=>{v.some(o=>o.key===g)||H("chapters")},[v,g]),m.useEffect(()=>{if(!R)return;const o=setTimeout(()=>se(null),3600);return()=>clearTimeout(o)},[R]),m.useEffect(()=>{const o=u=>{u.key==="Escape"&&(O?$(null):Y?A(!1):D?x(null):N==null||N())};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[O,Y,D,N]);const W=o=>se({at:Date.now(),text:o}),[te,re]=m.useState(null),J=r?he(r,l):null,z=r?Be(r):null,Oe=e.jsxs(e.Fragment,{children:[e.jsx(L,{onPress:()=>x("shelf"),note:"Every volume you are walking",title:"Back to the shelf — choose another volume",children:"‹ The shelf"}),r&&!w&&e.jsx(L,{onPress:()=>x("pages"),note:`You are on ${(B==null?void 0:B.word.toLowerCase())??"the chapters"}`,title:"Jump to a page of this volume by name",children:"The pages"}),w&&e.jsx(L,{tone:"primary",onPress:()=>c==null?void 0:c(),note:"The seats argue what it demands",title:"Take the idea to the War Room",children:"⚔ The War Room"}),r&&j&&e.jsx(L,{tone:"primary",disabled:!f,onPress:()=>{f==null||f(r.id),W("Taken — this road is yours now.")},note:"Nothing of it is scheduled until you do",title:"Take this road — it becomes yours, sealed and shelved",children:"✦ Take this road"}),r&&!j&&!K&&Z(r)&&e.jsx(L,{tone:"primary",onPress:()=>A(!0),note:"The realm never binds for you",title:"The goal wears a date and tells its story — perform the binding ceremony",children:"⚭ Bind it"})]});return e.jsxs("div",{className:"lay-bookshelf-a",role:"dialog","aria-modal":"true","aria-label":"The Bookshelf",children:[e.jsx("style",{children:ha}),e.jsxs("div",{className:"lay-bookshelf-a-room-wrap",children:[e.jsxs("button",{type:"button",className:"lay-bookshelf-a-room",style:{backgroundImage:`url(${Ee})`},onClick:N,onTouchStart:o=>{var u;return re(((u=o.touches[0])==null?void 0:u.clientY)??null)},onTouchEnd:o=>{var ie;const u=(ie=o.changedTouches[0])==null?void 0:ie.clientY;te!=null&&u!=null&&u-te>40&&(N==null||N()),re(null)},"aria-label":"Close the book — back to the room",title:"Back to the room",children:[e.jsx("span",{className:"lay-bookshelf-a-veil","aria-hidden":"true"}),e.jsx("span",{className:"lay-bookshelf-a-room-word",children:"the room ⌄"})]}),e.jsx(Re,{onClose:N,name:"the Bookshelf",kind:"bookshelf"})]}),e.jsx("div",{className:"lay-bookshelf-a-page",children:!r&&!w?e.jsxs("div",{className:"lay-bookshelf-a-body",children:[e.jsx(F,{children:"No campaigns are underway yet. A volume appears here the moment you begin one."}),e.jsx(ge,{onAddEpic:d,onGoToRoundTable:c})]}):e.jsxs(e.Fragment,{children:[e.jsx("header",{className:"lay-bookshelf-a-head",children:w?e.jsx("h2",{className:"lay-bookshelf-a-title",children:"A Book to Be Written"}):ae==="__volume__"?e.jsx(we,{value:r.title,subtitle:r.tagline??"",subtitleLabel:"the volume's one line…",onSave:o=>{s==null||s(r.id,o),E(null)},onCancel:()=>E(null)}):e.jsxs(e.Fragment,{children:[s&&!j?e.jsx("button",{type:"button",className:"lay-bookshelf-a-title lay-bookshelf-a-title-edit",onClick:()=>E("__volume__"),title:"Rename this volume, right here",children:r.title}):e.jsx("h2",{className:"lay-bookshelf-a-title",children:r.title}),r.tagline&&e.jsx("p",{className:"lay-bookshelf-a-tagline",children:r.tagline})]})}),!w&&e.jsxs("div",{className:"lay-bookshelf-a-standing",children:[z!=null&&z.total?e.jsxs("div",{className:"lay-bookshelf-a-progress",role:"progressbar","aria-valuenow":z.percent,"aria-valuemin":0,"aria-valuemax":100,"aria-label":`${z.done} of ${z.total} steps done in this volume`,style:{"--accent":r.accent},children:[e.jsx("span",{className:"lay-bookshelf-a-track",children:e.jsx("span",{className:"lay-bookshelf-a-fill",style:{width:`${z.percent}%`}})}),e.jsxs("span",{className:"lay-bookshelf-a-pct",children:[z.percent,"%"]})]}):null,e.jsxs("p",{className:"lay-bookshelf-a-counts",children:[J.done," of ",J.total," ",J.total===1?"chapter":"chapters"," won",j?" · offered — not yours yet":je(r)?" · closed":ve(r)?" · planned, out of your days":K?"":" · a scroll still, unbound"]})]}),!w&&B&&e.jsx("p",{className:"lay-bookshelf-a-gloss",children:B.gloss}),e.jsx("div",{className:"lay-bookshelf-a-body",children:w?e.jsx(ge,{onAddEpic:d,onGoToRoundTable:c}):e.jsxs(e.Fragment,{children:[j&&g==="chapters"&&e.jsxs("div",{className:"lay-bookshelf-a-offer",children:[e.jsx("p",{children:"This road is on the offered shelf. It is not in your realm yet — nothing in it is scheduled, counted, or on your list until you take it."}),r.description&&e.jsx("p",{className:"lay-bookshelf-a-desc",children:r.description})]}),g==="chapters"&&e.jsx(ta,{book:r,epics:a,statuses:l,titleEdit:ae,setTitleEdit:E,onEditQuest:j?null:n,onSelectQuest:h,onAddQuest:j?null:p}),g==="road"&&e.jsx(ra,{book:r,statuses:l,onSelectQuest:h}),g==="board"&&e.jsx(ia,{book:r,statuses:l,onSelectQuest:h,onMoveTask:j?null:t,say:W}),g==="brief"&&e.jsx(Le,{epic:r,scope:"epic"}),g==="chats"&&e.jsx(Pe,{scope:"epic",targetId:r.id,targetTitle:r.title}),g==="volume"&&e.jsx(na,{book:r,bookBound:K,onStrike:Ce,onVault:k,onWake:C,onUnseal:_,onGoToRoundTable:c,onBind:()=>A(!0),ending:Te,setEnding:oe,typed:Se,setTyped:le,say:W})]})})]})}),e.jsx("p",{className:"lay-bookshelf-a-said",role:"status","aria-live":"polite",children:(R==null?void 0:R.text)??""}),r&&!w&&v.length>1&&e.jsx(Fe,{index:ee,total:v.length,onGo:o=>{var u;return H(((u=v[o])==null?void 0:u.key)??"chapters")},labels:v.map(o=>o.word)}),e.jsx(Me,{children:Oe}),D==="shelf"&&e.jsxs("div",{className:"lay-bookshelf-a-chooser",role:"dialog","aria-label":"The shelf",children:[e.jsxs("header",{className:"lay-bookshelf-a-chooser-head",children:[e.jsx("button",{type:"button",className:"lay-bookshelf-a-back",onClick:()=>x(null),children:"‹ Back"}),e.jsx("span",{className:"lay-bookshelf-a-chooser-title",children:"The Bookshelf"})]}),e.jsxs("div",{className:"lay-bookshelf-a-chooser-body",children:[e.jsx("p",{className:"lay-bookshelf-a-chooser-gloss",children:"The present only — the campaigns you are walking. Plans and scrolls wait in the War Room; finished volumes stand in the Library."}),e.jsx("label",{className:"lay-bookshelf-a-sort-label",htmlFor:"lay-bookshelf-a-sort",children:"Order the shelf"}),e.jsx("select",{id:"lay-bookshelf-a-sort",className:"lay-bookshelf-a-field",value:G,onChange:o=>ze(o.target.value),children:Object.entries(U).map(([o,u])=>e.jsx("option",{value:o,children:u.label},o))}),e.jsxs("button",{type:"button",className:"lay-bookshelf-a-row lay-bookshelf-a-legend-toggle","aria-expanded":q,onClick:()=>Ae(o=>!o),children:[e.jsx("span",{children:"How to read the shelf"}),e.jsx("span",{"aria-hidden":"true",children:q?"⌃":"⌄"})]}),q&&e.jsxs("div",{className:"lay-bookshelf-a-legend",children:[e.jsxs("p",{children:["A book’s ",e.jsx("i",{children:"height"})," is the work inside: tall volumes hold 25+ actions, middling 10+, slim ones fewer."]}),e.jsxs("p",{children:["Its ",e.jsx("i",{children:"ribbon"})," is the difficulty: linen for novice, crimson silk for the adept, gold thread for master work."]}),e.jsxs("p",{children:[e.jsx("b",{children:"The binding ceremony."})," A scroll is a dream still — undated, or untold. When its goal wears a real date ",e.jsx("i",{children:"and"})," the book tells its story, a golden clasp appears: the volume is ready. The binding itself is yours to perform — the realm never binds for you."]})]}),Q&&e.jsx(xe,{offers:X,openId:S,onOpen:o=>{M(o),x(null)}}),e.jsxs("button",{type:"button",className:`lay-bookshelf-a-row lay-bookshelf-a-unwritten${w?" on":""}`,onClick:()=>{M(fe),x(null)},children:[e.jsx("span",{className:"lay-bookshelf-a-row-mark","aria-hidden":"true",children:"🪶"}),e.jsx("span",{className:"lay-bookshelf-a-row-title",children:"A Book to Be Written"})]}),V.length===0?e.jsx(F,{children:"No campaigns are underway. Begin one and it takes its place on this shelf."}):V.map(o=>{const u=he(o,l);return e.jsxs("button",{type:"button",className:`lay-bookshelf-a-row${o.id===S?" on":""}`,style:{"--accent":o.accent},onClick:()=>{M(o.id),x(null)},title:`${o.title} — ${u.done}/${u.total} chapters closed`,children:[e.jsx("span",{className:"lay-bookshelf-a-row-spine","aria-hidden":"true"}),e.jsx("span",{className:"lay-bookshelf-a-row-title",children:o.title}),e.jsxs("span",{className:"lay-bookshelf-a-row-count",children:[u.done,"/",u.total]})]},o.id)}),!Q&&e.jsx(xe,{offers:X,openId:S,onOpen:o=>{M(o),x(null)}}),e.jsx("div",{className:"lay-bookshelf-a-rule",children:e.jsx("span",{children:"the other books"})}),[{key:"councils",mark:"⚖",title:"The Book of Councils"},{key:"forms",mark:"📖",title:"The Book of Forms"},{key:"coin",mark:"⚱",title:"The Book of Coin"},{key:"loop",mark:"🜄",title:"The Book of the Loop"}].map(o=>e.jsxs("button",{type:"button",className:"lay-bookshelf-a-row",onClick:()=>{$(o.key),x(null)},children:[e.jsx("span",{className:"lay-bookshelf-a-row-mark","aria-hidden":"true",children:o.mark}),e.jsx("span",{className:"lay-bookshelf-a-row-title",children:o.title})]},o.key))]})]}),D==="pages"&&r&&e.jsxs("div",{className:"lay-bookshelf-a-chooser",role:"dialog","aria-label":"The pages of this volume",children:[e.jsxs("header",{className:"lay-bookshelf-a-chooser-head",children:[e.jsx("button",{type:"button",className:"lay-bookshelf-a-back",onClick:()=>x(null),children:"‹ Back"}),e.jsx("span",{className:"lay-bookshelf-a-chooser-title",children:r.title})]}),e.jsx("div",{className:"lay-bookshelf-a-chooser-body",children:v.map(o=>e.jsxs("button",{type:"button",className:`lay-bookshelf-a-row lay-bookshelf-a-page-row${o.key===g?" on":""}`,"aria-current":o.key===g?"page":void 0,onClick:()=>{H(o.key),x(null)},children:[e.jsx("span",{className:"lay-bookshelf-a-row-title",children:o.word}),e.jsx("span",{className:"lay-bookshelf-a-page-gloss",children:o.gloss})]},o.key))})]}),Y&&r&&e.jsx("div",{className:"lay-bookshelf-a-ceremony",role:"dialog","aria-label":"The Binding Ceremony",children:e.jsxs("div",{className:"lay-bookshelf-a-ceremony-card",children:[e.jsx("p",{className:"lay-bookshelf-a-kicker",children:"The Binding Ceremony"}),e.jsx("h3",{className:"lay-bookshelf-a-ceremony-title",children:r.title}),e.jsxs("p",{className:"lay-bookshelf-a-ceremony-words",children:["The goal wears a date: ",sa(r)??"a dated path exists",". And its story is told — the book knows what it is for. Bind this scroll, and it takes its place among the books: sealed, shelved, and never silently demoted. A dream becomes a quest here."]}),e.jsxs("div",{className:"lay-bookshelf-a-ceremony-acts",children:[e.jsx("button",{type:"button",className:"lay-bookshelf-a-secondary",onClick:()=>A(!1),children:"Not yet"}),e.jsx("button",{type:"button",className:"lay-bookshelf-a-primary",onClick:()=>{i==null||i(r.id),A(!1),W("Bound — it stands among the books now.")},children:"⚭ Bind the volume"})]})]})}),O==="forms"&&e.jsx(He,{onClose:()=>$(null)}),O==="coin"&&e.jsx(De,{onClose:()=>$(null)}),O==="loop"&&e.jsx(We,{onClose:()=>$(null)}),O==="councils"&&e.jsx(_e,{onClose:()=>$(null)})]})}function xe({offers:a,openId:l,onOpen:b}){return a.length===0?null:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-a-rule",children:e.jsx("span",{children:"offered — yours if you take them"})}),a.map(h=>e.jsxs("button",{type:"button",className:`lay-bookshelf-a-row lay-bookshelf-a-offer-row${h.id===l?" on":""}`,style:{"--accent":h.accent},onClick:()=>b(h.id),title:`${h.title} — offered, not yours yet. Open it to read what it asks; nothing here is scheduled until you take it.`,children:[e.jsx("span",{className:"lay-bookshelf-a-row-mark","aria-hidden":"true",children:"✦"}),e.jsx("span",{className:"lay-bookshelf-a-row-title",children:h.title})]},h.id))]})}const ha=`
.lay-bookshelf-a, .lay-bookshelf-a * { box-sizing: border-box; }

/* dvh AND NEVER vh — Safari's toolbar moves, and the rail holds the verbs.
   The insets are part of the chrome's own padding rather than a sum added on
   top of a budget that already reached 100. */
.lay-bookshelf-a {
  position: fixed;
  inset: 0;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--parchment);
  color: var(--ink);
  font-family: Georgia, 'Times New Roman', serif;
  z-index: 60;
}

/* THE 16px FLOOR, UNCONDITIONAL AND IN PX. Below 16px iOS zooms the page and
   never zooms back; a floor written inside a max-width query is a floor that
   disappears on a rotate. It covers the fields BriefPanel, TuckChat and the
   Quills bring in with them, which is the only way to hold the law on a
   surface that mounts other people's components. */
.lay-bookshelf-a input,
.lay-bookshelf-a textarea,
.lay-bookshelf-a select {
  font-size: 16px;
  min-height: 44px;
}
.lay-bookshelf-a textarea { min-height: 88px; line-height: 1.5; }

/* ── the room above ─────────────────────────────────────────────────────── */
.lay-bookshelf-a-room-wrap {
  position: relative;
  flex: 0 0 auto;
  padding-top: env(safe-area-inset-top, 0px);
  background: #0d0b07;
}
.lay-bookshelf-a-room {
  display: block;
  width: 100%;
  /* clamped rather than a percentage: a strip of scenery may never eat the
     book on a short phone, and may never balloon on a tall one */
  height: clamp(56px, 12dvh, 104px);
  padding: 0;
  border: none;
  background-color: #0d0b07;
  background-size: cover;
  background-position: center 18%;
  position: relative;
  cursor: pointer;
}
.lay-bookshelf-a-veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(12, 9, 5, 0.35), rgba(12, 9, 5, 0.82));
}
.lay-bookshelf-a-room-word {
  position: absolute;
  left: 14px;
  bottom: 6px;
  font-family: 'Cinzel', Georgia, serif;
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(233, 220, 192, 0.82);
}
.lay-bookshelf-a .lay-close {
  position: absolute;
  top: calc(env(safe-area-inset-top, 0px) + 2px);
  right: 4px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 1;
  background: rgba(12, 9, 5, 0.55);
  border: none;
  border-radius: 8px;
  color: #f0e4c6;
  cursor: pointer;
  z-index: 2;
}

/* ── the open volume: a light parchment page, and its ink is dark ────────── */
.lay-bookshelf-a-page {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background-color: #e2d3ae;
  background-image: linear-gradient(180deg, rgba(120, 92, 50, 0.1), transparent 7%, transparent 94%, rgba(120, 92, 50, 0.09));
  color: #2b2013;
}

.lay-bookshelf-a-head { flex: 0 0 auto; padding: 0.7rem 0.9rem 0.3rem; }
.lay-bookshelf-a-title {
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Cinzel', Georgia, serif;
  font-size: 22px;
  line-height: 1.2;
  font-weight: 700;
  color: #2b2013;
  text-align: left;
  background: none;
  border: none;
}
.lay-bookshelf-a-title-edit {
  min-height: 44px;
  cursor: pointer;
  border-bottom: 1px dotted rgba(93, 76, 52, 0.5);
}
.lay-bookshelf-a-tagline {
  margin: 0.2rem 0 0;
  font-size: 14px;
  font-style: italic;
  color: #5d4c34;
}

.lay-bookshelf-a-standing {
  flex: 0 0 auto;
  padding: 0.35rem 0.9rem 0;
}
.lay-bookshelf-a-progress { display: flex; align-items: center; gap: 0.5rem; }
.lay-bookshelf-a-track {
  flex: 1 1 auto;
  height: 8px;
  border-radius: 4px;
  background: rgba(93, 76, 52, 0.22);
  overflow: hidden;
}
.lay-bookshelf-a-fill {
  display: block;
  height: 100%;
  background: var(--accent, #7a5b1e);
}
.lay-bookshelf-a-pct { font-size: 13px; color: #5d4c34; }
.lay-bookshelf-a-counts {
  margin: 0.3rem 0 0;
  font-size: 13px;
  color: #5d4c34;
}
.lay-bookshelf-a-gloss {
  flex: 0 0 auto;
  margin: 0.45rem 0.9rem 0.2rem;
  font-size: 13px;
  font-style: italic;
  color: #5d4c34;
}

/* THE ONE SCROLLER. Nothing inside it carries its own overflow. */
.lay-bookshelf-a-body {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 0.5rem 0.9rem 1rem;
}

/* ── the chapters: the primary action ───────────────────────────────────── */
.lay-bookshelf-a-chapters { list-style: none; margin: 0; padding: 0; }
.lay-bookshelf-a-ch-row { display: flex; align-items: stretch; gap: 4px; }
.lay-bookshelf-a-ch {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  min-height: 56px;
  padding: 0.4rem 0.2rem;
  text-align: left;
  background: none;
  border: none;
  border-bottom: 1px solid rgba(93, 76, 52, 0.25);
  color: #2b2013;
  cursor: pointer;
}
.lay-bookshelf-a-ch:disabled { cursor: default; opacity: 0.55; }
.lay-bookshelf-a-numeral {
  flex: 0 0 auto;
  font-family: 'Cinzel', Georgia, serif;
  font-size: 14px;
  color: #6b4d1c;
}
.lay-bookshelf-a-ch-words { flex: 1 1 auto; min-width: 0; }
/* NOTHING ON A PHONE MAY BE nowrap: a clipped chapter title is a chapter you
   cannot tell from another. */
.lay-bookshelf-a-ch-title {
  display: block;
  font-size: 16px;
  line-height: 1.3;
  overflow-wrap: anywhere;
}
.lay-bookshelf-a-ch-bar {
  display: block;
  margin-top: 5px;
  height: 4px;
  border-radius: 2px;
  background: rgba(93, 76, 52, 0.2);
  overflow: hidden;
}
.lay-bookshelf-a-ch-bar span { display: block; height: 100%; background: #7a5b1e; }
.lay-bookshelf-a-folio {
  flex: 0 0 auto;
  font-size: 13px;
  color: #5d4c34;
}
.lay-bookshelf-a-ch-quill {
  flex: 0 0 auto;
  width: 44px;
  min-height: 44px;
  align-self: center;
  background: none;
  border: 1px solid rgba(93, 76, 52, 0.35);
  border-radius: 6px;
  color: #5d4c34;
  font-size: 16px;
  cursor: pointer;
}

/* ── the road ───────────────────────────────────────────────────────────── */
.lay-bookshelf-a-road { padding-top: 0.3rem; }
.lay-bookshelf-a-road .way-title { font-size: 15px; }
.lay-bookshelf-a-road .way-date { font-size: 12px; }
.lay-bookshelf-a-road .road-footnote {
  font-family: Georgia, serif;
  font-size: 11px;
  font-style: italic;
  fill: #7a6647;
}

/* ── the board ──────────────────────────────────────────────────────────── */
.lay-bookshelf-a-board-chapter { margin-bottom: 1.1rem; }
.lay-bookshelf-a-board-head {
  display: block;
  width: 100%;
  min-height: 44px;
  padding: 0.4rem 0;
  text-align: left;
  font-family: 'Cinzel', Georgia, serif;
  font-size: 16px;
  color: #2b2013;
  background: none;
  border: none;
  border-bottom: 1px solid rgba(93, 76, 52, 0.35);
  cursor: pointer;
}
.lay-bookshelf-a-board-list { list-style: none; margin: 0; padding: 0; }
.lay-bookshelf-a-step {
  padding: 0.55rem 0;
  border-bottom: 1px solid rgba(93, 76, 52, 0.16);
}
.lay-bookshelf-a-step-title {
  display: block;
  font-size: 15px;
  line-height: 1.35;
  overflow-wrap: anywhere;
}
.lay-bookshelf-a-lanes { display: flex; gap: 6px; margin-top: 0.45rem; }
.lay-bookshelf-a-lane {
  flex: 1 1 0;
  min-height: 44px;
  padding: 0 4px;
  font-size: 13px;
  font-family: inherit;
  color: #5d4c34;
  background: rgba(255, 250, 235, 0.5);
  border: 1px solid rgba(93, 76, 52, 0.4);
  border-radius: 6px;
  cursor: pointer;
}
.lay-bookshelf-a-lane.on {
  color: #2b2013;
  background: rgba(217, 164, 65, 0.8);
  border-color: #8a6a33;
  cursor: default;
}
.lay-bookshelf-a-lane-flat { font-size: 13px; color: #5d4c34; }
.lay-bookshelf-a-board-more { margin: 0.4rem 0 0; font-size: 12px; color: #5d4c34; }

/* ── this volume ────────────────────────────────────────────────────────── */
.lay-bookshelf-a-desc { margin: 0 0 0.7rem; font-size: 15px; line-height: 1.55; }
.lay-bookshelf-a-hint {
  margin: 0 0 0.7rem;
  font-size: 14px;
  font-style: italic;
  line-height: 1.5;
  color: #4a3b26;
}
.lay-bookshelf-a-xp { margin: 0 0 0.9rem; font-size: 13px; color: #5d4c34; }
.lay-bookshelf-a-state { margin: 0 0 0.5rem; font-size: 14px; color: #4a3b26; }
.lay-bookshelf-a-verdicts { margin-top: 1.1rem; }

/* THE PAGE'S ONE COMMITTING ACTION IS THE ONE THING THAT LOOKS PRESSABLE.
   Gold text on parchment measured 1.06:1 on 08-16 — an invisible primary
   button — so it is filled, and dark ink on the fill measures 7.5:1. */
.lay-bookshelf-a-primary,
.lay-bookshelf-a-secondary,
.lay-bookshelf-a-danger,
.lay-bookshelf-a-quiet {
  display: block;
  width: 100%;
  min-height: 48px;
  margin-bottom: 0.6rem;
  padding: 0.5rem 0.8rem;
  font-family: inherit;
  font-size: 16px;
  border-radius: 7px;
  cursor: pointer;
}
.lay-bookshelf-a-primary {
  color: #2b2013;
  background: rgba(217, 164, 65, 0.9);
  border: 1px solid #8a6a33;
}
.lay-bookshelf-a-secondary {
  color: #2b2013;
  background: rgba(255, 250, 235, 0.55);
  border: 1px solid rgba(93, 76, 52, 0.5);
}
.lay-bookshelf-a-quiet {
  color: #5d4c34;
  background: none;
  border: 1px dashed rgba(93, 76, 52, 0.5);
}
.lay-bookshelf-a-danger {
  color: #f6e8cf;
  background: #7a2b1c;
  border: 1px solid #4a1b10;
}
.lay-bookshelf-a-danger:disabled { opacity: 0.45; cursor: default; }
.lay-bookshelf-a-strike label {
  display: block;
  margin-bottom: 0.4rem;
  font-size: 14px;
  color: #2b2013;
}
.lay-bookshelf-a-strike-acts { display: flex; gap: 8px; }
.lay-bookshelf-a-strike-acts button { flex: 1 1 0; }

/* A WRITING SURFACE SHOULD LOOK LIKE ONE. On parchment the dark realm's field
   (black at 6%) reads as a smudge: you are writing ON the page, not into it. */
.lay-bookshelf-a-field {
  width: 100%;
  margin-bottom: 0.6rem;
  padding: 0.55rem 0.6rem;
  font-family: Georgia, serif;
  color: #2b2013;
  background: rgba(255, 250, 235, 0.65);
  border: 1px solid rgba(93, 76, 52, 0.5);
  border-radius: 6px;
}

/* ── THE BORROWED PANELS ON A LIGHT PAGE. BriefPanel, TuckChat and the Quills
   are dark-realm components: their tokens are #e9dcc0 on a #e2d3ae page, which
   the 08-16 measurement put at 1.09:1 — invisible, not dim, and it is THE TEXT
   YOU TYPE. The palette below is the one that repair already chose for
   '.quest-panel'; nothing new is invented. (Backticks inside
   this CSS template literal TERMINATE it — the pair around the pair around the panel selector
   closed the string and restarted it as a TAGGED TEMPLATE on a free identifier,
   which threw at IMPORT time and, because Hosts.jsx imports this eagerly and
   App.jsx imports Hosts, took the WHOLE APP down in every layout mode including
   the OFF mode. It parsed and it bundled — a tagged template is valid syntax — which is
   exactly why nothing caught it. Single quotes here, always.) Opacity is treated as part of
   contrast, because '.cite-open' measured 5.56:1 as a colour and 3.69:1 once
   its own alpha applied. */
.lay-bookshelf-a-page .brief-label,
.lay-bookshelf-a-page .brief-read,
.lay-bookshelf-a-page .brief-orders,
.lay-bookshelf-a-page .tuck-kept,
.lay-bookshelf-a-page .quill-label { color: #2b2013; }
.lay-bookshelf-a-page .brief-hint,
.lay-bookshelf-a-page .brief-docs,
.lay-bookshelf-a-page .brief-size,
.lay-bookshelf-a-page .tuck-waiting,
.lay-bookshelf-a-page .pigeon-close,
.lay-bookshelf-a-page .section-label,
.lay-bookshelf-a-page .quill-hint { color: #5d4c34; }
.lay-bookshelf-a-page .brief-inherited {
  color: #4a3b26;
  border-left-color: rgba(93, 76, 52, 0.45);
}
.lay-bookshelf-a-page .tuck-list li { background: rgba(255, 250, 235, 0.5); }
.lay-bookshelf-a-page .tuck-link,
.lay-bookshelf-a-page .tuck-bound { color: #6b4d1c; }
.lay-bookshelf-a-page .brief-input,
.lay-bookshelf-a-page .quill-input,
.lay-bookshelf-a-page input,
.lay-bookshelf-a-page textarea,
.lay-bookshelf-a-page select {
  color: #2b2013;
  background: rgba(255, 250, 235, 0.6);
  border-color: rgba(93, 76, 52, 0.45);
}
.lay-bookshelf-a-page input::placeholder,
.lay-bookshelf-a-page textarea::placeholder { color: #7d6b4e; }
.lay-bookshelf-a-page .line-tool { opacity: 0.85; color: #5d4c34; }
.lay-bookshelf-a-page .dialog-action {
  min-height: 44px;
  font-size: 16px;
  color: #2b2013;
  background: rgba(217, 164, 65, 0.85);
  border-color: #8a6a33;
}

/* ── a book to be written ───────────────────────────────────────────────── */
.lay-bookshelf-a-epigraph { margin: 0 0 0.8rem; font-size: 15px; font-style: italic; color: #4a3b26; }
.lay-bookshelf-a-ghosts { list-style: none; margin: 0 0 1rem; padding: 0; }
.lay-bookshelf-a-ghosts li { display: flex; align-items: center; gap: 0.6rem; min-height: 40px; }
.lay-bookshelf-a-ghost-line {
  flex: 1 1 auto;
  height: 1px;
  border-bottom: 1px dashed rgba(93, 76, 52, 0.45);
}
.lay-bookshelf-a-invite { margin: 0 0 1rem; font-size: 15px; line-height: 1.55; }

/* ── the offer banner ───────────────────────────────────────────────────── */
.lay-bookshelf-a-offer {
  margin-bottom: 0.9rem;
  padding: 0.7rem 0.75rem;
  border: 1px solid rgba(138, 106, 51, 0.6);
  border-radius: 8px;
  background: rgba(255, 250, 235, 0.5);
}
.lay-bookshelf-a-offer p { margin: 0 0 0.5rem; font-size: 15px; line-height: 1.5; }
.lay-bookshelf-a-offer p:last-child { margin-bottom: 0; }

/* ── the said line, the pager and the rail ──────────────────────────────── */
.lay-bookshelf-a-said {
  flex: 0 0 auto;
  margin: 0;
  padding: 0 0.9rem;
  font-size: 13px;
  color: var(--gold-bright);
  background: var(--parchment);
  text-align: center;
  min-height: 0;
}
.lay-bookshelf-a-said:empty { padding: 0; }

.lay-bookshelf-a .lay-pager {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  background: var(--parchment);
  border-top: 1px solid var(--border);
}
.lay-bookshelf-a .lay-pager button {
  width: 48px;
  min-height: 44px;
  font-size: 20px;
  color: var(--ink);
  background: var(--parchment-raised);
  border: 1px solid var(--border);
  border-radius: 7px;
  cursor: pointer;
}
.lay-bookshelf-a .lay-pager button:disabled { opacity: 0.35; cursor: default; }
.lay-bookshelf-a .lay-pager-here {
  flex: 1 1 auto;
  text-align: center;
  font-family: 'Cinzel', Georgia, serif;
  font-size: 14px;
  letter-spacing: 0.06em;
  color: var(--gold);
}

/* THE ACT RAIL — the thumb's third, and the desk edge the open book lies on. */
.lay-bookshelf-a .lay-rail {
  flex: 0 0 auto;
  padding: 6px 8px calc(6px + env(safe-area-inset-bottom, 0px));
  background: var(--parchment-raised);
  border-top: 1px solid var(--gold);
}
.lay-bookshelf-a .lay-rail-acts { display: flex; gap: 8px; }
.lay-bookshelf-a .lay-act {
  flex: 1 1 0;
  min-width: 0;
  min-height: 52px;
  padding: 4px 6px;
  font-family: inherit;
  color: var(--ink);
  background: rgba(255, 250, 235, 0.06);
  border: 1px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
}
.lay-bookshelf-a .lay-act-primary {
  color: #2b2013;
  background: rgba(217, 164, 65, 0.9);
  border-color: var(--gold-bright);
}
.lay-bookshelf-a .lay-act:disabled { opacity: 0.4; cursor: default; }
.lay-bookshelf-a .lay-act-word {
  display: block;
  font-size: 15px;
  line-height: 1.15;
}
/* THE TOOLTIP LAW'S TOUCH HOME: the plain meaning rides under the verb as a
   permanent second line, because touch has no hover and iOS steals the long
   press for text selection. */
.lay-bookshelf-a .lay-act-note {
  display: block;
  margin-top: 2px;
  font-size: 11px;
  line-height: 1.2;
  opacity: 0.85;
}
.lay-bookshelf-a .lay-rail-note {
  margin: 6px 2px 0;
  font-size: 12px;
  color: var(--ink-dim);
}

/* ── the chooser screens ────────────────────────────────────────────────── */
.lay-bookshelf-a-chooser {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  background: var(--parchment);
  z-index: 3;
}
.lay-bookshelf-a-chooser-head {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: calc(6px + env(safe-area-inset-top, 0px)) 10px 6px;
  border-bottom: 1px solid var(--border);
}
.lay-bookshelf-a-back {
  min-height: 44px;
  padding: 0 12px;
  font-family: inherit;
  font-size: 16px;
  color: var(--ink);
  background: var(--parchment-raised);
  border: 1px solid var(--border);
  border-radius: 7px;
  cursor: pointer;
}
.lay-bookshelf-a-chooser-title {
  flex: 1 1 auto;
  min-width: 0;
  font-family: 'Cinzel', Georgia, serif;
  font-size: 16px;
  color: var(--gold);
  overflow-wrap: anywhere;
}
.lay-bookshelf-a-chooser-body {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 10px 10px calc(14px + env(safe-area-inset-bottom, 0px));
}
.lay-bookshelf-a-chooser-gloss {
  margin: 0 0 0.8rem;
  font-size: 13px;
  font-style: italic;
  color: var(--ink-dim);
  line-height: 1.5;
}
.lay-bookshelf-a-sort-label {
  display: block;
  margin-bottom: 0.3rem;
  font-size: 13px;
  color: var(--ink-dim);
}
.lay-bookshelf-a-chooser .lay-bookshelf-a-field {
  color: var(--ink);
  background: var(--parchment-raised);
  border-color: var(--border);
}
.lay-bookshelf-a-row {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 56px;
  margin-bottom: 6px;
  padding: 8px 10px;
  text-align: left;
  font-family: inherit;
  color: var(--ink);
  background: var(--parchment-raised);
  border: 1px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
}
.lay-bookshelf-a-row.on { border-color: var(--gold); }
.lay-bookshelf-a-row-title {
  flex: 1 1 auto;
  min-width: 0;
  font-size: 16px;
  line-height: 1.3;
  overflow-wrap: anywhere;
}
.lay-bookshelf-a-row-count { flex: 0 0 auto; font-size: 13px; color: var(--ink-dim); }
.lay-bookshelf-a-row-mark { flex: 0 0 auto; font-size: 18px; }
.lay-bookshelf-a-row-spine {
  flex: 0 0 auto;
  width: 6px;
  align-self: stretch;
  border-radius: 3px;
  background: var(--accent, var(--gold));
}
.lay-bookshelf-a-offer-row { border-style: dashed; }
.lay-bookshelf-a-page-row { flex-direction: column; align-items: flex-start; gap: 2px; }
.lay-bookshelf-a-page-gloss { font-size: 12px; color: var(--ink-dim); line-height: 1.35; }
.lay-bookshelf-a-legend-toggle { justify-content: space-between; }
.lay-bookshelf-a-legend {
  margin: 0 0 10px;
  padding: 10px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.18);
}
.lay-bookshelf-a-legend p { margin: 0 0 0.5rem; font-size: 14px; line-height: 1.5; }
.lay-bookshelf-a-legend p:last-child { margin-bottom: 0; }
.lay-bookshelf-a-rule {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 14px 2px 8px;
  font-size: 12px;
  font-style: italic;
  color: var(--ink-dim);
}
.lay-bookshelf-a-rule::after {
  content: '';
  flex: 1 1 auto;
  height: 1px;
  background: var(--border);
}

/* ── the ceremony ───────────────────────────────────────────────────────── */
.lay-bookshelf-a-ceremony {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  background: rgba(8, 6, 3, 0.72);
  z-index: 4;
}
.lay-bookshelf-a-ceremony-card {
  width: 100%;
  max-height: 88dvh;
  overflow-y: auto;
  padding: 16px 14px calc(16px + env(safe-area-inset-bottom, 0px));
  background: #e2d3ae;
  color: #2b2013;
  border-top: 2px solid var(--gold);
  border-radius: 14px 14px 0 0;
}
.lay-bookshelf-a-kicker {
  margin: 0 0 0.3rem;
  font-family: 'Cinzel', Georgia, serif;
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #6b4d1c;
}
.lay-bookshelf-a-ceremony-title {
  margin: 0 0 0.6rem;
  font-family: 'Cinzel', Georgia, serif;
  font-size: 20px;
  color: #2b2013;
}
.lay-bookshelf-a-ceremony-words {
  margin: 0 0 1rem;
  font-size: 15px;
  line-height: 1.6;
  color: #2b2013;
}
.lay-bookshelf-a-ceremony-acts { display: flex; gap: 8px; }
.lay-bookshelf-a-ceremony-acts button { flex: 1 1 0; margin-bottom: 0; }

/* ── nothing states ─────────────────────────────────────────────────────── */
.lay-bookshelf-a .lay-nothing {
  margin: 1rem 0;
  font-size: 15px;
  font-style: italic;
  line-height: 1.55;
  color: #5d4c34;
}
.lay-bookshelf-a-chooser .lay-nothing { color: var(--ink-dim); }
`;export{ca as default};
