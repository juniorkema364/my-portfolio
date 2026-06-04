import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Qualité & Performance",
    description:
      "Je développe des applications web rapides, optimisées et adaptées aux standards modernes du développement.",
  },
  {
    icon: <MapIcon />,
    title: "Analyse du besoin",
    description:
      "Chaque projet commence par une compréhension claire des objectifs pour proposer la meilleure solution technique.",
  },
  {
    icon: <PlaneIcon />,
    title: "Déploiement & Scalabilité",
    description:
      "Je construis des applications prêtes à évoluer et facilement déployables sur des plateformes modernes.",
  },
  {
    icon: <GiftIcon />,
    title: "Expérience utilisateur",
    description:
      "Je conçois des interfaces intuitives et agréables pour offrir une expérience utilisateur fluide et moderne.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      {/* TITLE */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Comment je{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          travaille
        </span>
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
        className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Un processus simple et structuré pour transformer une idée en une
        application web moderne, performante et évolutive.
      </motion.p>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="grid gap-4 place-items-center">
                  {icon}
                  {title}
                </CardTitle>
              </CardHeader>

              <CardContent>{description}</CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};