import React, { useEffect, useRef } from "react";
import SectionTitle from "@/components/SectionTitle";

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
            id="TechStack"
            className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 relative"
        >
            <SectionTitle title={"TechStack"} titleNo={"010"} />
            <div
                ref={carouselRef}
                className="w-full inline-flex flex-nowrap overflow-hidden relative [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
                    <li>
                        <img src="./facebook.svg" alt="Facebook" />
                    </li>
                    <li>
                        <img src="./disney.svg" alt="Disney" />
                    </li>
                    <li>
                        <img src="./airbnb.svg" alt="Airbnb" />
                    </li>
                    <li>
                        <img src="./apple.svg" alt="Apple" />
                    </li>
                    <li>
                        <img src="./spark.svg" alt="Spark" />
                    </li>
                    <li>
                        <img src="./samsung.svg" alt="Samsung" />
                    </li>
                    <li>
                        <img src="./quora.svg" alt="Quora" />
                    </li>
                    <li>
                        <img src="./sass.svg" alt="Sass" />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default TechStack;
