//localStorage.clear()
 document.getElementById("carrinho_compras").style.display = "none";
let existe_dado = localStorage.getItem("carrinho-hamburguer")
if(existe_dado){
  document.getElementById("carrinho_compras").style.display = "initial"
}
let arr_ax = [];
// console.log(arr_ax)
let btn1 = document.getElementById("btn_1_hamburger")
 btn1?.addEventListener("click",()=>{
  let hamburguer_simples = {
    "id": 1, 
    "item": "hamburguer simples",
    "valor":12.50 ,
    "quantidade": 0,
    "especificaçoes": ""
  }

  let dado = localStorage.getItem("carrinho-hamburguer")
  if(dado){
    
  let quantidade = document.getElementById("quantidade").value
  hamburguer_simples.quantidade = Number(quantidade)

  if( quantidade == ""){
  
      document.getElementById("alert_qtd").style.display = "initial"
       setTimeout(()=>{
        document.getElementById("alert_qtd").style.display = "none"
    },4000)
    
      return console.log("e preciso digitar a quantidade!")
     
  
    }
  
  
 
  let especificaçoes1 = document.getElementById("especifica").value

  if(especificaçoes1 == ""){
    hamburguer_simples.especificaçoes = "nada a declarar!"
  }else{
    hamburguer_simples.especificaçoes = String(especificaçoes1).trim()
  }
  

  
  arr_ax.push(hamburguer_simples)
  console.log(arr_ax)
  let pegar_dado = localStorage.getItem("carrinho-hamburguer")
  let trasformando_em_array_de_obj = JSON.parse(pegar_dado)
  trasformando_em_array_de_obj.push(arr_ax[0])
  let t_dado = JSON.stringify(trasformando_em_array_de_obj)
  localStorage.setItem("carrinho-hamburguer",t_dado)


  document.getElementById("carrinho_compras").style.display = "initial"
  console.log("inserindo quando ja existe")
  location.href = "carrinho_hamburguer.html"
  }else{

    let quantidade = document.getElementById("quantidade").value
    if( quantidade == ""){
     
        document.getElementById("alert_qtd").style.display = "initial"
         setTimeout(()=>{
          document.getElementById("alert_qtd").style.display = "none"
      },4000)
      
        return console.log("e preciso digitar a quantidade!")
       
    
      }

  
      let especificaçoes1 = document.getElementById("especifica").value

      hamburguer_simples.especificaçoes = String(especificaçoes1).trim()
      if(especificaçoes1 == ""){
        hamburguer_simples.especificaçoes = "nada a declarar!"
      }

    

    
    hamburguer_simples.quantidade = quantidade

    arr_ax.push(hamburguer_simples)
    let t_dado = JSON.stringify(arr_ax)
    localStorage.setItem("carrinho-hamburguer",t_dado)
   
  document.getElementById("carrinho_compras").style.display = "initial"
  location.href = "carrinho_hamburguer.html"
 
  
    // console.log(arr_ax)
    console.log("inserindo quando não existe")
  }
})

let btn_aparece =  document.getElementById("especificaçao")
btn_aparece.addEventListener("click",()=>{
    document.getElementById("especifica").style.display = "initial"
    document.getElementById("especificaçao").style.display = "none"
    document.getElementById("fechar_especificaçao").style.display = "initial"
    document.getElementById("especificaçao").style.textAlign = "center"
  
    
})

let btn_esconder =  document.getElementById("fechar_especificaçao")
btn_esconder.addEventListener("click",()=>{
    document.getElementById("fechar_especificaçao").style.display = "none"
    document.getElementById("especificaçao").style.display = "initial"
    document.getElementById("especifica").style.display = "none"
    document.getElementById("especificaçao").style.textAlign = "center"
    document.getElementById("especificaçao").style.display = "flex"
})
//=============================================================================

let btn2 = document.getElementById("btn_2_hamburguer")
 btn2?.addEventListener("click",()=>{
  let x_burguer = {
    "id": 2, 
    "item": " x-burguer",
    "valor":15.50 ,
    "quantidade": 0,
    "especificaçoes": ""
  }

  let dado = localStorage.getItem("carrinho-hamburguer")
  if(dado){
    
  let quantidade = document.getElementById("quantidade2").value
  x_burguer.quantidade = Number(quantidade)

  if( quantidade == ""){
  
      document.getElementById("alert_qtd2").style.display = "initial"
       setTimeout(()=>{
        document.getElementById("alert_qtd2").style.display = "none"
    },4000)
    
      return console.log("e preciso digitar a quantidade!")
     
  
    }
  
  
 
  let especificaçoes2 = document.getElementById("especifica2").value

  if(especificaçoes2 == ""){
    x_burguer.especificaçoes = "nada a declarar!"
  }else{
    x_burguer.especificaçoes = String(especificaçoes2).trim()
  }
 

  
  arr_ax.push(x_burguer)
  console.log(arr_ax)
  let pegar_dado = localStorage.getItem("carrinho-hamburguer")
  let trasformando_em_array_de_obj = JSON.parse(pegar_dado)
  trasformando_em_array_de_obj.push(arr_ax[0])
  let t_dado = JSON.stringify(trasformando_em_array_de_obj)
  localStorage.setItem("carrinho-hamburguer",t_dado)


  document.getElementById("carrinho_compras").style.display = "initial"
  console.log("inserindo quando ja existe")
  location.href = "carrinho_hamburguer.html"
  }else{

    let quantidade = document.getElementById("quantidade2").value
    if( quantidade == ""){
     
        document.getElementById("alert_qtd").style.display = "initial"
         setTimeout(()=>{
          document.getElementById("alert_qtd").style.display = "none"
      },4000)
      
        return console.log("e preciso digitar a quantidade!")
       
    
      }

  
      let especificaçoes2 = document.getElementById("especifica2").value
      
      if(especificaçoes2 == ""){
        x_burguer.especificaçoes = "nada a declarar!"
      }else{
        x_burguer.especificaçoes = String(especificaçoes2).trim()
      }

      x_burguer.quantidade = quantidade
    arr_ax.push(x_burguer)
    let t_dado = JSON.stringify(arr_ax)
    localStorage.setItem("carrinho-hamburguer",t_dado)
   
    setTimeout(()=>{
      
  },4000)
  document.getElementById("carrinho_compras").style.display = "initial"
  location.href = "carrinho_hamburguer.html"
 
  
    // console.log(arr_ax)
    console.log("inserindo quando não existe")
  }
})


let btn_aparece_2 =  document.getElementById("especificaçao_2")
btn_aparece_2.addEventListener("click",()=>{
    document.getElementById("especifica2").style.display = "initial"
    document.getElementById("especificaçao_2").style.display = "none"
    document.getElementById("fechar_especificaçao_2").style.display = "initial"
    document.getElementById("especificaçao_2").style.tex = "center"
    
})
//=====================================================================

let btn_esconder_2 =  document.getElementById("fechar_especificaçao_2")
btn_esconder_2.addEventListener("click",()=>{
    document.getElementById("fechar_especificaçao_2").style.display = "none"
    document.getElementById("especificaçao_2").style.display = "initial"
    document.getElementById("especifica2").style.display = "none"
    document.getElementById("especificaçao_2").style.textAlign = "center"
    document.getElementById("especificaçao_2").style.display = "flex"
})

let btn3 = document.getElementById("btn_3_hamburguer")
 btn3?.addEventListener("click",()=>{
  let x_tudo = {
    "id": 3, 
    "item": " x-tudo",
    "valor":18.00 ,
    "quantidade": 0,
    "especificaçoes": ""
  }

  let dado = localStorage.getItem("carrinho-hamburguer")
  if(dado){
    
  let quantidade = document.getElementById("quantidade3").value
  x_tudo.quantidade = Number(quantidade)

  if( quantidade == ""){
  
      document.getElementById("alert_qtd3").style.display = "initial"
       setTimeout(()=>{
        document.getElementById("alert_qtd3").style.display = "none"
    },4000)
    
      return console.log("e preciso digitar a quantidade!")
     
  
    }
  
  
 
  let especificaçoes3 = document.getElementById("especifica3").value

  if(especificaçoes3 == ""){
    x_tudo.especificaçoes = "nada a declarar!"
  }else{
    x_tudo.especificaçoes = String(especificaçoes3).trim()
  }
  
  arr_ax.push(x_tudo)
  console.log(arr_ax)
  let pegar_dado = localStorage.getItem("carrinho-hamburguer")
  let trasformando_em_array_de_obj = JSON.parse(pegar_dado)
  trasformando_em_array_de_obj.push(arr_ax[0])
  let t_dado = JSON.stringify(trasformando_em_array_de_obj)
  localStorage.setItem("carrinho-hamburguer",t_dado)


  document.getElementById("carrinho_compras").style.display = "initial"
  console.log("inserindo quando ja existe")
  location.href = "carrinho_hamburguer.html"
  }else{

    let quantidade = document.getElementById("quantidade3").value
    if( quantidade == ""){
     
        document.getElementById("alert_qtd3").style.display = "initial"
         setTimeout(()=>{
          document.getElementById("alert_qtd3").style.display = "none"
      },4000)
      
        return console.log("e preciso digitar a quantidade!")
       
    
      }

  
      let especificaçoes3 = document.getElementById("especifica3").value
      if(especificaçoes3 == ""){
        x_tudo.especificaçoes = "nada a declarar!"
      }else{
        x_tudo.especificaçoes = String(especificaçoes3).trim()
      }

      x_tudo.quantidade = quantidade

    arr_ax.push(x_tudo)
    let t_dado = JSON.stringify(arr_ax)
    localStorage.setItem("carrinho-hamburguer",t_dado)
   
    setTimeout(()=>{
      
  },4000)
  document.getElementById("carrinho_compras").style.display = "initial"
  location.href = "carrinho_hamburguer.html"
 
  
    // console.log(arr_ax)
    console.log("inserindo quando não existe")
  }
})


let btn_aparece_3 =  document.getElementById("especificaçao_3")
btn_aparece_3.addEventListener("click",()=>{
    document.getElementById("especifica3").style.display = "initial"
    document.getElementById("especificaçao_3").style.display = "none"
    document.getElementById("fechar_especificaçao_3").style.display = "initial"
    document.getElementById("especificaçao_3").style.tex = "center"
    
})
//=====================================================================

let btn_esconder_3 =  document.getElementById("fechar_especificaçao_3")
btn_esconder_3.addEventListener("click",()=>{
    document.getElementById("fechar_especificaçao_3").style.display = "none"
    document.getElementById("especificaçao_3").style.display = "initial"
    document.getElementById("especifica3").style.display = "none"
    document.getElementById("especificaçao_3").style.textAlign = "center"
    document.getElementById("especificaçao_3").style.display = "flex"
})

//=============================================================================

let btn4 = document.getElementById("btn_4_hamburguer")
 btn4?.addEventListener("click",()=>{
  let x_bacon = {
    "id": 4, 
    "item": " x-tudo",
    "valor":17.00 ,
    "quantidade": 0,
    "especificaçoes": ""
  }

  let dado = localStorage.getItem("carrinho-hamburguer")
  if(dado){
    
  let quantidade = document.getElementById("quantidade4").value
  x_bacon.quantidade = Number(quantidade)

  if( quantidade == ""){
  
      document.getElementById("alert_qtd4").style.display = "initial"
       setTimeout(()=>{
        document.getElementById("alert_qtd4").style.display = "none"
    },4000)
    
      return console.log("e preciso digitar a quantidade!")
     
  
    }
  
  
 
  let especificaçoes4 = document.getElementById("especifica4").value

  if(especificaçoes4 == ""){
    x_bacon.especificaçoes = "nada a declarar!"
  }else{
    x_bacon.especificaçoes = String(especificaçoes4).trim()
  }

  
  arr_ax.push(x_bacon)
  console.log(arr_ax)
  let pegar_dado = localStorage.getItem("carrinho-hamburguer")
  let trasformando_em_array_de_obj = JSON.parse(pegar_dado)
  trasformando_em_array_de_obj.push(arr_ax[0])
  let t_dado = JSON.stringify(trasformando_em_array_de_obj)
  localStorage.setItem("carrinho-hamburguer",t_dado)


  document.getElementById("carrinho_compras").style.display = "initial"
  console.log("inserindo quando ja existe")
  location.href = "carrinho_hamburguer.html"
  }else{

    let quantidade = document.getElementById("quantidade4").value
    if( quantidade == ""){
     
        document.getElementById("alert_qtd4").style.display = "initial"
         setTimeout(()=>{
          document.getElementById("alert_qtd4").style.display = "none"
      },4000)
      
        return console.log("e preciso digitar a quantidade!")
       
    
      }

  
      let especificaçoes4 = document.getElementById("especifica4").value
      if(especificaçoes4 == ""){
        x_bacon.especificaçoes = "nada a declarar!"
      }else{
        x_bacon.especificaçoes = String(especificaçoes4).trim()
      }
      x_bacon.quantidade = quantidade

    arr_ax.push(x_bacon)
    let t_dado = JSON.stringify(arr_ax)
    localStorage.setItem("carrinho-hamburguer",t_dado)
   
    setTimeout(()=>{
      
  },4000)
  document.getElementById("carrinho_compras").style.display = "initial"
  location.href = "carrinho_hamburguer.html"
 
  
    // console.log(arr_ax)
    console.log("inserindo quando não existe")
  }
})


let btn_aparece_4 =  document.getElementById("especificaçao_4")
btn_aparece_4.addEventListener("click",()=>{
    document.getElementById("especifica4").style.display = "initial"
    document.getElementById("especificaçao_4").style.display = "none"
    document.getElementById("fechar_especificaçao_4").style.display = "initial"
    document.getElementById("especificaçao_4").style.tex = "center"
    
})
//=====================================================================

let btn_esconder_4 =  document.getElementById("fechar_especificaçao_4")
btn_esconder_4.addEventListener("click",()=>{
    document.getElementById("fechar_especificaçao_4").style.display = "none"
    document.getElementById("especificaçao_4").style.display = "initial"
    document.getElementById("especifica4").style.display = "none"
    document.getElementById("especificaçao_4").style.textAlign = "center"
    document.getElementById("especificaçao_4").style.display = "flex"
})