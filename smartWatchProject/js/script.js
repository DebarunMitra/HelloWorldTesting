/*
Author: Debarun Mitra
Technology Used:HTML,css,javaScript,Bootstrap,jQuery
Objective: Create a smartwatch which able to show time, check message, play music and has a stopwatch
*/
/*music player content start*/
const songs = [{
    song: "media/Absolute_Night.mp3",
    name: "Absolute_Night",
    singer: "Unknown",
    poster: "media/Poster1.jpg"
  },
  {
    song: "media/In_my_City.mp3",
    name: "In_my_City",
    singer: "Unknown",
    poster: "media/Poster2.jpg"
  },
  {
    song: "media/working.mp3",
    name: "worKing",
    singer: "Unknown",
    poster: "media/Poster3.jpg"
  }
];
const message = [{
    id: 1,
    sender: "Arjun",
    msg: "Hi Debarun, Good morning.",
    color: "#ff6666"
  },
  {
    id: 2,
    sender: "Robin",
    msg: "Hi Debarun, Good morning.",
    color: "#99ff99"
  },
  {
    id: 3,
    sender: "John",
    msg: "Hi Debarun, Good morning.",
    color: "#ff80df"
  }
];
const lapData=new Array();
let songName = document.getElementById("songName");
let singerName = document.getElementById("singerName");
let fillBar = document.getElementById("fill");
let mins = document.getElementById("min");
let secs = document.getElementById("sec");
let cents = document.getElementById("cent");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let lap = document.getElementById("lap"),
  currentTimer = 0,
  interval = 0,
  count = 0,
  timeHour, weekDay,minCount=0,initSec=0;initMin=0,initCents=0,lpCount=1,
  ele = document.querySelector('.msg-content');
ele.innerHTML = ele.innerHTML.replace(/,/g, ',<br/>')
let date = new Date();
let song = new Audio();
let lastUpdateTime = new Date().getTime();
let currentSong = 1;

function msgBox(v) {
  let msgFilter = message.filter((item) => item.id === v).map((v, k) => v).forEach((v, k) => {
    document.getElementById("msgMainDiv").style.display = 'none';
    document.getElementById("msgRead").style.display = 'block';
    document.getElementById("msgName").innerHTML = v.sender;
    document.getElementById("msgIcon").backgroundColor = v.color;
    document.getElemetById("msgContent").innerHTML = v.msg;
  });
}

function getDayTime() {
  let h = date.getHours();
  let min = date.getMinutes();
  let day = date.getDay();
  let ampm, h1, time, p;
  const days = new Array('SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THRUSDAY', 'FRIDAY', 'SATURDAY');
  (h >= 12) ? ampm = 'PM': ampm = 'AM';
  (min < 10) ? min = "0" + min: min = min;
  h = h % 12;
  h1 = h;
  if (h == 0) {
    h = 12;
    p = 0;
  } else if (h < 10) {
    h = h;
    p = h;
  }
  (h1 < 10) ? h1 = "0" + h1: h1 = h1;
  time = h1 + ":" + min + " " + ampm;
  timeHour = time;
  weekDay = days[day];
}

function playSong() {
  song.src = songs[currentSong].song;
  songName.textContent = songs[currentSong].name;
  singerName.textContent = songs[currentSong].singer;
  document.getElementById("poster").src = songs[currentSong].poster;
}
/*music player content stop*/
/*stopwatch start*/
function startTimer() {
  if (!interval) {
    lastUpdateTime = new Date().getTime();
    interval = setInterval(update, 1);
  }
}
function stopTimer() {
  clearInterval(interval);
  interval = 0;
}
function resetTimer() {
  stopTimer();
  currentTimer = 0;
  mins.innerHTML = secs.innerHTML = cents.innerHTML = pad(0);
}

function pad(n) {
  return ('00' + n).substr(-2);
}

function update() {
  let now = new Date().getTime(),
    dt = now - lastUpdateTime;
  currentTimer += dt;
  let time = new Date(currentTimer);
  secs.innerHTML = pad(time.getSeconds());
  cents.innerHTML = pad(Math.floor(time.getMilliseconds() / 10));
  lastUpdateTime = now;
}
function timerLap()
{
  let now = new Date().getTime(),
    dt = now - lastUpdateTime;
  currentTimer += dt;
  let time = new Date(currentTimer);
  let s=time.getSeconds();
  let c=Math.floor(time.getMilliseconds() / 10);
  let op=`${pad(s-initSec)} : ${pad(c-initCents)}`;
  lapData.push({id:lpCount,clicksec:s,clickcents:c,lapsec:pad(s-initSec),lapcent:pad(c-initCents)});
  initSec=s;initCents=c;
  lpCount=lpCount+1;
}
/*stopwatch stop*/
$(document).ready(function() {
  getDayTime();
  $("#startTime").html(timeHour);
  $("#weekDay").html(weekDay);
  $("#content-title > .title").html();
  $("#content-title > .time").html();
  $("#start").click(function() {
    $("#start").css("display", "none");
    $("#stop").css("display", "block");
    startTimer();
  });
  $("#stop").click(function() {
    $("#start").css("display", "block");
    $("#stop").css("display", "none");
    stopTimer();
  });
  $("#reset").click(function() {
    $("#start").css("display", "block");
    $("#stop").css("display", "none");
    document.getElementById("lapCount").innerHTML = 'LAP&nbsp;:&nbsp;' + 0;
    count = 0;
    resetTimer();
  });
  $("#lap").click(function() {
    timerLap();
    count = count + 1;
    document.getElementById("lapCount").innerHTML = 'LAP&nbsp;:&nbsp;' + count;
  });
  /*message start*/
    $("#msgBtn").click(function() {
    $("#startTime").css("display", "none");
    $("#weekDay").css("display", "none");
    $("#msgRow").empty();
    $("#content-title > .title").html("MESSAGE");
    $("#content-title > .time").html(timeHour);
    $("#musicBtn").css("background-color", "#373762");
    $("#msgBtn").css("background-color", "#00FFCC");
    $("#swBtn").css("background-color", "#373762");
    $("#musicMainDiv").css("display", "none");
    $("#musicMainDiv").children().hide();
    $("#bottomBtnNext").css("display", "none");
    $("#main").css("display", "none");
    $("#image").css("display", "none");
    $("#player").css("display", "none");
    $("#swMainDiv").css("display", "none");
    $("#msgMainDiv").css("display", "block");
    $(".message-read").css("display", "none");
    $.each(message, function(index, value) {
      if (index < 3) {
        let row = '<tr>' + '<th scope="row">' +
          '<p class="msg-icon" style="width:30px;background-color:' + value.color + ';">' +
          '<span style="margin-left:30%;">' + value.sender.charAt(0) + '</span>' +
          '</p >' + '</th>' + '<td style="width:100px;">' +
          '<p class="msg-list-name" style="cursor:pointer;" onclick="msgBox(' + value.id + ')">' + value.sender + '</p>' + '</td>' + '</tr>';
        $('#msgRow').append(row).last();
      }
    });
  });
  /*message stop*/
  /*music player start*/
  $("#musicBtn").click(function() {
    $("#startTime").css("display", "none");
    $("#weekDay").css("display", "none");
    $("#content-title > .title").html("MUSIC");
    $("#content-title > .time").html(timeHour);
    $("#musicBtn").css("background-color", "#00FFCC");
    $("#msgBtn").css("background-color", "#373762");
    $("#swBtn").css("background-color", "#373762");
    $("#swMainDiv").css("display", "none");
        $("#bottomBtnNext").css("display", "none");
    $("#msgMainDiv").css("display", "none");
    $("#musicMainDiv").css("display", "block");
    $(".message-read").css("display", "none");
    $("#musicMainDiv").children().show();
    $("#main").css("display", "block");
    $("#image").css("display", "block");
    $("#player").css("display", "block");
    playSong();
  });
  $("#musicPause").click(function() {
    $("#musicPause").css("display", "none");
    $("#musicPlay").css("display", "block");
    song.pause();
  });
  $("#musicPlay").click(function() {
    $("#musicPlay").css("display", "none");
    $("#musicPause").css("display", "block");
    song.play();
  });
  $("#musicPrev").click(function() {
    $("#musicPause").css("display", "none");
    $("#musicPlay").css("display", "block");
    song.pause();
    currentSong--;
    if (currentSong < 0) {
      currentSong = 2;
    }
    $(".img-poster").attr("src", songs[currentSong].poster);
    playSong();
  });
  $("#musicNext").click(function() {
    $("#musicPause").css("display", "none");
    $("#musicPlay").css("display", "block");
    song.pause();
    currentSong++;
    if (currentSong > 2) {
      currentSong = 0;
    }
    $(".img-poster").attr("src", songs[currentSong].poster);
    playSong();
  });

  song.addEventListener('timeupdate', function() {
    let position = song.currentTime / song.duration;
    fillBar.style.width = position * 100 + '%';
  });
  /*music player end*/
  /*stopwatch start*/
  $("#lapRow").empty();
  $("#swBtn").click(function() {
    $("#startTime").css("display", "none");
    $("#weekDay").css("display", "none");
    $("#content-title > .title").html("TIMER");
    $("#content-title > .time").html(timeHour);
    $("#musicBtn").css("background-color", "#373762");
    $("#msgBtn").css("background-color", "#373762");
    $("#swBtn").css("background-color", "#00FFCC");
    $("#musicMainDiv").css("display", "none");
    $("#musicMainDiv").children().hide();
    $("#msgMainDiv").css("display", "none");
    $("#swMainDiv").css("display", "block");
    $("#bottomBtnNext").css("display", "block");
    $(".message-read").css("display", "none");
    $("#main").css("display", "none");
    $("#image").css("display", "none");
    $("#player").css("display", "none");
  });
  $("#bottomBtnNext").click(function() {
      $("#lapRow").empty();
    $("#swMainDiv").css("display", "none");
    $("#bottomBtnNext").css("display", "none");
    $("#bottomBtnBack").css("display", "block");
    $("#lapStoreList").css("display", "block");
    $.each(lapData, function(index, value) {
      if (index < 4) {
        let row = '<tr>'+'<th scope="row" class="lap-text">#'+value.id+'</th>'+'<td class="lap-text">'+value.lapsec+':'+value.lapcent+
        '</td>'+'<td class="lap-text">'+value.clicksec+':'+value.clickcents+'</td>'+'</tr>';
        $('#lapRow').append(row).last();
      }
    });
  });
  $("#bottomBtnBack").click(function() {
    $("#swMainDiv").css("display", "block");
    $("#bottomBtnNext").css("display", "block");
    $("#bottomBtnBack").css("display", "none");
    $("#lapStoreList").css("display", "none");
      $("#lapRow").empty();
  });
  /*stopwatch stop*/
});
