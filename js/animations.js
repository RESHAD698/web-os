function springOpen(element) {
  setTimeout(() => element.classList.add("active"), 10);
}

function springClose(element) {
  element.classList.remove("active");
  setTimeout(() => element.remove(), 350);
}
