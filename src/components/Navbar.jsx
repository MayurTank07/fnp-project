import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-green-700">
            FNP
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
            <Link to="/" className="hover:text-green-600">HOME</Link>
            <Link to="/about" className="hover:text-green-600">ABOUT</Link>

            {/* CATEGORY (NO DROPDOWN) */}
            <Link
              to="/category/cake"
              className="hover:text-green-600"
            >
              CATEGORY
            </Link>

            {/* Cart */}
            <Link to="/cart" className="flex items-center gap-1 hover:text-green-600">
              <FaShoppingCart />
              CART
            </Link>

            <Link to="/contact" className="hover:text-green-600">
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <Link to="/" className="block px-4 py-3 hover:bg-gray-100">HOME</Link>
          <Link to="/about" className="block px-4 py-3 hover:bg-gray-100">ABOUT</Link>

          {/* CATEGORY (NO DROPDOWN) */}
          <Link
            to="/category/cake"
            className="block px-4 py-3 hover:bg-gray-100"
          >
            CATEGORY
          </Link>

          <Link to="/cart" className="block px-4 py-3 hover:bg-gray-100 flex items-center gap-2">
            <FaShoppingCart /> CART
          </Link>

          <Link to="/contact" className="block px-4 py-3 hover:bg-gray-100">
            CONTACT US
          </Link>
        </div>
      )}
    </nav>
  );
}
