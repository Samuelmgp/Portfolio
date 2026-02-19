import { useState, useEffect, useId } from "react";
import { Link, useLocation } from "react-router-dom";
import { VscMenu, VscClose } from "react-icons/vsc";
import ThemeToggle from "./ThemeToggle";
import { useBackground } from "../../hooks/useBackground";
import { FiEye, FiEyeOff } from "react-icons/fi";

const links = [
  { to: "/", label: "About Me" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuId = useId();
  const { visible, toggleVisible } = useBackground();

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close on Escape + body scroll lock
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav className="glass sticky top-0 z-50 px-4 sm:px-6">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-text-heading hover:text-primary transition-colors"
        >
          SG
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                aria-current={location.pathname === to ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  ${
                    location.pathname === to
                      ? "text-primary bg-primary/10"
                      : "text-text-body hover:text-text-heading hover:bg-bg-elevated"
                  }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={toggleVisible}
            aria-label={visible ? "Hide background animation" : "Show background animation"}
            className="rounded-lg p-2 text-text-muted hover:text-text-heading hover:bg-bg-elevated transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {visible ? <FiEye size={20} /> : <FiEyeOff size={20} />}
          </button>
          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label="Toggle navigation menu"
            className="rounded-lg p-2 text-text-muted hover:text-text-heading hover:bg-bg-elevated transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
          >
            {open ? <VscClose size={22} /> : <VscMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul
          id={menuId}
          role="list"
          className="md:hidden border-t border-border py-2 animate-slide-down"
        >
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                aria-current={location.pathname === to ? "page" : undefined}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200
                  ${
                    location.pathname === to
                      ? "text-primary bg-primary/10"
                      : "text-text-body hover:text-text-heading hover:bg-bg-elevated"
                  }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
