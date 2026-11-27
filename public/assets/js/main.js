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
      toggle.setAttribute("aria-label", (open ? toggle.dataset.labelClose : toggle.dataset.labelOpen) || (open ? "Close menu" : "Open menu"));
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

    // Layout reads first (viewport and each row's set width; logos have
    // different widths), then writes only: each row is rebuilt from a
    // fragment in a single DOM op.
    const build = () => {
      marquee.classList.add("is-animated");
      const viewportWidth = marquee.clientWidth;
      const setWidths = originals.map((items) => items.reduce((sum, item) => sum + item.getBoundingClientRect().width, 0));
      rows.forEach((row, i) => {
        const items = originals[i];
        const setWidth = setWidths[i];
        // Repeat the set until one half of the track is wider than the viewport,
        // then duplicate that half so translating by -50% loops without a gap.
        const repeats = Math.max(1, Math.ceil(viewportWidth / setWidth));
        const track = document.createDocumentFragment();
        track.append(...items);
        for (let n = 1; n < repeats * 2; n++) items.forEach((item) => track.append(cloneItem(item)));
        row.replaceChildren(track);
        // Row 2 runs a little slower so the rows never line up (Figma dev note).
        const speed = i % 2 ? pxPerSecond * 0.89 : pxPerSecond;
        row.style.setProperty("--marquee-duration", `${(setWidth * repeats) / speed}s`);
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
        if (toggleLabel) toggleLabel.textContent = (paused ? toggle.dataset.labelPlay : toggle.dataset.labelPause) || (paused ? "Play" : "Pause");
        toggle.setAttribute("aria-label", (paused ? toggle.dataset.ariaPlay : toggle.dataset.ariaPause) || (paused ? "Play logos" : "Pause logos"));
      });
    }
  }

  // Copy email: revealed only where the Clipboard API is available.
  const copyBtn = document.querySelector("[data-copy]");
  if (copyBtn && navigator.clipboard && window.isSecureContext) {
    const label = copyBtn.querySelector("[data-copy-label]");
    const status = document.querySelector("[data-copy-status]");
    const original = label ? label.textContent : "";
    let timer;
    copyBtn.hidden = false;
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(copyBtn.dataset.copy);
      } catch {
        return;
      }
      const done = copyBtn.dataset.labelCopied || "Copied";
      copyBtn.classList.add("is-copied");
      if (label) label.textContent = done;
      if (status) status.textContent = done;
      clearTimeout(timer);
      timer = setTimeout(() => {
        copyBtn.classList.remove("is-copied");
        if (label) label.textContent = original;
        if (status) status.textContent = "";
      }, 2000);
    });
  }

  // Testimonials: "Show N more" / "Show less" expands the list inline.
  document.querySelectorAll("[data-testimonials]").forEach((box) => {
    const btn = box.querySelector(".testimonials__toggle");
    if (!btn) return;
    const label = btn.querySelector("[data-toggle-label]");
    // Tablet and phone show the toggle as a text link ("Read all testimonials").
    const labelSmall = btn.querySelector("[data-toggle-label-sm]");
    btn.hidden = false;
    btn.addEventListener("click", () => {
      const open = box.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(open));
      if (label) label.textContent = open ? btn.dataset.less : btn.dataset.more;
      if (labelSmall) labelSmall.textContent = open ? btn.dataset.less : btn.dataset.all;
    });
  });

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
