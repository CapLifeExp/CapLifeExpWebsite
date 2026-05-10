// Smooth scrolling
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Simple hero scroll animation (replacement for Framer Motion)
const hero = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const scale = Math.max(0.94, 1 - scrollY / 2000);
  const translateY = scrollY * 0.15;

  hero.style.transform = `scale(${scale}) translateY(${-translateY}px)`;
  hero.style.opacity = `${Math.max(0.4, 1 - scrollY / 800)}`;
});

// Fake form handler
document.querySelector(".form button").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;

  if (!name || !email || !date) {
    alert("Fill everything first.");
    return;
  }

  alert("Deposit flow would go here (Stripe integration).");
});