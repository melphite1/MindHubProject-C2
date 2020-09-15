import React from "react";


const Category = (props) => {
  console.log(props)
  return (
    <> 
      <li>
          <div
            id="imgContainer"
            style={{
              backgroundImage: `url(${props.category.picCategory})`,
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
            {props.name}
            </p>
          </div>
      </li>
    </>
  );
};

export default Category;