import React from 'react'

const Book = ({img, title, author}) => {
  //attribute,eventHandler 
  //OnClick, OnMouseOver
  const ClickHandler = () => {
    alert('hello world')
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className='book' onMouseOver={() => {
      console.log(author);
    }}>
      <img src={img} alt="" />
      <h1 onClick={()=> console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' className='buy-btn' onClick={ClickHandler}>Buy now!</button>
      {/* <button type='button' onClick={() => complexExample(author)}>more complex example</button> */}
    </article>
  );
};

export default Book