import{aR as oe,r as n,aS as re,j as e,C as $,W as B,N as I,A as f,R as r,aT as ce,aU as de,aV as he}from"./index-BeKx-Ibw.js";const pe=["The phone rests in another room.","No games — not on phone, console, or this machine.","Notifications are silenced.","One task. This one."];function fe({entry:o,onSnuff:w,onForged:j,onOpenScreen:U=null}){var P;const{focusUrl:W,focusSet:G,setFocus:V,release:L}=oe(),O=a=>{L(),w==null||w(a)},R=a=>{L(),j==null||j(a)},x=(o==null?void 0:o.task)??null,s=(o==null?void 0:o.quest)??null,c=(o==null?void 0:o.epic)??null,[Y]=n.useState(()=>Date.now()),[,Q]=n.useState(0),[l,X]=n.useState([]),[S,z]=n.useState("asking"),[q,H]=n.useState(()=>new Set),[i,y]=n.useState(null),[h,F]=n.useState(0),[u,N]=n.useState(null),[k,b]=n.useState(null),D=n.useRef(!1),M=n.useRef(null);n.useEffect(()=>{const a=setInterval(()=>Q(t=>t+1),1e3);return()=>clearInterval(a)},[]),n.useEffect(()=>{D.current||!x||!s||!c||(D.current=!0,fetch("/api/commonplace").then(a=>a.json()).then(a=>{X(re((a==null?void 0:a.captures)??[],o)),z("ready")}).catch(()=>{z("unreachable")}))},[o,x,s,c]),n.useEffect(()=>{if(!u)return;const a=setTimeout(()=>N(null),6e3);return()=>clearTimeout(a)},[u]),n.useEffect(()=>{var a;i==="scraps"&&((a=M.current)==null||a.scrollIntoView({block:"nearest"}))},[h,i]);const T=Math.floor((Date.now()-Y)/1e3),J=String(Math.floor(T/60)).padStart(2,"0"),Z=String(T%60).padStart(2,"0"),p=Math.floor(T/60),_=n.useMemo(()=>[c==null?void 0:c.title,s==null?void 0:s.title].filter(Boolean).join(" · "),[c,s]),g=a=>q.has(a.id)||(a.usedIn??[]).includes(s==null?void 0:s.id),d=i==="scraps"&&l.length?l[Math.min(h,l.length-1)]:null,ee=()=>{const a=d;!a||!s||g(a)||(H(t=>new Set(t).add(a.id)),fetch(`/api/commonplace?id=${encodeURIComponent(a.id)}&use=${encodeURIComponent(s.id)}`,{method:"PATCH"}).then(t=>{if(t.ok){N({text:"Kept beside the work — the scrap is inked onto this road.",tone:"good"});return}throw new Error("refused")}).catch(()=>{H(t=>{const v=new Set(t);return v.delete(a.id),v}),N({text:"The Bookmarks could not be reached — the scrap is not inked.",tone:"bad"})}))},ae=()=>F(a=>l.length?(a+1)%l.length:0),te=()=>{p<1?b("forge"):R(p)},E=()=>{p<1?b("snuff"):O(p)},C=()=>O(0),ne=()=>R(0);if(n.useEffect(()=>{const a=t=>{t.key==="Escape"&&(k?b(null):i?y(null):E())};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)}),!x||!s||!c)return e.jsxs("div",{className:"lay-candle-c",role:"dialog","aria-modal":"true","aria-label":"The candle",children:[e.jsx("style",{children:K}),e.jsxs("header",{className:"lay-candle-c-well is-short",children:[e.jsx("span",{className:"lay-candle-c-flame","aria-hidden":"true",children:"🕯️"}),e.jsx($,{onClose:C,name:"the candle"})]}),e.jsx(B,{rail:e.jsx("div",{className:"lay-candle-c-rail",children:e.jsxs("div",{className:"lay-candle-c-mouth",children:[e.jsx("p",{className:"lay-candle-c-line",children:"Nothing is on the board to burn a candle for."}),e.jsx(f,{dense:!0,children:e.jsx(r,{tone:"plain",onPress:C,title:"Back to the Study",children:"Back to the room"})})]})}),children:e.jsx(I,{children:"There is no step at this flame. Choose a step in the day’s orders and light the candle from there — nothing is recorded for a candle that had nothing to burn."})})]});const le=()=>{if(k){const m=k==="forge";return e.jsxs("div",{className:"lay-candle-c-mouth","data-tenant":"asked",children:[e.jsx("p",{className:"lay-candle-c-line is-ask",children:m?"Under a minute — it is marked done, no minutes recorded.":"Under a minute at the flame — nothing will be recorded."}),e.jsxs(f,{dense:!0,children:[e.jsx(r,{tone:"plain",onPress:m?ne:C,title:m?"Mark the step done and record no minutes":"Leave the candle without a record",children:m?"Mark it done anyway":"Leave it unwritten"}),e.jsx(r,{tone:"primary",onPress:()=>b(null),title:"Go back to the flame and keep working",children:"Stay at the flame"})]})]})}const a=S==="asking"?"Looking in the book for scraps beside this work…":S==="unreachable"?"The Bookmarks could not be reached.":l.length===0?"Nothing in the book mentions this work.":null,t=i==="scraps"?"Close the scraps":a?"Scraps":`Scraps · ${l.length}`,v=S!=="ready"||l.length===0,se=e.jsxs(f,{dense:!0,children:[e.jsx(r,{tone:"plain",onPress:()=>y(i==="road"?null:"road"),title:"Show the whole road this step sits on",children:i==="road"?"Close the road":"The road"}),e.jsx(r,{tone:"plain",disabled:v,onPress:()=>{F(0),y("scraps")},title:"Scraps from the Bookmarks that mention this work",children:t})]}),ie=e.jsxs(f,{dense:!0,children:[e.jsx(r,{tone:"primary",disabled:!d||g(d),onPress:ee,title:"Keep it beside the work — a use event, which inks the scrap onto this road",children:d&&g(d)?"Kept":"Keep it"}),e.jsx(r,{tone:"plain",onPress:ae,disabled:l.length<2,title:"Aim at the next scrap",children:"Next scrap"}),e.jsx(r,{tone:"plain",onPress:()=>y(null),title:"Close the scraps and go back to the vows",children:"Close"})]}),A=i==="scraps"?ie:se;if(u)return e.jsxs("div",{className:"lay-candle-c-mouth","data-tenant":"said",children:[e.jsx("p",{className:`lay-candle-c-line ${u.tone==="bad"?"is-bad":"is-good"}`,children:u.text}),A]});if(i==="scraps"){const m=d?g(d)?`Scrap ${h+1} of ${l.length} — already inked onto this road.`:`Keep it — inks scrap ${h+1} of ${l.length} onto this road.`:"Nothing in the book mentions this work.";return e.jsxs("div",{className:"lay-candle-c-mouth","data-tenant":"aimed",children:[e.jsx("p",{className:"lay-candle-c-line",children:m}),A]})}return e.jsxs("div",{className:"lay-candle-c-mouth","data-tenant":"idle",children:[e.jsx("p",{className:"lay-candle-c-line",children:i==="road"?"The road this step sits on is open above.":a??"Open the road, or the scraps kept beside it."}),A]})};return e.jsxs("div",{className:"lay-candle-c",role:"dialog","aria-modal":"true","aria-label":"The candle",children:[e.jsx("style",{children:K}),e.jsxs("header",{className:"lay-candle-c-well",children:[e.jsx("span",{className:"lay-candle-c-flame","aria-hidden":"true",children:"🕯️"}),e.jsxs("div",{className:"lay-candle-c-clock",role:"timer","aria-label":"Time at the flame",children:[J,":",Z]}),e.jsx($,{onClose:E,name:"the candle"})]}),e.jsxs(B,{rail:e.jsxs("div",{className:"lay-candle-c-rail",children:[le(),!k&&e.jsxs(e.Fragment,{children:[e.jsx(f,{children:e.jsx(r,{tone:"primary",onPress:te,note:p<1?"marks it done — under a minute it asks first":`marks it done and records ${p} min`,title:"Forged — record the focus and mark this step done",children:"Forged — mark it done"})}),e.jsx(f,{dense:!0,children:e.jsx(r,{tone:"plain",onPress:E,note:"keeps the minutes, leaves the step open",title:"Snuff the candle — keeps the minutes, leaves the step open",children:"Snuff the candle"})}),e.jsx(ce,{focusUrl:W,focusSet:G,onSet:V,place:"rail"}),e.jsx(de,{place:"rail"}),e.jsx(he,{onOpen:U,place:"rail"})]})]}),children:[e.jsx("h2",{className:"lay-candle-c-task",children:x.title}),e.jsx("p",{className:"lay-candle-c-road",children:_}),e.jsx("ul",{className:"lay-candle-c-vows",children:pe.map(a=>e.jsx("li",{children:a},a))}),i==="road"&&e.jsxs("section",{className:"lay-candle-c-panel","aria-label":"The road",children:[e.jsx("h3",{className:"lay-candle-c-panelhead",children:"The road"}),(P=s.tasks)!=null&&P.length?e.jsx("ul",{className:"lay-candle-c-steps",children:s.tasks.map(a=>{const t=a.id===x.id;return e.jsxs("li",{className:`lay-candle-c-step${a.status==="done"?" is-done":""}${t?" is-current":""}`,children:[e.jsx("span",{className:"lay-candle-c-mark","aria-hidden":"true",children:a.status==="done"?"✓":t?"▶":"○"}),e.jsx("span",{children:a.title})]},a.id)})}):e.jsx(I,{children:"This road carries no other steps."})]}),i==="scraps"&&e.jsxs("section",{className:"lay-candle-c-panel","aria-label":"Beside the work",children:[e.jsx("h3",{className:"lay-candle-c-panelhead",children:"From your Bookmarks"}),l.length?l.map((a,t)=>e.jsxs("article",{ref:t===Math.min(h,l.length-1)?M:null,className:`lay-candle-c-scrap${t===Math.min(h,l.length-1)?" is-aimed":""}`,children:[e.jsx("p",{children:a.text.length>240?a.text.slice(0,238)+"…":a.text}),g(a)&&e.jsx("span",{className:"lay-candle-c-inked",children:"✒ kept beside the work"})]},a.id)):e.jsx(I,{children:"Nothing in the book mentions this work."})]})]})]})}const K=`
.lay-candle-c {
  position: fixed; inset: 0; z-index: 60;
  display: flex; flex-direction: column;
  height: 100dvh; max-height: 100dvh;
  background: var(--parchment, #1c1710); color: var(--ink, #e9dcc0);
  font-size: 15px;
}

/* THE FLAME WELL. Fixed sky: it never scrolls, so the clock is readable from
   across a desk at any moment of the session without touching the phone. */
.lay-candle-c-well {
  flex: none; position: relative;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
  min-height: 150px;
  padding: calc(env(safe-area-inset-top, 0px) + 12px) 12px 10px;
  border-bottom: 1px solid var(--border, #3d3320);
}
.lay-candle-c-well.is-short { min-height: 96px; }
.lay-candle-c-flame { font-size: 38px; line-height: 1; }
@media (prefers-reduced-motion: no-preference) {
  .lay-candle-c-flame { animation: lay-candle-c-flicker 3.2s ease-in-out infinite; }
}
@keyframes lay-candle-c-flicker {
  0%, 100% { opacity: 1; transform: scale(1); }
  45% { opacity: .86; transform: scale(.97); }
}
.lay-candle-c-clock {
  font-family: 'Cinzel', Georgia, serif;
  font-size: 54px; line-height: 1.05; font-weight: 600;
  font-variant-numeric: tabular-nums; font-feature-settings: 'tnum' 1;
  color: var(--gold-bright, #f4c95d);
}
/* The ruled close, 44x44, top-right, and far enough from the clock that the
   two never share a seam — the clock is not a target at all. */
.lay-candle-c .lay-close {
  position: absolute; top: calc(env(safe-area-inset-top, 0px) + 6px); right: 8px;
  width: 44px; height: 44px; min-width: 44px; min-height: 44px;
  font: inherit; font-size: 22px; line-height: 1;
  background: none; border: 1px solid var(--border, #3d3320); border-radius: 8px;
  color: var(--ink-dim, #a8987a);
}

.lay-candle-c .lay-waterline { flex: 1; min-height: 0; display: flex; flex-direction: column; }

/* THE ONE SCROLLER. Everything else on this surface is flex:none, so nothing
   but this column can ever move under a thumb. */
.lay-candle-c .lay-above {
  flex: 1; min-height: 0; overflow-y: auto; -webkit-overflow-scrolling: touch;
  padding: 16px calc(env(safe-area-inset-right, 0px) + 16px) 18px calc(env(safe-area-inset-left, 0px) + 16px);
}
.lay-candle-c .lay-nothing { color: var(--ink-dim, #a8987a); font-size: 15px; padding: 12px 2px; line-height: 1.5; }

.lay-candle-c-task {
  margin: 0; font-family: 'Cinzel', Georgia, serif; font-size: 20px; font-weight: 700;
  line-height: 1.3; overflow-wrap: anywhere; color: var(--ink, #e9dcc0);
}
.lay-candle-c-road { margin: 6px 0 0; font-size: 13px; color: var(--ink-dim, #a8987a); line-height: 1.4; overflow-wrap: anywhere; }
.lay-candle-c-vows { margin: 16px 0 0; padding-left: 20px; font-size: 15px; line-height: 1.65; color: var(--ink-dim, #a8987a); }
.lay-candle-c-vows li + li { margin-top: 4px; }

.lay-candle-c-panel { margin-top: 18px; border-top: 1px solid var(--border, #3d3320); padding-top: 14px; }
.lay-candle-c-panelhead {
  margin: 0 0 10px; font-size: 12px; letter-spacing: .14em; text-transform: uppercase;
  color: var(--gold-bright, #f4c95d); font-weight: 600;
}
.lay-candle-c-steps { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
.lay-candle-c-step { display: flex; gap: 10px; align-items: flex-start; font-size: 15px; line-height: 1.4; overflow-wrap: anywhere; }
.lay-candle-c-mark { flex: none; width: 16px; color: var(--ink-dim, #a8987a); }
.lay-candle-c-step.is-done { color: var(--ink-dim, #a8987a); text-decoration: line-through; }
.lay-candle-c-step.is-current { color: var(--gold-bright, #f4c95d); }
.lay-candle-c-step.is-current .lay-candle-c-mark { color: var(--gold-bright, #f4c95d); }

.lay-candle-c-scrap {
  border: 1px solid var(--border, #3d3320); border-radius: 10px;
  padding: 12px; margin-bottom: 10px;
  background: var(--parchment-raised, #241d13);
}
.lay-candle-c-scrap p { margin: 0; font-size: 15px; line-height: 1.5; overflow-wrap: anywhere; }
/* The aim is drawn, never tapped: this is what the mouth is pointing at. */
.lay-candle-c-scrap.is-aimed { border-color: var(--gold-bright, #f4c95d); box-shadow: 0 0 0 1px var(--gold-bright, #f4c95d) inset; }
.lay-candle-c-inked { display: inline-block; margin-top: 8px; font-size: 13px; color: var(--gold, #d9a441); }

/* THE WATERLINE ITSELF — a 15pt gradient fall-off plus the rail's 1px
   hairline, drawn over the scroller's bottom edge and unpressable, so the eye
   is told where the hands begin before the thumb finds out. */
.lay-candle-c-rail {
  position: relative; flex: none;
  border-top: 1px solid var(--border, #3d3320);
  background: var(--parchment-raised, #241d13);
  padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 12px);
}
.lay-candle-c-rail::before {
  content: ''; position: absolute; left: 0; right: 0; top: -15px; height: 15px;
  pointer-events: none;
  background: linear-gradient(to bottom, rgba(28, 23, 16, 0), var(--parchment, #1c1710));
}

/* THE MOUTH. 62pt as a FLOOR — an 18pt line over a 44pt act row — never as a
   ceiling. A fixed height with overflow hidden clipped its own words at a
   large system text size (mobile book §8: capacity in type, containers that
   grow), which cut the second line off "Next scrap" and left a half-word on the
   control that moves the aim. The rail is flex:none and the reading column
   is the flexible sibling, so a taller mouth costs reading room, never acts. */
.lay-candle-c-mouth {
  min-height: 62px;
  padding: 0 calc(env(safe-area-inset-right, 0px) + 12px) 0 calc(env(safe-area-inset-left, 0px) + 12px);
}
.lay-candle-c-line {
  margin: 0; height: 18px; font-size: 13px; line-height: 18px;
  color: var(--ink-dim, #a8987a);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.lay-candle-c-line.is-good { color: var(--gold-bright, #f4c95d); }
.lay-candle-c-line.is-bad { color: #d99177; }
/* THE QUESTION IS THE ONE LINE THAT MAY NOT BE ELLIPSISED — a half-read
   question is not a question. It is also the one tenant that owns the whole
   rail, so there is room: the mouth's height is a floor now, not a ceiling. */
.lay-candle-c-line.is-ask {
  color: var(--ink, #e9dcc0);
  white-space: normal; height: auto; min-height: 18px; padding: 4px 0;
}

/* The primitives keep their own class names; only this design's arithmetic is
   set here. Every act clears 44pt, the forge clears 64. */
.lay-candle-c .lay-rail { padding: 0; }
.lay-candle-c .lay-rail-acts { display: flex; gap: 10px; align-items: stretch; }
.lay-candle-c .lay-act {
  flex: 1 1 0; min-width: 44px; min-height: 44px;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
  padding: 6px 8px; font: inherit; border-radius: 10px;
  border: 1px solid var(--border, #3d3320);
  background: var(--parchment, #1c1710); color: var(--ink, #e9dcc0);
}
.lay-candle-c .lay-act-word { font-size: 14px; line-height: 1.15; text-align: center; }
.lay-candle-c .lay-act-note { font-size: 11px; line-height: 1.15; color: var(--ink-dim, #a8987a); text-align: center; }
/* A DISABLED ACT IS STILL READ, so opacity is part of its contrast. At .45 the
   ink composites to ~#786F5F over the parchment — 3.63:1, under the 4.5 a
   readable line needs (the .cite-open finding: 5.56:1 as a colour, 3.69:1
   once its own alpha applied). .55 measures 4.83:1. */
.lay-candle-c .lay-act[disabled] { opacity: .55; }
.lay-candle-c .lay-rail-note { display: none; }
.lay-candle-c .lay-rail-dense .lay-act { min-height: 44px; }

/* THE FORGE. Filled gold with parchment text — 7.99:1, and the only filled
   control on the glass. The 10px band above it and 10px below are the §5 seam:
   no two adjacent hit areas on this surface touch. */
.lay-candle-c .lay-rail:not(.lay-rail-dense) {
  padding: 10px calc(env(safe-area-inset-right, 0px) + 12px) 0 calc(env(safe-area-inset-left, 0px) + 12px);
}
.lay-candle-c .lay-rail:not(.lay-rail-dense) .lay-act-primary {
  min-height: 64px;
  background: var(--gold, #d9a441); border-color: var(--gold, #d9a441);
  color: var(--parchment, #1c1710);
}
.lay-candle-c .lay-rail:not(.lay-rail-dense) .lay-act-primary .lay-act-word { font-size: 17px; font-weight: 600; }
.lay-candle-c .lay-rail:not(.lay-rail-dense) .lay-act-primary .lay-act-note { color: rgba(28, 23, 16, .78); }

/* THE EXITS. 48pt, plain, and beneath the forge — the way out is never offered
   ahead of the act.

   NO last-child SELECTOR, AND THE REASON IS A REGRESSION THIS FILE SHIPPED
   WITH ON 2026-08-27. These two rules used to end in a last-child pseudo-class
   and the snuff rail was the last child — until the Focus link was added after
   it. That link renders ONLY on Apple platforms (see canRunShortcuts), so on
   every other device CandleFocusLink returns null, emits no DOM node, and the
   selector still matched. The exits therefore lost their 10px seam, their
   safe-area side padding and their 48px act height on iPhone AND NOWHERE ELSE
   — invisible on the desk it was written at, broken on the one platform the
   feature exists for.

   The child combinator alone is sufficient and always was: all four mouth()
   branches wrap their dense rail in a lay-candle-c-mouth div, as does the
   no-task state, so this is still the only dense rail that is a DIRECT child
   of the rail. The pseudo-class was buying nothing and encoding an assumption
   about sibling order that the next addition was always going to break.

   AND NO BACKTICKS IN THIS COMMENT, which is not a style rule. It sits inside
   a CSS template literal, so a backtick in prose ENDS THE STRING — the trap
   this repo has now paid for five times, and the first draft of this very
   comment was the fifth. The build caught it because it happened to produce a
   syntax error; the dangerous variant does not, and yields a truncated
   stylesheet that still looks like one. */
.lay-candle-c-rail > .lay-rail-dense {
  padding: 10px calc(env(safe-area-inset-right, 0px) + 12px) 0 calc(env(safe-area-inset-left, 0px) + 12px);
}
.lay-candle-c-rail > .lay-rail-dense .lay-act { min-height: 48px; }

/* The mouth's gold act is a dense 44pt control, not the forge — a second
   filled button beside the primary one is two primaries. */
.lay-candle-c .lay-rail-dense .lay-act-primary {
  background: var(--parchment, #1c1710);
  border-color: var(--gold-bright, #f4c95d); color: var(--gold-bright, #f4c95d);
}

/* LANDSCAPE AND SHORT GLASS. The rail's three bands keep every point of their
   height; the flame and the clock give theirs up. Type, never targets — an
   act that shrinks below 44pt on a rotated phone is an act that fails on a
   rotated phone. */
@media (max-height: 620px) {
  .lay-candle-c-well { min-height: 0; padding-top: calc(env(safe-area-inset-top, 0px) + 6px); padding-bottom: 6px; }
  .lay-candle-c-flame { font-size: 22px; }
  .lay-candle-c-clock { font-size: 30px; }
  .lay-candle-c-vows { margin-top: 12px; }
}
`;export{fe as default};
