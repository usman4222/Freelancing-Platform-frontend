import React from "react";
import { motion } from "framer-motion";
import SearchInterface from "./Hero_components/Input";
import SectionWrapper from "@/components/SectionWrapper";
import bgImage1 from "../../../../assets/b1.jpg"
import bgImage2 from "../../../../assets/banner2.jpg"
import bgImage3 from "../../../../assets/banner3.jpg"
import bgImage4 from "../../../../assets/banner4.jpg"
import bgImage5 from "../../../../assets/banner5.jpg"


const Trusted_companies = [
  {
    brand: "/assets/images/Landingpage/hericon/brand1-1.webp",
  },
  {
    brand: "/assets/images/Landingpage/hericon/brand2-1.webp",
  },
  {
    brand: "/assets/images/Landingpage/hericon/brand3-1.webp",
  },
  {
    brand: "/assets/images/Landingpage/hericon/brand4-1.webp",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

function HeroSection() {
  return (
    <>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center font-proxima overflow-hidden px-20 py-10  bg-herobackground" // Parent card
      >
        {/* Child div for the background image */}
        <motion.div
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl py-10"
          style={{
            backgroundImage: `url(${bgImage1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          whileHover={{
            scale: 1.02,  // Only scales the background div, not the parent card
            transition: { duration: 0.3 }
          }}
        >
          <SectionWrapper className="px-10 w-full flex justify-between lg:flex-row md:flex-row flex-col lg:items-start md:items-start items-center rounded-b-xl">
            <motion.div
              className="lg:mt-16 mt-8 flex flex-col lg:items-start md:items-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="lg:max-w-[800px] md:max-w-[490px] lg:text-left md:text-left font-proxima font-bold text-center lg:text-[50px] text-[30px] text-white"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Hire the{" "}
                <motion.span
                  className="border-b-2 border-white cursor-pointer"
                  whileHover={{ borderBottom: "2px solid transparent" }}
                  transition={{ duration: 0.2 }}
                >
                  TOP Freelance
                </motion.span>{" "}
                Talent here FREELY. (Business with Freedom)
              </motion.h1>
              <motion.p
                className="max-w-xl mt-5 lg:text-start md:text-start text-center text-muted-foreground text-white"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Freelance Network is a premier network of elite freelance
                professionals, including top-tier software developers, designers,
                marketing specialists, finance experts, product managers, and
                project managers from around the globe.
              </motion.p>
              <motion.div
                className="mt-10"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <SearchInterface />
              </motion.div>
            </motion.div>
            {/* <motion.div
            className="relative mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <img
              className="object-cover lg:max-w-lg md:max-w-xs"
              src="/assets/images/Landingpage/h15-4-1.webp"
              alt="Hero illustration"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#d2d6e2] via-transparent w-64 lg:w-[500px] to-transparent"></div>
          </motion.div> */}
          </SectionWrapper>
        </motion.div>
      </motion.div>



      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center font-proxima overflow-hidden px-20 py-10  bg-herobackground" // Parent card
      >
        {/* Child div for the background image */}
        <motion.div
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl py-10"
          style={{
            backgroundImage: `url(${bgImage2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          whileHover={{
            scale: 1.02,  // Only scales the background div, not the parent card
            transition: { duration: 0.3 }
          }}
        >
          <SectionWrapper className="px-10 w-full flex justify-between lg:flex-row md:flex-row flex-col lg:items-start md:items-start items-center rounded-b-xl">
            <motion.div
              className="lg:mt-16 mt-8 flex flex-col lg:items-start md:items-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="lg:max-w-[800px] md:max-w-[490px] lg:text-left md:text-left font-proxima font-bold text-center lg:text-[50px] text-[30px] text-white"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Hire the{" "}
                <motion.span
                  className="border-b-2 border-white cursor-pointer"
                  whileHover={{ borderBottom: "2px solid transparent" }}
                  transition={{ duration: 0.2 }}
                >
                  TOP Freelance
                </motion.span>{" "}
                Talent here FREELY. (Business with Freedom)
              </motion.h1>
              <motion.p
                className="max-w-xl mt-5 lg:text-start md:text-start text-center text-muted-foreground text-white"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Freelance Network is a premier network of elite freelance
                professionals, including top-tier software developers, designers,
                marketing specialists, finance experts, product managers, and
                project managers from around the globe.
              </motion.p>
              <motion.div
                className="mt-10"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <SearchInterface />
              </motion.div>
            </motion.div>
            {/* <motion.div
            className="relative mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <img
              className="object-cover lg:max-w-lg md:max-w-xs"
              src="/assets/images/Landingpage/h15-4-1.webp"
              alt="Hero illustration"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#d2d6e2] via-transparent w-64 lg:w-[500px] to-transparent"></div>
          </motion.div> */}
          </SectionWrapper>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center font-proxima overflow-hidden px-20 py-10  bg-herobackground" // Parent card
      >
        {/* Child div for the background image */}
        <motion.div
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl py-10"
          style={{
            backgroundImage: `url(${bgImage3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          whileHover={{
            scale: 1.02,  // Only scales the background div, not the parent card
            transition: { duration: 0.3 }
          }}
        >
          <SectionWrapper className="px-10 w-full flex justify-between lg:flex-row md:flex-row flex-col lg:items-start md:items-start items-center rounded-b-xl">
            <motion.div
              className="lg:mt-16 mt-8 flex flex-col lg:items-start md:items-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="lg:max-w-[800px] md:max-w-[490px] lg:text-left md:text-left font-proxima font-bold text-center lg:text-[50px] text-[30px] text-white"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Hire the{" "}
                <motion.span
                  className="border-b-2 border-white cursor-pointer"
                  whileHover={{ borderBottom: "2px solid transparent" }}
                  transition={{ duration: 0.2 }}
                >
                  TOP Freelance
                </motion.span>{" "}
                Talent here FREELY. (Business with Freedom)
              </motion.h1>
              <motion.p
                className="max-w-xl mt-5 lg:text-start md:text-start text-center text-muted-foreground text-white"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Freelance Network is a premier network of elite freelance
                professionals, including top-tier software developers, designers,
                marketing specialists, finance experts, product managers, and
                project managers from around the globe.
              </motion.p>
              <motion.div
                className="mt-10"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <SearchInterface />
              </motion.div>
            </motion.div>
            {/* <motion.div
            className="relative mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <img
              className="object-cover lg:max-w-lg md:max-w-xs"
              src="/assets/images/Landingpage/h15-4-1.webp"
              alt="Hero illustration"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#d2d6e2] via-transparent w-64 lg:w-[500px] to-transparent"></div>
          </motion.div> */}
          </SectionWrapper>
        </motion.div>
      </motion.div>



      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center font-proxima overflow-hidden px-20 py-10  bg-herobackground" // Parent card
      >
        {/* Child div for the background image */}
        <motion.div
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl py-10"
          style={{
            backgroundImage: `url(${bgImage4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          whileHover={{
            scale: 1.02,  // Only scales the background div, not the parent card
            transition: { duration: 0.3 }
          }}
        >
          <SectionWrapper className="px-10 w-full flex justify-between lg:flex-row md:flex-row flex-col lg:items-start md:items-start items-center rounded-b-xl">
            <motion.div
              className="lg:mt-16 mt-8 flex flex-col lg:items-start md:items-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="lg:max-w-[800px] md:max-w-[490px] lg:text-left md:text-left font-proxima font-bold text-center lg:text-[50px] text-[30px] text-white"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Hire the{" "}
                <motion.span
                  className="border-b-2 border-white cursor-pointer"
                  whileHover={{ borderBottom: "2px solid transparent" }}
                  transition={{ duration: 0.2 }}
                >
                  TOP Freelance
                </motion.span>{" "}
                Talent here FREELY. (Business with Freedom)
              </motion.h1>
              <motion.p
                className="max-w-xl mt-5 lg:text-start md:text-start text-center text-muted-foreground text-white"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Freelance Network is a premier network of elite freelance
                professionals, including top-tier software developers, designers,
                marketing specialists, finance experts, product managers, and
                project managers from around the globe.
              </motion.p>
              <motion.div
                className="mt-10"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <SearchInterface />
              </motion.div>
            </motion.div>
            {/* <motion.div
            className="relative mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <img
              className="object-cover lg:max-w-lg md:max-w-xs"
              src="/assets/images/Landingpage/h15-4-1.webp"
              alt="Hero illustration"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#d2d6e2] via-transparent w-64 lg:w-[500px] to-transparent"></div>
          </motion.div> */}
          </SectionWrapper>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center font-proxima overflow-hidden px-20 py-10  bg-herobackground" // Parent card
      >
        {/* Child div for the background image */}
        <motion.div
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl py-10"
          style={{
            backgroundImage: `url(${bgImage5})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          whileHover={{
            scale: 1.02,  // Only scales the background div, not the parent card
            transition: { duration: 0.3 }
          }}
        >
          <SectionWrapper className="px-10 w-full flex justify-between lg:flex-row md:flex-row flex-col lg:items-start md:items-start items-center rounded-b-xl">
            <motion.div
              className="lg:mt-16 mt-8 flex flex-col lg:items-start md:items-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="lg:max-w-[800px] md:max-w-[490px] lg:text-left md:text-left font-proxima font-bold text-center lg:text-[50px] text-[30px] text-white"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Hire the{" "}
                <motion.span
                  className="border-b-2 border-white cursor-pointer"
                  whileHover={{ borderBottom: "2px solid transparent" }}
                  transition={{ duration: 0.2 }}
                >
                  TOP Freelance
                </motion.span>{" "}
                Talent here FREELY. (Business with Freedom)
              </motion.h1>
              <motion.p
                className="max-w-xl mt-5 lg:text-start md:text-start text-center text-muted-foreground text-white"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Freelance Network is a premier network of elite freelance
                professionals, including top-tier software developers, designers,
                marketing specialists, finance experts, product managers, and
                project managers from around the globe.
              </motion.p>
              <motion.div
                className="mt-10"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <SearchInterface />
              </motion.div>
            </motion.div>
            {/* <motion.div
            className="relative mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <img
              className="object-cover lg:max-w-lg md:max-w-xs"
              src="/assets/images/Landingpage/h15-4-1.webp"
              alt="Hero illustration"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#d2d6e2] via-transparent w-64 lg:w-[500px] to-transparent"></div>
          </motion.div> */}
          </SectionWrapper>
        </motion.div>
      </motion.div>

    </>

  );
}

export default HeroSection;




{/* <motion.div
            className="mt-7"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <p className="text-foreground lg:text-start md:text-center text-center">
              Trusted by
            </p>
            <div className="flex lg:justify-start lg:items-start md:justify-center md:items-center justify-center items-center gap-14 mt-7">
              {Trusted_companies.map((item, index) => (
                <motion.div
                  key={index}
                  className="cursor-pointer hover:scale-150 transition-all duration-200 "
                >
                  <img
                    className="lg:w-full md:w-[60px] w-[60px]"
                    src={item.brand}
                    alt=""
                  />
                </motion.div>
              ))}
            </div>
          </motion.div> */}