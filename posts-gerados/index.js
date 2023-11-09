const centroDePosts = document.querySelector('#listagemDePosts');

let dadosDoPost = [{
    titulo: 'Titulo para o post - 01',
    resumo: 'Resumo deste post acima'
}, {
    titulo: 'Titulo para o post - 02',
    resumo: 'Resumo deste post acima'
}, {
    titulo: 'Titulo para o post - 03',
    resumo: 'Resumo deste post acima'
}, {
    titulo: 'Titulo para o post - 04',
    resumo: 'Resumo deste post acima'
},]

let novoDadosPost = confirm('Você deseja adicionar um post?')

while (novoDadosPost) {{
    dadosDoPost.push ({
        titulo: prompt('Digite o título do post:'),
        resumo: prompt('Qual o resumo do post:')
    })
    novoDadosPost = confirm('Você deseja continuar adicionando posts?')
    }
}

const numPosts = dadosDoPost.length

for (let i = 0; i < numPosts; i++) {
  const novoPost = document.createElement('article');
  novoPost.innerHTML = `
    <header>${dadosDoPost[i].titulo}</header>
    <main>${dadosDoPost[i].resumo}</main>
    `;
    novoPost.classList.add('posts')
    centroDePosts.appendChild(novoPost);
}
