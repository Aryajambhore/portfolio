import { useEffect, useState } from "react";
import { profile } from "../data";
import "../css/Navbar.css";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <header className="site-header">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">AJ</span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <a href={`mailto:${profile.email}`} className="header-cta">
          Say hello
        </a>

        <button
          className="menu-btn"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </header>

      <div className={`mobile-menu ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
        <div className="mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
          <button className="menu-close" aria-label="Close menu" onClick={() => setOpen(false)}>
            ×
          </button>
          <nav aria-label="Mobile">
            {links.map((l, i) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                <span>0{i + 1}</span>
                {l.label}
              </a>
            ))}
          </nav>
          <a className="mobile-mail" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
