import styles from  '../../../styles/components/contact.module.scss'

const Contact = ({ text }) => {

  return (
    <section className={styles.contact}>
        <div className={styles.container}>
            <div className={styles.left}>
                <h2>Get In Contact</h2>
                <p>Book your place/find out more information about the lean launch/ICURe Main/post programme support</p>
                <div>
                    <label>Name</label>
                    <input></input>

                    <label>Email</label>
                    <input></input>

                    <label>Enquiry Type</label>
                    <input></input>

                    <label>Message</label>
                    <textarea></textarea>

                    <input className={styles.submit} type="submit"></input>
                </div>
            </div>
            {/* right */}
            <div className={styles.right}>
                <div className={styles.square}></div>
            </div>
        </div>
    </section>
  );
};

Contact.defaultProps = {};

export default Contact;
