import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink, Redirect, Prompt } from 'react-router-dom';
import Header from './components/Header';
import Searchbox from './components/Searchbox';
import Main from './components/Main';
import Footer from './components/Footer';
import FooterDesktop from './components/FooterDesktop';
// import HeaderDesktop from './components/HeaderDesktop';
// import MainDesktop from './components/MainDesktop';

class App extends Component {
    state = {
        // width: window.innerWidth,
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

    // handleWindowSizeChange = () => {
    //     this.setState({ width: window.innerWidth });
    // };

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
        return (
            <BrowserRouter>
                <div className="phone-screen">
                    <Header />
                    <Searchbox searchWord={this.searchWord} />
                    <Switch>
                        <Route path="/words" component={() => <div> Frequency</div>} />
                        <Route path="/list" component={() => <div> My List</div>} />
                        <Route
                            path="/"
                            component={props => (
                                <Main
                                    subtitles={this.state.subtitles}
                                    searchTerm={this.state.searchTerm}
                                    {...props}
                                />
                            )}
                        />
                    </Switch>
                    <Footer />
                    <FooterDesktop />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
