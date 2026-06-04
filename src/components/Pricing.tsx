import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Site vitrine",
    popular: 0,
    price: 100000,
    description:
      "Idéal pour présenter votre activité, entreprise ou marque personnelle avec un site moderne et responsive.",
    buttonText: "Me contacter",
    benefitList: [
      "1 à 3 pages",
      "Design responsive",
      "Optimisation SEO basique",
      "Formulaire de contact",
      "Déploiement inclus",
    ],
  },
  {
    title: "Application Web",
    popular: 1,
    price: 250000,
    description:
      "Application web complète avec interface moderne et fonctionnalités dynamiques.",
    buttonText: "Démarrer un projet",
    benefitList: [
      "Interface utilisateur moderne",
      "API backend (Node.js)",
      "Base de données",
      "Authentification",
      "Dashboard admin",
    ],
  },
  {
    title: "Projet sur mesure",
    popular: 0,
    price: 500000,
    description:
      "Solution complète et personnalisée pour startups, entreprises ou projets complexes.",
    buttonText: "Discuter du projet",
    benefitList: [
      "Architecture complète",
      "Frontend + Backend",
      "Scalabilité",
      "Optimisation performance",
      "Support et maintenance",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Mes{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          tarifs
        </span>
      </h2>

      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Des solutions adaptées aux entrepreneurs, startups et entreprises
        souhaitant digitaliser leurs activités.
      </h3>

      {/* PRICING GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-primary"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}

                {pricing.popular === PopularPlanType.YES && (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Recommandé
                  </Badge>
                )}
              </CardTitle>

              <div>
                <span className="text-3xl font-bold">
                  {pricing.price.toLocaleString()} FCFA
                </span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">
                {pricing.buttonText}
              </Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};