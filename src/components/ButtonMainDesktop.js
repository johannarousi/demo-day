import React from 'react';

const ButtonMainDesktop = ({ link, icon, para }) => (
    <a href={link} className="hvr-pulse-shrink">
        <button className="btn-desktop">
            <i className={icon} />
            <p>{para}</p>
        </button>
    </a>
);

export default ButtonMainDesktop;
