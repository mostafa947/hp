/**
 * app.js — Miscellaneous helpers that don't need Firebase imports.
 * All Firebase logic lives inside the <script type="module"> in index.html.
 */

// Prevent pull-to-refresh on mobile interfering with the dashboard scroll
document.addEventListener("touchmove", function (e) {
  if (document.getElementById("screen-dashboard").classList.contains("active")) return;
  e.preventDefault();
}, { passive: false });

// Smooth entrance for dashboard sections using IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Will be triggered once dashboard becomes active
  const dashObserverInterval = setInterval(() => {
    const dash = document.getElementById("screen-dashboard");
    if (dash && dash.classList.contains("active")) {
      clearInterval(dashObserverInterval);
      dash.querySelectorAll(".section-container").forEach((el, i) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(28px)";
        el.style.transition = `opacity .55s ease ${i * 0.12}s, transform .55s ease ${i * 0.12}s`;
        observer.observe(el);
      });
    }
  }, 300);
});
