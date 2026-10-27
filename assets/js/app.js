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
const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
let toastT;
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("on");clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove("on"),2000)}
const onVisible=(el,fn,opts={threshold:.2})=>{if(!("IntersectionObserver" in window)){fn(true);return}new IntersectionObserver(es=>es.forEach(e=>fn(e.isIntersecting)),opts).observe(el)};
const DEVA={"CAG":"भारत के नियंत्रक-महालेखापरीक्षक","NITI Aayog":"नीति आयोग","MoSPI":"सांख्यिकी मंत्रालय","Finance Commission":"वित्त आयोग","Finance Ministry":"वित्त मंत्रालय","Health Ministry":"स्वास्थ्य मंत्रालय"};
const PUBC={"CAG":"violet","NITI Aayog":"saffron","MoSPI":"teal","Finance Commission":"sky","Finance Ministry":"sky","Health Ministry":"pink"};
const pub = r => r.level==="State" ? "red" : (PUBC[r.body]||"violet");
const badge = r => `<span class="pub c-${pub(r)}"><i></i>${esc(r.level==="State"?`CAG · ${r.state}`:r.body)}</span>`;
const ARROW=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const STAR=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>`;
const ICON={
  doc:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l4 4v14H6z"/><path d="M9 12h7M9 16h7"/></svg>`,
  rupee:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M6 4c7 0 7 10 0 10l8 7"/></svg>`,
  chart:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/></svg>`,
  pin:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
  play:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"/></svg>`,
  cap:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8l10-5 10 5-10 5z"/><path d="M6 10v6c3 2 9 2 12 0v-6"/></svg>`
};

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
(SITE.insights||[]).forEach(i=>i.evidence.forEach(e=>{if(!byId(e[0]))console.warn("[Saaransh] insight cites unknown report:",e[0])}));

const readMins = r => Math.max(2,Math.round(plain([...(r.simple||[]),...(r.detailed||[]),...(r.findings||[]),r.background||"",r.why||"",(r.other&&r.other.text)||"",r.next||"",...(r.themes||[]).flatMap(t=>t.items.map(i=>i.t)),...(r.recs||[])].join(" ")).split(/\s+/).length/200));
const hay = r => r._hay || (r._hay=(r.title+" "+(r.fullTitle||"")+" "+r.hook+" "+r.body+" "+r.topic+" "+(r.sector||"")+" "+(r.ministry||"")+" "+(r.state||"")+" "+r.keys+" "+plain((r.simple||[]).join(" "))+" "+(r.en||"")).toLowerCase());
const matchQ = (r,q) => q.toLowerCase().split(/\s+/).filter(Boolean).every(w=>hay(r).includes(w));
const ORDER = () => [...R].sort((a,b)=>when(b)-when(a));
const flaggedTotal = R.reduce((a,r)=>a+(r.flagged||0),0);
const quizN = R.reduce((a,r)=>a+(r.exam?r.exam.quiz.length:0),0);

/* ---------- animated numbers ---------- */
function parseFig(s){const m=String(s).match(/^(.*?)(\d[\d,]*(?:\.\d+)?)(.*)$/);if(!m)return null;const d=m[2].includes(".")?m[2].split(".")[1].length:0;return {pre:m[1],n:parseFloat(m[2].replace(/,/g,"")),d,comma:m[2].includes(",")||parseFloat(m[2].replace(/,/g,""))>=1000,suf:m[3]}}
function countUp(el,str,dur=1100){
  const f=parseFig(str); if(!f||reduced){el.textContent=str;return}
  const t0=performance.now(), fmt=v=>f.comma?v.toLocaleString("en-IN",{minimumFractionDigits:f.d,maximumFractionDigits:f.d}):v.toFixed(f.d);
  const tok=Symbol(); el._tok=tok;
  (function tick(t){if(el._tok!==tok)return;const p=Math.max(0,Math.min(1,(t-t0)/dur)),e=1-Math.pow(1-p,4);el.textContent=f.pre+fmt(f.n*e)+f.suf;if(p<1)requestAnimationFrame(tick);else el.textContent=str})(t0);
}

/* ---------- saved ---------- */
let saved=new Set(store.get("saaransh-saved",[]));
function toggleSave(id){saved.has(id)?saved.delete(id):saved.add(id);store.set("saaransh-saved",[...saved]);toast(saved.has(id)?"Saved to your list":"Removed from saved");$$("[data-save]").forEach(b=>b.setAttribute("aria-pressed",saved.has(b.dataset.save)));if(cur)$("#rSave").setAttribute("aria-pressed",saved.has(cur.id));if(lib.tab==="saved"&&inited.reports)renderGrid()}
document.addEventListener("click",e=>{const s=e.target.closest("[data-save]");if(s){e.stopPropagation();toggleSave(s.dataset.save)}},true);

/* ---------- theme ---------- */
const th=store.get("saaransh-theme",null); if(th) document.documentElement.dataset.theme=th;
const isDark=()=>document.documentElement.dataset.theme==="dark";
function themeLabel(){const l=isDark()?"Switch to light theme":"Switch to dark theme";$("#themeBtn").setAttribute("aria-label",l);$("#themeBtn").title=l}
$("#themeBtn").addEventListener("click",()=>{const n=isDark()?"light":"dark";document.documentElement.dataset.theme=n;store.set("saaransh-theme",n);themeLabel();readColors();if(inited.numbers)drawTrend(false)});
themeLabel();

/* ---------- router ---------- */
const VIEWS=["home","reports","numbers","insights","states","play","learn"];
const VTITLE={home:"Saaransh",reports:"Reports",numbers:"Shocking numbers",insights:"Insights",states:"States",play:"Play & practise",learn:"Learn"};
let curView="home"; const inited={};
function show(v,opts={}){
  if(!VIEWS.includes(v)) v="home";
  const go=()=>{
    $$(".view").forEach(s=>s.hidden=s.dataset.view!==v);
    curView=v;
    $$(".snav [data-view], .tabbar [data-view]").forEach(b=>b.dataset.view===v?b.setAttribute("aria-current","page"):b.removeAttribute("aria-current"));
    window.scrollTo({top:0,behavior:"instant"});
    document.title=v==="home"?"Saaransh":`${VTITLE[v]} · Saaransh`;
    try{history.replaceState(null,"",v==="home"?location.pathname+location.search:"#"+v)}catch(e){}
    if(!inited[v]){inited[v]=true;INIT[v]&&INIT[v]()}
    heroActive(v==="home");
    if(opts.sub) setSub(opts.sub[0],opts.sub[1]);
  };
  if(document.startViewTransition&&!reduced&&!opts.instant) document.startViewTransition(go); else go();
}
const INNER="[data-open],[data-yr],[data-search],[data-sev],[data-sp],[data-stgo],[data-grp-go],[data-pub-go],[data-topic-go],[data-rtab-go],a,button:not([data-view]),select,input";
document.addEventListener("click",e=>{const h=e.target.closest(".homelink");if(!h)return;e.preventDefault();e.stopImmediatePropagation();closeReader();closePalette();
  const top=()=>window.scrollTo({top:0,behavior:"instant"});
  if(curView==="home"&&scrollY>0&&!reduced){window.scrollTo({top:0,behavior:"smooth"});try{history.replaceState(null,"",location.pathname+location.search)}catch(err){}}
  else{show("home",{instant:true});top();requestAnimationFrame(top)}},true);
document.addEventListener("click",e=>{const b=e.target.closest("[data-view]:not(.view)");if(!b)return;const inner=e.target.closest(INNER);if(inner&&inner!==b&&b.contains(inner))return;e.preventDefault();closeReader();closePalette();show(b.dataset.view)});

/* sub tabs inside a view */
const SUBHOOK={
  num:t=>{if(t==="scale"){layoutScale(fCur);scaleIntro()}if(t==="trends")drawTrend(true)},
  ins:t=>{if(t==="charts")grow($("#insCharts"))}
};
function setSub(g,t){
  $$(`[data-subgroup="${g}"] [data-sub]`).forEach(x=>x.setAttribute("aria-selected",x.dataset.sub===t));
  $$(`[data-subpanel^="${g}:"]`).forEach(p=>p.hidden=p.dataset.subpanel!==`${g}:${t}`);
  SUBHOOK[g]&&SUBHOOK[g](t);
}
document.addEventListener("click",e=>{const b=e.target.closest("[data-sub]");if(!b)return;setSub(b.closest("[data-subgroup]").dataset.subgroup,b.dataset.sub)});
document.addEventListener("keydown",e=>{const b=e.target.closest&&e.target.closest("[data-sub]");if(!b||!["ArrowRight","ArrowLeft"].includes(e.key))return;const all=[...b.parentElement.querySelectorAll("[data-sub]")];const i=(all.indexOf(b)+(e.key==="ArrowRight"?1:-1)+all.length)%all.length;all[i].focus();all[i].click()});
const grow=root=>requestAnimationFrame(()=>requestAnimationFrame(()=>root.querySelectorAll("[data-w]").forEach(f=>f.style.width=f.dataset.w+"%")));

/* ---------- HOME (dashboard) ---------- */
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
];
function heroActive(on){if(on)startSpot();else clearInterval(spT)}
function readColors(){}
const now=new Date();
$("#todayLine").textContent=`Updated ${now.toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}`;
$("#nReports").textContent=R.length; $("#nQuiz").textContent=quizN;
const yrs=R.map(r=>r.year), Y0=Math.min(...yrs), Y1=Math.max(...yrs);
$("#rangeChip").textContent=`Reports from ${Y0} – ${Y1}`;
addEventListener("scroll",()=>$("#topbar").classList.toggle("scrolled",scrollY>4),{passive:true});
document.addEventListener("click",e=>{if(e.target.closest("[data-saved-go]"))setTimeout(()=>{lib.tab="saved";syncTabs();renderGrid()},0)});

/* hero cards: money flagged, reports decoded (spotlight sits beside them) */
const cagF=R.filter(r=>r.flagged!=null).sort((a,b)=>b.flagged-a.flagged);
const byDate=[...cagF].sort((a,b)=>when(a)-when(b));
const thisYr=R.filter(r=>r.year===Y1).length;
(function(){
  const t=cagF.reduce((s,r)=>s+r.flagged,0), tot=`₹${num(Math.round(t),0)} cr`;
  $("#k1").innerHTML=`<div class="wl"><h3>Money flagged</h3><button class="dp" data-pub-go="CAG · Union" data-sort="money" title="See CAG audits by money flagged">${cagF.length} CAG audits</button></div>
    <div class="spot-in"><div class="spot-num" data-fig="${esc(tot)}">${esc(tot)}</div><p class="spot-cap">flagged in CAG audits tabled ${esc(byDate[0].date)} – ${esc(byDate[byDate.length-1].date)}. Not all of it is a loss.</p></div>
    <div class="hero-viz"><div class="ksplit">${cagF.map((r,i)=>`<i style="flex:${r.flagged};opacity:${(1-i*.2).toFixed(2)}" title="${esc(r.title)}: ₹${num(Math.round(r.flagged),0)} cr" data-open="${r.id}" role="button" tabindex="0" aria-label="Open ${esc(r.title)}"></i>`).join("")}</div><div class="kcap"><span>${esc(cagF[0].title)} ${num(cagF[0].flagged/t*100,0)}%</span><span>${cagF.length-1} others</span></div></div>
    <div class="spot-foot"><button class="linkbtn" data-view="numbers">See all figures →</button></div>`;
  const ys=[];for(let y=Y1-5;y<=Y1;y++)ys.push([y,R.filter(r=>r.year===y).length]);const m=Math.max(...ys.map(x=>x[1]),1);
  $("#k2").innerHTML=`<div class="wl"><h3>Reports decoded</h3><button class="dp" data-yr="${Y1}" title="See ${Y1} reports">+${thisYr} in ${Y1}</button></div>
    <div class="spot-in"><div class="spot-num" data-fig="${R.length}">${R.length}</div><p class="spot-cap">audits, indices and surveys from ${new Set(R.map(r=>r.body)).size} publishers, ${Y0} – ${Y1}.</p></div>
    <div class="hero-viz"><div class="kcols">${ys.map(([y,n])=>`<div title="${y}: ${n} reports" data-yr="${y}" role="button" tabindex="0" aria-label="${n} reports in ${y}"><i style="height:${Math.max(8,n/m*100)}%"></i><span>${y}</span></div>`).join("")}</div></div>
    <div class="spot-foot"><button class="linkbtn" data-view="reports">Browse all reports →</button></div>`;
  [["k1","numbers"],["k2","reports"]].forEach(([id,v])=>{const el=$("#"+id);el.dataset.view=v;el.setAttribute("role","link");el.tabIndex=0});
})();

/* every finding, one dot */
const SEVR=R.filter(r=>r.themes);
const SHORT={"union-accounts-2425":"Union Accounts","cab-report-9-2026":"Auton. Bodies","pmkvy-2025":"PMKVY","bharatmala":"Bharatmala","skilling-viksit-2047":"Skilling","school-education-2026":"Schools","fiscal-health-2026":"Fiscal Health","cag-gst-20-2026":"GST","cag-gujarat-gst-2026":"Gujarat GST","cag-kerala-jjm":"Kerala JJM","cag-uk-namami-gange":"Namami Gange","cag-wb-amphan":"Amphan","cag-wb-covid":"Bengal Covid","cag-wb-finances-2425":"Bengal Fin.","niti-ifi-2026":"Invest. Index","niti-ai-2025":"AI","niti-netzero-2026":"Net Zero"};
let sevF="all", sevHi="";
const SW={high:"Serious",med:"Notable",low:"Minor"};
function renderSev(){
  const list=SEVR.filter(r=>sevF==="all"||(sevF==="cag"?r.body==="CAG":r.body!=="CAG")).map(r=>({r,items:r.themes.flatMap(t=>t.items.map(it=>({t:it.t,sev:t.sev,theme:t.name,amt:it.amt}))).sort((x,y)=>"hml".indexOf(x.sev[0])-"hml".indexOf(y.sev[0]))})).sort((x,y)=>y.items.length-x.items.length);
  const all=list.flatMap(x=>x.items), c=k=>all.filter(i=>i.sev===k).length;
  let n=0;
  $("#wSev").innerHTML=`<div class="wl"><h3>Every finding, one dot</h3><label class="sr" for="sevSel">Show</label><select class="sel" id="sevSel"><option value="all">All reports</option><option value="cag">CAG audits</option><option value="niti">NITI Aayog</option></select></div>
    <div class="dgsum">${[["high","serious"],["med","notable"],["low","minor or context"]].map(([k,l])=>`<button class="k-${k}" data-sev="${k}" aria-pressed="${sevHi===k}"><i></i><b>${c(k)}</b> ${l}</button>`).join("")}</div>
    <div class="dotgrid${sevHi?" hi-"+sevHi:""}">${list.map(x=>`<div class="dg-row"><button class="dg-name" data-open="${x.r.id}" data-tab="findings">${esc(SHORT[x.r.id]||x.r.title)}</button><div class="dg-dots">${x.items.map(it=>`<button class="dot k-${it.sev}" data-open="${x.r.id}" data-tab="findings" data-tip="${esc(SW[it.sev])} · ${esc(x.r.title)}" data-tt="${esc(it.t)}" aria-label="${esc(SW[it.sev])}: ${esc(it.t)}" style="animation-delay:${Math.min(n++,60)*12}ms"></button>`).join("")}</div><span class="dg-n">${x.items.length}</span></div>`).join("")}</div>
    <p class="dgtip" id="dgTip">Hover or focus a dot to read the finding. Click to open it.</p>`;
  $("#sevSel").value=sevF;
}
$("#wSev").addEventListener("click",e=>{const b=e.target.closest("[data-sev]");if(!b)return;sevHi=sevHi===b.dataset.sev?"":b.dataset.sev;renderSev()});
$("#wSev").addEventListener("change",e=>{if(e.target.id==="sevSel"){sevF=e.target.value;renderSev()}});
const dgShow=e=>{const d=e.target.closest&&e.target.closest(".dot");if(d)$("#dgTip").innerHTML=`<b>${d.dataset.tip}</b><br>${hiNum(d.dataset.tt)}`};
$("#wSev").addEventListener("pointerover",dgShow);$("#wSev").addEventListener("focusin",dgShow);
renderSev();

/* publisher waffle: one square per report */
const GROUPS=[["All","violet",()=>true],["CAG · Union","violet",r=>r.body==="CAG"&&r.level!=="State"],["CAG · States","red",r=>r.level==="State"],["NITI Aayog","saffron",r=>r.body==="NITI Aayog"],["MoSPI","teal",r=>r.body==="MoSPI"],["Finance","sky",r=>/Finance/.test(r.body)],["Health","pink",r=>r.body==="Health Ministry"]];
(function(){
  const gs=GROUPS.slice(1).map(([n,c,f])=>({n,c,list:R.filter(f).sort((a,b)=>when(b)-when(a))})).sort((a,b)=>b.list.length-a.list.length);
  let k=0;
  $("#wPub").innerHTML=`<div class="wl"><h3>Who published what</h3><span class="count">1 square = 1 report</span></div>
    <div class="waffle">${gs.flatMap(g=>g.list.map(r=>`<button class="c-${g.c}" data-open="${r.id}" data-wt="${esc(r.title)}" data-wg="${esc(g.n)}" aria-label="${esc(r.title)}, ${esc(g.n)}" style="animation-delay:${k++*18}ms"></button>`)).join("")}</div>
    <p class="wtip" id="wTip">Hover a square to see the report.</p>
    <div class="wleg">${gs.map(g=>`<button class="c-${g.c}" data-grp-go="${esc(g.n)}"><i></i><span>${esc(g.n)}</span><b>${g.list.length}<small>${num(g.list.length/R.length*100,0)}%</small></b></button>`).join("")}</div>`;
  $("#wPub").addEventListener("pointerover",e=>{const b=e.target.closest("[data-wt]");if(b)$("#wTip").innerHTML=`<b>${b.dataset.wt}</b> · ${b.dataset.wg}`});
  $("#wPub").addEventListener("click",e=>{const t=e.target.closest("[data-grp-go]");if(!t)return;lib.group=t.dataset.grpGo;lib.tab="all";show("reports",{instant:true});renderChips();syncTabs();renderGrid()});
})();

/* flagged amounts on a log scale (lollipops) */
const crore=s=>{const m=String(s||"").replace(/,/g,"").match(/₹\s?([\d.]+)\s*(lakh crore|crore|cr|lakh)?/i);if(!m)return null;let v=parseFloat(m[1]);const u=(m[2]||"").toLowerCase();if(u==="lakh crore")v*=1e5;else if(u==="lakh")v/=100;return v};
const FIND=[];
R.forEach(r=>{(r.themes||[]).forEach(t=>t.items.forEach(it=>{const v=crore(it.amt);if(v!=null&&!/\/km/.test(it.amt))FIND.push({t:it.t,amt:it.amt,v,r})}));if(!r.themes&&r.money)FIND.push({t:r.hook,amt:fmtCr(r.money).replace(" crore"," cr"),v:r.money,r})});
FIND.sort((a,b)=>b.v-a.v);
let ftab="all";
const LX=v=>Math.max(0,Math.min(100,(Math.log10(Math.max(v,1))-1)/6*100));
function renderTop(){
  const L=FIND.filter(x=>ftab==="all"||(ftab==="union"?x.r.level!=="State":x.r.level==="State")).slice(0,8);
  $("#ftBody").innerHTML=L.map(x=>{const p=LX(x.v);return `<button class="ll c-${pub(x.r)}" data-open="${x.r.id}" data-tab="findings"><span class="ll-l">${esc(x.t)}<small>${esc(x.r.title)}</small></span><span class="ll-t"><span class="stem" data-w="${p.toFixed(1)}"></span><span class="bub" data-l="${p.toFixed(1)}"></span></span><span class="amt2">${esc(x.amt)}</span></button>`}).join("");
  requestAnimationFrame(()=>requestAnimationFrame(()=>{$$("#ftBody [data-w]").forEach(e=>e.style.width=e.dataset.w+"%");$$("#ftBody [data-l]").forEach(e=>e.style.left=e.dataset.l+"%")}));
}
$("#wTop").innerHTML=`<div class="wl"><h3>Flagged amounts, to scale</h3><div class="utabs" role="tablist" id="ftTabs" style="border:0"><button role="tab" data-ft="all" aria-selected="true">All</button><button role="tab" data-ft="union" aria-selected="false">Union</button><button role="tab" data-ft="states" aria-selected="false">States</button></div></div>
  <div class="lolli" id="ftBody"></div>
  <div class="llaxis"><span></span><div>${[[10,"₹10 cr"],[1000,"₹1,000 cr"],[1e5,"₹1 lakh cr"],[1e7,"₹100 lakh cr"]].map(([v,l])=>`<span style="left:${LX(v)}%">${l}</span>`).join("")}</div><span></span></div>
  <p class="llnote">Log scale: each step is ten times the last. "L cr" means lakh crore.</p>`;
$("#ftTabs").addEventListener("click",e=>{const b=e.target.closest("[data-ft]");if(!b)return;ftab=b.dataset.ft;$$("#ftTabs button").forEach(x=>x.setAttribute("aria-selected",x===b));renderTop()});
renderTop();

/* state map card */
let mmMode="fhi";
function renderMini(){
  const S=window.STATES, src=mmMode==="fhi"?FHI:window.SDG_SCORES, lo=mmMode==="fhi"?0:50, hi=mmMode==="fhi"?75:80;
  $("#mmGrid").innerHTML=S.map(([c,n,col,row])=>{const v=src[c];const p=v!=null?Math.max(18,Math.min(100,(v-lo)/(hi-lo)*100)):0;return `<button style="grid-column:${col+1};grid-row:${row+1}${p?`;background:color-mix(in srgb,var(--brand) ${p.toFixed(0)}%,var(--brand-soft))`:""}" class="${p?"has":""} ${p>60?"dk":""}" data-mst="${c}" aria-label="${esc(n)}${v!=null?`: ${v}`:""}">${c}</button>`}).join("");
  $("#mmInfo").innerHTML=mmMode==="fhi"?`Fiscal Health Index 2026. Odisha leads at <b>73.1</b>; Punjab is last at <b>12.4</b>.`:`SDG India Index 2023-24. Kerala and Uttarakhand lead at <b>79</b>; Bihar is last at <b>57</b>.`;
}
$("#wMap").innerHTML=`<div class="wl"><h3>States <span class="count">(${window.STATES.length})</span></h3><div class="seg" id="mmSeg"><button data-mm="fhi" aria-pressed="true">Fiscal health</button><button data-mm="sdg" aria-pressed="false">SDG</button></div></div>
  <div class="mmap" id="mmGrid"></div>
  <div class="mapfoot"><p class="mm-info" id="mmInfo"></p><div class="mlegend"><span><i style="background:var(--brand)"></i>High score</span><span><i style="background:color-mix(in srgb,var(--brand) 35%,var(--brand-soft))"></i>Lower score</span><span><i style="background:var(--sunk)"></i>Not scored</span></div></div>`;
$("#mmSeg").addEventListener("click",e=>{const b=e.target.closest("[data-mm]");if(!b)return;mmMode=b.dataset.mm;$$("#mmSeg button").forEach(x=>x.setAttribute("aria-pressed",x===b));renderMini()});
$("#wMap").addEventListener("pointerover",e=>{const b=e.target.closest("[data-mst]");if(!b)return;const s=window.STATES.find(x=>x[0]===b.dataset.mst),v=(mmMode==="fhi"?FHI:window.SDG_SCORES)[s[0]];$("#mmInfo").innerHTML=`<b>${esc(s[1])}</b>: ${v!=null?`score <b>${v}</b>`:"not scored in this index"}`});
$("#wMap").addEventListener("click",e=>{const b=e.target.closest("[data-mst]");if(!b)return;selState=b.dataset.mst;mapMode=mmMode;show("states",{instant:true});$$("#mapSeg button").forEach(x=>x.setAttribute("aria-pressed",x.dataset.mode===mapMode));paintTiles();renderStateCard()});
renderMini();

/* spotlight */
let sp=0, spT=0; const spEl=$("#wSpot"); const SPOTC=["violet","alarm","saffron","sky","pink","teal","lime"];
function renderSpot(i,anim){
  const [id,v,cap]=SHOCK[i], r=byId(id);
  spEl.className=`w w-spot hero s4 c-${SPOTC[i%SPOTC.length]}`;
  spEl.innerHTML=`<div class="wl"><h3>Spotlight</h3>${badge(r)}</div>
    <div class="spot-in${anim?" swapin":""}" data-open="${r.id}" role="button" tabindex="0" aria-label="Open ${esc(r.title)}"><div class="spot-num" id="spNum">${esc(v)}</div><p class="spot-cap">${esc(cap)}</p></div>
    <div class="spot-foot"><button class="linkbtn" data-open="${r.id}">${esc(r.title)} →</button>
    <div class="spot-nav"><span class="dots">${SHOCK.map((_,j)=>`<i class="${j===i?"on":""}"></i>`).join("")}</span><button class="iconbtn" data-sp="-1" aria-label="Previous">‹</button><button class="iconbtn" data-sp="1" aria-label="Next">›</button></div></div>`;
  countUp($("#spNum"),v,900);
}
function startSpot(){clearInterval(spT);if(!reduced)spT=setInterval(()=>{sp=(sp+1)%SHOCK.length;renderSpot(sp,true)},6000)}
spEl.addEventListener("click",e=>{const b=e.target.closest("[data-sp]");if(b){sp=(sp+ +b.dataset.sp+SHOCK.length)%SHOCK.length;renderSpot(sp,true);startSpot()}});
spEl.addEventListener("pointerenter",()=>clearInterval(spT));
spEl.addEventListener("pointerleave",startSpot);
renderSpot(0,false);

/* latest list (compact rows) */
function cardHTML(r){
  return `<article class="row c-${pub(r)}"><button class="card-open" data-open="${r.id}" aria-label="Open ${esc(r.title)}"></button>
    <div class="row-meta">${badge(r)}<span>${esc(r.date)} · ${esc(r.topic)}</span></div>
    <div class="row-main"><h3>${esc(r.title)}</h3><p>${escH(r.hook)}</p></div>
    <div class="row-fig"><b>${esc(r.big.v)}</b><span>${esc(r.big.l)}</span></div>
    <button class="save" data-save="${r.id}" aria-pressed="${saved.has(r.id)}" aria-label="Save ${esc(r.title)}"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M6 3h12v18l-6-4-6 4z"/></svg></button>
  </article>`;
}
$("#wLatest").innerHTML=`<div class="wl"><h3>Latest reports</h3><button class="linkbtn" data-view="reports">All ${R.length} →</button></div><div class="list compact">${ORDER().slice(0,5).map(cardHTML).join("")}</div>`;

/* timeline strip */
(function(){
  const pts=ORDER().filter(r=>r.year>=2023).reverse(); let html="",yr=0;
  pts.forEach(r=>{if(r.year!==yr){yr=r.year;html+=`<span class="tyear" aria-hidden="true">${yr}</span>`}html+=`<button class="tcard c-${pub(r)}" data-open="${r.id}"><small>${esc(r.date)} · ${esc(r.level==="State"?r.state:r.body)}</small><b>${esc(r.title)}</b><span class="f">${esc(r.big.v)}</span></button>`});
  $("#wTimeline").innerHTML=`<div class="wl"><h3>Report timeline <span class="count">${pts[0].year} – ${pts[pts.length-1].year}</span></h3><div class="tnav"><button class="iconbtn" data-ts="-1" aria-label="Scroll back">‹</button><button class="iconbtn" data-ts="1" aria-label="Scroll forward">›</button></div></div><div class="tstrip" id="tstrip">${html}</div>`;
  const st=$("#tstrip"); requestAnimationFrame(()=>{st.scrollLeft=st.scrollWidth});
  $("#wTimeline").addEventListener("click",e=>{const b=e.target.closest("[data-ts]");if(b)st.scrollBy({left:+b.dataset.ts*640,behavior:reduced?"auto":"smooth"})});
  let d=null,moved=false;
  st.addEventListener("pointerdown",e=>{if(e.pointerType!=="mouse")return;d={x:e.clientX,l:st.scrollLeft};moved=false});
  addEventListener("pointermove",e=>{if(!d)return;const dx=e.clientX-d.x;if(Math.abs(dx)>4){moved=true;st.classList.add("drag")}st.scrollLeft=d.l-dx});
  addEventListener("pointerup",()=>{d=null;st.classList.remove("drag")});
  st.addEventListener("click",e=>{if(moved){e.stopPropagation();e.preventDefault();moved=false}},true);
})();
$$("#top [data-fig]").forEach(el=>onVisible(el,v=>{if(v&&!el._done){el._done=1;countUp(el,el.dataset.fig,1100)}},{threshold:.5}));

/* ---------- REPORTS (filter card + table) ---------- */
const INIT={};
const lib={group:"All",topic:"All",q:"",sort:"new",tab:"all",year:0};
function renderChips(){if(inited.reports)$("#pubSel").value=lib.group}
function syncTabs(){$$("#libTabs [data-lt]").forEach(b=>b.setAttribute("aria-selected",b.dataset.lt===lib.tab))}
function renderGrid(){
  if(!$("#grid"))return;
  const f=GROUPS.find(g=>g[0]===lib.group)[2];
  let list=R.filter(r=>f(r)&&(lib.topic==="All"||r.topic===lib.topic)&&(!lib.q||matchQ(r,lib.q)));
  if(lib.year)list=list.filter(r=>r.year===lib.year);
  if(lib.tab==="saved")list=list.filter(r=>saved.has(r.id));else if(lib.tab==="cag")list=list.filter(r=>r.body==="CAG");else if(lib.tab==="niti")list=list.filter(r=>r.body!=="CAG");
  if(lib.sort==="money")list.sort((a,b)=>(b.money||0)-(a.money||0));else if(lib.sort==="az")list.sort((a,b)=>a.title.localeCompare(b.title));else list.sort((a,b)=>when(b)-when(a));
  $("#count").textContent=`(${list.length} of ${R.length})`;
  $("#yearChip").innerHTML=lib.year?`<button class="chipx" data-clear-year>Year ${lib.year} ✕</button>`:"";
  $("#grid").innerHTML=list.length?list.map(r=>`<tr class="c-${pub(r)}" data-open="${r.id}" tabindex="0"><td><b class="tt">${esc(r.title)}</b><span class="th">${escH(r.hook)}</span></td><td>${badge(r)}</td><td class="hide-m nowrap">${esc(r.date)}</td><td class="hide-m">${esc(r.topic)}</td><td class="r"><b class="kf">${esc(r.big.v)}</b></td><td><button class="save" data-save="${r.id}" aria-pressed="${saved.has(r.id)}" aria-label="Save ${esc(r.title)}"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M6 3h12v18l-6-4-6 4z"/></svg></button></td></tr>`).join("")
    :`<tr><td colspan="6" class="emptyc">${lib.tab==="saved"?"Nothing saved yet. Tap the bookmark on any report.":`No report matches “${esc(lib.q)}”. Try a scheme, ministry or state.`}</td></tr>`;
}
INIT.reports=()=>{
  $("#pubSel").innerHTML=GROUPS.map(([n,c,f])=>`<option value="${esc(n)}">${n==="All"?"All publishers":esc(n)} (${R.filter(f).length})</option>`).join("");
  $("#topicSel").innerHTML=`<option value="All">All topics</option>`+[...new Set(R.map(r=>r.topic))].sort().map(t=>`<option>${esc(t)}</option>`).join("");
  $("#repStat").innerHTML=`<b>${R.length}</b> reports from <b>${new Set(R.map(r=>r.body)).size}</b> publishers, ${Y0} – ${Y1}`;
  $("#pubSel").value=lib.group; $("#topicSel").value=lib.topic; $("#sortSel").value=lib.sort; syncTabs(); renderGrid();
};
$("#pubSel").addEventListener("change",e=>{lib.group=e.target.value;renderGrid()});
$("#topicSel").addEventListener("change",e=>{lib.topic=e.target.value;renderGrid()});
$("#sortSel").addEventListener("change",e=>{lib.sort=e.target.value;renderGrid()});
$("#libReset").addEventListener("click",()=>{Object.assign(lib,{group:"All",topic:"All",q:"",sort:"new",tab:"all",year:0});$("#libq").value="";INIT.reports()});
$("#libTabs").addEventListener("click",e=>{const b=e.target.closest("[data-lt]");if(!b)return;lib.tab=b.dataset.lt;syncTabs();renderGrid()});
$("#grid").addEventListener("keydown",e=>{if(e.key==="Enter"){const t=e.target.closest("[data-open]");if(t)openReport(t.dataset.open)}});
function setSort(v){if(v==="saved"){lib.tab="saved"}else lib.sort=v;if(inited.reports){$("#sortSel").value=lib.sort;syncTabs();renderGrid()}}
let lq;$("#libq").addEventListener("input",e=>{clearTimeout(lq);lq=setTimeout(()=>{lib.q=e.target.value.trim();renderGrid()},100)});

/* ---------- NUMBERS: shock board, money scale, trends ---------- */
INIT.numbers=()=>{
  const items=[];
  ORDER().forEach(r=>{
    const fl=(r.specNums||[]).filter(n=>n[2]===1).slice(0,2).map(n=>({v:n[0],l:n[1]}));
    const loss=fl.length?[]:r.stats.filter(s=>s.loss&&s.v!==r.big.v).slice(0,1).map(s=>({v:s.v,l:s.l}));
    (fl.length?fl:[r.big,...loss]).forEach(x=>items.push({...x,r}));
  });
  $("#board").innerHTML=items.map((x,i)=>`<button class="sb c-${pub(x.r)}${i%7===0?" wide":""}" data-open="${x.r.id}" style="animation-delay:${Math.min(i,14)*35}ms"><b>${esc(x.v)}</b><p>${esc(x.l)}</p><small>${esc(x.r.title)}</small></button>`).join("");
  initScale(); initTrends();
};

const MONEY=[
  [6.97,"Paid for PM-JAY patients already marked dead","pmjay"],[13.86,"Forest funds diverted in Uttarakhand","uk-campa"],[33.66,"Final cost of the Delhi CM residence renovation","delhi-cm-house"],
  [205.07,"Covid-19 funds Delhi left unused","delhi-health"],[2002.68,"Delhi excise policy revenue loss, estimated","delhi-excise"],[7287.29,"Dwarka Expressway civil cost approved by NHAI","bharatmala"],
  [68269,"Railways' passenger services loss, 2021-22","railways"],[176000,"2G presumptive loss, upper estimate","2g-2010"],[186000,"Coal blocks windfall gain, estimated","coal-2012"],
  [535000,"Bharatmala Phase-I approved cost","bharatmala"],[9051000,"Combined liabilities of all 28 states","state-finances"],
  [13464.22,"Grants to central autonomous bodies left unspent","cab-report-9-2026"],[54282.32,"Union grants with no utilisation certificate","union-accounts-2425"],
  [91070,"NHAI borrowing above the approved limit","bharatmala"],[258.92,"Money flagged in the PMKVY audit","pmkvy-2025"],
  [18.07,"Amphan housing grants paid twice","cag-wb-amphan"],[1121.33,"Bengal Covid funds left unspent","cag-wb-covid"],[2190.98,"GST works-contract deficiencies","cag-gst-20-2026"],[2606.62,"Gujarat GST cases deviating from rules","cag-gujarat-gst-2026"],[229000,"Bengal grants with no utilisation certificate","cag-wb-finances-2425"]
].sort((a,b)=>a[0]-b[0]);
const stage=$("#stage"), scRange=$("#scRange");
let sqs=[], fCur=0, fTarget=0, scRaf=0, lastIdx=-1, introDone=false, drag=null;
function initScale(){
  scRange.max=MONEY.length-1;
  stage.innerHTML=MONEY.map((m,i)=>`<div class="sq" style="z-index:${MONEY.length-i}"><div class="sq-lbl"><b>${esc(fmtCr(m[0]))}</b>${esc(m[1])}</div></div>`).join("");
  sqs=[...stage.children];
}
function layoutScale(f){
  if(!sqs.length||!stage.clientWidth) return;
  const W=stage.clientWidth,H=stage.clientHeight,S=Math.min(W,H)*.66,lo=Math.floor(f),hi=Math.min(MONEY.length-1,lo+1),t=f-lo;
  const vf=Math.exp(Math.log(MONEY[lo][0])*(1-t)+Math.log(MONEY[hi][0])*t), fi=Math.round(f);
  sqs.forEach((el,i)=>{const side=S*Math.sqrt(MONEY[i][0]/vf);el.style.width=el.style.height=side+"px";el.style.display=side<1.2?"none":"";el.classList.toggle("focus",i===fi);el.classList.toggle("small",i<fi);el.firstChild.style.display=(side>=96&&side<=Math.min(W,H)*1.02)?"":"none"});
  if(fi!==lastIdx){lastIdx=fi;scaleCard(fi)}
}
function scaleCard(i){
  const m=MONEY[i],p=MONEY[i-1],n=MONEY[i+1];
  $("#scaleCard").innerHTML=`<span class="eyebrow">${i+1} of ${MONEY.length}</span><div class="v" style="margin-top:10px">${esc(fmtCr(m[0]))}</div><p class="l">${esc(m[1])}</p>
    <p class="x">${p?`That is <b>${num(m[0]/p[0],1)}×</b> the previous amount.`:"The smallest figure here. Zoom out."}${n?`<br>Next: <b>${esc(fmtCr(n[0]))}</b>`:"<br>The largest figure here."}</p>
    <p style="margin-top:12px"><button class="linkbtn c-saffron" data-open="${m[2]}">Open the report →</button></p>`;
}
function animScale(){fCur+=(fTarget-fCur)*(reduced?1:.14);if(Math.abs(fTarget-fCur)<.002)fCur=fTarget;layoutScale(fCur);scRaf=fCur!==fTarget?requestAnimationFrame(animScale):0}
function setScale(f){fTarget=Math.max(0,Math.min(MONEY.length-1,f));scRange.value=fTarget;if(!scRaf)scRaf=requestAnimationFrame(animScale)}
function scaleIntro(){if(introDone||reduced)return;introDone=true;let k=0;const step=()=>{if(k<4&&!drag){setScale(++k);setTimeout(step,900)}};setTimeout(step,400)}
scRange.addEventListener("input",()=>setScale(+scRange.value));
scRange.addEventListener("change",()=>setScale(Math.round(+scRange.value)));
$("#scPrev").addEventListener("click",()=>setScale(Math.round(fTarget)-1));
$("#scNext").addEventListener("click",()=>setScale(Math.round(fTarget)+1));
stage.addEventListener("pointerdown",e=>{drag={x:e.clientX,f:fTarget};stage.setPointerCapture(e.pointerId)});
stage.addEventListener("pointermove",e=>{if(drag)setScale(drag.f+(e.clientX-drag.x)/100)});
const endDrag=()=>{if(drag){drag=null;setScale(Math.round(fTarget))}};
stage.addEventListener("pointerup",endDrag);stage.addEventListener("pointercancel",endDrag);
addEventListener("resize",()=>layoutScale(fCur));

const T=window.TRENDS; let curT=T[0];
function initTrends(){
  $("#indList").innerHTML=T.map(t=>`<button class="ind" data-ind="${t.id}" aria-pressed="${t===curT}"><b>${esc(t.name)}</b><span>${esc(t.short)}</span></button>`).join("");
  $("#indList").addEventListener("click",e=>{const b=e.target.closest("[data-ind]");if(!b)return;curT=T.find(t=>t.id===b.dataset.ind);$$("#indList .ind").forEach(x=>x.setAttribute("aria-pressed",x===b));drawTrend(true)});
}
function drawTrend(animate){
  const t=curT,svg=$("#plotSvg"),W=640,H=300,L=40,Rr=28,Tp=30,B=40;
  if(!svg.closest(".panel")||svg.closest("[hidden]")) return;
  const xs=t.pts.map(p=>p[0]),x0=Math.min(...xs),x1=Math.max(...xs);
  const X=v=>L+(v-x0)/(x1-x0)*(W-L-Rr),Y=v=>Tp+(1-(v-t.min)/(t.max-t.min))*(H-Tp-B),fmt=v=>num(v,2)+t.unit;
  const A=css("--sky"),S=css("--paper"),I3=css("--ink3"),RD=css("--red"); let g="";
  for(let i=0;i<=4;i++){const v=t.min+i*(t.max-t.min)/4,y=Y(v);g+=`<line class="svg-grid" x1="${L}" x2="${W-Rr}" y1="${y}" y2="${y}"/><text class="svg-axis" x="${L-8}" y="${y+4}" text-anchor="end">${num(v,1)}</text>`}
  if(t.ref!=null){const y=Y(t.ref);g+=`<line x1="${L}" x2="${W-Rr}" y1="${y}" y2="${y}" stroke="${RD}" stroke-width="1.5" stroke-dasharray="5 4"/><text x="${L+6}" y="${y-7}" style="fill:var(--red);font-family:var(--f-mono);font-size:11.5px">replacement level ${t.ref}</text>`}
  const P=t.pts.map(p=>[X(p[0]),Y(p[2])]),line=P.map((p,i)=>(i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1)).join(" "),area=line+` L${P[P.length-1][0]} ${H-B} L${P[0][0]} ${H-B} Z`;
  const lab=t.pts.map((p,i)=>(i&&X(p[0])-X(t.pts[i-1][0])<38)?"":`<text class="svg-axis" x="${X(p[0])}" y="${H-B+22}" text-anchor="${i===0?"start":i===t.pts.length-1?"end":"middle"}">${esc(p[1])}</text>`).join("");
  const last=P[P.length-1];
  svg.innerHTML=`<defs><linearGradient id="ga" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="${A}" stop-opacity=".35"/><stop offset="1" stop-color="${A}" stop-opacity="0"/></linearGradient></defs>${g}<path d="${area}" fill="url(#ga)"/>
    <path d="${line}" fill="none" stroke="${A}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" id="tLine"/>
    ${P.map((p,i)=>`<circle cx="${p[0]}" cy="${p[1]}" r="${i===P.length-1?7:4.5}" fill="${i===P.length-1?A:S}" stroke="${A}" stroke-width="2.5"/>`).join("")}${lab}
    <text x="${last[0]-12}" y="${last[1]-16}" text-anchor="end" style="fill:var(--ink);font-family:var(--f-display);font-weight:800;font-size:24px">${esc(fmt(t.pts[t.pts.length-1][2]))}</text>
    <line id="xh" x1="0" x2="0" y1="${Tp}" y2="${H-B}" stroke="${I3}" stroke-dasharray="3 3" opacity="0"/><circle id="xdot" r="8" fill="none" stroke="${A}" stroke-width="2" opacity="0"/>
    <rect x="${L-10}" y="0" width="${W-L-Rr+20}" height="${H}" fill="transparent" id="hit"/>`;
  const ln=$("#tLine"); if(animate&&!reduced){const len=ln.getTotalLength();ln.style.strokeDasharray=len;ln.style.strokeDashoffset=len;ln.getBoundingClientRect();ln.style.transition="stroke-dashoffset 1.3s cubic-bezier(.3,.7,.2,1)";ln.style.strokeDashoffset=0}
  $("#plotTitle").textContent=t.name; $("#plotNote").textContent=t.note;
  const d=t.pts[t.pts.length-1][2]-t.pts[0][2],good=t.good?((t.good==="up")===(d>0)):null,dEl=$("#plotDelta");
  dEl.className="delta "+(good==null?"flat":good?"good":"bad"); dEl.textContent=`${d>0?"▲":"▼"} ${num(Math.abs(d),2)}${t.unit==="%"?" pts":""} since ${t.pts[0][1].replace("*","")}`;
  $("#plotFoot").innerHTML=`<span>Source: ${esc(t.src)}</span><button class="linkbtn c-teal" data-open="${t.report}">Open the report →</button>`;
  const tip=$("#plotTip"),hit=$("#hit"),xh=$("#xh"),xd=$("#xdot");
  const move=ev=>{const rect=svg.getBoundingClientRect(),sx=W/rect.width,cx=((ev.touches?ev.touches[0].clientX:ev.clientX)-rect.left)*sx;let bi=0,bd=1e9;P.forEach((p,i)=>{const dd=Math.abs(p[0]-cx);if(dd<bd){bd=dd;bi=i}});const p=P[bi];xh.setAttribute("x1",p[0]);xh.setAttribute("x2",p[0]);xh.setAttribute("opacity",.7);xd.setAttribute("cx",p[0]);xd.setAttribute("cy",p[1]);xd.setAttribute("opacity",1);const pr=$("#plot").getBoundingClientRect();tip.innerHTML=`${esc(t.pts[bi][1])} · <b>${esc(fmt(t.pts[bi][2]))}</b>`;tip.style.left=(rect.left-pr.left+p[0]/sx)+"px";tip.style.top=(rect.top-pr.top+p[1]/sx)+"px";tip.classList.add("on")};
  const leave=()=>{tip.classList.remove("on");xh.setAttribute("opacity",0);xd.setAttribute("opacity",0)};
  hit.addEventListener("mousemove",move);hit.addEventListener("touchstart",move,{passive:true});hit.addEventListener("touchmove",move,{passive:true});hit.addEventListener("mouseleave",leave);hit.style.cursor="pointer";hit.addEventListener("click",()=>openReport(t.report));hit.addEventListener("touchend",()=>setTimeout(leave,1500));
}

/* ---------- charts (shared) ---------- */
const fv=v=>Math.abs(v)<100?num(v,2):num(v,0);
function barChart(c){const max=Math.max(...c.bars.map(b=>b.v),c.ref||0),w=v=>(v/max*76).toFixed(2);return `<div class="chart"><h4>${esc(c.title)}</h4><p class="sub">${esc(c.sub)}</p><div class="bars">${c.bars.map(b=>`<div class="bar ${b.c||""}"><span class="bl">${esc(b.l)}</span><div class="track"><div class="fill" data-w="${w(b.v)}"></div><span class="v">${num(b.v)}${esc(c.unit)}</span>${c.ref?`<i class="refmark" style="left:${w(c.ref)}%"></i>`:""}</div></div>`).join("")}</div>${c.ref?`<p class="refnote">Dashed line: ${num(c.ref)}${esc(c.unit)}</p>`:""}</div>`}
const chartWrap=(c,body)=>`<div class="chart"><h4>${esc(c.title)}</h4><p class="sub">${esc(c.unit||"")}</p>${body}${c.note?`<p class="cnote">${esc(c.note)}</p>`:""}</div>`;
function chartHTML(c){
  if(c.bars) return barChart(c);
  const d=c.data||[];
  if(c.type==="bars"){const mx=c.max||Math.max(...d.map(x=>x[1]));const lk=x=>typeof x[2]==="string"?(x[2].startsWith("topic:")?` data-topic-go="${esc(x[2].slice(6))}" role="button" tabindex="0"`:` data-open="${esc(x[2])}" role="button" tabindex="0"`):"";return chartWrap(c,`<div class="bars">${d.map((x,i)=>`<div class="bar ${i===0?"hi":""}"${lk(x)}><span class="bl">${esc(x[0])}</span><div class="track"><div class="fill" data-w="${(x[1]/mx*76).toFixed(2)}"></div><span class="v">${fv(x[1])}</span></div></div>`).join("")}</div>`)}
  if(c.type==="pairs"){const mx=c.max||Math.max(...d.flatMap(x=>[x[1],x[2]])),L=c.legend||["",""];return chartWrap(c,`<div class="clegend"><span><i class="ka"></i>${esc(L[0])}</span><span><i class="kb"></i>${esc(L[1])}</span></div>${d.map(x=>`<div class="pair"><div class="pl"><span>${esc(x[0])}</span><span class="v">${fv(x[1])} → ${fv(x[2])}</span></div><div class="pt"><div class="gf a" data-w="${(x[1]/mx*100).toFixed(2)}"></div></div><div class="pt"><div class="gf b" data-w="${(x[2]/mx*100).toFixed(2)}"></div></div></div>`).join("")}`)}
  if(c.type==="funnel"){const mx=d[0][1];return chartWrap(c,`<div class="funnel">${d.map((x,i)=>`${i?`<div class="fstep">↓ ${Math.round(x[1]/d[i-1][1]*100)}% carried through</div>`:""}<div class="fbar" data-w="${Math.max(18,x[1]/mx*100).toFixed(2)}" style="opacity:${(1-i*.2).toFixed(2)}">${fv(x[1])}</div><div class="flabel">${esc(x[0])}</div>`).join("")}</div>`)}
  if(c.type==="split"){const tot=d.reduce((a,x)=>a+x[1],0),col=["var(--c)","var(--red)","var(--saffron)","var(--ink3)"];return chartWrap(c,`<div class="splitbar" role="img" aria-label="${esc(d.map(x=>x[0]+": "+fv(x[1])).join(", "))}">${d.map((x,i)=>`<span style="flex:${x[1]} 1 0;background:${col[i%4]}"></span>`).join("")}</div><div class="slegend">${d.map((x,i)=>`<div><i style="background:${col[i%4]}"></i><span>${esc(x[0])}</span><span class="mono">${fv(x[1])}</span><span class="mono">${num(x[1]/tot*100,1)}%</span></div>`).join("")}</div>`)}
  if(c.type==="diverge"){const mx=Math.max(...d.map(x=>Math.abs(x[1])));return chartWrap(c,d.map(x=>`<div class="dv"><span class="bl">${esc(x[0])}</span><div class="dtrack"><div class="dneg"><div class="gf" data-w="${x[1]<0?(-x[1]/mx*100).toFixed(2):0}"></div></div><div class="dpos"><div class="gf" data-w="${x[1]>0?(x[1]/mx*100).toFixed(2):0}"></div></div></div><span class="v">${x[1]>0?"+":""}${fv(x[1])}</span></div>`).join(""))}
  return "";
}

/* ---------- INSIGHTS ---------- */
INIT.insights=()=>{
  const cols=["red","saffron","violet","teal","pink"];
  $("#insList").innerHTML=(SITE.insights||[]).map((x,i)=>`<article class="ins c-${cols[i%5]}" id="ins-${esc(x.id)}"><div><div class="no">Pattern ${i+1} of ${(SITE.insights||[]).length}</div><h3>${esc(x.title)}</h3><p class="lede">${esc(x.lede)}</p></div><div class="ev">${x.evidence.map(e=>{const r=byId(e[0]);return r?`<button data-open="${r.id}">${badge(r)}<span>${escH(e[1])}</span></button>`:""}).join("")}</div></article>`).join("");
  const cagF=R.filter(r=>r.flagged!=null).sort((a,b)=>b.flagged-a.flagged), sev={};
  R.forEach(r=>(r.themes||[]).forEach(t=>{if(t.sev==="high")sev[r.sector]=(sev[r.sector]||0)+t.items.length}));
  $("#insCharts").innerHTML=`<div class="c-red">${chartHTML({title:"Money flagged by each CAG audit",type:"bars",unit:"₹ crore",data:cagF.map(r=>[r.title,r.flagged,r.id])})}</div><div class="c-violet">${chartHTML({title:"Serious findings by sector",type:"bars",unit:"findings in 'Serious' themes",data:Object.entries(sev).sort((a,b)=>b[1]-a[1]).map(([k,v])=>[k,v,"topic:"+(SECTOR_TOPIC[k]||k)])})}</div>`;
  const wc=["red","saffron","violet"];
  $("#whyGrid").innerHTML=(SITE.whyUnread||[]).map((w,i)=>`<div class="why c-${wc[i%3]}"><b>${esc(w.v)}</b><p>${esc(w.l)}</p>${w.src?`<a href="${esc(w.src)}" target="_blank" rel="noopener">Source ↗</a>`:`<span>General observation</span>`}</div>`).join("");
};

/* ---------- STATES ---------- */
const ST=window.STATES,SDG=window.SDG_SCORES,SF=window.STATE_FACTS;
let mapMode="sdg", selState="UP";
const MODEC={sdg:"teal",fhi:"violet",facts:"saffron"};
const factsFor=code=>{const name=ST.find(s=>s[0]===code)[1],list=[...(SF[code]||[])],ids=new Set(list.map(f=>f[1]));R.filter(r=>r.state===name&&!ids.has(r.id)).forEach(r=>list.push([r.hook,r.id]));return list};
INIT.states=()=>{
  $("#tilesMap").innerHTML=ST.map(([c,n,col,row])=>`<button class="st" data-st="${c}" style="grid-column:${col+1};grid-row:${row+1}" aria-label="${esc(n)}" title="${esc(n)}">${c}</button>`).join("");
  $("#tilesMap").addEventListener("click",e=>{const b=e.target.closest("[data-st]");if(b)selectState(b.dataset.st)});
  $("#mapSeg").addEventListener("click",e=>{const b=e.target.closest("[data-mode]");if(!b)return;mapMode=b.dataset.mode;$$("#mapSeg button").forEach(x=>x.setAttribute("aria-pressed",x===b));paintTiles();renderStateCard()});
  paintTiles(); renderStateCard();
};
function paintTiles(){
  const mc=`var(--${MODEC[mapMode]})`;
  $("#mapSeg").className=`seg c-${MODEC[mapMode]}`;
  $$("#tilesMap .st").forEach(b=>{
    const c=b.dataset.st,f=factsFor(c).length;let pct=0;
    if(mapMode==="sdg"){if(SDG[c]!=null)pct=20+(SDG[c]-55)/(80-55)*80}else if(mapMode==="fhi"){if(FHI[c]!=null)pct=16+FHI[c]/75*84}else if(f)pct=Math.min(100,24+f*22);
    b.style.background=pct?`color-mix(in srgb, ${mc} ${pct.toFixed(0)}%, var(--sunk))`:"";b.style.setProperty("--h",pct?Math.round(5+pct/100*16)+"px":"0px");b.style.setProperty("--side",pct?`color-mix(in srgb, ${mc} ${Math.min(100,pct+20).toFixed(0)}%, #0b1020 28%)`:"transparent");
    b.classList.toggle("has",pct>0);b.classList.toggle("dark",pct>62);
    b.innerHTML=c+(mapMode!=="facts"&&f?`<span class="dot" aria-hidden="true"></span>`:"");
    b.setAttribute("aria-pressed",c===selState);
  });
  const lg=$("#legend"); lg.style.setProperty("--m",mc);
  lg.innerHTML=mapMode==="fhi"?`<span>12.4</span><span class="grad"></span><span>73.1</span><span>Fiscal Health Index 2026</span><span class="na"></span><span>not scored</span>`
    :mapMode==="sdg"?`<span>57</span><span class="grad"></span><span>79</span><span>SDG India Index</span><span class="na"></span><span>not named</span>`
    :`<span>1</span><span class="grad"></span><span>4+</span><span>findings here</span><span class="na"></span><span>none yet</span>`;
}
function selectState(c){selState=c;if(inited.states){paintTiles();renderStateCard()}}
function renderStateCard(){
  const s=ST.find(x=>x[0]===selState),f=factsFor(selState),sc=mapMode==="fhi"?FHI[selState]:SDG[selState];
  const lbl=mapMode==="fhi"?"Fiscal Health Index 2026":"SDG India Index score";
  $("#statecard").className=`statecard c-${MODEC[mapMode]==="saffron"?"teal":MODEC[mapMode]}`;
  $("#statecard").innerHTML=`<span class="eyebrow">State</span><h3 style="margin-top:6px">${esc(s[1])}</h3>
    <div class="score">${sc!=null?`<b>${sc}</b><span>${lbl}</span>`:`<span>No ${lbl.toLowerCase()} named in these reports</span>`}</div>
    ${f.length?`<ul class="facts">${f.map((x,i)=>`<li style="animation-delay:${i*60}ms"><button class="fact" data-open="${x[1]}"><span>${escH(x[0])}</span><span class="fa">${ARROW}</span></button></li>`).join("")}</ul>`:`<p style="margin-top:16px;color:var(--ink2)">Nothing for ${esc(s[1])} yet. Every state's CAG reports are at <a href="https://cag.gov.in/en/audit-report" target="_blank" rel="noopener">cag.gov.in</a>.</p>`}`;
}

/* ---------- PLAY: guess, quiz, cards, mains ---------- */
const Q=window.QUIZ, game={i:0,phase:"guess",g:null,scores:[]};
const fmtQ=(q,v)=>`${q.pre}${num(v)}${q.unit}`;
const pts=(q,g)=>Math.round(100*Math.max(0,1-2*Math.abs(g-q.ans)/(q.max-q.min)));
function renderGame(){
  const gc=$("#gcard"),q=Q[game.i];
  if(game.phase==="done"){const tot=game.scores.reduce((a,b)=>a+b,0);gc.innerHTML=`<span class="eyebrow">Finished</span><p class="gq">You scored ${tot} of ${Q.length*100}.</p><p class="verdict">${tot>Q.length*70?"Sharp. You read these reports closely.":tot>Q.length*40?"Not bad. Some of these numbers are genuinely shocking.":"These numbers surprise almost everyone. That's why the reports matter."}</p><div class="grow"><button class="btn primary c-pink" id="gRestart">Play again</button><button class="btn" data-view="reports">Browse reports</button></div>`}
  else if(game.phase==="guess"){const mid=game.g??Math.round(((q.min+q.max)/2)/q.step)*q.step;game.g=mid;gc.innerHTML=`<span class="eyebrow">Question ${game.i+1} of ${Q.length}</span><p class="gq">${esc(q.q)}</p><div class="gnum" id="gNum">${esc(fmtQ(q,mid))}</div><div><label class="sr" for="gRange">Your guess</label><input class="grange" type="range" id="gRange" min="${q.min}" max="${q.max}" step="${q.step}" value="${mid}"><div class="gscale"><span>${esc(fmtQ(q,q.min))}</span><span>${esc(fmtQ(q,q.max))}</span></div></div><div class="grow"><button class="btn primary c-pink" id="gLock">Lock in my guess</button><button class="btn" id="gSkip">Skip</button></div>`;$("#gRange").addEventListener("input",e=>{game.g=+e.target.value;$("#gNum").textContent=fmtQ(q,game.g)})}
  else{const p=v=>((v-q.min)/(q.max-q.min)*100).toFixed(2),g=game.g,sc=game.scores[game.i],off=Math.abs(g-q.ans);
    gc.innerHTML=`<span class="eyebrow">Question ${game.i+1} of ${Q.length}</span><p class="gq">${esc(q.q)}</p><div class="gnum" style="color:var(--teal)" id="gAnsNum">${esc(fmtQ(q,q.ans))}</div>
      <div class="rtrack"><div class="rail"></div><div class="gapbar" id="gGap" style="left:${p(g)}%;width:0"></div><div class="pin you" style="left:${p(g)}%">You: ${esc(fmtQ(q,g))}<i></i></div><div class="pin ans" id="gAns" style="left:${p(g)}%">Answer<i></i></div></div>
      <p class="verdict">${off<(q.max-q.min)*.03?"<b>Spot on.</b> ":`You were <b>${esc(q.pre+num(off)+q.unit)}</b> off. `}${esc(q.why)} <b>+${sc}</b></p>
      <div class="grow"><button class="btn primary c-pink" id="gNext">${game.i<Q.length-1?"Next →":"See my score"}</button><button class="btn" data-open="${q.report}">Read the report</button></div>`;
    countUp($("#gAnsNum"),fmtQ(q,q.ans),900);
    requestAnimationFrame(()=>requestAnimationFrame(()=>{const a=$("#gAns"),gp=$("#gGap");if(!a)return;a.style.left=p(q.ans)+"%";gp.style.left=Math.min(p(g),p(q.ans))+"%";gp.style.width=Math.abs(p(g)-p(q.ans))+"%"}))}
  const tot=game.scores.reduce((a,b)=>a+(b||0),0);
  $("#gside").innerHTML=`<span class="eyebrow">Your score</span><div class="score">${tot}</div><p>out of ${Q.length*100}. Closer guesses earn more.</p><div class="gdots">${Q.map((_,j)=>`<span class="${j<game.scores.length?"done":""} ${j===game.i&&game.phase!=="done"?"cur":""}">${j<game.scores.length?game.scores[j]:j+1}</span>`).join("")}</div><button class="btn" id="gReset">Start over</button>`;
}
$("#gcard").addEventListener("click",e=>{const id=e.target.id;
  if(id==="gLock"){game.scores[game.i]=pts(Q[game.i],game.g);game.phase="reveal";renderGame()}
  else if(id==="gSkip"){game.scores[game.i]=0;game.g=Q[game.i].min;game.phase="reveal";renderGame()}
  else if(id==="gNext"){if(game.i<Q.length-1){game.i++;game.phase="guess";game.g=null}else game.phase="done";renderGame()}
  else if(id==="gRestart"){Object.assign(game,{i:0,phase:"guess",g:null,scores:[]});renderGame()}});
$("#gside").addEventListener("click",e=>{if(e.target.id==="gReset"){Object.assign(game,{i:0,phase:"guess",g:null,scores:[]});renderGame()}});

const quizzes={};
function qzHead(st){const right=st.qs.filter((q,i)=>st.ans[i]===q.a).length;return `<div class="qz-dots" aria-hidden="true">${st.qs.map((q,i)=>`<i class="${st.ans[i]==null?"":st.ans[i]===q.a?"ok":"no"}"></i>`).join("")}</div><b class="mono">${right}/${st.qs.length}</b>${st.ans.some(a=>a!=null)?`<button class="linkbtn c-pink" data-qreset>Reset</button>`:""}`}
function qzItem(st,i,src){const q=st.qs[i],an=st.ans[i],r=q.rid&&byId(q.rid);return `<p class="qz-q"><span class="mono">${i+1}.</span> ${esc(q.q)}</p><div class="qz-opts">${q.o.map((o,j)=>`<button class="qz-o ${an!=null?(j===q.a?"right":j===an?"wrong":""):""}" data-oi="${j}"${an!=null?" disabled":""}><span class="mono">${"ABCD"[j]}</span>${esc(o)}</button>`).join("")}</div>${an!=null?`<p class="qz-w"><b>${an===q.a?"Correct.":"Not quite."}</b> ${escH(q.w)}</p>`:""}${src&&r?`<button class="linkbtn qz-src c-${pub(r)}" data-open="${r.id}">From: ${esc(r.title)} →</button>`:""}`}
function quizHTML(id,qs,src){const st=quizzes[id]||(quizzes[id]={qs,ans:[]});st.qs=qs;return `<div class="quiz" data-set="${esc(id)}" data-src="${src?1:0}"><div class="qz-head">${qzHead(st)}</div>${qs.map((q,i)=>`<div class="qz" data-qi="${i}">${qzItem(st,i,src)}</div>`).join("")}</div>`}
document.addEventListener("click",e=>{
  const o=e.target.closest(".qz-o");if(o&&!o.disabled){const qz=o.closest(".quiz"),st=quizzes[qz.dataset.set],box=o.closest(".qz"),qi=+box.dataset.qi;st.ans[qi]=+o.dataset.oi;box.innerHTML=qzItem(st,qi,qz.dataset.src==="1");qz.querySelector(".qz-head").innerHTML=qzHead(st);if(st.qs.every((_,k)=>st.ans[k]!=null)){const right=st.qs.filter((q,k)=>st.ans[k]===q.a).length;toast(right===st.qs.length?"Perfect score!":`${right} of ${st.qs.length} correct`)}return}
  const rs=e.target.closest("[data-qreset]");if(rs){const qz=rs.closest(".quiz"),st=quizzes[qz.dataset.set];st.ans=[];qz.outerHTML=quizHTML(qz.dataset.set,st.qs,qz.dataset.src==="1");return}
  const cp=e.target.closest("[data-copy]");if(cp)copyText(cp.dataset.copy,cp.dataset.copyOk||"Copied");
});
const EXR=R.filter(r=>r.exam).sort((a,b)=>when(b)-when(a)); let examRep="all";
const blankLine=l=>{const m=l.match(/\d[\d,.]*/);if(m)return l.replace(m[0],"____");const k=l.search(/[:;]/);return (k>0?l.slice(0,k):l)+"?"};
function renderQuizHub(){const list=examRep==="all"?EXR:EXR.filter(r=>r.id===examRep);$("#examBody").innerHTML=quizHTML("hub-"+examRep,list.flatMap(r=>r.exam.quiz.map(q=>Object.assign({},q,{rid:r.id}))),true)}
INIT.play=()=>{
  renderGame();
  $("#examLine").textContent=`${quizN} MCQs from ${EXR.length} reports`;
  $("#examReport").innerHTML=`<option value="all">All reports</option>`+EXR.map(r=>`<option value="${r.id}">${esc(r.title)}</option>`).join("");
  $("#examReport").addEventListener("change",e=>{examRep=e.target.value;renderQuizHub()});
  renderQuizHub();
  $("#flashes").innerHTML=EXR.flatMap(r=>r.exam.prelims.map(p=>`<button class="flash c-${pub(r)}" aria-pressed="false" aria-label="Flashcard: ${esc(blankLine(p))}"><span class="fc-in"><span class="fc-front"><small>${esc(r.title)}</small><span class="fc-t">${esc(blankLine(p))}</span></span><span class="fc-back"><small>${esc(r.title)}</small><span class="fc-t">${esc(p)}</span></span></span></button>`)).join("");
  $("#flashes").addEventListener("click",e=>{const f=e.target.closest(".flash");if(f){f.classList.toggle("flipped");f.setAttribute("aria-pressed",f.classList.contains("flipped"))}});
  $("#mainsList").innerHTML=EXR.map(r=>`<div class="mainsq c-${pub(r)}">${badge(r)}<p>${esc(r.exam.mains)}</p><div class="row-b"><button class="btn sm" data-copy="${esc(r.exam.mains)}" data-copy-ok="Question copied">Copy question</button><button class="btn sm" data-open="${r.id}">Read the report →</button></div></div>`).join("");
};

/* ---------- LEARN ---------- */
const PATH=[
  {t:"Audit fieldwork",who:"CAG teams and Accountants General",d:"Auditors test-check files, accounts and sites, usually for a sample of districts or projects.",eg:"<b>Example:</b> 2.7 lakh tap connections surveyed in Tamil Nadu."},
  {t:"Department replies",who:"The ministry audited",d:"Draft findings go to the department, which can explain or contest each point. Weak explanations stay in.",eg:"<b>Example:</b> Tamil Nadu blamed lack of space for outdoor taps. The CAG didn't accept it."},
  {t:"Report signed",who:"CAG → President or Governor (Art. 151)",d:"The CAG signs and submits the report. It cannot publish on its own.",eg:"<b>Note:</b> the government must place it before the legislature."},
  {t:"Tabled",who:"Parliament or state Assembly",d:"Laid before the House. Only now does it become public.",eg:"<b>Example:</b> West Bengal tabled 28 pending reports in one day in July 2026."},
  {t:"PAC examines",who:"Public Accounts Committee",d:"MPs or MLAs question officials and recommend action.",eg:"<b>Example:</b> the Delhi excise report went to the Assembly's PAC."},
  {t:"Action taken",who:"The government",d:"Ministries file Action Taken Notes. Some findings reach courts or change laws.",eg:"<b>Example:</b> the coal audit led to a 2014 Supreme Court ruling and the 2015 auction law."}
];
let pi=0,pathT=0,pathAuto=true;
function renderPath(){$$("#pathSteps .pstep").forEach((b,i)=>{b.setAttribute("aria-selected",i===pi);b.classList.toggle("done",i<pi)});const p=PATH[pi];$("#pathPanel").innerHTML=`<div class="pbar" style="width:${(pi+1)/PATH.length*100}%"></div><div class="panel" style="display:flex;flex-direction:column;gap:14px;flex:1"><span class="who">Step ${pi+1} · ${esc(p.who)}</span><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p><p class="eg">${p.eg}</p><div class="path-ctrl"><button class="btn sm" data-pstep="-1"${pi===0?" disabled":""}>← Back</button><button class="btn sm fill" data-pstep="1"${pi===PATH.length-1?" disabled":""}>Next step →</button></div></div>`}
function goPath(i,user){pi=Math.max(0,Math.min(PATH.length-1,i));if(user){pathAuto=false;clearInterval(pathT)}renderPath()}
let glLetter="";
function renderLetters(){const have=new Set(Object.values(G).map(g=>g.t[0].toUpperCase()));$("#glLetters").innerHTML=`<button class="all" data-letter="" aria-pressed="${glLetter===""}">All</button>`+"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(c=>`<button data-letter="${c}" aria-pressed="${glLetter===c}"${have.has(c)?"":" disabled"}>${c}</button>`).join("")}
function renderGlossary(q){q=(q||"").toLowerCase();const items=Object.entries(G).filter(([k,g])=>(!q||(g.t+" "+(g.full||"")+" "+g.d).toLowerCase().includes(q))&&(!glLetter||g.t[0].toUpperCase()===glLetter)).sort((a,b)=>a[1].t.localeCompare(b[1].t));$("#glossaryGrid").innerHTML=items.length?items.map(([k,g])=>`<div class="gl" id="term-${k}" data-search="${esc(g.t)}" role="button" tabindex="0" title="Find reports that use this term"><h4>${esc(g.t)}${g.full?`<small>${esc(g.full)}</small>`:""}</h4><p>${esc(g.d)}</p></div>`).join(""):`<div class="empty">No term matches “${esc(q)}”.</div>`;$("#glCount").textContent=`${items.length} terms`}
INIT.learn=()=>{
  const L=SITE.learn||{}, ac=["red","saffron","violet","teal"];
  $("#learnCag").innerHTML=(L.cag||[]).map((a,i)=>`<div class="art c-${ac[i%4]}"><b>${esc(a[0])}</b><p>${esc(a[1])}</p></div>`).join("");
  $("#learnTypes").innerHTML=(L.types||[]).map((t,i)=>{const r=byId(t[2]);return `<button class="atype c-${["sky","red","pink"][i%3]}"${r?` data-open="${r.id}"`:""}><b>${esc(t[0])}</b><p>${esc(t[1])}</p>${r?`<small>Example: ${esc(r.title)} →</small>`:""}</button>`}).join("");
  $("#learnNiti").innerHTML=(L.niti||[]).map(n=>`<div><dt>${esc(n[0])}</dt><dd>${esc(n[1])}</dd></div>`).join("");
  $("#learnTips").innerHTML=(L.tips||[]).map(t=>`<li>${esc(t)}</li>`).join("");
  $("#pathSteps").innerHTML=PATH.map((p,i)=>`<button class="pstep" role="tab" data-ps="${i}" aria-selected="${i===0}"><span class="num">${i+1}</span><span class="lbl">${esc(p.t)}</span></button>`).join("");
  $("#pathSteps").addEventListener("click",e=>{const b=e.target.closest("[data-ps]");if(b)goPath(+b.dataset.ps,true)});
  $("#pathPanel").addEventListener("click",e=>{const b=e.target.closest("[data-pstep]");if(b)goPath(pi+ +b.dataset.pstep,true)});
  renderPath();
  $("#timeline").innerHTML=window.TIMELINE.map(t=>`<div class="tl-item"><div class="tl-year">${t.y}</div><button class="tl-card" data-open="${t.id}"><h4>${esc(t.t)}</h4><p>${esc(t.d)}</p><p class="after"><b>Then:</b> ${esc(t.a)}</p></button></div>`).join("");
  renderLetters(); renderGlossary("");
  $("#glq").addEventListener("input",e=>renderGlossary(e.target.value));
  $("#glLetters").addEventListener("click",e=>{const b=e.target.closest("[data-letter]");if(!b||b.disabled)return;glLetter=b.dataset.letter;renderLetters();renderGlossary($("#glq").value)});
};
SUBHOOK.learn=t=>{clearInterval(pathT);if(t==="journey"&&pathAuto&&!reduced)pathT=setInterval(()=>{if(pi>=PATH.length-1){clearInterval(pathT);pathAuto=false;return}goPath(pi+1,false)},4200)};
function flashTerm(k){show("learn",{sub:["learn","glossary"],instant:true});glLetter="";$("#glq").value="";renderLetters();renderGlossary("");const el=document.getElementById("term-"+k);if(!el)return;el.scrollIntoView({behavior:reduced?"auto":"smooth",block:"center"});el.classList.add("flash");setTimeout(()=>el.classList.remove("flash"),2200)}

/* ---------- READER ---------- */
const reader=$("#reader"),rScroll=$("#rScroll"),rContent=$("#rContent");
let cur=null,level=store.get("saaransh-level","simple"),lastFocus=null,rTab="overview";
window.saaranshLevel=v=>{level=v;store.set("saaransh-level",v);if(cur&&$("#sumProse")){rContent.querySelectorAll("[data-level]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.level===effLevel(cur)));$("#sumProse").innerHTML=summaryHTML(cur)}};
const sevLabel=(s,r)=>s==="high"?"Serious":s==="med"?"Notable":(r.body==="CAG"?"Minor":"Context");
const GST={good:"Healthy",ok:"Fair",warn:"Watch",bad:"Stressed"};
function langOpts(r){if(window.SAARANSH_HI){const o=[["simple","सरल"]];if(r.detailed)o.push(["detailed","विस्तृत"]);return o}const o=[["simple",r.detailed?"Simple":"English"]];if(r.detailed)o.push(["detailed","Detailed"]);if(r.hi)o.push(["hi","हिंदी"]);return o}
const effLevel=r=>langOpts(r).some(o=>o[0]===level)?level:"simple";
function summaryHTML(r){const l=effLevel(r);if(l==="hi")return `<div class="prose deva" lang="hi"><p>${escH(r.hi)}</p></div>`;return `<div class="prose">${(l==="detailed"?r.detailed:r.simple).map(p=>`<p>${richH(p)}</p>`).join("")}</div>`}
function levelSeg(r){const o=langOpts(r);if(o.length<2)return "";const l=effLevel(r);return `<div class="level" role="group" aria-label="Language and depth">${o.map(x=>`<button data-level="${x[0]}" aria-pressed="${x[0]===l}"${x[0]==="hi"?' lang="hi" class="deva"':""}>${x[1]}</button>`).join("")}</div>`}
function openReport(id,tab){
  const r=byId(id); if(!r) return;
  closePalette(); hidePop();
  if(!reader.classList.contains("open")) lastFocus=document.activeElement;
  cur=r; rTab=tab||"overview";
  const ord=ORDER(),i=ord.findIndex(x=>x.id===r.id),prev=ord[(i-1+ord.length)%ord.length],next=ord[(i+1)%ord.length];
  const nFind=(r.findings||[]).length+(r.themes||[]).reduce((a,t)=>a+t.items.length,0);
  const tabs=[["overview","Overview"],["findings","Findings",nFind],["numbers","Numbers"],["response","Response & next"]];
  if(r.exam) tabs.push(["exam","Exam corner"]); tabs.push(["sources","Sources"]);
  const rel=(r.related||[]).map(byId).filter(Boolean);
  const isNiti=r.body==="NITI Aayog";
  const P={};
  const pts=Array.isArray(r.tldr)?r.tldr:(r.tldrList||null);
  P.overview=`${pts?`<ol class="keypts">${pts.map(t=>`<li data-rtab-go="findings" role="button" tabindex="0" title="See the findings"><span>${escH(t)}</span></li>`).join("")}</ol>`:""}
    ${!Array.isArray(r.tldr)&&r.tldrList?`<p class="quote">${esc(r.tldr)}</p>`:""}
    <div class="sumhead"><span class="eyebrow">Summary</span>${levelSeg(r)}</div><div id="sumProse">${summaryHTML(r)}</div>
    <div class="ctx"><details><summary>What it is</summary><p>${rich(r.background)}</p></details>${r.why?`<details><summary>Why it matters</summary><p>${rich(r.why)}</p></details>`:""}<details><summary>${r.why?(isNiti?"How it was studied":"How it was audited"):"What was checked"}</summary><p>${rich(r.checked)}</p></details></div>`;
  P.findings=`${(r.findings||[]).length?`<ol class="findings">${r.findings.map(f=>`<li><span>${richH(f)}</span></li>`).join("")}</ol>`:""}
    ${r.themes?`<div class="th-head"><div class="sevkey"><span class="sev sev-high">Serious</span><span class="sev sev-med">Notable</span><span class="sev sev-low">${r.body==="CAG"?"Minor":"Context"}</span></div><button class="btn sm" id="thToggle">Expand all</button></div>
      <div class="themes">${r.themes.map((t,k)=>`<details class="theme sev-${t.sev}"${k<2?" open":""}><summary><span class="sev sev-${t.sev}">${sevLabel(t.sev,r)}</span><b>${esc(t.name)}</b><span class="cnt">${t.items.length}</span></summary><ul>${t.items.map(it=>`<li><div><p>${escH(it.t)}</p>${it.ref?`<small>${esc(it.ref)}</small>`:""}</div>${it.amt?`<b class="amt">${esc(it.amt)}</b>`:""}</li>`).join("")}</ul></details>`).join("")}</div>`:""}`;
  P.numbers=`<div class="stats">${r.stats.map(s=>`<div class="stat ${s.loss?"loss":""}"><b>${esc(s.v)}</b><span>${esc(s.l)}</span></div>`).join("")}</div>
    ${r.flaggedNote?`<p class="fnote"><b>About the flagged amount.</b> ${esc(r.flaggedNote)}</p>`:""}
    ${r.charts.length?`<div class="charts">${r.charts.map(chartHTML).join("")}</div>`:""}
    ${r.groups?`<h3 class="sh">How the states are grouped</h3><div class="groups">${r.groups.map(g=>`<div class="grp ${g[1]}"><b>${esc(g[0])}</b> <span class="notep">· ${GST[g[1]]}</span><div class="chips">${g[2].map(x=>`<button data-stgo="${esc(x)}" title="Open ${esc(x)} on the map">${esc(x)}</button>`).join("")}</div></div>`).join("")}</div>${r.groupsNote?`<p class="notep">${esc(r.groupsNote)}</p>`:""}`:""}`;
  P.response=`${r.other?`<div class="blk"><span class="who">${esc(r.other.who)}</span><p class="quote">${richH(r.other.text)}</p></div>`:""}
    ${r.response||r.next?`<div class="blk"><span class="who">What happened next</span>${r.next?`<p>${richH(r.next)}</p>`:""}${r.response?`<ul class="resp">${r.response.map(x=>`<li><span>${escH(x)}</span></li>`).join("")}</ul>`:""}</div>`:""}
    ${r.recs?`<div class="blk"><span class="who">${r.recs.length} recommendations</span><ol class="recs">${r.recs.map(x=>`<li><span>${escH(x)}</span></li>`).join("")}</ol>${r.recsNote?`<p class="notep">${esc(r.recsNote)}</p>`:""}</div>`:""}
    ${r.timeline?`<div class="blk"><span class="who">Timeline</span><ol class="vtl">${r.timeline.map(t=>`<li><b>${esc(t[0])}</b><span>${esc(t[1])}</span></li>`).join("")}</ol></div>`:""}
    ${r.act?`<div class="blk"><span class="who">What it means for you</span><div class="actlist">${r.act.map(a=>`<div>${ARROW}<p>${rich(a)}</p></div>`).join("")}</div></div>`:""}`;
  if(r.exam) P.exam=`<div class="mains"><span class="eyebrow">Mains practice question</span><p>${esc(r.exam.mains)}</p><button class="btn sm" data-copy="${esc(r.exam.mains)}" data-copy-ok="Question copied">Copy question</button></div>
    <h3 class="sh">Prelims pointers</h3><ul class="prelims">${r.exam.prelims.map(x=>`<li><span>${escH(x)}</span></li>`).join("")}</ul>
    <h3 class="sh">Test yourself</h3>${quizHTML("r-"+r.id,r.exam.quiz,false)}`;
  P.sources=`<ul class="srclist">${(r.srcs||[[r.src.label,r.src.url,"official"]]).map(x=>`<li><span class="kind ${esc(x[2])}">${esc(x[2])}</span><a href="${esc(x[1])}" target="_blank" rel="noopener">${esc(x[0])} ↗</a></li>`).join("")}</ul>
    <p class="notep">Read the original before quoting a figure.</p>
    ${r.terms&&r.terms.length?`<h3 class="sh">Terms used</h3><dl class="terms">${r.terms.map(t=>{const g=G[termKey[t.toLowerCase()]];return g?`<div><dt>${esc(g.t)}</dt><dd>${esc(g.d)}</dd></div>`:""}).join("")}</dl>`:""}
    ${rel.length?`<h3 class="sh">Related reports</h3><div>${rel.map(x=>cardHTML(x)).join("")}</div>`:""}
    <div class="r-next"><button data-open="${prev.id}"><small>← Previous</small><b>${esc(prev.title)}</b></button><button data-open="${next.id}" style="text-align:right"><small>Next →</small><b>${esc(next.title)}</b></button></div>`;
  reader.className=`reader open c-${pub(r)}`;
  const side=[["Publisher",r.level==="State"?`CAG · ${r.state}`:r.body],["Report",r.reportNo||r.ref],["Type",r.kind],["Tabled",r.tabled||r.date],["Ministry",r.ministry],["Covers",r.period],["Topic",r.topic],["Reading time",readMins(r)+" min"]].filter(x=>x[1]);
  const figs=[{v:r.big.v,l:r.big.l,main:1},...r.stats.filter(s=>s.v.replace(/\s/g,"")!==r.big.v.replace(/\s/g,"")).slice(0,3)];
  rContent.innerHTML=`<header class="r-head"><div class="wrap">
      <div class="r-kick">${badge(r)}${r.kind?`<span>${esc(r.kind)}</span>`:""}<span>${esc(r.date)}</span></div>
      <h2 id="rTitle">${esc(r.fullTitle||r.title)}</h2>
      ${!Array.isArray(r.tldr)?`<p class="r-deck">${escH(r.tldr)}</p>`:`<p class="r-deck">${escH(r.hook)}</p>`}
      <div class="r-figs">${figs.map((f,k)=>`<div class="${f.main?"main":""}${f.loss?" loss":""}" data-rtab-go="numbers" role="button" tabindex="0" title="See all numbers"><b${k===0?' id="rBig"':""}>${esc(f.v)}</b><span>${esc(f.l)}</span></div>`).join("")}</div>
    </div></header>
    <div class="r-tabs"><div class="wrap" role="tablist" aria-label="Report sections">${tabs.map(([k,l,n])=>`<button role="tab" data-rtab="${k}" aria-selected="${k===rTab}">${l}${n?`<span class="n">${n}</span>`:""}</button>`).join("")}</div></div>
    <div class="wrap r-layout"><div class="r-body">${Object.entries(P).map(([k,h])=>`<div class="r-panel" data-rpanel="${k}"${k===rTab?"":" hidden"}>${h}</div>`).join("")}</div>
      <aside class="r-side"><dl class="facts-dl">${side.map(x=>`<div><dt>${esc(x[0])}</dt><dd>${esc(x[1])}</dd></div>`).join("")}</dl>
      <div class="side-actions"><button class="btn sm" data-rtab-go="sources">Sources</button>${r.exam?`<button class="btn sm" data-rtab-go="exam">Exam corner</button>`:""}</div></aside></div>`;
  $("#rMini").textContent=r.title; $("#rSave").setAttribute("aria-pressed",saved.has(r.id));
  reader.setAttribute("aria-hidden","false"); document.body.classList.add("lock");
  document.title=`${r.title} · Saaransh`; rScroll.scrollTop=0;
  countUp($("#rBig"),r.big.v,1100);
  grow(rContent.querySelector(`[data-rpanel="${rTab}"]`));
  setTimeout(()=>$("#rClose").focus({preventScroll:true}),50);
  try{history.replaceState(null,"","#"+r.id)}catch(e){}
}
function setRTab(k){rTab=k;rContent.querySelectorAll("[data-rtab]").forEach(b=>b.setAttribute("aria-selected",b.dataset.rtab===k));rContent.querySelectorAll("[data-rpanel]").forEach(p=>p.hidden=p.dataset.rpanel!==k);const p=rContent.querySelector(`[data-rpanel="${k}"]`);grow(p);const tb=rContent.querySelector(".r-tabs");if(rScroll.scrollTop>tb.offsetTop)rScroll.scrollTop=tb.offsetTop}
function closeReader(){if(!reader.classList.contains("open"))return;reader.classList.remove("open");reader.setAttribute("aria-hidden","true");document.body.classList.remove("lock");hidePop();cur=null;document.title=curView==="home"?"Saaransh":`${VTITLE[curView]} · Saaransh`;try{history.replaceState(null,"",curView==="home"?location.pathname+location.search:"#"+curView)}catch(e){}if(lastFocus&&lastFocus.focus)lastFocus.focus({preventScroll:true})}
rContent.addEventListener("click",e=>{
  const t=e.target.closest("[data-rtab]");if(t){setRTab(t.dataset.rtab);return}
  const tg2=e.target.closest("[data-rtab-go]");if(tg2){setRTab(tg2.dataset.rtabGo);return}
  const l=e.target.closest("[data-level]");if(l){level=l.dataset.level;store.set("saaransh-level",level);rContent.querySelectorAll("[data-level]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.level===level));const sp=$("#sumProse");sp.innerHTML=summaryHTML(cur);sp.classList.remove("panel");void sp.offsetWidth;sp.classList.add("panel");return}
  const tg=e.target.closest("#thToggle");if(tg){const ds=[...rContent.querySelectorAll(".theme")],open=ds.every(d=>d.open);ds.forEach(d=>d.open=!open);tg.textContent=open?"Expand all":"Collapse all"}
});
rContent.addEventListener("keydown",e=>{const b=e.target.closest("[data-rtab]");if(!b||!["ArrowRight","ArrowLeft"].includes(e.key))return;const all=[...rContent.querySelectorAll("[data-rtab]")];const n=all[(all.indexOf(b)+(e.key==="ArrowRight"?1:-1)+all.length)%all.length];n.focus();setRTab(n.dataset.rtab)});
rScroll.addEventListener("scroll",()=>hidePop(),{passive:true});
$("#rClose").addEventListener("click",closeReader);
$("#rSave").addEventListener("click",()=>cur&&toggleSave(cur.id));
$("#rShare").addEventListener("click",()=>{if(!cur)return;const l=effLevel(cur),sum=l==="hi"?cur.hi:plain((l==="detailed"?cur.detailed:cur.simple).join(" ")),pts=Array.isArray(cur.tldr)?cur.tldr:(cur.tldrList||[cur.tldr]);copyText(`${cur.fullTitle||cur.title}\n\n${sum}\n\n${pts.map(x=>"• "+x).join("\n")}\n\nSource: ${cur.src.label}\n— Saaransh`,"Summary copied")});
function copyText(t,ok){try{navigator.clipboard.writeText(t).then(()=>toast(ok),()=>fallbackCopy(t,ok))}catch(e){fallbackCopy(t,ok)}}
function fallbackCopy(t,ok){const ta=document.createElement("textarea");ta.value=t;ta.style.position="fixed";ta.style.opacity="0";document.body.appendChild(ta);ta.select();let done=false;try{done=document.execCommand("copy")}catch(e){}ta.remove();toast(done?ok:"Copy blocked here. Select the text instead.")}
document.addEventListener("click",e=>{const o=e.target.closest("[data-open]");if(o){e.preventDefault();openReport(o.dataset.open,o.dataset.tab)}});

/* ---------- search palette ---------- */
const pal=$("#palette"),palq=$("#palq"),palList=$("#palList"); let palItems=[],palSel=0;
const JUMPS=[["reports",null,"Reports"],["numbers",["num","board"],"Shock board"],["numbers",["num","scale"],"Money scale"],["numbers",["num","trends"],"Trends"],["insights",null,"Insights: 5 patterns"],["states",null,"State lens"],["play",["play","guess"],"Guess the number"],["play",["play","quiz"],"MCQ quiz"],["play",["play","cards"],"Flashcards"],["play",["play","mains"],"Mains questions"],["learn",["learn","basics"],"The CAG in the Constitution"],["learn",["learn","journey"],"How a report reaches you"],["learn",["learn","landmarks"],"Landmark audits"],["learn",["learn","glossary"],"Glossary"]];
function buildPal(q){
  q=q.trim().toLowerCase();const items=[],words=q.split(/\s+/).filter(Boolean),has=t=>words.every(w=>String(t).toLowerCase().includes(w));let n=0;
  const add=(g,list,free)=>{if(!free)list=list.slice(0,Math.max(0,30-n));if(!list.length)return;items.push({g},...list);if(!free)n+=list.length};
  add(q?"Reports":"All reports",(q?R.filter(r=>has(hay(r))):ORDER()).map(r=>({t:r.title,s:r.big.v+" · "+r.big.l,k:r.level==="State"?r.state:r.body,go:()=>openReport(r.id)})));
  if(q){
    const fs=[];R.forEach(r=>{(r.themes||[]).forEach(t=>t.items.forEach(it=>{if(has(it.t+" "+t.name))fs.push({t:it.t,s:`${r.title} · ${t.name}`,k:"Finding",go:()=>openReport(r.id,"findings")})}));(r.findings||[]).forEach(f=>{if(has(plain(f)))fs.push({t:plain(f),s:r.title,k:"Finding",go:()=>openReport(r.id,"findings")})})});
    add("Findings",fs.slice(0,8));
    add("States",ST.filter(s=>has(s[1])).slice(0,4).map(s=>({t:s[1],s:"What the reports say",k:"State",go:()=>{closePalette();selState=s[0];show("states");if(inited.states){paintTiles();renderStateCard()}}})));
    add("Terms",Object.entries(G).filter(([k,g])=>has(g.t+" "+(g.full||"")+" "+g.d)).slice(0,6).map(([k,g])=>({t:g.t,s:g.full||g.d,k:"Term",go:()=>{closePalette();flashTerm(k)}})));
    add("Insights",(SITE.insights||[]).filter(x=>has(x.title+" "+x.lede+" "+x.evidence.map(e=>e[1]).join(" "))).map(x=>({t:x.title,s:x.lede,k:"Insight",go:()=>{closePalette();show("insights",{sub:["ins","patterns"],instant:true});setTimeout(()=>document.getElementById("ins-"+x.id)?.scrollIntoView({behavior:reduced?"auto":"smooth"}),60)}})));
  }
  add("Go to",JUMPS.filter(j=>!q||has(j[2])).map(j=>({t:j[2],s:"",k:"Section",go:()=>{closePalette();closeReader();show(j[0],{sub:j[1]})}})),true);
  palItems=items.filter(x=>!x.g);palSel=0;
  if(!palItems.length){palList.innerHTML=`<div class="pal-empty">No results for “${esc(q)}”.</div>`;return}
  let m=0;palList.innerHTML=items.map(x=>x.g?`<div class="pal-group">${esc(x.g)}</div>`:`<button class="pal-item" role="option" data-pi="${m}" aria-selected="${m++===0}"><div><div class="pi-t">${esc(x.t)}</div>${x.s?`<div class="pi-s">${esc(x.s)}</div>`:""}</div><span class="pi-k">${esc(x.k)}</span></button>`).join("");
}
function selPal(i){palSel=(i+palItems.length)%palItems.length;palList.querySelectorAll(".pal-item").forEach(b=>b.setAttribute("aria-selected",+b.dataset.pi===palSel));palList.querySelector(`[data-pi="${palSel}"]`)?.scrollIntoView({block:"nearest"})}
function openPalette(q){pal.classList.add("open");pal.setAttribute("aria-hidden","false");palq.value=q||"";buildPal(palq.value);setTimeout(()=>palq.focus(),30)}
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
document.addEventListener("focusin",e=>{const t=e.target.closest(".term");t?showPop(t):hidePop()});
document.addEventListener("click",e=>{const t=e.target.closest(".term");if(t){e.preventDefault();showPop(t)}else hidePop()});
addEventListener("scroll",hidePop,{passive:true});

/* ---------- keyboard ---------- */
let gAt=0;
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){if(pal.classList.contains("open"))closePalette();else if(reader.classList.contains("open"))closeReader();hidePop();return}
  const typing=/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
  if((e.key==="/"&&!typing)||((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k")){e.preventDefault();openPalette("");return}
  if(typing||e.metaKey||e.ctrlKey||e.altKey)return;
  if(e.key==="g"){gAt=Date.now();return}
  if(gAt&&Date.now()-gAt<800){const v={h:"home",r:"reports",n:"numbers",i:"insights",s:"states",p:"play",l:"learn",e:"play"}[e.key];gAt=0;if(v){e.preventDefault();closeReader();closePalette();show(v,e.key==="e"?{sub:["play","quiz"]}:{});return}}
  if(reader.classList.contains("open")&&(e.key==="ArrowRight"||e.key==="ArrowLeft")&&!e.target.closest("[role=tablist]")&&!e.target.closest(".level")){const ord=ORDER(),i=ord.findIndex(x=>x.id===cur.id);openReport(ord[(i+(e.key==="ArrowRight"?1:-1)+ord.length)%ord.length].id)}
});


/* ---------- view subtitles ---------- */
const VSTAT={numbers:`<b>₹${num(Math.round(flaggedTotal),0)} crore</b> flagged in recent CAG audits`,insights:`<b>${(SITE.insights||[]).length}</b> patterns that repeat across audits`,states:`<b>${window.STATES.length}</b> states and UTs on the map`,play:`<b>${quizN}</b> MCQs and <b>${window.QUIZ.length}</b> estimation questions`,learn:`<b>${Object.keys(G).length}</b> terms explained`};
$$(".view[data-view] .vhead").forEach(v=>{const k=v.closest(".view").dataset.view,h1=v.querySelector("h1");if(VSTAT[k]&&h1)h1.insertAdjacentHTML("afterend",`<p class="vstat">${VSTAT[k]}</p>`)});


/* ---------- clickable details: global handlers ---------- */
function goReports(fn){closeReader();closePalette();fn();show("reports",{instant:true});if(inited.reports){$("#pubSel").value=lib.group;$("#topicSel").value=lib.topic;$("#sortSel").value=lib.sort;syncTabs();renderGrid()}}
document.addEventListener("click",e=>{
  const y=e.target.closest("[data-yr]"); if(y){e.preventDefault();goReports(()=>{lib.year=+y.dataset.yr;lib.tab="all"});return}
  const p=e.target.closest("[data-pub-go]"); if(p){e.preventDefault();goReports(()=>{lib.group=p.dataset.pubGo;if(p.dataset.sort)lib.sort=p.dataset.sort;lib.tab="all"});return}
  const t=e.target.closest("[data-topic-go]"); if(t){e.preventDefault();goReports(()=>{lib.topic=t.dataset.topicGo;lib.tab="all"});return}
  const cy=e.target.closest("[data-clear-year]"); if(cy){lib.year=0;renderGrid();return}
  const s=e.target.closest("[data-search]"); if(s&&!e.target.closest(".term")){openPalette(s.dataset.search);return}
  const st=e.target.closest("[data-stgo]"); if(st){const code=(window.STATES.find(x=>x[1]===st.dataset.stgo)||[])[0];if(!code)return;closeReader();selState=code;show("states",{instant:true});paintTiles();renderStateCard();return}
});
document.addEventListener("keydown",e=>{if(e.key!=="Enter"&&e.key!==" ")return;const el=e.target;if(el.matches&&el.matches('[role="button"],[role="link"]')&&el.tagName!=="BUTTON"&&el.tagName!=="A"){e.preventDefault();el.click()}});

/* ---------- start ---------- */
const h=location.hash.slice(1);
if(VIEWS.includes(h)) show(h,{instant:true});
else { show("home",{instant:true}); if(h&&byId(h)) openReport(h); }
})();
