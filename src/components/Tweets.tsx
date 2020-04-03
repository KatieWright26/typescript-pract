import React, { FunctionComponent } from 'react';
import Tweet from './Tweet';
interface Props {
    tweets: Array<{}>;
}

const Tweets: FunctionComponent<Props> = (props: Props) => {
    const { tweets } = props;

    return (
        <div>
            <h2>List of Tweets</h2>
            {tweets.map((tweet: Record<string, string>) => <Tweet tweet={tweet} key={tweet.id}/>)}
        </div>
    );
};

export default Tweets;
