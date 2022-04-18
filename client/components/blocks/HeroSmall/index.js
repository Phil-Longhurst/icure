import styles from  '../../../styles/components/herosmall.module.scss'

const HeroSmall = ({ title, text }) => {

  return (
    <section className={styles.heroSmall}>
      <div className={styles.container}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div> 
    </section>
  );
};

HeroSmall.defaultProps = {};

export default HeroSmall;
