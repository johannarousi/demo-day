import React, { Component } from 'react';
import Header from './components/Header';
import Searchbox from './components/Searchbox';
import Main from './components/Main';
import Footer from './components/Footer';
import HeaderDesktop from './components/HeaderDesktop';
import FooterDesktop from './components/FooterDesktop';
import MainDesktop from './components/MainDesktop';
import Words from './components/Words';
import WordList from './components/WordList';

class App extends Component {
    state = {
        width: window.innerWidth,
        subtitles: [],
        searchTerm: '',
        frequency: null,
        datalist: [],
    };

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentDidMount() {
        const urlWordList = `https://yle-subtitle.herokuapp.com/api/list/100`;
        fetch(urlWordList)
            .then(response => response.json())
            .then(data => {
                console.log(data[0].frequency);
                this.setState({
                    datalist: data,
                });
            });
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
                // console.log(data.subtitles);
                this.setState({
                    subtitles: data.subtitles,
                    searchTerm,
                    frequency: data.word.frequency,
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
                    <WordList datalist={this.state.datalist} />
                    <Main subtitles={this.state.subtitles} searchTerm={this.state.searchTerm} />
                    <Words
                        wordName={this.state.searchTerm}
                        wordFrequency={this.state.frequency}
                        wordSubtitles={this.state.subtitles}
                    />
                    <Footer handleClick={this.handleWordsBtnClick} />
                </div>
            );
        }
        return (
            <div className="desktop-screen">
                <HeaderDesktop />
                <Searchbox searchWord={this.searchWord} />

                <MainDesktop />
                <FooterDesktop />
            </div>
        );
    }
}

export default App;
