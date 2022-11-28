const hashtag = '#'
let caracteres = '0123456789abcdef'
const ambosCaracteres = '0123456789abcdef'
const numeros = '0123456789'
const letras = 'abcdef'
const tamanho = 6
const inputEl = document.querySelector('#iresultado')
let imgAtualizar = document.querySelector('span#atualizar')
let imgCopiar = document.querySelector('span#copiar')
let botaoAtualizar = document.querySelector('button')


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

    inputEl.value = `${hashtag}` + cor
    console.log(cor)

    let corResposta = document.querySelector('div#cor-resposta')
    corResposta.style.backgroundColor = inputEl.value
}


let contagem = document.querySelector('span#contagem')
for (contagem = 5; contagem > 0; contagem--) {
    console.log(contagem)
}

function copiar() {
    navigator.clipboard.writeText(inputEl.value)
}

imgCopiar.addEventListener('click', copiar)
imgAtualizar.addEventListener('click', geradorDeCores)
botaoAtualizar.addEventListener('click', geradorDeCores)


geradorDeCores()