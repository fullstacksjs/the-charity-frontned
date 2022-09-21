/* eslint-disable react/no-unknown-property */
const PeopleIcon = ({ w, h }: { w: string; h: string }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_212_5826)">
        <path
          d="M8.08333 9.75V8.91667C8.08333 8.47464 7.90774 8.05072 7.59518 7.73816C7.28261 7.4256 6.85869 7.25 6.41666 7.25H3.08333C2.6413 7.25 2.21738 7.4256 1.90482 7.73816C1.59226 8.05072 1.41666 8.47464 1.41666 8.91667V9.75"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.75 5.58333C5.67048 5.58333 6.41667 4.83714 6.41667 3.91667C6.41667 2.99619 5.67048 2.25 4.75 2.25C3.82953 2.25 3.08334 2.99619 3.08334 3.91667C3.08334 4.83714 3.82953 5.58333 4.75 5.58333Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5833 9.75V8.91667C10.5831 8.54739 10.4601 8.18866 10.2339 7.8968C10.0077 7.60494 9.69089 7.39649 9.33333 7.30417"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.66667 2.30417C8.02517 2.39596 8.34293 2.60446 8.56985 2.8968C8.79677 3.18913 8.91994 3.54868 8.91994 3.91875C8.91994 4.28882 8.79677 4.64837 8.56985 4.9407C8.34293 5.23304 8.02517 5.44154 7.66667 5.53333"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_212_5826">
          <rect
            width="10"
            height="10"
            fill="white"
            transform="translate(1 1)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PeopleIcon;
