import { motion } from "framer-motion";
import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <motion.div
        className="bg-muted/50 border rounded-lg py-12"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <motion.img
            src={pilot}
            alt="Photo du développeur"
            className="w-[300px] object-contain rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          />

          <div className="bg-green-0 flex flex-col justify-between">
            <motion.div
              className="pb-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  À propos de
                </span>{" "}
                moi
              </h2>

              <p className="text-xl text-muted-foreground mt-4">
                Je suis un développeur Full Stack passionné par la création
                d'applications web modernes, performantes et centrées sur
                l'expérience utilisateur. J'aime transformer des idées en
                solutions numériques concrètes capables d'apporter une réelle
                valeur aux entreprises et à leurs utilisateurs.
              </p>

              <p className="text-xl text-muted-foreground mt-4">
                Spécialisé dans les technologies telles que React, Next.js,
                TypeScript, Node.js et les bases de données modernes, je conçois
                des applications robustes, évolutives et adaptées aux besoins
                spécifiques de chaque projet.
              </p>

              <p className="text-xl text-muted-foreground mt-4">
                Toujours en veille technologique, je cherche constamment à
                améliorer mes compétences afin de proposer des solutions
                innovantes, sécurisées et performantes. Mon objectif est de
                développer des produits qui allient qualité technique,
                efficacité et design soigné.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Statistics />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};