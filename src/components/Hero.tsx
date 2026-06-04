import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">

      {/* TEXTE */}
      <motion.div
        className="text-center lg:text-start space-y-6"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Développeur
            </span>{" "}
            Full Stack
          </h1>{" "}
          <br />
          <h2 className="inline">
            spécialisé en{" "}
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              React & Next.js
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Je conçois et développe des applications web modernes, rapides et
          performantes. J’aide les entreprises et entrepreneurs à transformer
          leurs idées en solutions digitales concrètes : sites web, dashboards,
          plateformes SaaS et API robustes.
        </p>

        {/* CTA */}
        <motion.div
          className="space-y-4 md:space-y-0 md:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Button className="w-full md:w-1/3">
            Me contacter
          </Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Voir GitHub
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* HERO CARDS */}
      <motion.div
        className="z-10"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroCards />
      </motion.div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};