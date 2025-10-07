import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Company", href: "#company" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <nav className="fixed w-full bg-gray-50 top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 1g:px-20 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center text-xl sm:text-2x1 font-bold text-gray-900">
          <div className="w-8 h-8 sm:h-10 sm:w-11 flex items-center justify-center rounded-full border-3 sm:border-4 border-pink-600 text-pink-600 mr-2">
            Eye
          </div>
          <span>
            On <span className="text-yellow-500">Pulse</span>
          </span>
        </div>
        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 1g:gap-8 text-gray-700 font-medium">
          {navItems.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="hover:text-green-500 cursor-pointer transition-colors"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
        {/* button */}
        <div className="hidden md:block">
          <button
            onClick={toggleMenu}
            className="px-4 py-2 sm:px-5 sm:py-2 rounded-lg sm:rounded-x1 bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors"
          >
            Get Started
          </button>
        </div>
        {/* Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-1 rounded-md focus: outline-none focus:ring-2 focus:ring-pink-500"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700"></X>
            ) : (
              <Menu className="w-6 h-6 text-gray-700"></Menu>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className=" px-4 py-3 space-y-3">
            {navItems.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-1g hover: text-green-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </a>
            ))}
            <div className="pt-2">
              <button className="w-full py-2 rounded-1g bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
