const cowSound = document.getElementById("cow-sound");
const chickenSound = document.getElementById("chicken-sound");
const sheepSound = document.getElementById("sheep-sound");
const pigSound = document.getElementById("pig-sound");
const donkeySound = document.getElementById("donkey-sound");
const horseSound = document.getElementById("horse-sound");

function stopAllSounds() {
  const sounds = [
    cowSound,
    chickenSound,
    sheepSound,
    pigSound,
    donkeySound,
    horseSound,
  ];
  sounds.forEach((sound) => {
    sound.pause();
    sound.currentTime = 0;
  });
}

function playCowSound() {
  stopAllSounds();
  cowSound.play();
}

function playChickenSound() {
  stopAllSounds();
  chickenSound.play();
}

function playSheepSound() {
  stopAllSounds();
  sheepSound.play();
}

function playPigSound() {
  stopAllSounds();
  pigSound.play();
}

function playDonkeySound() {
  stopAllSounds();
  donkeySound.play();
}

function playHorseSound() {
  stopAllSounds();
  horseSound.play();
}
