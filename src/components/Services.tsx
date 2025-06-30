import React from 'react';
import { Scissors, Sparkles, Waves, Brain, MessageCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: 'Hair Styling',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Transform your look with our expert hair styling services, from classic cuts to modern color techniques.',
      features: ['Precision cuts', 'Color treatments', 'Hair styling', 'Treatments & care']
    },
    {
      icon: Sparkles,
      title: 'Nail Spa',
      image: 'https://images.pexels.com/photos/3997348/pexels-photo-3997348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Indulge in luxurious nail care with our comprehensive manicure and pedicure services.',
      features: ['Gel manicures', 'Spa pedicures', 'Nail art', 'Cuticle care']
    },
    {
      icon: Waves,
      title: 'Moroccan Bath',
      image: 'https://images.pexels.com/photos/6663576/pexels-photo-6663576.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Experience the traditional cleansing ritual that leaves your skin silky smooth and rejuvenated.',
      features: ['Deep exfoliation', 'Skin purification', 'Relaxation therapy', 'Natural ingredients']
    },
    {
      icon: Brain,
      title: 'Japanese Head Spa',
      image: 'https://images.pexels.com/photos/3997990/pexels-photo-3997990.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Unwind with our signature scalp treatments designed to promote relaxation and hair health.',
      features: ['Scalp massage', 'Deep conditioning', 'Stress relief', 'Hair nourishment']
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/96550501008', '_blank');
  };

  return (
    <section id="services" className="py-20 bg-ivory/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-sage mb-4">
            Our Signature Services
          </h2>
          <p className="text-sage-dark text-lg max-w-2xl mx-auto">
            Discover our range of premium beauty and wellness treatments, each designed to enhance your natural radiance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                  <service.icon className="text-sage" size={24} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-sage mb-3">{service.title}</h3>
                <p className="text-sage-dark mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="bg-sage/10 text-sage px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-sage text-white py-3 rounded-lg hover:bg-sage-dark transition-colors duration-300 font-medium"
                >
                  Book This Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg animate-slide-up">
          <h3 className="font-serif text-2xl font-semibold text-sage mb-4">
            Ready for Your Transformation?
          </h3>
          <p className="text-sage-dark mb-6">
            Book a consultation and let our experts create a personalized treatment plan just for you
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center space-x-2 bg-gold text-white px-8 py-3 rounded-full hover:bg-gold-dark transition-colors duration-300 font-medium"
          >
            <MessageCircle size={20} />
            <span>Schedule Consultation</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;