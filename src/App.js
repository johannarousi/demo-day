import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink, Redirect, Prompt } from 'react-router-dom';
import Header from './components/layout/Header';

import Main from './components/main/Main';
import Footer from './components/layout/Footer';
import FooterDesktop from './components/layout/FooterDesktop';
import WordList from './components/word/WordList';
import MyList from './components/word/MyList';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import { auth } from './services/firebase';
import Account from './components/auth/Account';

class App extends Component {
    state = {
        login: '',
        user: {},
    };

    componentDidMount() {
        // const myApp = this;
        // const { login } = this.state;
        auth.onAuthStateChanged(user => {
            console.log(user);
            if (user) {
                console.log('user log in');

                this.setState({ login: true, user });
            } else {
                console.log('user log out');
                this.setState({ login: false });
            }
        });
    }

    componentDidUpdate() {
        console.log('update');
    }

    render() {
        const { login, user } = this.state;
        console.log(this.state);
        return (
            <BrowserRouter>
                <div className="phone-screen">
                    <Header login={login} user={user} />
                    <Switch>
                        <Route path="/words" component={WordList} />
                        <Route path="/list" component={MyList} />
                        <Route path="/sign-in" component={Signin} />
                        <Route path="/sign-up" component={Signup} />
                        <Route
                            path="/account"
                            component={props => <Account {...props} login={login} user={user} />}
                        />
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
