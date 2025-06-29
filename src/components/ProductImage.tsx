import React from 'react';
import { Smartphone, Headphones, Play, Target } from 'lucide-react';

const ProductImage: React.FC = () => {
  return (
    <div className="relative w-full max-w-sm sm:max-w-lg mx-auto px-4 sm:px-0">
      {/* Main product showcase */}
      <div className="relative bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl border border-yellow-200">
        {/* E-books stack */}
        <div className="relative z-10 flex justify-center items-center">
          <div className="relative">
            {/* Back e-book */}
            <div className="absolute -right-2 sm:-right-4 -top-1 sm:-top-2 w-28 h-36 sm:w-40 sm:h-52 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg shadow-lg transform rotate-12 opacity-80">
              <div className="p-2 sm:p-4 text-white">
                <div className="text-xs font-semibold">E-book Bônus</div>
                <div className="text-xs mt-1 sm:mt-2 opacity-90">Destrave sua Mente</div>
              </div>
            </div>
            
            {/* Middle e-book */}
            <div className="absolute -right-1 sm:-right-2 -top-0.5 sm:-top-1 w-28 h-36 sm:w-40 sm:h-52 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg transform rotate-6 opacity-90">
              <div className="p-2 sm:p-4 text-white">
                <div className="text-xs font-semibold">Guias Extras</div>
                <div className="text-xs mt-1 sm:mt-2 opacity-90">Bônus Inclusos</div>
              </div>
            </div>
            
            {/* Front e-book with custom image */}
            <div className="relative w-28 h-36 sm:w-40 sm:h-52 rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://vidagold.fun/wp-content/uploads/2025/06/ChatGPT-Image-29-de-jun.-de-2025-10_52_42.png" 
                alt="MENTE MILIONÁRIA EXPRESS"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Floating elements - adjusted for mobile */}
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white rounded-full p-1.5 sm:p-2 shadow-lg animate-pulse">
          <Smartphone className="w-3 sm:w-5 h-3 sm:h-5 text-blue-500" />
        </div>
        
        <div className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-white rounded-full p-1.5 sm:p-2 shadow-lg animate-pulse delay-150">
          <Headphones className="w-3 sm:w-5 h-3 sm:h-5 text-purple-500" />
        </div>
        
        <div className="absolute bottom-2 sm:bottom-4 left-4 sm:left-8 bg-white rounded-full p-1.5 sm:p-2 shadow-lg animate-pulse delay-300">
          <Play className="w-3 sm:w-5 h-3 sm:h-5 text-green-500" />
        </div>
        
        <div className="absolute bottom-4 sm:bottom-8 right-2 sm:right-4 bg-white rounded-full p-1.5 sm:p-2 shadow-lg animate-pulse delay-500">
          <Target className="w-3 sm:w-5 h-3 sm:h-5 text-red-500" />
        </div>

        {/* Value indicators - adjusted for mobile */}
        <div className="absolute -top-2 sm:-top-3 left-1/4 bg-red-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold transform -rotate-12">
          R$ 119
        </div>
        
        <div className="absolute -bottom-2 sm:-bottom-3 right-1/4 bg-green-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
          R$ 19,97
        </div>
      </div>
    </div>
  );
};

export default ProductImage;