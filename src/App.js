import React, { Component } from 'react';
import './App.css';

import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {

    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: '',
        };

    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    handleChange = (e) => {

        this.setState({ searchField: e.target.value });

    }


    render() {

        const { monsters, searchField } = this.state;
        const filterData = monsters.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase()));
        return (

            <div className="App">
                <h1> Monsters Rolodex </h1>
                <SearchBox placeholder="Search Monsters"
                    handleChange={this.handleChange} />
                <CardList monsters={filterData}>
                </CardList>

            </div>

        );
    }

}
export default App;
