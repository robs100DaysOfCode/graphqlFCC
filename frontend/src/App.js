import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'; //inject any data from graphql to react

import BookList from './components/BookList'
import './App.css';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App">
      <BookList />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
