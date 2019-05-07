import React from "react";
import { StickyContainer, Sticky } from "react-sticky";

const Searchbox = () => {
  return (
    <StickyContainer>
      <Sticky>
        {({
          style,

          // the following are also available but unused in this example
          isSticky,
          wasSticky,
          distanceFromTop,
          distanceFromBottom,
          calculatedHeight,
        }) => (
          <div style={style}>
            <div className="searchbox">
              <input type="text" className="search-bar" placeholder="Search ..." />
              <button className="search-btn">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        )}
      </Sticky>
      {/* ... */}
    </StickyContainer>
    // <div className="searchbox">
    //   <input type="text" className="search-bar" placeholder="Search ..." />
    //   <button className="search-btn">
    //     <i className="fas fa-search" />
    //   </button>
    // </div>
  );
};

export default Searchbox;
