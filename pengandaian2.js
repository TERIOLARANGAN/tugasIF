let namaHari;
let kodeHari = prompt("masukkan kode hari ini! (1 s/d 7)");
switch (kodeHari) {
case "1":
namaHari = "minggu";
    break;
case "2":
namaHari = "senin";
    break;
case "3":
namaHari = "selasa";
    break;
case "4":
namaHari = "rabu";
    break;
case "5":
namaHari = "kamis";
    break;
case "6":
namaHari = "jumat";
    break;
case "7":
namaHari = "sabtu";
    break;
default:
namaHari = "tidak ada";
}
document.write(namaHari);
document.write("<br>");