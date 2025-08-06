const ramos = [
  { nombre: "Programación I", semestre: 1, estado: "aprobado" },
  { nombre: "Matemática I", semestre: 1, estado: "cursando" },
  { nombre: "Inglés Técnico", semestre: 2, estado: "pendiente" }
];

function mostrarRamos(lista) {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";
  lista.forEach(ramo => {
    const div = document.createElement("div");
    div.className = `ramo ${ramo.estado}`;
    div.innerHTML = `<strong>${ramo.nombre}</strong><br>Semestre: ${ramo.semestre}<br>Estado: ${ramo.estado}`;
    contenedor.appendChild(div);
  });
}

function filtrar() {
  const valor = document.getElementById("semestre").value;
  if (valor === "todos") {
    mostrarRamos(ramos);
  } else {
    const filtrados = ramos.filter(r => r.semestre == valor);
    mostrarRamos(filtrados);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarRamos(ramos);
});
