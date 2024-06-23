import React from "react";

interface TreandingProps extends React.SVGProps<SVGSVGElement> {}

const Treanding: React.FC<TreandingProps> = (props) => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.81536 25.5L2.83203 23.5167L13.3154 12.9625L18.982 18.6292L26.3487 11.3333H22.6654V8.5H31.1654V17H28.332V13.3167L18.982 22.6667L13.3154 17L4.81536 25.5Z"
      fill="#0B9B11"
    />
  </svg>
);

export default Treanding;
