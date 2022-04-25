import styles from  '../../../styles/components/journey.module.scss'
import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Journey = ({ title, subTitle, rows }) => {

  return (
    <section className={styles.journey}>
      <div className={styles.container}>
        <div className={styles.title}>
          <span>{subTitle}</span>
          <h2>{title}</h2>
        </div>
        <div className={styles.row}>
             {/* index */}
             <div className={styles.index}>
               <span>01</span>
             </div>
             {/* icon */}
             <div className={styles.icons}>
   
             </div>
             {/* text */}
             <div className={styles.text}>
               <h3>Lean Launch Programme</h3>
               <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
             </div>
             {/* btn */}
             <div className={styles.btn}>
               <button>Get In Contact</button>
             </div>
           </div>

        {rows &&
        rows.map((row, index) => (
          <div className={styles.row}>
          {/* index */}
          <div className={styles.index}>
            <span key={`rowCheck-${index}`}>01</span>
          </div>
          {/* icon */}
          <div className={styles.icons}>

          </div>
          {/* text */}
          <div className={styles.text}>
            <h3>Lean Launch Programme {delve(row, 'text')}</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
          </div>
          {/* btn */}
          <div className={styles.btn}>
            <button>Get In Contact</button>
          </div>
        </div>
        ))}
      </div> 
    </section>
  );
};

Journey.defaultProps = {};

export default Journey;
