
const inputText= document.querySelector(".input-text");
const message= document.querySelector(".message");
const copy = document.querySelector(".copiar");
const textoNoEncontrado = document.querySelector(".textoNoEncontrado");


//  `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`

function btnEncriptar(){
        const textoEncriptado = encriptar(inputText.value);
        message.value =textoEncriptado;
        message.style.backgroundImage = "none";
        message.style.height="85%";
        copy.style.visibility = "visible";
        textoNoEncontrado.style.visibility="hidden";
        textoNoEncontrado.style.height="0";
        inputText.value = "";

}
function encriptar(cadenaTexto){
    let matrizString = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoEncriptado = cadenaTexto.toLowerCase();
    for(let i=0;i<matrizString.length;i++){
        if(textoEncriptado.includes(matrizString[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(matrizString[i][0],matrizString[i][1]);
        }
    }
    return textoEncriptado;
}
function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputText.value);
    message.value =textoEncriptado;
    message.style.backgroundImage = "none";
    message.style.height="85%";
    textoNoEncontrado.style.visibility="hidden";
    textoNoEncontrado.style.height="0";
    inputText.value = "";
    copy.style.visibility = "visible";

}
function desencriptar(cadenaTexto){
    let matrizString = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoEncriptado = cadenaTexto.toLowerCase();
    for(let i=0;i<matrizString.length;i++){
        if(textoEncriptado.includes(matrizString[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(matrizString[i][1],matrizString[i][0]);
        }
    }
    return textoEncriptado;
}
function copiar(){
    message.select();
    navigator.clipboard.writeText(message.value);
    message.value = "";
}