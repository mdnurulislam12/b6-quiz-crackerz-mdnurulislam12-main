import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='flex items-center justify-between ml-32 mr-32  bg-slate-400 p-3'>
            <h1 className='text-xl font-bold'>QuizNerd</h1>
            <nav className='header'>
                <ul className=' md:flex gap-8 text-white'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/statistics'>Statistics</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;