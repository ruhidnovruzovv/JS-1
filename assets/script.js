const dieselPrice = 0.9;
const petrolPrice = 1;
const premiumPetrolPrice = 1.5;

let fuelType = prompt("Yanacaq növünü daxil edin:\n1 - Dizel\n2 - Benzin\n3 - Premium");

if (fuelType !== "1" && fuelType !== "2" && fuelType !== "3") {
    alert("Lütfən, düzgün Yanacaq Tipi daxil edin.");
} else {
    let userMoney = +prompt("Pul miqdarınızı daxil edin (AZN):");
    let fuelLitres = +prompt("Yanacaq miqdarını daxil edin (litrlə):");
    let fuelCost;

    switch (fuelType) {
        case "1":
            fuelCost = dieselPrice * fuelLitres;
            fuelType = "Dizel";
            break;
        case "2":
            fuelCost = petrolPrice * fuelLitres;
            fuelType = "Benzin";
            break;
        case "3":
            fuelCost = premiumPetrolPrice * fuelLitres;
            fuelType = "Premium";
            break;
    }

    if (userMoney >= fuelCost) {
        let remainingBalance = userMoney - fuelCost;
        alert(`Seçdiyiniz yanacaq növü: ${fuelType}. Dəyəri: ${fuelCost} AZN. Qalan balansınız: ${remainingBalance} AZN.`);
    } else {
        let missingAmount = fuelCost - userMoney;
        alert(`Seçdiyiniz yanacaq növü: ${fuelType}. Yanacaq dəyəri: ${fuelCost} AZN. Mövcud balansınız: ${userMoney} AZN. Əksik məbləğ: ${missingAmount} AZN.`);
    }
}
