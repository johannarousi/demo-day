import React, { Component } from 'react';
import Header from './components/Header';
import Searchbox from './components/Searchbox';
import Main from './components/Main';
import Footer from './components/Footer';
import HeaderDesktop from './components/HeaderDesktop';
import FooterDesktop from './components/FooterDesktop';
import MainDesktop from './components/MainDesktop';

class App extends Component {
    state = {
        width: window.innerWidth,
        subtitles: [],
        searchTerm: '',
    };

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    // make sure to remove the listener
    // when the component is not mounted anymore
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    searchWord = searchTerm => {
        if (searchTerm.length < 2) {
            return;
        }
        const urlWord = `https://yle-subtitle.herokuapp.com/api/word/${searchTerm}`;
        fetch(urlWord)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    subtitles: data.subtitles,
                    searchTerm,
                });
            });
    };

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;

        if (isMobile) {
            return (
                <div className="phone-screen">
                    <Header />
                    <Searchbox searchWord={this.searchWord} />
                    <Main subtitles={this.state.subtitles} searchTerm={this.state.searchTerm} />
                    <Footer />
                </div>
            );
        }
        return (
            <div className="desktop-screen">
                <HeaderDesktop />
                <MainDesktop />
                <FooterDesktop />
            </div>
        );
    }
}

export default App;
