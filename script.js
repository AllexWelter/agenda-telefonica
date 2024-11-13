const frm = document.querySelector("form")
const imgCel = '<img src="./imagens/smarthphone.png" alt="smarthphone" />'
const imgTel = '<img src="./imagens/telefone_fixo.png" alt="smarthphone" />'

frm.addEventListener("submit", function(e) {
    e.preventDefault()

    // Formata o número de telefone antes de adicioná-lo
    const numTel = document.getElementById("numero-telefone")
    const formattedPhone = formatPhoneNumber(numTel.value)
    
    //Adiciona a linha apenas se o telefone for válido
    if (formattedPhone) {
        adicionaLinha(formattedPhone)  //passa o telefone formatado para a função
    }
})

function adicionaLinha(formattedPhone) {
    const nome = document.getElementById("nome-completo")
    
    //Verifica se é celular ou fixo
    const tipoIcone = isCellPhone(formattedPhone) ? imgCel : imgTel

    //Criação da nova linha com a imagem e os valores de nome e telefone
    let linha = "<tr>"
    linha += `<td>${tipoIcone}</td>`
    linha += `<td>${nome.value}</td>`
    linha += `<td>${formattedPhone}</td>`
    linha += "</tr>"

    //Insere a nova linha na tabela
    const tbody = document.querySelector("tbody")
    tbody.innerHTML += linha

    nome.value = ''
    document.getElementById("numero-telefone").value = ''
}

// Função para verificar se o número é de celular
function isCellPhone(phone) {
    // Remove qualquer formatação para focar apenas nos números
    phone = phone.replace(/\D/g, "")

    return phone.length === 11 && phone.charAt(2) === '9'  //Verifica se o número tem 11 dígitos e começa com 9 após o DDD
}

function formatPhoneNumber(phone) {
    phone = phone.replace(/\D/g, "")  // Remove qualquer caractere não numérico

    if (phone.length === 11 && phone.slice(2, 3) === "9") {
        phone = phone.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3")  // Formata para celular: (XX) XXXXX-XXXX
    } else if (phone.length === 10) {
        phone = phone.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3")  // Formata para fixo: (XX) XXXX-XXXX
    } else {
        alert("Digite um número válido!")
        document.getElementById("numero-telefone").value = ""
        return null
    }
    return phone    
}