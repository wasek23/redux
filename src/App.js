import React from 'react';
import './App.css';
import Shop from './Components/Shop';
import Cart from './Components/Cart';

function App() {
    return (
        <div className="page">
            <Cart></Cart>
            <Shop></Shop>
        </div>
    );
}

export default App;
