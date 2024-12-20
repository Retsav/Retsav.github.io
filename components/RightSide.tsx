﻿import React from "react";

const RightSide = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-end gap-20 text-textLight">
            <a href="mailto:d.dadanski@gmail.com">
                <p className="text-[20px] rotate-90 w-72 tracking-wide text-textGreen">d.dadanski@gmail.com</p>
            </a>
            <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
        </div>
    );
};

export default RightSide;