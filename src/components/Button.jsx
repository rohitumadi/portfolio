function Button({ isLoading = false, children, type = 'submit', width = '' }) {
  return (
    <button
      className={`bg-primary flex justify-center  ${width != '' ? width : 'w-full sm:w-fit'} rounded-lg px-6 py-3 font-semibold text-white shadow-lg duration-100  ease-out hover:-translate-y-2  hover:shadow-white active:translate-y-0  active:shadow-none `}
    >
      {isLoading && <span className="loading loading-spinner mr-2"></span>}
      {children}
    </button>
  );
}

export default Button;
