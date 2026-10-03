import{r as f,ak as ee,aj as Ie,al as Je,aP as Ue,am as Ge,ap as Qe,aG as eo,aH as oo,j as e,C as ao,W as to,N as _,A as Be,R as $,av as so,aw as lo,ax as io,ay as no,aQ as ro,aC as Ce,ar as fe,as as pe,aE as co,y as ho,x as fo,aB as po,aq as Se,aD as bo,i as L,aA as ko,aF as uo,ao as mo,aI as Ae,aJ as yo,at as xo,au as go,aK as vo,az as Pe,an as wo}from"./index-BeKx-Ibw.js";import{c as jo}from"./shelfStanding-m4Zylpgk.js";const oe=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV"],w="__a-book-to-be-written__",No={novice:1,intermediate:2,expert:3,master:4},be={shelf:{label:"Shelf",fn:(r,i)=>(r.order??Pe)-(i.order??Pe)},alpha:{label:"A–Z",fn:(r,i)=>r.title.localeCompare(i.title)},difficulty:{label:"Difficulty",fn:(r,i)=>me(i)-me(r)},left:{label:"Tasks left",fn:(r,i)=>Te(i)-Te(r)},tier:{label:"Stature",fn:(r,i)=>Oe[ue(i)]-Oe[ue(r)]}},Oe={tall:3,mid:2,short:1},ke=[{key:"councils",title:"The Book of Councils",line:"the realm’s case law — waiting and ruled"},{key:"forms",title:"The Book of Forms",line:"the craft of being heard"},{key:"coin",title:"The Book of Coin",line:"rules written before the coin moves"},{key:"loop",title:"The Book of the Loop",line:"how a thing becomes a deed"},{key:"sundays",title:"The Book of Sundays",line:"every week that has been weighed"}];function $o(r){return r.quests.reduce((i,p)=>i+p.tasks.length,0)}function Te(r){return r.quests.reduce((i,p)=>i+p.tasks.filter(c=>c.status!=="done"&&!L(c)).length,0)}function ue(r){const i=$o(r);return i>=25?"tall":i>=10?"mid":"short"}function me(r){return Math.max(1,...r.quests.map(i=>No[i.difficulty]??1))}function zo(r){const i=me(r);return i>=3?"gold":i===2?"crimson":"linen"}function Io(r){const i=r.tasks.filter(d=>!L(d)),p=i.filter(d=>d.hardDue&&d.due).map(d=>d.due).sort()[0];if(p)return{label:`⚑ ${p.slice(5)}`,hard:!0};const c=i.filter(d=>d.due&&d.status==="todo").map(d=>d.due).sort()[0];if(c)return{label:`due ${c.slice(5)}`,hard:!1};const y=i.filter(d=>d.scheduled&&d.status==="todo").map(d=>d.scheduled).sort();return y.length?{label:`~${y[y.length-1].slice(5)}`,hard:!1}:null}function Bo(r){if(r.quarter)return`sworn to ${r.quarter} at the Muster`;const i=r.quests.flatMap(c=>c.tasks.filter(y=>y.due&&!L(y))).sort((c,y)=>{const d=u=>u.boss&&u.hardDue?0:u.hardDue?1:u.boss?2:3;return d(c)-d(y)||(c.due<y.due?-1:1)})[0];return i?`"${i.title.length>48?`${i.title.slice(0,46)}…`:i.title}" — ${i.hardDue?"⚑ ":""}dated ${i.due}`:"a dated path exists"}const Re=[{key:"todo",label:"To do"},{key:"waiting",label:"In other hands"},{key:"done",label:"Sealed"}],Co={todo:"To do",waiting:"In other hands",done:"Sealed"};function So(){const[r,i]=f.useState(null);return f.useEffect(()=>{const p=typeof window>"u"?null:window.visualViewport;if(!p)return;const c=()=>{const y=window.innerHeight-p.height;i(y>120?{height:p.height,top:p.offsetTop}:null)};return c(),p.addEventListener("resize",c),p.addEventListener("scroll",c),()=>{p.removeEventListener("resize",c),p.removeEventListener("scroll",c)}},[]),r}function To({epics:r,meta:i=null,today:p=null,statuses:c,openTo:y,onSelectQuest:d,onGoToRoundTable:u,onBind:ae,onTakeOffering:z,offerPlacement:ye,onAddQuest:xe,onAddEpic:te,onMoveTask:ge,onEditQuest:V,onEditEpic:q,onVault:se,onWake:S,onUnseal:A,onStrike:K,onClose:P}){const[X,Ee]=f.useState("shelf"),g=f.useMemo(()=>{var o;return[...r].sort(((o=be[X])==null?void 0:o.fn)??be.shelf.fn)},[r,X]),ve=f.useMemo(()=>g.filter(ee),[g]),Y=f.useMemo(()=>Ie(g),[g]),[le,ie]=f.useState(()=>Je([...Ie(g),...g],y)),N=le===w,s=N?null:g.find(o=>o.id===le)??Y[0]??g[0]??null,[ne,F]=f.useState(s?"contents":"shelf"),[t,m]=f.useState(null),[we,I]=f.useState(null),[Z,D]=f.useState(null),[re,O]=f.useState(""),[de,T]=f.useState(null),[B,R]=f.useState(null),J=f.useMemo(()=>i?Ue(i,p).filter(o=>!o.current).length:0,[i,p]),Le=f.useMemo(()=>ke.filter(o=>o.key!=="sundays"||J>0),[J]),ce=f.useRef(null),he=So();f.useEffect(()=>{var o,a;m(null),O(""),I(null),(a=(o=ce.current)==null?void 0:o.scrollTo)==null||a.call(o,{top:0})},[le]),f.useEffect(()=>{var o,a;m(null),O(""),(a=(o=ce.current)==null?void 0:o.scrollTo)==null||a.call(o,{top:0})},[ne]),f.useEffect(()=>{if(!de)return;const o=setTimeout(()=>T(null),4e3);return()=>clearTimeout(o)},[de]),f.useEffect(()=>{const o=a=>{a.key==="Escape"&&!B&&(P==null||P())};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[P,B]);const M=(o,a)=>{a==null||a(),T(o)},x=s?ee(s):!1,H=s?Ge(s):!1,U=s?Qe(s):!1,v=s?eo(s,{canStrike:!!K,isStanding:oo(s),isOffered:x}):{show:!1,primary:null,strike:!1},G=f.useMemo(()=>{if(!s)return[];const o=[];return x&&z&&o.push({id:"take",word:"✦ Take this road — make it mine",note:"nothing in it is scheduled or counted until you do",tone:"primary"}),!x&&!H&&U&&o.push({id:"bind",word:"⚭ Perform the Binding",note:"the goal wears a date and the book tells its story",tone:"primary"}),o.push({id:"review",word:"⚔ Review this plan with the War Room",note:"the seats read what is still open; finished steps are history",tone:"plain"}),v.show&&v.primary==="reopen"&&o.push({id:"reopen",word:"Reopen it",note:"the ending is forgotten and the road returns to your days",tone:"plain"}),v.show&&v.primary==="wake"&&o.push({id:"wake",word:"Begin it",note:"it returns to your days",tone:"plain"}),v.show&&v.primary==="sleep"&&o.push({id:"sleep",word:"Mark it planned",note:"out of your days until you begin it — reversible",tone:"plain"}),q&&o.push({id:"rename",word:"Rename this volume",note:"its title and its one line",tone:"plain"}),v.strike&&o.push({id:"strike",word:"Strike it",note:"remove it entirely — there is no undo",tone:"danger"}),o},[s,x,H,U,v.show,v.primary,v.strike,z,q]),Q=(o,a)=>{m(null),M(o,a)},qe=o=>{if(s){if(o==="take")return Q("Taken — the road is yours.",()=>z==null?void 0:z(s.id));if(o==="bind")return m(null),D(s);if(o==="review")return m(null),u==null?void 0:u(s.id);if(o==="reopen")return Q("Reopened — the road returns to your days.",()=>A==null?void 0:A(s.id));if(o==="wake")return Q("Begun — it is in your days again.",()=>S==null?void 0:S(s.id));if(o==="sleep")return Q("Marked planned — out of your days until you begin it.",()=>se==null?void 0:se(s.id));if(o==="rename"){I("__volume__");return}}},j=(()=>{if((t==null?void 0:t.kind)!=="task"||!s)return null;const o=s.quests.find(l=>l.id===t.questId),a=o==null?void 0:o.tasks.find(l=>l.id===t.id);return!o||!a?null:{quest:o,task:a,lane:a.status,title:a.title,questTitle:o.title}})(),Fe=()=>{if((t==null?void 0:t.kind)==="volume"){if(t.id===w)return{word:"Begin a new volume",note:"an empty book, and the table to argue it at",onPress:()=>{ie(w),F("volume")}};const a=g.find(l=>l.id===t.id);return a?{word:`Open ${a.title.length>26?`${a.title.slice(0,24)}…`:a.title}`,note:ee(a)?"offered — read what it asks before you take it":"its table of contents",onPress:()=>{ie(a.id),F("contents")}}:null}if((t==null?void 0:t.kind)==="tome"){const a=ke.find(l=>l.key===t.id);return{word:`Open ${(a==null?void 0:a.title)??"the book"}`,note:(a==null?void 0:a.line)??"",onPress:()=>R(t.id)}}if((t==null?void 0:t.kind)==="chapter"&&s){const a=s.quests.findIndex(h=>h.id===t.id),l=s.quests[a];return l?(c.get(l.id)??l.status)==="locked"?{word:"A sealed chapter",note:`it ${Ce(l,r,c)} — nothing to open yet`,disabled:!0,onPress:()=>{}}:{word:`Open chapter ${oe[a]??a+1}`,note:l.title,onPress:()=>d==null?void 0:d(l.id)}:null}if((t==null?void 0:t.kind)==="task")return j?{word:"Open the chapter",note:j.questTitle,onPress:()=>d==null?void 0:d(t.questId)}:null;if((t==null?void 0:t.kind)==="act"&&s){const a=G.find(l=>l.id===t.id);return a?a.id==="strike"?{word:"Strike it",note:re.trim()===s.title?"this cannot be undone":"type the volume’s title above to arm this",tone:"danger",disabled:re.trim()!==s.title,onPress:()=>{var l;K==null||K(s.id),m(null),O(""),ie(((l=Y.find(n=>n.id!==s.id))==null?void 0:l.id)??w),F("shelf")}}:{word:a.word,note:a.note,tone:a.tone,onPress:()=>qe(a.id)}:null}if(N)return{word:"⚔ Take it to the War Room",note:"the seats argue what it demands and whether now is its time",onPress:()=>u==null?void 0:u()};if(!s)return{word:"⚔ Take it to the War Room",note:"a first campaign is argued before it is written",onPress:()=>u==null?void 0:u()};if(x&&z)return{word:"✦ Take this road — make it mine",note:"nothing in it is scheduled or counted until you do",onPress:()=>M("Taken — the road is yours.",()=>z(s.id))};if(!H&&U)return{word:"⚭ Perform the Binding",note:"the goal wears a date and the book tells its story",onPress:()=>D(s)};if(fe(s))return{word:"Reopen it",note:"closed — reopen it if you sealed it by mistake",onPress:()=>M("Reopened — the road returns to your days.",()=>A==null?void 0:A(s.id))};if(pe(s))return{word:"Begin it",note:"planned — bring it back into your days",onPress:()=>M("Begun — it is in your days again.",()=>S==null?void 0:S(s.id))};const o=s.quests.findIndex(a=>{const l=c.get(a.id)??a.status;return l!=="complete"&&l!=="locked"});return o>=0?{word:`Open chapter ${oe[o]??o+1}`,note:s.quests[o].title,onPress:()=>d==null?void 0:d(s.quests[o].id)}:{word:"⚔ Review this plan with the War Room",note:s.quests.length?"every chapter is closed — is the book finished?":"the book has no chapters yet",onPress:()=>u==null?void 0:u(s.id)}},De=()=>{const o=[];if((t==null?void 0:t.kind)==="chapter"&&V){const a=s==null?void 0:s.quests.find(n=>n.id===t.id),l=a?c.get(a.id)??a.status:null;a&&l!=="locked"&&o.push(e.jsx($,{tone:"plain",onPress:()=>{I(a.id),F("contents")},note:"its name only",title:`Rename "${a.title}"`,children:"Rename"},"rename-chapter"))}return(t==null?void 0:t.kind)==="task"&&ge&&j&&(co(t.id)?o.push(e.jsx($,{tone:"plain",disabled:!0,note:ho(fo(t.id)).note,title:"This step is sealed by its own act, not by moving a card",children:"Sealed by the act"},"sealed-by-act")):Re.filter(a=>a.key!==j.lane).forEach(a=>{o.push(e.jsx($,{tone:"plain",onPress:()=>M(`Moved to ${a.label}.`,()=>ge(t.questId,t.id,a.key)),note:"on this board",title:`Move it to ${a.label}`,children:a.label},`lane-${a.key}`))})),(t==null?void 0:t.kind)==="act"&&t.id==="strike"&&o.push(e.jsx($,{tone:"plain",onPress:()=>{m(null),O("")},note:"leave it standing",title:"Keep the volume",children:"Keep it"},"keep")),t&&t.kind!=="act"&&t.kind!=="task"&&o.push(e.jsx($,{tone:"plain",onPress:()=>m(null),note:"back to the volume",title:"Clear the selection",children:"Clear"},"unaim")),o},Me=()=>{var l,n,h,k;let o="This volume",a=(s==null?void 0:s.title)??"No volume open";if(N)o="A new volume",a="A Book to Be Written";else if((t==null?void 0:t.kind)==="volume")o=t.id===w?"Selected":"Selected volume",a=t.id===w?"A Book to Be Written":((l=g.find(b=>b.id===t.id))==null?void 0:l.title)??"";else if((t==null?void 0:t.kind)==="tome")o="Selected book",a=((n=ke.find(b=>b.key===t.id))==null?void 0:n.title)??"";else if((t==null?void 0:t.kind)==="chapter"){const b=(s==null?void 0:s.quests.findIndex(E=>E.id===t.id))??-1;o=`Selected chapter ${oe[b]??b+1}`,a=((h=s==null?void 0:s.quests[b])==null?void 0:h.title)??""}else(t==null?void 0:t.kind)==="task"?(o=j?`Selected step · ${Co[j.lane]}`:"Selected step",a=(j==null?void 0:j.title)??""):(t==null?void 0:t.kind)==="act"?(o="Selected act",a=((k=G.find(b=>b.id===t.id))==null?void 0:k.word)??""):s&&(o=fe(s)?`Closed ${String(s.sealedAt).slice(0,10)}`:pe(s)?`Planned since ${String(s.vaultedAt).slice(0,10)}`:x?"Offered — not yours yet":H?"Bound":"A scroll still");return e.jsxs("div",{className:"lay-bookshelf-c-aim",children:[e.jsx("span",{className:"lay-bookshelf-c-aimkind",children:o}),e.jsx("span",{className:"lay-bookshelf-c-aimtext",children:a})]})},je=s||N?N?[{key:"shelf",word:"Shelf"},{key:"volume",word:"Volume"}]:[{key:"shelf",word:"Shelf"},{key:"contents",word:"Contents"},{key:"road",word:"Road"},{key:"board",word:"Board"},{key:"volume",word:"Volume"}]:[{key:"shelf",word:"Shelf"}],W=je.some(o=>o.key===ne)?ne:"shelf",Ne=o=>{const a=wo(o,c),l=(t==null?void 0:t.kind)==="volume"&&t.id===o.id,n=o.id===(s==null?void 0:s.id),h=ee(o);return e.jsxs("button",{type:"button",className:`lay-bookshelf-c-vol${l?" is-aimed":""}${n?" is-here":""}`,style:{"--accent":o.accent},"aria-pressed":l,onClick:()=>m(l?null:{kind:"volume",id:o.id}),children:[e.jsx("span",{className:`lay-bookshelf-c-spine ribbon-${zo(o)} size-${ue(o)}`,"aria-hidden":"true"}),e.jsxs("span",{className:"lay-bookshelf-c-volbody",children:[e.jsxs("span",{className:"lay-bookshelf-c-voltitle",children:[h&&e.jsx("span",{className:"lay-bookshelf-c-offermark","aria-hidden":"true",children:"✦ "}),o.title]}),e.jsxs("span",{className:"lay-bookshelf-c-volmeta",children:[a.done,"/",a.total," chapters closed",n?" · open now":"",h?" · offered, not yours yet":""]})]})]},o.id)},$e=()=>ve.length===0?null:e.jsxs("section",{className:"lay-bookshelf-c-section",children:[e.jsxs("h3",{className:"lay-bookshelf-c-head",children:["Offered",e.jsx("span",{className:"lay-bookshelf-c-sub",children:"yours if you take them — read one before you do"})]}),e.jsx("div",{className:"lay-bookshelf-c-rows",children:ve.map(Ne)})]},"offered"),ze=ye==="lead"||ye==="B",He=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-sorts",role:"group","aria-label":"How the shelf is ordered",children:Object.entries(be).map(([o,a])=>e.jsx("button",{type:"button",className:`lay-bookshelf-c-sort${X===o?" on":""}`,"aria-pressed":X===o,onClick:()=>Ee(o),children:a.label},o))}),ze&&$e(),e.jsx("div",{className:"lay-bookshelf-c-group",children:"Yours"}),e.jsxs("section",{className:"lay-bookshelf-c-section",children:[e.jsxs("h3",{className:"lay-bookshelf-c-head",children:["Your campaigns",e.jsx("span",{className:"lay-bookshelf-c-sub",children:"underway — the present. Plans and unbound scrolls stand in the War Room; closed volumes rest in the Library."})]}),Y.length===0?e.jsx(_,{children:"No campaign is underway. That is a beginning, not a gap — a life project becomes a volume once the table has argued what it demands."}):e.jsx("div",{className:"lay-bookshelf-c-rows",children:Y.map(Ne)})]}),e.jsx("section",{className:"lay-bookshelf-c-section",children:e.jsx("div",{className:"lay-bookshelf-c-rows",children:e.jsxs("button",{type:"button",className:`lay-bookshelf-c-vol is-unwritten${(t==null?void 0:t.kind)==="volume"&&t.id===w?" is-aimed":""}`,"aria-pressed":(t==null?void 0:t.kind)==="volume"&&t.id===w,onClick:()=>m((t==null?void 0:t.kind)==="volume"&&t.id===w?null:{kind:"volume",id:w}),children:[e.jsx("span",{className:"lay-bookshelf-c-spine is-quill","aria-hidden":"true",children:"🪶"}),e.jsxs("span",{className:"lay-bookshelf-c-volbody",children:[e.jsx("span",{className:"lay-bookshelf-c-voltitle",children:"A Book to Be Written"}),e.jsx("span",{className:"lay-bookshelf-c-volmeta",children:"Life is not over. There is always another volume."})]})]})})}),e.jsx("div",{className:"lay-bookshelf-c-group",children:"Not yours"}),!ze&&$e(),e.jsxs("section",{className:"lay-bookshelf-c-section",children:[e.jsxs("h3",{className:"lay-bookshelf-c-head",children:["The other books",e.jsx("span",{className:"lay-bookshelf-c-sub",children:"not campaigns — books the realm keeps"})]}),e.jsx("div",{className:"lay-bookshelf-c-rows",children:Le.map(o=>{const a=(t==null?void 0:t.kind)==="tome"&&t.id===o.key;return e.jsxs("button",{type:"button",className:`lay-bookshelf-c-vol is-tome${a?" is-aimed":""}`,"aria-pressed":a,onClick:()=>m(a?null:{kind:"tome",id:o.key}),children:[e.jsx("span",{className:"lay-bookshelf-c-spine is-tome","aria-hidden":"true"}),e.jsxs("span",{className:"lay-bookshelf-c-volbody",children:[e.jsx("span",{className:"lay-bookshelf-c-voltitle",children:o.title}),e.jsx("span",{className:"lay-bookshelf-c-volmeta",children:o.key==="sundays"?`${J} past ${J===1?"week":"weeks"}, each with what it came to`:o.line})]})]},o.key)})})]})]}),We=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:"Table of Contents"}),s.quests.length===0?e.jsx(_,{children:"This volume has no chapters yet. Write one below, or take the whole plan to the War Room and let the seats argue what it should hold."}):e.jsx("ol",{className:"lay-bookshelf-c-chapters",children:s.quests.map((o,a)=>{const l=c.get(o.id)??o.status,n=po(o),h=l==="locked",k=l==="complete",b=(t==null?void 0:t.kind)==="chapter"&&t.id===o.id;return we===o.id?e.jsx("li",{className:"lay-bookshelf-c-quill",children:e.jsx(Se,{value:o.title,onSave:E=>{V==null||V(o.id,E),I(null),T("Renamed.")},onCancel:()=>I(null)})},o.id):e.jsx("li",{children:e.jsxs("button",{type:"button",className:`lay-bookshelf-c-ch chapter-${l}${b?" is-aimed":""}`,"aria-pressed":b,onClick:()=>m(b?null:{kind:"chapter",id:o.id}),children:[e.jsxs("span",{className:"lay-bookshelf-c-numeral",children:[oe[a]??a+1,"."]}),e.jsxs("span",{className:"lay-bookshelf-c-chbody",children:[e.jsx("span",{className:"lay-bookshelf-c-chtitle",children:h?"A Sealed Chapter":o.title}),!h&&n.total>0&&e.jsx("span",{className:"lay-bookshelf-c-chbar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${n.percent}%`}})})]}),e.jsx("span",{className:"lay-bookshelf-c-folio",children:k?"✓":h?"🔒":`${n.done}/${n.total}`})]})},o.id)})}),xe&&e.jsx(bo,{onAdd:o=>xe(s.id,o)})]}),_e=()=>{const o=s.quests;return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:"The Road — chapters as a journey"}),o.length===0?e.jsx(_,{children:"No chapters yet, so there is no road to walk. The map begins where the plan does."}):e.jsx("ol",{className:"lay-bookshelf-c-road",children:o.map((a,l)=>{const n=c.get(a.id)??a.status,h=Io(a),k=(t==null?void 0:t.kind)==="chapter"&&t.id===a.id,b=l>0&&(c.get(o[l-1].id)??o[l-1].status)==="complete",E=n==="locked"?Ce(a,r,c):"";return e.jsxs("li",{className:"lay-bookshelf-c-stop",children:[e.jsx("span",{className:`lay-bookshelf-c-ink${b&&n==="complete"?" is-walked":""}${l===0?" is-first":""}`,"aria-hidden":"true"}),e.jsxs("button",{type:"button",className:`lay-bookshelf-c-stone stone-${n}${k?" is-aimed":""}`,"aria-pressed":k,onClick:()=>m(k?null:{kind:"chapter",id:a.id}),children:[e.jsx("span",{className:`lay-bookshelf-c-mark mark-${n}`,"aria-hidden":"true",children:n==="complete"?"✓":n==="locked"?"🔒":"◆"}),e.jsxs("span",{className:"lay-bookshelf-c-chbody",children:[e.jsx("span",{className:"lay-bookshelf-c-chtitle",children:n==="locked"?"A sealed waystone":a.title}),e.jsxs("span",{className:`lay-bookshelf-c-when${h!=null&&h.hard?" is-hard":""}`,children:[n==="complete"?"won":(h==null?void 0:h.label)??"undated",E?` · ${E}`:""]})]})]})]},a.id)})}),e.jsx("p",{className:"lay-bookshelf-c-footnote",children:"— here ends the map, not the road —"})]})},Ve=()=>{const o=s.quests.filter(a=>(c.get(a.id)??a.status)!=="locked"&&a.tasks.some(l=>!L(l))).sort((a,l)=>{const n=h=>h.tasks.some(k=>k.status!=="done"&&!L(k));return(n(l)?1:0)-(n(a)?1:0)});return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:"The Board — chapters as columns"}),o.length===0?e.jsx(_,{children:"No chapters carry tasks yet — the board waits for work."}):o.map(a=>e.jsxs("section",{className:"lay-bookshelf-c-section",children:[e.jsxs("h3",{className:"lay-bookshelf-c-head",children:[a.title,e.jsx("span",{className:"lay-bookshelf-c-sub",children:"tap a step to select it; the lanes are in the rail"})]}),Re.map(l=>{const n=a.tasks.filter(k=>k.status===l.key&&!L(k)),h=l.key==="done"?n.slice(0,5):n;return e.jsxs("div",{className:"lay-bookshelf-c-lane",children:[e.jsxs("div",{className:"lay-bookshelf-c-lanelabel",children:[l.label," · ",n.length]}),e.jsxs("div",{className:"lay-bookshelf-c-rows",children:[h.map(k=>{const b=(t==null?void 0:t.kind)==="task"&&t.id===k.id;return e.jsx("button",{type:"button",className:`lay-bookshelf-c-step${b?" is-aimed":""}`,style:{"--accent":s.accent},"aria-pressed":b,onClick:()=>m(b?null:{kind:"task",id:k.id,questId:a.id}),children:k.title},k.id)}),n.length===0&&e.jsx("p",{className:"lay-bookshelf-c-laneempty",children:"nothing here"}),l.key==="done"&&n.length>5&&e.jsxs("p",{className:"lay-bookshelf-c-laneempty",children:["+ ",n.length-5," more sealed"]})]})]},l.key)})]},a.id))]})},Ke=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:"A Book to Be Written"}),e.jsxs("p",{className:"lay-bookshelf-c-prose",children:["What this book holds is not decided alone. Bring the idea to the War Room — the seats will argue what it demands, what it trains, and whether now is its time."," ",te?"Or take the quill and write it plainly.":"Or voice the campaign to your squire — a spoken volume is written whole."]}),te&&e.jsx(ko,{onAdd:o=>{te(o),T("The volume is written.")}})]}),Xe=()=>{const o=uo(s),a=mo(s);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lay-bookshelf-c-label",children:"The volume"}),we==="__volume__"?e.jsx("div",{className:"lay-bookshelf-c-quill",children:e.jsx(Se,{value:s.title,subtitle:s.tagline??"",subtitleLabel:"the volume's one line…",onSave:l=>{q==null||q(s.id,l),I(null),T("Renamed.")},onCancel:()=>I(null)})}):s.tagline&&e.jsx("p",{className:"lay-bookshelf-c-tagline",children:s.tagline}),x&&e.jsx("p",{className:"lay-bookshelf-c-offer",children:"This road is on the offered shelf. It is not in your realm yet — nothing in it is scheduled, counted, or on your list until you take it."}),s.description&&e.jsx("p",{className:"lay-bookshelf-c-prose",children:s.description}),!x&&!H&&!U&&e.jsxs("p",{className:"lay-bookshelf-c-hint",children:[!Ae(s)&&!yo(s)?"A scroll still — its goal wears no date and its story is untold. Give the boss a real deadline and the book a real description, and the clasp will appear.":Ae(s)?"A scroll still — its story is untold. Tell the book what it is for and what done means, and the clasp will appear.":"A scroll still — give the goal a real date (a sworn quarter, a dated boss, a hard deadline), and the clasp will appear."," ","Or take the whole plan to the table first — it may be worth binding, or worth setting down."]}),e.jsxs("div",{className:"lay-bookshelf-c-standing",children:[a.total>0&&e.jsxs("div",{className:"lay-bookshelf-c-bar",role:"progressbar","aria-valuenow":a.percent,"aria-valuemin":0,"aria-valuemax":100,"aria-label":`${a.done} of ${a.total} steps across the book`,children:[e.jsx("span",{className:"lay-bookshelf-c-bartrack",children:e.jsx("span",{className:"lay-bookshelf-c-barfill",style:{width:`${a.percent}%`}})}),e.jsxs("span",{className:"lay-bookshelf-c-barpct",children:[a.done,"/",a.total," steps"]})]}),e.jsxs("p",{className:"lay-bookshelf-c-xp",children:[o.earned,"/",o.potential," XP"]})]}),G.length>0&&e.jsxs("section",{className:"lay-bookshelf-c-section",children:[e.jsxs("h3",{className:"lay-bookshelf-c-head",children:["What can be done with this volume",e.jsx("span",{className:"lay-bookshelf-c-sub",children:"tap one to aim the rail — nothing here writes until the rail is pressed"})]}),e.jsx("div",{className:"lay-bookshelf-c-rows",children:G.map(l=>{const n=(t==null?void 0:t.kind)==="act"&&t.id===l.id;return e.jsxs("button",{type:"button",className:`lay-bookshelf-c-actrow tone-${l.tone}${n?" is-aimed":""}`,"aria-pressed":n,onClick:()=>{const h=n?null:{kind:"act",id:l.id};m(h),(!h||l.id!=="strike")&&O("")},children:[e.jsx("span",{className:"lay-bookshelf-c-actword",children:l.word}),e.jsx("span",{className:"lay-bookshelf-c-actnote",children:l.note})]},l.id)})})]}),(t==null?void 0:t.kind)==="act"&&t.id==="strike"&&e.jsxs("div",{className:"lay-bookshelf-c-strike",children:[e.jsxs("label",{htmlFor:"lay-bookshelf-c-typed",children:["This cannot be undone. Type ",e.jsx("strong",{children:s.title})," to strike it. Take a copy from the Saddlebag first if you want one."]}),e.jsx("input",{id:"lay-bookshelf-c-typed",className:"lay-bookshelf-c-input",value:re,onChange:l=>O(l.target.value),placeholder:s.title,autoComplete:"off"})]}),!x&&e.jsx(xo,{epic:s,scope:"epic"}),!x&&e.jsx(go,{scope:"epic",targetId:s.id,targetTitle:s.title})]})},C=Fe(),Ye=de??"Nothing above this rail changes your realm.",Ze=()=>{if(N)return"A new volume — nothing written yet";if(!s)return"No campaign is underway";const o=jo(s,c);return fe(s)?`Closed ${String(s.sealedAt).slice(0,10)} — ${vo(s)}`:pe(s)?`Planned since ${String(s.vaultedAt).slice(0,10)} — out of your days until you begin it.`:x?`${o} · offered — not yours yet`:`${o}.`};return e.jsxs("div",{className:"lay-bookshelf-c",role:"dialog","aria-label":"The Bookshelf",style:he?{height:`${he.height}px`,top:`${he.top}px`}:void 0,children:[e.jsx("style",{children:Ao}),e.jsxs("header",{className:"lay-bookshelf-c-head-band",children:[e.jsxs("div",{className:"lay-bookshelf-c-headtext",children:[e.jsx("div",{className:"lay-bookshelf-c-kicker",children:"The Bookshelf"}),e.jsx("h2",{className:"lay-bookshelf-c-title",children:N?"A Book to Be Written":(s==null?void 0:s.title)??"The shelf"}),e.jsx("p",{className:"lay-bookshelf-c-state",children:Ze()})]}),e.jsx(ao,{onClose:P,name:"the Bookshelf"})]}),e.jsx(to,{rail:e.jsxs("div",{className:"lay-bookshelf-c-rail",children:[Me(),e.jsxs(Be,{note:Ye,children:[C?e.jsx($,{tone:C.tone??"primary",onPress:C.onPress,disabled:C.disabled,note:C.note,title:C.word,children:C.word}):e.jsx($,{tone:"plain",onPress:P,note:"back to the room",title:"Close the Bookshelf",children:"Close the shelf"}),De()]}),e.jsx(Be,{dense:!0,children:je.map(o=>e.jsx($,{tone:W===o.key?"primary":"plain",onPress:()=>F(o.key),title:`Show ${o.word}`,children:o.word},o.key))})]}),children:e.jsx("div",{className:"lay-bookshelf-c-page",ref:ce,children:W==="shelf"?He():N?Ke():s?W==="contents"?We():W==="road"?_e():W==="board"?Ve():Xe():e.jsx(_,{children:"No volume is open. Choose one from the shelf."})})}),Z&&e.jsx("div",{className:"lay-bookshelf-c-scrim",onClick:()=>D(null),children:e.jsxs("div",{className:"lay-bookshelf-c-ceremony",onClick:o=>o.stopPropagation(),children:[e.jsx("div",{className:"lay-bookshelf-c-kicker",children:"The Binding Ceremony"}),e.jsx("h3",{className:"lay-bookshelf-c-title",children:Z.title}),e.jsxs("p",{className:"lay-bookshelf-c-prose",children:["The goal wears a date: ",Bo(Z),". And its story is told — the book knows what it is for. Bind this scroll, and it takes its place among the books — sealed, shelved, and never silently demoted. A dream becomes a quest here."]}),e.jsxs("div",{className:"lay-bookshelf-c-ceremony-acts",children:[e.jsx("button",{type:"button",className:"lay-bookshelf-c-cbtn",onClick:()=>D(null),children:"Not yet"}),e.jsx("button",{type:"button",className:"lay-bookshelf-c-cbtn is-seal",onClick:()=>{ae==null||ae(Z.id),D(null),T("Bound — it takes its place among the books.")},children:"⚭ Bind the volume"})]})]})}),B==="forms"&&e.jsx(so,{onClose:()=>R(null)}),B==="coin"&&e.jsx(lo,{onClose:()=>R(null)}),B==="loop"&&e.jsx(io,{onClose:()=>R(null)}),B==="councils"&&e.jsx(no,{onClose:()=>R(null)}),B==="sundays"&&e.jsx(ro,{meta:i,today:p,onClose:()=>R(null)})]})}const Ao=`
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
.lay-bookshelf-c-footnote { margin: 14px 0 0; text-align: center; font-size: 13px; font-style: italic; color: var(--ink-dim, #a8987a); }

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

/* The road runs DOWN the page, which is a phone's own axis; the desktop's
   800-unit wandering line is unreadable squeezed into 393pt. */
.lay-bookshelf-c-road { list-style: none; margin: 0; padding: 0; }
.lay-bookshelf-c-stop { position: relative; padding-left: 22px; padding-bottom: 10px; }
.lay-bookshelf-c-ink {
  position: absolute; left: 9px; top: -10px; bottom: 0; width: 2px;
  background: repeating-linear-gradient(to bottom, var(--border, #3d3320) 0 5px, transparent 5px 9px);
}
.lay-bookshelf-c-ink.is-first { top: 28px; }
.lay-bookshelf-c-ink.is-walked { background: var(--gold-bright, #f4c95d); opacity: .75; }
.lay-bookshelf-c-stone {
  position: relative; display: flex; align-items: center; gap: 10px; width: 100%; text-align: left;
  min-height: 56px; padding: 10px 12px; font: inherit;
  background: var(--parchment-raised, #241d13); color: var(--ink, #e9dcc0);
  border: 1px solid var(--border, #3d3320); border-radius: 10px;
}
.lay-bookshelf-c-stone.is-aimed { border-color: var(--gold-bright, #f4c95d); box-shadow: 0 0 0 1px var(--gold-bright, #f4c95d) inset; }
.lay-bookshelf-c-mark {
  flex: none; width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-size: 13px; border: 1px solid var(--border, #3d3320); color: var(--ink-dim, #a8987a);
  margin-left: -25px; background: var(--parchment, #1c1710);
}
.lay-bookshelf-c-mark.mark-complete { border-color: #a4433a; background: #a4433a; color: #f3e2c0; }
.lay-bookshelf-c-mark.mark-active { border-color: var(--gold-bright, #f4c95d); color: var(--gold-bright, #f4c95d); }
.lay-bookshelf-c-when { font-size: 13px; color: var(--ink-dim, #a8987a); line-height: 1.35; }
.lay-bookshelf-c-when.is-hard { color: #e0a06a; }

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
`;export{To as default};
