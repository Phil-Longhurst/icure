import delve from 'dlv';
import Link from 'next/link';
import styles from  '../../../styles/nav.module.scss'

const Nav = ({ links, locale }) => {
  return (
    <nav className={styles.nav__nav}>
      {links.map((link, index) => (
        <Link
          href={`${delve(link, 'href')}?lang=${locale || 'en'}`}
          key={`navigationLink-${index}`}
        >
          <a className="md:mr-10 hover:text-gray-900" key={`link-${index}`}>
            {delve(link, 'label')}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
