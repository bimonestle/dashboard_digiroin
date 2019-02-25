// INPUT AKTA PERUSAHAAN
// Change "No File" to the name of the uploaded file
document.getElementById("upload-aktaComp").onchange = function () {
    filename = this.files[0].name;
    document.getElementById("akta-perusahaan").innerText = filename;
}

// INPUT NPWP
// Change "No File" to the name of the uploaded file
document.getElementById("upload-NPWP").onchange = function () {
    filename = this.files[0].name;
    document.getElementById("nomorPajak").innerText = filename;
}