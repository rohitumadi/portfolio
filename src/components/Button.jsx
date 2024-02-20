function Button({ children, type = 'submit', width = '' }) {
  return (
    <button
      className={`bg-primary ${width != '' ? width : 'w-full sm:w-fit'} rounded-lg px-6 py-3 font-semibold text-white shadow-lg duration-100  ease-out hover:-translate-y-2  hover:shadow-white active:translate-y-0  active:shadow-none `}
    >
      {children}
    </button>
  );
}

export default Button;
