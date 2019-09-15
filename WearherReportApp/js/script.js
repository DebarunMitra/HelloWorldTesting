/*
author:Debarun Mitra
application name:Weather Report application
objective: Update the user with current weather according to there location
*/
//alert('content');
let date=new Date();
let h=date.getHours();
let min=date.getMinutes();
let day=date.getDay();
let ampm,h1;
const days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
if(h>=12)
{
  ampm='PM';
}
else {
  ampm='AM';
}
h=h%12;
if(h==0)
{
    h=12;
    p=0;
}
else if(h<10)
{
  h=h;
  p=h;
}
h1=h;
if(min<10)
{
    min="0"+min;
}
else
{
    min=min;
}
if(h1<10)
{
    h1="0"+h1;
}
else
{
    h1=h1;
}
//alert(h);
//alert(ampm);
time=h1+":"+min+" "+ampm;
//alert(time);
//alert(days[day]);
const city=[
  {name:'Kolkata',state:'West Bengal',high:25,low:35},
  {name:'Bengaluru',state:'Karnataka',high:29,low:19},
  {name:'Hyderabad',state:'Andhra Pradesh',high:32,low:21},
  {name:'Itanagar',state:'Arunachal Pradesh',high:33,low:10},
  {name:'Dispur',state:'Assam',high:32,low:12},
  {name:'Patna',state:'Bihar',high:33,low:12},
  {name:'Panaji',state:'Goa',high:34,low:12},
  {name:'Gandhinagar',state:'Gujarat',high:32,low:23},
  {name:'Haryana',state:'Chandigarh',high:32,low:33},
  {name:'Shimla',state:'Himachal Pradesh',high:33,low:32},
  {name:'Ranchi',state:'Jharkhand',high:34,low:32},
  {name:'Thiruvananthapuram',state:'Kerala',high:32,low:33},
  {name:'	Bhopal',state:'Madhya Pradesh',high:33,low:32},
  {name:'Mumbai',state:'Maharashtra',high:32,low:10},
  {name:'Bhubaneswar',state:'Odisha',high:20,low:34},
  {name:'Jaipur',state:'Rajasthan',high:32,low:38},
  {name:'Chennai',state:'Tamil Nadu',high:33,low:24},
  {name:'Aizawl',state:'Mizoram',high:25,low:32},
  {name:'Delhi',state:'Delhi',high:35,low:40},
  {name:'Chandigarh',state:'Chandigarh',high:30,low:17},
  {name:'Chandigarh',state:'Chandigarh',high:33,low:19}
];
let t=35;
document.getElementById('city_name').innerHTML=city[0].name+", "+city[0].state;
document.getElementById('day_time').innerHTML=days[day]+", "+time;
document.getElementById('temp').innerHTML=t;
function temparatureConverter(value)
{
  let c=document.getElementById('cel');
  let f=document.getElementById('fahr');
  let temp=document.getElementById('temp').innerHTML;
  if(value===1)
  {
    document.getElementById('temp').innerHTML=(5*(temp-32))/9;
    c.style.color='blue';
    f.style.color='black';
  }
  else if(value===2)
    {
      document.getElementById('temp').innerHTML=((temp*9)/5)+32;
      c.style.color='black';
      f.style.color='blue';
    }
}
