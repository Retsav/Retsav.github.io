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
                        <TiArrowForward/>
                    </span>
                    Collaborated with designers to develop tools and systems, enabling streamlined workflows for
                    creating
                    game mechanics and UI components.
                </li>
                <li className={"text-[17px] flex gap-2 text-textDark"}>
                    <span className={"text-textGreen mt-1"}>
                        <TiArrowForward/>
                    </span>
                    Implemented and optimized UI elements, ensuring accurate reproduction from Figma of the designer's
                    vision and
                    maintaining consistency across the game.
                </li>
                <li className={"text-[17px] flex gap-2 text-textDark"}>
                    <span className={"text-textGreen mt-1"}>
                        <TiArrowForward/>
                    </span>
                    Debugged and resolved backend issues, ensuring smooth gameplay and reliable system performance.
                </li>
                <li className={"text-[17px] flex gap-2 text-textDark"}>
                    <span className={"text-textGreen mt-1"}>
                        <FaLightbulb/>
                    </span>
                    This role taught me how to implement various backend systems and refine gameplay through bug fixing,
                    enhancing my problem-solving skills and teamwork in a professional studio environment. Also i learned
                    close collaboration with my colleagues.
                </li>
            </ul>
        </motion.div>
    )
}

export default Playchill;