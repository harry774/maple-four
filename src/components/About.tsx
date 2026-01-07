import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import { Sparkles, Target, Zap, Users } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Innovation First",
    description: "We push boundaries with cutting-edge technology and creative solutions.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "Every pixel and line of code is optimized for measurable outcomes.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Speed matters. We deliver performant solutions on time, every time.",
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Your success is our success. We're partners in your digital journey.",
  },
];

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Scrolling Text */}
      <motion.div
        style={{ x }}
        className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[200px] font-display font-bold text-muted/5 pointer-events-none select-none"
      >
        MAPLE FOUR DESIGN • MAPLE FOUR DESIGN • MAPLE FOUR DESIGN •
      </motion.div>

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              We Create Digital
              <span className="text-gradient"> Masterpieces</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Maple Four Design is a full-service digital agency that combines
              creative excellence with technical expertise. We transform ideas into
              powerful digital experiences that captivate audiences and drive growth.
            </p>
            <p className="text-muted-foreground mb-8">
              With over 8 years of experience, our team of designers, developers, and
              strategists work together to deliver solutions that exceed expectations
              and set new standards in digital innovation.
            </p>

            <div className="flex gap-8">
              <div>
                <div className="font-display text-4xl font-bold text-gradient">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-gradient">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-gradient">100%</div>
                <div className="text-sm text-muted-foreground">Project Success</div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1} direction="right">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-card rounded-xl p-6 gradient-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
