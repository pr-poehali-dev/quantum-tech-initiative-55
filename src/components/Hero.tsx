import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/5884fed6-f469-48cf-aec3-eacf4d7faed4/files/023efcba-14e3-421d-b82d-e3e138e60362.jpg"
          alt="Luxury massage salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          РАССЛАБЬСЯ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Профессиональный массаж для тела и души — почувствуй разницу с первого прикосновения
        </p>
        <a
          href="#contact"
          className="inline-block mt-8 px-8 py-3 border border-white text-white uppercase text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300"
        >
          Записаться
        </a>
      </div>
    </div>
  );
}