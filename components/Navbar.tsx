import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useEffect, useState } from 'react';


const NavItem:FunctionComponent<{
    activeItem:string,
    setActiveItem:Function,
    name:string,
    route:string
}> = ({activeItem,name,route,setActiveItem}) =>{
    return(
        activeItem !== name ? (
            <Link href={route}>
                <a>
                    <span className='hover:text-blue-900' onClick={()=>setActiveItem(name)}>{name}</span>
                </a>
            </Link>
        ):null
    )
}

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('')
    const {pathname} = useRouter()
    useEffect(()=>{
        if (pathname === '/') setActiveItem('Resume')
        if (pathname === '/projects') setActiveItem('Projects')
    },[pathname])
  return (
    <div className='flex justify-between px-4 pb-3 mt-4 border-b-2 border-dark-700'>
      <span className='font-semibold text-white rounded-full px-7 bg-gradient-to-bl from-green-400 to-blue-500' style={{fontSize:'23px',}}>{activeItem}</span>
      <div className='flex px-2 space-x-4 text-blue-800 dark:text-yellow-300 ' style={{fontSize:'20px'}}>
          <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/' />
          <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/projects' />
      </div>
    </div>
  );
}

export default Navbar;
