import React from 'react'

import SearchPage from './SearchPage';
import MainPage from './MainPage';

import * as BooksAPI from './BooksAPI'
import './App.css'

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
      {/* Pass books and moveShelf function as props to mainpage */}
      {/* <MainPage books={this.state.books}
      moveShelf={this.moveShelf} /> */}
      <SearchPage />
      </div>
    );
  }
}

export default BooksApp
