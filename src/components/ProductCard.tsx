import { Link } from 'react-router';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} ajouté au panier`);
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="text-sm text-orange-600 mb-1">{product.category}</div>
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-gray-900">{product.price.toFixed(2)} €</span>
              <div className="text-xs text-gray-500 mt-1">
                {product.stock > 0 ? `${product.stock} en stock` : 'Rupture de stock'}
              </div>
            </div>
            
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="bg-orange-600 text-white p-3 rounded-lg hover:bg-orange-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}