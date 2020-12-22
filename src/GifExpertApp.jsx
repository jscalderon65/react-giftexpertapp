import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";
/* rafc */
const GifExpertApp = () => {
  const [categories, setCategories] = useState([
  /*  "Alice in borderland",
       "Berserk",
    "Vinland saga",
    "Beastars", */
  ]);
  return (
    <div>
     <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <br/>
      {categories.map((item) => (
        <GifGrid key={item} category={item} />
      ))}
    </div>
  );
};
export default GifExpertApp;
