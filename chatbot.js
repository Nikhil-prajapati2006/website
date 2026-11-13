/* =========================================================
   chatbot.js  -  MovieBot: a help chatbot for MovieLab
   ---------------------------------------------------------
   Add ONE line before </body> on any page (after movies.js):
       <script src="movies.js"></script>
       <script src="chatbot.js"></script>

   What it does
   - Greets people and asks what their problem is (tap a button or type).
   - "Can't find a movie": searches movies.js (handles typos). If the movie
     is not there, it offers to send a request.
   - "Movie won't play": quick fixes, then collects the problem.
   - "Suggest me something": picks movies by genre from movies.js.
   - "Something else": answers or collects the message.

   Where requests/problems go
   - Always saved in the visitor's browser (localStorage "movielab_reports").
   - To receive them yourself, paste a webhook URL in CONFIG.endpoint below
     (Formspree, Google Apps Script, Make/Zapier... any URL that accepts a
     JSON POST). Without it, only the visitor's own browser has them.
     Easiest free option: a Google Sheet + Apps Script (steps were given in chat).
     Each row you receive has: type, movie, note, time, page.

   Open it from your own code:  MovieBot.open();  or  MovieBot.open("request", "Interstellar");
   ========================================================= */
(function () {
    "use strict";

    var CONFIG = {
        botName: "MovieBot",
        endpoint: "",                    // <- paste your webhook / Formspree URL here (optional)
        storageKey: "movielab_reports"
    };

    /* ---------------- helpers ---------------- */
    function norm(t) { return String(t || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim(); }
    function lev(a, b) {
        if (a === b) return 0;
        var m = a.length, n = b.length, i, j, prev = [], cur = [];
        if (!m) return n; if (!n) return m;
        for (j = 0; j <= n; j++) prev[j] = j;
        for (i = 1; i <= m; i++) {
            cur[0] = i;
            for (j = 1; j <= n; j++) {
                cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1));
            }
            prev = cur.slice();
        }
        return prev[n];
    }
    function shuffle(a) {
        a = a.slice();
        for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
        return a;
    }
    function readLS(k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
    function writeLS(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

    /* ---------------- movie data (from movies.js) ---------------- */
    function db() {
        try {
            // the gallery div on index.html has id="movies", so make sure we got the data object
            if (typeof movies !== "undefined" && movies && !(movies instanceof Element)) return movies;
        } catch (e) {}
        return {};
    }
    function movieList() {
        var d = db();
        return Object.keys(d).map(function (id) {
            var m = d[id] || {};
            return {
                id: id,
                title: m.title || id,
                year: (m.pills && m.pills[0]) || "",
                genres: m.genres || [],
                poster: typeof m.poster === "string" ? m.poster : ""
            };
        });
    }
    // score: 100 exact, 80 contains, 70 typed more than the title, 60 all words, 50 close spelling
    function findMovies(q) {
        var nq = norm(q);
        if (nq.length < 2) return [];
        var words = nq.split(" "), out = [];
        movieList().forEach(function (m) {
            var t = norm(m.title), s = 0;
            if (t === nq || norm(m.id) === nq) s = 100;
            else if (t.indexOf(nq) !== -1) s = 80;
            else if (t.length >= 4 && nq.indexOf(t) !== -1) s = 70;
            else if (words.every(function (w) { return t.indexOf(w) !== -1; })) s = 60;
            else if (lev(t, nq) <= Math.max(1, Math.floor(Math.max(t.length, nq.length) / 5))) s = 50;
            if (s) out.push({ m: m, s: s });
        });
        out.sort(function (a, b) { return b.s - a.s || a.m.title.localeCompare(b.m.title); });
        return out;
    }
    // "I want to watch Interstellar please" -> "Interstellar"
    function lightClean(t) {
        return String(t || "").replace(/[?!.]+$/g, "")
            .replace(/^(please\s+)?(i\s+)?(want|need|am looking for|'?m looking for|looking for|wanna|can you add|could you add|add|search|find|watch)\s+(to\s+)?(watch\s+|see\s+|find\s+)?/i, "")
            .replace(/\s+(movie|film)\s*(please|pls)?$/i, "").replace(/\s+(please|pls)$/i, "")
            .replace(/^(the movie|movie|film)\s+/i, "").trim();
    }
    var FILLER = /\b(i|i'm|im|me|my|we|can|could|you|please|pls|want|wanna|need|to|watch|see|find|looking|look|for|add|request|movie|movies|film|films|is|are|not|available|cant|can't|cannot|missing|where|do|does|have|don't|dont|there|this|that|it|on|here|site|website|some|about|search|searching|tell|give|a|an|am|how|what|why|help|problem)\b/gi;
    function extractTitle(t) {
        return String(t || "").replace(FILLER, " ").replace(/[?!.,]+/g, " ").replace(/\s+/g, " ").trim();
    }

    /* ---------------- saving requests / problems ---------------- */
    function saveReport(r) {
        r.time = new Date().toISOString();
        r.page = (location.pathname.split("/").pop() || "index.html");
        var arr = readLS(CONFIG.storageKey, []);
        arr.push(r);
        if (arr.length > 100) arr = arr.slice(-100);
        writeLS(CONFIG.storageKey, arr);
        if (CONFIG.endpoint) {
            try {
                // text/plain + no-cors is a "simple" request, so Google Apps Script accepts it
                // from any website without extra setup (the reply is hidden, which is fine here)
                fetch(CONFIG.endpoint, {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "text/plain;charset=utf-8" },
                    body: JSON.stringify(r)
                }).catch(function () {});
            } catch (e) {}
        }
    }

    /* ---------------- styles ---------------- */
    var css = [
        ".mb-launch{position:fixed;left:24px;bottom:24px;z-index:400;width:78px;height:78px;border-radius:50%;border:3px solid #111;cursor:pointer;background:var(--accent,#E57130);color:#111;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 30px rgba(0,0,0,.6),0 0 0 3px color-mix(in srgb, var(--accent,#E57130) 35%, transparent);transition:transform .25s,background .25s}",
        ".mb-launch svg{width:40px;height:40px}",
        ".mb-launch::after{content:'';position:absolute;inset:-6px;border-radius:50%;border:3px solid var(--accent,#E57130);opacity:0;animation:mbPulse 2.2s ease-out infinite;pointer-events:none}",
        "@keyframes mbPulse{0%{transform:scale(.9);opacity:.8}100%{transform:scale(1.45);opacity:0}}",
        ".mb-launch:hover{transform:translateY(-3px) scale(1.06);background:var(--accent-dark,#C95E22)}",
        ".mb-launch.hide{display:none}",
        ".mb-tip{position:fixed;left:116px;bottom:40px;z-index:400;max-width:210px;padding:10px 14px;font:14px/1.4 'Outfit',Arial,sans-serif;color:#fff;background:var(--bg-soft,#151515);border:1px solid rgba(255,255,255,.12);border-radius:12px 12px 12px 4px;box-shadow:0 8px 24px rgba(0,0,0,.45);cursor:pointer;animation:mbIn .3s ease}",
        ".mb-panel{position:fixed;left:24px;bottom:24px;z-index:401;width:370px;max-width:calc(100vw - 24px);height:min(600px,calc(100vh - 40px));display:none;flex-direction:column;overflow:hidden;background:var(--bg,#000000);color:#fff;font-family:'Outfit',Arial,sans-serif;font-size:14px;border:1px solid rgba(255,255,255,.12);border-radius:16px;box-shadow:0 24px 60px rgba(0,0,0,.65)}",
        ".mb-panel.open{display:flex;animation:mbIn .25s ease}",
        "@keyframes mbIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}",
        ".mb-head{display:flex;align-items:center;gap:10px;padding:14px 14px 14px 16px;background:var(--bg-soft,#151515);border-bottom:1px solid rgba(255,255,255,.08)}",
        ".mb-avatar{width:36px;height:36px;border-radius:50%;background:var(--accent,#E57130);color:#111;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}",
        ".mb-title{flex:1;min-width:0;line-height:1.25}",
        ".mb-title b{display:block;font-size:15px}",
        ".mb-title span{font-size:12px;color:#9aa4b5}",
        ".mb-icon{background:none;border:1px solid rgba(255,255,255,.15);color:#ccc;width:32px;height:32px;border-radius:8px;cursor:pointer;font-size:15px;line-height:1}",
        ".mb-icon:hover{color:var(--accent,#E57130);border-color:var(--accent,#E57130)}",
        ".mb-body{flex:1;overflow-y:auto;padding:16px 14px 6px;display:flex;flex-direction:column;gap:10px;scroll-behavior:smooth}",
        ".mb-msg{display:flex;max-width:88%;animation:mbIn .2s ease}",
        ".mb-msg.bot{align-self:flex-start}",
        ".mb-msg.user{align-self:flex-end}",
        ".mb-bubble{padding:10px 13px;line-height:1.55;white-space:pre-line;word-break:break-word;border-radius:14px}",
        ".mb-msg.bot .mb-bubble{background:var(--bg-soft,#151515);border-bottom-left-radius:4px}",
        ".mb-msg.user .mb-bubble{background:var(--accent,#E57130);color:#111;border-bottom-right-radius:4px;font-weight:500}",
        ".mb-typing{display:flex;gap:4px;padding:13px 14px}",
        ".mb-typing i{width:6px;height:6px;border-radius:50%;background:#9aa4b5;animation:mbDot 1s infinite}",
        ".mb-typing i:nth-child(2){animation-delay:.15s}.mb-typing i:nth-child(3){animation-delay:.3s}",
        "@keyframes mbDot{0%,60%,100%{opacity:.3;transform:none}30%{opacity:1;transform:translateY(-3px)}}",
        ".mb-cards{display:flex;flex-direction:column;gap:8px;align-self:stretch;animation:mbIn .2s ease}",
        ".mb-card{display:flex;align-items:center;gap:12px;padding:8px;text-decoration:none;color:#fff;background:var(--bg-soft,#151515);border:1px solid rgba(255,255,255,.08);border-radius:10px;transition:border-color .25s}",
        ".mb-card:hover{border-color:var(--accent,#E57130)}",
        ".mb-thumb{width:38px;height:54px;flex-shrink:0;border-radius:5px;background:var(--bg,#000000);color:var(--accent,#E57130);font-weight:700;display:flex;align-items:center;justify-content:center;object-fit:cover;overflow:hidden}",
        ".mb-card b{display:block;font-size:14px}",
        ".mb-card small{color:#9aa4b5;font-size:12px}",
        ".mb-card em{margin-left:auto;font-style:normal;color:var(--accent,#E57130);font-size:12px;white-space:nowrap}",
        ".mb-chips{display:flex;flex-wrap:wrap;gap:8px;padding:6px 14px 12px}",
        ".mb-chips:empty{display:none}",
        ".mb-chip{cursor:pointer;background:none;color:var(--accent,#E57130);border:1px solid var(--accent,#E57130);border-radius:18px;padding:7px 13px;font-size:13px;text-decoration:none;transition:background .2s,color .2s}",
        ".mb-chip:hover{background:var(--accent,#E57130);color:#111}",
        ".mb-form{display:flex;gap:8px;padding:12px;border-top:1px solid rgba(255,255,255,.08);background:var(--bg-soft,#151515)}",
        ".mb-form input{flex:1;min-width:0;background:var(--bg,#000000);color:#fff;border:1px solid rgba(255,255,255,.12);border-radius:22px;padding:10px 15px;font:inherit;outline:none}",
        ".mb-form input:focus{border-color:var(--accent,#E57130)}",
        ".mb-form button{width:42px;height:42px;flex-shrink:0;border:none;border-radius:50%;background:var(--accent,#E57130);color:#111;cursor:pointer;font-size:17px}",
        ".mb-form button:disabled{opacity:.5;cursor:default}",
        "@media (max-width:480px){.mb-launch{width:68px;height:68px;left:16px;bottom:16px}.mb-launch svg{width:34px;height:34px}.mb-form input{font-size:16px}.mb-panel{right:0;left:0;bottom:0;width:100%;max-width:none;height:88vh;border-radius:16px 16px 0 0}.mb-tip{display:none}}",
        "@media (prefers-reduced-motion:reduce){.mb-msg,.mb-cards,.mb-panel.open,.mb-tip{animation:none}.mb-typing i{animation:none}.mb-launch::after{animation:none;display:none}}"
    ].join("\n");

    /* ---------------- build the widget ---------------- */
    var els = {}, started = false, epoch = 0, chain = Promise.resolve();
    var state = { step: null, purpose: null, movie: "" };

    function el(tag, cls, text) {
        var e = document.createElement(tag);
        if (cls) e.className = cls;
        if (text != null) e.textContent = text;
        return e;
    }

    function build() {
        var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

        els.launch = el("button", "mb-launch");
        els.launch.type = "button";
        els.launch.setAttribute("aria-label", "Open help chat");
        els.launch.innerHTML = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>';

        els.panel = el("div", "mb-panel");
        els.panel.setAttribute("role", "dialog");
        els.panel.setAttribute("aria-label", CONFIG.botName + " help chat");

        var head = el("div", "mb-head");
        head.appendChild(el("div", "mb-avatar", "🎬"));
        var title = el("div", "mb-title");
        title.appendChild(el("b", null, CONFIG.botName));
        title.appendChild(el("span", null, "Tell me your problem, I'll help"));
        head.appendChild(title);
        var restart = el("button", "mb-icon", "↻"); restart.type = "button"; restart.title = "Start over"; restart.setAttribute("aria-label", "Start over");
        var close = el("button", "mb-icon", "✕"); close.type = "button"; close.title = "Close"; close.setAttribute("aria-label", "Close chat");
        head.appendChild(restart); head.appendChild(close);

        els.body = el("div", "mb-body");
        els.body.setAttribute("aria-live", "polite");
        els.chips = el("div", "mb-chips");

        var form = el("form", "mb-form");
        els.input = el("input"); els.input.type = "text"; els.input.maxLength = 200;
        els.input.placeholder = "Type your problem..."; els.input.setAttribute("aria-label", "Type your message"); els.input.autocomplete = "off";
        els.send = el("button", null, "➤"); els.send.type = "submit"; els.send.setAttribute("aria-label", "Send");
        form.appendChild(els.input); form.appendChild(els.send);

        els.panel.appendChild(head); els.panel.appendChild(els.body); els.panel.appendChild(els.chips); els.panel.appendChild(form);
        document.body.appendChild(els.launch);
        document.body.appendChild(els.panel);

        els.launch.addEventListener("click", function () { openPanel(); });
        close.addEventListener("click", closePanel);
        restart.addEventListener("click", function () { startChat(); });
        els.panel.addEventListener("keydown", function (e) { if (e.key === "Escape") closePanel(); });
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            var t = els.input.value.trim();
            if (!t) return;
            els.input.value = "";
            userSays(t);
            handleText(t);
        });

        // one small hint per visit, until the chat is opened
        try {
            if (!sessionStorage.getItem("mb_tip")) {
                setTimeout(function () {
                    if (started || els.panel.classList.contains("open")) return;
                    var tip = el("div", "mb-tip", "Can't find a movie or have a problem? Ask me!");
                    tip.onclick = function () { openPanel(); };
                    document.body.appendChild(tip);
                    els.tip = tip;
                    try { sessionStorage.setItem("mb_tip", "1"); } catch (e) {}
                    setTimeout(function () { if (tip.parentNode) tip.remove(); }, 9000);
                }, 5000);
            }
        } catch (e) {}
    }

    function openPanel() {
        if (els.tip && els.tip.parentNode) els.tip.remove();
        els.panel.classList.add("open");
        els.launch.classList.add("hide");
        if (!started) startChat();
        setTimeout(function () { els.input.focus(); }, 50);
    }
    function closePanel() {
        els.panel.classList.remove("open");
        els.launch.classList.remove("hide");
        els.launch.focus();
    }

    /* ---------------- message output ---------------- */
    function scroll() { els.body.scrollTop = els.body.scrollHeight; }

    function userSays(text) {
        epoch++; clearChips();
        var m = el("div", "mb-msg user"); m.appendChild(el("div", "mb-bubble", text));
        els.body.appendChild(m); scroll();
    }
    function say(text) {
        chain = chain.then(function () {
            return new Promise(function (resolve) {
                var t = el("div", "mb-msg bot"); var b = el("div", "mb-bubble mb-typing");
                b.appendChild(el("i")); b.appendChild(el("i")); b.appendChild(el("i"));
                t.appendChild(b); els.body.appendChild(t); scroll();
                setTimeout(function () {
                    t.remove();
                    var m = el("div", "mb-msg bot"); m.appendChild(el("div", "mb-bubble", text));
                    els.body.appendChild(m); scroll(); resolve();
                }, Math.min(900, 350 + text.length * 7));
            });
        });
    }
    function cards(found) {
        chain = chain.then(function () {
            var box = el("div", "mb-cards");
            found.forEach(function (m) {
                var a = el("a", "mb-card"); a.href = "movie.html?id=" + encodeURIComponent(m.id);
                var thumb;
                if (m.poster) {
                    thumb = el("img", "mb-thumb"); thumb.src = m.poster; thumb.alt = "";
                    thumb.onerror = function () { var f = el("div", "mb-thumb", m.title.charAt(0)); this.replaceWith(f); };
                } else { thumb = el("div", "mb-thumb", m.title.charAt(0)); }
                var info = el("div");
                info.appendChild(el("b", null, m.title));
                info.appendChild(el("small", null, [m.year].concat((m.genres || []).slice(0, 2)).filter(Boolean).join(" • ")));
                a.appendChild(thumb); a.appendChild(info); a.appendChild(el("em", null, "Open →"));
                box.appendChild(a);
            });
            els.body.appendChild(box); scroll();
        });
    }
    function clearChips() { els.chips.innerHTML = ""; }
    function chips(list) {
        var e = epoch;
        chain = chain.then(function () {
            if (e !== epoch) return;            // the user already moved on
            clearChips();
            list.forEach(function (c) {
                var b;
                if (c.href) { b = el("a", "mb-chip", c.label); b.href = c.href; }
                else {
                    b = el("button", "mb-chip", c.label); b.type = "button";
                    b.onclick = function () { userSays(c.label); handleChip(c.action, c); };
                }
                els.chips.appendChild(b);
            });
            scroll();
        });
    }

    /* ---------------- conversation ---------------- */
    var MAIN = [
        { label: "🔍 I can't find a movie", action: "find" },
        { label: "▶ A movie won't play", action: "play" },
        { label: "➕ Request a movie", action: "request" },
        { label: "🎯 Suggest me something", action: "suggest" },
        { label: "💬 Something else", action: "other" }
    ];

    function resetState() { state = { step: null, purpose: null, movie: "" }; }

    function startChat() {
        started = true; epoch++; chain = Promise.resolve(); resetState();
        els.body.innerHTML = ""; clearChips();
        say("Hi! I'm " + CONFIG.botName + " 🎬");
        say("What's your problem today? Tap an option below, or just type it.");
        chips(MAIN);
    }

    function anythingElse() { say("Is there anything else I can help with?"); chips(MAIN); }

    function askMovie(purpose) {
        state = { step: "askMovie", purpose: purpose, movie: "" };
        say(purpose === "play" ? "Sorry about that! Which movie is giving you trouble?" : "Sure! Which movie are you looking for? Type its name.");
    }

    function offerRequest(name) {
        state.step = "confirmRequest"; state.movie = name;
        say("Do you want me to send a request to add it?");
        chips([{ label: "Yes, send request", action: "yes" }, { label: "No thanks", action: "no" }]);
    }

    function processMovie(raw, purpose) {
        var name = lightClean(raw).slice(0, 80) || raw.slice(0, 80);
        state.movie = name;
        var res = findMovies(name);
        if (!res.length) {                          // try again without filler words
            var t = extractTitle(raw);
            if (t && t !== name) { name = t.slice(0, 80); state.movie = name; res = findMovies(name); }
        }
        if (res.length && res[0].s >= 60) {
            var top = res.filter(function (r) { return r.s >= 60; }).slice(0, 3).map(function (r) { return r.m; });
            say(purpose === "play" ? "I found it on MovieLab:" : "Good news, it's already on MovieLab! 🎉");
            cards(top);
            if (purpose === "play") playTips();
            else { state.step = null; anythingElse(); }
        } else if (res.length) {
            say("I couldn't find “" + name + "” exactly. Did you mean one of these?");
            cards(res.slice(0, 3).map(function (r) { return r.m; }));
            state.step = "didYouMean";
            chips([{ label: "No, request mine", action: "notmean" }, { label: "Yes, thanks!", action: "done" }]);
        } else {
            say("Sorry, “" + name + "” isn't on MovieLab yet.");
            offerRequest(name);
        }
    }

    function playTips() {
        state.step = "askFixed";
        say("Please try these quick fixes:\n1) Refresh the page\n2) Check your internet connection\n3) Try another browser, and turn off VPN or ad-blocker\n4) Wait a minute, big videos can take time to start");
        say("Did that fix it?");
        chips([{ label: "✅ Yes, fixed", action: "fixed" }, { label: "❌ Still not working", action: "notfixed" }]);
    }

    function suggest(genre) {
        var all = movieList();
        var pool = genre === "*" ? all : all.filter(function (m) {
            return (m.genres || []).some(function (g) { return norm(g) === norm(genre); });
        });
        if (!pool.length) { say("I don't have any " + genre + " movies yet."); anythingElse(); return; }
        say(genre === "*" ? "How about one of these?" : "Here are some " + genre + " picks:");
        cards(shuffle(pool).slice(0, 3));
        chips([{ label: "🔄 Show others", action: "genre:" + genre }, { label: "That's all", action: "done" }]);
    }

    function sendRequest(note) {
        saveReport({ type: "movie_request", movie: state.movie, note: note || "" });
        state.step = null;
        say("Done! Your request for “" + state.movie + "” is sent ✅ The most requested movies get added first.");
        anythingElse();
    }

    function handleChip(a, chip) {
        if (a === "find" || a === "request") return askMovie(a);
        if (a === "play") return askMovie("play");
        if (a === "other") {
            state = { step: "askDescribe", purpose: "other", movie: "" };
            return say("Please describe your problem in one message and I'll pass it to the team.");
        }
        if (a === "suggest") {
            state.step = null;
            var g = {}; movieList().forEach(function (m) { (m.genres || []).forEach(function (x) { g[x] = (g[x] || 0) + 1; }); });
            var top = Object.keys(g).sort(function (x, y) { return g[y] - g[x]; }).slice(0, 7);
            say("What are you in the mood for?");
            chips(top.map(function (x) { return { label: x, action: "genre:" + x }; }).concat([{ label: "🎲 Surprise me", action: "genre:*" }]));
            return;
        }
        if (a.indexOf("genre:") === 0) return suggest(a.slice(6));
        if (a === "yes") { state.step = "askNote"; say("Any extra detail, like year, language or version? Type it, or tap Skip."); chips([{ label: "Skip", action: "skip" }]); return; }
        if (a === "skip") return sendRequest("");
        if (a === "no") { state.step = null; say("No problem! 👍"); return anythingElse(); }
        if (a === "notmean") { return offerRequest(state.movie); }
        if (a === "fixed") { state.step = null; say("Great, enjoy the movie! 🍿"); return anythingElse(); }
        if (a === "notfixed") {
            state.step = "askDescribe"; state.purpose = "play";
            return say("Sorry about that. What do you see? (black screen, buffering, an error message...) I'll pass it to the team.");
        }
        if (a === "done") { state.step = null; say("Happy watching! 🎬 If you need me again, I'm right here."); return; }
    }

    var YES = /^(y|yes|yeah|yep|yup|sure|ok|okay|send|please do|do it)\b/i;
    var NO = /^(n|no|nope|nah|cancel|don'?t|dont)\b/i;

    function handleText(text) {
        var step = state.step;

        if (step === "askMovie") return processMovie(text, state.purpose);
        if (step === "confirmRequest") {
            if (YES.test(text)) return handleChip("yes");
            if (NO.test(text)) return handleChip("no");
        }
        if (step === "askNote") return sendRequest(text.slice(0, 140));
        if (step === "askFixed") {
            if (YES.test(text) || /fixed|works|working now/i.test(text)) return handleChip("fixed");
            if (NO.test(text) || /still|not working|didn'?t/i.test(text)) return handleChip("notfixed");
        }
        if (step === "didYouMean") {
            if (YES.test(text)) return handleChip("done");
            if (NO.test(text)) return handleChip("notmean");
        }
        if (step === "askDescribe") {
            saveReport({ type: state.purpose === "play" ? "playback_problem" : "feedback", movie: state.movie, note: text.slice(0, 200) });
            state.step = null;
            say("Thank you! I've passed that to the team. 🙏");
            return anythingElse();
        }

        // no active question: work out what the person needs
        state.step = null;
        var low = text.toLowerCase();

        if (/^(hi+|hello+|hey+|hola|namaste)\b/.test(low)) { say("Hello! 👋 What problem can I help you with?"); return chips(MAIN); }
        if (/\b(thanks|thank you|thx)\b/.test(low)) { return say("You're welcome! 😊"); }
        if (/^(bye|goodbye|that'?s all|nothing)\b/.test(low)) { return say("Bye! Enjoy your movies. 🍿"); }
        if (/\b(suggest|recommend|what should i watch|something to watch|bored)\b/.test(low)) return handleChip("suggest");
        if (/\b(play|playing|buffer|buffering|loading|black screen|stuck|freez|video|stream|not working|error|crash)\b/.test(low)) {
            var guess = extractTitle(text);
            state.purpose = "play";
            if (guess.length >= 2 && findMovies(guess).length) return processMovie(guess, "play");
            return askMovie("play");
        }

        // maybe they simply typed a movie name
        var direct = findMovies(lightClean(text));
        if (direct.length && direct[0].s >= 60) return processMovie(text, "find");

        if (/\b(request|add|missing|not available|can'?t find|cannot find|not found|don'?t have|dont have|where is|looking for|want|watch|need)\b/.test(low)) {
            var t = extractTitle(text);
            if (t.length >= 2) return processMovie(t, "request");
            return askMovie("request");
        }

        // fallback: it might be a title with a typo
        if (direct.length) return processMovie(text, "find");
        say("I'm not sure I understood that. Which of these is closest to your problem?");
        chips(MAIN);
    }

    /* ---------------- public API ---------------- */
    window.MovieBot = {
        // MovieBot.open() or MovieBot.open("request", "Interstellar")
        open: function (mode, movieName) {
            openPanel();
            if (mode === "request" && movieName) {
                userSays("I'm looking for “" + movieName + "”");
                state = { step: null, purpose: "request", movie: "" };
                say("Let me check for “" + movieName + "”…");
                processMovie(movieName, "request");
            }
        },
        close: closePanel,
        // everything this browser has sent: MovieBot.getReports()
        getReports: function () { return readLS(CONFIG.storageKey, []); }
    };

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
    else build();
})();
