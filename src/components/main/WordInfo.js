import React, { Component } from 'react';
import { translate } from '../../services/translate';

class WordInfo extends Component {
    render() {
        const { searchTerm, subtitles, wordTranslate } = this.props;
        return (
            <div className="word-info">
                <p>
                    Word <span>{searchTerm}</span> is in {subtitles.length} subtitles
                </p>
                <p>
                    {searchTerm} =<span className="word-translate">{wordTranslate}</span>
                </p>
            </div>
        );
    }
}

export default WordInfo;
