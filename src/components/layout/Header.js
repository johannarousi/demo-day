import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { CoverageMap } from 'istanbul-lib-coverage';
import Searchbox from './Searchbox';
import SearchboxDesktop from './SearchboxDesktop';
import birch from '../../img/birch.jpg';
import flag from '../../img/flag.jpg';

class Header extends Component {
    render() {
        // const { login } = this.state;
        const { login } = this.props;
        console.log(this.props);
        return (
            <header className="header">
                <div className="layer" />
                <NavLink to="/" className="header-title button-all">
                    Finlary
                </NavLink>

                {login === false && (
                    <NavLink to="/sign-in" className="header-log button-all">
                        Log in
                    </NavLink>
                )}
                {login === true && (
                    <NavLink to="/account" className="header-log button-all">
                        Account
                    </NavLink>
                )}
            </header>
        );
    }
}

export default Header;
