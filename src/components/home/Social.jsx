import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export default function Social() {

    const variants = {
        hidden: { opacity: 0},
        visible: { opacity: 1, transition: { duration: 0.2, delay: 0.25, staggerChildren: 0.2 }}
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -30},
        visible: { opacity: 1, x: 0 },
      };

    return (
        <motion.div 
        variants={variants}
        initial="hidden"
        animate="visible"
        
        className="home__social">
                <motion.a  variants={itemVariants} href="https://www.linkedin.com/in/kevin-kuch/" className="home__social-icon" target="_blank" rel="noreferrer">
                    <i className="uil uil-linkedin"></i>
                </motion.a>
                <motion.a  variants={itemVariants} href="https://github.com/KevinKuch" className="home__social-icon" target="_blank" rel="noreferrer">
                    <i className="uil uil-github"></i>
                </motion.a>
        </motion.div>
    );
}