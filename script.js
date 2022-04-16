//Constantes globais
const buttonCriptografar = document.querySelector('.btn-1')
const buttonDescriptografar = document.querySelector('.btn-2')
const inputTextArea = document.querySelector('#textArea')
const inserirTextCodificado = document.querySelector('.text')
const showText = document.querySelector('.show')
const disabled = document.querySelector('.Notext')
const buttnCopy = document.querySelector('.btn-copy')

//Função que criptografa a o texto inserido pelo usuário no input textarea na pagina
function criptografar(letra) {
  let newSTring = letra
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat')
  return newSTring
}

//Função que faz descriptografa o texto anterior digitado  pelo usuário no input textarea na pagina
function descriptografar(letra) {
  let newString = letra
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u')
  return newString
}

//Função que capturar o evento de click no botão criptografar e descriptografar que está visible na tela
function buttonCodificador(event) {
  event.preventDefault()

  document.querySelector('.show').style.display = 'flex'
  document.querySelector('.Notext').style.display = 'none'

  const string = inputTextArea.value.toLowerCase()
  if (event.target.className === 'btn-1') {
    showText.classList.add('toggle')
    inserirTextCodificado.innerText = criptografar(string)
  }
  if (event.target.className === 'btn-2') {
    showText.classList.add('toggle')
    inserirTextCodificado.innerHTML = descriptografar(string)
  }

  inputTextArea.value = ''
}

//Evento de click dos botão Criptografar e Descriptografar
buttonCriptografar.addEventListener('click', buttonCodificador)
buttonDescriptografar.addEventListener('click', buttonCodificador)

// Função Para copiar o texto decodificador pelo usuário
async function copyTexDecodificado() {
  const copy = inserirTextCodificado.value
  await navigator.clipboard.writeText(copy)
}

//Evento de click do botão copiar texto decodificado
buttnCopy.addEventListener('click', copyTexDecodificado)
