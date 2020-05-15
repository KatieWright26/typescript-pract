/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState } from 'react';
import marked from 'marked';

const ObjectDesignNotes = (): JSX.Element => {
    const readmePath = require('./ObjectDesign/chapter-2.md');
    const [notes, setNotes] = useState('');

    fetch(readmePath)
        .then(response => response.text())
        .then(text => {
            setNotes(marked(text));
        });

    return (
        <section>
            <article dangerouslySetInnerHTML={{ __html: notes }}></article>
        </section>
    );
};

export default ObjectDesignNotes;
