import React from 'react';
import { withDefaultLayout } from 'components/layouts';
import { ordersInnerRoutes } from 'config/inner-routes';
import { OrderDashboard, OrderAll, OrderCanceled, OrderPending, OrderShipped, OrderDelivered } from 'pages';
import { Route, Switch, Redirect } from 'react-router-dom';
import { OrderListItemDetailMobileModal } from 'components/blocks';
import { PepperestContext } from 'components/helpers/constant';


const config = {
  hasAlternateHeader: true,
  links: ordersInnerRoutes,
  page: 'orders',
};
const OrdersPage = ({ match }) => (
  <>
    <div className="">
      <Switch>
        <Route path={`${match.url}/dashboard`} component={OrderDashboard} />
        <Route path={`${match.url}/all`} component={OrderAll} />
        <Route path={`${match.url}/cancel`} component={OrderCanceled} />
        <Route path={`${match.url}/pending`} component={OrderPending} />
        <Route path={`${match.url}/shipped`} component={OrderShipped} />
        <Route path={`${match.url}/delivered`} component={OrderDelivered} />
        <Redirect to={`${match.url}/dashboard`} />
      </Switch>
    </div>
    <PepperestContext.Consumer>
      {(context) => (context.state.showOrdersListModal ? <OrderListItemDetailMobileModal /> : null)}
    </PepperestContext.Consumer>
  </>
);

export default withDefaultLayout(OrdersPage, config);
