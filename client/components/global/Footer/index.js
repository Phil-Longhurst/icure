import delve from 'dlv';
import CustomLink from '../../shared/CustomLink';
import SocialLogo from '../../shared/SocialLogo';
import Columns from './columns';
import styles from  '../../../styles/footer.module.scss'

const Footer = ({ footer, pageData }) => {
  const label = delve(footer, 'label');
  const theme = delve(footer, 'button.theme');
  const socialNetworks = delve(footer, 'socialNetworks');

  return (
			<footer className={styles.footer}>	 
        <div className={styles.container}>
          {/* news col 1 */}
          <div className={styles.footer__news}>
							<p>	Subscribe to ICURe Newsletter</p>
              <p>Sign up to our newsletter to stay updated with everything ICURe related!</p>
              <div>
                <input type="email" placeholder="email"/>
                <input type="submit" value="Sign Up"/>
              </div>
					</div>
          {/* nav col 2 */}
          <div  className={styles.footer__nav}>
            <h4>Sitemap</h4>
						<ul id={styles.menu_footer_showcases}>
              <li>hello </li>
              <li>hello </li>
              <li>hello </li>
            </ul>
					</div>
          {/* showcases col 3 */}
					<div className={styles.footer__showcases}>
            <h4>Showcases</h4>
            <ul className={styles.menu_footer_showcases}>
              <li>hello </li>
              <li>hello </li>
              <li>hello </li>
            </ul>
					</div>
          {/* showcases col 4 */}
          <div className={styles.footer__showcases}>
            <h4>Socials</h4>
            <ul className={styles.menu_footer_showcases}>
              <li>hello </li>
              <li>hello </li>
              <li>hello </li>
            </ul>
					</div>
        </div>
          {/* terms */}
          <div className={styles.footer__terms}>
              <div className="container space-between">
                <p className={styles.footer__terms__date}>© ImpactFlow 2022</p>
                <p className={styles.footer__terms__terms}><a href="<?php echo get_field('terms', 'option'); ?>" target="blank">Terms of Service</a></p>
              </div>
            </div>
          {/* onqor */}
            <div className={styles.footer__onqor}>
              <div className="container space-between">
                <p>Site Designed &amp; Built By <a href="https://onqor.co.uk" target="_blank">ONQOR Ltd.</a></p>	
              </div>
            </div>
			</footer>
  );
};

Footer.defaultProps = {};

export default Footer;
