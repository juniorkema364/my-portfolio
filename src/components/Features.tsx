import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Design responsive",
    description:
      "Je crée des interfaces adaptées à tous les écrans (mobile, tablette, desktop) pour offrir une expérience utilisateur optimale.",
    image: image4,
  },
  {
    title: "Interface utilisateur moderne",
    description:
      "Développement d’interfaces intuitives, rapides et ergonomiques basées sur les meilleures pratiques UX/UI.",
    image: image3,
  },
  {
    title: "Solutions web performantes",
    description:
      "Applications optimisées, rapides et scalables utilisant des technologies modernes comme React et Next.js.",
    image: image,
  },
];

const featureList: string[] = [
  "Frontend moderne",
  "Backend API",
  "Applications web",
  "Dashboard admin",
  "Sites vitrines",
  "SaaS",
  "Responsive design",
  "Optimisation SEO",
  "Performance",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      {/* TITRE */}
      <motion.h2
        className="text-3xl lg:text-4xl font-bold md:text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Mes{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          compétences clés
        </span>
      </motion.h2>

      {/* BADGES */}
      <motion.div
        className="flex flex-wrap md:justify-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {featureList.map((feature: string) => (
          <Badge key={feature} variant="secondary" className="text-sm">
            {feature}
          </Badge>
        ))}
      </motion.div>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent>{description}</CardContent>

              <CardFooter>
                <img
                  src={image}
                  alt="Illustration feature"
                  className="w-[200px] lg:w-[300px] mx-auto"
                />
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};