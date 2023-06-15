import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from "framer-motion";
function Projects() {
    const projectsData = [
        {
          image: "/GameShop2.jpg",
          projectName: "GameShop",
          projectLink: "https://expo.dev/@deamond/GameShopLocal?release-channel=default",
          projectDescription:
            "This is a mobile aplication that uses information about API videogames and the posibility to buy and sell this between users registered, you can filter by platform, genre, price, alphabet and score. This aplication was created to users interact with payment gateway with Stripe, also too see the details of each videoGame. In the registered you can authenticate by Google, and some users can access to administrator panel to see statistics and logical deletion from the another users",
          projectTech: [
            "React Native",
            "Redux Toolkit",
            "StyleSheet",
            "Stripe",
            "NodeMailer",
            "Node JS",
            "Express",
            "Sequelize",
            "PostgreSQL",
          ],
          projectExternalLinks: {
            github: "https://github.com/Equipo-4-Henry-GameShop/GameShop",
            externalLink: "",
          },
          status: "In Process"
        },
        {
          image: "/Project3Hire3.jpg",
          projectName: "HireMySkills",
          projectLink: "https://pf-hire-my-skills.vercel.app/",
          projectDescription:
            "HireMySkill is an aplication, that you can hire any service about you need and provide your service if you have thatm you can be registered and buy with payment gateway with Stripe, you receive an email notice about this. If you have the admin token then you can do the logical deletion, send promotions.",
          projectTech: [
            "Html",
            "CSS",
            "JavasCript",
            "React",
            "Redux",
            "Stripe",
            "NodeMailer",
            "Node.js",
            "Express",
            "PostgreSQL",
            
          ],
          projectExternalLinks: {
            github: "https://github.com/sergioare/PF-HireMySkills",
            externalLink: "https://pf-hire-my-skills.vercel.app/",
          },
          status: "In Process"

        },
        {
          image: "/Project1.jpg",
          projectName: "VideoGamesAPP",
          projectLink: "https://github.com/Gaova777/PI-VideoGames",
          projectDescription:
            "In this aplication I used the ApiRest Videogames to achieve differents logics with React, Redux, using a backend with NodeJS, Express, Sequelize, you can create new videoGames, Filter with Platforms, genre, Rating and Alphabet",
          projectTech: [
            "Html",
            "CSS",
            "JavasCript",
            "React",
            "Redux",
            "Node.js",
            "Sequelize",
            "Express",
            "PostgreSQL",
          ],
          projectExternalLinks: {
            github: "https://github.com/Gaova777/PI-VideoGames",
            externalLink: "https://github.com/Gaova777/PI-VideoGames",
          },
          status: "Finalized"

        },
      ];
      return (
        <div className="projects" id="work">
          <motion.div
            className="title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
              visible: { opacity: 1, y: -50 },
              hidden: { opacity: 0, y: 0 },
            }}
          >
            <h2>Some Things I’ve Built</h2>
          </motion.div>
          <div className="projects-container">
            {projectsData.map(
              ({
                image,
                projectDescription,
                projectLink,
                projectExternalLinks,
                projectName,
                status,
                projectTech,
              }) => {
                return (
                  <motion.div
                    className="project"
                    key={projectName}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    variants={{
                      visible: { opacity: 1, y: -50 },
                      hidden: { opacity: 0, y: 0 },
                    }}
                  >
                    <div className="project-image">
                      <div className="project-image-overlay"></div>
                      <div className="project-image-container">
                        <Image src={image} fill alt={projectName} quality={100} />
                      </div>
                    </div>
                    <div className="project-info">
                      <p className="project-info-overline">Featured Project</p>
                      <h3 className="project-info-title">{projectName}</h3>
                      <div className="project-info-description">
                        <p>{projectDescription}</p>
                      </div>
                      <div className='project-info-status' >
                        <p>Status: {status}</p>
                      </div>
                      <ul className="project-info-tech-list">
                        {projectTech.map((tech) => (
                          <li className="project-info-tech-list-item" key={tech}>
                            {tech}
                          </li>
                        ))}
                      </ul>
                      <ul className="project-info-links">
                        <li className="project-info-links-item">
                          <Link
                            href={projectExternalLinks.github}
                            className="project-info-links-item-link"
                          >
                            <FiGithub />
                          </Link>
                        </li>
                        <li className="project-info-links-item">
                          <Link
                            href={projectExternalLinks.externalLink}
                            className="project-info-links-item-link"
                          >
                            <FiExternalLink />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      );
    }
    
    export default Projects;