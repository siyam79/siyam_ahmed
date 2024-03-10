/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// images
import Image from "../assets/about.png";
// import icons
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebookSquare , FaLinkedin , FaGithub } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// resume
import resume from "../assets/siyam_ahmed_resume.pdf"
import { Link } from "react-scroll";


const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:gap-y-8 lg:flex-row lg:items-center">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[42px] font-bold leading-[0.8] lg:text-[60px] md:pb-2 "
            >
               SIYAM <span>AHMED</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[30px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]">
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={[
                  "JR. MERN Stack Developer",
                  2000,
                  "UI / UX Designer",
                  2000,
                  "Front-End Develope",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0">
              MERN stack developer passionate about building sleek and scalable web applications .. And Web Developer is My Dream !!
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <Link to="contact"> <button className="btn btn-lg">Contact me</button></Link>

              <a href={resume} download>
                <button className="text-gradient btn-link"> My Resume</button>
              </a>
            </motion.div>
            {/* social links */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">

              <a href='https://www.facebook.com/profile.php?id=100077374245629'><FaFacebookSquare className="text-3xl ">
                </FaFacebookSquare>
                </a>
              <a href={'https://www.linkedin.com/in/siyam-ahmed-a5a6b3285/'}><FaLinkedin className="text-3xl "></FaLinkedin></a>

              <a href='https://www.instagram.com/foysalahmedsiyam/'><SlSocialInstagram className="text-3xl "></SlSocialInstagram></a>

              <a href='https://github.com/siyam79'><FaGithub className="text-3xl "></FaGithub></a>

              
            </motion.div>
          </div>
          {/* images */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}

            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] w-96 ">
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Banner;
