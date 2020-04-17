/* eslint-disable id-length */
/* eslint-disable id-blacklist */
import { CURRENT_USER, NEXT_ID } from '../App';
import React, { FunctionComponent, useState } from 'react';
import { TweetType } from '../types';

interface Props {
     handleClick: (tweet: TweetType) => void;
}

const TweetInput: FunctionComponent<Props> = (props: Props) => {
    const prepareTweet = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.handleClick(tweet);
    };

    const { userId, userName, userHandle } = CURRENT_USER;

    const [tweet, setTweetValue] = useState<TweetType>({
        userId,
        text: '',
        userName,
        userHandle,
        id: NEXT_ID,
    });

    const isEmpty = tweet.text.length === 0;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length <= 0) {
            throw new Error('can\'t save a tweet with no content');
        }

        setTweetValue({
            ...tweet,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <form onSubmit={event => prepareTweet(event)}>
            <input type="text" value={tweet.text} name="text" onChange={event => handleChange(event)}/>
            <input value="Submit!" type="submit" disabled={isEmpty}/>
        </form>
    );
};

export default TweetInput;
