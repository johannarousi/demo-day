import React from 'react';

export default function Info() {
    return (
        <div className="content">
            <div className="app-information">
                <h2>Welcome to Finlary</h2>
                <p>
                    This app provides 2000 Finnish words. <br /> By learning them all you will
                    understand 95 % of the spoken language.
                </p>
            </div>
            <div className="app-information">
                <h2>How to use</h2>
                <ul>
                    <li>
                        Search a word or you can see the list of most common words in the 'Words'
                        section.
                    </li>
                    <li>Save the words you have learned to 'My List' and follow your progress.</li>
                </ul>
            </div>
        </div>
    );
}
