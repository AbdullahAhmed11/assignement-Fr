import { motion } from "framer-motion";

export function FooterSection() {
  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative py-16 sm:py-24 lg:py-32 bg-muted/50"
    >
      <div className="container text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
          Ready to get started?
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mb-6 sm:mb-8">
          Deploy this single-page experience to Vercel or Netlify in minutes.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium text-primary-foreground shadow hover:opacity-90 transition-opacity min-h-[44px] touch-manipulation"
        >
          Deploy now
        </a>
        <p className="mt-8 sm:mt-12 text-xs sm:text-sm text-muted-foreground">
          Scroll-animated landing · React · Framer Motion · GSAP
        </p>
      </div>
    </motion.footer>
  );
}
