import React from "react";
import SectionTitle from "@/components/SectionTitle";
import { AiFillThunderbolt} from "react-icons/ai";
import Image from "next/image";
import {profileImg} from "@/public/assets";

const About = () => {
    return <section
        id="about"
        className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
        <SectionTitle title={"About Me"} titleNo={"01"} />
        <div className={"flex flex-col lgl:flex-row gap-16"}>
            <div className={"w-full lgl:w-2/3 text-[18px] text-textDark font-medium flex flex-col gap-4"}>
                <p>
                    From a young age, I was always interested in problem-solving situations. This would eventually pivot me toward programming, particularly in game development. I started with Lua,
                    programming simple scripts for Garry's Mod. It's where I found my passion for programming digital experiences for people to see, and eventually I transitioned to the Unity Engine.
                    To boost my skills, I'm currently studying Game Development at the 
                    <a href={"https://cdv.pl/"} target={"_blank"}><span className={"text-textGreen"}> Collegium da Vinci </span></a>in Poznań.
                    I am actively honing my skills and knowledge to lay a solid foundation for my future endeavors.
                    While my professional experience may be in its early stages, my commitment to learning and growth remains resolute.
                </p>
                <p>Here are a few technologies I have been working with recently:</p>
                <ul className={"max-w-[450px] text-[18px] font-titleFont grid grid-cols-2 gap-2 mt-6"}>
                    <li className={"flex items-center gap-2"}>
                        <span className={"text-textGreen"}>
                            <AiFillThunderbolt />
                        </span>
                        Unity Engine
                    </li>
                    <li className={"flex items-center gap-2"}>
                        <span className={"text-textGreen"}>
                            <AiFillThunderbolt />
                        </span>
                        C#
                    </li>
                    <li className={"flex items-center gap-2"}>
                        <span className={"text-textGreen"}>
                            <AiFillThunderbolt />
                        </span>
                        Version Control (Git)
                    </li>
                    <li className={"flex items-center gap-2"}>
                        <span className={"text-textGreen"}>
                            <AiFillThunderbolt />
                        </span>
                        DOTween
                    </li>
                    <li className={"flex items-center gap-2"}>
                        <span className={"text-textGreen"}>
                            <AiFillThunderbolt />
                        </span>
                        Cinemachine
                    </li>
                    <li className={"flex items-center gap-2"}>
                        <span className={"text-textGreen"}>
                            <AiFillThunderbolt />
                        </span>
                        Networking for GameObjects (NGO)
                    </li>
                </ul>
            </div>
            <div className={"w-full lgl:w-1/3 h-80 relative group"}>
                <div className={"absolute w-full h-80 -left-6 -top-6 rounded-lg"}>
                    <div className={"w-full h-full relative z-20 flex pl-6 lgl:pl-0"}>
                        <Image
                            className={"rounded-lg h-full object-cover"}    
                            src={profileImg} 
                            alt={"profileImg"}
                            />
                        <div className={"hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"}></div>
                    </div>
                </div>
                <div className={"hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"}></div>
            </div>
        </div>
    </section>;
};

export default About;