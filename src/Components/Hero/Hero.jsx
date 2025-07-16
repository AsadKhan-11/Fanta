import React, { useState, useEffect } from "react";
import fanta1 from "../../assets/fanta1.png";
import fanta2 from "../../assets/fanta2.png";
import fanta3 from "../../assets/fanta3.png";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import { FaWhatsapp } from "react-icons/fa";

const Drinks = [
  {
    id: 1,
    title: "Fanta",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias itaque soluta asperiores voluptate suscipit. ",
    price: "$40",
    modal: "Fanta",
    img: fanta1,
    bgColor: "#cf4f00",
  },
  {
    id: 2,
    title: "Fanta Zero",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias itaque soluta asperiores voluptate suscipit. Repellendus deserunt eligendi expedita corrupti",
    price: "$100",
    modal: "Zero",
    img: fanta2,
    bgColor: "#727272",
  },
  {
    id: 3,
    title: "Coca Cola",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias itaque soluta asperiores voluptate suscipit. ",
    price: "$10",
    modal: "Cola",
    img: fanta3,
    bgColor: "#Ac1a00",
  },
];

const Hero = () => {
  const [activeData, setActiveData] = useState(Drinks[0]);

  const slideRight = (delay) => {
    return {
      hidden: {
        opacity: 0,
        x: 100,
      },

      visible: {
        opacity: 1,
        x: 0,

        transition: {
          delay: delay,
          duration: 0.5,
          ease: easeInOut,
        },
      },
      exit: {
        x: -50,
        opacity: 0,
        transition: {
          duration: 0.2,
          ease: easeInOut,
        },
      },
    };
  };

  const handleActiveData = (data) => {
    setActiveData(data);
  };
  return (
    <>
      <motion.div
        initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}
        transition={{ duration: 0.8 }}
        className=" "
      >
        {/* Navbar component */}
        <Navbar />

        {/* Data Info */}
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
          <div className="flex flex-col justify-between py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1 ">
            <div className="text-white space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={activeData.id}
                  data-cursor-text=""
                  variants={slideRight(0.2)}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className=" text-3xl lg:text-6xl xl:text-7xl leading-tight font-bold hand-writing text-shadow inline-block"
                >
                  {activeData.title}
                </motion.h1>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={slideRight(0.4)}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="leading-loose text-white/80"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.button
                  key={activeData.id}
                  style={{ color: activeData.bgColor }}
                  variants={slideRight(0.6)}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="px-4 py-2 inline-block bg-white rounded-sm font-normal"
                >
                  Order Now
                </motion.button>
              </AnimatePresence>

              {/* list separator */}

              <motion.div
                key={activeData.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
                className="flex justify-center items-center gap-4 md:justify-start !md:mt-24 !md:mb-10 "
              >
                <div className="w-[80px] h-[1px] bg-white"></div>
                <p>Top Recommendations</p>
                <div className="w-[80px] h-[1px] bg-white"></div>
              </motion.div>
              {/* Image selector */}
              <div className="grid grid-cols-3 gap-8">
                {Drinks.map((data, index) => (
                  <div
                    key={index}
                    className="space-y-3 hover:scale-105 duration-200 transition-all cursor-pointer"
                  >
                    <div className=" flex justify-center">
                      <img
                        src={data.img}
                        alt={data.img}
                        className={`w-[80px] img-shadow ${
                          activeData.img === data.img
                            ? "opacity-100"
                            : "opacity-50"
                        } `}
                        onClick={() => handleActiveData(data)}
                      />
                    </div>
                    <div className="text-center space-y-1 !mt-6">
                      <p className="text-base opacity-50">{data.modal}</p>
                      <p className="text-xl font-bold ">{data.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Hero Image */}
          <div className="flex flex-col justify-end items-center order-1 md:order-2 relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  x: -100,
                  transition: {
                    duration: 0.4,
                  },
                }}
                src={activeData.img}
                alt={activeData.title}
                className="w-[150px] md:w-[200px] xl:w-[300px] relative z-10"
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  x: -100,
                  transition: {
                    duration: 0.4,
                  },
                }}
                className="text-[300px] font-extrabold font-poppins text-white/5 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 "
              >
                {activeData.modal}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="text-3xl text-white fixed bottom-10 hover:rotate-[360deg] duration-500 z-[9999] mix-blend-difference">
            <a href="#">
              {" "}
              <FaWhatsapp />{" "}
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
