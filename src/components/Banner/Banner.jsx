import React from 'react';
import PlayerStore from '../../assets/playSore.png'
import AppStore from '../../assets/appStore.png'
import HeroImg from '../../assets/hero.png'

const Banner = () => {
    return (
        <div>
            <div className="">
                <div className="flex justify-center text-center py-20">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold">We Build <br />
                            <span className="text-[#632EE3]"> Productive</span> Apps</h1>
                        <p className="py-6">
                            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                        <div className="flex justify-center gap-4">
                            <button className="btn btn-outline border border-gray-300"> <img className='w-6' src={PlayerStore} alt="" />Google Play</button>
                            <button className="btn btn-outline border border-gray-300"> <img className='w-6' src={AppStore} alt="" />App Store</button>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto max-w-xl">
                    <img src={HeroImg} className="" />
                </div>
                <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4">
                    <h1 className="text-2xl md:text-3xl font-bold pt-10 text-center">
                        Trusted by Millions, Built for You
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center py-10">
                        <div className="stat">
                            <div className="stat-title text-white text-lg">Total Downloads</div>
                            <div className="text-4xl md:text-6xl font-bold py-4">29.6M</div>
                            <div className="text-sm">21% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title text-white text-lg">Total Reviews</div>
                            <div className="text-4xl md:text-6xl font-bold py-4">906K</div>
                            <div className="text-sm">46% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title text-white text-lg">Active Apps</div>
                            <div className="text-4xl md:text-6xl font-bold py-4">132+</div>
                            <div className="text-sm">31 more will Launch</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;