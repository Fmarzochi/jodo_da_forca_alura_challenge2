// Fuções da manipulação da string
function atualizarErrada(){
    letrasErrada.innerText = "";
    for(let i=0; i<listaErradas.length; i++){
        if(i==listaErradas.length-1){
            letrasErrada.innerText += listaErradas[i]+"";
            continue;
        }
        letrasErrada.innerText += listaErradas[i]+" ";
    }
}
function transformarEmString(listaChar){
    let str = "";
    listaChar.forEach(c=>{
        str += c;
    });

    return str;
}
function atualizarCerta(letraAux){
    let listaCaracteres;
    while(secretaAux.indexOf(letraAux) >= 0){
        listaCaracteres = palavraTracadas.split("");
    
        listaCaracteres[secretaAux.indexOf(letraAux)*2] = letraAux;
    
        palavraTracadas = transformarEmString(listaCaracteres);
        secretaAux = secretaAux.replace(letraAux, "_");
    }

    letras.innerText = palavraTracadas.replaceAll("_", "  ");
    if(tracinhosAux(secretaAux.length) == secretaAux){
        exibirMensagemFinal("Você ganhou!", 1);
    }
}

function tracinhos(tamanho){
    let string = "";
    for(let i=0; i<tamanho; i++){
        if(i==i-1){
            string += "_";
            continue;
        }
        string += "_ ";
    }
    return string;
}
function tracinhosAux(tamanho){
    let string = "";
    for(let i=0; i<tamanho; i++){
        string += "_";
    }
    return string;
}
function palavraSecreta(tamanho){
    let string = "";
    for(let i=0; i<tamanho; i++){
        if(i==i-1){
            string += " ";
            continue;
        }
        string += "  ";
    }
    return string;
}
