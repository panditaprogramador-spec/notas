const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Obtener los datos del estudiante
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;

    // Crear la lista de notas
    let notas = [];

    for (let i = 1; i <= 5; i++) {
        let nota = parseFloat(document.getElementById("nota" + i).value);

        if (nota < 0 || nota > 5) {
            alert("Las notas deben estar entre 0 y 5.");
            return;
        }

        notas.push(nota);
    }

    // Calcular el promedio
    let promedio = notas.reduce((total, nota) => total + nota, 0) / 5;

    // Mostrar los resultados
    resultado.style.display = "block";

    resultado.textContent =
        "--- DATOS DEL ESTUDIANTE ---\n\n" +
        "Nombre: " + nombre + "\n" +
        "Apellido: " + apellido + "\n\n" +
        "Lista de notas:\n" +
        notas.join(", ") + "\n\n" +
        "Promedio: " + promedio.toFixed(2);
});
