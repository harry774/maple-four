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
          <div className="text-sm text-muted-foreground">
            © 2026 Maple Four Design. All rights reserved.
          </div>
          <img src={canadianLogo} alt="Maple Four Logo" className="h-12 w-auto object-contain" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
