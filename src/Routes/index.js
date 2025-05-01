// import { clientRoutes } from "./client-routes";
import { freelancerRoutes } from "./freelancer-routes";
import { publicRoutes } from "./public-routes";


export const useRoutes = () => {
  return [...publicRoutes,  
    // ...clientRoutes,
     ...freelancerRoutes];
};
