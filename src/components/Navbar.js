import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg py-2'>
            <Link to='/' className='navbar-brand ml-5'>
                <h1>Ward Ruman</h1>
            </Link>
        </nav>
    )
};

export default Navbar;