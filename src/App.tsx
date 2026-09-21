import { useState, useMemo } from 'react';
import { CATEGORIES, PRODUCTS } from './data/menuData';
import type { CategoryId, Product } from './types';

import { SplashScreen } from './components/SplashScreen';
import { Header } from './components/Header';
import { InstallPwaBanner } from './components/InstallPwaBanner';
import { PromoBanner } from './components/PromoBanner';
import { SearchBar } from './components/SearchBar';
import { CategoryNav } from './components/CategoryNav';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartFloatingButton } from './components/CartFloatingButton';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { HumanitarianFooter } from './components/HumanitarianFooter';

import { CartProvider } from './context/CartContext';
import { PwaProvider } from './context/PwaContext';
import { UtensilsCrossed } from 'lucide-react';

function AppContent() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeCategory, setActiveCategory] = useState<CategoryId>('executivos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products by category or search query
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;

    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.code && p.code.toLowerCase().includes(q)) ||
        (p.tags && p.tags.some(t => t.toLowerCase().includes(q)))
      );
    } else {
      result = result.filter(p => p.categoryId === activeCategory);
    }

    return result;
  }, [activeCategory, searchQuery]);

  const activeCategoryObject = CATEGORIES.find(c => c.id === activeCategory);

  return (
    <>
      {/* 2-Second Animated PWA Splash Screen */}
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      <div className="min-h-screen flex flex-col bg-paoSand-100">
        
        {/* Header with Restaurant Info */}
        <Header />

        {/* PWA Install Banner */}
        <InstallPwaBanner />

        {/* Main Content Area */}
        <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-2 space-y-4">
          
          {/* Search Bar */}
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            resultCount={searchQuery ? filteredProducts.length : undefined}
          />

          {/* Promotional Banners */}
          {!searchQuery && (
            <PromoBanner onSelectCategory={(catId) => {
              setActiveCategory(catId);
              setSearchQuery('');
            }} />
          )}

          {/* Horizontal Category Scroll */}
          <CategoryNav
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onSelectCategory={(catId) => {
              setActiveCategory(catId);
              setSearchQuery('');
            }}
          />

          {/* Category Description / Search Header */}
          <div className="pt-2">
            {!searchQuery && activeCategoryObject && (
              <div className="mb-4">
                <h2 className="font-serif text-2xl font-bold text-paoWine-900">
                  {activeCategoryObject.name}
                </h2>
                {activeCategoryObject.description && (
                  <p className="text-xs text-gray-600 mt-0.5">
                    {activeCategoryObject.description}
                  </p>
                )}
              </div>
            )}

            {searchQuery && (
              <div className="mb-4">
                <h2 className="font-serif text-xl font-bold text-paoWine-900">
                  Resultados da Busca
                </h2>
                <p className="text-xs text-gray-600">
                  Exibindo itens correspondentes a "{searchQuery}"
                </p>
              </div>
            )}
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenModal={(prod) => setSelectedProduct(prod)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-8 text-center space-y-3 border border-paoSand-300 my-8 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-paoSand-200 text-paoWine-700 flex items-center justify-center mx-auto">
                <UtensilsCrossed className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-lg font-bold text-paoWine-900">
                Nenhum prato encontrado
              </h3>
              <p className="text-xs text-gray-600 max-w-xs mx-auto">
                Tente buscar por outros termos como "831", "Pizza", "Filé", "Tapioca" ou navegue pelas categorias acima.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 rounded-xl bg-paoWine-800 text-paoGold-300 font-bold text-xs"
              >
                Limpar Busca
              </button>
            </div>
          )}

        </main>

        {/* Humanitarian Cause Footer */}
        <HumanitarianFooter />

        {/* Product Interactive Modal */}
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />

        {/* Floating Cart Mobile Button */}
        <CartFloatingButton />

        {/* Cart Slide-Over Drawer */}
        <CartDrawer />

        {/* Customer Checkout Modal */}
        <CheckoutModal />

      </div>
    </>
  );
}

export default function App() {
  return (
    <PwaProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </PwaProvider>
  );
}
