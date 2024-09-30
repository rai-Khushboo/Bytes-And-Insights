import React from 'react';
import {Link} from 'react-router-dom';
import {FaUser} from 'react-icons/fa'
// import nature from '../assets/nature.jpg'
const BlogCards = ({ blogs }) => {
    const filteredBlogs = blogs;

    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
            {
                filteredBlogs.map((blog) =>
                    <Link key={blog.id} className='p-5 shadow-lg rounded cursor-pointer'>
                        <div>
                        <img src='https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="image" className='w-full'/>
                        </div>
                        <h3 className='mt-4  mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h3>
                        <p className='mb-2 text-sm text-gray-500'>< FaUser className='inline-flex items-center mr-2'/>{blog.author}</p>
                        <p className='text-sm text-gray-500'>Published:{blog.published.date}</p>
                    </Link>
                )
            }
        </div>
    );
}

export default BlogCards;
