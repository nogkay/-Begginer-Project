const nomeUp = document.querySelector("#nome-id")
const passUp = document.querySelector("#pass-id")
const btnUp = document.querySelector("#btn-id")
const nomePerfil = document.querySelector("#nome-perfil")
const passPerfil = document.querySelector("#pass-perfil")
const card = document.querySelector("#card-perfil")

function atualizarPerfil() {
    const nome = nomeUp.value
    const passes = passUp.value

    if(nome !== ""){
        nomePerfil.innerText = `Olá, ${nome}!`;
        nomePerfil.style.color = "blue";
    }else{
        nomePerfil.innerText = "Digite um nome por favor!";
        nomePerfil.style.color = "red";
    }
    if(passes !== ""){
        passPerfil.innerText = `Sua senha é: ${passes}`;
        passPerfil.style.color = "blue";
    }else{
        passPerfil.innerText = "Digite sua senha de fila";
        passPerfil.style.color = "red";
    }
    if(nome !== "" && passes !== ""){
        card.style.backgroundColor = "green";
    }
    else{
        card.style.backgroundColor = "black";
    }

}
btnUp.addEventListener("click", atualizarPerfil)
passUp.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        atualizarPerfil()
    }
})
