const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const img = document.querySelector(".container-img");
const containerP = document.querySelector(".container-parrafo");
const result = document.querySelector(".text-result");
const btnCopy = document.querySelector(".btn-copy");

btnEncriptar.addEventListener("click", (e)=>{
    ocultarInterfaz();
    let textArea = document.querySelector(".box-text").value;
   
    
    result.textContent =  encriptador(textArea);
    
})


btnDesencriptar.addEventListener("click", (e)=>{
    ocultarInterfaz();
    let textArea = document.querySelector(".box-text").value;

    result.textContent = desencriptar(textArea);
    
})


btnCopy.addEventListener("click", (e)=>{
    const copyText = result.textContent;
    navigator.clipboard.writeText(copyText);
    alert("Texto copiado correctamente !")
})






const encriptador = (mesagge) => {
    
    
    let textEncriptado = "";

    for (let i = 0; i < mesagge.length; i++) {
        if (mesagge[i] == "a") {
           textEncriptado += "ai";
        } else if (mesagge[i] == "e"){
            textEncriptado +=  "enter";
        } else if (mesagge[i] == "i"){
            textEncriptado +=  "imes";
        } else if (mesagge[i] == "o"){
            textEncriptado += "ober";
        } else if (mesagge[i] == "u"){
            textEncriptado +=  "ufat";
        } else {
            textEncriptado +=  mesagge[i];
        }
        
    }
    return textEncriptado;
    

}


const ocultarInterfaz = () => {

    containerP.classList.remove("container-parrafo");
    img.classList.remove("container-img");
    img.classList.add("ocultar");
    containerP.classList.add("ocultar");

}


const desencriptar = (mensaje) => {
    let textoEncriptado = mensaje;
    let textoDesencriptado = "";

    for (let i = 0; i < textoEncriptado.length; i++) {
        if (textoEncriptado.substring(i, i + 5) === "enter") {
            textoDesencriptado += "e";
            i += 4; // Saltar el próximo carácter '#'
        } else if (textoEncriptado.substring(i, i + 4) === "imes") {
            textoDesencriptado += "i";
            i += 3;
        } else if (textoEncriptado.substring(i, i + 2) === "ai") {
            textoDesencriptado += "a";
            i += 1;
        } else if (textoEncriptado.substring(i, i + 4) === "ober") {
            textoDesencriptado += "o";
            i += 3; // Saltar los próximos dos caracteres '0'
        } else if (textoEncriptado.substring(i, i + 4) === "ufat") {
            textoDesencriptado += "u";
            i += 3;
        } else {
            textoDesencriptado += textoEncriptado[i];
        }
    }

    return textoDesencriptado;
}


