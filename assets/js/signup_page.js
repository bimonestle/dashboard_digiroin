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

// EMAIL BOX SIGN-IN
document.getElementById("email-sign-in").onfocus = function () {
    document.querySelector(".icon-kotaksurat").style.color = "#4286f5";
    document.querySelector(".email-box .input-box").style.border = "1px solid #4286f5";
}
document.getElementById("email-sign-in").onblur = function () {
    document.querySelector(".icon-kotaksurat").style.color = "#888888";
    document.querySelector(".email-box .input-box").style.border = "1px solid #dddddd";
}

// PASSWORD BOX SIGN-IN
document.getElementById("password-sign-in").onfocus = function () {
    document.querySelector(".icon-lock").style.color = "#4286f5";
    document.querySelector(".password-box .input-box").style.border = "1px solid #4286f5";
}
document.getElementById("password-sign-in").onblur = function () {
    document.querySelector(".icon-lock").style.color = "#888888";
    document.querySelector(".password-box .input-box").style.border = "1px solid #dddddd";
}

// VERIFY SIGN-IN
document.getElementById("verify-sign-in").onfocus = function () {
    document.querySelector(".verify.icon-lock").style.color = "#4286f5";
    document.querySelector(".password-box.verify .input-box").style.border = "1px solid #4286f5";
}

document.getElementById("verify-sign-in").onblur = function () {
    document.querySelector(".verify.icon-lock").style.color = "#888888";
    document.querySelector(".password-box.verify .input-box").style.border = "1px solid #dddddd";
}

// // CHECK IF EMAIL IS CORRECT
// if (!email) {
//     document.querySelector(".email-box .input-box").classList.add("error");
// } else {
//     document.querySelector(".email-box .input-box").classList.remove("error");
//     document.getElementById("sign-in-error").style.display = "block";
// }

// VERIFY PASSWORD
var passWord = document.getElementById("password-sign-in");
var verPass = document.getElementById("verify-sign-in");
var signBtn = document.getElementById("sign-in-btn");

var verifyPassword = function (passVal, verVal) {
    if (passVal === verVal && passVal.length > 6 && verVal.length > 6) {
        console.log("Password Confirmed");
    } else {
        console.log("Password Is Incorrect");
        document.getElementById("sign-in-error").style.display = "block;"
    }
}
signBtn.addEventListener("click", verifyPassword(passWord.value, verPass.value));