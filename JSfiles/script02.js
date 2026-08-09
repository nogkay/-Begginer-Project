const listinhas = document.querySelector("#lista-tarefas");
const novaTarefa = document.querySelector("#nova-tarefa");
const btnAdicionar = document.querySelector("#btn-adicionar");
//============================================================//
 
  let tarefas = JSON.parse(localStorage.getItem("tarefass")) || [];


 function adicionarTarefa() {
    const tarefa = novaTarefa.value;
    localStorage.setItem("tarefass", JSON.stringify(tarefas));


    if (tarefa !== ""){
        const li = document.createElement("li");
        li.innerText = tarefa;
         li.addEventListener("click", function(){
            li.remove();
            tarefas = tarefas.filter((ta) => ta !== tarefa);
           
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
})