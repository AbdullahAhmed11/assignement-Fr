import { motion } from "framer-motion";

const features = [
  {
    title: "Scroll animations",
    description:
      "Elements fade and scale into view as you scroll, triggered once for a clean experience.",
  },
  {
    title: "Parallax depth",
    description:
      "Background layers move at different speeds with GSAP ScrollTrigger for immersive depth.",
  },
  {
    title: "Performance first",
    description:
      "Transform and opacity only, with will-change where it matters. Smooth on all devices.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-16 sm:py-24 lg:py-32 bg-muted/30"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Features
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="rounded-xl border border-border bg-card p-5 sm:p-6 shadow-sm"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
