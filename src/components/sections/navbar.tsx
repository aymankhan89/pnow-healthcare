"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks } from "@/data/navigation";

export default function SiteNavbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 100; // Distance in pixels to complete the transition
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate dynamic values based on scroll progress
  const maxWidth =
    scrollProgress === 1 ? "100%" : `${72 + 28 * scrollProgress}rem`;
  const borderRadius = `${9999 * (1 - scrollProgress)}px`;
  const paddingY = `${1 - 0.25 * scrollProgress}rem`;
  const topPadding = `${1 - scrollProgress}rem`;
  const shadowIntensity = 0.1 + 0.15 * scrollProgress;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out"
        style={{
          paddingTop: topPadding,
        }}
      >
        <div
          className="transition-all duration-300 ease-out"
          style={{
            paddingLeft: `${1 - scrollProgress}rem`,
            paddingRight: `${1 - scrollProgress}rem`,
          }}
        >
          <nav
            className="relative flex items-center justify-between gap-4 bg-white/95 backdrop-blur-lg border border-gray-200 transition-all duration-300 ease-out mx-auto"
            style={{
              maxWidth: maxWidth,
              borderRadius: borderRadius,
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              paddingTop: paddingY,
              paddingBottom: paddingY,
              boxShadow: `0 10px 25px -5px rgba(0, 0, 0, ${shadowIntensity}), 0 8px 10px -6px rgba(0, 0, 0, ${
                shadowIntensity * 0.6
              })`,
              borderColor:
                scrollProgress < 0.5
                  ? "rgba(191, 219, 254, 0.5)"
                  : "rgba(229, 231, 235, 1)",
            }}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M12 6v12M6 12h12"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="12" r="3" fill="white" opacity="0.3" />
                  </svg>
                </div>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
                  ProficientNow
                </span>
                <span className="text-[10px] text-gray-500 font-medium -mt-0.5 tracking-wide">
                  HEALTHCARE
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {navLinks.map((link) => (
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(link.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 whitespace-nowrap"
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    {openMenu === link.label && (
                      <div className="absolute top-full left-0 min-w-[15rem] bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors whitespace-normal"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* Tablet Navigation (md to lg) */}
            <div className="hidden md:flex lg:hidden items-center gap-1 flex-1 justify-center">
              {navLinks.slice(0, 3).map((link) => (
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(link.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200"
                    >
                      {link.label}
                      <ChevronDown className="w-3 h-3" />
                    </Link>
                    {openMenu === link.label && (
                      <div className="absolute top-full left-0 w-44 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                More
              </button>
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>

            {/* CTA Buttons - Tablet */}
            <div className="hidden md:flex lg:hidden items-center gap-2 shrink-0">
              <button className="px-3 py-2 text-xs font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200">
                Sign In
              </button>
              <Link
                href="/contact"
                className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                      onClick={(e) => {
                        if (link.children) {
                          e.preventDefault();
                          setOpenMenu(
                            openMenu === link.label ? null : link.label
                          );
                        } else {
                          setMobileMenuOpen(false);
                        }
                      }}
                    >
                      {link.label}
                      {link.children && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openMenu === link.label ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>
                    {link.children && openMenu === link.label && (
                      <div className="ml-4 mt-2 flex flex-col gap-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-200">
                  <button className="w-full px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all">
                    Sign In
                  </button>
                  <Link
                    href="/contact"
                    className="w-full px-4 py-2.5 text-sm font-semibold text-white text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:shadow-lg transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
