import React, { Component }  from 'react';
import { withDefaultLayout } from 'components/layouts';
import { ListHeader, MerchantProductCard } from 'components/blocks';
import { getStringHash } from 'libs/utils';
import { MerchantStoreHeader, HeaderAlternate, CommonHeader } from "components/shared";
import { SettingsNavigationBar } from "components/blocks";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


const config = {
  hasAlternateHeader: false,
  hasCommonHeader: true,
  showCart: true,
  commonHeaderTitle: 'Seun Akanni\'s Store',
  showCommonHeaderOnDesktop: true,
  links: [],
  isSettings: false,
  page: 'merchantProducts',
};


class MerchantProductsPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isSettings: false,
        hasCommonHeader: false,
        showCommonHeaderOnDesktop: false,
        ...config,
        ...props,
        isDesktop: false,
      };

      this.updateIsDesktop = this.updateIsDesktop.bind(this);
    }

    componentDidMount() {
      this.updateIsDesktop();
      window.addEventListener("resize", this.updateIsDesktop);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateIsDesktop);
    }

    updateIsDesktop() {
      this.setState({ isDesktop: window.innerWidth >= 1024 });
    }

    render () {
      const {
        hasAlternateHeader,
        isSettings,
        links,
        page,
        isDesktop,
        hasCommonHeader,
        showCart,
        commonHeaderTitle,
        showCommonHeaderOnDesktop,
        navBarTitle,
      } = this.state;
      return (
        <div>

          <div className="merchant">
            <div className="list">
              {/* <ListHeader /> */}
              {isSettings && !isDesktop ? null : <MerchantStoreHeader />}
              {!isSettings && !isDesktop ? null : (
                <SettingsNavigationBar navBarTitle={navBarTitle} />
              )}
              {/* show everywhere, but not on settings desktop view */}
              {hasAlternateHeader && !isSettings ? (
                <HeaderAlternate links={links} page={page} />
              ) : null}
              {/* show only in settings mobile view */}
              {hasAlternateHeader && isSettings && !isDesktop ? (
                <HeaderAlternate links={links} page={page} />
              ) : null}
              {hasCommonHeader && (showCommonHeaderOnDesktop || isDesktop) ? (
                <CommonHeader
                  commonHeaderTitle={commonHeaderTitle}
                  showCart={showCart}
                />
              ) : null}

              <div className="max-content">
                <div className="">
                  <ul className="row">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
                      <div className="col-12 col-md-6 col-lg-3" key={getStringHash()}>
                        <MerchantProductCard />
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
          
            </div>
          </div>

          <div className="list-footer">
                <p className="list-footer-label">Showing 1 - 6 of 90 entries</p>
                <div className="list-footer__pagination">
                  <span className="list-footer__pagination-prev list-footer-text">
                    Previous
                  </span>
                  <ul className="d-flex flex-row">
                    <li className="list-footer__pagination-page-number list-footer-text">
                      1
                    </li>
                    <li className="list-footer__pagination-page-number list-footer-text">
                      2
                    </li>
                    <li className="list-footer__pagination-page-number list-footer-text">
                      3
                    </li>
                    <li className="list-footer__pagination-page-number list-footer-text list-footer-text-alt">
                      4
                    </li>
                  </ul>
                  <span className="list-footer__pagination-next list-footer-text list-footer-text-alt">
                    Next
                  </span>
                </div>
              </div>
        
        </div>
      )
    } 
  };
  const mapStateToProps = (state) => {
    return {
      user: state.auth.userInfo,
    };
  };

export default connect(mapStateToProps, null)(MerchantProductsPage);

