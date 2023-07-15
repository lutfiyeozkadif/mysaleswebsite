// Body
let body = document.querySelector("body");
// SiteMAin
let siteMain = document.querySelector(".siteMain");
// Nav-Bar İtemlerinin Çekimi
let indirim = document.querySelector("#indirim");
let organik = document.querySelector("#organik");
let glutensiz = document.querySelector("#glutensiz");
let sporcu = document.querySelector("#sporcu");
let vegan = document.querySelector("#vegan");

const data = [
    {urun:"Glutensiz Grissini", fiyat:69.9, indirim:"%20", icerik: glutensiz, src:"./image/glutensiz-1.webp"},
    {urun:"Glutensiz Cips", fiyat:30, indirim:"%10", icerik: glutensiz, src:"./image/glutensiz-2.jpeg"},
    {urun:"Glutensiz Makarna", fiyat:75.9, indirim:"%20", icerik: glutensiz, src:"./image/glutensiz-3.jpeg"},
    {urun:"Glutensiz Ekmek", fiyat:250, indirim:"%10", icerik: glutensiz, src:"./image/glutensiz-4.jpeg"},
    {urun:"Organik Ham Kakao", fiyat:99., indirim:"%10", icerik: organik, src:"./image/organik-1.webp"},
    {urun:"Organik Yulaf Unu", fiyat:89.9, indirim:"%10", icerik: organik, src:"./image/organik-2.webp"},
    {urun:"Organik Hindistan Cevizi Yağı", fiyat:140., indirim:"%20", icerik: organik, src:"./image/organik-3.jpeg"},
    {urun:"Organik Nar Ekşisi", fiyat:138, indirim:"%20", icerik:organik, src:"./image/organik-4.webp"},
    {urun:"Whey Protein Tozu", fiyat: 25, indirim:"%10", icerik: sporcu, src:"./image/sporcu-1.webp"},
    {urun:"Whey Protein Tozu-2", fiyat: 580, indirim:"%20", icerik: sporcu, src:"./image/sporcu-2.jpeg"},
    {urun:"Fellas Protein Bar", fiyat: 35, indirim:"%20", icerik: sporcu, src:"./image/sporcu-3.jpeg"},
    {urun:"Rawberry Protein Bar", fiyat: 25, indirim:"%10", icerik: sporcu, src:"./image/sporcu-4.webp"},
    {urun:"Fomilk Vegan Süt", fiyat: 69.9, indirim:"%20", icerik: vegan, src:"./image/vegan-1.webp"},
    {urun:"Tofu", fiyat: 99, indirim:"%10", icerik: vegan, src:"./image/vegan-2.jpeg"},
    {urun:"Soya Granül", fiyat: 310, indirim:"%20", icerik: vegan, src:"./image/vegan-3.png"},


];
// Sayfa Başlangıcında Tüm Verileri Getir


data.forEach((item,index)=>{
    // Elementleri Oluştur
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let h4A = document.createElement("h4");
    let h4B = document.createElement("h4");
    let div = document.createElement("div");
   

    // Butonları Oluştur
    let sil = document.createElement("button");
    let duzenle = document.createElement("button");
    let satinAl = document.createElement("button");


    // Elementlerin İçeriklerini Belirle
    img.src = item.src;
    h2.innerHTML = `Ürün: ${item.urun}`;
    h4A.innerHTML = `Fiyat: ${item.fiyat}`;
    h4B.innerHTML = `İndirim: ${item.indirim}`;
    sil.innerHTML = "Sil";
    duzenle.innerHTML = "Düzenle";
    satinAl.innerHTML = "Satın Al";
   

    // Oluşturulan Tagleri Yeni Div'e At
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(h4A);
    div.appendChild(h4B);
    div.appendChild(sil);
    div.appendChild(duzenle);
    div.appendChild(satinAl);
    
   

    // Silme İşlemi
    sil.addEventListener("click",()=>{
        div.remove()
    });

    // Düzenleme İşlemleri
    duzenle.addEventListener("click", ()=>{

    // Prompt ile Verileri çek:
        let newAd = prompt("Yeni Ürün Adı:");
        let newLevel = parseInt(prompt("Yeni Atanacak Ürün:"));
        let newIndirim = confirm("İndirimli mi?:");
        let newImage = prompt("Yeni Profil Resmi (URL):");

    // Var olan verilere yeni verileri ekle:
        item.urun = newAd;
        item.level = newLevel;
        item.indirim = newIndirim;
        item.gender = newGender;
        item.src = newImage;

    // Yeni verilerin güncel halini getir.
        img.src = item.src;
        h2.innerHTML = `Ürün: ${item.urun}`;
        h2A.innerHTML = `Level: ${item.level}`;
       
    });
    
    function tekrarCagir(){
        data.forEach((item)=>{
            // Elementleri Oluştur
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let h4A = document.createElement("h4");
    let h4B = document.createElement("h4");
    let div = document.createElement("div");

    // Butonları Oluştur
    let sil = document.createElement("button");
    let duzenle = document.createElement("button");
    let satinAl = document.createElement("button");


    // Elementlerin İçeriklerini Belirle
    img.src = item.src;
    h2.innerHTML = `Urun: ${item.urun}`;
    h4A.innerHTML = `Fiyat: ${item.fiyat}`;
    sil.innerHTML = "Sil";
    duzenle.innerHTML = "Düzenle";
    satinAl.innerHTML = "Satın Al";


    // Oluşturulan Tagleri Yeni Div'e At
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(h4A);
    div.appendChild(h4B);
    div.appendChild(sil);
    div.appendChild(duzenle);
    div.appendChild(satinAl);

        })
    }

    div.classList.add("anaYapiyiDuzenle");
    // Tüm Div'i siteMain Div'ine At
    siteMain.appendChild(div);

});
// Yeni Karakter Ekle
let yeni = document.querySelector("#ekle");
yeni.addEventListener("click",()=>{
        let urun= prompt("Yeni Ürün Adı:");
        let fiyat= parseInt(prompt("Yeni Atanacak Fiyat:"));
        let indirim = confirm("İndirimli mi?:");
        let icerik = prompt("Ürün İçeriği:");
        let src = prompt("Yeni Profil Resmi (URL):");

        const yeniKullanici ={urun, fiyat, indirim, icerik, src};

        data.push(yeniKullanici);
        newRender();
});

let newRender = ()=>{
    siteMain.innerHTML = "";
    data.forEach((item)=>{
        // Elementleri Oluştur
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let h4A = document.createElement("h4");
    let h4B = document.createElement("h4");
    let div = document.createElement("div");

    // Elementlerin İçeriklerini Belirle
    img.src = item.src;
    h2.innerHTML = `Urun: ${item.urun}`;
    h4A.innerHTML = `Fiyat: ${item.fiyat}`;
    h4B.innerHTML = `İndirim: ${item.indirim}`;

    // Oluşturulan Tagleri Yeni Div'e At
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(h4A);
    div.appendChild(h4B);
    div.classList.add("anaYapiyiDuzenle");

    // Tüm Div'i siteMain Div'ine At
    siteMain.appendChild(div);

    })


}




// Sadece Glutensiz Getir
admin.addEventListener("click", ()=>{
    siteMain.innerHTML = "";
    data.filter((item, index)=>{
        if(item.admin === true){
             // Elementleri Oluştur
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let h4A = document.createElement("h4");
    let h4B = document.createElement("h4");
    let div = document.createElement("div");

    // Elementlerin İçeriklerini Belirle
    img.src = item.src;
    h2.innerHTML = `Urun: ${item.urun}`;
    h4A.innerHTML = `Fiyat: ${item.fiyat}`;
    h4B.innerHTML = `İndirim: ${item.indirim}`;

    // Oluşturulan Tagleri Yeni Div'e At
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(h4A);
    div.appendChild(h4B);
    div.classList.add("anaYapiyiDuzenle");

    // Tüm Div'i siteMain Div'ine At
    siteMain.appendChild(div);
        }
    })
});

// Sadece Bannananlar
banned.addEventListener("click",()=>{
    siteMain.innerHTML = "";
    data.filter((item)=>{
        if(item.banned === true){
            // Elementleri Oluştur
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let h4A = document.createElement("h4");
    let h4B = document.createElement("h4");
    let div = document.createElement("div");

    // Elementlerin İçeriklerini Belirle
    img.src = item.src;
    h2.innerHTML = `Urun: ${item.urun}`;
    h4A.innerHTML = `Fiyat: ${item.fiyat}`;
  

    // Oluşturulan Tagleri Yeni Div'e At
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(h4A);
    div.appendChild(h4B);
    div.classList.add("anaYapiyiDuzenle");

    // Tüm Div'i siteMain Div'ine At
    siteMain.appendChild(div);

        };
    });
 
});
// Sadece Organik Ürünler
level.addEventListener("click",()=>{
    siteMain.innerHTML = "";
        data.filter((item)=>{
            if(item.icerik === "Organik"){
                // Elementleri Oluştur
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let h4A = document.createElement("h4");
    let h4B = document.createElement("h4");
    let div = document.createElement("div");

    // Elementlerin İçeriklerini Belirle
    img.src = item.src;
    h2.innerHTML = `Urun: ${item.urun}`;
    h4A.innerHTML = `Fiyat: ${item.fiyat}`;
    h4B.innerHTML = `İcerik: ${item.icerik}`;

    // Oluşturulan Tagleri Yeni Div'e At
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(h4A);
    div.appendChild(h4B);
    div.classList.add("anaYapiyiDuzenle");

    // Tüm Div'i siteMain Div'ine At
    siteMain.appendChild(div);
            }

        })
});
// Sadece %10 İndirimli ürünler
female.addEventListener("click",()=>{
    siteMain.innerHTML = "";
        data.filter((item)=>{
            if(item.indirim === "%10"){
                // Elementleri Oluştur
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let h4A = document.createElement("h4");
    let h4B = document.createElement("h4");
    let div = document.createElement("div");

    // Elementlerin İçeriklerini Belirle
    img.src = item.src;
    h2.innerHTML = `Urun: ${item.urun}`;
    h4A.innerHTML = `Fiyat: ${item.fiyat}`;
    h4B.innerHTML = `İndirim: ${item.indirim}`;

    // Oluşturulan Tagleri Yeni Div'e At
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(h4A);
    div.appendChild(h4B);
    div.classList.add("anaYapiyiDuzenle");

    // Tüm Div'i siteMain Div'ine At
    siteMain.appendChild(div);
            }
        })
});
// Sadece Sporcu Ürünler
male.addEventListener("click",()=>{
    siteMain.innerHTML = "";
        data.filter((item)=>{
            if(item.gender === "Sporcu"){
                // Elementleri Oluştur
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let h4A = document.createElement("h4");
    let h4B = document.createElement("h4");
    let div = document.createElement("div");

    // Elementlerin İçeriklerini Belirle
    img.src = item.src;
    h2.innerHTML = `Urun: ${item.urun}`;
    h4A.innerHTML = `Fiyat: ${item.fiyat}`;
    h4B.innerHTML = `İçerik: ${item.icerik}`;

    // Oluşturulan Tagleri Yeni Div'e At
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(h4A);
    div.appendChild(h4B);
    div.classList.add("anaYapiyiDuzenle");

    // Tüm Div'i siteMain Div'ine At
    siteMain.appendChild(div);
            }
        })
});
//Sayfada Oyuncu Ara
function search(){
    let input = document.querySelector("#ara").value;
    siteMain.innerHTML = "";
    let result = data.filter((item,index)=>{
       return item.playerName.toLowerCase().includes(input);

    });

result.forEach((item, index)=>{
    // Elementleri Oluştur
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let h4A = document.createElement("h4");
    let h4B = document.createElement("h4");
    let div = document.createElement("div");

    // Elementlerin İçeriklerini Belirle
    img.src = item.src;
    h2.innerHTML = `Urun: ${item.urun}`;
    h4A.innerHTML = `Fiyat: ${item.fiyat}`;
    h4B.innerHTML = `Gender: ${item.banned}`;

    // Oluşturulan Tagleri Yeni Div'e At
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(h4A);
    div.appendChild(h4B);
    div.classList.add("anaYapiyiDuzenle");

    // Tüm Div'i siteMain Div'ine At
    siteMain.appendChild(div);
    });
};
// Sepet Kısmı
let sepet = document.querySelector(".hamburgerMenu");
let openBar = document.querySelector("#openBar");

// Açılıp Kapanma Durumu:
openBar.addEventListener("click", ()=>{
    if(sepet.style.display === "block"){
        sepet.style.display = "none"
    }else{
        sepet.style.display = "block"
    }
});

satinAl.addEventListener("click", ()=>{
    data.map((item)=>{
       let sepetDiv = document.createElement("div");
       sepetDiv.innerHTML = index(item.src);
       sepetDiv.innerHTML = index(item.urun);
       sepetDiv.innerHTML = index(item.banned);

       sepet.appendChild(sepetDiv);
    })
})
