import React from "react";
import FooterLeft from "./footer-sections/footer-left/FooterLeft";
import FooterRight from "./footer-sections/footer-right/FooterRight";
import './footer.css'

function Footer() {
  return (
    <footer class="footer">
      <div class="container footer-container">
        <FooterLeft />
        <FooterRight />
      </div>
    </footer>
  );
}

export default Footer;
