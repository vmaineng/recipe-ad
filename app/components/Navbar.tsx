"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  const navlinks = [
    {
      name: "Home",
      href: "#",
    },
    { name: "Recipes", href: "#" },
    { name: "Shop", href: "#" },
    { name: "About", href: "#" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <h1 className="text-xl font-bold text-amber-600">
              Baker&apos;s Delight
            </h1>
          </div>
          <div className="hidden md:flex space-x-8">
            {navlinks.map((nav) => (
              <a
                key={nav.name}
                href={nav.href}
                className="text-gray hover:text-amber-600 px-5 py-3"
              >
                {nav.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-gray-700 hover:text-amber-600 p-2"
            >
              {isMobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {isMobileOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navlinks.map((nav) => (
                <a
                  href={nav.href}
                  key={nav.name}
                  className="text-gray hover:text-amber-600 px-5 py-3"
                >
                  {nav.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
