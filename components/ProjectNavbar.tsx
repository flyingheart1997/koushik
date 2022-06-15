import React, { FunctionComponent } from 'react';
import { Category } from '../type';

export const NavItems:FunctionComponent<{value: Category | 'all', handleFilterCategory:Function, active:string}> = ({value,handleFilterCategory,active}) =>{

  let className = 'hover:text-green'
  if(active === value)
    className += " text-yellow-300"
    return (
        <li className={className} onClick={()=>handleFilterCategory(value)}>
          {value}
        </li>
    );
};


const ProjectNavbar:FunctionComponent<{handleFilterCategory:Function, active:string}> = (props) => {
  return (
    <div className='flex flex-row px-3 my-5 space-x-3 overflow-x-scroll tracking-wide list-none cursor-pointer md:my-7 lg:my-5 text-slate-300'>
      <NavItems value='all' {...props}/>
      <NavItems value='python' {...props}/>
      <NavItems value='react' {...props}/>
      <NavItems value='next' {...props}/>
      <NavItems value='dataanalysis' {...props}/>
    </div>
  );
}

export default ProjectNavbar;
