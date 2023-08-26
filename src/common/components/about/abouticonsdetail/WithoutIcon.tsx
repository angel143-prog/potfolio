const WithoutIcon = ({ items, index }: any) => {
  return (
    <div
      className="flex max-w-max flex-1 flex-col items-center gap-x-2 text-white/60 md:flex-row"
      key={index}
    >
      {/* title */}
      <div className="mb-2 font-light md:mb-0">{items.title}</div>
      <div className="hidden md:flex">-</div>
      <div>{items.stage}</div>
    </div>
  );
};

export default WithoutIcon;
