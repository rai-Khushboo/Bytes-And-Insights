import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa6"

const Footer = () => {
  return (
    <div className='bg-gray-900'>
        <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
            <div className='grid mb-8 lg:grid-cols-6'>
                <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Category</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-800'>News</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-800'>World</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-800'>Games</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-800'>References</a>
                            </li>
                        </ul>
                    </div>
                    {/* Next column */}
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Items</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-800'>Web</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-800'>eCommerce</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-800'>Business</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-800'>Entertainment</a>
                            </li>
                        </ul>
                    </div>
                    {/* Next column */}
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Cherry</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-800'>Media</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-800'>Brochure</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-800'>Non profit</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-800'>Education</a>
                            </li>
                        </ul>
                    </div>
                    {/* Next column */}
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Business</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-800'>Infopreneur</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-800'>Personal</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-800'>Wiki</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-blue-800'>Forum</a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Next column */}

                </div>
                {/* Subscription*/}
                <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                        <p className='font-medium tracking-wide text-gray-300 '>Subscribe for updates</p>
                        <form className='mt-4 flex flex-col md:flex-row'>
                            <input type="email" name='email' id='email' className='flex-grow w-full h-12 px-4 mb-3 transition duration-2 bg-white border border-gap-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 foucs:outline-none'/>
                            <button type='submit' className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-blue-600 focus:outline-none'>
                                Subscribe
                            </button>
                        </form>
                        <p className='mt-4 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugiat explicabo deleniti velit facilis unde, corporis repellat adipisci optio id perferendis quaerat maxime tenetur temporibus, ut, cupiditate mollitia obcaecati corrupti.</p>
                    </div>
            </div> 
            <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
                <p className='text-sm text-gray-600'>
                    © Copyright 2024 | All rights reserved
                </p>
                <div className='flex items-center mt-4 space-x-6 sm:mt-0'>
                    <a href="" className='text-gray-500 transition-all duration-300 hover:text-blue-600'><FaTwitter className='h-6 w-6'/></a>
                    <a href="" className='text-gray-500 transition-all duration-300 hover:text-blue-600'><FaInstagram className='h-6 w-6'/></a>
                    <a href="" className='text-gray-500 transition-all duration-300 hover:text-blue-600'><FaFacebook className='h-6 w-6'/></a>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
