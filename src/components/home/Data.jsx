import React from 'react';
import { useRef, useEffect } from 'react';
import NextIcon from '../../assets/nextjs-icon.svg'
import ReactIcon from '../../assets/react-icon.svg'
import SassIcon from '../../assets/sass-icon.svg'
import HtmlIcon from '../../assets/html-icon.svg'
import CssIcon from '../../assets/css3-icon.svg'
import LessIcon from '../../assets/less-icon.svg'
import JsIcon from '../../assets/javascript-icon.svg'
import TypeIcon from '../../assets/typescript-icon.svg'
import Tailcss from '../../assets/tailwind-icon.svg'

import { motion, useInView, useAnimation } from 'framer-motion';

export default function Data({}) {


    

    const variants = {
        hidden: { opacity: 0, y:50 },
        visible: { opacity: 1 , y:0, transition: { duration: 0.2, delay: 0.25, staggerChildren: 0.2 }}
    }

    const variantsSkills = {
        hidden: { opacity: 0, y:30 },
        visible: { opacity: 1 , y:0, transition: { duration: 0.2, delay: 0.4, staggerChildren: 0.2 }}
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      };
      

    return (
        <div className='home__data'>
                <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                >
                    <motion.h1 variants={itemVariants} className='home__title'>Kevin Kuch
                    </motion.h1>
                    <motion.h3 variants={itemVariants} className="home__subtitle">Développeur Front-end</motion.h3>
                    <motion.p variants={itemVariants} className="home__description">
                        Finissant en Techniques d'Intégration Multimédia au Collège de Maisonneuve. 
                    </motion.p>
                </motion.div>
            <div className="home__skills">
                <motion.ul 
                variants={variantsSkills}
                initial="hidden"
                animate="visible"
                className='home__logo__skills'>
                    <motion.li variants={itemVariants}><img src={ReactIcon} alt="React icon" /></motion.li>
                    <motion.li variants={itemVariants}><img src={NextIcon} alt="Next.js icon" /></motion.li>
                    <motion.li variants={itemVariants}><img src={TypeIcon} alt="Typescript icon" /></motion.li>
                    <motion.li variants={itemVariants}><img src={Tailcss} alt="Tailwindcss icon" /></motion.li>
                    <motion.li variants={itemVariants}><img src={SassIcon} alt="Sass icon" /></motion.li>
                </motion.ul>
            </div>
        </div>
    );
}