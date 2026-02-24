
// Ejercicio 22: Eventos y Clases

// 1. Selecciona el botón del menú, el botón de cerrar y el menú lateral
const toggleMenu = document.getElementById('toggleMenu');
const closeMenu = document.getElementById('closeMenu');
const menuLateral = document.getElementById('menuLateral');

// 2. Define una función 'toggleMenu' que:
// - Use classList.toggle('hidden') en el menú
function toggleMenuFunction() {
menuLateral.classList.toggle('hidden');
}

// 3. Agrega los Event Listeners a los botones para llamar a esa función
toggleMenu.addEventListener('click', toggleMenuFunction);
closeMenu.addEventListener('click', toggleMenuFunction);