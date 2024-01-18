import React from 'react';
import {Outlet, NavLink} from 'react-router-dom';

const Layout = () => {
    return (
        <div >
            <nav >
                <ul className='nav'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="mailto:thatchinkumarsaravanan@gmail.com">Contact</NavLink>
                </ul>
            </nav>

            <Outlet/>
        </div>
        
    );
};

export default Layout;