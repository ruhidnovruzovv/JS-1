let season = prompt("Mövsümü daxil edin: yaz, yay, payız, qış").toLowerCase();

switch (season) {
    case "yaz":
        alert("Yaz ayları: Mart, Aprel, May");
        break;
    case "yay":
        alert("Yay ayları: Iyun, Iyul, Avqust");
        break;
    case "payız":
        alert("Payız ayları: Sentyabr, Oktyabr, Noyabr");
        break;
    case "qış":
        alert("Qış ayları: Dekabr, Yanvar, Fevral");
        break;
    default:
        alert("Lütfən düzgün mövsüm daxil edin: yaz, yay, payız, qış");
        break;
}
