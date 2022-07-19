let bosluk = document.getElementById("myName");

let isim = prompt("Lütfen adını gir", "anonim");

isim = isim.replace(isim[0], isim[0].toUpperCase());

bosluk.textContent = isim;

function showTime() {
  let tarih = document.getElementById("myClock");

  const d = new Date();

  let [saat, dakika, saniye, gun] = [
    d.getHours(),
    d.getMinutes(),
    d.getSeconds(),
    d.getDay(),
  ];

  
  dakika = checkTime(dakika);
  saniye = checkTime(saniye);
  gun = checkDate(gun);
  console.log(gun)

  tarih.innerHTML = saat + ":" + dakika + ":" + saniye + " - " + gun;
  setTimeout(showTime, 1000);
}
showTime();

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

function checkDate(i) {
    switch (i) {
        case 1:
            gun = "Pazartesi";
            return gun;
            break;
        case 2:
            gun = "Salı";
            return gun;
            break;    
        case 3:
            gun = "Çarşamba";
            return gun;
            break;
        case 4:
            gun = "Perşembe";
            return gun;
            break;
        case 5:
            gun = "Cuma";
            return gun;
            break;
        case 6:
            gun = "Cumartesi";
            return gun;
            break;
        case 7:
            gun = "Pazar";
            return gun;
            break;     
        default:
            break;
    }
}