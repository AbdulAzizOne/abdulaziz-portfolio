(() => {
  "use strict";

  const root = document.documentElement;
  root.classList.add("js");

  // Mobile navigation
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");

  if (toggle && nav) {
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      nav.classList.toggle("is-open", open);
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    window.matchMedia("(min-width: 961px)").addEventListener("change", (event) => {
      if (event.matches) setOpen(false);
    });
  }

  // Header: hairline and soft shadow once the page scrolls
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Theme toggle: an explicit choice is stored and set as data-theme (the
  // inline head script restores it before paint); otherwise the OS decides.
  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const isDark = () => (root.dataset.theme || (darkQuery.matches ? "dark" : "light")) === "dark";
    const sync = () => {
      const dark = isDark();
      themeToggle.classList.toggle("is-dark", dark);
      themeToggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    };
    themeToggle.hidden = false;
    sync();
    themeToggle.addEventListener("click", () => {
      const next = isDark() ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) { /* private mode: not remembered */ }
      sync();
    });
    darkQuery.addEventListener("change", sync);
  }

  // Current year in footer
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  // Client logo marquee: clone each row so it loops seamlessly, pausable by
  // hover, focus or the toggle button. Stays a static wrap for reduced motion.
  const marquee = document.querySelector("[data-marquee]");
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (marquee && !motionQuery.matches) {
    const rows = [...marquee.querySelectorAll(".logo-marquee__row")];
    const originals = rows.map((row) => [...row.children]);
    const toggle = marquee.querySelector(".logo-marquee__toggle");
    const toggleLabel = toggle && toggle.querySelector("[data-toggle-label]");
    const pxPerSecond = 40;

    const cloneItem = (item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      return clone;
    };

    // One layout read (viewport and item width; items have a fixed CSS width),
    // then writes only: each row is rebuilt from a fragment in a single DOM op.
    const build = () => {
      marquee.classList.add("is-animated");
      const viewportWidth = marquee.clientWidth;
      const itemWidth = originals[0][0].getBoundingClientRect().width;
      rows.forEach((row, i) => {
        const items = originals[i];
        const setWidth = items.length * itemWidth;
        // Repeat the set until one half of the track is wider than the viewport,
        // then duplicate that half so translating by -50% loops without a gap.
        const repeats = Math.max(1, Math.ceil(viewportWidth / setWidth));
        const track = document.createDocumentFragment();
        track.append(...items);
        for (let n = 1; n < repeats * 2; n++) items.forEach((item) => track.append(cloneItem(item)));
        row.replaceChildren(track);
        row.style.setProperty("--marquee-duration", `${(setWidth * repeats) / pxPerSecond}s`);
      });
    };

    build();
    let resizeTimer;
    let lastWidth = marquee.clientWidth;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (marquee.clientWidth !== lastWidth) {
          lastWidth = marquee.clientWidth;
          build();
        }
      }, 200);
    });

    if (toggle) {
      toggle.hidden = false;
      toggle.addEventListener("click", () => {
        const paused = marquee.classList.toggle("is-paused");
        toggle.setAttribute("aria-pressed", String(paused));
        if (toggleLabel) toggleLabel.textContent = paused ? "Play logos" : "Pause logos";
      });
    }
  }

  // Reveal on scroll
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      // Stagger items that enter the viewport together (e.g. a row of cards).
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry, i) => {
          entry.target.style.setProperty("--reveal-delay", `${Math.min(i, 5) * 0.08}s`);
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  targets.forEach((el) => observer.observe(el));
})();
