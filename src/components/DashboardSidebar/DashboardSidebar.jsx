import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarRail,
} from "../ui/sidebar";
import { useRoutes } from "@/Routes";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export function DashboardSidebar({ ...props }) {
  const routes = useRoutes();

  return (
    <Sidebar {...props}>
      <SidebarHeader className="h-16 border-b justify-center">
        Logo Go Here
      </SidebarHeader>
      <SidebarContent className="mt-5 px-2">
        {/* We create a SidebarGroup for each parent. */}
        {routes.map(
          ({ path, Icon, title, Pop_title }) =>
            Icon && (
              <SidebarMenu>
                <SidebarMenuButton asChild>
                  <Link title={Pop_title} to={path} className="flex gap-4">
                    <Icon  size={24} />{" "}
                    {(() => {
                      // const pageName = path.split("/").pop().replace("-", " ").split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
                      // return (
                      //   pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
                      // );
                      return title;
                    })()}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenu>
            )
        )}
      </SidebarContent>
      <div className="p-2">
        <Button className="w-full">Logout</Button>
      </div>
      <SidebarRail />
    </Sidebar>
  );
}
