import {motion} from "framer-motion"
import {TiArrowForward}  from "react-icons/ti";
import { FaLightbulb } from "react-icons/fa";

const Playchill = () => {
    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{delay: 0.1}}
            className={"w-full"}
        >
            <h3 className={"flex gap-1 font-medium text-[24px] font-titleFont"}>Unity Developer<span className={"text-textGreen tracking-wide"}>@Play2Chill</span></h3>
            <p className={"text-[18px] mt-1 font-medium text-textDark"}>
                February 2024 - Current
            </p>
            <ul className={"mt-6 flex flex-col gap-3"}>
                <li className={"text-[17px] flex gap-2 text-textDark"}>
                    <span className={"text-textGreen mt-1"}>
                        <TiArrowForward />
                    </span>
                    B2B contract where I participated in playtesting sessions, analyzed core gameplay mechanics, and evaluated the overall user experience.
                </li>
                <li className={"text-[17px] flex gap-2 text-textDark"}>
                    <span className={"text-textGreen mt-1"}>
                        <TiArrowForward />
                    </span>
                    Assesed game balance and difficulty levels to ensure a satisfying and challenging gameplay.
                </li>
                <li className={"text-[17px] flex gap-2 text-textDark"}>
                    <span className={"text-textGreen mt-1"}>
                        <FaLightbulb />
                    </span>
                    This job allowed me to learn a lot how developing games in professional setting looks like. Overall,
                    participating in playtests within a professional studio expanded my skill set, providing a better
                    understanding of the game development process.
                </li>
            </ul>
        </motion.div>
    )
}

export default Playchill;