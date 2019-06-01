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
            this.props.history.push('/');
        });
    };

    render() {
        console.log(this.props);
        return (
            <main>
                <h1>Log in</h1>
                <form className="" onSubmit={this.handleSubmit}>
                    <div className="">
                        <label className="" htmlFor="email">
                            Email Address
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
                            Password
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

                    <div className="">
                        <button className="">Sign In</button>
                        <NavLink to="/sign-up" className="" style={{ color: 'black' }}>
                            Sign up
                        </NavLink>
                    </div>
                </form>
            </main>
        );
    }
}
export default Signin;
