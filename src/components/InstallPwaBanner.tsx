import React from 'react';
import { Smartphone, Download, X } from 'lucide-react';
import { usePwa } from '../context/PwaContext';

export const InstallPwaBanner: React.FC = () => {
  const { isInstallable, isInstalled, promptInstall, isBannerDismissed, dismissBanner } = usePwa();

  if (!isInstallable || isInstalled || isBannerDismissed) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-paoGold-500 via-paoGold-400 to-amber-400 text-paoWine-900 p-3 shadow-md border-b border-paoGold-600 animate-fadeIn">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-paoWine-900 text-paoGold-400 flex items-center justify-center flex-shrink-0 shadow-sm">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wide">
              Instale o App na sua Tela Inicial
            </p>
            <p className="text-[11px] font-medium text-paoWine-950/80">
              Acesso super rápido para fazer seus pedidos no celular!
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={promptInstall}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-paoWine-900 hover:bg-paoWine-800 text-white text-xs font-extrabold transition-transform active:scale-95 shadow-md"
          >
            <Download className="w-3.5 h-3.5 text-paoGold-400" />
            <span>Instalar</span>
          </button>
          
          <button
            onClick={dismissBanner}
            className="p-1 rounded-lg hover:bg-paoWine-900/10 text-paoWine-900 transition-colors"
            aria-label="Fechar aviso"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
