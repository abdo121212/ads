import React, { useState } from "react";
import { Menu, X, Code2 } from "lucide-react"; // أيقونات بسيطة وجذابة
import { Link, NavLink } from "react-router-dom";
import logo from "./../assets/Gemini_Generated_Image_jrtlbljrtlbljrtl.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "خدماتنا", href: "/services" },
    { name: "أعمالنا", href: "projects" },
    { name: "اتصل بنا", href: "contact" },
  ];
  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-50 rounded-b-lg ">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between  items-center h-20">
            {/* Logo - جهة اليمين أو اليسار حسب لغة الموقع */}
            <Link to={"/"} className=" cursor-pointer ">
              <img src={logo} alt="logo" width={120} />
            </Link>

            {/* Desktop Links - تظهر في الشاشات الكبيرة فقط */}
            <div
              onClick={() => {
                setIsOpen(false);
              }}
              className="hidden md:block"
            >
              <div className="mr-10 flex items-baseline space-x-8 ">
                {navLinks.map(({ name, href }) => (
                  <NavLink
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    key={name}
                    to={href}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md  font-medium transition-colors
          ${
            isActive
              ? "text-[#ec6434] border-b-2 border-[#ec6434]"
              : "text-gray-600 hover:text-[#ec6434]"
          }`
                    }
                  >
                    {name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button - يظهر في الجوال فقط */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#ec6434] focus:outline-none"
              >
                {isOpen ? (
                  <X size={28} className="cursor-pointer" />
                ) : (
                  <Menu size={28} className="cursor-pointer" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Content - القائمة المنسدلة للجوال */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in-down">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-right">
              {navLinks.map((link) => (
                <a
                  onClick={() => {
                    setIsOpen(!open);
                  }}
                  key={link.name}
                  href={link.href}
                  className="block text-gray-600 hover:bg-blue-50 hover:text-[#ec6434] px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
