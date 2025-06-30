import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Luxury spa treatment room'
    },
    {
      src: 'https://images.pexels.com/photos/3997348/pexels-photo-3997348.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Professional nail art service'
    },
    {
      src: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Elegant salon interior'
    },
    {
      src: 'https://images.pexels.com/photos/6663576/pexels-photo-6663576.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Moroccan bath experience'
    },
    {
      src: 'https://images.pexels.com/photos/3997990/pexels-photo-3997990.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Relaxing head spa treatment'
    },
    {
      src: 'https://images.pexels.com/photos/3997965/pexels-photo-3997965.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Facial treatment session'
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/revivesalon.kw/', '_blank');
  };

  return (
    <section id="gallery" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-sage mb-4">
            Our Beautiful Space
          </h2>
          <p className="text-sage-dark text-lg max-w-2xl mx-auto mb-8">
            Step inside our luxurious salon and spa where every detail is designed for your comfort and relaxation
          </p>
          
          {/* Social Media Follow */}
          <button
            onClick={handleInstagramClick}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            <Instagram size={18} />
            <span className="break-all">Follow @revivesalon.kw</span>
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl animate-fade-in"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                  <span className="text-sage font-medium text-sm">View</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-4xl max-h-full w-full">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg mx-auto block"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <X size={20} />
              </button>
              
              {/* Navigation Buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm">
                {selectedImage + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;