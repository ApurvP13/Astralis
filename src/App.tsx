import Header from "./components/Header";
import { FloatingNav } from "./components/ui/floating-navbar";
import { Hero } from "./sections/Hero";
import { IoHome, IoPricetag, IoMail } from "react-icons/io5";
import Trips from "./sections/Trips";
import Footer from "./components/Footer";
import Testimonials from "./sections/Testimonials";
import ImageSlider from "./sections/Images";
import Contact from "./sections/Contact";

function App() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IoHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Trips",
      link: "#price",
      icon: <IoPricetag className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Testimonials",
      link: "#testimonials",
      icon: <IoMail className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <>
      <Header />
      <FloatingNav navItems={navItems} />
      <Hero />
      <Trips />
      <Testimonials />
      <ImageSlider />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
