import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=developer",
    name: "KEMA P. Didier",
    position: "Développeur Web Full Stack",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/didier-placide-kema-3426b5343/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size={20} />;
      case "Facebook":
        return <Facebook size={20} />;
      case "Instagram":
        return <Instagram size={20} />;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32">

      {/* TITLE */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        À propos de{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          moi
        </span>
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
        className="mt-4 mb-10 text-xl text-muted-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Développeur web passionné spécialisé dans la création d’applications
        modernes, performantes et adaptées aux besoins des clients.
      </motion.p>

      {/* CARD */}
      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 place-items-center">

        {teamList.map(({ imageUrl, name, position, socialNetworks }) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <Card className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center w-[320px]">

              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={name}
                  className="absolute -top-12 rounded-full w-24 h-24 object-cover"
                />

                <CardTitle className="text-center">{name}</CardTitle>

                <CardDescription className="text-primary text-center">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>
                  Je transforme des idées en produits digitaux modernes avec React,
                  Next.js et Node.js.
                </p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    })}
                  >
                    <span className="sr-only">{name}</span>
                    {socialIcon(name)}
                  </a>
                ))}
              </CardFooter>
            </Card>
          </motion.div>
        ))}

      </div>
    </section>
  );
};