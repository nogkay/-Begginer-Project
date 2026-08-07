const interruptor = document.querySelector("#meu-card");
const btnAlternar = document.querySelector("#meu-btn");

btnAlternar.addEventListener("click", function() {
    interruptor.classList.toggle("modo-escuro");
});