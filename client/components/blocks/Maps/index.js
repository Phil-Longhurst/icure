import styles from  '../../../styles/components/maps.module.scss'
import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Maps = ({ image }) => {

  return (
    <section className={styles.maps}>
        <img
          src={getStrapiMedia(delve(image, "data.attributes.url"))}
          alt={delve(image, "data.attributes.alternativeText")}
          className=""
        />
      <div className={styles.container}>
        <div className={styles.box}>   
          {/* name */}
            <div className={styles.boxbox}>
              <div className={styles.circle}></div>
              <div className={styles.text}>
                <span>Return on Investment</span>
                <h3>100K</h3>
              </div>
            </div>
          {/* text */}
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div> 
    </section>
  );
};

Maps.defaultProps = {};

export default Maps;            
