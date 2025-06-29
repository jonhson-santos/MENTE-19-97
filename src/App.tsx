import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import ProductImage from './components/ProductImage';
import TrustBadges from './components/TrustBadges';
import { BookOpen, Headphones, Monitor, Brain, Smartphone, Calendar, Gift, Star, Zap, Apple as WhatsApp, ArrowRight, Check } from 'lucide-react';

function App() {
  const mainFeatures = [
    { icon: BookOpen, text: 'E-book principal: MENTE MILIONÁRIA EXPRESS', color: 'text-green-600' },
    { icon: BookOpen, text: 'E-book bônus: Destrave sua Mente', color: 'text-blue-600' },
    { icon: Headphones, text: 'Áudio Reprogramação Mental Diária', color: 'text-purple-600' },
    { icon: Monitor, text: 'Mini-aula: "Mentalidade Imbatível"', color: 'text-red-600' },
    { icon: Brain, text: 'PDF: Diário de Transformação (preenchível)', color: 'text-indigo-600' },
    { icon: Smartphone, text: 'Wallpaper Premium de Foco e Riqueza', color: 'text-pink-600' },
    { icon: Calendar, text: 'Planner de Metas – R$10k em 100 dias', color: 'text-orange-600' }
  ];

  const bonusFeatures = [
    'Manual Mental de Alta Performance',
    'Roteiro de Hábitos de Sucesso em 21 Dias',
    'Kit de Frases Poderosas (Instagram + WhatsApp + Notes)',
    'Guia Secreto: Os 10 Passos dos 6 Dígitos',
    'E-book "Como Construir Renda Extra com Conhecimento"',
    'Acesso ao Close Friends com Drops Mentais (7 dias)',
    'PDF: O que 99% das Pessoas Ricas Fazem Antes das 9h'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      {/* Fixed Header with Countdown */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3">
          <div className="flex justify-center">
            <CountdownTimer />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="container mx-auto px-3 sm:px-4 max-w-4xl">
          
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="mb-4 sm:mb-6">
              <span className="text-3xl sm:text-4xl">🏆</span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
              QUEM TEM <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">MENTE FORTE</span>,<br />
              VAI MAIS LONGE.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 font-semibold px-2">
              Domine sua mentalidade, destrave sua vida, multiplique seus resultados.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4 sm:p-6 my-6 sm:my-8 rounded-r-lg mx-2 sm:mx-0">
              <div className="text-base sm:text-lg font-semibold text-green-800 mb-2">🟢 VERSÃO AVANÇADA</div>
              <p className="text-sm sm:text-base text-green-700 leading-relaxed">
                Essa é a versão avançada do nosso pacote de destrave mental.<br />
                <strong>Mais completa. Mais profunda. E com um valor surreal.</strong>
              </p>
              <p className="text-sm sm:text-base text-green-700 mt-3 sm:mt-4 font-medium">
                Você não vai mais só destravar a mente...<br />
                Você vai <strong className="text-green-800">REPROGRAMAR</strong> seu cérebro pra viver no modo <strong className="text-green-800">RICO, DISCIPLINADO e SEM DESCULPAS.</strong>
              </p>
            </div>
          </div>

          {/* Product Showcase */}
          <div className="mb-12 sm:mb-16">
            <ProductImage />
            
            <div className="text-center mt-6 sm:mt-8 px-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">🎁 MENTE MILIONÁRIA EXPRESS</h2>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-4">
                <div className="text-gray-500 text-center sm:text-left">
                  <span className="text-xs sm:text-sm">💰 Valor de mercado:</span>
                  <span className="text-xl sm:text-2xl font-bold line-through ml-2">R$ 119</span>
                </div>
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-gray-600 mb-1">💸 Hoje por apenas:</div>
                  <div className="text-3xl sm:text-4xl font-bold text-green-600">R$ 19,97</div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600">📲 <strong>Entrega:</strong> Digital | Acesso imediato via e-mail</p>
            </div>
          </div>

          {/* Main Features */}
          <div className="mb-12 sm:mb-16 px-2 sm:px-0">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">✅ O QUE VOCÊ RECEBE:</h3>
            <div className="grid gap-3 sm:gap-4">
              {mainFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <feature.icon className={`w-6 sm:w-8 h-6 sm:h-8 ${feature.color} flex-shrink-0`} />
                  <span className="text-sm sm:text-base text-gray-800 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bonus Section */}
          <div className="mb-12 sm:mb-16 px-2 sm:px-0">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 sm:p-6 rounded-xl shadow-xl">
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-center">🔥 BÔNUS EXCLUSIVOS PARA QUEM GARANTIR HOJE:</h3>
              <div className="grid gap-2 sm:gap-3">
                {bonusFeatures.map((bonus, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-white text-red-500 rounded-full p-1 flex-shrink-0 mt-0.5">
                      <span className="text-xs sm:text-sm font-bold px-1.5 sm:px-2">{index + 1}</span>
                    </div>
                    <span className="text-sm sm:text-base font-medium leading-relaxed">{bonus}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Extra Benefit */}
          <div className="mb-12 sm:mb-16 px-2 sm:px-0">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-4">💥 BENEFÍCIO EXTRA:</h3>
              <div className="flex items-start gap-3 mb-4">
                <WhatsApp className="w-6 sm:w-8 h-6 sm:h-8 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base text-blue-800 font-semibold leading-relaxed">Suporte direto no WhatsApp com drops motivacionais diários durante 7 dias.</span>
              </div>
              <p className="text-xs sm:text-sm text-blue-700 font-medium">(Só isso já valeria R$97 sozinho)</p>
            </div>
          </div>

          {/* Urgency Copy */}
          <div className="mb-8 sm:mb-12 px-2 sm:px-0">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6 sm:p-8 rounded-xl">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-center text-red-400">⚠️ ATENÇÃO:</h3>
              <p className="text-center text-base sm:text-lg leading-relaxed mb-4">
                Se você deixar pra depois, vai continuar rodando em círculos.
              </p>
              <p className="text-center text-base sm:text-lg leading-relaxed mb-4">
                Essa chance é <strong className="text-yellow-400">exclusiva</strong> e não estará disponível em outro lugar.
              </p>
              <p className="text-center text-base sm:text-lg leading-relaxed">
                Você pode continuar travado…<br />
                Ou pode pagar menos que um lanche e <strong className="text-green-400">mudar o jogo AGORA.</strong>
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-8 sm:mb-12 px-2 sm:px-0">
            <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold text-base sm:text-xl px-6 sm:px-12 py-4 sm:py-6 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-3xl w-full sm:w-auto">
              <span className="flex items-center justify-center gap-2 sm:gap-3">
                <span className="text-center leading-tight">EU QUERO ENTRAR NESSE MOVIMENTO</span>
                <span className="text-xl sm:text-2xl">🔥🧠</span>
                <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-1 transition-transform hidden sm:inline" />
              </span>
            </button>
            <p className="text-gray-600 mt-4 text-xs sm:text-sm">🛡️ Compra 100% Segura | Acesso imediato após o pagamento</p>
            
            <TrustBadges />
          </div>

          {/* Final Black Copy */}
          <div className="bg-black text-white p-6 sm:p-8 rounded-xl mx-2 sm:mx-0">
            <h3 className="text-center text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-red-400">🧨 ÚLTIMA CHANCE</h3>
            <p className="text-center text-sm sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Se sua mente estiver no modo travado, você pode ter todas as oportunidades do mundo que ainda assim vai desperdiçar.
            </p>
            <p className="text-center text-sm sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Agora você tem duas opções:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-4 sm:mb-6">
              <div className="text-center">
                <div className="text-red-400 font-bold text-sm sm:text-base">❌ Ignorar isso...</div>
              </div>
              <div className="text-center">
                <div className="text-green-400 font-bold text-sm sm:text-base leading-relaxed">✅ Investir o preço de uma pizza para reprogramar sua cabeça pra nunca mais se sabotar.</div>
              </div>
            </div>
            <p className="text-center text-lg sm:text-xl font-bold text-yellow-400">
              A escolha é sua.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;