import styles from  '../../../styles/components/cohort.module.scss'

const Cohort = ({ title, subTitle, date, places, btnText }) => {

  return (
    <section className={styles.cohort}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.row}>
            {/* index */}
            <div className={styles.index}>
              <span className={styles.subTitle}>{subTitle}Next cohort commences</span>
              <span className={styles.date}>{date}5 April 2022</span>
              <span className={styles.places}>{places}12 places left</span>
            </div>
            {/* icon */}
            <div className={styles.icons}>
            </div>
            {/* text */}
            <div className={styles.text}>
              <span>Next cohort commences</span>
              <h3>ICURe Main</h3>
            </div>
            {/* btn */}
            <div className={styles.btn}>
              <button>{btnText}Request More Details</button>
              <p>or enroll today</p>
            </div>
          </div>
        </div> 
    </section>
  );
};

Cohort.defaultProps = {};

export default Cohort;
