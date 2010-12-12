/* Clock refreshing*/

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

   var timeDic = []
   
   if (seconds<10){
      timeDic['sec1'] = "0";
	  timeDic['sec2'] = seconds;
	 }
   else{
   	  timeDic['sec1'] = Math.floor(seconds/10);
   	  timeDic['sec2'] = seconds%10;
   	}

   if (minutes<10){
      timeDic['min1'] = "0";
	  timeDic['min2'] = minutes;
	 }
   else{
   	  timeDic['min1'] = Math.floor(minutes/10);
   	  timeDic['min2'] = minutes%10;
   	}

      
   if (hours<10){
        timeDic['hour1'] = "0";
	  	timeDic['hour2'] = hours;
	 }
   else{
   	  timeDic['hour1'] = Math.floor(hours/10);
   	  timeDic['hour2'] = hours%10;
   	}

	/*fixing font bg-spacing */
	if (timeDic['min1'] == 1)
		timeDic['min1'] = "&nbsp;1";
		
	if (timeDic['min2'] == 1)
		timeDic['min2'] = "&nbsp;1";
		
	if (timeDic['hour1'] == 1)
		timeDic['hour1'] = "&nbsp;1";
		
	if (timeDic['hour2'] == 1)
		timeDic['hour2'] = "&nbsp;1";
		

   /* Setting time list*/
   document.getElementById('hour1').innerHTML= timeDic['hour1'];
   document.getElementById('hour2').innerHTML= timeDic['hour2'];
   document.getElementById('min1').innerHTML= timeDic['min1'];
   document.getElementById('min2').innerHTML= timeDic['min2'];
   document.getElementById('sep').innerHTML= ":"
   
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

