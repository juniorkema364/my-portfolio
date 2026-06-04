import { motion } from "framer-motion";
import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">

        {/* LOGO / PRESENTATION */}
        <motion.div
          className="col-span-full xl:col-span-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex items-center gap-2"
          >
            <LogoIcon />
            Portfolio Dev
          </a>

          <p className="text-muted-foreground mt-4">
            Développeur Full Stack passionné par la création d’applications web modernes,
            performantes et orientées expérience utilisateur. Disponible pour des projets
            freelance et collaborations.
          </p>
        </motion.div>

        {/* LIENS PRO */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-bold text-lg">Présence</h3>

          <a className="opacity-60 hover:opacity-100" href="https://github.com/juniorkema364">
            GitHub
          </a>
          <a className="opacity-60 hover:opacity-100" href="https://www.linkedin.com/in/didier-placide-kema-3426b5343/">
            LinkedIn
          </a>
        
        </motion.div>

        {/* SERVICES */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="font-bold text-lg">Services</h3>

          <span className="opacity-60">Sites web sur mesure</span>
          <span className="opacity-60">Applications web</span>
          <span className="opacity-60">API backend</span>
        </motion.div>

        {/* PROJETS / INFOS */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="font-bold text-lg">À propos</h3>

          <a className="opacity-60 hover:opacity-100" href="#features">
            Compétences
          </a>
          <a className="opacity-60 hover:opacity-100" href="#about">
            À propos
          </a>
          <a className="opacity-60 hover:opacity-100" href="#faq">
            FAQ
          </a>
        </motion.div>

        {/* CONTACT / COMMUNAUTE */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="font-bold text-lg">Contact</h3>

          <a className="opacity-60 hover:opacity-100" href="#">
            Email
          </a>
          <a className="opacity-60 hover:opacity-100" href="#">
            Discord
          </a>
          <a className="opacity-60 hover:opacity-100" href="#">
            WhatsApp
          </a>
        </motion.div>
      </section>

      {/* COPYRIGHT */}
      <motion.section
        className="container pb-14 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-muted-foreground">
          © {new Date().getFullYear()} Portfolio développé par{" "}
          <span className="text-primary font-medium">
            KEMA Didier Placide
          </span>
        </h3>
      </motion.section>
    </footer>
  );
};