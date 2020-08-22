import React, { useEffect } from "react";
import { withDefaultLayout } from "components/layouts";
import {
  CustomerList,
  CustomerListItemDetailMobileModal,
  FilterByModal,
  SortByModal,
  BlockCustomerModal,
} from "components/blocks";
import { connect } from "react-redux";
import * as actions from "store/actions/index";

import { PepperestContext } from "components/helpers/constant";

const CustomersPage = (props) => {
  useEffect(() => {
    if (!props.loaded && !props.loading) {
      getCustomers();
    }
  });

  const getCustomers = () => {
    props.onLoadCustomers(props.token, props.user);
  };
  const refreshData = (params) => {
    props.onLoadCustomers(props.token, props.user, params);
  };

  return (
    <>
      <div className="page-container">
        <CustomerList
          customers={props.customers}
          meta={props.meta}
          links={props.links}
          refreshData={(params) => refreshData(params)}
          loading={props.loading}
        />
      </div>
      <PepperestContext.Consumer>
        {(context) =>
          context.state.showCustomerListModal ? (
            <CustomerListItemDetailMobileModal customerDetails={context.state.customerDetails}/>
          ) : null
        }
      </PepperestContext.Consumer>
      <PepperestContext.Consumer>
        {(context) =>
          context.state.showFilterModal ? <FilterByModal /> : null
        }
      </PepperestContext.Consumer>
      <PepperestContext.Consumer>
        {(context) => (context.state.showSortModal ? <SortByModal /> : null)}
      </PepperestContext.Consumer>
      <PepperestContext.Consumer>
        {(context) =>
          context.state.showBlockCustomerModal ? <BlockCustomerModal /> : null
        }
      </PepperestContext.Consumer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.userInfo,
    customers: state.customers.customers,
    meta: state.customers.meta,
    links: state.customers.links,
    links: state.customers.links,
    loading: state.customers.loading,
    loaded: state.customers.loaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadCustomers: (token, user, extraParams) =>
      dispatch(actions.loadCustomer(token, user, extraParams)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withDefaultLayout(CustomersPage));
