// Get all needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const TeamSelect = document.getElementById("teamSelect");

// Track attendance
let count = 0;
const maxCount = 50;

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form Values
  const name = nameInput.value;
  const team = TeamSelect.value;
  const TeamName = TeamSelect.selectedOptions[0].text;

  console.log(name, team, TeamName);

  // Increment count
  count++;
  console.log("Total check-ins: ", count);

  // Update attendee count on page
  const attendeeCountSpan = document.getElementById("attendeeCount");
  attendeeCountSpan.textContent = count;

  // Update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(`Progress: ${percentage}`);
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = percentage;

  // Update team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  // Check if goal is reached
  if (count === maxCount) {
    // Find the winning team (highest count)
    const water = parseInt(document.getElementById("waterCount").textContent);
    const zero = parseInt(document.getElementById("zeroCount").textContent);
    const power = parseInt(document.getElementById("powerCount").textContent);
    let winner = "";
    let winnerLabel = "";
    if (water >= zero && water >= power) {
      winner = "water";
      winnerLabel = "🌊 Team Water Wise";
    } else if (zero >= water && zero >= power) {
      winner = "zero";
      winnerLabel = "🌿 Team Net Zero";
    } else {
      winner = "power";
      winnerLabel = "⚡ Team Renewables";
    }
    const greeting = document.getElementById("greeting");
    greeting.textContent = `🏆 Goal reached! Congratulations, ${winnerLabel}!`;
    greeting.style.fontWeight = "bold";
    greeting.style.fontSize = "1.3em";
    greeting.style.color = "#2e8b57";
  }

  // Show welcome message
  const message = `🎉 Welcome, ${name} from ${TeamName}`;
  console.log(message);

  form.reset();
});
