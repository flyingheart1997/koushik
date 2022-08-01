import { IProject, ISkill } from "./type";
import { BsFillCircleFill } from 'react-icons/bs'

export const languages:ISkill[]=[
    {
        Icon: BsFillCircleFill,
        name: 'Python',
        level: '90%',
        levels: '100%'
    },
    {
        Icon: BsFillCircleFill,
        name: 'Java Script',
        level: '85%',
        levels: '100%'
    },
    {
        Icon: BsFillCircleFill,
        name: 'React.js',
        level: '75%',
        levels: '100%'
    },
    {
        Icon: BsFillCircleFill,
        name: 'Next.js',
        level: '70%',
        levels: '100%'
    },
    {
        Icon: BsFillCircleFill,
        name: 'Mongo DB',
        level: '65%',
        levels: '100%'
    },
    {
        Icon: BsFillCircleFill,
        name: 'GitHub',
        level: '80%',
        levels: '100%'
    },
    {
        Icon: BsFillCircleFill,
        name: 'Html',
        level: '85%',
        levels: '100%'
    },
    {
        Icon: BsFillCircleFill,
        name: 'Tailwind CSS',
        level: '90%',
        levels: '100%'
    },
    
];

export const myprojects:IProject[] = [
    {
        id: 1,
        name: 'PYTHON_PROJECTS',
        description: 'All Python Programs or Projects',
        image_path: '/images/python.png',
        deployed_url: 'https://github.com/flyingheart1997/python_programs',
        github_url: 'https://github.com/flyingheart1997/python_programs',
        category: ['python'],
        key_tags: ['Python','Tickenter']
    },
    {
        id: 2,
        name: 'MY_GYM',
        description: 'This site shows all the popular  Exercies moves and related Videos, Improve your memory and brain function.Protect against many chronic diseases. Lower blood pressure and improve heart health. Improve your quality of sleep.',
        image_path: '/images/my_gym.png',
        deployed_url: '',
        github_url: 'https://github.com/flyingheart1997',
        category: ['react'],
        key_tags: ['React','Material UI','API']
    },
    {
        id: 3,
        name: 'M_TUBES',
        description: 'This site shows all the popular  youtube videos, movies, trailers, shorts, songs, commedy, etc...',
        image_path: '/images/m_tubes.png',
        deployed_url: 'https://mtubes.netlify.app',
        github_url: 'https://github.com/flyingheart1997/m_Tube',
        category: ['react'],
        key_tags: ['React','Material UI','API']
    },
    {
        id: 4,
        name: 'M_TRAILER',
        description: 'This site shows all the popular movies trailers. Trailers consist of a series of selected shots from the film being advertised. Since the purpose of the trailer is to attract an audience to the film.',
        image_path: '/images/m_trailer.png',
        deployed_url: 'https://mtrailer.netlify.app',
        github_url: 'https://github.com/flyingheart1997/MTrailer',
        category: ['react'],
        key_tags: ['React','Material UI','API']
    },
    {
        id: 5,
        name: 'M_TUNES',
        description: 'This website is a digital music service that gives you access to millions of songs. Basic functions such as playing music, but you can also choose to upgrade to Spotify Premium.',
        image_path: '/images/m_tunes.png',
        deployed_url: 'https://m-tunes.vercel.app',
        github_url: 'https://github.com/flyingheart1997/mTunes',
        category: ['next'],
        key_tags: ['Next','Tailwind CSS','API']
    },
    {
        id: 6,
        name: 'TRAVEL ADVISOR',
        description: 'This app shows all Resturents, Hotels, Attractions near by you around the world',
        image_path: '/images/travel.png',
        deployed_url: 'https://localtraveladvisor.netlify.app/',
        github_url: 'https://github.com/flyingheart1997/travelAdvisor',
        category: ['react'],
        key_tags: ['React','API','Material UI']
    },
    
    {
        id: 7,
        name: 'PHOTO HUB',
        description: 'This app shows photos, also can download & upload photos',
        image_path: '/images/photo_hub.png',
        deployed_url: 'https://photo-hub.netlify.app/',
        github_url: 'https://github.com/flyingheart1997/PhotoHub',
        category: ['react'],
        key_tags: ['React','Sanity','Tailwind CSS']
    },
    {
        id: 8,
        name: 'HEART FALURE ANALYSIS',
        description: 'This page shows Exploratory Data Analysis of Heart Falure Patients',
        image_path: '/images/heart.png',
        deployed_url: 'https://jovian.ai/flyingmyheart1997/heart-failure-analysis',
        github_url: 'https://jovian.ai/flyingmyheart1997/heart-failure-analysis',
        category: ['dataanalysis'],
        key_tags: ['Python','NumPy','Pandas', 'Seaborn', 'Matplotlib']
    },
    
];
