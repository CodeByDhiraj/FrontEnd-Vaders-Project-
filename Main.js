function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');
  hours = hours % 12 === 0? 12 : hours % 12;

  return `${hours}:${minutes}:${seconds}`;
}

function updateTime() {
  const timeElement = document.getElementById('current-time');
  if (timeElement) {
    timeElement.textContent = getCurrentTime();
  }
}

updateTime();
setInterval(updateTime, 1000);