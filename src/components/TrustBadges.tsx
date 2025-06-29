import React from 'react';
import { Shield, CreditCard, Clock, Check } from 'lucide-react';

const TrustBadges: React.FC = () => {
  const badges = [
    { icon: Shield, text: 'Compra Segura com Criptografia' },
    { icon: CreditCard, text: 'PIX, Cartão ou Boleto' },
    { icon: Clock, text: 'Garantia de 7 dias' },
    { icon: Check, text: 'Acesso Imediato' }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 px-2 sm:px-0">
      {badges.map((badge, index) => (
        <div key={index} className="flex flex-col items-center text-center p-2 sm:p-3 bg-white rounded-lg shadow-sm border border-gray-100">
          <badge.icon className="w-5 sm:w-6 h-5 sm:h-6 text-green-600 mb-1 sm:mb-2" />
          <span className="text-xs text-gray-600 font-medium leading-tight">{badge.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;