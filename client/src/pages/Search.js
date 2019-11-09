import React, { Component } from "react";
import { Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import AppJumbotron from "./../components/Jumbotron";

class Search extends Component {
    state = {
        searchbar: "",
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
                console.log(result);
            }
        )
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

        </div>
        )
    }
}

export default Search;