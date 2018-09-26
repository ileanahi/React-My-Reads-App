import React, { Component } from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {

    state = {
        query: '',
        searchedBooks: []
    }

    // Sets state to the query and updates the list of searched books when the query is input
    updateQuery = (query) => {
        this.setState({
            query: query
        })
        this.updateSearchedBooks(query);
    }

    // Updates list of searched books, if no query, display nothing
    updateSearchedBooks = (query) => {
        if (query) {
            BooksAPI.search(query).then((searchedBooks) => {
            this.setState({ searchedBooks: searchedBooks })
            })
        } else {
            this.setState({ searchedBooks: [] });
        }
    }

    render () {
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder="Search by title or author"
                    value={this.state.query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                { /* Creates an li of books based on list of searched books  */}
                {this.state.searchedBooks.map(searchedBook => (
                    <li key={searchedBook.id}>
                    <Book
                    book={searchedBook}
                    /></li>
                ))}
              </ol>
            </div>
          </div>
        );
    }
}

export default SearchPage;