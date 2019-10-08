// Author: Debarun Mitra
// Application Name: JobSearchOo
// Objective: Create a front end application for job search
// class Jobsearch(){
//   constructor(loc,exp,skill,cname){
//     this.loc=loc;
//     this.exp=exp;
//     this.skill=skill;
//     this.cname=cname;
//   }
//
// }
// const js=new Jobsearch();
const monthNo={"Jan":1,"Feb":2,"Mar":3,"Apr":4,"May":5,"Jun":6,"Jul":7,"Aug":8,"Sep":9,"Oct":10,"Nov":11,"Dec":12};
fetch('https://nut-case.s3.amazonaws.com/jobs.json').then(response=>response.json()).then(item=>{
  let data=item.data;let count=0,regexLoc,regexSkill,regexCname,regexExp=/\d+/g;
  let strSkill="";
  let strLoc="bangalore";
  let strExp=4;
  let strCname="";
  (strSkill==='')?regexSkill ='.*?':regexSkill = new RegExp("\\b(?:"+strSkill+")\\b", "gi");
  (strLoc==='')?regexLoc = '.*?':regexLoc = new RegExp("\\b(?:"+strLoc+")\\b", "gi");
  (strCname==='')?regexCname = '.*?':regexCname = new RegExp("\\b(?:"+strCname+")\\b", "gi");
  let job=data.filter(ele=>ele.skills.match(regexSkill) && ele.location.match(regexLoc) && ele.companyname.match(regexCname)).map((item)=>{
  if(strExp!==undefined){
    console.log('strExp');
    let expMatch=item.experience.match(regexExp);
    let date=new Date();
    let enddate=item.enddate.split(/,| /);
    if(expMatch!==null){
      if(expMatch[0]!==undefined && parseInt(expMatch[0])<=strExp && parseInt(expMatch[0])!==0 && enddate!==''){
        if(expMatch[1]!==undefined && parseInt(expMatch[1])>=strExp){
            //console.log('expMatch[1]!==undefined && parseInt(expMatch[1])>=strExp');
            console.log(item);
            console.log(expMatch[0]+"-"+expMatch[1]);
            let d=parseInt(enddate[1]);
            console.log(d+"-"+monthNo[enddate[0]]+'-'+enddate[0]);
            count+=1;
        }
        else if(expMatch[1]!==undefined && parseInt(expMatch[1])===strExp){
          //console.log('!!expMatch[1]!==undefined && parseInt(expMatch[1])>=strExp');
          console.log(item);
          console.log(expMatch[0]+"-"+expMatch[1]);
          let d=parseInt(enddate[1]);
          console.log(d+"-"+monthNo[enddate[0]]+'-'+enddate[0]);
          count+=1;
        }
      }
     //  else if(parseInt(expMatch[0])===0){
     //    console.log('parseInt(expMatch[1])===strExp');
     //   console.log(item);
     //   console.log(expMatch[0]+"-"+expMatch[1]);
     //   count+=1;
     // }
    }
   }
  else {
    console.log('Not strExp');
   console.log(item);
    count+=1;
  }
});
console.log('count:'+count);
}).catch(err=>console.log('ERROR:'+err));
