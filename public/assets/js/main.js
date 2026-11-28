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

    // Close the menu when keyboard focus moves past its last link.
    nav.addEventListener("focusout", (event) => {
      if (toggle.getAttribute("aria-expanded") !== "true") return;
      const next = event.relatedTarget;
      if (next && !nav.contains(next) && next !== toggle) setOpen(false);
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

  // Case-study image viewer (phones only, Figma "Image viewer"): tap an image
  // to see it large; swipe to pan, pinch to zoom, swipe down or Escape to close.
  const zoomables = Array.from(document.querySelectorAll("picture[data-zoom-src]"));
  if (zoomables.length && typeof HTMLDialogElement === "function") {
    const phone = window.matchMedia("(max-width: 767px)");
    const dark = window.matchMedia("(prefers-color-scheme: dark)");
    const ar = (root.lang || "").toLowerCase().startsWith("ar");
    const t = ar
      ? { open: "عرض الصورة بحجم أكبر", close: "إغلاق", of: " / ", hint: "اسحب للتحريك · قرّب بإصبعين للتكبير · اسحب للأسفل للإغلاق", label: "عارض الصور" }
      : { open: "View larger image", close: "Close", of: " / ", hint: "Swipe to pan · pinch to zoom · swipe down to close", label: "Image viewer" };
    const BASE = 520;
    const MAX_ZOOM = 3;

    let dialog, pan, img, counter, caption, lastFocus;
    let ratio = 1, baseH = BASE, zoom = 1;

    const el = (tag, cls, text) => {
      const node = document.createElement(tag);
      if (cls) node.className = cls;
      if (text) node.textContent = text;
      return node;
    };

    const captionFor = (picture) => {
      const figure = picture.closest("figure");
      const own = figure && figure.querySelector(":scope > figcaption");
      let text = "";
      if (own) {
        const pill = own.querySelector(".study-tag__pill");
        text = own.textContent.trim();
        if (pill) text = `${pill.textContent.trim()} · ${text.slice(pill.textContent.trim().length).trim()}`;
      }
      const alt = picture.querySelector("img")?.alt || "";
      return text || alt;
    };

    const setHeight = (h) => {
      img.style.height = `${h}px`;
      img.style.width = `${h * ratio}px`;
    };

    const build = () => {
      dialog = el("dialog", "viewer");
      dialog.setAttribute("aria-label", t.label);
      const bar = el("div", "viewer__bar");
      counter = el("p", "viewer__count");
      counter.dir = "ltr";
      const close = el("button", "viewer__close");
      close.type = "button";
      close.setAttribute("aria-label", t.close);
      close.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
      close.addEventListener("click", () => dialog.close());
      bar.append(counter, close);
      pan = el("div", "viewer__pan");
      img = el("img", "viewer__img");
      img.alt = "";
      img.decoding = "async";
      pan.append(img);
      const foot = el("div", "viewer__foot");
      caption = el("p", "viewer__caption");
      foot.append(caption, el("p", "viewer__hint", t.hint));
      dialog.append(bar, pan, foot);
      document.body.append(dialog);

      dialog.addEventListener("close", () => {
        root.classList.remove("viewer-open");
        img.removeAttribute("src");
        if (lastFocus) lastFocus.focus();
      });

      // Pinch to zoom (two fingers) and swipe down to close (one finger, not zoomed).
      let pinch = null;
      let drag = null;
      const mid = (a, b) => ({ x: (a.clientX + b.clientX) / 2, y: (a.clientY + b.clientY) / 2 });
      const dist = (a, b) => Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);

      pan.addEventListener("touchstart", (e) => {
        if (e.touches.length === 2) {
          drag = null;
          pan.style.transform = "";
          pinch = { d: dist(e.touches[0], e.touches[1]), zoom };
        } else if (e.touches.length === 1 && zoom === 1) {
          drag = { x: e.touches[0].clientX, y: e.touches[0].clientY, dy: 0, top: pan.scrollTop };
        }
      }, { passive: true });

      pan.addEventListener("touchmove", (e) => {
        if (pinch && e.touches.length === 2) {
          e.preventDefault();
          const next = Math.min(MAX_ZOOM, Math.max(1, pinch.zoom * (dist(e.touches[0], e.touches[1]) / pinch.d)));
          const box = pan.getBoundingClientRect();
          const m = mid(e.touches[0], e.touches[1]);
          const mx = m.x - box.left, my = m.y - box.top;
          const fx = (pan.scrollLeft + mx) / pan.scrollWidth;
          const fy = (pan.scrollTop + my) / pan.scrollHeight;
          zoom = next;
          setHeight(baseH * zoom);
          pan.scrollLeft = fx * pan.scrollWidth - mx;
          pan.scrollTop = fy * pan.scrollHeight - my;
        } else if (drag && e.touches.length === 1) {
          const dx = e.touches[0].clientX - drag.x;
          const dy = e.touches[0].clientY - drag.y;
          if (drag.top <= 0 && dy > 0 && dy > Math.abs(dx) * 1.5) {
            drag.dy = dy;
            pan.style.transform = `translateY(${dy}px)`;
            dialog.style.setProperty("--viewer-fade", String(Math.max(0.4, 1 - dy / 400)));
          } else if (drag.dy) {
            drag.dy = 0;
            pan.style.transform = "";
            dialog.style.removeProperty("--viewer-fade");
          }
        }
      }, { passive: false });

      const end = (e) => {
        if (pinch && e.touches.length < 2) pinch = null;
        if (drag && e.touches.length === 0) {
          const closeIt = drag.dy > 90;
          drag = null;
          pan.style.transform = "";
          dialog.style.removeProperty("--viewer-fade");
          if (closeIt) dialog.close();
        }
      };
      pan.addEventListener("touchend", end);
      pan.addEventListener("touchcancel", end);
    };

    const open = (index) => {
      if (!dialog) build();
      const picture = zoomables[index];
      const w = Number(picture.dataset.zoomW) || 1;
      const h = Number(picture.dataset.zoomH) || 1;
      ratio = w / h;
      zoom = 1;
      img.width = w;
      img.height = h;
      img.src = dark.matches ? picture.dataset.zoomSrcDark : picture.dataset.zoomSrc;
      img.alt = picture.querySelector("img")?.alt || "";
      counter.textContent = `${index + 1}${t.of}${zoomables.length}`;
      caption.textContent = captionFor(picture);
      lastFocus = picture;
      root.classList.add("viewer-open");
      dialog.showModal();
      baseH = Math.min(BASE, pan.clientHeight || BASE);
      setHeight(baseH);
      // Start at the reading edge: left in English, right in Arabic.
      pan.scrollTop = 0;
      pan.scrollLeft = 0;
    };

    const sync = () => {
      zoomables.forEach((picture) => {
        if (phone.matches) {
          picture.tabIndex = 0;
          picture.setAttribute("role", "button");
          picture.setAttribute("aria-label", `${t.open}: ${picture.querySelector("img")?.alt || ""}`);
        } else {
          picture.removeAttribute("tabindex");
          picture.removeAttribute("role");
          picture.removeAttribute("aria-label");
        }
      });
      if (!phone.matches && dialog && dialog.open) dialog.close();
    };
    sync();
    phone.addEventListener("change", sync);

    zoomables.forEach((picture, index) => {
      picture.addEventListener("click", () => { if (phone.matches) open(index); });
      picture.addEventListener("keydown", (e) => {
        if (!phone.matches || (e.key !== "Enter" && e.key !== " ")) return;
        e.preventDefault();
        open(index);
      });
    });
  }
})();
