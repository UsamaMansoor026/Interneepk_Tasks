import React from "react";
import styles from "./Footer.module.css";
import { logos, socialIcons } from "../../assets/assets";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logos.mainLogo} alt="" />
      </div>
      <div className={styles.wrapper}>
        <div>
          <h4>Company</h4>
          <ul className={styles.list}>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div>
          <h4>Get Help</h4>
          <ul className={styles.list}>
            <li>Training Videos</li>
            <li>Request Help</li>
          </ul>
        </div>
        <div>
          <h4>Socialize with us</h4>
          <ul className={styles.icons}>
            <img src={socialIcons.Youtube} alt="" />
            <img src={socialIcons.Instagram} alt="" />
            <img src={socialIcons.Facebook} alt="" />
            <img src={socialIcons.Twitter} alt="" />
          </ul>
          <ul className={styles.list}>
            <li>+923456905237</li>
            <li>info@internee.pk</li>
            <li>Copyright ©2024 internee.pk Pvt Ltd.</li>
            <li>All rights reserved.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
