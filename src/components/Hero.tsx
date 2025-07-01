import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Sparkles } from 'lucide-react';

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
        
        {/* Enhanced Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50"></div>
        
        {/* Additional overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        
        {/* Animated Floating Elements */}
        <div className="absolute inset-0">
          {/* Floating Sparkles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-pulse opacity-70"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-rose-300 rounded-full animate-ping opacity-60"></div>
          <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-amber-200 rounded-full animate-bounce opacity-50"></div>
          <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse opacity-60"></div>
          
          {/* Larger Floating Orbs */}
          <div className="absolute top-1/5 right-1/5 w-20 h-20 bg-gradient-to-br from-rose-200/30 to-amber-200/30 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-1/4 left-1/6 w-32 h-32 bg-gradient-to-br from-emerald-200/25 to-sage/25 rounded-full blur-2xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-gold/20 to-amber-300/20 rounded-full blur-lg animate-float-slow"></div>
        </div>
        
        {/* Textured Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/5 to-sage/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated Title with Enhanced Typography */}
          <div className="animate-fade-in">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
              Experience 
              <span className="block bg-gradient-to-r from-gold via-amber-400 to-yellow-300 bg-clip-text text-transparent animate-gradient mt-2 mb-2 drop-shadow-none">
                Luxury Beauty.
              </span>
              <span className="text-rose-200 drop-shadow-lg">Feel Revived.</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-white font-semibold mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up font-sans tracking-wide drop-shadow-lg">
            Expert salon & spa treatments in the heart of Khaitan, where beauty meets tranquility and every moment is crafted for your transformation
          </p>

          {/* Enhanced Contact Info Cards with Warm Colors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto animate-fade-in-delayed">
            <div className="bg-gradient-to-br from-white/95 to-rose-50/90 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-rose-100/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center space-x-2 text-sage">
                <MapPin size={20} className="text-rose-500 flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base font-sans">Khaitan, Kuwait</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/95 to-amber-50/90 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-amber-100/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center space-x-2 text-sage">
                <Phone size={20} className="text-amber-500 flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base font-sans">50501008</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/95 to-emerald-50/90 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-emerald-100/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center space-x-2 text-sage">
                <Clock size={20} className="text-emerald-500 flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base font-sans">Daily 10 AM – 8 PM</span>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons with Vibrant Colors */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in mb-12">
            <button
              onClick={handleWhatsAppClick}
              className="group flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden font-sans font-medium"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <MessageCircle size={24} className="relative z-10 flex-shrink-0" />
              <span className="text-lg relative z-10">Book Appointment</span>
            </button>
            <button
              onClick={handlePhoneClick}
              className="group flex items-center space-x-3 bg-gradient-to-r from-white to-rose-50 text-sage px-8 py-4 rounded-full hover:from-rose-100 hover:to-amber-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-gradient-to-r from-rose-200 to-amber-200 relative overflow-hidden font-sans font-medium"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone size={24} className="relative z-10 text-rose-500 flex-shrink-0" />
              <span className="text-lg relative z-10">Call Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;