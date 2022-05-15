// funções desenhar forcar

function montarBoneco(qnt){
    switch(qnt){
        case 1: baseForca(); break;
        case 2: trocoForca(); break;
        case 3: alcaForca(); break;
        case 4: cordaForca(); break;
        case 5: cabecaBoneco(); break;
        case 6: corpoBoneco(); break;
        case 7: bracoUmBoneco(); break;
        case 8: bracoDoisBoneco(); break;
        case 9: pernaUmBoneco(); break;
        case 10: pernaDoisBoneco(); exibirMensagemFinal("Você perdeu!", 2);break;
    }
}
function baseForca(){
    pincel.beginPath();
    pincel.fillStyle = "#0A3871";
    pincel.fillRect(0, 490, 500, 10);
    pincel.fill();
}
function trocoForca(){
    pincel.beginPath();
    pincel.fillStyle = "#0A3871";
    pincel.fillRect(100, 100, 10, 400);
    pincel.fill();
}

function alcaForca(){
    pincel.beginPath();
    pincel.fillStyle = "#0A3871";
    pincel.fillRect(100, 100, 250, 10);
    pincel.fill();
}

function cordaForca(){
    pincel.beginPath();
    pincel.fillStyle = "#0A3871";
    pincel.fillRect(350, 100, 10, 70);
    pincel.fill();
}

// funcoes desenhar boneco
function cabecaBoneco(){
    pincel.fillStyle = "#0A3871";
    pincel.beginPath();
    pincel.arc(355, 210, 40, 0, Math.PI*2);
    pincel.lineWidth = 5;
    pincel.strokeStyle = "#0A3871";
    pincel.stroke()
}

function corpoBoneco(){
    pincel.beginPath();
    pincel.fillStyle = "#0A3871";
    pincel.fillRect(350, 250, 10, 150);
    pincel.fill();
}

function bracoUmBoneco(){
    pincel.beginPath();
    pincel.moveTo(355,260);
    pincel.lineTo(300,330);
    pincel.lineWidth = 10;
    pincel.strokeStyle = "#0A3871";
    pincel.stroke();
}

function bracoDoisBoneco(){
    pincel.beginPath();
    pincel.moveTo(355,260);
    pincel.lineTo(405,330);
    pincel.lineWidth = 10;
    pincel.strokeStyle = "#0A3871";
    pincel.stroke()
}

function pernaUmBoneco(){
    pincel.beginPath();
    pincel.fillStyle = "#0A3871";
    pincel.moveTo(355, 395);
    pincel.lineTo(300,470);
    pincel.lineWidth = 10;
    pincel.strokeStyle = "#0A3871";
    pincel.stroke()
}

function pernaDoisBoneco(){
    pincel.beginPath();
    pincel.fillStyle = "#0A3871";
    pincel.moveTo(355, 395);
    pincel.lineTo(405,470);
    pincel.lineWidth = 10;
    pincel.strokeStyle = "#0A3871";
    pincel.stroke()
}