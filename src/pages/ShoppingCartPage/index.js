/* eslint-disable jsx-a11y/click-events-have-key-events */
import React , {useEffect} from 'react';
import { withDefaultLayout } from 'components/layouts';
import { getStringHash } from 'libs/utils';
import { CartItem } from 'components/blocks';
import { connect } from "react-redux";
import * as actions from "store/actions/index";

const config = {
  hasAlternateHeader: false,
  hasCommonHeader: true,
  showCart: false,
  commonHeaderTitle: 'Shopping Cart',
  links: [],
  // page: 'shoppingCart',
  page: 'settings',
  isSettings: true,
  navBarTitle: 'Shopping Cart',
};
const ShoppingCartPage = (props) => {
  const {cart} = props;
  useEffect(() => {
    if (!props.loaded && !props.loading) {
      getCart();
    }
  },[])

  const getCart = () => {
    props.onLoadCart(props.token, props.user)
  }

  return ( <>{cart &&
    (<div className="cart">
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="cart-list">
            {cart.items?.map((item) => (
              <CartItem key={item.id} item={item}/>
            ))}
          </div>
        </div>
        <div className="col-12 col-lg-4 summary">
          <div className="pcard">
            <div className="pcard-header p-3">
              <p className="text--smaller text-font--medium ">
                My Order Summary
              </p>
              <p className="text--smaller text--gray">{props.cart.items_count} Items</p>
            </div>
            <div className="pcard-body">
              <div className="d-flex flex-column align-items-center px-3">
                <p className="text--smaller">Your cart total is</p>
                <h4 className="text--big text-font--medium mt-3">
                  {cart.total_sum}
                </h4>
              </div>
              <div className="cart-divider my-3" />
              <div className="w-100 d-flex flex-column align-items-center px-3">
                <div role="button" tabIndex={0} className="button button-lg button--orange" onClick={() => { props.history.push('/checkout'); }}>
                  CONTINUE TO CHECKOUT
                </div>
                <div className="button button-lg button--orange-outline">
                  EDIT YOUR CART
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)}
  </>
)};

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    user: state.auth.userInfo,
    loading: state.cart.loading,
    loaded: state.cart.loaded,
    cart: state.cart.cart,
    error: state.cart.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadCart: (token, user) => dispatch(actions.loadCustomerCart(token, user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withDefaultLayout(ShoppingCartPage, config));
