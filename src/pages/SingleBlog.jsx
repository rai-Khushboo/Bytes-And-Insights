import React from 'react'
import { useLoaderData } from 'react-router-dom'
import {FaUser} from 'react-icons/fa6';
import { FaClock } from 'react-icons/fa6';


function SingleBlog() {
    const data = useLoaderData();
    const {title, about , image, category, author , published_date , content } = data[4];
  return (
    <div>
        <div className='py-40 bg-black text-center text-white px-4'>
            <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single blog Page</h2>
        </div>
        {/* blog details */}
        <div className='max-w-7xl ms-auto my-12 flex flex-col'>
            <div className='lg:w-3/4 mx-auto'>
                <img src={image} alt="" className='w-full mx-auto rounded'/>
            </div>
            <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-600 cursor-pointer'>{title}</h2>
            <p className='mb-3 text-gray-700'><FaUser className='inline-flex items-center'/> {author} | {published_date}</p>
            <p className='mb-3 text-gray-700'><FaClock className='inline-flex items-center'/> {category}</p>
            <p className='text-base text-gray-600 mb-6'>{about}</p>
            <div className='text-base text-gray-600 mb-6'>
                <p>{content}</p>
            </div>
            {/* adding some paragraphs */}
            <div className='text-base text-gray-600 mb-6'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eius vitae magnam optio, ea explicabo exercitationem incidunt! Quo quisquam, mollitia aut commodi, obcaecati alias rem, ad doloremque ut eaque quidem!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, ut. Adipisci, eveniet qui! Id autem doloremque ullam voluptas molestiae, facere dolore ex aliquid repellat cumque exercitationem quibusdam. Quod, odit dicta.
                Consectetur voluptate impedit praesentium nulla architecto labore, similique quam repellendus quidem consequatur, neque rerum nihil et cum eius numquam provident totam. Animi sunt eveniet ratione reiciendis similique cum unde temporibus?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime distinctio ea ipsum quidem, quae natus est necessitatibus, tenetur autem excepturi, eos enim accusamus odio repellat a. Amet itaque praesentium facere!</p>
            </div>
        </div>
    </div>
  )
}

export default SingleBlog
