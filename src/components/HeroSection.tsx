import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const headlineLines = [
  ["Build", "something"],
  ["remarkable"],
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.25,
    },
  },
};

const wordMotion = {
  hidden: { opacity: 0, y: 56 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: "easeOut" as const },
  },
};

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const bgLayer1Ref = useRef<HTMLDivElement>(null);
  const bgLayer2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const layer1 = bgLayer1Ref.current;
    const layer2 = bgLayer2Ref.current;
    if (!hero || !layer1 || !layer2) return;

    const ctx = gsap.context(() => {
      gsap.to(layer1, {
        y: "25%",
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(layer2, {
        y: "45%",
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center"
    >
      <div
        ref={bgLayer1Ref}
        className="absolute inset-0 -inset-y-[25%] will-change-transform"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10" />
      </div>
      <div
        ref={bgLayer2Ref}
        className="absolute inset-0 -inset-y-[45%] will-change-transform"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/15 via-transparent to-primary/5" />
      </div>

      <div className="relative z-10 container text-center px-4 sm:px-6">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tight overflow-hidden"
          variants={container}
          initial="hidden"
          animate="visible"
          aria-label="Build something remarkable"
        >
          {headlineLines.map((line, lineIndex) => (
            <span key={lineIndex} className="block overflow-hidden leading-tight">
              {line.map((word, wordIndex) => (
                <motion.span
                  key={`${lineIndex}-${wordIndex}`}
                  variants={wordMotion}
                  className="inline-block mr-[0.25em] align-baseline"
                  style={lineIndex === 1 ? { color: "var(--primary)" } : undefined}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>
        <motion.p
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-1"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          A single-page experience with smooth scroll animations and parallax
          depth.
        </motion.p>
        <motion.div
          className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 2.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium text-primary-foreground shadow hover:opacity-90 transition-opacity min-h-[44px] touch-manipulation"
          >
            Get started
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium hover:bg-muted transition-colors min-h-[44px] touch-manipulation"
          >
            Learn more
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors touch-manipulation py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.4 }}
        aria-label="Scroll to discover"
      >
        <span className="text-xs sm:text-sm font-medium tracking-widest uppercase">
          Scroll to discover
        </span>
        <motion.span
          className="flex flex-col items-center"
          animate={{ y: [0, 6, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
          }}
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.span>
      </motion.a>
    </section>
  );
}
