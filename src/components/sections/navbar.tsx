"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/navigation";
import { Logo } from "@/components/brand/logo";

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
  const logoTone = "brand";

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
            <Link
              href="/"
              className="flex items-center gap-3 group shrink-0 transition-transform hover:scale-[1.01]"
              aria-label="PNOW Healthcare home"
            >
              <div className="relative">
                <Logo
                  variant="word"
                  tone={logoTone}
                  className="relative h-8 w-auto sm:h-9"
                />
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
              <Button className="h-auto px-3 py-2 text-sm font-medium shadow-sm" asChild>
                <Link href="/services">More</Link>
              </Button>
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Button
                asChild
                className="h-auto px-5 py-2.5 text-sm font-semibold shadow-lg"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* CTA Buttons - Tablet */}
            <div className="hidden md:flex lg:hidden items-center gap-2 shrink-0">
              <Button className="h-auto px-3 py-2 text-xs font-medium shadow-sm" asChild>
                <Link href="/contact">Sign In</Link>
              </Button>
              <Button
                asChild
                className="h-auto px-4 py-2 text-xs font-semibold shadow-lg"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors shrink-0"
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
                  <Button className="h-auto w-full px-4 py-2.5 text-sm font-medium" asChild>
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Sign In
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="h-auto w-full px-4 py-2.5 text-sm font-semibold text-center shadow-lg"
                  >
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
