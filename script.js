const timer = document.getElementById("timer");

function updateClock() {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  let hours = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();

  // Add leading zeros
  hours = String(hours).padStart(2, "0");
  mins = String(mins).padStart(2, "0");
  secs = String(secs).padStart(2, "0");

  const time = `${day}/${month}/${year}, ${hours}:${mins}:${secs}`;
  timer.innerHTML = time;
}

updateClock();

// Update every second
setInterval(updateClock, 1000);
