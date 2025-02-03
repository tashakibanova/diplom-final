import React from "react";
import { Routes, Route } from "react-router-dom";
import "./OrderPage.css";
import OrderIntro from "../intro/OrderIntro";
import OrderSidebar from "../sidebar/OrderSidebar";
import DetailsSidebar from "../sidebar/DetailsSidebar";
import TrainSelect from "../tickets/TrainSelect";
import SeatsSelect from "../tickets/SeatsSelect";
import PassengersForm from "../forms/PassengersForm";
import PayForm from "../forms/PayForm";
import VerificationForm from "../forms/VerificationForm";

function OrderPage(props) {
  return (
    <>
      <OrderIntro />
      <div className="order">
        <div className="wrapper">
          <div className="order__wrapper">
            <Routes>
              <Route path="/order/tickets" component={OrderSidebar} />
              <Route
                path={["/order/passengers", "/order/pay", "/order/verify"]}
                component={DetailsSidebar}
              />
            </Routes>
            <Routes>
              <Route path="/order/tickets/train" component={TrainSelect} />
              <Route path="/order/tickets/seats" component={SeatsSelect} />
              <Route path="/order/passengers" component={PassengersForm} />
              <Route path="/order/pay" component={PayForm} />
              <Route path="/order/verify" component={VerificationForm} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderPage;
