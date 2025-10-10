import React from 'react';
import { BsDownload } from 'react-icons/bs';
import { IoIosStar } from 'react-icons/io';
import { Link } from 'react-router';

const AppCard = ({ appData }) => {
    const { image, title, downloads, ratingAvg, id } = appData;
    return (
        <div>
            <Link to={`/app/${id}`} className="card bg-base-100 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="card-image flex justify-center p-7">
                    <img src={image} alt={title} className='w-[300px] h-[300px] bg-gray-200 p-10 rounded-lg' />
                </div>
                <div className="card-body px-10 pt-0">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-between">
                        <button className='flex items-center gap-2 bg-gray-100 py-2 px-3 rounded-sm text-green-500 font-semibold'>
                            <BsDownload /> {downloads}
                        </button>
                        <button className='flex items-center gap-2 bg-orange-100 py-2 px-3 rounded-sm text-orange-500 font-semibold'>
                            <IoIosStar /> {ratingAvg}
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default AppCard;