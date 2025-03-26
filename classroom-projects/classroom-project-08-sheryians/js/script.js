// Predefined Array of Colors
const colors = [
  "#f9ca24",
  "#f0932b",
  "#be2edd",
  "#535c68",
  "#4834d4",
  "#ff7979",
];

// Get Elements
const generateColorbtn = document.querySelector(".generate-color-btn");
const shuffleColorbtn = document.querySelector(".shuffle-color-btn");
const targetColorBox = document.querySelector(".target-color-box");
const shuffledColorBox = document.querySelector(".shuffled-color-box");
const gameStateMessage = document.querySelector(".game-state-message");
const btnClickSound = new Audio("../assets/music/btn-click.mp3");
const shuffleSound = new Audio("../assets/music/shuffle.mp3");
const shufflingStopSound = new Audio("../assets/music/shuffle-done.wav");
const matchSound = new Audio("../assets/music/match.mp3");
const misMatchSound = new Audio("../assets/music/mismatch.mp3");

// Manage Game State
let hasColorGenerated = false,
  isColorShuffling = false;

// Adding Click Event on Generate Target Color Btn to Generate a Random Target Color
generateColorbtn.addEventListener("click", function () {
  // If Ther is not Target Color is Generated Yet
  if (!hasColorGenerated) {
    // Play Button Click Sound
    btnClickSound.play();

    // Changing Game Message State
    gameStateMessage.textContent =
      "🎯 Target color set! Now, start shuffling to match it! 🔄⚡";

    // Clear Message Written in Target Box
    targetColorBox.firstElementChild.textContent = "";

    // Generate a Random Number & Pick a Color from the Predefined Array and Display that Color in Target Color Box
    targetColorBox.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    // Color has Generated
    hasColorGenerated = true;
    isColorShuffling = false;
  }
});

// Adding Click Event on Start Shuffle Color Btn to Shuffle and Pick a Color to Match
shuffleColorbtn.addEventListener("click", function () {
  // Shuffle Only When Target Color has Already Generated & Shuffling is not in Progress
  if (hasColorGenerated && !isColorShuffling) {
    // Pause Match or Mis Match Sound if Any Playing
    matchSound.pause();
    misMatchSound.pause();

    // Play Button Click Sound
    btnClickSound.play();

    // Clear Message Written in Target Box
    shuffledColorBox.firstElementChild.textContent = "";

    // Changing Game Message State
    gameStateMessage.textContent = "🎨 Shuffling colors... Hold tight! 🌈";

    // Start Shuffling Sound & Repeat it
    shuffleSound.play();
    shuffleSound.loop = true;

    // Color Suffling In Progress
    isColorShuffling = true;

    // Shuffle Counter to Indicate Number of Times Shuffling Has Done
    let shuffleCounter = 1;

    // Shuffling Function Calling  After Every 150 ms
    const shuffleColor = () => {
      // If Shuffle Counter is Reached to Required Number (Stop Shuffling)
      if (shuffleCounter === colors.length * 4) {
        // Pause Shuffling Sound
        shuffleSound.pause();

        // Changing Game Message State
        gameStateMessage.textContent = "⏳ Hold on... Checking for a match! 🎯";

        // Play Shuffling Stop Sound
        shufflingStopSound.play();

        // Performing or Calling Function to Check Result & Display Result After 1200 ms (1.2 Seconds)
        setTimeout(function () {
          // If Shuffled Color Matched to Target Color
          if (
            targetColorBox.style.backgroundColor ===
            shuffledColorBox.style.backgroundColor
          ) {
            // Changing Game Message State
            gameStateMessage.textContent =
              "🎯 Boom! Perfect match! You've nailed it! 🎉 Generate a new target to play again! 🔄🌈";

            // Play Match Sound
            matchSound.play();

            // After 2000 ms Allow user to Play Again
            setTimeout(function () {
              // Allow User to Generate New Target Color
              hasColorGenerated = false;

              // Set Elements to Initial State
              targetColorBox.style.backgroundColor = "transparent";
              targetColorBox.firstElementChild.textContent =
                "🎯 Awaiting Target Color";
              shuffledColorBox.style.backgroundColor = "transparent";
              shuffledColorBox.firstElementChild.textContent =
                "🎰 Waiting to Shuffle...";
            }, 2000);
          } else {
            // Color Shuffling Stopped
            isColorShuffling = false;

            // Changing Game Message State
            gameStateMessage.textContent =
              "😅 Oops, no match! Shuffle again and chase the win! 🔄🌈";

            // Play Mis Match Sound
            misMatchSound.play();
          }
        }, 1200);

        return;
      }

      // Generate a Random Number & Pick a Color from Predefined Array of Colors for Shuffling
      shuffledColorBox.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

      // Increment Shuffle Counter
      shuffleCounter++;

      // Calling Again for Shuffling
      setTimeout(shuffleColor, 150);
    };

    // Generate A Color After Every 150 ms (Shuffling)
    setTimeout(shuffleColor, 150);
  }
});
