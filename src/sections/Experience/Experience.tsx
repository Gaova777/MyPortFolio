import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 3.8}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Nakiro Technology SAS",
      role: "Full Stack Developer",
      url: "http://www.nakirosystem.com/",
      start: "August 2022",
      end: "May 2023",
      shortDescription: [
        "I oversaw creating an Implementation RestAPI and connect different Invoice Platform like Siigo and Alegra, in the star accounting and administration Software SARFI in Laravel and Liveware MySQL.",
        "Throughout my work, I've utilized React and Redux-Toolkit SASS, HTML, Javascript, PHP, Laravel and Liveware to achieve the differents goals in Sarfi Software .",
        "I've also managed Support to differents clients that had Sarfi Software in their company",
      ],
    },
    {
      name: "University  Technologic of Pereira",
      role: "Research Materials Lab Assistant",
      url: "https://www.utp.edu.co",
      start: "Febrary 2019",
      end: "December 2021",
      shortDescription: [
        "I belonged to an investigation group about Plasm and new materials, handle MATLAB Software based in C language to implement simulations and synthetize nanoparticles in liquid environment, recollecting data models.",
        "I was able to make an article about synthesized a characteristic nanomaterial thanks for the simulations.",
        "I was an auxiliary to handle the instrument specially..",
      ],
    },
    {
      name: "Computer Science Assistant",
      role: "Assistant Independient",
      url: "Independient",
      start: "November 2020",
      end: "November 2022",
      shortDescription: [
        "I have taught students different basic topics about programming, in javascript Vanilla, MySQL and PHP, Python, React, PHP and MySQL.",
        "Managed groups of students to create FullStack applications for the different internships.",
      ],
    },
    
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link" target="_blank">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;