import App from './App';
import React from 'react';
import { render } from '@testing-library/react';

test('renders Typescript practise heading', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Typescript practise/i);

    expect(linkElement).toBeInTheDocument();
});
