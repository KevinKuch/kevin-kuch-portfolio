import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from 'framer-motion';

export const Reveal = ({ children }) => {



    // const ref = useRef(null);
    // const isInView = useInView(ref, {once: true})
    // const controls = useAnimation();

    // useEffect(() => {
    //     if (isInView) {
    //         controls.start('visible');
    //     }
    // }, [isInView])






    return (
        <div style={{position: "relative", overflow: "hidden"}}>
            <motion.div>{children}</motion.div>
        </div>
    )
};