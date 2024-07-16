import { WpHttp } from "./HttpServices";

export function GetMainMenu() {
    return WpHttp.get('/menu-items?menus=174').then(({ data }) => data);
  }