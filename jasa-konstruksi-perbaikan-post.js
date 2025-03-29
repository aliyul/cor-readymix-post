 // Cek URL saat ini dan sesuaikan dengan kondisi yang diinginkan
const urlMappingChippingBeton = {
    "https://www.betonjayareadymix.com/2019/06/harga-chipping-beton-per-m2.html": "Harga Chipping Beton Per M2"
};
const urlMappingBobokTembok = {
    "https://www.betonjayareadymix.com/2019/06/jasa-tukang-bobok-tembok.html": "Jasa Tukang Bobok Tembok"


};
const urlMappingBobokBeton = {
    "https://www.betonjayareadymix.com/2019/06/harga-bongkar-beton.html": "Harga Bongkar Beton",
    "https://www.betonjayareadymix.com/2019/06/harga-bobok-beton-per-m2.html":  "Harga Bobok Beton Per M2"


};
const urlMappingBongkarKeramik = {
    "https://www.betonjayareadymix.com/2019/06/biaya-bongkar-lantai-keramik.html": "Biaya Bongkar Lantai Keramik",
    "https://www.betonjayareadymix.com/2019/06/harga-bongkar-lantai-keramik.html": "Harga Bongkar Lantai Keramik"

};

// Menyimpan elemen yang dihapus dalam variabel
let removedElementsJasaPerbaikanKons = {};
// Fungsi untuk menghapus elemen berdasarkan ID
function removeCondition(conditionId) {
    const conditionElement = document.getElementById(conditionId);

    if (conditionElement) {
        // Menyimpan elemen yang dihapus dalam objek untuk bisa dikembalikan
        removedElementsJasaPerbaikanKons[conditionId] = conditionElement;
        conditionElement.remove(); // Menghapus elemen tersebut
    }
}

// Fungsi untuk mengembalikan elemen yang telah dihapus
function restoreCondition(conditionId) {
    const breadcrumb = document.querySelector('.breadcrumb');
    const elementToRestore = removedElementsJasaPerbaikanKons[conditionId]; // Mendapatkan elemen yang disimpan

    if (elementToRestore) {
        breadcrumb.appendChild(elementToRestore); // Menambahkan elemen kembali ke dalam breadcrumb
        delete removedElementsJasaPerbaikanKons[conditionId]; // Menghapus elemen dari objek setelah dikembalikan
    } else {
        console.log(`Elemen dengan ID ${conditionId} tidak ditemukan di removedElements.`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // var currentUrl = window.location.href;
     //const cleanUrl = currentUrl.split('?')[0]; // Menghapus parameter seperti ?m=1
    const cleanUrlJasaPerbaikanKons = window.location.href.split(/[?#]/)[0]; // Menghilangkan parameter seperti ?m=1

     // Menemukan elemen menggunakan Id
    // var materialKons = document.getElementById("materialKons");
    // var JasaKons = document.getElementById("JasaKons");
 
     var JasaKonstruksiLink = document.getElementById("JasaKonstruksi");
     var JasaRenovasiPerbaikanLink = document.getElementById("JasaRenovasiPerbaikan");
     var JasaChippingBetonLink = document.getElementById("JasaChippingBeton");
     var JasaBobokTembokLink = document.getElementById("JasaBobokTembok");
     var JasaBobokBetonLink = document.getElementById("JasaBobokBeton");
     var JasaBongkarKeramikLink = document.getElementById("JasaBongkarKeramik");
     var pageNameKonstruksi = document.getElementById("pageNameKonstruksi");

     // Default untuk menyembunyikan elemen
     // materialKons.style.visibility = 'hidden';
      //JasaKons.style.visibility = 'hidden';
 
     JasaKonstruksiLink.style.visibility = 'hidden';
     JasaRenovasiPerbaikanLink.style.visibility = 'hidden';
     JasaChippingBetonLink.style.visibility = 'hidden';
     JasaBobokTembokLink.style.visibility = 'hidden';
     JasaBobokBetonLink.style.visibility = 'hidden';
     JasaBongkarKeramikLink.style.visibility = 'hidden';
     pageNameKonstruksi.textContent = "";

    if (urlMappingChippingBeton[cleanUrlJasaPerbaikanKons]) {
        restoreCondition('JasaKons');
        restoreCondition('JasaChippingBeton');
     
        removeCondition('materialKons');
        removeCondition('JasaBobokTembok');
        removeCondition('JasaBongkarKeramik');
        removeCondition('JasaBobokBeton');
       
        JasaKonstruksiLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanLink.style.visibility = 'visible';
        JasaChippingBetonLink.style.visibility = 'visible';
        pageNameKonstruksi.textContent = urlMappingChippingBeton[cleanUrlJasaPerbaikanKons];
    }
    if (urlMappingBobokTembok[cleanUrlJasaPerbaikanKons]) {
        removeCondition('materialKons');
        restoreCondition('JasaKons');
     
        removeCondition('JasaChippingBeton');
        removeCondition('JasaBongkarKeramik');
       removeCondition('JasaBobokBeton');
        restoreCondition('JasaBobokTembok');
        JasaKonstruksiLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanLink.style.visibility = 'visible';
        JasaBobokTembokLink.style.visibility = 'visible';
        pageNameKonstruksi.textContent = urlMappingBobokTembok[cleanUrlJasaPerbaikanKons];
    }
   if (urlMappingBobokBeton[cleanUrlJasaPerbaikanKons]) {
       removeCondition('materialKons');
       restoreCondition('JasaKons');
    
        removeCondition('JasaChippingBeton');
        removeCondition('JasaBongkarKeramik');
       removeCondition('JasaBobokTembok');
        restoreCondition('JasaBobokBeton');
        JasaKonstruksiLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanLink.style.visibility = 'visible';
        JasaBobokBetonLink.style.visibility = 'visible';
        pageNameKonstruksi.textContent = urlMappingBobokBeton[cleanUrlJasaPerbaikanKons];
    }
   if (urlMappingBongkarKeramik[cleanUrlJasaPerbaikanKons]) {
        removeCondition('materialKons');
        restoreCondition('JasaKons');
    
        removeCondition('JasaChippingBeton');
        removeCondition('JasaBobokTembok');
         removeCondition('JasaBobokBeton');
        restoreCondition('JasaBongkarKeramik');
        JasaKonstruksiLink.style.visibility = 'visible';
        JasaRenovasiPerbaikanLink.style.visibility = 'visible';
        JasaBongkarKeramikLink.style.visibility = 'visible';
        pageNameKonstruksi.textContent = urlMappingBongkarKeramik[cleanUrlJasaPerbaikanKons];
    }

   });
