import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Proposes-tu des sites web sur mesure ?",
    answer:
      "Oui. Je développe des sites et applications web entièrement personnalisés selon les besoins du client (portfolio, site vitrine, dashboard, SaaS).",
    value: "item-1",
  },
  {
    question: "Quelles technologies utilises-tu ?",
    answer:
      "Je travaille principalement avec React, Next.js, TypeScript, Node.js et des bases de données modernes comme PostgreSQL ou MongoDB.",
    value: "item-2",
  },
  {
    question: "Peux-tu développer une application complète (frontend + backend) ?",
    answer:
      "Oui, je suis développeur Full Stack. Je peux concevoir à la fois l’interface utilisateur et toute la partie serveur (API, base de données, authentification).",
    value: "item-3",
  },
  {
    question: "Travaille-tu en freelance ?",
    answer:
      "Oui, je réalise des projets en freelance pour les entreprises, startups et entrepreneurs qui souhaitent digitaliser leurs services.",
    value: "item-4",
  },
  {
    question: "Comment te contacter pour un projet ?",
    answer:
      "Tu peux me contacter via la section contact du portfolio ou par email pour discuter de ton projet et obtenir un devis.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      {/* TITRE */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Questions{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          fréquentes
        </span>
      </motion.h2>

      {/* ACCORDÉON */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Accordion
          type="single"
          collapsible
          className="w-full AccordionRoot"
        >
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      {/* CONTACT */}
      <motion.h3
        className="font-medium mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        Tu as un projet en tête ?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contacte-moi
        </a>
      </motion.h3>
    </section>
  );
};