import * as React from "react";
import { GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";

import logo from "@/public/logo/sai.png";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SearchForm } from "./Searchform";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Beranda",
      url: "#",
      items: [],
    },
    {
      title: "Pesantren Kuliner",
      url: "#",
      items: [
        {
          title: "PT. UBS",
          url: "#",
        },
        {
          title: "Kajian",
          url: "#",
          isActive: true,
        },
        {
          title: "Gallery",
          url: "#",
        },
        {
          title: "Aqidah",
          url: "#",
        },
        {
          title: "Akhlak",
          url: "#",
        },
        {
          title: "Kitab Thaharah",
          url: "#",
        },
        {
          title: "Kitab Shalat",
          url: "#",
        },
        {
          title: "Kitab Puasa",
          url: "#",
        },
        {
          title: "Doa-Doa Harian",
          url: "#",
        },
      ],
    },
    {
      title: "Menu Kami",
      url: "#",
      items: [],
    },
    {
      title: "Aktivitas Store",
      url: "#",
      items: [
        {
          title: "Gallery Event",
          url: "#",
        },
        {
          title: "Gallery Promo & LSM",
          url: "#",
        },
      ],
    },
    {
      title: "Pengembangan SDM",
      url: "#",
      items: [],
    },
    {
      title: "Outlet Kami",
      url: "#",
      items: [],
    },
    {
      title: "Karir",
      url: "#",
      items: [],
    },
    {
      title: "Blog",
      url: "#",
      items: [],
    },
    {
      title: "Kontak",
      url: "#",
      items: [],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <Image src={logo} alt={"logo sai"} className="size-8" />
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Ayam Geprek Sa'i</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
