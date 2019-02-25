// BOTTOM LINE FOR HEADER WHEN SCROLLED & SCROLLSPY
window.onscroll = function () {
    var body = document.body;
    var html = document.documentElement;
    var navHead = document.querySelectorAll("header.header");

    if (body.scrollTop >= navHead[0].clientHeight || html.scrollTop >= navHead[0].clientHeight) {
        // console.log("test");
        navHead[0].classList.add("scrolled");
    } else {
        navHead[0].classList.remove("scrolled");
    }
}

// SHOW DROPDOWN NOTIFICATIONS
document.getElementById('notif-icon').onclick = function showNotif() {
    var notifDrop = document.getElementById('notif-dropdown');
    if (notifDrop.style.display == false) {
        notifDrop.style.display = "block";
    } else {
        notifDrop.style.display = "";
    }
}

// MARK ALL AS READ
document.getElementById('mark-read').onclick = function markAllRead() {
    var notifDot = document.querySelectorAll('span.notif-dot');
    for (let i = 0; i < notifDot.length; i++) {
        notifDot[i].style.display = "none";
    }
}

// CHANGING ARROW TABLE HEAD
var iconArrow = document.querySelectorAll('.tabulator-col-content div:nth-child(2)');
for (let i = 0; i < iconArrow.length; i++) {
    iconArrow[i].classList.remove('tabulator-arrow');
    iconArrow[i].classList.add('font-icon', 'icon-arrow');
}

function endContract() {
    console.log("End The Contract");
}