const backToTopButton = document.getElementById("backToTop");

// menunjukan tombol ketika scroll ke bawah
window.addEventListener("scroll", function () {
  const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollPosition > 100) {
    if (backToTopButton.style.display !== "block") {
      backToTopButton.style.display = "block";
    }
  } else {
    if (backToTopButton.style.display !== "none") {
      backToTopButton.style.display = "none";
    }
  }
});

// scroll ke atas 
backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
