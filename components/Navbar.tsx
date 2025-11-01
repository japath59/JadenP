"use client";
import { Link } from "react-scroll";

export default function Navbar() {
  const links = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-sm bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Jaden<span className="text-blue-500">.path</span></h1>
      <div className="flex gap-6">
        {links.map(link => (
          <Link
            key={link.to}
            to={link.to}
            smooth={true}
            duration={600}
            offset={-70}
            className="cursor-pointer hover:text-blue-500"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
