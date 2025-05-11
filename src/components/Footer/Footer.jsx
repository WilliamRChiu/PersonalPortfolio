import React from "react";
import styles from "./Footer.module.css"

export default function Footer(){
    const now = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
    return(
        <footer className="styles.footer">
            <p>© 2025 William Chiu. Last updated: {now}</p>
        </footer>
    )
}