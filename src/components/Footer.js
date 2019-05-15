import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
    <footer className="footer">
        <NavLink to="/words">
            <button type="button" className="btn btn-word">
                <i className="fab fa-wikipedia-w" />
                <p className="font-title">Words</p>
            </button>
        </NavLink>

        <div className="verticalLine" />
        <NavLink to="/">
            <button type="button" className="btn btn-list">
                <i className="fas fa-list" />
                <p className="font-title">Home</p>
            </button>
        </NavLink>

        <NavLink to="/list">
            <button type="button" className="btn btn-list">
                <i className="fas fa-list" />
                <p className="font-title">My List</p>
            </button>
        </NavLink>
    </footer>
);

export default Footer;
