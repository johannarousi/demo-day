import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink, Redirect, Prompt } from 'react-router-dom';
import Header from './components/Header';

import Main from './components/main/Main';
import Footer from './components/Footer';
import FooterDesktop from './components/FooterDesktop';
import WordList from './components/word/WordList';
import MyList from './components/word/MyList';
// import HeaderDesktop from './components/HeaderDesktop';
// import MainDesktop from './components/MainDesktop';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="phone-screen">
                    <Header />
                    <Switch>
                        <Route path="/words" component={WordList} />
                        <Route path="/list" component={MyList} />
                        <Route path="/:word?" component={Main} />
                    </Switch>
                    <Footer />
                    <div>
                        <a href="#top" className="anchor scroll-to-top">
                            <i className="fas fa-angle-up" />
                        </a>
                    </div>
                    <FooterDesktop />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
