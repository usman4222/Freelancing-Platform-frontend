import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionWrapper from "@/components/SectionWrapper"
import { Button } from "@/components/ui/button"
import { MoveUpRight } from 'lucide-react'
import bgImage4 from "@/assets/banner3.jpg"

const FadeInWhenVisible = ({ children, delay = 0, duration = 0.5 }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration, delay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
    >
      {children}
    </motion.div>
  )
}

function TalentedFreelancerComponent() {
  return (


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
        <div className="flex flex-col justify-center lg:items-start md:items-start items-center w-full lg:w-1/2">
          <FadeInWhenVisible>
            <div className="lg:w-[540px] lg:text-left md:text-left text-center px-10 py-16">
              <motion.h2
                className="text-white lg:text-5xl md:text-xl text-lg "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                With talented freelancers do more work.
              </motion.h2>
              <motion.p
                className="text-white mt-5 text-[14px] letter-spacing: -0.025em"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Work with the largest network of independent professionals and
                get quick turnarounds.
              </motion.p>
            </div>
          </FadeInWhenVisible>
          <div className="flex lg:flex-row md:flex-col flex-col lg:gap-5 gap-5 mt-10 px-10">
            <FadeInWhenVisible delay={0.6}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="bg-primary-custom/90 hover:bg-primary-custom px-4 py-2"
                  size={"lg"}

                >
                  Find Work <MoveUpRight className="" />
                </Button>
              </motion.div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.8}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="px-4 py-2"
                  variant="outline"
                  size={"lg"}
                >
                  Find Experts <MoveUpRight className="" />
                </Button>
              </motion.div>
            </FadeInWhenVisible>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default TalentedFreelancerComponent