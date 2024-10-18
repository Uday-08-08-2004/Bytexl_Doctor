import {RiLinkedinFill} from 'react-icons/ri';
import {AiFillYoutube,AiFillGithub,AiOutlineInstagram} from 'react-icons/ai';

export const navlinks = [
    {
        path:'/home',
        display: 'Home'
    },
    {
        path:'/doctors',
        display: 'Find a Doctor'
    },
    {
        path:'/services',
        display: 'Services'
    },
    {
        path:'/contact',
        display: 'Contact'
    },
];

export const featureContentData = [
    {
        id:1,
        content:'1. Schedule the appointment directly'
    },
    {
        id:2,
        content: '2. Search for your physician here, and contact their office'
    },{
        id:3,
        content: '3. View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time'
    }
];

export const socialLinks = [
    {
        path: 'https://www.youtube.com/c/Freecodecamp',
        icon : <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
    },
    {
        path: 'https://github.com/Uday-08-08-2004',
        icon : <AiFillGithub className="group-hover:text-white w-4 h-5" />,
    },
    {
        path: 'https://instagram.com/bhargava_teja__?igshid=YmMyMTA2M2Y=',
        icon : <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
    },
    {
        path: 'https://www.linkedin.com/in/udaya-teja-narasani-49b14426a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        icon : <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
    },
];

export const quickLinks01 = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/',
        display: 'About Us'
    },
    {
        path: '/services',
        display: 'Services'
    },
    {
        path: '/',
        display: 'Blog'
    },
];

export const quickLinks02 = [
    {
        path: '/find-a-doctor',
        display: 'Find a Doctor'
    },
    {
        path: '/',
        display: 'Find a Location'
    },
    {
        path: '/',
        display: 'Get a Opinion'
    },
];

export const quickLinks03 = [
    {
        path: '/',
        display: 'Donate'
    },
    {
        path: '/contact',
        display: 'Contact Us',
    },
];