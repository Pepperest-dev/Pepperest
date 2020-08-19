import React, { lazy } from "react";

const Register = lazy(() => import("pages/Register"));
const Login = lazy(() => import("pages/Login"));
const Logout = lazy(() => import("pages/Logout"));
const UpdatePassword = lazy(() => import("pages/UpdatePassword"));
const ForgotPassword = lazy(() => import("pages/ForgotPassword"));
const PaymentPage = lazy(() => import("pages/PaymentPage"));
const CustomersPage = lazy(() => import("pages/CustomersPage"));
const OrdersPage = lazy(() => import("pages/OrdersPage"));
const ProductsPage = lazy(() => import("pages/ProductsPage"));
const PaymentPageWithOnBoarding = lazy(() =>
  import("pages/PaymentPageWithOnBoarding"),
);
const CustomersPageWithOnBoarding = lazy(() =>
  import("pages/CustomersPageWithOnBoarding"),
);
const ProductPageWithOnBoarding = lazy(() =>
  import("pages/ProductPageWithOnBoarding"),
);
const HomePage = lazy(() => import("pages/HomePage"));
const UserAccountPage = lazy(() => import("pages/UserAccountPage"));
const MerchantProductsPage = lazy(() => import("pages/MerchantProductsPage"));
const CheckoutPage = lazy(() => import("pages/CheckoutPage"));
const InvoicePage = lazy(() => import("pages/InvoicePage"));
const ShoppingCartPage = lazy(() => import("pages/ShoppingCartPage"));
const ConfirmationPage = lazy(() => import("pages/ConfirmationPage"));
const ConfirmCheckoutPage = lazy(() => import("pages/ConfirmCheckoutPage"));

const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
    isProtected: false,
  },
  {
    path: "/register",
    exact: true,
    component: Register,
    isProtected: false,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
    isProtected: false,
  },
  {
    path: "/logout",
    exact: true,
    component: Logout,
    isProtected: false,
  },
  {
    path: "/update-password",
    exact: true,
    component: UpdatePassword,
    isProtected: false,
  },
  {
    path: "/forgot-password",
    exact: true,
    component: ForgotPassword,
    isProtected: false,
  },
  {
    path: "/payments",
    exact: false,
    component: PaymentPage,
    isProtected: true,
  },
  {
    path: "/payment-onboarding",
    exact: true,
    component: PaymentPageWithOnBoarding,
    isProtected: true,
  },
  {
    path: "/customers",
    exact: true,
    component: CustomersPage,
    isProtected: true,
  },
  {
    path: "/customers-onboarding",
    exact: true,
    component: CustomersPageWithOnBoarding,
    isProtected: true,
  },
  {
    path: "/products",
    exact: false,
    component: ProductsPage,
    isProtected: true,
  },
  {
    path: "/products-onboarding",
    exact: true,
    component: ProductPageWithOnBoarding,
    isProtected: true,
  },
  {
    path: "/user-account",
    exact: false,
    component: UserAccountPage,
    isProtected: true,
  },
  {
    path: "/orders",
    exact: false,
    component: OrdersPage,
    isProtected: true,
  },
  {
    path: "/merchant",
    exact: true,
    component: MerchantProductsPage,
    isProtected: false,
  },
  {
    path: "/checkout",
    exact: true,
    component: CheckoutPage,
    isProtected: true,
  },
  {
    path: "/cart",
    exact: true,
    component: ShoppingCartPage,
    isProtected: true,
  },
  {
    path: "/confirm",
    exact: true,
    component: ConfirmationPage,
    isProtected: true,
  },
  {
    path: "/confirmcheckout",
    exact: true,
    component: ConfirmCheckoutPage,
    isProtected: true,
  },
  {
    path: "/invoice",
    exact: true,
    component: InvoicePage,
    isProtected: true,
  },
];

export default routes;
