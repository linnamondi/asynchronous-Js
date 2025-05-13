
const reminderApp=new Promise((resolve)=>{
    setTimeout (()=>{
        console.log("sendig the users a ")
        resolve("Reminder sent to user!");
    },3000);
});
async function reminderFeature() {
    try{
        const reminder=await reminderApp;
        console.log({reminder})
    }
    catch(error){
        console.log({error});
    }

    
}
reminderFeature();



// In a startup's DevOps dashboard, implement a setInterval function that checks server status every 5 seconds by calling an async function checkServer() that
//  returns a Promise resolving to "Server is running" or rejecting with 
// "Server down". Use .then() and .catch() to handle the result and stop the interval after 30 seconds using clearInterval.
const checkServer=true;
const promise=new Promise(function(resolve,reject){
    if(checkServer){
        resolve('Server is running')

    }
    else{
        reject('Server is down')
    }
});
const interval =setInterval(()=>{

promise.then(()=>{
    console.log("server is running well");
})
.catch(()=>{
    console.log("server is down");
})
},5000);
setTimeout(() => {
    clearInterval(interval);
    console.log("Stopped checking the server after 30s");
  }, 30000);

console.log({promise})

// You're building a system to show multiple notifications to a user. 
// Create an async function showNotifications that takes an array of messages and 
// shows each message 1 second apart using await and setTimeout wrapped in a Promise. 
// After all messages are shown, log "All notifications sent".

async function userNotifications(messages){
    for( let message of messages){
    await new Promise ((resolve)=>{
        setTimeout(()=>{
            console.log(message);
            resolve();

        },1000);
    });
        
    }
    console.log("all notification sent")
}
userNotifications(["hi","hello","goobye","thank you"])

// In your startup’s API integration, 
// write an async function fetchDataWithRetry() that tries to fetch data from a mock API (use Promise.reject() for failure), retries up to 3 times
//  with a 2-second delay between attempts using 
// setTimeout, and resolves with "Data fetched" or logs "Failed after 3 attempts" if all fail.

async function fetchDataWithRetry(attempts=1) {
    try{
     await new promise((reject)=>{
        console.log("API rejects")
     })
    }
    catch{
        console.log({error})
    }
    setTimeout(()=>{
        if (attempts<3)
        console.log(`${attempts} failed  try in 2seconds`);
        return resolve();

    },2000);
}

// You’re building a countdown timer for a product launch. Write a function that takes a number n and logs the countdown every second using setInterval. 
// Once it reaches 0, 
// stop the interval and call an async function launchProduct() that returns a resolved Promise with "Product Launched!" and logs it.

function countdownTimer(n) {
    const interval = setInterval(() => {
      console.log(n);
      if (n === 0) {
        clearInterval(interval);
        launchProduct().then(console.log);
      }
      n--;
    }, 1000);
  }
  
  async function launchProduct() {
    return Promise.resolve("Product Launched!");
  }
  
  countdownTimer(15);
        




       
    

