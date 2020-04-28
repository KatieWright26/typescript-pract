import React, { useState } from 'react';

const languages = ['en-GB', 'fr-FR', 'es-CL', 'de'];

type Languages = typeof languages[number];

const isLanguageValid = (value: string): value is Languages => languages.includes(value);

const Select = () => {
    let userLanguage = window.navigator.language;

    if (!isLanguageValid(userLanguage)) {
        userLanguage = languages[3];
    }

    const [language, setLanguage] = useState(userLanguage);

    const handleEvent = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale: string = event.target.value;

        if (!isLanguageValid(newLocale)) {
            throw new Error(`Invalid language: ${newLocale}`);
        }

        setLanguage(newLocale);
    };

    return (
        <>
            <select defaultValue={language} onChange={event => handleEvent(event)}>
                <option value="en-GB">English</option>
                <option value="fr-FR">French</option>
                <option value="es-CL">Spanish</option>
                <option value="de">German</option>
            </select>
            <h1>Supported app locales: {languages.join(', ')}</h1>
            <p>The original user language was {window.navigator.language}</p>
            <p>This has a type guard to ensure the the app language is set to  one which is supported: {language}.</p>
        </>
    );
};

export default Select;
