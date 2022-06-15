
export const fadeInUp = {
    initial:{
      opacity: 0,
      y: 190,
    },
    animate:{
        opacity: 1,
        y: 0,
        transition:{
            duration:0.8,
            type: 'spring',
            damping:11,
            stiffness:100,
            ease: 'easeInOut'
        }
    },
};

export const fadeInRight = {
    initial:{
      opacity: 0,
      x: 1000,
    },
    animate:{
        opacity: 1,
        x: 0,
        transition:{
            duration:0.8,
            type: 'spring',
            damping:11,
            stiffness:100,
            ease: 'easeInOut'
        }
    },
};

export const stagger = {
    initial:{
    },
    animate:{
        transition:{
            staggerChildren: 0.4,
        }
    },
};

export const routeAnimation = {
    initial:{
        opacity: 0,
    },
    animate:{
        opacity:1,
        transition:{
            delayChildren: 0.2,
            duration: 0.6,
            ease:'easeInOut'
        }
    },
  };