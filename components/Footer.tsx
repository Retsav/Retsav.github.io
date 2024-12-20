﻿import {TbBrandGithub} from "react-icons/tb";
import {
    SlSocialLinkedin
} from "react-icons/sl";
import React from "react";

const Footer = () => {
    return <div className={"hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4"}>
        <a href="https://github.com/Retsav" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
                    hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <TbBrandGithub />
                    </span>
        </a>
        <a href="https://linkedin.com/in/dominikdadanski" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center
                    hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                        <SlSocialLinkedin />
                    </span>
        </a>
    </div>
}

export default Footer;