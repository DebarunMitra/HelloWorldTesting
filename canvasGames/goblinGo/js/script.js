// Author: Debarun Mitra
// Technology used: HTML, CSS, JavaScript, JQuery, Bootstrap
// objective: Create a responsive game using HTML canvas, CSS, JavaScript, jQuery,Bootstrap
class Player{
  constructor(name,type,x,y)
  {
    this.name=name;
    this.type=type;
    this.x=x;
    this.y=y;
    this.inputKey=(type ==="player-1")?[65,68,87,83]:[37,39,38,40];
  }
  putPlayer(canvasCtx,a,b){
     let p=new Image();
     p.src=(this.type==='player-1')?'images/player-1.png':'images/player-2.png';
     p.onload=()=>{
       canvasCtx.drawImage(p,a,b);
     }
   }
}
class Goblin{
  constructor(type,x,y)
  {
    this.type=type;
    this.x=x;
    this.y=y;
  }
  putGoblin(gCtx,gx,gy)
  {
    let g=new Image();
     gx=(gx/2); gy=(gy/2);
    g.src='images/goblin.png';
    g.onload=()=>{
  //    console.log(gx+' , '+gy);
    gCtx.drawImage(g,gx,gy);
    }
  }
}
class Game{
    constructor(canvas,width, height){
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        canvas.width = width;
        canvas.height = height;
        this.players=[];
        this.goblin=[];
        this.ctx = canvas.getContext('2d');
        document.addEventListener('keydown',this.keyPress.bind(this));
    }
    makeBase(){
      let ground=new Image();
      ground.src='images/playGround.png';
      ground.onload=()=>{
      this.ctx.drawImage(ground,0,0);
      }
    }
    createPlayers(name,type,x,y){
    //  let players=[];
      let dx=(type==='player-1')?(Math.floor(Math.random()*(x/3)/2)):(Math.floor(Math.random()*(x-((x/3)/2))));
      let dy=(type==='player-1')?(Math.floor(Math.random()*(y/3)/2)):(Math.floor(Math.random()*(y-((y/3)/2))));
      let gplayer=new Player(name,type,dx,dy);
      gplayer.putPlayer(this.ctx,dx,dy);
      this.players.push(gplayer);
      //return this.players;
    }
     createGoblin(w,h){
       let gob=new Goblin('goblin',w,h);
       gob.putGoblin(this.ctx,w,h);
       this.goblin[0]=gob;
     }
    keyPress(e){
      // console.log(this.players);
        this.makeBase();
        //this.createGoblin(this.width,this.height);
        this.players.filter((data) =>(data.inputKey.includes(e.keyCode))).map((mainItem) =>
         {
           (mainItem.inputKey[0]===e.keyCode)?mainItem.x=mainItem.x-10:
           (mainItem.inputKey[1]===e.keyCode)?mainItem.x=mainItem.x+10:
           (mainItem.inputKey[2]===e.keyCode)?mainItem.y=mainItem.y-10:
           (mainItem.inputKey[3]===e.keyCode)?mainItem.y=mainItem.y+10:
           false;
           let movePlayer1=new Player(mainItem.name,mainItem.type);
           movePlayer1.putPlayer(this.ctx,mainItem.x,mainItem.y);
           let p2=this.players.filter((item) =>(item.type!==mainItem.type)).map((per) =>{
           let movePlayer2=new Player(per.name,per.type);
           movePlayer2.putPlayer(this.ctx,per.x,per.y);
           let vill=new Goblin('goblin',this.width,this.height);
           vill.putGoblin(this.ctx,this.width,this.height);
         });
          // this.createGoblin();

         this.positionCheck();

    });
  }
  positionCheck()
  {
    console.log(this.goblin[0]);
    console.log(this.players);
  }
}


let goblinGO=document.getElementById('myCanvas');
let game=new Game(goblinGO,550,550);
game.makeBase();
game.createPlayers('alpha','player-1',550,550);
game.createPlayers('beta','player-2',550,550);
game.createGoblin(550,550);
game.positionCheck();
//game.play();
//console.log(players);
