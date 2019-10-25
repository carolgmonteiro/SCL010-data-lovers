//Buscar la data en la internet
fetch(
  "https://raw.githubusercontent.com/carolgmonteiro/SCL010-data-lovers/master/src/data/pokemon/pokemon.json"
)
  .then(response => response.json())
  .then(data => {
    //criar variable para linkear la con la data Pokemon en JS
    //const pokeData = window.POKEMON.pokemon;
    //criar variable para linkear la con la data Pokemon en JASON
    const pokeData = data.pokemon;
    // variable para la busqueda de pokemon o condicion
    let searchPokemon;
    let orderValue;
    //variable para impression de los pokemones
    let cardGallery = "";
    const pokeResult = document.getElementById("pokeList");
    const pokeStatsResult = document.getElementById("pokeStats");
    //Imprimir Elementos de la Galería Pokemones
    const showGallery = data => {
      for (let i = 0; i < data.length; i++) {
        cardGallery +=
          //onclick="showModal(${data[i].id})"
          `<div class="card" style="width: 210px;" data-toggle="modal">
     <h3 class="card-title">${data[i].num} ${data[i].name}</h3>
     <img class="card-img-top" src=${data[i].img} alt="Card image cap">
     <div class="card-body">
     <p class="card-text">Tipo: ${data[i].type}</p>
     <p class="card-text">Debilidad: ${data[i].weaknesses}</p>
     <p class="card-text">Freq. horária: ${data[i].spawn_time}hrs</p>
     </div>
     </div>`;
      }
      pokeResult.innerHTML = cardGallery;
    };
    //Mostrar cards en orden aleatorio
    const randomData = data => {
      return data.sort(() => Math.random() - 0.5);
    };
    showGallery(randomData(pokeData));
    //Filtro por Tipo
    document.getElementById("slctFilterType").addEventListener("change", () => {
      cardGallery = "";
      pokeStatsResult.innerHTML = "";
      searchPokemon = document.getElementById("slctFilterType").options[
        document.getElementById("slctFilterType").selectedIndex
      ].value;
      //Imprimir la estadistica por tipo
      pokeStatsResult.innerHTML = window.dataPokemon.computeStats(
        pokeData,
        searchPokemon
      );
      //Imprimir el resultado por tipo
      showGallery(window.dataPokemon.filterData(pokeData, searchPokemon));
    });
    //Filtro por Debilidad
    document
      .getElementById("slctFilterWeaknesses")
      .addEventListener("change", () => {
        cardGallery = "";
        pokeStatsResult.innerHTML = "";
        //Guardar la selección del usuario
        searchPokemon = document.getElementById("slctFilterWeaknesses").options[
          document.getElementById("slctFilterWeaknesses").selectedIndex
        ].value;
        //Imprimir el resultado por debilidad
        showGallery(window.dataPokemon.filterData(pokeData, searchPokemon));
      });
    //FILTRO ORDEN
    document.getElementById("slctFilterOrder").addEventListener("input", () => {
      cardGallery = "";
      pokeStatsResult.innerHTML = "";
      //Guardar la selección del usuario
      orderValue = document.getElementById("slctFilterOrder").value;
      if (orderValue == "AZ") {
        showGallery(
          window.dataPokemon.sortData(pokeData, "name", "ascendente")
        );
      } else if (orderValue == "ZA") {
        showGallery(
          window.dataPokemon.sortData(pokeData, "name", "descendente")
        );
      } else if (orderValue == "1-151") {
        showGallery(
          window.dataPokemon.sortData(pokeData, "number", "ascendente")
        );
      } else if (orderValue == "151-1") {
        showGallery(
          window.dataPokemon.sortData(pokeData, "number", "descendente")
        );
      }
    });
    //Home para PoketGo
    document.getElementById("btnPoketGo").addEventListener("click", () => {
      cardGallery = "";
      pokeStatsResult.innerHTML = "";
      document.getElementById("home").style.display = "none";
      document.getElementById("headerInfo").style.display = "none";
      document.getElementById("allPokemons").style.display = "none";
      document.getElementById("poketGo").style.display = "flex";
    });
    //PoketGo Home
    document.getElementById("btnBackHome").addEventListener("click", () => {
      cardGallery = "";
      pokeStatsResult.innerHTML = "";
      document.getElementById("home").style.display = "flex";
      document.getElementById("headerInfo").style.display = "flex";
      document.getElementById("allPokemons").style.display = "flex";
      document.getElementById("poketGo").style.display = "none";
    });
    //Home navBar para PoketDex
    document.getElementById("navPoketDex").addEventListener("click", () => {
      cardGallery = "";
      pokeStatsResult.innerHTML = "";
      document.getElementById("home").style.display = "none";
      document.getElementById("headerInfo").style.display = "none";
      document.getElementById("allPokemons").style.display = "block";
      document.getElementById("poketGo").style.display = "none";
    });
    //Home para PoketDex
    document.getElementById("btnPokedex").addEventListener("click", () => {
      cardGallery = "";
      pokeStatsResult.innerHTML = "";
      document.getElementById("home").style.display = "none";
      document.getElementById("headerInfo").style.display = "none";
      document.getElementById("allPokemons").style.display = "block";
      document.getElementById("poketGo").style.display = "none";
    });
    //PoketGo Home (down)
    document.getElementById("btnBackHome1").addEventListener("click", () => {
      cardGallery = "";
      pokeStatsResult.innerHTML = "";
      document.getElementById("home").style.display = "flex";
      document.getElementById("headerInfo").style.display = "flex";
      document.getElementById("allPokemons").style.display = "flex";
      document.getElementById("poketGo").style.display = "none";
    });
  });
