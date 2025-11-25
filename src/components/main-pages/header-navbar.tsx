// components/header-section.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Menu, X } from "lucide-react";
import IMAGES from "@/assets/images";
import { ApplicationForm } from "./application-form";

const HeaderSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define navigation links with their routes
  const navLinks = [
    { name: 'home', path: '/' },
    { name: 'services', path: '/services-page' },
    { name: 'Sign up', path: '/signup-section' },
    { name: 'Support', path: '/help-center' },
    { name: 'contact', path: '/contact-page' }
  ];

  // Check if a link is active
  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 border-b border-transparent
        ${scrolled
          ? "bg-[#E3B24A]/90 backdrop-blur-xl shadow-2xl border-white/10 py-2"
          : "bg-[#ecb131] backdrop-blur-sm py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="flex items-center justify-between">

          {/* --- Logo Section --- */}
          <Link to="/" className="flex-shrink-0 group cursor-pointer">
            <div className="relative bg-black p-2 rounded">
              {/* Glow effect behind logo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#4a181a] to-[#FDBA4C] rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>
              <img
                src={IMAGES.MXDRIVERLOGO}
                alt="FastDeliveryCourier"
                className="relative w-8 h-8 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </Link>

          {/* --- Desktop Navigation --- */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm uppercase tracking-wider font-bold transition-colors duration-300 group py-2
                  ${isActiveLink(item.path) 
                    ? "text-white" 
                    : "text-[#000000] hover:text-white"
                  }`}
              >
                {item.name}
                {/* Animated Underline - Show for active and hover */}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#AA1F27] to-[#FDBA4C] transition-all duration-300 shadow-[0_0_10px_rgba(253,186,76,0.5)]
                  ${isActiveLink(item.path) 
                    ? "w-full" 
                    : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* --- CTA Buttons (Desktop) --- */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/login">
              <Button
                variant="ghost"
                className="text-[#000000] hover:text-white hover:bg-white/10 transition-all duration-300 rounded-lg px-6 font-medium shadow"
              >
                Log in
              </Button>
            </Link>
            
            {/* Get Started Button with Application Form Modal */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="bg-[#AA1F27] hover:bg-[#8a1920] text-white font-semibold px-6 py-2 rounded-full shadow-lg shadow-red-900/20 hover:shadow-red-900/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Get Started
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md bg-white p-6">
                <ApplicationForm 
                  title="Get Started with MXDrive"
                  description="Join thousands of successful businesses"
                />
              </DialogContent>
            </Dialog>
          </div>

          {/* --- Mobile Menu Sheet --- */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden relative z-50 p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6 text-white" />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-full sm:max-w-md bg-[#1a1a1a] border-l border-white/10 p-0"
            >
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#AA1F27]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FDBA4C]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

              <div className="flex flex-col h-full justify-center px-6 sm:px-8 relative z-10">
                {/* Close Button */}
                <div className="absolute top-6 right-6">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white hover:bg-white/10"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <nav className="flex flex-col space-y-6 w-full max-w-xs sm:max-w-sm mx-auto">
                  {navLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-2xl sm:text-3xl font-bold transition-all duration-300 flex items-center gap-4 group
                        ${isActiveLink(item.path) 
                          ? "text-white" 
                          : "text-white/80 hover:text-white"
                        }`}
                    >
                      <span className="group-hover:ml-4 transition-all duration-300 flex items-center gap-4 w-full py-2">
                        {/* Small accent dot - show for active links */}
                        <span className={`w-2 h-2 rounded-full bg-[#AA1F27] transition-all duration-300 flex-shrink-0
                          ${isActiveLink(item.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                        `} />
                        <span className="flex-1">
                          {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                        </span>
                      </span>
                    </Link>
                  ))}
                </nav>

                {/* Mobile CTA Buttons */}
                <div className="mt-8 sm:mt-12 flex flex-col gap-4 w-full max-w-xs sm:max-w-sm mx-auto">
                  {/* Get Started Button with Application Form Modal */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full bg-[#AA1F27] hover:bg-[#8a1920] text-white h-12 text-base sm:text-lg rounded-xl shadow-lg shadow-red-900/20 transition-all duration-300"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Get Started Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] w-[95vw] sm:max-w-md bg-white p-6">
                      <ApplicationForm 
                        title="Get Started with MXDrive"
                        description="Join thousands of successful businesses"
                      />
                    </DialogContent>
                  </Dialog>
                  
                  <Link to="/login" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full border-white/20 text-white hover:bg-white/10 h-12 text-base sm:text-lg rounded-xl bg-transparent transition-all duration-300"
                    >
                      Log in
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;