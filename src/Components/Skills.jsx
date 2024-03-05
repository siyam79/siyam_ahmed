import React, { useState } from 'react';
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";


const Skills = () => {

    const [skills, setSkills] = useState([
        { title: 'HTML', percent: 95 },
        { title: 'CSS', percent: 70 },
        { title: 'Tailwind CSS', percent: 90 },
        { title: 'JavaScript', percent: 75 },
        { title: 'React JS', percent: 70 },
        { title: 'Node Js', percent: 65},
        { title: 'Mongo DB', percent: 65 },
        { title: 'Next Js', percent: 50 },
    ]);

    const [currentSkill, setCurrentSkill] = useState({ title: 'HTML', percent: 95 });
    const circumference = 2 * Math.PI * 120;


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
                            <h2 className="h2 text-accent text-center"> Skills Section </h2>\

                            <main className="grid w-full  text-gray-100  place-content-center">
                                <section className="p-6 space-y-6  rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0"
                                    x-data="skillDisplay">
                                    <div className="grid grid-cols-2 gap-6">
                                        {skills.map((skill, index) => (
                                            <button key={index} onClick={() => setCurrentSkill(skill)}
                                                className={`px-4 py-2 text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-44 hover:bg-blue-700 ${currentSkill.title === skill.title ? 'font-bold ring-2 ring-gray-100' : ''}`}>
                                                {skill.title}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <svg className="transform -rotate-90 w-72 h-72">
                                            <circle cx="145" cy="145" r="120" stroke="currentColor" strokeWidth="30" fill="transparent" className="text-gray-700" />
                                            <circle cx="145" cy="145" r="120" stroke="currentColor" strokeWidth="30" fill="transparent"
                                                strokeDasharray={circumference} strokeDashoffset={circumference - currentSkill.percent / 100 * circumference}
                                                className="text-blue-500" />
                                        </svg>
                                        <span className="absolute text-5xl">{`${currentSkill.percent}%`}</span>
                                    </div>
                                </section>
                            </main>


                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;