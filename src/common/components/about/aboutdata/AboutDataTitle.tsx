const AboutDataTitle = ({
  aboutdata,
  aboutIndex,
  toggleIndex,
  ...props
}: any) => {
  return (
    <div
      key={aboutIndex}
      className={`${
        toggleIndex === aboutIndex &&
        "text-accent after:w-[100%] after:!bg-accent after:transition-all after:duration-300"
      } relative cursor-pointer capitalize after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-8 after:bg-white xl:text-lg`}
      {...props}
    >
      {aboutdata.title}
    </div>
  );
};

export default AboutDataTitle;
