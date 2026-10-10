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

  // Current year in footer
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  // Copy email to clipboard (button is hidden without JS)
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    const label = btn.querySelector("[data-copy-label]") || btn.firstChild;
    const original = label.textContent;
    const status = btn.parentElement.querySelector("[data-copy-status]");
    btn.hidden = false;
    btn.addEventListener("click", async () => {
      const text = btn.getAttribute("data-copy");
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const field = Object.assign(document.createElement("textarea"), { value: text });
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.append(field);
        field.select();
        document.execCommand("copy");
        field.remove();
      }
      label.textContent = "Copied ✓";
      btn.classList.add("is-copied");
      if (status) status.textContent = "Email address copied to clipboard";
      clearTimeout(btn._t);
      btn._t = setTimeout(() => {
        label.textContent = original;
        btn.classList.remove("is-copied");
        if (status) status.textContent = "";
      }, 2000);
    });
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

    const build = () => {
      marquee.classList.add("is-animated");
      const viewportWidth = marquee.clientWidth;
      rows.forEach((row, i) => {
        const items = originals[i];
        row.replaceChildren(...items);
        // Repeat the set until one half of the track is wider than the viewport,
        // then duplicate that half so translating by -50% loops without a gap.
        const setWidth = row.scrollWidth;
        const repeats = Math.max(1, Math.ceil(viewportWidth / setWidth));
        for (let r = 1; r < repeats; r++) items.forEach((item) => row.append(cloneItem(item)));
        [...row.children].forEach((item) => row.append(cloneItem(item)));
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
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  targets.forEach((el) => observer.observe(el));
})();
