import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    category: ''
  })

  const handleChange = (e) => {
    const key = e.target.name
    setFormData({
      ...formData,
      id: uuid(),
      [key]: e.target.value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if(formData.category === ''){
      return alert('Please select a category')
    }
    onItemFormSubmit(formData)
  }

  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleChange} >
          <option value="">Select...</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
