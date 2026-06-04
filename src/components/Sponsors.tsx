import { motion } from "framer-motion";
import { Radar } from "lucide-react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  { icon: <Radar size={34} />, name: "React" },
  { icon: <Radar size={34} />, name: "Next.js" },
  { icon: <Radar size={34} />, name: "Node.js" },
  { icon: <Radar size={34} />, name: "TypeScript" },
  { icon: <Radar size={34} />, name: "Tailwind CSS" },
  { icon: <Radar size={34} />, name: "PostgreSQL" },
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
      {/* TITLE */}
      <motion.h2
        className="text-center text-md lg:text-xl font-bold mb-8 text-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Technologies que j’utilise
      </motion.h2>

      {/* GRID */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
        {sponsors.map((item, i) => (
          <motion.div
            key={item.name}
            className="flex items-center gap-2 text-muted-foreground/70"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
          >
            <span>{item.icon}</span>
            <h3 className="text-lg font-semibold">{item.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};