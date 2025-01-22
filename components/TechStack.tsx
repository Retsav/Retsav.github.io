import React, { useEffect, useRef } from "react";
import Image from "next/image"; // Importing the Image component
import SectionTitle from "@/components/SectionTitle";
import {
    unitylogo,
    riderlogo,
    csharplogo,
    plasticlogo,
    zenjectlogo
} from "@/public/assets"; // Make sure these are correctly exported

const TechStack = () => {
    const carouselRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!carouselRef.current) return;

        const carousel = carouselRef.current;
        const ul = carousel.querySelector("ul");
        if (!ul) return;

        // Clone the ul and append it right after the original
        const clonedUl = ul.cloneNode(true) as HTMLUListElement;
        clonedUl.classList.add("cloned"); // Add a class for easy identification
        carousel.appendChild(clonedUl);

        // Position the cloned ul directly after the original
        clonedUl.style.position = "absolute";
        clonedUl.style.left = `${ul.scrollWidth}px`;

        let scrollAmount = 0;

        const animateScroll = () => {
            scrollAmount += 1; // Adjust the speed of scrolling by changing the step value

            // Animate both original and cloned lists
            ul.style.transform = `translateX(-${scrollAmount}px)`;
            clonedUl.style.transform = `translateX(-${scrollAmount}px)`;

            // Reset scroll when the original list is fully out of view
            if (scrollAmount >= ul.scrollWidth) {
                scrollAmount = 0; // Reset scroll when half of the list has scrolled
            }

            requestAnimationFrame(animateScroll);
        };

        requestAnimationFrame(animateScroll);
    }, []);

    return (
        <section
            id="techstack"
            className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 relative"
        >
            <SectionTitle title={"Tech Stack"} titleNo={"02"} />
            <div
                ref={carouselRef}
                className="w-full inline-flex flex-nowrap overflow-hidden relative [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
                    <li>
                        <Image src={unitylogo} alt="Unity" width={150} height={150}/>
                    </li>
                    <li>
                        <Image src={riderlogo} alt="Rider" width={150} height={150}/>
                    </li>
                    <li>
                        <Image src={csharplogo} alt="C#" width={150} height={150}/>
                    </li>
                    <li>
                        <Image src={plasticlogo} alt="Plastic SCM" width={150} height={150}/>
                    </li>
                    <li>
                        <Image src={zenjectlogo} alt="Zenject" width={150} height={150}/>
                    </li>
{/*                    <li>
                        <Image src={samsunglogo} alt="Samsung" />
                    </li>
                    <li>
                        <Image src={quoralogo} alt="Quora" />
                    </li>
                    <li>
                        <Image src={sasslogo} alt="Sass" />
                    </li>*/}
                </ul>
            </div>
        </section>
    );
};

export default TechStack;