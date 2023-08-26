const Buttons = ({ btntext, btnicon, ...props }: any) => {
  return (
    <button
      className="btn group flex max-w-[170px] items-center justify-center overflow-hidden rounded-full border border-white/50 px-8 transition-all duration-300 hover:border-accent"
      {...props}
    >
      <span className="transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0">
        {btntext}
      </span>
      {btnicon}
    </button>
  );
};

export default Buttons;
