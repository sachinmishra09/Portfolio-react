import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClick = (label) => {
    setActive(label);
    setIsOpen(false);
  };

  return (
    <div className="mb-20">
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "fixed left-0 top-0 z-50 w-full bg-slate-950/30 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 xl:px-0">
          <div className="flex h-16 items-center justify-between">
            {/* Logo / mark */}
            <a
              href="#home"
              onClick={() => handleClick("Home")}
              className="flex shrink-0 items-center gap-2 text-lg font-semibold tracking-tight text-slate-100"
            >
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                {"<"}
              </span>

              Sachin

              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                {"/>"}
              </span>
            </a>

            {/* Desktop links */}
            <ul className="hidden items-center gap-1 text-white lg:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => handleClick(link.label)}
                    className={`relative rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      active === link.label
                        ? "bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
                        : "text-slate-300 hover:text-slate-100"
                    }`}
                  >
                    {link.label}

                    {active === link.label && (
                      <span className="relative -bottom-[1px] left-4 right-4 h-[2px] rounded-full bg-emerald-400" />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Resume link (desktop) */}
            <a
              href="https://drive.google.com/file/d/1jeUZsvk11_rMqELdN5A9C42I0tdr_fFx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden shrink-0 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent lg:block"
            >
              Resume
            </a>

            {/* Mobile/tablet hamburger */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              aria-expanded={isOpen}
              className="rounded-md p-2 text-slate-200 hover:bg-slate-800/60 lg:hidden"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile/tablet slide-in drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-72 max-w-[80%] transform border-slate-800 bg-white-950 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-slate-800 px-6">
          {/* Logo / mark */}
          <a
            href="#home"
            onClick={() => handleClick("Home")}
            className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-100"
          >
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              {"<"}
            </span>

            Sachin

            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              {"/>"}
            </span>
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="rounded-md p-2 text-slate-200 hover:bg-slate-800/60"
          >
            <X size={22} />
          </button>
        </div>

        <ul className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => handleClick(link.label)}
                className={`block rounded-md px-3 py-3 text-base font-medium transition-colors duration-200 ${
                  active === link.label
                    ? "bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
                    : "text-slate-300 hover:bg-slate-800/40 hover:text-slate-100"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume link (mobile/tablet) */}
        <div className="mt-2 px-4">
          <a
            href="https://drive.google.com/file/d/1jeUZsvk11_rMqELdN5A9C42I0tdr_fFx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
          >
            Resume
          </a>
        </div>
      </aside>
    </div>
  );
}