import React, { useState } from "react";
import PropTypes from "prop-types";
const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <form onSubmit={(e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 2) {
            setCategories(item=>[inputValue,...item]);
            setInputValue("")
        }
    }}>
      <hr />
      <input
        placeholder="Ingresa una categoría"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="form-control"
      />
    </form>
  );
};
AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired
}
export default AddCategory;
