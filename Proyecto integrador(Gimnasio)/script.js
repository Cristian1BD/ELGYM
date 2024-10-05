document.getElementById('reservaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.textContent = `Reserva confirmada para ${nombre} el ${fecha} a las ${hora}.`;
    mensajeDiv.style.color = 'green';

    // Limpia el formulario
    document.getElementById('reservaForm').reset();
});
