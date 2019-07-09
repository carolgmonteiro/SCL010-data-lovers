window.dataPokemon = {
  filterData: (data, condition) => {
    for (let i = 0; i < data.length; i++){
      if((data[i].type).includes(condition)){
        return data.filter(element => element.type[0] === condition || element.type[1] === condition);
      }
    }
  }
};
