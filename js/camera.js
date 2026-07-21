async function openCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  const video = document.createElement("video");
  video.srcObject = stream;
  video.autoplay = true;
  video.style.width = "100%";
  document.body.appendChild(video);
}
