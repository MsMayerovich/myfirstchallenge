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


// la matriz es igual para ambas funciones
const matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

function encriptar(stringEncriptada){
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
    
    for(let i = 0; i <stringDesencriptada.length; i++){
        for(let j = 0; j < matrizCodigo.length; j++){
            const codigo = matrizCodigo[j];
            if (stringDesencriptada.substring(i).startsWith(codigo[1])) {
                stringDesencriptada = stringDesencriptada.substring(0, i) + codigo[0] + stringDesencriptada.substring(i + codigo[1].length);
                break; // Salir del bucle interno una vez que se haya encontrado y reemplazado el código
            }

    
        }
    }
    return stringDesencriptada;
}

const btnCopy = document.querySelector('#btnCopiar')

function btnCopiar() {
    let txt = mensaje.value
    navigator.clipboard.writeText(txt)
    Swal.fire({
        title: "El texto fue copiado",
        text: "COPIADO",
        icon: "success",
        heightAuto: false
      });
}

btnCopy.addEventListener('click', btnCopiar);

