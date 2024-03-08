import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

import { FaLink, FaGithub } from "react-icons/fa";

const Work = () => {
    return (
        <section className="section" id="work">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-x-10 lg:mt-16">
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
                    >
                        {/* text */}
                        <div className="">
                            <h2 className="h2 leading-tight text-accent">
                                My Latest <br />
                                Projects..
                            </h2>
                            <p className="max-w-md mb-10">
                                To utilize my inventive and creative talents as a MERN Stack Developer, providing high-quality service to advanced while
                                continuing to learn and grow. With strong leadership and communication skills, I excel in
                                problem-solving with JS and am committed to being a diligent worker
                            </p>
                            <button className="btn btn-sm">View all projects</button>
                        </div>

                        {/* image */}
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
                            {/* overlays */}
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            {/* img */}
                            <img
                                src="https://i.ibb.co/18578b8/fitness.png"
                                alt=""
                                className="group-hover:scale-125 transition-all duration-500 z-50"
                            />
                            {/* subtitle */}
                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                <span className="text-gradient"> Fitness Tracker </span>

                                <a href="https://github.com/siyam79/fitness-tracker-app-client-site" target="_blank" className=" flex items-center gap-1 text-gradient ">
                                    <FaGithub className=" text-white "></FaGithub>
                                    Client
                                </a>
                                <a href="https://github.com/siyam79/fitness-tracker-app-server-site" target="_blank" className="flex items-center gap-1 text-gradient ">
                                    <FaGithub className=" text-white "></FaGithub>
                                    Server
                                </a>
                                <a href="https://fitness-tracker-97708.web.app/" target="_blank" className=" flex items-center gap-1 text-gradient ">
                                    <FaLink className=" text-white "></FaLink>
                                    Live Site
                                </a>

                            </div>
                            {/* title */}
                            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className="text-3xl text-white"> Tech : MERN PROJECTS </span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 flex flex-col gap-y-10 lg:gap-y-12"
                    >
                        {/* image */}
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
                            {/* overlays */}
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            {/* img */}
                            <img
                                src="https://i.ibb.co/pwZDSDC/job.png"
                                alt=""
                                className="group-hover:scale-125 transition-all duration-500 z-50"
                            />
                            {/* subtitle */}
                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                <span className="text-gradient"> Job Search Web Side</span>


                                <a href="https://github.com/siyam79/job-search-react-app-client" target="_blank" className=" flex items-center gap-1 text-gradient ">
                                    <FaGithub className=" text-white "></FaGithub>
                                    Client
                                </a>
                                <a href="https://github.com/siyam79/job-search-react-app-server" target="_blank" className="flex items-center gap-1 text-gradient ">
                                    <FaGithub className=" text-white "></FaGithub>
                                    Server
                                </a>
                                <a href="https://job-assingments-11.web.app/" target="_blank" className=" flex items-center gap-1 text-gradient ">
                                    <FaLink className=" text-white "></FaLink>
                                    Live Site
                                </a>


                            </div>
                            {/* title */}
                            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className="text-3xl text-white">Tech : MERN PROJECTS</span>
                            </div>
                        </div>
                        {/* image */}
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
                            {/* overlays */}
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            {/* img */}
                            <img
                                src="https://i.ibb.co/QHrX465/book-EXchange.png"
                                alt=""
                                className="group-hover:scale-125 transition-all duration-500 z-50"
                            />
                            {/* subtitle */}
                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                <span className="text-gradient">Modern SEO Book Exchange PLatform</span>


                                <a href="https://github.com/ShahreyarRafi/BoiBinimoy" target="_blank" className=" flex items-center gap-1 text-gradient ">
                                    <FaGithub className=" text-white "></FaGithub>
                                    Client
                                </a>
                                <a href="https://github.com/ShahreyarRafi/BoiBinimoy-Server" target="_blank" className=" flex items-center gap-1 text-gradient ">
                                    <FaGithub className=" text-white "></FaGithub>
                                    Server
                                </a>

                                <a href="https://boibinimoy.netlify.app/" target="_blank" className=" flex items-center gap-1 text-gradient ">
                                    <FaLink className=" text-white "></FaLink>
                                    Live Site
                                </a>


                            </div>
                            {/* title */}
                            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className="text-3xl text-white"> Tech : Nextjs & React  (Team Projects) </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Work;
