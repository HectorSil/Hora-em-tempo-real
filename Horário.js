function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('ft')
var data = new Date()
var hora = data.getHours()
//var hora = 19
msg.innerHTML = `Agora são ${hora} horas!`
if(hora >= 0 && hora < 12){
    //BOM DIA!
    img.src ="dia--1.png"
    document.body.style.background ="#9ACD32"
}else if(hora>=12 && hora <=18){
    //BOA TARDE!
    img.src =" tarde--1.png"
    document.body.style.background ="#B22222"
}else{
    //BOA NOITE!
    img.src =" noite--1.png "
    document.body.style.background ="#2F4F4F"
}
}