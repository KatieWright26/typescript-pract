import { Link } from 'react-router-dom';
import React from 'react';

const Navigation = () => (
    <section>
        <article>
            <nav>
                <Link to="/twitter">Tweets</Link> |
                <Link to="/select">Select</Link> |
                <Link to="/generics">Generics</Link> |
                <Link to="/object-design-notes">Object Design Notes</Link> |
                <Link to="/unknown-type">Unknown Type</Link> |

            </nav>
        </article>
        <hr/>
    </section>
);

export default Navigation;
