const titulo1 = document.createElement("h3")
const titulo2 = document.createElement("h3")
const par1 = document.createElement("p")
const par2 = document.createElement("p")
const mensagens = document.createElement('p')

const txtMensagens = [
    "Funcionando bem",
    "Quase tudo certo",
    "O email não ta funcionando",
    "Poderia não travar tanto",
    "Tente mais tarde",
    "Só mais um pouco tô resolvendo um assunto",
    '<img src = "https://picsum.photos/200/200" />',
]

const numMensagem = Number.parseInt(Math.random() * txtMensagens.length)
mensagens.innerHTML = txtMensagens[numMensagem]

titulo1.innerText = 'Primeiro título'
titulo2.innerText = 'subtítulo'

par1.innerText = "lorem ipsum dolor.."
par2.innerHTML = "<strong>Lorem</strong> ipsum dolor sic amet.."

document.body.appendChild(mensagens)
document.body.appendChild(titulo1)
document.body.appendChild(par1)
document.body.appendChild(titulo2)
document.body.appendChild(par2)