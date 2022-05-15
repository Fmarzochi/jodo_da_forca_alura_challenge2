// Seção Botões
const comecarJogo = document.getElementById("comecar-jogo");
const addPalavra = document.getElementById("add-palavra");


// Seção Salvar Nova Palavra
const palavraNova = document.getElementById("salvar-palavra");
const cancelar = document.getElementById("cancelar");
const inputAdd = document.getElementById("input-add");
const msgPalavra = document.getElementById("msg-palavra");

// Seção jogar forca
const desistir = document.getElementById("desistir");
const novoJogo =  document.getElementById("novo-jogo");
const letras = document.getElementById("letras");
const tracos = document.getElementById("tracos");
const letrasErrada = document.getElementById("letras-errada");
const mensagem = document.getElementById("mensagem");

// Eventos das seções
comecarJogo.addEventListener("click", ()=>{
    ocultarSecaoBotoes()
    mostrarSecaoJogar();
    comecaJogo();
})

addPalavra.addEventListener("click", ()=>{
    ocultarSecaoBotoes();
    mostrarSecaoAddPalavra();
});

inputAdd.addEventListener("input", ()=>{
    let value = inputAdd.value.toLocaleUpperCase();
    inputAdd.value = value;
});

cancelar.addEventListener("click", ()=>{
    ocultarSecaoAddPalavra();
    mostrarSecaoBotoes();
    zerarJogo();
});

desistir.addEventListener("click", ()=>{
    ocultarSecaoJogar();
    mostrarSecaoBotoes();
    zerarJogo();
});

novoJogo.addEventListener("click", ()=>{
    comecaJogo();
});

palavraNova.addEventListener("click", ()=>{
    let palavra = inputAdd.value.toLocaleUpperCase();
    if(palavra.length > 0){
        let isPalavra = true;
        listaPalavras.forEach(p=>{
            if(p==palavra){
                exibirMensagemPalavra("Palavra já existe na lista!");
                isPalavra = false;
            }
        });

        if(isPalavra){
            listaPalavras.push(palavra);
            isJogando=true;
            ocultarSecaoAddPalavra();
            mostrarSecaoJogar();
            palavraAleatorio();
        }
    }
    inputAdd.value = "";
});

document.addEventListener("keydown", (evento)=>{
    let letraTeclada = evento.key.toLocaleUpperCase();
    if(isJogando && alfabeto.indexOf(letraTeclada) >= 0){
        if(secreta.indexOf(letraTeclada) >=0 && quantErros < 10 && tracinhosAux(secretaAux.length) != secretaAux){
                if(listaCertas.indexOf(letraTeclada) < 0){
                    listaCertas.push(letraTeclada);
                    atualizarCerta(letraTeclada);
                }else if(quantErros < 10 && tracinhosAux(secretaAux.length) != secretaAux){
                    exibirMensagemFinal("Letra já informada!", 3);
                }
            }else{
                if(listaErradas.indexOf(letraTeclada) < 0 && quantErros < 10 && tracinhosAux(secretaAux.length) != secretaAux){
                    listaErradas.push(letraTeclada);
                    quantErros++;
                    montarBoneco(quantErros);
                    atualizarErrada();
                }else if(quantErros < 10 && tracinhosAux(secretaAux.length) != secretaAux){
                    exibirMensagemFinal("Letra já informada!", 3);
                }
            }
    }else{
        if(isJogando && quantErros < 10 && tracinhosAux(secretaAux.length) != secretaAux){
            exibirMensagemFinal("Letra ínvalida!", 3);
        }
    }
});


// Fuções básicas

function ocultarSecaoBotoes(){
    document.querySelector(".secao-butoes").classList.add("ocultar");
}
function mostrarSecaoBotoes(){
    document.querySelector(".secao-butoes").classList.remove("ocultar");
}
function ocultarSecaoJogar(){
    document.querySelector(".secao-jogar").classList.add("ocultar");
}
function mostrarSecaoJogar(){
    document.querySelector(".secao-jogar").classList.remove("ocultar");
}
function ocultarSecaoAddPalavra(){
    document.querySelector(".secao-add-palavra").classList.add("ocultar");
}
function mostrarSecaoAddPalavra(){
    document.querySelector(".secao-add-palavra").classList.remove("ocultar");
}

