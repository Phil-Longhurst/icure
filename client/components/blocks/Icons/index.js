import styles from  '../../../styles/components/icons.module.scss'

const Icons = ({ text }) => {

  return (
    <section className={styles.icons}>
      <div className={styles.container}>
        <div className={styles.title}>
          <span>How It Works</span>
          <h2>Your Journey starts with ICURe</h2>
        </div>

        <div className={styles.icon}>
          <div></div>
          <h3>ICURe Main</h3>
          <span>Our Case Studies</span>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
        </div>

        
        <div className={styles.icon}>
          <div></div>
          <h3>ICURe Main</h3>
          <span>Our Case Studies</span>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
        </div>

        
        <div className={styles.icon}>
          <div></div>
          <h3>ICURe Main</h3>
          <span>Our Case Studies</span>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
        </div>

      </div> 
    </section>
  );
};

Icons.defaultProps = {};

export default Icons;
