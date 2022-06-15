import Image from 'next/image';
import React, { FunctionComponent, useState } from 'react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import {MdClose} from 'react-icons/md'
import { IProject } from '../type';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../animations';

const ProjectCard:FunctionComponent<{project:IProject, showDetails:null | number, setShowDetails:(id:number | null)=>void;}> = ({project:{category,deployed_url,description,github_url,image_path,key_tags,name,id},setShowDetails,showDetails}) => {
  
  
  return (
    <div className='items-center justify-center'>
      <Image
        src={image_path}
        alt={name}
        width='300px'
        height='200px'
        layout='responsive'
        className="rounded-md cursor-pointer"
        onClick={()=>setShowDetails(id)}
      />
      <p className="items-center justify-center px-4 my-2 font-semibold tracking-wider text-center truncate text-slate-300" style={{fontSize:'15px'}}>{name}</p>

    {showDetails === id && (
      <motion.div variants={stagger} initial='initial' animate='animate' className="relative left-0 z-10 grid w-full rounded-md h-autotext-white sm:top-0 sm:absolute sm:grid-cols-2 md:gap-x-4 xl:gap-x-12 gap-x-0 bg-dark-200">
        <motion.div variants={fadeInUp} className='mx-5 my-9 '>
          <a href={deployed_url}>
          <Image
            src={image_path}
            alt={name}
            width='300px'
            height='150px'
            layout='responsive'
            className="rounded-md cursor-pointer"
          />
          </a>

          <motion.div variants={fadeInUp} className='flex flex-row items-center justify-center gap-3 pt-5 kou lg:gap-8'>
            <a href={github_url} className='flex flex-row gap-1 px-3 bg-gray-700 rounded-full py-0.5'>
              <AiFillGithub className='mt-1 text-yellow-100'/> <span className='koushik text-slate-200 '>Github</span>
            </a>
            <a href={deployed_url} className='flex flex-row gap-1 px-3 bg-gray-700 rounded-full py-0.5'>
              <AiFillProject className='mt-1 text-yellow-100'/> <span className='koushik text-slate-200 '>Project</span>
            </a>
          </motion.div>
        </motion.div>
        <motion.div variants={fadeInUp} className='mx-5 sm:my-8 sm:mx-0'>
          <h2 className='font-extrabold text-red-400 dark:text-transparent bg-clip-text bg-gradient-to-bl from-yellow-600 to-blue-300' style={{fontSize:'20px'}}>{name}</h2>
          <h3 className='mt-3 mr-3 font-semibold text-slate-300' style={{fontSize:'16px',letterSpacing:'1px',lineHeight:'1.2rem'}}>{description}</h3>
          <motion.div variants={fadeInUp} className='flex-wrap space-x-1.5 text-sm my-5 sm:my-0 sm:mt-14' style={{letterSpacing:'1px'}}>
            {
              key_tags.map(tag => <span className='px-2 py-1 rounded-sm my1 text-slate-400 bg-dark-700' style={{lineHeight:'2rem'}} key={tag}>{tag} </span>)
            }
          </motion.div>
        </motion.div>
        <button onClick={()=>setShowDetails(null)} className='absolute text-gray-400 rounded-full top-2 right-2'>
          <MdClose size={25}/>
        </button>
      </motion.div>
    )}
    </div>
  );
}

export default ProjectCard;


