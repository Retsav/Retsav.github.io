import React from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { krzychu, milosz } from "@/public/assets";

const Recommendations: React.FC = () => {
    return (
        <section className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
            <SectionTitle title="Recommendations" titleNo="05" />

            {/* Force the elements side by side by using flex-nowrap */}
            <div className="w-full flex flex-nowrap justify-center items-start gap-12">
                {/* --- Recommendation #1 --- */}
                <div className="flex gap-4 items-start">
                    <Image
                        src={krzychu}
                        alt="Krzysztof Maliński avatar"
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="grid">
                        <h5 className="text-textDark text-md font-semibold leading-snug pb-2">
                            Krzysztof Maliński
                        </h5>
                        {/* Keep the same size + layout, but change bubble background color */}
                        <div className="max-w-md">
                            <div
                                className="
                  inline-flex
                  items-center
                  gap-3
                  px-6 py-4
                  bg-[#112240]
                  rounded-3xl rounded-tl-none
                  whitespace-normal
                  break-words
                "
                            >
                                <div className="text-textDark text-lg font-normal leading-snug space-y-4">
                                    <p>
                                        I had the pleasure of working with Dominik as his team leader, and
                                        I can confidently say that he exceeded all expectations as a Junior
                                        Unity Developer. Dominik possesses a remarkable combination of
                                        technical skills, creativity, and a strong work ethic.
                                    </p>
                                    <p>
                                        Throughout our time working together, Dominik consistently
                                        demonstrated a deep understanding of Unity development principles
                                        and techniques. His ability to quickly grasp new concepts and apply
                                        them to our projects was impressive, making him a valuable asset
                                        to our team.
                                    </p>
                                    <p>
                                        Beyond his technical capabilities, Dominik is an excellent team
                                        player. He communicates effectively, actively collaborates with
                                        colleagues, and willingly shares his knowledge and expertise. His
                                        positive attitude and dedication to continuous improvement make him
                                        a pleasure to work with.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Recommendation #2 --- */}
                <div className="flex gap-4 items-start">
                    <Image
                        src={milosz}
                        alt="Miłosz Milewski avatar"
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="grid">
                        <h5 className="text-textDark text-md font-semibold leading-snug pb-2">
                            Miłosz Milewski
                        </h5>
                        <div className="max-w-md">
                            <div
                                className="
                  inline-flex
                  items-center
                  gap-3
                  px-6 py-4
                  bg-[#112240]
                  rounded-3xl rounded-tl-none
                  whitespace-normal
                  break-words
                "
                            >
                                <div className="text-textDark text-lg font-normal leading-snug space-y-4">
                                    <p>
                                        Dominik is a standout C# Unity engineer whose skills have greatly
                                        enhanced our core game systems. His exceptional ability in designing
                                        and implementing intricate gameplay loops was crucial in our indie
                                        project's success.
                                    </p>
                                    <p>
                                        What impressed me the most is his great attention to detail and his
                                        proactive approach to problem-solving, which have consistently exceeded
                                        expectations. His rapid adaptation to new technologies and methods,
                                        coupled with his positive, collaborative nature, has made a significant
                                        impact on our little indie game project.
                                    </p>
                                    <p>
                                        Dominik is undoubtedly a valuable asset in any game development setting,
                                        and I highly recommend him for his ever-so-growing expertise in C# and
                                        Unity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recommendations;
