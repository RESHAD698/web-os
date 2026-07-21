function openApp(app) {
  const appWindow = document.createElement("div");
  appWindow.className = "app-window";
  appWindow.innerHTML = `<h1>${app} App</h1><div class="gesture-area"></div>`;
  document.body.appendChild(appWindow);
  springOpen(appWindow);
}

function updateTime() {
  const now = new Date();
  const timeStr = now.getHours() + ":" + now.getMinutes().toString().padStart(2, '0');
  document.getElementById("time").textContent = timeStr;
  document.getElementById("aod-time").textContent = timeStr;
}
setInterval(updateTime, 1000);
updateTime();
