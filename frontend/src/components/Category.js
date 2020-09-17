import React from "react";
import '../styles/category.css'

const Category = (props) => {
  return (
    <>
      <li className="col- 5">
        <div id="imgContainer"
        style={{
          backgroundImage: `url(${props.category.picCategory})`}}>
          <p id='textContainer'>
            {props.category.name}
          </p>
        </div>
      </li>
    </>
  );
};

export default Category;
