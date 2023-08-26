import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href={"/"} className="mb-4">
        <Image
          src={"/assets/png/logo.png"}
          alt="Logo"
          width={220}
          height={48}
          priority={true}
        />
      </Link>
    </>
  );
};

export default Logo;
