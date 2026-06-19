(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var sections = document.querySelectorAll(
    ".flagship, .projects, .team, .ethos, .flagship-card, .project-card, .member, .crew-lanes, .crew-quote, .manifesto li"
  );

  sections.forEach(function (el) {
    el.classList.add("reveal");
  });

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
    observer.observe(el);
  });
})();
