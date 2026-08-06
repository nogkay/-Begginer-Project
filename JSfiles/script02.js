const listinhas = document.querySelector("#lista-tarefas");
const novaTarefa = document.querySelector("#nova-tarefa");
const btnAdicionar = document.querySelector("#btn-adicionar");
//============================================================//
 function adicionarTarefa() {
    const tarefa = novaTarefa.value;
    if (tarefa !== ""){
        const li = document.createElement("li");
        li.innerText = tarefa;

        li.addEventListener("click", function(){
            li.remove();
        })

        listinhas.appendChild(li);
        novaTarefa.value = "";
        
 } 
}
 btnAdicionar.addEventListener("click", adicionarTarefa);
 novaTarefa.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        adicionarTarefa();
    }
});