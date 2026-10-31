/* Reports added Oct 2026: 2025 and 2026 releases. Same schema as reports-v2.js.
   Figures are as reported by the CAG / NITI Aayog and the published coverage cited in each `src`. */

Object.assign(window.SITE.glossary, {
  "Input Tax Credit": "GST already paid on purchases that a business can set off against the GST it owes on its sales.",
  "IGST": "Integrated GST: tax on supplies between states, later shared between the Centre and the destination state.",
  "Works contract": "A contract to build, repair or install something where goods and services are supplied together, such as construction.",
  "SDRF": "State Disaster Response Fund: money set aside, largely with Union support, for immediate relief after a notified disaster.",
  "STP": "Sewage Treatment Plant: a facility that cleans wastewater before it is released into a river or reused.",
  "PSA oxygen plant": "Pressure Swing Adsorption plant: a unit that produces medical oxygen on site at a hospital.",
  "Net zero": "A state where the greenhouse gases a country emits are balanced by those it removes. India's target year is 2070.",
  "NPA": "Non-Performing Asset: a loan on which interest or principal has stayed unpaid beyond a set period.",
  "Bad debt": "A loan a lender does not expect to recover and writes off its books; tax law lets it be deducted from income under conditions.",
  "CBDT": "Central Board of Direct Taxes: the body under the Finance Ministry that runs income tax and other direct taxes.",
  "E-way bill": "An electronic permit, generated on the GST portal, needed to move goods above a set value.",
  "Regulatory asset": "Costs a power company has incurred but not yet been allowed to recover through tariffs; consumers usually pay them later.",
  "Urban Local Body": "An elected city or town government, such as a municipal corporation, municipal council or nagar panchayat.",
  "74th Amendment": "The 1992 constitutional amendment that made city governments constitutional bodies and listed 18 functions in the 12th Schedule that states may give them.",
  "State Finance Commission": "A body each state must set up every five years to recommend how state money is shared with panchayats and city governments.",
  "Municipal bond": "A loan a city government raises from investors by selling bonds, usually to fund infrastructure.",
  "Parastatal": "A state-run agency, such as a water board or development authority, that does city work but is not answerable to the city government.",
  "Government guarantee": "A promise by the government to repay a loan taken by a public body if that body cannot; it is a possible future liability.",
  "Medium-Term Fiscal Policy Statement": "A statement laid with the Budget under the FRBM Act that sets rolling targets for deficits and debt.",
  "Digital Bharat Nidhi": "The telecom fund, formerly the Universal Service Obligation Fund, that pays for connectivity in rural and remote areas.",
  "Liquidated damages": "A penalty fixed in a contract that a supplier pays for delay or failure to deliver.",
  "Common Service Centre": "A village-level kiosk, run by a local entrepreneur, that offers government and private digital services.",
  "Business Correspondent": "An agent who offers basic banking services, such as deposits and withdrawals, on behalf of a bank in places without a branch.",
  "Demand response": "Cutting or shifting electricity use when the grid is under strain, often automatically, in return for payment or lower tariffs.",
  "SLDC": "State Load Dispatch Centre: the body that balances electricity supply and demand on a state's grid in real time.",
  "TWh": "Terawatt-hour: a unit of electricity equal to one billion kilowatt-hours (units).",
  "District Mineral Foundation": "A trust in each mining district, funded by mining companies, that must spend its money on people and areas affected by mining.",
  "PMKKKY": "Pradhan Mantri Khanij Kshetra Kalyan Yojana: the 2015 scheme that sets rules for how District Mineral Foundations spend their money.",
  "MGNREGS": "Mahatma Gandhi National Rural Employment Guarantee Scheme: guarantees rural households up to 100 days of paid manual work a year.",
  "Certificate of Fitness": "A certificate that a transport vehicle is safe to run on the road; it must be renewed at set intervals.",
  "Extra Neutral Alcohol": "Highly purified alcohol that distilleries use as the base for making liquor.",
  "Credit bureau": "A company, such as TransUnion CIBIL, that collects borrowers' loan and repayment records and gives them credit scores.",
  "Credit penetration": "The share of people eligible for credit who actually have an active loan or credit card.",
  "CAGR": "Compound annual growth rate: the steady yearly growth rate that takes a value from its start level to its end level.",
  "Microfinance": "Small loans, often without collateral, given to low-income borrowers, many of them women in groups.",
  "Jal Jeevan Mission": "The Union scheme, launched in 2019, to give every rural household a working tap water connection.",
  "Social audit": "A public check of a scheme's records and works by the people it is meant to serve, usually in a village meeting.",
  "ICDS": "Integrated Child Development Services: the scheme that runs anganwadi centres for nutrition, health and pre-school for young children and mothers.",
  "RoSCTL": "Rebate of State and Central Taxes and Levies: a scheme that refunds taxes built into the price of apparel and made-up exports, paid as duty credit scrips.",
  "DGFT": "Directorate General of Foreign Trade: the Commerce Ministry body that runs India's export and import policy and incentive schemes.",
  "Duty credit scrip": "An electronic credit given to exporters that can be used to pay Customs duty or sold to another importer.",
  "Denied Entity List": "A DGFT list of firms barred from export benefits, for example for not bringing back export payments.",
  "Long-term care": "Ongoing help with daily living for people who cannot fully look after themselves, such as frail older people or persons with disabilities.",
  "Respite care": "Short-term care that gives a family caregiver a break.",
  "NSQF": "National Skills Qualifications Framework: a national system that grades skills courses and certificates by level.",
  "Time Use Survey": "An NSO survey that records how people spend each day, including on paid work, unpaid housework and care."
});

window.SPEC_REPORTS.push(
/* ---------- CAG · GST (Union) ---------- */
{
  id:"cag-gst-20-2026", body:"CAG", kind:"Compliance audit", reportNo:"Report No. 20 of 2026",
  title:"Compliance Audit on Goods and Services Tax", short:"GST Compliance Audit", sector:"Public finance", ministry:"Ministry of Finance (CBIC, GSTN)",
  date:"Aug 2026", dateISO:"2026-08-12", tabled:"Tabled in Parliament on 12 August 2026", period:"Year ended March 2024", flagged:2190.98, flaggedNote:"Compliance deficiencies found in the works-contract check. These are amounts at issue, not confirmed losses.",
  tldr:[
    "Indirect tax collections rose by ₹1,14,847 crore (about 8%) in 2023-24; Central GST grew 13%.",
    "The GST Network's IT system still has gaps in registration checks, return filing, input tax credit reversal and IGST settlement.",
    "A check of 850 works-contract taxpayers across 71 ranges found compliance deficiencies worth about ₹2,190 crore."
  ],
  en:"The CAG looked at how GST is run by the Central Board of Indirect Taxes and Customs and by the GST Network, the IT system every taxpayer files through. Collections grew in 2023-24, with Central GST up 13%. But the IT system still lets through weak registrations, gaps in return filing and input tax credit reversals, and errors in how inter-state tax is settled. A focused check of construction and works-contract taxpayers found deficiencies worth about ₹2,190 crore.",
  hi:"CAG ने देखा कि GST को केंद्रीय अप्रत्यक्ष कर बोर्ड और GST नेटवर्क कैसे चलाते हैं। 2023-24 में संग्रह बढ़ा और केंद्रीय GST में 13% वृद्धि हुई। लेकिन IT प्रणाली में पंजीकरण की जाँच, रिटर्न फाइलिंग, इनपुट टैक्स क्रेडिट रिवर्सल और अंतर-राज्यीय कर निपटान में कमियाँ बनी हुई हैं। निर्माण और वर्क्स-कॉन्ट्रैक्ट करदाताओं की जाँच में लगभग ₹2,190 करोड़ की कमियाँ मिलीं।",
  context:{
    what:"An annual compliance audit of GST administered by the CBIC, including the third phase of an IT audit of the GST Network (GSTN) and a focused review of works contract and construction services.",
    why:"GST is the Centre's and states' largest indirect tax. Errors in its IT backbone or in high-value sectors like construction directly affect revenue for both.",
    how:"Review of CBIC records and GSTN systems for the period ended March 2024, and a test check of 850 works-contract taxpayers across 71 GST ranges."
  },
  nums:[["₹1,14,847 cr","Rise in indirect tax collections, 2023-24",0],["13%","Growth in Central GST revenue",0],["850","Works-contract taxpayers checked",0],["₹2,190 cr","Deficiencies found in works-contract checks",1]],
  themes:[
    {name:"Gaps in the GST Network's IT system", sev:"high", items:[
      {t:"Validations at taxpayer registration were deficient, letting weak or doubtful registrations through.", amt:""},
      {t:"Return filing and input tax credit reversal functions had gaps that could let ineligible credit stand.", amt:""},
      {t:"IGST settlement reports, which decide how inter-state tax is shared, had deficiencies.", amt:""},
      {t:"Weaknesses in IT governance and security of the GSTN system.", amt:""}]},
    {name:"Works contract and construction services", sev:"high", items:[
      {t:"Test check of 850 taxpayers in 71 ranges found compliance deficiencies in tax paid on works contracts.", amt:"₹2,190.98 cr"}]},
    {name:"Revenue trend", sev:"low", items:[
      {t:"Indirect tax collections rose by ₹1,14,847 crore, about 8%, in 2023-24 over 2022-23.", amt:""},
      {t:"Central GST revenue grew 13%, or ₹1,08,804 crore.", amt:""}]}
  ],
  charts:[
    {title:"What the audit covered", type:"bars", unit:"count", data:[["Works-contract taxpayers checked",850],["GST ranges covered",71]]}
  ],
  recs:[
    "Strengthen validations at registration and in return functionalities on the GSTN.",
    "Fix IGST settlement processes so inter-state tax is shared correctly.",
    "Improve scrutiny and compliance monitoring of works-contract taxpayers."
  ],
  recsNote:"Summarised from the published press brief and coverage.",
  response:["The report goes to Parliament's Public Accounts Committee. Department replies to each paragraph are in the full report."],
  timeline:[["Mar 2024","Period audited ends"],["12 Aug 2026","Report No. 20 of 2026 tabled in Parliament"]],
  glossary:["Compliance audit","Input Tax Credit","IGST","Works contract"],
  exam:{
    prelims:[
      "CAG Report No. 20 of 2026 is a compliance audit of GST administered by CBIC, tabled on 12 August 2026.",
      "It includes the third phase of the IT audit of the GST Network (GSTN).",
      "Central GST revenue grew 13% in 2023-24.",
      "The works-contract review covered 850 taxpayers across 71 ranges."
    ],
    mains:"Technology is GST's backbone and its weakest link. Discuss with reference to the CAG's 2026 audit of the GST Network. (10 marks)",
    quiz:[
      {q:"Which IT system was audited in the third phase of the CAG's GST IT audit?", o:["PFMS","GSTN","e-Way Bill only","ICEGATE"], a:1, w:"The GST Network, through which taxpayers register and file returns."},
      {q:"By how much did Central GST revenue grow in 2023-24 per the audit?", o:["8%","13%","21%","4.6%"], a:1, w:"13%. Overall indirect taxes grew about 8%."},
      {q:"IGST is levied on:", o:["Imports only","Supplies within a state","Supplies between states","Exports only"], a:2, w:"Inter-state supplies; it is later shared with the destination state."}
    ]
  },
  related:["cag-gujarat-gst-2026","union-accounts-2425"],
  src:[["CAG press releases","https://cag.gov.in/press-release","official"],["TaxGuru: summary of CAG Report No. 20 of 2026","https://taxguru.in/?p=1072111","analysis"]],
  kw:"GST GSTN CBIC input tax credit IGST works contract construction tax audit 2026"
},
/* ---------- CAG · Gujarat GST ---------- */
{
  id:"cag-gujarat-gst-2026", body:"CAG", state:"Gujarat", kind:"Compliance audit", reportNo:"Report No. 1 of 2026 (Gujarat)",
  title:"Compliance Audit on GST in Gujarat", short:"Gujarat GST Audit", sector:"Public finance", ministry:"Finance Department, Government of Gujarat",
  date:"Mar 2026", dateISO:"2026-03-25", tabled:"Tabled in the Gujarat Assembly on 25 March 2026", period:"Recent years up to the audit", flagged:2606.62, flaggedNote:"Amount involved in 291 cases that deviated from GST rules; recovery depends on the department's follow-up.",
  tldr:[
    "Auditors found deviations from GST rules in 291 cases involving ₹2,606.62 crore.",
    "Records for 63 of the 65 taxpayers picked for detailed checks were not produced to audit.",
    "Without records, the CAG could not confirm whether the right tax was collected."
  ],
  en:"The CAG checked how Gujarat's state tax department administers GST. It found deviations from the rules in 291 cases involving ₹2,606.62 crore. For a detailed check, auditors selected 65 taxpayers, but records for 63 of them were never produced. That means the department could not show audit whether those taxpayers paid the right amount.",
  hi:"CAG ने जाँचा कि गुजरात का राज्य कर विभाग GST का प्रबंधन कैसे करता है। 291 मामलों में ₹2,606.62 करोड़ से जुड़े नियमों से विचलन मिले। विस्तृत जाँच के लिए 65 करदाता चुने गए, लेकिन उनमें से 63 के रिकॉर्ड ऑडिट को दिए ही नहीं गए। यानी विभाग यह नहीं दिखा सका कि इन करदाताओं ने सही कर चुकाया या नहीं।",
  context:{
    what:"A state-level CAG compliance audit of GST administration by Gujarat's Commercial Tax (State Tax) department.",
    why:"Half of GST on intra-state sales goes to the state. Weak checks directly cut a state's own revenue.",
    how:"Test check of returns, assessments and refunds, with a detailed review of 65 selected taxpayers."
  },
  nums:[["291","Cases with deviations from GST rules",0],["₹2,606.62 cr","Amount involved in those cases",1],["63 of 65","Selected taxpayers whose records were not produced",1]],
  themes:[
    {name:"Deviations from GST rules", sev:"high", items:[
      {t:"Deviations from GST provisions were found in 291 cases.", amt:"₹2,606.62 cr"}]},
    {name:"Records withheld from audit", sev:"high", items:[
      {t:"Records for 63 of the 65 taxpayers selected for detailed verification were not produced to audit.", amt:""}]}
  ],
  charts:[{title:"Detailed verification: records produced?", type:"split", unit:"taxpayers", data:[["Not produced",63],["Produced",2]]}],
  recs:["Produce records to audit on time and act on the 291 flagged cases.","Strengthen scrutiny of returns and refunds."],
  recsNote:"Summarised from published coverage of the report.",
  response:["The state department's replies are recorded in the full report."],
  timeline:[["25 Mar 2026","Report No. 1 of 2026 tabled in the Gujarat Assembly"]],
  glossary:["Compliance audit","Input Tax Credit"],
  exam:{
    prelims:["CAG's GST compliance audit of Gujarat (Report No. 1 of 2026) was tabled on 25 March 2026.","It found deviations in 291 cases involving ₹2,606.62 crore."],
    mains:"Non-production of records to the auditor weakens accountability. Examine with reference to the CAG's 2026 GST audit of Gujarat. (10 marks)",
    quiz:[{q:"In the CAG's Gujarat GST audit, records of how many of 65 selected taxpayers were not produced?", o:["13","29","63","65"], a:2, w:"63 of 65."}]
  },
  related:["cag-gst-20-2026"],
  src:[["CAG audit reports","https://cag.gov.in/en/audit-report","official"],["Jurishour coverage of state CAG GST reports","https://www.jurishour.in/gst/cag-flags-weak-gst-recovery-in-odisha/","coverage"]],
  kw:"Gujarat GST state tax audit records not produced 2026"
},
/* ---------- CAG · Kerala Jal Jeevan Mission ---------- */
{
  id:"cag-kerala-jjm", body:"CAG", state:"Kerala", kind:"Performance audit", reportNo:"Report No. 10 of 2025 (Kerala)",
  title:"Performance Audit of Jal Jeevan Mission in Kerala", short:"Kerala Tap Water Audit", sector:"Social welfare", ministry:"Water Resources Department, Government of Kerala",
  date:"Feb 2026", dateISO:"2026-02-24", tabled:"Laid in the Kerala Assembly on 24 February 2026", period:"Up to March 2024", flagged:null,
  tldr:[
    "Only 52.46% of rural homes had a working tap connection by March 2024, against a 100% target.",
    "2,13,991 connections were disconnected within a month of being given.",
    "In a survey, 122 of 342 households (35.67%) said the tap did not give adequate water."
  ],
  en:"Jal Jeevan Mission promises every rural home a working tap. The CAG found Kerala had reached only about half its rural homes by March 2024. More than two lakh connections were cut within a month of being given, and over a third of surveyed households said the water was not enough. The state had no policy for operating and maintaining the new systems, and drinking water had not been formally handed to panchayats.",
  hi:"जल जीवन मिशन हर ग्रामीण घर को चालू नल का वादा करता है। CAG ने पाया कि मार्च 2024 तक केरल अपने लगभग आधे ग्रामीण घरों तक ही पहुँचा। दो लाख से ज़्यादा कनेक्शन देने के एक महीने के भीतर ही कट गए, और सर्वे में एक-तिहाई से अधिक घरों ने कहा कि पानी पर्याप्त नहीं है। राज्य के पास नई प्रणालियों के संचालन-रखरखाव की कोई नीति नहीं थी।",
  context:{
    what:"A CAG performance audit of Jal Jeevan Mission (JJM) in Kerala, the scheme to give every rural household a Functional Household Tap Connection.",
    why:"Tap connections are counted as progress, but they matter only if water actually flows, regularly and safely.",
    how:"Review of state records with test checks in selected districts and a survey of 342 beneficiaries."
  },
  nums:[["52.46%","Rural homes with tap connections by March 2024 (target 100%)",1],["2,13,991","Connections disconnected within a month",1],["35.67%","Surveyed households reporting inadequate water",1],["21 lakh","Tap connections in four years, per the state",0]],
  themes:[
    {name:"Coverage far below target", sev:"high", items:[
      {t:"Only 52.46% of targeted rural households had tap connections by March 2024, against 100% coverage.", amt:""},
      {t:"Annual Action Plan targets were not achieved.", amt:""}]},
    {name:"Connections that don't deliver", sev:"high", items:[
      {t:"2,13,991 connections were disconnected within one month of being provided.", amt:""},
      {t:"122 of 342 surveyed beneficiaries (35.67%) said the connection did not provide adequate water.", amt:""}]},
    {name:"No plan to keep it running", sev:"med", items:[
      {t:"No Operation and Maintenance policy was framed to keep water systems working.", amt:""},
      {t:"No convergence plan with MGNREGS, Finance Commission tied grants or Swachh Bharat (Grameen) in test-checked districts.", amt:""},
      {t:"Drinking-water management had not been formally transferred to panchayats as the 73rd Amendment intends.", amt:""}]}
  ],
  charts:[
    {title:"Rural tap coverage by March 2024", type:"bars", unit:"% of target households", max:100, data:[["Target",100],["Achieved",52.46]]},
    {title:"Survey: is the water adequate?", type:"split", unit:"households surveyed", data:[["Inadequate",122],["Adequate",220]]}
  ],
  recs:["Frame an Operation and Maintenance policy.","Plan convergence with MGNREGS, tied grants and SBM (G).","Notify the transfer of drinking-water functions to panchayats."],
  response:["The state government said (June 2025) that 21 lakh tap connections were provided under the programme in four years."],
  timeline:[["2019","Jal Jeevan Mission launched"],["Mar 2024","Audit cut-off: 52.46% coverage"],["24 Feb 2026","Report laid in the Kerala Assembly"]],
  glossary:["Performance audit"],
  exam:{
    prelims:["CAG Report No. 10 of 2025 on Jal Jeevan Mission in Kerala was laid on 24 February 2026.","Kerala achieved 52.46% rural tap coverage by March 2024.","2,13,991 connections were disconnected within a month."],
    mains:"Counting tap connections is not the same as delivering water. Discuss with reference to CAG audits of Jal Jeevan Mission. (10 marks)",
    quiz:[{q:"What share of rural households in Kerala had tap connections by March 2024 per the CAG?", o:["96%","84%","52.46%","35.67%"], a:2, w:"52.46%, against a 100% target."},{q:"Jal Jeevan Mission's minimum supply norm is:", o:["40 lpcd","55 lpcd","70 lpcd","135 lpcd"], a:1, w:"55 litres per person per day."}]
  },
  related:["tn-jjm","cag-uk-namami-gange"],
  src:[["CAG audit report (Kerala), Report No. 10 of 2025","https://cag.gov.in/en/audit-report/details/123724","official"]],
  kw:"Kerala Jal Jeevan Mission tap water rural FHTC disconnection 2026"
},
/* ---------- CAG · Namami Gange, Uttarakhand ---------- */
{
  id:"cag-uk-namami-gange", body:"CAG", state:"Uttarakhand", kind:"Performance audit", reportNo:"Report No. 2 of 2025 (Uttarakhand)",
  title:"Performance Audit of Namami Gange in Uttarakhand", short:"Ganga Clean-up, Uttarakhand", sector:"Environment", ministry:"Peyjal and Urban Development, Government of Uttarakhand",
  date:"Mar 2026", dateISO:"2026-03-10", tabled:"Tabled in the Uttarakhand Assembly on 10 March 2026", period:"2018 to 2023", flagged:null,
  tldr:[
    "12 sewage treatment plants were releasing untreated sewage into the Ganga.",
    "Of 44 plants inspected in 2023, only 3 to 5 met National Green Tribunal norms.",
    "Only ₹144.27 crore (about 16%) of a ₹885.91 crore forestry plan for the Ganga was used."
  ],
  en:"Namami Gange is India's flagship programme to clean the Ganga. In Uttarakhand, where the river begins, the CAG found sewage plants that do not meet norms, some releasing untreated sewage straight into the river, and towns where few homes are even connected to sewers. Most of the money for Ganga-side forests went unspent, and no district had prepared a Ganga plan.",
  hi:"नमामि गंगे गंगा की सफ़ाई का प्रमुख कार्यक्रम है। उत्तराखंड में, जहाँ नदी शुरू होती है, CAG ने पाया कि सीवेज प्लांट मानकों पर खरे नहीं हैं, कुछ सीधे नदी में बिना साफ़ किया सीवेज छोड़ रहे हैं, और कई कस्बों में बहुत कम घर सीवर से जुड़े हैं। गंगा किनारे वन के लिए रखा अधिकांश पैसा खर्च नहीं हुआ और किसी ज़िले ने गंगा योजना नहीं बनाई।",
  context:{
    what:"A CAG performance audit of Namami Gange projects in Uttarakhand: sewage treatment, sewer networks, river-front works and forestry.",
    why:"Uttarakhand is where the Ganga begins. Pollution here travels downstream to hundreds of millions of people.",
    how:"Audit of 23 of 42 Ganga-related projects executed between 2018 and 2022-23, with joint inspection of 44 sewage treatment plants in 2023."
  },
  nums:[["12","STPs releasing untreated sewage into the Ganga",1],["3 to 5","Of 44 STPs meeting NGT norms",1],["16%","Of the ₹885.91 cr forestry plan used",1],["₹1,149 cr","Released to Uttarakhand by NMCG, 2014-23",0]],
  themes:[
    {name:"Sewage still reaching the river", sev:"high", items:[
      {t:"12 STPs (in places including Kirtinagar, Rudraprayag, Gopeshwar and Karnaprayag) discharged untreated sewage into the Ganga.", amt:""},
      {t:"Of 44 STPs inspected in 2023, only 3 to 5 met National Green Tribunal norms; BOD, suspended solids and faecal coliform were above limits in most.", amt:""},
      {t:"Eight STPs ran for over four years without Pollution Control Board consent.", amt:""}]},
    {name:"Plants without sewers", sev:"high", items:[
      {t:"Household sewer connectivity was low: Haridwar 69%, Rishikesh 29%, Srinagar 12%, Uttarkashi 9%, Chamoli 6%.", amt:""},
      {t:"21 STPs had no household connections.", amt:""}]},
    {name:"Money and plans unused", sev:"med", items:[
      {t:"Only about 16% of the Forestry Interventions for the Ganga budget was used.", amt:"₹144.27 cr"},
      {t:"No District Ganga Plans were prepared in any Ganga-basin district.", amt:""},
      {t:"11 cremation ghats were built without assessing need and lie unused.", amt:""}]},
    {name:"Safety failures", sev:"high", items:[
      {t:"A 2023 accident at the Chamoli STP gave 28 people electric shocks; 16 died. Mandatory safety audits had not been done.", amt:""}]}
  ],
  charts:[
    {title:"Homes connected to sewers", type:"bars", unit:"% of households", max:100, data:[["Haridwar",69],["Rishikesh",29],["Srinagar",12],["Uttarkashi",9],["Chamoli",6]]},
    {title:"Of 44 STPs inspected, meeting NGT norms", type:"split", unit:"plants (upper estimate)", data:[["Met NGT norms",5],["Did not",39]], note:"The audit says 3 to 5 plants met NGT norms; the upper figure is shown."}
  ],
  recs:["Connect households to sewers so plants receive sewage.","Bring every STP up to norms and obtain Pollution Control Board consent.","Prepare District Ganga Plans and complete safety audits."],
  recsNote:"Drawn from the gaps the audit reports.",
  response:["Coverage linked the findings to preparations for the 2027 Haridwar Kumbh. The government's replies are in the full report."],
  timeline:[["2014","Namami Gange launched"],["2018–2023","Period audited"],["Jul 2025","Report sent to the state government"],["10 Mar 2026","Tabled in the Uttarakhand Assembly"]],
  glossary:["Performance audit","STP"],
  exam:{
    prelims:["CAG's audit of Namami Gange in Uttarakhand covered 2018–2023 and was tabled on 10 March 2026.","12 STPs discharged untreated sewage into the Ganga.","Household sewer connectivity in Haridwar was 69%."],
    mains:"Building sewage plants without sewer connections defeats river clean-up. Discuss with reference to the CAG's audit of Namami Gange in Uttarakhand. (15 marks)",
    quiz:[{q:"How many STPs in Uttarakhand were found discharging untreated sewage into the Ganga?", o:["3","8","12","44"], a:2, w:"12."},{q:"Which town had the highest household sewer connectivity in the audit?", o:["Rishikesh","Haridwar","Chamoli","Srinagar"], a:1, w:"Haridwar, at 69%."}]
  },
  related:["uk-campa","cag-kerala-jjm"],
  src:[["CAG audit report, Uttarakhand (ID 124366)","https://cag.gov.in/en/audit-report/details/124366","official"],["News Arena: CAG flags failures in Namami Gange in Uttarakhand","https://www.newsarenaindia.com/states/cag-flags-failures-in-namami-gange-project-in-uttarakhand/72149","coverage"],["ETV Bharat: CAG flags Ganga clean-up gaps","https://www.etvbharat.com/en/state/gangajal-cag-report-haridwar-kumbh-uttarakhand-politics-high-enn26031201559","coverage"]],
  kw:"Namami Gange Ganga Uttarakhand sewage STP Haridwar Rishikesh river pollution 2026"
},
/* ---------- CAG · West Bengal: Amphan relief ---------- */
{
  id:"cag-wb-amphan", body:"CAG", state:"West Bengal", kind:"Compliance audit", reportNo:"Report No. 01 of 2026 (West Bengal)",
  title:"Compliance Audit of Cyclone Amphan Relief in West Bengal", short:"Cyclone Amphan Relief", sector:"Social welfare", ministry:"Disaster Management Department, Government of West Bengal",
  date:"Jul 2026", dateISO:"2026-07-25", tabled:"Tabled in the West Bengal Assembly in July 2026", period:"Up to 31 March 2024", flagged:143.14, flaggedNote:"Duplicate housing grants (₹18.07 crore) plus transactions with mismatched account details (₹125.07 crore). The unsupported damage claims are not added.",
  tldr:[
    "Duplicate house-building grants of ₹18.07 crore went to 9,226 beneficiaries.",
    "The state's ₹35,018 crore claim for central aid was called 'exaggerated and unrealistically high'.",
    "A ₹8,830.85 crore farm-loss claim could not be fully backed by records."
  ],
  en:"Cyclone Amphan struck West Bengal in May 2020. The CAG checked how relief was assessed and paid. It found that damage claims, including a ₹35,018 crore request for central aid, were not supported by enough evidence, that some districts reused old beneficiary lists, and that ₹18.07 crore of housing grants were paid twice. The audit does not allege fraud; it points to weak documentation and verification.",
  hi:"मई 2020 में चक्रवात अम्फान ने पश्चिम बंगाल को प्रभावित किया। CAG ने जाँचा कि राहत का आकलन और भुगतान कैसे हुआ। केंद्र से ₹35,018 करोड़ की माँग सहित नुकसान के दावे पर्याप्त प्रमाण से समर्थित नहीं थे, कुछ ज़िलों ने पुरानी लाभार्थी सूचियाँ दोबारा इस्तेमाल कीं, और ₹18.07 करोड़ के आवास अनुदान दो बार दिए गए। ऑडिट धोखाधड़ी का आरोप नहीं लगाता, बल्कि कमज़ोर दस्तावेज़ीकरण की ओर इशारा करता है।",
  context:{
    what:"A CAG compliance audit of relief after Cyclone Amphan: damage assessment, beneficiary selection and payments.",
    why:"Disaster money must reach the right people quickly. Inflated claims or duplicate payments divert it from those who lost homes and crops.",
    how:"Review of damage assessments, beneficiary lists and payment records up to 31 March 2024; one of 28 long-pending CAG reports tabled together."
  },
  nums:[["₹18.07 cr","Duplicate house-building grants",1],["9,226","Beneficiaries paid twice",1],["₹35,018 cr","Central aid claimed, called exaggerated",1],["₹125.07 cr","Transactions with mismatched account details",1]],
  themes:[
    {name:"Claims not backed by evidence", sev:"high", items:[
      {t:"The claim for central assistance was judged exaggerated and unrealistically high, without adequate evidence of actual losses.", amt:"₹35,018 cr"},
      {t:"The SDRF claim for agricultural losses could not be fully substantiated from records.", amt:"₹8,830.85 cr"}]},
    {name:"Paid twice or to the wrong account", sev:"high", items:[
      {t:"Duplicate house-building grants were paid to 9,226 beneficiaries.", amt:"₹18.07 cr"},
      {t:"Transactions where beneficiary account details did not match.", amt:"₹125.07 cr"}]},
    {name:"Weak beneficiary selection", sev:"med", items:[
      {t:"Several districts reused lists from earlier disaster programmes instead of fresh Amphan assessments.", amt:""},
      {t:"Documentation and independent verification were inadequate.", amt:""}]}
  ],
  charts:[{title:"Amounts the audit questioned", type:"bars", unit:"₹ crore", data:[["Central aid claim (unsupported)",35018],["SDRF farm-loss claim (unsubstantiated)",8830.85],["Mismatched account transactions",125.07],["Duplicate housing grants",18.07]]}],
  recs:["Base damage claims on documented field assessments.","Use fresh, verified beneficiary lists for each disaster.","Validate bank details before payment to stop duplicates."],
  recsNote:"Drawn from the findings.",
  response:["The audit does not allege fraud or conclude that relief was systematically misused.","The BJP government said the reports exposed lapses under the previous TMC government; the TMC said audit observations do not by themselves establish wrongdoing."],
  timeline:[["May 2020","Cyclone Amphan hits West Bengal"],["Mar 2024","Audit period ends"],["Jul 2026","Tabled with 27 other pending CAG reports"]],
  glossary:["Compliance audit","SDRF"],
  exam:{
    prelims:["CAG Report No. 01 of 2026 (West Bengal) audited Cyclone Amphan relief.","Duplicate housing grants of ₹18.07 crore went to 9,226 beneficiaries.","SDRF stands for State Disaster Response Fund."],
    mains:"Speed and accuracy pull in opposite directions in disaster relief. Discuss with reference to the CAG's audit of Cyclone Amphan relief. (10 marks)",
    quiz:[{q:"How much in duplicate house-building grants did the CAG find in Amphan relief?", o:["₹1.8 crore","₹18.07 crore","₹125.07 crore","₹8,830 crore"], a:1, w:"₹18.07 crore to 9,226 beneficiaries."}]
  },
  related:["cag-wb-covid","cag-wb-finances-2425"],
  src:[["Outlook: inside the CAG audit of Amphan relief","https://www.outlookindia.com/national/inside-the-cag-audit-of-west-bengals-amphan-relief","coverage"],["Deccan Herald: CAG report on Amphan relief","https://deccanherald.com/india/west-bengal/cag-report-alleges-irregularities-in-west-bengal-governments-cyclone-amphan-relief-4087283","coverage"],["CAG audit reports","https://cag.gov.in/en/audit-report","official"]],
  kw:"West Bengal Amphan cyclone relief duplicate payment SDRF disaster 2026"
},
/* ---------- CAG · West Bengal: Covid infrastructure ---------- */
{
  id:"cag-wb-covid", body:"CAG", state:"West Bengal", kind:"Performance audit", reportNo:"CAG performance audit (West Bengal, 2026)",
  title:"Performance Audit of Covid-19 Health Infrastructure in West Bengal", short:"Covid Infrastructure, Bengal", sector:"Health", ministry:"Health & Family Welfare Department, Government of West Bengal",
  date:"Jul 2026", dateISO:"2026-07-25", tabled:"Tabled in the West Bengal Assembly in July 2026", period:"Pandemic period, with status as of December 2023", flagged:1121.33, flaggedNote:"Emergency Covid funds left unspent: ₹659.28 crore of ECRP-II and ₹462.05 crore of state untied funds.",
  tldr:[
    "43 of 75 PSA oxygen plants were not commissioned or not working as of December 2023.",
    "₹659.28 crore (65%) of central emergency Covid funds was unspent in March 2022.",
    "Only 9 of 29 CSR-funded oxygen plants were functioning."
  ],
  en:"During Covid-19, hospitals across India built oxygen plants and received emergency funds. In West Bengal, the CAG found that most oxygen plants were not commissioned or not working by December 2023, and much of the emergency money stayed unspent. Plants funded through PM CARES and company CSR money fared little better.",
  hi:"कोविड-19 के दौरान देश भर के अस्पतालों में ऑक्सीजन प्लांट लगे और आपातकालीन धन मिला। पश्चिम बंगाल में CAG ने पाया कि दिसंबर 2023 तक अधिकांश ऑक्सीजन प्लांट या तो चालू नहीं हुए या काम नहीं कर रहे थे, और आपातकालीन धन का बड़ा हिस्सा खर्च नहीं हुआ।",
  context:{
    what:"A CAG performance audit of pandemic health infrastructure in West Bengal: oxygen plants and emergency funds.",
    why:"Oxygen shortages killed patients in 2021. Plants built then are meant to protect against the next emergency.",
    how:"Review of plant status as of December 2023 and of fund use under the Emergency Covid-19 Response Package-II."
  },
  nums:[["43 of 75","PSA oxygen plants not commissioned or non-functional",1],["₹659.28 cr","ECRP-II funds unspent (65%)",1],["23 of 46","PM CARES plants operational",0],["9 of 29","CSR-funded plants functioning",1]],
  themes:[
    {name:"Oxygen plants not working", sev:"high", items:[
      {t:"43 of 75 PSA oxygen plants were not commissioned or were non-functional as of December 2023.", amt:""},
      {t:"Only 23 of 46 plants funded through PM CARES were operational.", amt:""},
      {t:"Only 9 of 29 CSR-funded plants were functioning.", amt:""}]},
    {name:"Emergency money left unspent", sev:"high", items:[
      {t:"65% of Emergency Covid-19 Response Package-II funds were unspent as of March 2022.", amt:"₹659.28 cr"},
      {t:"State Covid-19 untied funds were not utilised.", amt:"₹462.05 cr"}]}
  ],
  charts:[{title:"Oxygen plants working, by funding source", type:"pairs", unit:"plants", legend:["Installed","Working"], data:[["All PSA plants",75,32],["PM CARES",46,23],["CSR-funded",29,9]], note:"'Working' for all PSA plants = 75 minus 43 not commissioned or non-functional."}],
  recs:["Commission and maintain oxygen plants with trained staff and annual checks.","Spend emergency funds on time or return them."],
  recsNote:"Drawn from the findings.",
  response:["The government's replies are in the full report, one of 28 tabled together in July 2026."],
  timeline:[["2021","Second Covid-19 wave; oxygen plants sanctioned"],["Mar 2022","65% of ECRP-II funds unspent"],["Dec 2023","43 of 75 plants not working"],["Jul 2026","Report tabled"]],
  glossary:["Performance audit","PSA oxygen plant"],
  exam:{
    prelims:["A CAG audit found 43 of 75 PSA oxygen plants in West Bengal not commissioned or non-functional (Dec 2023).","₹659.28 crore (65%) of ECRP-II funds were unspent in March 2022."],
    mains:"Emergency infrastructure built in a crisis often decays after it. Discuss with reference to the CAG's audit of Covid-19 infrastructure in West Bengal. (10 marks)",
    quiz:[{q:"How many of 29 CSR-funded oxygen plants in West Bengal were functioning per the CAG?", o:["9","23","29","43"], a:0, w:"Only 9."}]
  },
  related:["cag-wb-amphan","delhi-health"],
  src:[["Outlook: CAG reports tabled in West Bengal","https://www.outlookindia.com/national/inside-the-cag-audit-of-west-bengals-amphan-relief","coverage"],["CAG audit reports","https://cag.gov.in/en/audit-report","official"]],
  kw:"West Bengal Covid oxygen plant PSA PM CARES CSR emergency funds health 2026"
},
/* ---------- CAG · West Bengal: State finances ---------- */
{
  id:"cag-wb-finances-2425", body:"CAG", state:"West Bengal", kind:"Financial audit", reportNo:"State Finances Audit Report 2024-25 (West Bengal)",
  title:"State Finances Audit Report of West Bengal, 2024-25", short:"Bengal State Finances", sector:"Public finance", ministry:"Finance Department, Government of West Bengal",
  date:"Jul 2026", dateISO:"2026-07-25", tabled:"Tabled in the West Bengal Assembly in July 2026", period:"Financial year 2024-25", flagged:229000, flaggedNote:"Grants still waiting for utilisation certificates (about ₹2.29 lakh crore, rounded). Money not yet proven spent as intended, not money lost.",
  tldr:[
    "Grants worth ₹2.29 lakh crore are still waiting for utilisation certificates.",
    "Capital spending fell from ₹28,963 crore to ₹21,622 crore in a year.",
    "The state ran a revenue deficit of ₹39,727 crore while subsidies rose sharply."
  ],
  en:"The CAG's yearly review of West Bengal's accounts found the state borrowing to meet day-to-day costs, with a revenue deficit of ₹39,727 crore. Capital spending on roads, schools and hospitals fell by about a quarter in one year while subsidies rose. Grants worth ₹2.29 lakh crore still have no certificate showing they were used as intended, and ₹13,486.92 crore was spent beyond what the Assembly approved.",
  hi:"CAG की पश्चिम बंगाल के खातों की वार्षिक समीक्षा में पाया गया कि राज्य रोज़मर्रा के खर्च के लिए उधार ले रहा है, राजस्व घाटा ₹39,727 करोड़ रहा। एक साल में पूंजीगत खर्च लगभग एक-चौथाई घटा जबकि सब्सिडी बढ़ी। ₹2.29 लाख करोड़ के अनुदानों का उपयोग प्रमाणपत्र अब भी लंबित है, और ₹13,486.92 करोड़ विधानसभा की मंज़ूरी से अधिक खर्च हुए।",
  context:{
    what:"The CAG's annual audit of West Bengal's finances: deficits, debt, spending quality and budget control for 2024-25.",
    why:"A state that borrows for running costs and cuts capital spending has less to invest in future growth.",
    how:"Analysis of the state's Finance and Appropriation Accounts for 2024-25."
  },
  nums:[["₹2.29 lakh cr","Grants pending utilisation certificates",1],["₹39,727 cr","Revenue deficit (2.19% of GSDP)",1],["₹61,924 cr","Fiscal deficit (3.41% of GSDP)",0],["₹21,622 cr","Capital spending, down from ₹28,963 cr",1]],
  themes:[
    {name:"Money given without proof of use", sev:"high", items:[
      {t:"Utilisation certificates are pending for grants; Panchayat & Rural Development has the largest pendency, followed by School Education and Urban Development.", amt:"₹2.29 lakh cr"}]},
    {name:"Borrowing for running costs", sev:"high", items:[
      {t:"Revenue deficit of 2.19% of GSDP.", amt:"₹39,727 cr"},
      {t:"Fiscal deficit of ₹61,924 crore (3.41% of GSDP), which coverage describes as within the fiscal responsibility target.", amt:""},
      {t:"Total liabilities of ₹7,01,724 crore, slightly above the 38% of GSDP benchmark.", amt:""}]},
    {name:"Less building, more subsidy", sev:"med", items:[
      {t:"Capital expenditure fell from ₹28,963 crore in 2023-24 to ₹21,622 crore in 2024-25, while subsidy spending rose sharply.", amt:""}]},
    {name:"Spending beyond approval", sev:"med", items:[
      {t:"Excess expenditure under seven grants needs regularisation by the legislature.", amt:"₹13,486.92 cr"}]}
  ],
  charts:[
    {title:"Capital spending fell", type:"bars", unit:"₹ crore", data:[["2023-24",28963],["2024-25",21622]]},
    {title:"Deficits, 2024-25", type:"bars", unit:"% of GSDP", data:[["Fiscal deficit",3.41],["Revenue deficit",2.19]]}
  ],
  recs:["Clear pending utilisation certificates.","Protect capital spending and rationalise subsidies.","Regularise excess expenditure and keep spending within approved grants."],
  recsNote:"Drawn from the findings.",
  response:["One of 28 CAG reports tabled together in July 2026 after a gap of four years."],
  timeline:[["2015-16 to 2024-25","GSDP grew at a 9.57% compound annual rate"],["Mar 2025","Financial year audited closes"],["Jul 2026","Report tabled"]],
  glossary:["Financial audit","Utilisation certificate","Fiscal deficit","GSDP","Committed expenditure"],
  exam:{
    prelims:["West Bengal's revenue deficit in 2024-25 was ₹39,727 crore (2.19% of GSDP), per the CAG.","Utilisation certificates worth ₹2.29 lakh crore were pending."],
    mains:"Falling capital expenditure and rising subsidies signal fiscal stress. Examine with reference to the CAG's State Finances Audit Report of West Bengal, 2024-25. (15 marks)",
    quiz:[{q:"West Bengal's capital expenditure in 2024-25 per the CAG was about:", o:["₹28,963 crore","₹21,622 crore","₹39,727 crore","₹61,924 crore"], a:1, w:"₹21,622 crore, down from ₹28,963 crore."}]
  },
  related:["state-finances","union-accounts-2425","cag-wb-amphan"],
  src:[["Outlook: CAG reports tabled in West Bengal","https://www.outlookindia.com/national/inside-the-cag-audit-of-west-bengals-amphan-relief","coverage"],["The Federal: 28 CAG reports tabled","https://thefederal.com/category/states/east/west-bengal/bjp-tables-28-cag-reports-corner-tmc-state-spending-welfare-251476","coverage"]],
  kw:"West Bengal state finances deficit debt utilisation certificate capital expenditure subsidy 2026"
},
/* ---------- NITI · Investment Friendliness Index ---------- */
{
  id:"niti-ifi-2026", body:"NITI", kind:"Index", reportNo:"First edition",
  title:"Investment Friendliness Index 2026", short:"Investment Friendliness 2026", sector:"Other", ministry:"NITI Aayog",
  date:"Jul 2026", dateISO:"2026-07-17", tabled:"Released on 17 July 2026", period:"Latest available state data", flagged:null,
  tldr:[
    "Gujarat ranks first with 56.6 out of 100, ahead of Maharashtra (53.7) and Tamil Nadu (53.3).",
    "All 28 states and 8 UTs are scored on eight pillars; infrastructure carries the most weight at 25%.",
    "Bihar, Jharkhand and West Bengal are at the bottom among large states."
  ],
  en:"NITI Aayog's first Investment Friendliness Index scores every state and UT on how attractive it is to investors, across eight pillars from infrastructure and regulation to financial health and environmental resilience. Gujarat leads with 56.6 out of 100, helped by infrastructure, finances and ease of regulation. No state scores high in absolute terms: the leader is just above half marks.",
  hi:"नीति आयोग का पहला निवेश अनुकूलता सूचकांक हर राज्य और केंद्र शासित प्रदेश को आठ स्तंभों पर अंक देता है, बुनियादी ढाँचे और नियमन से लेकर वित्तीय स्वास्थ्य और पर्यावरणीय लचीलेपन तक। गुजरात 100 में 56.6 अंकों के साथ सबसे आगे है। कोई भी राज्य बहुत ऊँचे अंक नहीं पाता: शीर्ष राज्य भी आधे अंकों से थोड़ा ही ऊपर है।",
  context:{
    what:"A new NITI Aayog index ranking states and UTs on their investment climate.",
    why:"States now compete for investment. A common yardstick shows where policy, infrastructure or finances hold a state back.",
    how:"Scores across eight pillars: infrastructure (25% weight), business climate, resources, government policy, regulatory ease, institutional environment, financial health and environmental resilience."
  },
  nums:[["56.6","Gujarat's score, rank 1",0],["36","States and UTs ranked",0],["8","Pillars scored",0],["25%","Weight of the infrastructure pillar",0]],
  themes:[
    {name:"The leaders", sev:"low", items:[
      {t:"Top five: Gujarat (56.6), Maharashtra (53.7), Tamil Nadu (53.3), Goa (53.1), Odisha (52.4).", amt:""},
      {t:"Gujarat led on infrastructure, financial health and regulatory ease.", amt:""}]},
    {name:"Who lags", sev:"med", items:[
      {t:"Bihar, Jharkhand and West Bengal were the bottom performers among large states.", amt:""},
      {t:"Lakshadweep was reported as the lowest overall.", amt:""}]},
    {name:"Read with care", sev:"low", items:[
      {t:"Even the top state scores just above half, so the index shows room to improve everywhere.", amt:""}]}
  ],
  charts:[{title:"Top five states", type:"bars", unit:"score out of 100", max:100, data:[["Gujarat",56.6],["Maharashtra",53.7],["Tamil Nadu",53.3],["Goa",53.1],["Odisha",52.4]]}],
  recs:["States should use pillar-wise scores to target reforms, especially infrastructure and regulatory ease."],
  recsNote:"Drawn from the index design.",
  response:["The index is meant to drive competition among states; it carries no penalties."],
  timeline:[["17 Jul 2026","First edition released"]],
  glossary:["GSDP"],
  exam:{
    prelims:["NITI Aayog released the first Investment Friendliness Index on 17 July 2026.","Gujarat ranked first with 56.6; the infrastructure pillar has 25% weight."],
    mains:"Competitive federalism can attract investment but may widen regional gaps. Discuss with reference to NITI Aayog's Investment Friendliness Index 2026. (10 marks)",
    quiz:[{q:"Which state topped NITI Aayog's Investment Friendliness Index 2026?", o:["Maharashtra","Tamil Nadu","Gujarat","Odisha"], a:2, w:"Gujarat, 56.6 out of 100."}]
  },
  related:["fiscal-health-2026"],
  src:[["Drishti IAS: Gujarat tops the Investment Friendliness Index 2026","https://www.drishtiias.com/state-pcs-current-affairs/gujarat-tops-niti-aayogs-investment-friendliness-index-2026","analysis"],["All India Radio News","https://newsonair.gov.in/gujarat-tops-niti-aayogs-investment-friendliness-index-2026-as-best-place-to-attract-investment/","coverage"],["Organiser: rankings","https://organiser.org/2026/07/22/371173/bharat/investment-friendliness-index-2026-gujarat-tops-as-states-races-towards-viksit-bharat/","coverage"]],
  kw:"investment friendliness index states Gujarat Maharashtra Tamil Nadu ranking business 2026"
},
/* ---------- NITI · AI for Viksit Bharat ---------- */
{
  id:"niti-ai-2025", body:"NITI", kind:"Policy report", reportNo:"NITI Aayog policy report",
  title:"AI for Viksit Bharat: The Opportunity for Accelerated Economic Growth", short:"AI for Viksit Bharat", sector:"Skilling & employment", ministry:"NITI Aayog",
  date:"Sep 2025", dateISO:"2025-09-15", tabled:"Released on 15 September 2025", period:"Projections to 2035", flagged:null,
  tldr:[
    "Faster AI adoption across industries could add $500–600 billion to India's GDP by 2035.",
    "AI-led research and development could add another $280–475 billion.",
    "AI will create new roles but displace clerical, routine and low-skill jobs; skilling decides who gains."
  ],
  en:"NITI Aayog's report estimates how much artificial intelligence could add to India's economy by 2035. Faster adoption across industries could add $500–600 billion, and AI-led research another $280–475 billion. It expects new kinds of jobs, but also displacement in clerical and routine work, so the gains depend on skilling. It is a policy roadmap, not a Cabinet-approved strategy.",
  hi:"नीति आयोग की यह रिपोर्ट अनुमान लगाती है कि 2035 तक कृत्रिम बुद्धिमत्ता भारत की अर्थव्यवस्था में कितना जोड़ सकती है। उद्योगों में तेज़ी से अपनाने से $500–600 अरब, और AI आधारित अनुसंधान से $280–475 अरब और जुड़ सकते हैं। नई नौकरियाँ बनेंगी, लेकिन क्लर्कीय और नियमित काम में नौकरियाँ घटेंगी, इसलिए लाभ कौशल पर निर्भर है।",
  context:{
    what:"A NITI Aayog report on AI's potential contribution to India's growth, launched with a Roadmap for AI for Viksit Bharat.",
    why:"Reaching developed-country status by 2047 needs about 8% growth; the report argues AI can help close the gap.",
    how:"Economic modelling of AI adoption and AI-led R&D, incorporating analysis from McKinsey & Company."
  },
  nums:[["$500–600 bn","GDP gain by 2035 from faster AI adoption",0],["$280–475 bn","Additional gain from AI-led R&D",0],["2035","Horizon of the estimates",0]],
  themes:[
    {name:"The growth opportunity", sev:"low", items:[
      {t:"Accelerated AI adoption across industries could add $500–600 billion to GDP by 2035.", amt:""},
      {t:"AI-led research and development could add $280–475 billion.", amt:""}]},
    {name:"Jobs: gains and losses", sev:"med", items:[
      {t:"AI is expected to create new kinds of roles while displacing jobs in clerical, routine and low-skill segments.", amt:""},
      {t:"Gains depend on large-scale skilling of the workforce.", amt:""}]},
    {name:"Read with care", sev:"low", items:[
      {t:"The report is not a Cabinet-approved policy and does not carry the weight of an official national strategy.", amt:""}]}
  ],
  charts:[{title:"Potential GDP gain by 2035", type:"bars", unit:"US$ billion (upper estimate)", data:[["Faster AI adoption",600],["AI-led R&D",475]], note:"Ranges: $500–600 bn and $280–475 bn; upper ends shown."}],
  recs:["Accelerate AI adoption across industries.","Invest in AI-led research and development.","Reskill workers in roles most exposed to automation."],
  recsNote:"Summarised from coverage of the report.",
  response:["A policy roadmap for ministries and states; not binding."],
  timeline:[["15 Sep 2025","Report and roadmap launched"],["2035","Horizon of the estimates"],["2047","Viksit Bharat target year"]],
  glossary:["Labour force participation"],
  exam:{
    prelims:["NITI Aayog's 'AI for Viksit Bharat' report was launched on 15 September 2025.","It estimates faster AI adoption could add $500–600 billion to GDP by 2035."],
    mains:"AI could accelerate growth but deepen job insecurity. Discuss with reference to NITI Aayog's 'AI for Viksit Bharat' report. (15 marks)",
    quiz:[{q:"By what year does NITI Aayog's AI report estimate a $500–600 billion GDP gain?", o:["2030","2035","2047","2070"], a:1, w:"2035."}]
  },
  related:["skilling-viksit-2047"],
  src:[["Outlook Business: AI could add $1 trn by 2035","https://www.outlookbusiness.com/deeptech/artificial-intelligence/niti-aayogs-ai-for-viksit-bharat-report-says-ai-could-add-1trn-to-indias-gdp-by-2035","coverage"],["MediaNama: NITI Aayog AI report","https://www.medianama.com/2025/09/223-niti-aayog-ai-report-600b-gdp-boost/","analysis"],["Tribune: AI to create new jobs","https://www.tribuneindia.com/news/business/ai-to-create-new-job-opportunities-add-usd-2-trillion-extra-to-economy-by-2035-niti-aayog-ceo/amp","coverage"]],
  kw:"AI artificial intelligence GDP jobs automation skilling NITI 2025 viksit bharat"
},
/* ---------- NITI · Net Zero financing ---------- */
{
  id:"niti-netzero-2026", body:"NITI", kind:"Policy report", reportNo:"Scenarios towards Viksit Bharat and Net Zero, Vol. 9",
  title:"Scenarios towards Viksit Bharat and Net Zero: Financing Needs", short:"Net Zero Financing", sector:"Environment", ministry:"NITI Aayog",
  date:"Feb 2026", dateISO:"2026-02-10", tabled:"Released in February 2026 (eleven-volume series)", period:"Projections to 2070", flagged:null,
  tldr:[
    "Reaching net zero by 2070 needs about $22.7 trillion, roughly $500 billion a year against $135 billion today.",
    "Expected flows cover $16.2 trillion, leaving a financing gap of about $6.5 trillion.",
    "The power sector needs the most money and accounts for 82% of the gap."
  ],
  en:"NITI Aayog modelled what it will cost India to become a developed country and reach net zero emissions by 2070. The answer is about $22.7 trillion, or around $500 billion a year, nearly four times today's investment. Even with expected flows, a gap of about $6.5 trillion remains, mostly in power. The report expects foreign sources to fund a much bigger share, while finding only a marginal effect on growth.",
  hi:"नीति आयोग ने अनुमान लगाया कि 2070 तक विकसित देश बनने और शुद्ध शून्य उत्सर्जन तक पहुँचने में कितना खर्च आएगा। जवाब है लगभग $22.7 ट्रिलियन, यानी हर साल लगभग $500 अरब, जो आज के निवेश का लगभग चार गुना है। अपेक्षित धन के बाद भी लगभग $6.5 ट्रिलियन का अंतर बचता है, ज़्यादातर बिजली क्षेत्र में।",
  context:{
    what:"Volume 9 of NITI Aayog's eleven reports on scenarios towards Viksit Bharat and Net Zero, focused on financing needs.",
    why:"India has committed to net zero by 2070. Knowing the bill, and the gap, shapes energy, finance and climate policy.",
    how:"Scenario modelling comparing a Current Policy pathway with a Net Zero pathway to 2070."
  },
  nums:[["$22.7 tn","Investment needed by 2070 (Net Zero scenario)",0],["$6.5 tn","Financing gap",1],["$500 bn","Needed per year, vs $135 bn now",1],["82%","Share of the gap in the power sector",0]],
  themes:[
    {name:"The bill", sev:"high", items:[
      {t:"Cumulative investment of $22.7 trillion is needed by 2070, about $500 billion a year against current annual investment of $135 billion.", amt:""},
      {t:"By sector: power $12.3 trillion, industry $6.1 trillion, transport $4.3 trillion.", amt:""},
      {t:"Under the Current Policy scenario the need is about $14.7 trillion.", amt:""}]},
    {name:"The gap", sev:"high", items:[
      {t:"Expected flows of $16.2 trillion leave a financing gap of about $6.53 trillion, 82% of it in power.", amt:""},
      {t:"International sources' share of capital needs is expected to rise to 42% by 2070, from 17% in 2022-23.", amt:""}]},
    {name:"Growth effect", sev:"low", items:[
      {t:"Macroeconomic analysis finds only a marginal impact on growth from the Net Zero pathway.", amt:""}]}
  ],
  charts:[
    {title:"Where the $22.7 trillion goes", type:"split", unit:"US$ trillion", data:[["Power",12.3],["Industry",6.1],["Transport",4.3]]},
    {title:"Investment need by 2070", type:"bars", unit:"US$ trillion", data:[["Net Zero scenario",22.7],["Expected flows",16.2],["Current Policy scenario",14.7]]}
  ],
  recs:["Mobilise far larger external and private finance, especially for power.","Develop instruments to cut the cost of capital for clean energy."],
  recsNote:"Drawn from the report's financing analysis.",
  response:["A scenario study to inform policy; not a binding plan."],
  timeline:[["2022-23","External finance 17% of capital needs"],["Feb 2026","Eleven reports released"],["2047","Viksit Bharat target"],["2070","Net zero target year"]],
  glossary:["Net zero"],
  exam:{
    prelims:["NITI Aayog's net-zero financing study (Feb 2026) puts the need at $22.7 trillion by 2070.","The financing gap is about $6.5 trillion, 82% of it in power.","India's net zero target year is 2070."],
    mains:"Climate finance, not technology, is India's binding constraint for net zero. Discuss with reference to NITI Aayog's 2026 financing study. (15 marks)",
    quiz:[{q:"What cumulative investment does NITI Aayog estimate for India's Net Zero scenario by 2070?", o:["$6.5 trillion","$14.7 trillion","$22.7 trillion","$135 billion"], a:2, w:"$22.7 trillion."},{q:"Which sector accounts for 82% of the net-zero financing gap?", o:["Transport","Industry","Power","Agriculture"], a:2, w:"Power."}]
  },
  related:["niti-ai-2025","econ-survey"],
  src:[["NITI Aayog report page","https://www.niti.gov.in/index.php/node/2334","official"],["Drishti IAS: Scenarios towards Viksit Bharat and Net Zero","https://www.drishtiias.com/daily-updates/daily-news-analysis/scenarios-towards-viksit-bharat-and-net-zero/print_manually","analysis"],["Renewable Watch: $22.7 trillion needed","https://renewablewatch.in/2026/02/16/capital-mobilisation-of-22-7-trillion-required-by-2070-to-achieve-net-zero-niti-aayog/","coverage"]],
  kw:"net zero 2070 climate finance energy transition power NITI 2026 viksit bharat"
},
/* ---------- CAG · Direct tax deductions to banks and NBFCs (Union) ---------- */
{
  id:"cag-banks-nbfc-tax-40-2025", body:"CAG", kind:"Performance audit", reportNo:"Report No. 40 of 2025",
  title:"Performance Audit on Direct Taxes Exemptions and Deductions to Banks and Non-Banking Financial Companies", short:"Tax Deductions to Banks & NBFCs", sector:"Public finance", ministry:"Ministry of Finance (Department of Revenue, CBDT)",
  date:"Apr 2026", dateISO:"2026-04-02", tabled:"Laid in Parliament on 2 April 2026", period:"Report for the year ended March 2024; cases examined up to June 2023", flagged:74766.39, flaggedNote:"Probable tax implication of the audit's compliance observations. These are amounts at issue, not confirmed losses.",
  tldr:[
    "The CAG examined 2,378 income tax cases of banks and NBFCs and made 1,847 observations with a probable tax implication of ₹74,766.39 crore.",
    "In 127 cases, bad debts of ₹40,178.47 crore were written off without the borrower's PAN.",
    "Tax rules treat a loan as an NPA after six months, while the RBI uses three months, which has led to disputes."
  ],
  en:"Banks and non-banking finance companies can cut their taxable income by claiming deductions, mostly for loans that go bad. The CAG checked how the Income Tax Department allowed these claims. It found deductions allowed without enough checks, write-offs without the borrower's PAN, and tax rules that do not match RBI norms. The observations carry a probable tax implication of ₹74,766.39 crore. After the audit, ₹3,503.44 crore was recovered from five taxpayers.",
  hi:"बैंक और गैर-बैंकिंग वित्तीय कंपनियाँ कटौतियाँ दावा करके अपनी कर-योग्य आय घटा सकती हैं, ज़्यादातर डूबे कर्ज़ों के लिए। CAG ने जाँचा कि आयकर विभाग ने ये दावे कैसे मंज़ूर किए। उसने पाया कि कटौतियाँ पर्याप्त जाँच के बिना मंज़ूर हुईं, उधारकर्ता के PAN के बिना कर्ज़ बट्टे खाते में डाले गए, और कर नियम RBI के मानकों से मेल नहीं खाते। इन टिप्पणियों का संभावित कर प्रभाव ₹74,766.39 करोड़ है। ऑडिट के बाद पाँच करदाताओं से ₹3,503.44 करोड़ वसूले गए।",
  context:{
    what:"A CAG performance audit of how the Income Tax Department assessed exemptions and deductions claimed by scheduled commercial banks and NBFCs. It also follows up on the CAG's earlier Report No. 7 of 2008 on the same subject.",
    why:"Deductions for bad loans and reserves are among the largest claims banks make. If they are allowed loosely, the government loses tax and the same loan can bring relief more than once.",
    how:"2,463 cases were selected and 2,378 examined, up to June 2023, with a fuller analysis of 10 banks and 7 NBFCs for assessment years 2014-15 to 2019-20. Ministry replies were taken up to November 2025."
  },
  nums:[["₹74,766 cr","Probable tax implication of audit observations",1],["2,378","Assessment cases examined",0],["1,847","Audit observations",0],["₹3,503 cr","Recovered from five taxpayers after the audit",0]],
  themes:[
    {name:"Bad-loan deductions allowed loosely", sev:"high", items:[
      {t:"Irregular allowance of deductions for bad debts written off.", amt:"₹33,459.08 cr"},
      {t:"Irregular allowance of provisions for bad and doubtful debts.", amt:"₹2,971.26 cr"},
      {t:"Irregular allowance of transfers to special reserves.", amt:"₹531.18 cr"}]},
    {name:"Borrower details missing", sev:"high", items:[
      {t:"In 127 cases, bad debts were written off without the borrower's PAN.", amt:"₹40,178.47 cr"},
      {t:"In 58 cases, bad debts were allowed without borrower information even though they were not debited to the profit and loss account.", amt:"₹1,69,782.47 cr"},
      {t:"The tax return form ITR-6 and the tax audit report (Form 3CD) have no columns to capture these details.", amt:""}]},
    {name:"Tax rules out of step with RBI", sev:"med", items:[
      {t:"Rule 6EA treats a loan as an NPA after six months overdue; the RBI uses three months. This has caused disputes over tax on interest in the gap.", amt:""},
      {t:"In 36 NBFC cases, interest on NPAs was not taxed on an accrual basis. Rule 6EA has not been aligned with Section 43D.", amt:""}]},
    {name:"Recoveries not matched with tax returns", sev:"med", items:[
      {t:"In 52 cases, banks offered only ₹2,098.35 crore for tax against recoveries of ₹14,303 crore reported to the RBI.", amt:"₹14,303 cr"},
      {t:"In 15 cases, amounts reported as recovered to the National Housing Bank were missing from the tax audit report.", amt:"₹137.89 cr"},
      {t:"There is no standard procedure for Assessing Officers to treat bank and NBFC deductions uniformly.", amt:""}]}
  ],
  charts:[
    {title:"Largest deduction issues", type:"bars", unit:"₹ crore, probable tax implication", data:[["Bad debts written off",33459.08],["Provisions for bad and doubtful debts",2971.26],["Special reserves",531.18]]},
    {title:"52 bank cases: recoveries vs tax offered", type:"bars", unit:"₹ crore", data:[["Recoveries reported to RBI",14303],["Offered for tax",2098.35]]}
  ],
  recs:[
    "Amend Rule 6EA in line with Section 43D and RBI categories of NBFCs.",
    "Allow bad-debt write-offs only after the debt is actually found irrecoverable.",
    "Change ITR-6 to capture borrower PAN and bad-debt details above a threshold.",
    "Check mismatches between recoveries reported to the RBI and the tax audit report.",
    "Frame a standard procedure for Assessing Officers handling bank assessments."
  ],
  recsNote:"5 of the report's 37 recommendations, summarised from the CAG press release.",
  response:[
    "The Ministry fully accepted 21 of 25 compliance observations put to it (₹799.38 crore), partly accepted 2 and did not accept 2 (₹237.70 crore).",
    "Income Tax field offices accepted 88 of 212 observations (₹28,639.13 crore) and did not accept 41 (₹6,900.25 crore).",
    "The report goes to Parliament's Public Accounts Committee."
  ],
  timeline:[["2008","CAG Report No. 7 of 2008 on the same subject"],["Jun 2023","Cases examined up to"],["Aug 2025","Income Tax Act, 2025 passed"],["Nov 2025","Ministry replies received up to"],["2 Apr 2026","Report No. 40 of 2025 laid in Parliament"]],
  glossary:["Performance audit","NPA","Bad debt","CBDT","PAC"],
  exam:{
    prelims:[
      "CAG Report No. 40 of 2025 on direct tax exemptions and deductions to banks and NBFCs was laid in Parliament on 2 April 2026.",
      "Its observations carry a probable tax implication of ₹74,766.39 crore.",
      "Rule 6EA of the Income Tax Rules treats a loan as an NPA after six months; RBI norms use three months.",
      "The audit made a fuller analysis of 10 banks and 7 NBFCs."
    ],
    mains:"Generous tax treatment of bad loans can turn a banking problem into a fiscal one. Discuss with reference to the CAG's 2026 audit of deductions to banks and NBFCs. (10 marks)",
    quiz:[
      {q:"What probable tax implication did the CAG report for deductions allowed to banks and NBFCs?", o:["₹3,503 crore","₹33,459 crore","₹74,766 crore","₹1,69,782 crore"], a:2, w:"₹74,766.39 crore across the compliance observations."},
      {q:"After how long does Rule 6EA of the Income Tax Rules treat an overdue loan as an NPA?", o:["30 days","Three months","Six months","One year"], a:2, w:"Six months, against three months under RBI norms."},
      {q:"In how many cases were bad debts written off without the borrower's PAN?", o:["36","52","127","212"], a:2, w:"127 cases, involving ₹40,178.47 crore."}
    ]
  },
  related:["cag-gst-20-2026","union-accounts-2425"],
  src:[["CAG press release on Report No. 40 of 2025","https://saiindia.gov.in/uploads/PressRelease/PR-Press-Release-on-Report-no-40-of-2026-in-english-069ce5835737b64-56884580.pdf","official"],["CAG audit report page","https://cag.gov.in/en/audit-report/details/125150","official"],["A2Z Taxcorp: CAG flags ₹74,766 crore tax impact","https://a2ztaxcorp.net/cag-flags-%E2%82%B974766-crore-tax-impact-from-deductions-claimed-by-banks-nbfcs/","coverage"]],
  kw:"income tax banks NBFC bad debt write-off NPA Rule 6EA Section 36 PAN CBDT direct tax deductions audit 2026"
},
/* ---------- CAG · Delhi: GST, power subsidy, e-procurement ---------- */
{
  id:"cag-delhi-revenue-1-2026", body:"CAG", state:"Delhi", kind:"Compliance audit", reportNo:"Report No. 1 of 2026 (Delhi)",
  title:"Audit Report on Revenue, Economic, Social and General Sectors, Government of NCT of Delhi", short:"Delhi GST, Power Subsidy & Tenders", sector:"Public finance", ministry:"Government of NCT of Delhi (Trade & Taxes, Power and other departments)",
  date:"Aug 2026", dateISO:"2026-08-07", tabled:"Tabled in the Delhi Assembly on 7 August 2026", period:"Year ended 31 March 2023", flagged:2030.16, flaggedNote:"Monetary value of the report's eight compliance audit paragraphs (₹1,985.04 crore in revenue and ₹45.12 crore in other sectors). These are amounts at issue, not confirmed losses.",
  tldr:[
    "Only 63,283 of 6.10 crore e-way bills (about 0.10%) were physically verified.",
    "The electricity subsidy reached ₹3,161 crore in 2022-23 and went to almost all domestic consumers, including ₹42.26 crore to connections with zero use.",
    "The same IP address was used for 14,527 bids across 7,181 tenders worth ₹3,217.44 crore."
  ],
  en:"This CAG report on Delhi covers tax collection, the power subsidy and online tendering. Very few e-way bills were checked, and some taxpayers with cancelled registrations had moved goods worth crores. The power subsidy went to nearly every household instead of those who need it, and some was paid on connections that used no power. In online tenders, rival bidders often shared a PAN, an email or an IP address. The CAG says these are risks to examine, not proven losses or collusion.",
  hi:"दिल्ली पर CAG की यह रिपोर्ट कर वसूली, बिजली सब्सिडी और ऑनलाइन टेंडर को देखती है। बहुत कम ई-वे बिलों की जाँच हुई, और रद्द पंजीकरण वाले कुछ करदाताओं ने करोड़ों का माल भेजा था। बिजली सब्सिडी ज़रूरतमंदों के बजाय लगभग हर घर को मिली, और कुछ ऐसे कनेक्शनों पर भी दी गई जिनमें बिजली खपत ही नहीं हुई। ऑनलाइन टेंडरों में प्रतिद्वंद्वी बोलीदाता अक्सर एक ही PAN, ईमेल या IP पता इस्तेमाल कर रहे थे। CAG कहता है कि ये जाँचने योग्य जोखिम हैं, सिद्ध नुकसान या मिलीभगत नहीं।",
  context:{
    what:"A CAG report on Delhi with two chapters: the revenue sector (a performance audit of the GST e-way bill system and a review of GST payment and return oversight) and other sectors (audits of the electricity subsidy and the e-procurement system, plus spending paragraphs).",
    why:"GST and the power subsidy are among Delhi's largest revenue and spending items, and e-procurement is meant to make public buying fair and transparent.",
    how:"Review of departmental records and data analysis for the year ended 31 March 2023. The report was sent to the government on 5 May 2026."
  },
  nums:[["₹2,030 cr","Value of compliance audit paragraphs",1],["0.10%","Share of e-way bills physically verified",1],["₹3,161 cr","Electricity subsidy, 2022-23",0],["3.47%","Tenders with award-of-contract details",1]],
  themes:[
    {name:"Weak GST oversight", sev:"high", items:[
      {t:"Only 63,283 of 6.10 crore e-way bills, about 0.10%, were physically verified.", amt:""},
      {t:"15 taxpayers generated 580 e-way bills for ₹252.66 crore of supplies without filing GSTR-3B returns.", amt:"₹31.46 cr"},
      {t:"28 taxpayers with cancelled registrations had generated 3,629 e-way bills worth ₹734.75 crore.", amt:"₹99.39 cr"},
      {t:"The CAG notes these are mismatches needing scrutiny, not established revenue losses.", amt:""}]},
    {name:"Power subsidy not targeted", sev:"high", items:[
      {t:"The electricity subsidy rose from ₹2,405.59 crore in 2019-20 to ₹3,161 crore in 2022-23, about 67–70% of all government subsidy spending.", amt:""},
      {t:"The 400-unit threshold covered about 80% of domestic consumers, and its basis could not be established.", amt:""},
      {t:"Subsidy went to connections with zero consumption for long periods, including ₹17.81 crore to over 50,000 connections idle for more than a year.", amt:"₹42.26 cr"},
      {t:"Regulatory assets of power distribution companies rose from ₹9,063 crore (2019-20) to ₹27,200.37 crore (March 2021).", amt:""}]},
    {name:"Red flags in e-procurement", sev:"high", items:[
      {t:"1,185 tenders were floated manually despite the e-procurement system.", amt:""},
      {t:"In 45 tenders, competing bidders were registered under a common PAN; in 38 tenders, all bidders shared one email address.", amt:"₹530.25 cr"},
      {t:"The same IP address was used for 14,527 bids across 7,181 tenders worth ₹3,217.44 crore. This is a risk of collusion, not proof of it.", amt:""},
      {t:"Only 3.47% of about 1.55 lakh tenders had award-of-contract details.", amt:""}]},
    {name:"Wasteful or unfruitful spending", sev:"med", items:[
      {t:"Land taken by DSIIDC in 2006 for a Gems and Jewellery Park and Fashion Design Hub stayed unproductive.", amt:"₹29.45 cr"},
      {t:"Avoidable payments on dewatering works.", amt:"₹5.63 cr"},
      {t:"Potential interest loss because the DTC Employees' Provident Fund Trust did not invest surplus funds on time.", amt:"₹5.50 cr"},
      {t:"A junior engineer exam was held by DSSSB after the vacancies were withdrawn.", amt:"₹1.05 cr"}]}
  ],
  charts:[
    {title:"Delhi's electricity subsidy", type:"bars", unit:"₹ crore", data:[["2019-20",2405.59],["2022-23",3161]]},
    {title:"Power distribution companies' regulatory assets", type:"bars", unit:"₹ crore", data:[["2019-20",9063],["March 2021",27200.37]]},
    {title:"Tenders with award-of-contract details", type:"split", unit:"% of about 1.55 lakh tenders", data:[["With details",3.47],["Without",96.53]]}
  ],
  recs:[
    "Target the power subsidy using billing data and sanctioned load, and examine Direct Benefit Transfer.",
    "Assess rising regulatory assets and the tariff burden they create.",
    "Make e-tendering mandatory above set thresholds and use all e-procurement modules.",
    "Add checks and alerts for bidders sharing a PAN, email or IP address."
  ],
  recsNote:"Summarised from published coverage of the report.",
  response:[
    "The Power Department said Direct Benefit Transfer was not feasible because subsidy payments are adjusted against the distribution companies' dues.",
    "The government's reply on the main e-procurement findings was awaited when the report was finalised. The report goes to the Assembly's Public Accounts Committee."
  ],
  timeline:[["2006","DSIIDC land taken for the Gems and Jewellery Park"],["Mar 2023","Year audited ends"],["5 May 2026","Report sent to the Delhi government"],["7 Aug 2026","Tabled in the Delhi Assembly"]],
  glossary:["Compliance audit","Performance audit","E-way bill","Regulatory asset","PAC"],
  exam:{
    prelims:[
      "CAG Report No. 1 of 2026 on the Government of NCT of Delhi was tabled on 7 August 2026.",
      "Only about 0.10% of e-way bills in Delhi were physically verified.",
      "Delhi's electricity subsidy was ₹3,161 crore in 2022-23.",
      "Only 3.47% of about 1.55 lakh e-tenders had award-of-contract details."
    ],
    mains:"Universal subsidies are easy to run but costly and poorly targeted. Examine with reference to the CAG's 2026 findings on Delhi's electricity subsidy. (10 marks)",
    quiz:[
      {q:"What share of e-way bills in Delhi did the CAG find were physically verified?", o:["About 0.10%","About 3.47%","About 10%","About 34%"], a:0, w:"63,283 of 6.10 crore, about 0.10%."},
      {q:"An e-way bill is generated on which portal?", o:["PFMS","GeM","GST portal","e-Procurement portal"], a:2, w:"It is a GST permit for moving goods."},
      {q:"Which shared detail did the CAG find across 14,527 bids in Delhi's e-tenders?", o:["Bank account","IP address","Office address","Phone number"], a:1, w:"The same IP address, across 7,181 tenders worth ₹3,217.44 crore."}
    ]
  },
  related:["delhi-excise","cag-gst-20-2026","delhi-health"],
  src:[["CAG audit report page: GNCTD Report No. 1 of 2026","https://cag.gov.in/en/audit-report/details/125907","official"],["The Policy Edge: CAG audit flags gaps in Delhi's GST oversight, power subsidy and e-procurement","https://www.policyedge.in/p/cag-audit-flags-systemic-gaps-in-delhis-gst-oversight-power-subsidy-and-e-procurement","analysis"],["A2Z Taxcorp: CAG flags GST lapses, untargeted power subsidy","https://a2ztaxcorp.net/delhi-cag-flags-gst-lapses-untargeted-power-subsidy-wasteful-expenditure/","coverage"]],
  kw:"Delhi GST e-way bill electricity power subsidy discom regulatory assets e-procurement tenders DSIIDC 2026"
},
/* ---------- NITI · Effective city government ---------- */
{
  id:"niti-city-govt-2026", body:"NITI", kind:"Policy report", reportNo:"NITI Aayog policy report",
  title:"Moving Towards Effective City Government: A Framework for Million-Plus Cities", short:"Effective City Government", sector:"Other", ministry:"NITI Aayog",
  date:"Apr 2026", dateISO:"2026-04-25", tabled:"Released on 25 April 2026 by Union Minister Manohar Lal Khattar", period:"Census 2011 data and current state practice", flagged:null,
  tldr:[
    "46 municipal corporations with a million or more people house 30.66% of India's urban population (Census 2011).",
    "City governments fully control only about 4 of the 18 functions the Constitution lists for them, per a CAG audit cited in the report.",
    "The report recommends a directly elected mayor with a fixed term and stronger powers."
  ],
  en:"India's biggest cities are run by many agencies, with mayors who are often weak and short-term. NITI Aayog's framework for million-plus cities says city governments control few of the functions the 74th Amendment lists, have thin finances, and depend on officers sent by the state. It recommends directly elected mayors with fixed terms, bringing water, sanitation and city transport under the city government, and stronger city finances. States would have to change their municipal laws.",
  hi:"भारत के बड़े शहर कई एजेंसियाँ चलाती हैं, और मेयर अक्सर कमज़ोर और कम अवधि के होते हैं। दस लाख से अधिक आबादी वाले शहरों के लिए नीति आयोग का ढाँचा कहता है कि शहर सरकारें 74वें संशोधन में सूचीबद्ध कुछ ही कामों पर नियंत्रण रखती हैं, उनकी वित्तीय स्थिति कमज़ोर है, और वे राज्य से भेजे गए अधिकारियों पर निर्भर हैं। यह सीधे चुने गए, तय कार्यकाल वाले मेयर, पानी, स्वच्छता और शहरी परिवहन को शहर सरकार के अधीन लाने और शहरों के वित्त को मज़बूत करने की सिफ़ारिश करता है। इसके लिए राज्यों को अपने नगरपालिका क़ानून बदलने होंगे।",
  context:{
    what:"A NITI Aayog framework on how India's million-plus cities should be governed: leadership, functions, finances and staff.",
    why:"Large cities are central to the Viksit Bharat 2047 goal, but fragmented agencies and weak mayors make it hard to say who is accountable for city services.",
    how:"Review of the 74th Amendment, state municipal laws and practice, Census 2011 data, CAG audit findings and municipal finance data."
  },
  nums:[["46","Municipal corporations with 1 million+ people (Census 2011)",0],["30.66%","Share of urban population living in them",0],["4 of 18","Constitutional functions under full city control, on average",1],["8","States that directly elect mayors",0]],
  themes:[
    {name:"Weak and fragmented leadership", sev:"high", items:[
      {t:"Only 8 states directly elect mayors: Bihar, Chhattisgarh, Haryana, Jharkhand, Madhya Pradesh, Odisha, Uttar Pradesh and Uttarakhand.", amt:""},
      {t:"A mayor's term ranges from 1 year (Delhi MCD) to 5 years (Kolkata, Bhopal); Mumbai's is 2.5 years.", amt:""},
      {t:"Municipal corporations, development authorities and parastatals overlap, which blurs accountability.", amt:""}]},
    {name:"Functions not handed over", sev:"high", items:[
      {t:"The 74th Amendment lists 18 functions for city governments. A CAG audit across 18 states found they have full control over about 4 and a minimal role in 7.", amt:""},
      {t:"A CAG audit found elections delayed in over 61% of urban local bodies across 17 states, by 22 months on average.", amt:""}]},
    {name:"Thin city finances", sev:"med", items:[
      {t:"Borrowing was about 2.4% of total municipal receipts in 2021-22.", amt:""},
      {t:"About 25 municipal bond issues by 18 issuers raised about ₹3,579 crore between 2017 and 2025.", amt:"₹3,579 cr"},
      {t:"Of 468 urban local bodies credit-rated under AMRUT in 2023-24, about 162 were investment grade.", amt:""},
      {t:"State Finance Commission reports came on average 13 months after their deadline.", amt:""}]},
    {name:"Capacity gaps", sev:"med", items:[
      {t:"Cities rely on officers deputed by the state, municipal commissioners are transferred often, and there are no professional municipal cadres.", amt:""}]}
  ],
  charts:[
    {title:"Mayor's term in selected cities", type:"bars", unit:"years", data:[["Kolkata",5],["Bhopal",5],["Mumbai",2.5],["Delhi MCD",1]]},
    {title:"AMRUT credit ratings, 2023-24", type:"split", unit:"urban local bodies rated", data:[["Investment grade",162],["Below investment grade",306]], note:"The report says about 162 of 468 rated bodies were investment grade."}
  ],
  recs:[
    "Have a directly elected mayor with a fixed term, supported by a mayor-in-council.",
    "Bring water supply, sanitation, solid waste management and urban transport under the city government.",
    "Raise cities' own revenue, especially property tax, make state transfers predictable through State Finance Commissions, and develop municipal bonds.",
    "Bring parastatal agencies under city government oversight.",
    "States to amend their municipal laws, the Ministry of Housing and Urban Affairs to update the Model Municipal Law, with pilots in selected cities."
  ],
  recsNote:"Summarised from the report and coverage of its launch.",
  response:["Urban governance is a state subject, so the framework works only if states amend their municipal laws. Urban development ministers from more than 10 states attended the launch."],
  timeline:[["1992","74th Constitutional Amendment"],["2011","Census data used for million-plus cities"],["25 Apr 2026","Framework released"],["2047","Viksit Bharat target year"]],
  glossary:["Urban Local Body","74th Amendment","State Finance Commission","Municipal bond","Parastatal"],
  exam:{
    prelims:[
      "NITI Aayog's 'Moving Towards Effective City Government' framework was released on 25 April 2026.",
      "The 12th Schedule, added by the 74th Amendment (1992), lists 18 functions for urban local bodies.",
      "46 municipal corporations with a million or more people house 30.66% of the urban population (Census 2011).",
      "8 states currently elect mayors directly."
    ],
    mains:"The 74th Amendment created city governments but not city leaders. Discuss with reference to NITI Aayog's 2026 framework for million-plus cities. (15 marks)",
    quiz:[
      {q:"How many functions does the 12th Schedule of the Constitution list for urban local bodies?", o:["11","18","29","46"], a:1, w:"18, listed in the 12th Schedule added by the 74th Amendment."},
      {q:"Which of these states directly elects its mayors, per NITI Aayog's 2026 framework?", o:["Maharashtra","West Bengal","Madhya Pradesh","Karnataka"], a:2, w:"Madhya Pradesh is one of the 8 states with direct election."},
      {q:"About how many of the 18 functions do city governments fully control, per the CAG audit cited?", o:["4","7","12","18"], a:0, w:"About 4, with a minimal role in 7."}
    ]
  },
  related:["fiscal-health-2026","state-finances","niti-ifi-2026"],
  src:[["NITI Aayog: full report (PDF)","https://www.niti.gov.in/sites/default/files/2026-04/Moving-Towards-Effective-City-Government-a-Framework-for-Million-Plus-Cities.pdf","official"],["All India Radio News: Khattar releases NITI Aayog report","https://newsonair.gov.in/union-minister-manohar-lal-khattar-releases-niti-aayog-report-titled-moving-towards-effective-city-government-framework/","coverage"],["IANS: roadmap to boost urban governance reforms","https://ianslive.in/niti-aayog-report-presents-roadmap-to-boost-urban-governance-reforms--20260425223652","coverage"],["Vajiram & Ravi: NITI Aayog report on city governance","https://vajiramandravi.com/current-affairs/niti-aayog-report-on-city-governance/","analysis"]],
  kw:"city government mayor urban local body municipal corporation 74th amendment 12th schedule parastatal municipal bonds NITI 2026"
},
/* ---------- CAG · FRBM compliance 2024-25 (Union) ---------- */
{
  id:"cag-frbm-29-2026", body:"CAG", kind:"Compliance audit", reportNo:"Report No. 29 of 2026",
  title:"Compliance of the Fiscal Responsibility and Budget Management Act, 2003 for the year 2024-25", short:"FRBM Compliance 2024-25", sector:"Public finance", ministry:"Ministry of Finance (Department of Economic Affairs)",
  date:"Aug 2026", dateISO:"2026-08-12", tabled:"Tabled in Parliament on 12 August 2026", period:"Financial year 2024-25", flagged:null,
  tldr:[
    "Central Government debt fell to 58.46% of GDP, but stayed well above the FRBM target of 40%.",
    "Taxes raised but not collected reached ₹38.40 lakh crore, up ₹7.29 lakh crore in a year.",
    "The fiscal deficit in the Budget papers (₹15.74 lakh crore) differs from the FRBM calculation (₹14.70 lakh crore) by ₹1.04 lakh crore."
  ],
  en:"Every year the CAG checks whether the Union Government kept to the FRBM Act, the law that sets limits on deficits and debt. For 2024-25, it found Central Government debt falling, to 58.46% of GDP, but still far above the 40% target. Interest took a slightly smaller share of revenue, and guarantees stayed within their limit. But taxes worth ₹38.40 lakh crore had been raised and not collected, and some figures in budget documents did not match the government's own accounts.",
  hi:"हर साल CAG जाँचता है कि केंद्र सरकार ने FRBM अधिनियम का पालन किया या नहीं, यह वह क़ानून है जो घाटे और कर्ज़ की सीमाएँ तय करता है। 2024-25 के लिए उसने पाया कि केंद्र सरकार का कर्ज़ घटकर GDP का 58.46% रहा, लेकिन 40% के लक्ष्य से अब भी काफ़ी ऊपर है। राजस्व में ब्याज का हिस्सा थोड़ा घटा और गारंटियाँ सीमा के भीतर रहीं। लेकिन ₹38.40 लाख करोड़ के कर लगाए गए पर वसूले नहीं गए, और बजट दस्तावेज़ों के कुछ आंकड़े सरकार के अपने खातों से मेल नहीं खाते।",
  context:{
    what:"The CAG's annual review, required under the FRBM framework, of whether the Union Government met the targets and disclosure rules of the FRBM Act in 2024-25.",
    why:"The FRBM Act is Parliament's main check on government borrowing. Missed targets or figures that don't match make it harder to judge the true state of public finances.",
    how:"Comparison of FRBM targets and disclosure statements with the Union Government Finance Accounts and Budget documents for 2024-25."
  },
  nums:[["58.46%","Central Government debt, % of GDP (target 40%)",1],["₹38.40 lakh cr","Taxes raised but not realised",1],["₹14.24 lakh cr","Rise in Central Government debt in 2024-25",0],["34.02%","Interest payments as a share of revenue receipts",0]],
  themes:[
    {name:"Debt above the target", sev:"high", items:[
      {t:"Central Government debt was 58.46% of GDP at the end of 2024-25. It has fallen over two years but missed the 40% target set for that year.", amt:""},
      {t:"Debt rose by ₹14.24 lakh crore (8.29%) in 2024-25, mainly internal debt (₹12.28 lakh crore), with external debt up ₹0.78 lakh crore and public account liabilities up ₹0.24 lakh crore.", amt:""},
      {t:"Between 2022-23 and 2024-25 debt grew more slowly than GDP, and the debt stabilisation indicator was positive.", amt:""}]},
    {name:"Taxes raised but not collected", sev:"high", items:[
      {t:"Taxes raised but not realised stood at ₹38.40 lakh crore at the end of 2024-25, up ₹7.29 lakh crore over the year.", amt:"₹38.40 lakh cr"},
      {t:"Of this, ₹4.80 lakh crore was not under dispute.", amt:"₹4.80 lakh cr"}]},
    {name:"Figures that don't match", sev:"med", items:[
      {t:"Budget at a Glance 2026-27 shows a fiscal deficit of ₹15.74 lakh crore for 2024-25, against ₹14.70 lakh crore calculated under the FRBM Act from the Finance Accounts.", amt:"₹1.04 lakh cr"},
      {t:"Figures in the arrears-of-interest (D2) and financial-assets (D4) statements did not match the Finance Accounts and Receipt Budget.", amt:""},
      {t:"Budget estimates in the half-yearly statements and the Medium-Term Fiscal Policy Statement differed from the Annual Financial Statement 2024-25.", amt:""}]},
    {name:"What stayed on track", sev:"low", items:[
      {t:"Interest payments fell to 34.02% of revenue receipts, from 35.72% in 2023-24.", amt:""},
      {t:"Additional guarantees stayed within the limit of 0.5% of GDP.", amt:""}]}
  ],
  charts:[
    {title:"Central Government debt vs FRBM target", type:"bars", unit:"% of GDP", data:[["Actual, end 2024-25",58.46],["FRBM target",40]]},
    {title:"Interest payments as a share of revenue receipts", type:"bars", unit:"%", data:[["2022-23",35.35],["2023-24",35.72],["2024-25",34.02]]},
    {title:"₹38.40 lakh crore of unrealised taxes", type:"split", unit:"₹ lakh crore", data:[["Not under dispute",4.80],["Rest of the total",33.60]]}
  ],
  recs:[
    "Reconcile the FRBM disclosure statements with the Finance Accounts and the Annual Financial Statement.",
    "Use one consistent fiscal deficit figure across Budget documents and FRBM calculations.",
    "Pursue the ₹4.80 lakh crore of unrealised taxes that is not under dispute."
  ],
  recsNote:"The press brief lists no recommendations; these are drawn from the findings.",
  response:["The report goes to Parliament's Public Accounts Committee. The government's replies are in the full report."],
  timeline:[["2003","FRBM Act passed"],["Mar 2025","Year reviewed ends"],["29 Jul 2026","Report sent to the government"],["12 Aug 2026","Report No. 29 of 2026 tabled in Parliament"]],
  glossary:["Compliance audit","FRBM","Fiscal deficit","Debt sustainability","Government guarantee","Medium-Term Fiscal Policy Statement"],
  exam:{
    prelims:[
      "CAG Report No. 29 of 2026 reviewed FRBM Act compliance for 2024-25 and was tabled on 12 August 2026.",
      "Central Government debt was 58.46% of GDP at the end of 2024-25, against a 40% target.",
      "Taxes raised but not realised stood at ₹38.40 lakh crore.",
      "Additional guarantees under the FRBM Act are capped at 0.5% of GDP a year."
    ],
    mains:"Fiscal rules lose force when targets are missed and figures don't reconcile. Discuss with reference to the CAG's review of FRBM compliance for 2024-25. (15 marks)",
    quiz:[
      {q:"What was Central Government debt as a share of GDP at the end of 2024-25, per the CAG?", o:["40%","58.46%","60%","34.02%"], a:1, w:"58.46%, against a 40% FRBM target."},
      {q:"How much tax had been raised but not realised at the end of 2024-25?", o:["₹4.80 lakh crore","₹7.29 lakh crore","₹14.24 lakh crore","₹38.40 lakh crore"], a:3, w:"₹38.40 lakh crore, of which ₹4.80 lakh crore was not under dispute."},
      {q:"The FRBM limit on additional guarantees in a year is:", o:["0.5% of GDP","1% of GDP","3% of GDP","40% of GDP"], a:0, w:"0.5% of GDP; the Centre stayed within it in 2024-25."}
    ]
  },
  related:["union-accounts-2425","fiscal-health-2026","cag-banks-nbfc-tax-40-2025"],
  src:[["CAG press brief on Report No. 29 of 2026","https://saiindia.gov.in/uploads/PressRelease/PR-Press-brief-29-of-2026-English-06a80874db093d8-85298897.pdf","official"],["CAG audit report page","https://cag.gov.in/mab/tamil-nadu/en/audit-report/details/125971","official"],["TaxGuru: CAG flags ₹38.40 lakh crore unrealised taxes","https://taxguru.in/corporate-law/cag-flags-rs-38-40-lakh-crore-unrealised-taxes-frbm-compliance-review.html","analysis"]],
  kw:"FRBM fiscal responsibility debt GDP fiscal deficit unrealised tax arrears guarantees interest payments Union 2026"
},
/* ---------- CAG · Finance and Communication (Union) ---------- */
{
  id:"cag-fin-comm-5-2026", body:"CAG", kind:"Compliance audit", reportNo:"Report No. 5 of 2026",
  title:"Compliance Audit on Finance and Communication, Union Government", short:"Posts, Telecom & BSNL Audit", sector:"Other", ministry:"Ministry of Communications, Ministry of Finance (Department of Expenditure), MeitY",
  date:"Apr 2026", dateISO:"2026-04-02", tabled:"Tabled in Parliament on 2 April 2026", period:"Period ended March 2024, with earlier cases not reported before", flagged:null,
  tldr:[
    "₹107.07 crore (75%) of penalties on telecom operators for weak subscriber checks was still unrecovered in March 2025.",
    "India Post did not collect ₹78.92 crore of GST on late fees for postal life insurance.",
    "1,740 BSNL tower sites were non-functional, some for up to 16 years, and IPPB's UPI was down 362 hours in 2023-24."
  ],
  en:"This CAG report checks several bodies under the communications and finance ministries. India Post did not charge GST on insurance late fees. The telecom department had not recovered most penalties on operators for weak SIM verification, or all penalties from Airtel for a delayed rural mobile project. BSNL had idle and non-functional towers and land without clear title. India Post Payments Bank had frequent UPI failures. Skilling schemes and village service centres also had gaps.",
  hi:"CAG की यह रिपोर्ट संचार और वित्त मंत्रालयों के तहत कई संस्थाओं की जाँच करती है। डाक विभाग ने बीमा की विलंब फ़ीस पर GST नहीं लिया। दूरसंचार विभाग ने कमज़ोर सिम सत्यापन के लिए ऑपरेटरों पर लगे अधिकांश जुर्माने और ग्रामीण मोबाइल परियोजना में देरी के लिए एयरटेल पर लगे पूरे जुर्माने वसूल नहीं किए। BSNL के टावर बेकार पड़े थे या काम नहीं कर रहे थे, और ज़मीन का स्पष्ट मालिकाना हक़ नहीं था। इंडिया पोस्ट पेमेंट्स बैंक में UPI बार-बार विफल हुआ। कौशल योजनाओं और ग्रामीण सेवा केंद्रों में भी कमियाँ मिलीं।",
  context:{
    what:"A CAG compliance audit of the Department of Posts, Department of Telecommunications, BSNL, India Post Payments Bank, the Department of Expenditure and MeitY: four subject-specific audits and five audit paragraphs.",
    why:"These bodies run services that reach rural India, from post offices and payments banks to mobile towers and village kiosks. Lapses mean lost revenue and weaker services.",
    how:"Test checks for the period ended March 2024, including earlier cases not reported before. Some reviews, such as BSNL towers and MeitY skilling, covered 2018-19 to 2022-23."
  },
  nums:[["₹107.07 cr","Subscriber-verification penalties unrecovered (75%)",1],["₹78.92 cr","GST not collected on postal insurance late fees",1],["362 hours","IPPB UPI outages in 2023-24",1],["1,740","BSNL tower sites non-functional",1]],
  themes:[
    {name:"Money not collected", sev:"high", items:[
      {t:"GST was not levied on late fees for postal life insurance (PLI/RPLI) premiums from July 2017 to December 2023.", amt:"₹78.92 cr"},
      {t:"Of ₹143.09 crore of penalties on operators for subscriber verification lapses (2022-23 to 2024-25), only ₹36.02 crore was recovered by March 2025.", amt:"₹107.07 cr"},
      {t:"Of ₹19.47 crore of penalties on Bharti Airtel for delays in a Digital Bharat Nidhi project in Assam and Sikkim, ₹8.49 crore was outstanding; 124 sites were still not commissioned in April 2025.", amt:"₹8.49 cr"},
      {t:"Excess payments were made to an e-commerce firm by India Post's Kolkata RMS division.", amt:"₹1.05 cr"}]},
    {name:"BSNL towers idle or without title", sev:"high", items:[
      {t:"Title deeds for 36% of land parcels with BSNL towers were not in BSNL's name, and 27% of leased sites in selected circles ran on expired agreements.", amt:""},
      {t:"Tower material lay unused.", amt:"₹59.77 cr"},
      {t:"81 erected towers worth ₹11.13 crore were idle for three to seven years, and 1,740 tower sites were non-functional for up to 16 years.", amt:"₹11.13 cr"},
      {t:"Delayed handover of 1,092 sites to telecom operators caused a revenue loss.", amt:"₹10.87 cr"}]},
    {name:"Payments bank service gaps", sev:"med", items:[
      {t:"IPPB's UPI technical decline rate was 3.29% in 2021-22 and 7.82% in 2022-23, against the RBI's target of under 1%.", amt:""},
      {t:"UPI was down 362 hours in 2023-24, against 52 hours for Airtel Payments Bank, 19 for Fino and zero for Paytm Payments Bank.", amt:""},
      {t:"Accounts were opened without verified mobile numbers, and many accounts were dormant.", amt:""}]},
    {name:"Skilling, service centres and staff insurance", sev:"med", items:[
      {t:"In MeitY's electronics skilling scheme, 33 of 40 training partners did not collect the registration-cum-certification fee, and trainees were tracked for three months instead of one year.", amt:""},
      {t:"Common Service Centres 2.0 (outlay ₹475.11 crore) grew transactions by 291% between 2018 and 2024, but many centres were inactive and few women ran them.", amt:""},
      {t:"In the Central Government Employees Group Insurance Scheme, savings fund interest was worked out as simple annual interest instead of compounded quarterly, and the scheme was not reviewed as required.", amt:""}]}
  ],
  charts:[
    {title:"UPI outage hours, 2023-24", type:"bars", unit:"hours", data:[["IPPB",362],["Airtel Payments Bank",52],["Fino",19],["Paytm Payments Bank",0]]},
    {title:"Subscriber-verification penalties, 2022-23 to 2024-25", type:"split", unit:"₹ crore", data:[["Recovered",36.02],["Pending",107.07]]}
  ],
  recs:[
    "Recover the pending penalties from telecom operators.",
    "Give BSNL a real-time tower database, settle land titles, renew leases and reuse or lease idle towers.",
    "Monitor IPPB's UPI performance against RBI benchmarks and clean up account data.",
    "Use Aadhaar e-KYC to stop duplicate trainee registrations, and revive inactive Common Service Centres."
  ],
  recsNote:"Summarised from the CAG press release.",
  response:["The press release does not give the ministries' replies; they are in the full report, which goes to Parliament's Public Accounts Committee."],
  timeline:[["Dec 2017","Airtel agreement for mobile coverage in Assam and Sikkim"],["Jun 2019","Original deadline to commission all sites"],["Mar 2025","₹107.07 crore of verification penalties still pending"],["2 Apr 2026","Report No. 5 of 2026 tabled in Parliament"]],
  glossary:["Compliance audit","Digital Bharat Nidhi","Liquidated damages","Common Service Centre","Business Correspondent"],
  exam:{
    prelims:[
      "CAG Report No. 5 of 2026 (Finance and Communication) was tabled on 2 April 2026.",
      "GST of ₹78.92 crore was not collected on postal life insurance late fees.",
      "IPPB's UPI was down 362 hours in 2023-24; the RBI's target for the technical decline rate is under 1%.",
      "1,740 BSNL tower sites were non-functional, some for up to 16 years."
    ],
    mains:"Public sector telecom and postal services carry a social mandate but must still manage assets well. Discuss with reference to the CAG's 2026 audit of BSNL towers and India Post Payments Bank. (10 marks)",
    quiz:[
      {q:"What share of subscriber-verification penalties on telecom operators was still pending in March 2025?", o:["25%","50%","75%","100%"], a:2, w:"75%, or ₹107.07 crore of ₹143.09 crore."},
      {q:"GST was not collected on late fees for which India Post product?", o:["Speed Post","Postal life insurance premiums","Savings bank accounts","Money orders"], a:1, w:"Late fees on PLI/RPLI premiums; ₹78.92 crore of GST was not collected."},
      {q:"How many hours was IPPB's UPI down in 2023-24 per the CAG?", o:["0","19","52","362"], a:3, w:"362 hours."}
    ]
  },
  related:["pmkvy-2025","cab-report-9-2026","cag-gst-20-2026"],
  src:[["CAG press release on Report No. 5 of 2026","https://saiindia.gov.in/uploads/PressRelease/PR-Press-Release-on-Report-no-5-of-2026-in-english-069ce585c6c0771-77186201.pdf","official"],["CAG audit report page","https://cag.gov.in/en/audit-report/details/125146","official"],["TelecomTalk: CAG flags Airtel penalty dues of ₹8.49 crore","https://telecomtalk.info/?p=1006010","coverage"]],
  kw:"BSNL towers India Post Payments Bank IPPB UPI Department of Posts GST PLI telecom penalties Airtel Digital Bharat Nidhi CSC MeitY skilling 2026"
},
/* ---------- NITI · Data Centre Evaluation Framework ---------- */
{
  id:"niti-datacentre-2026", body:"NITI", kind:"Policy report", reportNo:"NITI Frontier Tech Hub framework",
  title:"Data Centre Evaluation Framework", short:"Data Centre Framework", sector:"Roads & infrastructure", ministry:"NITI Aayog (Frontier Tech Hub)",
  date:"Oct 2026", dateISO:"2026-10-14", tabled:"Released on 14 October 2026", period:"Planning horizon to 2030", flagged:null,
  tldr:[
    "India's installed data centre capacity was about 1.57 GW in August 2026; industry estimates put it at 4.5–6.5 GW by 2030.",
    "Data centres used about 13 TWh of electricity in 2024, projected to rise to 57 TWh by 2030.",
    "The framework asks states to tie approvals and incentives to verified power and water and to real economic benefits."
  ],
  en:"Data centres are growing fast in India and need a lot of electricity and water. NITI Aayog's framework gives states a common way to judge data centre proposals across five pillars, from power and water to economic value and governance. It says approvals should depend on verified power and water, that large centres should help balance the grid, and that incentives should be linked to jobs, clean energy and local buying. It is a guide for states, not a new regulation.",
  hi:"भारत में डेटा सेंटर तेज़ी से बढ़ रहे हैं और इन्हें बहुत बिजली और पानी चाहिए। नीति आयोग का ढाँचा राज्यों को डेटा सेंटर प्रस्तावों को पाँच स्तंभों पर परखने का साझा तरीका देता है, बिजली और पानी से लेकर आर्थिक मूल्य और शासन तक। यह कहता है कि मंज़ूरी सत्यापित बिजली और पानी पर निर्भर हो, बड़े सेंटर ग्रिड के संतुलन में मदद करें, और प्रोत्साहन रोज़गार, स्वच्छ ऊर्जा और स्थानीय ख़रीद से जुड़े हों। यह राज्यों के लिए मार्गदर्शन है, नया नियम नहीं।",
  context:{
    what:"A decision-support framework from NITI Aayog's Frontier Tech Hub, developed with Deloitte India in consultation with the Ministry of Power and MeitY, to help states assess data centre investment proposals.",
    why:"States compete to attract data centres with land, infrastructure and utility concessions. Without checks, projects can strain local power grids and water supplies while bringing few jobs.",
    how:"Common evaluation criteria across five pillars that states can adapt to their own priorities."
  },
  nums:[["1.57 GW","Installed data centre capacity, August 2026",0],["4.5–6.5 GW","Projected capacity by 2030 (industry estimates)",0],["57 TWh","Projected electricity use by 2030, up from 13 TWh in 2024",1],["5","Pillars in the framework",0]],
  themes:[
    {name:"Fast growth, heavy resource needs", sev:"high", items:[
      {t:"Installed capacity was about 1.57 GW in August 2026, with industry estimates of 4.5–6.5 GW by 2030.", amt:""},
      {t:"Data centres used about 13 TWh of electricity in 2024; this is projected to reach 57 TWh by 2030.", amt:""}]},
    {name:"Power and water first", sev:"med", items:[
      {t:"Approvals should be tied to verified availability of electricity, water and other infrastructure.", amt:""},
      {t:"Data centres above 20 MW should be ready for automated demand response and integrated with State Load Dispatch Centres.", amt:""},
      {t:"States should prepare seasonal water-availability assessments covering 20 to 30 years and protect existing users.", amt:""},
      {t:"Developers should pay for grid assets built only for their projects.", amt:""}]},
    {name:"Making incentives count", sev:"med", items:[
      {t:"States should weigh a project's economic benefits against the land, utility concessions and other support it receives.", amt:""},
      {t:"Incentives could be linked to employment, renewable energy use, efficiency and local procurement.", amt:""},
      {t:"Planning should move from single projects to whole campuses and infrastructure corridors.", amt:""}]},
    {name:"How the framework works", sev:"low", items:[
      {t:"Five pillars: power and energy; water and cooling; siting and environmental sustainability; economic and strategic value; policy, governance and implementation.", amt:""},
      {t:"It is a decision-support tool that states can adapt, not an extra layer of regulation.", amt:""}]}
  ],
  charts:[
    {title:"Data centre capacity", type:"bars", unit:"GW", data:[["August 2026",1.57],["2030 (upper estimate)",6.5]], note:"Industry estimates for 2030 range from 4.5 to 6.5 GW; the upper end is shown."},
    {title:"Data centre electricity use", type:"bars", unit:"TWh", data:[["2024",13],["2030 (projected)",57]]}
  ],
  recs:[
    "Tie data centre approvals to verified power and water availability.",
    "Require demand-response readiness and grid integration for centres above 20 MW.",
    "Prepare long-term seasonal water assessments before allotting sites.",
    "Link incentives to measurable outcomes such as jobs, renewable energy use and local procurement."
  ],
  recsNote:"Summarised from coverage of the framework's release.",
  response:["The framework is meant to guide states, which can adapt it to their priorities. Coverage noted it was not stated whether it has been formally adopted or will bind states."],
  timeline:[["2024","Data centres use about 13 TWh of electricity"],["Aug 2026","Installed capacity about 1.57 GW"],["14 Oct 2026","Framework released"],["2030","Projected 4.5–6.5 GW and 57 TWh"]],
  glossary:["Demand response","SLDC","TWh"],
  exam:{
    prelims:[
      "NITI Aayog's Frontier Tech Hub released a Data Centre Evaluation Framework on 14 October 2026.",
      "India's installed data centre capacity was about 1.57 GW in August 2026.",
      "Data centre electricity use is projected to rise from about 13 TWh (2024) to 57 TWh by 2030.",
      "The framework has five pillars, including power and energy, and water and cooling."
    ],
    mains:"Data centres bring investment but compete with people for power and water. Discuss with reference to NITI Aayog's 2026 Data Centre Evaluation Framework. (10 marks)",
    quiz:[
      {q:"What was India's installed data centre capacity in August 2026?", o:["0.57 GW","1.57 GW","4.5 GW","6.5 GW"], a:1, w:"About 1.57 GW."},
      {q:"Above what size should data centres be ready for automated demand response under the framework?", o:["5 MW","10 MW","20 MW","100 MW"], a:2, w:"20 MW."},
      {q:"Which body developed the Data Centre Evaluation Framework?", o:["MeitY alone","NITI Aayog's Frontier Tech Hub","Central Electricity Authority","RBI"], a:1, w:"NITI Aayog's Frontier Tech Hub, with Deloitte India."}
    ]
  },
  related:["niti-ai-2025","niti-ifi-2026","niti-netzero-2026"],
  src:[["All India Radio News: Frontier Tech Hub releases framework","https://newsonair.gov.in/niti-aayogs-frontier-tech-hub-releases-framework-for-sustainable-data-centers-growth/","coverage"],["Communications Today: clearances should depend on power and water","https://www.communicationstoday.co.in/dc-clearances-should-depend-on-power-water-availability-niti-aayog/","coverage"],["GKToday: NITI Aayog links data centre approvals to power and water","https://www.gktoday.in/niti-aayog-links-data-centre-approvals-to-power-and-water/","analysis"],["Devdiscourse: states asked to link incentives to sustainability","https://www.devdiscourse.com/article/business/3992419-niti-aayog-launches-data-centre-framework-asks-states-to-link-incentives-to-sustainability","coverage"]],
  kw:"data centre framework NITI Frontier Tech Hub power water electricity TWh GW states incentives AI infrastructure 2026"
},
/* ---------- CAG · Odisha: District Mineral Foundations (PMKKKY) ---------- */
{
  id:"cag-odisha-dmf-2026", body:"CAG", state:"Odisha", kind:"Performance audit", reportNo:"CAG performance audit (Odisha, 2026)",
  title:"Performance Audit of PMKKKY and the Functioning of District Mineral Foundations in Odisha", short:"Odisha Mining Fund Audit", sector:"Social welfare", ministry:"Steel and Mines Department, Government of Odisha (District Mineral Foundations)",
  date:"Sep 2026", dateISO:"2026-09-28", tabled:"Tabled in the Odisha Assembly on 28 September 2026", period:"2015-16 to 2023-24", flagged:983.32, flaggedNote:"Spent on projects in 976 villages not identified as mining-affected. This is an amount at issue, not a confirmed loss.",
  tldr:[
    "Six District Mineral Foundations collected ₹22,568.17 crore and sanctioned 17,435 projects worth ₹20,947.52 crore.",
    "₹983.32 crore was spent in 976 villages not identified as mining-affected, while 488 directly affected villages got no project.",
    "₹136.77 crore went on a hockey stadium in Rourkela, which the CAG said was not allowed under the scheme."
  ],
  en:"Mining companies pay into a District Mineral Foundation in each mining district. The money is meant for people living in areas hit by mining. The CAG checked six of Odisha's foundations from 2015-16 to 2023-24. They collected over ₹22,500 crore but used less than half by March 2024. In Kendujhar and Sundargarh, ₹983 crore was spent in villages not listed as mining-affected, while hundreds of affected villages got nothing. Money also went to a hockey stadium, extra MGNREGS wages and other uses the rules do not allow.",
  hi:"खनन कंपनियाँ हर खनन ज़िले में ज़िला खनिज फ़ाउंडेशन (DMF) में पैसा जमा करती हैं। यह पैसा खनन से प्रभावित इलाकों में रहने वाले लोगों के लिए है। CAG ने 2015-16 से 2023-24 तक ओडिशा के छह फ़ाउंडेशन की जाँच की। उन्होंने ₹22,500 करोड़ से अधिक जुटाए, लेकिन मार्च 2024 तक आधे से भी कम खर्च हुआ। केंदुझर और सुंदरगढ़ में ₹983 करोड़ उन गाँवों में खर्च हुए जो खनन-प्रभावित सूची में नहीं थे, जबकि सैकड़ों प्रभावित गाँवों को कुछ नहीं मिला। पैसा हॉकी स्टेडियम, MGNREGS की अतिरिक्त मज़दूरी और ऐसे अन्य कामों पर भी गया जिनकी नियम अनुमति नहीं देते।",
  context:{
    what:"A CAG performance audit of the Pradhan Mantri Khanij Kshetra Kalyan Yojana (PMKKKY) and the working of District Mineral Foundations (DMFs) in six Odisha districts: Dhenkanal, Jajpur, Kendujhar, Mayurbhanj, Nabarangpur and Sundargarh.",
    why:"DMF money comes from mining royalties and is meant to fix the damage mining does to nearby communities. If it is spent elsewhere, the people who bear the costs of mining lose out.",
    how:"Review of DMF records for 2015-16 to 2023-24 in six districts, covering how contributions were assessed, how projects were chosen and how funds were spent and accounted for."
  },
  nums:[["₹22,568.17 cr","Collected by six DMFs, including interest",0],["48.18%","Share of sanctioned money used by March 2024",1],["₹983.32 cr","Spent in villages not identified as mining-affected",1],["488","Directly affected villages with no project",1]],
  themes:[
    {name:"Money not reaching mining-affected villages", sev:"high", items:[
      {t:"In Kendujhar and Sundargarh, ₹983.32 crore was spent on projects in 976 villages not identified as mining-affected.", amt:"₹983.32 cr"},
      {t:"No project was taken up in 488 directly affected and 96 indirectly affected villages.", amt:""},
      {t:"In Jajpur, 43.54% of funds used went to indirectly affected areas, above the 40% limit.", amt:"₹507.02 cr"},
      {t:"Lists of affected areas were updated only in Kendujhar and Sundargarh, and 61 to 62 months late.", amt:""}]},
    {name:"Spending outside the rules", sev:"high", items:[
      {t:"Sundargarh DMF spent on a hockey stadium in Rourkela, which the CAG said is not a permissible activity under PMKKKY.", amt:"₹136.77 cr"},
      {t:"Three DMFs released money to the MGNREGS director for additional wages, against Ministry of Rural Development guidelines.", amt:"₹171.79 cr"},
      {t:"In Sundargarh, about a quarter of administrative spending went on items such as police patrol vehicles and school functions.", amt:"₹25.01 cr"},
      {t:"During Covid-19, Sundargarh DMF paid a private hospital ₹109.45 crore against ₹98.85 crore due.", amt:"₹10.60 cr"}]},
    {name:"Weak planning and approvals", sev:"med", items:[
      {t:"None of the six DMFs prepared the required perspective plan and master plan, or set up an endowment fund for long-term livelihood support.", amt:""},
      {t:"In Kendujhar, 757 projects were sanctioned without approval of the Executive Committee or Board.", amt:""},
      {t:"Only 48.18% of the money sanctioned had been used by March 2024.", amt:""}]},
    {name:"Money lost or not returned", sev:"med", items:[
      {t:"Implementing agencies in Jajpur, Kendujhar and Sundargarh did not return unspent funds after projects ended, plus ₹26.51 crore of interest.", amt:"₹470.25 cr"},
      {t:"Kendujhar DMF lost interest because of investment decisions the CAG called imprudent.", amt:"₹84.51 cr"},
      {t:"Wrong contribution rates, no reassessment after final royalty assessment and unlevied interest on late payments.", amt:"₹73.71 cr"}]}
  ],
  charts:[
    {title:"Six DMFs: money in and money used", type:"bars", unit:"₹ crore", data:[["Collected (incl. interest)",22568.17],["Sanctioned for projects",20947.52],["Used by March 2024",10092.53]]},
    {title:"Selected spending the CAG questioned", type:"bars", unit:"₹ crore", data:[["Non-affected villages",983.32],["Unspent funds not returned",470.25],["MGNREGS wages",171.79],["Hockey stadium",136.77]]}
  ],
  recs:[
    "Update the lists of mining-affected areas and spend in those areas first.",
    "Recover unspent balances and accrued interest from implementing agencies.",
    "Keep DMF accounts as the rules require and finish sanctioned projects on time.",
    "Investigate irregular spending and fix responsibility on officials."
  ],
  recsNote:"Summarised from published coverage of the report.",
  response:["Coverage did not report a reply from the Odisha government or the DMFs. The report goes to the Odisha Assembly's Public Accounts Committee."],
  timeline:[["2015-16","Audit period begins"],["Mar 2024","Audit period ends; 48.18% of sanctioned funds used"],["28 Sep 2026","Report tabled in the Odisha Assembly"]],
  glossary:["Performance audit","District Mineral Foundation","PMKKKY","MGNREGS","PAC"],
  exam:{
    prelims:[
      "District Mineral Foundations are funded by contributions from mining lease holders and spend under PMKKKY.",
      "The CAG audit covered six Odisha DMFs for 2015-16 to 2023-24 and was tabled on 28 September 2026.",
      "The six DMFs collected ₹22,568.17 crore including interest.",
      "Under PMKKKY rules cited by the audit, spending in indirectly affected areas is capped at 40%."
    ],
    mains:"Mining royalties meant for affected communities often fund unrelated projects. Discuss with reference to the CAG's 2026 audit of District Mineral Foundations in Odisha. (15 marks)",
    quiz:[
      {q:"Which scheme governs spending by District Mineral Foundations?", o:["PMKSY","PMKKKY","PMAY-G","MGNREGS"], a:1, w:"Pradhan Mantri Khanij Kshetra Kalyan Yojana (PMKKKY)."},
      {q:"How much did Odisha's audited DMFs spend in villages not identified as mining-affected?", o:["₹136.77 crore","₹470.25 crore","₹983.32 crore","₹22,568 crore"], a:2, w:"₹983.32 crore in 976 villages in Kendujhar and Sundargarh."},
      {q:"What did Sundargarh DMF spend ₹136.77 crore on, which the CAG said was not permissible?", o:["A medical college","A hockey stadium","An airport","Police housing"], a:1, w:"A hockey stadium in Rourkela."}
    ]
  },
  related:["uk-campa","cag-kerala-jjm"],
  src:[["Business Standard: CAG flags ₹1,662 cr DMF spend outside norms","https://www.business-standard.com/industry/news/cag-flags-1-662-cr-dmf-spend-outside-norms-mining-affected-areas-126092901031_1.html","coverage"],["Pragativadi: CAG flags lapses in Odisha DMF spending","https://pragativadi.com/cag-flags-major-lapses-in-odisha-dmf-spending-rs-983-crore-spent-in-non-mining-affected-villages/","coverage"],["Social News XYZ (IANS): CAG flags irregularities in PMKKKY","https://www.socialnews.xyz/2026/09/28/odisha-cag-flags-irregularities-in-pmkkky-implementation/","coverage"]],
  kw:"Odisha DMF District Mineral Foundation PMKKKY mining affected Kendujhar Sundargarh Keonjhar hockey stadium Rourkela MGNREGS 2026"
},
/* ---------- CAG · Kerala: State revenues ---------- */
{
  id:"cag-kerala-revenue-2-2026", body:"CAG", state:"Kerala", kind:"Compliance audit", reportNo:"Report No. 2 of 2026 (Kerala)",
  title:"Report of the CAG on State Revenues for the period ended March 2024, Government of Kerala", short:"Kerala Revenue Audit", sector:"Public finance", ministry:"Taxes, Excise, Transport and Registration Departments, Government of Kerala",
  date:"Jun 2026", dateISO:"2026-06-23", tabled:"Tabled in the Kerala Assembly on 23 June 2026", period:"Year ended March 2024", flagged:603.53, flaggedNote:"Revenue impact of the 11 paragraphs in this report. These are amounts at issue, not confirmed losses.",
  tldr:[
    "Kerala's revenue arrears stood at ₹30,308.52 crore, 24.35% of its revenue; over ₹11,000 crore had been pending for more than five years.",
    "Nine automated driving test tracks and nine vehicle testing stations cost ₹37.48 crore; only two tracks work and no station does.",
    "A distillery's loss of ₹51.88 crore from missing alcohol stock was not recovered."
  ],
  en:"The CAG checked how Kerala collects taxes on liquor, vehicles, and property sales for 2023-24. Unpaid revenue had piled up to over ₹30,000 crore, about a quarter of the state's revenue. In transport, costly automated test tracks and stations sat mostly idle, and thousands of vehicles ran on expired fitness certificates, some of them in fatal accidents. In excise, a large loss at a distillery was not recovered and some liquor sent to Mahe may have been diverted. The report's findings add up to ₹603.53 crore.",
  hi:"CAG ने 2023-24 के लिए जाँचा कि केरल शराब, वाहनों और संपत्ति बिक्री पर कर कैसे वसूलता है। बकाया राजस्व ₹30,000 करोड़ से ऊपर पहुँच गया था, यानी राज्य के राजस्व का लगभग एक-चौथाई। परिवहन में महँगे स्वचालित टेस्ट ट्रैक और स्टेशन ज़्यादातर बेकार पड़े रहे, और हज़ारों वाहन समाप्त फ़िटनेस प्रमाणपत्र के साथ चलते रहे, जिनमें से कुछ जानलेवा दुर्घटनाओं में शामिल थे। आबकारी में एक डिस्टिलरी का बड़ा नुकसान वसूला नहीं गया और माहे भेजी गई कुछ शराब के इधर-उधर होने की आशंका है। रिपोर्ट के निष्कर्ष कुल ₹603.53 करोड़ के हैं।",
  context:{
    what:"A CAG compliance audit of Kerala's state revenues for 2023-24, with two subject-specific audits: one of Regional Transport Offices and the State Transport Authority, and one of foreign liquor excise.",
    why:"Kerala relies heavily on its own taxes. Uncollected dues and weak enforcement cut the money available for services, and lax vehicle checks also put lives at risk.",
    how:"Test check of records in the Taxes, Excise, Transport and Registration departments, with VAHAN vehicle data matched against police accident records."
  },
  nums:[["₹603.53 cr","Revenue impact of the report's 11 paragraphs",1],["₹30,308.52 cr","Revenue arrears (24.35% of revenue)",1],["2 of 9","Automated driving test tracks working",1],["48,059","Transport vehicles with expired fitness certificates",1]],
  themes:[
    {name:"Transport: idle equipment and unsafe vehicles", sev:"high", items:[
      {t:"Nine automated driving test tracks and nine automated testing stations were set up; only two tracks work and no station is operational.", amt:"₹37.48 cr"},
      {t:"48,059 active transport vehicles had expired fitness certificates; 197 of them were linked to accidents with 19 deaths.", amt:"₹23.12 cr"},
      {t:"147 vehicles with expired registration certificates were linked to accidents with 13 deaths.", amt:"₹24.57 cr"},
      {t:"1,620 contract and goods carriages ran without valid permits; Green Tax was not levied at renewals.", amt:"₹2.57 cr"}]},
    {name:"Excise: liquor revenue leaks", sev:"high", items:[
      {t:"A Thiruvalla distillery's loss from a shortage of Extra Neutral Alcohol after a theft was not recovered.", amt:"₹51.88 cr"},
      {t:"A Kanjikode brewery was irregularly exempted from Turnover Tax.", amt:"₹13.81 cr"},
      {t:"No exit records for 22 permits covering 1,10,720 bulk litres of liquor sent to Mahe, pointing to possible diversion.", amt:"₹5.10 cr"},
      {t:"Wrong tax rates led to short levy.", amt:"₹3.71 cr"}]},
    {name:"Arrears and slow follow-up", sev:"med", items:[
      {t:"Revenue arrears were ₹30,308.52 crore, 24.35% of total revenue; over ₹11,000 crore was pending for more than five years.", amt:""},
      {t:"15,021 earlier audit paragraphs worth ₹4,978.61 crore were still outstanding in June 2024.", amt:""},
      {t:"Action Taken Notes were missing for 155 of 165 Public Accounts Committee recommendations to four departments.", amt:""}]},
    {name:"Stamps and registration", sev:"low", items:[
      {t:"Stamp duty was short levied through wrong fair values, land misclassification and splitting properties to avoid duty.", amt:""}]}
  ],
  charts:[
    {title:"Automated vehicle testing facilities", type:"pairs", unit:"facilities", legend:["Set up","Working"], data:[["Driving test tracks",9,2],["Vehicle testing stations",9,0]]},
    {title:"Largest single findings", type:"bars", unit:"₹ crore", data:[["Distillery loss not recovered",51.88],["Automated test facilities",37.48],["Expired registration certificates",24.57],["Expired fitness certificates",23.12],["Brewery tax exemption",13.81]]}
  ],
  recs:[
    "Recover Green Tax and penalties due on vehicles with expired certificates.",
    "Review VAHAN data regularly and act on vehicles running without valid fitness, registration or permits.",
    "Recover the distillery's loss and monitor liquor permits to prevent diversion.",
    "Clear long-pending arrears and reply to audit and PAC on time."
  ],
  recsNote:"Summarised from the report.",
  response:["Department secretaries replied to all 11 paragraphs. The report goes to the Kerala Assembly's Public Accounts Committee."],
  timeline:[["Mar 2024","Year audited ends"],["Jun 2024","₹4,978.61 crore of earlier audit paragraphs still outstanding"],["23 Jun 2026","Report No. 2 of 2026 tabled in the Kerala Assembly"]],
  glossary:["Compliance audit","Certificate of Fitness","Extra Neutral Alcohol","PAC"],
  exam:{
    prelims:[
      "CAG Report No. 2 of 2026 (Kerala) covers state revenues for the year ended March 2024.",
      "Kerala's revenue arrears were ₹30,308.52 crore, 24.35% of total revenue.",
      "Only two of nine automated driving test tracks were working, and none of nine automated testing stations.",
      "The report's 11 paragraphs have a revenue impact of ₹603.53 crore."
    ],
    mains:"Weak tax enforcement costs states both revenue and public safety. Illustrate with findings from the CAG's 2026 report on Kerala's state revenues. (10 marks)",
    quiz:[
      {q:"What share of Kerala's revenue were its arrears in 2023-24, per the CAG?", o:["4.35%","14.35%","24.35%","34.35%"], a:2, w:"24.35%, or ₹30,308.52 crore."},
      {q:"How many of nine automated vehicle testing stations in Kerala were operational?", o:["None","Two","Five","Nine"], a:0, w:"None; only two of nine driving test tracks worked."},
      {q:"Liquor permits with missing exit records in the report were for supplies to:", o:["Lakshadweep","Puducherry's Mahe","Goa","Karnataka"], a:1, w:"Mahe, a part of Puducherry surrounded by Kerala."}
    ]
  },
  related:["cag-delhi-revenue-1-2026","cag-gujarat-gst-2026","cag-kerala-jjm"],
  src:[["CAG Report No. 2 of 2026 on State Revenues, Kerala (Kerala Legislative Assembly)","https://www.niyamasabha.org/codes/16kla/C&AG/Audit%20Report%202024_Report%20No.2%20of%202026_English.pdf","official"],["Outlook (PTI): Kerala CAG report flags revenue gaps in liquor and transport","https://www.outlookindia.com/national/kerala-cag-report-flags-revenue-gaps-in-liquor-transport-sectors-2","coverage"]],
  kw:"Kerala revenue arrears excise liquor distillery Thiruvalla Mahe transport RTO fitness certificate driving test track VAHAN stamp duty 2026"
},
/* ---------- NITI · Women and India's credit market ---------- */
{
  id:"niti-women-credit-2026", body:"NITI", kind:"Policy report", reportNo:"Second edition (with TransUnion CIBIL and MicroSave Consulting)",
  title:"From Borrowers to Builders: Women and India's Evolving Credit Market", short:"Women and Credit 2026", sector:"Public finance", ministry:"NITI Aayog (Women Entrepreneurship Platform)",
  date:"Apr 2026", dateISO:"2026-04-08", tabled:"Released in April 2026", period:"2017 to 2025", flagged:null,
  tldr:[
    "Women hold ₹76 lakh crore of credit, 26% of all credit in the system, up 4.8 times since 2017.",
    "The share of credit-active women rose from 19% in 2017 to 36% in 2025, about 16 crore women.",
    "Women business borrowers grew 31% a year over three years, against 17% for all commercial credit."
  ],
  en:"This report from NITI Aayog's Women Entrepreneurship Platform, TransUnion CIBIL and MicroSave Consulting tracks how women borrow. Women now hold about a quarter of all credit in India, and their borrowing has grown faster than total credit since 2017. More women are taking business loans, and they default less than average. But few women-owned businesses use working-capital products like overdrafts, and fewer new borrowers are being added. The report asks lenders to use digital records such as UPI payments to judge creditworthiness and to track how women progress, not just whether they get a first loan.",
  hi:"नीति आयोग के महिला उद्यमिता मंच, TransUnion CIBIL और MicroSave Consulting की यह रिपोर्ट बताती है कि महिलाएँ कैसे कर्ज़ लेती हैं। भारत के कुल कर्ज़ का लगभग एक-चौथाई अब महिलाओं के पास है, और 2017 से उनका कर्ज़ कुल कर्ज़ से तेज़ी से बढ़ा है। ज़्यादा महिलाएँ कारोबारी कर्ज़ ले रही हैं और औसत से कम चूक करती हैं। लेकिन महिलाओं के कुछ ही व्यवसाय ओवरड्राफ्ट जैसे कार्यशील पूँजी उत्पादों का उपयोग करते हैं, और नए उधारकर्ता कम जुड़ रहे हैं। रिपोर्ट कहती है कि ऋणदाता साख आँकने के लिए UPI भुगतान जैसे डिजिटल रिकॉर्ड का उपयोग करें और यह देखें कि महिलाएँ आगे कैसे बढ़ती हैं, सिर्फ़ यह नहीं कि उन्हें पहला कर्ज़ मिला या नहीं।",
  context:{
    what:"The second edition of a NITI Aayog report on women borrowers, prepared by its Women Entrepreneurship Platform with TransUnion CIBIL and MicroSave Consulting, using credit bureau data on about 16 crore women.",
    why:"Access to credit lets women start and grow businesses. Knowing where women borrow, and where they are left out, helps target policy and lending.",
    how:"Analysis of credit bureau data on women borrowers from 2017 to 2025, with field insights on rural women entrepreneurs."
  },
  nums:[["₹76 lakh cr","Credit held by women, 26% of the system",0],["36%","Credit penetration among women in 2025 (19% in 2017)",0],["31%","Yearly growth in women business borrowers",0],["4.3%","Women-owned businesses with cash credit or overdraft (about 40% overall)",1]],
  themes:[
    {name:"Women's borrowing has grown fast", sev:"low", items:[
      {t:"Women's outstanding credit rose from ₹16 lakh crore in 2017 to ₹76 lakh crore in 2025, about 4.8 times, against 2.9 times for total credit.", amt:""},
      {t:"Credit penetration among women rose from 19% to 36%; the number of women borrowers grew 9% a year.", amt:""},
      {t:"Women's default rate on 2024 loans was about 0.7 times the overall level.", amt:""}]},
    {name:"More women borrowing for business", sev:"low", items:[
      {t:"Credit-active women business borrowers grew 31% a year over three years, against 17% for overall commercial credit.", amt:""},
      {t:"Tamil Nadu (15%) and Maharashtra (11%) have the largest shares of women business borrowers; Bihar (59%) and Uttar Pradesh (42%) grew fastest.", amt:""}]},
    {name:"Gaps that remain", sev:"med", items:[
      {t:"Only about 4.3% of women-owned businesses use cash credit or overdraft, against roughly 40% overall.", amt:""},
      {t:"About 27% of women entrepreneurs hold loans in their business's name.", amt:""},
      {t:"Since 2023 lenders have focused more on existing borrowers, slowing the entry of new women borrowers.", amt:""},
      {t:"Shared phones, time pressures and limited say over money hold back rural women's use of digital finance.", amt:""}]}
  ],
  charts:[
    {title:"Credit penetration among women", type:"bars", unit:"% of eligible women", max:100, data:[["2017",19],["2025",36]]},
    {title:"Women's outstanding credit", type:"bars", unit:"₹ lakh crore", data:[["2017",16],["2025",76]]}
  ],
  recs:[
    "Use digital footprints such as UPI and cash-flow records to assess creditworthiness, with regular checks for gender bias in credit models.",
    "Design loan products, such as repayment schedules, around women's business cash-flow cycles.",
    "Expand first-time access to credit responsibly and strengthen last-mile digital skills.",
    "Measure how women progress to bigger and better loans, not just whether they get access."
  ],
  recsNote:"Summarised from the report and published analysis.",
  response:["The report is advisory, meant to guide lenders and policymakers; it does not create new rules."],
  timeline:[["2017","Women hold ₹16 lakh crore of credit"],["2025","₹76 lakh crore; 36% credit penetration"],["Apr 2026","Second edition released"]],
  glossary:["Credit bureau","Credit penetration","CAGR","Microfinance"],
  exam:{
    prelims:[
      "'From Borrowers to Builders' is a NITI Aayog report prepared with TransUnion CIBIL and MicroSave Consulting; its second edition came out in April 2026.",
      "Women hold ₹76 lakh crore of credit, 26% of total system credit.",
      "Credit penetration among women rose from 19% (2017) to 36% (2025).",
      "Women's default rate on 2024 loans was about 0.7 times the overall level."
    ],
    mains:"Women's share of credit has grown fast, but few women-owned businesses use working-capital loans. Examine the gaps in women's access to business credit and suggest measures, with reference to NITI Aayog's 2026 report. (15 marks)",
    quiz:[
      {q:"What share of India's total system credit do women borrowers hold, per the 2026 NITI Aayog report?", o:["16%","26%","36%","45%"], a:1, w:"26%, or ₹76 lakh crore."},
      {q:"Which NITI Aayog platform prepared the report?", o:["Atal Innovation Mission","Women Entrepreneurship Platform","Frontier Tech Hub","SDG India Index"], a:1, w:"The Women Entrepreneurship Platform (WEP), with TransUnion CIBIL and MicroSave Consulting."},
      {q:"About what share of women-owned business entities use cash credit or overdraft facilities?", o:["4.3%","27%","40%","59%"], a:0, w:"About 4.3%, against roughly 40% overall."}
    ]
  },
  related:["niti-ifi-2026","cag-banks-nbfc-tax-40-2025"],
  src:[["NITI Aayog: From Borrowers to Builders (report PDF)","https://www.niti.gov.in/sites/default/files/2026-04/From-Borrowers-To-Builders-Women-and-India-Evolving-Credit-Market.pdf","official"],["DD News: NITI Aayog report on women in the credit market","https://ddnews.gov.in/en/niti-aayog-releases-report-highlighting-surge-in-womens-participation-in-indias-credit-market/","coverage"],["Drishti IAS: Trends in India's female credit market","https://www.drishtiias.com/daily-updates/daily-news-analysis/trends-in-indias-female-credit-market/print_manually","analysis"]],
  kw:"women credit borrowers NITI Aayog WEP TransUnion CIBIL MicroSave financial inclusion business loans microfinance gold loans 2026"
},
/* ---------- CAG · Nagaland: Social, Economic, General and Revenue Sectors ---------- */
{
  id:"cag-nagaland-1-2026", body:"CAG", state:"Nagaland", kind:"Performance audit", reportNo:"Report No. 1 of 2026 (Nagaland)",
  title:"Report of the CAG on Social (including Local Governments Audit), Economic, General and Revenue Sectors for the year ended March 2024, Government of Nagaland", short:"Nagaland Audit: Water, Jobs, Treasury", sector:"Social welfare", ministry:"Public Health Engineering, Rural Development, Social Welfare, Transport and other departments, Government of Nagaland",
  date:"Sep 2026", dateISO:"2026-09-03", tabled:"Tabled in the Nagaland Assembly on 3 September 2026", period:"Year ended March 2024", flagged:288.12, flaggedNote:"Avoidable extra spending on Jal Jeevan Mission materials bought from one supplier without tenders, the report's largest single finding. This is an amount at issue, not a confirmed loss.",
  tldr:[
    "Jal Jeevan Mission materials were bought from one supplier without tenders, costing ₹288.12 crore more than needed.",
    "In 34 sampled villages, only 8,251 of 16,288 targeted tap connections were given; ₹21.57 crore was shown as spent on households that got nothing.",
    "Ten MGNREGS works worth ₹2.87 crore shown as complete did not exist, and 24 government employees were enrolled as job-card workers."
  ],
  en:"This CAG report on Nagaland covers four performance audits, an IT audit and ten other findings for 2023-24. The biggest problems are in the Jal Jeevan Mission. Pipes and other materials were bought from one supplier without tenders, at an extra cost of ₹288 crore. In the villages checked, only about half the promised tap connections were given, yet money was shown as spent on the rest. In the rural jobs scheme, some works shown as complete could not be found. The report also found learner's licences issued without tests, funds for hostels diverted to a private school and a bus station left a third built.",
  hi:"नागालैंड पर CAG की इस रिपोर्ट में 2023-24 के चार निष्पादन ऑडिट, एक IT ऑडिट और दस अन्य निष्कर्ष हैं। सबसे बड़ी समस्याएँ जल जीवन मिशन में हैं। पाइप और अन्य सामान बिना निविदा के एक ही आपूर्तिकर्ता से खरीदा गया, जिससे ₹288 करोड़ का अतिरिक्त खर्च हुआ। जाँचे गए गाँवों में वादा किए गए नल कनेक्शनों में से लगभग आधे ही दिए गए, फिर भी बाकी पर पैसा खर्च दिखाया गया। ग्रामीण रोज़गार योजना में पूरे दिखाए गए कुछ काम मौके पर मिले ही नहीं। रिपोर्ट में यह भी पाया गया कि लर्नर लाइसेंस बिना परीक्षा के जारी हुए, छात्रावासों का पैसा एक निजी स्कूल को दे दिया गया और एक बस स्टेशन एक-तिहाई ही बना।",
  context:{
    what:"A CAG report on Nagaland for the year ended March 2024. It has four performance audits (Jal Jeevan Mission, Integrated Child Development Services, MGNREGS and Regional and District Transport Offices), an IT audit of treasury computerisation and ten compliance audit paragraphs.",
    why:"Nagaland depends heavily on central schemes for drinking water, rural jobs and child nutrition. If money is spent without tenders or shown against work not done, the people these schemes are meant for lose out.",
    how:"Risk-based test check of 364 of 1,186 government units, with sampled villages and districts for the scheme audits and physical checks of works."
  },
  nums:[["₹288.12 cr","Extra JJM spending on a supply order given without tenders",1],["50.66%","Targeted tap connections actually given in 34 sampled villages",1],["₹21.57 cr","Shown as spent on 5,851 households that got no tap",1],["59%","Planned MGNREGS social audits not done",1]],
  themes:[
    {name:"Jal Jeevan Mission: costly buying, missing taps", sev:"high", items:[
      {t:"Materials were bought from a single supplier without tenders, causing avoidable extra spending.", amt:"₹288.12 cr"},
      {t:"In 34 test-checked villages, 8,251 tap connections were given against a target of 16,288; spending on 5,851 households that got no benefit was fictitious.", amt:"₹21.57 cr"},
      {t:"Only 14,231 of 71,448 planned water source tests (19.92%) were done; the State laboratory had 21 of 43 required instruments.", amt:""},
      {t:"Only 10 of 34 villages held social audits, and 30 of 34 village water committees had no bank account.", amt:""}]},
    {name:"MGNREGS: works that did not exist", sev:"high", items:[
      {t:"Ten projects shown as completed could not be found on the ground.", amt:"₹2.87 cr"},
      {t:"Fifty-one other works were short-executed.", amt:"₹8.69 cr"},
      {t:"24 government employees were enrolled as workers and 19 of them were paid ₹6.04 lakh in wages.", amt:""},
      {t:"2,676 of 4,536 planned social audits (59%) were not held.", amt:""}]},
    {name:"Money diverted or wasted", sev:"med", items:[
      {t:"Funds for boys' and girls' hostels under PMJVK were used to build on the premises of a private school.", amt:"₹6.14 cr"},
      {t:"A bus station-cum-market in Dimapur reached only 33% progress after six years, with a further liability of ₹16.64 crore.", amt:"₹10.61 cr"},
      {t:"National Health Mission money for infrastructure maintenance was diverted to medicines, linen and other supplies.", amt:"₹3.85 cr"},
      {t:"Commercial LPG for the police was bought without tenders.", amt:"₹3.46 cr"}]},
    {name:"Weak controls in transport, treasury and child nutrition", sev:"med", items:[
      {t:"6,292 of 33,567 learner's licences checked were issued without the mandatory test; 8,633 vehicles owed tax.", amt:"₹9.03 cr"},
      {t:"Delays in choosing a vendor cost the State central assistance for treasury computerisation; 5 of 13 TreasuryNet modules were not implemented.", amt:"₹2.84 cr"},
      {t:"Only 28% of 4.10 lakh ICDS beneficiaries were tracked on the Poshan Tracker; stock records were poor for medicine kits, uniforms and badges.", amt:"₹4.17 cr"},
      {t:"Fraudulent, double and excess drawals by 13 drawing officers totalled ₹0.88 crore, of which ₹0.24 crore was still to be recovered.", amt:"₹0.88 cr"}]}
  ],
  charts:[
    {title:"Tap connections in 34 sampled villages", type:"split", unit:"connections", data:[["Given",8251],["Not given",8037]], note:"Target 16,288. The audit counted 5,851 households as deprived of the benefit."},
    {title:"Largest findings", type:"bars", unit:"₹ crore", data:[["JJM supply order without tenders",288.12],["JJM spending on households with no tap",21.57],["Bus station project spending",10.61],["Vehicle tax arrears",9.03],["MGNREGS short-executed works",8.69]]}
  ],
  recs:[
    "Tighten procurement rules so large purchases go through open tenders.",
    "Recover excess, fraudulent and misappropriated payments.",
    "Fix responsibility on officials for the irregularities found.",
    "Make sure assets paid for with public money are used for their intended purpose."
  ],
  recsNote:"Summarised from published coverage of the report.",
  response:["Coverage did not report a reply from the Nagaland government on these findings. The report goes to the Nagaland Assembly's Public Accounts Committee."],
  timeline:[["2019-20","Start of the Jal Jeevan Mission audit period"],["Mar 2024","Year audited ends"],["3 Sep 2026","Report No. 1 of 2026 tabled in the Nagaland Assembly, with the State Finances Audit Report for 2024-25"]],
  glossary:["Performance audit","Jal Jeevan Mission","FHTC","MGNREGS","Social audit","ICDS","PAC"],
  exam:{
    prelims:[
      "CAG Report No. 1 of 2026 on Nagaland covers the year ended March 2024 and was tabled on 3 September 2026.",
      "It includes performance audits of Jal Jeevan Mission, ICDS, MGNREGS and transport offices, and an IT audit of treasury computerisation.",
      "In 34 sampled villages, 8,251 of 16,288 targeted tap connections (50.66%) were provided.",
      "The CAG found ₹288.12 crore of avoidable extra spending on JJM materials bought without tenders."
    ],
    mains:"Social audits and open tendering are meant to stop leakages in flagship schemes. Discuss with reference to the CAG's 2026 findings on Jal Jeevan Mission and MGNREGS in Nagaland. (15 marks)",
    quiz:[
      {q:"What share of targeted tap connections were provided in Nagaland's 34 sampled villages?", o:["About 20%","About 51%","About 75%","About 95%"], a:1, w:"8,251 of 16,288, or 50.66%."},
      {q:"Why did the CAG flag ₹288.12 crore under Jal Jeevan Mission in Nagaland?", o:["Funds lapsed unspent","Materials bought from one supplier without tenders","Money sent to another state","Pipes stolen from stores"], a:1, w:"A supply order given without tenders caused avoidable extra spending."},
      {q:"How many government employees were found enrolled as MGNREGS workers in the audit?", o:["4","24","240","2,676"], a:1, w:"24 were enrolled and 19 of them received ₹6.04 lakh in wages."}
    ]
  },
  related:["cag-kerala-jjm","tn-jjm","cag-odisha-dmf-2026"],
  src:[["CAG: Report No. 1 of 2026, Government of Nagaland","https://cag.gov.in/en/audit-report/details/126309","official"],["CAG: Overview of the Nagaland audit report (PDF)","https://saiindia.gov.in/uploads/download_audit_report/2026/05-Overview-06a99a4d7e55011.05295814.pdf","official"],["Hub Network: CAG flags ₹288 crore lapses across Nagaland","https://hubnetwork.in/cag-flags-%E2%82%B9288-crore-lapses-across-nagaland/","coverage"],["The Policy Edge: CAG flags fictitious water connections in Nagaland","https://www.policyedge.in/p/cag-flags-fictitious-water-connections-missing-mgnregs-works-and-weak-controls-in-nagaland","analysis"]],
  kw:"Nagaland Jal Jeevan Mission JJM tap connections MGNREGS ICDS Poshan Tracker transport learner licence treasury TreasuryNet PMJVK Dimapur Kohima 2026"
},
/* ---------- CAG · Customs and DGFT (Union) ---------- */
{
  id:"cag-customs-dgft-25-2026", body:"CAG", kind:"Compliance audit", reportNo:"Report No. 25 of 2026",
  title:"Compliance Audit Report on the Department of Revenue (Customs) and the Directorate General of Foreign Trade", short:"Customs and Export Incentives Audit", sector:"Public finance", ministry:"Ministry of Finance (Department of Revenue, CBIC) and Ministry of Commerce & Industry (DGFT)",
  date:"Aug 2026", dateISO:"2026-08-12", tabled:"Presented in Parliament on 12 August 2026", period:"Year ended March 2024", flagged:667, flaggedNote:"Total revenue implication of the report's 106 paragraphs. These are amounts at issue, not confirmed losses.",
  tldr:[
    "The report has 106 paragraphs with a revenue implication of ₹667 crore; ministries accepted 104 of them.",
    "A special check of the RoSCTL export incentive for garment exporters found issues worth ₹603.08 crore, including scrips given to firms on a denied list.",
    "Automation of scrip issue did not stop errors, the CAG said; only ₹62.40 lakh had been recovered on the RoSCTL findings."
  ],
  en:"The CAG checked how Customs collects duty and how the Directorate General of Foreign Trade gives export incentives, for 2023-24. The report's 106 findings add up to ₹667 crore. Most of it, ₹603 crore, is in the RoSCTL scheme, which refunds state and central taxes to garment and made-up exporters through credit scrips. Scrips were issued in excess, to firms that were barred, and for exports whose payment never came in. Customs also under-assessed duty worth about ₹64 crore by using the wrong tariff headings or exemptions. Ministries accepted almost all findings and have recovered some money.",
  hi:"CAG ने 2023-24 के लिए जाँचा कि सीमा शुल्क विभाग शुल्क कैसे वसूलता है और विदेश व्यापार महानिदेशालय (DGFT) निर्यात प्रोत्साहन कैसे देता है। रिपोर्ट के 106 निष्कर्ष कुल ₹667 करोड़ के हैं। इसमें सबसे बड़ा हिस्सा, ₹603 करोड़, RoSCTL योजना का है, जो परिधान और मेड-अप निर्यातकों को क्रेडिट स्क्रिप के ज़रिए राज्य और केंद्रीय करों की वापसी देती है। स्क्रिप ज़रूरत से ज़्यादा जारी हुईं, प्रतिबंधित फ़र्मों को दी गईं, और ऐसे निर्यात पर भी दी गईं जिनका भुगतान कभी आया ही नहीं। सीमा शुल्क विभाग ने गलत टैरिफ़ शीर्ष या छूट लगाकर लगभग ₹64 करोड़ का शुल्क कम आँका। मंत्रालयों ने लगभग सभी निष्कर्ष स्वीकार किए हैं और कुछ पैसा वसूल किया है।",
  context:{
    what:"A CAG compliance audit of Customs (under the Department of Revenue) and the Directorate General of Foreign Trade for the year ended March 2024. It includes a subject-specific audit of the Rebate of State and Central Taxes and Levies (RoSCTL) scheme.",
    why:"Customs duty is a major source of Union revenue, and export incentives are paid out of it. Wrong assessment or excess incentives mean less money for the government and unfair gains for some traders.",
    how:"Test audit of 47 Customs Commissionerates, 13 DGFT Regional Authorities and eight Development Commissioners. The report draws on observations issued between August 2025 and January 2026."
  },
  nums:[["₹667 cr","Revenue implication of 106 paragraphs",1],["₹603.08 cr","Issues found in the RoSCTL export incentive scheme",1],["104 of 106","Paragraphs accepted by the ministries",0],["₹21 cr","Recovered in 56 cases of wrong duty assessment",0]],
  themes:[
    {name:"RoSCTL: export incentives given wrongly", sev:"high", items:[
      {t:"Inadmissible benefits from export payments not received or received late, wrong classification of exports, wrong incentive rates and wrong exchange rates (₹158.63 crore under DGFT, ₹314.06 crore under Customs).", amt:"₹472.69 cr"},
      {t:"System weaknesses: excess or irregular scrips, including to firms on the Denied Entity List, scrips beyond entitlement, double export benefits and late e-scrip creation (₹97.62 crore under DGFT, ₹32.77 crore under Customs).", amt:"₹130.39 cr"},
      {t:"The CAG said automation of scrip issue failed to achieve its aim of simpler procedures and ease of doing business.", amt:""},
      {t:"Partial recoveries of ₹62.40 lakh were reported against the RoSCTL findings.", amt:""}]},
    {name:"Customs duty under-assessed", sev:"med", items:[
      {t:"Duty was under-assessed through misclassification of goods, wrong use of exemption notifications and breaches of Foreign Trade Policy rules.", amt:"₹64 cr"}]},
    {name:"Action taken so far", sev:"low", items:[
      {t:"Ministries accepted 104 of the 106 paragraphs.", amt:""},
      {t:"Show cause notices and adjudication were started in cases involving ₹55 crore.", amt:"₹55 cr"},
      {t:"₹21 crore was recovered in 56 cases of incorrect duty assessment.", amt:"₹21 cr"}]}
  ],
  charts:[
    {title:"Where the ₹667 crore comes from", type:"bars", unit:"₹ crore", data:[["RoSCTL: compliance issues",472.69],["RoSCTL: system weaknesses",130.39],["Customs duty under-assessed",64]], note:"Figures are rounded in the CAG press release."},
    {title:"RoSCTL compliance issues by agency", type:"bars", unit:"₹ crore", data:[["Customs",314.06],["DGFT",158.63]]}
  ],
  recs:[
    "DGFT should stop scrips going to firms on the Denied Entity List and fix accountability where they did.",
    "Link the Customs system with the DGFT portal so listed exporters cannot get RoSCTL benefits without a valid order.",
    "Track whether export payments are received, under FEMA, and recover ineligible credits with interest.",
    "Add checks to stop misclassification and wrong exchange rates, and monitor scrolls so payouts are on time."
  ],
  recsNote:"Summarised from the CAG press release.",
  response:["The ministries accepted 104 of 106 paragraphs and reported recoveries and show cause notices. The report goes to Parliament's Public Accounts Committee."],
  timeline:[["Mar 2024","Year audited ends"],["Aug 2025 to Jan 2026","Audit observations in this report issued"],["12 Aug 2026","Report No. 25 of 2026 presented in Parliament"]],
  glossary:["Compliance audit","RoSCTL","DGFT","Duty credit scrip","Denied Entity List","PAC"],
  exam:{
    prelims:[
      "CAG Report No. 25 of 2026 covers Customs and the DGFT for the year ended March 2024 and was presented on 12 August 2026.",
      "Its 106 paragraphs have a revenue implication of ₹667 crore.",
      "RoSCTL refunds embedded state and central taxes to exporters of apparel and made-ups through duty credit scrips.",
      "The RoSCTL subject-specific audit found issues worth ₹603.08 crore."
    ],
    mains:"Export incentive schemes must balance support for exporters with protection of revenue. Examine the gaps the CAG found in the RoSCTL scheme in 2026 and suggest safeguards. (10 marks)",
    quiz:[
      {q:"RoSCTL, examined in CAG Report No. 25 of 2026, is an incentive for exporters of:", o:["Pharmaceuticals","Apparel and made-ups","Electronics","Steel"], a:1, w:"It rebates state and central taxes on apparel and made-up exports."},
      {q:"Which body issues RoSCTL scrips along with Customs systems?", o:["CBDT","DGFT","SEBI","RBI"], a:1, w:"The Directorate General of Foreign Trade under the Commerce Ministry."},
      {q:"What was the total revenue implication of the report's 106 paragraphs?", o:["₹64 crore","₹472 crore","₹667 crore","₹6,670 crore"], a:2, w:"₹667 crore, of which ₹603.08 crore was in the RoSCTL audit."}
    ]
  },
  related:["cag-gst-20-2026","cag-banks-nbfc-tax-40-2025","cag-fin-comm-5-2026"],
  src:[["CAG press release on Report No. 25 of 2026","https://cag.gov.in/uploads/PressRelease/PR-Press-Eng-25-2026-06a8087cca0aa11-09487010.pdf","official"],["TaxGuru: CAG Customs audit report 2026 flags RoSCTL deficiencies","https://taxguru.in/?p=1072113","analysis"]],
  kw:"Customs DGFT RoSCTL export incentive scrips Denied Entity List apparel made-ups textiles duty under-assessment CBIC FEMA Report 25 2026"
},
/* ---------- NITI · Caregiving ---------- */
{
  id:"niti-care-2026", body:"NITI", kind:"Policy report", reportNo:"NITI Aayog policy report",
  title:"Reimagining Care: Strategies for Empowering Caregivers in Viksit Bharat@2047", short:"Reimagining Care 2026", sector:"Health", ministry:"NITI Aayog",
  date:"Aug 2026", dateISO:"2026-08-06", tabled:"Released by NITI Aayog in August 2026 (reported 6 August 2026)", period:"Projections to 2050", flagged:null,
  tldr:[
    "India's population aged 60 and above is projected to rise from 149 million in 2022 to 347 million by 2050, about 20.8% of all people.",
    "About 10% of Indians are family caregivers, mostly untrained and unpaid; caregiving is not a regulated profession.",
    "NITI Aayog proposes a National Caregiving Council, a qualification framework, a caregiver registry and wider social security for caregivers."
  ],
  en:"India is ageing fast, and more people need long-term care. This NITI Aayog report looks at who gives that care and how to support them. Most care is given at home by family members, mostly women, who are not trained or paid. Caregiving is not a regulated profession, there are few certified caregivers, and long-term care insurance is lacking. The report proposes a national council to set standards and certify caregivers, a common qualification framework, a registry and digital platform, social security for care workers, more support for family carers and partnerships to place trained Indian caregivers abroad.",
  hi:"भारत तेज़ी से बूढ़ा हो रहा है, और ज़्यादा लोगों को लंबे समय तक देखभाल की ज़रूरत है। नीति आयोग की यह रिपोर्ट देखती है कि यह देखभाल कौन करता है और उन्हें कैसे सहारा दिया जाए। ज़्यादातर देखभाल घर पर परिवार के लोग करते हैं, अधिकतर महिलाएँ, जिन्हें न प्रशिक्षण मिला है न वेतन। देखभाल एक विनियमित पेशा नहीं है, प्रमाणित देखभालकर्ता कम हैं, और दीर्घकालिक देखभाल बीमा की कमी है। रिपोर्ट मानक तय करने और देखभालकर्ताओं को प्रमाणित करने के लिए एक राष्ट्रीय परिषद, एक साझा योग्यता ढाँचा, एक रजिस्ट्री और डिजिटल प्लेटफ़ॉर्म, देखभाल कर्मियों के लिए सामाजिक सुरक्षा, पारिवारिक देखभालकर्ताओं को ज़्यादा सहायता और प्रशिक्षित भारतीय देखभालकर्ताओं को विदेश भेजने के लिए साझेदारी का प्रस्ताव करती है।",
  context:{
    what:"A NITI Aayog policy report on India's caregiving ecosystem: care for older people, persons with disabilities and others who need long-term support, and the paid and unpaid workers who provide it.",
    why:"The number of older Indians will more than double by 2050. Without trained caregivers and support for families, the burden falls on unpaid relatives, mostly women, and care quality suffers.",
    how:"Review of data from the India Ageing Report 2023, Census 2011 and the Time Use Survey, global practices in countries such as Japan, Australia, China and the Nordic states, and consultations with ministries, states and institutions."
  },
  nums:[["347 million","Indians aged 60+ projected by 2050 (20.8% of population)",0],["~10%","Share of Indians who are family caregivers",0],["299 vs 97 min","Daily unpaid domestic and care work, women vs men (Time Use Survey 2019)",1],["USD 72.31 bn","Projected Indian care services market by 2030",0]],
  themes:[
    {name:"Rising need for care", sev:"high", items:[
      {t:"People aged 60+ numbered 149 million in July 2022 (about 10.5%), and are projected to reach 194 million by 2031 and 347 million (20.8%) by 2050.", amt:""},
      {t:"26.8 million people, or 2.21% of the population, live with disabilities (Census 2011).", amt:""},
      {t:"OECD countries will need 13.5 million more care workers by 2040, a 60% increase, creating demand for trained workers abroad.", amt:""}]},
    {name:"Care falls on unpaid women", sev:"high", items:[
      {t:"Women spend about 299 minutes a day on unpaid domestic and care work, against 97 minutes for men (Time Use Survey 2019).", amt:""},
      {t:"About 10% of Indians are family caregivers, most of them untrained and unpaid.", amt:""}]},
    {name:"A sector without rules", sev:"med", items:[
      {t:"Caregiving is not a regulated profession and has no dedicated legal, accreditation or quality framework.", amt:""},
      {t:"Training is not aligned with international standards, and specialised training in dementia, stroke and palliative care is limited.", amt:""},
      {t:"Long-term care financing, insurance and social security for caregivers are lacking, and respite care is largely absent.", amt:""},
      {t:"Background checks, grievance redressal and digital records are limited.", amt:""}]},
    {name:"A growing market", sev:"low", items:[
      {t:"India's care services market is projected to grow from USD 29.62 billion in 2023 to USD 72.31 billion by 2030, about 13.76% a year.", amt:""},
      {t:"The care sector accounts for 16% of employment worldwide (World Economic Forum, 2024).", amt:""}]}
  ],
  charts:[
    {title:"Indians aged 60 and above", type:"bars", unit:"million", data:[["2022",149],["2031",194],["2050",347]]},
    {title:"Daily unpaid domestic and care work (2019)", type:"bars", unit:"minutes per day", data:[["Women",299],["Men",97]]}
  ],
  recs:[
    "Set up a National Caregiving Council to regulate, accredit and certify caregivers and keep a registry.",
    "Create a National Caregiving Qualification Framework, aligned with NSQF, with specialised cadres for geriatric, palliative and dementia care.",
    "Build a national digital caregiver platform with a certified directory, background checks and training.",
    "Extend social security and insurance to caregivers and support family and community carers through SHGs and Ayushman Arogya Mandirs.",
    "Sign government-to-government partnerships with countries such as Japan, Germany, the UK and Australia for ethical overseas placement."
  ],
  recsNote:"Summarised from the report and published analysis.",
  response:["The report is advisory. It proposes a National Policy on Caregiving but does not create new rules by itself."],
  timeline:[["2019","Time Use Survey records the unpaid care gap"],["Jul 2022","149 million Indians aged 60+"],["Aug 2026","NITI Aayog releases the report"],["2050","Projected 347 million Indians aged 60+"]],
  glossary:["NITI Aayog","Long-term care","Respite care","NSQF","Time Use Survey"],
  exam:{
    prelims:[
      "'Reimagining Care: Strategies for Empowering Caregivers in Viksit Bharat@2047' was released by NITI Aayog in August 2026.",
      "India's 60+ population is projected to rise from 149 million (2022) to 347 million (20.8%) by 2050, per the India Ageing Report 2023 cited in it.",
      "The report proposes a National Caregiving Council and a National Caregiving Qualification Framework.",
      "About 26.8 million Indians live with disabilities, per Census 2011."
    ],
    mains:"India's care needs are rising with an ageing population, while caregiving remains unpaid, untrained and largely done by women. Discuss the measures NITI Aayog has proposed in 2026 to build a formal care workforce. (15 marks)",
    quiz:[
      {q:"What share of India's population is projected to be aged 60+ by 2050, as cited in NITI Aayog's 2026 care report?", o:["10.5%","14.9%","20.8%","34.7%"], a:2, w:"347 million, about 20.8%."},
      {q:"Which new apex body does the report propose for caregiving?", o:["National Caregiving Council","National Health Authority","Rehabilitation Council of India","National Commission for Senior Citizens"], a:0, w:"A National Caregiving Council for regulation, accreditation, certification and a registry."},
      {q:"In the 2019 Time Use Survey cited, how many minutes a day did women spend on unpaid domestic and care work?", o:["97","140","299","420"], a:2, w:"About 299 minutes, against 97 for men."}
    ]
  },
  related:["skilling-viksit-2047","niti-women-credit-2026","plfs"],
  src:[["NITI Aayog: Reimagining Care (report PDF)","https://www.niti.gov.in/sites/default/files/2026-08/Reimagining-Care-Strategies-for-Empowering-Caregivers-in-Viksit-Bharat-2047.pdf","official"],["All India Radio: NITI Aayog releases report to strengthen India's caregiving workforce","https://newsonair.gov.in/niti-aayog-releases-report-to-strengthen-indias-caregiving-workforce/","coverage"],["Drishti IAS: NITI Aayog report on India's caregiving ecosystem","https://www.drishtiias.com/daily-updates/daily-news-analysis/niti-aayog-report-on-indias-caregiving-ecosystem/print_manually","analysis"]],
  kw:"caregiving care economy elderly ageing senior citizens disability palliative dementia long-term care caregivers National Caregiving Council NITI Aayog 2047 2026"
}

);

/* map facts for the new state reports */
Object.assign(window.STATE_FACTS_V2, {
  GJ:[...(window.STATE_FACTS_V2.GJ||[]),["Tops NITI's Investment Friendliness Index 2026 with 56.6","niti-ifi-2026"],["CAG GST audit: deviations in 291 cases worth ₹2,606.62 crore","cag-gujarat-gst-2026"]],
  KL:[...(window.STATE_FACTS_V2.KL||[]),["Only 52.46% of rural homes had tap connections by March 2024","cag-kerala-jjm"],["Revenue arrears of ₹30,308.52 crore, 24.35% of revenue (CAG, 2026)","cag-kerala-revenue-2-2026"]],
  OD:[...(window.STATE_FACTS_V2.OD||[]),["₹983.32 crore of mining funds spent in non-affected villages (CAG, 2026)","cag-odisha-dmf-2026"]],
  NL:[...(window.STATE_FACTS_V2.NL||[]),["Only 8,251 of 16,288 targeted tap connections given in 34 sampled villages (CAG, 2026)","cag-nagaland-1-2026"]],
  UK:[...(window.STATE_FACTS_V2.UK||[]),["12 sewage plants releasing untreated sewage into the Ganga","cag-uk-namami-gange"]],
  WB:[...(window.STATE_FACTS_V2.WB||[]),["₹18.07 crore of Amphan housing grants paid twice","cag-wb-amphan"],["43 of 75 oxygen plants not working (Dec 2023)","cag-wb-covid"],["₹2.29 lakh crore of grants without utilisation certificates","cag-wb-finances-2425"]],
  MH:[...(window.STATE_FACTS_V2.MH||[]),["Second in Investment Friendliness Index 2026 (53.7)","niti-ifi-2026"]],
  TN:[...(window.STATE_FACTS_V2.TN||[]),["Third in Investment Friendliness Index 2026 (53.3)","niti-ifi-2026"]],
  DL:[...(window.STATE_FACTS_V2.DL||[]),["Only about 0.10% of e-way bills physically verified (CAG, 2026)","cag-delhi-revenue-1-2026"]]
});
