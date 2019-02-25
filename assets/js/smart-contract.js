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
var filterBtn = document.querySelector(".filter-button.container");
var filterComp = document.querySelector(".filter-dropdown.container");
filterBtn.onclick = function showFilters() {
    if (filterComp.style.display == false) {
        filterComp.style.display = "block"
    } else {
        filterComp.style.display = "";
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
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");    
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    if (tableName == "create-smart-contract") {
        document.getElementById(tableName).style.display = "grid";
    } else {
        document.getElementById(tableName).style.display = "block";
    }
    evt.currentTarget.className += " active";
    smartContractTable.redraw(true); // To make the data visible so that Tabulators virtual DOM know the row dimensions and display it when the tablink is clicked

    if (document.getElementById("status-smart-contract").style.display == "block") {
        document.getElementById("status-filter-box").style.display = "flex";
    } else {
        document.getElementById("status-filter-box").style.display = "none";
    }
}

// TO MAKE THE TABS CONTENT STAY AS IT WAS
if (document.getElementById("status-smart-contract").style.display == false) {
    document.querySelector(".smart-contract.filter-container.sc").style.display = "flex";
} else {
    document.querySelector(".smart-contract.filter-container.sc").style.display = "";
}

// CANCEL CONTRACT
function cancelContract() {
    console.log("Cancel The Contract!");
}

// CREATE THE CONTRACT
function createContract() {
    console.log("Contract is being created!");
}