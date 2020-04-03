/* eslint-disable id-blacklist */
import React, { FunctionComponent, useState } from 'react';
import { TweetType } from '../App';

interface Props {
    handleClick: (tweet: TweetType) => void;
}

const TweetInput: FunctionComponent<Props> = (props: Props) => {
    const prepareTweet = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.handleClick(tweet);
    };

    const [tweet, setTweetValue] = useState<TweetType>({
        userId: 'Katie',
        id: '1',
        text: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTweetValue({
            ...tweet,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <form onSubmit={event => prepareTweet(event)}>
            <input type="text" value={tweet.text} name="text" onChange={event => handleChange(event)}/>
            <input value="Submit!" type="submit"/>
        </form>
    );
};

export default TweetInput;
