import styles from '../styles/HomePage.module.css'
import Link from 'next/link'
const AboutPage = () => {
    return (
        <div>
            <h3>A Little Bit About Me</h3>
            <br />
            <h5 className={styles.textWeight}>
                Hello there! I'm Colin, a Broadcast Audiovisual Technician at
                WarnerBros with a deep passion for development. Before joining
                WarnerBros, I immersed myself in the world of programming,
                focusing particularly on front-end development. My favorite
                technologies include React, NextJS, and TypeScript, among many
                others. On this portfolio, you'll find a showcase of my
                projects, skills, and the journey that has brought me to where I
                am today. Feel free to explore and get in touch if you'd like to
                collaborate or learn more about my work. Thank you for visiting
                _
            </h5>
            <br />
            <Link href="/projects" preload="true">
                <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact" preload="true">
                <button className={styles.outlined}>Contact Me</button>
            </Link>
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: { title: 'About' },
    }
}

export default AboutPage
