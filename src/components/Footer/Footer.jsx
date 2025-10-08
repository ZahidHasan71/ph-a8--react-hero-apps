import React from 'react';
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
                <aside>
                    <img src={Logo} alt="" className='w-15' />
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
                    <p>Copyright © 2025 - All right reserved</p>
                </aside>
                <nav>
                    <h6 className="footer-title text-[#632EE3]" >Services</h6>
                    <a className="link link-hover">Products</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-[#632EE3]">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-[#632EE3]">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;