// ui.js — UI interaction only (buttons, haptic, sound)

export function initUIFeedback(){
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;

    // haptic
    try { if (navigator.vibrate) navigator.vibrate(15); } catch {}

    // click sound (light)
    try {
      const audio = new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=');
      audio.volume = 0.12;
      audio.play();
    } catch {}

    // visual
    btn.classList.add('tap-active');
    setTimeout(() => btn.classList.remove('tap-active'), 120);
  });
}
