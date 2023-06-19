import idadeMaior from "./vIdade.js";
const inputs = document.querySelectorAll("[required]");
inputs.forEach((elemento) => {
    elemento.addEventListener("blur", (evento) => {
        validaCampo(evento.target)
    });
    elemento.addEventListener("invalid", evento => evento.preventDefault());
});

const erros = [
    'valueMissing',
    'typemismatch',
    'patternMismatch',
    'tooshort',
    'customError'
]

const mensagensErro = {
    nome:{
        valueMissing:"O campo nome é obrigatório, para de me enganar e preenche",
        patternMismatch: "Por favor, preencha um nome válido",
        tooshort: "Deixa de preguiça, digite o nome completo",
    },
    email:{
        valueMissing:"Por favor, preencha um email válido",
        typeMismatch: "Por favor, preencha um email válido",
        tooshort: "Por favor, preencha um email válido",
    },
    nascimento:{
        valueMissing:"O campo de Nascimento não pode ser vazio.",
        customError:"Para cadastro você deve ser maior de idade"
    },
    celular:{
        valueMissing:"O campo de Celular não pode ser vazio.",
        patternMismatch: "Por favor, Preencha o celular no formato válido (99)99999-9999",
        tooshort:"O campo de celular não tem caracteres suficientes."
    }
}

function validaCampo(campo) {
    const msnErro = campo.parentNode.querySelector("[data-erro]");
    let mensagem = "";
    if (campo.name === "nascimento" && campo.value != "") {
        console.log(idadeMaior(campo));
    }

    erros.forEach(erro =>{
        if(campo.validity[erro]){
            mensagem = mensagensErro[campo.name][erro];
            console.log(mensagem);
        }
    });
    const inputValido = campo.checkValidity();
    console.log(campo.validity);
    if(!inputValido){
        msnErro.textContent = mensagem;
    }else{
        msnErro.textContent = 'Campo OK';
    }

   
}