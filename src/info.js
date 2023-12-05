import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
  }from 'react-icons/fa';
  import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
  import { ReactComponent as GitHubIcon} from './Assets/github.svg';


import Work1 from './Assets/todo-list.jpg';
import Work2 from './Assets/project-2.jpg';
import Work3 from './Assets/project-3.jpeg';
import Work4 from './Assets/sentimental_analysis.png';
import Work4i from './Assets/Twitter.Sentiment_analysis.pdf'
import Work5 from './Assets/project-5.jpg';
import Work6 from './Assets/project-6.jpg';

export const Links=[
    {
        id:1,
        name:'Home',
        icon:<FaHome className='nav__icon'/>,
        path:'/',
    },
    {
        id:2,
        name:'About',
        icon:<FaUser className='nav__icon'/>,
        path:'/About',
    },
    {
        id:3,
        name:'Portfolio',
        icon:<FaFolderOpen className='nav__icon'/>,
        path:'/Portfolio'
    },
    {
        id:4,
        name:'Contact',
        icon:<FaEnvelopeOpen className='nav__icon'/>,
        path:'/Contact',
    }
];

export const personalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'Srijal',
    },
  
    {
      id: 2,
      title: 'Last Name : ',
      description: 'Vedansh',
    },
  
    {
      id: 3,
      title: 'Age : ',
      description: '20 Years',
    },
  
    {
      id: 4,
      title: 'Nationality : ',
      description: 'Indian',
    },
  
    {
      id: 5,
      title: 'Freelance : ',
      description: 'Available',
    },
  
    {
      id: 6,
      title: 'Address : ',
      description: 'Bhubneshwar,Odisha',
    },
  
    {
      id: 7,
      title: 'Phone : ',
      description: {
        link:'tel:+918581044826',
        label:'+91-8581044826',
      },
    },
  
    {
      id: 8,
      title: 'Email : ',
      description: {
        link: 'mailto:srijal.vedansh7@gmail.com',
        label:'srijal.vedansh7@gmail.com',
      },
    },
    
    {
      id: 10,
      title: 'Langages : ',
      description: 'Hindi, English',
    },
    {
      id:11,
      title:'GitHub : ',
      description: {
        link: 'https://github.com/V3dansh',
        label: 'V3dansh',
        icon: <GitHubIcon className="github__icon" />,
      },
    }
  ];

  export const stats = [
    {
      id: 1,
      no: '2',
      title: 'Months of <br />Internship Experience',
    },
  
    {
      id: 2,
      no: '10',
      title: 'Completed <br /> Projects',
    },
  
    {
      id: 3,
      no: '1',
      title: 'Research Paper',
    },
  ];

  export const Skills = [
    {
      id: 1,
      title: 'Java',
      percentage: '60',
    },
  
    {
      id: 2,
      title: 'C++',
      percentage: '80',
    },
  
    {
      id: 3,
      title: 'Javascript',
      percentage: '70',
    },
  
    {
      id: 4,
      title: 'React',
      percentage: '55',
    },
  
    {
      id: 5,
      title: 'CSS',
      percentage: '65',
    },
  
    {
      id: 6,
      title: 'SQL',
      percentage: '50',
    },
  
    {
      id: 7,
      title: 'Python',
      percentage: '75',
    },
  
    {
      id: 8,
      title: 'HTML',
      percentage: '80',
    },
  ];

  export const Resume = [
    {
      id: 1,
      category: 'experience',
      icon: <FaBriefcase />,
      year: 'May - July 2023',
      title: 'Web Developer & Machine Learning <span> HighRadius </span>',
      desc: 'Led the end-to-end development of an AI-Enabled FinTech B2B Invoice Management App',
    },
  
    {
      id: 4,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2020-2024',
      title: 'Engineering B.Tech Degree <span> KIIT Univeristy </span>',
      desc: '',
    },
  
    {
      id: 5,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2018',
      title: 'Matriculation <span> DAV Public School </span>',
      desc: '',
    },
  
    {
      id: 6,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2020',
      title: 'Intermediate <span> DAV Public School </span>',
      desc: '',
    },
  ];

  export const portfolio = [
    {
      id: 1,
      img: Work1,
      title: 'To-Do List - CRUD operation',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'To-Do List',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'HTML, CSS, React, JS',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 2,
      img: Work2,
      title: 'Website Design',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React JS',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 3,
      img: Work3,
      title: 'Video Editing',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Video',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Adobe Premium',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 4,
      img: Work4,
      title: 'Sentimental Analysis',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project: ',
          desc: ' Machine Learning',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Python',
        },
        {
          icon: <FiExternalLink />,
          title: (
            <a href={Work4i} target="_blank" rel="noreferrer">Preview</a>
          ),
        },
      ],
    },
  
    {
      id: 5,
      img: Work5,
      title: 'Landing Page',
      details: [
        {
          title: 'Project : ',
          desc: 'Website',
        },
        {
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          title: 'Language : ',
          desc: 'React JS, Node JS',
        },
        {
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 6,
      img: Work6,
      title: 'Photo Editing',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Photo',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Adobe Photoshop',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dibble.com',
        },
      ],
    },
  ];