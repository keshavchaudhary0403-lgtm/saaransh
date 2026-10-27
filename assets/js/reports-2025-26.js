/* Reports added Oct 2026: 2025 and 2026 releases. Same schema as reports-v2.js.
   Figures are as reported by the CAG / NITI Aayog and the published coverage cited in each `src`. */

Object.assign(window.SITE.glossary, {
  "Input Tax Credit": "GST already paid on purchases that a business can set off against the GST it owes on its sales.",
  "IGST": "Integrated GST: tax on supplies between states, later shared between the Centre and the destination state.",
  "Works contract": "A contract to build, repair or install something where goods and services are supplied together, such as construction.",
  "SDRF": "State Disaster Response Fund: money set aside, largely with Union support, for immediate relief after a notified disaster.",
  "STP": "Sewage Treatment Plant: a facility that cleans wastewater before it is released into a river or reused.",
  "PSA oxygen plant": "Pressure Swing Adsorption plant: a unit that produces medical oxygen on site at a hospital.",
  "Net zero": "A state where the greenhouse gases a country emits are balanced by those it removes. India's target year is 2070."
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
}
);

/* map facts for the new state reports */
Object.assign(window.STATE_FACTS_V2, {
  GJ:[...(window.STATE_FACTS_V2.GJ||[]),["Tops NITI's Investment Friendliness Index 2026 with 56.6","niti-ifi-2026"],["CAG GST audit: deviations in 291 cases worth ₹2,606.62 crore","cag-gujarat-gst-2026"]],
  KL:[...(window.STATE_FACTS_V2.KL||[]),["Only 52.46% of rural homes had tap connections by March 2024","cag-kerala-jjm"]],
  UK:[...(window.STATE_FACTS_V2.UK||[]),["12 sewage plants releasing untreated sewage into the Ganga","cag-uk-namami-gange"]],
  WB:[...(window.STATE_FACTS_V2.WB||[]),["₹18.07 crore of Amphan housing grants paid twice","cag-wb-amphan"],["43 of 75 oxygen plants not working (Dec 2023)","cag-wb-covid"],["₹2.29 lakh crore of grants without utilisation certificates","cag-wb-finances-2425"]],
  MH:[...(window.STATE_FACTS_V2.MH||[]),["Second in Investment Friendliness Index 2026 (53.7)","niti-ifi-2026"]],
  TN:[...(window.STATE_FACTS_V2.TN||[]),["Third in Investment Friendliness Index 2026 (53.3)","niti-ifi-2026"]]
});
