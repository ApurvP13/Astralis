const Footer = () => {
  return (
    <footer className="bg-black text-slate-400 py-12 font-display px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wider">
            ASTRALIS
          </h2>
          <p className="mt-2 text-sm max-w-xs leading-relaxed">
            Beyond the stars | Beyond the imagination.
          </p>

          <div className="mt-4 pt-6 text-left text-xs text-slate-500">
            © {new Date().getFullYear()} Astralis. All rights reserved.
          </div>
        </div>

        {/* Site Links */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wide">
            Site
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#hero" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-white transition">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#price" className="hover:text-white transition">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wide">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:text-white transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 uppercase font-extrabold font-sans text-3xl md:text-9xl pt-6 text-center bg-gradient-to-b from-black via-zinc-950 to-slate-500 bg-clip-text text-transparent ">
        Astralis
      </div>
    </footer>
  );
};

export default Footer;
