import React from "react";
import Tags from "./Tags/Tags";
import styles from "./ProjectCards.module.css";


export default function ProjectCard ({ProjectName, link, description, tags}) {
    return (
        <div className={styles.card}>
            <a className={styles.title} href={link}>{ProjectName}</a>
            <p className={styles.description}>{description}</p>
            <div className={styles.tags}>
                {tags.map((tag)=>(
                    <Tags name = {tag}/>
                ))}
            </div>
        </div>
    )
}