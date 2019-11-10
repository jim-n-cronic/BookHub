import React, { Component } from 'react';
import DeleteButton from "../components/DeleteButton";
import Jumbotron from "../components/Jumbotron";
import Axios from "../utils/Axios";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormButton } from "../components/Form";
//import { timingSafeEqual } from 'crypto';

class SearchBooks extends Component {
    state = {
        books: [],
        author: "",
        description: "",
        image: "",
        link: "",
        title: ""
    }
    // componentDidMount
    componentDidMount() {
        this.loadBooks();
    }

    // loadBooks
    loadBooks = () => {
        Axios.getBooks().then(res => this.setState({
            books: res.data,
            author: "",
            description: "",
            image: "",
            link: "",
            title: ""
        })).catch(err => console.log(err));
    };
    // deleteBook
    deleteBook = (id) => {
        Axios.deleteBook(id).then(res => this.loadBooks())
            .catch(err => console.log(err));
    };
    // handleInputChange
    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };
    // handleFormSubmit
    handleFormSubmit = (e) => {
        e.preventDefault();
            if (this.state.title && this.state.author) {
                Axios.saveBook({
                    title: this.state.title,
                    author: this.state.author,
                    description: this.state.description
                }).then(res => this.loadBooks(res))
                    .catch(err => console.log(err));
            }
    }
    //--------------------------
    // RENDER
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>What should I read today?</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Title **required**" />
                            <Input
                                value={this.state.author}
                                onChange={this.handleInputChange}
                                name="author"
                                placeholder="Author **required**" />
                            <TextArea
                                value={this.state.description}
                                onChange={this.handleInputChange}
                                name="description"
                                placeholder="Description *optional*" />
                            <FormButton
                                disables={!(this.state.author && this.state.title)}
                                onClick={this.handleFormSubmit}>
                                Submit Book!
                                </FormButton>            
                        </form>
                    </Col>
                        <Col size="md-6 sm-12">
                            <Jumbotron>
                                <h1>Book-List</h1>
                            </Jumbotron>
                            {this.state.books.length ? (
                                <List>
                                    {this.state.books.map(book => (
                                        <ListItem key={book._id}>
                                            <Link to={"/avedbooks/" + book._id}>
                                            <strong>
                                                {book.title} by {book.author}
                                            </strong>
                                            </Link>
                                            <DeleteButton onClick={() => this.deleteBook(book._id)} />
                                        </ListItem>
                                    ))}
                                </List>
                            ) : (
                                <h3>No Results to show</h3>
                            )}
                        </Col>
                </Row>
            </Container>
        );
    }
}

export default SearchBooks;