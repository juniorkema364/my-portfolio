import { motion } from "framer-motion";

export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "10+",
      description: "Projets réalisés",
    },
    {
      quantity: "5+",
      description: "Clients satisfaits",
    },
    {
      quantity: "100%",
      description: "Sites responsives",
    },
    {
      quantity: "24h",
      description: "Temps de réponse",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

        {stats.map(({ quantity, description }, i) => (
          <motion.div
            key={description}
            className="space-y-2 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              {quantity}
            </h2>

            <p className="text-xl text-muted-foreground">
              {description}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
};