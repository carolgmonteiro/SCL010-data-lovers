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
let pokeCard = "";
let pokeId = "";

//IMPRIMIR LOS CARDS DINAMICOS EN HTML
const showPokemon = (data) => {
  for (let i = 0; i< data.length; i++){
  //crear variable para crear los DIVS dinamicos
   let pokeCard = document.createElement("div");
   pokeInfoCard.id = data[i].id;
   pokeInfoCard.className = "pokeList";
  //  console.log(pokeCard);
  //crear variable para crear contenedores de texto
  let pokeId = document.createElement("h3");
  pokeId.textContent = data[i].id;
  // console.log(pokeId);
  //crear variable para crear contenedores de texto
  let pokeName = document.createElement("h3");
  pokeName.textContent = data[i].name;
  //crear variable para crear contenedores de texto
  let pokeType = document.createElement("h3");
  pokeType.textContent = data[i].type;
  // console.log(pokeType);
  //crear variable para crear imagenes dinamicas
   let pokeImage = document.createElement("img");
   pokeImage.src = data[i].img;
  //  console.log(pokeImage);
  //generar contenedores
  pokeCard.appendChild(pokeId);
  pokeCard.appendChild(pokeName);
  pokeCard.appendChild(pokeType);
  pokeCard.appendChild(pokeImage);

  //para imprimir en HTML
  document.getElementById("pokeList").appendChild(pokeCard).innerHTML;
  }
  };
  
//pagina home para pokedex
document.getElementById("btnPokedex").addEventListener ("click", ( ) => {
  //Guardar el nombre del usuario
  document.getElementById("home").style.display = "none";
  document.getElementById("allPokemons").style.display = "block";
  showPokemon(data);
  })
//Filtro por Tipo (teste)
document.getElementById("slctFilterType").addEventListener ("change", ( ) => {
  pokeInfoCard = "";
  name = "";
  number = "";
  type = "";
  pokeTypeSelection = document.getElementById("slctFilterType").options.value;
  //Guardar la selección del usuario
  let condition = document.getElementById("slctFilterType").options[document.getElementById("slctFilterType").selectedIndex].value;
  console.log(condition);
  let pokeSearch = data.filter(data => data.type[0] === condition || data.type[1] === condition); 
   for (let i = 0; i< pokeSearch.length; i++){
     //crear variable para crear los DIVS dinamicos
    name += (pokeSearch[i].name);
    number += (pokeSearch[i].id);
    type += (pokeSearch[i].type);
  }
if(pokeTypeSelection){
  return pokeSearch;
} else { 
  // pokeName += data.filter(data => data.name === condition || data.id === parseInt(condition));
}
// contPokeList.innerHTML = `${number} ${name} ${type}`;
  //para imprimir en HTML
  
// showPokemon(pokeSearch);
// document.getElementById("pokeList").appendChild(pokeCard).innerHTML = pokeSearch.name;
//Mostrar nuevo texto en Index.html 
// document.getElementById("pokeList").value = window.data.filterPokemon(data, condition);
});


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

