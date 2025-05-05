import { useEffect, useState } from "react";
import { IoPricetag, IoMail } from "react-icons/io5";

const priceTag = () => {
  return (
    <>
      <a
        href="#price"
        className="relative inline-block text-md md:text-xl text-gradient font-display tracking-wide after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
      >
        Pricing
      </a>
    </>
  );
};

const Mail = () => {
  return (
    <a
      href="#contact"
      className="relative inline-block text-md md:text-xl text-gradient font-display tracking-wide after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
    >
      Contact Us
    </a>
  );
};

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <div className="bg-black flex items-center p-4 justify-between md:pt-4">
      <a href="/">
        <h1 className="font-display tracking-widest text-md md:text-3xl text-gradient ">
          ASTRALIS
        </h1>
      </a>
      <div className="flex items-center gap-4 md:gap-8">
        {isMobile ? <IoPricetag className="text-md text-white" /> : priceTag()}
        {isMobile ? <IoMail className="text-md text-white" /> : Mail()}
      </div>
    </div>
  );
};

export default Header;
