import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; // Blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch('/blog.json'); // Fetch from public folder
            if (!response.ok) {
                console.error('Failed to fetch blogs:', response.statusText);
                return;
            }
            const data = await response.json();
            setBlogs(data);
        };

        fetchBlogs();
    }, []); // Empty dependency array to fetch only once on mount

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset to first page
        setActiveCategory(category);
    };

    return (
        <div>
            {/* Category section */}
            <div className='mb-4'>
                {/* Add category buttons or links here */}
                <button onClick={() => handleCategoryChange(null)}>All Categories</button>
                {/* Add more category buttons as needed */}
            </div>

            {/* Blog cards section */}
            <div>
                <BlogCards 
                    blogs={blogs} 
                    currentPage={currentPage} 
                    selectedCategory={selectedCategory} 
                    pageSize={pageSize} 
                />
            </div>
            
            {/* Pagination section */}
            <div className='flex justify-center mt-4'>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <span className='mx-2'>{currentPage}</span>
                <button onClick={() => handlePageChange(currentPage + 1)}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default BlogPage;
