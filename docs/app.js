let eczAd = [];
let eczAdrs = [];
let eczTel = [];
let eczSehir = [];
let eczIlce = [];

var tarih = new Date();

var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
var day = tarih.getDate();
var month = tarih.getMonth();
var year = tarih.getFullYear();

if (day < 9) {
    day = "0" + tarih.getDate();
}
if (month < 9) {
    month = "0" + parseInt(tarih.getMonth()+1);
}

document.getElementById("date_").innerHTML += `

    <h1>${day}.${month}.${year} ${gunler[tarih.getDay()]}</h1>
   
`;
function getEcz() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "dataset/ecz.json", true); //asi.json dosyasını açıyoruz.

    xhr.onload = function () {
        if (this.status === 200) {


            let eczJson = JSON.parse(this.responseText);
            let eczInfo = eczJson.data;
            let tplmEcz = eczJson.rowCount;

            eczInfo.forEach(e => {
                eczAd.push(e.EczaneAdi);
                eczAdrs.push(e.Adresi);
                eczTel.push(e.Telefon);
                eczSehir.push(e.Sehir);
                eczIlce.push(e.ilce);
            });
            console.log(eczAd[5]);

            for (let i = 0; i < tplmEcz; i++) {

                document.getElementById("eczTblBody").innerHTML += `
                
                    <td id="eczAd"><img id="eczLogo" src="img/ecz.png" alt="Medikar" srcset=""> ${eczAd[i]}</td>
                    
                    <td id="eczAdrs"> <i class="fas fa-map-marker-alt"></i> ${eczAdrs[i]}</td>
                    
                    <td id="eczTel"> <i class="fas fa-phone"></i> ${eczTel[i]}</td>
                    
                    <td id="eczIlce">${eczIlce[i]}</td>
    
                `
            }



        }
    };
    xhr.send();
}

getEcz();
