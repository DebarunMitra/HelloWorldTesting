/*
author:Debarun Mitra
application name:Weather Report application
objective: Update the user with current weather according to there location
file description: JavaScript file of Weathrt Application
*/
class Weather
{
  constructor(key){
    this.key=key;
  }
  getDayTime(date)
  {
    let h=date.getHours();
    let min=date.getMinutes();
    let day=date.getDay();
    let ampm,h1,time,p;
    const days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    (h>=12)?ampm='PM':ampm='AM';
    (min<10)?min="0"+min:min=min;
    h=h%12;h1=h;
    if(h==0){h1=12;p=0;}
    else if(h<10){h1=h;p=h;}
    (h1<10)?h1="0"+h1:h1=h1;
    time=days[day]+", "+h1+":"+min+" "+ampm;
    return time;
  }
  suggestCity(){
    const searchInput=document.getElementById('inputSearch');
    const suggVal=document.getElementById('suggestedVal');
    const cityAndState=document.getElementById('cityNname');
    const valCity=searchInput.value;
    suggVal.innerHTML=' ';
    if(valCity)
    {
      let cityData=fetch("cityList.json").then(response => response.json()).then(json =>json).then(value=>{
      suggVal.innerHTML=' ';
        let nameCity=value.filter((item)=>item.name.toLowerCase().startsWith(valCity)).slice(0, 5).map((item)=>item);
          nameCity.map((item) => {
            //console.log(item.name+', '+item.id+', '+item.country);
            const div=document.createElement('div');
             div.innerHTML=item.name+', '+item.country;
             div.addEventListener('click',function(){
             searchInput.value=item.name;
             suggVal.innerHTML=' ';
             searchInput.innerHTML=' ';
           });
           suggVal.appendChild(div);
         });
         (value===' ')?suggVal.innerHTML=' ':false;
       }).catch((err) => {
         console.log('Error: '+err);
       });
     }
}
  getWeather(cid){
    this.cid=cid;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+this.cid+'&appid='+this.key+'')
    .then(res=>res.json())
    .then(data=>{
      let currTime=new Date();
      document.getElementById('errmsg').innerHTML=' ';
      document.getElementById('cityName').innerHTML=data['name']+", "+data.sys.country;
      document.getElementById('dayTime').innerHTML=weatherObj.getDayTime(dayTime);
      document.getElementById('temp').innerHTML=(data.main.temp-273.15).toFixed(0);
      document.getElementById('inputChecker').value=1;
      document.getElementById('report').innerHTML=data.weather[0].main+', '+data.weather[0].description;
      document.getElementById('wicon').src='http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png';
      document.getElementById('dayTime').innerHTML=this.getDayTime(currTime);
      document.getElementById('cel').style.color='#ff662e';
      document.getElementById('fahr').style.color='#000000';
    })
    .catch(err=>{
      console.log('Please Enter Proper City Name');
      document.getElementById('errmsg').innerHTML='404 Error! City not found :(';
    })
  }
}
Weather.prototype.getTempCel=function(){
let valueC=document.getElementById('cel').innerHTML;
 let ipChecker=document.getElementById('inputChecker').value;
  let intValCh=parseInt(ipChecker);
  let temp=document.getElementById('temp').innerHTML;
  if(valueC==='℃' && intValCh===2)
  {
    let num=(5*(temp-32))/9;
    document.getElementById('temp').innerHTML=num.toFixed(0);
    document.getElementById('cel').style.color='#ff662e';
    document.getElementById('fahr').style.color='#000000';
    document.getElementById('inputChecker').value=1;
  }
}
Weather.prototype.getTempFahr=function(){
let valueF=document.getElementById('fahr').innerHTML;
 let ipChecker=document.getElementById('inputChecker').value;
  let intValCh=parseInt(ipChecker);
  let temp=document.getElementById('temp').innerHTML;
  if(valueF==='℉' && intValCh===1)
    {
    let num=((temp*9)/5)+32;
      document.getElementById('temp').innerHTML=num.toFixed(0);
      document.getElementById('cel').style.color='#000000';
      document.getElementById('fahr').style.color='#ff662e';
      document.getElementById('inputChecker').value=2;
    }
}
const city=[
  {name:'Kolkata',state:'West Bengal',temp:30,weather:'./images/rain.png',report:'Sunny Cloudy'},
  {name:'Bengaluru',state:'Karnataka',temp:22,weather:'./images/clouds.png',report:'Partly Cloudy'},
  {name:'Hyderabad',state:'Andhra Pradesh',temp:25,weather:'./images/cloudsLeter.png',report:'Dark Cloudy'},
  {name:'Itanagar',state:'Arunachal Pradesh',temp:20,weather:'./images/storm.png',report:'Heavy Storm'},
  {name:'Dispur',state:'Assam',temp:20,weather:'./images/clouds.png',report:'Partly Clouds'},
  {name:'Patna',state:'Bihar',temp:35,weather:'./images/sunny.png',report:'Sunny'},
  {name:'Panaji',state:'Goa',temp:28,weather:'./images/rain.png',report:'Heavy Rain'},
  {name:'Gandhinagar',state:'Gujarat',temp:35,weather:'./images/sunnyCloudy.png',report:'Sunny Cloudy'},
  {name:'Haryana',state:'Chandigarh',temp:30,weather:'./images/thunderStorm.png',report:'Thunder Storm'},
  {name:'Shimla',state:'Himachal Pradesh',temp:10,weather:'./images/cold.jpg',report:'Heavy Cold'},
  {name:'Ranchi',state:'Jharkhand',temp:32,weather:'./images/thunderStorm.png',report:'Thunder Storm'},
  {name:'Thiruvananthapuram',state:'Kerala',temp:25,weather:'./images/rain.png',report:'Heavy Rain'},
  {name:'	Bhopal',state:'Madhya Pradesh',temp:30,weather:'./images/thunderStorm.png',report:'Thunder Storm'},
  {name:'Mumbai',state:'Maharashtra',temp:36,weather:'./images/sunny.png',report:'Sunny'},
  {name:'Bhubaneswar',state:'Odisha',temp:28,weather:'./images/clouds.png',report:'Partly Cloudy'},
  {name:'Jaipur',state:'Rajasthan',temp:38,weather:'./images/sunny.png',report:'Sunny'},
  {name:'Chennai',state:'Tamil Nadu',temp:32,weather:'./images/sunnyCloudy.png',report:'Sunny Cloudy'},
  {name:'Aizawl',state:'Mizoram',temp:25,weather:'./images/thunderStorm.png',report:'Thunder Storm'},
  {name:'Delhi',state:'Delhi',temp:28,weather:'./images/sunny.png',report:'Sunny'},
  {name:'Chandigarh',state:'Chandigarh',temp:25,weather:'./images/thunderStorm.png',report:'Thunder Storm'},
  {name:'Coimbatore',state:'Tamil Nadu',temp:25,weather:'./images/sunnyCloudy.png',report:'Sunny Cloudy'}
];
let dayTime=new Date();
let apikey='47a28cd3e8d67eaf08352518a5ebdd02';
const weatherObj=new Weather(apikey);
/*initial data start*/
document.getElementById('cityName').innerHTML=city[0].name+", "+city[0].state;
document.getElementById('dayTime').innerHTML="Wednesday, 1:00PM";
document.getElementById('temp').innerHTML=city[0].temp;
document.getElementById('inputChecker').value=1;
document.getElementById('report').innerHTML=city[0].report;
document.getElementById('dayTime').innerHTML=weatherObj.getDayTime(dayTime);
/*initial data stop*/
document.getElementById('btnSearch').addEventListener('click',()=>{
  let inpVal=document.getElementById('inputSearch').value;
  weatherObj.getWeather(inpVal);
},false);
/*temperature convert start*/
document.getElementById('cel').addEventListener('click',weatherObj.getTempCel, false);
document.getElementById('fahr').addEventListener('click',weatherObj.getTempFahr, false);
/*temperature convert stop*/
/*autocomplete start*/
const searchInput=document.getElementById('inputSearch');
searchInput.addEventListener('keyup',weatherObj.suggestCity,false);
/*autocomplete end*/
