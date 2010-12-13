function checkAlarm(now){
    var temp = localStorage.getItem('alarm-numAlarm');
    n = parseInt(temp);
    for (var i = 1; i <= n; i++){
	temp = localStorage.getItem('alarm-'+i);
	if (temp==now)
	    control();
    }
}

function setAlarm(){

    //localStorage.removeItem('alarm-numAlarm');

    var h = "" + (document.getElementById("setHour").selectedIndex+1);
    var m = "" + (document.getElementById("setMinutes").selectedIndex);
    var x = "" + (document.getElementById("set12").selectedIndex);
    if (m<10)
	m=""+0+m;
    if (x=="1")
	h = ""+(parseInt(h)+12);
    
    when = ""+h+m;

    var a = localStorage.getItem('alarm-numAlarm');

    if (a==null) {
	localStorage.setItem('alarm-numAlarm', '1');
	a = '1';
    }
    else{
	a = parseInt(a)+1;
	localStorage.setItem('alarm-numAlarm', ""+a)
    }

    localStorage.setItem('alarm-'+a,when);

    alert("Setting: Alarm #"+a+" at "+when);

}

function removeAlarm() {
    var alarms = document.getElementById("alarmList");
    var n = localStorage.getItem('alarm-numAlarm');
    for(i=0;i<n;i++) {
	if(alarms.options[i].selected){
	    alarms.remove(i);
	    alert((i+1)+" "+localStorage.getItem('alarm-'+(i+1)));
	    localStorage.removeItem('alarm-'+(i+1));
	    //	    var a = parseInt(n)-1;
	    //	    localStorage.setItem('alarm-numAlarm', ""+a);
	    return;
	}
    }
}

// Loading all initial parameters
function loadAll() {
    //localStorage.removeItem('alarm-numAlarm');
    var temp = localStorage.getItem('alarm-numAlarm');
    n = parseInt(temp);
    for (var i = 1; i <= n; i++){
	temp = localStorage.getItem('alarm-'+i);
	if (temp!=null) {
	    var m = temp.substring(temp.length-2,temp.length);
	    var h = temp.substring(0,temp.length-2);
	    var x = "AM";
	    if (h>12) {
		x = "PM";
		h = ""+(parseInt(h)-12);
	    }
	    var alarms = document.getElementById("alarmList");
	    alarms.options[alarms.length] = 
		new Option(h+":"+m+" "+x, i);
	}
    }
}


// Activate the alarm
function control() {
    document.getElementById("song").play();
}
