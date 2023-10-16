const comenzarBtn = document.getElementById("comenzarBtn");
const ventanaEmergente = document.getElementById("ventanaEmergente");
const continuarBtn = document.getElementById("comenzarBtn");
const ventanaEmergente2 = document.getElementById("ventanaEmergente");
const cerrarBtn = document.getElementById("cerrarBtn");

comenzarBtn.addEventListener("click", function() {
    ventanaEmergente.style.display = "block";
});

continuarBtn.addEventListener("click", function() {
    ventanaEmergente.style.display = "block";
});

cerrarBtn.addEventListener("click", function() {
    ventanaEmergente.style.display = "none";
});
