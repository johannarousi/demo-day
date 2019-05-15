import React from 'react';

const ButtonMainDesktop = ({ link, icon, para }) => {
    if (link) {
        return (
            <a href={link} className="hvr-pulse-shrink" target="_blank" rel="noopener noreferrer">
                <button className="btn-desktop" type="button">
                    <i className={icon} />
                    <p className="btn-name">{para}</p>
                </button>
            </a>
        );
    }

    return (
        <a className="hvr-pulse-shrink">
            <button className="btn-desktop" type="button">
                <i className={icon} />
                <p className="btn-name">{para}</p>
            </button>
        </a>
    );
};

export default ButtonMainDesktop;
