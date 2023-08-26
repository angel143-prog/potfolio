const WithIcon = ({ aboutdata, index }: any) => {
  return (
    <div
      className="flex max-w-max flex-1 flex-col items-center gap-x-2 text-white/60 md:flex-row"
      key={index}
    >
      {/* title */}
      <div className="mb-2 font-light md:mb-0">{aboutdata.title}</div>
      <div className="hidden md:flex">-</div>
      <div className="flex gap-x-4">
        {/* icons */}
        {aboutdata.icons?.map((icon: any, itemIndex: any) => {
          return (
            <div className="text-2xl text-white" key={itemIndex}>
              {icon}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WithIcon;
