import { configs } from "@/config/config";
import { useRoutes } from "react-router";

const AppRoutes = () => {
  const routers = useRoutes(configs);
  return <>{routers}</>;
};

export default AppRoutes;
