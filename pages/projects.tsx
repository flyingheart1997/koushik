import React, { useState } from 'react';
import { myprojects } from '../data';
import ProjectCard from '../components/ProjectCard'
import ProjectNavbar from '../components/ProjectNavbar';
import { Category } from '../type';
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../animations';

const Projects = () => {
  const [projects, setProjects] = useState(myprojects);
  const [active, setActive] = useState("all");

  const [showDetails, setShowDetails] = useState<number | null>(null)

  const handleFilterCategory = (category: Category | "all") => {
    if(category === "all"){
      setProjects(myprojects)
      setActive(category)
      return;
    }
    else{
      const newArray = myprojects.filter((project)=>project.category.includes(category))
      setProjects(newArray)
      setActive(category)
      return;
    }
  };

  return (
    <motion.div variants={routeAnimation} initial='initial' animate='animate' exit='exit'
      className="px-5 mb-5 overflow-y-scroll text-xl bg-dark-500 dark:bg-black"
      style={{ height: "85vh" }}
    >
      <ProjectNavbar handleFilterCategory={handleFilterCategory} active={active} />
      <motion.div variants={stagger} className="relative grid grid-cols-12 gap-4 my-4">
        {projects.map((project) => (
          <motion.div
          variants={fadeInUp} 
            key={project.name}
            className="col-span-12 px-1 pt-1 pb-2 rounded-lg sm:col-span-6 lg:col-span-4 bg-dark-700"
          >
            <ProjectCard project={project} showDetails={showDetails} setShowDetails={setShowDetails} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
