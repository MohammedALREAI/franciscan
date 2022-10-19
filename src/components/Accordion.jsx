import React from "react";
import "../styles/accrdion.module.scss";
class AccordionItem extends React.Component {
  state = {
    opened: this.props.isOpen,
  };

  handleClickOutside = (event) => {
    if (this.node && !this.node.contains(event.target)) {
      this.setState({opened: false});
    }
  };

  // click outside of the  divelement closes the accordion
  componentDidMount() {
     console.log("🚀 ~ file: Accordion.jsx ~ line 14 ~ AccordionItem ~ render ~ state")
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    const {
      props: {title, children},
      state: {opened},
    } = this;
    console.log(
      "🚀 ~ file: Accordion.jsx ~ line 14 ~ AccordionItem ~ render ~ state",
      this.state
    );

    const handleToggle = () => {
      this.setState({opened: !opened});
    };

    return (
      <div
        className={`accordion-item  m-2 p-2 ${
          opened && "accordion-item--opened"
        }`}
      >
        <div className="accordion-item__line flex space-x-1">
          <h3
            onClick={handleToggle}
            className="accordion-item__title flex space-x-2 text-2xl font-extralight"
          >
            {" "}
            <span
              className={`"w-full  flex items-center justify-center "${
                opened
                  ? " hover:-translate-y-0.8 hover:scale-102 m-0 max-h-[432px] rotate-90  overflow-hidden p-0 transition delay-100 duration-300 ease-in-out  hover:opacity-90 hover:shadow-inner motion-reduce:transition-none motion-reduce:hover:transform-none"
                  : ""
              }`}
              onClick={handleToggle}
            >
              <svg
                fill="#000000"
                height="36"
                viewBox="0 0 24 24"
                width="36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </span>
            {title}
          </h3>
        </div>
        {this.state.opened && (
          <div className="accordion-item__inner accordion-list  hover:-translate-y-0.8 overflow-hidden  p-0 transition delay-150 duration-300 ease-in-out hover:scale-110  hover:opacity-90 hover:shadow-inner motion-reduce:transition-none motion-reduce:hover:transform-none">
            {children}
          </div>
        )}
      </div>
    );
  }
}

export default class Accordion extends React.Component {
  render() {
    const {title, children, isOpen} = this.props;
    this.state = {
      open: isOpen,
    };
    const toggle = () => {
      this.setState({open: !this.state.open});
    };
    return (
      <div {...{className: "wrapper"}}>
        <AccordionItem isOpen={isOpen} setOpen={toggle} title={title}>
          {children}
        </AccordionItem>
      </div>
    );
  }
}
