const introVideo = document.getElementById('introVideo');
const intro = document.getElementById('intro');
const mainContent = document.getElementById('mainContent');
const skipBtn = document.getElementById('skipBtn');

// Require user click to start video with sound
window.addEventListener('click', () => {
  introVideo.muted = false;
  introVideo.play()
    .then(() => console.log("Video started"))
    .catch(err => console.log("Video playback failed:", err));
}, { once: true });

// When video ends, fade to main content
introVideo.addEventListener('ended', () => {
  fadeOutIntro();
});

// Skip button
skipBtn.addEventListener('click', () => {
  introVideo.pause();
  fadeOutIntro();
});

function fadeOutIntro() {
  intro.classList.add('hidden');
  setTimeout(() => {
    mainContent.classList.add('show');
    document.body.style.overflow = 'auto';
  }, 800); // matches fade transition
}
