import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
    <footer className="footer">
        <NavLink to="/words" className="btn btn-word">
            <button type="button" className="btn-wrap">
                <i className="fab fa-wikipedia-w" />
                <p className="font-title">Words</p>
            </button>
        </NavLink>

        <NavLink to="/" className="btn btn-search">
            <button type="button" className="btn-wrap">
                <i class="fas fa-h-square"></i>
                <p className="font-title">Home</p>
            </button>
        </NavLink>

        <NavLink to="/list" className="btn btn-list">
            <button type="button" className="btn-wrap">
                <i className="fas fa-list" />
                <p className="font-title">My List</p>
            </button>
        </NavLink>
    </footer>
);

export default Footer;
