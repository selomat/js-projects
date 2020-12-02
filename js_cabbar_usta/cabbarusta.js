//basla
let arabaninMarkasi = "BMW"; //aracin markasi Buyuk harfle yazilacak
let arabaninRengi = "kirmizi";
let arabaninModelYili =2019;
let musteriYilBilginiz = 2;// kac yildan beridir musterisiniz

if (musteriYilBilginiz >=3) {
    console.log("Araciniz tamir edilecektir Randevu Aliniz")
} 

else if (arabaninMarkasi == "BMW" && arabaninRengi == "kirmizi" && arabaninModelYili > 2010 && arabaninModelYili < 2019) {
    console.log("Araciniz tamir edilecektir Randevu Aliniz");
}
    
else if (arabaninMarkasi == "BMW" && arabaninModelYili == 2020 && arabaninRengi == "siyah") {
    console.log("Araciniz tamir edilecektir Randevu Aliniz");

}

else if (arabaninMarkasi == "AUDI" && ((arabaninModelYili > 2005 && arabaninModelYili < 2010) || (arabaninModelYili > 2014 && arabaninModelYili < 2020))) {
    console.log("Araciniz tamir edilecektir Randevu Aliniz");
}

else if (arabaninMarkasi == "VW" && arabaninRengi == "siyah" && (arabaninModelYili > 2001 && arabaninModelYili < 2018)) {
    console.log("Araciniz tamir edilecektir Randevu Aliniz");
}
    
else { console.log("Sorry we cant repair your car") } 
//bitir
