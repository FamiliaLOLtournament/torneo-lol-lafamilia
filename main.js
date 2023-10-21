 // Crea la Tabla dinamica del html Clasificaccion
const datosClasificacion = [
    { equipo: "Equipo A", puntos: 50 },
    { equipo: "Equipo B", puntos: 40 },
    { equipo: "Equipo C", puntos: 5 },
];
function ordenarPorPuntos(datos) {
    return datos.slice().sort((a, b) => b.puntos - a.puntos);
}

// Llama a la función de ordenamiento antes de crear la tabla
const datosOrdenados = ordenarPorPuntos(datosClasificacion);

function crearTablaClasificacion(datos) {
    const tabla = document.createElement("table");
    tabla.classList.add("tabla-clasificacion");

    const cabecera = tabla.createTHead();
    const filaCabecera = cabecera.insertRow();
    const encabezados = ["Equipo", "Puntos"];

    encabezados.forEach((encabezado) => {
        const th = document.createElement("th");
        th.textContent = encabezado;
        filaCabecera.appendChild(th);
    });

    const cuerpoTabla = tabla.createTBody();

    datos.forEach((equipo) => {
        const fila = cuerpoTabla.insertRow();
        const celdaEquipo = fila.insertCell(0);
        const celdaPuntos = fila.insertCell(1);
        celdaEquipo.textContent = equipo.equipo;
        celdaPuntos.textContent = equipo.puntos;
    });

    return tabla;
}

const contenedorTabla = document.getElementById("tablaClasificacion");
contenedorTabla.appendChild(crearTablaClasificacion(datosOrdenados));