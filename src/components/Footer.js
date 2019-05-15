import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
    <footer className="footer">
        <button type="button" className="btn btn-word">
            <i className="fab fa-wikipedia-w" />
            <p className="font-title">
                <NavLink to="/words">Words</NavLink>
            </p>
        </button>

        <div className="verticalLine" />
        <button type="button" className="btn btn-list">
            <i className="fas fa-list" />
            <p className="font-title">
                <NavLink exact to="/">
                    Search
                </NavLink>
            </p>
        </button>

        <button type="button" className="btn btn-list">
            <i className="fas fa-list" />
            <p className="font-title">
                <NavLink to="/list">My List</NavLink>
            </p>
        </button>
    </footer>
);

export default Footer;
