var baseURLAuth = "https://wallet.digiro.in/api/";
var urlString = window.location.href;
const url = new URL(urlString);
var param = url.searchParams.get("trxID");
axios.get(baseURLAuth + 'tx/' + param, {
    headers: {
        // 'crossDomain': true,
        'Authorization':'Basic NjI4MTIzMjI5MTA3Mzp0b2tlbl9iZ2hscGQ0aXY4cWIzOXVhajYzZw=='
    }
})
.then(function (response) {
    console.log(response.data);
    var respDatas = response.data

    // CHANGE CONTENT OF THE METADATA FROM THE URL PARAMATERS
    // Business Name
    document.getElementById('trx-businessName').innerHTML = respDatas.result.request.from_giro;

    // Transactions type
    document.getElementById('transactions-type').innerHTML = respDatas.result.request.type[0].toUpperCase() + respDatas.result.request.type.slice(1);

    // Transactions ID
    document.getElementById('transactions-id').innerHTML = param;

    // Transactions Date
    document.getElementById('transactions-date').innerHTML = moment.unix(respDatas.result.timestamp).format("DD/MM/YYYY k:m:s");

    // Transactions Amount
    document.getElementById('transactions-amount').innerHTML = "Rp " + respDatas.result.request.amount.toLocaleString('id-ID') + ",00";

    // Transactions Customer Name
    document.getElementById('trx-cust-name').innerHTML = respDatas.result.request.to_giro;

    // Transactions Customer Phone Number
    document.getElementById('cust-phone-num').innerHTML = respDatas.result.request.phoneNumber;

    // Transactions Customer Email
    document.getElementById('cust-email').innerHTML = respDatas.result.request.to_address;

})

// BOTTOM LINE FOR HEADER WHEN SCROLLED & SCROLLSPY
// window.onscroll = function () {
//     var body = document.body;
//     var html = document.documentElement;
//     var navHead = document.querySelectorAll("header.header");

//     if (body.scrollTop >= navHead[0].clientHeight || html.scrollTop >= navHead[0].clientHeight) {
//         // console.log("test");
//         navHead[0].classList.add("scrolled");
//     } else {
//         navHead[0].classList.remove("scrolled");
//     }
// }

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