import React from 'react';


const oneNews = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.news.title}</h1>
      
      <h3>{props.news.subtitle}</h3>
      <p>{props.news.date}</p>
      <img src ={props.news.images}></img>
      <p>{props.news.body}</p>
    </>
  );
}




export default oneNews