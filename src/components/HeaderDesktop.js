import React, { Component } from 'react';
import { CoverageMap } from 'istanbul-lib-coverage';
import SearchboxDesktop from './SearchboxDesktop';
import birch from '../img/birch.jpg';
import flag from '../img/flag.jpg';

class HeaderDesktop extends Component {
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
        const styles = {
            background: '#4497e5',
            backgroundImage: `url(${birch})`,
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
        };
        return (
            <div>
                <header style={styles} className="header-desktop">
                    <div className="gray-header">
                        <div className="header-title-desktop">
                            {/* <p>Learn to speak finnish with Yle-videos</p> */}
                            <div className="title-and-logo-container">
                                <div className="header-logo" />
                                <h1>Demo</h1>
                            </div>
                            <button className="log-desktop">Log in</button>
                        </div>
                        <SearchboxDesktop />

                        <div className="word-mylist-log-buttons-desktop">
                            <button className="words-desktop-btn">Words</button>
                            <button className="mylist-desktop-btn">My List</button>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default HeaderDesktop;
