import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

class Searchbox extends React.Component {
    state = {
        searchInput: '',
    };

    handleInput = e => {
        this.setState({ searchInput: e.currentTarget.value });
        this.props.searchWord(e.currentTarget.value);
    };

    render() {
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
                                <input
                                    type="text"
                                    className="search-bar"
                                    placeholder="Search ..."
                                    value={this.state.searchInput}
                                    onChange={this.handleInput}
                                />
                                <button className="search-btn">
                                    <i className="fas fa-search" />
                                </button>
                            </div>
                        </div>
                    )}
                </Sticky>
                {/* ... */}
            </StickyContainer>
        );
    }
}

export default Searchbox;
