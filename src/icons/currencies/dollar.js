const Dollar = ({ width = '32px', height = '32px' }) => {
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
        d="M24 10.5c.83 0 1.5.67 1.5 1.5v1.9a6.56 6.56 0 014.82 3.4 1.5 1.5 0 11-2.64 1.4 3.56 3.56 0 00-3.14-1.88h-1.4a2.64 2.64 0 100 5.27h1.32a6.04 6.04 0 011.04 12V36a1.5 1.5 0 01-3 0v-1.9a6.56 6.56 0 01-4.82-3.4 1.5 1.5 0 112.64-1.4 3.56 3.56 0 003.14 1.88h1a3.04 3.04 0 000-6.09h-1.32a5.64 5.64 0 01-.64-11.23V12c0-.83.67-1.5 1.5-1.5z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default Dollar;
