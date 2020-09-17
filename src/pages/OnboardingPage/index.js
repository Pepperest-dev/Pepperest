/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { FooterList } from "components/blocks";
import { withDefaultLayout } from "components/layouts";
import { getStringHash } from "libs/utils";
import { footerLinks } from "config/inner-routes";

const config = {
  hasAlternateHeader: false,
  hasCommonHeader: true,
  showCart: false,
  commonHeaderTitle: "Welcome",
  links: [],
  page: "onboarding",
  isSettings: true,
  navBarTitle: "Welcome",
};
const OnboardingPage = ({ history }) => (
  <>
    <div className="onboarding_page">
      <div className="row">
        <div className="col-12 col-lg-12">
          <div className="onboarding-card">
            <div className="onboarding-header">
              <h1>Welcome to Pepperest</h1>
              <p>What would you like to do?</p>
            </div>
            <div className="main-content">
              <div className="space-between">
                <div className="onboarding-item">
                  <button
                    className="ripple"
                    onClick={() => {
                      history.push("/payments");
                    }}
                  >
                    Create a sale
                  </button>
                </div>
                <div className="onboarding-item">
                  <button
                    onClick={() => {
                      history.push("/products/instagram");
                    }}
                    className="ripple"
                  >
                    Get a FREE Instagram Store
                  </button>
                </div>
                <div className="onboarding-item">
                  <button
                    onClick={() => {
                      history.push("/user-account");
                    }}
                    className="ripple"
                  >
                    Update your profile
                  </button>
                </div>
                <div className="onboarding-item">
                  <button
                    onClick={() => {
                      history.push("/orders");
                    }}
                    className="ripple"
                  >
                    Review active sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="max-width homepage-footer">
        <div className="max-container">
          <div className="container">
            <div className="homepage-footer-container">
              <div className="homepage-footer__header">
                <div className="row">
                  <div className="col-md-5 mr-auto">
                    <h3 className="title">Ready to get started?</h3>
                    <p className="info">Get in touch or create an account.</p>
                  </div>
                  <div className="col-md-4">
                    <div className="homepage-footer__header-actions">
                      <div className="button button-md button-lg button--orange">
                        Create an Invoice
                      </div>
                      <div className="button button-md button-auto button-lg button--white text--gray">
                        View Fair Pricing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="homepage-footer-content">
                <div className="row">
                  <div className="col-md-3">
                    <ul className="footer-list">
                      <li className="footer-list-item">LAGOS ADDRESS</li>
                      <li className="footer-list-item">
                        126 Akin Oladelaji Street, Maryland, Ikeja, Lagos,
                        Nigeria
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <ul className="footer-list">
                      <FooterList
                        index={getStringHash()}
                        links={footerLinks[0]}
                      />
                    </ul>
                  </div>
                  <div className="col-md-2">
                    <ul className="footer-list">
                      <FooterList
                        index={getStringHash()}
                        links={footerLinks[1]}
                      />
                    </ul>
                  </div>

                  <div className="col-md-2">
                    <ul className="footer-list">
                      <FooterList
                        index={getStringHash()}
                        links={footerLinks[2]}
                      />
                    </ul>
                  </div>

                  <div className="col-md-2">
                    <ul className="footer-list">
                      <FooterList links={footerLinks[3]} />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="homepage-footer-base">
                <p className="homepage-footer-base-text">
                  © 2020 Pepperest Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </>
);

export default withDefaultLayout(OnboardingPage, config);
