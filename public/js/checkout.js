let car_check = JSON.parse(localStorage.getItem("carShow"));
let start_Date = JSON.parse(localStorage.getItem("start_Date"));
start_Date = start_Date[0] +" "+start_Date[1];
let end_Date = JSON.parse(localStorage.getItem("end_Date"));
end_Date = end_Date[0] + " "+ end_Date[1];

let navStartCheck = document.getElementById("navStartCheck");
let navEnd = document.getElementById("navEndCheck");
navStartCheck.append(start_Date);
navEnd.append(end_Date);

localStorage.setItem("totalFare",JSON.stringify(str));
        