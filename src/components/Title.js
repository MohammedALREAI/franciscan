import clsx from "clsx";
import { Component } from "react";

class Title extends Component {
  render() {
    return (
      <h1
        className={clsx("md:tex-2xl  hover:-translate-y-0.8 m-0 p-0 text-center font-semibold  transition  delay-150 duration-300 ease-in-out hover:scale-105 hover:opacity-90 hover:shadow-inner  motion-reduce:transition-none motion-reduce:hover:transform-none md:py-4", this.props.className ||"")}


      >
        {this.props.title}
      </h1>
    );
  }
}

export default Title;
