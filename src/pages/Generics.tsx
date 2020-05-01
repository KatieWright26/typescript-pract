/* eslint-disable max-lines-per-function */
import React from 'react';

enum Role {
    Developer,
    Marketer,
    Accountant,
    Manager
}

const Generics = () => {
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

    function getPerson<T extends Person>(args: T): string {
        return `${args.name} is ${args.age} years of age. They reside in ${args.address}.`;
    }

    function getEmployeeJobTitle<T extends Employee>(employee: T): string {
        return Role[employee.job];
    }

    function getEmployeeInfo<T extends Employee>(employee: T): Employee {
        return employee;
    }

    /*
     * Function getEmployer<T extends Employer>(args: T): Employer {
     *     return args.employees;
     * }
     */

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

    const randomPerson = (() => {
        const idx: number = Math.floor(Math.random() * (people.length - 0)) + 0;

        return people[idx];
    })();

    return (
        <>
            <p>{getPerson(randomPerson)}</p>
            <p>Job: {getEmployeeJobTitle(randomPerson)}</p>

        </>
    );
};

export default Generics;
