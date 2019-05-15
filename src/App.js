import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink, Redirect, Prompt } from 'react-router-dom';
import Header from './components/Header';

import Main from './components/Main';
import Footer from './components/Footer';
import FooterDesktop from './components/FooterDesktop';
// import HeaderDesktop from './components/HeaderDesktop';
// import MainDesktop from './components/MainDesktop';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="phone-screen">
                    <Header />
                    <Switch>
                        <Route path="/words" component={() => <div> Frequency</div>} />
                        <Route path="/list" component={() => <div> My List</div>} />
                        <Route path="/" component={Main} />
                    </Switch>
                    <Footer />
                    <FooterDesktop />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
