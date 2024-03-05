import React from 'react';
import ProgressBar from "react-animated-progress-bar";
// import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";




const skills = [
    {
        id: 1,
        title: "React.js",
        value: 70,
    },
    {
        id: 2,
        title: "Tailwind",
        value: 83,
    },
    {
        id: 3,
        title: "Firebase",
        value: 76,
    },
    {
        id: 4,
        title: "Node Js",
        value: 55,
    },
    {
        id: 5,
        title: "Express Js",
        value: 55,
    },
    {
        id: 6,
        title: "MongoDB",
        value: 60,
    },
];



const Skills = () => {


    return (
        <div>
            <section className="section md:mt-4" id="skills">
                <div className="container mx-auto ">
                    <div className="">
                        {/* text and images */}
                        <motion.div
                            variants={fadeIn('up', 0.5)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {/* services list */}
                            <h2 className="h2 text-accent text-center"> Skills Section </h2>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
                                {skills.map((item) => (
                                    <div key={item.id} className="text-center shadow-lg p-6  ">
                                        <div className="flex justify-center">
                                            <ProgressBar
                                                width="230"
                                                trackWidth="13"
                                                percentage={item.value}
                                            />
                                        </div>
                                        <h3 className="text-2xl font-semibold">{item.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;