import React, { FunctionComponent } from 'react';
import Tweet from './Tweet';
import { TweetType } from '../types';

const Tweets: FunctionComponent<{tweets: Array<TweetType>}> = ({ tweets }) => (
    <div>
        <h2>List of Tweets</h2>
        {tweets.map(
            tweet => <Tweet tweet={tweet} key={`tweet${tweet.id}`}/>,
        )}
    </div>
);

export default Tweets;
