/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// countUp
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import resume from "../assets/siyam_ahmed_resume.pdf"

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });
    return (
        <section className="section" id="about" ref={ref}>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg:gap-y-10 lg:items-center lg:gap-x-20 gap-y-0">
                    {/* img */}
                    <div>
                        <motion.div
                            variants={fadeIn('right', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }}

                            className="flex bg-about bg-contain bg-no-repeat lg:w-[640px] h-[640px] mix-blend-lighten bg-top"></motion.div>
                    </div>
                    {/* text */}
                    <motion.div
                        variants={fadeIn('left', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <div className="flex-1">
                            <h2 className="h2 text-accent">About Me.</h2>
                            <h3 className="h3 mb-4">
                                I'm a , Front-end Developer with over 1 years of
                                exprience.
                            </h3>
                            <p className="mb-6">
                                To utilize my inventive and creative talents as a MERN Stack Developer, providing high-quality service to advanced while
                                continuing to learn and grow. With strong leadership and communication skills, I excel in
                                problem-solving with JS and am committed to being a diligent worker
                            </p>
                        </div>
                        {/* stats */}
                        <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                            <div>
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    <CountUp start={0} end={1} duration={3} />
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Years of <br />
                                    exprience
                                </div>
                            </div>
                            <div>
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    <CountUp start={0} end={10} duration={3} />
                                    +
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Projects <br />
                                    Completed
                                </div>
                            </div>
                            <div>
                                <div className="text-[40px] font-tertiary text-gradient mb-2">
                                    <CountUp start={0} end={4} duration={3} />
                                    +
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Satisfied <br />
                                    Clients
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-8 items-center">
                            <Link to="contact"><button className="btn btn-lg">Contact me</button></Link>
                            <a href={resume} download className="text-gradient btn-link">
                                My Resume
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
