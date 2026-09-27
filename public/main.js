(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  // No observer, no reveal: .reveal starts at opacity 0, so without a working
  // IntersectionObserver the sections would never become visible.
  if (!("IntersectionObserver" in window)) return;

  var sections = document.querySelectorAll(
    ".flagship, .projects, .team, .ethos, .flagship-card, .project-card, .member, .crew-lanes, .crew-quote, .manifesto li"
  );

  // Build the observer before hiding anything: if construction throws, the
  // sections stay visible.
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  sections.forEach(function (el) {
    el.classList.add("reveal");
    observer.observe(el);
  });
})();
