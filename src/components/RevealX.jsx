import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from 'framer-motion';

export const RevealX = ({ children }) => {



    const ref = useRef(null);
    const isInView = useInView(ref, {once: true})
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            console.log(isInView);
            controls.start('visible');
        }
    }, [isInView])


    return (
        <div ref={ref} style={{position: "relative", overflow: "hidden"}}>
            <motion.div
            variants={{
                hidden: { opacity:0, x: -50 },
                visible: {opacity: 1, x: 0},
            }}
            initial="hidden"
            animate={controls}
            transition={{duration: 0.5, delay: 0.25}}
            >
                {children}</motion.div>
        </div>
    )
};