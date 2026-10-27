/* Saaransh content. [[key|text]] inside any text links a glossary term. */

window.GLOSSARY = {
  cag:{t:"CAG",full:"Comptroller and Auditor General of India",d:"The constitutional auditor of the Union and state governments (Article 148). It checks whether public money was spent lawfully, efficiently and for the purpose intended."},
  perf:{t:"Performance audit",d:"An audit that asks whether a scheme achieved its goals and gave value for money, not just whether the accounts add up."},
  compliance:{t:"Compliance audit",d:"An audit that checks whether rules, laws and procedures were followed when money was spent or collected."},
  pac:{t:"PAC",full:"Public Accounts Committee",d:"A committee of MPs (or MLAs in a state) that examines CAG reports and questions officials. By convention it is chaired by an opposition member."},
  atn:{t:"Action Taken Note",d:"The government's written reply explaining what it has done about each audit or PAC recommendation."},
  tabled:{t:"Tabled",d:"Formally placed before Parliament or a state legislature. CAG reports become public documents only after they are tabled."},
  presumptive:{t:"Presumptive loss",d:"An estimate of revenue the government could have earned under a different method, such as an auction. It is a modelled figure, not money that went missing."},
  ccea:{t:"CCEA",full:"Cabinet Committee on Economic Affairs",d:"The Union Cabinet committee, chaired by the Prime Minister, that approves large investment projects and their cost ceilings."},
  dpr:{t:"DPR",full:"Detailed Project Report",d:"The engineering and cost study that should be ready before a project is approved and tendered."},
  lanekm:{t:"Lane-km",d:"Road length multiplied by number of lanes. One km of an 8-lane road is 8 lane-km, a fairer way to compare wide and narrow roads."},
  empanel:{t:"Empanelled hospital",d:"A public or private hospital approved to treat patients under a government scheme and be paid by it."},
  opratio:{t:"Operating ratio",d:"How many rupees the Railways spend to earn ₹100. Above 100 means it spends more than it earns from operations."},
  niti:{t:"NITI Aayog",full:"National Institution for Transforming India",d:"The Union government's policy think-tank, set up in 2015 to replace the Planning Commission. It publishes indices that rank states."},
  sdg:{t:"SDGs",full:"Sustainable Development Goals",d:"17 UN goals for 2030, from ending poverty to climate action. India tracks them through NITI Aayog's SDG India Index."},
  mpi:{t:"MPI",full:"Multidimensional Poverty Index",d:"Counts a person as poor if deprived in at least a third of 12 indicators across health, education and living standards, such as nutrition, schooling, cooking fuel and housing."},
  lfpr:{t:"LFPR",full:"Labour Force Participation Rate",d:"The share of people aged 15+ who are either working or looking for work."},
  ur:{t:"Unemployment rate",d:"The share of people in the labour force who want work but have none. People not looking for work are not counted."},
  usual:{t:"Usual status",d:"A PLFS way of counting work over the past year. Someone counts as working if they worked for a meaningful part of the year, including as an unpaid helper in a family business."},
  wpr:{t:"WPR",full:"Worker Population Ratio",d:"The share of the population aged 15+ that is actually employed."},
  plfs:{t:"PLFS",full:"Periodic Labour Force Survey",d:"MoSPI's official survey of jobs and unemployment, run by the National Statistics Office."},
  mpce:{t:"MPCE",full:"Monthly Per Capita Consumption Expenditure",d:"What a household spends in a month divided by the number of members. India uses it as a proxy for living standards."},
  gini:{t:"Gini coefficient",d:"A 0-to-1 measure of inequality. 0 means everyone spends the same; 1 means one person has everything. Lower is more equal."},
  tfr:{t:"TFR",full:"Total Fertility Rate",d:"Average number of children a woman is expected to have. 2.1 is the replacement level at which a population stays stable over time."},
  stunting:{t:"Stunting",d:"A child too short for their age, a sign of long-term undernutrition. Measured for children under 5."},
  anaemia:{t:"Anaemia",d:"Low haemoglobin in the blood, often from iron deficiency. It causes fatigue and raises risks in pregnancy."},
  fiscaldeficit:{t:"Fiscal deficit",d:"How much more a government spends than it earns in a year, covered by borrowing. Usually shown as a % of GDP or GSDP."},
  revdeficit:{t:"Revenue deficit",d:"When day-to-day spending (salaries, pensions, interest, subsidies) exceeds day-to-day income. It means borrowing to pay running costs."},
  gsdp:{t:"GSDP",full:"Gross State Domestic Product",d:"The total value of goods and services produced in a state in a year: a state's GDP."},
  committed:{t:"Committed expenditure",d:"Spending a state cannot easily cut: salaries, pensions and interest payments."},
  capex:{t:"Capital expenditure",d:"Spending that builds lasting assets such as roads, hospitals or schools."},
  divisible:{t:"Divisible pool",d:"The part of the Union's tax collections that is shared with states. Cesses and surcharges sit outside it."},
  cess:{t:"Cess and surcharge",d:"Extra taxes the Union levies for specific purposes. They are not shared with states, which is why states want them limited."},
  fc:{t:"Finance Commission",d:"A body set up every five years under Article 280 to recommend how tax revenue is split between the Union and states, and among states."},
  campa:{t:"CAMPA",full:"Compensatory Afforestation Fund",d:"Money paid by projects that clear forest land. It must be spent on planting and protecting new forests."},
  fhtc:{t:"FHTC",full:"Functional Household Tap Connection",d:"A tap inside a household's premises that supplies at least 55 litres per person per day of safe water, regularly."},
  lpcd:{t:"lpcd",full:"litres per capita per day",d:"The amount of water supplied per person each day. Jal Jeevan Mission's minimum is 55 lpcd."},
  puc:{t:"PUC certificate",full:"Pollution Under Control",d:"A certificate showing a vehicle's exhaust is within legal emission limits. It is mandatory for all vehicles."},
  vahan:{t:"VAHAN",d:"The national database of registered vehicles, run by the Ministry of Road Transport."},
  mospi:{t:"MoSPI",full:"Ministry of Statistics and Programme Implementation",d:"The ministry that runs official statistical surveys including PLFS and HCES."},
  excise:{t:"Excise",d:"A tax on goods made or sold within a state. Liquor excise is among the largest revenue sources for many states."},
  windfall:{t:"Windfall gain",d:"Extra profit a company is estimated to make because it got a resource below its market value."}
};

window.REPORTS = [
/* ================= CAG · Union ================= */
{ id:"state-finances", body:"CAG", level:"Central", topic:"Economy", year:2026, month:6, date:"Jun 2026", pages:"28 states",
  title:"State Finances 2024-25", ref:"CAG · State Finances Audit Report · Year ended 31 March 2025",
  hook:"Every one of India's 28 states ran a fiscal deficit in 2024-25. Together they owe ₹90.51 lakh crore.",
  big:{v:"₹90.51 lakh cr",l:"combined liabilities of 28 states"}, money:9051000,
  tldr:"States are borrowing more and have less room to spend on new things, because salaries, pensions and interest already take a big share.",
  background:"Most of the money that runs your schools, hospitals, police and roads is spent by state governments, not the Union. The CAG audits all 28 states every year and puts their accounts side by side in one report.",
  checked:"State accounts for 2024-25: borrowing, deficits, spending patterns, subsidies and off-budget loans.",
  simple:[
    "In 2024-25 all 28 states spent more than they earned and covered the gap with loans. That gap is the [[fiscaldeficit|fiscal deficit]].",
    "Their combined liabilities reached ₹90.51 lakh crore by 31 March 2025, about 28% of the size of their economies.",
    "On average, over 43% of what states spend on running costs is locked into salaries, pensions and interest. In Nagaland it is 74%."
  ],
  detailed:[
    "Outstanding public debt of the 28 states was ₹75.52 lakh crore (23.27% of [[gsdp|GSDP]]); total liabilities including other obligations reached 27.89% of GSDP.",
    "15 states recorded a revenue surplus and 13 a [[revdeficit|revenue deficit]]. Some revenue-surplus states still relied on short-term Ways and Means Advances from the RBI.",
    "[[committed|Committed expenditure]] exceeded 43% of combined revenue expenditure, ranging from 74% in Nagaland to 29% in Maharashtra. Subsidies alone took over 10% of revenue expenditure.",
    "In the previous edition (2022-23), Punjab had the highest debt at 40.35% of GSDP, and fiscal deficits ranged from 0.76% (Gujarat) to 6.46% (Himachal Pradesh)."
  ],
  findings:[
    "All 28 states posted a fiscal deficit in 2024-25.",
    "Combined liabilities: ₹90.51 lakh crore, or 27.89% of GSDP.",
    "Committed expenditure took over 43% of revenue spending; Nagaland was highest at 74%.",
    "13 states could not cover even their day-to-day costs from income (revenue deficit).",
    "Subsidies crossed 10% of revenue expenditure."
  ],
  stats:[{v:"28 of 28",l:"states in fiscal deficit",loss:1},{v:"₹90.51 lakh cr",l:"combined liabilities"},{v:"43%+",l:"of revenue spending is committed"}],
  charts:[{title:"Committed expenditure",sub:"% of revenue expenditure going to salaries, pensions and interest",unit:"%",bars:[{l:"Nagaland (highest)",v:74,c:"loss"},{l:"All 28 states",v:43,c:"hi"},{l:"Maharashtra (lowest)",v:29}]}],
  other:{who:"Keep in mind",text:"Some borrowing is healthy if it builds roads and hospitals. The concern is borrowing to pay running costs. Coverage of the report differs on how many states crossed the 3% of GSDP deficit limit, so check your state's figure in the report itself."},
  next:"The 16th Finance Commission's award, which decides how much tax money states receive from 2026-27, took effect in the same period. Its formula affects how much room states have to fix these numbers.",
  act:["Look up your state's chapter: it shows how much of its budget goes to interest versus new building.","Watch your state's budget speech for the deficit target and whether it is met."],
  src:{label:"CAG audit reports",url:"https://cag.gov.in/en/audit-report"},
  keys:"state debt borrowing deficit finances liabilities nagaland punjab maharashtra subsidies"
},
{ id:"railways", body:"CAG", level:"Central", topic:"Infrastructure", year:2023, month:8, date:"Aug 2023",
  title:"Railway Finances", ref:"CAG Report No. 13 of 2023 · Ministry of Railways · Year 2021-22",
  hook:"Indian Railways spent ₹107.39 to earn every ₹100 in 2021-22, the worst in five years.",
  big:{v:"107.39%",l:"operating ratio, against a target of 96.15%"}, money:68269,
  tldr:"Passenger trains lose a lot of money, freight profits cover only part of it, and the true picture is worse once pensions are fully counted.",
  background:"Indian Railways is one of the world's largest employers and runs like a business inside government. Each year the CAG checks whether it earns enough to cover its costs.",
  checked:"Railway accounts for 2021-22, compared with budget estimates and the previous four years.",
  simple:[
    "The [[opratio|operating ratio]] tells you how much the Railways spends to earn ₹100. In 2021-22 it was 107.39, so it spent more than it earned.",
    "That was the highest in the five years the CAG looked at. The budget target was 96.15.",
    "Passenger services lost ₹68,269 crore. Profits from carrying goods (freight) covered only part of that."
  ],
  detailed:[
    "Operating ratio: 107.39% in 2021-22, against a Budget Estimate of 96.15% and 97.45% in 2020-21. It was the highest across 2017-18 to 2021-22.",
    "The CAG said the ratio understates costs. Had pension obligations been fully provided for, it would have been 109.02%; with full Depreciation Reserve Fund appropriation, 109.36%.",
    "Passenger and other coaching services ran a loss of ₹68,269 crore, partly offset by freight profits of about ₹36,196 crore."
  ],
  findings:[
    "Operating ratio of 107.39%: ₹107.39 spent per ₹100 earned.",
    "Highest ratio in the five years reviewed, and far above the 96.15% target.",
    "With full pension provisioning, the ratio would be 109.02%.",
    "Passenger services lost ₹68,269 crore; freight profits covered about half."
  ],
  stats:[{v:"107.39",l:"rupees spent per ₹100 earned",loss:1},{v:"₹68,269 cr",l:"passenger services loss"},{v:"109.02",l:"ratio with full pension provisioning"}],
  charts:[{title:"Operating ratio",sub:"₹ spent per ₹100 earned. Below 100 means a surplus.",unit:"",ref:100,bars:[{l:"Budget target 2021-22",v:96.15},{l:"Actual 2020-21",v:97.45},{l:"Actual 2021-22",v:107.39,c:"loss"},{l:"With full pension cost",v:109.02,c:"loss"}]}],
  other:{who:"Keep in mind",text:"2021-22 passenger traffic was still recovering from Covid-19 lockdowns, which hurt earnings. Passenger fares are also kept low by policy, so losses there are partly a deliberate subsidy to travellers."},
  next:"PRS Legislative Research's analysis of the 2023-24 budget put the estimated operating ratio at 98.45%, back under 100.",
  act:["Your ticket price covers only part of what your journey costs. The rest is paid from freight earnings and the Union budget."],
  src:{label:"CAG press release, Report No. 13 of 2023",url:"https://www.cag.gov.in/uploads/PressRelease/PR-PRESS-RELEASE-REPORT-NO-13-ENGLISH-064d24768177fb3-16340358.pdf"},
  keys:"railways trains operating ratio passenger freight pension loss"
},
{ id:"bharatmala", body:"CAG", level:"Central", topic:"Infrastructure", year:2023, month:8, date:"Aug 2023",
  title:"Bharatmala Pariyojana Phase-I", ref:"CAG Report No. 19 of 2023 · Performance audit · Ministry of Road Transport & Highways",
  hook:"Only 13,499 km of 34,800 km approved was built by March 2023, and one expressway's cost per km far exceeded the Cabinet norm.",
  big:{v:"38.8%",l:"of approved length completed by March 2023"}, money:7287.29,
  tldr:"The highway plan built well under half of what was approved, and the audit flagged steep cost overruns on several stretches.",
  background:"Bharatmala is India's flagship highway programme. Phase-I, approved in 2017, aimed to connect economic corridors, borders, ports and backward districts with better roads.",
  checked:"Planning, approval, tendering and execution of Phase-I projects by NHAI and the ministry, up to March 2023.",
  simple:[
    "In 2017 the Union Cabinet approved a plan to build 34,800 km of national highways. The [[cag|CAG]] checked how it was carried out.",
    "By 31 March 2023 about 13,499 km was finished, under two-fifths of the plan.",
    "The best-known finding: for the Dwarka Expressway near Delhi, the CAG worked out ₹250.77 crore per km, against a Cabinet norm of ₹18.20 crore per km."
  ],
  detailed:[
    "Phase-I was approved by the [[ccea|CCEA]] in October 2017 for 34,800 km at an estimated ₹5,35,000 crore. This [[perf|performance audit]] covered planning, appraisal, award and execution.",
    "By 31 March 2023 only 13,499 km (38.79%) was complete. Projects were awarded on weak or incomplete [[dpr|DPRs]], and there were lapses in bid evaluation.",
    "For the Dwarka Expressway, the NHAI board approved a civil cost of ₹7,287.29 crore for about 29 km, or ₹250.77 crore per km, against the CCEA's ₹18.20 crore per km."
  ],
  findings:[
    "Completion lagged far behind: 13,499 km of 34,800 km by March 2023.",
    "Several projects were awarded without sound detailed project reports, leading to later design changes and cost increases.",
    "Dwarka Expressway: ₹250.77 crore per km approved, against a CCEA norm of ₹18.20 crore per km.",
    "Gaps in tendering and bid evaluation on a sample of projects."
  ],
  stats:[{v:"34,800 km",l:"approved in 2017"},{v:"13,499 km",l:"completed by March 2023"},{v:"₹250.77 cr",l:"per km on Dwarka Expressway",loss:1}],
  charts:[
    {title:"Cost per km, Dwarka Expressway",sub:"₹ crore per km",unit:" cr",bars:[{l:"Cabinet norm",v:18.20},{l:"Approved by NHAI board",v:250.77,c:"loss"}]},
    {title:"Highway length",sub:"Kilometres",unit:" km",bars:[{l:"Approved in Phase-I",v:34800},{l:"Completed by March 2023",v:13499,c:"hi"}]}
  ],
  other:{who:"Ministry of Road Transport & Highways",text:"The ministry called the per-km comparison misleading. It said the ₹18.20 crore norm was for ordinary at-grade roads, while Dwarka Expressway is an 8-lane elevated, access-controlled corridor with a 3.8 km tunnel. It put the cost at about ₹9.35 crore per [[lanekm|lane-km]], in line with similar projects."},
  next:"The Haryana section of the Dwarka Expressway opened to traffic in March 2024. The audit's findings went to Parliament's Public Accounts Committee.",
  act:["If you pay tolls, project costs feed into what you are charged over the life of the road."],
  src:{label:"CAG audit reports",url:"https://cag.gov.in/en/audit-report"},
  keys:"roads highways expressway nhai delhi haryana cost overrun"
},
{ id:"pmjay", body:"CAG", level:"Central", topic:"Health", year:2023, month:8, date:"Aug 2023",
  title:"Ayushman Bharat – PM-JAY", ref:"CAG Report No. 11 of 2023 · Performance audit · Ministry of Health & Family Welfare",
  hook:"₹6.97 crore was paid for treating 3,446 patients the scheme's own records showed as already dead.",
  big:{v:"7.5 lakh",l:"beneficiaries linked to one phone number, 9999999999"}, money:6.97,
  tldr:"India's free health cover scheme had weak data checks, letting invalid records and some suspicious claims slip through.",
  background:"PM-JAY is the world's largest government-funded health insurance scheme. It gives poor families cashless hospital treatment of up to ₹5 lakh a year.",
  checked:"Beneficiary registration, hospital empanelment, claims processing and fraud control, from launch in 2018.",
  simple:[
    "The [[cag|CAG]] checked whether PM-JAY money reached the right people and paid for real treatment.",
    "About 7.5 lakh beneficiaries were registered against one mobile number: 9999999999.",
    "₹6.97 crore was paid for treating 3,446 patients who were already marked dead in the scheme's records."
  ],
  detailed:[
    "The [[perf|performance audit]] covered the National Health Authority (NHA) and state health agencies.",
    "Around 7.5 lakh beneficiaries were linked to the number 9999999999; other records had invalid or duplicate details.",
    "In the Transaction Management System, 3,446 patients recorded as dead continued to receive treatment, with 3,903 claims worth ₹6.97 crore paid. Kerala had the most such cases (966). Some patients were shown as admitted to more than one hospital at the same time."
  ],
  findings:[
    "About 7.5 lakh beneficiaries were linked to a single mobile number.",
    "₹6.97 crore paid on 3,903 claims for 3,446 patients already recorded as dead. Kerala had 966 of them.",
    "Some patients appeared admitted in multiple hospitals at the same time, with no system check to stop it.",
    "Weak follow-up by the anti-fraud unit on flagged cases."
  ],
  stats:[{v:"7.5 lakh",l:"beneficiaries on one phone number"},{v:"3,446",l:"patients treated after being marked dead"},{v:"₹6.97 cr",l:"paid on those claims",loss:1}],
  charts:[{title:"Patients marked dead who still got treatment",sub:"Highest state vs national total",unit:"",bars:[{l:"Kerala",v:966,c:"hi"},{l:"All states",v:3446}]}],
  other:{who:"Health Ministry and NHA",text:"The ministry said a mobile number is not used to decide eligibility; identity is checked at the hospital through Aadhaar-based verification. It said some 'dead patient' cases came from data errors such as wrong dates, and that it had acted against fraudulent hospitals, including de-empanelling some."},
  next:"The NHA says it now uses AI and machine-learning tools to flag suspicious claims before payment.",
  act:["Check your Ayushman card details at beneficiary.nha.gov.in or a Common Service Centre.","PM-JAY helpline: 14555."],
  src:{label:"CAG audit reports",url:"https://cag.gov.in/en/audit-report"},
  keys:"health insurance hospital ayushman pmjay fraud nha claims kerala"
},
{ id:"coal-2012", body:"CAG", level:"Central", topic:"Governance", year:2012, month:8, date:"Aug 2012",
  title:"Allocation of Coal Blocks", ref:"CAG Report No. 7 of 2012-13 · Performance audit · Ministry of Coal",
  hook:"The CAG estimated a ₹1.86 lakh crore windfall gain to private companies from coal blocks given without auction.",
  big:{v:"₹1.86 lakh cr",l:"estimated windfall gain to private allottees"}, money:186000,
  tldr:"Coal blocks were handed out without competitive bidding, and the Supreme Court later cancelled almost all of them.",
  background:"Coal fuels most of India's electricity. Between 2004 and 2009, mining blocks were allotted to companies by a screening committee rather than by open auction.",
  checked:"Allocation of captive coal blocks from 2004 to 2009.",
  simple:[
    "Coal mining blocks were given to companies through a committee, not an open auction.",
    "The [[cag|CAG]] estimated that private companies got a [[windfall|windfall gain]] of about ₹1.86 lakh crore as a result.",
    "In 2014 the Supreme Court cancelled 214 of 218 coal block allocations made since 1993. Coal blocks are now auctioned."
  ],
  detailed:[
    "The audit argued that competitive bidding, under consideration since 2004, could have captured much of the value for the government.",
    "The ₹1.86 lakh crore figure was computed for 57 blocks using Coal India's average production costs and sale prices. It estimates gain to allottees, not cash lost from the treasury.",
    "In September 2014 the Supreme Court declared allocations made since 1993 illegal and cancelled 214. The Coal Mines (Special Provisions) Act, 2015 then introduced auctions."
  ],
  findings:["Blocks were allotted without competitive bidding, despite it being considered from 2004.","Estimated gain to private allottees: ₹1.86 lakh crore.","The screening committee process lacked transparency."],
  stats:[{v:"₹1.86 lakh cr",l:"estimated windfall gain",loss:1},{v:"214",l:"allocations cancelled by the Supreme Court"},{v:"2015",l:"auctions made law"}],
  charts:[],
  other:{who:"Government at the time",text:"The government called the figure notional. It argued coal was allotted to power and steel plants to speed up production, and that a 'loss' would arise only if coal was actually mined and sold at market prices."},
  next:"The Supreme Court cancelled 214 allocations in September 2014. Auction revenue from coal blocks now goes to the states where the coal lies.",
  act:["Coal allocation shapes power costs, and through them, your electricity bill."],
  src:{label:"CAG audit reports",url:"https://cag.gov.in/en/audit-report"},
  keys:"coal mining allocation scam auction supreme court"
},
{ id:"2g-2010", body:"CAG", level:"Central", topic:"Governance", year:2010, month:11, date:"Nov 2010",
  title:"2G Spectrum Allocation", ref:"CAG Report No. 19 of 2010-11 · Performance audit · Department of Telecommunications",
  hook:"The CAG put the presumptive loss from 2008 telecom licences at up to ₹1.76 lakh crore.",
  big:{v:"₹1.76 lakh cr",l:"presumptive loss, upper estimate"}, money:176000,
  tldr:"Licences were issued at 2001 prices on a first-come basis; the case reshaped how India sells spectrum.",
  background:"Mobile operators need radio spectrum to run their networks. In 2008 the telecom department issued new 2G licences bundled with spectrum.",
  checked:"Issue of licences and allocation of 2G spectrum in 2007-08.",
  simple:[
    "In 2008, 2G mobile licences with airwaves were issued at prices set in 2001, on a first-come, first-served basis.",
    "The [[cag|CAG]] estimated the government could have earned up to ₹1.76 lakh crore more. This is a [[presumptive|presumptive loss]].",
    "In 2012 the Supreme Court cancelled 122 licences. Spectrum has been auctioned since."
  ],
  detailed:[
    "The audit compared the 2008 licence fee with prices found in the 2010 3G auction, giving a range with ₹1.76 lakh crore at the upper end.",
    "In February 2012 the Supreme Court quashed 122 licences and ordered spectrum to be allocated by auction.",
    "In December 2017 a special CBI court acquitted all the accused in the criminal case, citing lack of evidence. Appeals followed."
  ],
  findings:["Licences were issued at 2001 prices in 2008.","The first-come, first-served process was changed in ways that favoured some applicants.","Presumptive loss estimated at up to ₹1.76 lakh crore."],
  stats:[{v:"₹1.76 lakh cr",l:"presumptive loss, upper estimate",loss:1},{v:"122",l:"licences cancelled by the Supreme Court"},{v:"2017",l:"accused acquitted by special court"}],
  charts:[],
  other:{who:"Government and the accused",text:"The government of the day argued the policy aimed to make calls cheaper, not to maximise revenue, and questioned the loss method. The special court's 2017 verdict found the prosecution had failed to prove its case."},
  next:"Spectrum is now sold through open auctions. The 2017 acquittal shows the difference between an audit estimate and a court finding of guilt.",
  act:["Spectrum auction prices feed into what you pay for mobile data."],
  src:{label:"CAG audit reports",url:"https://cag.gov.in/en/audit-report"},
  keys:"telecom spectrum 2g scam mobile auction supreme court"
},

/* ================= CAG · States ================= */
{ id:"tn-jjm", body:"CAG", level:"State", state:"Tamil Nadu", topic:"Water", year:2026, month:9, date:"2026",
  title:"Jal Jeevan Mission, Tamil Nadu", ref:"CAG performance audit · Tabled in Tamil Nadu Assembly",
  hook:"96% of the tap connections checked were in streets and open spaces, not inside homes.",
  big:{v:"50%",l:"of targeted households short of the 55-litre minimum"}, money:null,
  tldr:"Taps were counted as connections, but many are outside the home and half the households checked do not get the promised water.",
  background:"Jal Jeevan Mission, launched in 2019, promises every rural home a working tap with at least 55 litres of safe water per person per day. States report progress as 'tap connections provided'.",
  checked:"Implementation in selected districts of Tamil Nadu, including a survey of household tap connections.",
  simple:[
    "The mission promises a tap inside every rural home, with at least 55 litres of water per person per day ([[lpcd|lpcd]]).",
    "In the districts checked, half of the targeted households were getting less than that.",
    "Of 2,69,645 tap connections surveyed, 2,59,613 were placed in streets or open spaces, not inside homes."
  ],
  detailed:[
    "The audit found 50% of targeted households in the selected districts did not get the minimum 55 lpcd.",
    "Of 2,69,645 [[fhtc|FHTCs]] surveyed, 2,59,613 (96%) were in open spaces and streets. The CAG rejected the state's explanation of lack of space and beneficiary requests.",
    "Audits of the same mission in other states found similar gaps. In Maharashtra, 1.25 crore of 1.46 crore targeted rural households had connections by March 2024, without an operation and maintenance policy or a state water-testing laboratory. In Bihar's related Har Ghar Nal Ka Jal scheme, 28 of 38 districts had poor water quality from arsenic, fluoride or iron."
  ],
  findings:[
    "50% of targeted households in selected districts got less than 55 litres per person per day.",
    "96% of surveyed connections were outside homes, in streets or open spaces.",
    "The state's reasons (lack of space, residents' requests) were not accepted by audit.",
    "Elsewhere: Maharashtra had no operation and maintenance policy; Bihar had contamination in 28 of 38 districts."
  ],
  stats:[{v:"2,59,613",l:"of 2,69,645 taps outside homes",loss:1},{v:"50%",l:"households below 55 lpcd"},{v:"28 of 38",l:"Bihar districts with poor water quality"}],
  charts:[{title:"Where the surveyed taps were",sub:"Household tap connections surveyed in Tamil Nadu",unit:"",bars:[{l:"In streets or open spaces",v:259613,c:"loss"},{l:"Inside the home",v:10032,c:"hi"}]}],
  other:{who:"Tamil Nadu government",text:"The state said taps were placed outside because of lack of space in houses and at residents' request. The CAG did not accept this, since the mission's design requires a connection within the premises."},
  next:"Similar CAG audits have been tabled in Maharashtra, Chhattisgarh, Kerala and Bihar, each finding gaps between reported and working connections.",
  act:["If your village tap is counted but gives little water, raise it at the Gram Sabha: Jal Jeevan Mission makes village water committees responsible for supply."],
  src:{label:"CAG audit reports",url:"https://cag.gov.in/en/audit-report"},
  keys:"water tap jal jeevan mission har ghar jal rural tamil nadu maharashtra bihar drinking"
},
{ id:"delhi-cm-house", body:"CAG", level:"State", state:"Delhi", topic:"Governance", year:2026, month:3, date:"Mar 2026",
  title:"Delhi CM Residence Renovation", ref:"CAG audit · Public Works Department, Delhi · Tabled in Delhi Assembly",
  hook:"A ₹7.61 crore renovation of the Chief Minister's residence ended up costing ₹33.66 crore.",
  big:{v:"342%",l:"rise over the sanctioned cost"}, money:33.66,
  tldr:"The cost more than quadrupled, a large share went to high-end interiors, and some approvals came after the work was already done.",
  background:"6, Flagstaff Road was the official residence of Delhi's Chief Minister. Its renovation, carried out by the Public Works Department from 2020, became a major political issue.",
  checked:"Estimates, approvals, consultants and spending on the renovation up to April 2022.",
  simple:[
    "In 2020 the renovation was sanctioned at about ₹7.61 crore. By April 2022 it had cost ₹33.66 crore.",
    "About ₹18.88 crore of that went on high-end interiors and decorative items.",
    "Approvals worth ₹9.34 crore were given more than two months after the work was finished."
  ],
  detailed:[
    "The audit records a 342% escalation, from a sanction of about ₹7.61 crore in 2020 to ₹33.66 crore by April 2022.",
    "Around ₹18.88 crore was spent on interiors, including decorative and antique items.",
    "The PWD granted approvals of ₹9.34 crore after completion, so work went ahead without prior authorisation. The audit also questioned the choice of consultants, repeated estimate revisions and work beyond approved specifications."
  ],
  findings:["Cost rose from about ₹7.61 crore to ₹33.66 crore (342%).","₹18.88 crore went to high-end interiors.","₹9.34 crore of approvals came after the work was completed.","Repeated revisions and work beyond approved specifications."],
  stats:[{v:"₹33.66 cr",l:"final cost",loss:1},{v:"₹18.88 cr",l:"on interiors"},{v:"₹9.34 cr",l:"approved after completion"}],
  charts:[{title:"Sanctioned vs actual cost",sub:"₹ crore",unit:" cr",bars:[{l:"Sanctioned (2020)",v:7.61},{l:"Spent by April 2022",v:33.66,c:"loss"}]}],
  other:{who:"AAP",text:"AAP has said the bungalow is government property, not the personal home of any leader, and has compared the spending to renovations of official residences elsewhere. Figures above the audited ₹33.66 crore quoted by political leaders are not part of the audit."},
  next:"The audit covers spending up to 2022 only. It goes to the Delhi Assembly's Public Accounts Committee.",
  act:["Official residences are paid for from the state budget. CAG audits are the main public check on such spending."],
  src:{label:"CAG audit reports",url:"https://cag.gov.in/en/audit-report"},
  keys:"delhi chief minister residence bungalow sheesh mahal renovation pwd kejriwal"
},
{ id:"delhi-excise", body:"CAG", level:"State", state:"Delhi", topic:"Governance", year:2025, month:2, date:"Feb 2025",
  title:"Delhi Excise Policy 2021-22", ref:"CAG performance audit on regulation and supply of liquor · Tabled 25 Feb 2025",
  hook:"The CAG puts the revenue loss from Delhi's withdrawn liquor policy at about ₹2,002 crore.",
  big:{v:"₹2,002 cr",l:"estimated cumulative revenue loss"}, money:2002.68,
  tldr:"Delhi's 2021-22 liquor policy cost the state about ₹2,002 crore in lost revenue, and its own expert panel's advice was set aside.",
  background:"In 2021 the Delhi government changed how liquor shops were licensed, moving out of retail and auctioning zones to private players. The policy was withdrawn in 2022 amid allegations of wrongdoing.",
  checked:"Regulation and supply of liquor in Delhi, including the 2021-22 excise policy.",
  simple:[
    "The [[cag|CAG]] report, [[tabled|tabled]] in February 2025, estimates the government lost about ₹2,002 crore in [[excise|excise]] revenue.",
    "The biggest losses came from shops that could not open where they were not allowed, and from licences given up and never re-auctioned.",
    "The audit also says recommendations of the government's own expert committee were not followed."
  ],
  detailed:[
    "One of 14 pending CAG reports tabled by the new government in the Delhi Legislative Assembly on 25 February 2025.",
    "It estimates a cumulative loss of about ₹2,002.68 crore and describes a weak policy framework and poor implementation.",
    "The report was referred to the Assembly's [[pac|Public Accounts Committee]]."
  ],
  findings:["₹941.53 crore lost because vends could not open in non-conforming municipal wards.","About ₹890 crore lost because surrendered licences were not re-tendered.","About ₹144 crore waived for retail licensees, citing Covid-19.","About ₹27 crore lost through inadequate security deposits.","Expert panel recommendations were set aside."],
  stats:[{v:"₹2,002 cr",l:"total estimated loss",loss:1},{v:"₹941.53 cr",l:"from vends in non-conforming wards"},{v:"14",l:"CAG reports tabled together"}],
  charts:[{title:"Where the ₹2,002 crore loss came from",sub:"₹ crore, as estimated by the CAG",unit:" cr",bars:[{l:"Vends in non-conforming wards",v:941.53,c:"loss"},{l:"Surrendered licences not re-tendered",v:890,c:"loss"},{l:"Covid-period fee waiver",v:144,c:"loss"},{l:"Short security deposits",v:27,c:"loss"}]}],
  other:{who:"Former AAP government",text:"Leaders of the previous government defended the policy, saying it was designed to raise revenue and end the liquor mafia, and disputed the loss estimate."},
  next:"Referred to the Delhi Assembly's Public Accounts Committee for detailed examination.",
  act:["Excise is one of Delhi's largest own revenues. Money lost here is not available for schools, hospitals or transport."],
  src:{label:"CAG audit reports",url:"https://cag.gov.in/en/audit-report"},
  keys:"delhi liquor alcohol excise policy aap revenue"
},
{ id:"delhi-health", body:"CAG", level:"State", state:"Delhi", topic:"Health", year:2025, month:2, date:"Feb 2025",
  title:"Delhi Public Health Infrastructure", ref:"CAG performance audit · Tabled in Delhi Assembly, 28 Feb 2025",
  hook:"About 70% of patients at mohalla clinics got less than a minute with a doctor.",
  big:{v:"523 of 1,000",l:"mohalla clinics set up by 2023, against a 2017 target"}, money:205.07,
  tldr:"Clinics were short of medicines and doctors' time, many were shut for long spells, and Covid funds went unspent.",
  background:"Mohalla clinics are neighbourhood primary-care centres offering free consultations, tests and medicines. Delhi planned 1,000 of them.",
  checked:"Hospitals, mohalla clinics, staff, medicines and use of funds, including Covid-19 funds from the Union government.",
  simple:[
    "Delhi planned 1,000 mohalla clinics by March 2017. By March 2023 it had 523.",
    "None of the 74 clinics checked had all 165 essential medicines in stock.",
    "In the period checked, about 70% of patients got less than one minute with a doctor."
  ],
  detailed:[
    "Of 218 clinics in four selected districts, 41 were non-functional for periods from 15 days to nearly two years, linked to doctors leaving or being de-empanelled.",
    "Patient consultation data for October 2022 to March 2023 showed about 70% of patients got under a minute with a doctor.",
    "Of ₹787.91 crore released by the Union government for Covid-19 response, Delhi used ₹582.84 crore. Hospitals faced staff and drug shortages, and some bought essential drugs from local chemists."
  ],
  findings:["523 clinics by March 2023 against a target of 1,000 by March 2017.","None of 74 clinics checked had the full list of 165 essential medicines.","41 of 218 clinics in four districts were shut for between 15 days and nearly two years.","₹205 crore of Covid-19 funds from the Union was left unused."],
  stats:[{v:"~70%",l:"patients with under a minute of consultation",loss:1},{v:"0 of 74",l:"clinics with all essential medicines"},{v:"₹205 cr",l:"Covid funds unused"}],
  charts:[{title:"Mohalla clinics",sub:"Target vs achieved",unit:"",bars:[{l:"Target (by March 2017)",v:1000},{l:"Set up (by March 2023)",v:523,c:"hi"}]},{title:"Covid-19 funds from the Union",sub:"₹ crore",unit:" cr",bars:[{l:"Released",v:787.91},{l:"Used",v:582.84,c:"hi"}]}],
  other:{who:"Former AAP government",text:"The former government has defended mohalla clinics as a model of free primary care that served lakhs of patients, and says the audit period included the strain of the Covid-19 years."},
  next:"Referred to the Delhi Assembly's Public Accounts Committee. The new government has announced Ayushman Arogya Mandirs as its primary-care model.",
  act:["Free medicines at a clinic depend on stock. If a listed medicine is missing, you can complain through the Delhi health department's grievance channels."],
  src:{label:"CAG audit reports",url:"https://cag.gov.in/en/audit-report"},
  keys:"delhi mohalla clinic health hospital doctors medicines covid aap"
},
{ id:"delhi-air", body:"CAG", level:"State", state:"Delhi", topic:"Environment", year:2025, month:4, date:"Apr 2025",
  title:"Vehicular Air Pollution in Delhi", ref:"CAG performance audit · Tabled in Delhi Assembly, 1 Apr 2025",
  hook:"Over 1 lakh vehicles got pollution certificates even though they failed the emission test.",
  big:{v:"1.08 lakh",l:"vehicles passed despite exceeding limits"}, money:null,
  tldr:"Delhi's pollution-check system passed polluting vehicles, recorded impossible test times and ran on patchy air-quality data.",
  background:"Vehicles are a major source of Delhi's air pollution. Every vehicle needs a valid PUC certificate from an authorised testing centre.",
  checked:"PUC certification data from August 2015 to August 2020, air-quality monitoring and public transport emission testing.",
  simple:[
    "A [[puc|PUC certificate]] says your vehicle's exhaust is within limits.",
    "Of 65.36 lakh petrol, CNG and LPG vehicles certified, 1.08 lakh were passed even though their readings were above the limit.",
    "In 76,865 cases a vehicle was tested and certified in just one minute, which the CAG said is practically not possible."
  ],
  detailed:[
    "Among diesel vehicles, 4,007 were passed despite test values beyond the limit, and test values were missing for over 5 lakh of 22.14 lakh certified diesel vehicles (24%).",
    "PUC data was not linked with the [[vahan|VAHAN]] database, so centres chose emission categories manually, leaving room for manipulation. Centres were not inspected or third-party audited.",
    "Air Quality Index values were calculated from less than the required 16 hours of monitoring. Public buses were not emission-tested twice a month as the National Green Tribunal directed."
  ],
  findings:["1.08 lakh petrol/CNG/LPG vehicles passed despite failing limits.","4,007 diesel vehicles passed despite readings above limits.","No test values recorded for over 5 lakh diesel vehicles (24%).","76,865 certificates issued within one minute of testing.","AQI computed with less than the required monitoring data."],
  stats:[{v:"1.08 lakh",l:"failing vehicles passed",loss:1},{v:"76,865",l:"one-minute certificates"},{v:"24%",l:"diesel certificates without test values"}],
  charts:[{title:"Diesel PUC certificates, 2015–2020",sub:"Lakh vehicles",unit:" lakh",bars:[{l:"Certified",v:22.14},{l:"No test values recorded",v:5.3,c:"loss"}]}],
  other:{who:"Keep in mind",text:"The audit covers 2015 to 2021. PUC tests check carbon monoxide and hydrocarbons, not the fine particulate matter that drives Delhi's worst smog. The current government has blamed the previous one; the PUC system has since moved to tighter online checks."},
  next:"The report was tabled by the new Delhi government and referred for follow-up.",
  act:["Keep your PUC valid and get it from an authorised centre that prints actual readings.","Check the numbers on your certificate: a 'pass' should show readings within the limit."],
  src:{label:"CAG audit reports",url:"https://cag.gov.in/en/audit-report"},
  keys:"delhi air pollution vehicles puc smog aqi diesel petrol transport environment"
},
{ id:"uk-campa", body:"CAG", level:"State", state:"Uttarakhand", topic:"Environment", year:2025, month:2, date:"Feb 2025",
  title:"Forest Funds in Uttarakhand", ref:"CAG audit · Compensatory Afforestation Fund · Tabled in Uttarakhand Assembly",
  hook:"Money meant for planting forests was spent on iPhones, laptops, fridges and court cases.",
  big:{v:"₹13.86 cr",l:"of forest funds diverted, 2019–2022"}, money:13.86,
  tldr:"A small but telling share of afforestation money went on gadgets and office spending, and planting was badly delayed.",
  background:"When a project cuts forest land, it must pay into [[campa|CAMPA]], and that money must be used to plant and protect new forests.",
  checked:"Use of CAMPA funds in Uttarakhand from 2019 to 2022.",
  simple:[
    "₹13.86 crore of forest-replanting money was used for other things, including iPhones, laptops, fridges, coolers, office renovation and court cases.",
    "That is about 1.8% of the funds available, but none of it was allowed.",
    "In 37 cases, replanting took more than eight years to happen."
  ],
  detailed:[
    "The audit covered 2019 to 2022 and found ₹13.86 crore diverted to unauthorised spending.",
    "Interest of ₹275.34 crore due on the fund for 2019-20 to 2021-22 had not been paid; the state said ₹150 crore was deposited in July 2023.",
    "Funds were released to forest divisions between July 2020 and November 2021 without the required approval of the Head of Forest Force."
  ],
  findings:["₹13.86 crore spent on items such as iPhones, laptops, fridges and office renovation.","₹275.34 crore of interest due to the fund was unpaid.","In 37 cases, compensatory afforestation took over eight years.","Funds were released without required approvals."],
  stats:[{v:"₹13.86 cr",l:"diverted",loss:1},{v:"₹275.34 cr",l:"interest unpaid"},{v:"37",l:"cases of 8+ year delays"}],
  charts:[],
  other:{who:"Uttarakhand government",text:"The state told the Supreme Court it had deposited ₹150 crore of the interest due in July 2023, and ordered an inquiry into the diversions."},
  next:"In March 2025 the Supreme Court took up the findings as a matter of serious concern and directed the state's Chief Secretary to file an affidavit.",
  act:["CAMPA spending plans are public. Your state forest department publishes annual plans of operations."],
  src:{label:"CAG audit reports",url:"https://cag.gov.in/en/audit-report"},
  keys:"forest campa uttarakhand trees afforestation iphone environment supreme court"
},

/* ================= NITI Aayog ================= */
{ id:"sdg-index", body:"NITI Aayog", level:"Central", topic:"Development", year:2024, month:7, date:"Jul 2024",
  title:"SDG India Index 2023-24", ref:"NITI Aayog · 4th edition · 16 goals, 113 indicators",
  hook:"India's score rose to 71, up from 57 in 2018. Kerala and Uttarakhand lead; Bihar is last.",
  big:{v:"71/100",l:"India's score, up from 66 in 2020-21"}, money:null,
  tldr:"Every state improved, but the gap between leaders and laggards is still wide.",
  background:"India signed up to the UN's Sustainable Development Goals for 2030. NITI Aayog's index scores every state and UT on them.",
  checked:"113 indicators across 16 goals, from poverty and hunger to clean energy and justice.",
  simple:[
    "[[niti|NITI Aayog]] scores states on the UN [[sdg|Sustainable Development Goals]]: poverty, health, education, jobs, clean energy and more.",
    "India's overall score is 71 out of 100, up from 57 in the first edition in 2018.",
    "Kerala and Uttarakhand share the top spot with 79. Bihar is lowest at 57."
  ],
  detailed:[
    "States are grouped as Aspirant (0–49), Performer (50–64), Front Runner (65–99) and Achiever (100). 32 states and UTs are now Front Runners.",
    "National score: 57 (2018), 60 (2019-20), 66 (2020-21), 71 (2023-24).",
    "Top: Kerala and Uttarakhand (79), Tamil Nadu (78), Goa (77), Punjab (76, up 8 points). Lowest: Bihar (57), Jharkhand (62), Nagaland (63). Uttar Pradesh gained the most since 2018, at 25 points."
  ],
  findings:["National score up to 71 from 66 in 2020-21.","Kerala and Uttarakhand tie for first at 79.","Bihar (57), Jharkhand (62) and Nagaland (63) score lowest.","Uttar Pradesh improved most since 2018, by 25 points."],
  stats:[{v:"71",l:"India's score"},{v:"79",l:"top score: Kerala, Uttarakhand"},{v:"+25",l:"Uttar Pradesh's gain since 2018"}],
  charts:[{title:"Highest and lowest states",sub:"Composite score out of 100. India: 71",unit:"",ref:71,bars:[{l:"Kerala",v:79,c:"hi"},{l:"Uttarakhand",v:79,c:"hi"},{l:"Tamil Nadu",v:78,c:"hi"},{l:"Nagaland",v:63},{l:"Jharkhand",v:62},{l:"Bihar",v:57,c:"loss"}]}],
  other:{who:"Keep in mind",text:"An index compresses many indicators into one number, and data for different indicators comes from different years. A rise in the score does not mean every goal improved."},
  next:"NITI Aayog also runs an online SDG dashboard with district-level data for many indicators.",
  act:["Look up your state's goal-wise scores to see where it lags: hunger, gender equality or clean energy, for example."],
  src:{label:"NITI Aayog",url:"https://www.niti.gov.in/"},
  keys:"sdg sustainable development index states ranking kerala bihar uttarakhand"
},
{ id:"mpi", body:"NITI Aayog", level:"Central", topic:"Poverty", year:2024, month:1, date:"Jan 2024",
  title:"Multidimensional Poverty since 2005-06", ref:"NITI Aayog discussion paper · January 2024",
  hook:"24.82 crore people moved out of multidimensional poverty in nine years, the paper estimates.",
  big:{v:"24.82 cr",l:"people out of MPI poverty, 2013-14 to 2022-23"}, money:null,
  tldr:"The share of Indians deprived in health, schooling and living standards fell from 29% to 11% in nine years.",
  background:"Income poverty lines are hard to measure. The MPI instead asks whether people lack basics like nutrition, schooling, cooking fuel, toilets and housing.",
  checked:"12 indicators across health, education and living standards, using National Family Health Survey data.",
  simple:[
    "The [[mpi|Multidimensional Poverty Index]] checks whether people lack basics such as nutrition, schooling, clean cooking fuel and a proper house.",
    "The share of people who are poor by this measure fell from 29.17% in 2013-14 to 11.28% in 2022-23.",
    "That is about 24.82 crore people. Uttar Pradesh, Bihar and Madhya Pradesh saw the largest drops."
  ],
  detailed:[
    "Headcount ratio: 55.34% (2005-06), 29.17% (2013-14), 11.28% (2022-23). Values for 2013-14 and 2022-23 are projected, since no NFHS was run in those years.",
    "Largest numbers moving out: Uttar Pradesh (5.94 crore), Bihar (3.77 crore), Madhya Pradesh (2.30 crore).",
    "Poorer states reduced poverty faster, narrowing the gap with richer ones."
  ],
  findings:["Headcount fell from 29.17% to 11.28% between 2013-14 and 2022-23.","About 24.82 crore people left multidimensional poverty.","Uttar Pradesh: 5.94 crore people out of poverty, the most of any state.","Poorer states reduced poverty faster."],
  stats:[{v:"29.17%",l:"poor in 2013-14"},{v:"11.28%",l:"poor in 2022-23"},{v:"5.94 cr",l:"left poverty in Uttar Pradesh"}],
  charts:[{title:"People who left MPI poverty",sub:"Crore people, 2013-14 to 2022-23",unit:" cr",bars:[{l:"Uttar Pradesh",v:5.94,c:"hi"},{l:"Bihar",v:3.77,c:"hi"},{l:"Madhya Pradesh",v:2.30,c:"hi"}]}],
  other:{who:"Keep in mind",text:"The 2022-23 figure is a projection, not a fresh survey, and several indicators overlap with outputs of government schemes such as gas connections and bank accounts. The MPI does not measure income."},
  next:"The next NFHS round will allow the projected figures to be checked against fresh survey data.",
  act:["A family can leave MPI poverty and still struggle on wages. Read this with consumption data such as HCES."],
  src:{label:"NITI Aayog",url:"https://www.niti.gov.in/"},
  keys:"poverty mpi poor nfhs uttar pradesh bihar"
},
{ id:"fhi", body:"NITI Aayog", level:"Central", topic:"Economy", year:2025, month:1, date:"Jan 2025",
  title:"Fiscal Health Index 2025", ref:"NITI Aayog · First edition · 18 major states · 2022-23 data",
  hook:"Odisha tops with 67.8. Punjab, Andhra Pradesh and West Bengal show the weakest fiscal health.",
  big:{v:"67.8",l:"Odisha's score, highest of 18 states"}, money:null,
  tldr:"States that control debt and raise their own revenue score well; heavily indebted states sit at the bottom.",
  background:"Like a household, a state must balance what it earns, spends and borrows. This index is NITI Aayog's first attempt to rank how well large states do it.",
  checked:"Five sub-indices for 18 major states, built from CAG-audited 2022-23 accounts.",
  simple:[
    "This new index from [[niti|NITI Aayog]] scores 18 large states on how well they manage money.",
    "Odisha came first with 67.8, followed by Chhattisgarh and Goa.",
    "Punjab, Andhra Pradesh and West Bengal were rated weakest, held back by high debt and large deficits."
  ],
  detailed:[
    "Sub-indices: quality of expenditure, revenue mobilisation, fiscal prudence, debt index and debt sustainability.",
    "Top three: Odisha (67.8), Chhattisgarh (55.2), Goa (53.6). Jharkhand and Gujarat were also among the leaders.",
    "States with high [[fiscaldeficit|fiscal deficits]], large debt and low [[capex|capital spending]] scored lowest."
  ],
  findings:["Odisha leads at 67.8, helped by low debt and strong revenue.","Chhattisgarh (55.2) and Goa (53.6) follow.","Punjab, Andhra Pradesh and West Bengal are weakest.","Built from five sub-indices, from spending quality to debt sustainability."],
  stats:[{v:"67.8",l:"Odisha, top score"},{v:"18",l:"major states ranked"},{v:"5",l:"sub-indices"}],
  charts:[{title:"Top three states",sub:"Fiscal Health Index score",unit:"",bars:[{l:"Odisha",v:67.8,c:"hi"},{l:"Chhattisgarh",v:55.2},{l:"Goa",v:53.6}]}],
  other:{who:"Keep in mind",text:"This is the first edition, so there is no earlier year to compare. Small states and union territories are not included."},
  next:"NITI Aayog plans to publish the index every year.",
  act:["A state that spends most of its budget on interest has less left for roads, schools and hospitals."],
  src:{label:"NITI Aayog",url:"https://www.niti.gov.in/"},
  keys:"state finances debt deficit odisha punjab fiscal economy"
},

/* ================= Finance ================= */
{ id:"fc16", body:"Finance Commission", level:"Central", topic:"Economy", year:2025, month:11, date:"Nov 2025",
  title:"16th Finance Commission Report", ref:"Sixteenth Finance Commission · Award period 2026-27 to 2030-31 · Submitted 17 Nov 2025",
  hook:"States keep 41% of the shareable tax pool, but the formula that splits it among them has changed.",
  big:{v:"41%",l:"of the divisible pool goes to states"}, money:null,
  tldr:"The overall share stays the same, but richer, larger-economy states gain weight in how it is divided.",
  background:"Every five years a [[fc|Finance Commission]] decides how the Union shares its taxes with states. This sets how much money your state government gets to spend.",
  checked:"Vertical share (Union vs states) and horizontal formula (among states) for 2026-27 to 2030-31.",
  simple:[
    "The Union shares part of its taxes with states. The 16th Finance Commission kept the states' share at 41% of the [[divisible|divisible pool]], the same as before.",
    "It changed how that 41% is split among states: a state's contribution to national GDP now counts for 10%.",
    "18 states had asked for the share to rise to 50%. That did not happen."
  ],
  detailed:[
    "Submitted to the President on 17 November 2025 and accepted by the Union in the 2026-27 Budget.",
    "Horizontal criteria: five of six previous criteria retained with new weights. Area weight rose to 10%. 'Tax and fiscal effort' (2.5% under the 15th FC) was replaced by contribution to GDP at 10%.",
    "ICRA estimates 14 of 28 states will see a higher share. The Commission suggested folding [[cess|cesses and surcharges]] into the divisible pool, since they currently sit outside it and shrink the effective transfer."
  ],
  findings:["States' share of the divisible pool stays at 41%.","New criterion: contribution to GDP, weighted 10%.","Area weight raised to 10%.","14 of 28 states gain share, per ICRA's estimate.","Proposal to bring cesses and surcharges into the shared pool."],
  stats:[{v:"41%",l:"vertical share, unchanged"},{v:"10%",l:"new weight for GDP contribution"},{v:"14 of 28",l:"states with a higher share"}],
  charts:[{title:"States' share of the divisible pool",sub:"% recommended",unit:"%",bars:[{l:"States asked for (18 states)",v:50},{l:"16th FC recommended",v:41,c:"hi"}]}],
  other:{who:"States and critics",text:"Many states argue that because cesses and surcharges are not shared, the real share of the Union's gross tax revenue reaching states is closer to 30%. Some poorer states worry the GDP criterion rewards states that are already richer."},
  next:"The award runs from 2026-27 to 2030-31. Your state's exact share is listed in the report's annexures.",
  act:["Your state budget's 'share in central taxes' line comes directly from this formula."],
  src:{label:"Finance Commission of India",url:"https://fincomindia.nic.in/"},
  keys:"finance commission tax devolution states share federalism cess"
},
{ id:"econ-survey", body:"Finance Ministry", level:"Central", topic:"Economy", year:2026, month:1, date:"Jan 2026",
  title:"Economic Survey 2025-26", ref:"Ministry of Finance · Tabled in Parliament, 29 Jan 2026",
  hook:"Growth estimated at 7.4% this year and 6.8–7.2% next. The Survey also raises India's potential growth to about 7%.",
  big:{v:"7.4%",l:"estimated GDP growth, 2025-26"}, money:null,
  tldr:"Growth is strong and steady, inflation may tick up, and global trade risks are the main worry.",
  background:"Every year, just before the Union Budget, the Finance Ministry publishes the Economic Survey: the government's own report card on the economy.",
  checked:"Growth, inflation, jobs, trade and public finances for 2025-26, with an outlook for 2026-27.",
  simple:[
    "The Survey estimates the economy grew 7.4% in 2025-26, driven by both consumer spending and investment.",
    "It expects 6.8–7.2% growth in 2026-27.",
    "It now says India can grow about 7% a year over the medium term without overheating, up from about 6.5% three years ago."
  ],
  detailed:[
    "Real GDP growth: 7.4% estimated for FY26, 6.8–7.2% projected for FY27. Potential growth revised up to about 7%.",
    "The [[fiscaldeficit|fiscal deficit]] was targeted at 4.4% of GDP in FY26 (Budget Estimate), down from 4.8% in FY25.",
    "Core and headline inflation are expected to be somewhat higher in FY27, partly due to a weaker rupee. Risks include slower global growth, trade disruption and volatile capital flows; the Survey expects a trade deal with the US to ease uncertainty."
  ],
  findings:["FY26 growth estimated at 7.4%.","FY27 growth projected at 6.8–7.2%.","Potential growth raised to about 7%.","Fiscal deficit target of 4.4% of GDP for FY26.","Inflation likely to rise somewhat in FY27."],
  stats:[{v:"7.4%",l:"growth, 2025-26"},{v:"6.8–7.2%",l:"projected, 2026-27"},{v:"4.4%",l:"fiscal deficit target, FY26"}],
  charts:[{title:"Fiscal deficit",sub:"% of GDP",unit:"%",bars:[{l:"2024-25",v:4.8},{l:"2025-26 target",v:4.4,c:"hi"}]}],
  other:{who:"Keep in mind",text:"The Survey is written by the government's own economists. Independent forecasts from the RBI, IMF and private economists are useful cross-checks, and GDP growth says little on its own about jobs or wages."},
  next:"The Union Budget 2026-27 was presented right after the Survey.",
  act:["Higher inflation hits savings and household budgets first. Watch RBI's policy decisions after the Survey."],
  src:{label:"Economic Survey",url:"https://www.indiabudget.gov.in/economicsurvey/"},
  keys:"economy gdp growth budget finance inflation fiscal deficit survey"
},

/* ================= MoSPI ================= */
{ id:"hces", body:"MoSPI", level:"Central", topic:"Poverty", year:2024, month:12, date:"Dec 2024",
  title:"Household Consumption Survey 2023-24", ref:"MoSPI · HCES factsheet · August 2023 – July 2024",
  hook:"An average rural Indian spends ₹4,122 a month; an urban Indian ₹6,996. The gap is narrowing.",
  big:{v:"₹4,122",l:"average monthly spending per person, rural"}, money:null,
  tldr:"Spending is rising faster in villages than in cities, and inequality in spending has fallen.",
  background:"How much households spend is India's best guide to living standards and the basis for measuring poverty. MoSPI resumed this survey in 2022-23 after more than a decade.",
  checked:"Household spending on food and non-food items across rural and urban India.",
  simple:[
    "[[mpce|MPCE]] is what a household spends in a month, divided by the number of people in it.",
    "In 2023-24 it was ₹4,122 in villages and ₹6,996 in cities, not counting free items from government schemes.",
    "City spending used to be 84% higher than village spending in 2011-12. Now it is 70% higher."
  ],
  detailed:[
    "Average MPCE: ₹4,122 rural and ₹6,996 urban. Including the value of free items from welfare schemes: ₹4,247 and ₹7,078.",
    "Nominal growth over 2022-23: about 9% rural, 8% urban. Urban–rural gap: 84% (2011-12), 71% (2022-23), 70% (2023-24).",
    "The [[gini|Gini coefficient]] of spending fell in both areas, to about 0.237 (rural) and 0.284 (urban). Sikkim has the highest MPCE and Chhattisgarh the lowest."
  ],
  findings:["Rural MPCE ₹4,122; urban ₹6,996.","The urban–rural gap fell to 70%, from 84% in 2011-12.","Spending inequality (Gini) fell in both rural and urban areas.","Sikkim spends the most per person; Chhattisgarh the least."],
  stats:[{v:"₹4,122",l:"rural MPCE"},{v:"₹6,996",l:"urban MPCE"},{v:"70%",l:"urban–rural gap, down from 84%"}],
  charts:[{title:"How much more urban India spends",sub:"Urban MPCE above rural, %",unit:"%",bars:[{l:"2011-12",v:84},{l:"2022-23",v:71},{l:"2023-24",v:70,c:"hi"}]}],
  other:{who:"Keep in mind",text:"Spending is not income. Survey methods changed between 2011-12 and 2022-23, so long comparisons need care. Very rich households are usually under-represented in such surveys, which can understate inequality."},
  next:"These figures feed into new estimates of poverty and into updating the consumer price index.",
  act:["Compare your own household's monthly spending per person with these averages."],
  src:{label:"MoSPI HCES press note",url:"https://www.mospi.gov.in/sites/default/files/press_release/HCES_Press_Note_2023-24_27122024_rev.pdf"},
  keys:"consumption spending household mpce rural urban inequality gini poverty mospi"
},
{ id:"plfs", body:"MoSPI", level:"Central", topic:"Jobs", year:2024, month:9, date:"Sep 2024",
  title:"PLFS Annual Report 2023-24", ref:"MoSPI · Periodic Labour Force Survey · July 2023 – June 2024",
  hook:"Unemployment held at 3.2%, while the share of women in the workforce rose to 41.7%.",
  big:{v:"41.7%",l:"female labour force participation, up from 37.0%"}, money:null,
  tldr:"More women are counted as working, and unemployment stays low by this survey's measure.",
  background:"The [[plfs|PLFS]] is the government's main survey of jobs. It asks households who works, who is looking for work, and what kind of work they do.",
  checked:"Employment and unemployment for people aged 15+, July 2023 to June 2024.",
  simple:[
    "For people aged 15 and over, the [[ur|unemployment rate]] was 3.2%, the same as the year before.",
    "The share of women working or looking for work, the [[lfpr|LFPR]], rose to 41.7% from 37.0%.",
    "Women's participation has nearly doubled since 2017-18, when it was 23.3%."
  ],
  detailed:[
    "Figures are in [[usual|usual status]] (principal + subsidiary) for persons aged 15 and above.",
    "Unemployment rate: 3.2% for both men and women. Female LFPR: 41.7% (from 37.0%). Female [[wpr|WPR]]: 40.3% (from 35.9%).",
    "Female LFPR: 23.3% (2017-18), 24.5%, 30.0%, 32.5%, 32.8%, 37.0%, and 41.7% (2023-24)."
  ],
  findings:["Unemployment steady at 3.2% for those aged 15+.","Female labour force participation up to 41.7% from 37.0%.","Female worker population ratio up to 40.3% from 35.9%.","Women's participation has nearly doubled since 2017-18."],
  stats:[{v:"3.2%",l:"unemployment, age 15+"},{v:"41.7%",l:"female LFPR"},{v:"40.3%",l:"female WPR"}],
  charts:[{title:"Female labour force participation",sub:"% of women aged 15+, usual status",unit:"%",bars:[{l:"2017-18",v:23.3},{l:"2022-23",v:37.0},{l:"2023-24",v:41.7,c:"hi"}]}],
  other:{who:"Keep in mind",text:"Usual status counts someone as working if they did so for a meaningful part of the year, including unpaid work in a family business or farm. Much of the rise in women's work is self-employment, which includes unpaid helpers."},
  next:"MoSPI now also publishes monthly and quarterly PLFS bulletins, so job numbers come out more often.",
  act:["A low unemployment rate says nothing about pay. Look at the share of regular salaried jobs in the full report."],
  src:{label:"MoSPI PLFS press note",url:"https://mospi.gov.in/sites/default/files/press_release/Press_note_AR_PLFS_2023_24_22092024.pdf"},
  keys:"jobs employment unemployment women work labour plfs"
},

/* ================= Health ================= */
{ id:"nfhs5", body:"Health Ministry", level:"Central", topic:"Health", year:2022, month:5, date:"2019–21 survey",
  title:"National Family Health Survey-5", ref:"Ministry of Health & Family Welfare · Conducted by IIPS · Fieldwork 2019–21",
  hook:"India's fertility rate fell below replacement to 2.0, but anaemia rose among women and children.",
  big:{v:"2.0",l:"children per woman, below replacement of 2.1"}, money:null,
  tldr:"Families are smaller and more births happen in hospitals, but child nutrition and anaemia remain serious problems.",
  background:"NFHS is India's largest survey of family health, covering over six lakh households, with estimates down to each district.",
  checked:"Population, fertility, child health, nutrition, women's health and more, 2019 to 2021.",
  simple:[
    "On average, women now have 2.0 children, below the 2.1 that keeps a population stable over time (see [[tfr|TFR]]).",
    "Over a third of children under five are [[stunting|stunted]].",
    "[[anaemia|Anaemia]] has risen: 57% of women and 67% of young children have it."
  ],
  detailed:[
    "Total fertility rate: 2.2 (NFHS-4) to 2.0. Institutional births: 78.9% to 88.6%. Stunting in under-5s: 38.4% to 35.5%.",
    "Anaemia rose among women aged 15–49 (53.1% to 57.0%) and children aged 6–59 months (58.6% to 67.1%).",
    "Part of the fieldwork took place during Covid-19, which affects some state comparisons."
  ],
  findings:["Fertility fell to 2.0, below replacement.","Hospital births rose to 88.6%.","Child stunting improved slightly, to 35.5%.","Anaemia worsened: 57.0% of women, 67.1% of children aged 6–59 months."],
  stats:[{v:"2.0",l:"total fertility rate"},{v:"88.6%",l:"births in a health facility"},{v:"67.1%",l:"young children with anaemia",loss:1}],
  charts:[{title:"Anaemia, NFHS-4 vs NFHS-5",sub:"% affected",unit:"%",bars:[{l:"Women 15–49, NFHS-4",v:53.1},{l:"Women 15–49, NFHS-5",v:57.0,c:"loss"},{l:"Children 6–59 mo, NFHS-4",v:58.6},{l:"Children 6–59 mo, NFHS-5",v:67.1,c:"loss"}]}],
  other:{who:"Keep in mind",text:"Part of the fieldwork happened during the pandemic. NFHS-6 will show whether the anaemia trend has turned."},
  next:"NFHS-6 fieldwork has been carried out; its results will update all of these numbers.",
  act:["Iron-folic acid tablets are free at government health centres under Anaemia Mukt Bharat.","District fact sheets let you see your own district's numbers."],
  src:{label:"NFHS (IIPS)",url:"https://rchiips.org/nfhs/"},
  keys:"health family nutrition anaemia stunting fertility population women children"
}
];

window.TRENDS = [
  {id:"sdg",name:"SDG India Index",unit:"",short:"National score out of 100",note:"India's composite score across the Sustainable Development Goals. Higher is better.",pts:[[2018,"2018",57],[2019.5,"2019-20",60],[2020.5,"2020-21",66],[2023.5,"2023-24",71]],src:"NITI Aayog, SDG India Index",report:"sdg-index",min:40,max:80,good:"up"},
  {id:"mpi",name:"Multidimensional poverty",unit:"%",short:"Share of people poor",note:"Share deprived in at least a third of 12 indicators. Lower is better.",pts:[[2005.5,"2005-06",55.34],[2013.5,"2013-14*",29.17],[2015.5,"2015-16",24.85],[2020,"2019-21",14.96],[2022.5,"2022-23*",11.28]],src:"NITI Aayog. *Projected years.",report:"mpi",min:0,max:60,good:"down"},
  {id:"flfpr",name:"Women in the workforce",unit:"%",short:"Female LFPR, age 15+",note:"Share of women aged 15+ working or seeking work, usual status.",pts:[[2017.5,"2017-18",23.3],[2018.5,"2018-19",24.5],[2019.5,"2019-20",30.0],[2020.5,"2020-21",32.5],[2021.5,"2021-22",32.8],[2022.5,"2022-23",37.0],[2023.5,"2023-24",41.7]],src:"MoSPI, PLFS",report:"plfs",min:0,max:50,good:"up"},
  {id:"ur",name:"Unemployment rate",unit:"%",short:"Age 15+, usual status",note:"Share of the labour force without work. Lower is better.",pts:[[2017.5,"2017-18",6.0],[2018.5,"2018-19",5.8],[2019.5,"2019-20",4.8],[2020.5,"2020-21",4.2],[2021.5,"2021-22",4.1],[2022.5,"2022-23",3.2],[2023.5,"2023-24",3.2]],src:"MoSPI, PLFS",report:"plfs",min:0,max:8,good:"down"},
  {id:"gap",name:"Urban–rural spending gap",unit:"%",short:"How much more cities spend",note:"Urban MPCE above rural MPCE. Lower means villages are catching up.",pts:[[2011.5,"2011-12",84],[2022.5,"2022-23",71],[2023.5,"2023-24",70]],src:"MoSPI, HCES",report:"hces",min:50,max:90,good:"down"},
  {id:"stunt",name:"Child stunting",unit:"%",short:"Children under 5",note:"Share of children too short for their age. Lower is better.",pts:[[2005.5,"NFHS-3",48.0],[2015.5,"NFHS-4",38.4],[2020,"NFHS-5",35.5]],src:"National Family Health Survey",report:"nfhs5",min:0,max:60,good:"down"},
  {id:"tfr",name:"Fertility rate",unit:"",short:"Children per woman",note:"Average children per woman. Replacement level is 2.1.",pts:[[2005.5,"NFHS-3",2.7],[2015.5,"NFHS-4",2.2],[2020,"NFHS-5",2.0]],src:"National Family Health Survey",report:"nfhs5",min:0,max:3.5,ref:2.1}
];

window.QUIZ = [
  {q:"For every ₹100 Indian Railways earned in 2021-22, how much did it spend?",min:50,max:150,step:1,ans:107.39,unit:"",pre:"₹",report:"railways",why:"An operating ratio of 107.39 means a loss on operations. The target was 96.15."},
  {q:"Tamil Nadu's water audit checked 2.7 lakh tap connections. What share were outside the home?",min:0,max:100,step:1,ans:96,unit:"%",pre:"",report:"tn-jjm",why:"2,59,613 of 2,69,645 taps were in streets or open spaces."},
  {q:"At Delhi's mohalla clinics, what share of patients got less than one minute with a doctor?",min:0,max:100,step:1,ans:70,unit:"%",pre:"",report:"delhi-health",why:"Based on consultation data from October 2022 to March 2023."},
  {q:"Delhi planned 1,000 mohalla clinics by 2017. How many existed by March 2023?",min:0,max:1000,step:10,ans:523,unit:"",pre:"",report:"delhi-health",why:"Roughly half the target, six years after the deadline."},
  {q:"What share of Indian women aged 15+ were in the labour force in 2023-24?",min:0,max:100,step:1,ans:41.7,unit:"%",pre:"",report:"plfs",why:"Up from 23.3% in 2017-18, though much of the rise is self-employment."},
  {q:"How many PM-JAY beneficiaries were linked to the phone number 9999999999?",min:0,max:20,step:0.5,ans:7.5,unit:" lakh",pre:"",report:"pmjay",why:"A sign of weak data validation when the database was built."},
  {q:"How many of India's 28 states ran a fiscal deficit in 2024-25?",min:0,max:28,step:1,ans:28,unit:"",pre:"",report:"state-finances",why:"Every single one, according to the CAG's State Finances report."}
];

/* State tile map: [code, name, col, row] */
window.STATES = [
  ["JK","Jammu & Kashmir",3,0],["LA","Ladakh",4,0],
  ["PB","Punjab",2,1],["HP","Himachal Pradesh",3,1],
  ["RJ","Rajasthan",1,2],["HR","Haryana",2,2],["DL","Delhi",3,2],["UK","Uttarakhand",4,2],["SK","Sikkim",6,2],["AR","Arunachal Pradesh",8,2],
  ["GJ","Gujarat",0,3],["MP","Madhya Pradesh",2,3],["UP","Uttar Pradesh",3,3],["BR","Bihar",4,3],["WB","West Bengal",5,3],["AS","Assam",7,3],["NL","Nagaland",8,3],
  ["MH","Maharashtra",1,4],["CG","Chhattisgarh",3,4],["JH","Jharkhand",4,4],["ML","Meghalaya",6,4],["TR","Tripura",7,4],["MN","Manipur",8,4],
  ["GA","Goa",0,5],["TG","Telangana",2,5],["OD","Odisha",4,5],["MZ","Mizoram",7,5],
  ["KA","Karnataka",1,6],["AP","Andhra Pradesh",2,6],
  ["KL","Kerala",1,7],["TN","Tamil Nadu",2,7]
];
window.SDG_SCORES = {KL:79,UK:79,TN:78,GA:77,PB:76,NL:63,JH:62,BR:57};
window.STATE_FACTS = {
  DL:[["4 CAG audits explained here: excise policy, health, air pollution and the CM residence","delhi-excise"]],
  UK:[["Joint top of SDG India Index 2023-24, score 79","sdg-index"],["₹13.86 crore of forest funds diverted, per CAG","uk-campa"]],
  KL:[["Joint top of SDG India Index 2023-24, score 79","sdg-index"],["Most PM-JAY patients treated after being marked dead: 966","pmjay"],["CAG audit of Jal Jeevan Mission tabled in February 2026","tn-jjm"]],
  TN:[["SDG score 78, third highest","sdg-index"],["96% of surveyed tap connections were outside homes","tn-jjm"]],
  GA:[["SDG score 77","sdg-index"],["Third in Fiscal Health Index 2025, score 53.6","fhi"]],
  PB:[["SDG score 76, up 8 points","sdg-index"],["Highest debt in 2022-23: 40.35% of GSDP","state-finances"],["Among the weakest in Fiscal Health Index 2025","fhi"]],
  BR:[["Lowest SDG score, 57","sdg-index"],["3.77 crore people out of MPI poverty","mpi"],["28 of 38 districts with poor water quality","tn-jjm"]],
  JH:[["SDG score 62","sdg-index"],["Among Fiscal Health Index leaders","fhi"]],
  NL:[["SDG score 63","sdg-index"],["Highest committed expenditure: 74% of revenue spending","state-finances"]],
  UP:[["Biggest SDG gain since 2018: +25 points","sdg-index"],["5.94 crore people out of MPI poverty, the most of any state","mpi"]],
  MP:[["2.30 crore people out of MPI poverty","mpi"]],
  OD:[["Top of Fiscal Health Index 2025, score 67.8","fhi"]],
  CG:[["Second in Fiscal Health Index 2025, score 55.2","fhi"],["Lowest average household spending per person","hces"]],
  GJ:[["Lowest fiscal deficit in 2022-23: 0.76% of GSDP","state-finances"],["Among Fiscal Health Index leaders","fhi"]],
  HP:[["Highest fiscal deficit in 2022-23: 6.46% of GSDP","state-finances"]],
  MH:[["Lowest committed expenditure: 29% of revenue spending","state-finances"],["1.25 of 1.46 crore rural homes had tap connections by March 2024","tn-jjm"]],
  WB:[["Among the weakest in Fiscal Health Index 2025","fhi"],["28 pending CAG reports tabled in July 2026","state-finances"]],
  AP:[["Among the weakest in Fiscal Health Index 2025","fhi"]],
  SK:[["Highest average household spending per person","hces"]]
};

window.TIMELINE = [
  {y:2010,t:"2G spectrum",d:"Presumptive loss of up to ₹1.76 lakh crore from licences issued at 2001 prices.",a:"Supreme Court cancelled 122 licences in 2012; special court acquitted the accused in 2017.",id:"2g-2010"},
  {y:2012,t:"Coal block allocation",d:"Estimated ₹1.86 lakh crore windfall gain to private firms from blocks allotted without auction.",a:"Supreme Court cancelled 214 allocations in 2014; auctions became law in 2015.",id:"coal-2012"},
  {y:2023,t:"Bharatmala, PM-JAY, Railways",d:"One monsoon session brought highway cost overruns, health-scheme data gaps and a railway operating loss.",a:"Ministries contested key comparisons; reports went to the PAC.",id:"bharatmala"},
  {y:2025,t:"Delhi's 14 pending audits",d:"A new Delhi government tabled long-pending reports on liquor policy, health and pollution.",a:"Referred to the Delhi Assembly's PAC.",id:"delhi-excise"},
  {y:2026,t:"States under the lens",d:"CAG's State Finances report showed all 28 states in deficit; water audits found taps that don't deliver.",a:"West Bengal tabled 28 long-pending CAG reports in July 2026.",id:"state-finances"}
];
