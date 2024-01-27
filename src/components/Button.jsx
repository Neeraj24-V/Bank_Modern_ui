function Button({styles}) {
  return (
    <button type="button" className={`font-poppins text-primary text-[18px] font-medium rounded-lg bg-blue-gradient px-6 py-4 outline-none ${styles}`}>
      Get Started
    </button>
  );
}

export default Button;
