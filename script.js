
// =================================
// 1. COUNTDOWN - TONIGHT 12:00 AM
// =================================

function getNextMidnight() {
    const now = new Date();
    const midnight = new Date(now);

    midnight.setHours(24, 0, 0, 0);

    return midnight.getTime();
}

let birthdayDate = getNextMidnight();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    if (distance <= 0) {
        birthdayDate = getNextMidnight();
        return updateCountdown();
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);


// =================================
// 2. SURPRISE POPUP
// =================================

const surpriseBtn = document.getElementById("surpriseBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

surpriseBtn.addEventListener("click", () => {
    popup.classList.add("show");
});

closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
});

popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.classList.remove("show");
    }
});


// =================================
// 3. BACKGROUND MUSIC
// =================================
// =================================
// 2. BACKGROUND MUSIC AUTOPLAY
// =================================
// =================================
// BACKGROUND MUSIC
// =================================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

music.volume = 0.7;

// Try autoplay when website opens
window.addEventListener("load", async () => {
    try {
        await music.play();
        musicBtn.textContent = "♫ Pause Music";
    } catch (error) {
        console.log("Autoplay blocked. Waiting for user interaction.");
        musicBtn.textContent = "♫ Play Music";
    }
});

// Start music on first interaction anywhere
async function playOnInteraction() {
    if (music.paused) {
        try {
            await music.play();
            musicBtn.textContent = "♫ Pause Music";
        } catch (error) {
            console.log("Music could not start.");
        }
    }

    document.removeEventListener("click", playOnInteraction);
    document.removeEventListener("touchstart", playOnInteraction);
}

document.addEventListener("click", playOnInteraction);
document.addEventListener("touchstart", playOnInteraction);

// Music button
musicBtn.addEventListener("click", async () => {
    if (music.paused) {
        await music.play();
        musicBtn.textContent = "♫ Pause Music";
    } else {
        music.pause();
        musicBtn.textContent = "♫ Play Music";
    }
});


// =================================
// 4. FLOATING HEART ANIMATION
// =================================

const heartsContainer = document.getElementById("hearts");

function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 500);
