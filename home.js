const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]'),
    tooltipList = [...tooltipTriggerList].map(e => new bootstrap.Tooltip(e));

function showModal(e) {
    var t = document.getElementById(e);
    newModal = new bootstrap.Modal(t), newModal.show()
}
const wrapper = document.querySelector(".event-card-wrapper"),
    carousel = document.querySelector(".event-card-track"),
    firstCardWidth = carousel.querySelector(".card-mod2").offsetWidth,
    arrowBtns = document.querySelectorAll(".wrapper i"),
    carouselChildrens = [...carousel.children];
let startX, startScrollLeft, timeoutId, isDragging = !1,
    isAutoPlay = !0,
    cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
carouselChildrens.slice(-cardPerView).reverse().forEach(e => { carousel.insertAdjacentHTML("afterbegin", e.outerHTML) }), carouselChildrens.slice(0, cardPerView).forEach(e => { carousel.insertAdjacentHTML("beforeend", e.outerHTML) }), carousel.classList.add("no-transition"), carousel.scrollLeft = carousel.offsetWidth, carousel.classList.remove("no-transition"), arrowBtns.forEach(e => { e.addEventListener("click", () => { carousel.scrollLeft += "left" == e.id ? -firstCardWidth : firstCardWidth }) });
const dragStart = e => { isDragging = !0, carousel.classList.add("dragging"), startX = e.pageX, startScrollLeft = carousel.scrollLeft },
    dragging = e => { isDragging && (carousel.scrollLeft = startScrollLeft - (e.pageX - startX)) },
    dragStop = () => { isDragging = !1, carousel.classList.remove("dragging") },
    infiniteScroll = () => { 0 === carousel.scrollLeft ? (carousel.classList.add("no-transition"), carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth, carousel.classList.remove("no-transition")) : Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth && (carousel.classList.add("no-transition"), carousel.scrollLeft = carousel.offsetWidth, carousel.classList.remove("no-transition")), clearTimeout(timeoutId), wrapper.matches(":hover") || autoPlay() },
    autoPlay = () => { window.innerWidth < 800 || !isAutoPlay || (timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500)) };
autoPlay(), carousel.addEventListener("mousedown", dragStart), carousel.addEventListener("mousemove", dragging), document.addEventListener("mouseup", dragStop), carousel.addEventListener("scroll", infiniteScroll), wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId)), wrapper.addEventListener("mouseleave", autoPlay);
var backToTopIndicator = function() {
    var e = document.getElementById("backToTopButton"),
        t = document.documentElement.scrollTop,
        o = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        n = Math.round(100 * t / o);
    e.style.display = t > 100 ? "block" : "none", e.addEventListener("click", () => { document.documentElement.scrollTop = 0 }), e.style.background = `conic-gradient(#9e3228 ${n}%, #ffffffcc ${n}%)`
};
window.onscroll = backToTopIndicator, window.onload = backToTopIndicator;
var isOperationValied = !0;

function collapseIconToggler(e, t) {
    var o = document.getElementById(e);
    o.innerHTML == t + '&nbsp;&nbsp;<i class="bi bi-chevron-up canvas-icn"></i>' ? o.innerHTML = t + '&nbsp;&nbsp;<i class="bi bi-chevron-down canvas-icn"></i>' : o.innerHTML == t + '&nbsp;&nbsp;<i class="bi bi-chevron-down canvas-icn"></i>' && (o.innerHTML = t + '&nbsp;&nbsp;<i class="bi bi-chevron-up canvas-icn"></i>'), isOperationValied = !0
}

function collapseIconTogglerStart(e, t) { isOperationValied && (isOperationValied = !1, collapseIconToggler(e, t)) }
var isoffCanvasIcnCahangeValied = !0;

function offCanvasIconToggler() { var e = document.getElementById("offcanvas-menu-icn"); "bi bi-list fs-mod4" == e.classList ? e.classList = "bi bi-x-lg fs-mod4" : "bi bi-x-lg fs-mod4" == e.classList && (e.classList = "bi bi-list fs-mod4"), isoffCanvasIcnCahangeValied = !0 }

function offCanvasIconTogglerStart() { isOperationValied && (isoffCanvasIcnCahangeValied = !1, offCanvasIconToggler()) }

function wrapUp() { document.querySelector(".intro-wrapper").style.top = "-100vh" }

function toggleTheme(e) {
    var t, o = document.cookie.split("; "),
        n = !1;
    for (var s of o)
        if ("crnt_thm" == s.split("=")[0] && ("lgt_thm" == s.split("=")[1] || "drk_thm" == s.split("=")[1])) { n = !0, t = s.split("=")[1]; break }
    n ? "lgt_thm" == t ? null == e || 1 != e || document.body.classList.contains("dark-theme") ? (document.body.classList.remove("dark-theme"), document.getElementById("theme-toggle-btn").innerHTML = "<i class='bi bi-moon fs-mod5 canvas-icn'></i>&nbsp;&nbsp;Dark Theme", darkModeAddPresentChecker()) : (document.cookie = "crnt_thm=drk_thm", document.body.classList.add("dark-theme"), document.getElementById("theme-toggle-btn").innerHTML = "<i class='bi bi-sun fs-mod5 canvas-icn'></i>&nbsp;&nbsp;Light Theme", darkModeAddPresentStop()) : "drk_thm" == t && (null != e && 1 == e && document.body.classList.contains("dark-theme") ? (document.cookie = "crnt_thm=lgt_thm", document.body.classList.remove("dark-theme"), document.getElementById("theme-toggle-btn").innerHTML = "<i class='bi bi-moon fs-mod5 canvas-icn'></i>&nbsp;&nbsp;Dark Theme", darkModeAddPresentChecker()) : (document.body.classList.add("dark-theme"), document.getElementById("theme-toggle-btn").innerHTML = "<i class='bi bi-sun fs-mod5 canvas-icn'></i>&nbsp;&nbsp;Light Theme", darkModeAddPresentStop())) : (document.cookie = "crnt_thm=lgt_thm", document.body.classList.contains("dark-theme") && (document.body.classList.remove("dark-theme"), document.getElementById("theme-toggle-btn").innerHTML = "<i class='bi bi-moon fs-mod5 canvas-icn'></i>&nbsp;&nbsp;Dark Theme"), darkModeAddPresentChecker())
}
document.addEventListener("readystatechange", e => { "complete" === e.target.readyState && (toggleTheme(), setTimeout(wrapUp, 2500)) });
var offcanvas = document.getElementById("offcanvas");
offcanvas.addEventListener("hidden.bs.offcanvas", function() { offCanvasIconTogglerStart() }), offcanvas.addEventListener("show.bs.offcanvas", function() { offCanvasIconTogglerStart() });
var darkModeAddPresentId = 0;

function darkModeAddPresentChecker() {
    var e, t, o = document.cookie.split("; "),
        n = !1,
        s = !1;
    for (var a of o)
        if ("crnt_thm" == a.split("=")[0] && ("lgt_thm" == a.split("=")[1] || "drk_thm" == a.split("=")[1])) { n = !0, t = a.split("=")[1]; break }
    for (var a of o)
        if ("drk_thm_add" == a.split("=")[0] && ("shwed" == a.split("=")[1] || "nt_shwed" == a.split("=")[1])) { s = !0, e = a.split("=")[1]; break }
    n && (s ? "lgt_thm" == t && "nt_shwed" == e ? (setTimeout(function() { showModal("dark-mode-add") }, 8500), document.cookie = "drk_thm_add=shwed") : "lgt_thm" == t && "shwed" == e && (darkModeAddPresentId = setInterval(function() { document.getElementById("dark-mode-add").classList.contains("show") || showModal("dark-mode-add") }, 12e4)) : (document.cookie = "drk_thm_add=nt_shwed", darkModeAddPresentChecker()))
}

function darkModeAddPresentStop() { clearInterval(darkModeAddPresentId) }