let banco = [];

function salvando(){
	let dados = localStorage.getItem("cadastrar")
	if(dados){
		let dados = localStorage.getItem("cadastrar")
		let novo = JSON.parse(dados)
	
		let nome = document.getElementById("nome").value

		if(nome == "" && typeof nome != String){
			document.getElementById("verifica_nome").style.display = "initial"
			setTimeout(()=>{
				document.getElementById("verifica_nome").style.display = "none"
			},3000)
			return 
		}

		let bairro = document.getElementById("bairro").value

		if(bairro == "" && typeof bairro != String){
			document.getElementById("verifica_bairro").style.display = "initial"
			setTimeout(()=>{
				document.getElementById("verifica_bairro").style.display = "none"
			},3000)
			return 
		}

		let nome_da_rua = document.getElementById("rua").value

		if(nome_da_rua == "" && typeof nome_da_rua != String){
			document.getElementById("verifica_rua").style.display = "initial"
			setTimeout(()=>{
				document.getElementById("verifica_rua").style.display = "none"
			},3000)
			return 
		}

		let numero_da_casa = document.getElementById("numero").value

		if(numero_da_casa == "" && typeof numero_da_casa != Number){
			document.getElementById("verifica_numero_casa").style.display = "initial"
			setTimeout(()=>{
				document.getElementById("verifica_numero_casa").style.display = "none"
			},3000)
			return 
		}
		let molde = {
			"nome":"",
			"bairro":"",
			"nome_da_rua":"",
			"numero_da_casa": Number
		}
		molde.nome = nome;
		molde.bairro = bairro;
		molde.nome_da_rua = nome_da_rua
		molde.numero_da_casa = numero_da_casa
		console.log(molde)
		banco.push(molde)
		let novo_2 = JSON.stringify(banco)
		localStorage.setItem("cadastrar",novo_2)
		//console.log(novo)
		sucesso()
		

	}else{
		
		let nome = document.getElementById("nome").value
		let bairro = document.getElementById("bairro").value
		let nome_da_rua = document.getElementById("rua").value
		let numero_da_casa = document.getElementById("numero").value
		let molde = {
			"nome":String,
			"bairro":String,
			"nome_da_rua":String,
			"numero_da_casa": Number
		}
		molde.nome = nome;
		molde.bairro = bairro;
		molde.nome_da_rua = nome_da_rua
		molde.numero_da_casa = numero_da_casa
		banco.push(molde)
		let nova = JSON.stringify(banco)
		localStorage.setItem("cadastrar",nova)
		
		sucesso()
		
	}
	

}

console.log(getItem("cadastrar"))

	


function sucesso(){
	let mostrar = document.getElementById('sucesso')
	mostrar.style.display = "block"
	    document.getElementById("nome").value = ""
		document.getElementById("bairro").value = ""
		document.getElementById("rua").value = ""
		document.getElementById("numero").value = ""
	setTimeout(()=>{
		let mostrar = document.getElementById('sucesso')
		mostrar.style.display = "none"
	
	},3000)

}

// let dados = localStorage.getItem("dados")
// let dado = JSON.parse(dados)
// // sort ordena em ordem alfabetica e reverse inverte o array



// function listar(){
// 	if(dado == null){
// 		let sucess = document.getElementById('sucesso_2')
// 		sucess.style.display = "block"
// 		setTimeout(()=>{
// 			sucess.style.display = "none"
// 		},5000)
// 	}else{
// 		for (let iten = 0; iten < dado.length; iten++) {
// 			const element = dado[iten];
// 			let tag = document.createElement("div")
// 			let box = document.getElementById("box")
// 			box.insertAdjacentElement("afterbegin",tag)
	
			
// 				tag.textContent = element
// 				setTimeout(()=>{
// 					let box = document.getElementById("box")
// 					let div = document.querySelector("#box div")
// 					box.removeChild(div)
// 					//location.reload()
					
// 				},5000);
		
// 					dado.sort().reverse()
// 		}
// 	}
// 	}
// function exibindo(){

// 	let dados = localStorage.getItem("dados")
// 	console.log(dados)
// 	let novo = JSON.parse(dados)
// 	//console.log(novo)
// 	let busca = document.getElementById("nome-b")


// 	function buscaBinaria(novo,busca){
// 	  let inicio = 0
// 	  let fim = novo.length
// 	  let achou = false
	  
// 	  while(inicio <= fim && !achou){

// 		  let meio = Math.ceil((inicio + fim) / 2)

// 			if(novo[meio] == busca.value){
// 			achou = true

// 			}else{

// 				if(busca < novo[meio]){
// 				fim  = meio - 1
// 				console.log(novo[meio])

// 			}else{

// 		    inicio = meio + 1
// 		    console.log(novo[meio])
// 		}
		
// 	  }
	  
// 	  }
// 	let index = novo.indexOf(busca.value)
// 	  let res = {
// 		encontrou:achou,
// 		indice:index,
// 		elemento:busca.value
// 	  } 
	  
// 	  console.log(res.encontrou)
// 	  busca.value = ""
// 	  return res
// 	  }
// 	  listar()
// 	console.log(buscaBinaria(novo,busca))
	
// }

// window.confirm = function() {
// 	return "se voce sair ira perder todos os itens do?";
// };

// if(dados){
// 	// puxando dados do localstorage 
//    dados = localStorage.getItem("carrinho")
//    // trasformando em json
//    let novo = JSON.parse(dados)
//    // pegando o valor que vem do input e atribuindo a variavel tamanho
//    let tamanho = document.getElementById("tamanho").value
//    // definindo o valor para a propriedade tamanho do obj pizza
//    pizza.tamanho = tamanho
//    let t_dado = JSON.stringify(arr_ax)
//    localStorage.setItem("carrinho",t_dado)