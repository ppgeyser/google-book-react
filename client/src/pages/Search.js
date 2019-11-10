import React, { Component } from "react";
import { Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import API from "./../utils/API";
import Nav from "./../components/Nav";
import AppJumbotron from "./../components/Jumbotron";
import BookCard from "./../components/BookCard";

class Search extends Component {
    state = {
        searchbar: "",
        results: [],
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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
    event.preventDefault();
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchbar}`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    results: result.items
                })
            }
        );
    };

    saveBook = book => {
        API.saveBook({
                image: book.volumeInfo.imageLinks.thumbnail,
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors,
                description: book.volumeInfo.description,
                link: book.volumeInfo.infoLink
            }).then(res => {
                this.setVisible(true);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
        <div>

            <Nav />

            <Alert color="success" isOpen={this.state.isVisible} toggle={this.onDismiss} style={{ position: 'fixed', zIndex: 1000, width: '100%' }}>
                Book saved!
            </Alert>

            <AppJumbotron />

            <Card>
                <CardHeader>Book Search</CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup>
                            <Label>Book</Label>
                            <Input 
                            value={this.state.searchbar}
                            onChange={this.handleInputChange}
                            name="searchbar"
                            placeholder="Enter book title here" />
                        </FormGroup>
                        <Button
                            onClick={this.handleFormSubmit}
                        >
                            Search
                        </Button>
                    </Form>
                </CardBody>
        </Card>
        <br/>
        <Card>
            <CardHeader>Results</CardHeader>
            <CardBody>

            {this.state.results.length ? (
                <div>
                    {this.state.results.map(book => (
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
              <h3>No results to display</h3>
            )}

            </CardBody>
        </Card>

        </div>
        )
    }
}

export default Search;