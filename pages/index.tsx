import React from 'react'
import Bar from '../components/Bar'
import { languages } from '../data'
import { fadeInRight, fadeInUp, routeAnimation, stagger } from '../animations';
import { motion } from 'framer-motion'


const index = () => {
  return (
    <motion.div variants={routeAnimation} initial='initial' animate='animate' exit='exit' className='px-5 mb-0 overflow-y-scroll tracking-wide text-black lg:mb-0' style={{height:'85vh'}}>
      <motion.div variants={stagger}>
      <motion.div variants={fadeInRight}>
        <h4 className='pb-2 my-1 font-bold text-transparent dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-yellow-300 dark:to-blue-400 bg-clip-text bg-gradient-to-b from-red-600 to-blue-600' style={{fontSize:'25px'}}>Education</h4>
        <div className='ml-5'>
          <h5 className='pb-2 dark:text-slate-200' style={{fontSize:'20px',lineHeight:'1.2rem'}}>Computer Science and Engineering.</h5>
          <p className='pb-2 dark:text-slate-200' style={{fontSize:'18px', lineHeight:'1.2rem'}}>Calcutta Institute of Technology(2017-2020).</p>
          {/* <p className='tracking-wide text-dark-100 dark:text-slate-400' style={{fontSize:'17px',lineHeight:'1.2rem',fontWeight:'600'}}>I have completed B.Tech in Computer Science Engineering from Calcutta Institute of Technology(2020). I have Learned different Programming Languages...</p> */}
          <p className='tracking-wide text-dark-100 dark:text-slate-400' style={{fontSize:'17px',lineHeight:'1.2rem',fontWeight:'600'}}>
            B.Tech Computer Science and Engineering, Graduate with a 73.3% score in academics. Have knowledge in Python, HTML5, CSS, JavaScript, MongoDB, Web API, React.js, React-Native, Next.js. Ability to design and maintain application phases.</p>
        </div>
      </motion.div>
      <motion.div variants={fadeInUp} className='pt-0 lg:pt-2'>
        <h4 className='pb-3 mt-2 ml-1 font-bold text-transparent dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-tl dark:from-yellow-300 dark:to-blue-300 bg-clip-text bg-gradient-to-b from-red-600 to-blue-600' style={{fontSize:'25px',fontWeight:'900'}}>Language & Frameworks</h4>
        <div className='ml-5'>
          {
            languages.map(language=><Bar data={language} key={language.name}/>)
          }
        </div>
      </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default index




// git add .
// git commit -m '(comments)'
// git push -u origin main
