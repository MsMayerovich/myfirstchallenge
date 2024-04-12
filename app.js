//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

const textoEncontrado = document.querySelector (".encontrado");
const textoNoEncontrado = document.querySelector(".noencontrado");

// textoEncontrado.classList.remove("display-none");
// textoNoEncontrado.classList.add("display-none");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value ="";
    mensaje.style.backgroundImage = "none";
    
    textoEncontrado.classList.remove("display-none");
    textoNoEncontrado.classList.add("display-none");
    
}
 

const textArea = document.querySelector (".text-area");
const mensaje = document.querySelector ("#mensaje");


function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o,","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }

    }
    return stringEncriptada;
}


function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado
    textArea.value ="";
}



function desencriptar(stringDesencriptada){
    let matrizCodigoInverso =[["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    
    for(let i = 0; i <matrizCodigoInverso.length; i++){
        if(stringDesencriptada.includes(matrizCodigoInverso[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigoInverso[i][0],matrizCodigoInverso[i][1])

        }

    }
    return stringDesencriptada;
}

function btnCopiar(){
    navigator.clipboard.writeText(text-area.textContent.value);
  }



