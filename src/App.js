import React from 'react'

import SearchPage from './SearchPage';
import MainPage from './MainPage';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getall().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
      <MainPage />
      </div>
    );
  }
}

export default BooksApp
