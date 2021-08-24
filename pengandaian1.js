let angka1 = prompt("masukkan angka pertama!");
let angka2 = prompt("masukkan angka kedua!");
if (angka1 == angka2) {
document.write("nilai angka 1 dan angka 2 sama");
}
else if (angka1 >= angka2) {
document.write("nilai angka1 lebih besar dari angka 2");
}
else if (angka1 <= angka2) {
document.write("nilai angka 1 lebih kecil dari angka 2");
}
else {
document.write("anda belum memasukkan angka untuk diperbandingkan");
}
document.write("<br>");