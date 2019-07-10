/* Manejo del DOM */
const pokeData = POKEMON.pokemon;
let containerResult = document.getElementById("result");
let pokeCard = "";
let cardGallery; 




//declarar las variable cons los IDs de los botones datos y pantallas
const btnPokedex = document.getElementById("btnPokedex");
const slctFilWeak = document.getElementById("slctFilterWeaknesses");
const contPokeGallery = document.getElementById("pokeGallery");
// const contPokeList =document.getElementById("pokeList");
const pokeResult =document.getElementById("pokeList");
//criar variable para linkear la con la data Pokemon


//pagina home para pokedex
document.getElementById("btnPokedex").addEventListener ("click", ( ) => {
  //Guardar el nombre del usuario
  document.getElementById("home").style.display = "flex";
  document.getElementById("allPokemons").style.display = "block";
  //Todos los pokemones  
  cardGallery =  pokeData.map(data => `${data.name} ${data.type}`) ; 
  for (let i = 0; i< pokeData.length; i++){
  console.log(cardGallery);
};
})


// Get the modal

// Get the button that opens the modal

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  showGallery.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it


 //Crear Elementos Galería
 const showGallery = (data) => {
    for (let i = 0; i < data.length; i++){
      pokeCard +=
       `<div class="result " style="width: 200px;"  onclick="showCards(${data[i].id})">
    <img class="modal-img" src=${data[i].img} alt="modal image cap">
    <div class="modal-body">
      <h5 class="modal-title">${data[i].name}</h5>
      <p class="modal-num">#${data[i].num}.</p>
      <p class="modal-type">Type: ${data[i].type}.</p>
    </div>
  </div>`
    } containerResult.innerHTML = pokeCard;
    };

//Mostrar cards en orden aleatorio
const radomData = (data)=>{
  return data.sort(() => Math.random() - 0.5)
};
showGallery(radomData(pokeData));

// //Filtro por Tipo 
// document.getElementById("slctFilterType").addEventListener ("change", ( ) => {
//   pokeResult.innerHTML="";
//   pokeTypeSelection = document.getElementById("slctFilterType").options.value;
//   //Guardar la selección del usuario
//   let condition = document.getElementById("slctFilterType").options[document.getElementById("slctFilterType").selectedIndex].value;
//   console.log(condition);
//   let pokeSearch = pokeData.filter(data => data.type[0] === condition || data.type[1] === condition); 
//   for (let i = 0; i< pokeSearch.length; i++){
//     pokeResult.innerHTML +=`<div class="card " style="width: 200px;" data-toggle="modal" data-target="#exampleModalCenter" onclick="showCards(${pokeSearch[i].id})">
//     <h3 class="card-title">${pokeSearch[i].num} ${pokeSearch[i].name}</h3>
//     <img class="card-img-top" src=${pokeSearch[i].img} alt="Card image cap">
//   <div class="card-body">
//     <p class="card-text">Type: ${pokeSearch[i].type}.</p>
//   </div>
// </div>`
// }
// });


//Filtro por Debilidad
// document.getElementById("slctFilterWeaknesses").addEventListener ("change", ( ) => {
//   pokeResult.innerHTML="";
//   pokeTypeSelection = document.getElementById("slctFilterWeaknesses").options.value;
  //Guardar la selección del usuario
//   let condition = document.getElementById("slctFilterWeaknesses").options[document.getElementById("slctFilterWeaknesses").selectedIndex].value;
//   console.log(condition);
//   let pokeSearch = pokeData.filter(data => data.weaknesses[0] === condition || data.weaknesses[1] === condition  || data.weaknesses[3] === condition); 
//   for (let i = 0; i< pokeSearch.length; i++){
//     pokeResult.innerHTML +=`<div class="card " style="width: 200px;" data-toggle="modal" data-target="#exampleModalCenter" onclick="showCards(${pokeData[i].id})">
//     <h3 class="card-title">${pokeSearch[i].num} ${pokeSearch[i].name}</h3>
//     <img class="card-img-top" src=${pokeSearch[i].img} alt="Card image cap">
//   <div class="card-body">
//     <p class="card-text">Type: ${pokeSearch[i].type}.</p>
//   </div>
// </div>`
// }
// });


// document.getElementById("slctFilterOrder").addEventListener ("input", ( ) => {
//   pokeResult.innerHTML = "";
//   //Guardar la selección del usuario
//   let ordenValue = document.getElementById("slctFilterOrder").value;
//   console.log(ordenValue);


//Orden de 151-1
//   if(ordenValue === "151-1"){
//   let sortNumDesc = pokeData.sort(function(a,b){
//               if (a.num < b.num) {
//                   return 1;
//              }else{
//              return-1;
//           }
//          });
//           console.log(sortNumDesc);
//  for(let i = 0 ; i < sortNumDesc.length ; i++){
//   pokeResult.innerHTML +=
//   `<div class="card " style="width: 200px;" data-toggle="modal" data-target="#exampleModalCenter" onclick="showCards(${pokeData[i].id})">
//  <h3 class="card-title">${sortNumDesc[i].num} ${sortNumDesc[i].name}</h3>
//   <img class="card-img-top" src=${sortNumDesc[i].img} alt="Card image cap">
// <div class="card-body">
//  <p class="card-text">Type: ${sortNumDesc[i].type}.</p>
// </div>
// </div>`
// }
//   }
//Orden de 1-151
//    if(ordenValue === "1-151"){
//       let sortNumAsc = pokeData.sort(function(a,b){
//                   if (a.num > b.num) {
//                       return 1;
//                  }else{
//                  return-1;
//               }
//              });
//               console.log(sortNumAsc);
//      for(let i = 0 ; i < sortNumAsc.length ; i++){
//       pokeResult.innerHTML +=
//       `<div class="card " style="width: 200px;" data-toggle="modal" data-target="#exampleModalCenter" onclick="showCards(${pokeData[i].id})">
//      <h3 class="card-title">${sortNumAsc[i].num} ${sortNumAsc[i].name}</h3>
//       <img class="card-img-top" src=${sortNumAsc[i].img} alt="Card image cap">
//     <div class="card-body">
//      <p class="card-text">Type: ${sortNumAsc[i].type}.</p>
//     </div>
//     </div>`
//     }
//       }
//Orden de A-Z
// if (ordenValue === "A-Z"){
//   let sortNameAz  = pokeData.sort(function(a,b){
//               if (a.name > b.name) {
//                   return 1;
//              }else{
//              return-1;
//           }
//          });
//           console.log(sortNameAz);
//  for(let i = 0 ; i < sortNameAz.length ; i++){
//   pokeResult.innerHTML +=
//   `<div class="card " style="width: 200px;" data-toggle="modal" data-target="#exampleModalCenter" onclick="showCards(${pokeData[i].id})">
//  <h3 class="card-title">${sortNameAz[i].num} ${sortNameAz[i].name}</h3>
//   <img class="card-img-top" src=${sortNameAz[i].img} alt="Card image cap">
// <div class="card-body">
//  <p class="card-text">Type: ${sortNameAz[i].type}.</p>
// </div>
// </div>`
// }
//   }
//Orden de Z-A
// if(ordenValue === "Z-A"){
//   let sortNameZa  = pokeData.sort(function(a,b){
//               if (a.name < b.name) {
//                   return 1;
//              }else{
//              return-1;
//           }
//          });
//           console.log(sortNameZa);
//  for(let i = 0 ; i < sortNameZa.length ; i++){
//   pokeResult.innerHTML +=
//   `<div class="card " style="width: 200px;" data-toggle="modal" data-target="#exampleModalCenter" onclick="showCards(${pokeData[i].id})">
//  <h3 class="card-title">${sortNameZa[i].num} ${sortNameZa[i].name}</h3>
//   <img class="card-img-top" src=${sortNameZa[i].img} alt="Card image cap">
// <div class="card-body">
//  <p class="card-text">Type: ${sortNameZa[i].type}.</p>
// </div>
// </div>`
// }
//   }
// })

//Función que pasa los datos de los pokemones al modal
const showCards = (id)=>{
  let poke = window.pokemonData.pokeFind(pokeData, id); 
  document.getElementById("modal_title").innerHTML=poke[0].name;
  document.getElementById("modal_img").src = poke[0].img;
  document.getElementById("modal_num").innerHTML="Number: "+ poke[0].num;
  document.getElementById("modal_type").innerHTML ="Types: "+ poke[0].type;
  document.getElementById("modal_height").innerHTML="Height: " + poke[0].height;
  document.getElementById("modal_weight").innerHTML="Weight: " + poke[0].weight;
  document.getElementById("modal_weaknesses").innerHTML= "Weaknesses: " + poke[0].weaknesses;

};
window.showCards=showCards;


window.pokemonData = {
  
    pokeFind: (data, pokeData) => {
      const result = data.filter( pokemon => pokemon.id === pokeData);
      return result;
    }
    ,
    };

