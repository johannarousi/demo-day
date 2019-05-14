import React from 'react';

const Footer = () => (
    <footer className="footer">
        <button type="button" className="btn btn-word">
            <i className="fab fa-wikipedia-w" />
            <p className="font-title">Words</p>
        </button>

        <div className="verticalLine" />

        <button type="button" className="btn btn-list">
            <i className="fas fa-list" />
            <p className="font-title">My List</p>
        </button>
    </footer>
);

export default Footer;
