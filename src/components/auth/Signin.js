/* eslint-disable react/button-has-type */
import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { auth } from '../../services/firebase';

class Signin extends React.Component {
    state = { email: '', password: '' };

    handleChange = e => {
        const { value, name, type, checked } = e.target;
        type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        auth.signInWithEmailAndPassword(email, password).then(cred => {
            console.log(cred);
            this.props.history.push('/account');
        });
    };

    render() {
        console.log(this.props);
        return (
            <div className="main">
                <div className="content">
                    <h1>Log in</h1>
                    <div className="subtitle-wrapper">
                        <div className="subtitle">
                            <form className="form-login" onSubmit={this.handleSubmit}>
                                <div className="">
                                    <label className="" htmlFor="email">
                                        Email Address:
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={this.state.email}
                                        placeholder="Enter your email"
                                        name="email"
                                        onChange={this.handleChange}
                                    />
                                </div>

                                <div className="">
                                    <label className="" htmlFor="password">
                                        Password:
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={this.state.password}
                                        placeholder="Enter your Password"
                                        name="password"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="buttons-main-card">
                                    <a className="hvr-pulse-shrink button-all">
                                        <button className="btn-desktop" type="submit">
                                            <i className="fas fa-sign-in-alt" />
                                            <p className="btn-name">Log in</p>
                                        </button>
                                    </a>
                                    <NavLink
                                        to="/sign-up"
                                        className="hvr-pulse-shrink button-all"
                                        style={{ color: 'black' }}
                                    >
                                        <button className="btn-desktop" type="button">
                                            <i className="fas fa-user-plus" />
                                            <p className="btn-name">Sign up</p>
                                        </button>
                                    </NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Signin;
