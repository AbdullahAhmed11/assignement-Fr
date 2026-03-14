import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const layers = [
  { speed: 0.15, label: "Layer 1" },
  { speed: 0.25, label: "Layer 2" },
  { speed: 0.4, label: "Layer 3" },
];

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const refs = layerRefs.current.filter(Boolean);
    if (!section || refs.length === 0) return;

    const ctx = gsap.context(() => {
      refs.forEach((el, i) => {
        if (!el) return;
        const speed = layers[i]?.speed ?? 0.2;
        gsap.to(el, {
          y: () => section.offsetHeight * speed,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Gallery
        </motion.h2>
      </div>
      <div className="relative h-[50vh] min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] sm:h-[55vh] lg:h-[60vh] max-w-4xl mx-auto px-3 sm:px-4">
        {layers.map((layer, i) => (
          <div
            key={layer.label}
            ref={(el) => {
              layerRefs.current[i] = el;
            }}
            className="absolute inset-0 flex items-center justify-center will-change-transform"
            style={{
              zIndex: i + 1,
              top: `${i * 8}%`,
              left: `${i * 6}%`,
              right: `${i * 6}%`,
              bottom: `${i * 8}%`,
            }}
          >
            <div
              className="w-full h-full rounded-2xl border border-border bg-muted/50 flex items-center justify-center text-muted-foreground text-sm"
              aria-hidden
            >
              Parallax layer {i + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
