/* 
Case sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementebyId
por Nome: getElementsByName()
por Classe: getElementsbyClassName()
por Seletor: querySeletor()
*/

var nome = window.document.getElementById('nome')
var nomeOk = false

let email = document.querySelector('#email')
let emailOk = false

let assunto = document.querySelector('#assunto')
let assuntoOk = false

let mapa = document.querySelector('#mapa')

nome.style.width ='100%'
email.style.width = "100%"
assunto.style.width = "100%"

/*estrutura de função*/ 
function validarNome(){

    let txtNome = document.getElementById('txtNome')

/*let interna*/
    if(nome.value.length < 2){ /*CONDIÇÃO*/

       txtNome.innerHTML = ('Nome Inválido!')
       txtNome.style.color = ('white')

       nomeOk = false
    }
    else{/*CONDIÇÃO*/

        txtNome.innerHTML = ('Nome Válido!')
        txtNome.style.color = ('blue')
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ){
        txtEmail.innerHTML = ('Email Inválido')
        txtEmail.style.color = ('purple')
    }
    else{
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'blue'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = 'O texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'purple'
        txtAssunto.style.display = 'block'
    }
    else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    }
    else {
        alert ('Preencha o formulário corretamente, antes de enviar .....')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}