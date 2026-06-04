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
  whatsappMessage: string;
}

const phone = "242068100060";

const pricingList: PricingProps[] = [
  {
    title: "Site vitrine",
    popular: 0,
    price: 100000,
    description:
      "Idéal pour présenter votre activité avec un site moderne et professionnel.",
    buttonText: "Me contacter",
    whatsappMessage:
      "Bonjour 👋 je souhaite un site vitrine (100 000 FCFA). Pouvez-vous m'expliquer le processus ?",
    benefitList: [
      "1 à 3 pages",
      "Design responsive",
      "SEO basique",
      "Formulaire contact",
      "Déploiement inclus",
    ],
  },
  {
    title: "Application Web",
    popular: 1,
    price: 250000,
    description:
      "Application complète avec backend, base de données et dashboard.",
    buttonText: "Démarrer",
    whatsappMessage:
      "Bonjour 👋 je veux une application web (250 000 FCFA). Pouvons-nous discuter du projet ?",
    benefitList: [
      "Frontend moderne",
      "Backend Node.js",
      "Base de données",
      "Auth",
      "Dashboard admin",
    ],
  },
  {
    title: "Projet sur mesure",
    popular: 0,
    price: 500000,
    description:
      "Solution complète pour projet sérieux ou startup.",
    buttonText: "Discuter",
    whatsappMessage:
      "Bonjour 👋 je veux un projet sur mesure (500 000 FCFA). J'aimerais un devis détaillé.",
    benefitList: [
      "Architecture complète",
      "Fullstack",
      "Scalabilité",
      "Performance",
      "Maintenance",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">

      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Mes{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          tarifs
        </span>
      </h2>

      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Des solutions adaptées pour transformer vos idées en produits digitaux.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {pricingList.map((pricing) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "border-primary drop-shadow-xl shadow-black/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex justify-between">
                {pricing.title}

                {pricing.popular === PopularPlanType.YES && (
                  <Badge variant="secondary" className="text-primary">
                    Recommandé
                  </Badge>
                )}
              </CardTitle>

              <span className="text-3xl font-bold">
                {pricing.price.toLocaleString()} FCFA
              </span>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            {/* WHATSAPP BUTTON */}
            <CardContent>
              <a
                href={`https://wa.me/${phone}?text=${encodeURIComponent(
                  pricing.whatsappMessage
                )}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  {pricing.buttonText}
                </Button>
              </a>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter>
              <div className="space-y-3">
                {pricing.benefitList.map((b) => (
                  <div key={b} className="flex">
                    <Check className="text-green-500" />
                    <span className="ml-2">{b}</span>
                  </div>
                ))}
              </div>
            </CardFooter>

          </Card>
        ))}

      </div>
    </section>
  );
};