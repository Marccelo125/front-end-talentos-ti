lerCafes()
async function lerCafes() {
    const resposta = await fetch("./json/dadosMenu.json")
    const dadosMenu = await resposta.json()
    
    
    for (cafe of dadosMenu) {
        const menu = document.querySelector(".produtos")
        const itemCafe = document.createElement("article")
        const descricaoCafe = document.createElement("p")
        const comprarCafe = document.createElement("p")

        itemCafe.innerHTML = `
        <p>${cafe.id}</p>
        `
        
        descricaoCafe.innerHTML = `
        <p>${cafe.features.type}</p>
        <p>${cafe.features.origin}</p>
        `
    
    
        menu.appendChild(itemCafe)
        itemCafe.appendChild(descricaoCafe)
      
    }
}