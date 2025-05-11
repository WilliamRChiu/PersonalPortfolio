import React from "react";
import ProjectCard from "../../components/ProjectCards/ProjectCards";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Projects.module.css";
import Footer from "../../components/Footer/Footer";


export default function Projects(){
    return(
        <>
            <Navbar/>
            <div className={styles.projectsContainer}>
                <ProjectCard 
                ProjectName = "Test"
                link = "bob" 
                description = "asdasd" 
                tags = {["JS", "React"]}
                />
                <ProjectCard 
                ProjectName = "Test2"
                link = "bob" 
                description = "asdasdfdsfdsf" 
                tags = {["JS", "React", "Python"]}
                />
            </div>
            <Footer/>
        </>
    )
}