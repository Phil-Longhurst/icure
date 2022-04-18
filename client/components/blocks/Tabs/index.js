import delve from 'dlv';
import styles from  '../../../styles/components/tabs.module.scss'

const Tabs = ({image, text, title}) => {

  return (
    <section className={styles.tabs}>
      <div className={styles.container}>
        <div className={styles.top}>
          <span>ICURe Customers</span>
          <h2>Is ICURe right for you?</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
          <button>How it Works</button>
        </div>

        <div className={styles.tab}>
          <div>
            <span>tabs one</span>
            <span>tab two</span>
            <span>tab three</span>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.left}>
            <h2>Is ICURe right for you?</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
          </div>     
          <div className={styles.right}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg"
            />
          </div>
        </div>

      </div> 
    </section>
  );
};

Tabs.defaultProps = {};

export default Tabs;
