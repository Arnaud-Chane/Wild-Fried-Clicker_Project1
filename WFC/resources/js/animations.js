// Colonel Songs

let songs = ["resources/sounds/chickenTenders.mp3", "resources/sounds/didYouSee.mp3", "resources/sounds/laugh.mp3",
  "resources/sounds/ohMy.mp3", "resources/sounds/wow.mp3", "resources/sounds/yeahBoy.mp3"
];

let randomSong = songs[Math.floor(Math.random() * songs.length)];

function play() {
  var audio = new Audio(randomSong);
  audio.play();
}

function colonel() {
  if (wings_counter.innerHTML === "100") {
    play();
  }
  if (wings_counter.innerHTML === "10") {
    play();
  } else {
    console.log("Nope");
  }
}

// when document.getElementById('wings_counter').innerHTML == "10 wings" do function : play



// blinking plusOne

function blink() {
  document.getElementById('firstPlus').classList.remove("blinked");
  document.getElementById('secondPlus').classList.remove("blinked");
  document.getElementById('thirdPlus').classList.remove("blinked");
  let plusOnes = [document.getElementById('firstPlus'), document.getElementById('secondPlus'), document.getElementById('thirdPlus')];
  let randomPlus = plusOnes[Math.floor(Math.random() * plusOnes.length)];
  randomPlus.classList.add("blinked");
}

bucketImg.addEventListener("click", blink);
bucketImg.addEventListener("click", colonel);

// why when random choses the same class twice .remove does not work ???
