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

const form = document.getElementById("contactForm");
const thankYouMessage = document.getElementById("thankYouMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Send form data using fetch
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      form.style.display = "none";
      thankYouMessage.style.display = "block";
    } else {
      alert("There was a problem submitting the form. Please try again.");
    }
  })
  .catch(error => {
    console.error(error);
    alert("An error occurred. Please try again later.");
  });
});