import styles from  '../../../styles/components/features.module.scss'

const Features = ({ cards, title }) => {
  return (
    <div className={styles.outcontainer}>
      <h2>{title}</h2>
    </div>
  );
};

Features.defaultProps = {};

export default Features;
