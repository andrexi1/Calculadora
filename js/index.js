const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

// Crear una instancia de Display utilizando la clase global Display
const display = new window.Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
  boton.addEventListener('click', () => {
    display.agregarNumero(boton.innerHTML);
  });
});

botonesOperadores.forEach(boton => {
  boton.addEventListener('click', () => display.computar(boton.value));
});
