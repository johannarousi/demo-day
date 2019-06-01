import React, { Component } from 'react';
import { auth } from '../../services/firebase';

class Account extends Component {
    clickLogOut = () => {
        auth.signOut().then(() => {
            console.log('user sign out');
            this.props.history.push('/');
        });
    };

    render() {
        // const { login } = this.state;
        const { login } = this.props;
        // console.log(this.props);
        return (
            <main>
                <h1>Account</h1>
                <button className="header-log button-all" onClick={this.clickLogOut}>
                    Log out
                </button>
            </main>
        );
    }
}

export default Account;
