/* GLOBAL */

let currentRoom = "";

let roomHealth = {

living: 80,
kitchen: 80,
bedroom: 80,
bathroom: 80

};



/* ROOM POPUP */

function openRoom(room) {

currentRoom = room;

document.getElementById("roomTitle")
.innerText =
room.toUpperCase() + " Analysis";

document.getElementById("dataPopup")
.style.display = "flex";

}



function closeDataPopup() {

document.getElementById("dataPopup")
.style.display = "none";

}



function closePopup() {

document.getElementById("popupBox")
.style.display = "none";

}



/* ALERT POPUP */

function showPopup(title, message) {

document.getElementById("popupTitle")
.innerText = title;

document.getElementById("popupMessage")
.innerText = message;

document.getElementById("popupBox")
.style.display = "flex";

}



/* MAIN ANALYSIS */

function submitData() {

let temp =
parseFloat(
document.getElementById("temperature").value
);

let electricity =
parseFloat(
document.getElementById("electricity").value
);

let people =
parseInt(
document.getElementById("people").value
);


let risk = "NORMAL";

let efficiency = "GOOD";

let suggestion = "";

let health = 100;



/* TEMPERATURE */

if (temp <= 5) {

risk = "FREEZING";

efficiency = "LOW";

suggestion +=
"FREEZING detected. Turn ON heater.";

health -= 40;

showPopup(
"❄ FREEZING ALERT",
"Turn ON heater!"
);

}

else if (temp >= 35) {

risk = "HOT";

efficiency = "LOW";

suggestion +=
"Room overheating.";

health -= 30;

showPopup(
"🔥 HEAT ALERT",
"Turn ON fan or AC."
);

}



/* ELECTRICITY */

if (electricity >= 30) {

efficiency = "CRITICAL";

suggestion +=
" ⚡ CRITICAL electricity usage.";

health -= 30;

showPopup(
"⚡ ENERGY ALERT",
"Electricity too high!"
);

}

else if (electricity >= 20) {

efficiency = "LOW";

suggestion +=
" ⚠ High electricity usage.";

health -= 20;

}

else if (electricity >= 10) {

efficiency = "NORMAL";

suggestion +=
" Moderate electricity usage.";

health -= 10;

}



/* PEOPLE */

if (people >= 7) {

risk = "SUFFOCATION";

efficiency = "CRITICAL";

suggestion +=
" 🚨 Too many people!";

health -= 35;

showPopup(
"🚨 SUFFOCATION ALERT",
"Too many people!"
);

}



/* UPDATE TEXT */

document.getElementById(
currentRoom + "Temp"
).innerText =
"Temp: " + temp + "°C";

document.getElementById(
currentRoom + "Risk"
).innerText =
"Risk: " + risk;

document.getElementById(
currentRoom + "Eff"
).innerText =
"Efficiency: " + efficiency;

document.getElementById(
"suggestion"
).innerText =
suggestion;



/* COLOR */

let card =
document.getElementById(
currentRoom + "Card"
);

if (risk === "SUFFOCATION") {

card.style.backgroundColor =
"#990000";

card.style.color = "white";

}

else if (risk === "FREEZING") {

card.style.backgroundColor =
"#4da6ff";

}

else if (risk === "HOT") {

card.style.backgroundColor =
"#ff6666";

}

else {

card.style.backgroundColor =
"#ccffcc";

}



/* SAVE HEALTH */

if (health < 0)
health = 0;

roomHealth[currentRoom] =
health;

updateOVR();



/* TICKER */

document.getElementById(
"alertTicker"
).innerText =
"🚨 ALERT: " +
currentRoom.toUpperCase() +
" → " +
suggestion;



/* LOG */

let log =
document.getElementById(
"activityLog"
);

let time =
new Date().toLocaleTimeString();

log.innerHTML +=
"<p>[" +
time +
"] " +
currentRoom +
" → " +
suggestion +
"</p>";


closeDataPopup();

}



/* OVR */

function updateOVR() {

let total = 0;

for (let room in roomHealth) {

total += roomHealth[room];

}

let avg =
Math.round(total / 4);

document.getElementById(
"healthScore"
).innerText = avg;

}



/* DARK MODE */

function toggleDarkMode() {

document.body.classList.toggle(
"darkMode"
);

}



/* CHATBOT (LOCAL SMART RESPONSES) */

function toggleChat() {

let chat =
document.getElementById("chatWindow");

if (chat.style.display === "flex") {

chat.style.display = "none";

}

else {

chat.style.display = "flex";

}

}



function handleChatEnter(event) {

if (event.key === "Enter") {

sendMessage();

}

}



function sendMessage() {

let input =
document.getElementById("chatInput");

let msg =
input.value.toLowerCase();

if (msg === "")
return;

addUserMessage(msg);

input.value = "";


/* LOCAL AI RESPONSES */

let reply =
getLocalResponse(msg);

addBotMessage(reply);

}



/* SMART RESPONSES */

function getLocalResponse(msg) {

if (msg.includes("freezing"))
return "Turn ON heater immediately.";

if (msg.includes("hot"))
return "Turn ON fan or AC.";

if (msg.includes("electricity"))
return "Reduce usage of heavy appliances.";

if (msg.includes("people"))
return "Too many people can cause suffocation risk.";

if (msg.includes("ovr"))
return "OVR shows overall house health.";

return "I can help with temperature, electricity and safety.";

}



/* MESSAGE DISPLAY */

function addUserMessage(msg) {

let chat =
document.getElementById("chatMessages");

chat.innerHTML +=
"<p class='userMsg'>" +
msg +
"</p>";

chat.scrollTop =
chat.scrollHeight;

}



function addBotMessage(msg) {

let chat =
document.getElementById("chatMessages");

chat.innerHTML +=
"<p class='botMsg'>" +
msg +
"</p>";

chat.scrollTop =
chat.scrollHeight;

}