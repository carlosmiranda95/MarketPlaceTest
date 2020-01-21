import React from "react";
import { Router, Switch, Route, IndexRoute } from "react-router-dom";
import { createBrowserHistory } from "history";
import AuthRoute from "./components/authRouter/AuthRouter";

import Login from "./views/Login";
import Category from "./views/Category";
import ProyectList from "./views/product/ProyectList";
import ClientNew from "./views/client/ClientNew";
import ClientList from "./views/client/ClientList";
import Memberships from "./views/membership/Memberships";
import SearchProduct from "./views/product/SearchProduct";
import ParameterEdit from "./views/parameters/ParameterNew.jsx";
import ParameterList from "./views/parameters/ParameterList.jsx";
import UseRegistration from "./views/UseRegistration";
import MyProducts from "./views/sales/MyProduct";
import Prereserva from "./views/quotation/QuotationList";
import MyOrderList from "./views/order/MyOrderList";
import QuotationBuyer from "./views/quotation/QuotationCustomer";
import ProjectWorldMembership from "./views/membership/ProjectWorldMembership";
import ProjectdMembership from "./views/membership/ProjectMembership";
import OrderList from "./views/order/OrderList";
import QuotationLiberate from "./views/quotation/QuotationLiberate";
import QuotationRegister from "./views/quotation/QuotationRegister";
import MySales from "./views/sales/MySales";
import ViewContract from "./views/contract/ViewContract";
import { PayQuotation } from "./views/pay/PayQuotation";
import { ReconfigurationPlan } from "./views/order/ReconfigurationPaymentPlan";
import PayOrder from "./views/pay/PayOrder";
import RegisterSale from "./views/sales/RegisterSales";

function loggedIn() {
  if (window.sessionStorage.token === undefined) {
    return false;
  } else {
    return true;
  }
}

function obtainState() {
  return window.sessionStorage.getItem("status");
}

export default function Routes() {
  var hist = createBrowserHistory();
  // if (loggedIn()) {
  if (true) {
    return (
      <Router history={hist}>
        <Switch>
          <Route exact path="/" component={Category} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/myProducts" component={MyProducts} />
          <Route
            exact
            path="/proyectWorldList"
            component={ProjectWorldMembership}
          />
          <Route exact path="/proyectList" component={ProjectdMembership} />
          <Route exact path="/clientnew" component={ClientNew} />
          <Route exact path="/clientlist" component={ClientList} />
          <AuthRoute path="/Product" component={SearchProduct} />
          <Route exact path="/listparameter" component={ParameterList} />
          <Route exact path="/editparameter" component={ParameterEdit} />
          <Route exact path="/memberships" component={Memberships} />
          <Route exact path="/useregistration" component={UseRegistration} />
          <Route exact path="/prereserva" component={Prereserva} />
          <Route exact path="/buyer/quotation" component={QuotationBuyer} />
          <Route exact path="/orders" component={OrderList} />
          <Route exact path="/myorders" component={MyOrderList} />
          <Route exact path="/buyer/order" component={OrderList} />
          <Route exact path="/registerSale" component={RegisterSale} />
          <Route
            exact
            path="/:reconfigurarionplan/orders"
            component={ReconfigurationPlan}
          />
          <Route
            exact
            path="/contract/preimpression"
            component={ViewContract}
          />
          <Route
            exact
            path="/register/quotation"
            component={QuotationRegister}
          />
          <Route
            exact
            path={"/liberate/quotation/:id/:country/:company"}
            component={QuotationLiberate}
          />
          <Route exact path="/mySales" component={MySales} />
          <Route exact path="/:pay/quotation" component={PayQuotation} />
          <Route exact path="/:pay/order" component={PayOrder} />
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router history={hist}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/category" component={Login} />
          <Route exact path="/myProducts" component={Login} />
          <Route exact path="/proyectList" component={Login} />
          <Route exact path="/clientnew" component={Login} />
          <Route exact path="/clientlist" component={Login} />
          <Route exact path="/registrocliente" component={Login} />
          <Route exact path="/Product" component={Login} />
          <Route exact path="/listparameter" component={Login} />
          <Route exact path="/editparameter" component={Login} />
          <Route exact path="/memberships" component={Login} />
          <Route exact path="/useregistration" component={Login} />
          <Route exact path="/prereserva" component={Login} />
          <Route exact path="/buyer/quotation" component={Login} />
          <Route exact path="/orders" component={Login} />
          <Route exact path="/myorders" component={Login} />
          <Route exact path="/buyer/order" component={Login} />
          <Route exact path="/register/quotation" component={Login} />
          <Route exact path="/contract/preimpression" component={Login} />
          <Route exact path="/registerSale" component={Login} />
          <Route
            exact
            path="/:reconfigurarionplan/orders"
            component={ReconfigurationPlan}
          />
          <Route
            exact
            path={"/liberate/quotation/:id/:country/:company"}
            component={QuotationLiberate}
          />
          <Route exact path="/mySales" component={MySales} />
          <Route exact path="/:pay/quotation" component={PayQuotation} />
          <Route exact path="/:pay/order" component={PayOrder} />
        </Switch>
      </Router>
    );
  }
}
