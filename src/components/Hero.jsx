import { useState, useEffect } from 'react';

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1920&q=80"
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900 flex items-center justify-center">
      
      {/* Contenedor de Imágenes de Fondo */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Overlay (Capa oscura para contraste) */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Contenido del Hero */}
      <div className="relative z-20 text-left px-4 max-w-4xl mx-auto space-y-6">
        <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
          Welcome to 
        </h3>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-md">
          Sena  <span className="text-emerald-400">Places</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow">
        Discover the most important places in our training center
        </p>
        <div className="pt-4 ml-15">
          <button className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1">
            EXPLORE PLACES
          </button>
        </div>
      </div>

    </section>
  );
}