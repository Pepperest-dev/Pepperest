import React, { useState, useEffect } from "react";
import { CloseIcon, WhiteTick } from "components/vectors";
import {
  InstagramBusinessOnBoarding,
  InstagramBusinessProductsSelect,
  InstagramBusinessAccountsSelect,
  InstagramProductList,
  PublishInstagramImageModal,
} from "components/blocks";
import { PepperestContext } from "components/helpers/constant";
import { connect } from 'react-redux';
import * as actions from 'store/actions/index';

const ProductInstagramPage = (props) => {
  const {getInfo, getPage, user, token, loaded, loading} = props
  let s = props.location?.search
  let code
  if (s) code = s.slice(s.indexOf('=') + 1 , s.indexOf('&state'))
  const [onBoarding, setOnBoarding] = useState(true);
  const [hasSelectedAccount, setHasSelectedAccount] = useState(false);
  const [hasSelectedProducts, setHasSelectedProducts] = useState(false);
  const [publishProducts, setPublishProducts] = useState(false);
  useEffect(() => {
    if (code){
      getInfo(token, user, {code})
    }
  }, [code])

  useEffect(() => {
    if (loaded) {
      updateHasSelectedAccount(true)
    }
  }, [loaded])

  const updateOnBoarding = (value) => {
    setOnBoarding(value);
  };
  const updateHasSelectedAccount = (value) => {
    setHasSelectedAccount(value);
    setHasSelectedProducts(true);
    setPublishProducts(false);
  };
  const updateSetPublishProducts = (page) => {
    const extraParams = {
      page_id: page.id,
      page_access_token: page.access_token
    }
    getPage(token, user, extraParams)
    setHasSelectedAccount(true);

    setHasSelectedProducts(false);
    setPublishProducts(true);
  };

  const onBoardingContent = (
    <div className="d-flex flex-column align-items-center instagram-page">
      <div className="header--nav">
        <div className={`header--nav-dot ${onBoarding ? "active" : ""}`}>
          {onBoarding ? <WhiteTick /> : null}
        </div>
        <div
          className={`header--nav-progress ${
            hasSelectedAccount ? "active" : ""
          }`}
        />
        <div
          className={`header--nav-dot ${hasSelectedAccount ? "active" : ""}`}
        >
          {hasSelectedAccount ? <WhiteTick /> : null}
        </div>
        <div
          className={`header--nav-progress ${publishProducts ? "active" : ""}`}
        />
        <div className={`header--nav-dot ${publishProducts ? "active" : ""}`}>
          {publishProducts ? <WhiteTick /> : null}
        </div>
      </div>
      <ul className="header--nav__menu">
        <li className="header--nav__menu-item">Instagram / Facebook</li>
        <li className="header--nav__menu-item">Select Product</li>
        <li className="header--nav__menu-item">Publish Product</li>
      </ul>
      {hasSelectedAccount ? null : (
        <InstagramBusinessOnBoarding click={updateHasSelectedAccount} />
      )}
      {hasSelectedAccount ? (
        <>
          <div className="current-account">
            <img
              src="/assets/images/avatar.jpg"
              className="current-account__avatar"
              alt="current instagram avatar"
            />
            {/* {users.map((user) => ( */}
              <p className="text--smallest text--black">
                {props.user.name}
              </p>
            {/* ))} */}
            <CloseIcon />
          </div>
          <div className="loader">
            <p className="text--smallest text--black mx-auto">
              Uploading Product to instagram business
            </p>
            <CloseIcon />
          </div>
        </>
      ) : null}

      {hasSelectedAccount && hasSelectedProducts ? (
        <InstagramBusinessAccountsSelect onClick={updateSetPublishProducts} />
      ) : null}
      {hasSelectedAccount && publishProducts ? (
        <InstagramBusinessProductsSelect onClick={updateOnBoarding} />
      ) : null}
    </div>
  );

  const pageContent = <InstagramProductList />;

  return (
    <>
      {onBoarding ? onBoardingContent : pageContent}
      <PepperestContext.Consumer>
        {(context) =>
          context.state.showPublishInstagramImageModal ? (
            <PublishInstagramImageModal />
          ) : null
        }
      </PepperestContext.Consumer>
    </>
  );
};

const mapStateToProps = state => {
  return {
      token: state.auth.token,
      user: state.auth.userInfo,
      loaded: state.products.loadedFacebookPages,
      loadedPageProduct: state.products.loadedFacebookProducts,
      loading: state.products.loading,
}}

const mapDispatchToProps = (dispatch) => {
  return {
    getInfo: (token, user, extraParams) => dispatch(actions.getFacebookPages(token, user, extraParams)),
    getPage: (token, user, extraParams) => dispatch(actions.getPageData(token, user, extraParams))
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(ProductInstagramPage);
