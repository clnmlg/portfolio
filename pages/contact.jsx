import ContactCode from "../components/ContactCode";
import ContactForm from "../components/ContactForm";
import styles from "../styles/ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Reach Out Via Socials</h3>
        <ContactCode />
      </div>
      <ContactForm />
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Contact" },
  };
}

export default ContactPage;
