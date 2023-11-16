const centroDePosts = document.querySelector(".posts");

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

async function leposts() {
  //Lê dados do servidor
  const resposta = await fetch("posts.json");
  const dadosDoPost = await resposta.json();

  for (post of dadosDoPost) {
    const novoPost = document.createElement("article");
    const verArtigo = document.createElement("p");

    novoPost.innerHTML = `
  <picture><img src="${post.imagem}"/></picture>
  <header><p id="titulo-post">${post.titulo}</p>
    <time datetime="${post.data}" class="data-horario">
      ${post.data} - ${post.horario}
    </time>
    <p><strong>${post.autor}</strong></p>
    <details>
      <summary>veja um resumo...</summary>
      <p>${post.resumo}</p>
    </details>
      </header>
      `;

    verArtigo.innerHTML = `    
    <p>
    <a href="${post.link}"
    >Ver artigo Completo</a
    >
    </p>
    `;

    novoPost.classList.add("posts");
    verArtigo.classList.add("botao-artigo");
    novoPost.appendChild(verArtigo);
    centroDePosts.appendChild(novoPost);
  }
}

leposts();
