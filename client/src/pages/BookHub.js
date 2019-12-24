import React, { Component } from 'react'
import API from '../utils/API'
import Search from '../components/Search'
import Title from '../components/Title'
import SaveButton from '../components/SaveButton'
import './style.css'
//import { Query } from 'mongoose';

class BookHub extends Component {

    state = {
        books: [],
        searchQuery: ''
    }

    // saveBook(id)
    saveBook = (id) => {
        const book = { ...this.state };
        this.props.saveBook(book);
        console.log(book);
    }

    // googleSearch()
    googleSearch = (query) => {
        if (query) {
            API.searchGoogleBooks(query)
                .then((res) => {
                    const books = res.data.items.map((item) => {
                        let obj = Object.assign({}, item);
                        obj.isSaved = false;
                        return obj;
                    })
                    console.log(books);
                    this.setState({ books });
                })
                .catch(err => console.log(err));
        }
    }

    // saveBook(book)
    saveBook = (book) => {
        console.log("user pressed SAVE\n", book);
        const bookData = {
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.smallThumbnail,
            link: book.volumeInfo.infoLink,
            googleID: book.id
        }
        API.saveFavorite(bookData)
            .catch(err => console.log(err));
    }

    //handleInputChange()
    // handleInputchange = (e) => {
    //     this.setState({
    //         searchQuery: e.target.value
    //     });
    // }

    //handleFormSubmit()
    handleSubmit = (e) => {
        e.preventDefault();
        this.googleSearch(this.state.searchQuery)
    }
    handleSearchChange = (event) => {
      this.setState({ search: event.target.value });
      // console.log("Form onSubmit Event data:\n", this.state.search);
    }


    render() {
        return (
            <div className="container">
        <Title />
        <Search handleSubmit={this.handleSubmit} handleSearchChange={this.handleSearchChange} />
        {this.state.books.length ? (
          <div className="row">
            <ul className="list-unstyled">
              {this.state.books.map(book => {
                return (
                  <li 
                    className="media my-4 rounded shadow p-2" 
                    key={book._id}>
                    <img 
                      src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : ""} 
                      className="mr-3" alt="..." />
                    <div className="media-body">
                      <h5 
                        className="mt-0 mb-1">{book.volumeInfo.title} 
                          <span className="font-italic">by {book.volumeInfo.authors.join(", ")}</span>
                      </h5>
                      <p className="overflow-auto description">{book.volumeInfo.description}</p>
                      <a 
                        className="btn btn-primary"  
                        href={book.volumeInfo.infoLink}>View</a> {" "}
                      <SaveButton 
                        key={book._id} 
                        book={book} 
                        savebook={this.saveBook} />

                    </div>
                  </li>
                )
              })}

            </ul>
          </div>
        ) : (
            <div className="text-center">
              <h3>Search List Empty</h3>
              <h4>Please enter a title, subject, or author in the search field.</h4>
            </div>
          )
        }
      </div>
     )
        
    }


}


export default BookHub