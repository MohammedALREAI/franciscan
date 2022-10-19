const ClickHeading = (props) => (
  <h3
    onClick={props.clickHandler}
    className="hover:-translate-y-0.8 hover:scale-102 m-0 flex items-center overflow-hidden  p-0 text-xl transition delay-100 duration-300 ease-in-out  hover:opacity-90 hover:shadow-sm motion-reduce:transition-none motion-reduce:hover:transform-none"
  >
    <svg
      fill="#000000"
      height="36"
      viewBox="0 0 24 24"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `rotate(${props.displayContent ? "90" : "0"}deg)`,
      }}
    >
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
    <span dangerouslySetInnerHTML={{__html: props.title}} />
  </h3>
);

export default ClickHeading;
