// Swapping Page with association Button

function shopDisplay() {
  let shopBlockDisplay = document.getElementById('shopPage');
  shopBlockDisplay.classList.remove("shopPage");
  shopBlockDisplay.classList.add("shopPageDisplay");
  let mainBlockDisplay = document.querySelector('#mainPage')
  mainBlockDisplay.classList.remove("mainPage");
  mainBlockDisplay.classList.add("mainPageNone");
}


function mainDisplay(){
  let shopBlockDisplay = document.getElementById('shopPage');
  shopBlockDisplay.classList.remove("shopPageDisplay");
  shopBlockDisplay.classList.add("shopPage");
  let mainBlockDisplay = document.querySelector('#mainPage')
  mainBlockDisplay.classList.remove("mainPageNone");
  mainBlockDisplay.classList.add("mainPage");
  let invBlockDisplay = document.getElementById('inventoryPage');
  invBlockDisplay.classList.remove("invPageDisplay");
  invBlockDisplay.classList.add("inventoryPage");
}

function invDisplay(){
  let invBlockDisplay = document.getElementById('inventoryPage');
  invBlockDisplay.classList.remove("inventoryPage");
  invBlockDisplay.classList.add("invPageDisplay");
  let mainBlockDisplay = document.querySelector('#mainPage')
  mainBlockDisplay.classList.remove("mainPage");
  mainBlockDisplay.classList.add("mainPageNone");
}




// Display Wings

function wingsDisplay() {
  wings_counter.innerHTML = String(wings).replace(/(.)(?=(\d{3})+$)/g,'$1 ');
}

function incrementPerClick() {
  wings += wingsPerClick;
  wingsDisplay();
}



// Function : Buying stuff in store

setInterval(incrementPerSecond, 1000);

function incrementPerSecond() {
  wings += wingsPerSecond;
  wingsDisplay();
}

function buyFacebook() {
  wingsPerClick += facebookFactory;
  facebookInv.classList.remove("facebookInvNone");
  facebookInv.classList.add("facebookInv");
}

function buyTwitter() {
  wingsPerSecond += twitterFactory;
  twitterInv.classList.remove("facebookInvNone");
  twitterInv.classList.add("facebookInv");
}

function buyUberEats() {
  wingsPerClick += uberEatsFactory;
  uberEatsInv.classList.remove("uberEatsInvNone");
  uberEatsInv.classList.add("uberEatsInv");
}

function buyQuizz() {
  wingsPerClick += quizzFactory;
  quizzInv.classList.remove("quizzInvNone");
  quizzInv.classList.add("quizzInv");
}








