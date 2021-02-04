import React, { useEffect } from "react";
import { List, RequestPaymentModal } from "components/blocks";
import { STATUS as PaymentStatus } from "libs/constants/PepperestWebServices/Payments";
import { connect } from "react-redux";
import * as actions from "store/actions/index";
import { PepperestContext } from "components/helpers/constant";

const PaymentTransactionPage = (props) => {
  useEffect(() => {
    if (!props.loaded && !props.loading) {
      getPayments();
    }
  });

  const getPayments = () => {
    props.onLoadPayments(props.token, props.user, PaymentStatus.ALL);
  };
  const refreshData = (params) => {
    props.onLoadPayments(props.token, props.user, PaymentStatus.ALL, params);
  };

  return (
    <>
      <List
        payments={props.payments}
        meta={props.meta}
        links={props.links}
        refreshData={(params) => refreshData(params)}
        loading={props.loading}
      />
      <PepperestContext.Consumer>
        {(context) =>
          context.state.showRequestPaymentModal ? <RequestPaymentModal context={context}/> : null
        }
      </PepperestContext.Consumer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.userInfo,
    payments: state.payments[PaymentStatus.ALL].payments,
    meta: state.payments[PaymentStatus.ALL].meta,
    links: state.payments[PaymentStatus.ALL].links,
    loading: state.payments[PaymentStatus.ALL].loading,
    loaded: state.payments[PaymentStatus.ALL].loaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadPayments: (token, user, status, extraParams) =>
      dispatch(actions.loadPayments(token, user, status, extraParams)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaymentTransactionPage);
