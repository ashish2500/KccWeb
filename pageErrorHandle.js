function showModal(e) {
    var t = document.getElementById(e);
    newModal = new bootstrap.Modal(t), newModal.show()
}

function wrapUp() { document.querySelector(".intro-wrapper").style.top = "-100vh" }

function toggleTheme(e) {
    var t, d = document.cookie.split("; "),
        o = !1;
    for (var r of d)
        if ("crnt_thm" == r.split("=")[0] && ("lgt_thm" == r.split("=")[1] || "drk_thm" == r.split("=")[1])) { o = !0, t = r.split("=")[1]; break }
    o ? "lgt_thm" == t ? null == e || 1 != e || document.body.classList.contains("dark-theme") ? (document.body.classList.remove("dark-theme"), darkModeAddPresentChecker()) : (document.cookie = "crnt_thm=drk_thm", document.body.classList.add("dark-theme"), darkModeAddPresentStop()) : "drk_thm" == t && (null != e && 1 == e && document.body.classList.contains("dark-theme") ? (document.cookie = "crnt_thm=lgt_thm", document.body.classList.remove("dark-theme"), darkModeAddPresentChecker()) : (document.body.classList.add("dark-theme"), darkModeAddPresentStop())) : (document.cookie = "crnt_thm=lgt_thm", document.body.classList.contains("dark-theme") && document.body.classList.remove("dark-theme"), darkModeAddPresentChecker())
}
document.addEventListener("readystatechange", e => { "complete" === e.target.readyState && (toggleTheme(), setTimeout(wrapUp, 2500), setTimeout(function() { redirectClockId = setInterval(redirectClock, 1e3) }, 2500)) });
var darkModeAddPresentId = 0;

function darkModeAddPresentChecker() {
    var e, t, d = document.cookie.split("; "),
        o = !1,
        r = !1;
    for (var n of d)
        if ("crnt_thm" == n.split("=")[0] && ("lgt_thm" == n.split("=")[1] || "drk_thm" == n.split("=")[1])) { o = !0, t = n.split("=")[1]; break }
    for (var n of d)
        if ("drk_thm_add" == n.split("=")[0] && ("shwed" == n.split("=")[1] || "nt_shwed" == n.split("=")[1])) { r = !0, e = n.split("=")[1]; break }
    o && (r ? "lgt_thm" == t && "nt_shwed" == e ? (setTimeout(function() { showModal("dark-mode-add") }, 8500), document.cookie = "drk_thm_add=shwed") : "lgt_thm" == t && "shwed" == e && (darkModeAddPresentId = setInterval(function() { document.getElementById("dark-mode-add").classList.contains("show") || showModal("dark-mode-add") }, 12e4)) : (document.cookie = "drk_thm_add=nt_shwed", darkModeAddPresentChecker()))
}

function darkModeAddPresentStop() { clearInterval(darkModeAddPresentId) }
var timeCounter = 15,
    redirectClockId = 0;

function redirectClock() { timeCounter > 0 ? (timeCounter -= 1, document.getElementById("time-text").innerHTML = timeCounter < 10 ? "0" + timeCounter : timeCounter) : (clearInterval(redirectClockId), window.location = "https://kccweb.lk") }