lerCafes()
async function lerCafes() {
    const resposta = await fetch("./json/dadosShop.json")
    const dadosMenu = await resposta.json()
    
    
    for (cafe of dadosMenu) {
        const menu = document.querySelector(".produtos")
        const itemCafe = document.createElement("article")
        const descricaoCafe = document.createElement("p")
        
        descricaoCafe.innerHTML = `
        <article class="coffee-board">
        <img src="https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee-500x375.png" alt=""\>
        <h1 class="coffee-title">${cafe.id}</h1>
        <article class="coffee-description">
        <p>Type: ${cafe.features.type}</p>
        <p>Organic: ${cafe.features.organic}</p>
        <p>Origin: ${cafe.features.origin}</p>
        <p>Roast: ${cafe.features.roast}</p>
        <p>Price: ${cafe.features.price}</p>
        </article>
        <button>Adicionar ao carrinho</button>
        `
        menu.appendChild(itemCafe)
        itemCafe.appendChild(descricaoCafe)
    }
}