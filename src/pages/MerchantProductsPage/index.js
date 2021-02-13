import React, { Component }  from 'react';
import { withDefaultLayout } from 'components/layouts';
import { ListHeader, MerchantProductCard } from 'components/blocks';
import { getStringHash } from 'libs/utils';
import { MerchantStoreHeader, HeaderAlternate, CommonHeader } from "components/shared";
import { SettingsNavigationBar } from "components/blocks";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from 'store/actions/index';


const config = {
  hasAlternateHeader: false,
  hasCommonHeader: true,
  showCart: true,
  commonHeaderTitle: 'Merchant Store',
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
      this.props.getMerchant(this.props.match.params.id)
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
        isDesktop,
        hasCommonHeader,
        showCart,
        commonHeaderTitle,
        showCommonHeaderOnDesktop,
        navBarTitle,
      } = this.state;

      const {
        products,
        getMerchant,
        meta,
        links,
        page,
        match
      } = this.props;

const t = (id, i) => {
  getMerchant(id, i-1)
}

      const footerList = []
      if (meta) {
        for (var i = 1; i <= meta.last_page; i++) {
          footerList.push(<li key={i}
            className={`list-footer__pagination-page-number list-footer-text ${meta.current_page == i ? 'list-footer-text-alt' : ''}`}
            onClick={() => t(match.params.id, i)}
            >
            {i}
          </li>)
        }
      }
      return (
        <div>

          <div >
          {/* <div className="merchant"> */}

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
                    {products.map((item) => (
                      <div className="col-12 col-md-6 col-lg-3" key={getStringHash()}>
                        <MerchantProductCard item={item} />
                      </div>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
          {Boolean(meta) && (<div className="list-footer">
            <p className="list-footer-label">{`Showing ${meta.from} - ${meta.to} of ${meta.total} entries`}</p>
            <div className="list-footer__pagination">
              <button
                disabled={!links.previous}
                onClick={() => getMerchant(match.params.id, meta.currentPage-1)}
                className="list-footer__pagination-prev list-footer-text">
                Previous
              </button>
              <ul className="d-flex flex-row">
                {footerList}
              </ul>
              <button
                disabled={!links.next}
                onClick={() => getMerchant(match.params.id, meta.currentPage+1)}
                className="list-footer__pagination-next list-footer-text ">
                Next
              </button>
            </div>
          </div>)}

        </div>
      )
    }
  };
  const mapStateToProps = (state) => {
    return {
      user: state.auth.userInfo,
      products: state.merchant.products,
    	meta: state.merchant.meta,
    	links: state.merchant.links,
      loaded: state.merchant.loaded,
      loading: state.merchant.loading,
      error: state.merchant.error
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      getMerchant: (merchantCode, page) => dispatch(actions.getMerchantStoreProducts(merchantCode, page))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(MerchantProductsPage);
