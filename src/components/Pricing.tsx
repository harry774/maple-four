import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Button } from "./ui/button";
import { Check, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "Full website analysis",
      "Detailed report",
      "Virtual meeting",
    ],
    popular: false,
    buttonVariant: "heroOutline" as const,
  },
  {
    name: "Starter",
    price: "$199",
    description: "For small businesses",
    features: [
      "1 Web Page",
      "Responsive web design",
      "Basic logo design",
      "Virtual meeting",
    ],
    popular: false,
    buttonVariant: "heroOutline" as const,
  },
  {
    name: "Plus",
    price: "$399",
    description: "Most popular choice",
    features: [
      "1 to 3 Web Pages",
      "1 Free domain name",
      "1 year free hosting",
      "Basic logo design",
      "SEO optimization",
      "Social media setup (Instagram, X, Facebook)",
    ],
    popular: true,
    buttonVariant: "glow" as const,
  },
  {
    name: "Pro",
    price: "$699",
    description: "For growing businesses",
    features: [
      "1 to 5 Web Pages",
      "24/7 Web Support",
      "Premium Logo design",
      "All Plus pack benefits",
    ],
    popular: false,
    buttonVariant: "heroOutline" as const,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] rounded-full bg-[hsl(260,100%,65%)]/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Pricing Plans
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Choose Your
              <span className="text-gradient"> Perfect Plan</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Transparent pricing with no hidden fees. Select the plan that best fits your business needs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className={`relative h-full glass-card rounded-2xl p-6 ${
                  plan.popular ? "gradient-border" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-[hsl(260,100%,65%)] text-primary-foreground text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold text-gradient">
                      {plan.price}
                    </span>
                    {plan.price !== "$0" && (
                      <span className="text-muted-foreground text-sm">/project</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.buttonVariant}
                  className="w-full group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
