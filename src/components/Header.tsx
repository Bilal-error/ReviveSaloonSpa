import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/96550501008', '_blank');
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
  src="https://i.ibb.co/SXnJ0ZwN/b7bb999c4e6f10a84d6ed93657d73642-tplv-tiktokx-cropcenter-1080-1080.jpg"
  alt="Revive Saloon & Spa Logo"
  className="w-20 h-20 rounded-full object-cover shadow-lg"
/>
            <div>
              <h1 className="font-serif font-bold text-xl text-sage">R.V.S</h1>
              <p className="text-xs text-sage-dark -mt-1">Revive Saloon & Spa</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-sage hover:text-sage-dark transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="text-sage hover:text-sage-dark transition-colors">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="text-sage hover:text-sage-dark transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('contact')} className="text-sage hover:text-sage-dark transition-colors">Contact</button>
          </nav>

          {/* Desktop Book Now Button */}
          <button
            onClick={handleWhatsAppClick}
            className="hidden md:flex items-center space-x-2 bg-sage text-white px-6 py-2 rounded-full hover:bg-sage-dark transition-colors"
          >
            <MessageCircle size={18} />
            <span>Book Now</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-sage"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <nav className="flex flex-col p-4 space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-sage hover:text-sage-dark transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('services')} className="text-sage hover:text-sage-dark transition-colors text-left">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="text-sage hover:text-sage-dark transition-colors text-left">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="text-sage hover:text-sage-dark transition-colors text-left">Contact</button>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-2 bg-sage text-white px-4 py-2 rounded-full hover:bg-sage-dark transition-colors w-fit"
              >
                <MessageCircle size={18} />
                <span>Book Now</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;