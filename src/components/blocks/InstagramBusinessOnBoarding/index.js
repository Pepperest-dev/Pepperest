import React from 'react';
import PropTypes from 'prop-types';
import { SOCIAL_STORE_PROVIDERS } from '../../../libs/constants/PepperestWebServices/Auth'
import { FacebookButtonAlternate, InstagramButton } from 'components/blocks';


const InstagramBusinessOnBoarding = (props) => {
  const loginWithFacebook = () => {
    const merchant_id = SOCIAL_STORE_PROVIDERS.facebook.merchant_id;
    const redirectURL = SOCIAL_STORE_PROVIDERS.facebook.redirectURL;
    const baseURL = SOCIAL_STORE_PROVIDERS.facebook.baseURL;
    const facebookAuthURL = `${baseURL}?client_id=${merchant_id}&redirect_uri=${redirectURL}&state={"provider":"facebook"}`;
    window.location.replace(facebookAuthURL);
  }
  return(
  <div className="instagram-page__main">
    <div className="instagram-page__main-content">
      <InstagramButton onClick={() => { props.click(true); }} />
      <FacebookButtonAlternate onClick={() => loginWithFacebook()} />
    </div>
  </div>
)};

InstagramBusinessOnBoarding.propTypes = {
  click: PropTypes.func.isRequired,
};

export default InstagramBusinessOnBoarding;
