import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart, ArrowLeft, Plus, Minus } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function ProductDetail() {
  // récupération de l'identifiant du produit dans l'URL
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // recherche du produit correspondant à l'id
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Produit non trouvé</h2>
          <button
            onClick={() => navigate('/')}
            className="text-orange-600 hover:text-orange-700"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${quantity} × ${product.name} ajouté au panier`);
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bouton retour */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Retour
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image */}
            <div className="aspect-square bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Détails */}
            <div className="p-8">
              <div className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm mb-3">
                {product.category}
              </div>
              
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              
              <div className="text-3xl font-bold text-orange-600 mb-6">
                {product.price.toFixed(2)} €
              </div>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Nombre en stock */}
              <div className="mb-6">
                {product.stock > 0 ? (
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 font-medium">
                      {product.stock} articles en stock
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-red-600 font-medium">Rupture de stock</span>
                  </div>
                )}
              </div>

              {/* Quantité choisie */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantité
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    disabled={quantity >= product.stock}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Ajouté au panier */}
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="w-full bg-orange-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-orange-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="w-5 h-5" />
                {product.stock > 0 ? 'Ajouter au panier' : 'Rupture de stock'}
              </button>

              {/* Caractéristiques du produit */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-lg mb-4">Caractéristiques</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Garantie 2 ans</li>
                  <li>• Livraison gratuite dès 50€</li>
                  <li>• Retour sous 30 jours</li>
                  <li>• Paiement sécurisé</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}