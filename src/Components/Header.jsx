/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-scroll';
// import logo
// import Logo from '../assets/logo1.png';

const Header = () => {
  return <header className='pt-4'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='/'>
          <h1 className='text-[#ff56f6] '>SIYAM </h1> <span className='lg:ml-4'> AHMED </span>
          {/* <img className='w-20 h-20 ' src={Logo} alt=''/> */}
        </a>

        {/* button */}
        <Link to='contact'>
          <button className='btn btn-sm'>Work with me</button>
        </Link>

      </div>
    </div>
  </header>;
};

export default Header;
