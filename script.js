(function () {
  "use strict";

  // Mobile navigation toggle
  var menuToggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav");
  var headerCta = document.querySelector(".header-cta");

  if (menuToggle && nav && headerCta) {
    menuToggle.addEventListener("click", function () {
      var isOpen = menuToggle.classList.toggle("is-open");
      nav.classList.toggle("is-open", isOpen);
      headerCta.classList.toggle("is-open", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A" && menuToggle.classList.contains("is-open")) {
        menuToggle.click();
      }
    });
  }

  // FAQ accordion
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var button = item.querySelector(".faq-question");
    if (!button) return;
    button.addEventListener("click", function () {
      var isOpen = item.classList.toggle("is-open");
      if (!isOpen) return;
      // Close others
      faqItems.forEach(function (other) {
        if (other !== item) other.classList.remove("is-open");
      });
    });
  });
})();

