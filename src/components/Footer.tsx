import React from 'react';
import { Phone, MessageCircle, MapPin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/96550501008', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+96550501008', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/revivesalon.kw/', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    'Hair Styling', 'Nail Spa', 'Moroccan Bath', 'Japanese Head Spa', 
    'Facial Treatments', 'Manicure & Pedicure'
  ];

  return (
    <footer className="bg-sage text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-sage font-serif font-bold text-xl">R</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-2xl">R.V.S</h3>
                <p className="text-sage-light text-sm">Revive Saloon & Spa</p>
              </div>
            </div>
            <p className="text-sage-light mb-6 leading-relaxed">
              Where beauty meets tranquility. Experience luxury salon and spa treatments 
              in the heart of Khaitan, Kuwait. Our expert team is dedicated to helping 
              you look and feel your absolute best.
            </p>
            <button
              onClick={handleInstagramClick}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              <Instagram size={18} />
              <span>@revivesalon.kw</span>
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <button onClick={() => scrollToSection('about')} className="block text-sage-light hover:text-white transition-colors">About Us</button>
              <button onClick={() => scrollToSection('services')} className="block text-sage-light hover:text-white transition-colors">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="block text-sage-light hover:text-white transition-colors">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="block text-sage-light hover:text-white transition-colors">Contact</button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-sage-light" />
                <div>
                  <p className="text-white">50501008</p>
                  <p className="text-sage-light text-sm">Call or WhatsApp</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-sage-light" />
                <div>
                  <p className="text-white">Khaitan, Kuwait</p>
                  <p className="text-sage-light text-sm">Premium Location</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-gold rounded-full"></div>
                <div>
                  <p className="text-white">Daily 10 AM - 8 PM</p>
                  <p className="text-sage-light text-sm">Open Every Day</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Tags */}
        <div className="border-t border-sage-light/20 pt-8 mt-12">
          <h4 className="font-serif font-semibold text-lg mb-4">Our Services</h4>
          <div className="flex flex-wrap gap-2">
            {services.map((service, index) => (
              <span key={index} className="bg-sage-dark px-4 py-2 rounded-full text-sm text-sage-light">
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-sage-light/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <p className="text-sage-light text-sm">
                © 2024 Revive Saloon & Spa. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handlePhoneClick}
                className="bg-sage-dark text-white p-3 rounded-full hover:bg-sage-light transition-colors"
              >
                <Phone size={18} />
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={18} />
              </button>
              <button
                onClick={handleInstagramClick}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <Instagram size={18} />
              </button>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-sage-light text-sm flex items-center justify-center space-x-1">
              <span>Made with</span>
              <Heart size={14} className="text-gold fill-current" />
              <span>for beautiful women in Kuwait</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;