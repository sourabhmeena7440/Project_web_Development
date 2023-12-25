// // 1.  date select karge java script se
// // 1 yha se brouser ki date chage ho rhi hai
// if condition kyoki hame -(mainus) me value nhi chahiye isliye use karte hai
// 1.  date select karge java script se
// 1 yha se brouser ki date chage ho rhi hai
const endDate = "25 march 2022 1:00 PM"

document.getElementById("end-date").innerText = endDate
const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end-now) / 1000;

    // if(diff<0) return;

    // console.log(diff);   
    // convert intro days
    inputs[0].value = Math.floor(diff/3600/24);
    // convert intro hours
    inputs[1].value = Math.floor(diff/3600) % 24;
    // minits
    // console.log(Math.floor(diff/60) % 60);
    inputs[2].value = Math.floor(diff / 60) % 60;
    // seconds
    inputs[3].value = Math.floor(diff) % 60;
}
clock()

//  2.  1-1 seconde par coll karne ke liye hame lgayge setinterbal ka use karege
// 2.  currnt time har seconde change hota rhata hai
setInterval(
    () =>{
        clock()
    },
    1000
)












// const clock = () => {

// }
// 3.
// function clock(){
//     const end = new Date(endDate)
//     const now = new Date()
//     const diff = end-now;
//     console.log(diff);   // milisecond me bta rha hai
//     // console.log(now);
// }
// initial coll - jab hota hai jbh page refrese hota hai
// clock()



//  4. convert to seconde
// 1 day = 24 hrs
// 1 hr = 60 mins
// 60 min = 3600 sec
// function clock(){
//     const end = new Date(endDate)
//     const now = new Date()
//     const diff = (end-now) / 1000;
//     console.log(diff);   
//     console.log(Math.floor(diff/3600/24));

// }
// clock()

