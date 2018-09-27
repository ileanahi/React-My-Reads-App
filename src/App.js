import React from 'react'
import { Route } from 'react-router-dom';

import SearchPage from './SearchPage';
import MainPage from './MainPage';

import * as BooksAPI from './BooksAPI'
import './App.css'

//This app was  written with support from the EMEA Study Jam on 7/21
class BooksApp extends React.Component {
  state = {
    // Array of books
    books: []
  }

  moveShelf = (book, shelf) => {
    // Update book to a different shelf
    BooksAPI.update(book, shelf);
    // To update state and automatically refresh
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
}

  componentDidMount() {
    // Make list of books after MainPage component is created
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">
      <Route exact path="/" render={() => (
       /* Pass books and moveShelf function as props to mainpage */
        <MainPage
        books={this.state.books}
        moveShelf={this.moveShelf} />
        )} />

      <Route path="/search" render={() => (
        /* Pass moveShelf function as props */
        <SearchPage
        moveShelf={this.moveShelf}
        books={this.state.books} />
        )} />

      </div>
    );
  }
}

export default BooksApp
