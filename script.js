console.log('Hello, world from script js')

const title = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('.btn-calcular')
const resultado = document.querySelector('#resultado')
const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', btnOnclick)

function btnOnclick(event) {
  event.preventDefault()
  const suma = +input1.value + +input2.value
  console.log(suma)
  resultado.innerText = 'Resultado: ' + suma
}