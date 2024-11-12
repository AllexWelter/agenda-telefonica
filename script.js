const frm = document.querySelector("form")
const imgCel = '<img src="./imagens/smarthphone.png" alt="smarthphone" />'
const inserir = []



frm.addEventListener("submit", function(e) {
    e.preventDefault()

    adicionaLinha()

})

function adicionaLinha() {
    const nome = document.getElementById("nome-completo")
    const numTel = document.getElementById("numero-telefone")
    
    inserir.push(nome.value)
    inserir.push(parseInt(numTel.value))
    inserir.push(imgCel.value)

    //Criação da nova linha com a imagem e os valores de nome e telefone
    let linha = "<tr>"
    linha += `<td>${imgCel}</td>`
    linha += `<td>${nome.value}</td>`
    linha += `<td>${numTel.value}</td>`
    linha += "</tr>"

    //Insere a nova linha na tabela
    const tbody = document.querySelector("tbody")
    tbody.innerHTML += linha

    nome.value = ''
    numTel.value = ''
}