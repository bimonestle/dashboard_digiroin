// UPLOAD KTP
// Change "No File" to the name of the uploaded file
document.getElementById("upload-KTP").onchange = function () {
    filename = this.files[0].name;
    document.getElementById("namaKTP").innerText = filename;
}

// UPLOAD NPWP
// Change "No File" to the name of the uploaded file
document.getElementById("upload-NPWP").onchange = function () {
    filename = this.files[0].name;
    document.getElementById("nomorPajak").innerText = filename;
}