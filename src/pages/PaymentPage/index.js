/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */
import React from "react";
import { withDefaultLayout } from "components/layouts";
import {
  Modal,
  ListItemDetailMobileModal,
  FilterByModal,
  SortByModal,
  ReportIssueModal,
  RefundCustomerModal,
} from "components/blocks";
import { paymentInnerRoutes } from "config/inner-routes";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  PaymentPendingPage,
  PaymentRefundPage,
  PaymentTransactionPage,
  PaymentReleasePage,
  PaymentStopPage,
} from "pages";

import { PepperestContext } from "components/helpers/constant";

const config = {
  hasAlternateHeader: true,
  links: paymentInnerRoutes,
  page: "payments",
};

const PaymentPage = ({ match }) => (
  <>
    <div className="page-container">
      <Switch>
        <Route
          path={`${match.url}/transactions`}
          component={PaymentTransactionPage}
        />
        <Route path={`${match.url}/pending`} component={PaymentPendingPage} />
        <Route path={`${match.url}/refund`} component={PaymentRefundPage} />
        <Route path={`${match.url}/release`} component={PaymentReleasePage} />
        <Route path={`${match.url}/stop`} component={PaymentStopPage} />
        <Redirect to={`${match.url}/transactions`} />
      </Switch>
    </div>
    <PepperestContext.Consumer>
      {(context) =>
        context.state.showPaymentListModal ? (
          <ListItemDetailMobileModal paymentDetails={context.state.paymentDetails}/>
        ) : null
      }
    </PepperestContext.Consumer>
    <PepperestContext.Consumer>
      {(context) => (context.state.showPaymentModal ? <Modal /> : null)}
    </PepperestContext.Consumer>
    <PepperestContext.Consumer>
      {(context) => (context.state.showFilterModal ? <FilterByModal /> : null)}
    </PepperestContext.Consumer>
    <PepperestContext.Consumer>
      {(context) => (context.state.showSortModal ? <SortByModal /> : null)}
    </PepperestContext.Consumer>
    <PepperestContext.Consumer>
      {(context) =>
        context.state.showReportIssueModal ? <ReportIssueModal context={context}/> : null
      }
    </PepperestContext.Consumer>
    <PepperestContext.Consumer>
      {(context) =>
        context.state.showRefundCustomerModal ? <RefundCustomerModal context={context}/> : null
      }
    </PepperestContext.Consumer>
  </>
);

export default withDefaultLayout(PaymentPage, config);
