"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Work Experience",
    id: "work-experience",
    content: (
      <>
        <ul className="list-disc pl-2">
          <li>
            Engilabs: Software Engineer (Nov 2023 - Present, Agadir Remotely)
          </li>
          <li>
            X-Hub: Software Engineer (Dec 2022 - Oct 2023, Casablanca Remotely)
          </li>
          <li>
            X-Hub: Intern Front-end developer (June 2022 - Dec 2022, Casablanca
            Remotely)
          </li>
          <li>
            DevoTech: Intern Back-end developer (Aug 2021 - Nov 2021, Agadir
            Remotely)
          </li>
          <li>
            Storeino: Intern Front-end developer (March 2021 - May 2021, Agadir)
          </li>
        </ul>
        <Link
          target="_blank"
          className="px-6 mt-4 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
          href="https://www.linkedin.com/in/mohamed-zniguef-a148351a4"
          passHref
        >
          See more details
        </Link>
      </>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Html, Css, Scss, TailwindCss</li>
        <li>JavaScript, TypeScript, React</li>
        <li>Express, Nest.js</li>
        <li>Java, Spring boot</li>
        <li>Git, Github, GitLab</li>
        <li>Redux, GraphQL</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript Essential Training</li>
        <li>Full-Stack With Node.js, Express, and MongoDB</li>
        <li>Write JavaScript for the web</li>
        <li>Get started with React</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("work-experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. <br />
            I have experience working with JavaScript (React, Nestjs), Java
            (Spring boot) <br />I am always looking to expand my knowledge and
            skill set. I am a team player and I am excited to work with others
            to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("work-experience")}
              active={tab === "work-experience"}
            >
              {" "}
              Work experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
