import Logo from "../logo";
import Socials from "../socials";

const Header = () => {
  return (
    <header className="absolute z-30 flex w-full items-center px-16 xl:h-[90px] xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between py-8 lg:flex-row">
          {/* logo */}
          <Logo />
          {/* social */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
