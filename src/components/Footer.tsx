import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import canadianLogo from "../assets/canadian-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
             <img src={logo} alt="Maple Four Logo" className="h-12 w-auto object-contain" />
          </div>

          {/* <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#work" className="hover:text-primary transition-colors">Work</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div> */}
          <div className="flex item-center justify-center">
            <img src={canadianLogo} alt="Maple Four Logo" className="h-12 w-auto object-contain" />
          </div>
          <div className="text-sm text-muted-foreground">
            © 2026 Maple Four Design. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
