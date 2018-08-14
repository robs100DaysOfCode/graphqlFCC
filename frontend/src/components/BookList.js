import React, { Component } from 'react';
import { gql } from 'apollo-boost'; // for amkign graph ql query
import { graphql } from 'react-apollo'; //use gql with react
import '../App.css';

const getBooksQuery = gql`
  {
    books{
      name
      genre
      id
    }
  }
`


class BookList extends Component {
  render() {
    var displayBooks = () => {
      var data = this.props.data;
      if(data.loading){
        return (
          <div>Loading Your Books...</div>
        );
      } else {
        return data.books.map(book => {
            return (
              <div key={book.id}>
              <li>{ book.name }</li>
                  { book.genre}
              </div>
            );
          })
      }
    }
    return (
      <div className="App">
      <h1>Basic BookList React App</h1>
        <ul id="bookList">
        { displayBooks() }
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList); //graphql(queryToBeMade)(ComponentTopasstheDataTo)
//graphql data is tored as props
