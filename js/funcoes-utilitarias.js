// fuções utilitarias
function palavraAleatorio(){
    posicao = 0;
    secreta = "";
    secretaAux = "";
    quantErros = 0;
    palavraTracadas = "";
    palavraBranco = "";
    listaErradas = [];
    listaCertas = [];
    pincel.clearRect(0,0,500,500)

    posicao = Math.floor(Math.random()*listaPalavras.length);
    secretaAux = secreta = listaPalavras[posicao];
    
    palavraTracadas = tracinhos(secreta.length);
    palavraBranco = palavraSecreta(secreta.length);
    
    letras.innerText = palavraBranco;
    tracos.innerText = palavraTracadas;
    letrasErrada.innerText = "";
}

function zerarJogo(){
    isJogando = false;
    pincel.clearRect(0,0,500,500);
    mensagem.classList.add("ocultar");
}
function comecaJogo(){
    isJogando = true;
    mensagem.classList.add("ocultar");
    palavraAleatorio();
}

function exibirMensagemFinal(msg, tipo){
    mensagem.textContent = "";
    mensagem.classList.remove("ocultar");
    mensagem.classList.remove("ganhou");
    mensagem.classList.remove("perdeu");
    mensagem.classList.remove("normal");
    switch(tipo){
        case 1: mensagem.classList.add("ganhou"); isJogando=false; break;
        case 2: mensagem.classList.add("perdeu"); isJogando=false; break;
        case 3: mensagem.classList.add("normal"); break;
    }
    mensagem.textContent = msg;
   if(tipo == 3){
        setTimeout(()=>{
            mensagem.classList.add("ocultar");
        }, 1000);    
   }
}

function exibirMensagemPalavra(msg){
    msgPalavra.classList.remove("ocultar");
    msgPalavra.textContent = msg;
    setTimeout(()=>{
        msgPalavra.classList.add("ocultar");
    }, 1500);    
}