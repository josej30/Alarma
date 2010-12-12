/* Menu animations */
var songMenu = "hidden";
var alarmMenu = "hidden";

function toggleSongMenu() {
    if (songMenu=="hidden") {
	$("#alarmMenu").fadeOut('fast');
	alarmMenu = "hidden";
	$("#menuSong").delay(200).fadeIn('fast');
	songMenu = "shown";
    }
    else {
	$("#menuSong").fadeOut('fast');
	songMenu = "hidden";
    }
}

function toggleAlarmMenu() {
    if (alarmMenu=="hidden") {
	$("#menuSong").fadeOut('fast');
	songMenu = "hidden";
	$("#alarmMenu").delay(200).fadeIn('fast');
	alarmMenu = "shown";
    }
    else {
	$("#alarmMenu").fadeOut('fast');
	alarmMenu = "hidden";
    }
}
/* End of Menu animations */


var c = 0;

function UpdateClock() {
   if(c) {
      clearTimeout(c);
      c = 0;
   }
   var tDate = new Date();
   c = setTimeout("UpdateClock()", 1000);

   var hours = tDate.getHours();
   var minutes = tDate.getMinutes();
   var seconds = tDate.getSeconds();

   if (seconds<10)
      seconds = "0" + seconds;

   if (minutes<10)
      minutes = "0" + minutes;

   anchor = document.getElementById('time');
   anchor.innerHTML = "" + hours + ":" + minutes + ":" + seconds;

   checkAlarm();
}

function StartClock() {
   c = setTimeout("UpdateClock()", 500);
}

function KillClock() {
   if(c) {
      clearTimeout(c);
      c  = 0;
   }
}

function checkAlarm(){
   var tDate = new Date();
   var hours = tDate.getHours();
   var minutes = tDate.getMinutes();
   var seconds = tDate.getSeconds();

   var alarm = localStorage.getItem('alarm');

   if (seconds<10)
      seconds = "0" + seconds;

   if (minutes<10)
      minutes = "0" + minutes;

   now = ""+hours+minutes+seconds;

   if (alarm==now){
       alert("Alarm!!!!!");
   }

}

function setAlarm(){
    localStorage.setItem('alarm','140900'); 
}
