let instruksi;
let arah = prompt("ketikkan panah atas, panah bawah, panah kiri, panah kanan ya!");

switch (arah) {
case "panah atas":
instruksi = "ke atas";
    break;
case "panah bawah":
instruksi = "ke bawah";
    break;
case "panah kanan":
instruksi = "ke kanan";
    break;
case "panah kiri":
instruksi = "ke kiri";
    break;
default:
instruksi = "diam";
}
document.write(instruksi);