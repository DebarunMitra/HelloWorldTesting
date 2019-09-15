//Assignment Day 3 - Find company containing the word "Six" in its name and print its age
const companies = [
 { name: "Company One", category: "Finance", start: 1981, end: 2004 },
 { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
 { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
 { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
 { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
 { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
 { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
 { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
 { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

/*let companyName=companies.find(function(company){if(company.name==="Company Six"){return company.name}});
console.log(companyName);*/

/*let companyName=companies.filter(company=>company.name==="Company Six");
console.log(companyName);*/

//let companyName=companies.map((k,v)=>k.name.slice(8,12)==="six");
/*let companyName=companies.map(function(k,v){
  if(k.name.slice(8,12)==="Six"){
    return k.name;
  }
});*/


//let companyName=companies.map(k=>k.name.slice(8,12)==="Six").sort(com=>com.start-com.end);
//let companyName=companies.map((k)=>{if(k.name.slice(8,12)==="Six"){return k.end-k.start}});


let companyName=companies.map((k)=>{if(k.name.slice(8,12)==="Six"){console.log(`${k.name} ${k.end-k.start}`)}});

//console.log(companyName);
