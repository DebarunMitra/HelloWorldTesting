// Author: Debarun Mitra
// Application Name: JobSearchOo
// Objective: Create a front end application for job search
class Jobsearch{
  constructor(loc,exp,skill,cname){
    this.loc=loc;
    this.exp=exp;
    this.skill=skill;
    this.cname=cname;
  }
  getSearchResult(location,skills,experience,cityName){
    let count=0,regexLoc,regexSkill,regexCname,regexExp=/\d+/g;
    console.log(location+','+skills+','+experience+','+cityName);
    (skills==='')?regexSkill ='.*?':regexSkill = new RegExp("\\b(?:"+skills+")\\b", "gi");
    (location==='')?regexLoc = '.*?':regexLoc = new RegExp("\\b(?:"+location+")\\b", "gi");
    (cityName==='')?regexCname = '.*?':regexCname = new RegExp("\\b(?:"+cityName+")\\b", "gi");
    console.log(regexLoc+','+regexExp+','+regexSkill+','+regexCname);
  //   let job=data.filter(ele=>ele.skills.match(regexSkill) && ele.location.match(regexLoc) && ele.companyname.match(regexCname)).map((item)=>{
  //   if(strExp!==undefined){
  //     console.log('strExp');
  //     let expMatch=item.experience.match(regexExp);
  //     let date=new Date();
  //     let enddate=item.enddate.split(/,| /);
  //     if(expMatch!==null){
  //       if(expMatch[0]!==undefined && parseInt(expMatch[0])<=strExp && parseInt(expMatch[0])!==0 && enddate!==''){
  //         if(expMatch[1]!==undefined && parseInt(expMatch[1])>=strExp){
  //             //console.log('expMatch[1]!==undefined && parseInt(expMatch[1])>=strExp');
  //             console.log(item);
  //             console.log(expMatch[0]+"-"+expMatch[1]);
  //             let d=parseInt(enddate[1]);
  //             console.log(d+"-"+monthNo[enddate[0]]+'-'+enddate[0]);
  //             count+=1;
  //         }
  //         else if(expMatch[1]!==undefined && parseInt(expMatch[1])===strExp){
  //           //console.log('!!expMatch[1]!==undefined && parseInt(expMatch[1])>=strExp');
  //           console.log(item);
  //           console.log(expMatch[0]+"-"+expMatch[1]);
  //           let d=parseInt(enddate[1]);
  //           console.log(d+"-"+monthNo[enddate[0]]+'-'+enddate[0]);
  //           count+=1;
  //         }
  //       }
  //      //  else if(parseInt(expMatch[0])===0){
  //      //    console.log('parseInt(expMatch[1])===strExp');
  //      //   console.log(item);
  //      //   console.log(expMatch[0]+"-"+expMatch[1]);
  //      //   count+=1;
  //      // }
  //     }
  //    }
  //   else {
  //     console.log('Not strExp');
  //    console.log(item);
  //     count+=1;
  //   }
  // });
  // console.log('count:'+count);
  // }).catch(err=>console.log('ERROR:'+err));
    return new Jobsearch(location,experience,skills,cityName);
  }
  getJobDetails(){
    console.log(this.loc+','+this.exp+','+this.skill+','+this.cname);
  }
}
// Jobsearch.prototype.setJobParam=function(){
//   let loc=document.getElementById('loc').value;
//   let exp=document.getElementById('exp').value;
//   let skill=document.getElementById('skill').value;
//   let cname=document.getElementById('cname').value;
//   return new Jobsearch(loc,exp,skill,cname);
// }
const js=new Jobsearch();
let search=document.getElementById('search');
  let loc=document.getElementById('loc');
  let exp=document.getElementById('exp');
  let skill=document.getElementById('skill');
  let cname=document.getElementById('cname');
search.addEventListener('click',function(){
  js.getSearchResult(loc.value,skill.value,exp.value,cname.value);
  const jso=new Jobsearch();
  jso.getJobDetails();
},false);
