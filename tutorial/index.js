import React from 'react';
import ReactDom from 'react-dom';

//css
import './index.css';

import { books } from './books'
import Book from './book'
import {greeting} from './testing/testing'


//JSX RULES
//return single element
// div / section / article or Fragment 
// use camelCase for html attribute 
// className instead of class
// close every element 
// formatting 

//setup vars

//my List



//navbar

function navBar() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Categorias</li>
        <li>Contato</li>
      </ul>
    </nav>
  )
}

//complete book
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
     })}
    </section>
  );
}

// each book 


ReactDom.render(<BookList />, document.getElementById('root'));

//{here goes javascript{here goes css}}