import React, { useEffect, useState } from 'react';
import { BsDownload } from 'react-icons/bs';
import { IoIosStar } from 'react-icons/io';

const Installation = () => {
    const [installApp, setInstallApp] = useState([]);

    useEffect(() => {
        const saveInstall = JSON.parse(localStorage.getItem('install'));
        if (saveInstall) setInstallApp(saveInstall);
    }, []);

    return (
        <div className="sm:px-6 lg:px-40 py-10 bg-gray-100">
            {/* Header */}
            <div className="text-center py-10">
                <h1 className="text-3xl font-bold text-blue-900">Your Installed Apps</h1>
                <p className="text-stone-500">Explore all trending apps on the market developed by us</p>
            </div>

            {/* Count & Sort */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold">Installed Apps: {installApp.length}</h1>
                <button className="btn btn-outline btn-sm">Sort</button>
            </div>

            {/* List View */}
            <div className="space-y-4">
                {installApp.map((app) => (
                    <div key={app.id} className="flex justify-between items-center bg-white shadow-sm p-4 rounded-lg">
                        {/* Left: Image + Info */}
                        <div className="flex items-center gap-4">
                            <img
                                src={app.image}
                                alt={app.title}
                                className="w-20 h-20 object-contain bg-gray-100 rounded-lg p-3"
                            />
                            <div>

                                <p className="text-xl font-bold ">{app.title}</p>
                                <div className="flex items-center gap-4 my-4">
                                    <p className='flex items-center gap-2   text-green-500 font-semibold'>
                                        <BsDownload /> {app.downloads}
                                    </p>
                                    <p className='flex items-center gap-2   text-orange-500 font-semibold'>
                                        <IoIosStar /> {app.ratingAvg}
                                    </p>
                                    <p className="text-sm text-gray-600">{app.size}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Uninstall Button */}
                        <button className="btn btn-sm bg-green-400 text-white">Uninstall</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Installation;