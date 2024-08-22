function encriptar(texto) {
    let textoEncriptado = "";
    
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        
        if (letra === "e") {
            textoEncriptado += "enter";
        } else if (letra === "i") {
            textoEncriptado += "imes";
        } else if (letra === "a") {
            textoEncriptado += "ai";
        } else if (letra === "o") {
            textoEncriptado += "ober";
        } else if (letra === "u") {
            textoEncriptado += "ufat";
        } else {
            textoEncriptado += letra;
        }
    }
    
    return textoEncriptado;
}


function desencriptar(texto) {
    let textoDesencriptado = "";
    let i = 0;

    while (i < texto.length) {
        if (texto.startsWith("enter", i)) {
            textoDesencriptado += "e";
            i += 5;
        } else if (texto.startsWith("imes", i)) {
            textoDesencriptado += "i";
            i += 4;
        } else if (texto.startsWith("ai", i)) {
            textoDesencriptado += "a";
            i += 2;
        } else if (texto.startsWith("ober", i)) {
            textoDesencriptado += "o";
            i += 4;
        } else if (texto.startsWith("ufat", i)) {
            textoDesencriptado += "u";
            i += 4;
        } else {
            textoDesencriptado += texto[i];
            i++;
        }
    }
    
    return textoDesencriptado;
}


function encriptarTexto() {
    let texto = document.getElementById("texto").value;
    let textoEncriptado = encriptar(texto);
    document.getElementById("resultado").innerText = textoEncriptado;
}


function desencriptarTexto() {
    let texto = document.getElementById("texto").value;
    let textoDesencriptado = desencriptar(texto);
    document.getElementById("resultado").innerText = textoDesencriptado;
}
