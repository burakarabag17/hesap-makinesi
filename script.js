"use";
var _işaretler = document.getElementsByTagName("button")


_uzunluk = _işaretler.length,
i = 0,

_sonuç = document.getElementById("sonuç");


for(let i = 0; i < _uzunluk; i++){
    _işaretler[i].onclick = hesapla;
}

function allClearFunction(){
    _sonuç.value = " ";
}

function ClearFunction(){
    _sonuç.value = _sonuç.value.slice(0, -1)
    console.log(_sonuç.value);
}

    
function PIFunction(){
    _sonuç.value = PI
}

function hesapla(){
    console.log(_işaretler);
    var _değer = this.innerHTML;
    console.log("değer",_değer);
    if(_değer == "="){
        try{
            _sonuç.value = eval(_sonuç.value);
            console.log("sonuç",_sonuç.value)
        } catch(e){
            _sonuç.value = "0";
    }
        return;       
}
    _sonuç.value += _değer;
}