import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechStart Inc.",
    content: "Maple Four Design completely transformed our online presence. Their attention to detail and creative approach exceeded all our expectations. Our website traffic increased by 300% within the first month!",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "James Rodriguez",
    role: "Founder, Urban Eats",
    content: "Working with Maple Four was an absolute pleasure. They understood our vision from day one and delivered a stunning website that perfectly represents our brand. Highly recommend their services!",
    rating: 5,
    avatar: "JR",
  },
  {
    name: "Emily Chen",
    role: "Marketing Director, Finova",
    content: "The team at Maple Four Design is exceptional. Their SEO expertise helped us rank #1 for our key search terms, and their ongoing support has been invaluable. Best investment we've made!",
    rating: 5,
    avatar: "EC",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 bg-card/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Testimonials
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              What Our Clients
              <span className="text-gradient"> Say About Us</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full glass-card rounded-2xl p-8 relative gradient-border"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-primary/20">
                  <Quote className="w-10 h-10" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-[hsl(260,100%,65%)] flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-display font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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

export default Testimonials;
