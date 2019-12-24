import React, { Component } from 'react'
import Search from '../components/Search'
import BookInfo from '../components/BookInfo'
import API from '../utils/API'

class Home extends Component {

    // STATE >> booksArray, SearchQuery(as a string)
    state = {
        booksArray: [],
        inputQuery: ''
    }

    
    
    
    handleInputChange = (e) => {
       // console.log(e.target.value);
        const txtIN = e.target.value
        this.setState({
            inputQuery: txtIN
        })
        
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(`_____WORKS_____\n\n${this.state.inputQuery}`)
        const text = this.state.inputQuery;
        // AXIOS call to API 'method' GET "byQuery"
        API.searchGoogleBooks(text)
            .then(res => this.setState({
                booksArray: res.data.items
            }))
            
    }


    render() {
        //console.log(this.state.inputQuery)
       
        console.log(this.state.searchTest)
        console.log(this.state.booksArray)
        const Books = this.state.booksArray;
        console.log(Books)
        const Content = Books.map((book,i) => {
            return(

                <BookInfo 
                key={i}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                info={book.volumeInfo.description}
                link={book.saleInfo.buyLink} />
                )
        })
        
        return (
            <>
            <div 
                className='jumbotron'
                style={{ textAlign: 'center' }}
            >
            <h1>Welcome to BookHub!</h1>
            <h4>Seach for a book by title and/or author...</h4>
            </div>
            {/* SEARCH COMPONENT */}
            <Search 
                handleSubmit={this.handleSubmit} 
                handleInputChange={this.handleInputChange} />
            {/* END_SEARCH_COMP */}


            <br/><br/>
            {Content}
            {/* <BookInfo /> */}
            {/* <ul>TODOS
                <li>search INPUT >> add handleSearchChange && handleFormSubmit property methods</li>
                <li>SECTION to hold search results</li>
                <li>CARD to hold specific details about each search item (component)</li>
                <li>Google Books API config****</li>
                <li>backend api routes >> hooked to MongoDB</li>
            </ul> */}
            </>
        )
    }
}
export default Home