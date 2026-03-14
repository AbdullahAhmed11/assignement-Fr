import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            className="space-y-4"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              What we do
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              We craft scroll-driven experiences that feel intentional and
              smooth. Every section reveals with purpose—no clutter, no
              repetition.
            </p>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Built for the web
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Parallax and scroll-triggered animations create depth and focus.
              One page, one story—optimized for performance and delight.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
