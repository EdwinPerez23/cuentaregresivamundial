// Fecha del Mundial: 11 de junio de 2026 a las 00:00
const fechaMundial = new Date("2026-06-11T00:00:00");

// Elemento del DOM donde se mostrará el contador
const contadorElemento = document.getElementById("contador");

// Función para actualizar el contador cada segundo
function actualizarContador() 
{
    const ahora = new Date();
    const diferencia = fechaMundial - ahora;

    if (diferencia <= 0) 
    {
        contadorElemento.textContent = "¡El Mundial ya comenzó!";
        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Mostrar resultado con formato profesional
    contadorElemento.innerHTML = `Faltan: <br><strong>${dias} días ${horas.toString().padStart(2, '0')}h ${minutos.toString().padStart(2, '0')}m ${segundos.toString().padStart(2, '0')}s</strong><br>para el Mundial 2026`;


}

// Ejecutar de inmediato al cargar la página
actualizarContador();

// Repetir cada segundo
const intervalo = setInterval(actualizarContador, 1000);








function actualizarFechaActual() {
    const ahora = new Date();

    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
                   "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    const dia = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const año = ahora.getFullYear();

    const horas = String(ahora.getHours()).padStart(2, "0");
    const minutos = String(ahora.getMinutes()).padStart(2, "0");
    const segundos = String(ahora.getSeconds()).padStart(2, "0");

    const texto = `Hoy es ${dia} de ${mes} de ${año}, ${horas}:${minutos}:${segundos} (hora local)`;

    document.getElementById("fechaActual").textContent = texto;
}

setInterval(actualizarFechaActual, 1000);
