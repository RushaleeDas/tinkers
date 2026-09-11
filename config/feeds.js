/* Opinion/analysis feeds lead the mix. General news feeds remain useful issue context. */
module.exports=[
  {name:'The Hindu Opinion',url:'https://www.thehindu.com/opinion/feeder/default.rss',category:'Opinion · India & policy',contentType:'opinion',credibilityWeight:0.98,editorialWeight:1.2,enabled:true},
  {name:'Indian Express Opinion',url:'https://indianexpress.com/section/opinion/feed/',category:'Opinion · India & policy',contentType:'opinion',credibilityWeight:0.95,editorialWeight:1.2,enabled:true},
  {name:'Mint Opinion',url:'https://www.livemint.com/rss/opinion',category:'Opinion · Economy & business',contentType:'opinion',credibilityWeight:0.95,editorialWeight:1.2,enabled:true},
  {name:'Financial Times Opinion',url:'https://www.ft.com/opinion?format=rss',category:'Analysis · Global economy',contentType:'analysis',credibilityWeight:0.98,editorialWeight:1.15,enabled:true},
  {name:'The Hindu',url:'https://www.thehindu.com/feeder/default.rss',category:'Current affairs',contentType:'news',credibilityWeight:0.95,editorialWeight:0.85,enabled:true},
  {name:'Mint',url:'https://www.livemint.com/rss/news',category:'Economy & business',contentType:'news',credibilityWeight:0.95,editorialWeight:0.85,enabled:true},
  {name:'Indian Express',url:'https://indianexpress.com/section/business/feed/',category:'Economy & policy',contentType:'news',credibilityWeight:0.9,editorialWeight:0.8,enabled:true},
  {name:'Business Standard',url:'https://www.business-standard.com/rss/latest.rss',category:'Economy & business',contentType:'news',credibilityWeight:0.88,editorialWeight:0.8,enabled:true},
  {name:'Financial Times',url:'https://www.ft.com/rss/home',category:'Global economy',contentType:'news',credibilityWeight:0.92,editorialWeight:0.85,enabled:true},
  {name:'Moneycontrol',url:'https://www.moneycontrol.com/rss/business.xml',category:'Business & markets',contentType:'news',credibilityWeight:0.75,editorialWeight:0.75,enabled:true},
  {name:'Business Standard Opinion',url:'https://www.business-standard.com/opinion/rss',category:'Opinion · Economy & business',contentType:'opinion',credibilityWeight:0.88,editorialWeight:1.1,enabled:false,reason:'Candidate URL returned HTML rather than RSS in local verification.'},
  {name:'Reuters',url:'https://www.reuters.com/rssFeed/worldNews',category:'Geopolitics',contentType:'news',credibilityWeight:1,editorialWeight:0.9,enabled:false,reason:'RSS endpoint returned 401 in local verification; no scraping workaround.'},
  {name:'The Economist',url:'https://www.economist.com/the-world-this-week/rss.xml',category:'Analysis · Global affairs',contentType:'analysis',credibilityWeight:0.98,editorialWeight:1.2,enabled:false,reason:'RSS endpoint returned 403 in local verification.'},
  {name:'The Ken',url:'https://the-ken.com/feed/',category:'Analysis · Technology & business',contentType:'analysis',credibilityWeight:0.9,editorialWeight:1.15,enabled:false,reason:'RSS endpoint returned 403 in local verification.'},
  {name:'CNBC-TV18',url:'https://www.cnbctv18.com/commonfeeds/v1/eng/rss/business.xml',category:'Business & markets',contentType:'news',credibilityWeight:0.8,editorialWeight:0.75,enabled:false,reason:'Candidate endpoint returned 400 in local verification.'}
];
