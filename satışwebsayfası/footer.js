let body = document.querySelector("body");
// SiteMAin
let siteMain = document.querySelector(".siteMain");
// Footer İtemlerinin Çekimi
let hakkımızda = document.querySelector("#hakkımızda");
let subeler = document.querySelector("#subeler");
let iletisimformu = document.querySelector("#iletisimformu");
let musterihizmetleri = document.querySelector("#musterihizmetleri");
let analizler = document.querySelector("#analizler");

const data = [
    {"Hakkımızda"},
    {"Şubeler"},
    {"İletişim Formu"},
    {"Müşeti Hizmetleri"},
    {"Analizler"}
];

data.forEach((item, index)=>{
    let h2 = document.createElement("h2");
});

h2.innerHTML = `Hakkımızda: ${item.hakkımızda}`;
div.appendChild(h2);    