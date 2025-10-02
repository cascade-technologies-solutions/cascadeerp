
import { NavLink, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton, 
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/Button";
import { Home, Info, Settings, Users, Mail } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ScrollArea } from "@/components/ui/scroll-area";
import logo from "@/assets/logo.png";

const menuItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Services", href: "/services", icon: Settings },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function AppSidebar() {
  const isMobile = useIsMobile();

  const closeSidebarMobile = () => {
    if (isMobile) {
      const sidebarTrigger = document.querySelector("[data-sidebar='trigger']");
      if (sidebarTrigger instanceof HTMLElement) {
        sidebarTrigger.click();
      }
    }
  };

  return (
    <Sidebar variant="inset" collapsible="offcanvas" className="border-r bg-white">
      <SidebarHeader className="flex flex-col space-y-2 items-center justify-center p-4 border-b bg-white">
        <Link to="/" className="flex flex-col items-center" onClick={closeSidebarMobile}>
          <img 
            src={logo} 
            alt="CascadeTech Logo" 
            className="h-12 mb-2" 
          />
          <span className="text-sm font-semibold text-slate-900">
            <span className="text-blue-600">CascadeTech</span> Solutions
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <ScrollArea className="h-[calc(100vh-180px)]">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild tooltip={item.name}>
                      <NavLink 
                        to={item.href}
                        className={({ isActive }) => cn(
                          isActive ? "bg-blue-50 text-blue-600" : "text-slate-700 hover:bg-slate-50"
                        )}
                        onClick={closeSidebarMobile}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t bg-white">
        <Button asChild className="w-full">
          <Link to="/contact" onClick={closeSidebarMobile}>
            Get Started
          </Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
