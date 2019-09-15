/*1. Experiment from the begining
2. Foreach & Map  get error undefined
3. Learn reduce
4. Retail companies with their age as single array using
Map, reduce, Sort, filter*/
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

let num=[10,20,30,40,50];
//undefine map
/*let companyName=companies.map(function(v){
  //return companies.name;
  if(v.category==="Retail")
  {
    return companies.name;
  }
});
console.log(companyName);*/

//map working
/*let companyName=companies.map(function(k,v){
  if(k.category==='Retail')
  {
    return k.name;
  }
  //return k.name;
});
console.log(companyName);
*/
// foreach undefine
/*companies.forEach(function(v,k,o){
  if(o.category==='Retail')
  //{
    //return v.name;
  //  console.log(o.category);
  //}
      console.log(o.name);
});*/

// foreach working
/*companies.forEach(function(v,k){
  if(v.category==='Retail')
  {
    //return v.name;
    console.log(v.name);
  }
});*/


//reduce
/*let add=num.reduce(function(acc, cur){
  return acc+cur;
});
console.log(add);
*/

//4>==function
/*let companyName=companies.map(function(k,v){
  if(k.category==='Retail')
  {
    return (k.name+" "+(k.end-k.start)+" Years");
  }
  //return k.name;
});
console.log(companyName);*/

//4>!=function
//let companyName=companies.map((k,v)=>{ /*if(k.category==='Retail'){*/ return (k.name+" "+(k.end-k.start)+" Years");/*}*/});
//console.log(companyName);

//4)foreach
/*companies.forEach(function(v,k){
  if(v.category==='Retail')
  {
    //return v.name;
    console.log(v.name+" "+(v.end-v.start)+" Years");
  }
});*/


let companyName=companies.filter(v)=>{v.category==='Rentail'})
console.log(companyName);
