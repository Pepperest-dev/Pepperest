import React, { useEffect } from "react";
import { OrderList, ReportIssueModal } from "components/blocks";
import { PAGE_TYPES as OrdersPageTypes } from "libs/constants/PepperestWebServices/Orders";
import { PepperestContext } from "components/helpers/constant";
import { connect } from "react-redux";
import * as actions from "store/actions/index";

const OrderShipped = (props) => {
  useEffect(() => {
    if (!props.loaded && !props.loading) {
      getOrders();
    }
  });

  const getOrders = () => {
    props.onLoadOrders(props.token, props.user, OrdersPageTypes.SHIPPED);
  };
  const refreshData = (params) => {
    props.onLoadOrders(
      props.token,
      props.user,
      OrdersPageTypes.SHIPPED,
      params,
    );
  };

  return (
    <>
      <div className="page-container">
        <OrderList
          orders={props.orders}
          meta={props.meta}
          links={props.links}
          refreshData={(params) => refreshData(params)}
          loading={props.loading}
        />
      </div>
      <PepperestContext.Consumer>
        {(context) =>
          context.state.showReportIssueModal ? <ReportIssueModal /> : null
        }
      </PepperestContext.Consumer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.userInfo,
    orders: state.orders[OrdersPageTypes.SHIPPED].orders,
    meta: state.orders[OrdersPageTypes.SHIPPED].meta,
    links: state.orders[OrdersPageTypes.SHIPPED].links,
    links: state.orders[OrdersPageTypes.SHIPPED].links,
    loading: state.orders[OrdersPageTypes.SHIPPED].loading,
    loaded: state.orders[OrdersPageTypes.SHIPPED].loaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadOrders: (token, user, pageType, extraParams) =>
      dispatch(actions.loadOrders(token, user, pageType, extraParams)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderShipped);
