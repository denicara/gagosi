  window.addEventListener("scroll", function() {
    const bg = document.querySelector(".quote-bg");
    const scrollY = window.scrollY;
    bg.style.transform = `translateY(${scrollY * 0.2 - 20}px)`;
  });
  const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    zoomable: true,
  });