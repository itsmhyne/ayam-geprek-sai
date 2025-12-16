import { Menu } from "@/types/Menu";

export async function getMenu(): Promise<Menu[]> {
  const req = await fetch("http://localhost:3001/menu");

  const res = await req.json();

  return res;
}
