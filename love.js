let yesScale = 1;
const myNumber = "919652122479";

function moveNo() {
    const no = document.getElementById("noBtn");
    const yes = document.getElementById("yesBtn");
    no.style.left = Math.random() * (window.innerWidth - 100) + "px";
    no.style.top = Math.random() * (window.innerHeight - 100) + "px";
    yesScale += 0.2;
    yes.style.transform = `scale(${yesScale})`;
}

function showLoveMessage() {
    document.getElementById("messagePopup").style.display = "flex";
    // Auto-play music when user says yes
    const audio = document.getElementById("backgroundMusic");
    audio.play().catch(e => console.log("Audio play failed:", e));
}

function closePopup() {
    document.getElementById("messagePopup").style.display = "none";
    show('page2');
}

function show(id) {
    document.querySelectorAll('.card').forEach(c => c.style.display = "none");
    document.getElementById(id).style.display = "block";
}

function back() {
    show('page2');
}

function submitToWA() {
    // Implement WhatsApp submission logic here
    window.open(`https://wa.me/${myNumber}?text=Valentine Quiz Results ❤️`);
}

// Floating hearts animation
setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤️";
    h.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 5000);
}, 400);

// Initialize - show first page
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('page1').style.display = 'block';
});
const music = document.getElementById("bgMusic");
function yesClicked(){
  document.getElementById("bgMusic").play();
           // 🔊 music starts
}
const images = document.querySelectorAll('.photo-grid img');
const fullscreen = document.getElementById('fullscreen');
const fullscreenImg = document.getElementById('fullscreenImg');
const closeBtn = document.getElementById('closeBtn');

images.forEach(img => {
  img.addEventListener('click', () => {
    fullscreen.style.display = 'flex';
    fullscreenImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  fullscreen.style.display = 'none';
});

/* ESC key support */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    fullscreen.style.display = 'none';
  }
});

/* Click outside image to close */
fullscreen.addEventListener('click', e => {
  if (e.target === fullscreen) {
    fullscreen.style.display = 'none';
  }
});