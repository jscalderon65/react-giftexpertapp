import React from "react";
import PropTypes from "prop-types";
const GifGridItem = ({img}) => {
  const { url, title } = img;
  return (
      <div  style={{ width:"200px",
      height:"auto"}}>
          <img 
            width="200px"
            height="200px"
            src={url}
            alt={title}
            />
            <hr/>
            <p>{title}</p>
      </div>
  );
};
export default GifGridItem;
GifGridItem.propTypes ={
  img: PropTypes.object.isRequired,
}
