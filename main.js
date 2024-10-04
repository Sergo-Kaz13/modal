"use strict";

const openBtn = document.querySelector(".btn-open");
const windowPall = document.querySelector(".window-pall");
const modalWindow = document.querySelector(".modal-window");
const closeModal = document.querySelector(".modal-close-btn");

openBtn.addEventListener("click", () => {
  windowPall.classList.add("window-pall-active");
  modalWindow.classList.add("show-modal");
});

closeModal.addEventListener("click", () => {
  windowPall.classList.remove("window-pall-active");
  modalWindow.classList.remove("show-modal");
});
