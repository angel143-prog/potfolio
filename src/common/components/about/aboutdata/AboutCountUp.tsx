import CountUp from "react-countup";

const AboutCountUp = ({ aboutdata }: any) => {
  return (
    <div
      key={aboutdata.id}
      className={`relative flex-1 ${
        aboutdata.category !== "awards"
          ? "after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-white/10"
          : ""
      }`}
    >
      <div className="mb-2 text-2xl font-extrabold text-accent xl:text-4xl">
        <CountUp
          start={0}
          end={aboutdata.countupend}
          duration={aboutdata.countupduration}
        />{" "}
        +
      </div>
      <div className="max-w-[100px] text-xs uppercase leading-[1.4] tracking-[1px]">
        {aboutdata.countuptext}
      </div>
    </div>
  );
};

export default AboutCountUp;
