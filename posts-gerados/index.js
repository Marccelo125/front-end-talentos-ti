const centroDePosts = document.querySelector(".posts");

let dadosDoPost = [
  {
    titulo: "Titulo para o post - 01",
    resumo: "Resumo deste post acima",
    imagem: "https://picsum.photos/300/200",
    link: "./posts/20231017-primeiro-post.html"
},
{
    titulo: "Titulo para o post - 02",
    resumo: "Resumo deste post acima",
    imagem: "https://picsum.photos/seed/picsum/300/200",
    link: "./posts/20231017-segundo-post.html"
},
{
    titulo: "Titulo para o post - 03",
    resumo: "Resumo deste post acima",
    imagem: "https://picsum.photos/300/200?grayscale",
    link: "./posts/20231018-rascunho-para-amanha.html"
  },
  {
      titulo: "Titulo para o post - 04",
      resumo: "Resumo deste post acima",
      imagem: "https://picsum.photos/300/200/?blur",
      link: "./posts/20231018-tarefa02.html"
    },
];

// let novoDadosPost = confirm("Você deseja adicionar um post?");

// while (novoDadosPost) {
//   {
//     dadosDoPost.push({
//       titulo: prompt("Digite o título do post:"),
//       resumo: prompt("Qual o resumo do post:"),
//     });
//     novoDadosPost = confirm("Você deseja continuar adicionando posts?");
//   }
// }

const numPosts = dadosDoPost.length;

for (let i = 0; i < numPosts; i++) {
  const novoPost = document.createElement("article");
  const verArtigo = document.createElement("p");

  novoPost.innerHTML = `
  <picture><img src="${dadosDoPost[i].imagem}"/></picture>
    <header>${dadosDoPost[i].titulo}
        <details>
            <summary>veja um resumo...</summary>
            <p>${dadosDoPost[i].resumo}</p>
        </details>
    </header>
    `;

  verArtigo.innerHTML = `    
    <p>
    <a href="${dadosDoPost[i].link}"
    >Ver artigo Completo</a
    >
    </p>
    `;

  novoPost.classList.add("posts");
  verArtigo.classList.add("botao-artigo");
  novoPost.appendChild(verArtigo);
  centroDePosts.appendChild(novoPost);
}
