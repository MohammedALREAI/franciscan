import Image from "next/image";
import {Component} from "react";
export default class CardItem extends Component {
  render() {
    const {title, description, image, link, potion, alt, office} = this.props;
    return (
      <div
        className="card hover:-translate-y-0.8 m-0 max-h-[432px] overflow-hidden  p-0 transition delay-150 duration-300 ease-in-out hover:scale-105  hover:opacity-90 hover:shadow-inner
      motion-reduce:transition-none motion-reduce:hover:transform-none
      "
      >
        <div className="max-h-[55%] overflow-hidden ">
          <Image
            style={{
              filter: potion,
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "100%",
            }}
            className="block h-full w-full content-evenly bg-auto bg-center bg-no-repeat"
            src={image}
            layout="responsive"
            alt={alt}
            title={title}
          />
        </div>
        <div className="rounded-sm px-3 ">
          <span className="block py-2 font-mono text-lg capitalize text-red-700">
            {title}
          </span>
          <span className="block py-2 font-mono text-sm font-extralight text-red-500">
            {potion}
          </span>
          <span className="block py-2">{office}</span>
          <span className="wrap text-gradient-to-r  overflow-hidden truncate text-ellipsis   from-cyan-500 to-blue-500 ">
            {description}
          </span>
        </div>
      </div>
    );
  }
}
