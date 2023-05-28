
document.getElementById("carrinho_compras").style.display = "none";
let existe_dado = localStorage.getItem("carrinho-pizza")
if(existe_dado){
  document.getElementById("carrinho_compras").style.display = "initial"
}
let arr_ax = [];
// console.log(arr_ax)
let btn1 = document.getElementById("btn_1")
 btn1?.addEventListener("click",()=>{
  let pizza = {
    "id": 1, 
    "item": "pizza marguerita",
    "valor":35.70 ,
    "quantidade": 0,
    "tamanho": ""
  }

  let dado = localStorage.getItem("carrinho-pizza")
  if(dado){
    
  let quantidade = document.getElementById("quantidade").value
  pizza.quantidade = Number(quantidade)

  if( quantidade == ""){
    if(typeof quantidade != Number || quantidade == ""){
      document.getElementById("alert_qtd").style.display = "initial"
       setTimeout(()=>{
        document.getElementById("alert_qtd").style.display = "none"
    },4000)
    
      return console.log("e preciso digitar a quantidade!")
     
  
    }
  
  }
 
   
  let tamanho = document.getElementById("tamanho").value

  if(tamanho != "p" && tamanho != "m" && tamanho != "g"){
    document.getElementById("verifica-tamanho").style.display = "initial"
    setTimeout(()=>{
      document.getElementById("verifica-tamanho").style.display = "none"
  },3000)
    return
  }

  pizza.tamanho = tamanho.trim()
  arr_ax.push(pizza)
  console.log(arr_ax)
  let pegar_dado = localStorage.getItem("carrinho-pizza")
  let trasformando_em_array_de_obj = JSON.parse(pegar_dado)
  trasformando_em_array_de_obj.push(arr_ax[0])
  let t_dado = JSON.stringify(trasformando_em_array_de_obj)
  localStorage.setItem("carrinho-pizza",t_dado)


  document.getElementById("carrinho_compras").style.display = "initial"
  console.log("inserindo quando ja existe")
  location.href = "carrinho.html"
  }else{

    let quantidade = document.getElementById("quantidade").value
    if( quantidade == ""){
      if(typeof quantidade != Number || quantidade == ""){
        document.getElementById("alert_qtd").style.display = "initial"
         setTimeout(()=>{
          document.getElementById("alert_qtd").style.display = "none"
      },4000)
      
        return console.log("e preciso digitar a quantidade!")
       
    
      }
    
    }
    
    pizza.quantidade = quantidade.trim()
    let tamanho = document.getElementById("tamanho").value
    if(tamanho != "p" && tamanho != "m" && tamanho != "g"){
      document.getElementById("verifica-tamanho").style.display = "initial"
      setTimeout(()=>{
        document.getElementById("verifica-tamanho").style.display = "none"
    },3000)
      return
    }
    if( tamanho == ""){
      if(typeof tamanho == String || tamanho == ""){
        document.getElementById("alert_tamanho").style.display = "initial"
        setTimeout(()=>{
         document.getElementById("alert_tamanho").style.display = "none"
     },4000)
     
        return console.log("e preciso digitar o tamanho!")
       
    
      }
    
    }
    pizza.tamanho = tamanho.trim()
    arr_ax.push(pizza)
    let t_dado = JSON.stringify(arr_ax)
    localStorage.setItem("carrinho-pizza",t_dado)
   
    setTimeout(()=>{
      
  },4000)
  document.getElementById("carrinho_compras").style.display = "initial"
  location.href = "carrinho.html"
 
  
    // console.log(arr_ax)
    console.log("inserindo quando não existe")
  }
})
console.log(arr_ax)
// fim ------->

let btn2 = document.getElementById("btn_2")
 btn2?.addEventListener("click",()=>{
  let pizza2 = {
    "id": 2, 
    "item": "pizza frango com bolonhesa",
    "valor": 33.50 ,
    "quantidade": 0,
    "tamanho": ""
  }
  let dado = localStorage.getItem("carrinho-pizza")
  if(dado){
   
  let quantidade = document.getElementById("quantidade2").value
  pizza2.quantidade = Number(quantidade)

  if( quantidade == ""){
    if(typeof quantidade != Number || quantidade == ""){
      document.getElementById("alert_qtd2").style.display = "initial"
       setTimeout(()=>{
        document.getElementById("alert_qtd2").style.display = "none"
    },4000)
    
      return console.log("e preciso digitar a quantidade!")
     
  
    }
  
  }
 
  
  let tamanho = document.getElementById("tamanho2").value

  if(tamanho != "p" && tamanho != "m" && tamanho != "g"){
    document.getElementById("verifica-tamanho2").style.display = "initial"
    setTimeout(()=>{
      document.getElementById("verifica-tamanho2").style.display = "none"
  },3000)
    return
  }

  pizza2.tamanho = tamanho.trim()
  arr_ax.push(pizza2)
  let pegar_dado = localStorage.getItem("carrinho-pizza")
  let trasformando_em_array_de_obj = JSON.parse(pegar_dado)
  trasformando_em_array_de_obj.push(arr_ax[0])
  let t_dado = JSON.stringify(trasformando_em_array_de_obj)
  localStorage.setItem("carrinho-pizza",t_dado)
  location.href = "carrinho.html"
  document.getElementById("carrinho_compras").style.display = "initial"
  console.log("inserindo quando ja existe")

  }else{

    let quantidade = document.getElementById("quantidade2").value
    if( quantidade == ""){
      if(typeof quantidade != Number || quantidade == ""){
        document.getElementById("alert_qtd2").style.display = "initial"
         setTimeout(()=>{
          document.getElementById("alert_qtd2").style.display = "none"
      },4000)
      
        return console.log("e preciso digitar a quantidade!")
       
    
      }
    
    }

    pizza2.quantidade = quantidade.trim()
    let tamanho = document.getElementById("tamanho2").value

    if(tamanho != "p" && tamanho != "m" && tamanho != "g"){
      document.getElementById("verifica-tamanho2").style.display = "initial"
      setTimeout(()=>{
        document.getElementById("verifica-tamanho2").style.display = "none"
    },3000)
      return
    }
 
    pizza2.tamanho = tamanho.trim()
    arr_ax.push(pizza2)
    let t_dado = JSON.stringify(arr_ax)
    localStorage.setItem("carrinho-pizza",t_dado)
   
  document.getElementById("carrinho_compras").style.display = "initial"
  location.href = "carrinho.html"
   
  
    // console.log(arr_ax)
    console.log("inserindo quando não existe")
  }
})


// fim ------->

let btn3 = document.getElementById("btn_3")
 btn3?.addEventListener("click",()=>{
  let pizza3 = {
    "id": 3, 
    "item": "pizza napolitana",
    "valor": 28.00 ,
    "quantidade": 0,
    "tamanho": ""
  }
  let dado = localStorage.getItem("carrinho-pizza")
  if(dado){
  let quantidade = document.getElementById("quantidade3").value
  pizza3.quantidade = Number(quantidade)

  if( quantidade == ""){
    if(typeof quantidade != Number || quantidade == ""){
      document.getElementById("alert_qtd3").style.display = "initial"
       setTimeout(()=>{
        document.getElementById("alert_qtd3").style.display = "none"
    },4000)
    
      return console.log("e preciso digitar a quantidade!")
     
  
    }
  
  }
 
  let tamanho = document.getElementById("tamanho3").value

  if(tamanho != "p" && tamanho != "m" && tamanho != "g"){
    document.getElementById("verifica-tamanho3").style.display = "initial"
    setTimeout(()=>{
      document.getElementById("verifica-tamanho3").style.display = "none"
  },3000)
    return
  }
  pizza3.tamanho = tamanho.trim()
  arr_ax.push(pizza3)
  let pegar_dado = localStorage.getItem("carrinho-pizza")
  let trasformando_em_array_de_obj = JSON.parse(pegar_dado)
  trasformando_em_array_de_obj.push(arr_ax[0])
  let t_dado = JSON.stringify(trasformando_em_array_de_obj)
  localStorage.setItem("carrinho-pizza",t_dado)
  location.href = "carrinho.html"

  
  document.getElementById("carrinho_compras").style.display = "initial"
  console.log("inserindo quando ja existe")

  }else{

    let quantidade = document.getElementById("quantidade3").value
    if( quantidade == ""){
      if(typeof quantidade != Number || quantidade == ""){
        document.getElementById("alert_qtd3").style.display = "initial"
         setTimeout(()=>{
          document.getElementById("alert_qtd3").style.display = "none"
      },4000)
      
        return console.log("e preciso digitar a quantidade!")
       
    
      }
    
    }
    pizza3.quantidade = quantidade.trim()
    let tamanho = document.getElementById("tamanho3").value
    if(tamanho != "p" && tamanho != "m" && tamanho != "g"){
      document.getElementById("verifica-tamanho3").style.display = "initial"
      setTimeout(()=>{
        document.getElementById("verifica-tamanho3").style.display = "none"
    },3000)
      return
    }
   
    pizza3.tamanho = tamanho.trim()
    arr_ax.push(pizza3)
    let t_dado = JSON.stringify(arr_ax)
    localStorage.setItem("carrinho-pizza",t_dado)

  document.getElementById("carrinho_compras").style.display = "initial"
  location.href = "carrinho.html"

  
    // console.log(arr_ax)
    console.log("inserindo quando não existe")
  }
})

let btn4 = document.getElementById("btn_4")
 btn4?.addEventListener("click",()=>{
  let pizza4 = {
    "id": 4, 
    "item": "pizza quatro queijos",
    "valor": 35.00 ,
    "quantidade": 0,
    "tamanho": ""
  }
  let dado = localStorage.getItem("carrinho-pizza")
  if(dado){
  let quantidade = document.getElementById("quantidade4").value
  pizza4.quantidade = Number(quantidade )


  let tamanho = document.getElementById("tamanho4").value

  if(tamanho != "p" && tamanho != "m" && tamanho != "g"){
    document.getElementById("verifica-tamanho4").style.display = "initial"
    setTimeout(()=>{
      document.getElementById("verifica-tamanho4").style.display = "none"
  },3000)
    return
  }

  pizza4.tamanho = tamanho.trim()
  arr_ax.push(pizza4)
  let pegar_dado = localStorage.getItem("carrinho-pizza")
  let trasformando_em_array_de_obj = JSON.parse(pegar_dado)
  trasformando_em_array_de_obj.push(arr_ax[0])
  let t_dado = JSON.stringify(trasformando_em_array_de_obj)
  localStorage.setItem("carrinho-pizza",t_dado)
  location.href = "carrinho.html"

  document.getElementById("carrinho_compras").style.display = "initial"
  console.log("inserindo quando ja existe")

  }else{

    let quantidade = document.getElementById("quantidade4").value
    if( quantidade == ""){
      if(typeof quantidade != Number || quantidade == ""){
        document.getElementById("alert_qtd4").style.display = "initial"
         setTimeout(()=>{
          document.getElementById("alert_qtd4").style.display = "none"
      },4000)
      
        return console.log("e preciso digitar a quantidade!")
       
    
      }
    
    }
    pizza4.quantidade = quantidade.trim()

    let tamanho = document.getElementById("tamanho4").value

   if(tamanho != "p" && tamanho != "m" && tamanho != "g"){
    document.getElementById("verifica-tamanho4").style.display = "initial"
    setTimeout(()=>{
      document.getElementById("verifica-tamanho4").style.display = "none"
  },3000)
    return
  }
    pizza4.tamanho = tamanho.trim()
    arr_ax.push(pizza4)
    let t_dado = JSON.stringify(arr_ax)
    localStorage.setItem("carrinho-pizza",t_dado)

  document.getElementById("carrinho_compras").style.display = "initial"
  location.href = "carrinho.html"
 
  
    // console.log(arr_ax)
    console.log("inserindo quando não existe")
  }
})

//==========================================================================

let btn5 = document.getElementById("btn_5")
 btn5?.addEventListener("click",()=>{
  let pizza5 = {
    "id": 5, 
    "item": "Pizza de Calabresa com Catupiry",
    "valor": 35.00 ,
    "quantidade": 0,
    "tamanho": ""
  }
  let dado = localStorage.getItem("carrinho-pizza")
  if(dado){
  let quantidade = document.getElementById("quantidade5").value
  pizza5.quantidade = Number(quantidade )

  if( quantidade == ""){
    if(typeof quantidade != Number || quantidade == ""){
      document.getElementById("alert_qtd5").style.display = "initial"
       setTimeout(()=>{
        document.getElementById("alert_qtd5").style.display = "none"
    },4000)
    
      return console.log("e preciso digitar a quantidade!")
     
  
    }
  
  }
 
  
  let tamanho = document.getElementById("tamanho5").value

  if(tamanho != "p" && tamanho != "m" && tamanho != "g"){
    document.getElementById("verifica-tamanho5").style.display = "initial"
    setTimeout(()=>{
      document.getElementById("verifica-tamanho5").style.display = "none"
  },3000)
    return
  }
  pizza5.tamanho = tamanho.trim()
  arr_ax.push(pizza5)
  let pegar_dado = localStorage.getItem("carrinho-pizza")
  let trasformando_em_array_de_obj = JSON.parse(pegar_dado)
  trasformando_em_array_de_obj.push(arr_ax[0])
  let t_dado = JSON.stringify(trasformando_em_array_de_obj)
  localStorage.setItem("carrinho-pizza",t_dado)
  location.href = "carrinho.html"

  document.getElementById("carrinho_compras").style.display = "initial"
  console.log("inserindo quando ja existe")

  }else{

    let quantidade = document.getElementById("quantidade5").value
    if( quantidade == ""){
      if(typeof quantidade != Number || quantidade == ""){
        document.getElementById("alert_qtd5").style.display = "initial"
         setTimeout(()=>{
          document.getElementById("alert_qtd5").style.display = "none"
      },4000)
      
        return console.log("e preciso digitar a quantidade!")
       
    
      }
    
    }
    pizza5.quantidade = quantidade.trim()
    let tamanho = document.getElementById("tamanho5").value

    if(tamanho != "p" && tamanho != "m" && tamanho != "g"){
      document.getElementById("verifica-tamanho5").style.display = "initial"
      setTimeout(()=>{
        document.getElementById("verifica-tamanho5").style.display = "none"
    },3000)
      return
    }
    pizza5.tamanho = tamanho.trim()
    arr_ax.push(pizza5)
    let t_dado = JSON.stringify(arr_ax)
    localStorage.setItem("carrinho-pizza",t_dado)

  document.getElementById("carrinho_compras").style.display = "initial"
  location.href = "carrinho.html"
 
  
    // console.log(arr_ax)
    console.log("inserindo quando não existe")
  }
})

// let btn2 = document.getElementById("btn_2")
//  btn2?.addEventListener("click",()=>{
//   let pizza = {
//     "id": 1, 
//     "item": "pizza",
//     "valor": 35.00 ,
//     "quantidade": 0,
//     "tamanho": ""
//   }
//   let dado = localStorage.getItem("carrinho")
//   if(dado){
//     let pegar_dado = localStorage.getItem("carrinho")
//     let trasformando_em_array_de_obj = JSON.parse(pegar_dado)
//     trasformando_em_array_de_obj
   
//   let quantidade = document.getElementById("quantidade2").value
  
//   pizza.quantidade = quantidade.trim()
//   let tamanho = document.getElementById("tamanho2").value
//   pizza.tamanho = tamanho.trim()
//   arr_ax.push(pizza)
//   let t_dado = JSON.stringify(arr_ax)
//   localStorage.setItem("carrinho",t_dado)
//   limpar()
//   console.log("inserindo quando ja existe")

//   }else{
//     let pizza = {
//       "id": 2, 
//       "item": "pizza",
//       "valor": 35.00 ,
//       "quantidade": 0,
//       "tamanho": ""
//     }
//     let quantidade = document.getElementById("quantidade2").value
//     pizza.quantidade = quantidade.trim()
//     let tamanho = document.getElementById("tamanho2").value
//     pizza.tamanho = tamanho.trim()
//     arr_ax.push(pizza)
//     let t_dado = JSON.stringify(arr_ax)
//     localStorage.setItem("carrinho",t_dado)
//     limpar()
    
//     // console.log(arr_ax)
//     console.log("inserindo quando não existe")
//   }
// })











// funçao que limpa o campo tamanho e quantidade

//----------- debug------------

