import React from 'react';
import { FaGithub } from "react-icons/fa";
import Logo from '../../assets/logo.png'

const Navbar = () => {
    const links = <>
        <li><a className='font-semibold'>Home</a></li>
        <li><a className='font-semibold'>Apps</a></li>
        <li><a className='font-semibold'>Installation</a></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img src="" alt="" />
                        <img src={Logo} alt="" className='w-10' />
                        <span
                            className="font-bold"
                            style={{
                                background: 'linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            HERO.IO
                        </span>

                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn" href="https://github.com/hero-io/hero.io" style={{
                        background: 'linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1))',
                        color: 'white'
                    }}><FaGithub />Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;