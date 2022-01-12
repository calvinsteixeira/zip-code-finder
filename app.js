// JS VARIABLES

const apiUrl = 'https://viacep.com.br/ws/'
const resType = 'json'

// DOM ELEMENTS

const cepInput = document.getElementById('cep-input')
const btnCep = document.getElementById('btn-cep')
const cepInfoList = document.querySelector('#response-container')
const infoList = document.querySelectorAll('#response-container li')
const descriptionInfo = document.querySelectorAll('#info')

// EVENTS

btnCep.addEventListener('click', () => {
  doGetRequest()
  for (const info of descriptionInfo) {
    info.classList.add('run-animation')
    setTimeout(() => {
      info.classList.remove('run-animation')
    }, 400)
  }
})

// GETTING RESPONSE FROM API WITH AXIOS

function doGetRequest() {
  event.preventDefault()
  axios.get(`${apiUrl}/${cepInput.value}/${resType}`).then(function (res) {
    for (const info of infoList) {
      if (info.childNodes[1].textContent == 'CEP :') {
        info.childNodes[3].textContent = res.data.cep
      } else if (info.childNodes[1].textContent == 'LOGRADOURO :') {
        info.childNodes[3].textContent = res.data.logradouro
      } else if (info.childNodes[1].textContent == 'COMPLEMENTO :') {
        info.childNodes[3].textContent = res.data.complemento
      } else if (info.childNodes[1].textContent == 'BAIRRO :') {
        info.childNodes[3].textContent = res.data.bairro
      } else if (info.childNodes[1].textContent == 'LOCALIDADE :') {
        info.childNodes[3].textContent = res.data.localidade
      } else if (info.childNodes[1].textContent == 'UF :') {
        info.childNodes[3].textContent = res.data.uf
      } else if (info.childNodes[1].textContent == 'DDD :') {
        info.childNodes[3].textContent = res.data.ddd
      }
    }
  })
}
