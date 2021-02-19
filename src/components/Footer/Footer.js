import React from "react";
import footerStyles from "../../mainStyles/footer.modules.css";
import "./footers.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <p className="col-sm">
            Copyright {new Date().getFullYear()} © Electrical Maintenance Lusaka
            Ltd
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
