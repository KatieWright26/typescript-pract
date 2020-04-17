import React, { FunctionComponent } from 'react';
import { TweetType } from '../types';

const Tweet: FunctionComponent<{tweet: TweetType}> = ({ tweet }) => {
    const { userName, userHandle, id, text } = tweet;

    return (
        <div key={id}>
            <h4>{text}</h4>
            <p><strong>{userName}</strong> {userHandle}</p>
        </div>
    );
};

export default Tweet;
