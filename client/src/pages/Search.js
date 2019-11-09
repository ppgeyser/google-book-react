import React, { Component } from "react";
import { Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import AppJumbotron from "./../components/Jumbotron";
import BookCard from "./../components/BookCard";

class Search extends Component {
    state = {
        searchbar: "",
        results: []
    };

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
                console.log("result", this.state.results);
            }
        );
    };

    render() {
        return (
        <div>
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
                            image={book.volumeInfo.imageLinks.thumbnail} 
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            link={book.volumeInfo.infoLink}
                            label="Save"
                        />
                    ))}
                </div>
            ) : (
              <h3>No Results to Display</h3>
            )}

            </CardBody>
        </Card>

        </div>
        )
    }
}

export default Search;