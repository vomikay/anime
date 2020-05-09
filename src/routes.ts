export enum ROUTE_PATHS {
  index = "/",
  anime = "/anime/[id]",
  character = "/character/[id]",
}

type Param = { [key: string]: string | number };

export const getRoutePathWithParam = (routePath: ROUTE_PATHS, param: Param): string => {
  let path = routePath as string;
  for (const key in param) {
    if (param.hasOwnProperty(key)) {
      path = path.replace(`[${key}]`, `${param[key]}`);
    }
  }
  return path;
};
