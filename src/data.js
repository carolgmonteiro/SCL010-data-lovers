
window.data = {
  filterPokemon: (data, condition) => {
  if(["Water","Bug","Dragon","Electric","Ghost","Fire","Ice","Fighting","Normal","Grass","Psychic","Rock","Ground","Poison","Flying"].includes(condition)){
    return data.filter(data => data.type[0] === condition || data.type[1] === condition)
  } else { 
    return data.filter(data => data.name === condition || data.id === parseInt(condition));
  }
}
}
