import '../assets/styles/TodoSearch.css';
import React from 'react'

function TodoSearch({
  searchValue,
  setSearchValue,
}
  
){
  
  return (
    <input placeholder="Que Necesitas?"
      className="TodoSearch"
      value={searchValue}
      onChange={(event)=> {
        setSearchValue(event.target.value);
      }}
    />
  );  
}
export { TodoSearch };