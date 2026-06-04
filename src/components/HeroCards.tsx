import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">

      {/* TESTIMONIAL */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute w-[340px] -top-[15px]"
      >
        <Card className="drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <Avatar>
              <AvatarImage
                alt="client"
                src="https://github.com/shadcn.png"
              />
              <AvatarFallback>CL</AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <CardTitle className="text-lg">Client satisfait</CardTitle>
              <CardDescription>Projet freelance</CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            “Le site livré est rapide, moderne et parfaitement adapté à nos besoins.”
          </CardContent>
        </Card>
      </motion.div>

      {/* PROFIL DEV */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center"
      >
        <Card className="drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader className="mt-8 flex justify-center items-center pb-2">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=developer"
              alt="developer avatar"
              className="absolute -top-12 rounded-full w-24 h-24 object-cover"
            />

            <CardTitle className="text-center">Développeur Full Stack</CardTitle>
            <CardDescription className="font-normal text-primary">
              React / Next.js / Node.js
            </CardDescription>
          </CardHeader>

          <CardContent className="text-center pb-2">
            <p>
              Je transforme des idées en applications web modernes, rapides et
              performantes adaptées aux besoins des clients.
            </p>
          </CardContent>

          <CardFooter>
            <div className="flex gap-2">
              <a
                href="#"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                <GitHubLogoIcon className="w-5 h-5" />
              </a>

              <a
                href="#"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="fill-foreground w-5 h-5"
                >
                  <title>X</title>
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/didier-placide-kema-3426b5343/"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                <Linkedin size="20" />
              </a>
            </div>
          </CardFooter>
        </Card>
      </motion.div>

      {/* SERVICES */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-[150px] left-[50px] w-72"
      >
        <Card className="drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader>
            <CardTitle>Services proposés</CardTitle>
            <CardDescription>
              Solutions digitales sur mesure pour entreprises et entrepreneurs.
            </CardDescription>
          </CardHeader>
         <a
      href="https://wa.me/242068100060?text=Bonjour%20👋%20je%20viens%20de%20votre%20portfolio.%20Je%20souhaite%20discuter%20d%27un%20projet%20web."
      target="_blank"
      rel="noreferrer noopener"
    >
          <CardContent>
            <Button className="w-full">Me contacter</Button>
          </CardContent>
          </a>

          <hr className="w-4/5 m-auto mb-4" />

          <CardFooter className="flex">
            <div className="space-y-4">
              {[
                "Sites web modernes",
                "Applications web",
                "API backend",
              ].map((item: string) => (
                <span key={item} className="flex">
                  <Check className="text-green-500" />
                  <h3 className="ml-2">{item}</h3>
                </span>
              ))}
            </div>
          </CardFooter>
        </Card>
      </motion.div>

      {/* COMPÉTENCE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute w-[350px] -right-[10px] bottom-[35px]"
      >
        <Card className="drop-shadow-xl shadow-black/10 dark:shadow-white/10">
          <CardHeader className="space-y-1 flex md:flex-row gap-4">
            <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
              <LightBulbIcon />
            </div>

            <div>
              <CardTitle>Développement moderne</CardTitle>
              <CardDescription className="text-md mt-2">
                Utilisation de technologies modernes comme React, Next.js et
                TypeScript pour créer des applications performantes et scalables.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </motion.div>

    </div>
  );
};