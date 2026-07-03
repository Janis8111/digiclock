function updateClock() {

    // Get current date and time
    const now = new Date();

    // Get hours, minutes and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Greeting
    let greeting = "";

    if (hours < 12) {
        greeting = "🌅 Good Morning";
    }
    else if (hours < 17) {
        greeting = "☀️ Good Afternoon";
    }
    else if (hours < 20) {
        greeting = "🌇 Good Evening";
    }
    else {
        greeting = "🌙 Good Night";
    }

    // Show greeting
    document.getElementById("greeting").textContent = greeting;

    // Add leading zeros
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    // Show clock
    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds}`;

    // Date
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-US", options);

}

// Run immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);