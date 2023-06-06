var ekran = document.getElementsByClassName("ekran")[0];
var tuslar = document.getElementsByClassName("sayi");
var islem = document.getElementsByClassName("b");
var type = document.getElementsByClassName("a");
var hesapla = document.getElementById("hesapla");
var ilksayi = 0; var ikincisayi = 0;
var dortislem,hesap,gelensayi;
console.log(islem);
uzunluk = tuslar.length

function tusBul(){
    var rakam = this.getAttribute("data-num");
    ekran.innerHTML += rakam;
}

function islemYap(){
    var calculate = this.getAttribute("data-islem");
    ilksayi = parseInt(ekran.innerHTML);
    ekran.innerHTML = "";
    switch(calculate){
        case "+" :
            dortislem = "+" ;
            break;
        case "-" :
            dortislem = "-" ;
            break;
        case "*" :
            dortislem = "*" ;
            break;
        case "/" :
            dortislem = "/" ;
            break;
        default:
            break;

    }
}

function sonucHesapla(){
    ikincisayi = parseInt(ekran.innerHTML);
    switch(dortislem){
        case "+" :
            hesap = ilksayi+ikincisayi ;
            ekran.innerHTML = hesap ;
            break;
        case "-" :
            hesap = ilksayi-ikincisayi ;
            ekran.innerHTML = hesap ;
            break;
        case "*" :
            hesap = ilksayi*ikincisayi ;
            ekran.innerHTML = hesap ;
            break;
        case "/" :
            hesap = ilksayi/ikincisayi ;
            ekran.innerHTML = hesap ;
            break;
        default :
            break;
    }
}

for(var i = 0; i<uzunluk; i++){
    tuslar[i].onclick = tusBul;
}
for(var j = 0; j<islem.length; j++){
    islem[j].onclick = islemYap; 
}

hesapla.onclick = sonucHesapla;


function allClearFunction(){
    ekran.innerHTML = " ";
}

function ClearFunction(){
    ekran.innerHTML = ekran.innerHTML.slice(0, -1);
}

function type1(){
    ekran.innerHTML = "(";
}
function type2(){
    ekran.innerHTML = ")";
}
function type3(){
    ekran.innerHTML = ".";
}