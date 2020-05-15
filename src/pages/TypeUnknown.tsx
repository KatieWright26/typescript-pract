/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState } from 'react';
import marked from 'marked';

const TypeUnknown = (): JSX.Element => {
    const user: unknown = 'Katie';
    const [notes, setNotes] = useState('');
    const readmePath = require('./FAQ.md');

    fetch(readmePath)
        .then(response => response.text())
        .then(text => {
            setNotes(marked(text));
        });

    function userIsString(value: unknown): value is string {
        return typeof value === 'string';
    }

    return <section>
        <code>const user: unknown = &lsquo;Katie&rsquo;</code>
        {userIsString(user) && <p>User type is: string</p>}
        {!userIsString(user) && <p>User type is: {typeof user}</p>}
        <hr/>
        <article dangerouslySetInnerHTML={{ __html: notes }}></article>
    </section>;
};

export default TypeUnknown;
