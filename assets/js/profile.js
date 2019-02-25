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

// PASSWORD STRENGTH METER
var strength = {
    0: "Worst",
    1: "Bad",
    2: "Weak",
    3: "Good",
    4: "Strong",
}
var newPassword = document.getElementById('password1');
var meter = document.getElementById('password-strength-meter');
// var text = document.getElementById('password-strength-text');

newPassword.addEventListener('input', function() {
  var val = newPassword.value;
  var result = zxcvbn(val);

  // Update the password strength meter
  meter.value = result.score;

  // Update the text indicator
//   if (val !== "") {
//     text.innerHTML = "Strength: " + strength[result.score]; 
//   } else {
//     text.innerHTML = "";
//   }
});