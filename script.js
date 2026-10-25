
/* =================================
   1. GET HTML ELEMENTS
   เชื่อม JavaScript กับส่วนต่าง ๆ ใน HTML
================================= */
const lockScreen = document.getElementById("lock");
const homeScreen = document.getElementById("home");
const appView = document.getElementById("appView");

const unlockButton = document.getElementById("unlock");
const backButton = document.getElementById("back");

const clock = document.getElementById("clock");
const date = document.getElementById("date");
const appContent = document.getElementById("appContent");

/* =================================
   2. LIVE CLOCK
   อัปเดตเวลาและวันที่จริง
================================= */
function updateClock() {
  const now = new Date();

  clock.textContent = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });

  date.textContent = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  }).toUpperCase();
}

updateClock();
setInterval(updateClock, 1000);

/* =================================
   3. UNLOCK SCREEN
   ซ่อนหน้าล็อกและแสดงหน้า Home
================================= */
unlockButton.addEventListener("click", () => {
  lockScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
});

/* =================================
   4. APP CONTENT
   ข้อความที่แสดงเมื่อเปิดแต่ละแอป
================================= */
const appDetails = {
  Gallery: {
    title: "The Archive",
    text: "A collection of moments I want to keep.",
    content: `
      <div class="empty-gallery">
        <span>✧</span>
        <p>Your favorite memories will live here.</p>
      </div>
    `
  },

  Music: {
    title: "Now Playing",
    text: "Songs that feel like you.",
    content: `
      <div class="music-card">
        <div class="music-art">♫</div>
        <p class="music-caption">A little playlist for you</p>
        <p>Music player coming soon.</p>
      </div>
    `
  },

  Letters: {
    title: "Little Letters",
    text: "Words saved for another day.",
    content: `
      <div class="letter-card">
        <p class="letter-date">A NOTE TO YOU</p>
        <p>Some moments deserve their own little space.</p>
      </div>
    `
  },

  About: {
    title: "About This Space",
    text: "A tiny corner of the internet, made with love.",
    content: `
      <div class="about-card">
        <p>Curated memories, favorite songs, and little things.</p>
        <p>Made under the same moon ☾</p>
      </div>
    `
  }
};

/* =================================
   5. OPEN APPS
   แสดงเนื้อหาตามแอปที่กด
================================= */
document.querySelectorAll(".app").forEach((button) => {
  button.addEventListener("click", () => {
    const appName = button.dataset.app;
    const details = appDetails[appName];

    if (!details) return;

    appContent.innerHTML = `
      <h2>${details.title}</h2>
      <p>${details.text}</p>
      ${details.content}
    `;

    homeScreen.classList.add("hidden");
    appView.classList.remove("hidden");
  });
});

/* =================================
   6. BACK BUTTON
   กลับจากแอปไปหน้า Home
================================= */
backButton.addEventListener("click", () => {
  appView.classList.add("hidden");
  homeScreen.classList.remove("hidden");
});
