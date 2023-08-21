

var hr = document.getElementById("hour");
var min = document.getElementById("minutes");
var sec = document.getElementById("seconds");
var milisec = document.getElementById("miliseconds");


var miliseconds = 0;
var seconds = 0;
var minutes = 0;
var hour = 0;
var interval;
var btn = document.getElementById("btn");


function start(){
    
interval = setInterval(function(){
      miliseconds++;
      milisec.innerHTML = miliseconds;
      
      if(miliseconds >= 100){
         seconds++;
         sec.innerHTML = seconds;
         miliseconds = 0;    
      }
    else if(seconds >= 60){
        minutes++;
        min.innerHTML = minutes;
        seconds = 0;
    }
    else if(minutes >= 60 ){
        hour++;
        hr.innerHTML = hour;
        minutes = 0;
    }
    
     },10 );
     
}

function pause(){
    clearInterval(interval);
};

function reset(){
    clearInterval(interval);
    
     miliseconds = 0;
     seconds = 0;
     minutes = 0;
     hour = 0;
     
     milisec.innerHTML = miliseconds;
     sec.innerHTML = seconds;
     min.innerHTML = minutes;
     hr.innerHTML = hour;

}
    