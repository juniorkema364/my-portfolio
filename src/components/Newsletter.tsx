import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    const message = `Bonjour 👋 je veux suivre vos projets. Mon email : ${email}`;

    window.open(
      `https://wa.me/242068100060?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">

        {/* TITRE */}
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Restons{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            connectés
          </span>
        </h3>

        {/* DESCRIPTION */}
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Recevez mes projets, mes réalisations et mes nouvelles créations en tant que développeur web Full Stack.
        </p>

        {/* FORM */}
        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre.email@exemple.com"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="email"
          />

          <Button className="bg-green-500 hover:bg-green-600 text-white">
            S’abonner
          </Button>
        </form>

      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};