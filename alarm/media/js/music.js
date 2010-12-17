function checkAlarm(now){
    var temp = localStorage.getItem('alarm-numAlarm');
    n = parseInt(temp);
    for (var i = 1; i <= n; i++){
	temp = localStorage.getItem('alarm-'+i);
	if (temp.length==3)
	    temp = "0"+temp;
	if (temp==now)
	    control();
    }
}

function setAlarm(){

    var a = localStorage.getItem('alarm-numAlarm');

    var h = "" + (document.getElementById("setHour").selectedIndex+1);
    var m = "" + (document.getElementById("setMinutes").selectedIndex);
    var x = "" + (document.getElementById("set12").selectedIndex);
    if (m<10)
	m=""+0+m;

    var mm = "";
    if (x==0)
	mm = "AM";
    else
	mm = "PM";
    var alarms = document.getElementById("alarmList");
    alarms.options[alarms.length] = 
	new Option(h+":"+m+" "+mm, a);

    if (x=="1")
	h = ""+(parseInt(h)+12);
    
    when = ""+h+m;

    if (a==null) {
	localStorage.setItem('alarm-numAlarm', '1');
	a = '1';
    }
    else{
	a = parseInt(a)+1;
	localStorage.setItem('alarm-numAlarm', ""+a)
    }

    localStorage.setItem('alarm-'+a,when);

    document.getElementById("alarmlist").style.display="block";

    alert("Setting: Alarm #"+a+" at "+when);

}

function removeAlarm() {
    var alarms = document.getElementById("alarmList");
    var ntemp = localStorage.getItem("alarm-numAlarm");
    var n = parseInt(ntemp);
    var found = 0;

    // Saving the alarms in a temporary section
    for(i=1;i<n+1;i++) {
	if(alarms.options[i-1].selected){
	    i=i+1;
	    found = 1;
	}
	if (found==0)
	    localStorage.setItem('alarm-temp-'+i,localStorage.getItem('alarm-'+i));
	else
	    localStorage.setItem('alarm-temp-'+(i-1),localStorage.getItem('alarm-'+i));	
    }

    // Removing all alarms and cleaning the select list
    for(i=alarms.options.length-1;i>=0;i--){
	alarms.remove(i);
	localStorage.removeItem('alarm-'+i);
    }
    
    // Setting the new alarms quantity
    var a = parseInt(n)-1;
    localStorage.setItem('alarm-numAlarm', ""+a);

    // Building the new alarms list
    for (i=0;i<a;i++){
	var temp = localStorage.getItem('alarm-temp-'+(i+1));
	var m = temp.substring(temp.length-2,temp.length);
	var h = temp.substring(0,temp.length-2);
	var x = "AM";
	if (h>12) {
	    x = "PM";
	    h = ""+(parseInt(h)-12);
	}
	alarms.options[i] = new Option(h+":"+m+" "+x, i);
	localStorage.setItem('alarm-'+(i+1),temp);	
    }

    if (a == 0)
	document.getElementById("alarmlist").style.display="none";	

}

function removeAllAlarms() {
    var alarms = document.getElementById("alarmList");
    var ntemp = localStorage.getItem("alarm-numAlarm");
    var n = parseInt(ntemp);
    var found = 0;

    // Removing all alarms and cleaning the select list
    for(i=alarms.options.length-1;i>=0;i--){
	alarms.remove(i);
	localStorage.removeItem('alarm-'+i);
    }
    
    // Setting the new alarms quantity
    localStorage.setItem('alarm-numAlarm', "0");

    document.getElementById("alarmlist").style.display="none";
}


// Loading all initial parameters
function loadAll() {
    //localStorage.removeItem('alarm-numAlarm');
    document.getElementById("alarmlist").style.display="none";
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

	    document.getElementById("alarmlist").style.display="block";

	}
    }
    // Cleaning all the localStorage
    //for (i=0;i<500;i++){
    // 	localStorage.removeItem("alarm-"+i);
    // 	localStorage.removeItem("alarm-temp-"+i);
    // 	localStorage.removeItem('alarm-numAlarm');
    // }
}


// Activate the alarm
function control() {
    document.getElementById("song").play();
}
