import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">

        {/* TEXTE */}
        <motion.div
          className="lg:col-start-1"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Transformez vos
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              idées en applications web{" "}
            </span>
            modernes
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Je suis développeur web Full Stack spécialisé dans la création
            d'applications performantes, modernes et responsives. J'accompagne
            les entreprises et entrepreneurs dans la conception de solutions
            digitales sur mesure : sites web, dashboards, plateformes SaaS et
            APIs robustes.
          </p>
        </motion.div>

        {/* BOUTONS */}
        <motion.div
          className="space-y-4 lg:col-start-2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button className="w-full md:mr-4 md:w-auto">
            Me contacter
          </Button>

          <Button
            variant="outline"
            className="w-full md:w-auto"
          >
            Voir mes projets
          </Button>
        </motion.div>

      </div>
    </section>
  );
};