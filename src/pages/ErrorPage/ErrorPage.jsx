import React from 'react';
import Error404 from '../../assets/error-404.png'
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';


const ErrorPage = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col items-center justify-center py-13'>
                <img src={Error404} alt="" />
                <h1 className='text-5xl font-bold'>Oops, page not found!</h1>
                <p className='text-stone-500 py-5'>The page you are looking for is not available.</p>
                <button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold py-2 px-8 rounded-md'>Go Back!</button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;