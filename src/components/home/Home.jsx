import React from 'react';
import './Home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import Zoom from 'react-reveal/Zoom';

export default function Home({}) {


    return (
        <section className='Home section' id='home'>
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                    <Zoom>

                    <div className="home__img"></div>
                    </Zoom>
                    <Data />
                </div>

                <ScrollDown />
            </div>
        </section>
    );
}