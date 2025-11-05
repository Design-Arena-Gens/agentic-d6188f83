'use client';

import { useState } from 'react';
import { Search, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import ProductCard from './components/ProductCard';
import { products, categories } from './data/products';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8">
              <h1 className="font-serif text-3xl font-bold tracking-tight">
                PROMECHI
              </h1>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-sm font-medium hover:text-editorial-accent transition">Catálogo</a>
                <a href="#" className="text-sm font-medium hover:text-editorial-accent transition">Sobre Nosotros</a>
                <a href="#" className="text-sm font-medium hover:text-editorial-accent transition">Contacto</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition">
                <ShoppingCart size={20} />
              </button>
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 px-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-sm font-medium hover:text-editorial-accent transition">Catálogo</a>
              <a href="#" className="text-sm font-medium hover:text-editorial-accent transition">Sobre Nosotros</a>
              <a href="#" className="text-sm font-medium hover:text-editorial-accent transition">Contacto</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-editorial-light py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-serif text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Equipos Médicos de Alta Calidad
            </h2>
            <p className="text-lg lg:text-xl text-editorial-secondary mb-8">
              Instrumentos y equipamiento profesional para el sector salud.
              Soluciones integrales para hospitales, clínicas y consultorios médicos.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-gray-200 bg-white sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-editorial-accent focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === 'all'
                    ? 'bg-editorial-primary text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Todos
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedCategory === category.id
                      ? 'bg-editorial-primary text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h3 className="text-2xl font-serif font-bold mb-2">
              {selectedCategory === 'all'
                ? 'Todos los Productos'
                : categories.find(c => c.id === selectedCategory)?.name}
            </h3>
            <p className="text-editorial-secondary">
              {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} disponible{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-editorial-secondary">
                No se encontraron productos que coincidan con tu búsqueda
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-editorial-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">PROMECHI</h3>
              <p className="text-gray-300">
                Proveedor líder de equipos médicos y hospitalarios en Chile
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition">Catálogo</a></li>
                <li><a href="#" className="hover:text-white transition">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Email: info@promechi.com</li>
                <li>Teléfono: +56 2 XXXX XXXX</li>
                <li>Santiago, Chile</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Promechi. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
