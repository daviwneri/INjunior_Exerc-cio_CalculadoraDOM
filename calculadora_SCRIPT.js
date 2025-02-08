let notas = []
let count = 1;
let section = document.querySelector(".numAdicionados");
let media = document.querySelector(".media");

function adicionarNotas(){
    let input = document.querySelector(".input");
    let valor = input.value;
    let escopo = document.createElement("div");
    let texto = document.createElement("p");

    if (count >= 22){
        alert("Não é possível adicionar mais notas." );
        return;
    }

    if (valor/valor != 1){
        alert("Por favor, insira uma nota”");
        return;
    }

    if (valor < 0 || valor > 10){
        alert("A nota digitada é inválida, por favor, insira uma nota válida.");
        return;
    }

    texto.innerText = `A nota ${count} foi ${valor}`;
    escopo.append(texto);
    section.append(escopo);
    notas.push(parseFloat(valor))
    count++;
}

function calcularMedia(){
    let acumulador = parseFloat(0);

    for (let num of notas){
        acumulador+=num;
    }

    let resultado = acumulador / notas.length;

    let texto = document.createElement("p");

    texto.innerText = resultado;
    media.append(texto);
}

let btn_adicionar = document.querySelector("#adicionar");
btn_adicionar.addEventListener("click", adicionarNotas);

let btn_media = document.querySelector("#calc_media");
btn_media.addEventListener("click", calcularMedia);
