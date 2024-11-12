import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const menuRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setNav(false);
    }
  };

  useEffect(() => {
    if (nav) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [nav]);

  return (
    <div className='sticky top-0 z-50 bg-black shadow-lg'>
      <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT</h1>
        <ul className='hidden md:flex'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Company</li>
          <li className='p-4'>Resources</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>
        <div
          ref={menuRef}
          className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'}
        >
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT</h1>
          <ul className='p-4 uppercase'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4 border-b border-gray-600'>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
