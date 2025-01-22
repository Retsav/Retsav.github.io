import React, {useState} from "react";
import SectionTitle from "@/components/SectionTitle";
import Bitstudios from "@/components/works/11bitstudios";
import Playchill from "@/components/works/play2chill";

const Experience = () => {
    const [workBitstudios, setBitstudios] = useState(false)
    const [workPlay2Chill, setPlay2Chill] = useState(true)
    
    
    
    const handleBitstudios = () => {
        setBitstudios(true);
        setPlay2Chill(false)
    };
    
    const handlePlay2Chill = () => {
      setPlay2Chill(true);
      setBitstudios(false)
    };
    
    return (<section
            id={"experience"}
            className={"max-w-containerxs mx-auto py-10 lgl:py-24 px-4"}
        >
            <SectionTitle title={"Experience"} titleNo={"03"}/>
            <div className={"w-full mt-10 flex flex-col md:flex-row gap-16"}>
                <ul className={"md:w-32 flex flex-col"}>
                    <li
                        onClick={handlePlay2Chill}
                        className={`${workPlay2Chill ?
                            "border-l-textGreen text-textGreen"
                            : "border-l-hoverColor text-textDark"} 
                            border-l-2 bg-transparent hover:bg-[#112240] py-3 text-[18px] cursor-pointer duration-300 px-8 font-medium`}
                    >
                        Play2Chill
                    </li>
                    <li
                        onClick={handleBitstudios}
                        className={`${workBitstudios ?
                            "border-l-textGreen text-textGreen"
                            : "border-l-hoverColor text-textDark"} 
                            border-l-2 bg-transparent hover:bg-[#112240] py-3 text-[18px] cursor-pointer duration-300 px-8 font-medium`}
                    >
                        11 bit studios
                    </li>
                </ul>
                {workBitstudios && <Bitstudios/>}
                {workPlay2Chill && <Playchill/>}
            </div>
        </section>
    );
};

export default Experience;