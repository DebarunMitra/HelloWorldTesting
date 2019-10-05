// GoblinGo Game
// Author: Aadesh Nichite
// It is a simple game application

class PlayerName{
    constructor(player1,player2) {
      this.player1 = player1;
      this.player2 = player2;
      let score1;
      let score2;
  //    console.log(this.player1.value,this.player2.value);
    sessionStorage.setItem("player1Name",this.player1.value);
    sessionStorage.setItem("player2Name",this.player2.value);
    sessionStorage.setItem("player1Score",0);
    sessionStorage.setItem("player2Score",0);
    }
  }
  function init()
  {
    let player1=document.getElementById('player1');
    let player2=document.getElementById('player2');
    player = new PlayerName(player1,player2);
    if(player1.value!=='' && player2.value!=='')
    {
    location.replace('game.html');
    }
  }
  function init1()
  {
    document.getElementById("p1score").innerHTML=sessionStorage.getItem("player1Score");
    document.getElementById("p2score").innerHTML=sessionStorage.getItem("player2Score");
        if(sessionStorage.getItem("player1Score")>sessionStorage.getItem("player2Score"))
        {
          document.getElementById("playerWin").innerHTML=sessionStorage.getItem("player1Name");
        }
        else {
          document.getElementById("playerWin").innerHTML=sessionStorage.getItem("player2Name");
        }
  }
  function end(){
    sessionStorage.clear();
    location.replace('index.html');
  }
