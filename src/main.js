//declarar las variable cons los IDs de los botones datos y pantallas
const btnPokedex = document.getElementById("btnPokedex");
const slctFilWeak = document.getElementById("slctFilterWeaknesses");
const contPokeGallery = document.getElementById("pokeGallery");
const contPokeList =document.getElementById("pokeList");
//criar variable para linkear la con la data Pokemon
const data = POKEMON.pokemon;
//variable para imprimir el card pokemon
let pokeInfoCard = "";
let condition = "";
// let nameCoachHome = document.getElementById("nameCoach");

//pagina welcome para la pagina home con condicional
// document.getElementById("btnStart").addEventListener ("click", ( ) => {
//   //Guardar el nombre del usuario
// let userName = document.getElementById("nameStart").value;
// console.log(userName);
//   // Mejorar código de validación nombre
//   if (userName.length > 0)
//     {
//       document.getElementById("welcome").style.display = "none";
//       document.getElementById("home").style.display = "block";
//       nameCoachHome.innerHTML = "¡Hola " + userName + "!";
//     } else
//     {
//       document.getElementById("required").innerHTML = "¡Sin nombre no empieza!";
//     }
//   })

//IMPRIMIR LOS CARDS DINAMICOS EN HTML
// const showPokemon = (data) => {
  for (let i = 0; i< data.length; i++){
  //crear variable para crear los DIVS dinamicos
   let pokeCard = document.createElement("div");
   pokeInfoCard.id = data[i].name;
   pokeInfoCard.className = "pokeList";
   console.log(pokeCard);
  //crear variable para crear imagenes dinamicas
   let pokeImage = document.createElement("img");
   pokeImage.src = data[i].img;
   console.log(pokeImage);
  //crear variable para crear contenedores de texto
  let pokeId = document.createElement("p");
  pokeId.textContent = data[i].id;
  console.log(pokeId);
  //generar contenedores
  pokeCard.appendChild(pokeImage);
  console.log();
  pokeCard.appendChild(pokeId);
  //para imprimir en HTML
  document.getElementById("pokeList").appendChild(pokeCard).innerHTML;
  }
  // };
  
//pagina home para pokedex
document.getElementById("btnPokedex").addEventListener ("click", ( ) => {
  //Guardar el nombre del usuario
  document.getElementById("home").style.display = "none";
  document.getElementById("allPokemons").style.display = "block";
  // allPokemons =  data.map(data => `${data.name} ${data.type}`) ; 
  // contPokeList.innerHTML = showPokemon(data);
  })



//Filtro por Tipo (teste)
document.getElementById("slctFilterType").addEventListener ("change", ( ) => {
  pokeInfoCard = "";
  //Guardar la selección del usuario
  let condition = document.getElementById("slctFilterType").options[document.getElementById("slctFilterType").selectedIndex].value;
  console.log(condition);
// if(["Water","Bug","Dragon","Electric","Ghost","Fire","Ice","Fighting","Normal","Grass","Psychic","Rock","Ground","Poison","Flying"].includes(condition)){
//   return data.filter(data => data.type[0] === condition || data.type[1] === condition)
// } else { 
//   return data.filter(data => data.name === condition || data.id === parseInt(condition));
// }
//Mostrar nuevo texto en Index.html 
document.getElementById("pokeList").value = window.data.filterPokemon(data, condition);
});


//Select de tipos
// containerSelect.addEventListener("change", () => {
//   cardHTML = "";
//   search = containerSelect.value;
//   showElements(window.pokemonData.filterData(allPokemon, search));
// }); 
// filterData: (data,condition) => {
//   if (["Water","Bug","Dragon","Electric","Ghost","Fire","Ice","Fighting","Normal","Grass","Psychic","Rock","Ground","Poison","Flying"].includes(condition)){
//     return data.filter((a)=> a.type[0]===condition || a.type[1]===condition)
//   } else {
//     return data.filter((a) => a.name === condition || a.id === parseInt(condition));
//   }
// } 
// ,

// //Filtro por Tipo
// document.getElementById("slctFilterType").addEventListener ("input", ( ) => {
//   //para limpiar la pantalla
//   contPokeList.innerHTML = "";
//   //Guardar la selección del usuario
//   let typeElected = document.getElementById("slctFilterType").value;
//   console.log(typeElected);
  
// if(typeElected === "Fuego"){
//   let pokeFire = data.filter(data => data.type == "Fire");
//   console.log(pokeFire);
//   for(let i = 0 ; i < pokeFire.length ; i++){
//     name += pokeFire[i].name;
//     number += pokeFire[i].num;
//     type += pokeFire[i].type;
//     weak += pokeFire[i].weaknesses;
//   }
  
//   contPokeList.innerHTML = `${name}`;
// }

// })

// //Filtro por debilidad
// document.getElementById("slctFilterWeaknesses").addEventListener ("input", ( ) => {
//    //para limpiar la pantalla
//    contPokeList.innerHTML = "";
//   let pokeWeakFire = data.filter(data => data.type == "Fire");
//   console.log(pokeWeakFire);
//   for(let i = 0 ; i < pokeWeakFire.length ; i++){
//     name += pokeWeakFire[i].name;
//     number += pokeWeakFire[i].num;
//     type += pokeWeakFire[i].type;
//     weak += pokeWeakFire[i].weaknesses;
//   }
  
//   contPokeList.innerHTML = `${number} ${name} ${type} ${weak}`;

//   })

// //Filtro por horario
// document.getElementById("slctFilterTime").addEventListener ("input", ( ) => {

// })


//ORDENAR CRECENTE Y DECRESCENTE
document.getElementById("slctFilterOrder").addEventListener ("input", ( ) => {
   //para limpiar la pantalla
   contPokeList.innerHTML = "";
  //Guarda el valor elejido
  let orderElected = document.getElementById("slctFilterOrder").value;
  console.log(orderElected);
  let result = "";
  
    if(orderElected === "Z-A"){
    result = data.sort((a,b) => b.name.localeCompare(a.name));
    for(let i = 0 ; i < result.length ; i++){
      name += result[i].name;
    } 
  }else if(orderElected === "A-Z"){
    result = data.sort((a,b) => a.name.localeCompare(b.name));
    for(let i = 0 ; i < result.length ; i++){
      name += result[i].name;
    } 
  }else if(orderElected === "1-151"){
      result = data.sort((a,b) => a.id.localeCompare(b.id));
      for(let i = 0 ; i < result.length ; i++){
        numberId += result[i].id;
  }
}
    console.log(result);
    contPokeList.innerHTML = `${name}`;
    //else if (orderElected === "A-Z"){
    //   result = data.sort((a,b) => a.name.localeCompare(b.name));
    //   console.log(result);
    // }
})


  //Para cambiar la orden 
  //let result = data.sort((a,b) => a[sortBy].localeCompare(b[sortBy]));

  //Ordena de 151 a 1
// const sortNumDesc = data.sort(function(a,b){
//   if (orderElected === "151-1" && a.num < b.num) {
//       return 1;
//   }else if (orderElected === "1-151" && a.num > b.num){
//     return 1;
//   }else if (orderElected === "Z-A" && a.name < b.name){
//     return 1;
//   }else if (orderElected === "A-Z" && a.name > b.name){
//     return 1;
//   }else{
//   return-1;
// }
// });
// console.log(sortNumDesc);
// //Ordena de 1 a 151
// const sortNumAsc = data.sort(function(a,b){
//   if (orderElected === "1-151" && a.num > b.num) {
//       return 1;
//   }else{
//   return-1;
// }
// });
// console.log(sortNumAsc);
// //Ordena de Z a la A
// const sortNameZa = data.sort(function(a,b){
//   if (orderElected === "Z-A" && a.name < b.name) {
//       return 1;
//   }else{
//   return-1;
// }
// });
// console.log(sortNameZa);
// //Ordena de A a la Z
// const sortNameAz = data.sort(function(a,b){
//   if (orderElected === "A-Z" && a.name > b.name) {
//       return 1;
//   }else{
//   return-1;
// }
// });
// console.log(sortNameZa);


// q1AValue = formQ1A.q1.value;
// console.log(q1AValue);

// // compare movie value (a,b,c,d) with right answer to add points
// if (q1AValue == "a")
// {
//   // add 1 point and display Q2A
//   scoreA += 25;
//   console.log("PuntosTriviaA:" + scoreA);
//   q1AValue += " Respuesta correcta";
// }


  // imprimir en HTML contPokeGallery.innerHTML = `<h2>${number}  ${name}</h2>`;
    // document.getElementById("pokeGallery").innerHTML = ` <li>${number}</li>  <li>${name}</li>`;


    // console.log(datosPokemon[i]);
    // console.log(data[i].name);
    // console.log(data[i].number);


    // function renderQuestion(){
    //     let q = questions[runningQuestion];
    
    //     question.innerHTML = "<p>"+ q.question +"</p>";
    //     qImg.innerHTML = "<img src="+ q.imgSrc +">";
    //     choiceA.innerHTML = q.choiceA;
    //     choiceB.innerHTML = q.choiceB;
    //     choiceC.innerHTML = q.choiceC;
    // }

    



//renderizar la pagina home
// function renderHome(){
//     // let q = questions[runningQuestion];
    
//     // question.innerHTML = "<p>"+ q.question +"</p>";
//     // qImg.innerHTML = "<img src="+ q.imgSrc +">";
//     // choiceA.innerHTML = q.choiceA;
//     // choiceB.innerHTML = q.choiceB;
//     // choiceC.innerHTML = q.choiceC;
// }

//renderizar la pagina home
// function renderHome(){
//     document.getElementById("nameCoach").innerHTML = "<h1>Hola etrenador@ (nombre)!</h1>";
//     document.getElementById("presentation").innerHTML = "<h3>Presentacion corta sobre la aplicacion. Hablar que puedes encontrar acá</h3>";
// }


// let name = "";
// let number = "";
// let type = [];


//test para imprimir data
// const number = "001";
// const name = "Bulbasaur";
//
// let imagen = new Image();
// imagen.onload = imagenCargada;
// imagen.src = "http://www.serebii.net/pokemongo/pokemon/001.png";


//para mostrar el dato elejido en la pantalla

// document.getElementById("btnTest").addEventListener ("click", ( ) => {
// imprimir el resultado teste

// let name = "";
// let number = "";
// recorrer data.js
// for (let i=0 ; i < data.length ; i++) {
//     name += data[i].name;
//     number += data[i].num;
// contPokeGallery.innerHTML = `<h2>${number}  ${name}</h2>`;
// }
// return name;
// imprimir el resultado
// contPokeGallery.innerHTML = name; }); 