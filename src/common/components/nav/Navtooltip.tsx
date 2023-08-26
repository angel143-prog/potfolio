const Navtooltip = ({ tooltip }: any) => {
  return (
    <div className="absolute right-0 hidden pr-14 xl:group-hover:flex">
      <div className="relative flex items-center rounded-[3px] bg-white p-[6px] text-primary">
        <div className="text-[12px] font-semibold capitalize leading-none">
          {tooltip.name}
        </div>
        {/* triangle */}
        <div className="absolute -right-2 border-y-[6px] border-l-8 border-r-0 border-solid border-y-transparent border-l-white"></div>
      </div>
    </div>
  );
};

export default Navtooltip;
