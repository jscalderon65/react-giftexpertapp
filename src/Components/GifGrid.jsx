import React,{useState} from "react";
import {useFetch} from '../customHooks/useFetch'
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
const [loadingState, setLoadingState]=useState(<p>Cargando..</p>)
  const {data}=useFetch(category);
  setTimeout(()=>{
    setLoadingState(<p>Resultados encontrados {data.length}</p>)
  },2000)
  return (
    <div style={{marginBottom:"10px"}} className="animate__animated  animate__fadeInLeft">
      <h3>Category: <b>{category}</b></h3>
      <hr/>
      <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
      {data.length > 0
        ? data.map((item) => (
            <GifGridItem  key={item.url} img={item} {...item}/>
          ))
        : loadingState
        }
      </div>
    </div>
  );
};
export default GifGrid;
