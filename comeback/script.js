function GetTime(){
  var date = new Date();
  var hour = date.getHours(), min = date.getMinutes(), sec = date.getSeconds(), ap;
  var datet = date.getDate(), day = date.getDay(), month = date.getMonth(), year = date.getYear();

  if(!hour){
    ap = "AM";
    hour = 12;
  }
  else if(hour < 12) ap = "AM";
  else if(hour == 12) ap = "PM";
  else if(hour > 12){
    ap = "PM";
    hour -= 12;
  }

  if(min <= 9) min = "0"+min;
  if(sec <= 9) sec = "0"+sec;

  if(year < 1000) year += 1900;

  var ordinal;
  if(datet == 1) ordinal = "st";
  else if(datet == 2) ordinal = "nd";
  else if(datet == 3) ordinal = "rd";
  else ordinal = "th";

  var dname = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
  var mname = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
  month = mname[month];

  document.getElementById('date').innerHTML=month+" "+datet+ordinal+" "+year+", "+dname[day];
  document.getElementById('clock').innerHTML=hour+":"+min+":"+sec+" "+ap;
}

window.onload = function(){
  GetTime();
  setInterval(GetTime, 1000);
}
