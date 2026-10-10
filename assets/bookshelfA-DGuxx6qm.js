import{r as f,aj as ne,ak as $,al as Ee,am as Le,an as he,ao as Re,j as e,R as P,ap as Z,m as Pe,C as $e,N as _,aq as we,ar as ve,as as je,at as Fe,au as He,av as Me,a as We,aw as _e,ax as De,ay as Ve,P as Ge,A as Xe,az as Ke,aA as qe,aB as Ye,aC as Je,aD as de,aE as Ue,aF as Ze,aG as Qe,aH as ea,aI as aa,i as F,aJ as oa,aK as la,aL as sa,aM as ta,aN as ce,aO as ra,aP as ia}from"./index-CYLJyUTU.js";const Ne=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV"],fe="__a-book-to-be-written__",U={shelf:{label:"Shelf order",fn:(a,l)=>(a.order??de)-(l.order??de)},alpha:{label:"A–Z",fn:(a,l)=>a.title.localeCompare(l.title)},difficulty:{label:"Difficulty",fn:(a,l)=>me(l)-me(a)},left:{label:"Tasks left",fn:(a,l)=>pe(l)-pe(a)},tier:{label:"Stature",fn:(a,l)=>be[ye(l)]-be[ye(a)]}},na={novice:1,intermediate:2,expert:3,master:4},be={tall:3,mid:2,short:1};function ha(a){return a.quests.reduce((l,c)=>l+c.tasks.length,0)}function pe(a){return a.quests.reduce((l,c)=>l+c.tasks.filter(r=>r.status!=="done"&&!F(r)).length,0)}function ye(a){const l=ha(a);return l>=25?"tall":l>=10?"mid":"short"}function me(a){return Math.max(1,...a.quests.map(l=>na[l.difficulty]??1))}function da(a){if(a.quarter)return`sworn to ${a.quarter} at the Muster`;const l=a.quests.flatMap(r=>r.tasks.filter(d=>d.due&&!F(d)).map(d=>d)).sort((r,d)=>{const b=n=>n.boss&&n.hardDue?0:n.hardDue?1:n.boss?2:3;return b(r)-b(d)||(r.due<d.due?-1:1)})[0];return l?`"${l.title.length>60?`${l.title.slice(0,58)}…`:l.title}" — ${l.hardDue?"⚑ ":""}dated ${l.due}`:null}const ke=[{key:"todo",label:"To do"},{key:"waiting",label:"In other hands"},{key:"done",label:"Sealed"}],ca={toc:"Every chapter of this volume, in order. Tap one to open it.",road:"What must be sealed first, on the calendar — tap a title to open it, the ✒ to say what it waits on.",board:"Arrange a chapter’s steps: to do, in other hands, sealed.",register:"What this campaign still owes, grouped by kind."},ue=[...Ue.map(a=>({key:a.key,word:a.label,gloss:ca[a.key],offering:!0})),{key:"brief",word:"The brief",gloss:"This campaign’s standing instructions — what your squire reads before it helps.",offering:!1},{key:"chats",word:"The chats",gloss:"File a conversation here before anyone has decided what it meant.",offering:!1},{key:"volume",word:"This volume",gloss:"What the book is for, what it has earned, and the verbs that end it.",offering:!1}];function fa({book:a,epics:l,statuses:c,titleEdit:r,setTitleEdit:d,onEditQuest:b,onSelectQuest:n,onAddQuest:y}){return a.quests.length===0?e.jsx(_,{children:"This volume holds no chapters yet. Take it to the War Room, or write the first chapter below."}):e.jsxs(e.Fragment,{children:[e.jsx("ol",{className:"lay-bookshelf-a-chapters",children:a.quests.map((i,u)=>{const t=c.get(i.id)??i.status,k=Qe(i),h=t==="locked",z=t==="complete";return r===i.id?e.jsx("li",{className:"lay-bookshelf-a-ch-row",children:e.jsx(we,{value:i.title,onSave:T=>{b==null||b(i.id,T),d(null)},onCancel:()=>d(null)})},i.id):e.jsxs("li",{className:"lay-bookshelf-a-ch-row",children:[e.jsxs("button",{type:"button",className:`lay-bookshelf-a-ch chapter-${t}`,onClick:()=>n(i.id),disabled:h,title:h?`A sealed chapter — it ${ea(i,l,c)}`:`Open ${i.title}`,children:[e.jsxs("span",{className:"lay-bookshelf-a-numeral",children:[Ne[u]??u+1,"."]}),e.jsxs("span",{className:"lay-bookshelf-a-ch-words",children:[e.jsx("span",{className:"lay-bookshelf-a-ch-title",children:h?"A Sealed Chapter":i.title}),!h&&k.total>0&&e.jsx("span",{className:"lay-bookshelf-a-ch-bar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${k.percent}%`}})})]}),e.jsx("span",{className:"lay-bookshelf-a-folio",children:z?"✓":h?"🔒":`${k.done}/${k.total}`})]}),b&&!h&&e.jsx("button",{type:"button",className:"lay-bookshelf-a-ch-quill","aria-label":`Rename "${i.title}"`,title:"Rename this chapter, right here",onClick:()=>d(i.id),children:"✒"})]},i.id)})}),y&&e.jsx(aa,{onAdd:i=>y(a.id,i)})]})}function ba({book:a,statuses:l,onSelectQuest:c,onMoveTask:r,say:d}){const b=a.quests.filter(n=>l.get(n.id)!=="locked"&&n.tasks.some(y=>!F(y))).sort((n,y)=>{const i=u=>u.tasks.some(t=>t.status!=="done"&&!F(t));return(i(y)?1:0)-(i(n)?1:0)});return b.length===0?e.jsx(_,{children:"No chapters carry steps yet — the board waits for work."}):e.jsx("div",{className:"lay-bookshelf-a-board",children:b.map(n=>{const y=n.tasks.filter(t=>!F(t)),i=y.filter(t=>t.status==="done"),u=[...y.filter(t=>t.status!=="done"),...i.slice(0,5)];return e.jsxs("section",{className:"lay-bookshelf-a-board-chapter",children:[e.jsx("button",{type:"button",className:"lay-bookshelf-a-board-head",onClick:()=>c(n.id),title:"Open the chapter",children:n.title}),e.jsx("ul",{className:"lay-bookshelf-a-board-list",children:u.map(t=>{var k;return e.jsxs("li",{className:"lay-bookshelf-a-step",children:[e.jsx("span",{className:"lay-bookshelf-a-step-title",children:t.title}),r?e.jsx("div",{className:"lay-bookshelf-a-lanes",role:"group","aria-label":`Where "${t.title}" stands`,children:ke.map(h=>e.jsx("button",{type:"button",className:`lay-bookshelf-a-lane${t.status===h.key?" on":""}`,"aria-pressed":t.status===h.key,disabled:t.status===h.key,onClick:()=>{r(n.id,t.id,h.key),oa(t.id)||d(`Moved to ${h.label.toLowerCase()}.`)},title:`Walk this step to ${h.label}`,children:h.label},h.key))}):e.jsx("span",{className:"lay-bookshelf-a-lane-flat",children:((k=ke.find(h=>h.key===t.status))==null?void 0:k.label)??t.status})]},t.id)})}),i.length>5&&e.jsxs("p",{className:"lay-bookshelf-a-board-more",children:["+ ",i.length-5," more sealed"]})]},n.id)})})}function pa({book:a,bookBound:l,onStrike:c,onVault:r,onWake:d,onUnseal:b,onGoToRoundTable:n,onBind:y,ending:i,setEnding:u,typed:t,setTyped:k,say:h}){const z=la(a),T=sa(a,{canStrike:!!c,isStanding:ta(a),isOffered:$(a)});return e.jsxs("div",{className:"lay-bookshelf-a-volume",children:[a.description&&e.jsx("p",{className:"lay-bookshelf-a-desc",children:a.description}),!$(a)&&!l&&!Z(a)&&e.jsxs("p",{className:"lay-bookshelf-a-hint",children:[!ce(a)&&!ra(a)?"A scroll still — its goal wears no date and its story is untold. Give the boss a real deadline and the book a real description, and the clasp will appear.":ce(a)?"A scroll still — its story is untold. Tell the book what it is for and what done means, and the clasp will appear.":"A scroll still — give the goal a real date (a sworn quarter, a dated boss, a hard deadline), and the clasp will appear."," ","Or take the whole plan to the table first — it may be worth binding, or worth setting down."]}),e.jsxs("p",{className:"lay-bookshelf-a-xp",children:[z.earned,"/",z.potential," XP earned in this volume"]}),!l&&Z(a)&&!$(a)&&e.jsx("button",{type:"button",className:"lay-bookshelf-a-primary",onClick:()=>y==null?void 0:y(),title:"The goal wears a date and tells its story — perform the binding ceremony",children:"⚭ Perform the Binding"}),e.jsx("button",{type:"button",className:"lay-bookshelf-a-secondary",onClick:()=>n==null?void 0:n(a.id),title:"Take this plan to the table: are the remaining chapters the right ones? Finished steps are history and are never re-opened.",children:"⚔ Review this plan with the War Room"}),T.show&&e.jsxs("div",{className:"lay-bookshelf-a-verdicts",children:[ve(a)?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"lay-bookshelf-a-state",children:["Closed ",String(a.sealedAt).slice(0,10)," — ",ia(a)]}),e.jsx("button",{type:"button",className:"lay-bookshelf-a-secondary",onClick:()=>{b==null||b(a.id),h("Reopened — the road is back in your days.")},title:"Reopen it. The ending is forgotten and the road returns to your days — use this if you closed it by mistake.",children:"Reopen it"})]}):je(a)?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"lay-bookshelf-a-state",children:["Planned since ",String(a.vaultedAt).slice(0,10)," — out of your days until you begin it."]}),e.jsx("button",{type:"button",className:"lay-bookshelf-a-secondary",onClick:()=>{d==null||d(a.id),h("Begun — it is in your days again.")},children:"Begin it"})]}):e.jsx("button",{type:"button",className:"lay-bookshelf-a-secondary",onClick:()=>{r==null||r(a.id),h("Marked planned — it waits with your plans.")},title:"Not yet — it leaves your days and waits with the plans until you are ready to walk it. Reversible.",children:"Mark it planned"}),T.strike&&(i===a.id?e.jsxs("div",{className:"lay-bookshelf-a-strike",children:[e.jsxs("label",{htmlFor:"lay-bookshelf-a-strike-field",children:["This cannot be undone. Type ",e.jsx("strong",{children:a.title})," to strike it:"]}),e.jsx("input",{id:"lay-bookshelf-a-strike-field",className:"lay-bookshelf-a-field",value:t,onChange:D=>k(D.target.value),placeholder:a.title,autoComplete:"off"}),e.jsxs("div",{className:"lay-bookshelf-a-strike-acts",children:[e.jsx("button",{type:"button",className:"lay-bookshelf-a-secondary",onClick:()=>{u(null),k("")},children:"Keep it"}),e.jsx("button",{type:"button",className:"lay-bookshelf-a-danger",disabled:t.trim()!==a.title,onClick:()=>{c(a.id),u(null),k("")},children:"Strike it"})]})]}):e.jsx("button",{type:"button",className:"lay-bookshelf-a-quiet",onClick:()=>{u(a.id),k("")},title:"Remove it entirely. There is no undo — take a copy from the Saddlebag first if you want one.",children:"Strike it"}))]})]})}function ge({onAddEpic:a,onGoToRoundTable:l}){return e.jsxs("div",{className:"lay-bookshelf-a-writing",children:[e.jsx("p",{className:"lay-bookshelf-a-epigraph",children:"Life is not over. There is always another volume."}),e.jsx("ol",{className:"lay-bookshelf-a-ghosts","aria-hidden":"true",children:[0,1,2].map(c=>e.jsxs("li",{children:[e.jsxs("span",{className:"lay-bookshelf-a-numeral",children:[Ne[c],"."]}),e.jsx("span",{className:"lay-bookshelf-a-ghost-line"})]},c))}),e.jsxs("p",{className:"lay-bookshelf-a-invite",children:["What this book holds is not decided alone. Bring the idea to the War Room — the seats will argue what it demands, what it trains, and whether now is its time."," ",a?"Or take the quill and write it plainly.":"Or voice the campaign to your squire — a spoken volume is written whole."]}),l&&e.jsx("button",{type:"button",className:"lay-bookshelf-a-secondary",onClick:()=>l(),title:"Take the idea to the War Room — the seats will argue what it demands",children:"⚔ Take it to the War Room"}),a&&e.jsx(Ze,{onAdd:c=>a(c)})]})}function ka({epics:a,statuses:l,openTo:c,onSelectQuest:r,onGoToRoundTable:d,onBind:b,onTakeOffering:n,offerPlacement:y,onAddQuest:i,onAddEpic:u,onMoveTask:t,onEditQuest:k,onEditEpic:h,onVault:z,onWake:T,onUnseal:D,onStrike:Ce,onSetWaits:ze,today:Te=null,onClose:j}){const[V,Oe]=f.useState("shelf"),C=f.useMemo(()=>{var o;return[...a??[]].sort(((o=U[V])==null?void 0:o.fn)??U.shelf.fn)},[a,V]),G=f.useMemo(()=>ne(C),[C]),X=f.useMemo(()=>C.filter($),[C]),Q=y==="B"||y==="lead",[O,H]=f.useState(()=>Ee([...ne(C),...C],c)),g=O===fe,s=g?null:C.find(o=>o.id===O)??G[0]??X[0]??null,w=s?$(s):!1,K=s?Le(s):!1,v=f.useMemo(()=>w?ue.filter(o=>o.offering):ue,[w]),[m,B]=f.useState("toc"),ee=Math.max(0,v.findIndex(o=>o.key===m)),E=v[ee]??v[0],[M,x]=f.useState(null),[ae,L]=f.useState(null),[Se,oe]=f.useState(null),[Ie,le]=f.useState(""),[q,S]=f.useState(!1),[R,se]=f.useState(null),[Y,Ae]=f.useState(!1),[I,A]=f.useState(null);f.useEffect(()=>{B("toc"),L(null),oe(null),le(""),S(!1)},[O]),f.useEffect(()=>{v.some(o=>o.key===m)||B("toc")},[v,m]),f.useEffect(()=>{if(!R)return;const o=setTimeout(()=>se(null),3600);return()=>clearTimeout(o)},[R]),f.useEffect(()=>{const o=p=>{p.key==="Escape"&&(I?A(null):q?S(!1):M?x(null):j==null||j())};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[I,q,M,j]);const W=o=>se({at:Date.now(),text:o}),[te,re]=f.useState(null),J=s?he(s,l):null,N=s?Re(s):null,Be=e.jsxs(e.Fragment,{children:[e.jsx(P,{onPress:()=>x("shelf"),note:"Every volume you are walking",title:"Back to the shelf — choose another volume",children:"‹ The shelf"}),s&&!g&&e.jsx(P,{onPress:()=>x("pages"),note:`You are on ${(E==null?void 0:E.word.toLowerCase())??"the chapters"}`,title:"Jump to a page of this volume by name",children:"The pages"}),g&&e.jsx(P,{tone:"primary",onPress:()=>d==null?void 0:d(),note:"The seats argue what it demands",title:"Take the idea to the War Room",children:"⚔ The War Room"}),s&&w&&e.jsx(P,{tone:"primary",disabled:!n,onPress:()=>{n==null||n(s.id),W("Taken — this road is yours now.")},note:"Nothing of it is scheduled until you do",title:"Take this road — it becomes yours, sealed and shelved",children:"✦ Take this road"}),s&&!w&&!K&&Z(s)&&e.jsx(P,{tone:"primary",onPress:()=>S(!0),note:"The realm never binds for you",title:"The goal wears a date and tells its story — perform the binding ceremony",children:"⚭ Bind it"})]});return e.jsxs("div",{className:"lay-bookshelf-a",role:"dialog","aria-modal":"true","aria-label":"The Bookshelf",children:[e.jsx("style",{children:ya}),e.jsxs("div",{className:"lay-bookshelf-a-room-wrap",children:[e.jsxs("button",{type:"button",className:"lay-bookshelf-a-room",style:{backgroundImage:`url(${Pe})`},onClick:j,onTouchStart:o=>{var p;return re(((p=o.touches[0])==null?void 0:p.clientY)??null)},onTouchEnd:o=>{var ie;const p=(ie=o.changedTouches[0])==null?void 0:ie.clientY;te!=null&&p!=null&&p-te>40&&(j==null||j()),re(null)},"aria-label":"Close the book — back to the room",title:"Back to the room",children:[e.jsx("span",{className:"lay-bookshelf-a-veil","aria-hidden":"true"}),e.jsx("span",{className:"lay-bookshelf-a-room-word",children:"the room ⌄"})]}),e.jsx($e,{onClose:j,name:"the Bookshelf",kind:"bookshelf"})]}),e.jsx("div",{className:"lay-bookshelf-a-page",children:!s&&!g?e.jsxs("div",{className:"lay-bookshelf-a-body",children:[e.jsx(_,{children:"No campaigns are underway yet. A volume appears here the moment you begin one."}),e.jsx(ge,{onAddEpic:u,onGoToRoundTable:d})]}):e.jsxs(e.Fragment,{children:[e.jsx("header",{className:"lay-bookshelf-a-head",children:g?e.jsx("h2",{className:"lay-bookshelf-a-title",children:"A Book to Be Written"}):ae==="__volume__"?e.jsx(we,{value:s.title,subtitle:s.tagline??"",subtitleLabel:"the volume's one line…",onSave:o=>{h==null||h(s.id,o),L(null)},onCancel:()=>L(null)}):e.jsxs(e.Fragment,{children:[h&&!w?e.jsx("button",{type:"button",className:"lay-bookshelf-a-title lay-bookshelf-a-title-edit",onClick:()=>L("__volume__"),title:"Rename this volume, right here",children:s.title}):e.jsx("h2",{className:"lay-bookshelf-a-title",children:s.title}),s.tagline&&e.jsx("p",{className:"lay-bookshelf-a-tagline",children:s.tagline})]})}),!g&&e.jsxs("div",{className:"lay-bookshelf-a-standing",children:[N!=null&&N.total?e.jsxs("div",{className:"lay-bookshelf-a-progress",role:"progressbar","aria-valuenow":N.percent,"aria-valuemin":0,"aria-valuemax":100,"aria-label":`${N.done} of ${N.total} steps done in this volume`,style:{"--accent":s.accent},children:[e.jsx("span",{className:"lay-bookshelf-a-track",children:e.jsx("span",{className:"lay-bookshelf-a-fill",style:{width:`${N.percent}%`}})}),e.jsxs("span",{className:"lay-bookshelf-a-pct",children:[N.percent,"%"]})]}):null,e.jsxs("p",{className:"lay-bookshelf-a-counts",children:[J.done," of ",J.total," ",J.total===1?"chapter":"chapters"," won",w?" · offered — not yours yet":ve(s)?" · closed":je(s)?" · planned, out of your days":K?"":" · a scroll still, unbound"]})]}),!g&&e.jsx("div",{className:"lay-bookshelf-a-views",children:e.jsx(Fe,{page:He(m)?m:null,onChoose:B,fill:!0})}),!g&&E&&e.jsx("p",{className:"lay-bookshelf-a-gloss",children:E.gloss}),e.jsx("div",{className:"lay-bookshelf-a-body",children:g?e.jsx(ge,{onAddEpic:u,onGoToRoundTable:d}):e.jsxs(e.Fragment,{children:[w&&m==="toc"&&e.jsxs("div",{className:"lay-bookshelf-a-offer",children:[e.jsx("p",{children:"This road is on the offered shelf. It is not in your realm yet — nothing in it is scheduled, counted, or on your list until you take it."}),s.description&&e.jsx("p",{className:"lay-bookshelf-a-desc",children:s.description})]}),m==="toc"&&e.jsx(fa,{book:s,epics:a,statuses:l,titleEdit:ae,setTitleEdit:L,onEditQuest:w?null:k,onSelectQuest:r,onAddQuest:w?null:i}),m==="road"&&e.jsx(Me,{book:s,epics:a,statuses:l,today:Te??We(),onSelectQuest:r,onSetWaits:ze}),m==="register"&&e.jsx(_e,{book:s}),m==="board"&&e.jsx(ba,{book:s,statuses:l,onSelectQuest:r,onMoveTask:w?null:t,say:W}),m==="brief"&&e.jsx(De,{epic:s,scope:"epic"}),m==="chats"&&e.jsx(Ve,{scope:"epic",targetId:s.id,targetTitle:s.title}),m==="volume"&&e.jsx(pa,{book:s,bookBound:K,onStrike:Ce,onVault:z,onWake:T,onUnseal:D,onGoToRoundTable:d,onBind:()=>S(!0),ending:Se,setEnding:oe,typed:Ie,setTyped:le,say:W})]})})]})}),e.jsx("p",{className:"lay-bookshelf-a-said",role:"status","aria-live":"polite",children:(R==null?void 0:R.text)??""}),s&&!g&&v.length>1&&e.jsx(Ge,{index:ee,total:v.length,onGo:o=>{var p;return B(((p=v[o])==null?void 0:p.key)??"toc")},labels:v.map(o=>o.word)}),e.jsx(Xe,{children:Be}),M==="shelf"&&e.jsxs("div",{className:"lay-bookshelf-a-chooser",role:"dialog","aria-label":"The shelf",children:[e.jsxs("header",{className:"lay-bookshelf-a-chooser-head",children:[e.jsx("button",{type:"button",className:"lay-bookshelf-a-back",onClick:()=>x(null),children:"‹ Back"}),e.jsx("span",{className:"lay-bookshelf-a-chooser-title",children:"The Bookshelf"})]}),e.jsxs("div",{className:"lay-bookshelf-a-chooser-body",children:[e.jsx("p",{className:"lay-bookshelf-a-chooser-gloss",children:"The present only — the campaigns you are walking. Plans and scrolls wait in the War Room; finished volumes stand in the Library."}),e.jsx("label",{className:"lay-bookshelf-a-sort-label",htmlFor:"lay-bookshelf-a-sort",children:"Order the shelf"}),e.jsx("select",{id:"lay-bookshelf-a-sort",className:"lay-bookshelf-a-field",value:V,onChange:o=>Oe(o.target.value),children:Object.entries(U).map(([o,p])=>e.jsx("option",{value:o,children:p.label},o))}),e.jsxs("button",{type:"button",className:"lay-bookshelf-a-row lay-bookshelf-a-legend-toggle","aria-expanded":Y,onClick:()=>Ae(o=>!o),children:[e.jsx("span",{children:"How to read the shelf"}),e.jsx("span",{"aria-hidden":"true",children:Y?"⌃":"⌄"})]}),Y&&e.jsxs("div",{className:"lay-bookshelf-a-legend",children:[e.jsxs("p",{children:["A book’s ",e.jsx("i",{children:"height"})," is the work inside: tall volumes hold 25+ actions, middling 10+, slim ones fewer."]}),e.jsxs("p",{children:["Its ",e.jsx("i",{children:"ribbon"})," is the difficulty: linen for novice, crimson silk for the adept, gold thread for master work."]}),e.jsxs("p",{children:[e.jsx("b",{children:"The binding ceremony."})," A scroll is a dream still — undated, or untold. When its goal wears a real date ",e.jsx("i",{children:"and"})," the book tells its story, a golden clasp appears: the volume is ready. The binding itself is yours to perform — the realm never binds for you."]})]}),Q&&e.jsx(xe,{offers:X,openId:O,onOpen:o=>{H(o),x(null)}}),e.jsxs("button",{type:"button",className:`lay-bookshelf-a-row lay-bookshelf-a-unwritten${g?" on":""}`,onClick:()=>{H(fe),x(null)},children:[e.jsx("span",{className:"lay-bookshelf-a-row-mark","aria-hidden":"true",children:"🪶"}),e.jsx("span",{className:"lay-bookshelf-a-row-title",children:"A Book to Be Written"})]}),G.length===0?e.jsx(_,{children:"No campaigns are underway. Begin one and it takes its place on this shelf."}):G.map(o=>{const p=he(o,l);return e.jsxs("button",{type:"button",className:`lay-bookshelf-a-row${o.id===O?" on":""}`,style:{"--accent":o.accent},onClick:()=>{H(o.id),x(null)},title:`${o.title} — ${p.done}/${p.total} chapters closed`,children:[e.jsx("span",{className:"lay-bookshelf-a-row-spine","aria-hidden":"true"}),e.jsx("span",{className:"lay-bookshelf-a-row-title",children:o.title}),e.jsxs("span",{className:"lay-bookshelf-a-row-count",children:[p.done,"/",p.total]})]},o.id)}),!Q&&e.jsx(xe,{offers:X,openId:O,onOpen:o=>{H(o),x(null)}}),e.jsx("div",{className:"lay-bookshelf-a-rule",children:e.jsx("span",{children:"the other books"})}),[{key:"councils",mark:"⚖",title:"The Book of Councils"},{key:"forms",mark:"📖",title:"The Book of Forms"},{key:"coin",mark:"⚱",title:"The Book of Coin"},{key:"loop",mark:"🜄",title:"The Book of the Loop"}].map(o=>e.jsxs("button",{type:"button",className:"lay-bookshelf-a-row",onClick:()=>{A(o.key),x(null)},children:[e.jsx("span",{className:"lay-bookshelf-a-row-mark","aria-hidden":"true",children:o.mark}),e.jsx("span",{className:"lay-bookshelf-a-row-title",children:o.title})]},o.key))]})]}),M==="pages"&&s&&e.jsxs("div",{className:"lay-bookshelf-a-chooser",role:"dialog","aria-label":"The pages of this volume",children:[e.jsxs("header",{className:"lay-bookshelf-a-chooser-head",children:[e.jsx("button",{type:"button",className:"lay-bookshelf-a-back",onClick:()=>x(null),children:"‹ Back"}),e.jsx("span",{className:"lay-bookshelf-a-chooser-title",children:s.title})]}),e.jsx("div",{className:"lay-bookshelf-a-chooser-body",children:v.map(o=>e.jsxs("button",{type:"button",className:`lay-bookshelf-a-row lay-bookshelf-a-page-row${o.key===m?" on":""}`,"aria-current":o.key===m?"page":void 0,onClick:()=>{B(o.key),x(null)},children:[e.jsx("span",{className:"lay-bookshelf-a-row-title",children:o.word}),e.jsx("span",{className:"lay-bookshelf-a-page-gloss",children:o.gloss})]},o.key))})]}),q&&s&&e.jsx("div",{className:"lay-bookshelf-a-ceremony",role:"dialog","aria-label":"The Binding Ceremony",children:e.jsxs("div",{className:"lay-bookshelf-a-ceremony-card",children:[e.jsx("p",{className:"lay-bookshelf-a-kicker",children:"The Binding Ceremony"}),e.jsx("h3",{className:"lay-bookshelf-a-ceremony-title",children:s.title}),e.jsxs("p",{className:"lay-bookshelf-a-ceremony-words",children:["The goal wears a date: ",da(s)??"a dated path exists",". And its story is told — the book knows what it is for. Bind this scroll, and it takes its place among the books: sealed, shelved, and never silently demoted. A dream becomes a quest here."]}),e.jsxs("div",{className:"lay-bookshelf-a-ceremony-acts",children:[e.jsx("button",{type:"button",className:"lay-bookshelf-a-secondary",onClick:()=>S(!1),children:"Not yet"}),e.jsx("button",{type:"button",className:"lay-bookshelf-a-primary",onClick:()=>{b==null||b(s.id),S(!1),W("Bound — it stands among the books now.")},children:"⚭ Bind the volume"})]})]})}),I==="forms"&&e.jsx(Ke,{onClose:()=>A(null)}),I==="coin"&&e.jsx(qe,{onClose:()=>A(null)}),I==="loop"&&e.jsx(Ye,{onClose:()=>A(null)}),I==="councils"&&e.jsx(Je,{onClose:()=>A(null)})]})}function xe({offers:a,openId:l,onOpen:c}){return a.length===0?null:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-a-rule",children:e.jsx("span",{children:"offered — yours if you take them"})}),a.map(r=>e.jsxs("button",{type:"button",className:`lay-bookshelf-a-row lay-bookshelf-a-offer-row${r.id===l?" on":""}`,style:{"--accent":r.accent},onClick:()=>c(r.id),title:`${r.title} — offered, not yours yet. Open it to read what it asks; nothing here is scheduled until you take it.`,children:[e.jsx("span",{className:"lay-bookshelf-a-row-mark","aria-hidden":"true",children:"✦"}),e.jsx("span",{className:"lay-bookshelf-a-row-title",children:r.title})]},r.id))]})}const ya=`
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

/* ── the bar (B106) — it stands with the fixed head, never in the scroller */
.lay-bookshelf-a-views { flex: 0 0 auto; padding: 0 0.9rem; }
.lay-bookshelf-a-views .book-views { margin: 0.25rem 0 0.1rem; }

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
`;export{ka as default};
