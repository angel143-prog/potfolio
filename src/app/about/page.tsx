import { AboutAvatar, AboutData, AboutText } from "@/components/about";
import Circles from "@/components/circles";
import { aboutData } from "@/data/data";

const page = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <AboutAvatar />
      <div className="container mx-auto flex h-full flex-col items-center gap-x-6 xl:flex-row">
        {/* text */}
        <AboutText />
        {/* personal data/info  */}
        <AboutData aboutdata={aboutData} />
      </div>
    </div>
  );
};

export default page;
