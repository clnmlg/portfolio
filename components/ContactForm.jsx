import React from 'react'
import styles from '../styles/ContactPage.module.css'

const ContactForm = () => {
    return (
        <div>
            <div>
                <h3 className={styles.heading}>Or Fill Out This Form</h3>
                <form className={styles.form}>
                    <div className={styles.flex}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value=""
                                onChange=""
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value=""
                                onChange=""
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            value=""
                            onChange=""
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="5"
                            value=""
                            onChange=""
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
