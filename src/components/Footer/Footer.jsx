import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.backToTop}>Back to top</div>

      {/* Main footer links */}
      <div className={classes.footerLinks}>
        <div className={classes.column}>
          <h3>Get to Know Us</h3>
          <a href="#">Careers</a>
          <a href="#">Amazon News Letter</a>
          <a href="#">About Amazon</a>
          <a href="#">Accessibility</a>
          <a href="#">Press Center</a>
          <a href="#">Investor Relations</a>
          <a href="#">Amazon Devices</a>
          <a href="#">Amazon Science</a>
        </div>

        <div className={classes.column}>
          <h3>Make Money with Us</h3>
          <a href="#">Sell products on Amazon</a>
          <a href="#">Sell on Amazon Business</a>
          <a href="#">Sell apps on Amazon</a>
          <a href="#">Become an Affiliate</a>
          <a href="#">Advertise Your Products</a>
          <a href="#">Self-Publish with Us</a>
        </div>

        <div className={classes.column}>
          <h3>Amazon Payment Products</h3>
          <a href="#">Amazon Rewards Visa Signature Cards</a>
          <a href="#">Amazon.com Store Card</a>
          <a href="#">Reload Your Balance</a>
          <a href="#">Currency Converter</a>
        </div>

        <div className={classes.column}>
          <h3>Let Us Help You</h3>
          <a href="#">Amazon and COVID-19</a>
          <a href="#">Your Account</a>
          <a href="#">Your Orders</a>
          <a href="#">Shipping Rates & Policies</a>
          <a href="#">Returns & Replacements</a>
          <a href="#">Help</a>
        </div>
      </div>

      {/* Bottom section */}
      <div className={classes.upperBottom}>
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />

        <div className={classes.bottomLinks}>
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Interest-Based Ads</a>
        </div>
        <p>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
}

export default Footer;