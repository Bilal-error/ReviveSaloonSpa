import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Fatima Al-Ahmad',
      service: 'Moroccan Bath',
      rating: 5,
      review: 'Absolutely incredible experience! The Moroccan bath was so relaxing and my skin has never felt smoother. The staff was professional and the atmosphere was so calming.',
      image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Sarah M.',
      service: 'Nail Spa',
      rating: 5,
      review: 'The nail art here is exceptional! The technicians are true artists and the attention to detail is remarkable. I always leave feeling pampered and beautiful.',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Mariam K.',
      service: 'Japanese Head Spa',
      rating: 5,
      review: 'The Japanese head spa treatment was pure bliss! It relieved all my stress and tension. The scalp massage was heavenly and my hair feels amazing.',
      image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'text-gold fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="py-20 bg-ivory/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-sage mb-4">
            What Our Clients Say
          </h2>
          <p className="text-sage-dark text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients who have experienced the Revive difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-sage">{testimonial.name}</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="text-sm text-sage-dark">({testimonial.rating}.0)</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sage-dark mb-4 leading-relaxed">"{testimonial.review}"</p>
              
              <div className="bg-sage/10 text-sage px-3 py-1 rounded-full text-sm w-fit">
                {testimonial.service}
              </div>
            </div>
          ))}
        </div>

        {/* 5-Star Rating Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg animate-slide-up">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="flex space-x-1">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-bold text-sage">5.0</span>
          </div>
          <h3 className="font-serif text-xl font-semibold text-sage mb-2">
            5-Star Rated Excellence
          </h3>
          <p className="text-sage-dark">
            Based on over 200+ reviews from satisfied clients across Kuwait
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;