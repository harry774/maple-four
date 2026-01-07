import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "TechFlow SaaS Platform",
    category: "Web Development",
    color: "from-primary to-[hsl(220,100%,60%)]",
  },
  {
    title: "Urban Eats Delivery",
    category: "Mobile App",
    color: "from-[hsl(260,100%,65%)] to-[hsl(320,100%,50%)]",
  },
  {
    title: "Finova Banking",
    category: "Branding & Web",
    color: "from-[hsl(150,100%,40%)] to-primary",
  },
  {
    title: "Artisan Marketplace",
    category: "E-Commerce",
    color: "from-[hsl(30,100%,50%)] to-[hsl(0,100%,50%)]",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
                Featured Work
              </span>
              <h2 className="font-display text-4xl md:text-6xl font-bold">
                Projects That
                <span className="text-gradient"> Inspire</span>
              </h2>
            </div>
            <a
              href="#"
              className="mt-6 md:mt-0 text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
            >
              View All Projects
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80 transition-opacity group-hover:opacity-100`}
                />

                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern
                        id={`grid-${index}`}
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 40 0 L 0 0 0 40"
                          fill="none"
                          stroke="white"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                  </svg>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-white/70 text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-white"
                  >
                    <span className="text-sm">View Case Study</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
