import React from 'react';
import home1 from '../img/home1.png';
//import styled from 'styled-components'; 
import {About, Hide, Description, Image} from '../styles';
import { motion} from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./wave";


const AboutSection = () => {

    return(
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                    <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>Dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any Website or Application ideas that you have.We have professionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="img" /> 
            </Image>
            <Wave />
        </About>
    )
}


export default AboutSection;