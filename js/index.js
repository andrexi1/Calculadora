//vamos a sleccionsar todos l0os nodos de nuestro html
const displayValorAnterior= document.getElementById('valor-anterior')
const displayValorActual= document.getElementById('valor-actual')
const botonesNumeros= document.querySelectorAll('.numero')
const botonesOperadores= document.querySelectorAll('.operador')

const calculadora = new Calculadora()