/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { withDefaultLayout } from "components/layouts";
import { getStringHash } from "libs/utils";
import { PepperestContext } from "components/helpers/constant";

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
                      history.push("/payments/instagram");
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
    </div>
  </>
);

export default withDefaultLayout(OnboardingPage, config);
