import React, { Component } from 'react';

class SearchboxDesktop extends Component {
    render() {
        return (
            <div className="searchbox-desktop-container">
                <div className="searchbox">
                    <input type="text" className="search-bar" placeholder="Search a word ..." />
                    <button className="search-btn">
                        <i className="fas fa-search" />
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchboxDesktop;
