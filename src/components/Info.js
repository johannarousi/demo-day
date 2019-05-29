import React from 'react';

export default function Info() {
    return (
        <div>
            <div className="app-information">
                <h3>Welcome to Finlary</h3>
                <p>
                    This app provides 2000 finnish word. By learning them all you will understand 95
                    % of the spoken language.
                </p>
            </div>
            <div className="app-information">
                <h3>How to use</h3>
                <p>
                    You can search a word or you can see the list of all words in the Words-section.
                    You can also save the words you have learned to 'My List' and follow your
                    progress.
                </p>
            </div>
        </div>
    );
}
