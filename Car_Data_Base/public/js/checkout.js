// let car_check = JSON.parse(localStorage.getItem("carShow"));

// let start_Date = JSON.parse(localStorage.getItem("start_Date"));
// start_Date = start_Date[0] +" "+start_Date[1];
// console.log(start_Date);

// let end_Date = JSON.parse(localStorage.getItem("end_Date"));

// end_Date = end_Date[0] + " "+ end_Date[1];
// console.log(end_Date);

// let carCheck=document.getElementById("carNavCheck");
// let navStartCheck = document.getElementById("navStartCheck");
// let navEnd = document.getElementById("navEndCheck");
// let tripFare = document.getElementById("tripFare");
// let damagePrice=document.getElementById("ref1");

let str="";
// function showPay() {
        // let name = document.createElement('h4');
      
        // name.innerText = car_check.name;
        // let price = document.createElement('h3');
        // let damage=document.createElement('h3');

        // carCheck.append(name);
        // navStartCheck.append(start_Date);
        // navEndCheck.append(end_Date);
     let demo_price = car.price;
     console.log(demo_price);
        for(let i=0;i<demo_price.length; i++){
          if(demo_price[i]==="₹"){
            continue; 
          } else{
            str+=demo_price[i]; 
          }
        }

        str = Number(str);
        let TripFare= `₹ ${str*0.85}`;   
        let damage= `₹ ${str*0.15}`;     

// }
// showPay(); 
module.exports={TripFare, damage}

// localStorage.setItem("totalFare",JSON.stringify(str));
        