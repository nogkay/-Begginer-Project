const container = document.querySelector("#container-posts");
const btnFavoritar = document.querySelector("#btn-filtrar");

async function carregarPost(){
    const buscarDados = await fetch('https://jsonplaceholder.typicode.com/posts');
    const receberDados = await buscarDados.json();

    const postsAjeitados = receberDados.forEach((post)=>{
        const divPost = document.createElement('div');
        divPost.innerText = post.title;
        container.appendChild(divPost);
        divPost.addEventListener("click", () => {
            divPost.classList.toggle("favorito");
            
        });
    }); 
    btnFavoritar.addEventListener("click",() =>{
       const filtrados = receberDados.filter((post)=> post.userId === 1);
        container.innerHTML = "";

});
}  carregarPost();
