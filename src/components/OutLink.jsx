import Link from "next/link";
import React, {Component} from "react";
import ReactGA from "react-ga";

export default class OutLink extends Component {
  render() {
    const handleOutbound = (eventLabel) => {
      ReactGA.event({
        category: "Outbound",
        action: "click",
        label: eventLabel,
      });
    };

    const {children, to, label, ...restProps} = this.props;
    return (
      <Link {...restProps} href={to} onClick={() => handleOutbound(label)}>
        {children}
      </Link>
    );
  }
}
