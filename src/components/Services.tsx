import { motion } from "framer-motion";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string; 
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Développement Web sur mesure",
    description:
      "Création de sites et applications web modernes, performants et adaptés aux besoins des clients avec React et Next.js.",
    icon: <ChartIcon />,
  },
  {
    title: "Intégration UI / UX",
    description:
      "Transformation de maquettes Figma en interfaces responsive, propres et optimisées pour tous les écrans.",
    icon: <WalletIcon />,
  },
  {
    title: "Optimisation & Automatisation",
    description:
      "Amélioration des performances des applications et automatisation de tâches répétitives pour gagner en efficacité.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">

      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Mes{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              services
            </span>
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8">
            J’accompagne les entreprises et entrepreneurs dans la création de
            solutions web modernes et performantes.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <Card>
                  <CardHeader className="space-y-1 flex md:flex-row gap-4">
                    <div className="mt-1 bg-primary/20 p-2 rounded-2xl">
                      {icon}
                    </div>
                    <div>
                      <CardTitle>{title}</CardTitle>
                      <CardDescription className="text-md mt-2">
                        {description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.img
          src={cubeLeg}
          alt="Développement web services"
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

      </div>
    </section>
  );
};