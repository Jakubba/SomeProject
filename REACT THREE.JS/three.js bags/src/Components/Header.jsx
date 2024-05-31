import React, { useState } from 'react';
import logo from './../assets/images/logo_disney.png';
import { HiHome, HiStar, HiPlayCircle, HiMagnifyingGlass, HiTv } from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import HeaderItem from './HeaderItem';

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: 'HOME',
      icon: HiHome,
    },
    {
      name: 'SEARCH',
      icon: HiMagnifyingGlass,
    },
    {
      name: 'WATCHLIST',
      icon: HiStar,
    },
    {
      name: 'ORIGINALS',
      icon: HiPlayCircle,
    },
    {
      name: 'MOVIES',
      icon: HiTv,
    },
    {
      name: 'SERIES',
      icon: HiPlus,
    },
    {
      name: 'MORE',
      icon: HiDotsVertical,
    },
  ];
  return (
    <div className='flex items-center justify-between p-5'>
      <div className='flex items-center gap-8'>
        <img
          src={logo}
          className='w-[80px] md:w-[115px] object-cover'
          alt='Disney Logo'
        />
        <div className='hidden md:flex gap-8'>
          {menu.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className='flex md:hidden gap-8'>
          {menu.slice(0, 3).map((item, index) => (
            <HeaderItem key={index} name={''} Icon={item.icon} />
          ))}
          <div className='md:hidden' onClick={() => setToggle(!toggle)}>
            <HeaderItem name={''} Icon={HiDotsVertical} />
            {toggle && (
              <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                {menu.slice(3).map((item, index) => (
                  <HeaderItem key={index} name={item.name} Icon={item.icon} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <img src='' alt='' className='w-[40px] rounded-full' />{' '}
    </div>
  );
}

export default Header;
