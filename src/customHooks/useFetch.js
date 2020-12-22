import {useState,useEffect} from 'react'
const useFetch = (category)=>{
    const [state, setState] = useState({
        data:[],
        loading:true
    })
    useEffect(()=>{
        const getGifs = async () => {
            try {
              const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=6&api_key=5mn85BCoPE39kpGLIQwwKcZb17RTp5Pc`;
              const response = await fetch(url);
              const { data } = await response.json();
              const gifs = data.map((img) => {
                return {
                  id: img.id,
                  title: img.title,
                  url: img.images.downsized_medium.url,
                };
              });
              setState({...state,
                data:gifs
            })
            } catch (error) {
              console.log(error);
            }
          };
          getGifs();
    },[category])
    return state; 
}
export {useFetch}