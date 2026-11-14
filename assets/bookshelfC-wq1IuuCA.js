import{r as d,j as e}from"./styles-DDO230I-.js";import{bc as G,bb as Se,bd as so,bf as ao,bi as lo,bE as io,bF as ro,bn as de,be as no,G as co,aT as ho,N as Q,bm as fo,J as ze,R as S,bt as po,bu as bo,bv as mo,bA as uo,bk as he,bl as fe,bC as yo,L as ko,K as xo,s as Ae,bz as go,bj as Be,bB as vo,bK as Ce,bo as wo,r as jo,bp as No,i as H,by as Io,bD as So,bh as zo,bG as $e,bH as Ao,bI as Bo,bq as Co,br as $o,bs as Po,bJ as Oo,bw as Pe,bg as Eo}from"./index-ClGvR7HJ.js";import{c as Ro}from"./shelfStanding-DLAYu5dL.js";const ee=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV"],j="__a-book-to-be-written__",To={novice:1,intermediate:2,expert:3,master:4},pe={shelf:{label:"Shelf",fn:(r,i)=>(r.order??Pe)-(i.order??Pe)},alpha:{label:"A–Z",fn:(r,i)=>r.title.localeCompare(i.title)},difficulty:{label:"Difficulty",fn:(r,i)=>ue(i)-ue(r)},left:{label:"Tasks left",fn:(r,i)=>Ee(i)-Ee(r)},tier:{label:"Stature",fn:(r,i)=>Oe[me(i)]-Oe[me(r)]}},Oe={tall:3,mid:2,short:1},be=[{key:"councils",title:"The Book of Councils",line:"the realm’s case law — waiting and ruled"},{key:"forms",title:"The Book of Forms",line:"the craft of being heard"},{key:"coin",title:"The Book of Coin",line:"rules written before the coin moves"}];function Lo(r){return r.quests.reduce((i,c)=>i+c.tasks.length,0)}function Ee(r){return r.quests.reduce((i,c)=>i+c.tasks.filter(b=>b.status!=="done"&&!H(b)).length,0)}function me(r){const i=Lo(r);return i>=25?"tall":i>=10?"mid":"short"}function ue(r){return Math.max(1,...r.quests.map(i=>To[i.difficulty]??1))}function qo(r){const i=ue(r);return i>=3?"gold":i===2?"crimson":"linen"}function Fo(r){if(r.quarter)return`sworn to ${r.quarter} at the Muster`;const i=r.quests.flatMap(b=>b.tasks.filter(p=>p.due&&!H(p))).sort((b,p)=>{const m=I=>I.boss&&I.hardDue?0:I.hardDue?1:I.boss?2:3;return m(b)-m(p)||(b.due<p.due?-1:1)})[0];return i?`"${i.title.length>48?`${i.title.slice(0,46)}…`:i.title}" — ${i.hardDue?"⚑ ":""}dated ${i.due}`:"a dated path exists"}const Re=[{key:"todo",label:"To do"},{key:"waiting",label:"In other hands"},{key:"done",label:"Sealed"}],Do={todo:"To do",waiting:"In other hands",done:"Sealed"};function Vo(){const[r,i]=d.useState(null);return d.useEffect(()=>{const c=typeof window>"u"?null:window.visualViewport;if(!c)return;const b=()=>{const p=window.innerHeight-c.height;i(p>120?{height:c.height,top:c.offsetTop}:null)};return b(),c.addEventListener("resize",b),c.addEventListener("scroll",b),()=>{c.removeEventListener("resize",b),c.removeEventListener("scroll",b)}},[]),r}function Ko({epics:r,today:i=null,statuses:c,openTo:b,onSelectQuest:p,onGoToRoundTable:m,onBind:I,onTakeOffering:z,offerPlacement:ye,onAddQuest:ke,onAddEpic:oe,onMoveTask:xe,onEditQuest:_,onEditEpic:T,onVault:te,onWake:C,onUnseal:$,onStrike:M,onSetWaits:Te,onClose:P,onVolumeShown:Le,onSetSkill:qe}){const[W,Fe]=d.useState("shelf"),x=d.useMemo(()=>{var o;return[...r].sort(((o=pe[W])==null?void 0:o.fn)??pe.shelf.fn)},[r,W]),ge=d.useMemo(()=>x.filter(G),[x]),K=d.useMemo(()=>Se(x),[x]),[se,ae]=d.useState(()=>so([...Se(x),...x],b)),g=se===j,t=g?null:x.find(o=>o.id===se)??K[0]??x[0]??null,[L,O]=d.useState(t?"toc":"shelf"),[De,Ve]=d.useState("toc"),[s,u]=d.useState(null),[ve,A]=d.useState(null),[X,q]=d.useState(null),[le,E]=d.useState(""),[ie,R]=d.useState(null),[F,Y]=d.useState(null),He=be,re=d.useRef(null),ne=Vo();d.useEffect(()=>{var o,a;u(null),E(""),A(null),(a=(o=re.current)==null?void 0:o.scrollTo)==null||a.call(o,{top:0})},[se]),d.useEffect(()=>{var o,a;u(null),E(""),(a=(o=re.current)==null?void 0:o.scrollTo)==null||a.call(o,{top:0})},[L]),d.useEffect(()=>{if(!ie)return;const o=setTimeout(()=>R(null),4e3);return()=>clearTimeout(o)},[ie]),d.useEffect(()=>{const o=a=>{a.key==="Escape"&&!F&&(P==null||P())};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[P,F]);const D=(o,a)=>{a==null||a(),R(o)},k=t?G(t):!1,V=t?ao(t):!1,J=t?lo(t):!1,v=t?io(t,{canStrike:!!M,isStanding:ro(t),isOffered:k}):{show:!1,primary:null,strike:!1},Z=d.useMemo(()=>{if(!t)return[];const o=[];return k&&z&&o.push({id:"take",word:"✦ Take this road — make it mine",note:"nothing in it is scheduled or counted until you do",tone:"primary"}),!k&&!V&&J&&o.push({id:"bind",word:"⚭ Perform the Binding",note:"the goal wears a date and the book tells its story",tone:"primary"}),o.push({id:"review",word:"⚔ Review this plan with the War Room",note:"the seats read what is still open; finished steps are history",tone:"plain"}),v.show&&v.primary==="reopen"&&o.push({id:"reopen",word:"Reopen it",note:"the ending is forgotten and the road returns to your days",tone:"plain"}),v.show&&v.primary==="wake"&&o.push({id:"wake",word:"Begin it",note:"it returns to your days",tone:"plain"}),v.show&&v.primary==="sleep"&&o.push({id:"sleep",word:"Mark it planned",note:"out of your days until you begin it — reversible",tone:"plain"}),T&&o.push({id:"rename",word:"Rename this volume",note:"its title and its one line",tone:"plain"}),v.strike&&o.push({id:"strike",word:"Strike it",note:"remove it entirely — there is no undo",tone:"danger"}),o},[t,k,V,J,v.show,v.primary,v.strike,z,T]),U=(o,a)=>{u(null),D(o,a)},_e=o=>{if(t){if(o==="take")return U("Taken — the road is yours.",()=>z==null?void 0:z(t.id));if(o==="bind")return u(null),q(t);if(o==="review")return u(null),m==null?void 0:m(t.id);if(o==="reopen")return U("Reopened — the road returns to your days.",()=>$==null?void 0:$(t.id));if(o==="wake")return U("Begun — it is in your days again.",()=>C==null?void 0:C(t.id));if(o==="sleep")return U("Marked planned — out of your days until you begin it.",()=>te==null?void 0:te(t.id));if(o==="rename"){A("__volume__");return}}},N=(()=>{if((s==null?void 0:s.kind)!=="task"||!t)return null;const o=t.quests.find(l=>l.id===s.questId),a=o==null?void 0:o.tasks.find(l=>l.id===s.id);return!o||!a?null:{quest:o,task:a,lane:a.status,title:a.title,questTitle:o.title}})(),Me=()=>{if((s==null?void 0:s.kind)==="volume"){if(s.id===j)return{word:"Begin a new volume",note:"an empty book, and the table to argue it at",onPress:()=>{ae(j),O("volume")}};const a=x.find(l=>l.id===s.id);return a?{word:`Open ${a.title.length>26?`${a.title.slice(0,24)}…`:a.title}`,note:G(a)?"offered — read what it asks before you take it":"its table of contents",onPress:()=>{ae(a.id),O("toc")}}:null}if((s==null?void 0:s.kind)==="tome"){const a=be.find(l=>l.key===s.id);return{word:`Open ${(a==null?void 0:a.title)??"the book"}`,note:(a==null?void 0:a.line)??"",onPress:()=>Y(s.id)}}if((s==null?void 0:s.kind)==="chapter"&&t){const a=t.quests.findIndex(h=>h.id===s.id),l=t.quests[a];return l?(c.get(l.id)??l.status)==="locked"?{word:"A sealed chapter",note:`it ${uo(l,r,c)} — nothing to open yet`,disabled:!0,onPress:()=>{}}:{word:`Open chapter ${ee[a]??a+1}`,note:l.title,onPress:()=>p==null?void 0:p(l.id)}:null}if((s==null?void 0:s.kind)==="task")return N?{word:"Open the chapter",note:N.questTitle,onPress:()=>p==null?void 0:p(s.questId)}:null;if((s==null?void 0:s.kind)==="act"&&t){const a=Z.find(l=>l.id===s.id);return a?a.id==="strike"?{word:"Strike it",note:le.trim()===t.title?"this cannot be undone":"type the volume’s title above to arm this",tone:"danger",disabled:le.trim()!==t.title,onPress:()=>{var l;M==null||M(t.id),u(null),E(""),ae(((l=K.find(n=>n.id!==t.id))==null?void 0:l.id)??j),O("shelf")}}:{word:a.word,note:a.note,tone:a.tone,onPress:()=>_e(a.id)}:null}if(g)return{word:"⚔ Take it to the War Room",note:"the seats argue what it demands and whether now is its time",onPress:()=>m==null?void 0:m()};if(!t)return{word:"⚔ Take it to the War Room",note:"a first campaign is argued before it is written",onPress:()=>m==null?void 0:m()};if(k&&z)return{word:"✦ Take this road — make it mine",note:"nothing in it is scheduled or counted until you do",onPress:()=>D("Taken — the road is yours.",()=>z(t.id))};if(!V&&J)return{word:"⚭ Perform the Binding",note:"the goal wears a date and the book tells its story",onPress:()=>q(t)};if(he(t))return{word:"Reopen it",note:"closed — reopen it if you sealed it by mistake",onPress:()=>D("Reopened — the road returns to your days.",()=>$==null?void 0:$(t.id))};if(fe(t))return{word:"Begin it",note:"planned — bring it back into your days",onPress:()=>D("Begun — it is in your days again.",()=>C==null?void 0:C(t.id))};const o=t.quests.findIndex(a=>{const l=c.get(a.id)??a.status;return l!=="complete"&&l!=="locked"});return o>=0?{word:`Open chapter ${ee[o]??o+1}`,note:t.quests[o].title,onPress:()=>p==null?void 0:p(t.quests[o].id)}:{word:"⚔ Review this plan with the War Room",note:t.quests.length?"every chapter is closed — is the book finished?":"the book has no chapters yet",onPress:()=>m==null?void 0:m(t.id)}},We=()=>{const o=[];if((s==null?void 0:s.kind)==="chapter"&&_){const a=t==null?void 0:t.quests.find(n=>n.id===s.id),l=a?c.get(a.id)??a.status:null;a&&l!=="locked"&&o.push(e.jsx(S,{tone:"plain",onPress:()=>{A(a.id),O("toc")},note:"its name only",title:`Rename "${a.title}"`,children:"Rename"},"rename-chapter"))}return(s==null?void 0:s.kind)==="task"&&xe&&N&&(yo(s.id)?o.push(e.jsx(S,{tone:"plain",disabled:!0,note:ko(xo(s.id)).note,title:"This step is sealed by its own act, not by moving a card",children:"Sealed by the act"},"sealed-by-act")):Re.filter(a=>a.key!==N.lane).forEach(a=>{o.push(e.jsx(S,{tone:"plain",onPress:()=>D(`Moved to ${a.label}.`,()=>xe(s.questId,s.id,a.key)),note:"on this board",title:`Move it to ${a.label}`,children:a.label},`lane-${a.key}`))})),(s==null?void 0:s.kind)==="act"&&s.id==="strike"&&o.push(e.jsx(S,{tone:"plain",onPress:()=>{u(null),E("")},note:"leave it standing",title:"Keep the volume",children:"Keep it"},"keep")),s&&s.kind!=="act"&&s.kind!=="task"&&o.push(e.jsx(S,{tone:"plain",onPress:()=>u(null),note:"back to the volume",title:"Clear the selection",children:"Clear"},"unaim")),o},Ke=()=>{var l,n,h,y;let o="This volume",a=(t==null?void 0:t.title)??"No volume open";if(g)o="A new volume",a="A Book to Be Written";else if((s==null?void 0:s.kind)==="volume")o=s.id===j?"Selected":"Selected volume",a=s.id===j?"A Book to Be Written":((l=x.find(f=>f.id===s.id))==null?void 0:l.title)??"";else if((s==null?void 0:s.kind)==="tome")o="Selected book",a=((n=be.find(f=>f.key===s.id))==null?void 0:n.title)??"";else if((s==null?void 0:s.kind)==="chapter"){const f=(t==null?void 0:t.quests.findIndex(ce=>ce.id===s.id))??-1;o=`Selected chapter ${ee[f]??f+1}`,a=((h=t==null?void 0:t.quests[f])==null?void 0:h.title)??""}else(s==null?void 0:s.kind)==="task"?(o=N?`Selected step · ${Do[N.lane]}`:"Selected step",a=(N==null?void 0:N.title)??""):(s==null?void 0:s.kind)==="act"?(o="Selected act",a=((y=Z.find(f=>f.id===s.id))==null?void 0:y.word)??""):t&&(o=he(t)?`Closed ${Ae(t.sealedAt)}`:fe(t)?`Planned since ${String(t.vaultedAt).slice(0,10)}`:k?"Offered — not yours yet":V?"Bound":"A scroll still");return e.jsxs("div",{className:"lay-bookshelf-c-aim",children:[e.jsx("span",{className:"lay-bookshelf-c-aimkind",children:o}),e.jsx("span",{className:"lay-bookshelf-c-aimtext",children:a})]})},we=t||g?g?[{key:"shelf",word:"Shelf"},{key:"volume",word:"Volume"}]:[{key:"shelf",word:"Shelf"},{key:"book",word:"The book"},{key:"volume",word:"Volume"}]:[{key:"shelf",word:"Shelf"}],w=L==="shelf"||we.some(o=>o.key===L)||t&&!g&&de(L)?L:"shelf";no(w==="shelf"||g?null:t==null?void 0:t.id,Le);const Xe=o=>{Ve(o),O(o)},je=o=>{const a=Eo(o,c),l=(s==null?void 0:s.kind)==="volume"&&s.id===o.id,n=o.id===(t==null?void 0:t.id),h=G(o);return e.jsxs("button",{type:"button",className:`lay-bookshelf-c-vol${l?" is-aimed":""}${n?" is-here":""}`,style:{"--accent":o.accent},"aria-pressed":l,onClick:()=>u(l?null:{kind:"volume",id:o.id}),children:[e.jsx("span",{className:`lay-bookshelf-c-spine ribbon-${qo(o)} size-${me(o)}`,"aria-hidden":"true"}),e.jsxs("span",{className:"lay-bookshelf-c-volbody",children:[e.jsxs("span",{className:"lay-bookshelf-c-voltitle",children:[h&&e.jsx("span",{className:"lay-bookshelf-c-offermark","aria-hidden":"true",children:"✦ "}),o.title]}),e.jsxs("span",{className:"lay-bookshelf-c-volmeta",children:[a.done,"/",a.total," chapters closed",n?" · open now":"",h?" · offered, not yours yet":""]})]})]},o.id)},Ne=()=>ge.length===0?null:e.jsxs("section",{className:"lay-bookshelf-c-section",children:[e.jsxs("h3",{className:"lay-bookshelf-c-head",children:["Offered",e.jsx("span",{className:"lay-bookshelf-c-sub",children:"yours if you take them — read one before you do"})]}),e.jsx("div",{className:"lay-bookshelf-c-rows",children:ge.map(je)})]},"offered"),Ie=ye==="lead"||ye==="B",Ye=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-sorts",role:"group","aria-label":"How the shelf is ordered",children:Object.entries(pe).map(([o,a])=>e.jsx("button",{type:"button",className:`lay-bookshelf-c-sort${W===o?" on":""}`,"aria-pressed":W===o,onClick:()=>Fe(o),children:a.label},o))}),Ie&&Ne(),e.jsx("div",{className:"lay-bookshelf-c-group",children:"Yours"}),e.jsxs("section",{className:"lay-bookshelf-c-section",children:[e.jsxs("h3",{className:"lay-bookshelf-c-head",children:["Your campaigns",e.jsx("span",{className:"lay-bookshelf-c-sub",children:"underway — the present. Plans and unbound scrolls stand in the War Room; closed volumes rest in the Library."})]}),K.length===0?e.jsx(Q,{children:"No campaign is underway. That is a beginning, not a gap — a life project becomes a volume once the table has argued what it demands."}):e.jsx("div",{className:"lay-bookshelf-c-rows",children:K.map(je)})]}),e.jsx("section",{className:"lay-bookshelf-c-section",children:e.jsx("div",{className:"lay-bookshelf-c-rows",children:e.jsxs("button",{type:"button",className:`lay-bookshelf-c-vol is-unwritten${(s==null?void 0:s.kind)==="volume"&&s.id===j?" is-aimed":""}`,"aria-pressed":(s==null?void 0:s.kind)==="volume"&&s.id===j,onClick:()=>u((s==null?void 0:s.kind)==="volume"&&s.id===j?null:{kind:"volume",id:j}),children:[e.jsx("span",{className:"lay-bookshelf-c-spine is-quill","aria-hidden":"true",children:"🪶"}),e.jsxs("span",{className:"lay-bookshelf-c-volbody",children:[e.jsx("span",{className:"lay-bookshelf-c-voltitle",children:"A Book to Be Written"}),e.jsx("span",{className:"lay-bookshelf-c-volmeta",children:"Life is not over. There is always another volume."})]})]})})}),e.jsx("div",{className:"lay-bookshelf-c-group",children:"Not yours"}),!Ie&&Ne(),e.jsxs("section",{className:"lay-bookshelf-c-section",children:[e.jsxs("h3",{className:"lay-bookshelf-c-head",children:["The other books",e.jsx("span",{className:"lay-bookshelf-c-sub",children:"not campaigns — books the realm keeps"})]}),e.jsx("div",{className:"lay-bookshelf-c-rows",children:He.map(o=>{const a=(s==null?void 0:s.kind)==="tome"&&s.id===o.key;return e.jsxs("button",{type:"button",className:`lay-bookshelf-c-vol is-tome${a?" is-aimed":""}`,"aria-pressed":a,onClick:()=>u(a?null:{kind:"tome",id:o.key}),children:[e.jsx("span",{className:"lay-bookshelf-c-spine is-tome","aria-hidden":"true"}),e.jsxs("span",{className:"lay-bookshelf-c-volbody",children:[e.jsx("span",{className:"lay-bookshelf-c-voltitle",children:o.title}),e.jsx("span",{className:"lay-bookshelf-c-volmeta",children:o.line})]})]},o.key)})})]})]}),Je=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:"Table of Contents"}),t.quests.length===0?e.jsx(Q,{children:"This volume has no chapters yet. Write one below, or take the whole plan to the War Room and let the seats argue what it should hold."}):e.jsx("ol",{className:"lay-bookshelf-c-chapters",children:t.quests.map((o,a)=>{const l=c.get(o.id)??o.status,n=go(o),h=l==="locked",y=l==="complete",f=(s==null?void 0:s.kind)==="chapter"&&s.id===o.id;return ve===o.id?e.jsx("li",{className:"lay-bookshelf-c-quill",children:e.jsx(Be,{value:o.title,onSave:ce=>{_==null||_(o.id,ce),A(null),R("Renamed.")},onCancel:()=>A(null)})},o.id):e.jsx("li",{children:e.jsxs("button",{type:"button",className:`lay-bookshelf-c-ch chapter-${l}${f?" is-aimed":""}`,"aria-pressed":f,onClick:()=>u(f?null:{kind:"chapter",id:o.id}),children:[e.jsxs("span",{className:"lay-bookshelf-c-numeral",children:[ee[a]??a+1,"."]}),e.jsxs("span",{className:"lay-bookshelf-c-chbody",children:[e.jsx("span",{className:"lay-bookshelf-c-chtitle",children:h?"A Sealed Chapter":o.title}),!h&&n.total>0&&e.jsx("span",{className:"lay-bookshelf-c-chbar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${n.percent}%`}})})]}),e.jsx("span",{className:"lay-bookshelf-c-folio",children:y?"✓":h?"🔒":`${n.done}/${n.total}`})]})},o.id)})}),ke&&e.jsx(vo,{onAdd:o=>ke(t.id,o)})]}),Ze=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:Ce("road")}),e.jsx("div",{className:"book-leaf",children:e.jsx(wo,{book:t,epics:r,statuses:c,today:i??jo(),onSelectQuest:o=>u({kind:"chapter",id:o}),onSetWaits:Te,titleAct:"choose it; the rail opens it"})})]}),Ue=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:Ce("register")}),e.jsx("div",{className:"book-leaf",children:e.jsx(No,{book:t})})]}),Ge=()=>{const o=t.quests.filter(a=>(c.get(a.id)??a.status)!=="locked"&&a.tasks.some(l=>!H(l))).sort((a,l)=>{const n=h=>h.tasks.some(y=>y.status!=="done"&&!H(y));return(n(l)?1:0)-(n(a)?1:0)});return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:"The Board — chapters as columns"}),o.length===0?e.jsx(Q,{children:"No chapters carry tasks yet — the board waits for work."}):o.map(a=>e.jsxs("section",{className:"lay-bookshelf-c-section",children:[e.jsxs("h3",{className:"lay-bookshelf-c-head",children:[a.title,e.jsx("span",{className:"lay-bookshelf-c-sub",children:"tap a step to select it; the lanes are in the rail"})]}),Re.map(l=>{const n=a.tasks.filter(y=>y.status===l.key&&!H(y)),h=l.key==="done"?n.slice(0,5):n;return e.jsxs("div",{className:"lay-bookshelf-c-lane",children:[e.jsxs("div",{className:"lay-bookshelf-c-lanelabel",children:[l.label," · ",n.length]}),e.jsxs("div",{className:"lay-bookshelf-c-rows",children:[h.map(y=>{const f=(s==null?void 0:s.kind)==="task"&&s.id===y.id;return e.jsx("button",{type:"button",className:`lay-bookshelf-c-step${f?" is-aimed":""}`,style:{"--accent":t.accent},"aria-pressed":f,onClick:()=>u(f?null:{kind:"task",id:y.id,questId:a.id}),children:y.title},y.id)}),n.length===0&&e.jsx("p",{className:"lay-bookshelf-c-laneempty",children:"nothing here"}),l.key==="done"&&n.length>5&&e.jsxs("p",{className:"lay-bookshelf-c-laneempty",children:["+ ",n.length-5," more sealed"]})]})]},l.key)})]},a.id))]})},Qe=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:"A Book to Be Written"}),e.jsxs("p",{className:"lay-bookshelf-c-prose",children:["What this book holds is not decided alone. Bring the idea to the War Room — the seats will argue what it demands, what it trains, and whether now is its time."," ",oe?"Or take the quill and write it plainly.":"Or voice the campaign to your squire — a spoken volume is written whole."]}),oe&&e.jsx(Io,{onAdd:o=>{oe(o),R("The volume is written.")}})]}),eo=()=>{const o=So(t),a=zo(t);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:"The volume"}),ve==="__volume__"?e.jsx("div",{className:"lay-bookshelf-c-quill",children:e.jsx(Be,{value:t.title,subtitle:t.tagline??"",subtitleLabel:"the volume's one line…",onSave:l=>{T==null||T(t.id,l),A(null),R("Renamed.")},onCancel:()=>A(null)})}):t.tagline&&e.jsx("p",{className:"lay-bookshelf-c-tagline",children:t.tagline}),k&&e.jsx("p",{className:"lay-bookshelf-c-offer",children:"This road is on the offered shelf. It is not in your realm yet — nothing in it is scheduled, counted, or on your list until you take it."}),t.description&&e.jsx("p",{className:"lay-bookshelf-c-prose",children:t.description}),!k&&!V&&!J&&e.jsxs("p",{className:"lay-bookshelf-c-hint",children:[!$e(t)&&!Ao(t)?"A scroll still — its goal wears no date and its story is untold. Give the boss a real deadline and the book a real description, and the clasp will appear.":$e(t)?"A scroll still — its story is untold. Tell the book what it is for and what done means, and the clasp will appear.":"A scroll still — give the goal a real date (a sworn quarter, a dated boss, a hard deadline), and the clasp will appear."," ","Or take the whole plan to the table first — it may be worth binding, or worth setting down."]}),e.jsxs("div",{className:"lay-bookshelf-c-standing",children:[a.total>0&&e.jsxs("div",{className:"lay-bookshelf-c-bar",role:"progressbar","aria-valuenow":a.percent,"aria-valuemin":0,"aria-valuemax":100,"aria-label":`${a.done} of ${a.total} steps across the book`,children:[e.jsx("span",{className:"lay-bookshelf-c-bartrack",children:e.jsx("span",{className:"lay-bookshelf-c-barfill",style:{width:`${a.percent}%`}})}),e.jsxs("span",{className:"lay-bookshelf-c-barpct",children:[a.done,"/",a.total," steps"]})]}),e.jsxs("p",{className:"lay-bookshelf-c-xp",children:[o.earned,"/",o.potential," ",Bo.steps]})]}),Z.length>0&&e.jsxs("section",{className:"lay-bookshelf-c-section",children:[e.jsxs("h3",{className:"lay-bookshelf-c-head",children:["What can be done with this volume",e.jsx("span",{className:"lay-bookshelf-c-sub",children:"tap one to aim the rail — nothing here writes until the rail is pressed"})]}),e.jsx("div",{className:"lay-bookshelf-c-rows",children:Z.map(l=>{const n=(s==null?void 0:s.kind)==="act"&&s.id===l.id;return e.jsxs("button",{type:"button",className:`lay-bookshelf-c-actrow tone-${l.tone}${n?" is-aimed":""}`,"aria-pressed":n,onClick:()=>{const h=n?null:{kind:"act",id:l.id};u(h),(!h||l.id!=="strike")&&E("")},children:[e.jsx("span",{className:"lay-bookshelf-c-actword",children:l.word}),e.jsx("span",{className:"lay-bookshelf-c-actnote",children:l.note})]},l.id)})})]}),(s==null?void 0:s.kind)==="act"&&s.id==="strike"&&e.jsxs("div",{className:"lay-bookshelf-c-strike",children:[e.jsxs("label",{htmlFor:"lay-bookshelf-c-typed",children:["This cannot be undone. Type ",e.jsx("strong",{children:t.title})," to strike it. Take a copy from the Saddlebag first if you want one."]}),e.jsx("input",{id:"lay-bookshelf-c-typed",className:"lay-bookshelf-c-input",value:le,onChange:l=>E(l.target.value),placeholder:t.title,autoComplete:"off"})]}),e.jsx(Co,{epic:t,onSetSkill:qe}),!k&&e.jsx($o,{epic:t,scope:"epic"}),!k&&e.jsx(Po,{scope:"epic",targetId:t.id,targetTitle:t.title})]})},B=Me(),oo=ie??"Nothing above this rail changes your realm.",to=()=>{if(g)return"A new volume — nothing written yet";if(!t)return"No campaign is underway";const o=Ro(t,c);return he(t)?`Closed ${Ae(t.sealedAt)} — ${Oo(t)}`:fe(t)?`Planned since ${String(t.vaultedAt).slice(0,10)} — out of your days until you begin it.`:k?`${o} · offered — not yours yet`:`${o}.`};return e.jsxs("div",{className:"lay-bookshelf-c",role:"dialog","aria-label":"The Bookshelf",style:ne?{height:`${ne.height}px`,top:`${ne.top}px`}:void 0,children:[e.jsx("style",{children:Ho}),e.jsxs("header",{className:"lay-bookshelf-c-head-band",children:[e.jsxs("div",{className:"lay-bookshelf-c-headtext",children:[e.jsx("div",{className:"lay-bookshelf-c-kicker",children:"The Bookshelf"}),e.jsx("h2",{className:"lay-bookshelf-c-title",children:g?"A Book to Be Written":(t==null?void 0:t.title)??"The shelf"}),e.jsx("p",{className:"lay-bookshelf-c-state",children:to()})]}),e.jsx(co,{onClose:P,name:"the Bookshelf"})]}),e.jsx(ho,{rail:e.jsxs("div",{className:"lay-bookshelf-c-rail",children:[Ke(),e.jsxs(ze,{note:oo,children:[B?e.jsx(S,{tone:B.tone??"primary",onPress:B.onPress,disabled:B.disabled,note:B.note,title:B.word,children:B.word}):e.jsx(S,{tone:"plain",onPress:P,note:"back to the room",title:"Close the Bookshelf",children:"Close the shelf"}),We()]}),e.jsx(ze,{dense:!0,children:we.map(o=>{const a=o.key==="book"?de(w):w===o.key;return e.jsx(S,{tone:a?"primary":"plain",onPress:()=>O(o.key==="book"?De:o.key),title:`Show ${o.word}`,children:o.word},o.key)})})]}),children:e.jsx("div",{className:"lay-bookshelf-c-page",ref:re,children:w==="shelf"?Ye():g?Qe():t?e.jsxs(e.Fragment,{children:[e.jsx(fo,{page:de(w)?w:null,onChoose:Xe,fill:!0,dark:!0}),w==="toc"?Je():w==="road"?Ze():w==="board"?Ge():w==="register"?Ue():eo()]}):e.jsx(Q,{children:"No volume is open. Choose one from the shelf."})})}),X&&e.jsx("div",{className:"lay-bookshelf-c-scrim",onClick:()=>q(null),children:e.jsxs("div",{className:"lay-bookshelf-c-ceremony",onClick:o=>o.stopPropagation(),children:[e.jsx("div",{className:"lay-bookshelf-c-kicker",children:"The Binding Ceremony"}),e.jsx("h3",{className:"lay-bookshelf-c-title",children:X.title}),e.jsxs("p",{className:"lay-bookshelf-c-prose",children:["The goal wears a date: ",Fo(X),". And its story is told — the book knows what it is for. Bind this scroll, and it takes its place among the books — sealed, shelved, and never silently demoted. A dream becomes a quest here."]}),e.jsxs("div",{className:"lay-bookshelf-c-ceremony-acts",children:[e.jsx("button",{type:"button",className:"lay-bookshelf-c-cbtn",onClick:()=>q(null),children:"Not yet"}),e.jsx("button",{type:"button",className:"lay-bookshelf-c-cbtn is-seal",onClick:()=>{I==null||I(X.id),q(null),R("Bound — it takes its place among the books.")},children:"⚭ Bind the volume"})]})]})}),F==="forms"&&e.jsx(po,{onClose:()=>Y(null)}),F==="coin"&&e.jsx(bo,{onClose:()=>Y(null)}),F==="councils"&&e.jsx(mo,{onClose:()=>Y(null)})]})}const Ho=`
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
`;export{Ko as default};
