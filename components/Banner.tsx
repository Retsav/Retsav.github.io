﻿import React from "react";
import {motion} from "framer-motion"

const Banner = () => {
    return <section
        id="home"
        className={"max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"}
    >
        <motion.h3 
            initial={{y:10, opacity: 0}}
            animate={{y:0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.6}}
            className={"text-[25px] font-titleFont tracking-wide text-textGreen"}
        >
            Hi, my name is
        </motion.h3>
        <motion.h1
            initial={{y:10, opacity: 0}}
            animate={{y:0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.7}}
            className={"text-4xl lgl:text-6xl font-titleFont font-bold flex flex-col"}
        >
            Dominik Dadański. <span className={"text-textDark mt-2 lgl:mt-4"}>I build games in Unity</span>
        </motion.h1>
        <motion.p
            initial={{y: 10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.8}}
            className={"text-[20px] md:max-w[650px] text-textDark font-medium"}
        >
            {" "}
            I am a goal-oriented Unity Developer and C# programmer. I'm constantly exploring
            new concepts, and developing new projects to expand my knowledge and skill set. 
            I thrive in challenging environments and I'm excited about the endless possibilities that Unity offers.{" "}
        </motion.p>
        <motion.button
            initial={{y:10, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:0.5, delay:0.9}}
            className={"w-52 h-14 text-[17px] font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"}
        >
            Check out my Projects!
        </motion.button>
    </section>;
};

export default Banner;