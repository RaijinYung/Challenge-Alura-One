let fraseOriginal = '';

let substituitCriptografia = 'ai,enter,imes,ober,ufat'.split(',');
let substituirDescriptografia = 'a,e,i,o,u'.split(',');

let criptografia = {};
let descriptografia = {};

for (let i = 0; i < substituitCriptografia.length; i++) {
    criptografia[substituirDescriptografia[i]] = substituitCriptografia[i];
    descriptografia[substituitCriptografia[i]] = substituirDescriptografia[i];
}

function aplicarCriptografia(char) {
    return criptografia[char] || char;
}

function aplicarDescriptografia(str) {
    return descriptografia[str] || str;
}

function exibirTextoNaTela(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function exibirCriptografia() {
    fraseOriginal = document.getElementById('input__usuario').value;
    let fraseCriptografada = fraseOriginal.replace(/[aeiou]/g, aplicarCriptografia);
    exibirTextoNaTela('campo__texto__criptografado', fraseCriptografada);
    document.querySelector(".aviso").remove();
}

function exibirDescriptografia() {
    fraseOriginal = document.getElementById('input__usuario').value;
    let fraseDescriptografada = fraseOriginal.replace(/ai|enter|imes|ober|ufat/g, aplicarDescriptografia);
    exibirTextoNaTela('campo__texto__criptografado', fraseDescriptografada);
    document.querySelector(".aviso").remove();
}

function copiarTexto() {
    let copiarFrase = document.getElementById('campo__texto__criptografado').innerHTML;
    navigator.clipboard.writeText(copiarFrase);
}

exibirMensagemInicial();
