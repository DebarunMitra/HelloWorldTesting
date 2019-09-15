/*
author: Debarun Mitra
name of Application: Greeting App
objective: update the user every day with current date and time, with holisays
*/
var date=new Date();
 var h=date.getHours();
 var min=date.getMinutes();
 var msg_1,msg_2,msg_3,h1,morning,noon,afternoon,night,time,ampm,day,red=6,green=30,blue=60,p=0,imgp1=0,imgp2=0,cday,cmonth;
 day=date.getDay();
 var images=['images/welcome.png','images/yoga_1.png','images/morning.jpg','images/coffee.png','images/noon.jpg','images/working.png','images/break.PNG','images/eve.jpg','images/tea.png','images/sports.jpg','images/dinner.jpg','images/night.png','images/sleep.jpg'];
 var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
 var colors=['Tomato','Orange','DodgerBlue','MediumSeaGreen','SlateBlue','Coral','Green','Indigo','DarkCyan','Crimson','DarkGoldenRod','Olive'];
  cday=date.getDate();
 cmonth=date.getMonth()+1;
  msg_3="Today is "+days[day]+", "+cday+"-"+cmonth+"-"+date.getFullYear();
 let holiday={
     "8":{
         "date":[15,25,26,28,29,31],
         "hday":["Independence Day","App Final Touch","MERN Stack Program","day3","day4","day5"],
         "status":true
     },
     "9":{
         "date":[2,5,17,24],
         "hday":["Day1","Day2","Day3","Day4"],
         "status":true
     }
 };
 //alert(msg_3);
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
morning="Good Morning, time is ";
noon="Good Afrernoon, time is ";
evening="Good Evening, time is ";
night="Good Night, time is ";
if(ampm=='AM' && h<=9)
{
  msg_1=morning+time;
  msg_2='Charge your day with YOGA';
  imgp1=1;  imgp2=3;
}
else if (ampm=='AM' && h<=11)
{
  msg_1=morning+time;
  msg_2='You are late today, Lets take coffee';
      imgp1=0;  imgp2=3;
}
 if (ampm=='PM' && (h==12 || h<=2))
{
  msg_1=noon+time;
  msg_2='Lets complete the works';
  imgp1=3;  imgp2=6;
}
else if (ampm=='PM' && h<=5)
{
  msg_1=noon+time;
  msg_2='Take a break';
    imgp1=4;  imgp2=7;
}
else if (ampm=='PM' && h<=8)
{
  msg_1=evening+time;
  msg_2='Return to home & take your Dinner';
  imgp1=6;  imgp2=9;
}
else if (ampm=='PM' && h<=11)
{
  msg_1=night+time;
  msg_2='Early Bed, Early Rise';
  imgp1=9;  imgp2=11;
}
else if(ampm=='AM' && (h==12 || h<=4))
{
  msg_1=night+time;
  msg_2='Time to sleep';
  imgp1=9;  imgp2=12;
}
document.getElementById('msg1').innerHTML=msg_1;
document.getElementById('msg2').innerHTML=msg_2;
document.getElementById('today').innerHTML=msg_3;
document.getElementById('msg1').style.color=colors[p];
document.getElementById('msg2').style.color=colors[p+1];
document.getElementById('today').style.color=colors[p+2];
//alert(msg_1);
//alert(msg_2);
//alert(ampm);
//image slider start
var i=-1;
function changeImage()
     {
      // alert(i);
           if(i<imgp2){
           i++;
           }
           else
           {
             i=imgp1+1;
           }
           document.getElementById('slider').src=images[i];
           if(i==0 && imgp1!=1 && imgp1!=0)
           {
                i=imgp1;
           }
           else if(i==0 && imgp1==1)
           {
               i=0;
           }
           else if(i==0 && imgp1==0)
           {
               i=1;
           }
           else if(i==imgp2)
           {
               i=-1;
           }
      }
        setInterval(changeImage,2000);

        function holidayFunction()
        {
            //alert("1");
            var ishday=document.getElementById('ishdayhead');
            var uphday=document.getElementById('uphdayhead');
            var hdm=holiday[cmonth];
            var listHolyDay="";
            if(hdm)
            {
                if(hdm.status)
                {
                    for(var i=0;i<hdm.date.length;i++)
                    {

                        if(hdm.date[i]==cday)
                        {
                          //  alert("is");
                           ishday.style.display='block';
                           listHolyDay=hdm.hday[i];
                          break;
                        }
                                else if(hdm.date[i]>cday)
                                {
                                   // alert("up");
                                       uphday.style.display='block';
                                       listHolyDay=listHolyDay + hdm.date[i]+"-"+cmonth+"-"+date.getFullYear()+", "+hdm.hday[i]+"<br>";
                                    //   document.getElementById('hdmsg').innerHTML=hdm.date[i]+"-"+cmonth+"-"+date.getFullYear()+", "+hdm.hday[i];
                                   // alert(listHolyDay);
                                }
                                else if(hdm.date[i]==hdm.date[hdm.date.length-1])
                                {
                                    listHolyDay="No Holiday in this month";
                                }
                    }
                     document.getElementById('ishdmsg').innerHTML=listHolyDay;
                }
            }
            else
            {
                alert("no month");
            }
        }
