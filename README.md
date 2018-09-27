# MyReads Project

This is a React Web Application for the Udacity Front End Nanodegree. A static web page was provided and I refactored it into a React Web Application.

## How to Use this Web Application

Download or clone the repository. Run `npm install` to install dependencies and launch the `index.html` file using `npm start`.

With this application, you can search for terms on the search page and add books to a 'shelf'. The shelves are '**Currently Reading**', '**Want to Read**', and '**Read**'. Books that are not assigned to a shelf will be shown to have a shelf of **None**.

The application tracks which books are on which shelf by using states and prop types. The states are books, searched books, shelves, and a moveShelf function to change the shelves the books are on. These are passed to the children elements as props.

## Dependencies

This project uses `React.js`, `React Router DOM`, the `Create React App`, the Google Font `Roboto`,  and a `BooksAPI` provided by Udacity.