function openBrowser() {
  const win = document.createElement("div");
  win.className = "app-window active";
  win.innerHTML = `<iframe src="https://example.com" style="width:100%;height:100%;border:none;"></iframe>`;
  document.body.appendChild(win);
}
