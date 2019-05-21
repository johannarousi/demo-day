import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

class Searchbox extends React.Component {
    state = {
        searchInput: '',
    };

    handleInput = e => {
        this.setState({ searchInput: e.currentTarget.value });
        this.props.searchWord(e.currentTarget.value.toLowerCase().trim());
    };

    render() {
        return (
            <div className="searchbox">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search ..."
                    value={this.state.searchInput}
                    onChange={this.handleInput}
                />
                <button type="button" className="search-btn">
                    <i className="fas fa-search" />
                </button>
            </div>
        );
    }
}

export default Searchbox;
