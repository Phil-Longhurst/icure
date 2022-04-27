import delve from 'dlv';
import CustomLink from '../../shared/CustomLink';
import styles from  '../../../styles/components/home.module.scss'

const Hero = ({ images, header, text, buttons, ifText }) => {
  const title = delve(header, 'title');
  if (ifText) {
   return (
    <section className={styles.hero}>
    <div className={styles.container}>

      {/* left */}
      <div className={styles.left}>
        <h1>{title}</h1>

        <div className={styles.box}>
          {/* circle one */}
          <div className={styles.boxbox}>
            <div className={styles.circle}></div>
            <div className={styles.text}>
              <span>Projects Supported</span>
              <h3>300</h3>
            </div>
          </div>
          {/* circle two */}
          <div className={styles.boxbox}>
            <div className={styles.circle}></div>
            <div className={styles.text}>
              <span>Return on Investment</span>
              <h3>100K</h3>
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <div className={styles.right}>
        <div className={styles.square}>

        </div>
      </div>

    </div> 
  </section>
   )
  } else {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* left */}
        <div className={styles.left}>
          <h1>{title}</h1>
          <p>{text}</p>

          <div className={styles.box}>
            {/* circle one */}
            <div className={styles.boxbox}>
              <div className={styles.circle}></div>
              <div className={styles.text}>
                <span>Projects Supported</span>
                <h3>300</h3>
              </div>
            </div>
            {/* circle two */}
            <div className={styles.boxbox}>
              <div className={styles.circle}></div>
              <div className={styles.text}>
                <span>Return on Investment</span>
                <h3>100K</h3>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className={styles.right}>
          <div className={styles.square}>

          </div>
        </div>

      </div> 
    </section>
    );
  }
};

Hero.defaultProps = {};

export default Hero;
