/* Content from the Report Saar spec v1.0 (Appendix A and B), kept verbatim.
   app.js adapts these into the site's report format. Add new reports here in the same schema. */

window.SITE = {
  whyUnread: [
    {v:"22", l:"CAG audit reports on the Union tabled per year in 2019–23, down from about 40 a year in 2014–18", src:"https://thefederal.com/category/news/cag-reports-put-spotlight-on-governance-gaps-in-pm-modis-flagship-schemes-228778"},
    {v:"28", l:"Pending CAG reports West Bengal tabled in one day in July 2026, covering 2020-21 to 2024-25", src:"https://theprint.in/india/bengal-govt-tables-28-pending-cag-reports-accuses-tmc-of-constitutional-lapse-while-in-power/2996786/"},
    {v:"200+", l:"Pages in a typical performance audit, written for auditors and legislators rather than citizens", src:""}
  ],
  insights: [
    {id:"money-out-proof-missing", title:"Money goes out. Proof doesn't come back.", lede:"Across very different audits, the same failure repeats: funds are released, and nobody checks whether they were used.", evidence:[
      ["union-accounts-2425","₹54,282 crore of Union grants have no utilisation certificate, some since 1985-86."],
      ["cab-report-9-2026","₹13,464 crore given to autonomous bodies was unspent at year-end."],
      ["union-accounts-2425","₹10,380 crore of afforestation (CAMPA) money is still waiting to reach states."],
      ["pmkvy-2025","Nearly 20% of PMKVY state allocations for 2016–24 were unspent in March 2024."]]},
    {id:"data-cant-be-trusted", title:"The records themselves are unreliable", lede:"Before any question of fraud, many schemes cannot produce clean data on who got what.", evidence:[
      ["pmkvy-2025","94.53% of PMKVY beneficiary records had invalid or blank bank details."],
      ["union-accounts-2425","₹12,754 crore of Union spending and receipts sat under the wrong heads."],
      ["cab-report-9-2026","250 of 479 autonomous bodies filed accounts late; 11 had not filed for up to nine years."],
      ["bharatmala-2023","₹1.57 lakh crore approved under other schemes was counted as Bharatmala progress."]]},
    {id:"outputs-not-outcomes", title:"Outputs are counted. Outcomes are not.", lede:"Schemes report how many people enrolled or how many kilometres were awarded, rarely whether lives improved.", evidence:[
      ["pmkvy-2025","PMKVY certified 56 lakh people, but only 41% were placed in jobs."],
      ["skilling-viksit-2047","NITI Aayog says skilling programmes track enrolment and certificates, not income or careers."],
      ["bharatmala-2023","Bharatmala set no targets for accident reduction, travel comfort or logistics performance."],
      ["school-education-2026","Primary enrolment is near universal, yet only 37% of Grade 9 students are at grade level in maths."]]},
    {id:"skilling-two-lenses", title:"Skilling, seen by the auditor and the planner", lede:"The CAG's PMKVY audit and NITI Aayog's skilling report reach the same conclusion from opposite ends.", evidence:[
      ["pmkvy-2025","CAG: training was not matched to job-role demand, and there was no skill-gap data to plan with."],
      ["skilling-viksit-2047","NITI: only 8.25% of graduates work in jobs matching their qualification."],
      ["skilling-viksit-2047","NITI recommends outcome-based financing: pay for jobs, not enrolments."],
      ["school-education-2026","Fewer than 1 in 12 secondary schools offer vocational subjects, so the pipeline starts late."]]},
    {id:"debt-quiet-constraint", title:"Debt is the quiet constraint", lede:"From the Centre to states to NHAI, borrowing now limits what governments can choose to spend on.", evidence:[
      ["union-accounts-2425","Interest alone takes 29.2% of the Centre's revenue expenditure."],
      ["fiscal-health-2026","States' debt rose from about 16.7% of GSDP in 2013-14 to nearly 23% in 2022-23."],
      ["bharatmala-2023","NHAI borrowed ₹91,070 crore more than approved to cover overruns."],
      ["fiscal-health-2026","In stressed states, interest exceeds 15–20% of revenue receipts."]]}
  ],
  glossary: {
    "Utilisation certificate":"A document confirming that a grant was spent on the purpose it was given for. Without it, there is no proof the money was used correctly.",
    "GFR 2017":"General Financial Rules 2017: the Union Government's rulebook for handling public money, including procurement and grants.",
    "Minor Head 800":"A catch-all 'other receipts / other expenditure' accounting head. Heavy use hides what money was actually spent on.",
    "Suspense account":"A temporary head for transactions whose final classification is not yet known. Balances should be cleared quickly.",
    "Adverse balance":"A balance with the wrong sign, such as a negative balance in a head that can only be positive. It signals accounting errors.",
    "Public Account":"Money the government holds as a banker or trustee, such as provident funds and deposits, rather than its own revenue.",
    "Consolidated Fund":"The main account of the government into which all revenue goes and from which spending is made with Parliament's approval (Article 266).",
    "Re-appropriation":"Moving savings from one budget head to another within the same grant.",
    "Supplementary grant":"Extra money Parliament approves during the year when the original budget is not enough.",
    "Fiscal deficit":"Total spending minus total receipts other than borrowing. It equals how much the government must borrow.",
    "CAMPA":"Compensatory Afforestation Fund: money paid by projects that clear forests, meant for planting new forests.",
    "Central Autonomous Body":"An institution set up by the Union Government that runs mainly on its grants, such as central universities, IITs and AIIMS.",
    "Infructuous expenditure":"Spending that produced no useful result.",
    "Disclaimer of opinion":"When auditors cannot form any opinion on accounts because evidence is missing. It is the most serious audit verdict.",
    "Actuarial valuation":"A calculation of future pension and gratuity liabilities based on staff age, salary and life expectancy.",
    "TDS":"Tax Deducted at Source: tax an organisation deducts from payments and must deposit with the government on time.",
    "Performance audit":"An audit asking whether a scheme achieved its goals economically, efficiently and effectively, beyond whether rules were followed.",
    "Compliance audit":"An audit checking whether transactions followed laws, rules and procedures.",
    "Financial audit":"An audit giving an opinion on whether accounts are correct and complete.",
    "PMKVY":"Pradhan Mantri Kaushal Vikas Yojana: the Skill Development Ministry's flagship short-term skilling scheme, launched in 2015.",
    "NSDC":"National Skill Development Corporation: a public-private body that implements much of PMKVY.",
    "NCVET":"National Council for Vocational Education and Training: the regulator for quality in vocational training.",
    "Recognition of Prior Learning":"Assessing and certifying skills people already have from work, without full training.",
    "DBT":"Direct Benefit Transfer: paying benefits straight into beneficiaries' bank accounts.",
    "Skill India Digital Hub":"The government's digital platform for skilling records, courses and tracking (SIDH).",
    "EPC":"Engineering, Procurement and Construction: the government pays the full cost; the contractor only builds.",
    "HAM":"Hybrid Annuity Model: the government pays 40% during construction and the developer recovers the rest as annuities.",
    "BOT":"Build-Operate-Transfer: a private developer funds and builds the road and recovers money through tolls.",
    "DPR":"Detailed Project Report: the engineering and cost blueprint on which a project is approved and tendered.",
    "Escrow account":"A ring-fenced account from which money can only be used for specified project purposes.",
    "CCEA":"Cabinet Committee on Economic Affairs, which approves large investment programmes.",
    "NEET (youth)":"Not in Education, Employment or Training. Different from the medical entrance exam of the same name.",
    "National Credit Framework":"A framework that lets credits earned in school, higher education and skilling be counted together.",
    "ITI":"Industrial Training Institute: government or private institutes offering trade-based vocational courses.",
    "Apprenticeship":"On-the-job training at an employer, with a stipend, under the Apprentices Act.",
    "Labour force participation":"Share of people who are working or looking for work.",
    "GER":"Gross Enrolment Ratio: enrolment at a level as a share of the population of the official age for that level.",
    "UDISE+":"Unified District Information System for Education Plus: the official database of every school in India.",
    "ASER":"Annual Status of Education Report: a household survey by Pratham measuring children's basic reading and maths.",
    "PARAKH":"The national assessment centre under NCERT; its Rashtriya Sarvekshan measures student competencies.",
    "NIPUN Bharat":"National mission for foundational literacy and numeracy by Class 3.",
    "Composite school":"A single school offering continuous classes, ideally from 1 to 12, to reduce switching and dropout.",
    "Single-teacher school":"A school where one teacher handles all classes.",
    "GSDP":"Gross State Domestic Product: the size of a state's economy.",
    "FRBM":"Fiscal Responsibility and Budget Management law that caps deficits; states generally target a 3% fiscal deficit.",
    "Committed expenditure":"Spending that must be made every year: salaries, pensions and interest.",
    "Own tax revenue":"Taxes a state collects itself, such as state GST, excise and stamp duty.",
    "Debt sustainability":"Whether a government can keep servicing its debt without it growing out of control relative to the economy.",
    "PAC":"Public Accounts Committee: the parliamentary committee that examines CAG reports and questions ministries."
  },
  learn: {
    cag: [
      ["Article 148","The CAG is appointed by the President and can be removed only like a Supreme Court judge."],
      ["Article 149","Sets the CAG's duties and powers over the accounts of the Union, states and bodies funded by them."],
      ["Article 150","Accounts are kept in the form the President prescribes on the CAG's advice."],
      ["Article 151","Union reports go to the President and state reports to the Governor, who lay them before the legislature."]
    ],
    journey: [
      ["Audit","Auditors test-check records, visit sites and sample beneficiaries."],
      ["Draft observations","Findings go to the department as draft paragraphs."],
      ["Department replies","Only findings without a satisfactory explanation stay in."],
      ["Report signed","The CAG signs and sends it to the President or Governor."],
      ["Tabled","The report is laid in Parliament or the state legislature and becomes public."],
      ["PAC examines","The Public Accounts Committee questions officials and recommends action."],
      ["Action taken","Ministries submit Action Taken Notes on the PAC's recommendations."]
    ],
    types: [
      ["Financial audit","Are the accounts correct and complete?","union-accounts-2425"],
      ["Compliance audit","Were laws and rules followed?","cab-report-9-2026"],
      ["Performance audit","Did the scheme achieve its goals efficiently?","pmkvy-2025"]
    ],
    niti: [
      ["Set up","1 January 2015, replacing the Planning Commission."],
      ["Chair","The Prime Minister. Vice Chairperson as of August 2026: Ashok Kumar Lahiri; CEO: Nidhi Chhibber."],
      ["Role","A policy think tank. It has no power to allocate funds, unlike the Planning Commission."],
      ["Known for","State rankings such as the Fiscal Health Index, SDG India Index and Export Preparedness Index, plus sector roadmaps."]
    ],
    tips: [
      "Start with the executive summary and the chapter of recommendations; they summarise the whole report.",
      "Check the 'Audit sample': findings are from test-checks, so they show patterns rather than totals.",
      "Look for the department's reply after each paragraph; it often explains or disputes the finding.",
      "Red-flag words: 'infructuous', 'irregular', 'avoidable', 'blocking of funds', 'undue benefit'.",
      "An amount flagged is not always a loss. It can be idle money, pending paperwork or a wrong entry."
    ]
  }
};

window.SPEC_REPORTS = [
/* ---------- B.1 ---------- */
{
  id:"skilling-viksit-2047", body:"NITI", kind:"Policy report", reportNo:"NITI Aayog policy report",
  title:"Reimagining Skilling for Viksit Bharat @2047", short:"Reimagining Skilling", sector:"Skilling & employment", ministry:"NITI Aayog",
  date:"Aug 2026", dateISO:"2026-08-25", tabled:"Released August 2026", period:"Based mainly on NSS 78th round (2021) and recent labour data", flagged:null,
  tldr:[
    "About 8.7 crore youth aged 15–29 are not studying, working or training.",
    "Only 8.25% of graduates work in jobs that match their qualification; graduate unemployment is 13% against 3.2% overall.",
    "Only about 3% of women are in formal jobs; 71% are in informal work or out of education, work and training."
  ],
  en:"About 8.7 crore Indians aged 15 to 29 are not studying, working or in training. Degrees and jobs are badly matched: only 8.25% of graduates work in roles that fit their qualification, and graduate unemployment is 13% against 3.2% overall. Women are the biggest gap, with only about 3% in formal jobs. NITI Aayog says skilling must be judged by jobs and incomes, not by how many people are enrolled or certified.",
  hi:"15 से 29 साल के लगभग 8.7 करोड़ भारतीय न पढ़ रहे हैं, न काम कर रहे हैं, न प्रशिक्षण ले रहे हैं। डिग्री और नौकरी का मेल बहुत कमज़ोर है: केवल 8.25% स्नातक अपनी योग्यता के अनुरूप काम में हैं, और स्नातकों में बेरोज़गारी 13% है जबकि कुल दर 3.2% है। महिलाएँ सबसे पीछे हैं, केवल लगभग 3% औपचारिक नौकरियों में। नीति आयोग का कहना है कि कौशल कार्यक्रमों को नामांकन से नहीं, नौकरी और आमदनी से आँका जाए।",
  context:{
    what:"A NITI Aayog policy report on how India trains its workforce for the goal of becoming a developed country by 2047. It divides learners and workers into five groups: those in school, in tertiary education, in formal and informal work, NEET youth, and women.",
    why:"India has trained over 7.67 crore people since 2014-15, yet employers still report skill shortages and graduates struggle to find matching work. The report asks why the effort has not translated into jobs.",
    how:"Analysis of National Sample Survey (78th round, 2021) and labour-force data, with consultations; the report is a policy roadmap, not an audit."
  },
  nums:[["8.7 crore","Youth (15–29) not in education, employment or training",0],["8.25%","Graduates in jobs matching their qualification",1],["13%","Unemployment among graduates (20.4% for women)",1],["~3%","Women in formal jobs",1],["7.67 crore","People trained since 2014-15",0],["₹7,000","Monthly salary gain from extra skilling",0]],
  themes:[
    {name:"Degrees that don't lead to jobs", sev:"high", items:[
      {t:"Only 8.25% of graduates are employed in roles aligned with their qualifications.", amt:"8.25%"},
      {t:"Graduate unemployment is 13%, and 20.4% for women graduates, against a national rate of 3.2%.", amt:""},
      {t:"Over 2 crore of India's 3.4 crore undergraduates are in BA, BSc or BCom programmes with weak links to jobs.", amt:""},
      {t:"Generic graduates with extra skilling start at about ₹29,000 a month, against ₹22,000 without it.", amt:""}]},
    {name:"Women left out", sev:"high", items:[
      {t:"Only around 3% of women are in formal jobs; around 71% are in informal work or NEET.", amt:""},
      {t:"Barriers include caregiving, unsafe transport, limited mobility, costly training, little access to finance and social constraints.", amt:""},
      {t:"Many women prefer home-based self-employment but cannot get capital or market access.", amt:""}]},
    {name:"Youth disengaged", sev:"high", items:[
      {t:"About 8.7 crore youth aged 15–29 are not in education, employment or training. NITI Aayog cautions this is not the same as unemployment.", amt:""},
      {t:"About 54.9% of Indians are outside the labour force.", amt:""}]},
    {name:"Skilling built for numbers, not outcomes", sev:"med", items:[
      {t:"Programmes track enrolment and certification rather than placement, income growth or career progress.", amt:""},
      {t:"Fewer than 1 in 12 secondary schools offer vocational subjects, though NEP 2020 wants them from Class 6.", amt:""},
      {t:"ITIs, diplomas and technical training are still seen as second-tier options.", amt:""},
      {t:"One-size-fits-all, supply-driven programmes with weak industry participation; learners lack information on courses and their returns.", amt:""}]},
    {name:"No safety net", sev:"med", items:[
      {t:"In the non-farm workforce, about 7 crore people get at least one social-security benefit while about 27 crore get none.", amt:""}]}
  ],
  charts:[
    {title:"Unemployment: graduates vs everyone", type:"bars", unit:"%", data:[["Women graduates",20.4],["All graduates",13],["National average",3.2]]},
    {title:"Does extra skilling pay?", type:"bars", unit:"₹ per month, starting salary", data:[["Generic graduate + skilling",29000],["Generic graduate, no skilling",22000]]},
    {title:"Social security in the non-farm workforce", type:"split", unit:"crore workers", data:[["At least one benefit",7],["No benefit",27]]},
    {title:"Where undergraduates study", type:"split", unit:"crore students", data:[["BA / BSc / BCom",2],["Other programmes",1.4]], note:"'Over 2 crore' of 3.4 crore; the split is approximate."}
  ],
  recs:[
    "Make skilling demand-driven, industry-backed and paid for by outcomes (jobs and income), not enrolment.",
    "Redesign BA, BSc and BCom into applied, industry-aligned specialisations, and scale apprenticeship-embedded degrees.",
    "Build skills for high-growth areas such as green industries and electric vehicles.",
    "Give ITIs more academic and administrative autonomy; expand PPP skilling universities.",
    "'Back to School': use schools as safe spaces where women can upskill.",
    "'Surakshit Saathi': PPP-run hostels and transport for working and training women.",
    "Digital lifelong learning accounts or skill passports, wider use of the National Credit Framework, and skills-first hiring.",
    "Embed digital and financial literacy and expand career counselling for women and disadvantaged youth."
  ],
  response:["This is a policy roadmap. Its recommendations go to ministries and states for adoption; none is binding."],
  timeline:[["2014-15","Start of the period in which 7.67 crore people were trained"],["2021","NSS 78th round, the main data source"],["Aug 2026","Report released by NITI Aayog"],["2047","Viksit Bharat target year"]],
  glossary:["NEET (youth)","National Credit Framework","ITI","Apprenticeship","Labour force participation"],
  exam:{
    prelims:[
      "NITI Aayog's 'Reimagining Skilling for Viksit Bharat @2047' was released in August 2026.",
      "It estimates 8.7 crore (87 million) NEET youth aged 15–29, using NSS 78th round (2021) data.",
      "Only 8.25% of graduates are in jobs aligned with their qualification.",
      "'Back to School' and 'Surakshit Saathi' are its proposals for women's skilling.",
      "Over 7.67 crore people have been trained since 2014-15."
    ],
    mains:"India's skilling challenge is less about numbers trained and more about jobs gained. Discuss with reference to NITI Aayog's 2026 skilling report and the CAG's audit of PMKVY. (15 marks)",
    quiz:[
      {q:"How many Indian youth aged 15–29 are NEET per NITI Aayog's 2026 skilling report?", o:["2.4 crore","8.7 crore","24.69 crore","7.67 crore"], a:1, w:"87 million, or 8.7 crore."},
      {q:"The NEET estimate is based on which data?", o:["Census 2011","PLFS 2024","NSS 78th round (2021)","UDISE+ 2024-25"], a:2, w:"National Sample Survey, 78th round."},
      {q:"'Surakshit Saathi' proposed by NITI Aayog is about:", o:["Cyber safety for students","PPP hostels and transport for women","Insurance for gig workers","Road safety"], a:1, w:"Safe hostels and transport so women can train and work."},
      {q:"What share of graduates work in roles aligned with their qualification?", o:["8.25%","13%","41%","54.9%"], a:0, w:"8.25%."}
    ]
  },
  related:["pmkvy-2025","school-education-2026"],
  src:[
    ["NITI Aayog report page","https://www.niti.gov.in/node/2397","official"],
    ["Next IAS summary","https://www.nextias.com/ca/current-affairs/26-08-2026/niti-aayog-skilling-viksit-bharat","analysis"],
    ["Shankar IAS summary","https://www.shankariasparliament.com/current-affairs/reimagining-skilling-for-viksit-bharat2047-report","analysis"],
    ["AffairsCloud, 26 Aug 2026","https://affairscloud.com/current-affairs-26-august-2026/","coverage"]
  ],
  kw:"NEET youth skilling vocational NEP graduates employability jobs viksit bharat women ITI apprenticeship social security"
},
/* ---------- B.2 ---------- */
{
  id:"cab-report-9-2026", body:"CAG", kind:"Compliance audit", reportNo:"Report No. 9 of 2026",
  title:"Compliance Audit of Central Autonomous Bodies", short:"Central Autonomous Bodies", sector:"Education & institutions", ministry:"Various ministries (mainly Education, Health, Culture)",
  date:"Aug 2026", dateISO:"2026-08-12", tabled:"Tabled in Parliament on 12 August 2026", period:"Year ended March 2023", flagged:13464.22,
  flaggedNote:"Grants released in 2022-23 that were still unspent on 31 March 2023.",
  tldr:[
    "Autonomous bodies like universities, IITs and AIIMS got ₹1.13 lakh crore; ₹13,464 crore sat unspent at year-end.",
    "250 of 479 bodies filed accounts late, and 11 had not filed for up to nine years.",
    "IGNOU spent ₹23.57 crore on broadcast stations that broadcast nothing for two years."
  ],
  en:"Central autonomous bodies such as universities, IITs, AIIMS and academies got ₹1.13 lakh crore in grants in 2022-23, and ₹13,464 crore of it was still unspent at year-end. More than half filed their accounts late, and 11 had not filed for one to nine years. Individual cases include IGNOU paying ₹23.57 crore for broadcast stations that broadcast nothing for two years, and SC/ST grants spent on general-category apprentices.",
  hi:"विश्वविद्यालय, IIT, AIIMS जैसी केंद्रीय स्वायत्त संस्थाओं को 2022-23 में ₹1.13 लाख करोड़ अनुदान मिला, जिसमें से ₹13,464 करोड़ साल के अंत तक खर्च ही नहीं हुआ। आधी से ज़्यादा संस्थाओं ने खाते देर से जमा किए, और 11 ने एक से नौ साल तक खाते जमा ही नहीं किए। IGNOU ने दो साल तक बंद पड़े प्रसारण स्टेशनों पर ₹23.57 करोड़ खर्च किए, और SC/ST अनुदान सामान्य वर्ग के प्रशिक्षुओं पर खर्च हुआ।",
  context:{
    what:"Central Autonomous Bodies (CABs) are institutions set up by the Union Government that run largely on its grants: central universities, IITs, IISERs, AIIMS, the National Testing Agency, cultural academies and many more.",
    why:"They spend over a lakh crore of public money a year with less day-to-day oversight than ministries. Their accounts are the main way Parliament can see how that money is used.",
    how:"Financial audit of the accounts of 479 CABs for 2022-23, plus compliance audit of selected transactions across ministries."
  },
  nums:[["₹1,13,012 cr","Grants released to CABs in 2022-23",0],["₹13,464 cr","Unspent on 31 March 2023",1],["479","Bodies under CAG audit",0],["250","Filed 2022-23 accounts late",0],["11","Had not filed accounts for 1 to 9 years",0],["₹121.82 cr","Interest on grants not returned",1]],
  themes:[
    {name:"Grants sitting idle", sev:"high", items:[
      {t:"Of ₹1,13,012.01 cr released as grants in 2022-23, this much remained unutilised on 31 March 2023.", amt:"₹13,464.22 cr"},
      {t:"27 bodies neither returned interest earned on government grants nor showed it as a liability.", amt:"₹121.82 cr"}]},
    {name:"Accounts late, missing or wrong", sev:"high", items:[
      {t:"250 bodies furnished 2022-23 accounts after the 30 June 2023 deadline.", amt:""},
      {t:"11 bodies had not submitted one to nine years of annual accounts as of 31 March 2024.", amt:""},
      {t:"44 bodies revised their accounts after audit. Five got adverse comments and one got a disclaimer of opinion.", amt:""},
      {t:"Fixed assets not physically verified at 132 bodies, and inventories at 111.", amt:""},
      {t:"164 bodies did not account for gratuity and retirement benefits on actuarial valuation.", amt:""}]},
    {name:"Wasteful spending and losses", sev:"high", items:[
      {t:"IGNOU's delay in renewing an MoU stopped Gyan Vani educational broadcasting for two years; this spending was infructuous. It also paid ₹34.35 cr in licence and spectrum fees while most stations were closed or underused.", amt:"₹23.57 cr"},
      {t:"Central University of Tamil Nadu broke GFR 2017 and procurement rules on ₹8.16 cr of purchases and works, causing a loss.", amt:"₹2.60 cr"},
      {t:"Three Delhi University colleges (Ram Lal Anand, Shivaji, Shaheed Bhagat Singh Evening) short-collected the University Development Fee.", amt:"₹2.01 cr"},
      {t:"AIIMS Rishikesh did not act against a contractor, leading to short realisation of dues.", amt:"₹1.78 cr"},
      {t:"Sahitya Akademi accepted a DDA plot without checking it; non-existent or encumbered plots were allotted three times, blocking the money paid.", amt:"₹83.07 lakh"},
      {t:"Central University of Kashmir irregularly reimbursed leave encashment for outsourced staff.", amt:"₹76.31 lakh"},
      {t:"National Testing Agency missed TDS deposit deadlines and paid penal interest.", amt:"₹54.24 lakh"}]},
    {name:"Rules broken", sev:"med", items:[
      {t:"Board of Apprenticeship Training, Mumbai used SC/ST grants for general-category apprentices, against NITI Aayog guidelines.", amt:"₹17.34 cr"},
      {t:"IISER Kolkata gave 3 acres and a building worth ₹12.54 cr to a private foundation to run a school without a rent agreement, losing revenue.", amt:"₹6.50 cr"},
      {t:"Faculty at CIT Kokrajhar, IIT Guwahati and IIT Bombay used the Cumulative Professional Development Allowance to buy laptops, desktops and tablets.", amt:"₹1.34 cr"}]}
  ],
  charts:[
    {title:"Compliance cases by amount", type:"bars", unit:"₹ crore", data:[["IGNOU (idle broadcast stations)",23.57],["Apprenticeship Board, Mumbai",17.34],["IISER Kolkata (lost rent)",6.5],["Central Univ. of Tamil Nadu",2.6],["Delhi University colleges",2.01],["AIIMS Rishikesh",1.78],["CIT Kokrajhar, IIT Guwahati, IIT Bombay",1.34],["Sahitya Akademi",0.83],["Central Univ. of Kashmir",0.76],["National Testing Agency",0.54]]},
    {title:"Accounts discipline, out of 479 bodies", type:"bars", unit:"bodies", data:[["Filed accounts late",250],["No actuarial valuation of retirement benefits",164],["Fixed assets not verified",132],["Inventory not verified",111],["Revised accounts after audit",44],["Kept interest on grants",27],["Accounts pending 1–9 years",11]]},
    {title:"How much of the grant was used", type:"split", unit:"₹ crore", data:[["Used",99547.79],["Unspent",13464.22]]}
  ],
  recs:[
    "Physically verify fixed assets and inventories every year.",
    "Account for gratuity and retirement benefits on actuarial valuation.",
    "Return interest earned on grants to the Consolidated Fund of India.",
    "Submit annual accounts on time so Parliament can see how grants are used."
  ],
  recsNote:"Drawn from the gaps the press release lists; the full report has the CAG's formal wording.",
  response:[
    "At Audit's instance, five bodies recovered ₹5.14 crore from employees, loanees and contractors.",
    "Two bodies returned ₹21.87 crore of unspent grants and interest to the Consolidated Fund of India."
  ],
  timeline:[["31 Mar 2023","Year audited closes"],["30 Jun 2023","Deadline for CAB accounts (missed by 250)"],["31 Mar 2024","11 bodies still had 1–9 years of accounts pending"],["12 Aug 2026","Report No. 9 of 2026 tabled in Parliament"]],
  glossary:["Central Autonomous Body","Infructuous expenditure","Disclaimer of opinion","Actuarial valuation","GFR 2017","Consolidated Fund","TDS"],
  exam:{
    prelims:[
      "CAG Report No. 9 of 2026 covers Central Autonomous Bodies for the year ended March 2023.",
      "₹1,13,012.01 crore was released to CABs in 2022-23; ₹13,464.22 crore was unspent.",
      "Accounts of 479 CABs come under CAG audit.",
      "IGNOU's Gyan Vani broadcasting was disrupted for two years over a delayed MoU."
    ],
    mains:"Autonomy without accountability undermines public institutions. Examine with reference to the CAG's 2026 audit of Central Autonomous Bodies. (10 marks)",
    quiz:[
      {q:"How much of the 2022-23 grants to Central Autonomous Bodies was unspent on 31 March 2023?", o:["₹1,348 crore","₹13,464 crore","₹54,282 crore","₹1,13,012 crore"], a:1, w:"₹13,464.22 crore of ₹1,13,012.01 crore."},
      {q:"Which body's delay in renewing an MoU led to two years without educational broadcasting?", o:["NCERT","Prasar Bharati","IGNOU","UGC"], a:2, w:"IGNOU's Gyan Vani stations; ₹23.57 crore was infructuous."},
      {q:"How many Central Autonomous Bodies are audited by the CAG per this report?", o:["111","250","479","1,013"], a:2, w:"479 bodies; 250 of them filed late."}
    ]
  },
  related:["union-accounts-2425","school-education-2026"],
  src:[
    ["CAG press release, 12 Aug 2026 (PDF)","https://saiindia.gov.in/uploads/PressRelease/PR-Press-Brief-Report-No-9-of-2026-English-06a7d3f13b4a235-58094299.pdf","official"],
    ["CAG press releases","https://cag.gov.in/press-release","official"]
  ],
  kw:"autonomous bodies IGNOU IIT IISER AIIMS Rishikesh NTA National Testing Agency Delhi University Sahitya Akademi apprenticeship SC ST grants education Kashmir Tamil Nadu"
},
/* ---------- B.3 ---------- */
{
  id:"school-education-2026", body:"NITI", kind:"Policy report", reportNo:"NITI Aayog policy report",
  title:"School Education System in India: Temporal Analysis and Policy Roadmap for Quality Enhancement", short:"School Education Roadmap", sector:"Education & institutions", ministry:"NITI Aayog",
  date:"May 2026", dateISO:"2026-05-06", tabled:"Released on 6 May 2026", period:"Decade from 2014-15 to 2024-25", flagged:null,
  tldr:[
    "14.71 lakh schools, 24.69 crore students: the world's largest school system, with near-universal primary enrolment.",
    "But only 58.4% reach higher secondary, and about 4 in 10 children leave before finishing Class 12.",
    "Government schools' share of students fell from 71% (2005) to 49.24%; about 1.04 lakh schools have a single teacher."
  ],
  en:"India runs the world's largest school system: 14.71 lakh schools, 24.69 crore students and about 1 crore teachers. Over the decade, electricity, toilets and digital access improved and early reading and maths recovered after COVID. But only 58.4% of eligible students reach higher secondary, about 4 in 10 drop out before Class 12, families are moving to private schools, and over a lakh schools still run with one teacher.",
  hi:"भारत में दुनिया की सबसे बड़ी स्कूली व्यवस्था है: 14.71 लाख स्कूल, 24.69 करोड़ छात्र और लगभग 1 करोड़ शिक्षक। दस साल में बिजली, शौचालय और डिजिटल सुविधाएँ बढ़ीं, और कोविड के बाद शुरुआती पढ़ना-गणित सुधरा। लेकिन उच्च माध्यमिक में केवल 58.4% पहुँचते हैं, लगभग 10 में से 4 बच्चे कक्षा 12 से पहले पढ़ाई छोड़ देते हैं, परिवार निजी स्कूलों की ओर जा रहे हैं, और एक लाख से ज़्यादा स्कूल एक ही शिक्षक के भरोसे हैं।",
  context:{
    what:"A decade-long review of India's school system across all 36 states and UTs, covering access, infrastructure, equity, digital learning and learning outcomes, with a roadmap for quality.",
    why:"Enrolment is nearly universal at the primary level, so the challenge has shifted to keeping children in school and making sure they learn. The report sets measurable goals for that shift.",
    how:"Comparison over time using UDISE+ 2024-25, ASER 2024, PARAKH Rashtriya Sarvekshan 2024 and the National Achievement Surveys of 2017 and 2021, presented as state-wise heat maps."
  },
  nums:[["14.71 lakh","Schools",0],["24.69 crore","Students",0],["58.4%","Higher secondary gross enrolment ratio",1],["11.5%","Dropout rate at secondary level",1],["49.24%","Students in government schools (71% in 2005)",0],["~1.04 lakh","Single-teacher schools",1]],
  themes:[
    {name:"What improved", sev:"low", items:[
      {t:"Gross enrolment is near universal at primary (90.9%) and upper primary (90.3%), and primary dropout is just 0.3%.", amt:""},
      {t:"Transition from secondary to higher secondary rose from 67.7% in 2014-15 to 75.1% in 2024-25.", amt:""},
      {t:"Functional girls' toilets in 94% of schools and electricity in 91.9%; 99% have drinking water.", amt:""},
      {t:"Foundational reading and maths recovered after COVID, linked to NIPUN Bharat and NEP 2020 reforms.", amt:""}]},
    {name:"Children leave too early", sev:"high", items:[
      {t:"Higher secondary GER is only 58.4%; lowest in Bihar (38.1%), Meghalaya (39.7%), Nagaland (39.8%) and Assam (43.5%).", amt:""},
      {t:"Dropout climbs from 0.3% (primary) to 3.5% (upper primary) to 11.5% (secondary). About 4 in 10 who enter leave before finishing higher secondary.", amt:""}]},
    {name:"Learning still weak", sev:"high", items:[
      {t:"Grade 8 students able to read a Grade 2 text fell from 74.7% (2014) to 71.1% (2024); only 45.8% can do basic division.", amt:""},
      {t:"PARAKH: only 37% of Grade 9 students perform at grade level in mathematics.", amt:""},
      {t:"Rote learning still dominates over competency-based teaching.", amt:""}]},
    {name:"Teachers stretched thin", sev:"high", items:[
      {t:"About 1.04 lakh schools (over 7%) have a single teacher.", amt:""},
      {t:"Bihar alone has 2.08 lakh elementary teacher vacancies; Jharkhand, Madhya Pradesh and Karnataka also have large shortages.", amt:""},
      {t:"Nearly 14% of planned teaching days are lost to non-academic work.", amt:""},
      {t:"Only 10–15% of CTET/State TET candidates score above the 60% qualifying mark.", amt:""}]},
    {name:"Fragmented and shrinking public schools", sev:"med", items:[
      {t:"Government schools' share of enrolment fell from 71% in 2005 to 49.24% in 2024-25; private unaided schools now hold 38.8%.", amt:""},
      {t:"Over a third of schools have fewer than 50 students; 7,993 have zero enrolment (West Bengal 3,812, Telangana 2,245).", amt:""},
      {t:"Only about 5% of schools offer continuous Classes 1 to 12, forcing children to switch schools and raising dropout.", amt:""}]},
    {name:"Infrastructure gaps that remain", sev:"med", items:[
      {t:"Internet in 63.5% of schools and functional smart classrooms in 30.6%; rural schools lag.", amt:""},
      {t:"48.3% of government secondary schools lack a functional science lab.", amt:""},
      {t:"1.19 lakh schools without functional electricity and 59,829 without handwashing facilities.", amt:""}]}
  ],
  charts:[
    {title:"Enrolment drops as children grow", type:"bars", unit:"gross enrolment ratio, %", max:100, data:[["Primary",90.9],["Upper primary",90.3],["Secondary",78.7],["Higher secondary",58.4]]},
    {title:"Dropout rate by stage", type:"bars", unit:"%", data:[["Primary",0.3],["Upper primary",3.5],["Secondary",11.5]]},
    {title:"States with the lowest higher-secondary enrolment", type:"bars", unit:"GER, %", max:100, data:[["India average",58.4],["Assam",43.5],["Nagaland",39.8],["Meghalaya",39.7],["Bihar",38.1]]},
    {title:"Share of students in government schools", type:"bars", unit:"%", max:100, data:[["2005",71],["2024-25",49.24]]},
    {title:"School facilities", type:"bars", unit:"% of schools", max:100, data:[["Drinking water",99],["Girls' toilets",94],["Electricity",91.9],["Internet",63.5],["Smart classrooms",30.6]]}
  ],
  recs:[
    "Merge small schools into composite schools and school complexes to share teachers and labs.",
    "Universal digital infrastructure, libraries, labs and inclusive facilities, starting in underserved districts.",
    "Governance reform and capacity building at state, district and school levels.",
    "State and District Task Forces on School Quality.",
    "Stronger School Management Committees for community accountability.",
    "Transparent teacher recruitment, rational deployment and continuous training.",
    "Digital and broadcast learning for remote areas.",
    "Targeted support for girls, SC/ST students, migrant children and dropouts.",
    "Strengthen foundational literacy and numeracy.",
    "Holistic education, including mental health and socio-emotional learning.",
    "Reimagined vocational education with internships and local market links.",
    "Better early childhood education through Anganwadi–school integration.",
    "Use AI for personalised learning and teacher support."
  ],
  recsNote:"13 recommendations, with 33 implementation pathways and 125+ measurable indicators.",
  response:["This is a policy roadmap for states and the Ministry of Education; school education is in the Concurrent List, so states lead implementation."],
  timeline:[["2005","Government schools enrol 71% of students"],["2014-15","Baseline year for the decade review"],["2020","National Education Policy"],["2024-25","UDISE+ data used in the report"],["6 May 2026","Report released"]],
  glossary:["GER","UDISE+","ASER","PARAKH","NIPUN Bharat","Composite school","Single-teacher school"],
  exam:{
    prelims:[
      "Released by NITI Aayog on 6 May 2026.",
      "Data sources: UDISE+ 2024-25, ASER 2024, PARAKH 2024, NAS 2017 and 2021.",
      "14.71 lakh schools, 24.69 crore students, about 1.01 crore teachers.",
      "Higher secondary GER 58.4%; lowest in Bihar (38.1%).",
      "13 recommendations, 33 pathways, 125+ performance indicators."
    ],
    mains:"India has solved the problem of access in school education but not of learning and retention. Discuss using NITI Aayog's 2026 school education report. (15 marks)",
    quiz:[
      {q:"What is India's higher secondary GER per NITI Aayog's 2026 school report?", o:["58.4%","72.1%","49.25%","38.8%"], a:0, w:"58.4%."},
      {q:"How many recommendations does the report make?", o:["11","13","33","125"], a:1, w:"13 recommendations; 33 is the number of pathways."},
      {q:"Which state has the lowest higher secondary GER per the report?", o:["Assam","Meghalaya","Bihar","Nagaland"], a:2, w:"Bihar, at 38.1%."},
      {q:"Which survey is conducted under PARAKH?", o:["Rashtriya Sarvekshan","ASER","UDISE+","PLFS"], a:0, w:"PARAKH Rashtriya Sarvekshan 2024 assessed student competencies."}
    ]
  },
  related:["skilling-viksit-2047","cab-report-9-2026"],
  src:[
    ["Vision IAS summary","https://visionias.in/blog/current-affairs/niti-aayog-school-education-report-2026-indias-policy-roadmap-for-quality-enhancement","analysis"],
    ["Vajiram & Ravi summary","https://vajiramandravi.com/current-affairs/report-on-school-education/","analysis"],
    ["IASGyan summary","https://www.iasgyan.in/daily-current-affairs/school-education-system-in-india-niti-aayog-report","analysis"],
    ["NITI Aayog reports","https://niti.gov.in/","official"]
  ],
  kw:"school education UDISE ASER PARAKH NAS GER teachers private schools NEP NIPUN AI dropout Bihar single teacher"
},
/* ---------- B.4 ---------- */
{
  id:"union-accounts-2425", body:"CAG", kind:"Financial audit", reportNo:"Report No. 6 of 2026",
  title:"Accounts of the Union Government for 2024-25", short:"Union Accounts 2024-25", sector:"Public finance", ministry:"Ministry of Finance and all Union ministries",
  date:"Apr 2026", dateISO:"2026-04-02", tabled:"Tabled in Parliament on 2 April 2026", period:"Financial year 2024-25", flagged:54282.32,
  flaggedNote:"Grants still without utilisation certificates. Other flagged items (misclassification, short transfers) are listed separately below.",
  tldr:[
    "₹54,282 crore of grants have no proof they were used for their purpose. Some date back to 1985-86.",
    "₹12,754 crore of spending and receipts were booked under the wrong heads, which distorts what the government reports.",
    "₹9,222 crore of cess was not moved into the funds it was collected for, such as Prarambhik Shiksha Kosh."
  ],
  en:"This is CAG's yearly check of the Centre's own account books. The Centre gave out grants worth over ₹54,000 crore that nobody has yet proven were spent on what they were meant for. Spending and receipts worth ₹12,754 crore were booked under the wrong heads, cess money was not moved into its earmarked funds, and ₹3,880 crore of cash still does not match RBI's books. Ministries also left ₹4.91 lakh crore of approved money unspent.",
  hi:"यह केंद्र सरकार के अपने खातों की CAG की सालाना जाँच है। केंद्र ने ₹54,000 करोड़ से ज़्यादा के अनुदान दिए, लेकिन अब तक प्रमाण नहीं है कि पैसा सही काम में लगा। ₹12,754 करोड़ के खर्च और प्राप्तियाँ गलत मदों में दर्ज हुईं, सेस की राशि अपने तय कोष में नहीं पहुँची, और ₹3,880 करोड़ का नकद शेष RBI के खातों से मेल नहीं खाता। मंत्रालयों ने ₹4.91 लाख करोड़ की स्वीकृत राशि खर्च ही नहीं की।",
  context:{
    what:"Every year the CAG audits the Union Government's Finance Accounts and Appropriation Accounts. Together they are the official record of every rupee the Centre collected, borrowed and spent. This report covers 2024-25.",
    why:"Parliament approves spending grant by grant. This audit shows whether ministries stuck to what Parliament approved, whether the deficit and debt figures can be trusted, and whether money handed to states and agencies was actually used.",
    how:"Financial and compliance audit of the Union Government Finance Accounts and the Appropriation Accounts for 102 grants and appropriations in 2024-25."
  },
  nums:[["₹54,282 cr","Grants without utilisation certificates",1],["₹12,754 cr","Booked under the wrong head",1],["₹9,222 cr","Cess not moved to reserve funds",1],["₹4,91,303 cr","Approved but left unspent",0],["4.62%","Fiscal deficit as share of GDP",0],["₹50,85,089 cr","Total expenditure in 2024-25",0]],
  themes:[
    {name:"Money given, proof missing", sev:"high", items:[
      {t:"33,973 utilisation certificates across 15 ministries and departments were pending on 31 March 2025. GFR Rule 238 requires them within 12 months. Some cases date back to 1985-86.", amt:"₹54,282.32 cr"},
      {t:"Most of the pendency is recent: grants from 2021-22 to 2023-24.", amt:"₹38,287.52 cr"},
      {t:"Ministry of Housing and Urban Affairs has the largest pendency.", amt:"₹18,272.91 cr"},
      {t:"Department of Higher Education is second.", amt:"₹14,359.76 cr"}]},
    {name:"Books that don't add up", sev:"high", items:[
      {t:"Expenditure and receipts booked under the wrong heads. ₹8,742.56 cr was expenditure and ₹4,011.91 cr was receipts.", amt:"₹12,754.47 cr", ref:"Para 3.5"},
      {t:"Department of Atomic Energy recorded day-to-day (revenue) spending as capital spending.", amt:"₹3,089.97 cr"},
      {t:"CBDT and CBIC showed non-tax revenue as tax revenue.", amt:"₹4,011.91 cr"},
      {t:"Cash balance not reconciled with the Reserve Bank of India.", amt:"₹3,880.67 cr", ref:"Para 3.2.2"},
      {t:"Adverse balance under the Ministry of External Affairs, caused by an incorrect transfer entry.", amt:"₹44,714.77 cr"},
      {t:"Netting in suspense heads understated pending balances by 76.61% (civil) and 65.19% (other bank suspense).", amt:""},
      {t:"56 adverse balances in fund and deposit heads; 39 unresolved for over five years.", amt:""},
      {t:"Heavy use of the catch-all 'Minor Head 800' hides what money was spent on: over half of spending under three major heads (₹4,957.58 cr) and of receipts under six (₹4,087.43 cr).", amt:""}]},
    {name:"Earmarked money not where it should be", sev:"high", items:[
      {t:"Cess and levies short-transferred to four reserve funds, including Prarambhik Shiksha Kosh and PM Swasthya Suraksha Nidhi.", amt:"₹9,222 cr", ref:"Para 3.3.1"},
      {t:"Compensatory afforestation (CAMPA) money pending disbursement to states and UTs.", amt:"₹10,380.36 cr", ref:"Para 3.1.2"},
      {t:"CAMPA money kept in bank accounts instead of the Public Account.", amt:"₹2,192.95 cr"},
      {t:"Dormant funds and deposits that have outlived their purpose and need review.", amt:"₹844.93 cr", ref:"Para 3.3.2"}]},
    {name:"Spending pushed off the books", sev:"med", items:[
      {t:"Pension e-scrolls parked in a suspense account because of fund shortages, understating revenue expenditure.", amt:"₹3,042.32 cr", ref:"Para 3.2.2.6"},
      {t:"Revenue expenditure reversed to suspense without a letter of authorisation.", amt:"₹2.35 cr"}]},
    {name:"Dues not collected", sev:"med", items:[
      {t:"Loans and advances given by the Centre that are in arrears, out of ₹9,94,278.08 cr outstanding.", amt:"₹91,534 cr"},
      {t:"Short dividend received from seven entities.", amt:"₹842.82 cr"},
      {t:"Guarantee fee not recovered from three entities.", amt:"₹322.13 cr"}]},
    {name:"Budgeting that missed the mark", sev:"low", items:[
      {t:"Total savings across 102 grants: approved ₹1,47,54,642 cr, spent ₹1,42,63,340 cr.", amt:"₹4,91,302.81 cr"},
      {t:"19 grants saved ₹5,000 cr or more each; seven of them did so three years running.", amt:""},
      {t:"26 supplementary provisions were unnecessary because final spending was below the original budget.", amt:""},
      {t:"18 re-appropriations above ₹10 cr each moved money to heads that already had enough.", amt:""}]}
  ],
  charts:[
    {title:"The biggest flagged items", type:"bars", unit:"₹ crore", data:[["Grants without utilisation certificates",54282.32],["MEA adverse balance",44714.77],["Booked under wrong head",12754.47],["CAMPA money pending to states",10380.36],["Cess not moved to reserve funds",9222],["Cash not reconciled with RBI",3880.67],["Pensions parked in suspense",3042.32]]},
    {title:"Who holds the unproven grants", type:"bars", unit:"₹ crore", data:[["Housing & Urban Affairs",18272.91],["Higher Education",14359.76],["13 other ministries/departments",21649.65]], note:"'13 others' is the balance of the ₹54,282.32 cr total."},
    {title:"How much of day-to-day spending is locked in", type:"bars", unit:"% of revenue expenditure", data:[["Salary, pension and interest",46.07],["Interest alone",29.2]]}
  ],
  recs:[
    "Follow accounting classification rules strictly so the accounts show where money really went.",
    "Build a digital module in the Public Financial Management System (PFMS) to track spending and utilisation in real time.",
    "Review the dormant funds and deposits that have outlived their purpose."
  ],
  response:[
    "The Ministry of External Affairs attributed its ₹44,714.77 crore adverse balance to an incorrect transfer entry.",
    "The report now goes to Parliament's Public Accounts Committee, which can call ministries to explain."
  ],
  timeline:[["31 Mar 2025","Financial year 2024-25 closes"],["2 Apr 2026","Report No. 6 of 2026 tabled in Parliament"],["Next","Examination by the Public Accounts Committee"]],
  glossary:["Utilisation certificate","GFR 2017","Minor Head 800","Suspense account","Adverse balance","Public Account","Consolidated Fund","Re-appropriation","Supplementary grant","Fiscal deficit","CAMPA"],
  exam:{
    prelims:[
      "CAG Report No. 6 of 2026 audited the Union Government Accounts for 2024-25 and was tabled on 2 April 2026.",
      "GFR 2017 Rule 238 requires utilisation certificates within 12 months.",
      "Fiscal deficit 4.62% and revenue deficit 1.78% of GDP in 2024-25, per the audit.",
      "Internal debt rose 8.35% to ₹1,59,25,949 crore; market loans were 69.96% of it.",
      "Cess and surcharge were 13.94% of gross tax revenue, down from 20.23% in 2020-21.",
      "Income tax grew 17.02% and made up 31.16% of gross tax revenue."
    ],
    mains:"Pending utilisation certificates and misclassification of accounts weaken Parliament's control over public money. Discuss with reference to the CAG's audit of the Union Government Accounts for 2024-25, and suggest reforms. (15 marks)",
    quiz:[
      {q:"Under which rule must utilisation certificates be submitted within 12 months?", o:["Rule 238, GFR 2017","Article 151","Section 4, FRBM Act","Rule 56, Fundamental Rules"], a:0, w:"General Financial Rules 2017, Rule 238."},
      {q:"Which ministry had the largest pending utilisation certificates in 2024-25?", o:["Rural Development","Housing and Urban Affairs","Higher Education","External Affairs"], a:1, w:"MoHUA, at ₹18,272.91 crore."},
      {q:"What was the Union fiscal deficit as a share of GDP in 2024-25 per the CAG audit?", o:["3.5%","4.62%","5.9%","1.78%"], a:1, w:"4.62%. 1.78% is the revenue deficit."},
      {q:"'Minor Head 800' is criticised by the CAG because it:", o:["Records only defence spending","Is a catch-all head that hides what money was spent on","Is used only for cess collections","Records foreign loans"], a:1, w:"It is meant for miscellaneous items, but heavy use reduces transparency."}
    ]
  },
  related:["cab-report-9-2026","fiscal-health-2026"],
  src:[
    ["CAG press release on Report No. 6 of 2026 (PDF)","https://saiindia.gov.in/uploads/PressRelease/PR-Press-Release-on-Report-no-6-of-2026-in-english-069ce58face4518-40869759.pdf","official"],
    ["Northeast Now: CAG flags ₹54,282 crore in pending UCs","https://nenow.in/national/cag-flags-modi-govts-rs-54282-crore-unaccounted-spendingq.html","coverage"],
    ["CAG press releases","https://cag.gov.in/press-release","official"]
  ],
  kw:"utilisation certificate UC grants MoHUA higher education atomic energy CBDT CBIC cess minor head 800 RBI external affairs PFMS CAMPA fiscal deficit debt budget savings"
},
/* ---------- B.5 ---------- */
{
  id:"fiscal-health-2026", body:"NITI", kind:"Index", reportNo:"Second annual edition",
  title:"Fiscal Health Index 2026", short:"Fiscal Health Index 2026", sector:"Public finance", ministry:"NITI Aayog",
  date:"Mar 2026", dateISO:"2026-03-11", tabled:"Released on 11 March 2026", period:"Scores for FY 2023-24; trends from 2014-15", flagged:null,
  tldr:[
    "Odisha tops 18 major states again with 73.1, nearly 18 points ahead of Goa.",
    "Punjab (12.4), Andhra Pradesh and West Bengal are at the bottom, weighed down by debt and committed spending.",
    "New this year: a separate ranking of 10 North-Eastern and Himalayan states, led by Arunachal Pradesh."
  ],
  en:"NITI Aayog scores 18 major states on how well they manage money: quality of spending, revenue raised, deficits, debt and whether that debt is sustainable. Odisha tops again with 73.1, far ahead of Goa and Jharkhand. Punjab, West Bengal and Andhra Pradesh are near the bottom, with high debt and most revenue going to salaries, pensions and interest. This edition adds a separate ranking for 10 North-Eastern and Himalayan states, led by Arunachal Pradesh.",
  hi:"नीति आयोग 18 बड़े राज्यों को इस आधार पर अंक देता है कि वे पैसा कैसे संभालते हैं: खर्च की गुणवत्ता, राजस्व, घाटा, कर्ज़ और कर्ज़ की स्थिरता। ओडिशा 73.1 अंकों के साथ फिर पहले स्थान पर है, गोवा और झारखंड से बहुत आगे। पंजाब, पश्चिम बंगाल और आंध्र प्रदेश सबसे नीचे हैं, जहाँ कर्ज़ ज़्यादा है और ज़्यादातर राजस्व वेतन, पेंशन और ब्याज में जाता है। इस बार 10 पूर्वोत्तर और हिमालयी राज्यों की अलग रैंकिंग भी है, जिसमें अरुणाचल प्रदेश सबसे आगे है।",
  context:{
    what:"An annual index that benchmarks the fiscal health of states using five pillars: Quality of Expenditure, Revenue Mobilisation, Fiscal Prudence, Debt Index and Debt Sustainability. This is the second edition.",
    why:"States spend about two-thirds of all public money and carry about a third of India's public debt. Their debt rose from about 16.7% of GSDP in 2013-14 to nearly 23% in 2022-23, so their finances shape national stability.",
    how:"Scores built from CAG-verified state accounts for FY 2023-24, with trend analysis from 2014-15. States are grouped as Achievers, Front-Runners, Performers and Aspirational."
  },
  nums:[["73.1","Odisha's score, rank 1 (up from 67.4)",0],["1.73%","Odisha's fiscal deficit, of GSDP",0],["12.4","Punjab's score, the lowest",1],["18 + 10","Major states, plus NE & Himalayan states ranked separately",0],["~23%","States' debt-to-GSDP (2022-23), up from 16.7%",1],["~⅓","States' share of India's public debt",0]],
  themes:[
    {name:"Who is in good health", sev:"low", items:[
      {t:"Achievers: Odisha (73.1), Goa (54.7), Jharkhand (50.5).", amt:""},
      {t:"Front-Runners include Gujarat (49.9), Maharashtra (45.0), Chhattisgarh, Telangana, Uttar Pradesh and Karnataka.", amt:""},
      {t:"Achiever traits: own-tax share above 60%, capital outlay around 4–5% of GSDP, fiscal deficit under 3% and debt under 25% of GSDP.", amt:""}]},
    {name:"Who is under stress", sev:"high", items:[
      {t:"Aspirational: West Bengal (23.8), Kerala, Andhra Pradesh (23.1) and Punjab (12.4, down from 19.9).", amt:""},
      {t:"Typical stressed state: debt around 35–45% of GSDP, 50–60% of revenue receipts going to salaries and pensions, and interest above 15–20% of revenue.", amt:""},
      {t:"Persistent revenue and fiscal deficits, often breaching FRBM limits.", amt:""}]},
    {name:"Biggest movers over the decade", sev:"med", items:[
      {t:"Odisha gained 21.3 points, Jharkhand 13.7 and Maharashtra 7.3 compared with their 2014–17 average.", amt:""},
      {t:"Andhra Pradesh fell 14.8 points, Tamil Nadu 10.7 and Madhya Pradesh 10.4.", amt:""},
      {t:"Jharkhand jumped from 13th to 3rd; Maharashtra from 12th to 5th; Karnataka slipped from 3rd to 9th; Andhra Pradesh from 11th to 17th; Bihar moved up from Aspirational to Performer.", amt:""}]},
    {name:"North-East and Himalayan states", sev:"med", items:[
      {t:"Arunachal Pradesh leads (59.5) on spending quality and prudent debt; Uttarakhand (52.5) on own-revenue.", amt:""},
      {t:"Tripura scores 44.1; Nagaland 27.1, Himachal Pradesh 22.0 and Manipur 17.6 are Aspirational, with debt around 40–50% of GSDP.", amt:""}]}
  ],
  charts:[
    {title:"Major states: scores we know", type:"bars", unit:"score out of 100", max:100, data:[["Odisha",73.1],["Goa",54.7],["Jharkhand",50.5],["Gujarat",49.9],["Maharashtra",45],["Madhya Pradesh",37.8],["West Bengal",23.8],["Andhra Pradesh",23.1],["Punjab",12.4]], note:"Published summaries do not give every state's score; only those reported are shown."},
    {title:"North-Eastern & Himalayan states", type:"bars", unit:"score out of 100", max:100, data:[["Arunachal Pradesh",59.5],["Uttarakhand",52.5],["Tripura",44.1],["Nagaland",27.1],["Himachal Pradesh",22],["Manipur",17.6]]},
    {title:"Change since 2014–17 average", type:"diverge", unit:"points", data:[["Odisha",21.3],["Jharkhand",13.7],["Maharashtra",7.3],["Madhya Pradesh",-10.4],["Tamil Nadu",-10.7],["Andhra Pradesh",-14.8]]}
  ],
  groups:[
    ["Achievers","good",["Odisha","Goa","Jharkhand"]],
    ["Front-Runners","ok",["Gujarat","Maharashtra","Chhattisgarh","Telangana","Uttar Pradesh","Karnataka"]],
    ["Performers","warn",["Madhya Pradesh","Haryana","Bihar","Tamil Nadu","Rajasthan"]],
    ["Aspirational","bad",["West Bengal","Kerala","Andhra Pradesh","Punjab"]]
  ],
  groupsNote:"Grouping as reported by Drishti IAS. Some summaries place Karnataka, Telangana and Tamil Nadu one category lower; check the official PDF.",
  recs:[
    "Broaden the GST base, improve compliance and raise states' own tax revenue with digital tax administration.",
    "Curb committed expenditure and rationalise subsidies.",
    "Spend more, and better, on capital assets.",
    "Keep state fiscal deficits around 3% of GSDP in line with FRBM targets.",
    "Rein in off-budget borrowing and improve cash management, using CAG-verified data."
  ],
  response:["The index is a ranking meant to push states through competition; it carries no penalties."],
  timeline:[["2014-15","Start of trend data"],["2023-24","Year scored"],["11 Mar 2026","Second edition released"]],
  glossary:["Fiscal deficit","GSDP","FRBM","Committed expenditure","Own tax revenue","Debt sustainability"],
  exam:{
    prelims:[
      "Fiscal Health Index is published by NITI Aayog; the 2026 edition is the second and scores FY 2023-24.",
      "Five pillars: Quality of Expenditure, Revenue Mobilisation, Fiscal Prudence, Debt Index, Debt Sustainability.",
      "Odisha ranks first (73.1); Arunachal Pradesh leads NE & Himalayan states.",
      "Categories: Achievers, Front-Runners, Performers, Aspirational.",
      "Odisha's fiscal deficit was 1.73% of GSDP, within the 3% FRBM limit."
    ],
    mains:"Fiscal health of states is central to India's macroeconomic stability. Examine in the context of the Fiscal Health Index 2026. (15 marks)",
    quiz:[
      {q:"Which state topped NITI Aayog's Fiscal Health Index 2026?", o:["Gujarat","Goa","Odisha","Maharashtra"], a:2, w:"Odisha, score 73.1."},
      {q:"Which financial year does FHI 2026 assess?", o:["2025-26","2024-25","2023-24","2022-23"], a:2, w:"FY 2023-24."},
      {q:"Which state leads the North-Eastern and Himalayan category?", o:["Uttarakhand","Arunachal Pradesh","Sikkim","Tripura"], a:1, w:"Arunachal Pradesh, 59.5."},
      {q:"Which of these is NOT one of the five FHI pillars?", o:["Debt Sustainability","Revenue Mobilisation","Ease of Doing Business","Quality of Expenditure"], a:2, w:"The fifth and fourth pillars are Fiscal Prudence and Debt Index."}
    ]
  },
  related:["union-accounts-2425"],
  src:[
    ["Fiscal Health Index 2026 (NITI Aayog PDF)","https://niti.gov.in/sites/default/files/2026-03/Fiscal-Health-Index-2026.pdf","official"],
    ["Drishti IAS analysis","https://www.drishtiias.com/current-affairs-news-analysis-editorials/news-analysis/14-03-2026/print/manual","analysis"],
    ["Dataful: India's fiscal divide","https://insights.dataful.in/articles/indias-fiscal-divide-odisha-leads-as-several-states-slip-in-niti-aayogs-fiscal-health-index","analysis"],
    ["ClearIAS summary","https://www.clearias.com/fiscal-health-index-2026/","analysis"]
  ],
  kw:"fiscal health index states odisha goa jharkhand gujarat punjab kerala west bengal debt deficit GSDP arunachal FRBM uttarakhand"
},
/* ---------- B.6 ---------- */
{
  id:"pmkvy-2025", body:"CAG", kind:"Performance audit", reportNo:"Report No. 20 of 2025",
  title:"Skill Development under Pradhan Mantri Kaushal Vikas Yojana (PMKVY)", short:"PMKVY skill scheme audit", sector:"Skilling & employment", ministry:"Ministry of Skill Development and Entrepreneurship",
  date:"Dec 2025", dateISO:"2025-12-18", tabled:"Tabled in Parliament on 18 December 2025", period:"PMKVY phases 1–3 (2015–2022)", flagged:258.92,
  flaggedNote:"₹222.63 cr wrongly estimated or delayed central funds, ₹24.13 cr overcharged by NSDC, and ₹12.16 cr interest retained by NSDC.",
  tldr:[
    "94.53% of beneficiary records had invalid or blank bank details, such as '11111111111'.",
    "Only 41% of certified trainees (23.18 lakh of 56.14 lakh) got a job.",
    "Same photos reused across batches, edited evidence, and an inspector 'present' in several states on one day."
  ],
  en:"India's flagship skilling scheme spent about ₹14,450 crore over three phases but could not show who it actually trained. Almost 95% of beneficiary records had invalid or blank bank details, photographs were reused or edited, and closed centres were shown as active. Only 41% of certified trainees were placed in jobs, and many were enrolled without meeting the age, education or experience rules.",
  hi:"देश की प्रमुख कौशल योजना ने तीन चरणों में लगभग ₹14,450 करोड़ खर्च किए, लेकिन यह साबित नहीं कर पाई कि असल में किसे प्रशिक्षण मिला। लगभग 95% लाभार्थी रिकॉर्ड में बैंक विवरण गलत या खाली थे, फ़ोटो दोबारा इस्तेमाल या एडिट की गईं, और बंद केंद्रों को चालू दिखाया गया। प्रमाणित प्रशिक्षुओं में से केवल 41% को नौकरी मिली, और कई का नामांकन उम्र, शिक्षा या अनुभव के नियम तोड़कर हुआ।",
  context:{
    what:"PMKVY was launched in July 2015 as the Skill Development Ministry's flagship scheme for short industry-relevant courses and certification. It has three tracks: Short-Term Training for dropouts and the unemployed, Recognition of Prior Learning for people who already have skills, and Special Projects for specific groups or regions.",
    why:"Phases 1 to 3 had an outlay of about ₹14,450 crore and a target of 1.32 crore candidates. The scheme is a pillar of India's plan to turn a young population into an employable workforce.",
    how:"Performance audit of MSDE, NSDC, the National Skill Development Fund and NCVET, with field checks in eight states: Assam, Bihar, Jharkhand, Kerala, Maharashtra, Odisha, Rajasthan and Uttar Pradesh. PMKVY 4.0 (from February 2023) was not covered."
  },
  nums:[["94.53%","Records with invalid or blank bank details",1],["41%","Certified trainees who got placed",0],["₹14,450 cr","Outlay for phases 1–3",0],["56.14 lakh","Certified under short-term training and special projects",0],["36%","Candidates who never got the ₹500 DBT payout",1],["13%","Batches using Aadhaar-based attendance",1]],
  themes:[
    {name:"Records that can't be trusted", sev:"high", items:[
      {t:"Bank account fields were invalid or blank in most beneficiary records, often filled with placeholders like '11111111111'.", amt:"94.53%"},
      {t:"About 36% of candidates did not get the ₹500 DBT payout because their bank details were insufficient.", amt:""},
      {t:"The same photographs were used as evidence for different trainings, and some photos were edited.", amt:""},
      {t:"Geotagging was missing in 84% of on-spot physical inspections. One inspector was recorded at locations in different states on the same day.", amt:""},
      {t:"The Skill India Portal had no policy for keeping photo and video evidence, and weak checks on trainer, assessor and candidate identity.", amt:"", ref:"Para 2.4"}]},
    {name:"The wrong people enrolled", sev:"high", items:[
      {t:"Candidates were enrolled without meeting the age, education and work-experience criteria in the guidelines.", amt:"", ref:"Para 3.2"},
      {t:"No mechanism existed to check that beneficiaries were actually unemployed youth or school and college dropouts.", amt:""},
      {t:"Only 13% of short-term and special-project batches since 2018 used the required Aadhaar-based attendance; 24 of 86 surveyed centres lacked the equipment.", amt:""}]},
    {name:"Training that didn't lead to jobs", sev:"high", items:[
      {t:"Of 56.14 lakh candidates certified under short-term training and special projects, 23.18 lakh were placed.", amt:"41%", ref:"Para 3.6"},
      {t:"In Kerala, training partners submitted false placement documents. The state recovered ₹22.33 lakh and blacklisted the agency after Audit flagged it.", amt:"₹22.33 lakh"},
      {t:"In the RPL 'Best-in-Class Employer' component run through NSDC, documents offered as proof of training were unreliable.", amt:"", ref:"Para 3.8"}]},
    {name:"Planning without data", sev:"med", items:[
      {t:"The national policy estimated 40.29 crore people needed skilling across 24 sectors by 2022, but there was no job-role-level skill-gap data to plan training.", amt:"", ref:"Para 2.1"},
      {t:"No National Skill Development Plan or long-term strategy existed. Only 2 of the 8 audited states had state skill plans.", amt:""},
      {t:"Convergence with 22 other ministries and state governments that run skilling was still ineffective after three phases. NCVET, the quality regulator, was still being set up.", amt:"", ref:"Paras 2.2, 2.3.2"}]},
    {name:"Money management", sev:"med", items:[
      {t:"Incorrect estimation and delayed transfer of central-component funds burdened the Central Funding Institution.", amt:"₹222.63 cr", ref:"Para 4.2"},
      {t:"NSDC overcharged the Ministry administrative expenses under PMKVY 1.0.", amt:"₹24.13 cr", ref:"Para 4.3.1"},
      {t:"Interest retained by NSDC, recovered by the Ministry after Audit objected.", amt:"₹12.16 cr"},
      {t:"Nearly 20% of state allocations for 2016–24 were still unspent in March 2024. NSDC did not release funds to District Skill Councils despite instructions.", amt:""}]}
  ],
  charts:[
    {title:"From target to job", type:"funnel", unit:"lakh people", data:[["Target (phases 1–3, all tracks)",132],["Certified (short-term + special projects)",56.14],["Placed in a job",23.18]], note:"The target includes Recognition of Prior Learning; the certified and placed figures cover short-term training and special projects only."},
    {title:"How often basic checks failed", type:"bars", unit:"%", max:100, data:[["Records with invalid bank details",94.53],["Batches without Aadhaar attendance",87],["Inspections without geotag",84],["Candidates without ₹500 DBT",36]]},
    {title:"Money flagged", type:"bars", unit:"₹ crore", data:[["Central funds wrongly estimated or delayed",222.63],["NSDC admin overcharge",24.13],["Interest retained by NSDC",12.16]]}
  ],
  recs:[
    "Align training with skill gaps in specific job roles and real market demand.",
    "Prepare the National Skill Development Plan quickly.",
    "Adopt a long-term strategic plan for direction and continuity.",
    "Integrate with the Education Ministry's UDISE database to identify genuine beneficiaries.",
    "Map every skilling programme across central and state governments.",
    "Draw up a roadmap for convergence and data integration between the Centre and states."
  ],
  response:[
    "The Ministry said it would use UDISE data to support registration and verify candidates.",
    "It plans Aadhaar-authenticated e-KYC, checking name, age, date of birth and mobile number.",
    "Certified candidates will be tracked for a year through the Skill India Digital Hub (SIDH) to measure employability.",
    "It will strengthen monitoring and add a data framework to protect accuracy and confidentiality."
  ],
  timeline:[["Jul 2015","PMKVY launched"],["2015–2022","Phases 1 to 3, about ₹14,450 crore"],["Feb 2023","PMKVY 4.0 launched (not covered by this audit)"],["Mar 2024","Nearly 20% of 2016–24 state allocations still unspent"],["18 Dec 2025","Report No. 20 of 2025 tabled in Parliament"]],
  glossary:["Performance audit","PMKVY","NSDC","NCVET","Recognition of Prior Learning","DBT","Skill India Digital Hub"],
  exam:{
    prelims:[
      "PMKVY was launched in July 2015 by the Ministry of Skill Development and Entrepreneurship.",
      "CAG Report No. 20 of 2025 audited PMKVY phases 1–3; it was tabled on 18 December 2025.",
      "In PMKVY 2.0, 75% of funds went to NSDC (centrally managed) and 25% to State Skill Development Missions.",
      "PMKVY's three tracks: Short-Term Training, Recognition of Prior Learning, Special Projects.",
      "NCVET is the regulator meant to set quality standards for vocational training."
    ],
    mains:"The CAG's audit of PMKVY shows that India's skilling effort measured enrolment rather than employment. Critically examine, and suggest how outcome-based skilling can be built. (15 marks)",
    quiz:[
      {q:"What share of PMKVY beneficiary records had invalid or blank bank details per the CAG?", o:["41%","58.4%","94.53%","8.25%"], a:2, w:"94.53%. 41% is the placement rate."},
      {q:"PMKVY's overall placement rate found by the audit was about:", o:["41%","75%","18%","60%"], a:0, w:"23.18 lakh placed out of 56.14 lakh certified."},
      {q:"Which phase of PMKVY was NOT covered by CAG Report No. 20 of 2025?", o:["PMKVY 1.0","PMKVY 2.0","PMKVY 3.0","PMKVY 4.0"], a:3, w:"PMKVY 4.0 began in February 2023 and was still under way."},
      {q:"Which body is meant to regulate quality in vocational education and training?", o:["NSDC","NCVET","AICTE","DGT"], a:1, w:"The National Council for Vocational Education and Training."}
    ]
  },
  related:["skilling-viksit-2047","school-education-2026"],
  src:[
    ["CAG press release on Report No. 20 of 2025 (PDF)","https://cag.gov.in/uploads/PressRelease/PR-Press-Brief-Report-No-20-of-2025-English-06944f390e59d02-19424340.pdf","official"],
    ["PRS Legislative Research: CAG summary of PMKVY (PDF)","https://prsindia.org/files/policy/policy_committee_reports/CAG_Summary-PMKVY.pdf","analysis"],
    ["The Federal: CAG findings on flagship schemes","https://thefederal.com/category/news/cag-reports-put-spotlight-on-governance-gaps-in-pm-modis-flagship-schemes-228778","coverage"]
  ],
  kw:"PMKVY skill india kaushal training placement Ministry of Skill Development MSDE NSDC NCVET beneficiaries RPL Kerala Aadhaar"
},
/* ---------- B.7 (merged into the existing Bharatmala report) ---------- */
{
  id:"bharatmala-2023", body:"CAG", kind:"Performance audit", reportNo:"Performance Audit Report No. 19",
  title:"Implementation of Phase-I of Bharatmala Pariyojana", short:"Bharatmala Phase I", sector:"Roads & infrastructure", ministry:"Ministry of Road Transport and Highways",
  date:"Aug 2023", dateISO:"2023-08-10", tabled:"Tabled in Parliament on 10 August 2023", period:"Phase I up to March 2023", flagged:3697.68,
  flaggedNote:"₹3,598.52 cr diverted from escrow accounts plus ₹99.16 cr excess payments from wrong price formulas. NHAI's ₹91,070 cr extra borrowing is shown separately.",
  tldr:[
    "158% of the approved money was sanctioned while only 76% of the length had been awarded.",
    "Civil cost came to ₹23.89 crore per km against ₹13.98 crore approved. Dwarka Expressway hit about ₹250 crore per km.",
    "Contracts went to bidders with falsified documents, and projects started without land or environmental clearance."
  ],
  en:"Bharatmala Phase I was approved to build 34,800 km of highways for ₹5.35 lakh crore. By March 2023, 158% of that money had been sanctioned while only 76% of the length was even awarded. Costs per kilometre nearly doubled, tendering rules were broken, some contracts went to bidders with falsified documents, and projects started without land or environmental clearance. The best-known case is Delhi's Dwarka Expressway at about ₹250 crore per km.",
  hi:"भारतमाला पहला चरण 34,800 किमी राजमार्ग ₹5.35 लाख करोड़ में बनाने के लिए मंज़ूर हुआ था। मार्च 2023 तक इस राशि का 158% स्वीकृत हो चुका था, जबकि केवल 76% लंबाई के ठेके दिए गए थे। प्रति किमी लागत लगभग दोगुनी हुई, टेंडर नियम तोड़े गए, कुछ ठेके जाली दस्तावेज़ वाले बोलीदाताओं को मिले, और ज़मीन या पर्यावरण मंज़ूरी के बिना काम शुरू हुए। सबसे चर्चित मामला दिल्ली का द्वारका एक्सप्रेसवे है, लगभग ₹250 करोड़ प्रति किमी।",
  context:{
    what:"Bharatmala Pariyojana is an umbrella highway programme approved by the Cabinet Committee on Economic Affairs in October 2017 for 74,942 km of national highways, built mainly to move freight and people faster. Phase I covers 34,800 km, including 10,000 km left over from the earlier NHDP.",
    why:"It is India's largest road programme, with an approved outlay of ₹5,35,000 crore for Phase I, financed heavily through NHAI borrowing that future toll and tax revenue must repay.",
    how:"Performance audit of MoRTH, NHAI and NHIDCL covering planning, prioritisation, funding, award of contracts, execution and monitoring of Phase I, using data up to 31 March 2023."
  },
  nums:[["34,800 km","Phase I length approved",0],["₹5,35,000 cr","Approved outlay",0],["158.24%","Of outlay sanctioned for 75.62% of length",1],["₹23.89 cr/km","Sanctioned civil cost vs ₹13.98 cr approved",1],["₹91,070 cr","NHAI borrowing above approved limit",1],["0 of 35","Multi-modal logistics parks built",1]],
  themes:[
    {name:"Costs ran away", sev:"high", items:[
      {t:"By March 2023, 75.62% of approved length was awarded but 158.24% of the approved money was sanctioned.", amt:""},
      {t:"Sanctioned civil cost per km against ₹13.98 crore approved. Pre-construction cost rose to ₹8.28 crore per km against ₹1.39 crore.", amt:"₹23.89 cr/km"},
      {t:"Dwarka Expressway civil construction reached about ₹250 crore per km against ₹18 crore per km approved.", amt:"₹250 cr/km"},
      {t:"In May 2019 NHAI alone projected it would need ₹10,55,268 crore for its Phase I targets, double the outlay approved for the whole programme.", amt:""},
      {t:"NHAI borrowed ₹3,00,349 crore up to 2021-22 against ₹2,09,279 crore approved; the excess covered time and cost overruns.", amt:"₹91,070 cr"}]},
    {name:"Tendering flaws", sev:"high", items:[
      {t:"Successful bidders did not meet tender conditions, and some were selected on falsified documents.", amt:""},
      {t:"Works were awarded without approved detailed project reports, or on faulty ones. Contractors later used different specifications from the DPRs.", amt:""},
      {t:"High-cost EPC projects such as the Delhi–Vadodara and Dwarka expressways were not scrutinised properly by the Cabinet committee or MoRTH.", amt:""}]},
    {name:"Execution shortcuts", sev:"high", items:[
      {t:"Money diverted from escrow accounts of HAM and BOT projects.", amt:"₹3,598.52 cr"},
      {t:"Wrong price-adjustment formulas in EPC and HAM contracts led to excess payments.", amt:"₹99.16 cr"},
      {t:"Projects were awarded without land in hand, despite assurances to the Cabinet, delaying start and completion.", amt:""},
      {t:"Many projects went ahead without environmental clearance; those without forest clearance were stalled or de-scoped.", amt:""},
      {t:"Third-party monitoring consultants were not appointed or were late, and safety consultants were not ensured.", amt:""}]},
    {name:"Targets and planning", sev:"med", items:[
      {t:"No targets or action plan for the Logistics Performance Index, a stated objective, and none for accident reduction, riding comfort or user satisfaction.", amt:""},
      {t:"NHAI's 'optimisation' raised the Phase I target by about 160% to 64,675 km.", amt:""},
      {t:"₹1,57,324 crore approved under other schemes was counted towards Bharatmala achievements; 78 of 97 NHIDCL projects were really from other schemes.", amt:""},
      {t:"None of the 35 planned multi-modal logistics parks had been developed by March 2023.", amt:""}]},
    {name:"Oversight missing", sev:"med", items:[
      {t:"MoRTH did not set up the half-yearly review with the Public Investment Board and Cabinet committee that was directed.", amt:""},
      {t:"The independent audit of physical and technical parameters ordered by the Cabinet committee was not done.", amt:""},
      {t:"No project-wise accounting, so it is impossible to tell when a stretch has recovered its cost and tolls should drop.", amt:""}]}
  ],
  charts:[
    {title:"Approved vs sanctioned cost per km", type:"pairs", unit:"₹ crore per km", legend:["Approved","Sanctioned"], data:[["Civil cost",13.98,23.89],["Pre-construction cost",1.39,8.28]]},
    {title:"Project modes: planned vs actual", type:"pairs", unit:"% of length awarded by NHAI", max:100, legend:["Approved mix","Actual mix"], data:[["Hybrid annuity (HAM)",60,49.9],["EPC (govt-funded)",30,48.35],["BOT toll (private-funded)",10,1.75]], note:"The shift from private-funded BOT to government-funded EPC moved risk and cost onto the public purse."},
    {title:"The money gap", type:"pairs", unit:"₹ crore", legend:["Approved","Actual / projected"], data:[["Funding need",535000,1055268],["NHAI borrowing",209279,300349]]}
  ],
  recs:[
    "Fix outcome targets (logistics, safety, travel time) and track them.",
    "Do not award projects before land, environmental and forest clearances are in hand.",
    "Appraise DPRs with due diligence and verify bidder documents.",
    "Keep project-wise accounts so tolls can fall once costs are recovered.",
    "Hold the review meetings and independent technical audit the Cabinet directed."
  ],
  recsNote:"The press release does not list formal recommendations; these follow directly from the findings.",
  response:[
    "The Ministry's replies to each finding are in the full report; the press release does not summarise them.",
    "The report goes to Parliament's Public Accounts Committee for examination."
  ],
  timeline:[["Oct 2017","Cabinet approves Bharatmala for 74,942 km; Phase I 34,800 km"],["May 2019","NHAI projects ₹10.55 lakh crore need, double the approved outlay"],["Sep 2022","Original Phase I completion date"],["31 Mar 2023","Audit data cut-off: 75.62% of length awarded"],["10 Aug 2023","Audit report tabled in Parliament"]],
  glossary:["Performance audit","EPC","HAM","BOT","DPR","Escrow account","CCEA"],
  exam:{
    prelims:[
      "Bharatmala Pariyojana was approved by the CCEA in October 2017.",
      "Phase I covers 34,800 km, including 10,000 km of residual NHDP length.",
      "Approved Phase I outlay: ₹5,35,000 crore.",
      "Approved project-mode mix: HAM 60%, EPC 30%, BOT 10%.",
      "35 multi-modal logistics parks were part of Phase I; none was built by March 2023."
    ],
    mains:"Cost overruns in Bharatmala Phase I raise questions about how India plans and finances infrastructure. Discuss in light of the CAG audit, with reference to the shift from BOT to EPC. (15 marks)",
    quiz:[
      {q:"Which agency is the main implementer of Bharatmala Pariyojana?", o:["NHAI","Indian Railways","Ministry of Rural Development","PWD of states"], a:0, w:"NHAI, with NHIDCL and the MoRTH Road Wing."},
      {q:"Per CAG, the approved share of BOT (toll) projects in Phase I was 10%. What was the actual share?", o:["1.75%","10%","30%","49.9%"], a:0, w:"Only 1.75%; EPC rose to 48.35%."},
      {q:"How long is Bharatmala Phase I?", o:["10,000 km","34,800 km","64,675 km","74,942 km"], a:1, w:"34,800 km. 74,942 km is the whole umbrella programme."},
      {q:"In which hybrid model does the government pay 40% of project cost during construction?", o:["BOT","EPC","HAM","DBFOT"], a:2, w:"Hybrid Annuity Model."}
    ]
  },
  related:["union-accounts-2425"],
  src:[
    ["CAG press release on the Bharatmala audit (PDF)","https://cag.gov.in/uploads/PressRelease/PR-PR-PRESS-RELEASE-ON-AUDIT-REPORT-NO-19-ENGLISH-064d5b601ef3ed6-18810489-064e83c8ccceda2-92720020.pdf","official"],
    ["PRS: summary of the Bharatmala Phase I audit","https://prsindia.org/policy/report-summaries/implementation-of-phase-1-of-bharatmala-pariyojana","analysis"],
    ["The Federal: CAG findings on flagship schemes","https://thefederal.com/category/news/cag-reports-put-spotlight-on-governance-gaps-in-pm-modis-flagship-schemes-228778","coverage"]
  ],
  kw:"bharatmala NHAI highway dwarka expressway roads MoRTH tendering EPC HAM BOT logistics parks NHIDCL delhi vadodara"
}
];

/* Extra lens data drawn from the spec reports above */
window.STATE_FACTS_V2 = {
  OD:[["Top of Fiscal Health Index 2026 again, score 73.1","fiscal-health-2026"]],
  GA:[["Second in Fiscal Health Index 2026, score 54.7","fiscal-health-2026"]],
  JH:[["Third in Fiscal Health Index 2026 (50.5), up from 13th","fiscal-health-2026"]],
  GJ:[["Fiscal Health Index 2026 Front-Runner, score 49.9","fiscal-health-2026"]],
  MH:[["Fiscal Health Index 2026 Front-Runner, score 45.0","fiscal-health-2026"]],
  MP:[["Fiscal Health Index 2026 score 37.8, down 10.4 points since 2014–17","fiscal-health-2026"]],
  PB:[["Lowest in Fiscal Health Index 2026: 12.4, down from 19.9","fiscal-health-2026"]],
  AP:[["Fiscal Health Index 2026 score 23.1, down 14.8 points since 2014–17","fiscal-health-2026"]],
  TN:[["Fiscal Health Index score down 10.7 points since 2014–17","fiscal-health-2026"]],
  WB:[["Fiscal Health Index 2026 score 23.8, Aspirational","fiscal-health-2026"],["3,812 schools with zero enrolment","school-education-2026"]],
  AR:[["Leads NE & Himalayan states in Fiscal Health Index 2026: 59.5","fiscal-health-2026"]],
  UK:[["Fiscal Health Index 2026 (NE & Himalayan): 52.5","fiscal-health-2026"]],
  TR:[["Fiscal Health Index 2026 (NE & Himalayan): 44.1","fiscal-health-2026"]],
  NL:[["Fiscal Health Index 2026: 27.1, Aspirational","fiscal-health-2026"],["Higher-secondary enrolment 39.8%","school-education-2026"]],
  HP:[["Fiscal Health Index 2026: 22.0, Aspirational","fiscal-health-2026"]],
  MN:[["Fiscal Health Index 2026: 17.6, Aspirational","fiscal-health-2026"]],
  BR:[["Lowest higher-secondary enrolment: 38.1%","school-education-2026"],["2.08 lakh elementary teacher vacancies","school-education-2026"]],
  ML:[["Higher-secondary enrolment 39.7%","school-education-2026"]],
  AS:[["Higher-secondary enrolment 43.5%","school-education-2026"]],
  TG:[["2,245 schools with zero enrolment","school-education-2026"]],
  KL:[["PMKVY partners filed false placement documents; ₹22.33 lakh recovered","pmkvy-2025"]],
  DL:[["Three Delhi University colleges short-collected ₹2.01 crore in fees","cab-report-9-2026"]]
};
window.FHI26 = {OD:73.1,GA:54.7,JH:50.5,GJ:49.9,MH:45,MP:37.8,WB:23.8,AP:23.1,PB:12.4,AR:59.5,UK:52.5,TR:44.1,NL:27.1,HP:22,MN:17.6};
