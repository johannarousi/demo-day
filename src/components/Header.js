import React, { Component } from 'react';
import { CoverageMap } from 'istanbul-lib-coverage';
import Searchbox from './Searchbox';
import SearchboxDesktop from './SearchboxDesktop';
import birch from '../img/birch.jpg';
import flag from '../img/flag.jpg';
import SignIn from './user/SignIn';

class Header extends Component {
    // state = {
    //     imgs: [],
    // };

    // componentDidMount() {
    //     fetch(`https://api.unsplash.com/photos/query="finland"?`)
    //         .then(res => res.json())
    //         .then(data => {
    //             this.setState({ imgs: data });
    //         })
    //         .catch(err => {
    //             console.log('Error happened during fetching!', err);
    //         });
    // }

    render() {
        // const styles = {
        //     backgroundImage: `url(${birch})`,
        //     backgroundPosition: 'center top',
        //     backgroundSize: 'cover',
        // };
        return (
            <header className="header">
                <div className="layer" />
                <div className="header-title">Demo</div>
                <button type="button" className="header-log">
                    <SignIn />
                </button>
            </header>
        );
    }
}

export default Header;
