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
                        <Button>Search</Button>
                    </Form>

                </CardBody>
        </Card>

        </div>
        )
    }
}

export default Search;