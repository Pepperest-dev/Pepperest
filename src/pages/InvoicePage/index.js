/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { withDefaultLayout } from "components/layouts";
import { getStringHash } from "libs/utils";
import { LockIcon } from "components/vectors";
import { PepperestContext } from "components/helpers/constant";

const config = {
  hasAlternateHeader: false,
  hasCommonHeader: true,
  showCart: false,
  commonHeaderTitle: "Customer Invoice",
  links: [],
  page: "invoice",
  isSettings: true,
  navBarTitle: "Customer Invoice",
};
const InvoicePage = ({ history }) => (
  <>
    <div className="invoice">
      <div className="row">
        <div className="col-12 col-lg-12">
          <div className="invoice-card">
            <div className="invoice-header">
              <img
                className="pepperest-logo"
                src="https://res.cloudinary.com/dlfltairk/image/upload/v1595847163/hornblower/pepperest-logo-white_2x.png"
                alt="pepperest logo"
              />
              <div className="details-container">
                <div className="invoice-userdetails">
                  <p>657-36363-366262</p>
                  <p>email@gmail.com</p>
                </div>
                <div className="invoice-address">
                  <p>
                    No 21, Yemi Adenuga street, <br />
                    Yaba, Lagos State
                  </p>
                  <p>10011</p>
                </div>
              </div>
            </div>
            <div className="invoice-subcontent">
              <div className="subcontent-address">
                <div className="billed-to">
                  <p className="grey-format">Billed To</p>
                  <p>
                    No 21, Yemi Adenuga street, <br />
                    Yaba, Lagos State
                  </p>
                </div>
                <div className="invoice-number">
                  <p className="grey-format">Invoice Number</p>
                  <p>0000000</p>
                  <p className="grey-format">Date of Issue</p>
                  <p>10/07/14</p>
                </div>
              </div>
              <div className="invoice-total">
                <p className="grey-format">Invoice Total</p>
                <p>N7,0000</p>
              </div>
            </div>
            <div className="invoice-content">
              <div className="item-header">
                <p>Description</p>
                <div className="item-unit">
                  <p>Quantity</p>
                  <p>Unit Cost</p>
                  <p>Amount</p>
                </div>
              </div>
              <div className="item-container">
                <div className="item-content">
                  <div className="item-content-description">
                    <p>Your Item Name</p>
                    <p>Item description goe here</p>
                  </div>
                  <div className="item-content-children">
                    <p className="item-quantity">2</p>
                    <p className="item-cost">N1000</p>
                    <p className="item-amount">N2000</p>
                  </div>
                </div>
                <div className="item-content">
                  <div className="item-content-description">
                    <p>Your Item Name</p>
                    <p>Item description goe here</p>
                  </div>
                  <div className="item-content-children">
                    <p className="item-quantity">2</p>
                    <p className="item-cost">N1000</p>
                    <p className="item-amount">N2000</p>
                  </div>
                </div>
                <div className="item-content">
                  <div className="item-content-description">
                    <p>Your Item Name</p>
                    <p>Item description goe here</p>
                  </div>
                  <div className="item-content-children">
                    <p className="item-quantity">2</p>
                    <p className="item-cost">N1000</p>
                    <p className="item-amount">N2000</p>
                  </div>
                </div>
                <div className="item-content">
                  <div className="item-content-description">
                    <p>Your Item Name</p>
                    <p>Item description goe here</p>
                  </div>
                  <div className="item-content-children">
                    <p className="item-quantity">2</p>
                    <p className="item-cost">N1000</p>
                    <p className="item-amount">N2000</p>
                  </div>
                </div>
                <div className="item-content">
                  <div className="item-content-description">
                    <p>Your Item Name</p>
                    <p>Item description goe here</p>
                  </div>
                  <div className="item-content-children">
                    <p className="item-quantity">2</p>
                    <p className="item-cost">N1000</p>
                    <p className="item-amount">N2000</p>
                  </div>
                </div>
              </div>
              <div className="total-items">
                <div className="total-items-container">
                  <div className="total-items-content">
                    <p>Subtotal</p>
                    <p>N40000</p>
                  </div>
                  <div className="total-items-content">
                    <p>Tax</p>
                    <p>N400</p>
                  </div>
                  <div className="total-items-content">
                    <p>Total</p>
                    <p>N70000</p>
                  </div>
                  <div className="total-items-content mt-20">
                    <p>Amount Due(Naira)</p>
                    <p>N70,0000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="invoice-footer">
              <div className="invoice-footer-child">
                <div className="button button--auto button-md button--orange">
                  Download
                </div>
                <div className="button button--auto button-md button--neutral ml-15">
                  Send Via Email
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default withDefaultLayout(InvoicePage, config);
