import React from 'react';
import { Heart, Award, MapPin, Phone, Globe } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const HumanitarianFooter: React.FC = () => {
  return (
    <footer className="mt-12 bg-paoWine-900 text-white border-t border-paoGold-500/40 pt-10 pb-20 sm:pb-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Top Brand & Humanitarian Message */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-paoGold-500/10 border border-paoGold-500/40 text-paoGold-400 text-xs font-bold">
            <Heart className="w-3.5 h-3.5 text-paoGold-400 fill-paoGold-400" />
            <span>Responsabilidade Socioambiental</span>
          </div>

          <h2 className="font-serif text-2xl font-bold text-paoGold-300">
            {RESTAURANT_INFO.name}
          </h2>

          <blockquote className="text-sm text-paoSand-200 leading-relaxed italic bg-paoWine-950/60 p-5 rounded-3xl border border-paoGold-500/20 shadow-inner">
            "{RESTAURANT_INFO.socialCause}"
          </blockquote>
        </div>

        {/* Award Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          <div className="bg-paoWine-800/80 p-4 rounded-2xl border border-paoGold-500/30 flex items-center space-x-3 text-left">
            <Award className="w-8 h-8 text-paoGold-400 flex-shrink-0" />
            <div>
              <p className="text-xs font-extrabold text-paoGold-300">V Prêmio Cidadania</p>
              <p className="text-[11px] text-paoSand-300">Herbert de Souza - "Betinho"</p>
            </div>
          </div>

          <div className="bg-paoWine-800/80 p-4 rounded-2xl border border-paoGold-500/30 flex items-center space-x-3 text-left">
            <Award className="w-8 h-8 text-paoGold-400 flex-shrink-0" />
            <div>
              <p className="text-xs font-extrabold text-paoGold-300">Prêmio Valores do Brasil</p>
              <p className="text-[11px] text-paoSand-300">Reconhecimento 2010 & 2014</p>
            </div>
          </div>
        </div>

        {/* Location & Contact Info */}
        <div className="pt-6 border-t border-paoWine-800 flex flex-col sm:flex-row items-center justify-between text-xs text-paoSand-300 gap-3">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-paoGold-400 flex-shrink-0" />
            <span>{RESTAURANT_INFO.address}, {RESTAURANT_INFO.city}</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone className="w-3.5 h-3.5 text-paoGold-400 mr-1" />
              {RESTAURANT_INFO.phone}
            </span>
            <a 
              href="http://www.opobrededeus.blogspot.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-paoGold-400 hover:underline"
            >
              <Globe className="w-3.5 h-3.5 mr-1" />
              opobrededeus.blogspot.com
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-[10px] text-paoSand-400 pt-4">
          <p>© {new Date().getFullYear()} Restaurante Pão da Vida • Viçosa do Ceará. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
};
