// Crea un nuevo elemento <div> para el cursor personalizado
const cursor = document.createElement('div');

// Añade la clase 'cursor' al nuevo elemento <div>
cursor.classList.add('cursor');

// Agrega el cursor personalizado al body del documento
document.body.appendChild(cursor);

// Evento para mover el cursor personalizado con el ratón
document.addEventListener('mousemove', (e) => {
    // Actualiza la posición del cursor según la posición del mouse
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});
