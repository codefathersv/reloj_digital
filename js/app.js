import relojDigital from "./module/reloj_digital.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    relojDigital(".reloj", ".btnShow", ".btnHide");
})