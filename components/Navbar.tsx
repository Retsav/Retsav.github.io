import React, {useRef, useState} from "react";
import Link from "next/link";
import {logo} from "@/public/assets";
import Image from "next/image";
import {motion} from "framer-motion"
import {MdOutlineClose} from "react-icons/md";
import {TbBrandGithub} from "react-icons/tb";
import {SlSocialLinkedin} from "react-icons/sl";


const Navbar = () => {
    const ref = useRef<string | any>("")
    const [showMenu,setShowMenu] = useState(false);
    const handleScroll = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setShowMenu(false);
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/,"");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
                behavior:"smooth",
            });
        const links = document.querySelectorAll(".nav-link")
        links.forEach((link)=>{
            link.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    };
    
    function handleClick(e:any){
        if(e.target.contains(ref.current)) {
            setShowMenu(false);
        }
    }
    
    return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
        <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center
         justify-between ">
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
                <Image src={logo} width={290} height={38} alt={"logo"} />
            </motion.div>
            <div className={"hidden mdl:inline-flex items-center gap-7"}>
                <ul className="flex text-[20px] gap-10">
                    <Link href="#home"
                          onClick={handleScroll}
                          className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                    >
                        <motion.li
                            initial={{y: -10, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{duration: 0.1}}
                        >
                            Home
                        </motion.li>
                    </Link>
                    <Link className="flex items-center gap-1 font-medium text-textDark
                    hover:text-textGreen cursor-pointer duration-300 nav-link"
                          href="#about"
                          onClick={handleScroll}
                    >
                        <motion.li initial={{y: -10, opacity: 0}}
                                   animate={{y: 0, opacity: 1}}
                                   transition={{duration: 0.1, delay: 0.1}}
                        >
                            <span className={"text-textGreen"}>01.</span>
                            About
                        </motion.li>
                    </Link>
                    <Link className="flex items-center gap-1 font-medium text-textDark
                    hover:text-textGreen cursor-pointer duration-300 nav-link"
                          href="#techstack"
                          onClick={handleScroll}
                    >
                        <motion.li initial={{y: -10, opacity: 0}}
                                   animate={{y: 0, opacity: 1}}
                                   transition={{duration: 0.1, delay: 0.1}}
                        >
                            <span className={"text-textGreen"}>02.</span>
                            Tech Stack
                        </motion.li>
                    </Link>
                    <Link className="flex items-center gap-1 font-medium text-textDark
                    hover:text-textGreen cursor-pointer duration-300 nav-link"
                          href="#experience"
                          onClick={handleScroll}
                    >
                        <motion.li initial={{y: -10, opacity: 0}}
                                   animate={{y: 0, opacity: 1}}
                                   transition={{duration: 0.1, delay: 0.2}}
                        >
                            <span className={"text-textGreen"}>03.</span>
                            Experience
                        </motion.li>
                    </Link>
                    <Link className="flex items-center gap-1 font-medium text-textDark
                    hover:text-textGreen cursor-pointer duration-300 nav-link"
                          href="#project"
                          onClick={handleScroll}
                    >
                        <motion.li initial={{y: -10, opacity: 0}}
                                   animate={{y: 0, opacity: 1}}
                                   transition={{duration: 0.1, delay: 0.3}}
                        >
                            <span className={"text-textGreen"}>04.</span>
                            Project
                        </motion.li>
                    </Link>
                    <Link className="flex items-center gap-1 font-medium text-textDark
                    hover:text-textGreen cursor-pointer duration-300 nav-link"
                          href="#recommendations"
                          onClick={handleScroll}
                    >
                        <motion.li initial={{y: -10, opacity: 0}}
                                   animate={{y: 0, opacity: 1}}
                                   transition={{duration: 0.1, delay: 0.1}}
                        >
                            <span className={"text-textGreen"}>05.</span>
                            Recommendations
                        </motion.li>
                    </Link>
                    <Link className="flex items-center gap-1 font-medium text-textDark
                    hover:text-textGreen cursor-pointer duration-300 nav-link"
                          href="#contact"
                          onClick={handleScroll}
                    >
                        <motion.li initial={{y: -10, opacity: 0}}
                                   animate={{y: 0, opacity: 1}}
                                   transition={{duration: 0.1, delay: 0.4}}
                        >
                            <span className={"text-textGreen"}>06.</span>
                            Contact
                        </motion.li>
                    </Link>
                </ul>
                <motion.button
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.5}}
                    className={"px-4 py-2 rounded-md text-textGreen text-[20px] border border-textGreen hover:bg-hoverColor duration-300"}
                >
                    {/* Update: Open PDF in new tab */}
                    <a
                        href="/assets/DominikDadanski_JuniorProgrammer_CV.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Resume
                    </a>
                </motion.button>
            </div>
            {/*Icon section"*/}
            <div
                onClick={() => setShowMenu(true)}
                className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
                <span
                    className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
                <span
                    className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
                <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
            </div>
            {
                showMenu && (
                    <div ref={(node) => (ref.current = node)}
                         onClick={handleClick}
                    className={"absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"}>
                        <motion.div
                            initial={{x:20, opacity:0}}
                            animate={{x:0, opacity:1}}
                            transition={{duration: 0.1}}
                            className={"w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"}
                            
                        >
                            <MdOutlineClose 
                                onClick={() => setShowMenu(false)}
                                className={"text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"}/>
                            <div>

                                    <ul className="flex flex-col text-[20px] gap-10">
                                        <Link href="#home"
                                              onClick={handleScroll}
                                              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                                        >
                                            <motion.li
                                                initial={{y: -10, opacity:0}}
                                                animate={{y: 0, opacity:1}}
                                                transition={{duration: 0.1}}
                                            >
                                                Home</motion.li>
                                        </Link>
                                        <Link className="flex items-center gap-1 font-medium text-textDark
                    hover:text-textGreen cursor-pointer duration-300 nav-link"
                                              href="#about"
                                              onClick={handleScroll}
                                        >
                                            <motion.li initial={{y: -10, opacity: 0}}
                                                       animate={{y: 0, opacity: 1}}
                                                       transition={{duration: 0.1, delay: 0.1}}
                                            >
                                                <span className={"text-textGreen"}>01.</span>
                                                About
                                            </motion.li>
                                        </Link>
                                        <Link className="flex items-center gap-1 font-medium text-textDark
                    hover:text-textGreen cursor-pointer duration-300 nav-link"
                                              href="#experience"
                                              onClick={handleScroll}
                                        >
                                            <motion.li initial={{y: -10, opacity: 0}}
                                                       animate={{y: 0, opacity: 1}}
                                                       transition={{duration: 0.1, delay: 0.2}}
                                            >
                                                <span className={"text-textGreen"}>02.</span>
                                                Experience
                                            </motion.li>
                                        </Link>
                                        <Link className="flex items-center gap-1 font-medium text-textDark
                    hover:text-textGreen cursor-pointer duration-300 nav-link"
                                              href="#project"
                                              onClick={handleScroll}
                                        >
                                            <motion.li initial={{y: -10, opacity: 0}}
                                                       animate={{y: 0, opacity: 1}}
                                                       transition={{duration: 0.1, delay: 0.3}}
                                            >
                                                <span className={"text-textGreen"}>03.</span>
                                                Project
                                            </motion.li>
                                        </Link>
                                        <Link className="flex items-center gap-1 font-medium text-textDark
                    hover:text-textGreen cursor-pointer duration-300 nav-link"
                                              href="#contact"
                                              onClick={handleScroll}
                                        >
                                            <motion.li initial={{y: -10, opacity: 0}}
                                                       animate={{y: 0, opacity: 1}}
                                                       transition={{duration: 0.1, delay: 0.4}}
                                            >
                                                <span className={"text-textGreen"}>04.</span>
                                                Contact
                                            </motion.li>
                                        </Link>
                                    </ul>
                            </div>
                        </motion.div>
                    </div>
                )
            }
        </div>
    </div> 
    );
};

export default Navbar;