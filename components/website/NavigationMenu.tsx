import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import LogoSai from "@/public/logo/sai.png";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function WebsiteHeader() {
  const isMobile = useIsMobile();
  return (
    <div className="shrink ">
      <NavigationMenu viewport={isMobile}>
        <NavigationMenuList className="grow lg:grow bodysmall">
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href="#">Konsep Bisnis</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="">
              Pesantren Kuliner
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/docs" title="PT. UBS">
                  Lorem ipsum dolor sit amet consectetur
                </ListItem>
                <ListItem href="/docs/installation" title="Kajian">
                  Lorem, ipsum dolor.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Gallery">
                  Lorem ipsum dolor sit amet.
                </ListItem>
                <ListItem href="/docs" title="Akidah">
                  Lorem ipsum dolor sit amet consectetur
                </ListItem>
                <ListItem href="/docs/installation" title="Akhlak">
                  Lorem, ipsum dolor.
                </ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title="Kitab Thaharah"
                >
                  Lorem ipsum dolor sit amet.
                </ListItem>
                <ListItem href="/docs" title="Kitab Shalat">
                  Lorem ipsum dolor sit amet consectetur
                </ListItem>
                <ListItem href="/docs/installation" title="Kitab Puasa">
                  Lorem, ipsum dolor.
                </ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title="Doa-Doa Harian"
                >
                  Lorem ipsum dolor sit amet.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href="#">Menu Kami</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Aktivitas Store</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/docs" title="Gallery Event">
                  Lorem ipsum dolor sit amet consectetur
                </ListItem>
                <ListItem href="/docs/installation" title="Gallery Promo & LSM">
                  Lorem, ipsum dolor.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href="#">Pengembangan SDM</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href="#">Outlet Kami</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href="#">Karir</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href="#">Berita</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href="#">Kontak</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
