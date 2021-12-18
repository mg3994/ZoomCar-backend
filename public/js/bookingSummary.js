let car_data = JSON.parse(localStorage.getItem("carShow"));
let pickUpLocation = JSON.parse(localStorage.getItem("pickUpLocation"))[0];
console.log(pickUpLocation);
let dropOffLocation = JSON.parse(localStorage.getItem("dropOffLocation"))[0];
console.log(dropOffLocation);

let start_Date = JSON.parse(localStorage.getItem("start_Date"));
start_Date = start_Date[0] +" "+start_Date[1];
console.log(start_Date);
let end_Date = JSON.parse(localStorage.getItem("end_Date"));

end_Date = end_Date[0] + " "+ end_Date[1];

console.log(end_Date);




let pickup = document.getElementById("ranPickup");
let dropoff = document.getElementById("ranDropoff");
let carNav=document.getElementById("carNav");
let navStart = document.getElementById("navStart");
let navEnd = document.getElementById("navEnd");
pickup.append(start_Date,pickUpLocation); 
dropoff.append(end_Date,dropOffLocation);
navStart.append(start_Date);
navEnd.append(end_Date);        



