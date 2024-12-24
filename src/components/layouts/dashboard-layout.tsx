import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar";
import BreadcrumbComponent from "@/components/Breadcrumb/Breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Moon, Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore.hook";
import { setIsDarkMode } from "@/redux-store/slices/themeSlice";

type DashboardLayoutProps = {
  breadcrumbItems: { label: string; href?: string }[];
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  breadcrumbItems,
}) => {

  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(
    (state) => state.themeStore.isDarkMode
  );

  const toggleDarkMode = () => {
    const updatedDarkMode = !isDarkMode;
    dispatch(setIsDarkMode(updatedDarkMode));
    document.documentElement.classList.toggle("dark", updatedDarkMode);
  };

  useEffect(() => {
    // Sync the theme with the Redux state on component mount
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);
  
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center justify-between w-full px-4">
            {/* Left Section: Sidebar Trigger and Breadcrumb */}
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <BreadcrumbComponent items={breadcrumbItems} />
            </div>

            {/* Right Section: Theme Switcher */}
            <div className="flex items-center">
              <div>
                <button onClick={toggleDarkMode}>
                  {isDarkMode ? (
                    <>
                      <Sun className="cursor-pointer text-gray-500" size={24} />
                    </>
                  ) : (
                    <>
                      <Moon
                        className="cursor-pointer text-gray-500"
                        size={24}
                      />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
