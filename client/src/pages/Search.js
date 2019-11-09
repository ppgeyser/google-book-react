import React, { Component } from "react";
import { Container } from 'reactstrap';
import AppJumbotron from "./../components/Jumbotron";

class Search extends Component {
    state = {
        searchbar: "",
    };

    render() {
        return (
        <div>
            <AppJumbotron />
        </div>
        )
    }
}

export default Search;