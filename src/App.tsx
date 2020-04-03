import './App.css';
import React, { FunctionComponent, useState } from 'react';
import TweetInput from './components/TweetInput';
import Tweets from './components/Tweets';

export interface TweetType {
    id: string;
    text: string;
    userId: string;
}

const tweets = [
    {
        id: '1',
        text: 'testing text',
        userId: '1',
    },
    {
        id: '2',
        text: 'testing text',
        userId: '2',
    },
    {
        id: '3',
        text: 'testing text',
        userId: '3',
    },
    {
        id: '4',
        text: 'testing text',
        userId: '4',
    },
];

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
