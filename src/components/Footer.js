import React from 'react';
import { NavLink } from 'react-router-dom';



const Footer = () => (
    <footer className="footer">
        <NavLink to="/words" className="btn btn-word" exact activeClassName="btn-active">
            <button type="button" className="btn-wrap">
                <i className="fab fa-wikipedia-w" />
                <p className="font-title">Words</p>
            </button>
        </NavLink>

        <NavLink to="/" className="btn btn-search" exact activeClassName="btn-active">
            <button type="button" className="btn-wrap">
                <i className="fas fa-h-square" />
                <p className="font-title">Home</p>
            </button>
        </NavLink>

        <NavLink to="/list" className="btn btn-list" exact activeClassName="btn-active">
            <button type="button" className="btn-wrap">
                <i className="fas fa-list" />
                <p className="font-title">My List</p>
            </button>
        </NavLink>
    </footer>
);

export default Footer;
