import WithIcon from "../abouticonsdetail/WithIcon";
import WithoutIcon from "../abouticonsdetail/WithoutIcon";

const AboutInfo = ({ aboutdetails, aboutIndex }: any) => {
  return (
    <div className="flex flex-col items-center gap-y-2 py-2 xl:items-start xl:gap-y-4 xl:py-6">
      {aboutdetails[aboutIndex].info.map((item: any, itemIndex: any) => {
        if ("stage" in item) {
          return <WithoutIcon items={item} index={itemIndex} />;
        } else {
          return <WithIcon aboutdata={item} index={itemIndex} />;
        }
      })}
    </div>
  );
};

export default AboutInfo;
