//alert("connected");
class Weather
{
  getDayTime(date)
  {
    let h=date.getHours();
    let min=date.getMinutes();
    let day=date.getDay();
    let ampm,h1=h,time,p;
    const days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    (h>=12)?ampm='PM':ampm='AM';
    (min<10)?min="0"+min:min=min;
    (h1<10)?h1="0"+h1:h1=h1;
    h=h%12;
    if(h==0){h=12;p=0;}
    else if(h<10){h=h;p=h;}
    time=days[day]+", "+h1+":"+min+" "+ampm;
    return time;
  }

}
Weather.prototype.getTemparature=function(){
  //let value=document.getElementById('clicker').innerHTML;
let valueC=document.getElementById('cel').innerHTML;
let valueF=document.getElementById('fahr').innerHTML;
//  console.log(typeof(valueC));
  //console.log(valueF);
 let ipChecker=document.getElementById('inputChecker').value;
  let intValCh=parseInt(ipChecker);
  //console.log(intValCh);
  let c=document.getElementById('cel');
  let f=document.getElementById('fahr');
  let temp=document.getElementById('temp').innerHTM;
  if(valueC==='℃' && intValCh===2)
  {
    //console.log(1);
    document.getElementById('inputChecker').value=2;
    let num=(5*(temp-32))/9;
    document.getElementById('temp').innerHTML=num.toFixed(0);
    c.style.color='blue';
    f.style.color='black';
    document.getElementById('inputChecker').value=1;
  }
  else if(valueF==='℉' && intValCh===1)
    {
  console.log(2);
   document.getElementById('inputChecker').value=2;
    let num=((temp*9)/5)+32;
      document.getElementById('temp').innerHTML=num.toFixed(0);
      c.style.color='black';
      f.style.color='blue';
    }
}
Weather.prototype.getCityState=function(){
  const searchInput=document.getElementById('inputSearch');
  const suggVal=document.getElementById('suggestedVal');
  const cityAndState=document.getElementById('cityNname');
  const value=searchInput.value;
  suggVal.innerHTML='';
  const suggestValue=city.filter(function(cities){
    return cities.name.toLowerCase().startsWith(value);
 });
 suggestValue.forEach(function(suggested){
 //  console.log(suggested.name);
   const div=document.createElement('div');
   div.innerHTML=suggested.name+", "+suggested.state;
   div.addEventListener('click',function(){
     //alert(suggested.name+", "+suggested.state);
     searchInput.value=suggested.name+", "+suggested.state;
     document.getElementById('cityName').innerHTML=suggested.name+", "+suggested.state;
     document.getElementById('temp').innerHTML=suggested.temp;
     document.getElementById('weatherImg').src=suggested.weather;
     document.getElementById('cel').style.color='blue';
     document.getElementById('fahr').style.color='black';
     document.getElementById('report').innerHTML=suggested.report;
     suggVal.innerHTML='';
   });
   suggVal.appendChild(div);
});
if(value=='')
{
  suggVal.innerHTML='';
}
 //return suggestValue;
  //console.log(suggestValue);
}
const city=[
  {name:'Kolkata',state:'West Bengal',temp:30,weather:'./images/thunder_storm.png',report:'Thunder Storm'},
  {name:'Bengaluru',state:'Karnataka',temp:22,weather:'./images/clouds.png',report:'Clouds'},
  {name:'Hyderabad',state:'Andhra Pradesh',temp:25,weather:'./images/clouds.png',report:'Clouds'},
  {name:'Itanagar',state:'Arunachal Pradesh',temp:20,weather:'./images/storm.png',report:'Storm'},
  {name:'Dispur',state:'Assam',temp:20,weather:'./images/clouds.png',report:'Clouds'},
  {name:'Patna',state:'Bihar',temp:35,weather:'./images/sunny.png',report:'Sunny'},
  {name:'Panaji',state:'Goa',temp:28,weather:'./images/rain.png',report:'Rain'},
  {name:'Gandhinagar',state:'Gujarat',temp:35,weather:'./images/sunny-cloudy.png',report:'Sunny Cloudy'},
  {name:'Haryana',state:'Chandigarh',temp:30,weather:'./images/thunder_storm.png',report:'Thunder Storm'},
  {name:'Shimla',state:'Himachal Pradesh',temp:15,weather:'./images/cold.jpg',report:'Cold'},
  {name:'Ranchi',state:'Jharkhand',temp:32,weather:'./images/thunder_storm.png',report:'Thunder Storm'},
  {name:'Thiruvananthapuram',state:'Kerala',temp:25,weather:'./images/rain.png',report:'Rain'},
  {name:'	Bhopal',state:'Madhya Pradesh',temp:30,weather:'./images/thunder_storm.png',report:'Thunder Storm'},
  {name:'Mumbai',state:'Maharashtra',temp:36,weather:'./images/sunny.png',report:'Sunny'},
  {name:'Bhubaneswar',state:'Odisha',temp:28,weather:'./images/clouds.png',report:'Clouds'},
  {name:'Jaipur',state:'Rajasthan',temp:38,weather:'./images/sunny.png',report:'Sunny'},
  {name:'Chennai',state:'Tamil Nadu',temp:32,weather:'./images/sunny-cloudy.png',report:'Sunny Cloudy'},
  {name:'Aizawl',state:'Mizoram',temp:25,weather:'./images/thunder_storm.png',report:'Thunder Storm'},
  {name:'Delhi',state:'Delhi',temp:28,weather:'./images/sunny.png',report:'Sunny'},
  {name:'Chandigarh',state:'Chandigarh',temp:25,weather:'./images/thunder_storm.png',report:'Thunder Storm'},
  {name:'Coimbatore',state:'Tamil Nadu',temp:25,weather:'./images/sunny-cloudy.png',report:'Sunny Cloudy'}
];
let d=new Date();
const w=new Weather();
console.log(w.getDayTime(d));

document.getElementById('cel').addEventListener('click',w.getTemparature, false);
document.getElementById('fahr').addEventListener('click',w.getTemparature, false);
/*autocomplete start*/
const searchInput=document.getElementById('inputSearch');
const suggVal=document.getElementById('suggestedVal');
const cityAndState=document.getElementById('cityNname');
let res=searchInput.addEventListener('keyup',w.getCityState,false);
console.log(res);
/*autocomplete end*/
