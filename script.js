// Retro arcade edition — mobile nav + tiny interactions.
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Arcade menu: keyboard-style hover already handled in CSS;
  // add a tiny "coin" counter for fun.
  var coin = document.querySelector(".insert-coin");
  var credits = 1;
  if (coin) {
    coin.style.cursor = "pointer";
    coin.title = "Insert coin";
    coin.addEventListener("click", function () {
      credits += 1;
      var creditEl = document.querySelector(".footer-credit");
      if (creditEl) creditEl.textContent = "CREDIT " + String(credits).padStart(2, "0");
    });
  }
})();
