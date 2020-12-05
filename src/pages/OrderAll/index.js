import React, { useEffect } from "react";
import { OrderList, ReportIssueModal } from "components/blocks";
import { PAGE_TYPES as OrdersPageTypes } from "libs/constants/PepperestWebServices/Orders";
import { PepperestContext } from "components/helpers/constant";
import { connect } from "react-redux";
import * as actions from "store/actions/index";

const OrderAll = (props) => {
  useEffect(() => {
    if (!props.loaded && !props.loading) {
      getOrders();
    }
  });

  const getOrders = () => {
    props.onLoadOrders(props.token, props.user, OrdersPageTypes.ALL);
  };
  const refreshData = (params) => {
    props.onLoadOrders(props.token, props.user, OrdersPageTypes.ALL, params);
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
          context.state.showReportIssueModal ? <ReportIssueModal context={context}/> : null
        }
      </PepperestContext.Consumer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.userInfo,
    orders: state.orders[OrdersPageTypes.ALL].orders,
    meta: state.orders[OrdersPageTypes.ALL].meta,
    links: state.orders[OrdersPageTypes.ALL].links,
    links: state.orders[OrdersPageTypes.ALL].links,
    loading: state.orders[OrdersPageTypes.ALL].loading,
    loaded: state.orders[OrdersPageTypes.ALL].loaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadOrders: (token, user, pageType, extraParams) =>
      dispatch(actions.loadOrders(token, user, pageType, extraParams)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderAll);
