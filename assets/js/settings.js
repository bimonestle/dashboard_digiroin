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

// EDIT MEMBER
function editMember() {
    console.log("Edit Member");
}

// All of the functions below is for Add Member Modal
// ADD MEMBER MODAL
var addMemberModal = document.getElementById("add-member-modal");
function openMemberModal() {
    addMemberModal.classList.add("active");
}
// CLOSE THE ADD MEMBER MODAL
function closeAddMemberModal() {
    addMemberModal.classList.remove("active");
}
// If user hit esc button, the modal will be closed
window.onkeyup = function (ev) {
    if (ev.keyCode === 27) {        
        addMemberModal.classList.remove("active");
    }
}
// ADD NEW ADMIN MEMBER
function addNewAdmin() {
    console.log("Add New Admin");
}

// All of the functions below is for Add Chnage Role Model
// ADD CHANGE ROLE MODAL
var changeRoleModal = document.getElementById("change-role-modal");
function openChangeRole() {
    changeRoleModal.classList.add("active");
}
// CLOSE THE CHANGE ROLE MODAL
function closeChangeRoleModal() {
    changeRoleModal.classList.remove("active");
}
// If user hit esc button, the modal will be closed
window.onkeyup = function (ev) {
    if (ev.keyCode === 27) {        
        changeRoleModal.classList.remove("active");
    }
}
// SAVE NEW ROLE FOR ADMIN
function saveNewRole() {
    console.log("Save New Role");
}