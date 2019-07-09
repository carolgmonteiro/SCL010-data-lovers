window.dataPokemon = {
//para filtrar
  filterData: (data, condition) => {
    for (let i = 0; i < data.length; i++){
      //filtrar por tipo
      if((data[i].type).includes(condition)){
        return data.filter(element => element.type[0] === condition || element.type[1] === condition);
      //filtrar por debilidad
      } else if ((data[i].weaknesses).includes(condition)){
        return data.filter(element => element.weaknesses[0] === condition || element.weaknesses[1] === condition || element.weaknesses[2] === condition || element.weaknesses[3] === condition);  
      }
    }
  },


};
