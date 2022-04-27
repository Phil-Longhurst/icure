import delve from 'dlv';
import Nav from './nav';
import styles from  '../../../styles/nav.module.scss'

const Navigation = ({ navigation, pageData, type }) => {
  return (
    <header className={styles.nav}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <h1>iCURe</h1>
        <Nav
          links={delve(navigation, 'links')}
          locale={delve(pageData, 'attributes.locale')}
        />
      </div>
    </header>
  );
};

Navigation.defaultProps = {};

export default Navigation;
