import React from 'react';
import { useParams } from 'react-router';
import useApps from '../../Hooks/useApps';
import { BsDownload } from 'react-icons/bs';
import { IoIosStar } from 'react-icons/io';
import { MdRateReview } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppDetails = () => {
    const { id } = useParams();
    const { apps, loading, error } = useApps();

    const app = apps.find(app => String(app.id) === id);

    if (loading) return <p className="text-center py-10">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error loading app.</p>;
    if (!app) return <p className="text-center text-stone-500">App not found.</p>;

    const { title, image, downloads, ratingAvg, description, companyName, reviews, ratings } = app;

    const ratingBreakdown = ratings.reduce((acc, item) => {
        const star = parseInt(item.name); // "1 star" → 1
        acc[star] = item.count;
        return acc;
    }, {});

    const totalRatings = Object.values(ratingBreakdown).reduce((a, b) => a + b, 0);

    const handleInstall = () => {
        const existingApps = JSON.parse(localStorage.getItem('install')) || [];
        const isDuplicate = existingApps.some((a) => a.id === app.id);

        if (isDuplicate) {
            toast.warn('Already Installed!');
            return;
        }

        const updatedApps = [...existingApps, app];
        localStorage.setItem('install', JSON.stringify(updatedApps));
        toast.success(`"${app.title}" installed successfully!`);
    };

    return (
        <div className="sm:px-6 lg:px-40 py-10 bg-gray-100">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row gap-10 mb-10">
                <div>
                    <img
                        src={image}
                        alt={title}
                        className="rounded-lg shadow-md w-[300px] h-[300px] bg-white p-5 object-contain"
                    />
                </div>
                <div>
                    <h1 className="text-4xl font-bold text-blue-900">{title}</h1>
                    <p className="text-gray-500 mt-2">
                        Company Name: <span className="font-semibold text-purple-700">{companyName}</span>
                    </p>
                    <hr className="w-full border-t border-gray-300 my-4" />

                    <div className="flex flex-wrap justify-center gap-6 mb-4 py-6">
                        <div className="flex flex-col justify-center items-center gap-2">
                            <BsDownload className="text-green-500 font-bold text-xl" />
                            <p>Downloads</p>
                            <h1 className="text-2xl font-bold">{downloads}</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <IoIosStar className="text-orange-500 font-bold text-xl" />
                            <p>Rating</p>
                            <h1 className="text-2xl font-bold">{ratingAvg}</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <MdRateReview className="text-purple-600 text-xl" />
                            <p>Reviews</p>
                            <h1 className="text-2xl font-bold">{reviews}</h1>
                        </div>
                    </div>

                    <button
                        onClick={handleInstall}
                        className="btn bg-green-500 text-white font-semibold px-4 py-2 rounded-md hover:scale-105 transition"
                    >
                        Install Now (200 MB)
                    </button>
                </div>
            </div>

            <hr className="w-full border-t border-gray-300 my-6" />

            {/* Ratings Breakdown */}
            <div className="mb-10">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Ratings</h2>
                <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map(star => (
                        <div key={star} className="flex items-center gap-4">
                            <span className="w-10 text-right">{star} ★</span>
                            <div className="bg-orange-300 h-4 rounded-md w-full">
                                <div
                                    className="bg-orange-500 h-4 rounded-md"
                                    style={{
                                        width: `${(ratingBreakdown?.[star] || 0) / totalRatings * 100}%`
                                    }}
                                ></div>
                            </div>
                            <span className="w-16 text-left">{ratingBreakdown?.[star] || 0}</span>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="w-full border-t border-gray-300 my-6" />

            {/* Description */}
            <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>

            {/* Toast Container */}
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default AppDetails;