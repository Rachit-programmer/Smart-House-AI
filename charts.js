let ctx=
document.getElementById("energyChart");

if(ctx){

new Chart(ctx,{

type:"line",

data:{

labels:[
"8AM",
"10AM",
"12PM",
"2PM"
],

datasets:[{

label:"Energy Usage",

data:[5,7,9,6],

borderColor:"red"

}]

}

});

}