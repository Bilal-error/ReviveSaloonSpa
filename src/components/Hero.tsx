import React from 'react';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/96550501008', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+96550501008', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-ivory to-sage-light/10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Luxury spa treatment"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory/80 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-sage mb-6">
            Experience Luxury.<br />
            <span className="text-gold">Feel Revived.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-sage-dark mb-8 max-w-2xl mx-auto leading-relaxed">
            Expert salon & spa treatments in the heart of Khaitan, where beauty meets tranquility
          </p>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center justify-center space-x-2 text-sage">
                <MapPin size={20} />
                <span className="font-medium">Khaitan, Kuwait</span>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center justify-center space-x-2 text-sage">
                <Phone size={20} />
                <span className="font-medium">50501008</span>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center justify-center space-x-2 text-sage">
                <Clock size={20} />
                <span className="font-medium">Daily 10 AM – 8 PM</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center space-x-3 bg-sage text-white px-8 py-4 rounded-full hover:bg-sage-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MessageCircle size={24} />
              <span className="font-medium text-lg">Book Appointment</span>
            </button>
            <button
              onClick={handlePhoneClick}
              className="flex items-center space-x-3 bg-white text-sage px-8 py-4 rounded-full hover:bg-sage hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-sage"
            >
              <Phone size={24} />
              <span className="font-medium text-lg">Call Now</span>
            </button>
          </div>

          {/* Tagline */}
          <p className="text-sage-dark text-sm mt-8 font-serif italic">
            "Where beauty meets tranquility"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;