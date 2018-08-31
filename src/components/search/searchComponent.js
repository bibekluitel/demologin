import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './searchComponent.css';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
    }

    onChangeField = () => {
        const searchText = this.searchBox.value;
        this.props.searchItemTunk({ searchText: searchText });
        this.setState({ searchText: searchText });
    }

    search = () => {
        const searchText = this.searchBox.value;
        this.props.searchItemTunk({ searchText: searchText });
    }

    getPlanetList = (list) => {
        if (!list) { return null; }
        return list.map((item, key) => <p key={key}> {item} </p>);
    }

    render() {
        const { logout, planetList } = this.props;

        return <div className='search-container'>

            <Paper className='header' >
                <p>Welcome to StarBucks </p>
                <Button variant="contained" color="primary" onClick={logout}>
                    Log Out
                </Button>
            </Paper>

            <Paper className='search-content' >
                <Button variant="contained" color="disabled" onClick={this.search}>
                    Search
                </Button>
                <div className='search'>
                    <input
                        type="text" name="name"
                        onChange={this.onChangeField}
                        value={this.state.searchText}
                        ref={(searchBox) => this.searchBox = searchBox}
                    />
                </div>
                <div className='content'>
                    {this.getPlanetList(planetList)}
                </div>
            </Paper>
        </div>
    }

}

SearchComponent.proptypes = {
    logout: PropTypes.func,
    planetList: PropTypes.array,
    searchItemTunk: PropTypes.func

};

SearchComponent.defaultProps = {};

export default SearchComponent;