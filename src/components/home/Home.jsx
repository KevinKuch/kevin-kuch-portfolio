import React from 'react';
import './Home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

import { motion } from 'framer-motion';


export default function Home({}) {



    return (
        <section className='Home section' id='home'>
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                    <motion.div className="home__img" 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ duration: 0.5 }}
                    >
                    </motion.div>
                    <Data />
                </div>
                <ScrollDown />
            </div>
        </section>
    );
}