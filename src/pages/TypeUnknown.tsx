/* eslint-disable max-len */
/* eslint-disable max-statements */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState } from 'react';
import marked from 'marked';

const TypeUnknown = (): JSX.Element => {
    const stringValue: unknown = 'Katie';
    const numberValue: unknown = 29;
    const [notes, setNotes] = useState('');
    const readmePath = require('./TypescriptNotes/Unknown.md');

    fetch(readmePath)
        .then(response => response.text())
        .then(text => {
            setNotes(marked(text));
        });

    function userIsString(value: unknown): value is string {
        return typeof value === 'string';
    }

    return <section>
        <h2>Type guards</h2>
        <pre>function userIsString(value: unknown): value is string<br/>
                return typeof value === &lsquo;string&lsquo;;
        </pre>
        <code>const stringValue: unknown = &lsquo;Katie&rsquo;</code><br/>
        {userIsString(stringValue) && <p>User type is: string</p>}
        <code>const numberValue: unknown = 29</code>
        {!userIsString(numberValue) && <p>User type is: {typeof numberValue}</p>}
        <hr/>
        <h2>Type Assertions</h2>
        <pre>
            const validCountryCodes = [&lsquo;uk&lsquo;, &lsquo;aus&lsquo;, &lsquo;nl&lsquo;] as const;<br/>
            type ValidCountryCode = typeof validCountryCodes[number] // &lsquo;uk&lsquo; | &lsquo;aus&lsquo; | &lsquo;nl&lsquo;<br/>
            const [countryCode, setCountryCode] = useState&lt;ValidCountry&gt;(&lsquo;uk&lsquo;);<br/>
            const newCountryCode = &lsquo;nz&rsquo;;
        </pre>

        <p> The following line will throw an error from anywhere in the code; as <code>newCountryCode</code> is not a valid type for the <code>countryCode</code> part of state.</p>
        <pre>
        setCountryCode(newCountryCode); // Argument of type &lsquo;nz&lsquo; is not assignable to parameter of type &lsquo;SetStateAction&lt;&lsquo;uk&lsquo; | &lsquo;aus&lsquo; | &lsquo;nl&lsquo;&gt; <br/>
        </pre>
        <p>We can override this with an unknown assertion.</p>
        <pre>
        const validCountryCodes = [&lsquo;uk&lsquo;, &lsquo;aus&lsquo;, &lsquo;nl&lsquo;] as const;<br/>
        type ValidCountryCode = typeof validCountryCodes[number]<br/>
        const [countryCode, setCountryCode] = useState&lt;ValidCountry&gt;(&lsquo;uk&lsquo;);<br/>
        const currentCountryCode: unknown = &lsquo;nz&rsquo;;<br/>
        const validCountryCode = currentCountryCode as ValidCountryCode<br/><br/>
        setCountryCode(validCountryCode); // No error here<br/>
        </pre>
        <article dangerouslySetInnerHTML={{ __html: notes }}></article>
    </section>;
};

export default TypeUnknown;
