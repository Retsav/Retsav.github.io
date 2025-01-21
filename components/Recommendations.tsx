import React from "react";
import SectionTitle from "@/components/SectionTitle";


const recommendations = [
    {
        name: "John Doe",
        image: "/path/to/image.jpg", 
        text: "Dominik is an exceptional developer! His dedication and skillset helped our project succeed.",
    },
    {
        name: "Jane Smith",
        image: "/path/to/another-image.jpg",
        text: "Dominik's attention to detail and problem-solving abilities are outstanding.",
    },
];

const Recommendations = () => {
    return (
        <section className="max-w-containerSmall mx-auto py-10 lgl:py-32">
            <SectionTitle title={"Recommendations"} titleNo={"010"} />
            <div className="flex flex-col md:flex-row md:justify-between gap-30">
                {recommendations.map((recommendation, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-16 bg-darkSecondary p-6 rounded-lg shadow-lg max-w-[350px] md:max-w-[40%] mx-auto md:mx-0"
                    >
            <img
              src={recommendation.image}
              alt={recommendation.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="relative text-base text-lightText font-medium">
              <p>{recommendation.text}</p>
                        <div className="absolute left-[-20px] top-4 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[20px] border-r-darkSecondary"></div>
                    </div>
                    </div>
                    ))}
            </div>
        </section>
    );
};

export default Recommendations;