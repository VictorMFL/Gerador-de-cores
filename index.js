
let caracteres = '0123456789abcdef'
const ambosCaracteres = '0123456789abcdef'
const numeros = '0123456789'
const letras = 'abcdef'
const tamanho = 6
const inputEl = document.querySelector('#iresultado')
let imgAtualizar = document.querySelector('span#atualizar')
let imgCopiar = document.querySelector('span#copiar')
let botaoAtualizar = document.querySelector('button')
let contagem = document.querySelector('span#contagem')

function geradorDeCores() {
    let cor = ''

    let numerosChecked = document.querySelector('input#inumeros')
    let letrasChecked = document.querySelector('input#iletras')
    let ambosChecked = document.querySelector('input#iambos')

    if (numerosChecked.checked) {
        caracteres = numeros
    } else if (letrasChecked.checked) {
        caracteres = letras
    } else if (ambosChecked.checked) {
        caracteres = ambosCaracteres
    }

    for (let i = 0; i < tamanho; i++) {
        const randonNumber = Math.floor(Math.random() * caracteres.length)
        cor += caracteres.substring(randonNumber, randonNumber + 1)
    }

    inputEl.value = '#' + cor
}

function startTimer(duration, display) {

    let corResposta = document.querySelector('div#cor-resposta')
    corResposta.style.background = 'transparent'

    var timer = duration, seconds;
    setInterval(function() {
        if (duration === 0) {
            corResposta.style.background = inputEl.value
        }
        
        seconds = parseInt(timer % 60, 10);
        seconds = seconds;
        display.textContent = seconds;
        if (--timer < 0) {
            timer = duration;
        }else if(timer == 0) {
            duration = 0
        }
    }, 1000);
}

window.onload = function () {
    var duration = 60 - 55; // Converter para segundos
    display = contagem // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};

            

function copiar() {
    navigator.clipboard.writeText(inputEl.value)
}

imgCopiar.addEventListener('click', copiar)
imgAtualizar.addEventListener('click', geradorDeCores)
botaoAtualizar.addEventListener('click', geradorDeCores, startTimer)


geradorDeCores()