import React, { FunctionComponent } from 'react';
import { ISkill } from '../type';
import {motion} from 'framer-motion'

const Bar:FunctionComponent<{data:ISkill}> = ({data:{Icon,level,levels,name}}) => {

  const variants = {
    initial:{
      width: 0
    },
    animate:{
      width: level,
      transition:{
        duration:0.9,
        type: 'spring',
        damping:5,
        stiffness:100,
      },
    },
  };

  return (
    <div className='my-1.5 xl:my-2 italic text-white dark:bg-dark-200 rounded-full bg-gray-200' style={{letterSpacing:'1px', fontWeight:'600', width: levels}}>
        <motion.div className="flex items-center px-2 py-0.5 rounded-full dark:opacity-75 opacity-90 bg-gradient-to-tr from-green-400 to-blue-500" 
        style={{width: level}}
        variants={variants}
        initial='initial'
        animate='animate'
        >
            <Icon className='mr-3 text-transparent rounded-full bg-gradient-to-r from-black to-blue-500'/>
            {name}
        </motion.div>
    </div>
  );
}

export default Bar;
