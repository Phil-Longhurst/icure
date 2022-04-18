import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import styles from  '../../../styles/components/media.module.scss'

const Media = ({ image, title }) => {

  return (
    <section className={styles.media}>
        <div className={styles.container}>
            <img
              src={getStrapiMedia(delve(image, "data.attributes.url"))}
              alt={delve(image, "data.attributes.alternativeText")}
              className="relative mx-auto shadow-lg rounded-lg w-auto"
            />
        </div>
    </section>
  );
};

Media.defaultProps = {};

export default Media;
