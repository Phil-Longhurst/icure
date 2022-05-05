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
					<div className={styles.footer__news}>
							<p>	Subscribe to ICURe Newsletter</p>
              <p>Sign up to our newsletter to stay updated with everything ICURe related!</p>
              <label>Email Address</label>
              <input type="email" placeholder="email"/>
					</div>
          <div  className={styles.footer__nav}>
            <h4></h4>
						<ul id={styles.menu_footer_showcases}>
              <li>hello </li>
              <li>hello </li>
              <li>hello </li>
            </ul>
					</div>
					<div className={styles.footer__showcases}>
            <h4></h4>
            <ul className={styles.menu_footer_showcases}>
              <li>hello </li>
              <li>hello </li>
              <li>hello </li>
            </ul>
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
