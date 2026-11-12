/* ===== Stories of Mathematics: shared top menu and footer =====
   Every page includes this file, so you only edit the menu ONCE, here.
   Each page says which tab it is with <body data-page="...">.
*/
(function () {
  const SITE_NAME = "Stories of Mathematics";

  // The tabs in the top menu. To add a tab later, add a line here.
  const TABS = [
    { id: "home",     label: "Home",         href: "index.html" },
    { id: "stories",  label: "Stories",      href: "stories.html" },
    { id: "teachers", label: "For Teachers", href: "teachers.html" },
    { id: "research", label: "Research",     href: "research.html" },
    { id: "about",    label: "About",        href: "about.html" }
  ];

  const current = document.body.dataset.page;

  const links = TABS.map(t =>
    '<li><a href="' + t.href + '"' + (t.id === current ? ' aria-current="page"' : "") + ">" + t.label + "</a></li>"
  ).join("");

  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML =
      '<nav class="nav" aria-label="Main">' +
        '<a class="brand" href="index.html"><span class="brand-mark">&pi;</span>' + SITE_NAME + "</a>" +
        '<button class="nav-toggle" aria-expanded="false" aria-controls="nav-links">Menu</button>' +
        '<ul class="nav-links" id="nav-links">' + links + "</ul>" +
      "</nav>";
    const btn = header.querySelector(".nav-toggle");
    const list = header.querySelector(".nav-links");
    btn.addEventListener("click", () => {
      const open = list.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="footer-inner">' +
        "<div>&copy; " + new Date().getFullYear() + " " + SITE_NAME + "<br>" +
        '<span class="footer-note">Every idea in maths began as a problem someone needed to solve.</span></div>' +
        "<ul>" + links + "</ul>" +
      "</div>";
  }
})();
