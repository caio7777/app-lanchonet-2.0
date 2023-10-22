
//localStorage.clear()
let imprimir = localStorage.getItem("carrinho-hamburguer")
    
console.log(imprimir)
let trasform = JSON.parse(imprimir)
//console.log(trasform)

for (let i = 0; i < trasform.length; i++) {

let tabela = document.getElementById("tabela_2");
tabela.summary = "tabela de produtos"

let qtd_linhas = tabela.rows.length;


let linha = tabela.insertRow(qtd_linhas)
let cell_id = linha.insertCell(0) 
let cell_item = linha.insertCell(1) 
let cell_valor = linha.insertCell(2)
let cell_quantidade = linha.insertCell(3)
let cell_especificaçoes = linha.insertCell(4)
let cell_subtotal = linha.insertCell(5)
cell_id.innerHTML= trasform[i].id
cell_item.innerHTML= trasform[i].item;
cell_valor.innerHTML= trasform[i].valor.toFixed(2)
cell_quantidade.innerHTML= trasform[i].quantidade;
cell_especificaçoes.innerHTML= trasform[i].especificaçoes
cell_subtotal.innerHTML = trasform[i].quantidade * trasform[i].valor 

//console.log(tabela)
}
