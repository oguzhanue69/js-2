//if else koşul yapısı

const notbtn = document.getElementById("notbtn")//butonun id sini alıp notbtn'e atadı.
const hesapla = document.getElementById("durum")//div'in id sini alıp duruma atadık.

//butona tıklandığında fonksiyon çalıştırdık.
notbtn.onclick = function(){
    //inputun değerini alıyoruz.
    const input = document.getElementById("not").value;
    //eğer input'a girilen sayı 50'den büyük ise
if(input< 100 && input > 85){
    durum.innerHTML="takdir"
}
//
else if(input < 85 && input >70){
    durum.innerHTML="teşekkür"
}
    //input 70 ile 50 arası düz
    else if(input<70 && input>=50){
    durum.innerHTML="düz geçti"
    }
//input 50 den küçükse kaldı
else{
    durum.innerHTML="sınıf tekrarı"
}
}