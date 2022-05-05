import styles from  '../../../styles/components/text-img.module.scss'
import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const TextImg = ({ image }) => {

  return (
    <section className={styles.textImg}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span>Caption</span>
          <h2>Heading 1</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
        </div>
        <div>
          <img className={styles.right}
              src={getStrapiMedia(delve(image, "data.attributes.url"))}
              alt={delve(image, "data.attributes.alternativeText")}
            />
        </div>
      </div> 
    </section>
  );
};

TextImg.defaultProps = {};

export default TextImg;
