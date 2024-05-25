import Link from "next/link";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <div className="containerText">
            <h1>PORTFOLIO</h1>
          </div>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Colin MLG</h1>
            <h6 className={styles.bio}>Full Stack Web Developer</h6>
            <Link href="/projects" preload="true">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact" preload="true">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
