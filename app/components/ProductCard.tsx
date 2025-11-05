import { ShoppingCart, Eye } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  featured?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-4xl text-gray-400">🏥</span>
          </div>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
            <button className="bg-white p-3 rounded-full hover:bg-editorial-accent hover:text-white transition">
              <Eye size={20} />
            </button>
            <button className="bg-white p-3 rounded-full hover:bg-editorial-accent hover:text-white transition">
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>

        {/* Featured badge */}
        {product.featured && (
          <div className="absolute top-4 right-4 bg-editorial-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
            Destacado
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs font-semibold text-editorial-accent uppercase tracking-wider">
            {product.category}
          </span>
        </div>
        <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-editorial-accent transition">
          {product.name}
        </h3>
        <p className="text-editorial-secondary text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-editorial-primary">
              {product.price}
            </span>
          </div>
          <button className="bg-editorial-primary text-white px-4 py-2 rounded-lg hover:bg-editorial-accent transition flex items-center gap-2 text-sm font-medium">
            <ShoppingCart size={16} />
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}
