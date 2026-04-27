import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import VantaBackgroundwithout from "../Components/VantaBackgroundwithout.jsx";

// Experience component
const ExperienceItem = ({ company, role, duration, points }) => (
    <div className="relative">
        <div className="absolute -left-3 mt-1 top-1 w-3 h-3 bg-teal-500 rounded-full border border-white"></div>
        <div>
            <h4 className="text-xl ml-2 font-bold">{company}</h4>
            <p className="italic text-sm text-gray-400">{role} / {duration}</p>
            <ul className="mt-2 list-inside space-y-1 text-gray-300 text-sm">
                {points.map((point, idx) => (
                    <li key={idx}>{`🔹${point}`}</li>
                ))}
            </ul>
        </div>
    </div>
);

// Skill component
const SkillItem = ({ logo, name }) => (
    <div className="flex items-center space-x-3">
        <img src={logo} alt={name} className="w-10 h-10 object-contain" />
        <span className="text-white text-lg">{name}</span>
    </div>
);

// Logos
import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/tailwind-css.svg";
import nodeLogo from "../assets/nodejs.svg";
import mongodbLogo from "../assets/mongodb.svg";
import github from "../assets/github.svg";
import bootstrap from "../assets/bootstrap.svg";
import express from "../assets/express.svg";
import docker from "../assets/docker.svg";
import python from "../assets/python.svg";
import css from "../assets/css-3.svg";
import html from "../assets/html-5.svg";
import js from "../assets/javascript.svg";
import postman from "../assets/postman.svg";
import selenium from "../assets/selenium.svg";
import java from "../assets/java.svg";
import git from "../assets/git.svg";
import django from "../assets/django.svg";
import mysql from "../assets/mysql.svg";
import sassCover from "../assets/sassCover.jpg";
import nextjs from "../assets/nextjs.jfif";
import sqlite from "../assets/sqllight.jfif";
import boltdb from "../assets/boltdb.png";
import bash from "../assets/bash.jpg";
import Playwright from "../assets/playwright.svg";
import Pytest from "../assets/pytest.svg";
import podman from "../assets/podman.png";
import rabbitmq from "../assets/rabbitmq.svg";
function About() {
    return (
        <section className="relative text-white py-16 px-4 md:px-30 overflow-hidden min-h-screen" id="about">
            <div className="absolute inset-0 -z-0">
                <VantaBackgroundwithout />
            </div>


            <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-12 text-center text-indigo-500">About Me</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Experience Section */}
                    <div className="col-span-2">
                        <h3 className="text-4xl font-semibold mb-6">Experience</h3>
                        <div className="space-y-10 border-l border-gray-700 pl-6">
                            <ExperienceItem
                                company="HCL Technologies"
                                role="Senior Software Engineer"
                                duration="March 2026 – Present"
                                points={[
                                    "Developing and maintaining scalable full-stack applications using React, Node.js, and modern frameworks.",
                                    "Designing RESTful APIs and integrating backend services with frontend systems.",
                                    "Optimizing application performance and improving user experience across modules.",
                                    "Collaborating with cross-functional teams in Agile environment to deliver high-quality features.",
                                    "Reviewing code, debugging critical issues, and ensuring best coding practices."
                                ]}
                            />

                            <ExperienceItem
                                company="Kellton Tech Solutions"
                                role="Senior Software QA Engineer"
                                duration="Oct 2025 – March 2026"
                                points={[
                                    "Designed and executed automated test scripts using Selenium for web applications.",
                                    "Performed API testing and validation using Postman to ensure backend reliability.",
                                    "Identified, documented, and tracked bugs, improving overall product quality.",
                                    "Collaborated closely with developers to reproduce issues and ensure faster resolution.",
                                    "Contributed to test planning, regression testing, and continuous integration workflows."
                                ]}
                            />
                            <ExperienceItem
                                company="Mobisec Technologies"
                                role="Product Manager"
                                duration="Oct 2024 – Oct 2025"
                                points={[
                                    "Developed full-stack enterprise applications using React and Next.js.",
                                    "Led development team; planned tech strategies, coded, and reviewed PRs.",
                                ]}
                            />
                            <ExperienceItem
                                company="Mobisec Technologies"
                                role="Quality Assurance Engineer"
                                duration="Jul 2023 – Oct 2024"
                                points={[
                                    " Strategic Roadmapping & Feature Prioritization",
                                    " Agile Project Management (JIRA)",
                                    " Competitive Analysis & Market Alignment",
                                    " Manual + Automated QA Leadership",
                                    " Client Demos, Feedback Loops & Documentation",
                                    " Stakeholder Communication & Reporting",
                                ]}
                            />

                            <ExperienceItem
                                company="Variables Software"
                                role="QA/QC Engineer"
                                duration="Feb 2021 – Jul 2023"
                                points={[
                                    "Create Test scenarios and write test cases using Testlink.",
                                    "Perform Smoke, Sanity, Functional, Retesting, Regression Testing.",
                                    "Execute test cases using Selenium WebDriver with TestNG framework.",
                                    "Experience in Page Object Model (POM) in TestNG.",
                                    "API Testing with Postman (REST API).",
                                ]}
                            />
                        </div>

                        <a
                            href="https://drive.google.com/file/d/1EyPyEwwTVcI9QdiR2SmFGEIAH6urAb7Y/view?usp=sharing"
                            target="_blank"
                            className="mt-8 flex direction-row hover:text-blue-600 transition"
                            rel="noreferrer"
                        >
                            View Full Résumé
                            <GoArrowUpRight className="ml-2 mt-2" />
                        </a>
                    </div>

                    {/* Skills Section */}
                    <div>
                        <h3 className="text-3xl font-semibold mb-6">Skills & Technologies</h3>

                        <div className="space-y-8">

                            {/* Frontend */}
                            <div>
                                <h4 className="text-xl font-semibold mb-4">Frontend</h4>
                                <div className="flex flex-wrap gap-6">
                                    <SkillItem logo={reactLogo} name="React" />
                                    <SkillItem logo={js} name="JavaScript" />
                                    <SkillItem logo={html} name="HTML" />
                                    <SkillItem logo={css} name="CSS" />
                                    <SkillItem logo={tailwindLogo} name="Tailwind CSS" />
                                    <SkillItem logo={bootstrap} name="Bootstrap" />
                                    <SkillItem logo={nextjs} name="Next.js" />
                                    <SkillItem logo={sassCover} name="SCSS" />
                                </div>
                            </div>

                            {/* Backend */}
                            <div>
                                <h4 className="text-xl font-semibold mb-4">Backend</h4>
                                <div className="flex flex-wrap gap-6">
                                    <SkillItem logo={nodeLogo} name="Node.js" />
                                    <SkillItem logo={express} name="Express" />
                                    <SkillItem logo={django} name="Django" />
                                </div>
                            </div>

                            {/* Databases */}
                            <div>
                                <h4 className="text-xl font-semibold mb-4">Databases</h4>
                                <div className="flex flex-wrap gap-6">
                                    <SkillItem logo={mongodbLogo} name="MongoDB" />
                                    <SkillItem logo={mysql} name="MySQL" />
                                    <SkillItem logo={sqlite} name="SQL Lite" />
                                    <SkillItem logo={boltdb} name="BoltDB" />

                                </div>
                            </div>

                            {/* Programming Languages */}
                            <div>
                                <h4 className="text-xl font-semibold mb-4">Languages</h4>
                                <div className="flex flex-wrap gap-6">
                                    <SkillItem logo={js} name="JavaScript" />
                                    <SkillItem logo={java} name="Java" />
                                    <SkillItem logo={python} name="Python" />
                                    <SkillItem logo={bash} name="Shell scripting" />
                                </div>
                            </div>

                            {/* Tools */}
                            <div>
                                <h4 className="text-xl font-semibold mb-4">Tools & DevOps</h4>
                                <div className="flex flex-wrap gap-6">
                                    <SkillItem logo={git} name="Git" />
                                    <SkillItem logo={github} name="GitHub" />
                                    <SkillItem logo={docker} name="Docker" />
                                    <SkillItem logo={postman} name="Postman" />
                                    <SkillItem logo={selenium} name="Selenium" />
                                    <SkillItem logo={Playwright} name="Playwright" />
                                    <SkillItem logo={Pytest} name="Pytest" />
                                    <SkillItem logo={podman} name="Podman" />
                                    <SkillItem logo={rabbitmq} name="RabbitMQ" />
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
