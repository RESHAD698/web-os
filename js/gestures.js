let startY = 0;

document.addEventListener("touchstart", e => {
  startY = e.touches[0].clientY;
});

document.addEventListener("touchend", e => {
  const endY = e.changedTouches[0].clientY;
  const deltaY = endY - startY;

  if (deltaY > 100) {
    // Swipe down → close top app
    const topApp = document.querySelector(".app-window.active:last-of-type");
    if (topApp) springClose(topApp);
  } else if (deltaY < -100) {
    // Swipe up → open app drawer
    showAppDrawer();
  }
});
