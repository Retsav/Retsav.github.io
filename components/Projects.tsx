import React from "react";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import {aztecsthelastsun, bartrashersImg, farmingsimulationImg, pongImg} from "@/public/assets";
import {TbBrandGithub, TbBrandSteam} from "react-icons/tb";

const Projects = () => {
    return (
        <section id={"project"} className={"max-w-container mx-auto lgl:px-20 py-24"}>
            <SectionTitle title={"Some projects I worked on!"} titleNo={"04"}/>
            <div className={"w-full flex flex-col items-center justify-between gap-28 mt-10"}>
                <div className={"w-full flex flex-col items-center justify-center gap-28 mt-10"}>
                    <div className={"flex flex-col xl:flex-row gap-6"}>
                        <a
                            className={"w-full xl:w-1/2 h-auto relative group"}
                            target={"_blank"}
                        >
                            <div>
                                <Image className={"w-full h-full object-contain"}
                                       src={aztecsthelastsun}
                                       alt={"aztecsthelastsun"}/>
                            </div>
                        </a>
                        <div
                            className={"w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10"}>
                            <p className={"font-titleFont text-textGreen text-[18px] tracking-wide"}>
                                Featured Project
                            </p>
                            <h3 className={"text-[26px] font-bold"}>Aztecs: The Last Sun</h3>
                            <p className={"bg-[#112240] text-[18px] md:text-[18px] p-2 md:p-6 rounded-md"}>
                                Aztecs: The Last Sun is a city-building simulator set between the 13th and 16th
                                centuries AD.
                                The player assumes the role of a ruler responsible for building and bringing to splendor
                                the magnificent city-state of Tenochtitlan.
                            </p>
                            <ul className={"text-[18px] md:text-[18px] font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark"}>
                                <li>UI Toolkit</li>
                                <li>A* Pathfinding</li>
                                <li>Figma</li>
                                <li>Plastic SCM</li>
                            </ul>
                            <div className={"text-2xl flex gap-4"}>
                                <a className={"hover:text-textGreen duration-300"}
                                   href={"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiX6JWY0OaKAxWKLRAIHQKCIf8QFnoECDQQAQ&url=https%3A%2F%2Fstore.steampowered.com%2Fapp%2F1409840%2FAztecs_The_Last_Sun%2F%3Fl%3Dpolish&usg=AOvVaw1zXjxsly4320ZHkWePW1oF&opi=89978449"}
                                   target={"_blank"}
                                >
                                    <TbBrandSteam/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"w-full flex flex-col items-center justify-center gap-28 mt-10"}>
                    <div className={"flex flex-col xl:flex-row gap-6"}>
                    <a
                            className={"w-full xl:w-1/2 h-auto relative group"}
                            href={"https://github.com/Retsav/P0NG.NET"}
                            target={"_blank"}
                        >
                            <div>
                                <Image className={"w-full h-full object-contain"}
                                       src={pongImg}
                                       alt={"pongImg"}/>
                            </div>
                        </a>
                        <div
                            className={"w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10"}>
                            <p className={"font-titleFont text-textGreen text-[18px] tracking-wide"}>
                                Featured Project
                            </p>
                            <h3 className={"text-[26px] font-bold"}>P0NG.NET</h3>
                            <p className={"bg-[#112240] text-[18px] md:text-[18px] p-2 md:p-6 rounded-md"}>
                                Recreation of a iconic Pong game using Unity. This project was my introduction to basics
                                of
                                asynchronous programming and <span className={"text-textGreen"}>Networking for Game Objects</span>.
                                This project features searching for available player and if it finds one, then it starts
                                a match.
                            </p>
                            <ul className={"text-[18px] md:text-[18px] font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark"}>
                                <li>Networking for GameObjects</li>
                                <li>Task</li>
                            </ul>
                            <div className={"text-2xl flex gap-4"}>
                                <a className={"hover:text-textGreen duration-300"}
                                   href={"https://github.com/Retsav/P0NG.NET"}
                                   target={"_blank"}
                                >
                                    <TbBrandGithub/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Project Two*/}
                <div className={"w-full flex flex-col items-center justify-center gap-28 mt-10"}>
                    <div className={"flex flex-col xl:flex-row-reverse gap-6"}>
                        <a
                            className={"w-full xl:w-1/2 h-auto relative group"}
                            href={"https://github.com/Retsav/BarTrashers"}
                            target={"_blank"}
                        >
                            <div>
                                <Image className={"w-full h-full object-contain"}
                                       src={bartrashersImg}
                                       alt={"bartrashersImg"}/>
                            </div>
                        </a>
                        <div
                            className={"w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10"}>
                            <p className={"font-titleFont text-textGreen text-[18px] tracking-wide"}>
                                Featured Project
                            </p>
                            <h3 className={"text-[26px] font-bold"}>Bar Trashers</h3>
                            <p className={"bg-[#112240] text-[18px] md:text-[18px] p-2 xl:-mr-16 md:p-6 rounded-md"}>
                                Group project of a couch player versus player game where players are fighting with each
                                other
                                by throwing various objects around the room. In this project I did implementation of
                                objects fracturing
                                on impact, full game pad controller support, and UI system using <span
                                className={"text-textGreen"}>DOTween</span>.
                            </p>
                            <ul className={"text-[18px] md:text-[18px] font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark"}>
                                <li>DOTween</li>
                                <li>Cinemachine</li>
                            </ul>
                            <div className={"text-2xl flex gap-4"}>
                                <a className={"hover:text-textGreen duration-300"}
                                   href={"https://github.com/Retsav/BarTrashers"}
                                   target={"_blank"}
                                >
                                    <TbBrandGithub/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Project three*/}
            </div>
        </section>
    );
};

export default Projects;