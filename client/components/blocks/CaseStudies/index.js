import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import styles from  '../../../styles/components/case-studies.module.scss'

const CaseStudies = ({ image, title }) => {

  return (
    <section className={styles.caseStudies}>
        <div className={styles.container}>
            <div className={styles.title}>
                <span>Our Case Studies</span>
                <h1>Turn our success into your success…</h1>
            </div>

            <div className={styles.colOne}>
                <div className={styles.case}>
                    <img
                        src={getStrapiMedia(delve(image, "data.attributes.url"))}
                        alt={delve(image, "data.attributes.alternativeText")}
                        className="relative mx-auto shadow-lg rounded-lg w-auto"
                        />
                        <h3>case study 1</h3>
                    </div>
                <div className={styles.case}>
                    <img
                        src={getStrapiMedia(delve(image, "data.attributes.url"))}
                        alt={delve(image, "data.attributes.alternativeText")}
                        className="relative mx-auto shadow-lg rounded-lg w-auto"
                    />
                    <h3>case study 1</h3>
                </div>
            </div>

            <div className={styles.colTwo}>
                <div className={styles.case}>
                    <img
                        src={getStrapiMedia(delve(image, "data.attributes.url"))}
                        alt={delve(image, "data.attributes.alternativeText")}
                        className="relative mx-auto shadow-lg rounded-lg w-auto"
                        />
                        <h3>case study 1</h3>
                    </div>
                <div className={styles.case}>
                    <img
                        src={getStrapiMedia(delve(image, "data.attributes.url"))}
                        alt={delve(image, "data.attributes.alternativeText")}
                        className="relative mx-auto shadow-lg rounded-lg w-auto"
                    />
                    <h3>case study 1</h3>
                </div>
            </div>

            <div className={styles.colThree}>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    </section>
  );
};

CaseStudies.defaultProps = {};

export default CaseStudies;
