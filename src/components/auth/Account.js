import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { auth, db } from '../../services/firebase';
import { fnMyList } from '../../services/funData';

class Account extends Component {
    state = {
        onlineList: [],
        localList: [],
    };

    componentDidMount() {
        const myList = fnMyList();
        this.setState({ localList: myList });

        const { user } = this.props;
        if (user.uid) {
            // console.log(user);
            db.collection('userSync')
                .doc(user.uid)
                .get()
                .then(doc => {
                    if (doc.exists) {
                        console.log('Document data:', doc.data().onlineList.length);
                        this.setState({ onlineList: doc.data().onlineList });
                    } else {
                        // doc.data() will be undefined in this case
                        console.log('No such document!');
                    }
                })
                .catch(function(error) {
                    console.log('Error getting document:', error);
                });
        }
    }

    clickLogOut = () => {
        // console.log(this.props.history);
        auth.signOut().then(() => {
            console.log('user sign out');
            this.props.history.push('/');
        });
    };

    saveOnline = () => {
        const { user } = this.props;
        const { localList } = this.state;

        const docData = { onlineList: localList };

        db.collection('userSync')
            .doc(user.uid)
            .set(docData)
            .then(() => {
                console.log('Document successfully written!');
                this.setState({ onlineList: localList });
            });
    };

    saveLocal = () => {
        const { onlineList } = this.state;

        localStorage.setItem('myList', JSON.stringify(onlineList));
        this.setState({ localList: onlineList });
    };

    render() {
        // const { login } = this.state;
        const { login, user } = this.props;
        const { localList, onlineList } = this.state;

        console.log(this.props);
        // if (!login) {
        //     return <Redirect to="/" />;
        // }
        return (
            <div className="main">
                <div className="content">
                    <h1>Account</h1>
                    <div className="subtitle-wrapper">
                        <div className="subtitle">
                            <p>Your email: {user.email}</p>
                        </div>
                        <div className="buttons-main-card">
                            <a className="hvr-pulse-shrink button-all">
                                <button className="btn-desktop" type="submit">
                                    <i className="fas fa-user-plus" />

                                    <p className="btn-name" onClick={this.clickLogOut}>
                                        Log out
                                    </p>
                                </button>
                            </a>
                            <a className="hvr-pulse-shrink button-all">
                                <button className="btn-desktop" type="submit">
                                    <i className="fas fa-user-plus" />

                                    <p className="btn-name">Delete Account</p>
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="local-online">
                        <div>
                            <p>
                                Local List: <span>{localList.length}</span> words
                            </p>
                            <button onClick={() => this.saveOnline()}>Save local to online</button>
                        </div>
                        <div>
                            <p>
                                Online List: <span>{onlineList.length}</span> words
                            </p>
                            <button onClick={() => this.saveLocal()}>Save online to local</button>
                        </div>
                    </div>

                    {/* <div>
                        <h1>Your list</h1>
                        <h3>Local List: {localList.length} words</h3>
                        <h3>Online List: {onlineList.length} words</h3>
                    </div>
                    <div>
                        <h1>Sync list</h1>
                        <button onClick={() => this.saveOnline()}>Save local to online</button>
                        <button onClick={() => this.saveLocal()}>Save online to local</button>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Account;
