import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-[hsl(260,100%,65%)] flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-sm">M4</span>
            </div>
            <span className="font-display font-semibold text-foreground">Maple Four Design</span>
          </div>

          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#work" className="hover:text-primary transition-colors">Work</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="text-sm text-muted-foreground">
            © 2024 Maple Four Design. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
