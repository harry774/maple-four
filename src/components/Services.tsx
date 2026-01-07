import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import serviceWeb from "@/assets/service-web.png";
import serviceSeo from "@/assets/service-seo.png";
import serviceApp from "@/assets/service-app.png";
import serviceMarketing from "@/assets/service-marketing.png";

const services = [
  {
    title: "Web Design & Development",
    description: "Custom websites that captivate visitors and drive conversions with cutting-edge technology.",
    image: serviceWeb,
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "SEO Optimization",
    description: "Dominate search rankings with our data-driven SEO strategies and technical expertise.",
    image: serviceSeo,
    tags: ["Technical SEO", "Content", "Analytics"],
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    image: serviceApp,
    tags: ["iOS", "Android", "React Native"],
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing campaigns that amplify your brand and accelerate growth.",
    image: serviceMarketing,
    tags: ["PPC", "Social Media", "Branding"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[hsl(260,100%,65%)]/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              What We Do
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Services That
              <span className="text-gradient"> Transform</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From concept to launch, we provide end-to-end digital solutions that help your business thrive in the modern digital landscape.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.title}
              delay={index * 0.1}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative glass-card rounded-2xl overflow-hidden gradient-border cursor-pointer"
              >
                <div className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex gap-2 flex-wrap">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors"
                    >
                      <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </motion.div>
                  </div>

                  <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <div className="relative h-48 rounded-xl overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
