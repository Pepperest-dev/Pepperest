import React from "react";
import { withDefaultLayout } from "components/layouts";
import {
  ProductModal,
  FilterByModal,
  SortByModal,
  EditProductModal,
  DeleteProductModal,
  ReportIssueModal,
} from "components/blocks";
import { productInnerRoutes } from "config/inner-routes";
import { ProductSingleMultiplePage, ProductInstagramPage } from "pages";
import { Route, Switch, Redirect } from "react-router-dom";

import { PepperestContext } from "components/helpers/constant";
import ProductListItemDetailMobileModal from "components/blocks/ProductListItemDetailMobileModal";

const config = {
  hasAlternateHeader: true,
  links: productInnerRoutes,
  page: "products",
};

const ProductsPage = ({ match }) => (
  <>
    <>
      <div className="page-container">
        <Switch>
          <Route
            path={`${match.url}/single`}
            component={ProductSingleMultiplePage}
          />
          <Route
            path={`${match.url}/instagram`}
            component={ProductInstagramPage}
          />
          <Redirect to={`${match.url}/single`} />
        </Switch>
      </div>
      <PepperestContext.Consumer>
        {(context) =>
          context.state.showProductModal ? <ProductModal /> : null
        }
      </PepperestContext.Consumer>
      <PepperestContext.Consumer>
        {(context) =>
          context.state.showProductListModal ? (
            <ProductListItemDetailMobileModal />
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
          context.state.showEditProductModal ? <EditProductModal /> : null
        }
      </PepperestContext.Consumer>
      <PepperestContext.Consumer>
        {(context) =>
          context.state.showDeleteProductModal ? <DeleteProductModal /> : null
        }
      </PepperestContext.Consumer>
      <PepperestContext.Consumer>
        {(context) =>
          context.state.showReportIssueModal ? <ReportIssueModal /> : null
        }
      </PepperestContext.Consumer>
    </>
  </>
);

export default withDefaultLayout(ProductsPage, config);
