const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]'),
    tooltipList = [...tooltipTriggerList].map(n => new bootstrap.Tooltip(n));

function showModal(n) {
    var e = document.getElementById(n);
    newModal = new bootstrap.Modal(e), newModal.show()
}
var backToTopIndicator = function() {
    var n = document.getElementById("backToTopButton"),
        e = document.documentElement.scrollTop,
        t = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        o = Math.round(100 * e / t);
    n.style.display = e > 100 ? "block" : "none", n.addEventListener("click", () => { document.documentElement.scrollTop = 0 }), n.style.background = `conic-gradient(#9e3228 ${o}%, #ffffffcc ${o}%)`
};
window.onscroll = backToTopIndicator, window.onload = backToTopIndicator;
var isCollapseOperationValied = !0;

function collapseIconToggler(n, e) {
    var t = document.getElementById(n);
    t.innerHTML == e + '&nbsp;&nbsp;<i class="bi bi-chevron-up canvas-icn"></i>' ? t.innerHTML = e + '&nbsp;&nbsp;<i class="bi bi-chevron-down canvas-icn"></i>' : t.innerHTML == e + '&nbsp;&nbsp;<i class="bi bi-chevron-down canvas-icn"></i>' && (t.innerHTML = e + '&nbsp;&nbsp;<i class="bi bi-chevron-up canvas-icn"></i>'), isCollapseOperationValied = !0
}

function collapseIconTogglerStart(n, e) { isCollapseOperationValied && (isCollapseOperationValied = !1, collapseIconToggler(n, e)) }
var isoffCanvasIcnCahangeValied = !0;

function offCanvasIconToggler() { var n = document.getElementById("offcanvas-menu-icn"); "bi bi-list fs-mod4" == n.classList ? n.classList = "bi bi-x-lg fs-mod4" : "bi bi-x-lg fs-mod4" == n.classList && (n.classList = "bi bi-list fs-mod4"), isoffCanvasIcnCahangeValied = !0 }
var isOffcanvasOperationValied = !0;

function offCanvasIconTogglerStart() { isOffcanvasOperationValied && (isoffCanvasIcnCahangeValied = !1, offCanvasIconToggler()) }

function wrapUp() { document.querySelector(".intro-wrapper").style.top = "-100vh" }

function toggleTheme(n) {
    var e, t = document.cookie.split("; "),
        o = !1;
    for (var a of t)
        if ("crnt_thm" == a.split("=")[0] && ("lgt_thm" == a.split("=")[1] || "drk_thm" == a.split("=")[1])) { o = !0, e = a.split("=")[1]; break }
    o ? "lgt_thm" == e ? null == n || 1 != n || document.body.classList.contains("dark-theme") ? (document.body.classList.remove("dark-theme"), document.getElementById("theme-toggle-btn").innerHTML = "<i class='bi bi-moon fs-mod5 canvas-icn'></i>&nbsp;&nbsp;Dark Theme", darkModeAddPresentChecker()) : (document.cookie = "crnt_thm=drk_thm", document.body.classList.add("dark-theme"), document.getElementById("theme-toggle-btn").innerHTML = "<i class='bi bi-sun fs-mod5 canvas-icn'></i>&nbsp;&nbsp;Light Theme", darkModeAddPresentStop()) : "drk_thm" == e && (null != n && 1 == n && document.body.classList.contains("dark-theme") ? (document.cookie = "crnt_thm=lgt_thm", document.body.classList.remove("dark-theme"), document.getElementById("theme-toggle-btn").innerHTML = "<i class='bi bi-moon fs-mod5 canvas-icn'></i>&nbsp;&nbsp;Dark Theme", darkModeAddPresentChecker()) : (document.body.classList.add("dark-theme"), document.getElementById("theme-toggle-btn").innerHTML = "<i class='bi bi-sun fs-mod5 canvas-icn'></i>&nbsp;&nbsp;Light Theme", darkModeAddPresentStop())) : (document.cookie = "crnt_thm=lgt_thm", document.body.classList.contains("dark-theme") && (document.body.classList.remove("dark-theme"), document.getElementById("theme-toggle-btn").innerHTML = "<i class='bi bi-moon fs-mod5 canvas-icn'></i>&nbsp;&nbsp;Dark Theme"), darkModeAddPresentChecker())
}
document.addEventListener("readystatechange", n => { "complete" === n.target.readyState && (toggleTheme(), setTimeout(wrapUp, 2500)) });
var offcanvas = document.getElementById("offcanvas");
offcanvas.addEventListener("hidden.bs.offcanvas", function() { offCanvasIconTogglerStart() }), offcanvas.addEventListener("show.bs.offcanvas", function() { offCanvasIconTogglerStart() });
var isNationalAnthemOperationValied = !0,
    nationalAnthemAudioVolumn = .4;
const nationalAnthemSound = new Audio("resources/audio/national_anthem_audio.mp3");

function nationalAnthemSoundPlay() { nationalAnthemSound.volume = nationalAnthemAudioVolumn, nationalAnthemSound.loop = !0, nationalAnthemSound.play() }

function nationalAnthemSoundPause() { nationalAnthemSound.pause() }
var isNationalAnthemStopOperationValied = !1;

function nationalAnthemSoundStop() { nationalAnthemSound.pause(), nationalAnthemSound.currentTime = 0, isNationalAnthemOperationValied ? (isNationalAnthemOperationValied = !1, document.getElementById("anthem-player-ui-btn").innerHTML = "<i class='bi bi-pause fs-5 f-color1'></i>") : (isNationalAnthemOperationValied = !0, document.getElementById("anthem-player-ui-btn").innerHTML = "<i class='bi bi-play fs-5 f-color1'></i>") }

function nationalAnthemSoundStopStarter() { isNationalAnthemStopOperationValied && (nationalAnthemSoundStop(), isNationalAnthemStopOperationValied = !1, isNationalAnthemSoundChangeOperationValied = !1, nationalAnthemAudioVolumn = .4) }

function nationalAnthemSoundStarter() { isNationalAnthemOperationValied ? (nationalAnthemSoundPlay(), isNationalAnthemOperationValied = !1, isNationalAnthemStopOperationValied = !0, isNationalAnthemSoundChangeOperationValied = !0, document.getElementById("anthem-player-ui-btn").innerHTML = "<i class='bi bi-pause fs-5 f-color1'></i>") : (nationalAnthemSoundPause(), isNationalAnthemOperationValied = !0, isNationalAnthemStopOperationValied = !1, isNationalAnthemSoundChangeOperationValied = !1, document.getElementById("anthem-player-ui-btn").innerHTML = "<i class='bi bi-play fs-5 f-color1'></i>") }
var isNationalAnthemSoundChangeOperationValied = !1;

function nationalAnthemSoundChange(n) { n ? 10 * nationalAnthemAudioVolumn + 2 <= 8 && (nationalAnthemAudioVolumn = (10 * nationalAnthemAudioVolumn + 2) / 10) : 10 * nationalAnthemAudioVolumn - 2 > 0 && (nationalAnthemAudioVolumn = (10 * nationalAnthemAudioVolumn - 2) / 10), nationalAnthemSound.volume = nationalAnthemAudioVolumn }

function nationalAnthemSoundChangeStarter(n) { isNationalAnthemSoundChangeOperationValied && nationalAnthemSoundChange(n) }
var darkModeAddPresentId = 0;

function darkModeAddPresentChecker() {
    var n, e, t = document.cookie.split("; "),
        o = !1,
        a = !1;
    for (var i of t)
        if ("crnt_thm" == i.split("=")[0] && ("lgt_thm" == i.split("=")[1] || "drk_thm" == i.split("=")[1])) { o = !0, e = i.split("=")[1]; break }
    for (var i of t)
        if ("drk_thm_add" == i.split("=")[0] && ("shwed" == i.split("=")[1] || "nt_shwed" == i.split("=")[1])) { a = !0, n = i.split("=")[1]; break }
    o && (a ? "lgt_thm" == e && "nt_shwed" == n ? (setTimeout(function() { showModal("dark-mode-add") }, 8500), document.cookie = "drk_thm_add=shwed") : "lgt_thm" == e && "shwed" == n && (darkModeAddPresentId = setInterval(function() { document.getElementById("dark-mode-add").classList.contains("show") || showModal("dark-mode-add") }, 12e4)) : (document.cookie = "drk_thm_add=nt_shwed", darkModeAddPresentChecker()))
}

function darkModeAddPresentStop() { clearInterval(darkModeAddPresentId) }