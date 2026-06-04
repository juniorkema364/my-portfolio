import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  link: string;
  role: string;
  impact: string;
}
import akili from "../assets/akili.png"
import cubeLeg from "../assets/LG.png"
import gbm from "../assets/gbm.png"
import craft from "../assets/craft.png"


const projects: ProjectProps[] = [
  {
    title: "Community Craft Media",
    description:
      "Plateforme digitale complète permettant la gestion et diffusion de contenu média avec une interface moderne et rapide.",
    role: "Développeur Full Stack",
    impact: "Amélioration de l’expérience utilisateur et fluidité de navigation",
    image: craft,
    link: "https://community-craft-media.onrender.com/",
  },
  {
    title: "GBM Services",
    description:
      "Site vitrine professionnel conçu pour renforcer la présence digitale d’une entreprise de services.",
    role: "Développeur Frontend",
    impact: "Augmentation de la visibilité en ligne et crédibilité de marque",
    image: gbm,
    link: "https://gbm-services.onrender.com/",
  },
  {
    title: "Portfolio Master",
    description:
      "Portfolio interactif moderne mettant en avant compétences et réalisations web.",
    role: "Conception & Développement",
    impact: "Optimisation de la présentation professionnelle",
    image: cubeLeg  ,
    link: "https://portfolio-master-1-m3rq.onrender.com/",
  },
  {
    title: "Akili Platform",
    description:
      "Plateforme intelligente axée sur l’IA et la gestion de données avancées.",
    role: "Développeur Full Stack",
    impact: "Automatisation et amélioration de l’analyse des données",
    image: akili,
    link: "https://akili.cc/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="container py-24 sm:py-32">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Mes{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            réalisations
          </span>
        </h2>

        <p className="text-muted-foreground mt-4 text-lg">
          Quelques projets concrets développés pour des besoins réels en
          entreprise et en freelance.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10">

        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="group"
          >

            <div className="rounded-2xl overflow-hidden bg-muted/50 shadow-md hover:shadow-xl transition-all">

              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* CONTENT */}
              <div className="p-6 space-y-3">

                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                {/* META */}
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>
                    <span className="font-semibold text-foreground">
                      Rôle :
                    </span>{" "}
                    {project.role}
                  </p>

                  <p>
                    <span className="font-semibold text-foreground">
                      Impact :
                    </span>{" "}
                    {project.impact}
                  </p>
                </div>

                {/* CTA */}
                <span className="text-primary font-medium inline-block pt-2">
                  Voir le projet →
                </span>

              </div>
            </div>

          </motion.a>
        ))}

      </div>
    </section>
  );
};