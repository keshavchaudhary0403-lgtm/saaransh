(function(){
"use strict";
const R = window.REPORTS, G = window.GLOSSARY;

/* ---------- helpers ---------- */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const rich = s => esc(s).replace(/\[\[(\w+)\|([^\]]+)\]\]/g,(m,k,t)=>G[k]?`<button class="term" data-term="${k}">${t}</button>`:t);
const NUMRE=/(₹\s?\d[\d,]*(?:\.\d+)?(?:\s?(?:lakh crore|crore|lakh|cr\/km|cr|लाख करोड़|करोड़|लाख))?|\b\d[\d,]*(?:\.\d+)?\s?(?:%|per cent|lakh crore|crore|lakh|km|लाख करोड़|करोड़|लाख|किमी|प्रतिशत)(?![A-Za-z]))/g;
const hiNum = h => h.split(/(<[^>]+>)/).map(p=>p.startsWith("<")?p:p.replace(NUMRE,'<mark class="n">$1</mark>')).join("");
const escH = s => hiNum(esc(s));
const richH = s => hiNum(rich(s));
const plain = s => String(s).replace(/\[\[\w+\|([^\]]+)\]\]/g,"$1");
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const store = {get(k,d){try{const v=localStorage.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const num = (v,d=2) => Number(v).toLocaleString("en-IN",{maximumFractionDigits:d});
const fmtCr = v => v>=100000 ? `₹${num(v/100000,2)} lakh crore` : `₹${num(v,2)} crore`;
const when = r => r.year*12 + (r.month||1);
let toastT;
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("on");clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove("on"),2200)}
const onVisible=(el,fn,opts={threshold:.2})=>{if(!el)return;if(!("IntersectionObserver" in window)){fn(true);return}new IntersectionObserver(es=>es.forEach(e=>fn(e.isIntersecting)),opts).observe(el)};
const once=(el,fn,th=.25)=>{let done=false;onVisible(el,v=>{if(v&&!done){done=true;fn()}},{threshold:th})};
const ARR=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const BOOK=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M6 3h12v18l-6-4-6 4z"/></svg>`;

/* publisher colour + tag */
const PUBC={"CAG":"indigo","NITI Aayog":"turm","MoSPI":"green","Finance Commission":"plum","Finance Ministry":"plum","Health Ministry":"teal"};
const pub = r => r.level==="State" ? "red" : (PUBC[r.body]||"indigo");
const pubName = r => r.level==="State"?`CAG · ${r.state}`:r.body;
const tag = r => `<span class="tag c-${pub(r)}"><i></i>${esc(pubName(r))}</span>`;

const GROUPS=[["All","ink",()=>true],["CAG · Union","indigo",r=>r.body==="CAG"&&r.level!=="State"],["CAG · States","red",r=>r.level==="State"],["NITI Aayog","turm",r=>r.body==="NITI Aayog"],["MoSPI","green",r=>r.body==="MoSPI"],["Finance","plum",r=>/Finance/.test(r.body)],["Health","teal",r=>r.body==="Health Ministry"]];
/* ---------- spec content adapter (Report Saar spec v1.0) ---------- */
const SITE=window.SITE||{}, SPEC=window.SPEC_REPORTS||[], FHI=window.FHI26||{};
const ALIAS={"bharatmala-2023":"bharatmala"};
const byId = id => R.find(r=>r.id===(ALIAS[id]||id));
const SECTOR_TOPIC={"Skilling & employment":"Jobs","Education & institutions":"Education","Public finance":"Economy","Roads & infrastructure":"Infrastructure","Health":"Health","Agriculture":"Agriculture","Defence":"Defence","Railways":"Infrastructure","Environment":"Environment","Social welfare":"Poverty","Other":"Governance"};
const termKey={}; Object.entries(G).forEach(([k,g])=>{termKey[g.t.toLowerCase()]=k});
Object.entries(SITE.glossary||{}).forEach(([t,d])=>{const lk=t.toLowerCase();if(termKey[lk])return;const k="s_"+lk.replace(/[^a-z0-9]+/g,"_");G[k]={t,d};termKey[lk]=k});
function fromSpec(s){
  return {id:s.id, body:s.body==="NITI"?"NITI Aayog":"CAG", level:s.state?"State":"Central", state:s.state, topic:SECTOR_TOPIC[s.sector]||"Governance", sector:s.sector, kind:s.kind, reportNo:s.reportNo,
    ministry:s.ministry, tabled:s.tabled, period:s.period, year:+s.dateISO.slice(0,4), month:+s.dateISO.slice(5,7), date:s.date,
    title:s.short, fullTitle:s.title, ref:`${s.reportNo} · ${s.kind}`, hook:s.tldr[0],
    big:s.flagged!=null?{v:`₹${num(s.flagged,0)} cr`,l:"flagged by the audit"}:{v:s.nums[0][0],l:s.nums[0][1]},
    money:s.flagged, flagged:s.flagged, flaggedNote:s.flaggedNote, tldr:s.tldr, en:s.en, hi:s.hi,
    background:s.context.what, why:s.context.why, checked:s.context.how, simple:[s.en], findings:[], themes:s.themes,
    stats:s.nums.map(n=>({v:n[0],l:n[1],loss:n[2]===1})), specNums:s.nums, charts:s.charts, groups:s.groups, groupsNote:s.groupsNote,
    recs:s.recs, recsNote:s.recsNote, response:s.response, timeline:s.timeline, terms:s.glossary, exam:s.exam, related:s.related,
    srcs:s.src, src:{label:s.src[0][0],url:s.src[0][1]}, keys:`${s.kw} ${s.ministry} ${s.sector} ${s.reportNo}`, spec:true};
}
SPEC.forEach(s=>{
  const n=fromSpec(s), ex=R.find(r=>r.id===(ALIAS[s.id]||s.id));
  if(!ex){R.push(n);return}
  const seen=new Set(ex.stats.map(x=>x.v.replace(/\s/g,"")));
  Object.assign(ex,{fullTitle:n.fullTitle,kind:n.kind,reportNo:n.reportNo,ministry:n.ministry,tabled:n.tabled,period:n.period,sector:n.sector,tldrList:n.tldr,en:n.en,hi:n.hi,why:n.why,
    themes:n.themes,recs:n.recs,recsNote:n.recsNote,response:n.response,timeline:n.timeline,terms:n.terms,exam:n.exam,related:n.related,flagged:n.flagged,flaggedNote:n.flaggedNote,specNums:n.specNums,
    srcs:[[ex.src.label,ex.src.url,"official"],...n.srcs],charts:[...ex.charts,...n.charts],stats:[...ex.stats,...n.stats.filter(x=>!seen.has(x.v.replace(/\s/g,"")))],keys:ex.keys+" "+n.keys});
});
Object.entries(window.STATE_FACTS_V2||{}).forEach(([c,l])=>{(window.STATE_FACTS[c]=window.STATE_FACTS[c]||[]).push(...l)});
window.TRENDS.push(
  {id:"govtschool",name:"Students in government schools",unit:"%",short:"Share of all school students",note:"Private unaided schools now hold 38.8%.",pts:[[2005,"2005",71],[2024.5,"2024-25",49.24]],src:"NITI Aayog, School Education report 2026",report:"school-education-2026",min:0,max:80,good:null},
  {id:"statedebt",name:"States' debt",unit:"%",short:"Debt as % of GSDP",note:"About 16.7% to nearly 23%. Lower is safer.",pts:[[2013.5,"2013-14",16.7],[2022.5,"2022-23",23]],src:"NITI Aayog, Fiscal Health Index 2026",report:"fiscal-health-2026",min:0,max:30,good:"down"});
window.QUIZ.push(
  {q:"PMKVY certified 56 lakh trainees in phases 1–3. What share got a job?",min:0,max:100,step:1,ans:41,unit:"%",pre:"",report:"pmkvy-2025",why:"23.18 lakh of 56.14 lakh certified trainees were placed."},
  {q:"How much in Union grants had no utilisation certificate in March 2025?",min:0,max:100000,step:500,ans:54282,unit:" crore",pre:"₹",report:"union-accounts-2425",why:"₹54,282 crore across 33,973 certificates, some pending since 1985-86."});
R.forEach(r=>{(r.terms||[]).forEach(t=>{if(!termKey[t.toLowerCase()])console.warn("[Saaransh] term not in glossary:",t,r.id)});(r.related||[]).forEach(id=>{if(!byId(id))console.warn("[Saaransh] unknown related id:",id,r.id)})});

const readMins = r => Math.max(2,Math.round(plain([...(r.simple||[]),...(r.detailed||[]),...(r.findings||[]),r.background||"",r.why||"",(r.other&&r.other.text)||"",r.next||"",...(r.themes||[]).flatMap(t=>t.items.map(i=>i.t)),...(r.recs||[])].join(" ")).split(/\s+/).length/200));
const hay = r => r._hay || (r._hay=(r.title+" "+(r.fullTitle||"")+" "+r.hook+" "+r.body+" "+r.topic+" "+(r.sector||"")+" "+(r.ministry||"")+" "+(r.state||"")+" "+r.keys+" "+plain((r.simple||[]).join(" "))+" "+(r.en||"")).toLowerCase());
const matchQ = (r,q) => q.toLowerCase().split(/\s+/).filter(Boolean).every(w=>hay(r).includes(w));
const ORDER = () => [...R].sort((a,b)=>when(b)-when(a));
const quizN = R.reduce((a,r)=>a+(r.exam?r.exam.quiz.length:0),0);
const nFindings = r => (r.findings||[]).length+(r.themes||[]).reduce((a,t)=>a+t.items.length,0);
const tldrOf = r => Array.isArray(r.tldr)?r.tldr:(r.tldrList||[r.tldr]);

/* ---------- animated numbers ---------- */
function parseFig(s){const m=String(s).match(/^(.*?)(\d[\d,]*(?:\.\d+)?)(.*)$/);if(!m)return null;const d=m[2].includes(".")?m[2].split(".")[1].length:0;return {pre:m[1],n:parseFloat(m[2].replace(/,/g,"")),d,comma:m[2].includes(",")||parseFloat(m[2].replace(/,/g,""))>=1000,suf:m[3]}}
function countUp(el,str,dur=1100){
  if(!el)return;const f=parseFig(str); if(!f||reduced){el.textContent=str;return}
  const t0=performance.now(), fmt=v=>f.comma?v.toLocaleString("en-IN",{minimumFractionDigits:f.d,maximumFractionDigits:f.d}):v.toFixed(f.d);
  const tok=Symbol(); el._tok=tok;
  (function tick(t){if(el._tok!==tok)return;const p=Math.max(0,Math.min(1,(t-t0)/dur)),e=1-Math.pow(1-p,4);el.textContent=f.pre+fmt(f.n*e)+f.suf;if(p<1)requestAnimationFrame(tick);else el.textContent=str})(t0);
}
const grow=root=>root&&requestAnimationFrame(()=>requestAnimationFrame(()=>root.querySelectorAll("[data-w]").forEach(f=>f.style.width=f.dataset.w+"%")));

/* ---------- saved ---------- */
let saved=new Set(store.get("saaransh-saved",[]));
function syncSaved(){$("#savedDot").hidden=!saved.size;$$("[data-save]").forEach(b=>b.setAttribute("aria-pressed",saved.has(b.dataset.save)));if(cur)$("#rSave").setAttribute("aria-pressed",saved.has(cur.id))}
function toggleSave(id){saved.has(id)?saved.delete(id):saved.add(id);store.set("saaransh-saved",[...saved]);toast(saved.has(id)?"Saved to your list":"Removed from saved");syncSaved();if(lib.tab==="saved"&&inited.reports)renderGrid()}
document.addEventListener("click",e=>{const s=e.target.closest("[data-save]");if(s){e.stopPropagation();e.preventDefault();toggleSave(s.dataset.save)}},true);

/* ---------- theme ---------- */
const isDark=()=>{const t=document.documentElement.dataset.theme;return t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches};
function themeLabel(){const l=isDark()?"Switch to light theme":"Switch to dark theme";$("#themeBtn").setAttribute("aria-label",l);$("#themeBtn").title=l}
$("#themeBtn").addEventListener("click",()=>{const n=isDark()?"light":"dark";const go=()=>{document.documentElement.dataset.theme=n;store.set("saaransh-theme",n);themeLabel();if(inited.numbers)drawTrend(false)};if(document.startViewTransition&&!reduced)document.startViewTransition(go);else go()});
themeLabel();

/* ---------- router ---------- */
const VIEWS=["home","reports","numbers","insights","states","play","learn"];
const VTITLE={home:"Saaransh",reports:"Reports",numbers:"Figures",insights:"Patterns",states:"States",play:"Practice",learn:"Learn"};
let curView="home"; const inited={}, INIT={};
function inkNav(){const ink=$(".nav-ink"),b=$(`.nav [data-view="${curView}"]`);if(!ink)return;if(!b||!b.offsetWidth){ink.style.width=0;return}ink.style.left=b.offsetLeft+"px";ink.style.width=b.offsetWidth+"px"}
function show(v,opts={}){
  if(!VIEWS.includes(v)) v="home";
  const go=()=>{
    $$(".view").forEach(s=>s.hidden=s.dataset.view!==v);
    curView=v;
    $$(".nav [data-view], .tabbar [data-view]").forEach(b=>b.dataset.view===v?b.setAttribute("aria-current","page"):b.removeAttribute("aria-current"));
    inkNav();
    window.scrollTo({top:0,behavior:"instant"});
    document.title=v==="home"?"Saaransh: CAG audits and NITI Aayog reports, decoded":`${VTITLE[v]} · Saaransh`;
    try{history.replaceState(null,"",v==="home"?location.pathname+location.search:"#"+v)}catch(e){}
    if(!inited[v]){inited[v]=true;INIT[v]&&INIT[v]()}
    reelActive(v==="home");
    if(opts.sub) setSub(opts.sub[0],opts.sub[1]);
    $("#sheet").hidden=true;
  };
  if(document.startViewTransition&&!reduced&&!opts.instant){const vt=document.startViewTransition(go);vt.ready.catch(()=>{});vt.finished.catch(()=>{})} else go();
}
document.addEventListener("click",e=>{const h=e.target.closest(".homelink");if(!h)return;e.preventDefault();closeReader();closePalette();if(curView==="home")window.scrollTo({top:0,behavior:reduced?"auto":"smooth"});else show("home")});
document.addEventListener("click",e=>{const b=e.target.closest("[data-view]:not(.view)");if(!b)return;const inner=e.target.closest("[data-open],[data-save],a,input,select");if(inner&&inner!==b&&b.contains(inner))return;e.preventDefault();closeReader();closePalette();show(b.dataset.view)});
document.addEventListener("click",e=>{if(e.target.closest("[data-more]")){$("#sheet").hidden=!$("#sheet").hidden;return}if(e.target.id==="sheet")$("#sheet").hidden=true});
addEventListener("resize",inkNav);
addEventListener("scroll",()=>$("#mast").classList.toggle("scrolled",scrollY>4),{passive:true});
document.fonts&&document.fonts.ready.then(inkNav);

/* sub tabs */
const SUBHOOK={};
function setSub(g,t){
  $$(`[data-subgroup="${g}"] [data-sub]`).forEach(x=>x.setAttribute("aria-selected",x.dataset.sub===t));
  $$(`[data-subpanel^="${g}:"]`).forEach(p=>p.hidden=p.dataset.subpanel!==`${g}:${t}`);
  SUBHOOK[g]&&SUBHOOK[g](t);
}
document.addEventListener("click",e=>{const b=e.target.closest("[data-sub]");if(!b)return;setSub(b.closest("[data-subgroup]").dataset.subgroup,b.dataset.sub)});
document.addEventListener("keydown",e=>{const b=e.target.closest&&e.target.closest("[data-sub]");if(!b||!["ArrowRight","ArrowLeft"].includes(e.key))return;const all=[...b.parentElement.querySelectorAll("[data-sub]")];const i=(all.indexOf(b)+(e.key==="ArrowRight"?1:-1)+all.length)%all.length;all[i].focus();all[i].click()});

/* reveal on scroll */
const revealIO="IntersectionObserver" in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");revealIO.unobserve(e.target)}}),{threshold:.08,rootMargin:"0px 0px -40px 0px"}):null;
const reveal=root=>(root||document).querySelectorAll(".rv:not(.in)").forEach(el=>revealIO?revealIO.observe(el):el.classList.add("in"));

/* ============================================================
   FRONT PAGE
   ============================================================ */
const SHOCK=[
  ["union-accounts-2425","₹54,282 cr","of Union grants have no utilisation certificate, some pending since 1985-86."],
  ["pmkvy-2025","94.53%","of PMKVY beneficiary records had invalid or blank bank details."],
  ["pmjay","7.5 lakh","PM-JAY beneficiaries were linked to a single phone number: 9999999999."],
  ["bharatmala","₹250.77 cr","per km approved for the Dwarka Expressway, against a Cabinet norm of ₹18.20 crore."],
  ["tn-jjm","96%","of household tap connections checked in Tamil Nadu were outside the home."],
  ["skilling-viksit-2047","8.7 crore","Indians aged 15–29 are not in education, employment or training."],
  ["railways","₹107.39","spent by Indian Railways to earn every ₹100 in 2021-22."],
  ["state-finances","28 of 28","states ran a fiscal deficit in 2024-25."],
  ["delhi-air","1.08 lakh","vehicles in Delhi were certified as within limits despite failing the emission test."],
  ["cab-report-9-2026","₹13,464 cr","of grants to universities, IITs and AIIMS was unspent at year-end."],
  ["cag-wb-amphan","9,226","people got the same Cyclone Amphan housing grant twice, worth ₹18.07 crore."],
  ["cag-uk-namami-gange","12","sewage plants in Uttarakhand were releasing untreated sewage into the Ganga."],
  ["cag-kerala-jjm","2,13,991","tap connections in Kerala were cut within a month of being given."],
  ["cag-wb-covid","43 of 75","oxygen plants in West Bengal were not commissioned or not working."],
  ["niti-netzero-2026","$22.7 tn","is what India needs to invest to reach net zero by 2070."]
].filter(s=>byId(s[0]));
const now=new Date();
const yrs=R.map(r=>r.year), Y0=Math.min(...yrs), Y1=Math.max(...yrs);
const cagF=R.filter(r=>r.flagged!=null).sort((a,b)=>b.flagged-a.flagged);
const flagTot=cagF.reduce((s,r)=>s+r.flagged,0);
$("#nReports").textContent=R.length;
$("#dateline").textContent=now.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
$("#edition").textContent=`${R.length} reports · ${Y0}–${Y1}`;

/* ticker */
(function(){
  const one=SHOCK.map(([id,v,cap])=>`<button class="tk-item" data-open="${id}"><b>${esc(v)}</b>${esc(cap)}</button>`).join("");
  $("#tkTrack").innerHTML=one+one.replace(/<button /g,'<button tabindex="-1" aria-hidden="true" ');
})();

/* lead story + also */
(function(){
  const ord=ORDER(), r=ord[0], pts=tldrOf(r).slice(0,3), also=ord.slice(1,4);
  $("#leadStory").innerHTML=`<div class="ls-meta"><span class="new">LATEST</span>${tag(r)}<span>${esc(r.date)}</span><span>· ${readMins(r)} min read</span></div>
    <h1 data-open="${r.id}">${esc(r.fullTitle&&r.fullTitle.length<90?r.fullTitle:r.title)}</h1>
    <p class="ls-deck">${escH(r.hook)}</p>
    <div class="ls-row"><div class="ls-big"><div class="fig" id="leadFig">${esc(r.big.v)}</div><span>${esc(r.big.l)}</span></div>
      <ol class="ls-pts">${pts.slice(r.hook===pts[0]?1:0).slice(0,3).map(p=>`<li>${escH(p)}</li>`).join("")}</ol></div>
    <div class="ls-cta"><button class="btn solid" data-open="${r.id}">Read the brief <span class="arr">${ARR}</span></button><button class="btn" data-open="${r.id}" data-tab="findings">${nFindings(r)} findings</button><button class="save" data-save="${r.id}" aria-pressed="${saved.has(r.id)}" aria-label="Save ${esc(r.title)}">${BOOK}</button></div>
    <div class="also">${also.map(x=>`<button data-open="${x.id}" class="c-${pub(x)}">${tag(x)}<b>${esc(x.title)}</b><span class="fv">${esc(x.big.v)}</span></button>`).join("")}</div>`;
  once($("#leadFig"),()=>countUp($("#leadFig"),r.big.v,1300),.5);
})();

/* money flagged: dark breakdown card */
(function(){
  const byDate=[...cagF].sort((a,b)=>when(a)-when(b));
  const short=v=>v>=100000?`₹${num(v/100000,2)} L cr`:`₹${num(Math.round(v),0)} cr`;
  const mx=Math.sqrt(cagF[0].flagged);
  $("#receipt").innerHTML=`<div class="receipt" id="rcpt">
    <div class="rc-top"><span class="kick">Money flagged</span><span class="pill">${cagF.length} CAG audits</span></div>
    <div class="rc-total"><span class="fig" id="rcTot">₹${num(Math.round(flagTot),0)} cr</span><p>flagged in audits tabled ${esc(byDate[0].date)} – ${esc(byDate[byDate.length-1].date)}</p></div>
    <ul class="rc-lines">${cagF.slice(0,8).map((r,i)=>`<li class="rc-line${i===0?" top":""}" data-open="${r.id}" role="button" tabindex="0" style="--w:${Math.max(3,Math.sqrt(r.flagged)/mx*100).toFixed(1)}%;--d:${150+i*90}ms"><span class="nm">${esc(r.title)}${r.level==="State"?` <em>${esc(r.state)}</em>`:""}</span><b>${short(r.flagged)}</b><i class="bar"><i></i></i></li>`).join("")}${cagF.length>8?`<li class="rc-more"><button data-pub-go="All" data-sort="money">+ ${cagF.length-8} more audits, ₹${num(Math.round(cagF.slice(8).reduce((a,r)=>a+r.flagged,0)),0)} cr together</button></li>`:""}</ul>
    <p class="rc-note">Not all of it is a loss: it includes money unspent, unaccounted for, or spent against the rules. Bars use a square-root scale.</p>
    <button class="rc-go" data-pub-go="All" data-sort="money">See them by amount <span>→</span></button>
  </div>`;
  const el=$("#rcpt");
  once(el,()=>{el.classList.add("printed");countUp($("#rcTot"),`₹${num(Math.round(flagTot),0)} cr`,1600)},.2);
})();

/* reel: numbers that stop you */
let reelT=0, reelI=0, reelOn=false;
(function(){
  const reel=$("#reel");
  reel.innerHTML=SHOCK.map(([id,v,cap],i)=>{const r=byId(id);return `<button class="rcard c-${pub(r)}${i%5===2?" inv":i%5===4?" acc":""}" data-open="${id}" data-ri="${i}"><span class="idx"><span>${String(i+1).padStart(2,"0")} / ${SHOCK.length}</span>${tag(r)}</span><span class="fig">${esc(v)}</span><p>${esc(cap)}</p><small><span>${esc(r.title)}</span><span>→</span></small></button>`}).join("");
  const cards=[...reel.children], prog=$("#reelProg");
  const setCount=()=>{$("#reelCount").textContent=`${String(reelI+1).padStart(2,"0")} — ${SHOCK.length}`;cards.forEach((c,i)=>c.classList.toggle("on",i===reelI))};
  const go=(i,user)=>{reelI=(i+SHOCK.length)%SHOCK.length;reel.scrollTo({left:cards[reelI].offsetLeft-reel.offsetLeft,behavior:reduced?"auto":"smooth"});setCount();if(user)restart()};
  const restart=()=>{clearTimeout(reelT);prog.classList.remove("run");void prog.offsetWidth;if(!reelOn||reduced)return;prog.classList.add("run");reelT=setTimeout(()=>{go(reelI+1);restart()},6000)};
  window.__reel={go,restart};
  document.querySelector(".bh-r [data-reel]").parentElement.addEventListener("click",e=>{const b=e.target.closest("[data-reel]");if(b)go(reelI+ +b.dataset.reel,true)});
  reel.addEventListener("pointerenter",()=>{clearTimeout(reelT);prog.classList.remove("run")});
  reel.addEventListener("pointerleave",restart);
  let sT;reel.addEventListener("scroll",()=>{clearTimeout(sT);sT=setTimeout(()=>{const x=reel.scrollLeft;let bi=0,bd=1e9;cards.forEach((c,i)=>{const d=Math.abs(c.offsetLeft-reel.offsetLeft-x);if(d<bd){bd=d;bi=i}});if(bi!==reelI){reelI=bi;setCount()}},90)},{passive:true});
  let d=null,moved=false;
  reel.addEventListener("pointerdown",e=>{if(e.pointerType!=="mouse")return;d={x:e.clientX,l:reel.scrollLeft};moved=false});
  addEventListener("pointermove",e=>{if(!d)return;const dx=e.clientX-d.x;if(Math.abs(dx)>5){moved=true;reel.classList.add("drag")}if(moved)reel.scrollLeft=d.l-dx});
  addEventListener("pointerup",()=>{if(!d)return;d=null;reel.classList.remove("drag")});
  reel.addEventListener("click",e=>{if(moved){e.stopPropagation();e.preventDefault();moved=false}},true);
  setCount();
  onVisible(reel,v=>{reelOn=v&&curView==="home";restart()},{threshold:.4});
})();
function reelActive(on){reelOn=on&&reelOn;if(window.__reel){if(!on){clearTimeout(reelT)}}}

/* seismograph */
const SEVR=R.filter(r=>r.themes);
const SHORT={"union-accounts-2425":"Union Accounts","cab-report-9-2026":"Auton. Bodies","pmkvy-2025":"PMKVY","bharatmala":"Bharatmala","skilling-viksit-2047":"Skilling","school-education-2026":"Schools","fiscal-health-2026":"Fiscal Health","cag-gst-20-2026":"GST","cag-gujarat-gst-2026":"Gujarat GST","cag-kerala-jjm":"Kerala JJM","cag-uk-namami-gange":"Namami Gange","cag-wb-amphan":"Amphan","cag-wb-covid":"Bengal Covid","cag-wb-finances-2425":"Bengal Finances","niti-ifi-2026":"Investment Index","niti-ai-2025":"AI","niti-netzero-2026":"Net Zero"};
const SW={high:"Serious",med:"Notable",low:"Minor"};
const SEVC={high:"red",med:"turm",low:"indigo"};
(function(){
  const list=SEVR.map(r=>({r,items:r.themes.flatMap(t=>t.items.map(it=>({t:it.t,sev:t.sev,theme:t.name,amt:it.amt}))).sort((x,y)=>"hml".indexOf(x.sev[0])-"hml".indexOf(y.sev[0]))})).sort((x,y)=>y.items.filter(i=>i.sev==="high").length-x.items.filter(i=>i.sev==="high").length||y.items.length-x.items.length);
  const all=list.flatMap(x=>x.items), c=k=>all.filter(i=>i.sev===k).length, TOP=16, shown=list.slice(0,TOP);
  let n=0; const FL=[];
  const plot=shown.map((x,gi)=>`<div class="sg" data-g="${gi}" style="flex:${x.items.length} 1 0"><div class="sg-bars">${x.items.map(it=>{FL.push({...it,r:x.r});return `<button class="sb ${it.sev}" data-fi="${FL.length-1}" aria-label="${SW[it.sev]}: ${esc(it.t)}" style="--d:${Math.min(n++,200)*6}ms"></button>`}).join("")}</div><button class="sg-lbl" data-open="${x.r.id}" data-tab="findings"><b>${x.items.length}</b>${esc(SHORT[x.r.id]||x.r.title)}</button></div>`).join("");
  const idle=`<div class="pane idle"><span class="kick">Reading pane</span><p>Hover or tap a line to read the finding here. Click to open the report.</p><div class="tally"><div><b>${c("high")}</b>serious</div><div><b>${c("med")}</b>notable</div><div><b>${c("low")}</b>minor</div><div><b>${list.length}</b>reports</div></div>${list.length>TOP?`<p class="muted" style="font-size:12px;margin-top:10px">Chart shows the ${TOP} reports with the most serious findings. Totals count all ${list.length}.</p>`:""}</div>`;
  $("#seis").innerHTML=`<div class="seis-plot"><div class="seis-in">${plot}</div></div><div id="pane">${idle}</div>`;
  const seis=$("#seis"), pane=$("#pane");
  let lock=null;
  const showF=b=>{const f=FL[+b.dataset.fi];$$("#seis .sb.on").forEach(x=>x.classList.remove("on"));b.classList.add("on");$$("#seis .sg.hot").forEach(x=>x.classList.remove("hot"));b.closest(".sg").classList.add("hot");
    pane.innerHTML=`<div class="pane pane-swap c-${SEVC[f.sev]}">${tag(f.r)}<span class="sevl">${SW[f.sev]}</span><h4>${esc(f.theme)}</h4><p>${hiCount(esc(f.t))}</p><div class="go"><span>${esc(f.r.title)}</span><span>Open →</span></div></div>`};
  seis.addEventListener("pointerover",e=>{const b=e.target.closest(".sb");if(b)showF(b)});
  seis.addEventListener("focusin",e=>{const b=e.target.closest(".sb");if(b)showF(b)});
  seis.addEventListener("click",e=>{const b=e.target.closest(".sb");if(b){const f=FL[+b.dataset.fi];openReport(f.r.id,"findings")}});
  pane.addEventListener("click",e=>{const on=$("#seis .sb.on");if(on&&e.target.closest(".pane:not(.idle)"))openReport(FL[+on.dataset.fi].r.id,"findings")});
  $("#seisSeg").addEventListener("click",e=>{const b=e.target.closest("[data-sv]");if(!b)return;$$("#seisSeg button").forEach(x=>x.setAttribute("aria-pressed",x===b));seis.dataset.sv=b.dataset.sv});
  once(seis,()=>seis.classList.add("go"),.3);
})();
/* number highlighter for finding text */
const MON=/^\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\b/;
const LABEL=/(?:\b(?:Class(?:es)?|Grade|Rule|No\.|Report|Section|Article|Phase|Head|Para|Schedule|Form|Goal)|\b[A-Z]{2,}[\w.]*)\s$/;
function hiCount(h){
  let inMark=false;
  return hiNum(h).replace(/\$\s?\d[\d,]*(?:\.\d+)?(?:\s?[–-]\s?\d[\d,]*(?:\.\d+)?)?(?:\s?(?:trillion|billion|million|tn|bn))?/g,'<mark class="n">$&</mark>').replace(/\b(\d[\d,]*(?:\.\d+)?\s?[–-]\s?)<mark class="n">/g,'<mark class="n">$1').split(/(<[^>]+>)/).map(p=>{
    if(p.startsWith("<")){if(/^<mark/.test(p))inMark=true;else if(p==="</mark>")inMark=false;return p}
    if(inMark)return p;
    return p.replace(/(^|[^\w.₹\/–-])(\d(?:[\d,]*\d)?(?:\.\d+)?(?:\s(?:of|in)\s(?:the\s)?\d(?:[\d,]*\d)?)?)(?![\w%]|[-–]\d|[.,]\d)/g,(m,pre,n,off,s)=>{
      const before=s.slice(0,off+pre.length), after=s.slice(off+m.length);
      if(/^(?:19|20)\d\d$/.test(n)||MON.test(after)||LABEL.test(before)||/\bClasses \d+ to\s$/.test(before))return m;
      return `${pre}<mark class="n">${n}</mark>`});
  }).join("");
}

/* sectors */
(function(){
  const sev={};R.forEach(r=>(r.themes||[]).forEach(t=>{if(t.sev==="high")sev[r.sector]=(sev[r.sector]||0)+t.items.length}));
  const rows=Object.entries(sev).sort((a,b)=>b[1]-a[1]),mx=rows[0][1];
  $("#sectors").innerHTML=rows.map(([k,v],i)=>`<button class="hbar${i===0?" top":""}" data-topic-go="${esc(SECTOR_TOPIC[k]||k)}"><span>${esc(k)}</span><span class="tr"><i data-w="${(v/mx*100).toFixed(1)}"></i></span><b>${v}</b></button>`).join("")+`<p class="notep">Counts findings in themes the reports rate serious. Click a sector to see its reports.</p>`;
  once($("#sectors"),()=>grow($("#sectors")),.3);
})();

/* mini map */
const ST=window.STATES,SDG=window.SDG_SCORES,SF=window.STATE_FACTS;
const shade=(mc,p)=>`color-mix(in srgb, ${mc} ${p.toFixed(0)}%, var(--card2))`;
(function(){
  const vals=Object.values(FHI),lo=Math.min(...vals),hi=Math.max(...vals);
  const sorted=Object.entries(FHI).sort((a,b)=>b[1]-a[1]);
  const p=v=>12+(v-lo)/(hi-lo)*88;
  const best=sorted[0],worst=sorted[sorted.length-1],nm=c=>ST.find(s=>s[0]===c)[1];
  const read=c=>{const v=FHI[c];if(v==null)return `<span class="kick">Not scored</span><div class="fig" style="color:var(--ink3)">—</div><h4>${esc(nm(c))}</h4><p>Not part of the 2026 index.</p>`;const rk=sorted.findIndex(x=>x[0]===c)+1;return `<span class="kick">Rank ${rk} of ${sorted.length}</span><div class="fig" style="color:var(--indigo)">${v}</div><h4>${esc(nm(c))}</h4><p>Fiscal Health Index score, out of 100.</p>`};
  $("#minimap").innerHTML=`<div><div class="mm-grid">${ST.map(([c,n,col,row],i)=>{const v=FHI[c];return `<button style="grid-column:${col+1};grid-row:${row+1};--d:${i*18}ms${v!=null?`;background:${shade("var(--indigo)",p(v))}`:""}" class="${v!=null&&p(v)>45?"dk":""}" data-mst="${c}" aria-label="${esc(n)}${v!=null?`: ${v}`:""}">${c}</button>`}).join("")}</div>
    <div class="mm-scale">${[0,1,2,3,4,5,6,7].map(i=>`<i style="background:${shade("var(--indigo)",12+i/7*88)}"></i>`).join("")}</div><div class="mm-ends"><span>${lo}</span><span>${hi}</span></div></div>
    <div class="mm-read" id="mmRead">${read(best[0])}</div>`;
  const mm=$("#minimap");
  mm.addEventListener("pointerover",e=>{const b=e.target.closest("[data-mst]");if(!b)return;$$("#minimap .on").forEach(x=>x.classList.remove("on"));b.classList.add("on");$("#mmRead").innerHTML=read(b.dataset.mst)});
  mm.addEventListener("click",e=>{const b=e.target.closest("[data-mst]");if(!b)return;show("states");openState(b.dataset.mst)});
  $("#mmRead").insertAdjacentHTML("beforeend",`<p style="margin-top:14px">Best: <b>${esc(nm(best[0]))}</b> ${best[1]}. Last: <b>${esc(nm(worst[0]))}</b> ${worst[1]}.</p>`);
})();

/* guess band (one question, played right here) */
const Q=window.QUIZ;
const fmtQ=(q,v)=>`${q.pre}${num(v)}${q.unit}`;
const ptsQ=(q,g)=>Math.round(100*Math.max(0,1-2*Math.abs(g-q.ans)/(q.max-q.min)));
const setP=el=>el&&el.style.setProperty("--p",((el.value-el.min)/(el.max-el.min)*100)+"%");
(function(){
  let qi=Math.floor(Math.random()*Q.length);
  const draw=()=>{const q=Q[qi],mid=Math.round(((q.min+q.max)/2)/q.step)*q.step;
    $("#guessBand").innerHTML=`<div class="gb"><div><p class="kick">Before you scroll on</p><h2 id="hGuess">${esc(q.q)}</h2></div>
      <div class="gb-right" id="gbR"><div class="gb-num" id="gbNum">${esc(fmtQ(q,mid))}</div><div><label class="sr" for="gbRange">Your guess</label><input class="grange" id="gbRange" type="range" min="${q.min}" max="${q.max}" step="${q.step}" value="${mid}"><div class="scl"><span>${esc(fmtQ(q,q.min))}</span><span>${esc(fmtQ(q,q.max))}</span></div></div>
      <div class="gb-acts"><button class="btn" id="gbLock">Lock it in</button><button class="btn" id="gbSkip">Another question</button></div></div></div>`;
    const rg=$("#gbRange");setP(rg);rg.addEventListener("input",()=>{$("#gbNum").textContent=fmtQ(q,+rg.value);setP(rg)});
  };
  $("#guessBand").addEventListener("click",e=>{
    const q=Q[qi];
    if(e.target.closest("#gbSkip")||e.target.closest("#gbAgain")){qi=(qi+1)%Q.length;draw();return}
    if(e.target.closest("#gbLock")){const g=+$("#gbRange").value,sc=ptsQ(q,g),p=v=>((v-q.min)/(q.max-q.min)*100).toFixed(2);
      $("#gbR").innerHTML=`<div class="gb-num" id="gbAns">${esc(fmtQ(q,q.ans))}</div><div class="gb-ans"><div class="rail"></div><span class="pin you" style="left:${p(g)}%">You</span><span class="pin ans" id="gbPin" style="left:${p(g)}%">Answer</span></div>
        <p class="verdict">${sc>=90?"<b>Spot on.</b> ":sc>=60?"Close. ":"Most people miss this one. "}${esc(q.why)}</p>
        <div class="gb-acts"><button class="btn" data-open="${q.report}">Read the report</button><button class="btn" id="gbAgain">Try another</button><button class="btn" data-view="play">All ${Q.length} questions →</button></div>`;
      countUp($("#gbAns"),fmtQ(q,q.ans),1000);
      requestAnimationFrame(()=>requestAnimationFrame(()=>{const pn=$("#gbPin");if(pn)pn.style.left=p(q.ans)+"%"}));
    }
  });
  draw();
})();

/* archive: a filing calendar, years down, months across */
(function(){
  const MO=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const years=[...new Set(R.map(r=>r.year))].sort((a,b)=>b-a).filter(y=>y>=2019);
  const older=R.filter(r=>r.year<2019).sort((a,b)=>when(a)-when(b));
  const chip=r=>`<button class="fc c-${pub(r)}" data-open="${r.id}" title="${esc(r.title)} · ${esc(pubName(r))}"><span>${esc(r.title)}</span></button>`;
  $("#archive").innerHTML=`<div class="cal"><div class="cal-h"><span></span>${MO.map(m=>`<span>${m}</span>`).join("")}</div>
    ${years.map(y=>{const L=R.filter(r=>r.year===y);return `<div class="cal-row"><div class="cal-y"><b>${y}</b><small>${L.length} report${L.length===1?"":"s"}</small></div>${MO.map((m,i)=>{const M=L.filter(r=>(r.month||1)===i+1);return `<div class="cal-c">${M.slice(0,3).map(chip).join("")}${M.length>3?`<button class="fc-more" data-yr="${y}">+${M.length-3} more</button>`:""}</div>`}).join("")}</div>`}).join("")}</div>
    ${older.length?`<div class="cal-old"><span class="kick">Earlier landmarks</span>${older.map(r=>`<button data-open="${r.id}" class="c-${pub(r)}"><b>${r.year}</b> ${esc(r.title)}</button>`).join("")}</div>`:""}
    <div class="cal-key">${GROUPS.slice(1).filter(g=>R.some(g[2])).map(g=>`<span class="c-${g[1]}"><i></i>${esc(g[0])}</span>`).join("")}</div>`;
})();

/* ============================================================
   LIBRARY
   ============================================================ */
const lib={group:"All",topic:"All",q:"",sort:"new",tab:"all",year:0,view:store.get("saaransh-libview","index")};
function renderRail(){
  const topics=[...new Set(R.map(r=>r.topic))].sort(), years=[...new Set(R.map(r=>r.year))].sort((a,b)=>b-a);
  $("#rail").innerHTML=`<div><h4>Publisher</h4><div class="grp-list">${GROUPS.map(([n,c,f])=>{const k=R.filter(f).length;return k?`<button class="opt c-${c}" data-g="${esc(n)}" aria-pressed="${lib.group===n}"><span class="l">${n!=="All"?"<i></i>":""}${n==="All"?"Everyone":esc(n)}</span><span class="n">${k}</span></button>`:""}).join("")}</div></div>
    <div><h4>Topic</h4><div class="grp-list">${["All",...topics].map(t=>`<button class="opt" data-t="${esc(t)}" aria-pressed="${lib.topic===t}"><span class="l">${t==="All"?"All topics":esc(t)}</span><span class="n">${t==="All"?R.length:R.filter(r=>r.topic===t).length}</span></button>`).join("")}</div></div>
    <div><h4>Year</h4><div class="years">${years.map(y=>`<button data-y="${y}" aria-pressed="${lib.year===y}">${y}</button>`).join("")}</div></div>
    <div><h4>Yours</h4><div class="grp-list"><button class="opt" data-saved aria-pressed="${lib.tab==="saved"}"><span class="l">${BOOK} Saved</span><span class="n">${saved.size}</span></button></div></div>
    <button class="reset" id="libReset">Reset filters</button>`;
}
function renderGrid(){
  if(!$("#grid"))return;
  const f=GROUPS.find(g=>g[0]===lib.group)[2];
  let list=R.filter(r=>f(r)&&(lib.topic==="All"||r.topic===lib.topic)&&(!lib.q||matchQ(r,lib.q)));
  if(lib.year)list=list.filter(r=>r.year===lib.year);
  if(lib.tab==="saved")list=list.filter(r=>saved.has(r.id));
  if(lib.sort==="money")list.sort((a,b)=>(b.money||0)-(a.money||0));else if(lib.sort==="az")list.sort((a,b)=>a.title.localeCompare(b.title));else list.sort((a,b)=>when(b)-when(a));
  const chips=[lib.group!=="All"&&["g",lib.group],lib.topic!=="All"&&["t",lib.topic],lib.year&&["y",lib.year],lib.tab==="saved"&&["s","Saved"],lib.q&&["q",`“${lib.q}”`]].filter(Boolean);
  $("#libCount").innerHTML=`<span>${list.length} of ${R.length} reports</span>${chips.map(([k,v])=>`<button class="chipx" data-clr="${k}">${esc(v)} ✕</button>`).join("")}`;
  if(!list.length){$("#grid").innerHTML=`<div class="empty">${lib.tab==="saved"?"Nothing saved yet. Tap the bookmark on any report and it waits for you here.":`Nothing matches${lib.q?` “${esc(lib.q)}”`:""}. Try a scheme, a ministry or a state.`}</div>`;return}
  $("#grid").innerHTML=lib.view==="covers"
    ?`<div class="covers">${list.map((r,i)=>`<article class="cover c-${pub(r)}" data-open="${r.id}" tabindex="0" style="--d:${Math.min(i,16)*30}ms"><span class="cn">${esc(r.date)} · ${esc(pubName(r))}</span><h3>${esc(r.title)}</h3><p class="ch">${escH(r.hook)}</p><span class="seal-s"></span><span class="fig">${esc(r.big.v)}</span><span class="cl">${esc(r.big.l)}</span><button class="save" data-save="${r.id}" aria-pressed="${saved.has(r.id)}" aria-label="Save ${esc(r.title)}">${BOOK}</button></article>`).join("")}</div>`
    :list.map((r,i)=>`<article class="lrow c-${pub(r)}" data-open="${r.id}" tabindex="0" style="--d:${Math.min(i,16)*30}ms"><span class="no">${String(i+1).padStart(2,"0")}</span><div><div class="meta">${tag(r)}<span>${esc(r.date)}</span><span>${esc(r.topic)}</span></div><h3>${esc(r.title)}</h3><p>${escH(r.hook)}</p></div><div class="kf"><b>${esc(r.big.v)}</b><span>${esc(r.big.l)}</span></div><button class="save" data-save="${r.id}" aria-pressed="${saved.has(r.id)}" aria-label="Save ${esc(r.title)}">${BOOK}</button></article>`).join("");
}
function syncLib(){if(!inited.reports)return;renderRail();$("#libq").value=lib.q;$$("#sortSeg button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.sort===lib.sort));$$("#viewSeg button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.lv===lib.view));renderGrid()}
INIT.reports=()=>{
  $("#repStat").innerHTML=`<b>${R.length}</b> reports from <b>${new Set(R.map(r=>r.body)).size}</b> publishers, ${Y0} to ${Y1}. Each one in plain words, with the money, the findings and what the government said.`;
  $("#rail").addEventListener("click",e=>{
    const g=e.target.closest("[data-g]"),t=e.target.closest("[data-t]"),y=e.target.closest("[data-y]"),s=e.target.closest("[data-saved]");
    if(g)lib.group=g.dataset.g;else if(t)lib.topic=t.dataset.t;else if(y)lib.year=lib.year===+y.dataset.y?0:+y.dataset.y;else if(s)lib.tab=lib.tab==="saved"?"all":"saved";
    else if(e.target.closest("#libReset"))Object.assign(lib,{group:"All",topic:"All",q:"",sort:"new",tab:"all",year:0});else return;
    syncLib()});
  $("#libCount").addEventListener("click",e=>{const c=e.target.closest("[data-clr]");if(!c)return;({g:()=>lib.group="All",t:()=>lib.topic="All",y:()=>lib.year=0,s:()=>lib.tab="all",q:()=>lib.q=""})[c.dataset.clr]();syncLib()});
  $("#sortSeg").addEventListener("click",e=>{const b=e.target.closest("[data-sort]");if(!b)return;lib.sort=b.dataset.sort;syncLib()});
  $("#viewSeg").addEventListener("click",e=>{const b=e.target.closest("[data-lv]");if(!b)return;lib.view=b.dataset.lv;store.set("saaransh-libview",lib.view);syncLib()});
  let lq;$("#libq").addEventListener("input",e=>{clearTimeout(lq);lq=setTimeout(()=>{lib.q=e.target.value.trim();renderGrid()},120)});
  $("#grid").addEventListener("keydown",e=>{if(e.key==="Enter"){const t=e.target.closest("[data-open]");if(t&&t===e.target)openReport(t.dataset.open)}});
  syncLib();
};
function goReports(fn){closeReader();closePalette();fn();if(curView!=="reports")show("reports",{instant:true});syncLib()}
document.addEventListener("click",e=>{
  if(e.target.closest("[data-saved-go]")){e.preventDefault();goReports(()=>{lib.tab="saved"});return}
  const yr=e.target.closest("[data-yr]"); if(yr){e.preventDefault();goReports(()=>{lib.year=+yr.dataset.yr;lib.tab="all"});return}
  const p=e.target.closest("[data-pub-go]"); if(p){e.preventDefault();goReports(()=>{lib.group=p.dataset.pubGo;if(p.dataset.sort)lib.sort=p.dataset.sort;lib.tab="all"});return}
  const t=e.target.closest("[data-topic-go]"); if(t){e.preventDefault();goReports(()=>{lib.topic=t.dataset.topicGo;lib.tab="all"});return}
  const s=e.target.closest("[data-search]"); if(s&&!e.target.closest(".term")){openPalette(s.dataset.search);return}
  const st=e.target.closest("[data-stgo]"); if(st){const code=(ST.find(x=>x[1]===st.dataset.stgo)||[])[0];if(!code)return;closeReader();show("states",{instant:true});openState(code);return}
});

/* ============================================================
   FIGURES: money swarm, compare, trends, key figures
   ============================================================ */
const ring=(p,label,sub)=>`<div class="ring" style="--p:${Math.max(0,Math.min(100,p)).toFixed(1)}"><div><b>${label}</b>${sub?`<small>${sub}</small>`:""}</div></div>`;
const crore=s=>{const m=String(s||"").replace(/,/g,"").match(/₹\s?([\d.]+)\s*(lakh crore|crore|cr|lakh)\b/i);if(!m)return null;let v=parseFloat(m[1]);const u=m[2].toLowerCase();if(u==="lakh crore")v*=1e5;else if(u==="lakh")v/=100;return v};
const MONEY=[
  [6.97,"Paid for PM-JAY patients already marked dead","pmjay"],[13.86,"Forest funds diverted in Uttarakhand","uk-campa"],[33.66,"Final cost of the Delhi CM residence renovation","delhi-cm-house"],
  [205.07,"Covid-19 funds Delhi left unused","delhi-health"],[2002.68,"Delhi excise policy revenue loss, estimated","delhi-excise"],[7287.29,"Dwarka Expressway civil cost approved by NHAI","bharatmala"],
  [68269,"Railways' passenger services loss, 2021-22","railways"],[176000,"2G presumptive loss, upper estimate","2g-2010"],[186000,"Coal blocks windfall gain, estimated","coal-2012"],
  [535000,"Bharatmala Phase-I approved cost","bharatmala"],[9051000,"Combined liabilities of all 28 states","state-finances"],
  [13464.22,"Grants to central autonomous bodies left unspent","cab-report-9-2026"],[54282.32,"Union grants with no utilisation certificate","union-accounts-2425"],
  [91070,"NHAI borrowing above the approved limit","bharatmala"],[258.92,"Money flagged in the PMKVY audit","pmkvy-2025"],
  [18.07,"Amphan housing grants paid twice","cag-wb-amphan"],[1121.33,"Bengal Covid funds left unspent","cag-wb-covid"],[2190.98,"GST works-contract deficiencies","cag-gst-20-2026"],[2606.62,"Gujarat GST cases deviating from rules","cag-gujarat-gst-2026"],[229000,"Bengal grants with no utilisation certificate","cag-wb-finances-2425"]
].filter(m=>byId(m[2])).sort((a,b)=>a[0]-b[0]);
const MSW=(()=>{const out=[],seen=new Set();
  const add=(v,label,r,sev)=>{const k=r.id+"|"+Math.round(v);if(seen.has(k)||!(v>=1))return;seen.add(k);out.push({v,label,r,sev})};
  MONEY.forEach(([v,l,id])=>add(v,l,byId(id),null));
  R.forEach(r=>(r.themes||[]).forEach(t=>t.items.forEach(it=>{if(!it.amt||/\/\s?km/i.test(it.amt))return;const v=crore(it.amt);if(v!=null)add(v,it.t,r,t.sev)})));
  return out.sort((a,b)=>a.v-b.v)})();
let swFilter="all", swList=[];
const swShort=v=>v>=1e5?`₹${num(v/1e5,2)} lakh cr`:`₹${num(v,v<100?2:0)} cr`;
function swIdle(){const L=swList;if(!L.length)return;$("#swRead").innerHTML=`<span class="kick">Reading pane</span><div class="fig">${L.length}</div><p>amounts, from <b>${swShort(L[0].v)}</b> to <b>${swShort(L[L.length-1].v)}</b>. The biggest is ${num(L[L.length-1].v/L[0].v,0)} times the smallest.</p><p class="muted" style="margin-top:auto">Hover or tap a dot.</p>`}
function layoutSwarm(){
  const box=$("#swarm");if(!box||!box.clientWidth||box.closest("[hidden]"))return;
  swList=MSW.filter(x=>swFilter==="all"||(swFilter==="state"?x.r.level==="State":x.r.level!=="State"));
  const W=box.clientWidth,PAD=18,r=8,gap=2,X=v=>PAD+Math.log10(v)/7*(W-PAD*2),placed=[];
  swList.forEach((d,i)=>{const x=X(d.v);let y=0;for(let s=0;s<80;s++){const c=s===0?0:(s%2?1:-1)*Math.ceil(s/2)*(r+1);if(placed.every(p=>(p.x-x)**2+(p.y-c)**2>=(2*r+gap)**2)){y=c;break}}placed.push({x,y,d,i})});
  const half=Math.max(60,...placed.map(p=>Math.abs(p.y)))+r+10,H=half*2+34;
  box.style.height=H+"px";
  const ticks=[[1,"₹1 cr"],[10,"₹10 cr"],[100,"₹100 cr"],[1e3,"₹1,000 cr"],[1e4,"₹10,000 cr"],[1e5,"₹1 lakh cr"],[1e6,"₹10 lakh cr"],[1e7,"₹1 crore cr"]];
  box.innerHTML=ticks.map(([v,l],k)=>`<span class="sw-t" style="left:${X(v)}px"><i></i><em>${k%2&&W<700?"":l}</em></span>`).join("")+
    `<span class="sw-mid" style="top:${half}px"></span>`+
    placed.map(p=>`<button class="swd c-${pub(p.d.r)}${p.d.sev==="high"?" hi":""}" data-si="${p.i}" style="left:${p.x}px;top:${half+p.y}px;--d:${Math.min(p.i,90)*14}ms" aria-label="${esc(swShort(p.d.v))}: ${esc(plain(p.d.label))}"></button>`).join("");
  swIdle();
}
function swShow(b){const d=swList[+b.dataset.si];if(!d)return;$$("#swarm .swd.on").forEach(x=>x.classList.remove("on"));b.classList.add("on");
  $("#swRead").innerHTML=`<div class="pane-swap" style="display:flex;flex-direction:column;height:100%">${tag(d.r)}<div class="fig">${esc(swShort(d.v))}</div><p>${esc(plain(d.label))}</p><button class="lnk" style="margin-top:auto;align-self:flex-start" data-open="${d.r.id}" data-tab="findings">${esc(d.r.title)} →</button></div>`}
function initSwarm(){
  const box=$("#swarm");
  box.addEventListener("pointerover",e=>{const b=e.target.closest(".swd");if(b)swShow(b)});
  box.addEventListener("focusin",e=>{const b=e.target.closest(".swd");if(b)swShow(b)});
  box.addEventListener("click",e=>{const b=e.target.closest(".swd");if(b)openReport(swList[+b.dataset.si].r.id,"findings")});
  $("#swSeg").addEventListener("click",e=>{const b=e.target.closest("[data-sw]");if(!b)return;swFilter=b.dataset.sw;$$("#swSeg button").forEach(x=>x.setAttribute("aria-pressed",x===b));layoutSwarm()});
  let rT;addEventListener("resize",()=>{clearTimeout(rT);rT=setTimeout(layoutSwarm,120)});
}
function renderCmp(){
  const a=MONEY[+$("#cmpA").value],b=MONEY[+$("#cmpB").value];if(!a||!b)return;
  const big=a[0]>=b[0]?a:b,small=a[0]>=b[0]?b:a,ratio=big[0]/small[0],n=Math.max(1,Math.min(Math.round(ratio),1500));
  const rt=ratio>=100?num(Math.round(ratio),0):num(ratio,1);
  $("#cmpOut").innerHTML=`<div class="cmp-head"><div class="fig">${rt}×</div><p><b>${esc(big[1])}</b> (${esc(fmtCr(big[0]))}) is ${rt} times <b>${esc(small[1])}</b> (${esc(fmtCr(small[0]))}).</p></div>
    <div class="dotgrid" aria-hidden="true">${Array.from({length:n},(_,i)=>`<i style="--i:${Math.min(i,400)}"${i===0?' class="one"':""}></i>`).join("")}</div>
    <p class="notep"><span class="key one"></span> one ${esc(fmtCr(small[0]))}. ${ratio>1500?`Showing 1,500 of ${num(Math.round(ratio),0)} dots; the rest would not fit on the page.`:`${num(n,0)} dots make up ${esc(fmtCr(big[0]))}.`}</p>
    <div class="cmp-acts"><button class="lnk" data-open="${big[2]}">${esc(byId(big[2]).title)} →</button><button class="lnk" data-open="${small[2]}">${esc(byId(small[2]).title)} →</button></div>`;
}
function initCmp(){
  const opts=MONEY.map((m,i)=>`<option value="${i}">${esc(fmtCr(m[0]))} · ${esc(m[1])}</option>`).join("");
  $("#cmpA").innerHTML=opts;$("#cmpB").innerHTML=opts;
  const ia=MONEY.findIndex(m=>m[2]==="union-accounts-2425"),ib=MONEY.findIndex(m=>m[2]==="cag-wb-amphan");
  $("#cmpA").value=ia>=0?ia:MONEY.length-1;$("#cmpB").value=ib>=0?ib:0;
  $("#cmpA").addEventListener("change",renderCmp);$("#cmpB").addEventListener("change",renderCmp);
  $("#cmpSwap").addEventListener("click",()=>{const a=$("#cmpA").value;$("#cmpA").value=$("#cmpB").value;$("#cmpB").value=a;renderCmp()});
  renderCmp();
}

const T=window.TRENDS; let curT=T[0];
const tDelta=t=>{const d=t.pts[t.pts.length-1][2]-t.pts[0][2],good=t.good?((t.good==="up")===(d>0)):null;return {d,cls:good==null?"flat":good?"good":"bad",txt:`${d>0?"▲":"▼"} ${num(Math.abs(d),2)}${t.unit==="%"?" pts":""}`}};
function spark(t){const W=240,H=60,xs=t.pts.map(p=>p[0]),x0=Math.min(...xs),x1=Math.max(...xs),X=v=>4+(v-x0)/(x1-x0||1)*(W-8),Y=v=>4+(1-(v-t.min)/(t.max-t.min))*(H-8);
  const P=t.pts.map(p=>[X(p[0]),Y(p[2])]),line=P.map((p,i)=>(i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1)).join(" "),last=P[P.length-1];
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true"><path d="${line} L${last[0]} ${H} L${P[0][0]} ${H} Z" class="sp-a"/><path d="${line}" class="sp-l"/><circle cx="${last[0]}" cy="${last[1]}" r="4" class="sp-d"/></svg>`}
function initTrends(){
  $("#sparks").innerHTML=T.map(t=>{const dl=tDelta(t),last=t.pts[t.pts.length-1];return `<button class="spk" data-ind="${t.id}" aria-pressed="${t===curT}"><span class="spk-top"><b>${esc(t.name)}</b><span class="delta ${dl.cls}">${dl.txt}</span></span><span class="fig">${esc(num(last[2],2)+t.unit)}</span><span class="spk-s">${esc(t.short)} · ${esc(t.pts[0][1])}–${esc(last[1])}</span>${spark(t)}</button>`}).join("");
  $("#sparks").addEventListener("click",e=>{const b=e.target.closest("[data-ind]");if(!b)return;curT=T.find(t=>t.id===b.dataset.ind);$$("#sparks .spk").forEach(x=>x.setAttribute("aria-pressed",x===b));drawTrend(true);$("#plot").scrollIntoView({behavior:reduced?"auto":"smooth",block:"nearest"})});
}
function drawTrend(animate){
  const t=curT,svg=$("#plotSvg"),W=680,H=320,L=44,Rr=34,Tp=40,B=42;
  if(svg.closest("[hidden]")) return;
  const xs=t.pts.map(p=>p[0]),x0=Math.min(...xs),x1=Math.max(...xs);
  const X=v=>L+(v-x0)/(x1-x0||1)*(W-L-Rr),Y=v=>Tp+(1-(v-t.min)/(t.max-t.min))*(H-Tp-B),fmt=v=>num(v,2)+t.unit;
  let g="";
  for(let i=0;i<=4;i++){const v=t.min+i*(t.max-t.min)/4,y=Y(v);g+=`<line class="gl-line" x1="${L}" x2="${W-Rr}" y1="${y}" y2="${y}"/><text class="ax" x="${L-10}" y="${y+4}" text-anchor="end">${num(v,1)}</text>`}
  if(t.ref!=null){const y=Y(t.ref);g+=`<line x1="${L}" x2="${W-Rr}" y1="${y}" y2="${y}" style="stroke:var(--red)" stroke-width="1.5" stroke-dasharray="5 4"/><text x="${L+6}" y="${y-8}" style="fill:var(--red);font:500 11.5px var(--f-mono)">replacement level ${t.ref}</text>`}
  const P=t.pts.map(p=>[X(p[0]),Y(p[2])]),line=P.map((p,i)=>(i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1)).join(" "),area=line+` L${P[P.length-1][0]} ${H-B} L${P[0][0]} ${H-B} Z`;
  const lab=t.pts.map((p,i)=>(i&&X(p[0])-X(t.pts[i-1][0])<42)?"":`<text class="ax" x="${X(p[0])}" y="${H-B+24}" text-anchor="${i===0?"start":i===t.pts.length-1?"end":"middle"}">${esc(p[1])}</text>`).join("");
  const last=P[P.length-1];
  svg.innerHTML=`<defs><linearGradient id="tg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" style="stop-color:var(--ink);stop-opacity:.18"/><stop offset="1" style="stop-color:var(--ink);stop-opacity:0"/></linearGradient></defs>${g}
    <line x1="${L}" x2="${W-Rr}" y1="${H-B}" y2="${H-B}" style="stroke:var(--ink)"/>
    <path d="${area}" fill="url(#tg)" id="tArea"/>
    <path d="${line}" fill="none" style="stroke:var(--ink)" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" id="tLine"/>
    ${P.map((p,i)=>`<circle cx="${p[0]}" cy="${p[1]}" r="${i===P.length-1?7:4.5}" style="fill:${i===P.length-1?"var(--acc)":"var(--card)"};stroke:${i===P.length-1?"var(--acc)":"var(--ink)"}" stroke-width="2.5"/>`).join("")}${lab}
    <text x="${last[0]-14}" y="${last[1]-18}" text-anchor="end" style="fill:var(--acc);font:700 32px var(--f-num);font-stretch:80%">${esc(fmt(t.pts[t.pts.length-1][2]))}</text>
    <line id="xh" x1="0" x2="0" y1="${Tp}" y2="${H-B}" style="stroke:var(--ink3)" stroke-dasharray="3 3" opacity="0"/><circle id="xdot" r="10" fill="none" style="stroke:var(--acc)" stroke-width="2" opacity="0"/>
    <rect x="${L-10}" y="0" width="${W-L-Rr+20}" height="${H}" fill="transparent" id="hit"/>`;
  const ln=$("#tLine"); if(animate&&!reduced){const len=ln.getTotalLength();ln.style.strokeDasharray=len;ln.style.strokeDashoffset=len;ln.getBoundingClientRect();ln.style.transition="stroke-dashoffset 1.4s cubic-bezier(.3,.7,.2,1)";ln.style.strokeDashoffset=0;const a=$("#tArea");a.style.opacity=0;a.style.transition="opacity 1s .6s";requestAnimationFrame(()=>a.style.opacity=1)}
  $("#plotTitle").textContent=t.name; $("#plotNote").textContent=t.note;
  const dl=tDelta(t),dEl=$("#plotDelta"); dEl.className="delta "+dl.cls; dEl.textContent=`${dl.txt} since ${t.pts[0][1].replace("*","")}`;
  $("#plotFoot").innerHTML=`<span>Source: ${esc(t.src)}</span><button class="lnk" data-open="${t.report}">Open the report →</button>`;
  const tip=$("#plotTip"),hit=$("#hit"),xh=$("#xh"),xd=$("#xdot");
  const move=ev=>{const rect=svg.getBoundingClientRect(),sx=W/rect.width,cx=((ev.touches?ev.touches[0].clientX:ev.clientX)-rect.left)*sx;let bi=0,bd=1e9;P.forEach((p,i)=>{const dd=Math.abs(p[0]-cx);if(dd<bd){bd=dd;bi=i}});const p=P[bi];xh.setAttribute("x1",p[0]);xh.setAttribute("x2",p[0]);xh.setAttribute("opacity",.8);xd.setAttribute("cx",p[0]);xd.setAttribute("cy",p[1]);xd.setAttribute("opacity",1);const pr=$("#plot").getBoundingClientRect();tip.innerHTML=`${esc(t.pts[bi][1])} · <b>${esc(fmt(t.pts[bi][2]))}</b>`;tip.style.left=(rect.left-pr.left+p[0]/sx)+"px";tip.style.top=(rect.top-pr.top+p[1]/sx)+"px";tip.classList.add("on")};
  const leave=()=>{tip.classList.remove("on");xh.setAttribute("opacity",0);xd.setAttribute("opacity",0)};
  hit.addEventListener("mousemove",move);hit.addEventListener("touchstart",move,{passive:true});hit.addEventListener("touchmove",move,{passive:true});hit.addEventListener("mouseleave",leave);hit.addEventListener("touchend",()=>setTimeout(leave,1500));
}
let wallTopic="All";
function renderWall(){
  const items=[];
  ORDER().forEach(r=>{if(wallTopic!=="All"&&r.topic!==wallTopic)return;
    const fl=(r.specNums||[]).filter(n=>n[2]===1).slice(0,2).map(n=>({v:n[0],l:n[1]}));
    const loss=fl.length?[]:r.stats.filter(s=>s.loss&&s.v!==r.big.v).slice(0,1).map(s=>({v:s.v,l:s.l}));
    (fl.length?fl:[r.big,...loss]).forEach(x=>items.push({...x,r}))});
  const topics=[...new Set(R.map(r=>r.topic))].sort();
  $("#wallChips").innerHTML=["All",...topics].map(t=>`<button data-wt="${esc(t)}" aria-pressed="${t===wallTopic}">${t==="All"?"Everything":esc(t)}<span>${t==="All"?R.length:R.filter(r=>r.topic===t).length}</span></button>`).join("");
  $("#board").innerHTML=items.map((x,i)=>`<button class="bcard c-${pub(x.r)}${i%9===0?" big":""}${i%11===5?" inv":""}" data-open="${x.r.id}" style="--d:${Math.min(i,16)*35}ms"><span class="fig">${esc(x.v)}</span><p>${esc(x.l)}</p><small>${tag(x.r)} · ${esc(x.r.title)}</small></button>`).join("");
}
INIT.numbers=()=>{
  $("#numStat").innerHTML=`<b>${MSW.length}</b> rupee amounts from the reports, from <b>${swShort(MSW[0].v)}</b> to <b>${swShort(MSW[MSW.length-1].v)}</b>, plus the long-run trends behind them.`;
  initSwarm(); initCmp(); initTrends(); renderWall();
  $("#wallChips").addEventListener("click",e=>{const b=e.target.closest("[data-wt]");if(!b)return;wallTopic=b.dataset.wt;renderWall()});
  requestAnimationFrame(layoutSwarm);
};
SUBHOOK.num=t=>{if(t==="swarm")requestAnimationFrame(layoutSwarm);if(t==="trends")drawTrend(true)};

/* ---------- charts inside reports ---------- */
const fv=v=>Math.abs(v)<100?num(v,2):num(v,0);
function barChart(c){const max=Math.max(...c.bars.map(b=>b.v),c.ref||0),w=v=>(v/max*80).toFixed(2);return `<div class="chart"><h4>${esc(c.title)}</h4><p class="sub">${esc(c.sub)}</p><div class="bars">${c.bars.map(b=>`<div class="bar ${b.c||""}"><span class="bl">${esc(b.l)}</span><div class="track"><div class="fill" data-w="${w(b.v)}"></div><span class="v">${num(b.v)}${esc(c.unit)}</span>${c.ref?`<i class="refmark" style="left:${w(c.ref)}%"></i>`:""}</div></div>`).join("")}</div>${c.ref?`<p class="refnote">Dashed line: ${num(c.ref)}${esc(c.unit)}</p>`:""}</div>`}
const chartWrap=(c,body)=>`<div class="chart"><h4>${esc(c.title)}</h4><p class="sub">${esc(c.unit||"")}</p>${body}${c.note?`<p class="cnote">${esc(c.note)}</p>`:""}</div>`;
function chartHTML(c){
  if(c.bars) return barChart(c);
  const d=c.data||[];
  if(c.type==="bars"){const mx=c.max||Math.max(...d.map(x=>x[1]));return chartWrap(c,`<div class="bars">${d.map((x,i)=>`<div class="bar ${i===0?"hi":""}"><span class="bl">${esc(x[0])}</span><div class="track"><div class="fill" data-w="${(x[1]/mx*80).toFixed(2)}"></div><span class="v">${fv(x[1])}</span></div></div>`).join("")}</div>`)}
  if(c.type==="pairs"){const mx=c.max||Math.max(...d.flatMap(x=>[x[1],x[2]])),L=c.legend||["",""];return chartWrap(c,`<div class="clegend"><span><i class="ka"></i>${esc(L[0])}</span><span><i class="kb"></i>${esc(L[1])}</span></div>${d.map(x=>`<div class="pair"><div class="pl"><span>${esc(x[0])}</span><span class="v">${fv(x[1])} → ${fv(x[2])}</span></div><div class="pt"><div class="gf a" data-w="${(x[1]/mx*100).toFixed(2)}"></div></div><div class="pt"><div class="gf b" data-w="${(x[2]/mx*100).toFixed(2)}"></div></div></div>`).join("")}`)}
  if(c.type==="funnel"){const mx=d[0][1];return chartWrap(c,`<div class="funnel">${d.map((x,i)=>`${i?`<div class="fstep">↓ ${Math.round(x[1]/d[i-1][1]*100)}% carried through</div>`:""}<div class="fbar" data-w="${Math.max(18,x[1]/mx*100).toFixed(2)}">${fv(x[1])}</div><div class="flabel">${esc(x[0])}</div>`).join("")}</div>`)}
  if(c.type==="split"){const tot=d.reduce((a,x)=>a+x[1],0),col=["var(--ink)","var(--red)","var(--turm)","var(--ink3)"];return chartWrap(c,`<div class="splitbar" role="img" aria-label="${esc(d.map(x=>x[0]+": "+fv(x[1])).join(", "))}">${d.map((x,i)=>`<span style="flex:${x[1]} 1 0;background:${col[i%4]};animation-delay:${i*120}ms"></span>`).join("")}</div><div class="slegend">${d.map((x,i)=>`<div><i style="background:${col[i%4]}"></i><span>${esc(x[0])}</span><span class="mono">${fv(x[1])}</span><span class="mono">${num(x[1]/tot*100,1)}%</span></div>`).join("")}</div>`)}
  if(c.type==="diverge"){const mx=Math.max(...d.map(x=>Math.abs(x[1])));return chartWrap(c,d.map(x=>`<div class="dv"><span class="bl">${esc(x[0])}</span><div class="dtrack"><div class="dneg"><div class="gf" data-w="${x[1]<0?(-x[1]/mx*100).toFixed(2):0}"></div></div><div class="dpos"><div class="gf" data-w="${x[1]>0?(x[1]/mx*100).toFixed(2):0}"></div></div></div><span class="v">${x[1]>0?"+":""}${fv(x[1])}</span></div>`).join(""))}
  return "";
}

/* ============================================================
   PATTERNS: matrix + spotlight
   ============================================================ */
let ptSel=0;
function renderPt(){
  const L=SITE.insights||[],x=L[ptSel];if(!x)return;
  $$("#ptList button").forEach((b,i)=>b.setAttribute("aria-pressed",i===ptSel));
  $$("#matrix .mx-row").forEach(r=>r.classList.toggle("sel",+r.dataset.pt===ptSel));
  const el=$("#ptCard");el.style.animation="none";void el.offsetWidth;el.style.animation="";
  el.innerHTML=`<div class="pt-head"><span class="pt-no">${String(ptSel+1).padStart(2,"0")}</span><div><p class="kick">Pattern ${ptSel+1} of ${L.length} · ${x.evidence.length} pieces of evidence</p><h2>${esc(x.title)}</h2></div></div>
    <p class="pt-lede">${esc(x.lede)}</p>
    <div class="pt-ev">${x.evidence.map((e,i)=>{const r=byId(e[0]);return r?`<button class="c-${pub(r)}" data-open="${r.id}" style="--d:${i*70}ms">${tag(r)}<p>${escH(e[1])}</p><span class="pt-go"><span>${esc(r.title)}</span><i>→</i></span></button>`:""}).join("")}</div>
    <div class="pt-nav"><button class="rnd" data-ptn="-1" aria-label="Previous pattern">←</button><button class="rnd" data-ptn="1" aria-label="Next pattern">→</button></div>`;
}
INIT.insights=()=>{
  const L=SITE.insights||[];
  const cols=[];L.forEach(x=>x.evidence.forEach(e=>{if(byId(e[0])&&!cols.includes(e[0]))cols.push(e[0])}));
  const hits=(x,id)=>x.evidence.filter(e=>e[0]===id).length;
  const colN=id=>L.filter(x=>hits(x,id)).length;
  cols.sort((a,b)=>colN(b)-colN(a));
  $("#insStat").innerHTML=`<b>${L.length}</b> failures keep coming back across <b>${cols.length}</b> reports, whatever the scheme, ministry or state.`;
  const gt=`grid-template-columns:minmax(270px,2.2fr) repeat(${cols.length},minmax(30px,1fr)) 44px`;
  $("#matrix").innerHTML=`<div class="mx-h" style="${gt}"><span></span>${cols.map(id=>{const r=byId(id);return `<span class="mx-col c-${pub(r)}" title="${esc(r.title)}"><em>${esc(SHORT[id]||r.title)}</em></span>`}).join("")}<span class="mx-tot">Total</span></div>
    ${L.map((x,i)=>`<div class="mx-row" data-pt="${i}" style="${gt}"><button class="mx-name" data-pt="${i}"><b>${String(i+1).padStart(2,"0")}</b>${esc(x.title)}</button>${cols.map((id,k)=>{const n=hits(x,id),r=byId(id);return n?`<button class="mx-c on c-${pub(r)}" data-open="${id}" title="${esc(r.title)}: ${n} piece${n>1?"s":""} of evidence" style="--d:${(i*cols.length+k)*12}ms"><i>${n>1?n:""}</i></button>`:`<span class="mx-c"></span>`}).join("")}<span class="mx-tot">${x.evidence.length}</span></div>`).join("")}
    <div class="mx-f" style="${gt}"><span>Patterns per report</span>${cols.map(id=>`<span>${colN(id)}</span>`).join("")}<span></span></div>`;
  $("#ptList").innerHTML=L.map((x,i)=>`<button data-pt="${i}" aria-pressed="${i===ptSel}"><b>${String(i+1).padStart(2,"0")}</b><span>${esc(x.title)}</span></button>`).join("");
  const pick=e=>{const b=e.target.closest("[data-pt]");if(b&&!e.target.closest("[data-open]")){ptSel=+b.dataset.pt;renderPt()}};
  $("#matrix").addEventListener("click",pick);$("#ptList").addEventListener("click",pick);
  $("#ptCard").addEventListener("click",e=>{const b=e.target.closest("[data-ptn]");if(b){ptSel=(ptSel+ +b.dataset.ptn+L.length)%L.length;renderPt()}});
  renderPt();
  $("#whyGrid").innerHTML=(SITE.whyUnread||[]).map(w=>`<div><div class="fig">${esc(w.v)}</div><p>${esc(w.l)}</p>${w.src?`<a href="${esc(w.src)}" target="_blank" rel="noopener">Source ↗</a>`:`<span>General observation</span>`}</div>`).join("");
};

/* ============================================================
   STATES: ranking, findings, scorecards, dossier drawer
   ============================================================ */
const factsFor=code=>{const name=ST.find(s=>s[0]===code)[1],list=[...(SF[code]||[])],ids=new Set(list.map(f=>f[1]));R.filter(r=>r.state===name&&!ids.has(r.id)).forEach(r=>list.push([r.hook,r.id]));return list};
const stName=c=>(ST.find(s=>s[0]===c)||[c,c])[1];
const IDX={fhi:{src:FHI,name:"Fiscal Health Index 2026",note:"Scores for the states NITI Aayog ranked on fiscal health. Higher means healthier finances."},sdg:{src:SDG,name:"SDG India Index 2023-24",note:"Only the states these reports name in the SDG India Index. Higher means closer to the goals."}};
const avgOf=o=>{const v=Object.values(o);return v.reduce((a,b)=>a+b,0)/v.length};
const rankOf=(o,c)=>Object.entries(o).sort((a,b)=>b[1]-a[1]).findIndex(x=>x[0]===c)+1;
let lpIdx="fhi", scSort="find", scQ="";
function renderLolli(){
  const I=IDX[lpIdx],rows=Object.entries(I.src).sort((a,b)=>b[1]-a[1]),avg=avgOf(I.src);
  $("#lpTitle").textContent=I.name;$("#lpNote").textContent=I.note;
  $("#lolli").innerHTML=rows.map(([c,v],i)=>{const band=v>=avg+8?"hi":v<=avg-8?"lo":"mid";return `<button class="lp ${band}" data-stc="${c}"><span class="lp-n"><em>${i+1}</em>${esc(stName(c))}</span><span class="lp-t"><i class="lp-s" data-w="${v}"></i><u style="left:${avg}%"></u></span><b>${v}</b></button>`}).join("")+`<div class="lp-avg"><u></u>Average ${num(avg,1)}<span><i class="hi"></i>above <i class="mid"></i>near <i class="lo"></i>below</span></div>`;
  grow($("#lolli"));
}
function renderFindBars(){
  const rows=ST.map(s=>[s[0],factsFor(s[0]).length]).filter(x=>x[1]).sort((a,b)=>b[1]-a[1]).slice(0,10),mx=rows[0][1];
  $("#findBars").innerHTML=rows.map(([c,n],i)=>`<button class="hbar${i===0?" top":""}" data-stc="${c}"><span>${esc(stName(c))}</span><span class="tr"><i data-w="${(n/mx*100).toFixed(1)}"></i></span><b>${n}</b></button>`).join("");
  grow($("#findBars"));
}
function renderScs(){
  const q=scQ.toLowerCase();
  let L=ST.filter(s=>!q||s[1].toLowerCase().includes(q)||s[0].toLowerCase()===q).map(s=>({c:s[0],n:s[1],f:factsFor(s[0]).length,fhi:FHI[s[0]],sdg:SDG[s[0]]}));
  const k={find:x=>-x.f,fhi:x=>-(x.fhi??-1),sdg:x=>-(x.sdg??-1)}[scSort];
  L.sort(k?(a,b)=>k(a)-k(b)||a.n.localeCompare(b.n):(a,b)=>a.n.localeCompare(b.n));
  const bar=(v,lbl)=>`<div class="sc-m"><span>${lbl}</span>${v!=null?`<span class="sc-b"><i style="width:${v}%"></i></span><b>${v}</b>`:`<span class="sc-b none"></span><b class="na">—</b>`}</div>`;
  $("#sxCards").innerHTML=L.length?L.map((x,i)=>`<button class="sc" data-stc="${x.c}" style="--d:${Math.min(i,20)*20}ms"><span class="sc-top"><span class="sc-code">${x.c}</span><b>${esc(x.n)}</b></span>${bar(x.fhi,"Fiscal")}${bar(x.sdg,"SDG")}<span class="sc-f">${x.f?`<i>${x.f}</i> finding${x.f>1?"s":""}`:`<span class="na">No findings yet</span>`}<span class="sc-go">→</span></span></button>`).join(""):`<div class="empty">No state matches “${esc(scQ)}”.</div>`;
}
function openState(code){
  const s=ST.find(x=>x[0]===code);if(!s)return;
  const f=factsFor(code);
  const g=(key)=>{const I=IDX[key],v=I.src[code];if(v==null)return `<div class="dg na"><span class="kick">${esc(I.name)}</span><p>Not scored in this index.</p></div>`;const n=Object.keys(I.src).length,avg=avgOf(I.src);return `<div class="dg">${ring(v,v,"of 100")}<div><span class="kick">${esc(I.name)}</span><p><b>Rank ${rankOf(I.src,code)} of ${n}</b>. ${v>=avg?`${num(v-avg,1)} above`:`${num(avg-v,1)} below`} the average of ${num(avg,1)}.</p></div></div>`};
  $("#drBody").innerHTML=`<p class="dr-code">${esc(s[0])} · ${f.length} finding${f.length===1?"":"s"}</p><h2 id="drTitle">${esc(s[1])}</h2>
    <div class="dgs">${g("fhi")}${g("sdg")}</div>
    <h3 class="dr-h">What the reports say</h3>
    ${f.length?`<ol class="dr-facts">${f.map((x,i)=>`<li style="--d:${i*60}ms"><button data-open="${x[1]}"><span class="n">${String(i+1).padStart(2,"0")}</span><span>${escH(x[0])}</span><i>→</i></button></li>`).join("")}</ol>`:`<p class="none">Nothing on ${esc(s[1])} in these reports yet. Every state's CAG reports are on <a href="https://cag.gov.in/en/audit-report" target="_blank" rel="noopener">cag.gov.in</a>.</p>`}`;
  const d=$("#drawer");d.classList.add("open");d.setAttribute("aria-hidden","false");document.body.classList.add("lock");
  setTimeout(()=>$("#drawer .dr-x").focus({preventScroll:true}),60);
}
function closeDrawer(){const d=$("#drawer");if(!d.classList.contains("open"))return;d.classList.remove("open");d.setAttribute("aria-hidden","true");if(!reader.classList.contains("open"))document.body.classList.remove("lock")}
document.addEventListener("click",e=>{if(e.target.closest("[data-drclose]")){closeDrawer();return}const b=e.target.closest("[data-stc]");if(b)openState(b.dataset.stc)});
document.addEventListener("click",e=>{if(e.target.closest("#drawer [data-open]"))closeDrawer()},true);
INIT.states=()=>{
  const nf=ST.filter(s=>factsFor(s[0]).length).length;
  $("#stStat").innerHTML=`Fiscal health, development scores and every finding that names a place. Pick a state to open its dossier.`;
  $("#sxKpis").innerHTML=[[ST.length,"states and UTs"],[Object.keys(FHI).length,"scored on fiscal health"],[Object.keys(SDG).length,"named in the SDG index"],[nf,"with findings in these reports"]].map(([v,l],i)=>`<div class="kpi${i===3?" acc":""}"><span class="fig" data-n="${v}">${v}</span><span>${l}</span></div>`).join("");
  renderLolli();renderFindBars();renderScs();
  $("#lpSeg").addEventListener("click",e=>{const b=e.target.closest("[data-lp]");if(!b)return;lpIdx=b.dataset.lp;$$("#lpSeg button").forEach(x=>x.setAttribute("aria-pressed",x===b));renderLolli()});
  $("#scSort").addEventListener("click",e=>{const b=e.target.closest("[data-scs]");if(!b)return;scSort=b.dataset.scs;$$("#scSort button").forEach(x=>x.setAttribute("aria-pressed",x===b));renderScs()});
  let t;$("#stq").addEventListener("input",e=>{clearTimeout(t);t=setTimeout(()=>{scQ=e.target.value.trim();renderScs()},100)});
  $$("#sxKpis .fig").forEach(el=>countUp(el,el.dataset.n,900));
};

/* ============================================================
   PRACTICE: hub, estimate, MCQ drill, flashcard deck, mains
   ============================================================ */
const quizzes={};
function qzHead(st){const right=st.qs.filter((q,i)=>st.ans[i]===q.a).length;return `<div class="qz-dots" aria-hidden="true">${st.qs.map((q,i)=>`<i class="${st.ans[i]==null?"":st.ans[i]===q.a?"ok":"no"}"></i>`).join("")}</div><b class="mono">${right}/${st.qs.length}</b>${st.ans.some(a=>a!=null)?`<button class="lnk" data-qreset>Reset</button>`:""}`}
function qzItem(st,i,src){const q=st.qs[i],an=st.ans[i],r=q.rid&&byId(q.rid);return `<p class="qz-q"><span class="mono">${String(i+1).padStart(2,"0")}</span><span>${esc(q.q)}</span></p><div class="qz-opts">${q.o.map((o,j)=>`<button class="qz-o ${an!=null?(j===q.a?"right":j===an?"wrong":""):""}" data-oi="${j}"${an!=null?" disabled":""}><span class="mono">${"ABCD"[j]}</span><span>${esc(o)}</span></button>`).join("")}</div>${an!=null?`<p class="qz-w"><b>${an===q.a?"Correct.":"Not quite."}</b> ${escH(q.w)}</p>`:""}${src&&r?`<button class="lnk qz-src" data-open="${r.id}">From: ${esc(r.title)} →</button>`:""}`}
function quizHTML(id,qs,src){const st=quizzes[id]||(quizzes[id]={qs,ans:[]});st.qs=qs;return `<div class="quiz" data-set="${esc(id)}" data-src="${src?1:0}"><div class="qz-head">${qzHead(st)}</div>${qs.map((q,i)=>`<div class="qz" data-qi="${i}">${qzItem(st,i,src)}</div>`).join("")}</div>`}
document.addEventListener("click",e=>{
  const o=e.target.closest(".qz-o");if(o&&!o.disabled){const qz=o.closest(".quiz"),st=quizzes[qz.dataset.set],box=o.closest(".qz"),qi=+box.dataset.qi;st.ans[qi]=+o.dataset.oi;box.innerHTML=qzItem(st,qi,qz.dataset.src==="1");qz.querySelector(".qz-head").innerHTML=qzHead(st);if(st.qs.every((_,k)=>st.ans[k]!=null)){const right=st.qs.filter((q,k)=>st.ans[k]===q.a).length;toast(right===st.qs.length?"Perfect score!":`${right} of ${st.qs.length} correct`)}return}
  const rs=e.target.closest("[data-qreset]");if(rs){const qz=rs.closest(".quiz"),st=quizzes[qz.dataset.set];st.ans=[];qz.outerHTML=quizHTML(qz.dataset.set,st.qs,qz.dataset.src==="1");return}
  const cp=e.target.closest("[data-copy]");if(cp)copyText(cp.dataset.copy,cp.dataset.copyOk||"Copied");
});
const EXR=R.filter(r=>r.exam).sort((a,b)=>when(b)-when(a));
const blankLine=l=>{const m=l.match(/\d[\d,.]*/);if(m)return l.replace(m[0],"____");const k=l.search(/[:;]/);return (k>0?l.slice(0,k):l)+"?"};
const POOL=EXR.flatMap(r=>r.exam.quiz.map(q=>Object.assign({},q,{rid:r.id})));
const CARDS=EXR.flatMap(r=>r.exam.prelims.map((p,k)=>({p,r,key:r.id+":"+k})));
const shortT=r=>SHORT[r.id]||r.title;

function renderModes(){
  const best=store.get("saaransh-est-best",null),mb=store.get("saaransh-mcq-best",null),known=deck.known.size;
  const M=[["guess","Estimate","Slide to guess the real number",`${Q.length} questions`,best!=null?`Best ${best}/${Q.length*100}`:"Not played yet",best!=null?best/(Q.length*100)*100:0],
    ["quiz","MCQs","One question at a time, prelims style",`${POOL.length} questions`,mb!=null?`Best ${mb}%`:"Not played yet",mb||0],
    ["cards","Flashcards","Fill the blank, then flip",`${CARDS.length} cards`,`${known} learnt`,known/CARDS.length*100],
    ["mains","Mains","Answer-writing prompts with points to use",`${EXR.length} questions`,"With answer frames",0]];
  const cur=($('#modes [aria-selected="true"]')||{}).dataset?.sub||"guess";
  $("#modes").innerHTML=M.map(([k,t,d,n,p,pc])=>`<button role="tab" class="mode" data-sub="${k}" aria-selected="${k===cur}"><span class="mode-n">${n}</span><b>${t}</b><span class="mode-d">${d}</span><span class="mode-p"><span class="mode-bar"><i style="width:${pc.toFixed(0)}%"></i></span>${p}</span></button>`).join("");
}

/* estimate */
const est={i:0,phase:"guess",g:null,scores:[]};
function renderEst(){
  const box=$("#est"),q=Q[est.i],tot=est.scores.reduce((a,b)=>a+(b||0),0),max=Q.length*100;
  const steps=`<div class="est-steps">${Q.map((_,j)=>`<i class="${j<est.scores.length?"done":""}${j===est.i&&est.phase!=="done"?" cur":""}" title="${j<est.scores.length?est.scores[j]+" points":"Question "+(j+1)}"></i>`).join("")}</div>`;
  const side=`<aside class="est-side">${ring(tot/max*100,tot,`of ${max}`)}<p>Closer guesses earn more. A perfect guess is worth 100.</p><button class="btn sm" data-est="reset">Start over</button></aside>`;
  let main;
  if(est.phase==="done"){
    const best=Math.max(tot,store.get("saaransh-est-best",0));store.set("saaransh-est-best",best);renderModes();
    main=`<span class="kick">Finished</span><h2 class="est-q">You scored ${tot} of ${max}.</h2><p class="est-v">${tot>max*.7?"Sharp. You read these reports closely.":tot>max*.4?"Not bad. Some of these numbers are genuinely hard to believe.":"These numbers surprise almost everyone. That's why the reports matter."}</p>
      <ol class="est-list">${Q.map((x,j)=>`<li><span>${esc(x.q)}</span><b>${est.scores[j]||0}</b></li>`).join("")}</ol>
      <div class="acts"><button class="btn solid" data-est="reset">Play again</button><button class="btn" data-view="reports">Browse reports</button></div>`;
  }else if(est.phase==="guess"){
    const mid=est.g??Math.round(((q.min+q.max)/2)/q.step)*q.step;est.g=mid;
    main=`<span class="kick">Question ${est.i+1} of ${Q.length}</span><h2 class="est-q">${esc(q.q)}</h2><div class="est-num" id="eNum">${esc(fmtQ(q,mid))}</div>
      <div class="nl"><div class="nl-ticks">${Array.from({length:21},(_,k)=>`<i class="${k%5===0?"maj":""}"></i>`).join("")}</div><label class="sr" for="eRange">Your guess</label><input class="grange" type="range" id="eRange" min="${q.min}" max="${q.max}" step="${q.step}" value="${mid}"><div class="nl-l"><span>${esc(fmtQ(q,q.min))}</span><span>${esc(fmtQ(q,(q.min+q.max)/2))}</span><span>${esc(fmtQ(q,q.max))}</span></div></div>
      <div class="acts"><button class="btn red" data-est="lock">Lock in my guess</button><button class="btn" data-est="skip">Skip</button></div>`;
  }else{
    const p=v=>((v-q.min)/(q.max-q.min)*100).toFixed(2),g=est.g,sc=est.scores[est.i],off=Math.abs(g-q.ans);
    main=`<span class="kick">Question ${est.i+1} of ${Q.length}</span><h2 class="est-q">${esc(q.q)}</h2><div class="est-num ans" id="eAns">${esc(fmtQ(q,q.ans))}</div>
      <div class="rtrack"><div class="rail"></div><div class="gap" id="eGap" style="left:${p(g)}%;width:0"></div><div class="pin you" style="left:${p(g)}%">You<br>${esc(fmtQ(q,g))}</div><div class="pin ans" id="ePin" style="left:${p(g)}%">Answer</div></div>
      <p class="est-v"><span class="pts">+${sc}</span>${off<(q.max-q.min)*.03?"<b>Spot on.</b> ":`You were <b>${esc(q.pre+num(off)+q.unit)}</b> off. `}${esc(q.why)}</p>
      <div class="acts"><button class="btn solid" data-est="next">${est.i<Q.length-1?"Next question →":"See my score"}</button><button class="btn" data-open="${q.report}">Read the report</button></div>`;
  }
  box.innerHTML=`<div class="est-card">${steps}${main}</div>${side}`;
  const rg=$("#eRange");if(rg){setP(rg);rg.addEventListener("input",()=>{est.g=+rg.value;$("#eNum").textContent=fmtQ(q,est.g);setP(rg)})}
  if(est.phase==="reveal"){countUp($("#eAns"),fmtQ(q,q.ans),900);const p=v=>((v-q.min)/(q.max-q.min)*100).toFixed(2);requestAnimationFrame(()=>requestAnimationFrame(()=>{const a=$("#ePin"),gp=$("#eGap");if(!a)return;a.style.left=p(q.ans)+"%";gp.style.left=Math.min(p(est.g),p(q.ans))+"%";gp.style.width=Math.abs(p(est.g)-p(q.ans))+"%"}))}
}
$("#est").addEventListener("click",e=>{const b=e.target.closest("[data-est]");if(!b)return;const a=b.dataset.est;
  if(a==="lock"){est.scores[est.i]=ptsQ(Q[est.i],est.g);est.phase="reveal"}
  else if(a==="skip"){est.scores[est.i]=0;est.g=Q[est.i].min;est.phase="reveal"}
  else if(a==="next"){if(est.i<Q.length-1){est.i++;est.phase="guess";est.g=null}else est.phase="done"}
  else if(a==="reset")Object.assign(est,{i:0,phase:"guess",g:null,scores:[]});
  renderEst()});

/* MCQ drill */
const mcq={f:"all",list:POOL,i:0,ans:[]};
function mcqSet(f){mcq.f=f;mcq.list=f==="all"?POOL:POOL.filter(q=>q.rid===f);mcq.i=0;mcq.ans=[];renderMcq()}
function renderMcq(){
  const L=mcq.list,right=mcq.ans.filter((a,i)=>a===L[i].a).length,done=mcq.ans.filter(a=>a!=null).length;
  const chips=`<div class="chiprow" role="group" aria-label="Report">${[["all","All reports",POOL.length],...EXR.map(r=>[r.id,shortT(r),r.exam.quiz.length])].map(([k,l,n])=>`<button data-mf="${k}" aria-pressed="${k===mcq.f}">${esc(l)}<span>${n}</span></button>`).join("")}</div>`;
  let body;
  if(mcq.i>=L.length){
    const pc=Math.round(right/L.length*100);if(mcq.f==="all"||L.length>=5){store.set("saaransh-mcq-best",Math.max(pc,store.get("saaransh-mcq-best",0)));renderModes()}
    const wrong=L.map((q,i)=>({q,i})).filter(x=>mcq.ans[x.i]!==x.q.a);
    body=`<div class="mcq-done">${ring(pc,pc+"%",`${right} of ${L.length}`)}<div><span class="kick">Set complete</span><h2 class="est-q">${pc>=80?"Exam-ready on these reports.":pc>=50?"Good base. Review the misses below.":"Worth another read of these reports."}</h2><div class="acts"><button class="btn solid" data-mq="again">Try again</button>${wrong.length?`<button class="btn" data-mq="wrong">Retry the ${wrong.length} I missed</button>`:""}</div></div></div>
      ${wrong.length?`<h3 class="sh">What you missed</h3><div class="mcq-rev">${wrong.map(x=>{const r=byId(x.q.rid);return `<div><p><b>${esc(x.q.q)}</b></p><p class="ok">✓ ${esc(x.q.o[x.q.a])}</p><p class="muted">${escH(x.q.w)}</p><button class="lnk" data-open="${r.id}">${esc(r.title)} →</button></div>`}).join("")}</div>`:""}`;
  }else{
    const q=L[mcq.i],an=mcq.ans[mcq.i],r=byId(q.rid);
    body=`<div class="mcq-card"><div class="mcq-top"><span class="mono">${mcq.i+1} / ${L.length}</span><span class="mcq-bar"><i style="width:${(mcq.i/L.length*100).toFixed(1)}%"></i></span><span class="mono">${right} right</span></div>
      ${tag(r)}<h2 class="est-q">${esc(q.q)}</h2>
      <div class="mcq-opts">${q.o.map((o,j)=>`<button class="mo${an!=null?(j===q.a?" right":j===an?" wrong":" dim"):""}" data-mo="${j}"${an!=null?" disabled":""}><kbd>${j+1}</kbd><span>${esc(o)}</span></button>`).join("")}</div>
      ${an!=null?`<div class="mcq-why ${an===q.a?"ok":"no"}"><b>${an===q.a?"Correct.":"Not quite."}</b> ${escH(q.w)}</div><div class="acts"><button class="btn solid" data-mq="next">${mcq.i<L.length-1?"Next question →":"See results"}</button><button class="btn" data-open="${r.id}">Read the report</button></div>`:`<p class="muted">Press 1–4 to answer.</p>`}</div>`;
  }
  $("#mcq").innerHTML=chips+body;
}
$("#mcq").addEventListener("click",e=>{
  const f=e.target.closest("[data-mf]");if(f){mcqSet(f.dataset.mf);return}
  const o=e.target.closest("[data-mo]");if(o&&!o.disabled){mcq.ans[mcq.i]=+o.dataset.mo;renderMcq();return}
  const a=e.target.closest("[data-mq]");if(!a)return;
  if(a.dataset.mq==="next"){mcq.i++;renderMcq()}else if(a.dataset.mq==="again")mcqSet(mcq.f);
  else if(a.dataset.mq==="wrong"){mcq.list=mcq.list.filter((q,i)=>mcq.ans[i]!==q.a);mcq.i=0;mcq.ans=[];renderMcq()}});

/* flashcard deck */
const deck={known:new Set(store.get("saaransh-known",[])),queue:[],flipped:false};
function deckFill(){deck.queue=CARDS.map((_,i)=>i).filter(i=>!deck.known.has(CARDS[i].key));deck.flipped=false}
function renderDeck(){
  const n=CARDS.length,k=deck.known.size,c=CARDS[deck.queue[0]];
  const head=`<div class="deck-top"><div class="deck-count"><span class="fig">${k}</span><span>of ${n} learnt</span></div><span class="mcq-bar"><i style="width:${(k/n*100).toFixed(1)}%"></i></span><div class="deck-acts"><button class="lnk" data-dk="shuffle">Shuffle</button><button class="lnk" data-dk="reset">Reset</button></div></div>`;
  if(!c){$("#deck").innerHTML=head+`<div class="deck-done">${ring(100,"✓","all learnt")}<h2 class="est-q">You've learnt all ${n} cards.</h2><button class="btn solid" data-dk="reset">Start the deck again</button></div>`;return}
  $("#deck").innerHTML=head+`<div class="fcard${deck.flipped?" flipped":""}" data-dk="flip" role="button" tabindex="0" aria-label="Flip card"><div class="fcard-in"><div class="fc-f c-${pub(c.r)}">${tag(c.r)}<p>${esc(blankLine(c.p))}</p><span class="hint">Tap or press space to flip</span></div><div class="fc-b">${tag(c.r)}<p>${escH(c.p)}</p><button class="lnk" data-open="${c.r.id}">${esc(c.r.title)} →</button></div></div><span class="stack s1"></span><span class="stack s2"></span></div>
    <div class="deck-btns"><button class="btn" data-dk="again">↺ Again <kbd>A</kbd></button><button class="btn solid" data-dk="got">Got it ✓ <kbd>G</kbd></button></div><p class="muted" style="text-align:center">${deck.queue.length} left in this round</p>`;
}
function deckAct(a){
  if(a==="flip"){deck.flipped=!deck.flipped;const f=$("#deck .fcard");if(f)f.classList.toggle("flipped",deck.flipped);return}
  if(a==="got"){const c=CARDS[deck.queue.shift()];deck.known.add(c.key);store.set("saaransh-known",[...deck.known]);renderModes()}
  else if(a==="again"){deck.queue.push(deck.queue.shift())}
  else if(a==="shuffle"){for(let i=deck.queue.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[deck.queue[i],deck.queue[j]]=[deck.queue[j],deck.queue[i]]}}
  else if(a==="reset"){deck.known.clear();store.set("saaransh-known",[]);deckFill();renderModes()}
  deck.flipped=false;renderDeck();
}
$("#deck").addEventListener("click",e=>{if(e.target.closest("[data-open]"))return;const b=e.target.closest("[data-dk]");if(b)deckAct(b.dataset.dk)});

function renderMains(){
  $("#mainsList").innerHTML=EXR.map((r,i)=>{const pts=tldrOf(r).slice(0,3),recs=(r.recs||[]).slice(0,2);return `<article class="mq c-${pub(r)}"><span class="mq-n">${String(i+1).padStart(2,"0")}</span><div class="mq-b">${tag(r)}<p class="mq-q">${esc(r.exam.mains)}</p>
    <details><summary>Answer frame and points to use</summary><div class="mq-frame"><div><span class="kick">Open with</span><p>${esc(r.title)} (${esc(r.date)}): ${escH(r.big.v)} ${esc(r.big.l)}.</p></div><div><span class="kick">Body</span><ul>${pts.map(p=>`<li>${escH(p)}</li>`).join("")}</ul></div>${recs.length?`<div><span class="kick">Way forward</span><ul>${recs.map(p=>`<li>${escH(p)}</li>`).join("")}</ul></div>`:""}</div></details>
    <div class="acts"><button class="btn sm" data-copy="${esc(r.exam.mains)}" data-copy-ok="Question copied">Copy question</button><button class="btn sm" data-open="${r.id}">Read the report →</button></div></div></article>`}).join("");
}
INIT.play=()=>{
  $("#playStat").innerHTML=`<b>${Q.length}</b> estimation questions, <b>${POOL.length}</b> MCQs, <b>${CARDS.length}</b> flashcards and <b>${EXR.length}</b> mains questions, all from the reports. Progress is saved on this device.`;
  deckFill();renderModes();renderEst();renderMcq();renderDeck();renderMains();
};
document.addEventListener("keydown",e=>{
  if(curView!=="play"||/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)||e.metaKey||e.ctrlKey||e.altKey||reader.classList.contains("open"))return;
  if(!$('[data-subpanel="play:quiz"]').hidden){const n=+e.key;if(n>=1&&n<=4){const b=$(`#mcq [data-mo="${n-1}"]`);if(b&&!b.disabled){e.preventDefault();b.click()}}else if(e.key==="Enter"){const b=$('#mcq [data-mq="next"]');if(b){e.preventDefault();b.click()}}}
  if(!$('[data-subpanel="play:cards"]').hidden){if(e.key===" "){e.preventDefault();deckAct("flip")}else if(e.key.toLowerCase()==="g")deckAct("got");else if(e.key.toLowerCase()==="a")deckAct("again")}
});

/* ============================================================
   LEARN
   ============================================================ */
const PATH=[
  {t:"Audit fieldwork",who:"CAG teams and Accountants General",d:"Auditors test-check files, accounts and sites, usually for a sample of districts or projects.",eg:"<b>Example:</b> 2.7 lakh tap connections surveyed in Tamil Nadu."},
  {t:"Department replies",who:"The ministry audited",d:"Draft findings go to the department, which can explain or contest each point. Weak explanations stay in.",eg:"<b>Example:</b> Tamil Nadu blamed lack of space for outdoor taps. The CAG didn't accept it."},
  {t:"Report signed",who:"CAG → President or Governor (Art. 151)",d:"The CAG signs and submits the report. It cannot publish on its own.",eg:"<b>Note:</b> the government must place it before the legislature."},
  {t:"Tabled",who:"Parliament or state Assembly",d:"Laid before the House. Only now does it become public.",eg:"<b>Example:</b> West Bengal tabled 28 pending reports in one day in July 2026."},
  {t:"PAC examines",who:"Public Accounts Committee",d:"MPs or MLAs question officials and recommend action.",eg:"<b>Example:</b> the Delhi excise report went to the Assembly's PAC."},
  {t:"Action taken",who:"The government",d:"Ministries file Action Taken Notes. Some findings reach courts or change laws.",eg:"<b>Example:</b> the coal audit led to a 2014 Supreme Court ruling and the 2015 auction law."}
];
let artSel=0, routeSel=0;
function renderArt(){const A=(SITE.learn||{}).cag||[],a=A[artSel];if(!a)return;
  $$("#artList button").forEach((b,i)=>b.setAttribute("aria-selected",i===artSel));
  const m=a[0].match(/\d+/);
  $("#artPanel").innerHTML=`<div class="art-big">${m?m[0]:esc(a[0])}</div><div><span class="kick">${esc(a[0])} · Constitution of India</span><p class="art-t">${esc(a[1])}</p><div class="art-dots">${A.map((_,i)=>`<i class="${i===artSel?"on":""}"></i>`).join("")}</div><div class="acts"><button class="btn sm" data-art="-1"${artSel===0?" disabled":""}>←</button><button class="btn sm solid" data-art="1"${artSel===A.length-1?" disabled":""}>Next article →</button></div></div>`;
  const p=$("#artPanel");p.style.animation="none";void p.offsetWidth;p.style.animation="";
}
function renderRoute(){
  $("#route").innerHTML=`<div class="rt-line"><i style="height:${(routeSel/(PATH.length-1)*100).toFixed(1)}%"></i></div>`+PATH.map((p,i)=>`<div class="rt${i===routeSel?" on":""}${i<routeSel?" done":""}"><button class="rt-h" data-rt="${i}" aria-expanded="${i===routeSel}"><span class="rt-n">${i+1}</span><span><b>${esc(p.t)}</b><small>${esc(p.who)}</small></span></button>${i===routeSel?`<div class="rt-b"><p>${esc(p.d)}</p><p class="eg">${p.eg}</p><div class="acts"><button class="btn sm" data-rt="${i-1}"${i===0?" disabled":""}>← Back</button><button class="btn sm solid" data-rt="${i+1}"${i===PATH.length-1?" disabled":""}>Next stage →</button></div></div>`:""}</div>`).join("");
}
let glLetter="";
const termUse={};R.forEach(r=>(r.terms||[]).forEach(t=>{const k=termKey[t.toLowerCase()];if(k)termUse[k]=(termUse[k]||0)+1}));
function renderLetters(){const have=new Set(Object.values(G).map(g=>g.t[0].toUpperCase()));$("#glLetters").innerHTML=`<button class="all" data-letter="" aria-pressed="${glLetter===""}">All</button>`+"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(c=>`<button data-letter="${c}" aria-pressed="${glLetter===c}"${have.has(c)?"":" disabled"}>${c}</button>`).join("")}
function renderGlossary(q){q=(q||"").toLowerCase();const items=Object.entries(G).filter(([k,g])=>(!q||(g.t+" "+(g.full||"")+" "+g.d).toLowerCase().includes(q))&&(!glLetter||g.t[0].toUpperCase()===glLetter)).sort((a,b)=>a[1].t.localeCompare(b[1].t));$("#glossaryGrid").innerHTML=items.length?items.map(([k,g])=>`<div class="gl" id="term-${k}" data-search="${esc(g.t)}" role="button" tabindex="0" title="Find reports that use this term"><h4>${esc(g.t)}${g.full?`<small>${esc(g.full)}</small>`:""}</h4><p>${esc(g.d)}</p>${termUse[k]?`<span class="gl-use">Used in ${termUse[k]} report${termUse[k]>1?"s":""} →</span>`:""}</div>`).join(""):`<div class="empty">No term matches “${esc(q)}”.</div>`;$("#glCount").textContent=`${items.length} terms`}
function renderCheck(){const T=(SITE.learn||{}).tips||[],done=new Set(store.get("saaransh-tips",[]));
  $("#check").innerHTML=`<div class="ck-head">${ring(done.size/T.length*100,`${done.size}/${T.length}`,"habits")}<div><span class="kick">A checklist for your first report</span><h2 class="est-q">Read a CAG report like an examiner</h2><p class="muted">Tick each habit as you try it. Saved on this device.</p></div></div>
    <ol class="ck">${T.map((t,i)=>`<li><button class="${done.has(i)?"on":""}" data-ck="${i}" aria-pressed="${done.has(i)}"><span class="ck-box">${done.has(i)?"✓":i+1}</span><span>${esc(t)}</span></button></li>`).join("")}</ol>`}
INIT.learn=()=>{
  const L=SITE.learn||{};
  $("#learnStat").innerHTML=`Who checks the government's books, how a report reaches Parliament, and <b>${Object.keys(G).length}</b> terms you'll meet on the way.`;
  $("#artList").innerHTML=(L.cag||[]).map((a,i)=>`<button role="tab" data-art-i="${i}" aria-selected="${i===0}"><b>${esc(a[0])}</b><span>${esc(a[1].split(/[.,]/)[0])}</span></button>`).join("");
  $("#artList").addEventListener("click",e=>{const b=e.target.closest("[data-art-i]");if(b){artSel=+b.dataset.artI;renderArt()}});
  $("#artPanel").addEventListener("click",e=>{const b=e.target.closest("[data-art]");if(b){artSel=Math.max(0,Math.min((L.cag||[]).length-1,artSel+ +b.dataset.art));renderArt()}});
  renderArt();
  $("#learnTypes").innerHTML=(L.types||[]).map((t,i)=>{const r=byId(t[2]);return `<button${r?` data-open="${r.id}"`:""}><span class="at-n">${String(i+1).padStart(2,"0")}</span><b>${esc(t[0])}</b><p>${esc(t[1])}</p>${r?`<small>Example: ${esc(r.title)} →</small>`:""}</button>`}).join("");
  $("#route").addEventListener("click",e=>{const b=e.target.closest("[data-rt]");if(!b||b.disabled)return;routeSel=Math.max(0,Math.min(PATH.length-1,+b.dataset.rt));renderRoute()});
  renderRoute();
  $("#cases").innerHTML=window.TIMELINE.map((t,i)=>`<article class="case"><span class="case-no">Case ${String(i+1).padStart(2,"0")}</span><div class="case-y">${t.y}</div><h3>${esc(t.t)}</h3><p>${esc(t.d)}</p><div class="case-then"><span class="kick">What happened next</span><p>${esc(t.a)}</p></div><button class="lnk" data-open="${t.id}">Read the case →</button></article>`).join("");
  $("#qa").innerHTML=(L.niti||[]).map((n,i)=>`<details${i===0?" open":""}><summary><span class="qa-q">${esc(n[0])}</span></summary><p>${esc(n[1])}</p></details>`).join("");
  renderCheck();
  $("#check").addEventListener("click",e=>{const b=e.target.closest("[data-ck]");if(!b)return;const s=new Set(store.get("saaransh-tips",[])),i=+b.dataset.ck;s.has(i)?s.delete(i):s.add(i);store.set("saaransh-tips",[...s]);renderCheck()});
  renderLetters(); renderGlossary("");
  $("#glq").addEventListener("input",e=>renderGlossary(e.target.value));
  $("#glLetters").addEventListener("click",e=>{const b=e.target.closest("[data-letter]");if(!b||b.disabled)return;glLetter=b.dataset.letter;renderLetters();renderGlossary($("#glq").value)});
};
function flashTerm(k){show("learn",{sub:["learn","glossary"],instant:true});glLetter="";$("#glq").value="";renderLetters();renderGlossary("");const el=document.getElementById("term-"+k);if(!el)return;el.scrollIntoView({behavior:reduced?"auto":"smooth",block:"center"});el.classList.add("flash");setTimeout(()=>el.classList.remove("flash"),2200)}

/* ============================================================
   READER: one long article with a contents rail
   ============================================================ */
const reader=$("#reader"),rScroll=$("#rScroll"),rContent=$("#rContent");
let cur=null,level=store.get("saaransh-level","simple"),lastFocus=null,spyIO=null;
window.saaranshLevel=v=>{level=v;store.set("saaransh-level",v);if(cur&&$("#sumProse")){rContent.querySelectorAll("[data-level]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.level===effLevel(cur)));$("#sumProse").innerHTML=summaryHTML(cur)}};
const sevLabel=(s,r)=>s==="high"?"Serious":s==="med"?"Notable":(r.body==="CAG"?"Minor":"Context");
const GST={good:"Healthy",ok:"Fair",warn:"Watch",bad:"Stressed"};
function langOpts(r){if(window.SAARANSH_HI){const o=[["simple","सरल"]];if(r.detailed)o.push(["detailed","विस्तृत"]);return o}const o=[["simple",r.detailed?"Simple":"English"]];if(r.detailed)o.push(["detailed","Detailed"]);if(r.hi)o.push(["hi","हिंदी"]);return o}
const effLevel=r=>langOpts(r).some(o=>o[0]===level)?level:"simple";
function summaryHTML(r){const l=effLevel(r);if(l==="hi")return `<div class="prose deva" lang="hi"><p>${escH(r.hi)}</p></div>`;return `<div class="prose">${(l==="detailed"?r.detailed:r.simple).map(p=>`<p>${richH(p)}</p>`).join("")}</div>`}
function levelSeg(r){const o=langOpts(r);if(o.length<2)return "";const l=effLevel(r);return `<div class="seg level" role="group" aria-label="Language and depth">${o.map(x=>`<button data-level="${x[0]}" aria-pressed="${x[0]===l}"${x[0]==="hi"?' lang="hi" class="deva"':""}>${x[1]}</button>`).join("")}</div>`}
function relCard(x){return `<button class="relc c-${pub(x)}" data-open="${x.id}">${tag(x)}<b>${esc(x.title)}</b><span class="fv">${esc(x.big.v)}</span></button>`}
function openReport(id,tab){
  const r=byId(id); if(!r) return;
  closePalette(); hidePop();
  if(!reader.classList.contains("open")) lastFocus=document.activeElement;
  cur=r;
  const ord=ORDER(),i=ord.findIndex(x=>x.id===r.id),prev=ord[(i-1+ord.length)%ord.length],next=ord[(i+1)%ord.length];
  const nF=nFindings(r), rel=(r.related||[]).map(byId).filter(Boolean), isNiti=r.body==="NITI Aayog";
  const S=[];
  const pts=tldrOf(r);
  S.push(["overview","The gist",0,`${Array.isArray(r.tldr)||r.tldrList?`<ol class="keypts">${pts.map(t=>`<li><span>${escH(t)}</span></li>`).join("")}</ol>`:""}
    <div class="sumhead"><span class="kick">In plain words</span>${levelSeg(r)}</div><div id="sumProse">${summaryHTML(r)}</div>
    <div class="ctx"><details><summary>What it is</summary><p>${rich(r.background)}</p></details>${r.why?`<details><summary>Why it matters</summary><p>${rich(r.why)}</p></details>`:""}<details><summary>${r.why?(isNiti?"How it was studied":"How it was audited"):"What was checked"}</summary><p>${rich(r.checked)}</p></details></div>`]);
  if(nF){
    let fh="";
    if((r.findings||[]).length) fh+=`<ol class="findings-old">${r.findings.map(f=>`<li><span>${richH(f)}</span></li>`).join("")}</ol>`;
    if(r.themes){const its=r.themes.flatMap(t=>t.items.map(()=>t.sev)),c=k=>its.filter(x=>x===k).length;
      fh+=`<div class="sevbar">${["high","med","low"].map(k=>c(k)?`<i style="flex:${c(k)};background:var(--${k==="high"?"red":k==="med"?"turm":"ink3"})"></i>`:"").join("")}</div>
      <div class="sevkey"><span><i class="sw high"></i>${c("high")} serious</span><span><i class="sw med"></i>${c("med")} notable</span><span><i class="sw low"></i>${c("low")} ${r.body==="CAG"?"minor":"context"}</span><button class="lnk" id="thToggle" style="margin-left:auto">Expand all</button></div>
      ${r.themes.map((t,k)=>`<details class="theme ${t.sev}"${k<2?" open":""}><summary><span class="sevp ${t.sev}">${sevLabel(t.sev,r)}</span><b>${esc(t.name)}</b><span class="cnt">${t.items.length}</span></summary><ul>${t.items.map(it=>`<li><div><p>${escH(it.t)}</p>${it.ref?`<small>${esc(it.ref)}</small>`:""}</div>${it.amt?`<b class="amt">${esc(it.amt)}</b>`:""}</li>`).join("")}</ul></details>`).join("")}`}
    S.push(["findings","What they found",nF,fh]);
  }
  S.push(["numbers","In numbers",0,`<div class="stats">${r.stats.map(s=>`<div class="stat ${s.loss?"loss":""}"><div class="fig">${esc(s.v)}</div><span>${esc(s.l)}</span></div>`).join("")}</div>
    ${r.flaggedNote?`<p class="fnote"><b>About the flagged amount.</b> ${esc(r.flaggedNote)}</p>`:""}
    ${r.charts.length?`<div class="charts">${r.charts.map(chartHTML).join("")}</div>`:""}
    ${r.groups?`<h3 class="sh" style="margin-top:34px">How the states are grouped</h3><div class="groups">${r.groups.map(g=>`<div class="grp ${g[1]}"><b>${esc(g[0])}</b><span class="g">${GST[g[1]]}</span><div class="chips">${g[2].map(x=>`<button data-stgo="${esc(x)}" title="Open ${esc(x)} on the map">${esc(x)}</button>`).join("")}</div></div>`).join("")}</div>${r.groupsNote?`<p class="notep">${esc(r.groupsNote)}</p>`:""}`:""}`]);
  const resp=`${r.other?`<div class="blk"><span class="who">${esc(r.other.who)}</span><p class="quote">${richH(r.other.text)}</p></div>`:""}
    ${r.response||r.next?`<div class="blk"><span class="who">What happened next</span>${r.next?`<p class="prose"><p>${richH(r.next)}</p></p>`:""}${r.response?`<ul class="resp">${r.response.map(x=>`<li><span>${escH(x)}</span></li>`).join("")}</ul>`:""}</div>`:""}
    ${r.recs?`<div class="blk"><span class="who">${r.recs.length} recommendations</span><ol class="recs">${r.recs.map(x=>`<li><span>${escH(x)}</span></li>`).join("")}</ol>${r.recsNote?`<p class="notep">${esc(r.recsNote)}</p>`:""}</div>`:""}
    ${r.timeline?`<div class="blk"><span class="who">Timeline</span><ol class="vtl">${r.timeline.map(t=>`<li><b>${esc(t[0])}</b><span>${esc(t[1])}</span></li>`).join("")}</ol></div>`:""}
    ${r.act?`<div class="blk"><span class="who">What it means for you</span><div class="actlist">${r.act.map(a=>`<div>${ARR}<p>${rich(a)}</p></div>`).join("")}</div></div>`:""}`;
  if(resp.trim()) S.push(["response","The reply",0,resp]);
  if(r.exam) S.push(["exam","For exams",r.exam.quiz.length,`<div class="mains"><span class="who">Mains practice question</span><p>${esc(r.exam.mains)}</p><button class="btn sm" data-copy="${esc(r.exam.mains)}" data-copy-ok="Question copied">Copy question</button></div>
    <h3 class="sh">Prelims pointers</h3><ul class="prelims">${r.exam.prelims.map(x=>`<li><span>${escH(x)}</span></li>`).join("")}</ul>
    <h3 class="sh">Test yourself</h3>${quizHTML("r-"+r.id,r.exam.quiz,false)}`]);
  S.push(["sources","Sources",0,`<ul class="srclist">${(r.srcs||[[r.src.label,r.src.url,"official"]]).map(x=>`<li><span class="kind ${esc(x[2])}">${esc(x[2])}</span><a href="${esc(x[1])}" target="_blank" rel="noopener">${esc(x[0])} ↗</a></li>`).join("")}</ul>
    <p class="notep">Read the original before quoting a figure.</p>
    ${r.terms&&r.terms.length?`<h3 class="sh">Terms used</h3><dl class="terms">${r.terms.map(t=>{const g=G[termKey[t.toLowerCase()]];return g?`<div><dt>${esc(g.t)}</dt><dd>${esc(g.d)}</dd></div>`:""}).join("")}</dl>`:""}
    ${rel.length?`<h3 class="sh">Read next</h3><div class="rel">${rel.map(relCard).join("")}</div>`:""}
    <div class="r-next"><button data-open="${prev.id}"><small>← Newer</small><b>${esc(prev.title)}</b></button><button data-open="${next.id}"><small>Older →</small><b>${esc(next.title)}</b></button></div>`]);

  reader.className=`reader open c-${pub(r)}`;
  const side=[["Publisher",pubName(r)],["Report",r.reportNo||r.ref],["Type",r.kind],["Tabled",r.tabled||r.date],["Ministry",r.ministry],["Covers",r.period],["Topic",r.topic],["Reading time",readMins(r)+" min"]].filter(x=>x[1]);
  const figs=[{v:r.big.v,l:r.big.l,main:1},...r.stats.filter(s=>s.v.replace(/\s/g,"")!==r.big.v.replace(/\s/g,"")).slice(0,3)];
  rContent.innerHTML=`<header class="r-head">
      <div class="r-kick">${tag(r)}${r.reportNo?`<span class="rno">${esc(r.reportNo)}</span>`:""}${r.kind?`<span>${esc(r.kind)}</span>`:""}<span>${esc(r.date)}</span><span>${readMins(r)} min read</span></div>
      <h2 id="rTitle"${(r.fullTitle||r.title).length>60?' class="long"':""}>${esc(r.fullTitle||r.title)}</h2>
      <p class="r-deck">${escH(Array.isArray(r.tldr)?r.hook:r.tldr)}</p>
      <div class="r-figs">${figs.map((f,k)=>`<div class="${f.main?"main":""}${f.loss?" loss":""}" data-jump="numbers" role="button" tabindex="0"><div class="fig"${k===0?' id="rBig"':""}>${esc(f.v)}</div><span>${esc(f.l)}</span></div>`).join("")}</div>
    </header>
    <div class="r-layout">
      <nav class="toc" aria-label="On this page"><h4>Contents</h4>${S.map(([k,l,n])=>`<button data-jump="${k}"><i></i>${l}${n?`<span class="n">${n}</span>`:""}</button>`).join("")}</nav>
      <div class="r-body">${S.map(([k,l,n,h])=>`<section class="rsec" id="sec-${k}" data-sec="${k}"><h3>${l}${n?`<small>${n}</small>`:""}</h3>${h}</section>`).join("")}</div>
      <aside class="r-side"><dl class="facts-dl">${side.map(x=>`<div><dt>${esc(x[0])}</dt><dd>${esc(x[1])}</dd></div>`).join("")}</dl>
      <button class="btn sm" data-save="${r.id}" aria-pressed="${saved.has(r.id)}">${BOOK} Save for later</button>${r.exam?`<button class="btn sm" data-jump="exam">Practise this report</button>`:""}</aside>
    </div>`;
  $("#rMini").textContent=r.title; $("#rSave").setAttribute("aria-pressed",saved.has(r.id));
  reader.setAttribute("aria-hidden","false"); document.body.classList.add("lock");
  document.title=`${r.title} · Saaransh`;
  rScroll.style.scrollBehavior="auto";rScroll.scrollTop=0;rScroll.style.scrollBehavior="";
  countUp($("#rBig"),r.big.v,1200);
  /* grow charts as they come into view */
  rContent.querySelectorAll(".chart,.stats").forEach(c=>{const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){grow(c);io.disconnect()}},{root:rScroll,threshold:.2});io.observe(c)});
  /* scroll spy */
  if(spyIO)spyIO.disconnect();
  spyIO=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const k=e.target.dataset.sec;rContent.querySelectorAll(".toc [data-jump]").forEach(b=>b.classList.toggle("on",b.dataset.jump===k))}}),{root:rScroll,rootMargin:"-20% 0px -70% 0px"});
  rContent.querySelectorAll(".rsec").forEach(s=>spyIO.observe(s));
  onRScroll();
  if(tab&&tab!=="overview")setTimeout(()=>jump(tab,true),60);
  setTimeout(()=>$("#rClose").focus({preventScroll:true}),60);
  try{history.replaceState(null,"","#"+r.id)}catch(e){}
}
function jump(k,instant){const s=$("#sec-"+k);if(!s)return;if(instant){rScroll.style.scrollBehavior="auto"}rScroll.scrollTop=s.offsetTop-8;rScroll.style.scrollBehavior=""}
function onRScroll(){const max=rScroll.scrollHeight-rScroll.clientHeight;$("#rProg").style.width=(max>0?rScroll.scrollTop/max*100:0)+"%";reader.classList.toggle("scrolled",rScroll.scrollTop>260);hidePop()}
rScroll.addEventListener("scroll",onRScroll,{passive:true});
function closeReader(){if(!reader.classList.contains("open"))return;reader.classList.remove("open");reader.setAttribute("aria-hidden","true");document.body.classList.remove("lock");hidePop();cur=null;document.title=curView==="home"?"Saaransh: CAG audits and NITI Aayog reports, decoded":`${VTITLE[curView]} · Saaransh`;try{history.replaceState(null,"",curView==="home"?location.pathname+location.search:"#"+curView)}catch(e){}if(lastFocus&&lastFocus.focus)lastFocus.focus({preventScroll:true})}
rContent.addEventListener("click",e=>{
  const j=e.target.closest("[data-jump]");if(j){jump(j.dataset.jump);return}
  const l=e.target.closest("[data-level]");if(l){level=l.dataset.level;store.set("saaransh-level",level);rContent.querySelectorAll("[data-level]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.level===level));const sp=$("#sumProse");sp.innerHTML=summaryHTML(cur);sp.style.animation="none";void sp.offsetWidth;sp.style.animation="swap .4s var(--ease)";return}
  const tg=e.target.closest("#thToggle");if(tg){const ds=[...rContent.querySelectorAll(".theme")],open=ds.every(d=>d.open);ds.forEach(d=>d.open=!open);tg.textContent=open?"Expand all":"Collapse all"}
});
$("#rClose").addEventListener("click",closeReader);
$("#rSave").addEventListener("click",()=>cur&&toggleSave(cur.id));
$("#rShare").addEventListener("click",()=>{if(!cur)return;const l=effLevel(cur),sum=l==="hi"?cur.hi:plain((l==="detailed"?cur.detailed:cur.simple).join(" ")),pts=tldrOf(cur);copyText(`${cur.fullTitle||cur.title}\n\n${sum}\n\n${pts.map(x=>"• "+x).join("\n")}\n\nSource: ${cur.src.label}\n— Saaransh`,"Summary copied")});
function copyText(t,ok){try{navigator.clipboard.writeText(t).then(()=>toast(ok),()=>fallbackCopy(t,ok))}catch(e){fallbackCopy(t,ok)}}
function fallbackCopy(t,ok){const ta=document.createElement("textarea");ta.value=t;ta.style.position="fixed";ta.style.opacity="0";document.body.appendChild(ta);ta.select();let done=false;try{done=document.execCommand("copy")}catch(e){}ta.remove();toast(done?ok:"Copy blocked here. Select the text instead.")}
document.addEventListener("click",e=>{const o=e.target.closest("[data-open]");if(o&&!e.target.closest("[data-save]")){e.preventDefault();openReport(o.dataset.open,o.dataset.tab)}});

/* ---------- search palette ---------- */
const pal=$("#palette"),palq=$("#palq"),palList=$("#palList"); let palItems=[],palSel=0;
const JUMPS=[["reports",null,"The library"],["numbers",["num","scale"],"Money to scale"],["numbers",["num","trends"],"Long-run trends"],["numbers",["num","board"],"Key figures"],["insights",null,"Patterns across audits"],["states",null,"States"],["play",["play","guess"],"Estimate the figure"],["play",["play","quiz"],"MCQs"],["play",["play","cards"],"Flashcards"],["play",["play","mains"],"Mains questions"],["learn",["learn","basics"],"The CAG in the Constitution"],["learn",["learn","journey"],"A report's journey"],["learn",["learn","landmarks"],"Landmark audits"],["learn",["learn","glossary"],"Glossary"]];
function buildPal(q){
  q=q.trim().toLowerCase();const items=[],words=q.split(/\s+/).filter(Boolean),has=t=>words.every(w=>String(t).toLowerCase().includes(w));let n=0;
  const add=(g,list,free)=>{if(!free)list=list.slice(0,Math.max(0,30-n));if(!list.length)return;items.push({g},...list);if(!free)n+=list.length};
  add(q?"Reports":"Latest reports",(q?R.filter(r=>has(hay(r))):ORDER().slice(0,8)).map(r=>({t:r.title,s:r.big.v+" · "+r.big.l,k:r.level==="State"?r.state:r.body,go:()=>openReport(r.id)})));
  if(q){
    const fs=[];R.forEach(r=>{(r.themes||[]).forEach(t=>t.items.forEach(it=>{if(has(it.t+" "+t.name))fs.push({t:it.t,s:`${r.title} · ${t.name}`,k:"Finding",go:()=>openReport(r.id,"findings")})}));(r.findings||[]).forEach(f=>{if(has(plain(f)))fs.push({t:plain(f),s:r.title,k:"Finding",go:()=>openReport(r.id,"findings")})})});
    add("Findings",fs.slice(0,8));
    add("States",ST.filter(s=>has(s[1])).slice(0,4).map(s=>({t:s[1],s:"What the reports say",k:"State",go:()=>{closePalette();show("states");openState(s[0])}})));
    add("Terms",Object.entries(G).filter(([k,g])=>has(g.t+" "+(g.full||"")+" "+g.d)).slice(0,6).map(([k,g])=>({t:g.t,s:g.full||g.d,k:"Term",go:()=>{closePalette();flashTerm(k)}})));
    add("Patterns",(SITE.insights||[]).filter(x=>has(x.title+" "+x.lede+" "+x.evidence.map(e=>e[1]).join(" "))).map(x=>({t:x.title,s:x.lede,k:"Pattern",go:()=>{closePalette();show("insights",{instant:true});setTimeout(()=>document.getElementById("ins-"+x.id)?.scrollIntoView({behavior:reduced?"auto":"smooth"}),80)}})));
  }
  add("Go to",JUMPS.filter(j=>!q||has(j[2])).map(j=>({t:j[2],s:"",k:"Section",go:()=>{closePalette();closeReader();show(j[0],{sub:j[1]})}})),true);
  palItems=items.filter(x=>!x.g);palSel=0;
  if(!palItems.length){palList.innerHTML=`<div class="pal-empty">Nothing for “${esc(q)}”. Try a scheme, a state or a ministry.</div>`;return}
  let m=0;palList.innerHTML=items.map(x=>x.g?`<div class="pal-group">${esc(x.g)}</div>`:`<button class="pal-item" role="option" data-pi="${m}" aria-selected="${m++===0}"><div><div class="pi-t">${esc(x.t)}</div>${x.s?`<div class="pi-s">${esc(x.s)}</div>`:""}</div><span class="pi-k">${esc(x.k)}</span></button>`).join("");
}
function selPal(i){palSel=(i+palItems.length)%palItems.length;palList.querySelectorAll(".pal-item").forEach(b=>b.setAttribute("aria-selected",+b.dataset.pi===palSel));palList.querySelector(`[data-pi="${palSel}"]`)?.scrollIntoView({block:"nearest"})}
function openPalette(q){$("#sheet").hidden=true;pal.classList.add("open");pal.setAttribute("aria-hidden","false");palq.value=q||"";buildPal(palq.value);setTimeout(()=>palq.focus(),30)}
function closePalette(){if(!pal.classList.contains("open"))return;pal.classList.remove("open");pal.setAttribute("aria-hidden","true")}
palq.addEventListener("input",()=>buildPal(palq.value));
palq.addEventListener("keydown",e=>{if(e.key==="ArrowDown"){e.preventDefault();selPal(palSel+1)}else if(e.key==="ArrowUp"){e.preventDefault();selPal(palSel-1)}else if(e.key==="Enter"){e.preventDefault();palItems[palSel]?.go()}});
palList.addEventListener("click",e=>{const b=e.target.closest("[data-pi]");if(b)palItems[+b.dataset.pi].go()});
palList.addEventListener("pointermove",e=>{const b=e.target.closest("[data-pi]");if(b&&+b.dataset.pi!==palSel)selPal(+b.dataset.pi)});
pal.addEventListener("click",e=>{if(e.target===pal)closePalette()});
document.addEventListener("click",e=>{if(e.target.closest("[data-palette]"))openPalette("")});

/* ---------- glossary popovers ---------- */
const pop=$("#pop");
function showPop(btn){const g=G[btn.dataset.term];if(!g)return;pop.innerHTML=`<b>${esc(g.t)}${g.full?" · "+esc(g.full):""}</b>${esc(g.d)}`;pop.classList.add("on");const r=btn.getBoundingClientRect(),pw=pop.offsetWidth,ph=pop.offsetHeight;pop.style.left=Math.min(Math.max(8,r.left+r.width/2-pw/2),innerWidth-pw-8)+"px";let y=r.top-ph-10;if(y<8)y=r.bottom+10;pop.style.top=y+"px"}
function hidePop(){pop.classList.remove("on")}
document.addEventListener("mouseover",e=>{const t=e.target.closest&&e.target.closest(".term");if(t)showPop(t)});
document.addEventListener("mouseout",e=>{if(e.target.closest&&e.target.closest(".term"))hidePop()});
document.addEventListener("focusin",e=>{const t=e.target.closest&&e.target.closest(".term");t?showPop(t):hidePop()});
document.addEventListener("click",e=>{const t=e.target.closest(".term");if(t){e.preventDefault();showPop(t)}else hidePop()});
addEventListener("scroll",hidePop,{passive:true});

/* ---------- keyboard ---------- */
let gAt=0;
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){if($("#drawer").classList.contains("open"))closeDrawer();else if(pal.classList.contains("open"))closePalette();else if(reader.classList.contains("open"))closeReader();$("#sheet").hidden=true;hidePop();return}
  const typing=/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
  if((e.key==="/"&&!typing)||((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k")){e.preventDefault();openPalette("");return}
  if(typing||e.metaKey||e.ctrlKey||e.altKey)return;
  if(e.key==="g"){gAt=Date.now();return}
  if(gAt&&Date.now()-gAt<800){const v={h:"home",r:"reports",n:"numbers",f:"numbers",i:"insights",s:"states",p:"play",l:"learn",e:"play"}[e.key];gAt=0;if(v){e.preventDefault();closeReader();closePalette();show(v,e.key==="e"?{sub:["play","quiz"]}:{});return}}
  if(reader.classList.contains("open")&&(e.key==="ArrowRight"||e.key==="ArrowLeft")&&!e.target.closest(".seg")&&!e.target.closest("input")){const ord=ORDER(),i=ord.findIndex(x=>x.id===cur.id);openReport(ord[(i+(e.key==="ArrowRight"?1:-1)+ord.length)%ord.length].id)}
});
document.addEventListener("keydown",e=>{if(e.key!=="Enter"&&e.key!==" ")return;const el=e.target;if(el.matches&&el.matches('[role="button"],[role="link"]')&&el.tagName!=="BUTTON"&&el.tagName!=="A"){e.preventDefault();el.click()}});

/* ---------- start ---------- */
$$("#main .block").forEach(b=>b.classList.add("rv"));reveal();
syncSaved();
const h=location.hash.slice(1);
if(VIEWS.includes(h)) show(h,{instant:true});
else { show("home",{instant:true}); if(h&&byId(h)) openReport(h); }
})();
