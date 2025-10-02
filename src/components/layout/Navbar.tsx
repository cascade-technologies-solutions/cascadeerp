
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import logo from "@/assets/logo.png";
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  // { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 backdrop-blur-md border-b",
        isScrolled
          ? "py-2 sm:py-3 bg-white/80 shadow-sm"
          : "py-4 sm:py-5 md:py-6 bg-white/60"
      )}
    >
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-2 z-50"
          >
            <img 
              src={logo} 
              alt="CascadeTech Logo" 
              className={cn(
                "transition-all duration-300",
                isScrolled ? "h-8" : "h-10"
              )} 
            />
            <span className={cn(
              "font-semibold transition-all duration-300",
              isScrolled ? "text-base" : "text-lg"
            )}>
              <span className="text-blue-600">CascadeTech</span> <span className="inline">Solutions</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-3">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "px-2 py-2 text-sm font-medium rounded-lg transition-colors",
                  "sm:px-3 md:px-3 lg:px-4",
                  "text-xs sm:text-sm md:text-sm",
                  isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-700 hover:text-blue-600 hover:bg-blue-50/50"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="pl-1 sm:pl-2 lg:pl-4">
            <Button asChild size="sm" className="text-xs sm:text-sm">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button - Only show on mobile */}
        <SidebarTrigger className="md:hidden" />

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col animate-fade-in">
            <Container className="flex-1 flex items-center justify-center">
              <div className="flex flex-col space-y-6 sm:space-y-8 items-center">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "text-lg sm:text-xl font-medium transition-colors",
                        isActive
                          ? "text-blue-600"
                          : "text-slate-700 hover:text-blue-600"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                <Button
                  asChild
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </Container>
          </div>
        )}
      </Container>
    </header>
  );
}
