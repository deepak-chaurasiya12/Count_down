// @ts-nocheck

const endDate = " 12 June 2023 10:32 PM";

document.getElementById("end-date").innerText = endDate

const inputs = document.querySelectorAll('input')

// const clock = () =>{

// }

function clock(){
    const end = new Date(endDate);
    const now= new Date();

    // mili second calculation
    const diff = (end - now)/1000;

    if(diff<0) return;
    
    // convert into days
    inputs[0].value = Math.floor(diff/3600/24);
    

    // convert into hours
    inputs[1].value = (Math.floor(diff/3600)%24);

    // caculate mints

    inputs[2].value=(Math.floor(diff /60)%60);

    // calculate seconds

    inputs[3].value = (Math.floor(diff)%60)





    
}

// initial call
clock()

/**
 * 1 day = 24 hours
 * 1 hr = 60 mins
 * 60 min = 3600 sec
 */

setInterval(
    () =>{
        clock()
    },
    1000
)
