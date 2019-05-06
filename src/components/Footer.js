import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <button className="btn">
        <div>
          <i className="fab fa-wikipedia-w" />
          <p className="font-title">Words</p>
        </div>
      </button>
      {/* <button className="btn">
        <div>
          <i className="fas fa-home" />
          <p className="font-title">Home</p>
        </div>
      </button> */}
      <div className="verticalLine" />
      <button className="btn">
        <div>
          <i className="fas fa-search" />
          <p className="font-title">Search</p>
        </div>
      </button>
    </footer>
  );
};

export default Footer;
