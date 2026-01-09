import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import ScrollReveal from "./ScrollReveal";
import { Button } from "./ui/button";
import { ArrowRight, Mail, MapPin, Phone, X, Instagram } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = "5YBMvyFonfMZb39kj";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in the required fields.");
      return;
    }
    setLoading(true);
    try {
      console.log("EmailJS ENV", {
        SERVICE_ID,
        TEMPLATE_ID,
        PUBLIC_KEY,
      });
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name: formData.name, email: formData.email, phone: formData.phone, message: formData.message },
        PUBLIC_KEY,
      );
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("EmailJS error", err);
      setError("Something went wrong, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Let&apos;s Create
              <span className="text-gradient"> Something Amazing</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ready to transform your digital presence? We&apos;d love to hear about your
              project and explore how we can help.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <div className="glass-card rounded-2xl p-8 gradient-border">
              <h3 className="font-display text-2xl font-bold mb-6">Send Us a Message</h3>

              {success ? (
                <div role="status" aria-live="polite" className="p-6 bg-card/50 rounded-md text-center">
                  <p className="font-medium">Thank you for contacting, we will get in touch with you shortly</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        name="from_name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        name="reply_to"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        type="email"
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>
                  <Button variant="glow" size="xl" className="w-full group" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>

                  {error && <div className="text-destructive text-sm">{error}</div>}
                </form>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-muted-foreground mb-8">
                  Prefer to reach out directly? Here&apos;s how you can get in touch with our team.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "hello@maplefour.design",
                    href: "mailto:hello@maplefour.design",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+1 (555) 123-4567",
                    href: "tel:+15551234567",
                  },
                  {
                    icon: MapPin,
                    label: "Office",
                    value: "123 Creative Street, Design District",
                    href: "#",
                  },
                ].map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                      <div className="font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="pt-8 border-t border-border">
                <h4 className="font-display font-bold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://x.com/yourhandle"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="w-11 h-11 rounded-lg bg-card/50 border border-border flex items-center justify-center hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Follow us on X (Twitter)"
                  >
                    <X className="w-5 h-5" />
                  </motion.a>

                  <motion.a
                    href="https://instagram.com/maplefourdesign"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="w-11 h-11 rounded-lg bg-card/50 border border-border flex items-center justify-center hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
