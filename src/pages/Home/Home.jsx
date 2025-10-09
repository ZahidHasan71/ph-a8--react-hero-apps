import React from 'react';
import Banner from '../../components/Banner/Banner';
import { Link } from 'react-router';
import AppCard from '../../components/AppCard/AppCard';
import useApps from '../../Hooks/useApps';

const Home = () => {
    const { apps, loading, error } = useApps();
    console.log(apps);

    const trendingProducts = apps.slice(0, 8);

    return (
        <div className='bg-base-200'>
            <Banner />

            {/* Trending Apps Section */}
            <div className='text-center py-10'>
                <h1 className='text-3xl font-bold'>Trending Apps</h1>
                <p className='text-stone-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className="sm:px-6 lg:px-40 py-6">
                {loading && <p className="text-center text-gray-500">Loading...</p>}
                {error && <p className="text-center text-red-500">Error loading apps: {error.message}</p>}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trendingProducts.map(appData => (
                        <AppCard key={appData.id} appData={appData} />
                    ))}
                </div>
            </div>

            {/* Optional: See More Button */}
            <div className='flex justify-center py-10'>
                <Link to="/appsPage" className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold py-2 px-8 rounded-md pointer'>
                    See More
                </Link>
            </div>
        </div>
    );
};

export default Home;