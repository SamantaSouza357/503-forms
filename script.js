// let select = document.querySelector("select");

// function imprimirValor(){
//     texto.innerHTML = select.value;
// }

let texto = document.querySelector("#text");
let email = document.querySelector("#email");
let confirmacao = document.querySelector("confirmacaoEmail");
let senha = document.querySelector("#password");
let opcao = document.querySelector("div")
let botao = document.querySelector("button");

function cadastrar(){
    if(email.value === confirmacao.value){
        localStorage.setItem("nome",texto.value);
        localStorage.setItem("email" ,email.value);
        localStorage.setItem("confirmacao",confirmacao.value);
        localStorage.setItem("senha",senha.value);
        
    }
    else{
        alert("erro!!");
    }
} 

botao.onclick = cadastrar;
