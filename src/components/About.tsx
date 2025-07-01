import React from 'react';
import { Heart, Shield, Users, Sparkles } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Precision',
      description: 'Every treatment is crafted with meticulous attention to detail and personalized care.'
    },
    {
      icon: Shield,
      title: 'Hygiene',
      description: 'We maintain the highest standards of cleanliness and safety for your well-being.'
    },
    {
      icon: Users,
      title: 'Warmth',
      description: 'Our welcoming atmosphere ensures you feel comfortable and pampered throughout your visit.'
    },
    {
      icon: Sparkles,
      title: 'Excellence',
      description: 'We are committed to delivering exceptional results that exceed your expectations.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-sage mb-6">
              Where Beauty Meets Tranquility
            </h2>
            <p className="text-sage-dark text-lg mb-8 leading-relaxed">
              At Revive Saloon & Spa, we believe that true beauty comes from feeling confident and refreshed. 
              Our expert team combines traditional techniques with modern luxury to create an oasis of calm 
              in the heart of Khaitan. Every treatment is designed to not just enhance your appearance, 
              but to revitalize your spirit.
            </p>
            
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-gold/20 text-gold px-4 py-2 rounded-full">
                <span className="font-medium">Serving Kuwait since 2019</span>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-ivory/50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center">
                      <value.icon className="text-sage" size={20} />
                    </div>
                    <h3 className="font-serif font-semibold text-sage">{value.title}</h3>
                  </div>
                  <p className="text-sage-dark text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Luxury spa interior"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-sage/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;