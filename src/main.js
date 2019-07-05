//declarar las variable cons los IDs de los botones datos y pantallas
const btnPokedex = document.getElementById("btnPokedex");
const slctFilWeak = document.getElementById("slctFilterWeaknesses");
const contPokeGallery = document.getElementById("pokeGallery");
// const contPokeList =document.getElementById("pokeList");
const pokeResult =document.getElementById("pokeList");
//criar variable para linkear la con la data Pokemon
const data = POKEMON.pokemon;
let cardGallery; 
let showModal;

//pagina home para pokedex
document.getElementById("btnPokedex").addEventListener ("click", ( ) => {
  //Guardar el nombre del usuario
  document.getElementById("home").style.display = "flex";
  document.getElementById("allPokemons").style.display = "block";
  //Todos los pokemones  
  cardGallery =  data.map(data => `${data.name} ${data.type}`) ; 
  for (let i = 0; i< data.length; i++){
  console.log(cardGallery);
};
})

 //Crear Elementos Galería
 const showGallery = (data) => {
  for (let i = 0; i < data.length; i++){
    cardGallery +=
     `<div class="card " style="width: 200px;" data-toggle="modal" data-target="#exampleModalCenter" onclick="showModal(${data[i].id})">
    <h3 class="card-title">${data[i].num} ${data[i].name}</h3>
     <img class="card-img-top" src=${data[i].img} alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Type: ${data[i].type}.</p>
  </div>
</div>`
  } pokeResult.innerHTML = cardGallery;
  };

//Mostrar cards en orden aleatorio
const radomData = (data)=>{
  return data.sort(() => Math.random() - 0.5)
};
showGallery(radomData(data));

//Filtro por Tipo 
document.getElementById("slctFilterType").addEventListener ("change", ( ) => {
  pokeResult.innerHTML="";
  pokeTypeSelection = document.getElementById("slctFilterType").options.value;
  //Guardar la selección del usuario
  let condition = document.getElementById("slctFilterType").options[document.getElementById("slctFilterType").selectedIndex].value;
  console.log(condition);
  let pokeSearch = data.filter(data => data.type[0] === condition || data.type[1] === condition); 
  for (let i = 0; i< pokeSearch.length; i++){
    pokeResult.innerHTML +=`<div class="card " style="width: 200px;" data-toggle="modal" data-target="#exampleModalCenter" onclick="showModal(${pokeSearch[i].id})">
    <h3 class="card-title">${pokeSearch[i].num} ${pokeSearch[i].name}</h3>
    <img class="card-img-top" src=${pokeSearch[i].img} alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Type: ${pokeSearch[i].type}.</p>
  </div>
</div>`
}
});


//Filtro por Debilidad
document.getElementById("slctFilterWeaknesses").addEventListener ("change", ( ) => {
  pokeResult.innerHTML="";
  pokeTypeSelection = document.getElementById("slctFilterWeaknesses").options.value;
  //Guardar la selección del usuario
  let condition = document.getElementById("slctFilterWeaknesses").options[document.getElementById("slctFilterWeaknesses").selectedIndex].value;
  console.log(condition);
  let pokeSearch = data.filter(data => data.weaknesses[0] === condition || data.weaknesses[1] === condition  || data.weaknesses[3] === condition); 
  for (let i = 0; i< pokeSearch.length; i++){
    pokeResult.innerHTML +=`<div class="card " style="width: 200px;" data-toggle="modal" data-target="#exampleModalCenter" onclick="showModal(${data[i].id})">
    <h3 class="card-title">${pokeSearch[i].num} ${pokeSearch[i].name}</h3>
    <img class="card-img-top" src=${pokeSearch[i].img} alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Type: ${pokeSearch[i].type}.</p>
  </div>
</div>`
}
});


document.getElementById("slctFilterOrder").addEventListener ("input", ( ) => {
  pokeResult.innerHTML = "";
  //Guardar la selección del usuario
  let ordenValue = document.getElementById("slctFilterOrder").value;
  console.log(ordenValue);


//Orden de 151-1
  if(ordenValue === "151-1"){
  let sortNumDesc = data.sort(function(a,b){
              if (a.num < b.num) {
                  return 1;
             }else{
             return-1;
          }
         });
          console.log(sortNumDesc);
 for(let i = 0 ; i < sortNumDesc.length ; i++){
  pokeResult.innerHTML +=
  `<div class="card " style="width: 200px;" data-toggle="modal" data-target="#exampleModalCenter" onclick="showModal(${data[i].id})">
 <h3 class="card-title">${sortNumDesc[i].num} ${sortNumDesc[i].name}</h3>
  <img class="card-img-top" src=${sortNumDesc[i].img} alt="Card image cap">
<div class="card-body">
 <p class="card-text">Type: ${sortNumDesc[i].type}.</p>
</div>
</div>`
}
  }
//Orden de 1-151
   if(ordenValue === "1-151"){
      let sortNumAsc = data.sort(function(a,b){
                  if (a.num > b.num) {
                      return 1;
                 }else{
                 return-1;
              }
             });
              console.log(sortNumAsc);
     for(let i = 0 ; i < sortNumAsc.length ; i++){
      pokeResult.innerHTML +=
      `<div class="card " style="width: 200px;" data-toggle="modal" data-target="#exampleModalCenter" onclick="showModal(${data[i].id})">
     <h3 class="card-title">${sortNumAsc[i].num} ${sortNumAsc[i].name}</h3>
      <img class="card-img-top" src=${sortNumAsc[i].img} alt="Card image cap">
    <div class="card-body">
     <p class="card-text">Type: ${sortNumAsc[i].type}.</p>
    </div>
    </div>`
    }
      }
//Orden de A-Z
if (ordenValue === "A-Z"){
  let sortNameAz  = data.sort(function(a,b){
              if (a.name > b.name) {
                  return 1;
             }else{
             return-1;
          }
         });
          console.log(sortNameAz);
 for(let i = 0 ; i < sortNameAz.length ; i++){
  pokeResult.innerHTML +=
  `<div class="card " style="width: 200px;" data-toggle="modal" data-target="#exampleModalCenter" onclick="showModal(${data[i].id})">
 <h3 class="card-title">${sortNameAz[i].num} ${sortNameAz[i].name}</h3>
  <img class="card-img-top" src=${sortNameAz[i].img} alt="Card image cap">
<div class="card-body">
 <p class="card-text">Type: ${sortNameAz[i].type}.</p>
</div>
</div>`
}
  }
//Orden de Z-A
if(ordenValue === "Z-A"){
  let sortNameZa  = data.sort(function(a,b){
              if (a.name < b.name) {
                  return 1;
             }else{
             return-1;
          }
         });
          console.log(sortNameZa);
 for(let i = 0 ; i < sortNameZa.length ; i++){
  pokeResult.innerHTML +=
  `<div class="card " style="width: 200px;" data-toggle="modal" data-target="#exampleModalCenter" onclick="showModal(${data[i].id})">
 <h3 class="card-title">${sortNameZa[i].num} ${sortNameZa[i].name}</h3>
  <img class="card-img-top" src=${sortNameZa[i].img} alt="Card image cap">
<div class="card-body">
 <p class="card-text">Type: ${sortNameZa[i].type}.</p>
</div>
</div>`
}
  }
})


