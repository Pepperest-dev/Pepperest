import React, { useState } from "react";
import { CloseIcon, WhiteTick } from "components/vectors";
import {
  InstagramBusinessOnBoarding,
  InstagramBusinessProductsSelect,
  InstagramBusinessAccountsSelect,
  InstagramProductList,
  PublishInstagramImageModal,
} from "components/blocks";
import { PepperestContext } from "components/helpers/constant";

const ProductInstagramPage = (props) => {
  const [onBoarding, setOnBoarding] = useState(true);
  const [hasSelectedAccount, setHasSelectedAccount] = useState(false);
  const [hasSelectedProducts, setHasSelectedProducts] = useState(false);
  const [publishProducts, setPublishProducts] = useState(false);

  const updateOnBoarding = (value) => {
    setOnBoarding(value);
  };
  const updateHasSelectedAccount = (value) => {
    setHasSelectedAccount(value);
    setHasSelectedProducts(true);
    setPublishProducts(false);
  };
  const updateSetPublishProducts = (value) => {
    setHasSelectedProducts(false);
    setPublishProducts(value);
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
            <p className="text--smallest text--black">
              Continue with Leke Bisola instagram
            </p>
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

export default ProductInstagramPage;
