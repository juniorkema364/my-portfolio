import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { LogoIcon } from "./Icons";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Compétences",
  },
  {
    href: "#about",
    label: "À propos",
  },
  {
    href: "#projects",
    label: "Projets",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">

      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">

          {/* LOGO */}
          <NavigationMenuItem className="font-bold flex">
            <a
              href="/"
              className="ml-2 font-bold text-xl flex items-center gap-2"
            >
              <LogoIcon />
              Portfolio Dev
            </a>
          </NavigationMenuItem>

          {/* MOBILE */}
          <span className="flex md:hidden items-center gap-2">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="h-5 w-5" />
              </SheetTrigger>

              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Portfolio Développeur
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col justify-center items-center gap-3 mt-6">
                  {routeList.map(({ href, label }) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}

                  <a
                    href="https://github.com/"
                    target="_blank"
                    className={buttonVariants({ variant: "secondary" })}
                  >
                    <GitHubLogoIcon className="mr-2 w-5 h-5" />
                    GitHub
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route) => (
              <a
                key={route.href}
                href={route.href}
                className={buttonVariants({ variant: "ghost" })}
              >
                {route.label}
              </a>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="hidden md:flex gap-2 items-center">
            <a
              href="https://github.com/"
              target="_blank"
              className={buttonVariants({ variant: "secondary" })}
            >
              <GitHubLogoIcon className="mr-2 w-5 h-5" />
              GitHub
            </a>

            <ModeToggle />
          </div>

        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};