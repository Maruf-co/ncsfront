const Ruble = ({ width = '32px', height = '32px' }) => {
  return (
    <svg
      focusable="false"
      viewBox="0 0 48 48"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 14.52c0-.84.68-1.52 1.52-1.52h4.98a6.5 6.5 0 110 13H22v2.05h3.76a1.5 1.5 0 010 3H22v2.45a1.5 1.5 0 01-3 0v-2.45h-1.5a1.5 1.5 0 010-3H19V26h-1.5a1.5 1.5 0 010-3H19v-8.48zM22 23h3.5a3.5 3.5 0 100-7H22v7z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default Ruble;
