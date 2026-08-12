import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { Button } from "../../ui/Button";
import { cn } from "../../../utils/cn";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState(
    window.location.hash || ""
  );

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash || "");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
    } else {
      setActiveSection(window.location.hash || "");
    }
  }, [location.pathname, location.hash]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSectionClick = (section: string) => {
    closeMenu();

    if (location.pathname !== "/") {
      navigate(`/#${section}`);
      return;
    }

    setActiveSection(`#${section}`);

    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    window.history.replaceState(null, "", `#${section}`);
  };

  const isHomeActive =
    location.pathname === "/" && activeSection === "";

  const isSectionActive = (section: string) =>
    location.pathname === "/" && activeSection === `#${section}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Brand */}
        <Link
          to="/"
          onClick={() => {
            closeMenu();
            setActiveSection("");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="flex shrink-0 items-center gap-2.5"
          aria-label="CareerPilot AI Home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white shadow-sm">
            CP
          </div>

          <span className="text-lg font-semibold tracking-tight text-slate-900">
            CareerPilot{" "}
            <span className="text-indigo-600">AI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Main navigation"
        >
          {/* Home */}
          <NavLink
            to="/"
            onClick={() => {
              setActiveSection("");
              closeMenu();

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className={() =>
              cn(
                "text-sm font-medium transition-colors",
                isHomeActive
                  ? "text-indigo-600"
                  : "text-slate-600 hover:text-slate-900"
              )
            }
          >
            Home
          </NavLink>

          {/* Features */}
          <button
            type="button"
            onClick={() => handleSectionClick("features")}
            className={cn(
              "text-sm font-medium transition-colors",
              isSectionActive("features")
                ? "text-indigo-600"
                : "text-slate-600 hover:text-slate-900"
            )}
          >
            Features
          </button>

          {/* How It Works */}
          <button
            type="button"
            onClick={() => handleSectionClick("how-it-works")}
            className={cn(
              "text-sm font-medium transition-colors",
              isSectionActive("how-it-works")
                ? "text-indigo-600"
                : "text-slate-600 hover:text-slate-900"
            )}
          >
            How It Works
          </button>

          {/* AI Insights */}
          <button
            type="button"
            onClick={() => handleSectionClick("insights")}
            className={cn(
              "text-sm font-medium transition-colors",
              isSectionActive("insights")
                ? "text-indigo-600"
                : "text-slate-600 hover:text-slate-900"
            )}
          >
            AI Insights
          </button>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Login
          </Link>

          <Link to="/register">
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          aria-label={
            isMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg md:hidden",
            "text-slate-700",
            "transition-colors",
            "hover:bg-slate-100",
            "focus:outline-none focus:ring-2 focus:ring-indigo-500"
          )}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "border-t border-slate-200/70 bg-white md:hidden",
          "transition-all duration-200",
          isMenuOpen
            ? "visible max-h-[500px] opacity-100"
            : "invisible max-h-0 overflow-hidden opacity-0"
        )}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6"
          aria-label="Mobile navigation"
        >
          {/* Home */}
          <NavLink
            to="/"
            onClick={() => {
              closeMenu();
              setActiveSection("");

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className={() =>
              cn(
                "rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                isHomeActive
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )
            }
          >
            Home
          </NavLink>

          {/* Features */}
          <button
            type="button"
            onClick={() => handleSectionClick("features")}
            className={cn(
              "rounded-lg px-3 py-3 text-left text-sm font-medium transition-colors",
              isSectionActive("features")
                ? "bg-indigo-50 text-indigo-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            Features
          </button>

          {/* How It Works */}
          <button
            type="button"
            onClick={() => handleSectionClick("how-it-works")}
            className={cn(
              "rounded-lg px-3 py-3 text-left text-sm font-medium transition-colors",
              isSectionActive("how-it-works")
                ? "bg-indigo-50 text-indigo-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            How It Works
          </button>

          {/* AI Insights */}
          <button
            type="button"
            onClick={() => handleSectionClick("insights")}
            className={cn(
              "rounded-lg px-3 py-3 text-left text-sm font-medium transition-colors",
              isSectionActive("insights")
                ? "bg-indigo-50 text-indigo-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            AI Insights
          </button>

          {/* Mobile Actions */}
          <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-4">
            <Link
              to="/login"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              Login
            </Link>

            <Link to="/register" onClick={closeMenu}>
              <Button
                variant="primary"
                size="sm"
                className="w-full"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}