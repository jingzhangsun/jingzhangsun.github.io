// 中文维护说明：Moments 图片使用站内弹层预览，避免跳到原始 jpg 页面后只能浏览器返回。
(function () {
  var mediaLinks = document.querySelectorAll(".moments-page .moment-card__media");

  if (!mediaLinks.length) {
    return;
  }

  var lightbox = document.createElement("div");
  lightbox.className = "moments-lightbox";
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.innerHTML = [
    '<button class="moments-lightbox__close" type="button" aria-label="Close image preview">&times;</button>',
    '<img class="moments-lightbox__image" alt="">',
    '<p class="moments-lightbox__caption"></p>'
  ].join("");
  document.body.appendChild(lightbox);

  var image = lightbox.querySelector(".moments-lightbox__image");
  var caption = lightbox.querySelector(".moments-lightbox__caption");
  var closeButton = lightbox.querySelector(".moments-lightbox__close");
  var lastFocusedElement = null;

  function openLightbox(link) {
    var card = link.closest(".moment-card");
    var cardImage = link.querySelector("img");
    var title = card ? card.querySelector("h3") : null;
    var date = card ? card.querySelector("time") : null;
    var captionText = [date && date.textContent, title && title.textContent]
      .filter(Boolean)
      .join(", ");

    lastFocusedElement = document.activeElement;
    image.src = link.getAttribute("href");
    image.alt = cardImage ? cardImage.getAttribute("alt") || "" : "";
    caption.textContent = captionText;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("moments-lightbox-open");
    closeButton.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("moments-lightbox-open");
    image.removeAttribute("src");

    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  mediaLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      openLightbox(link);
    });
  });

  closeButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
})();
