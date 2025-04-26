import React from "react";
import { Route, Routes } from "react-router-dom";
import { useRoutes } from "./Routes/index.js";
import { SidebarProvider } from "./components/ui/sidebar.jsx";
import DashboardSidebarLayout from "./components/Layout/DashboardSidebarLayout.jsx";
import FollowCursor from "./components/CursorComponents/FollowCursor.jsx";
import FluidCursor from "./components/CursorComponents/FluidCursor.jsx";

function App() {
  const routes = useRoutes();
  
  return (
    <>
      <FollowCursor />
      <FluidCursor />
      {/* <Background /> */}
      <Routes>
        {routes.map(
          ({ path, element: Element, isLayout, isProtected }, index) => {
            if (isLayout)
              return (
                <Route
                  key={path + "_" + index}
                  path={path}
                  element={
                    <DashboardSidebarLayout>
                      <Element />
                    </DashboardSidebarLayout>
                  }
                />
              );

            return (
              <Route
                key={path + "_" + index}
                path={path}
                element={<Element />}
              />
            );
          }
        )}

        <Route
          path="*"
          element={
            <div className="flex justify-center items-center w-full min-h-screen">
              Page Not Found
            </div>
          }
        />
      </Routes>
    </>
  );
}

const DashboardLayout = ({ children }) => {
  return (
    <SidebarProvider className="w-full flex-grow">
      <div className="flex h-screen">
        <div className="w-full max-w-xs bg-red-400">Sidebar</div>
        <div className="w-full flex flex-col">
          <div className="bg-green-500 p-5">Navbar</div>
          <div className=" flex-1">{children}</div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default App;
