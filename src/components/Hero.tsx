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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Multiple Layers */}
      <div className="absolute inset-0 z-0">
        {/* Primary Background Image */}
        <img
          src="https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Luxury spa treatment"
          className="w-full h-full object-cover"
        />
        
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="animate-fade-in mb-8">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#8B7355] mb-6 leading-tight tracking-tight drop-shadow-2xl">
              Feel Revived.
            </h1>
            
            <p className="text-xl md:text-2xl text-[#8B7355] font-medium mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up font-sans tracking-wide drop-shadow-lg">
              Luxury salon & spa in the heart of Khaitan.
            </p>
          </div>

          {/* Enhanced Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto animate-fade-in-delayed">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center space-x-2 text-sage">
                <MapPin size={20} className="text-[#8B7355] flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base font-sans">Khaitan, Kuwait</span>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center space-x-2 text-sage">
                <Phone size={20} className="text-[#8B7355] flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base font-sans">50501008</span>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center space-x-2 text-sage">
                <Clock size={20} className="text-[#8B7355] flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base font-sans">Daily 10 AM – 8 PM</span>
              </div>
            </div>
          </div>

          {/* Book Now Button */}
          <div className="animate-scale-in">
            <button
              onClick={handleWhatsAppClick}
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-4 rounded-full hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-sans font-semibold text-lg"
            >
              <MessageCircle size={24} className="flex-shrink-0" />
              <span>Book Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;