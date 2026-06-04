import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Client Startup",
    userName: "@entrepreneur",
    comment:
      "Le site livré est rapide, moderne et parfaitement adapté à mon activité. Très bon travail.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Responsable projet",
    userName: "@business_owner",
    comment:
      "Développeur très sérieux, communication fluide et livraison dans les délais. Je recommande.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Freelance designer",
    userName: "@designer",
    comment:
      "Très bonne intégration frontend, respect du design et excellente qualité de code.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Client e-commerce",
    userName: "@shop_owner",
    comment:
      "Mon application web est maintenant beaucoup plus rapide et professionnelle.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">

      {/* TITLE */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Ce que disent mes{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          clients
        </span>
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
        className="text-xl text-muted-foreground pt-4 pb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Retours de clients et partenaires avec lesquels j’ai travaillé sur des
        projets web.
      </motion.p>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {testimonials.map((t, i) => (
          <motion.div
            key={t.userName}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <Card className="overflow-hidden">

              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage src={t.image} alt={t.name} />
                  <AvatarFallback>CL</AvatarFallback>
                </Avatar>

                <div>
                  <CardTitle className="text-lg">{t.name}</CardTitle>
                  <CardDescription>{t.userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>
                {t.comment}
              </CardContent>

            </Card>
          </motion.div>
        ))}

      </div>
    </section>
  );
};