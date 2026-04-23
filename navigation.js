function login(){

let user =
document.getElementById("username").value;

let pass =
document.getElementById("password").value;

if(user==="admin" && pass==="1234"){

window.location.href="dashboard.html";

}
else{

alert("Invalid Login");

}

}

function goDashboard(){
window.location.href="dashboard.html";
}

function goAnalytics(){
window.location.href="analytics.html";
}

function goHistory(){
window.location.href="history.html";
}

function goAlerts(){
window.location.href="alerts.html";
}

function goSettings(){
window.location.href="settings.html";
}

function goCameras(){
window.location.href="cameras.html";
}