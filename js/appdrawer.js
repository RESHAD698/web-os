function showAppDrawer() {
  const drawer = document.getElementById("app-drawer");
  drawer.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;">
      <button onclick="openApp('dialer')">📞</button>
      <button onclick="openApp('camera')">📷</button>
      <button onclick="openApp('browser')">🌐</button>
      <button onclick="openApp('settings')">⚙️</button>
      <button onclick="openApp('sound')">🔊</button>
    </div>
  `;
}
