import React, { Component } from 'react';
import Searchbox from './Searchbox';

class HeaderDesktop extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <Searchbox />
                    <div className="header-logo" />
                    <div className="header-title">Demo</div>
                    <button className="log">Log in</button>
                </header>
            </div>
        );
    }
}

export default HeaderDesktop;
