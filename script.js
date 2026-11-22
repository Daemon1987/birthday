const CONFIG = {
  herName: "Miniso",


  startDate: "2025-12-15T00:00:00",

  passcode: "151225",
  passHint: "Hint: the day I got you (DDMMYY)",

  music: "Navjot Ahuja - Khat (Official Audio).mp3",

  pages: [
    {
      type: "cover",
      lines: ["To Miniso,", "With All My Love"],
      sub: "Happy 21st Birthday  •  23 November 2026"
    },

    {
      type: "text",
      paragraphs: [
        "I wanted to create a little space that holds everything I feel for you, the quiet thoughts, the sudden smiles and every memory we've made.",
        "As you turn these pages, know that you are someone I choose again and again, and every page here is for you."
      ]
    },

    { type: "counter", label: "Together for", after: "and every single day has been better with you in it" },

    {
      type: "text",
      title: "How it began",
      paragraphs: [
        "It still amazes me how everything began, not randomly, but so perfectly. A friend called you, I was just there, and somehow that small connection turned into something deep and meaningful.",
        "I know I was the first to fall for you but you were the first to make me feel like I was home, like I belonged, and that feeling has never left me."
      ]
    },
    {
      type: "text",
      title: "Our day",
      paragraphs: [
        "Then came your courage. You texted me, and from those first conversations to our phone calls, everything felt so natural, like we were meant to happen.",
        "And 15th December 2025 became our day, my favorite day, because that's when I got you and everything in my life changed."
      ]
    },

    /* ---------------- PHOTOS 1-4 ---------------- */
    { type: "photo", src: "photos/01.jpg", caption: "Us, sunshine and smiles", note: "The god awkward first time we met, where you couldn't look at me and I couldn't look at anything but you", focus: "center 30%" },
    { type: "photo", src: "photos/02.jpg", caption: "Mirror moments", note: "The first night we spent together, sharing warmth and laughter", focus: "center 40%" },
    { type: "photo", src: "photos/03.jpg", caption: "Golden hour, side by side", note: "The beautiful moment when we were side by side, basking in the warm light at the bench near the connector of your college hostel blocks", focus: "center 50%" },
    { type: "photo", src: "photos/04.jpg", caption: "My favourite view", note: "The meeting right after I was fresh out of college having completed my course, I was so happy to see you", focus: "center 35%" },

    {
      type: "text",
      title: "A memory I treasure",
      paragraphs: ["The first time we said that we loved each other, it was a quiet moment, just the two of us, and it felt like the world paused for us. I treasure that memory because it was the moment I realized how deeply I felt for you."]
    },

    /* ---------------- PHOTOS 5-8 ---------------- */
    { type: "photo", src: "photos/05.jpg", caption: "Soft and sleepy", note: "That moment when we were together sitting in the backseat of the car, sharing a quiet drive across Delhi, with the city lights flickering outside while we talked about the sweetest things", focus: "center 35%" },
    { type: "photo", src: "photos/06.jpg", caption: "Cheek kisses", note: "The gentle way you pull and kiss my cheeks, making me feel so loved and protected", focus: "center 35%" },
    { type: "photo", src: "photos/07.jpg", caption: "Bows and giggles", note: "The way you make the most unfunny jokes, even then I laugh (your'e welcome), and yet that makes me think how lucky I am to have you in my life", focus: "center 40%" },
    { type: "photo", src: "photos/08.jpg", caption: "Night out", note: "The iconic hard launch moment when we posted this pic and marked it as the beginning of our journey", focus: "center 45%" },

    {
      type: "text",
      title: "Something I love about us",
      paragraphs: ["At the heart of it, I love how we can be ourselves around each other, how we can share our dreams, fears and silly moments without hesitation. It's a love that feels safe, warm and endlessly comforting."]
    },

    /* ---------------- PHOTOS 9-12 ---------------- */
    { type: "photo", src: "photos/09.jpg", caption: "Polaroid us", note: "Just the two of us, captured in a moment of pure joy, well for me a confusing moment but I loved it", focus: "center 40%" },
    { type: "photo", src: "photos/10.jpg", caption: "Holding on", note: "Your hands on mine, a simple gesture that speaks volumes about our connection", focus: "center 50%" },
    { type: "photo", src: "photos/11.jpg", caption: "Sunset feet", note: "Trying to capture a pinterest inspiration and successfully creating a beautiful memory", focus: "center 50%" },
    { type: "photo", src: "photos/12.jpg", caption: "Hearts and teddies", note: "The first time we shared a drink, it was a simple moment but I was overwhelmed with joy to meet my love after so long", focus: "center 35%" },

    {
      type: "text",
      title: "What I'm looking forward to",
      paragraphs: ["I'm looking forward to all the adventures we have coming, the memories we'll create, and the love we'll continue to share. Here's to many more years of happiness together."]
    },

    /* ---------------- PHOTOS 13-16 ---------------- */
    { type: "photo", src: "photos/13.jpg", caption: "All dressed up", note: "I could spend hours looking at this picture, that dress was absolutely stunning I genuinely almost cried", focus: "center 55%" },
    { type: "photo", src: "photos/14.jpg", caption: "Same path, together", note: "No matter where life takes us, I know we'll always find our way back to each other", focus: "center 50%" },
    { type: "photo", src: "photos/15.jpg", caption: "Our safe place", note: "I will always be here for you, through the good and the hard times and I know you will be there for me too", focus: "center 50%" },
    { type: "photo", src: "photos/16.jpg", caption: "Hand in hand", note: "At the end of the day, I will always be your one and only Twinkie Gulaam", focus: "center 40%" },

    {
      type: "list",
      title: "Why I love you",
      items: [
        "Your smile and laugh can fix my worst day",
        "You are one of the purest souls I know",
        "You make everything feel like home",
        "You are my best friend and my greatest love",
        "You make even the ordinary moments special"
      ]
    },

    {
      type: "text",
      paragraphs: [
        "Since you came into my world, everything feels warmer, brighter and so full of love. You've become my safe place, my happiness, my comfort and the most beautiful part of my life.",
        "You're not just special, you're rare, irreplaceable and truly a gem in every sense."
      ]
    },

    {
      type: "end",
      paragraphs: [
        "We've had our hard days too, and I'm sorry for every time I made things harder for you. But you stayed, you kept choosing us, and I will never take that for granted.",
        "I hope you always feel how deeply you are loved, today, tomorrow and forever. I love you more than any words can express and anyone else could."
      ],
      sign: "Forever yours, Shubh"
    }
  ]
};


(function () {
  "use strict";

  var $ = function (id) { return document.getElementById(id); };
  var book = $("book");
  var checkMode = /[?&]check\b/.test(location.search);
  var todoCount = 0;
  var pages = [];
  var idx = 0;

  /* ---------- tiny helpers ---------- */
  function setText(el, text) {
    el.textContent = text;
    if (/\[[^\]]+\]/.test(text)) { el.classList.add("todo"); todoCount++; }
  }
  function mk(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) { e.className = cls; }
    if (text != null) { setText(e, text); }
    return e;
  }

  /* ---------- page builders ---------- */
  function buildCover(p, front) {
    front.classList.add("cover-front");
    var h = mk("h1", "cover-title");
    p.lines.forEach(function (line, i) {
      if (i) { h.appendChild(document.createElement("br")); }
      h.appendChild(document.createTextNode(line));
    });
    front.appendChild(h);
    front.appendChild(mk("div", "cover-heart", "♥"));
    front.appendChild(mk("p", "cover-sub", p.sub));
  }

  function buildText(p, front) {
    if (p.title) { front.appendChild(mk("h2", "pg-title", p.title)); }
    var body = mk("div", "text-body");
    p.paragraphs.forEach(function (t) { body.appendChild(mk("p", null, t)); });
    front.appendChild(body);
  }

  function buildCounter(p, front) {
    front.classList.add("counter-page");
    var ms = Date.now() - new Date(CONFIG.startDate).getTime();
    if (isNaN(ms) || ms < 0) { ms = 0; }
    var days = Math.floor(ms / 86400000);
    var hours = Math.floor(ms / 3600000);
    front.appendChild(mk("h2", "pg-title", p.label));
    front.appendChild(mk("div", "counter-big", days.toLocaleString()));
    front.appendChild(mk("div", "counter-unit", "days"));
    front.appendChild(mk("div", "counter-small",
      "that's " + hours.toLocaleString() + " hours of loving you,\n" + p.after));
    front.lastChild.style.whiteSpace = "pre-line";
  }

  function buildList(p, front) {
    front.appendChild(mk("h2", "pg-title", p.title));
    var ul = mk("ul", "reasons");
    p.items.forEach(function (t) { ul.appendChild(mk("li", null, t)); });
    front.appendChild(ul);
  }

  function buildPhoto(p, front, n) {
    front.classList.add("photo-page");
    var wrap = mk("div", "frame-wrap");
    wrap.appendChild(mk("div", "tape"));
    var frame = mk("div", "frame");
    frame.style.setProperty("--r", (n % 2 ? -1.2 : 1.2) + "deg");
    var img = new Image();
    img.alt = p.caption || "Our memory";
    img.draggable = false;
    img.style.objectPosition = p.focus || "center 35%";
    img.onerror = function () { img.remove(); frame.textContent = "📷"; };
    img.src = p.src;
    frame.appendChild(img);
    wrap.appendChild(frame);
    front.appendChild(wrap);
    if (p.caption) { front.appendChild(mk("p", "cap", p.caption)); }
    if (p.note) { front.appendChild(mk("p", "note", p.note)); }
  }

  function buildEnd(p, front) {
    var body = mk("div", "text-body");
    p.paragraphs.forEach(function (t) { body.appendChild(mk("p", null, t)); });
    front.appendChild(body);
    var f = mk("div", "footer");
    f.appendChild(document.createTextNode(""));
    var s = mk("span", null, p.sign + " ");
    f.appendChild(s);
    f.appendChild(mk("span", "heart-beat", "♥"));
    front.appendChild(f);
  }

  var builders = {
    cover: buildCover, text: buildText, counter: buildCounter,
    list: buildList, photo: buildPhoto, end: buildEnd
  };

  function buildBook() {
    var photoN = 0;
    CONFIG.pages.forEach(function (p, i) {
      var page = document.createElement("div");
      page.className = "page";
      page.style.zIndex = CONFIG.pages.length - i;
      var front = document.createElement("div");
      front.className = "page-front";
      var back = document.createElement("div");
      back.className = "page-back";
      back.textContent = "♡";
      if (p.type === "photo") { photoN++; }
      (builders[p.type] || buildText)(p, front, photoN);
      page.appendChild(front);
      page.appendChild(back);
      book.appendChild(page);
      pages.push(page);
    });
  }

  /* ---------- flipping ---------- */
  function updateUI() {
    $("pageNum").textContent = (idx + 1) + " / " + pages.length;
    $("prevBtn").disabled = idx === 0;
    $("nextBtn").disabled = idx >= pages.length - 1;
  }
  function next() {
    if (idx >= pages.length - 1) { return; }
    var i = idx;
    pages[i].classList.add("flipped");
    setTimeout(function () {
      if (pages[i].classList.contains("flipped")) { pages[i].style.zIndex = i; }
    }, 600);
    idx++;
    updateUI();
  }
  function prev() {
    if (idx <= 0) { return; }
    idx--;
    pages[idx].classList.remove("flipped");
    pages[idx].style.zIndex = pages.length - idx;
    updateUI();
  }

  function setupControls() {
    book.addEventListener("click", function (e) {
      var r = book.getBoundingClientRect();
      if (e.clientX - r.left > r.width / 2) { next(); } else { prev(); }
    });
    $("nextBtn").addEventListener("click", next);
    $("prevBtn").addEventListener("click", prev);
    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { next(); }
      if (e.key === "ArrowLeft") { prev(); }
    });
    var sx = null;
    var stage = $("stage");
    stage.addEventListener("touchstart", function (e) { sx = e.changedTouches[0].clientX; }, { passive: true });
    stage.addEventListener("touchend", function (e) {
      if (sx === null) { return; }
      var dx = e.changedTouches[0].clientX - sx;
      sx = null;
      if (dx < -45) { next(); } else if (dx > 45) { prev(); }
    }, { passive: true });
  }

  function scale() { book.style.setProperty("--u", (book.offsetWidth / 450).toFixed(3)); }

  /* ---------- sparkles ---------- */
  function sparkles() {
    var canvas = $("glitter-canvas");
    for (var i = 0; i < 90; i++) {
      var star = document.createElement("div");
      star.className = "sparkle-star";
      var size = Math.random() * 8 + 4 + "px";
      star.style.width = size;
      star.style.height = size;
      star.style.top = Math.random() * 100 + "vh";
      star.style.left = Math.random() * 100 + "vw";
      star.style.setProperty("--speed", Math.random() * 2 + 1 + "s");
      star.style.animationDelay = Math.random() * 5 + "s";
      canvas.appendChild(star);
    }
  }

  /* ---------- music ---------- */
  function startMusic() {
    if (!CONFIG.music) { return; }
    var bgm = $("bgm"), btn = $("musicBtn");
    if (!bgm.getAttribute("src")) {
      bgm.src = CONFIG.music;
      btn.classList.remove("hidden");
      btn.addEventListener("click", function () {
        if (bgm.paused) { bgm.play().catch(function () {}); btn.classList.remove("off"); }
        else { bgm.pause(); btn.classList.add("off"); }
      });
    }
    bgm.play().catch(function () {});
  }

  /* ---------- gate ---------- */
  function norm(s) { return String(s).toLowerCase().replace(/[^a-z0-9]/g, ""); }
  function isUnlocked() { try { return sessionStorage.getItem("mb_ok") === "1"; } catch (e) { return false; } }
  function remember() { try { sessionStorage.setItem("mb_ok", "1"); } catch (e) {} }

  function openBook() {
    $("gate").classList.add("hidden");
    $("stage").classList.remove("hidden");
    scale();
    startMusic();
  }

  function setupGate() {
    if (!CONFIG.passcode || checkMode || isUnlocked()) { openBook(); return; }
    $("gate").classList.remove("hidden");
    $("gateTitle").textContent = "For " + CONFIG.herName;
    $("gateHint").textContent = CONFIG.passHint || "";
    $("gateForm").addEventListener("submit", function (e) {
      e.preventDefault();
      if (norm($("gateInput").value) === norm(CONFIG.passcode)) {
        remember();
        openBook();
      } else {
        var card = $("gateForm");
        $("gateErr").textContent = "Not quite, try again ♥";
        card.classList.remove("shake");
        void card.offsetWidth;
        card.classList.add("shake");
      }
    });
  }

  /* ---------- init ---------- */
  document.title = "Happy Birthday, " + CONFIG.herName + " ♥";
  sparkles();
  buildBook();
  setupControls();
  updateUI();
  window.addEventListener("resize", scale);

  if (checkMode) {
    document.body.classList.add("check");
    var b = $("banner");
    b.classList.remove("hidden");
    b.textContent = todoCount + " placeholder" + (todoCount === 1 ? "" : "s") +
      " left to fill in (highlighted in yellow). Remove ?check from the link when you're done.";
  }
  setupGate();
})();
