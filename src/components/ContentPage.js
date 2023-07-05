import React, { useState } from 'react';
import About from './pages/About';
import Experience from './pages/Experience';

export default function ContentPage() {
    const [page, setPage] = useState(<About />);

    return (
        <div>
            <div>
                {page}
            </div>
            <button onClick={() => setPage(<Experience />)}>
                Click me
            </button>
       </div>
       );
}