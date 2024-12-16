"use client"
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"
import { motion } from "framer-motion"

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";


export default function Home() {
  // Split the text into words
  const words = ["Fullstack", "web", "Developer"];

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">

            <div className="text-xl inline-block">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-2" // Space between words
                  animate={{
                    x: [-5, 5, -3, 6, 0], // Moves left, right, slightly left, back, and returns to 0
                    y: [0, -6, 1, -5, 0] // Moves up, down, up, down, and back to original
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6, // Takes 6 seconds for a complete "snail" loop
                    ease: "easeInOut",
                    delay: index * 0.5 // Stagger each word's motion
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            <h1 className="h1 mt-3">
              Hello I'm <br />
              <span className="text-accent">Moein Samani</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80 mt-4">
              I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
            </p>

            {/* Buttons and socials */}
            <div className="flex flex-col xl:flex-row  items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase  flex items-center gap-2">
                <a
                  href="/CV.pdf"
                  download="CV.pdf"
                  className="uppercase flex items-center gap-2 btn btn-outline btn-lg"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>

          {/* Photo = profile */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />

    </section>
  );
}
