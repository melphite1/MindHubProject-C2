import React from "react";
import "../styles/styles.css";
import { NavLink } from "react-router-dom";

const Category = (props) => {
  return (
    <> 
      <li>
          <div
            id="imgContainer"
            style={{
              backgroundImage: `url(${props.category.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "40vh",
              width: "45vw",
              boxShadow: '10px 10px 10px #252322',
              opacity:'80%',
            }}
          >
            <p
              style={{
                fontSize: "4vh",
                fontWeight: "bold",
                color: "whitesmoke",
                backgroundColor: "#32a08859",
                textShadow: "2px 2px 2px black",
                padding: "1vh 1vw",
                marginBottom:"2vh"
              }}
            >
            {props.category.category}, {props.category.country}
            </p>
          </div>
      </li>
    </>
  );
};

export default Category;
