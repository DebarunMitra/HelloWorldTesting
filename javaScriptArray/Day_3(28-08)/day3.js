const players1 = ["Virat","Sachin","Ganguly"];
console.log(players1-1);
const players2=[
  {name:'Virat',rank:5},
    {name:'Sachin',rank:10},
      {name:'Ganguly',rank:15}
];
/*console.log(players1);
//console.log(players1.indexOf("Ganguly"));
//console.log(players2.indexOf("Ganguly"));
console.log(players2);
*/
/*let findPlayer=players2.filter(function(k,v){
  if(v.name==='Sachin')
  {
    return(v.name);
  //  console.log(v.name);
  }
});*/

//ES5 standard
/*for(let i=0;i<players2.length;i++)
{
  if(players2[i].name==="Sachin")
  {
    console.log(players2[i].name);
  }
}*/

//find without => function
/*let player=players2.find(function(player){
  if(player.name==="Ganguly")
  {
    return true;
  }
});
console.log(player);*/


//find with => function
/*let player=players2.find((player)=>{
  if(player.name==="Ganguly")
  {
    return true;
  }
});
console.log(player);*/


//shift & unshift

/*players1.shift("Virat");
players1.unshift("Dhoni");
//console.log(players1);
console.log(players1);*/
