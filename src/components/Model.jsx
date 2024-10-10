import React from 'react';

const Model = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
      <div className='modal-container'>
        <div className='bg-indigo-400 text-center p-5 h-96 lg:w-[500px] rounded shadow-md'>
        {/* model content */}
        <h2 className='text-xl font-semibold mt-6 mb-5 uppercase'>Please Login Your Credentials</h2>
        <form className='px-4'>
            {/* password */}
            <div className='mb-3'>
                <input type="name" name='password' id='password' placeholder='example@gmail.com' className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base fint-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md
    ' />
            </div>
            <div className='mb-3'>
                <input type="password" name='password' id='password' placeholder='Password' className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base fint-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md
    ' />
            </div>
            <div>
                <button className='hover:shadow-md rounded-md mt-3 bg-[#6464f1] hover:bg-pink-400 py-3 px-8 text-base font-semibold text-white outline-none'>Login</button>
            </div>
        </form>
        {/* model close */}
        <button onClick={onClose} className='bg-gray-400 hover:bg-gray-800 font-semibold py-2 px-8 rounded inline-flex items-center mt-6'>
            Close
        </button>
        </div>
      </div>
    </div>
  );
}

export default Model;
