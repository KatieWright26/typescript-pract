/* eslint-disable max-statements */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';
import marked from 'marked';

enum Role {
    Developer,
    Marketer,
    Accountant,
    Manager
}

interface Person {
    name: string;
    age: number;
    address: string;
}

interface Employee extends Person {
    job: Role;
}

interface Employer extends Person {
    job: Role;
    employees: [Employee];
}

const people = [
    {
        name: 'katie',
        age: 29,
        address: 'Amsterdam',
        job: Role.Developer,
    },
    {
        name: 'piet',
        age: 36,
        address: 'Amsterdam',
        job: Role.Developer,
    },
    {
        name: 'alice',
        age: 26,
        address: 'Melbourne',
        job: Role.Marketer,
    },
    {
        name: 'jenny',
        age: 56,
        address: 'Napier',
        job: Role.Manager,
    },
    {
        name: 'neil',
        age: 60,
        address: 'Wellington',
        job: Role.Accountant,
    },
];

const Generics = () => {
    const [notes, setNotes] = useState('');

    const readmePath = require('./TypescriptNotes/Generics.md');

    fetch(readmePath)
        .then(response => response.text())
        .then(text => {
            setNotes(marked(text));
        });
    fetch(readmePath)
        .then(response => response.text())
        .then(text => {
            setNotes(marked(text));
        });

    function getPerson<T extends Person>(args: T): string {
        return `${args.name} is ${args.age} years of age. They reside in ${args.address}.`;
    }

    function getEmployeeJobTitle<T extends Employee>(employee: T): string {
        return Role[employee.job];
    }

    function getEmployeeInfo<T extends Employee>(employee: T): Employee {
        return employee;
    }

    const randomPerson = (() => {
        const idx: number = Math.floor(Math.random() * (people.length - 0)) + 0;

        return people[idx];
    })();

    return (
        <section>
            <p>{getPerson(randomPerson)}</p>
            <p>Job: {getEmployeeJobTitle(randomPerson)}</p>
            <hr/>
            <article dangerouslySetInnerHTML={{ __html: notes }}></article>
        </section>
    );
};

export default Generics;
