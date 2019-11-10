import React, { Component } from "react";
import { Card, CardHeader, CardBody, Alert } from 'reactstrap';
import API from "./../utils/API";
import Nav from "./../components/Nav";
import AppJumbotron from "./../components/Jumbotron";
import BookCard from "./../components/BookCard";

class Saved extends Component {
    state = {
        books: [],
        isVisible: false
    };

    setVisible = (boolean) => {
        this.setState({
            isVisible: boolean
        });
    };

    onDismiss = () => {
        this.setVisible(false);
    }

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

    deleteBook = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .then(() => {
            this.setVisible(true);
          })
          .catch(err => console.log(err));
      };

    render() {
        return (
        <div>
            <Nav />

            <Alert color="danger" isOpen={this.state.isVisible} toggle={this.onDismiss} style={{ position: 'fixed', zIndex: 1000, width: '100%' }}>
                Book deleted!
            </Alert>

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