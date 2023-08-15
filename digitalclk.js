
function digitalClk()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var dy=date.getDay();
    var am_pm="AM";
    if(hh>=12)
    {
        am_pm="PM";
        if(hh>12)
        {
            hh-=12;
        }
    }
    if (hh==0)
    {
        hh=12;
        am_pm="AM"
    }
    if(mo==0)
    {
        mo=" జనవరి"
    }
   else if(mo==1)
    {
        mo="ఫిబ్రవరి"
    }
   else if(mo==2)
    {
        mo="మార్చ్"
    }
   else if(mo==3)
    {
        mo=" ఏప్రిల్"
    }
   else if(mo==4)
    {
        mo="మే"
    }
   else if(mo==5)
    {
        mo="జూన్ "
    }
   else if(mo==6)
    {
        mo="జూలై"
    }
   else if(mo==7)
    {
        mo="ఆగస్ట్"
    }
  else if(mo==8)
    {
        mo="సెప్టెంబర్"
    }
  else if(mo==9)
    {
        mo="అక్టోబర్"
    }
  else if(mo==10)
    {
        mo="నవంబర్"
    }
   else
    {
        mo="డిసెంబర్"
    }
    switch(dy)
    {
        case 0: dy="ఆదివారం"
        document.getElementById("b").style.backgroundColor="white"
        break;
        case 1: dy="సోమవారం"
        document.getElementById("b").style.backgroundImage="url(./sun.jpg)"
        break;
        case 2: dy="మంగళవారం"
        document.getElementById("b").style.backgroundColor="white"
        break;
        case 3: dy=" బుధవారం"
        document.getElementById("b").style.backgroundColor="white"
        break;
        case 4: dy="గురువారం"
        document.getElementById("b").style.backgroundColor="white"
        break;
        case 5: dy="శుక్రవారం"
        document.getElementById("b").style.backgroundColor="white"
        break;
        case 6: dy="శనివారం"
        document.getElementById("b").style.backgroundColor="white"
        break;
    }
    var time=`${hh}:${mm}:${am_pm}`
    document.getElementById("Time").innerHTML=time;
    document.getElementById("Sec").innerHTML=ss;
    var fullDate=`${dd}/${mo}/${yy}`
    document.getElementById("Date").innerHTML=fullDate;
    document.getElementById("Day").innerHTML=dy;
    setTimeout(digitalClk,1000)
}


var alarmMuc=new Audio();
alarmMuc.src="./Alarm-Clock.mp3";

function setAlarm()
{
  var date=new Date();
  var hh=date.getHours();
  var mm=date.getMinutes();
  var am_pm="AM"
  if(hh>=12)
    {
        am_pm="PM";
        if(hh>12)
        {
            hh-=12;
        }
    }
    if (hh==0)
    {
        hh=12;
        am_pm="AM"
    }
    var uh=document.getElementById("UserH").value
    var um=document.getElementById("UserM").value
    var uAm_Pm=document.getElementById("UserAm_Pm").value
    console.log(uh,um,uAm_Pm)
    console.log(hh,mm,am_pm)
    if(uh==hh&&um==mm&&uAm_Pm==am_pm)
    {
      alarmMuc.play();
    }
    setTimeout(setAlarm,1000)
}
function closeWindow()
{
  document.getElementById("alarmContainer").style.display="none"
}
function openWindow()
{
  document.getElementById("alarmContainer").style.display="flex"
}
