
const botoes = document.querySelectorAll("[data-item]");
botoes.forEach((elemento)=>{
    elemento.addEventListener("click",(evento)=>{
        atulizaItem(evento.target.textContent, evento.target.parentNode);
    });
});


function atulizaItem(acao, inputQtde){
    const item = inputQtde.querySelector("[data-qtde]");
    if(acao==="-"){
        item.value = parseInt(item.value)-1;
    }else{
        item.value = parseInt(item.value)+1;
    }
}