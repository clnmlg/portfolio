import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "email",
    link: "colin.mlg@posteo.net",
    href: "mailto:colin.mlg@posteo.net",
  },
  {
    social: "github",
    link: "clnmlg",
    href: "https://github.com/clnmlg",
  },
  {
    social: "linkedin",
    link: "linkedin",
    href: "https://fr.linkedin.com/in/colin-mlg",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
