import{r as d,ak as Q,aj as ze,al as to,aV as ao,am as so,ap as lo,aL as io,aM as no,au as fe,j as e,C as ro,W as co,N as ee,at as ho,A as Ce,R as S,az as fo,aA as po,aB as bo,aC as uo,aW as ko,aH as yo,ar as pe,as as be,aJ as mo,y as xo,x as go,aG as vo,aq as Ae,aI as wo,aQ as $e,av as jo,a as No,aw as Bo,i as H,aF as So,aK as Io,ao as zo,aN as Pe,aO as Co,ax as Ao,ay as $o,aP as Po,aD as Oe,an as Oo}from"./index-CYLJyUTU.js";import{c as To}from"./shelfStanding-zbCOcxBa.js";const oe=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV"],v="__a-book-to-be-written__",Ro={novice:1,intermediate:2,expert:3,master:4},ue={shelf:{label:"Shelf",fn:(n,i)=>(n.order??Oe)-(i.order??Oe)},alpha:{label:"A–Z",fn:(n,i)=>n.title.localeCompare(i.title)},difficulty:{label:"Difficulty",fn:(n,i)=>me(i)-me(n)},left:{label:"Tasks left",fn:(n,i)=>Re(i)-Re(n)},tier:{label:"Stature",fn:(n,i)=>Te[ye(i)]-Te[ye(n)]}},Te={tall:3,mid:2,short:1},ke=[{key:"councils",title:"The Book of Councils",line:"the realm’s case law — waiting and ruled"},{key:"forms",title:"The Book of Forms",line:"the craft of being heard"},{key:"coin",title:"The Book of Coin",line:"rules written before the coin moves"},{key:"loop",title:"The Book of the Loop",line:"how a thing becomes a deed"},{key:"sundays",title:"The Book of Sundays",line:"every week that has been weighed"}];function Eo(n){return n.quests.reduce((i,h)=>i+h.tasks.length,0)}function Re(n){return n.quests.reduce((i,h)=>i+h.tasks.filter(c=>c.status!=="done"&&!H(c)).length,0)}function ye(n){const i=Eo(n);return i>=25?"tall":i>=10?"mid":"short"}function me(n){return Math.max(1,...n.quests.map(i=>Ro[i.difficulty]??1))}function Lo(n){const i=me(n);return i>=3?"gold":i===2?"crimson":"linen"}function qo(n){if(n.quarter)return`sworn to ${n.quarter} at the Muster`;const i=n.quests.flatMap(c=>c.tasks.filter(w=>w.due&&!H(w))).sort((c,w)=>{const y=b=>b.boss&&b.hardDue?0:b.hardDue?1:b.boss?2:3;return y(c)-y(w)||(c.due<w.due?-1:1)})[0];return i?`"${i.title.length>48?`${i.title.slice(0,46)}…`:i.title}" — ${i.hardDue?"⚑ ":""}dated ${i.due}`:"a dated path exists"}const Ee=[{key:"todo",label:"To do"},{key:"waiting",label:"In other hands"},{key:"done",label:"Sealed"}],Fo={todo:"To do",waiting:"In other hands",done:"Sealed"};function Vo(){const[n,i]=d.useState(null);return d.useEffect(()=>{const h=typeof window>"u"?null:window.visualViewport;if(!h)return;const c=()=>{const w=window.innerHeight-h.height;i(w>120?{height:h.height,top:h.offsetTop}:null)};return c(),h.addEventListener("resize",c),h.addEventListener("scroll",c),()=>{h.removeEventListener("resize",c),h.removeEventListener("scroll",c)}},[]),n}function _o({epics:n,meta:i=null,today:h=null,statuses:c,openTo:w,onSelectQuest:y,onGoToRoundTable:b,onBind:te,onTakeOffering:I,offerPlacement:xe,onAddQuest:ge,onAddEpic:ae,onMoveTask:ve,onEditQuest:_,onEditEpic:q,onVault:se,onWake:$,onUnseal:P,onStrike:W,onSetWaits:Le,onClose:O}){const[K,qe]=d.useState("shelf"),x=d.useMemo(()=>{var o;return[...n].sort(((o=ue[K])==null?void 0:o.fn)??ue.shelf.fn)},[n,K]),we=d.useMemo(()=>x.filter(Q),[x]),X=d.useMemo(()=>ze(x),[x]),[le,ie]=d.useState(()=>to([...ze(x),...x],w)),j=le===v,s=j?null:x.find(o=>o.id===le)??X[0]??x[0]??null,[F,T]=d.useState(s?"toc":"shelf"),[Fe,Ve]=d.useState("toc"),[t,u]=d.useState(null),[je,z]=d.useState(null),[Y,V]=d.useState(null),[ne,R]=d.useState(""),[re,E]=d.useState(null),[C,L]=d.useState(null),Z=d.useMemo(()=>i?ao(i,h).filter(o=>!o.current).length:0,[i,h]),Me=d.useMemo(()=>ke.filter(o=>o.key!=="sundays"||Z>0),[Z]),ce=d.useRef(null),de=Vo();d.useEffect(()=>{var o,a;u(null),R(""),z(null),(a=(o=ce.current)==null?void 0:o.scrollTo)==null||a.call(o,{top:0})},[le]),d.useEffect(()=>{var o,a;u(null),R(""),(a=(o=ce.current)==null?void 0:o.scrollTo)==null||a.call(o,{top:0})},[F]),d.useEffect(()=>{if(!re)return;const o=setTimeout(()=>E(null),4e3);return()=>clearTimeout(o)},[re]),d.useEffect(()=>{const o=a=>{a.key==="Escape"&&!C&&(O==null||O())};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[O,C]);const M=(o,a)=>{a==null||a(),E(o)},m=s?Q(s):!1,D=s?so(s):!1,J=s?lo(s):!1,g=s?io(s,{canStrike:!!W,isStanding:no(s),isOffered:m}):{show:!1,primary:null,strike:!1},U=d.useMemo(()=>{if(!s)return[];const o=[];return m&&I&&o.push({id:"take",word:"✦ Take this road — make it mine",note:"nothing in it is scheduled or counted until you do",tone:"primary"}),!m&&!D&&J&&o.push({id:"bind",word:"⚭ Perform the Binding",note:"the goal wears a date and the book tells its story",tone:"primary"}),o.push({id:"review",word:"⚔ Review this plan with the War Room",note:"the seats read what is still open; finished steps are history",tone:"plain"}),g.show&&g.primary==="reopen"&&o.push({id:"reopen",word:"Reopen it",note:"the ending is forgotten and the road returns to your days",tone:"plain"}),g.show&&g.primary==="wake"&&o.push({id:"wake",word:"Begin it",note:"it returns to your days",tone:"plain"}),g.show&&g.primary==="sleep"&&o.push({id:"sleep",word:"Mark it planned",note:"out of your days until you begin it — reversible",tone:"plain"}),q&&o.push({id:"rename",word:"Rename this volume",note:"its title and its one line",tone:"plain"}),g.strike&&o.push({id:"strike",word:"Strike it",note:"remove it entirely — there is no undo",tone:"danger"}),o},[s,m,D,J,g.show,g.primary,g.strike,I,q]),G=(o,a)=>{u(null),M(o,a)},De=o=>{if(s){if(o==="take")return G("Taken — the road is yours.",()=>I==null?void 0:I(s.id));if(o==="bind")return u(null),V(s);if(o==="review")return u(null),b==null?void 0:b(s.id);if(o==="reopen")return G("Reopened — the road returns to your days.",()=>P==null?void 0:P(s.id));if(o==="wake")return G("Begun — it is in your days again.",()=>$==null?void 0:$(s.id));if(o==="sleep")return G("Marked planned — out of your days until you begin it.",()=>se==null?void 0:se(s.id));if(o==="rename"){z("__volume__");return}}},N=(()=>{if((t==null?void 0:t.kind)!=="task"||!s)return null;const o=s.quests.find(l=>l.id===t.questId),a=o==null?void 0:o.tasks.find(l=>l.id===t.id);return!o||!a?null:{quest:o,task:a,lane:a.status,title:a.title,questTitle:o.title}})(),He=()=>{if((t==null?void 0:t.kind)==="volume"){if(t.id===v)return{word:"Begin a new volume",note:"an empty book, and the table to argue it at",onPress:()=>{ie(v),T("volume")}};const a=x.find(l=>l.id===t.id);return a?{word:`Open ${a.title.length>26?`${a.title.slice(0,24)}…`:a.title}`,note:Q(a)?"offered — read what it asks before you take it":"its table of contents",onPress:()=>{ie(a.id),T("toc")}}:null}if((t==null?void 0:t.kind)==="tome"){const a=ke.find(l=>l.key===t.id);return{word:`Open ${(a==null?void 0:a.title)??"the book"}`,note:(a==null?void 0:a.line)??"",onPress:()=>L(t.id)}}if((t==null?void 0:t.kind)==="chapter"&&s){const a=s.quests.findIndex(f=>f.id===t.id),l=s.quests[a];return l?(c.get(l.id)??l.status)==="locked"?{word:"A sealed chapter",note:`it ${yo(l,n,c)} — nothing to open yet`,disabled:!0,onPress:()=>{}}:{word:`Open chapter ${oe[a]??a+1}`,note:l.title,onPress:()=>y==null?void 0:y(l.id)}:null}if((t==null?void 0:t.kind)==="task")return N?{word:"Open the chapter",note:N.questTitle,onPress:()=>y==null?void 0:y(t.questId)}:null;if((t==null?void 0:t.kind)==="act"&&s){const a=U.find(l=>l.id===t.id);return a?a.id==="strike"?{word:"Strike it",note:ne.trim()===s.title?"this cannot be undone":"type the volume’s title above to arm this",tone:"danger",disabled:ne.trim()!==s.title,onPress:()=>{var l;W==null||W(s.id),u(null),R(""),ie(((l=X.find(r=>r.id!==s.id))==null?void 0:l.id)??v),T("shelf")}}:{word:a.word,note:a.note,tone:a.tone,onPress:()=>De(a.id)}:null}if(j)return{word:"⚔ Take it to the War Room",note:"the seats argue what it demands and whether now is its time",onPress:()=>b==null?void 0:b()};if(!s)return{word:"⚔ Take it to the War Room",note:"a first campaign is argued before it is written",onPress:()=>b==null?void 0:b()};if(m&&I)return{word:"✦ Take this road — make it mine",note:"nothing in it is scheduled or counted until you do",onPress:()=>M("Taken — the road is yours.",()=>I(s.id))};if(!D&&J)return{word:"⚭ Perform the Binding",note:"the goal wears a date and the book tells its story",onPress:()=>V(s)};if(pe(s))return{word:"Reopen it",note:"closed — reopen it if you sealed it by mistake",onPress:()=>M("Reopened — the road returns to your days.",()=>P==null?void 0:P(s.id))};if(be(s))return{word:"Begin it",note:"planned — bring it back into your days",onPress:()=>M("Begun — it is in your days again.",()=>$==null?void 0:$(s.id))};const o=s.quests.findIndex(a=>{const l=c.get(a.id)??a.status;return l!=="complete"&&l!=="locked"});return o>=0?{word:`Open chapter ${oe[o]??o+1}`,note:s.quests[o].title,onPress:()=>y==null?void 0:y(s.quests[o].id)}:{word:"⚔ Review this plan with the War Room",note:s.quests.length?"every chapter is closed — is the book finished?":"the book has no chapters yet",onPress:()=>b==null?void 0:b(s.id)}},_e=()=>{const o=[];if((t==null?void 0:t.kind)==="chapter"&&_){const a=s==null?void 0:s.quests.find(r=>r.id===t.id),l=a?c.get(a.id)??a.status:null;a&&l!=="locked"&&o.push(e.jsx(S,{tone:"plain",onPress:()=>{z(a.id),T("toc")},note:"its name only",title:`Rename "${a.title}"`,children:"Rename"},"rename-chapter"))}return(t==null?void 0:t.kind)==="task"&&ve&&N&&(mo(t.id)?o.push(e.jsx(S,{tone:"plain",disabled:!0,note:xo(go(t.id)).note,title:"This step is sealed by its own act, not by moving a card",children:"Sealed by the act"},"sealed-by-act")):Ee.filter(a=>a.key!==N.lane).forEach(a=>{o.push(e.jsx(S,{tone:"plain",onPress:()=>M(`Moved to ${a.label}.`,()=>ve(t.questId,t.id,a.key)),note:"on this board",title:`Move it to ${a.label}`,children:a.label},`lane-${a.key}`))})),(t==null?void 0:t.kind)==="act"&&t.id==="strike"&&o.push(e.jsx(S,{tone:"plain",onPress:()=>{u(null),R("")},note:"leave it standing",title:"Keep the volume",children:"Keep it"},"keep")),t&&t.kind!=="act"&&t.kind!=="task"&&o.push(e.jsx(S,{tone:"plain",onPress:()=>u(null),note:"back to the volume",title:"Clear the selection",children:"Clear"},"unaim")),o},We=()=>{var l,r,f,k;let o="This volume",a=(s==null?void 0:s.title)??"No volume open";if(j)o="A new volume",a="A Book to Be Written";else if((t==null?void 0:t.kind)==="volume")o=t.id===v?"Selected":"Selected volume",a=t.id===v?"A Book to Be Written":((l=x.find(p=>p.id===t.id))==null?void 0:l.title)??"";else if((t==null?void 0:t.kind)==="tome")o="Selected book",a=((r=ke.find(p=>p.key===t.id))==null?void 0:r.title)??"";else if((t==null?void 0:t.kind)==="chapter"){const p=(s==null?void 0:s.quests.findIndex(he=>he.id===t.id))??-1;o=`Selected chapter ${oe[p]??p+1}`,a=((f=s==null?void 0:s.quests[p])==null?void 0:f.title)??""}else(t==null?void 0:t.kind)==="task"?(o=N?`Selected step · ${Fo[N.lane]}`:"Selected step",a=(N==null?void 0:N.title)??""):(t==null?void 0:t.kind)==="act"?(o="Selected act",a=((k=U.find(p=>p.id===t.id))==null?void 0:k.word)??""):s&&(o=pe(s)?`Closed ${String(s.sealedAt).slice(0,10)}`:be(s)?`Planned since ${String(s.vaultedAt).slice(0,10)}`:m?"Offered — not yours yet":D?"Bound":"A scroll still");return e.jsxs("div",{className:"lay-bookshelf-c-aim",children:[e.jsx("span",{className:"lay-bookshelf-c-aimkind",children:o}),e.jsx("span",{className:"lay-bookshelf-c-aimtext",children:a})]})},Ne=s||j?j?[{key:"shelf",word:"Shelf"},{key:"volume",word:"Volume"}]:[{key:"shelf",word:"Shelf"},{key:"book",word:"The book"},{key:"volume",word:"Volume"}]:[{key:"shelf",word:"Shelf"}],B=F==="shelf"||Ne.some(o=>o.key===F)||s&&!j&&fe(F)?F:"shelf",Ke=o=>{Ve(o),T(o)},Be=o=>{const a=Oo(o,c),l=(t==null?void 0:t.kind)==="volume"&&t.id===o.id,r=o.id===(s==null?void 0:s.id),f=Q(o);return e.jsxs("button",{type:"button",className:`lay-bookshelf-c-vol${l?" is-aimed":""}${r?" is-here":""}`,style:{"--accent":o.accent},"aria-pressed":l,onClick:()=>u(l?null:{kind:"volume",id:o.id}),children:[e.jsx("span",{className:`lay-bookshelf-c-spine ribbon-${Lo(o)} size-${ye(o)}`,"aria-hidden":"true"}),e.jsxs("span",{className:"lay-bookshelf-c-volbody",children:[e.jsxs("span",{className:"lay-bookshelf-c-voltitle",children:[f&&e.jsx("span",{className:"lay-bookshelf-c-offermark","aria-hidden":"true",children:"✦ "}),o.title]}),e.jsxs("span",{className:"lay-bookshelf-c-volmeta",children:[a.done,"/",a.total," chapters closed",r?" · open now":"",f?" · offered, not yours yet":""]})]})]},o.id)},Se=()=>we.length===0?null:e.jsxs("section",{className:"lay-bookshelf-c-section",children:[e.jsxs("h3",{className:"lay-bookshelf-c-head",children:["Offered",e.jsx("span",{className:"lay-bookshelf-c-sub",children:"yours if you take them — read one before you do"})]}),e.jsx("div",{className:"lay-bookshelf-c-rows",children:we.map(Be)})]},"offered"),Ie=xe==="lead"||xe==="B",Xe=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-sorts",role:"group","aria-label":"How the shelf is ordered",children:Object.entries(ue).map(([o,a])=>e.jsx("button",{type:"button",className:`lay-bookshelf-c-sort${K===o?" on":""}`,"aria-pressed":K===o,onClick:()=>qe(o),children:a.label},o))}),Ie&&Se(),e.jsx("div",{className:"lay-bookshelf-c-group",children:"Yours"}),e.jsxs("section",{className:"lay-bookshelf-c-section",children:[e.jsxs("h3",{className:"lay-bookshelf-c-head",children:["Your campaigns",e.jsx("span",{className:"lay-bookshelf-c-sub",children:"underway — the present. Plans and unbound scrolls stand in the War Room; closed volumes rest in the Library."})]}),X.length===0?e.jsx(ee,{children:"No campaign is underway. That is a beginning, not a gap — a life project becomes a volume once the table has argued what it demands."}):e.jsx("div",{className:"lay-bookshelf-c-rows",children:X.map(Be)})]}),e.jsx("section",{className:"lay-bookshelf-c-section",children:e.jsx("div",{className:"lay-bookshelf-c-rows",children:e.jsxs("button",{type:"button",className:`lay-bookshelf-c-vol is-unwritten${(t==null?void 0:t.kind)==="volume"&&t.id===v?" is-aimed":""}`,"aria-pressed":(t==null?void 0:t.kind)==="volume"&&t.id===v,onClick:()=>u((t==null?void 0:t.kind)==="volume"&&t.id===v?null:{kind:"volume",id:v}),children:[e.jsx("span",{className:"lay-bookshelf-c-spine is-quill","aria-hidden":"true",children:"🪶"}),e.jsxs("span",{className:"lay-bookshelf-c-volbody",children:[e.jsx("span",{className:"lay-bookshelf-c-voltitle",children:"A Book to Be Written"}),e.jsx("span",{className:"lay-bookshelf-c-volmeta",children:"Life is not over. There is always another volume."})]})]})})}),e.jsx("div",{className:"lay-bookshelf-c-group",children:"Not yours"}),!Ie&&Se(),e.jsxs("section",{className:"lay-bookshelf-c-section",children:[e.jsxs("h3",{className:"lay-bookshelf-c-head",children:["The other books",e.jsx("span",{className:"lay-bookshelf-c-sub",children:"not campaigns — books the realm keeps"})]}),e.jsx("div",{className:"lay-bookshelf-c-rows",children:Me.map(o=>{const a=(t==null?void 0:t.kind)==="tome"&&t.id===o.key;return e.jsxs("button",{type:"button",className:`lay-bookshelf-c-vol is-tome${a?" is-aimed":""}`,"aria-pressed":a,onClick:()=>u(a?null:{kind:"tome",id:o.key}),children:[e.jsx("span",{className:"lay-bookshelf-c-spine is-tome","aria-hidden":"true"}),e.jsxs("span",{className:"lay-bookshelf-c-volbody",children:[e.jsx("span",{className:"lay-bookshelf-c-voltitle",children:o.title}),e.jsx("span",{className:"lay-bookshelf-c-volmeta",children:o.key==="sundays"?`${Z} past ${Z===1?"week":"weeks"}, each with what it came to`:o.line})]})]},o.key)})})]})]}),Ye=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:"Table of Contents"}),s.quests.length===0?e.jsx(ee,{children:"This volume has no chapters yet. Write one below, or take the whole plan to the War Room and let the seats argue what it should hold."}):e.jsx("ol",{className:"lay-bookshelf-c-chapters",children:s.quests.map((o,a)=>{const l=c.get(o.id)??o.status,r=vo(o),f=l==="locked",k=l==="complete",p=(t==null?void 0:t.kind)==="chapter"&&t.id===o.id;return je===o.id?e.jsx("li",{className:"lay-bookshelf-c-quill",children:e.jsx(Ae,{value:o.title,onSave:he=>{_==null||_(o.id,he),z(null),E("Renamed.")},onCancel:()=>z(null)})},o.id):e.jsx("li",{children:e.jsxs("button",{type:"button",className:`lay-bookshelf-c-ch chapter-${l}${p?" is-aimed":""}`,"aria-pressed":p,onClick:()=>u(p?null:{kind:"chapter",id:o.id}),children:[e.jsxs("span",{className:"lay-bookshelf-c-numeral",children:[oe[a]??a+1,"."]}),e.jsxs("span",{className:"lay-bookshelf-c-chbody",children:[e.jsx("span",{className:"lay-bookshelf-c-chtitle",children:f?"A Sealed Chapter":o.title}),!f&&r.total>0&&e.jsx("span",{className:"lay-bookshelf-c-chbar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${r.percent}%`}})})]}),e.jsx("span",{className:"lay-bookshelf-c-folio",children:k?"✓":f?"🔒":`${r.done}/${r.total}`})]})},o.id)})}),ge&&e.jsx(wo,{onAdd:o=>ge(s.id,o)})]}),Ze=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:$e("road")}),e.jsx("div",{className:"book-leaf",children:e.jsx(jo,{book:s,epics:n,statuses:c,today:h??No(),onSelectQuest:o=>u({kind:"chapter",id:o}),onSetWaits:Le,titleAct:"choose it; the rail opens it"})})]}),Je=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:$e("register")}),e.jsx("div",{className:"book-leaf",children:e.jsx(Bo,{book:s})})]}),Ue=()=>{const o=s.quests.filter(a=>(c.get(a.id)??a.status)!=="locked"&&a.tasks.some(l=>!H(l))).sort((a,l)=>{const r=f=>f.tasks.some(k=>k.status!=="done"&&!H(k));return(r(l)?1:0)-(r(a)?1:0)});return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:"The Board — chapters as columns"}),o.length===0?e.jsx(ee,{children:"No chapters carry tasks yet — the board waits for work."}):o.map(a=>e.jsxs("section",{className:"lay-bookshelf-c-section",children:[e.jsxs("h3",{className:"lay-bookshelf-c-head",children:[a.title,e.jsx("span",{className:"lay-bookshelf-c-sub",children:"tap a step to select it; the lanes are in the rail"})]}),Ee.map(l=>{const r=a.tasks.filter(k=>k.status===l.key&&!H(k)),f=l.key==="done"?r.slice(0,5):r;return e.jsxs("div",{className:"lay-bookshelf-c-lane",children:[e.jsxs("div",{className:"lay-bookshelf-c-lanelabel",children:[l.label," · ",r.length]}),e.jsxs("div",{className:"lay-bookshelf-c-rows",children:[f.map(k=>{const p=(t==null?void 0:t.kind)==="task"&&t.id===k.id;return e.jsx("button",{type:"button",className:`lay-bookshelf-c-step${p?" is-aimed":""}`,style:{"--accent":s.accent},"aria-pressed":p,onClick:()=>u(p?null:{kind:"task",id:k.id,questId:a.id}),children:k.title},k.id)}),r.length===0&&e.jsx("p",{className:"lay-bookshelf-c-laneempty",children:"nothing here"}),l.key==="done"&&r.length>5&&e.jsxs("p",{className:"lay-bookshelf-c-laneempty",children:["+ ",r.length-5," more sealed"]})]})]},l.key)})]},a.id))]})},Ge=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:"A Book to Be Written"}),e.jsxs("p",{className:"lay-bookshelf-c-prose",children:["What this book holds is not decided alone. Bring the idea to the War Room — the seats will argue what it demands, what it trains, and whether now is its time."," ",ae?"Or take the quill and write it plainly.":"Or voice the campaign to your squire — a spoken volume is written whole."]}),ae&&e.jsx(So,{onAdd:o=>{ae(o),E("The volume is written.")}})]}),Qe=()=>{const o=Io(s),a=zo(s);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:"The volume"}),je==="__volume__"?e.jsx("div",{className:"lay-bookshelf-c-quill",children:e.jsx(Ae,{value:s.title,subtitle:s.tagline??"",subtitleLabel:"the volume's one line…",onSave:l=>{q==null||q(s.id,l),z(null),E("Renamed.")},onCancel:()=>z(null)})}):s.tagline&&e.jsx("p",{className:"lay-bookshelf-c-tagline",children:s.tagline}),m&&e.jsx("p",{className:"lay-bookshelf-c-offer",children:"This road is on the offered shelf. It is not in your realm yet — nothing in it is scheduled, counted, or on your list until you take it."}),s.description&&e.jsx("p",{className:"lay-bookshelf-c-prose",children:s.description}),!m&&!D&&!J&&e.jsxs("p",{className:"lay-bookshelf-c-hint",children:[!Pe(s)&&!Co(s)?"A scroll still — its goal wears no date and its story is untold. Give the boss a real deadline and the book a real description, and the clasp will appear.":Pe(s)?"A scroll still — its story is untold. Tell the book what it is for and what done means, and the clasp will appear.":"A scroll still — give the goal a real date (a sworn quarter, a dated boss, a hard deadline), and the clasp will appear."," ","Or take the whole plan to the table first — it may be worth binding, or worth setting down."]}),e.jsxs("div",{className:"lay-bookshelf-c-standing",children:[a.total>0&&e.jsxs("div",{className:"lay-bookshelf-c-bar",role:"progressbar","aria-valuenow":a.percent,"aria-valuemin":0,"aria-valuemax":100,"aria-label":`${a.done} of ${a.total} steps across the book`,children:[e.jsx("span",{className:"lay-bookshelf-c-bartrack",children:e.jsx("span",{className:"lay-bookshelf-c-barfill",style:{width:`${a.percent}%`}})}),e.jsxs("span",{className:"lay-bookshelf-c-barpct",children:[a.done,"/",a.total," steps"]})]}),e.jsxs("p",{className:"lay-bookshelf-c-xp",children:[o.earned,"/",o.potential," XP"]})]}),U.length>0&&e.jsxs("section",{className:"lay-bookshelf-c-section",children:[e.jsxs("h3",{className:"lay-bookshelf-c-head",children:["What can be done with this volume",e.jsx("span",{className:"lay-bookshelf-c-sub",children:"tap one to aim the rail — nothing here writes until the rail is pressed"})]}),e.jsx("div",{className:"lay-bookshelf-c-rows",children:U.map(l=>{const r=(t==null?void 0:t.kind)==="act"&&t.id===l.id;return e.jsxs("button",{type:"button",className:`lay-bookshelf-c-actrow tone-${l.tone}${r?" is-aimed":""}`,"aria-pressed":r,onClick:()=>{const f=r?null:{kind:"act",id:l.id};u(f),(!f||l.id!=="strike")&&R("")},children:[e.jsx("span",{className:"lay-bookshelf-c-actword",children:l.word}),e.jsx("span",{className:"lay-bookshelf-c-actnote",children:l.note})]},l.id)})})]}),(t==null?void 0:t.kind)==="act"&&t.id==="strike"&&e.jsxs("div",{className:"lay-bookshelf-c-strike",children:[e.jsxs("label",{htmlFor:"lay-bookshelf-c-typed",children:["This cannot be undone. Type ",e.jsx("strong",{children:s.title})," to strike it. Take a copy from the Saddlebag first if you want one."]}),e.jsx("input",{id:"lay-bookshelf-c-typed",className:"lay-bookshelf-c-input",value:ne,onChange:l=>R(l.target.value),placeholder:s.title,autoComplete:"off"})]}),!m&&e.jsx(Ao,{epic:s,scope:"epic"}),!m&&e.jsx($o,{scope:"epic",targetId:s.id,targetTitle:s.title})]})},A=He(),eo=re??"Nothing above this rail changes your realm.",oo=()=>{if(j)return"A new volume — nothing written yet";if(!s)return"No campaign is underway";const o=To(s,c);return pe(s)?`Closed ${String(s.sealedAt).slice(0,10)} — ${Po(s)}`:be(s)?`Planned since ${String(s.vaultedAt).slice(0,10)} — out of your days until you begin it.`:m?`${o} · offered — not yours yet`:`${o}.`};return e.jsxs("div",{className:"lay-bookshelf-c",role:"dialog","aria-label":"The Bookshelf",style:de?{height:`${de.height}px`,top:`${de.top}px`}:void 0,children:[e.jsx("style",{children:Mo}),e.jsxs("header",{className:"lay-bookshelf-c-head-band",children:[e.jsxs("div",{className:"lay-bookshelf-c-headtext",children:[e.jsx("div",{className:"lay-bookshelf-c-kicker",children:"The Bookshelf"}),e.jsx("h2",{className:"lay-bookshelf-c-title",children:j?"A Book to Be Written":(s==null?void 0:s.title)??"The shelf"}),e.jsx("p",{className:"lay-bookshelf-c-state",children:oo()})]}),e.jsx(ro,{onClose:O,name:"the Bookshelf"})]}),e.jsx(co,{rail:e.jsxs("div",{className:"lay-bookshelf-c-rail",children:[We(),e.jsxs(Ce,{note:eo,children:[A?e.jsx(S,{tone:A.tone??"primary",onPress:A.onPress,disabled:A.disabled,note:A.note,title:A.word,children:A.word}):e.jsx(S,{tone:"plain",onPress:O,note:"back to the room",title:"Close the Bookshelf",children:"Close the shelf"}),_e()]}),e.jsx(Ce,{dense:!0,children:Ne.map(o=>{const a=o.key==="book"?fe(B):B===o.key;return e.jsx(S,{tone:a?"primary":"plain",onPress:()=>T(o.key==="book"?Fe:o.key),title:`Show ${o.word}`,children:o.word},o.key)})})]}),children:e.jsx("div",{className:"lay-bookshelf-c-page",ref:ce,children:B==="shelf"?Xe():j?Ge():s?e.jsxs(e.Fragment,{children:[e.jsx(ho,{page:fe(B)?B:null,onChoose:Ke,fill:!0,dark:!0}),B==="toc"?Ye():B==="road"?Ze():B==="board"?Ue():B==="register"?Je():Qe()]}):e.jsx(ee,{children:"No volume is open. Choose one from the shelf."})})}),Y&&e.jsx("div",{className:"lay-bookshelf-c-scrim",onClick:()=>V(null),children:e.jsxs("div",{className:"lay-bookshelf-c-ceremony",onClick:o=>o.stopPropagation(),children:[e.jsx("div",{className:"lay-bookshelf-c-kicker",children:"The Binding Ceremony"}),e.jsx("h3",{className:"lay-bookshelf-c-title",children:Y.title}),e.jsxs("p",{className:"lay-bookshelf-c-prose",children:["The goal wears a date: ",qo(Y),". And its story is told — the book knows what it is for. Bind this scroll, and it takes its place among the books — sealed, shelved, and never silently demoted. A dream becomes a quest here."]}),e.jsxs("div",{className:"lay-bookshelf-c-ceremony-acts",children:[e.jsx("button",{type:"button",className:"lay-bookshelf-c-cbtn",onClick:()=>V(null),children:"Not yet"}),e.jsx("button",{type:"button",className:"lay-bookshelf-c-cbtn is-seal",onClick:()=>{te==null||te(Y.id),V(null),E("Bound — it takes its place among the books.")},children:"⚭ Bind the volume"})]})]})}),C==="forms"&&e.jsx(fo,{onClose:()=>L(null)}),C==="coin"&&e.jsx(po,{onClose:()=>L(null)}),C==="loop"&&e.jsx(bo,{onClose:()=>L(null)}),C==="councils"&&e.jsx(uo,{onClose:()=>L(null)}),C==="sundays"&&e.jsx(ko,{meta:i,today:h,onClose:()=>L(null)})]})}const Mo=`
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
`;export{_o as default};
