import React, { Component } from 'react';
import Header from './components/Header';
import Searchbox from './components/Searchbox';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
    state = { searchTerm: '' };

    searchWord = search => {
        // console.log('search', search);
        this.setState({ searchTerm: search });
    };

    render() {
        return (
            <div className="phone-screen">
                <Header />
                <Searchbox searchWord={this.searchWord} />
                <Main searchTerm={this.state.searchTerm} />
                <Footer />
            </div>
        );
    }
}

export default App;
