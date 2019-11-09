import React, { Component } from "react";
import { Card, CardHeader, CardBody, } from 'reactstrap';
import API from "./../utils/API"
import AppJumbotron from "./../components/Jumbotron";
import BookCard from "./../components/BookCard";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    };

    loadBooks() {
        API.getBooks()
            .then(res => {
                this.setState({books: res.data});
                console.log("books", this.state.books);
            });
    }

    render() {
        return (
        <div>
            <AppJumbotron />

            <Card>
                <CardHeader>Saved Books</CardHeader>
                <CardBody>

                {this.state.books.length ? (
                    <div>
                        {this.state.books.map(book => (
                            <BookCard
                                key={book._id}
                                image={book.image} 
                                title={book.title}
                                authors={book.authors}
                                description={book.description}
                                link={book.link}
                                label="Delete"
                                onClick={() => this.deleteBook(book._id)}
                            />
                        ))}
                    </div>
                ) : (
                <h3>No saved books to display</h3>
                )}

                </CardBody>
            </Card>

        </div>
        )
    }
}

export default Saved;