let painel = document.querySelector("#painel");
let peso = Number(window.prompt("Digite o peso do atleta"));

if (peso > 90) {
    painel.classList.add("erro");
} else {
    painel.classList.remove("erro");
}