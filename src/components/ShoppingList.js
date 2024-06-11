import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItems, setSearchedItems] = useState('')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    const charSearch = searchedItems.length

    if(searchedItems !== ''){
      if(item.name.split(' ').length === 1){
        return searchedItems.slice(0, charSearch) === item.name.slice(0, charSearch)
      } else {
        return searchedItems.slice(0, charSearch) === item.name.split(' ')[1].slice(0, charSearch)
      }
    }

    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;    
  })

  const handleSearchChange = (e) => {
    setSearchedItems(e.target.value)
  }
  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}  />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={searchedItems} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
