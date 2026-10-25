import{r as d,aE as Q,aD as ze,aF as so,bg as lo,aH as io,aK as no,b5 as ro,b6 as co,aP as fe,aG as ho,j as e,C as fo,ap as po,N as ee,aO as bo,A as Ce,R as B,aV as uo,aW as ko,aX as yo,aY as mo,bh as xo,b1 as go,aM as pe,aN as be,b3 as vo,z as wo,y as jo,b9 as Ae,b0 as No,aL as $e,b2 as So,bb as Pe,aQ as Bo,a as Io,aR as zo,i as H,a$ as Co,b4 as Ao,aJ as $o,b7 as Oe,b8 as Po,aS as Oo,aT as To,aU as Ro,ba as Eo,aZ as Te,aI as Lo}from"./index-DbsxwQZ3.js";import{c as Fo}from"./shelfStanding-xKjbdxIA.js";const oe=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV"],j="__a-book-to-be-written__",qo={novice:1,intermediate:2,expert:3,master:4},ue={shelf:{label:"Shelf",fn:(n,i)=>(n.order??Te)-(i.order??Te)},alpha:{label:"A–Z",fn:(n,i)=>n.title.localeCompare(i.title)},difficulty:{label:"Difficulty",fn:(n,i)=>me(i)-me(n)},left:{label:"Tasks left",fn:(n,i)=>Ee(i)-Ee(n)},tier:{label:"Stature",fn:(n,i)=>Re[ye(i)]-Re[ye(n)]}},Re={tall:3,mid:2,short:1},ke=[{key:"councils",title:"The Book of Councils",line:"the realm’s case law — waiting and ruled"},{key:"forms",title:"The Book of Forms",line:"the craft of being heard"},{key:"coin",title:"The Book of Coin",line:"rules written before the coin moves"},{key:"loop",title:"The Book of the Loop",line:"how a thing becomes a deed"},{key:"sundays",title:"The Book of Sundays",line:"every week that has been weighed"}];function Vo(n){return n.quests.reduce((i,h)=>i+h.tasks.length,0)}function Ee(n){return n.quests.reduce((i,h)=>i+h.tasks.filter(c=>c.status!=="done"&&!H(c)).length,0)}function ye(n){const i=Vo(n);return i>=25?"tall":i>=10?"mid":"short"}function me(n){return Math.max(1,...n.quests.map(i=>qo[i.difficulty]??1))}function Do(n){const i=me(n);return i>=3?"gold":i===2?"crimson":"linen"}function Mo(n){if(n.quarter)return`sworn to ${n.quarter} at the Muster`;const i=n.quests.flatMap(c=>c.tasks.filter(N=>N.due&&!H(N))).sort((c,N)=>{const y=b=>b.boss&&b.hardDue?0:b.hardDue?1:b.boss?2:3;return y(c)-y(N)||(c.due<N.due?-1:1)})[0];return i?`"${i.title.length>48?`${i.title.slice(0,46)}…`:i.title}" — ${i.hardDue?"⚑ ":""}dated ${i.due}`:"a dated path exists"}const Le=[{key:"todo",label:"To do"},{key:"waiting",label:"In other hands"},{key:"done",label:"Sealed"}],Ho={todo:"To do",waiting:"In other hands",done:"Sealed"};function _o(){const[n,i]=d.useState(null);return d.useEffect(()=>{const h=typeof window>"u"?null:window.visualViewport;if(!h)return;const c=()=>{const N=window.innerHeight-h.height;i(N>120?{height:h.height,top:h.offsetTop}:null)};return c(),h.addEventListener("resize",c),h.addEventListener("scroll",c),()=>{h.removeEventListener("resize",c),h.removeEventListener("scroll",c)}},[]),n}function Yo({epics:n,meta:i=null,today:h=null,statuses:c,openTo:N,onSelectQuest:y,onGoToRoundTable:b,onBind:te,onTakeOffering:I,offerPlacement:xe,onAddQuest:ge,onAddEpic:ae,onMoveTask:ve,onEditQuest:_,onEditEpic:F,onVault:se,onWake:$,onUnseal:P,onStrike:W,onSetWaits:Fe,onClose:O,onVolumeShown:qe}){const[K,Ve]=d.useState("shelf"),x=d.useMemo(()=>{var o;return[...n].sort(((o=ue[K])==null?void 0:o.fn)??ue.shelf.fn)},[n,K]),we=d.useMemo(()=>x.filter(Q),[x]),X=d.useMemo(()=>ze(x),[x]),[le,ie]=d.useState(()=>so([...ze(x),...x],N)),g=le===j,t=g?null:x.find(o=>o.id===le)??X[0]??x[0]??null,[q,T]=d.useState(t?"toc":"shelf"),[De,Me]=d.useState("toc"),[a,u]=d.useState(null),[je,z]=d.useState(null),[Y,V]=d.useState(null),[ne,R]=d.useState(""),[re,E]=d.useState(null),[C,L]=d.useState(null),Z=d.useMemo(()=>i?lo(i,h).filter(o=>!o.current).length:0,[i,h]),He=d.useMemo(()=>ke.filter(o=>o.key!=="sundays"||Z>0),[Z]),ce=d.useRef(null),de=_o();d.useEffect(()=>{var o,s;u(null),R(""),z(null),(s=(o=ce.current)==null?void 0:o.scrollTo)==null||s.call(o,{top:0})},[le]),d.useEffect(()=>{var o,s;u(null),R(""),(s=(o=ce.current)==null?void 0:o.scrollTo)==null||s.call(o,{top:0})},[q]),d.useEffect(()=>{if(!re)return;const o=setTimeout(()=>E(null),4e3);return()=>clearTimeout(o)},[re]),d.useEffect(()=>{const o=s=>{s.key==="Escape"&&!C&&(O==null||O())};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[O,C]);const D=(o,s)=>{s==null||s(),E(o)},m=t?Q(t):!1,M=t?io(t):!1,J=t?no(t):!1,v=t?ro(t,{canStrike:!!W,isStanding:co(t),isOffered:m}):{show:!1,primary:null,strike:!1},U=d.useMemo(()=>{if(!t)return[];const o=[];return m&&I&&o.push({id:"take",word:"✦ Take this road — make it mine",note:"nothing in it is scheduled or counted until you do",tone:"primary"}),!m&&!M&&J&&o.push({id:"bind",word:"⚭ Perform the Binding",note:"the goal wears a date and the book tells its story",tone:"primary"}),o.push({id:"review",word:"⚔ Review this plan with the War Room",note:"the seats read what is still open; finished steps are history",tone:"plain"}),v.show&&v.primary==="reopen"&&o.push({id:"reopen",word:"Reopen it",note:"the ending is forgotten and the road returns to your days",tone:"plain"}),v.show&&v.primary==="wake"&&o.push({id:"wake",word:"Begin it",note:"it returns to your days",tone:"plain"}),v.show&&v.primary==="sleep"&&o.push({id:"sleep",word:"Mark it planned",note:"out of your days until you begin it — reversible",tone:"plain"}),F&&o.push({id:"rename",word:"Rename this volume",note:"its title and its one line",tone:"plain"}),v.strike&&o.push({id:"strike",word:"Strike it",note:"remove it entirely — there is no undo",tone:"danger"}),o},[t,m,M,J,v.show,v.primary,v.strike,I,F]),G=(o,s)=>{u(null),D(o,s)},_e=o=>{if(t){if(o==="take")return G("Taken — the road is yours.",()=>I==null?void 0:I(t.id));if(o==="bind")return u(null),V(t);if(o==="review")return u(null),b==null?void 0:b(t.id);if(o==="reopen")return G("Reopened — the road returns to your days.",()=>P==null?void 0:P(t.id));if(o==="wake")return G("Begun — it is in your days again.",()=>$==null?void 0:$(t.id));if(o==="sleep")return G("Marked planned — out of your days until you begin it.",()=>se==null?void 0:se(t.id));if(o==="rename"){z("__volume__");return}}},S=(()=>{if((a==null?void 0:a.kind)!=="task"||!t)return null;const o=t.quests.find(l=>l.id===a.questId),s=o==null?void 0:o.tasks.find(l=>l.id===a.id);return!o||!s?null:{quest:o,task:s,lane:s.status,title:s.title,questTitle:o.title}})(),We=()=>{if((a==null?void 0:a.kind)==="volume"){if(a.id===j)return{word:"Begin a new volume",note:"an empty book, and the table to argue it at",onPress:()=>{ie(j),T("volume")}};const s=x.find(l=>l.id===a.id);return s?{word:`Open ${s.title.length>26?`${s.title.slice(0,24)}…`:s.title}`,note:Q(s)?"offered — read what it asks before you take it":"its table of contents",onPress:()=>{ie(s.id),T("toc")}}:null}if((a==null?void 0:a.kind)==="tome"){const s=ke.find(l=>l.key===a.id);return{word:`Open ${(s==null?void 0:s.title)??"the book"}`,note:(s==null?void 0:s.line)??"",onPress:()=>L(a.id)}}if((a==null?void 0:a.kind)==="chapter"&&t){const s=t.quests.findIndex(f=>f.id===a.id),l=t.quests[s];return l?(c.get(l.id)??l.status)==="locked"?{word:"A sealed chapter",note:`it ${go(l,n,c)} — nothing to open yet`,disabled:!0,onPress:()=>{}}:{word:`Open chapter ${oe[s]??s+1}`,note:l.title,onPress:()=>y==null?void 0:y(l.id)}:null}if((a==null?void 0:a.kind)==="task")return S?{word:"Open the chapter",note:S.questTitle,onPress:()=>y==null?void 0:y(a.questId)}:null;if((a==null?void 0:a.kind)==="act"&&t){const s=U.find(l=>l.id===a.id);return s?s.id==="strike"?{word:"Strike it",note:ne.trim()===t.title?"this cannot be undone":"type the volume’s title above to arm this",tone:"danger",disabled:ne.trim()!==t.title,onPress:()=>{var l;W==null||W(t.id),u(null),R(""),ie(((l=X.find(r=>r.id!==t.id))==null?void 0:l.id)??j),T("shelf")}}:{word:s.word,note:s.note,tone:s.tone,onPress:()=>_e(s.id)}:null}if(g)return{word:"⚔ Take it to the War Room",note:"the seats argue what it demands and whether now is its time",onPress:()=>b==null?void 0:b()};if(!t)return{word:"⚔ Take it to the War Room",note:"a first campaign is argued before it is written",onPress:()=>b==null?void 0:b()};if(m&&I)return{word:"✦ Take this road — make it mine",note:"nothing in it is scheduled or counted until you do",onPress:()=>D("Taken — the road is yours.",()=>I(t.id))};if(!M&&J)return{word:"⚭ Perform the Binding",note:"the goal wears a date and the book tells its story",onPress:()=>V(t)};if(pe(t))return{word:"Reopen it",note:"closed — reopen it if you sealed it by mistake",onPress:()=>D("Reopened — the road returns to your days.",()=>P==null?void 0:P(t.id))};if(be(t))return{word:"Begin it",note:"planned — bring it back into your days",onPress:()=>D("Begun — it is in your days again.",()=>$==null?void 0:$(t.id))};const o=t.quests.findIndex(s=>{const l=c.get(s.id)??s.status;return l!=="complete"&&l!=="locked"});return o>=0?{word:`Open chapter ${oe[o]??o+1}`,note:t.quests[o].title,onPress:()=>y==null?void 0:y(t.quests[o].id)}:{word:"⚔ Review this plan with the War Room",note:t.quests.length?"every chapter is closed — is the book finished?":"the book has no chapters yet",onPress:()=>b==null?void 0:b(t.id)}},Ke=()=>{const o=[];if((a==null?void 0:a.kind)==="chapter"&&_){const s=t==null?void 0:t.quests.find(r=>r.id===a.id),l=s?c.get(s.id)??s.status:null;s&&l!=="locked"&&o.push(e.jsx(B,{tone:"plain",onPress:()=>{z(s.id),T("toc")},note:"its name only",title:`Rename "${s.title}"`,children:"Rename"},"rename-chapter"))}return(a==null?void 0:a.kind)==="task"&&ve&&S&&(vo(a.id)?o.push(e.jsx(B,{tone:"plain",disabled:!0,note:wo(jo(a.id)).note,title:"This step is sealed by its own act, not by moving a card",children:"Sealed by the act"},"sealed-by-act")):Le.filter(s=>s.key!==S.lane).forEach(s=>{o.push(e.jsx(B,{tone:"plain",onPress:()=>D(`Moved to ${s.label}.`,()=>ve(a.questId,a.id,s.key)),note:"on this board",title:`Move it to ${s.label}`,children:s.label},`lane-${s.key}`))})),(a==null?void 0:a.kind)==="act"&&a.id==="strike"&&o.push(e.jsx(B,{tone:"plain",onPress:()=>{u(null),R("")},note:"leave it standing",title:"Keep the volume",children:"Keep it"},"keep")),a&&a.kind!=="act"&&a.kind!=="task"&&o.push(e.jsx(B,{tone:"plain",onPress:()=>u(null),note:"back to the volume",title:"Clear the selection",children:"Clear"},"unaim")),o},Xe=()=>{var l,r,f,k;let o="This volume",s=(t==null?void 0:t.title)??"No volume open";if(g)o="A new volume",s="A Book to Be Written";else if((a==null?void 0:a.kind)==="volume")o=a.id===j?"Selected":"Selected volume",s=a.id===j?"A Book to Be Written":((l=x.find(p=>p.id===a.id))==null?void 0:l.title)??"";else if((a==null?void 0:a.kind)==="tome")o="Selected book",s=((r=ke.find(p=>p.key===a.id))==null?void 0:r.title)??"";else if((a==null?void 0:a.kind)==="chapter"){const p=(t==null?void 0:t.quests.findIndex(he=>he.id===a.id))??-1;o=`Selected chapter ${oe[p]??p+1}`,s=((f=t==null?void 0:t.quests[p])==null?void 0:f.title)??""}else(a==null?void 0:a.kind)==="task"?(o=S?`Selected step · ${Ho[S.lane]}`:"Selected step",s=(S==null?void 0:S.title)??""):(a==null?void 0:a.kind)==="act"?(o="Selected act",s=((k=U.find(p=>p.id===a.id))==null?void 0:k.word)??""):t&&(o=pe(t)?`Closed ${Ae(t.sealedAt)}`:be(t)?`Planned since ${String(t.vaultedAt).slice(0,10)}`:m?"Offered — not yours yet":M?"Bound":"A scroll still");return e.jsxs("div",{className:"lay-bookshelf-c-aim",children:[e.jsx("span",{className:"lay-bookshelf-c-aimkind",children:o}),e.jsx("span",{className:"lay-bookshelf-c-aimtext",children:s})]})},Ne=t||g?g?[{key:"shelf",word:"Shelf"},{key:"volume",word:"Volume"}]:[{key:"shelf",word:"Shelf"},{key:"book",word:"The book"},{key:"volume",word:"Volume"}]:[{key:"shelf",word:"Shelf"}],w=q==="shelf"||Ne.some(o=>o.key===q)||t&&!g&&fe(q)?q:"shelf";ho(w==="shelf"||g?null:t==null?void 0:t.id,qe);const Ye=o=>{Me(o),T(o)},Se=o=>{const s=Lo(o,c),l=(a==null?void 0:a.kind)==="volume"&&a.id===o.id,r=o.id===(t==null?void 0:t.id),f=Q(o);return e.jsxs("button",{type:"button",className:`lay-bookshelf-c-vol${l?" is-aimed":""}${r?" is-here":""}`,style:{"--accent":o.accent},"aria-pressed":l,onClick:()=>u(l?null:{kind:"volume",id:o.id}),children:[e.jsx("span",{className:`lay-bookshelf-c-spine ribbon-${Do(o)} size-${ye(o)}`,"aria-hidden":"true"}),e.jsxs("span",{className:"lay-bookshelf-c-volbody",children:[e.jsxs("span",{className:"lay-bookshelf-c-voltitle",children:[f&&e.jsx("span",{className:"lay-bookshelf-c-offermark","aria-hidden":"true",children:"✦ "}),o.title]}),e.jsxs("span",{className:"lay-bookshelf-c-volmeta",children:[s.done,"/",s.total," chapters closed",r?" · open now":"",f?" · offered, not yours yet":""]})]})]},o.id)},Be=()=>we.length===0?null:e.jsxs("section",{className:"lay-bookshelf-c-section",children:[e.jsxs("h3",{className:"lay-bookshelf-c-head",children:["Offered",e.jsx("span",{className:"lay-bookshelf-c-sub",children:"yours if you take them — read one before you do"})]}),e.jsx("div",{className:"lay-bookshelf-c-rows",children:we.map(Se)})]},"offered"),Ie=xe==="lead"||xe==="B",Ze=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-sorts",role:"group","aria-label":"How the shelf is ordered",children:Object.entries(ue).map(([o,s])=>e.jsx("button",{type:"button",className:`lay-bookshelf-c-sort${K===o?" on":""}`,"aria-pressed":K===o,onClick:()=>Ve(o),children:s.label},o))}),Ie&&Be(),e.jsx("div",{className:"lay-bookshelf-c-group",children:"Yours"}),e.jsxs("section",{className:"lay-bookshelf-c-section",children:[e.jsxs("h3",{className:"lay-bookshelf-c-head",children:["Your campaigns",e.jsx("span",{className:"lay-bookshelf-c-sub",children:"underway — the present. Plans and unbound scrolls stand in the War Room; closed volumes rest in the Library."})]}),X.length===0?e.jsx(ee,{children:"No campaign is underway. That is a beginning, not a gap — a life project becomes a volume once the table has argued what it demands."}):e.jsx("div",{className:"lay-bookshelf-c-rows",children:X.map(Se)})]}),e.jsx("section",{className:"lay-bookshelf-c-section",children:e.jsx("div",{className:"lay-bookshelf-c-rows",children:e.jsxs("button",{type:"button",className:`lay-bookshelf-c-vol is-unwritten${(a==null?void 0:a.kind)==="volume"&&a.id===j?" is-aimed":""}`,"aria-pressed":(a==null?void 0:a.kind)==="volume"&&a.id===j,onClick:()=>u((a==null?void 0:a.kind)==="volume"&&a.id===j?null:{kind:"volume",id:j}),children:[e.jsx("span",{className:"lay-bookshelf-c-spine is-quill","aria-hidden":"true",children:"🪶"}),e.jsxs("span",{className:"lay-bookshelf-c-volbody",children:[e.jsx("span",{className:"lay-bookshelf-c-voltitle",children:"A Book to Be Written"}),e.jsx("span",{className:"lay-bookshelf-c-volmeta",children:"Life is not over. There is always another volume."})]})]})})}),e.jsx("div",{className:"lay-bookshelf-c-group",children:"Not yours"}),!Ie&&Be(),e.jsxs("section",{className:"lay-bookshelf-c-section",children:[e.jsxs("h3",{className:"lay-bookshelf-c-head",children:["The other books",e.jsx("span",{className:"lay-bookshelf-c-sub",children:"not campaigns — books the realm keeps"})]}),e.jsx("div",{className:"lay-bookshelf-c-rows",children:He.map(o=>{const s=(a==null?void 0:a.kind)==="tome"&&a.id===o.key;return e.jsxs("button",{type:"button",className:`lay-bookshelf-c-vol is-tome${s?" is-aimed":""}`,"aria-pressed":s,onClick:()=>u(s?null:{kind:"tome",id:o.key}),children:[e.jsx("span",{className:"lay-bookshelf-c-spine is-tome","aria-hidden":"true"}),e.jsxs("span",{className:"lay-bookshelf-c-volbody",children:[e.jsx("span",{className:"lay-bookshelf-c-voltitle",children:o.title}),e.jsx("span",{className:"lay-bookshelf-c-volmeta",children:o.key==="sundays"?`${Z} past ${Z===1?"week":"weeks"}, each with what it came to`:o.line})]})]},o.key)})})]})]}),Je=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:"Table of Contents"}),t.quests.length===0?e.jsx(ee,{children:"This volume has no chapters yet. Write one below, or take the whole plan to the War Room and let the seats argue what it should hold."}):e.jsx("ol",{className:"lay-bookshelf-c-chapters",children:t.quests.map((o,s)=>{const l=c.get(o.id)??o.status,r=No(o),f=l==="locked",k=l==="complete",p=(a==null?void 0:a.kind)==="chapter"&&a.id===o.id;return je===o.id?e.jsx("li",{className:"lay-bookshelf-c-quill",children:e.jsx($e,{value:o.title,onSave:he=>{_==null||_(o.id,he),z(null),E("Renamed.")},onCancel:()=>z(null)})},o.id):e.jsx("li",{children:e.jsxs("button",{type:"button",className:`lay-bookshelf-c-ch chapter-${l}${p?" is-aimed":""}`,"aria-pressed":p,onClick:()=>u(p?null:{kind:"chapter",id:o.id}),children:[e.jsxs("span",{className:"lay-bookshelf-c-numeral",children:[oe[s]??s+1,"."]}),e.jsxs("span",{className:"lay-bookshelf-c-chbody",children:[e.jsx("span",{className:"lay-bookshelf-c-chtitle",children:f?"A Sealed Chapter":o.title}),!f&&r.total>0&&e.jsx("span",{className:"lay-bookshelf-c-chbar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${r.percent}%`}})})]}),e.jsx("span",{className:"lay-bookshelf-c-folio",children:k?"✓":f?"🔒":`${r.done}/${r.total}`})]})},o.id)})}),ge&&e.jsx(So,{onAdd:o=>ge(t.id,o)})]}),Ue=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:Pe("road")}),e.jsx("div",{className:"book-leaf",children:e.jsx(Bo,{book:t,epics:n,statuses:c,today:h??Io(),onSelectQuest:o=>u({kind:"chapter",id:o}),onSetWaits:Fe,titleAct:"choose it; the rail opens it"})})]}),Ge=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:Pe("register")}),e.jsx("div",{className:"book-leaf",children:e.jsx(zo,{book:t})})]}),Qe=()=>{const o=t.quests.filter(s=>(c.get(s.id)??s.status)!=="locked"&&s.tasks.some(l=>!H(l))).sort((s,l)=>{const r=f=>f.tasks.some(k=>k.status!=="done"&&!H(k));return(r(l)?1:0)-(r(s)?1:0)});return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:"The Board — chapters as columns"}),o.length===0?e.jsx(ee,{children:"No chapters carry tasks yet — the board waits for work."}):o.map(s=>e.jsxs("section",{className:"lay-bookshelf-c-section",children:[e.jsxs("h3",{className:"lay-bookshelf-c-head",children:[s.title,e.jsx("span",{className:"lay-bookshelf-c-sub",children:"tap a step to select it; the lanes are in the rail"})]}),Le.map(l=>{const r=s.tasks.filter(k=>k.status===l.key&&!H(k)),f=l.key==="done"?r.slice(0,5):r;return e.jsxs("div",{className:"lay-bookshelf-c-lane",children:[e.jsxs("div",{className:"lay-bookshelf-c-lanelabel",children:[l.label," · ",r.length]}),e.jsxs("div",{className:"lay-bookshelf-c-rows",children:[f.map(k=>{const p=(a==null?void 0:a.kind)==="task"&&a.id===k.id;return e.jsx("button",{type:"button",className:`lay-bookshelf-c-step${p?" is-aimed":""}`,style:{"--accent":t.accent},"aria-pressed":p,onClick:()=>u(p?null:{kind:"task",id:k.id,questId:s.id}),children:k.title},k.id)}),r.length===0&&e.jsx("p",{className:"lay-bookshelf-c-laneempty",children:"nothing here"}),l.key==="done"&&r.length>5&&e.jsxs("p",{className:"lay-bookshelf-c-laneempty",children:["+ ",r.length-5," more sealed"]})]})]},l.key)})]},s.id))]})},eo=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:"A Book to Be Written"}),e.jsxs("p",{className:"lay-bookshelf-c-prose",children:["What this book holds is not decided alone. Bring the idea to the War Room — the seats will argue what it demands, what it trains, and whether now is its time."," ",ae?"Or take the quill and write it plainly.":"Or voice the campaign to your squire — a spoken volume is written whole."]}),ae&&e.jsx(Co,{onAdd:o=>{ae(o),E("The volume is written.")}})]}),oo=()=>{const o=Ao(t),s=$o(t);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:"The volume"}),je==="__volume__"?e.jsx("div",{className:"lay-bookshelf-c-quill",children:e.jsx($e,{value:t.title,subtitle:t.tagline??"",subtitleLabel:"the volume's one line…",onSave:l=>{F==null||F(t.id,l),z(null),E("Renamed.")},onCancel:()=>z(null)})}):t.tagline&&e.jsx("p",{className:"lay-bookshelf-c-tagline",children:t.tagline}),m&&e.jsx("p",{className:"lay-bookshelf-c-offer",children:"This road is on the offered shelf. It is not in your realm yet — nothing in it is scheduled, counted, or on your list until you take it."}),t.description&&e.jsx("p",{className:"lay-bookshelf-c-prose",children:t.description}),!m&&!M&&!J&&e.jsxs("p",{className:"lay-bookshelf-c-hint",children:[!Oe(t)&&!Po(t)?"A scroll still — its goal wears no date and its story is untold. Give the boss a real deadline and the book a real description, and the clasp will appear.":Oe(t)?"A scroll still — its story is untold. Tell the book what it is for and what done means, and the clasp will appear.":"A scroll still — give the goal a real date (a sworn quarter, a dated boss, a hard deadline), and the clasp will appear."," ","Or take the whole plan to the table first — it may be worth binding, or worth setting down."]}),e.jsxs("div",{className:"lay-bookshelf-c-standing",children:[s.total>0&&e.jsxs("div",{className:"lay-bookshelf-c-bar",role:"progressbar","aria-valuenow":s.percent,"aria-valuemin":0,"aria-valuemax":100,"aria-label":`${s.done} of ${s.total} steps across the book`,children:[e.jsx("span",{className:"lay-bookshelf-c-bartrack",children:e.jsx("span",{className:"lay-bookshelf-c-barfill",style:{width:`${s.percent}%`}})}),e.jsxs("span",{className:"lay-bookshelf-c-barpct",children:[s.done,"/",s.total," steps"]})]}),e.jsxs("p",{className:"lay-bookshelf-c-xp",children:[o.earned,"/",o.potential," XP"]})]}),U.length>0&&e.jsxs("section",{className:"lay-bookshelf-c-section",children:[e.jsxs("h3",{className:"lay-bookshelf-c-head",children:["What can be done with this volume",e.jsx("span",{className:"lay-bookshelf-c-sub",children:"tap one to aim the rail — nothing here writes until the rail is pressed"})]}),e.jsx("div",{className:"lay-bookshelf-c-rows",children:U.map(l=>{const r=(a==null?void 0:a.kind)==="act"&&a.id===l.id;return e.jsxs("button",{type:"button",className:`lay-bookshelf-c-actrow tone-${l.tone}${r?" is-aimed":""}`,"aria-pressed":r,onClick:()=>{const f=r?null:{kind:"act",id:l.id};u(f),(!f||l.id!=="strike")&&R("")},children:[e.jsx("span",{className:"lay-bookshelf-c-actword",children:l.word}),e.jsx("span",{className:"lay-bookshelf-c-actnote",children:l.note})]},l.id)})})]}),(a==null?void 0:a.kind)==="act"&&a.id==="strike"&&e.jsxs("div",{className:"lay-bookshelf-c-strike",children:[e.jsxs("label",{htmlFor:"lay-bookshelf-c-typed",children:["This cannot be undone. Type ",e.jsx("strong",{children:t.title})," to strike it. Take a copy from the Saddlebag first if you want one."]}),e.jsx("input",{id:"lay-bookshelf-c-typed",className:"lay-bookshelf-c-input",value:ne,onChange:l=>R(l.target.value),placeholder:t.title,autoComplete:"off"})]}),e.jsx(Oo,{epic:t}),!m&&e.jsx(To,{epic:t,scope:"epic"}),!m&&e.jsx(Ro,{scope:"epic",targetId:t.id,targetTitle:t.title})]})},A=We(),to=re??"Nothing above this rail changes your realm.",ao=()=>{if(g)return"A new volume — nothing written yet";if(!t)return"No campaign is underway";const o=Fo(t,c);return pe(t)?`Closed ${Ae(t.sealedAt)} — ${Eo(t)}`:be(t)?`Planned since ${String(t.vaultedAt).slice(0,10)} — out of your days until you begin it.`:m?`${o} · offered — not yours yet`:`${o}.`};return e.jsxs("div",{className:"lay-bookshelf-c",role:"dialog","aria-label":"The Bookshelf",style:de?{height:`${de.height}px`,top:`${de.top}px`}:void 0,children:[e.jsx("style",{children:Wo}),e.jsxs("header",{className:"lay-bookshelf-c-head-band",children:[e.jsxs("div",{className:"lay-bookshelf-c-headtext",children:[e.jsx("div",{className:"lay-bookshelf-c-kicker",children:"The Bookshelf"}),e.jsx("h2",{className:"lay-bookshelf-c-title",children:g?"A Book to Be Written":(t==null?void 0:t.title)??"The shelf"}),e.jsx("p",{className:"lay-bookshelf-c-state",children:ao()})]}),e.jsx(fo,{onClose:O,name:"the Bookshelf"})]}),e.jsx(po,{rail:e.jsxs("div",{className:"lay-bookshelf-c-rail",children:[Xe(),e.jsxs(Ce,{note:to,children:[A?e.jsx(B,{tone:A.tone??"primary",onPress:A.onPress,disabled:A.disabled,note:A.note,title:A.word,children:A.word}):e.jsx(B,{tone:"plain",onPress:O,note:"back to the room",title:"Close the Bookshelf",children:"Close the shelf"}),Ke()]}),e.jsx(Ce,{dense:!0,children:Ne.map(o=>{const s=o.key==="book"?fe(w):w===o.key;return e.jsx(B,{tone:s?"primary":"plain",onPress:()=>T(o.key==="book"?De:o.key),title:`Show ${o.word}`,children:o.word},o.key)})})]}),children:e.jsx("div",{className:"lay-bookshelf-c-page",ref:ce,children:w==="shelf"?Ze():g?eo():t?e.jsxs(e.Fragment,{children:[e.jsx(bo,{page:fe(w)?w:null,onChoose:Ye,fill:!0,dark:!0}),w==="toc"?Je():w==="road"?Ue():w==="board"?Qe():w==="register"?Ge():oo()]}):e.jsx(ee,{children:"No volume is open. Choose one from the shelf."})})}),Y&&e.jsx("div",{className:"lay-bookshelf-c-scrim",onClick:()=>V(null),children:e.jsxs("div",{className:"lay-bookshelf-c-ceremony",onClick:o=>o.stopPropagation(),children:[e.jsx("div",{className:"lay-bookshelf-c-kicker",children:"The Binding Ceremony"}),e.jsx("h3",{className:"lay-bookshelf-c-title",children:Y.title}),e.jsxs("p",{className:"lay-bookshelf-c-prose",children:["The goal wears a date: ",Mo(Y),". And its story is told — the book knows what it is for. Bind this scroll, and it takes its place among the books — sealed, shelved, and never silently demoted. A dream becomes a quest here."]}),e.jsxs("div",{className:"lay-bookshelf-c-ceremony-acts",children:[e.jsx("button",{type:"button",className:"lay-bookshelf-c-cbtn",onClick:()=>V(null),children:"Not yet"}),e.jsx("button",{type:"button",className:"lay-bookshelf-c-cbtn is-seal",onClick:()=>{te==null||te(Y.id),V(null),E("Bound — it takes its place among the books.")},children:"⚭ Bind the volume"})]})]})}),C==="forms"&&e.jsx(uo,{onClose:()=>L(null)}),C==="coin"&&e.jsx(ko,{onClose:()=>L(null)}),C==="loop"&&e.jsx(yo,{onClose:()=>L(null)}),C==="councils"&&e.jsx(mo,{onClose:()=>L(null)}),C==="sundays"&&e.jsx(xo,{meta:i,today:h,onClose:()=>L(null)})]})}const Wo=`
.lay-bookshelf-c {
  position: fixed; left: 0; right: 0; top: 0; z-index: 60;
  display: flex; flex-direction: column;
  height: 100dvh; max-height: 100dvh;
  background: var(--parchment, #1c1710); color: var(--ink, #e9dcc0);
}

/* 16px EXACTLY on anything that takes typed text — below it iOS zooms the whole
   surface in on focus and never zooms back out. Written in px on purpose, and
   set on the CARD so the three embedded writing surfaces (the quills, the
   Brief, the Tuck) inherit it rather than each being trusted to remember. */
.lay-bookshelf-c input,
.lay-bookshelf-c textarea,
.lay-bookshelf-c select { font-size: 16px; }

/* AND 44px ON THEIR BUTTONS, for the same reason and by the same route. The
   card forced the type size on the five embedded ruled surfaces and left their
   TARGETS at desktop size — .quill-open is about 33pt tall, .quill-add about
   27pt, .quill-cancel about 28pt — so the header's claim that the §5 targets
   finding is repaired was true of everything this file draws itself and false
   of everything it borrows. The .brief-section wrapper is what the Brief and
   the Tuck both actually carry (there is no .brief-panel and no .tuck-chat
   anywhere in the tree), so the rule names classes that exist.
   NO BACKTICK MAY EVER APPEAR IN THIS LITERAL — it terminates the string and
   throws at import time, which once took the whole app down. */
.lay-bookshelf-c .quill-open,
.lay-bookshelf-c .quill-add,
.lay-bookshelf-c .quill-cancel,
.lay-bookshelf-c .brief-section button { min-height: 44px; padding-block: 10px; }

.lay-bookshelf-c-head-band {
  flex: none; display: flex; align-items: flex-start; justify-content: space-between; gap: 12px;
  padding: calc(env(safe-area-inset-top, 0px) + 10px) calc(env(safe-area-inset-right, 0px) + 12px) 10px calc(env(safe-area-inset-left, 0px) + 16px);
  border-bottom: 1px solid var(--border, #3d3320);
}
.lay-bookshelf-c-headtext { min-width: 0; }
.lay-bookshelf-c-kicker { font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: var(--gold-bright, #f4c95d); }
.lay-bookshelf-c-title {
  margin: 2px 0 0; font-size: 19px; font-weight: 500; line-height: 1.2;
  font-family: Cinzel, Georgia, serif; color: var(--ink, #e9dcc0);
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
}
.lay-bookshelf-c-state { margin: 4px 0 0; font-size: 13px; line-height: 1.4; color: var(--ink-dim, #a8987a); }
.lay-bookshelf-c .lay-close {
  flex: none; min-width: 44px; min-height: 44px; font-size: 22px;
  background: none; border: 1px solid var(--border, #3d3320); border-radius: 8px; color: var(--ink-dim, #a8987a);
}

.lay-bookshelf-c .lay-waterline { flex: 1; min-height: 0; display: flex; flex-direction: column; }
.lay-bookshelf-c .lay-above { flex: 1; min-height: 0; display: flex; flex-direction: column; }

/* THE ONE SCROLLER, vertical only. Nothing inside it carries its own overflow,
   so a flick can never be swallowed by a nested pane — and overflow-x is shut
   because the desktop page's fixed-width children are what squeeze the
   colophon into a noodle at this width. */
.lay-bookshelf-c-page {
  flex: 1; min-height: 0; overflow-y: auto; overflow-x: hidden; -webkit-overflow-scrolling: touch;
  padding: 12px calc(env(safe-area-inset-right, 0px) + 16px) 20px calc(env(safe-area-inset-left, 0px) + 16px);
}
.lay-bookshelf-c .lay-nothing { color: var(--ink-dim, #a8987a); font-size: 15px; line-height: 1.55; padding: 20px 2px; margin: 0; }

.lay-bookshelf-c-label {
  font-size: 12px; letter-spacing: .16em; text-transform: uppercase;
  color: var(--gold-bright, #f4c95d); margin: 2px 0 12px;
}
.lay-bookshelf-c-section { margin: 0 0 22px; }
.lay-bookshelf-c-head {
  margin: 0 0 8px; font-size: 15px; font-weight: 600; color: var(--gold-bright, #f4c95d);
  display: flex; flex-direction: column; gap: 3px;
}
.lay-bookshelf-c-sub { font-size: 13px; font-weight: 400; color: var(--ink-dim, #a8987a); line-height: 1.45; }
/* THE SHELF'S TWO GROUPS ON THE PHONE (D16, 2026-09-04) — the desktop's own
   .shelf-group-head, one tier down: a small-caps head over YOURS and over
   NOT YOURS, so the order is read and not inferred. */
.lay-bookshelf-c-group { font: 600 0.66rem/1 system-ui, sans-serif; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-dim); margin: 1.1rem 0 0.35rem; padding-bottom: 0.3rem; border-bottom: 1px solid rgba(120, 96, 52, 0.35); }
.lay-bookshelf-c-group + .lay-bookshelf-c-section { margin-top: 0.2rem; }
.lay-bookshelf-c-rows { display: flex; flex-direction: column; gap: 10px; }
.lay-bookshelf-c-prose { margin: 0 0 12px; font-size: 15px; line-height: 1.55; color: var(--ink, #e9dcc0); }
.lay-bookshelf-c-tagline { margin: 0 0 10px; font-size: 15px; line-height: 1.5; font-style: italic; color: var(--ink-dim, #a8987a); }
.lay-bookshelf-c-hint { margin: 0 0 14px; font-size: 14px; line-height: 1.55; color: var(--ink-dim, #a8987a); font-style: italic; }
.lay-bookshelf-c-offer {
  margin: 0 0 12px; padding: 12px; font-size: 14px; line-height: 1.5;
  border: 1px solid var(--gold-bright, #f4c95d); border-radius: 10px; color: var(--ink, #e9dcc0);
}

/* The sort chips: reading furniture, wrapped rather than scrolled, because a
   second scroll axis inside the one scroller is a second way to lose a flick. */
.lay-bookshelf-c-sorts { display: flex; flex-wrap: wrap; gap: 8px; margin: 0 0 16px; }
.lay-bookshelf-c-sort {
  min-height: 44px; min-width: 44px; padding: 8px 14px; font: inherit; font-size: 14px;
  background: var(--parchment-raised, #241d13); color: var(--ink-dim, #a8987a);
  border: 1px solid var(--border, #3d3320); border-radius: 999px;
}
.lay-bookshelf-c-sort.on { color: var(--gold-bright, #f4c95d); border-color: var(--gold-bright, #f4c95d); }

/* A row is ONE target with ONE meaning: it aims. The 10px gap is the seam law —
   no two adjacent hit areas may touch, because a 2.5pt overlap on the painted
   desk once decided a press by DOM order. */
.lay-bookshelf-c-vol {
  display: flex; align-items: stretch; gap: 12px; width: 100%; text-align: left;
  min-height: 60px; padding: 10px 12px; font: inherit;
  background: var(--parchment-raised, #241d13); color: var(--ink, #e9dcc0);
  border: 1px solid var(--border, #3d3320); border-radius: 10px;
}
.lay-bookshelf-c-vol.is-aimed { border-color: var(--gold-bright, #f4c95d); box-shadow: 0 0 0 1px var(--gold-bright, #f4c95d) inset; }
.lay-bookshelf-c-vol.is-here { background: #2b2216; }
.lay-bookshelf-c-spine {
  flex: none; width: 8px; border-radius: 3px; align-self: stretch;
  background: var(--accent, #8a6f3c);
}
.lay-bookshelf-c-spine.size-tall { box-shadow: inset 0 0 0 1px rgba(0,0,0,.35); }
.lay-bookshelf-c-spine.ribbon-gold { border-top: 5px solid #f4c95d; }
.lay-bookshelf-c-spine.ribbon-crimson { border-top: 5px solid #a4433a; }
.lay-bookshelf-c-spine.ribbon-linen { border-top: 5px solid #cbbb95; }
.lay-bookshelf-c-spine.is-tome { background: #5c4a2c; border-top: none; }
.lay-bookshelf-c-spine.is-quill { width: 22px; background: none; font-size: 18px; display: flex; align-items: center; justify-content: center; }
.lay-bookshelf-c-volbody { display: flex; flex-direction: column; gap: 3px; min-width: 0; flex: 1; justify-content: center; }
.lay-bookshelf-c-voltitle { font-size: 15px; line-height: 1.35; overflow-wrap: anywhere; }
.lay-bookshelf-c-volmeta { font-size: 13px; color: var(--ink-dim, #a8987a); line-height: 1.35; }
.lay-bookshelf-c-offermark { color: var(--gold-bright, #f4c95d); }

.lay-bookshelf-c-chapters { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
.lay-bookshelf-c-ch {
  display: flex; align-items: center; gap: 10px; width: 100%; text-align: left;
  min-height: 56px; padding: 10px 12px; font: inherit;
  background: var(--parchment-raised, #241d13); color: var(--ink, #e9dcc0);
  border: 1px solid var(--border, #3d3320); border-radius: 10px;
}
.lay-bookshelf-c-ch.is-aimed { border-color: var(--gold-bright, #f4c95d); box-shadow: 0 0 0 1px var(--gold-bright, #f4c95d) inset; }
.lay-bookshelf-c-ch.chapter-locked { color: var(--ink-dim, #a8987a); }
.lay-bookshelf-c-ch.chapter-complete .lay-bookshelf-c-chtitle { color: var(--ink-dim, #a8987a); }
.lay-bookshelf-c-numeral { flex: none; width: 30px; font-family: Cinzel, Georgia, serif; font-size: 14px; color: var(--gold-bright, #f4c95d); }
.lay-bookshelf-c-chbody { display: flex; flex-direction: column; gap: 6px; min-width: 0; flex: 1; }
.lay-bookshelf-c-chtitle { font-size: 15px; line-height: 1.35; overflow-wrap: anywhere; }
.lay-bookshelf-c-chbar { display: block; height: 3px; border-radius: 2px; background: var(--border, #3d3320); overflow: hidden; }
.lay-bookshelf-c-chbar > span { display: block; height: 100%; background: var(--gold-bright, #f4c95d); }
.lay-bookshelf-c-folio { flex: none; font-size: 13px; color: var(--ink-dim, #a8987a); }
.lay-bookshelf-c-quill { list-style: none; margin: 0 0 10px; }

.lay-bookshelf-c-lane { margin: 0 0 12px; }
.lay-bookshelf-c-lanelabel { font-size: 12px; letter-spacing: .1em; text-transform: uppercase; color: var(--ink-dim, #a8987a); margin: 0 0 6px; }
.lay-bookshelf-c-step {
  display: block; width: 100%; text-align: left; min-height: 48px; padding: 12px;
  font: inherit; font-size: 15px; line-height: 1.35;
  background: var(--parchment-raised, #241d13); color: var(--ink, #e9dcc0);
  border: 1px solid var(--border, #3d3320); border-left: 4px solid var(--accent, #8a6f3c); border-radius: 8px;
}
.lay-bookshelf-c-step.is-aimed { border-color: var(--gold-bright, #f4c95d); border-left-color: var(--gold-bright, #f4c95d); box-shadow: 0 0 0 1px var(--gold-bright, #f4c95d) inset; }
.lay-bookshelf-c-laneempty { margin: 0; font-size: 13px; color: var(--ink-dim, #a8987a); font-style: italic; }

.lay-bookshelf-c-standing { margin: 0 0 18px; }
.lay-bookshelf-c-bar { display: flex; align-items: center; gap: 10px; }
.lay-bookshelf-c-bartrack { flex: 1; height: 6px; border-radius: 3px; background: var(--border, #3d3320); overflow: hidden; }
.lay-bookshelf-c-barfill { display: block; height: 100%; background: var(--gold-bright, #f4c95d); }
.lay-bookshelf-c-barpct { font-size: 13px; color: var(--ink-dim, #a8987a); }
.lay-bookshelf-c-xp { margin: 6px 0 0; font-size: 13px; color: var(--ink-dim, #a8987a); }

.lay-bookshelf-c-actrow {
  display: flex; flex-direction: column; gap: 3px; width: 100%; text-align: left;
  min-height: 56px; padding: 11px 12px; font: inherit;
  background: var(--parchment-raised, #241d13); color: var(--ink, #e9dcc0);
  border: 1px solid var(--border, #3d3320); border-radius: 10px;
}
.lay-bookshelf-c-actrow.is-aimed { border-color: var(--gold-bright, #f4c95d); box-shadow: 0 0 0 1px var(--gold-bright, #f4c95d) inset; }
.lay-bookshelf-c-actrow.tone-gold .lay-bookshelf-c-actword { color: var(--gold-bright, #f4c95d); }
.lay-bookshelf-c-actrow.tone-kill .lay-bookshelf-c-actword { color: #d99177; }
.lay-bookshelf-c-actword { font-size: 15px; line-height: 1.3; }
.lay-bookshelf-c-actnote { font-size: 13px; color: var(--ink-dim, #a8987a); line-height: 1.35; }

.lay-bookshelf-c-strike { margin: 0 0 18px; display: flex; flex-direction: column; gap: 8px; }
.lay-bookshelf-c-strike label { font-size: 14px; line-height: 1.5; color: #d99177; }
.lay-bookshelf-c-input {
  min-height: 48px; padding: 10px 12px; font: inherit; font-size: 16px; border-radius: 8px;
  background: var(--parchment, #1c1710); color: var(--ink, #e9dcc0); border: 1px solid #7a3a2a;
}

/* THE RAIL — the desk edge. Sticky inside the surface rather than fixed to the
   viewport: a viewport-fixed rail is what buried another C layout's own act row
   underneath two other bars, hiding the one thing it had to keep visible. */
.lay-bookshelf-c-rail {
  flex: none; border-top: 1px solid var(--border, #3d3320);
  background: var(--parchment-raised, #241d13);
  padding-bottom: env(safe-area-inset-bottom, 0px);
}
.lay-bookshelf-c-aim {
  display: flex; flex-direction: column; gap: 2px; min-height: 52px; justify-content: center;
  padding: 8px calc(env(safe-area-inset-right, 0px) + 16px) 4px calc(env(safe-area-inset-left, 0px) + 16px);
}
.lay-bookshelf-c-aimkind { font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: var(--gold-bright, #f4c95d); }
.lay-bookshelf-c-aimtext {
  font-size: 15px; line-height: 1.3; color: var(--ink, #e9dcc0);
  display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden;
}

.lay-bookshelf-c .lay-rail { padding: 0 calc(env(safe-area-inset-right, 0px) + 12px) 10px calc(env(safe-area-inset-left, 0px) + 12px); }
.lay-bookshelf-c .lay-rail-acts { display: flex; gap: 10px; align-items: stretch; }
.lay-bookshelf-c .lay-act {
  flex: 1 1 0; min-height: 56px; min-width: 44px;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
  padding: 8px 6px; font: inherit; border-radius: 10px;
  border: 1px solid var(--border, #3d3320); background: var(--parchment, #1c1710); color: var(--ink, #e9dcc0);
}
/* THE PRIMARY IS THE WIDEST THING IN THE RAIL and it is first, so the thumb
   finds it without looking — the design's one gold button. */
.lay-bookshelf-c .lay-rail-acts > .lay-act:first-child { flex: 2 1 0; }
.lay-bookshelf-c .lay-act-primary { border-color: var(--gold-bright, #f4c95d); color: var(--gold-bright, #f4c95d); }
.lay-bookshelf-c .lay-act-danger { border-color: #7a3a2a; color: #d99177; }
.lay-bookshelf-c .lay-act[disabled] { opacity: .45; }
.lay-bookshelf-c .lay-act-word { font-size: 16px; line-height: 1.15; text-align: center; }
/* THE TOOLTIP LAW'S TOUCH HOME: touch has no hover, so the plain meaning is a
   permanent second line rather than something a long-press might reveal — and
   iOS steals the long-press for text selection anyway. */
.lay-bookshelf-c .lay-act-note { font-size: 11px; color: var(--ink-dim, #a8987a); line-height: 1.15; text-align: center; }
.lay-bookshelf-c .lay-rail-note { margin: 8px 2px 0; font-size: 13px; color: var(--ink-dim, #a8987a); line-height: 1.4; min-height: 18px; }
.lay-bookshelf-c .lay-rail-dense { padding-top: 0; padding-bottom: 8px; }
.lay-bookshelf-c .lay-rail-dense .lay-act { min-height: 44px; }
.lay-bookshelf-c .lay-rail-dense .lay-rail-acts > .lay-act:first-child { flex: 1 1 0; }
.lay-bookshelf-c .lay-rail-dense .lay-act-word { font-size: 13px; }

.lay-bookshelf-c-scrim {
  position: fixed; inset: 0; z-index: 70; background: rgba(8, 6, 3, .74);
  display: flex; align-items: flex-end; justify-content: center;
}
.lay-bookshelf-c-ceremony {
  width: 100%; max-height: 86dvh; overflow-y: auto;
  padding: 20px calc(env(safe-area-inset-right, 0px) + 18px) calc(env(safe-area-inset-bottom, 0px) + 18px) calc(env(safe-area-inset-left, 0px) + 18px);
  background: var(--parchment-raised, #241d13); color: var(--ink, #e9dcc0);
  border-top: 1px solid var(--gold-bright, #f4c95d); border-radius: 14px 14px 0 0;
}
.lay-bookshelf-c-ceremony-acts { display: flex; gap: 10px; margin-top: 6px; }
.lay-bookshelf-c-cbtn {
  flex: 1 1 0; min-height: 52px; font: inherit; font-size: 16px; border-radius: 10px;
  background: var(--parchment, #1c1710); color: var(--ink, #e9dcc0); border: 1px solid var(--border, #3d3320);
}
.lay-bookshelf-c-cbtn.is-seal { border-color: var(--gold-bright, #f4c95d); color: var(--gold-bright, #f4c95d); }
`;export{Yo as default};
