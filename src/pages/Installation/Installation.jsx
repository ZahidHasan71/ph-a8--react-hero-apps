import React, { useEffect, useState } from 'react';
import { BsDownload } from 'react-icons/bs';
import { IoIosArrowDown, IoIosStar } from 'react-icons/io';
import NoData from '../../assets/App-Error.png';


const Installation = () => {
    const [installApp, setInstallApp] = useState([]);
    const [sortOrder, setSortOrder] = useState('None');

    useEffect(() => {
        const saveInstall = JSON.parse(localStorage.getItem('install'));
        if (saveInstall) setInstallApp(saveInstall);
    }, []);

    if (installApp.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center bg-gray-50">
                <img src={NoData} alt="No Data" className="w-60 mb-6" />
                <h1 className="text-4xl md:text-5xl font-bold text-blue-900">Oops, nothing installed yet!</h1>
                <p className="text-stone-500 py-4 max-w-xl">
                    You haven't installed any apps yet. Please explore the app store and install your favorites.
                </p>
                <button
                    onClick={() => window.history.back()}
                    className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold py-2 px-8 rounded-md hover:scale-105 transition"
                >
                    Go Back
                </button>
            </div>
        );
    }

    const sortedItem = () => {
        if (sortOrder === 'Size') {
            return [...installApp].sort((a, b) => Number(a.size) - Number(b.size));
        } else if (sortOrder === 'Low to High') {
            return [...installApp].sort((a, b) => Number(a.downloads) - Number(b.downloads));
        } else if (sortOrder === 'High to Low') {
            return [...installApp].sort((a, b) => Number(b.downloads) - Number(a.downloads));
        } else {
            return installApp;
        }
    };

    const handleRemove = (id, title) => {
        const existingApps = JSON.parse(localStorage.getItem('install')) || [];
        const updatedApps = existingApps.filter(app => app.id !== id);
        localStorage.setItem('install', JSON.stringify(updatedApps));
        setInstallApp(updatedApps);
        alert(`${title} removed successfully!`);
    };

    return (
        <div className="sm:px-6 lg:px-40 py-10 bg-gray-100 space-y-full">
            {/* Header */}
            <div className="text-center py-10">
                <h1 className="text-3xl font-bold text-blue-900">Your Installed Apps</h1>
                <p className="text-stone-500">Explore all trending apps on the market developed by us</p>
            </div>

            {/* Count & Sort */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold">Installed Apps: {sortedItem().length}</h1>
                <label className="btn btn-outline btn-sm flex items-center gap-2">
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="bg-transparent outline-none"
                    >
                        <option value="None">None</option>
                        <option value="Size">Sort by Size</option>
                        <option value="Low to High">Downloads: Low → High</option>
                        <option value="High to Low">Downloads: High → Low</option>
                    </select>
                </label>
            </div>

            {/* List View */}
            <div className="space-y-4">
                {sortedItem().map((app) => (
                    <div key={app.id} className="flex justify-between items-center bg-white shadow-sm p-4 rounded-lg">
                        {/* Left: Image + Info */}
                        <div className="flex items-center gap-4">
                            <img
                                src={app.image}
                                alt={app.title}
                                className="w-20 h-20 object-contain bg-gray-100 rounded-lg p-3"
                            />
                            <div>
                                <p className="text-xl font-bold">{app.title}</p>
                                <div className="flex items-center gap-4 my-4">
                                    <p className="flex items-center gap-2 text-green-500 font-semibold">
                                        <BsDownload /> {app.downloads}
                                    </p>
                                    <p className="flex items-center gap-2 text-orange-500 font-semibold">
                                        <IoIosStar /> {app.ratingAvg}
                                    </p>
                                    <p className="text-sm text-gray-600">{app.size} MB</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Uninstall Button */}
                        <button
                            onClick={() => handleRemove(app.id, app.title)}
                            className="btn btn-sm bg-green-400 text-white"
                        >
                            Uninstall
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Installation;