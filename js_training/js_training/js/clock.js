let userName = prompt("Adiniz nedir?")

document.getElementById("myName").innerHTML = userName;

function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var d = date.getDay();
    const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + weekday[d];
    document.getElementById("myClock").innerText = time;
    
    setTimeout(showTime, 1000);
}

showTime();