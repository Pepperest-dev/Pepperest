import React, {Fragment} from 'react';
import {withAuthLayout} from 'components/layouts'
import {AuthFooter ,Input, PasswordInput, SelectInput, FeatureListItem, Button} from 'components/blocks'

const FEATURES = [
  '24/7 Customer Care Support',
  'Fastest refunds',
  'Zero setup costs',
  'Merchant Financing available'
];
const Register = () => (
  <Fragment>
    <div className="auth-register">
      <div className="auth-register__info-section">
        <h2 className="auth-register__info-section-header">
          Start selling with Pepperest
        </h2>
        <p className="auth-register__info-section-detail">
          Get on board with Pepperest and start selling to your customers or
          paying merchants in just a few minutes
        </p>
        <div>
          <ul className="auth-register__info-section-feature__list">
            {FEATURES.map((feature, index) => (
              <FeatureListItem key={index} value={feature} />
            ))}
          </ul>
        </div>
      </div>
      <div className="auth-register__form-section">
        <form className="nsForm">
          <SelectInput
            label="Choose an Pepperest Account"
            options={[]}
            name="account"
            id="account"
            value=""
            onChange={() => {}}
          />
          <Input
            name="business_name"
            type="text"
            placeholder="Your Personal / Business Name"
            label="Personal / Business Name"
            id="business_name"
            onChange={() => {}}
            value=""
          />
          <Input
            name="email"
            type="email"
            placeholder="Your Personal / Business Email"
            label="Personal / Business Email"
            id="email"
            onChange={() => {}}
            value=""
          />
          <PasswordInput
            name="password"
            placeholder="Strong password"
            id="password"
            value=""
            onChange={() => {}}
            label="Password"
          />
          <PasswordInput
            name="confirm_password"
            placeholder="Strong password"
            id="cfm_password"
            value=""
            onChange={() => {}}
            label="Confirm Password"
          />
          <Button
            type="submit"
            value="CREATE ACCOUNT"
            name="sign_up"
            handleClick={() => {}}
          />
        </form>
        <p className="auth-terms-condition">
          I agree to the <a href="/">Pepperest Agreement</a> and{' '}
          <a href="/">Terms</a>.
        </p>
      </div>
    </div>
    <AuthFooter
      value="SIGN IN"
      url="/login"
      label="ALREADY HAVE AN ACCOUNT ?"
      isAlternate={false}
    />
  </Fragment>
);

export default withAuthLayout(Register, {});