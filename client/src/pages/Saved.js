import React, { Component } from "react";
import { Card, CardHeader, CardBody, } from 'reactstrap';
import API from "./../utils/API"
import AppJumbotron from "./../components/Jumbotron";
import BookCard from "./../components/BookCard";

class Saved extends Component {
    state = {
        books: []
    };

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
                                key={book.id}
                                image={book.volumeInfo.imageLinks.thumbnail} 
                                title={book.volumeInfo.title}
                                authors={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                link={book.volumeInfo.infoLink}
                                label="Save"
                                onClick={() => this.saveBook(book)}
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