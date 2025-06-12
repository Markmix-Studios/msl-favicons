function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  });

  const dayName = now.toLocaleDateString('en-US', { weekday: 'short' });
  const day = now.getDate();
  const month = now.toLocaleDateString('en-US', { month: 'long' });
  const year = now.getFullYear();

  function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }

  const ordinal = getOrdinalSuffix(day);
  const date = `${dayName}, ${day}${ordinal} ${month}, ${year}`;
  document.getElementById("clock").textContent = `${date} • ${time}`;
}

setInterval(updateClock, 1000);
updateClock();

const input = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");

input.addEventListener("input", () => {
  clearBtn.style.display = input.value ? "block" : "none";
});

function clearSearch() {
  input.value = "";
  input.focus();
  clearBtn.style.display = "none";
}

// Register service worker for PWA
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("✅ Service Worker Registered"))
    .catch(err => console.error("❌ SW registration failed:", err));
}
