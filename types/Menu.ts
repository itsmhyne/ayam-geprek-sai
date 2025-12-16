export type Menu = {
  id: string;
  name: string;
  sub: Array<SubMenu>;
};

type SubMenu = {
  id: string;
  name: string;
};
