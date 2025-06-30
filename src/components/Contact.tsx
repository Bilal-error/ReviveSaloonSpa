import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/96550501008', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+96550501008', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/revivesalon.kw/', '_blank');
  };

  const contactCards = [
    {
      icon: Phone,
      title: 'Call Us',
      subtitle: '50501008',
      description: 'Speak directly with our team',
      action: handlePhoneClick,
      buttonText: 'Call Now',
      color: 'bg-sage'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      subtitle: '+965 50501008',
      description: 'Quick booking and inquiries',
      action: handleWhatsAppClick,
      buttonText: 'Message Us',
      color: 'bg-green-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      subtitle: 'Khaitan, Kuwait',
      description: 'Visit our luxury salon',
      action: () => {},
      buttonText: 'Get Directions',
      color: 'bg-gold'
    },
    {
      icon: Clock,
      title: 'Hours',
      subtitle: 'Daily 10 AM - 8 PM',
      description: 'Open every day of the week',
      action: () => {},
      buttonText: 'View Schedule',
      color: 'bg-sage-dark'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-sage mb-4">
            Book Your Experience
          </h2>
          <p className="text-sage-dark text-lg max-w-2xl mx-auto">
            Ready to indulge in luxury? Contact us today and let us create the perfect beauty experience for you
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactCards.map((card, index) => (
            <div key={index} className="bg-ivory/30 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <div className={`w-16 h-16 ${card.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <card.icon className="text-white" size={24} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-sage mb-2">{card.title}</h3>
              <p className="font-medium text-sage-dark mb-1">{card.subtitle}</p>
              <p className="text-sm text-sage-dark mb-4">{card.description}</p>
              <button
                onClick={card.action}
                className="w-full bg-white text-sage py-2 rounded-lg hover:bg-sage hover:text-white transition-colors duration-300 border border-sage"
              >
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Instagram Section */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-12 text-center animate-slide-up">
          <div className="max-w-md mx-auto">
            <Instagram className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="font-serif text-xl font-semibold text-sage mb-2">Follow Our Journey</h3>
            <p className="text-sage-dark mb-4">
              Get inspired by our latest work, beauty tips, and behind-the-scenes moments
            </p>
            <button
              onClick={handleInstagramClick}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              @revivesalon.kw
            </button>
          </div>
        </div>

        {/* Quick Booking CTA */}
        <div className="bg-sage rounded-2xl p-8 text-center text-white animate-scale-in mb-12">
          <h3 className="font-serif text-2xl font-semibold mb-4">Ready to Book?</h3>
          <p className="text-sage-light mb-6 max-w-md mx-auto">
            Choose your preferred way to get in touch and we'll help you schedule your perfect treatment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center space-x-2 bg-white text-sage px-8 py-3 rounded-full hover:bg-sage-light hover:text-white transition-colors duration-300"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Booking</span>
            </button>
            <button
              onClick={handlePhoneClick}
              className="flex items-center justify-center space-x-2 bg-gold text-white px-8 py-3 rounded-full hover:bg-gold-dark transition-colors duration-300"
            >
              <Phone size={20} />
              <span>Call Direct</span>
            </button>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="bg-sage-light/20 rounded-2xl p-8 text-center animate-fade-in">
          <div className="mb-6">
            <MapPin className="w-16 h-16 text-sage mx-auto mb-4" />
            <h3 className="font-serif text-xl font-semibold text-sage mb-2">Visit Our Salon</h3>
            <p className="text-sage-dark mb-6">
              Located in the heart of Khaitan, Kuwait<br />
              Easy parking and accessible location
            </p>
          </div>
          
          {/* Google Maps Embed */}
          <div className="rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225018.20465847955!2d47.8152847!3d29.2922229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9b211b2a1995%3A0x16b6f97c1829deb7!2z2LXYp9mE2YjZhiDYsdmK2YHYp9mK2YEg2YTZhNiz2YrYr9in2KogcmV2aXZlIHNhbG9u!5e1!3m2!1sen!2skw!4v1751298379992!5m2!1sen!2skw" 
              width="100%" 
              height="450" 
              style={{border: 0}} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;