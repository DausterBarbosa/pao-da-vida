import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';

export interface CarouselSlide {
  id: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  categoryId?: string;
  buttonText?: string;
}

const DEFAULT_SLIDES: CarouselSlide[] = [
  {
    id: 'executivos',
    badge: '🌟 Especialidade da Casa',
    title: 'Pratos Executivos de Respeito',
    description: 'Filés suculentos, Bacalhau artesanal & Galinha Caipira selecionados',
    image: '/images/carousel/executivos.jpg',
    categoryId: 'executivos',
    buttonText: 'Ver Pratos Executivos'
  },
  {
    id: 'pizzas',
    badge: '🍕 Quarta da Pizza',
    title: 'Pizzas Artesanais & Calzones',
    description: 'Massa leve com borda recheada generosa assada no ponto certo',
    image: '/images/carousel/pizzas.jpg',
    categoryId: 'pizzas',
    buttonText: 'Ver Pizzas & Calzones'
  },
  {
    id: 'sanduiches',
    badge: '🍔 Linha Gourmet',
    title: 'Burguers & Sanduíches Árabes',
    description: 'Pão Árabe especial, Filé Mignon Cheddar & Burguer Sertanejo',
    image: '/images/carousel/burgers.jpg',
    categoryId: 'sanduiches',
    buttonText: 'Ver Sanduíches'
  },
  {
    id: 'cafes',
    badge: '☕ Cafeteria & Bistro',
    title: 'Cafés, Tapiocas & Cuscuz',
    description: 'Delícias feitas na hora com ingredientes regionais e selecionados',
    image: '/images/carousel/cafes.jpg',
    categoryId: 'cafes',
    buttonText: 'Ver Cafeteria'
  }
];

interface ImageCarouselProps {
  slides?: CarouselSlide[];
  onSelectCategory?: (categoryId: string) => void;
  autoPlayInterval?: number;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  slides = DEFAULT_SLIDES,
  onSelectCategory,
  autoPlayInterval = 4500
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Autoplay
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, autoPlayInterval, slides.length]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleSlideClick = (slide: CarouselSlide) => {
    if (slide.categoryId && onSelectCategory) {
      onSelectCategory(slide.categoryId);
    }
  };

  return (
    <div className="w-full relative">
      <div 
        className="relative w-full h-52 sm:h-64 md:h-80 overflow-hidden shadow-md group bg-paoWine-900 border-b border-paoGold-500/30"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides Track */}
        <div 
          className="w-full h-full flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div 
              key={slide.id}
              className="w-full h-full flex-shrink-0 relative cursor-pointer"
              onClick={() => handleSlideClick(slide)}
            >
              {/* Background Image with Gradient Overlay */}
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-paoWine-950 via-paoWine-900/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-paoWine-950/80 via-paoWine-900/40 to-transparent" />

              {/* Text Content Overlay */}
              <div className="absolute inset-0 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex flex-col justify-end text-white pointer-events-none">
                <div className="pointer-events-auto max-w-lg">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-paoGold-500/90 text-paoWine-950 border border-paoGold-300 w-fit mb-2 shadow-md backdrop-blur-sm">
                    <Sparkles className="w-3 h-3 mr-1" />
                    {slide.badge}
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white drop-shadow-md line-clamp-1">
                    {slide.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-paoSand-200 line-clamp-2 mt-1 drop-shadow-sm">
                    {slide.description}
                  </p>

                  {slide.buttonText && (
                    <div className="pt-3">
                      <span className="inline-flex items-center text-xs font-bold text-paoGold-300 group-hover:text-paoGold-200 transition-colors">
                        {slide.buttonText}
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 active:scale-95 shadow-lg z-20"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 active:scale-95 shadow-lg z-20"
          aria-label="Próximo"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Pagination Indicators (Dots) */}
        <div className="absolute bottom-3 right-4 sm:right-8 flex items-center space-x-1.5 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-6 bg-paoGold-400 shadow-gold' 
                  : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
