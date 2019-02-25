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

// DISPLAYING THE FILTER DROPDOWN
var mainAccFilter = document.getElementById('entp-accounts-filter');
function openMainAccFilter() {
    if (mainAccFilter.style.display == false) {
        mainAccFilter.style.display = "block";
    } else {
        mainAccFilter.style.display = "";
    }
}
var actionsFilter = document.getElementById('entp-actions-filter');
function openActionsFilter() {
    if (actionsFilter.style.display == false) {
        actionsFilter.style.display = "block";
    } else {
        actionsFilter.style.display = "";
    }
}

// DISPLAYING TABS MAIN ACCOUNT OR ACTIONS
function openTabs(evt, tableName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        // tabcontent[i].className.replace(" active", "");
        // tabcontent[i].classList.remove("active");
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");    
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    // document.getElementById(tableName).classList.add("active");
    document.getElementById(tableName).style.display = "block";
    evt.currentTarget.className += " active";
    actionsTable.redraw(true); // To make the data visible so that Tabulators virtual DOM know the row dimensions and display it when the tablink is clicked


    if (document.getElementById("actions-table").style.display == "block") {
        document.getElementById("mainAcc-filter-box").style.display = "none";
        document.getElementById("actions-filter-box").style.display = "flex";
    } else {
        document.getElementById("mainAcc-filter-box").style.display = "flex";
        document.getElementById("actions-filter-box").style.display = "none";
    }
}