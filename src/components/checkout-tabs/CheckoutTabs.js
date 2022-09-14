import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Check } from "../../images/check.svg";
import "./CheckoutTabs.css";

class CheckoutTabs extends Component {
  render(props) {
    const CheckoutTab = (props) => {
      const done = props.completed && props.completed.includes(props.tabName);
      const link = "/checkout-" + props.tabName.toLowerCase();
      return (
        <div
          className={`checkout-tab ${
            props.tabName === props.page ? "" : "disabled"
          } ${done ? "done" : ""}`}
        >
          <div className={`circle`}>{done ? <Check /> : props.step}</div>
          {done ? <Link to={link} style={{ textDecoration: 'none' }}>
            <p>{props.tabName}</p>
          </Link> : <p>{props.tabName}</p>}
        </div>
      );
    };

    return (
      <div className="checkout-progress">
        <div className="checkout-tabs">
          <CheckoutTab
            tabName="Shipping"
            step="1"
            page={this.props.page}
            completed={this.props.completed}
          />
          <div className="separator"></div>
          <CheckoutTab
            tabName="Payment"
            step="2"
            page={this.props.page}
            completed={this.props.completed}
          />
          <div className="separator"></div>
          <CheckoutTab
            tabName="Review"
            step="3"
            page={this.props.page}
            completed={this.props.completed}
          />
        </div>
        <hr />
      </div>
    );
  }
}

export default CheckoutTabs;
