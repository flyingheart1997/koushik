import Image from "next/image";
import React, {useState} from "react";
import { AiFillGithub,AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import {GiTie} from 'react-icons/gi'
import { useTheme } from "next-themes";
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../animations';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Sidebar = () => {

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [openResume, setOpenResume] = useState(false);

  const onOpenResume = () => setOpenResume(true);
  const onCloseResume = () => setOpenResume(false);
  
  const [resume, setResume] = useState(false)
  const {theme,setTheme} = useTheme()
  const [show,setShow] = useState(false)
  const changeTheme = () =>{
    setTheme(theme === 'light'? "dark" : 'light')
    setShow(!show)
  }


  return (
    <div>
      <Image
        src="/images/koushik.jpg"  
        alt="avatar"
        className="rounded-full cursor-pointer"
        width='150'
        height='150'
        layout="intrinsic" 
        onClick={onOpenModal}
        />
        <Modal open={open} onClose={onCloseModal} center closeIcon>
          <Image
            src="/images/koushik.jpg"
            alt="avatar"
            width='550'
            height='450'
            onClick={onCloseModal}
            className='cursor-pointer'
          />
        </Modal>
      <h3 className="my-1 text-4xl font-black tracking-wider font-playfair " style={{letterSpacing:'.1px',}}>
        <span className="dark:text-transparent bg-clip-text bg-gradient-to-bl from-yellow-400 to-blue-400">Koushik Mondal</span> 
      </h3>
      <p className="px-2 py-1 my-3 font-semibold tracking-wider bg-gray-200 rounded-full dark:bg-dark-200">Software Developer</p>
      <motion.div variants={routeAnimation} >
        <a onClick={onOpenResume} className="flex items-center justify-center px-2 py-1 my-3 text-base tracking-wider bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200" style={{fontSize:'18px',}} ><GiTie className="w-6 h-5 text-green dark:text-yellow-200"/>Download Resume</a>
          <Modal open={openResume} onClose={onCloseResume} center closeIcon>
            <div className="p-2 bg-black cursor-pointer md:p-4" onClick={()=>onCloseResume()}>
              <motion.div variants={fadeInUp} className='flex space-x-4 overflow-x-scroll shadow-lg cursor-pointer md:space-x-12 hover:scale-100 shadow-black'>
                    <a href="/images/resume.pdf" download='name' className='shadow-lg hover:scale-105 shadow-black'>
                        <Image
                            src='/images/resume.png'
                            alt='resume'
                            width={170}
                            height={250}
                        />
                    </a>
                    <a href="/images/resume1.pdf" download='koushik'>
                        <Image
                            src='/images/resume1.png'
                            alt='resume'
                            width={170}
                            height={250}
                        />
                    </a>
                </motion.div>
            </div>
          </Modal>
      </motion.div>
      {/* social icon */}
      <div className="flex items-center justify-center gap-10 font-semibold lg:gap-4 dark:text-red-200">
          <a className="flex items-center justify-start pl-2 gap-1 px-3 py-0.5 my-2 tracking-wider dark:bg-dark-700 rounded-full bg-gray-200" href="https://github.com/flyingheart1997"><AiFillGithub className="rounded-full dark:text-yellow-200 text-green w-7 h-7"/>Github </a>
          <a className="flex items-center justify-center pl-2 gap-1 px-3 py-0.5 my-2 tracking-wider dark:bg-dark-700 rounded-full bg-gray-200" href="https://www.linkedin.com/in/koushik-mondal-0a299723b/"><AiFillLinkedin className="rounded-full dark:text-yellow-200 text-green w-7 h-7"/>LinkedIn</a>
      </div>
      {/* address */}
      <div className="py-4 my-3 font-semibold tracking-wider bg-gray-200 rounded-md dark:bg-dark-200" style={{marginLeft:"0rem", marginRight:'0rem'}}> 
        <div className="flex items-center justify-center space-x-2 " style={{marginLeft:"-10px"}}>
          <GoLocation className="text-green-500"/>
          <span>Kolkata,India</span>
        </div>
        <p className="my-1 ">koushikm718@gmail.com</p>
        <p className="my-1 text-[17px]"><a href={`tel:${7003885674}`}>7003885674</a> / <a href={`tel:${8391969123}`}>8391969123</a></p>
      </div>
      <button onClick={()=> window.open('mailto:koushikm718@gmail.com')} className="w-8/12 py-2 my-1 font-semibold tracking-wider text-white rounded-full bg-gradient-to-r from-green-500 to-blue-500">Email Me</button>
      <button onClick={changeTheme} className="w-8/12 py-2 my-1 font-semibold tracking-wider text-white rounded-full bg-gradient-to-bl from-green-600 to-blue-500">{show ? "Dark UI":"Light UI" }</button>
    </div>
  );
};

export default Sidebar


//href="" download='name'
