import React, { FunctionComponent } from 'react';

interface Props {
    tweet: Record<string, string>;
}

const Tweet: FunctionComponent<Props> = (props: Props) => {
    const { userId, id, text } = props.tweet;

    return (
        <div key={id}>
            <h4>{text}</h4>
            <p>{userId}</p>
        </div>
    );
};

export default Tweet;
