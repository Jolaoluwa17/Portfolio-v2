"use client";

import styles from "./page.module.css";
import NavBar from "@/components/rootDirectory/navBar/NavBar";
import Socials from "@/components/rootDirectory/socials/Socials";
import Intro from "@/components/rootDirectory/intro/Intro";
import Chat from "@/components/rootDirectory/chat/Chat";
import Skills from "@/components/rootDirectory/skills/Skills";
import Projects from "@/components/rootDirectory/projects/Projects";
import { useRef } from "react";

export default function Home() {
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.meteorContainer}></section>
      <section className={styles.leftSection}>
        <Socials />
      </section>
      <section className={styles.rightSection}>
        <NavBar
          onSkillsClick={handleScrollToSkills}
          onProjectsClick={handleScrollToProjects}
        />
        <Intro />
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
      </section>
      <section className={styles.chat_section}>
        <Chat />
      </section>
    </main>
  );
}
