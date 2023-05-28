// let btn = document.getElementById("carrinho_compras");

// btn?.addEventListener("click", () => {
//     document.getElementById("esconde").style.display = "none"
    
//     btn.href = "vitrine_hamburgues.html";

  
// });

// let pg_pizza = "pizza"
    //
    let imprimir = localStorage.getItem("carrinho-pizza")
    
    console.log(imprimir)
    let trasform = JSON.parse(imprimir)
    //console.log(trasform)
  
    for (let i = 0; i < trasform.length; i++) {
    
    let tabela = document.getElementById("tabela");
 
   
    // verificando quantidades de linha da tabela
    let qtd_linhas = tabela.rows.length;
    //console.log(qtd_linhas)
    // percorrer linhas e inserir apos a ultima linha
    let linha = tabela.insertRow(qtd_linhas)
    let cell_id = linha.insertCell(0)
    let cell_item = linha.insertCell(1)
    let cell_valor = linha.insertCell(2)
    let cell_quantidade = linha.insertCell(3)
    let cell_tamanho = linha.insertCell(4)
    cell_id.innerHTML= trasform[i].id;
    cell_item.innerHTML= trasform[i].item;
    cell_valor.innerHTML= trasform[i].valor.toFixed(2)
    cell_quantidade.innerHTML= trasform[i].quantidade;
    cell_tamanho.innerHTML= trasform[i].tamanho;  
    }




  

// confirm("se voce sair ira perder todos os itens do carrinho")
 

// let {
//     id: kid, 
//     item: kitem, 
//     valor: kvalor, 
//     quantidade: kquantidade, 
//     tamanho: ktamanho} = trasform

// console.log(kid)
// console.log(kitem)
// console.log(kvalor)
// console.log(kquantidade)
// console.log(ktamanho)
// //pegando a tabela 
