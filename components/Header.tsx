import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NavLink } from '../types';

const navLinks: NavLink[] = [
  { label: 'Accueil', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'À propos', href: '#about' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl font-semibold tracking-tight text-gray-900 flex items-center gap-2">
          Stéphane DAVID
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a href="tel:0640199275" className="flex items-center gap-2 text-xs font-medium bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
            <Phone size={14} />
            06 40 19 92 75
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 p-6 shadow-xl animate-in slide-in-from-top-5">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-lg font-medium text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <hr className="border-gray-100 my-2"/>
            <a href="tel:0640199275" className="flex items-center justify-center gap-2 text-sm font-medium bg-black text-white px-4 py-3 rounded-xl">
              <Phone size={16} />
              Appeler maintenant
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};