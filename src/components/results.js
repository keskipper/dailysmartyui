import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './search-bar';

export default class Results extends Component {

    handleSearchBarSubmit() {
        console.log("search bar submit")
    }

    render() {
        return (
            <div>
            <Logo size={55}/>
            <SearchBar onSubmit={(query) => {this.handleSearchBarSubmit(query)}}/>
            </div>
        );
    }
}