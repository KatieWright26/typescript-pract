/* eslint-disable max-len */
import './App.css';
import React, { FunctionComponent, useState } from 'react';
import TweetInput from './components/TweetInput';
import Tweets from './components/Tweets';
import { tweets } from './tweets';
import { TweetType } from './types';

const sortedTweets = tweets.sort((tweetA, tweetB) => tweetB.id - tweetA.id);

export const NEXT_ID = sortedTweets[0].id + 1;

export const CURRENT_USER = {
    userId: 4,
    userName: 'Umlaut',
    userHandle: '@LatinLang',
};

const App: FunctionComponent<{}> = () => {
    const [tweetList, setTweetList] = useState(tweets);

    const handleClick = (newTweet: TweetType): void => {
        const newTweets = tweets.concat(newTweet);

        setTweetList(newTweets);
    };

    return (
        <div className="App">
            <h1>Typescript practise</h1>
            <TweetInput handleClick={newTweet => handleClick(newTweet)}/>
            <Tweets tweets={tweetList}/>
        </div>
    );
};

export default App;
