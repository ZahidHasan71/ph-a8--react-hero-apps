import React from 'react';
import useApps from '../../Hooks/useApps';
import AppCard from '../../components/AppCard/AppCard';
import { IoSearchOutline } from "react-icons/io5";
import { useState } from 'react';


const AppsPage = () => {
    const { apps } = useApps();
    const [search, setSearch] = useState('');
    const term = search.trim().toLowerCase();
    const searchedApps = term
        ? apps.filter(app =>
            app?.title?.toLowerCase().includes(term)
        )
        : apps;

    console.log(searchedApps);

    return (
        <div>
            <div className='text-center py-15 '>
                <h1 className='text-3xl font-bold'>Our All Applications</h1>
                <p className='text-stone-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="sm:px-6 lg:px-40 py-6">
                <div className="flex justify-between items-center">
                    <h1 className='text-xl font-bold pb-10'>({searchedApps.length}) Apps Found </h1>
                    <label className="input">
                        <IoSearchOutline />
                        <input onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            type="search" className="grow"
                            placeholder="Search" />
                    </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {searchedApps.map(appData => (
                        <AppCard key={appData.id} appData={appData} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppsPage;